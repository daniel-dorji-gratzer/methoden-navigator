#!/usr/bin/env python3
"""Einmalige Migration: Inhaltsdaten aus der alten Inline-HTML auslagern.

Liest die frueheren Inline-Objekte `const TREES`, `const RESULTS`, `const HOW`
aus einer HTML-Datei und schreibt daraus die Datendateien:
    data/trees.js     ->  window.TREES   (1:1)
    data/methods.js   ->  window.METHODS (RESULTS + HOW pro Methode vereint)

Dieses Skript wurde fuer die initiale Migration verwendet und dient der
Reproduzierbarkeit. Im laufenden Betrieb sind data/*.js die Quelle; spaeter
ersetzt ein eigener Build (XLSX -> data/methods.js) diesen Schritt.

Abhaengigkeit: macOS `osascript` (JavaScriptCore) zum sicheren Auswerten der
JS-Objektliterale (enthalten HTML/Sonderzeichen, daher kein Regex-Parsing).

Aufruf:  python3 tools/migrate_extract.py <quelle.html>
"""
import json, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HEADER = ("/* Datengetrieben – AUTOMATISCH erzeugt, nicht von Hand editieren.\n"
          "   Quelle: tools/migrate_extract.py. Struktur: data/schema.md */\n")


def slice_object(lines, name):
    """Schneidet 'const <name> = { ... };' heraus (Top-Level-Ende = Zeile '};')."""
    start = next(i for i, l in enumerate(lines) if l.strip().startswith(f"const {name}"))
    end = next(i for i in range(start + 1, len(lines)) if lines[i].strip() == "};")
    return "\n".join(lines[start:end + 1])


def js_eval(code):
    r = subprocess.run(["osascript", "-l", "JavaScript", "-e", code],
                       capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit(f"osascript-Fehler: {r.stderr.strip()}")
    return r.stdout


def main():
    sys.exit("ARCHIVIERT: Dieses Skript diente der einmaligen Migration (Stufe 1).\n"
             "data/trees.js wird inzwischen von Hand gepflegt; ein erneuter Lauf wuerde\n"
             "alle seither ergaenzten Baeume (Einstichprobe, Mediation, Survival,\n"
             "Mehrebenen) ueberschreiben.")
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    lines = Path(sys.argv[1]).read_text(encoding="utf-8").split("\n")
    blocks = "\n".join(slice_object(lines, n) for n in ("TREES", "RESULTS", "HOW"))
    data = json.loads(js_eval(blocks + "\nJSON.stringify({trees:TREES,results:RESULTS,how:HOW});"))

    results, how = data["results"], data["how"]
    missing = set(results) ^ set(how)
    if missing:
        sys.exit(f"RESULTS/HOW-Schluessel weichen ab: {sorted(missing)}")
    methods = {k: {**v, "how": how[k]} for k, v in results.items()}

    (ROOT / "data").mkdir(exist_ok=True)
    (ROOT / "data" / "trees.js").write_text(
        HEADER + "window.TREES = " + json.dumps(data["trees"], ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8")
    (ROOT / "data" / "methods.js").write_text(
        HEADER + "window.METHODS = " + json.dumps(methods, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8")
    print(f"OK: {len(data['trees'])} Baeume, {len(methods)} Methoden geschrieben.")


if __name__ == "__main__":
    main()
