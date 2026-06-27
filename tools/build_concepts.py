#!/usr/bin/env python3
"""Build: erzeugt data/concepts.js aus dem Blatt 'Glossar & Konzepte' der Katalog-XLSX.

Erster Baustein der Tabelle->Daten-Pipeline. Liest das Glossar-/Konzept-Blatt und
schreibt window.CONCEPTS (Schluessel = Begriff-ID).

Aufruf:  python3 tools/build_concepts.py [pfad/zur/Katalog.xlsx]
Standardpfad: ~/Downloads/Methoden_Katalog_v3.xlsx

Hinweis: Texte werden derzeit unveraendert uebernommen. Eine spaetere Stufe kann
hier eine leichte Markdown->HTML-Konvertierung (**fett** -> <b>) einhaengen.
"""
import json, sys, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_XLSX = Path.home() / "Downloads" / "Methoden_Katalog_v3.xlsx"
SHEET = "Glossar & Konzepte"
HEADER = ("/* Datengetrieben – AUTOMATISCH erzeugt aus dem Katalog-Blatt "
          "'Glossar & Konzepte'.\n   Nicht von Hand editieren. Struktur: data/schema.md */\n")


def split_list(val):
    if not val:
        return []
    parts = re.split(r"[;,]", str(val))
    return [p.strip() for p in parts if p.strip() and p.strip() != "—"]


def main():
    import openpyxl
    xlsx = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_XLSX
    if not xlsx.exists():
        sys.exit(f"Quelldatei nicht gefunden: {xlsx}")
    wb = openpyxl.load_workbook(xlsx, data_only=True)
    if SHEET not in wb.sheetnames:
        sys.exit(f"Blatt '{SHEET}' fehlt in {xlsx.name}")
    ws = wb[SHEET]
    rows = list(ws.iter_rows(values_only=True))
    hdr = [str(h).strip() if h else "" for h in rows[0]]

    def col(name):
        nl = name.lower()
        for i, h in enumerate(hdr):       # exakte Übereinstimmung zuerst
            if h.lower() == nl:
                return i
        for i, h in enumerate(hdr):       # sonst Teilstring
            if nl in h.lower():
                return i
        raise KeyError(f"Spalte '{name}' nicht gefunden in {hdr}")
    c = dict(id=col("Begriff-ID"), term=col("Begriff"), aliases=col("Synonyme"),
             cat=col("Kategorie"), short=col("Kurzdefinition"), long=col("Erklärung"),
             rel=col("Verknüpfte"), status=col("Status"))

    concepts = {}
    for r in rows[1:]:
        cid = r[c["id"]]
        if not cid:
            continue
        cid = str(cid).strip()
        entry = {
            "term": (r[c["term"]] or "").strip(),
            "aliases": split_list(r[c["aliases"]]),
            "category": (r[c["cat"]] or "").strip(),
            "short": (r[c["short"]] or "").strip(),
            "long": (r[c["long"]] or "").strip(),
            "related": split_list(r[c["rel"]]),
            "status": (r[c["status"]] or "").strip(),
        }
        concepts[cid] = entry

    out = ROOT / "data" / "concepts.js"
    out.write_text(HEADER + "window.CONCEPTS = " +
                   json.dumps(concepts, ensure_ascii=False, indent=2) + ";\n",
                   encoding="utf-8")
    print(f"OK: {len(concepts)} Konzepte -> {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
