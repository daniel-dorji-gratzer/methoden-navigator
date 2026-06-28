#!/usr/bin/env python3
"""Build: erzeugt data/methods.js aus dem 'Methoden'-Blatt der Katalog-XLSX.

Teil der Tabelle->Daten-Pipeline. Uebernimmt Methoden mit Status in
BUILD_STATUS und wandelt die leichte Markdown-Formatierung der Texte in HTML:
  - Sonderzeichen werden HTML-sicher maskiert (& < >),
  - **fett** wird zu <b>fett</b>.

Aufruf:  python3 tools/build_methods.py [pfad/zur/Katalog.xlsx]
Standardpfad: ~/Downloads/Methoden_Katalog_v3.xlsx
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_XLSX = Path.home() / "Downloads" / "Methoden_Katalog_v3.xlsx"
SHEET = "Methoden"
BUILD_STATUS = {"Implementiert", "Geplant"}
HEADER = ("/* Datengetrieben – AUTOMATISCH erzeugt aus dem Katalog-Blatt 'Methoden'.\n"
          "   Nicht von Hand editieren. Struktur: data/schema.md */\n")


def md_to_html(s):
    """Leichtes Markdown -> HTML: erst maskieren, dann **fett** -> <b>."""
    s = (s or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", s)


def main():
    import openpyxl
    xlsx = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_XLSX
    if not xlsx.exists():
        sys.exit(f"Quelldatei nicht gefunden: {xlsx}")
    ws = openpyxl.load_workbook(xlsx, data_only=True)[SHEET]
    rows = list(ws.iter_rows(values_only=True))
    hdr = [str(h).strip() if h else "" for h in rows[0]]

    def col(name):
        nl = name.lower()
        for i, h in enumerate(hdr):
            if h.lower() == nl:
                return i
        for i, h in enumerate(hdr):
            if nl in h.lower():
                return i
        raise KeyError(f"Spalte '{name}' nicht gefunden")

    c = dict(id=col("ID"), name=col("Methodenname"), status=col("Status"),
             why=col("Rationale"), how=col("HOW"), check=col("Abgrenzung"),
             warn=col("Warnflag"))

    methods = {}
    for r in rows[1:]:
        mid = r[c["id"]]
        if not mid or str(r[c["status"]]).strip() not in BUILD_STATUS:
            continue
        entry = {
            "name": (r[c["name"]] or "").strip(),
            "why": md_to_html((r[c["why"]] or "").strip()),
            "check": md_to_html((r[c["check"]] or "").strip()),
            "how": md_to_html((r[c["how"]] or "").strip()),
        }
        if str(r[c["warn"]] or "").strip().lower() == "ja":
            entry["warn"] = True
        methods[str(mid).strip()] = entry

    out = ROOT / "data" / "methods.js"
    out.write_text(HEADER + "window.METHODS = " +
                   json.dumps(methods, ensure_ascii=False, indent=2) + ";\n",
                   encoding="utf-8")
    print(f"OK: {len(methods)} Methoden -> {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
