/* Datengetrieben – AUTOMATISCH erzeugt aus dem Katalog-Blatt 'Glossar & Konzepte'.
   Nicht von Hand editieren. Struktur: data/schema.md */
window.CONCEPTS = {
  "zsf": {
    "term": "Unabhängige Stichproben",
    "aliases": [
      "ZSF",
      "between-subjects"
    ],
    "category": "Grundbegriff",
    "short": "Verschiedene Personen/Gruppen werden miteinander verglichen.",
    "long": "Bei unabhängigen Stichproben (ZSF) stammt jede Messung von einer anderen Person – die Gruppen sind voneinander unabhängig (z. B. Experimental- vs. Kontrollgruppe). Das ist die zentrale Weiche im Entscheidungsbaum, weil abhängige Stichproben (dieselben Personen mehrfach gemessen) ganz andere Verfahren erfordern.",
    "related": [
      "Wurzel Unterschiedsbaum"
    ],
    "status": "Freigegeben"
  },
  "isf": {
    "term": "Abhängige Stichproben",
    "aliases": [
      "ISF",
      "within-subjects",
      "verbundene Stichproben"
    ],
    "category": "Grundbegriff",
    "short": "Dieselben Personen werden mehrfach gemessen (oder gematcht).",
    "long": "Bei abhängigen Stichproben (ISF) liegen mehrere Messungen derselben Person vor (Messwiederholung) oder die Fälle sind paarweise zugeordnet (Matching). Weil diese Messungen korreliert sind, nutzen die Verfahren die Paardifferenzen bzw. Within-Person-Information – sonst würde die Abhängigkeit ignoriert.",
    "related": [
      "Wurzel Unterschiedsbaum"
    ],
    "status": "Freigegeben"
  },
  "av": {
    "term": "Abhängige Variable",
    "aliases": [
      "AV",
      "outcome",
      "Zielvariable"
    ],
    "category": "Grundbegriff",
    "short": "Das gemessene Ergebnis, dessen Verhalten erklärt werden soll.",
    "long": "Die abhängige Variable (AV) ist die Größe, die man beobachtet/misst und vorhersagen oder erklären möchte. Ihr Skalenniveau (metrisch/ordinal/nominal/dichotom) bestimmt im Baum maßgeblich, welche Verfahrensfamilie infrage kommt.",
    "related": [
      "alle Bäume"
    ],
    "status": "Freigegeben"
  },
  "uv": {
    "term": "Unabhängige Variable",
    "aliases": [
      "UV",
      "Prädiktor",
      "predictor"
    ],
    "category": "Grundbegriff",
    "short": "Die erklärende Größe, deren Einfluss untersucht wird.",
    "long": "Die unabhängige Variable (UV) ist der vermutete Einflussfaktor bzw. Prädiktor. Anzahl und Skalenniveau der UVs steuern die Wahl zwischen einfachen und multiplen bzw. parametrischen und kategorialen Verfahren.",
    "related": [
      "alle Bäume"
    ],
    "status": "Freigegeben"
  },
  "nv": {
    "term": "Normalverteilung",
    "aliases": [
      "NV",
      "Normality"
    ],
    "category": "Voraussetzung",
    "short": "Annahme, dass die relevanten Werte einer Glockenkurve folgen.",
    "long": "Viele parametrische Verfahren (t-Test, ANOVA, Regression) setzen Normalverteilung voraus – meist nicht der Rohdaten, sondern einer bestimmten Größe: bei abhängigen Stichproben der Differenzen, bei der Regression der Residuen. Ist sie verletzt, weicht man auf rangbasierte/robuste Verfahren aus. Wie streng man das prüfen sollte, behandelt das Konzept „Grenzen von Voraussetzungstests“.",
    "related": [
      "u_*_nv",
      "Regressionsknoten"
    ],
    "status": "Freigegeben"
  },
  "varianzhomogenitaet": {
    "term": "Varianzhomogenität",
    "aliases": [
      "Homoskedastizität",
      "equal variances",
      "Homogenität der Varianzen"
    ],
    "category": "Voraussetzung",
    "short": "Annahme, dass die Streuung in den verglichenen Gruppen gleich ist.",
    "long": "Varianzhomogenität bedeutet, dass die Gruppen ähnlich stark streuen. Der klassische t-Test/die ANOVA setzen das voraus; ist es verletzt, korrigieren Welch-Test bzw. Welch-ANOVA (mit Games-Howell als Post-hoc). Geprüft wird klassisch mit dem Levene-Test – mit denselben Vorbehalten wie bei anderen Voraussetzungstests.",
    "related": [
      "Welch-Knoten"
    ],
    "status": "Freigegeben"
  },
  "sphaerizitaet": {
    "term": "Sphärizität",
    "aliases": [
      "Sphericity",
      "Mauchly-Test"
    ],
    "category": "Voraussetzung",
    "short": "Voraussetzung der Messwiederholungs-ANOVA über die Differenzen.",
    "long": "Sphärizität verlangt, dass die Varianzen der Differenzen zwischen allen Messzeitpunkt-Paaren gleich sind. Sie ist die zentrale Voraussetzung der ANOVA mit Messwiederholung und wird mit dem Mauchly-Test geprüft. Bei Verletzung korrigiert man die Freiheitsgrade (Greenhouse-Geisser bei ε < 0,75, sonst Huynh-Feldt).",
    "related": [
      "u_isf3_sph"
    ],
    "status": "Freigegeben"
  },
  "ausreisser": {
    "term": "Ausreißer",
    "aliases": [
      "Outlier",
      "Extremwert"
    ],
    "category": "Voraussetzung",
    "short": "Einzelwerte, die stark vom Rest abweichen und Ergebnisse verzerren.",
    "long": "Ausreißer können Mittelwerte, Varianzen und besonders die Pearson-Korrelation stark verzerren. Im Zusammenhangsbaum führt ihr Vorhandensein deshalb zur robusteren rangbasierten Spearman-Korrelation. Wichtig ist, Ausreißer fachlich zu prüfen (Messfehler vs. echte Extremfälle), nicht reflexhaft zu löschen.",
    "related": [
      "z_m_ausreisser"
    ],
    "status": "Freigegeben"
  },
  "skalenniveau": {
    "term": "Skalenniveau",
    "aliases": [
      "nominal",
      "ordinal",
      "metrisch",
      "dichotom",
      "level of measurement"
    ],
    "category": "Grundbegriff",
    "short": "Informationsgehalt einer Variable – bestimmt erlaubte Rechenoperationen.",
    "long": "Das Skalenniveau ordnet Variablen nach Informationsgehalt: nominal (nur Kategorien), ordinal (Rangordnung), metrisch (gleiche Abstände, Mittelwert sinnvoll); dichotom ist ein Spezialfall mit zwei Ausprägungen. Es ist die wichtigste Stellgröße im Baum, weil es festlegt, ob Mittelwerte, Ränge oder Häufigkeiten ausgewertet werden.",
    "related": [
      "alle Bäume"
    ],
    "status": "Freigegeben"
  },
  "wide_long": {
    "term": "Wide- vs. Long-Format",
    "aliases": [
      "wide/long",
      "tidy data"
    ],
    "category": "Datenstruktur",
    "short": "Zwei Anordnungen derselben Daten – je nach Verfahren nötig.",
    "long": "Im Wide-Format steht eine Person in einer Zeile mit mehreren Messungen in eigenen Spalten; im Long-Format wird jede Messung zu einer eigenen Zeile (Person-ID + Zeitpunkt + Wert). Klassische Messwiederholungs-ANOVA erwartet oft Wide-, Mixed-Modelle dagegen zwingend Long-Format. Viele „Fehler“ beim Analysieren verbundener Daten sind in Wahrheit Format-Probleme.",
    "related": [
      "Mixed-Model-Knoten"
    ],
    "status": "Entwurf"
  },
  "fehlende_daten": {
    "term": "Fehlende Daten",
    "aliases": [
      "Missing data",
      "MCAR/MAR/MNAR",
      "Imputation"
    ],
    "category": "Datenstruktur",
    "short": "Lücken im Datensatz – ihr Mechanismus entscheidet über den Umgang.",
    "long": "Fehlende Werte werden nach ihrem Mechanismus unterschieden: MCAR (völlig zufällig), MAR (erklärbar durch beobachtete Variablen) und MNAR (vom fehlenden Wert selbst abhängig). Listenweiser Fallausschluss ist nur bei MCAR unverzerrt und kostet Power; moderne Praxis bevorzugt bei MAR die multiple Imputation oder Maximum-Likelihood-Schätzung. Der Mechanismus lässt sich nicht rein statistisch beweisen – er erfordert inhaltliche Annahmen.",
    "related": [],
    "status": "Entwurf"
  },
  "p_wert": {
    "term": "p-Wert (und seine Grenzen)",
    "aliases": [
      "p-value",
      "Signifikanz"
    ],
    "category": "Konzept",
    "short": "Wahrscheinlichkeit der Daten unter der Nullhypothese – nicht mehr.",
    "long": "Der p-Wert gibt an, wie wahrscheinlich die beobachteten (oder extremeren) Daten wären, wenn die Nullhypothese stimmt. Er ist <b>nicht</b> die Wahrscheinlichkeit, dass die Hypothese wahr ist, und sagt nichts über die Größe oder Relevanz eines Effekts. Er hängt stark vom Stichprobenumfang ab – bei großem n wird fast alles „signifikant“. Deshalb immer zusammen mit Effektgröße und Konfidenzintervall interpretieren.",
    "related": [
      "alle Ergebnisknoten"
    ],
    "status": "Entwurf"
  },
  "vortest_problem": {
    "term": "Grenzen von Voraussetzungstests",
    "aliases": [
      "Pretesting-Problem",
      "conditional testing"
    ],
    "category": "Konzept",
    "short": "Annahmen vorzutesten und dann den Test zu wählen ist selbst problematisch.",
    "long": "Voraussetzungen (NV, Varianzhomogenität) erst zu testen und davon den Haupttest abhängig zu machen, verzerrt die Fehlerraten der Gesamtprozedur. Hinzu kommt ein Paradox: Genau bei kleinen Stichproben, wo die Annahme am meisten zählt, haben Voraussetzungstests kaum Power und übersehen Verletzungen; bei sehr großen Stichproben schlagen sie schon bei belanglosen Abweichungen an. Viele Methodiker empfehlen daher, robuste/nonparametrische Verfahren von vornherein zu wählen oder sich auf die Robustheit der Verfahren zu stützen, statt mechanisch vorzutesten.",
    "related": [
      "alle Voraussetzungsknoten"
    ],
    "status": "Entwurf"
  },
  "parametrisch": {
    "term": "Parametrisch vs. nonparametrisch",
    "aliases": [
      "parametric/nonparametric",
      "verteilungsfrei"
    ],
    "category": "Grundbegriff",
    "short": "Verfahren mit vs. ohne Verteilungsannahmen über die Daten.",
    "long": "Parametrische Verfahren (t-Test, ANOVA, Pearson) nehmen eine bestimmte Verteilung an (meist Normalverteilung) und werten Mittelwerte/Rohwerte aus; sie sind bei erfüllten Annahmen am trennschärfsten. Nonparametrische Verfahren (Mann-Whitney, Spearman, Friedman) verzichten weitgehend auf Verteilungsannahmen, rechnen auf Rängen und sind robuster, aber bei erfüllten Annahmen etwas schwächer.",
    "related": [],
    "status": "Entwurf"
  },
  "effektgroesse": {
    "term": "Effektgröße vs. Signifikanz",
    "aliases": [
      "effect size",
      "Cohen's d",
      "r",
      "η²"
    ],
    "category": "Konzept",
    "short": "Wie groß ein Effekt ist – getrennt von der Frage, ob er signifikant ist.",
    "long": "Die Effektgröße quantifiziert die Stärke eines Effekts (z. B. Cohen's d, r, η²) unabhängig vom Stichprobenumfang, während der p-Wert nur die statistische Signifikanz angibt. Ein signifikantes Ergebnis kann praktisch bedeutungslos sein (großes n, winziger Effekt) und ein nicht-signifikantes einen relevanten Effekt verdecken (kleines n). Für die inhaltliche Interpretation ist die Effektgröße meist wichtiger als der p-Wert.",
    "related": [
      "alle Ergebnisknoten"
    ],
    "status": "Entwurf"
  }
};
