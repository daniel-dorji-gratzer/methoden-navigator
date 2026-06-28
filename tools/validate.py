#!/usr/bin/env python3
"""Validierungs-Gate fuer die Inhaltsdaten des Methoden-Navigators.

Prueft die ausgelagerten Datendateien data/trees.js und data/methods.js auf
Integritaet. Bei jedem Fehler Exit-Code 1 (zum Einhaengen in einen Build/Commit).

Pruefungen:
  (a) Jedes Verzweigungsziel, das eine Methode ist (ID beginnt mit "r_" oder
      existiert in METHODS), hat einen Eintrag in methods.js.
  (b) Jedes Ziel, das KEINE Methode ist, existiert als Knoten im selben Baum.
  (c) Keine verwaisten Methoden (jede Methode wird von mindestens einem Baum
      referenziert).
  (d) Pflichtfelder je Methode vorhanden und nicht leer: name, why, check, how.
  (e) Der Startknoten jedes Baums existiert.

Reine Standardbibliothek, plattformunabhaengig. Aufruf: python3 tools/validate.py
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REQUIRED_FIELDS = ("name", "why", "check", "how")
CONCEPT_REQUIRED = ("term", "short", "long")
CONCEPT_CATEGORIES = {"Grundbegriff", "Voraussetzung", "Datenstruktur", "Konzept"}


def load_global(path: Path, varname: str):
    """Liest 'window.<varname> = { ... };' aus einer .js-Datei als Python-Objekt."""
    text = path.read_text(encoding="utf-8")
    marker = f"window.{varname}"
    i = text.index(marker)
    eq = text.index("=", i) + 1
    payload = text[eq:].strip()
    if payload.endswith(";"):
        payload = payload[:-1]
    return json.loads(payload)


def main() -> int:
    trees = load_global(ROOT / "data" / "trees.js", "TREES")
    methods = load_global(ROOT / "data" / "methods.js", "METHODS")

    errors, warnings = [], []
    referenced = set()

    def is_method(go: str) -> bool:
        return go.startswith("r_") or go in methods

    for root, tree in trees.items():
        nodes = tree.get("nodes", {})
        start = tree.get("start")
        if start not in nodes:
            errors.append(f"[{root}] Startknoten '{start}' fehlt in nodes.")
        for node_id, node in nodes.items():
            for opt in node.get("opts", []):
                go = opt.get("go")
                if go is None:
                    errors.append(f"[{root}/{node_id}] Option ohne 'go'.")
                    continue
                if is_method(go):
                    referenced.add(go)
                    if go not in methods:
                        errors.append(
                            f"[{root}/{node_id}] verweist auf Methode '{go}', "
                            f"die in methods.js fehlt.")
                elif go not in nodes:
                    errors.append(
                        f"[{root}/{node_id}] verweist auf Knoten '{go}', "
                        f"der im Baum '{root}' fehlt.")

    # (c) verwaiste Methoden
    for key in methods:
        if key not in referenced:
            warnings.append(f"Methode '{key}' wird von keinem Baum referenziert (verwaist).")

    # (d) Pflichtfelder
    for key, m in methods.items():
        for f in REQUIRED_FIELDS:
            if not str(m.get(f, "")).strip():
                errors.append(f"Methode '{key}': Pflichtfeld '{f}' fehlt oder ist leer.")
        if "warn" in m and not isinstance(m["warn"], bool):
            warnings.append(f"Methode '{key}': 'warn' sollte boolesch sein.")

    # (f) Konzepte/Glossar (optional – nur falls data/concepts.js existiert)
    concepts_path = ROOT / "data" / "concepts.js"
    n_concepts = 0
    if concepts_path.exists():
        concepts = load_global(concepts_path, "CONCEPTS")
        n_concepts = len(concepts)
        alias_seen = {}
        for key, c in concepts.items():
            for f in CONCEPT_REQUIRED:
                if not str(c.get(f, "")).strip():
                    errors.append(f"Konzept '{key}': Pflichtfeld '{f}' fehlt oder ist leer.")
            if c.get("category") and c["category"] not in CONCEPT_CATEGORIES:
                warnings.append(f"Konzept '{key}': unbekannte Kategorie '{c['category']}'.")
            aliases = c.get("aliases", [])
            if not isinstance(aliases, list):
                errors.append(f"Konzept '{key}': 'aliases' muss eine Liste sein.")
                aliases = []
            # gleicher Alias in mehreren Konzepten -> mehrdeutige Auto-Markierung
            for a in [c.get("term", "")] + list(aliases):
                a = str(a).strip().lower()
                if not a:
                    continue
                if a in alias_seen and alias_seen[a] != key:
                    warnings.append(
                        f"Begriff/Alias '{a}' kommt in '{alias_seen[a]}' und '{key}' vor "
                        f"(mehrdeutig für den Erklärmodus).")
                else:
                    alias_seen[a] = key

    # (g) Hypothesentypen-Manifest (optional – falls data/roots.js existiert)
    roots_path = ROOT / "data" / "roots.js"
    n_roots = 0
    if roots_path.exists():
        roots = load_global(roots_path, "ROOTS")
        n_roots = len(roots)
        manifest_ids = [r.get("id") for r in roots]
        for rid in manifest_ids:
            if rid not in trees:
                errors.append(f"Manifest: Typ '{rid}' hat keinen Baum in trees.js.")
            for f in ("id", "title", "short", "desc", "icon"):
                if not str(next((r for r in roots if r.get('id') == rid), {}).get(f, "")).strip():
                    errors.append(f"Manifest '{rid}': Feld '{f}' fehlt oder ist leer.")
        for tid in trees:
            if tid not in manifest_ids:
                warnings.append(f"Baum '{tid}' fehlt im Manifest (kein Einstieg in der App).")

    print(f"Baeume: {len(trees)} | Methoden: {len(methods)} | "
          f"referenzierte Methoden: {len(referenced)} | Konzepte: {n_concepts} | "
          f"Hypothesentypen: {n_roots}")
    for w in warnings:
        print(f"  WARN  {w}")
    for e in errors:
        print(f"  FEHLER {e}")

    if errors:
        print(f"\nFEHLGESCHLAGEN: {len(errors)} Fehler, {len(warnings)} Warnungen.")
        return 1
    print(f"\nOK: keine Fehler ({len(warnings)} Warnungen).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
