# Methoden-Navigator

Ein interaktiver Entscheidungsbaum zur Auswahl des passenden statistischen Verfahrens in der quantitativen psychologischen Forschung.

**➡️ App direkt im Browser nutzen:** https://daniel-dorji-gratzer.github.io/methoden-navigator/

## Was macht die App?

Beantworte Fragen Schritt für Schritt – der Entscheidungspfad baut sich als interaktive Karte mit auf. Am Ziel steht das passende Verfahren samt Begründung. Kein Auswendiglernen, sondern Entscheiden.

Drei Hypothesenarten werden abgedeckt:

- **Unterschiedshypothesen** – z. B. t-Tests, ANOVA, Mann-Whitney-U, Kruskal-Wallis, Wilcoxon, Friedman, χ²-Varianten
- **Zusammenhangshypothesen** – z. B. Pearson, Spearman, Regression (linear, multipel, logistisch, ordinal)
- **Moderationshypothesen** – Moderationsanalysen je nach Skalenniveau

Die Fragen folgen den klassischen Entscheidungskriterien: Stichprobenart (unabhängig/abhängig), Anzahl der Gruppen bzw. Messungen, Skalenniveau der Variablen und Verfahrensvoraussetzungen (Normalverteilung, Varianzhomogenität, Sphärizität, Ausreißer).

## Bedienung

- **Desktop:** Karte links als zoom- und verschiebbare Übersicht (wie eine Landkarte), Fragepanel schwebt darüber. Steuerung unten rechts: `+` / `−` zoomen, `⊹` zentriert auf den aktuellen Pfad.
- **Mobil:** kompakte Schritt-für-Schritt-Ansicht.
- Jeder Schritt im Pfad ist klickbar – so kann man jederzeit zurückspringen und einen anderen Ast erkunden.

## Technik

[index.html](index.html) ohne Build-Schritt und **ohne externe Abhängigkeiten**. Die Schriften (Fraunces, Spline Sans, Spline Sans Mono) werden selbst gehostet im Ordner [fonts/](fonts/) ausgeliefert – es gibt **keine Anfragen an Google-Server**, daher keine Übertragung von Besucher-IP-Adressen an Dritte (DSGVO-konform).

Die Schriften stammen von Google Fonts und stehen unter der [SIL Open Font License 1.1](https://openfontlicense.org/).

## Inhalte pflegen (datengetrieben)

Inhalt und Code sind getrennt. Die App-Logik steckt in [index.html](index.html); die **Inhalte** liegen in [data/](data/):

- [`data/methods.js`](data/methods.js) – die Verfahren (`window.METHODS`): pro Methode `name`, `why`, `check`, `how`, optional `warn`.
- [`data/trees.js`](data/trees.js) – die Entscheidungsbäume (`window.TREES`): Knoten, Fragen, Optionen und Sprungziele.
- [`data/concepts.js`](data/concepts.js) – Glossar/Konzepte (`window.CONCEPTS`): Begriff, Aliases, Kurz-/Langtext (Erklärmodus).
- [`data/roots.js`](data/roots.js) – Hypothesentypen-Manifest (`window.ROOTS`): Reihenfolge und Texte der Einstiege; daraus werden Welcome-Karten und Umschalter generiert. Jede `id` braucht einen Baum in `trees.js`.
- [`data/schema.md`](data/schema.md) – die genaue Struktur aller Dateien.

Die Dateien sind JavaScript, dessen Inhalt nach dem `=` reines JSON ist. Sie werden per `<script src>` geladen – das funktioniert auf GitHub Pages **und** beim direkten Öffnen von `index.html` über `file://` (kein Server nötig). Die Verbindung zwischen Baum und Methode läuft über die Methoden-ID (z. B. `r_ttest_zsf`).

> Die Datendateien sind **maschinell erzeugt** und sollten nicht von Hand editiert werden, solange der Methoden-Katalog (Tabelle) die Quelle der Wahrheit ist. Künftig erzeugt ein Build die `data/`-Dateien aus der Tabelle (nächster Ausbauschritt).

### Vor dem Veröffentlichen prüfen

```bash
python3 tools/validate.py
```

prüft, dass alle Baum-Sprungziele auflösen, keine Methode verwaist ist und alle Pflichtfelder gesetzt sind (Exit-Code ≠ 0 bei Fehlern – als Build-/Commit-Gate geeignet).

### Lokal testen

Einfach `index.html` im Browser öffnen genügt. Falls ein Browser `file://` restriktiv behandelt, alternativ einen lokalen Server starten:

```bash
python3 -m http.server 8000   # dann http://localhost:8000/ öffnen
```

### Werkzeuge

- [`tools/validate.py`](tools/validate.py) – Integritäts-Gate (reine Standardbibliothek).
- [`tools/build_methods.py`](tools/build_methods.py) – erzeugt `data/methods.js` aus dem Katalog-Blatt „Methoden" (Status „Implementiert"/„Geplant"); wandelt `**fett**` → `<b>` und maskiert Sonderzeichen. Benötigt `openpyxl`.
- [`tools/build_concepts.py`](tools/build_concepts.py) – erzeugt `data/concepts.js` aus dem Katalog-Blatt „Glossar & Konzepte" (benötigt `openpyxl`). Bausteine der Tabelle→Daten-Pipeline.
- [`tools/migrate_extract.py`](tools/migrate_extract.py) – einmalige Migration der früheren Inline-Daten in die `data/`-Dateien (Reproduzierbarkeit; benötigt macOS `osascript`).

## Kontext

Entstanden als Lernhilfe zur Vorlesung *Forschungsmethoden* (MSc Psychologie). Ohne Gewähr – im Zweifel gilt das Vorlesungsskript.
