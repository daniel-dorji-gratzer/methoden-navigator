# Datenschema – Methoden-Navigator

Die Inhalte der App liegen getrennt vom Code in `data/`. Beide Dateien sind
JavaScript, das ein globales Objekt setzt (`window.TREES` bzw. `window.METHODS`);
der Inhalt nach dem `=` ist reines JSON. So bleibt die App ohne Server und auch
direkt über `file://` lauffähig, und die Daten lassen sich später aus einer
Tabelle generieren.

> **Nicht von Hand editieren**, solange die Tabelle (`Methoden_Katalog`) die
> Quelle der Wahrheit ist – Änderungen dort vornehmen und neu generieren.

## `data/methods.js` — `window.METHODS`

Objekt `{ "<methoden-id>": { …Felder… }, … }`. Die ID beginnt konventionsgemäß
mit `r_` (z. B. `r_ttest_zsf`) und ist der Verbindungsschlüssel zu den Bäumen.

| Feld    | Typ      | Pflicht | Bedeutung |
|---------|----------|---------|-----------|
| `name`  | string   | ja      | Anzeigename des Verfahrens. |
| `why`   | string   | ja      | Begründung „warum dieses Verfahren hier“. HTML erlaubt (z. B. `<b>`). |
| `check` | string   | ja      | Abgrenzung / Selbstcheck zu Nachbarverfahren. HTML erlaubt. |
| `how`   | string   | ja      | Schritt-für-Schritt-Erklärung. HTML erlaubt. |
| `warn`  | boolean  | nein    | `true` markiert robuste/heikle Verfahren (orange Hervorhebung). Bei `false`/Robustheit unkritisch weglassen. |

## `data/trees.js` — `window.TREES`

Objekt `{ "<hypothesentyp>": { start, nodes }, … }`. Aktuelle Typen:
`unterschied`, `zusammenhang`, `moderation`.

- `start` (string): ID des Wurzelknotens.
- `nodes` (object): `{ "<knoten-id>": { …Knoten… } }`.

### Knoten

| Feld   | Typ    | Pflicht | Bedeutung |
|--------|--------|---------|-----------|
| `tag`  | string | ja      | Kurzlabel (z. B. „Skalenniveau der AV“). |
| `q`    | string | ja      | Frage an die Nutzer:in. |
| `hint` | string | nein    | Erläuternder Hinweis (kann leer sein). |
| `opts` | array  | ja      | Antwortoptionen (siehe unten). |

### Option (`opts[]`)

| Feld    | Typ    | Pflicht | Bedeutung |
|---------|--------|---------|-----------|
| `label` | string | ja      | Beschriftung der Antwort. |
| `crumb` | string | ja      | Kurztext für die Pfad-/Breadcrumb-Anzeige. |
| `go`    | string | ja      | Sprungziel: **Methoden-ID** (beginnt mit `r_` oder existiert in `METHODS`) **oder** ID eines weiteren Knotens im selben Baum. |

## Integritätsregeln (siehe `tools/validate.py`)

1. Jedes `go`, das eine Methode ist, hat einen Eintrag in `methods.js`.
2. Jedes `go`, das keine Methode ist, existiert als Knoten im selben Baum.
3. Keine verwaiste Methode (jede wird von mindestens einem Baum referenziert).
4. Jede Methode hat die Pflichtfelder `name`, `why`, `check`, `how`.
5. Der `start`-Knoten jedes Baums existiert.

`python3 tools/validate.py` muss fehlerfrei durchlaufen, bevor Änderungen
veröffentlicht werden.
