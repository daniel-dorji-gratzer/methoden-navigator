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
      "η²",
      "Effektstärke"
    ],
    "category": "Konzept",
    "short": "Wie groß ein Effekt ist – getrennt von der Frage, ob er signifikant ist.",
    "long": "Die Effektgröße quantifiziert die Stärke eines Effekts (z. B. Cohen's d, r, η²) unabhängig vom Stichprobenumfang, während der p-Wert nur die statistische Signifikanz angibt. Ein signifikantes Ergebnis kann praktisch bedeutungslos sein (großes n, winziger Effekt) und ein nicht-signifikantes einen relevanten Effekt verdecken (kleines n). Für die inhaltliche Interpretation ist die Effektgröße meist wichtiger als der p-Wert.",
    "related": [
      "alle Ergebnisknoten"
    ],
    "status": "Entwurf"
  },
  "metrisch": {
    "term": "Metrisch",
    "aliases": [
      "intervallskaliert",
      "verhältnisskaliert",
      "kardinal",
      "metric"
    ],
    "category": "Grundbegriff",
    "short": "Zahlenwerte mit gleichen Abständen, mit denen man rechnen kann (z. B. Reaktionszeit).",
    "long": "Metrische (intervall- oder verhältnisskalierte) Variablen haben gleich große Abstände zwischen den Werten, sodass Differenzen und Mittelwerte sinnvoll sind – etwa Alter, Reaktionszeit oder Testpunkte. Sie tragen am meisten Information und erlauben die mächtigsten (parametrischen) Verfahren wie t-Test, ANOVA oder Pearson-Korrelation.",
    "related": [],
    "status": "Entwurf"
  },
  "ordinal": {
    "term": "Ordinal",
    "aliases": [
      "rangskaliert",
      "ordinal scale"
    ],
    "category": "Grundbegriff",
    "short": "Werte mit klarer Rangordnung, aber ungleichen/unbekannten Abständen (z. B. Schulnoten).",
    "long": "Ordinale Variablen lassen sich in eine Rangordnung bringen, aber die Abstände zwischen den Stufen sind nicht gleich groß oder unbekannt (z. B. Schulnoten, Zustimmungsstufen). Mittelwerte sind streng genommen nicht zulässig; ausgewertet wird über Ränge (z. B. Mann-Whitney, Spearman).",
    "related": [],
    "status": "Entwurf"
  },
  "nominal": {
    "term": "Nominal",
    "aliases": [
      "kategorial",
      "nominal scale"
    ],
    "category": "Grundbegriff",
    "short": "Reine Kategorien ohne Rangordnung (z. B. Studienfach, Augenfarbe).",
    "long": "Nominale Variablen teilen Fälle in Kategorien ohne natürliche Reihenfolge ein (z. B. Geschlecht, Studienfach, Diagnose). Es gibt weder Rangordnung noch Abstände – ausgewertet werden nur Häufigkeiten, etwa mit dem χ²-Test.",
    "related": [],
    "status": "Entwurf"
  },
  "dichotom": {
    "term": "Dichotom",
    "aliases": [
      "binär",
      "zweistufig",
      "dichotomous"
    ],
    "category": "Grundbegriff",
    "short": "Variable mit genau zwei Ausprägungen (z. B. ja/nein, krank/gesund).",
    "long": "Dichotome Variablen haben genau zwei Ausprägungen (z. B. bestanden/durchgefallen, Erfolg/Misserfolg) – ein Spezialfall der nominalen Skala. Sie sind die Ziel- oder Gruppierungsgröße vieler Verfahren wie der logistischen Regression oder des Vierfelder-χ².",
    "related": [],
    "status": "Entwurf"
  },
  "moderator": {
    "term": "Moderator",
    "aliases": [
      "Moderatorvariable",
      "moderator"
    ],
    "category": "Konzept",
    "short": "Eine dritte Variable, die Stärke oder Richtung eines Effekts verändert.",
    "long": "Ein Moderator beeinflusst, <b>wie stark</b> oder in <b>welche Richtung</b> der Effekt einer UV auf die AV ausfällt – der Zusammenhang ist also je nach Ausprägung des Moderators unterschiedlich. Statistisch zeigt sich Moderation als Interaktionseffekt. Abzugrenzen vom Mediator, der einen Mechanismus (UV → M → AV) beschreibt.",
    "related": [],
    "status": "Entwurf"
  },
  "regression": {
    "term": "Regression",
    "aliases": [
      "Regressionsanalyse",
      "regression"
    ],
    "category": "Konzept",
    "short": "Verfahren, das eine AV aus einem oder mehreren Prädiktoren vorhersagt.",
    "long": "Die Regression modelliert, wie eine abhängige Variable von einem oder mehreren Prädiktoren abhängt, und liefert eine Vorhersagegleichung. Jeder Koeffizient gibt den Effekt eines Prädiktors an, während die anderen konstant gehalten werden. Je nach AV-Niveau gibt es Varianten (linear, logistisch, ordinal, Poisson …).",
    "related": [],
    "status": "Entwurf"
  },
  "rang": {
    "term": "Rang / rangbasiertes Verfahren",
    "aliases": [
      "Rang",
      "Ränge",
      "rangbasiert",
      "Rangordnung",
      "Rangplatz"
    ],
    "category": "Grundbegriff",
    "short": "Die Werte werden durch ihre Rangposition ersetzt – Grundlage nonparametrischer Tests.",
    "long": "Bei rangbasierten Verfahren werden die Rohwerte durch ihre Rangplätze (kleinster Wert = Rang 1 usw.) ersetzt und nur noch die Ränge ausgewertet. Das macht sie unempfindlich gegen Ausreißer und schiefe Verteilungen und erlaubt die Analyse ordinaler Daten – der Kern von Mann-Whitney, Wilcoxon, Kruskal-Wallis, Friedman und Spearman.",
    "related": [],
    "status": "Entwurf"
  },
  "interaktion": {
    "term": "Interaktion",
    "aliases": [
      "Interaktionsterm",
      "Wechselwirkung",
      "interaction"
    ],
    "category": "Konzept",
    "short": "Der Effekt einer Variable hängt von der Ausprägung einer anderen ab.",
    "long": "Eine Interaktion (Wechselwirkung) liegt vor, wenn der Effekt einer UV auf die AV von einer zweiten Variable abhängt. Im Modell wird sie über einen <b>Interaktionsterm</b> (Produkt der beiden Variablen) abgebildet – die statistische Umsetzung einer Moderationshypothese.",
    "related": [],
    "status": "Entwurf"
  },
  "korrelation": {
    "term": "Korrelation",
    "aliases": [
      "Korrelationskoeffizient",
      "correlation"
    ],
    "category": "Konzept",
    "short": "Maß für Stärke und Richtung des Zusammenhangs zweier Variablen.",
    "long": "Eine Korrelation quantifiziert, wie stark und in welche Richtung zwei Variablen zusammenhängen, meist als Koeffizient zwischen −1 und +1. Sie sagt nichts über Kausalität aus. Je nach Skalenniveau und Verteilung nutzt man Pearson (linear, metrisch) oder Spearman (rangbasiert, ordinal/robust).",
    "related": [],
    "status": "Entwurf"
  },
  "lagemass": {
    "term": "Mittelwert & Median",
    "aliases": [
      "Mittelwert",
      "Median",
      "arithmetisches Mittel",
      "Lagemaß"
    ],
    "category": "Grundbegriff",
    "short": "Kennwerte für die „Mitte“ einer Verteilung – Mittelwert (Durchschnitt) und Median (mittlerer Wert).",
    "long": "Lagemaße beschreiben das Zentrum einer Verteilung. Der <b>Mittelwert</b> ist der rechnerische Durchschnitt und setzt metrische Daten voraus; er reagiert empfindlich auf Ausreißer. Der <b>Median</b> ist der Wert in der Mitte der geordneten Daten, ist robuster und schon ab ordinalem Niveau sinnvoll.",
    "related": [],
    "status": "Entwurf"
  },
  "hazard": {
    "term": "Hazard-Rate / Hazard Ratio",
    "aliases": [
      "Hazard",
      "Hazardrate",
      "Hazard Ratio",
      "Risikorate"
    ],
    "category": "Konzept",
    "short": "Das momentane Ereignisrisiko über die Zeit (Hazard) bzw. dessen Verhältnis zwischen Gruppen (Hazard Ratio).",
    "long": "Die <b>Hazard-Rate</b> ist das momentane Risiko, dass das Ereignis zu einem Zeitpunkt eintritt, gegeben dass es bis dahin nicht eingetreten ist. Das <b>Hazard Ratio</b> vergleicht dieses Risiko zwischen Gruppen oder pro Prädiktoreinheit (Cox-Regression): ein Wert > 1 bedeutet erhöhtes, < 1 vermindertes Risiko.",
    "related": [],
    "status": "Entwurf"
  },
  "genestete_daten": {
    "term": "Genestete / hierarchische Daten",
    "aliases": [
      "genested",
      "hierarchische Daten",
      "Mehrebenen",
      "geschachtelt",
      "clustered",
      "Cluster"
    ],
    "category": "Datenstruktur",
    "short": "Beobachtungen sind in höhere Einheiten geschachtelt (z. B. Schüler in Klassen in Schulen).",
    "long": "Genestete (hierarchische) Daten entstehen, wenn Beobachtungen in übergeordnete Einheiten eingebettet sind – Messungen in Personen, Personen in Kliniken usw. Solche Beobachtungen sind nicht unabhängig (Fälle derselben Einheit ähneln sich), weshalb klassische Verfahren verzerren und Mehrebenen-/Mixed-Modelle nötig werden.",
    "related": [],
    "status": "Entwurf"
  },
  "freiheitsgrade": {
    "term": "Freiheitsgrade",
    "aliases": [
      "df",
      "degrees of freedom"
    ],
    "category": "Grundbegriff",
    "short": "Anzahl der frei variierbaren Werte – steuert die Prüfverteilung eines Tests.",
    "long": "Die Freiheitsgrade (df) geben an, wie viele Werte einer Berechnung frei variieren können; sie hängen meist von Stichprobengröße und Gruppen-/Parameterzahl ab. Sie bestimmen die Form der Prüfverteilung (z. B. t- oder χ²-Verteilung) und damit, ab welchem Testwert ein Ergebnis signifikant wird.",
    "related": [],
    "status": "Entwurf"
  },
  "zensierung": {
    "term": "Zensierung",
    "aliases": [
      "zensiert",
      "censoring",
      "censored"
    ],
    "category": "Konzept",
    "short": "Bei manchen Fällen ist das Ereignis am Studienende noch nicht eingetreten – die genaue Zeit fehlt.",
    "long": "Zensierung ist das definierende Merkmal der Survival-Analyse: Für manche Fälle ist der Endpunkt bis zum Beobachtungsende nicht eingetreten (oder sie sind ausgeschieden) – man weiß nur „mindestens X Zeit überlebt“, nicht die genaue Ereigniszeit. Verfahren wie Kaplan-Meier und Cox nutzen diese unvollständige Information korrekt, statt die Fälle zu verwerfen.",
    "related": [],
    "status": "Entwurf"
  },
  "posthoc": {
    "term": "Post-hoc-Test",
    "aliases": [
      "post-hoc",
      "Paarvergleiche",
      "multiple Vergleiche"
    ],
    "category": "Konzept",
    "short": "Nachgeschaltete Paarvergleiche, wenn ein Omnibustest einen Unterschied irgendwo zeigt.",
    "long": "Ein Omnibustest (z. B. ANOVA, Kruskal-Wallis) sagt nur, <b>ob</b> sich Gruppen irgendwo unterscheiden – nicht welche. Post-hoc-Tests führen die paarweisen Vergleiche durch und korrigieren dabei für multiples Testen (z. B. Tukey HSD, Games-Howell, Dunn, Nemenyi).",
    "related": [],
    "status": "Entwurf"
  },
  "zufaellige_effekte": {
    "term": "Zufällige vs. feste Effekte",
    "aliases": [
      "zufällige Effekte",
      "feste Effekte",
      "random effects",
      "fixed effects",
      "Random-Effects"
    ],
    "category": "Konzept",
    "short": "Feste Effekte = durchschnittliche Zusammenhänge; zufällige Effekte = Variation zwischen Einheiten.",
    "long": "In Mixed-Modellen werden <b>feste Effekte</b> (die interessierenden, über alle gültigen Durchschnittseffekte) von <b>zufälligen Effekten</b> getrennt, die die Variation zwischen Gruppen/Personen abbilden (z. B. unterschiedliche Ausgangsniveaus je Klinik). So wird die Abhängigkeit genesteter Daten korrekt modelliert.",
    "related": [],
    "status": "Entwurf"
  },
  "mediator": {
    "term": "Mediator / indirekter Effekt",
    "aliases": [
      "Mediator",
      "indirekter Effekt",
      "Indirekteffekt",
      "Vermittlervariable"
    ],
    "category": "Konzept",
    "short": "Eine Variable, über die ein Effekt vermittelt wird (UV → Mediator → AV).",
    "long": "Ein Mediator liegt auf dem Wirkpfad zwischen UV und AV: Die UV wirkt ganz oder teilweise <b>über</b> ihn auf die AV (UV → M → AV). Dieser vermittelte Anteil heißt <b>indirekter Effekt</b> und wird meist über bootstrap-basierte Konfidenzintervalle geprüft. Abzugrenzen vom Moderator, der den Effekt nur verändert.",
    "related": [],
    "status": "Entwurf"
  },
  "epsilon_korrektur": {
    "term": "Epsilon-Korrektur (Greenhouse-Geisser / Huynh-Feldt)",
    "aliases": [
      "Greenhouse-Geisser",
      "Huynh-Feldt",
      "Epsilon-Korrektur"
    ],
    "category": "Konzept",
    "short": "Korrigiert die Freiheitsgrade der Messwiederholungs-ANOVA, wenn die Sphärizität verletzt ist.",
    "long": "Ist die Sphärizität verletzt, wird die Messwiederholungs-ANOVA zu liberal. Die Epsilon-Korrektur passt die Freiheitsgrade an: <b>Greenhouse-Geisser</b> (konservativer, bei ε < 0,75) und <b>Huynh-Feldt</b> (bei ε ≥ 0,75). ε misst dabei den Grad der Sphärizitätsverletzung (1 = perfekt erfüllt).",
    "related": [],
    "status": "Entwurf"
  },
  "erwartete_haeufigkeiten": {
    "term": "Erwartete (Zell-)Häufigkeiten",
    "aliases": [
      "erwartete Häufigkeiten",
      "erwartete Zellhäufigkeiten",
      "Zellhäufigkeiten",
      "expected frequencies"
    ],
    "category": "Voraussetzung",
    "short": "Die unter Unabhängigkeit erwarteten Zellbesetzungen – wichtige Voraussetzung des χ²-Tests.",
    "long": "Der χ²-Test vergleicht beobachtete mit den <b>erwarteten</b> Zellhäufigkeiten, die bei Unabhängigkeit zu erwarten wären. Sind diese erwarteten Häufigkeiten zu klein (Faustregel < 5), wird der Test unzuverlässig – dann sind exakte Verfahren (z. B. Fisher) angemessener.",
    "related": [],
    "status": "Entwurf"
  },
  "linearitaet": {
    "term": "Linearität",
    "aliases": [
      "linearer Zusammenhang",
      "linearity"
    ],
    "category": "Voraussetzung",
    "short": "Annahme, dass der Zusammenhang einer Geraden folgt.",
    "long": "Lineare Verfahren (Pearson-Korrelation, lineare Regression) setzen voraus, dass der Zusammenhang zwischen den Variablen geradlinig ist. Bei gekrümmten (nichtlinearen) Zusammenhängen unterschätzen sie die Beziehung – dann helfen Transformationen, rangbasierte Maße (Spearman) oder nichtlineare Modelle.",
    "related": [],
    "status": "Entwurf"
  },
  "proportionale_hazards": {
    "term": "Proportional-Hazards-Annahme",
    "aliases": [
      "proportionale Hazards",
      "proportional hazards",
      "PH-Annahme"
    ],
    "category": "Voraussetzung",
    "short": "Die Cox-Regression nimmt an, dass das Risikoverhältnis zwischen Gruppen über die Zeit konstant ist.",
    "long": "Die Cox-Regression setzt voraus, dass das Hazard Ratio zwischen Gruppen über die gesamte Beobachtungszeit <b>konstant</b> bleibt (proportionale Hazards). Ist diese Annahme verletzt – etwa wenn sich Überlebenskurven kreuzen –, braucht es zeitabhängige Kovariaten oder erweiterte Modelle.",
    "related": [],
    "status": "Entwurf"
  },
  "konfidenzintervall": {
    "term": "Konfidenzintervall",
    "aliases": [
      "KI",
      "Vertrauensintervall",
      "confidence interval"
    ],
    "category": "Konzept",
    "short": "Wertebereich, der den wahren Parameter mit angegebener Sicherheit (z. B. 95 %) einschließt.",
    "long": "Ein Konfidenzintervall gibt einen Bereich an, in dem der wahre Populationswert mit einer bestimmten Sicherheit (meist 95 %) liegt. Es informiert – anders als der bloße p-Wert – über Größe und Präzision eines Effekts; ein schmales Intervall steht für eine genaue Schätzung.",
    "related": [],
    "status": "Entwurf"
  },
  "standardfehler": {
    "term": "Standardfehler",
    "aliases": [
      "Standardfehler des Mittelwerts",
      "standard error",
      "SE"
    ],
    "category": "Grundbegriff",
    "short": "Streuung einer Kennzahl (z. B. des Mittelwerts) über hypothetische Stichproben hinweg.",
    "long": "Der Standardfehler beschreibt, wie stark eine Schätzgröße (z. B. der Mittelwert) von Stichprobe zu Stichprobe schwanken würde. Er sinkt mit wachsender Stichprobe und ist der Nenner vieler Teststatistiken (z. B. setzt der t-Test die Mittelwertdifferenz ins Verhältnis zum Standardfehler).",
    "related": [],
    "status": "Entwurf"
  },
  "bootstrap": {
    "term": "Bootstrapping",
    "aliases": [
      "Bootstrap",
      "Resampling"
    ],
    "category": "Konzept",
    "short": "Wiederholtes Ziehen aus den eigenen Daten, um die Unsicherheit einer Schätzung zu bestimmen.",
    "long": "Beim Bootstrapping werden aus dem vorhandenen Datensatz viele Zufallsstichproben (mit Zurücklegen) gezogen und die Kennzahl jeweils neu berechnet. Aus dieser Verteilung gewinnt man Konfidenzintervalle ohne starke Verteilungsannahmen – Standard z. B. für den Indirekteffekt der Mediationsanalyse.",
    "related": [],
    "status": "Entwurf"
  },
  "logit_odds": {
    "term": "Logit & Odds Ratio",
    "aliases": [
      "Logit",
      "Log-Odds",
      "Odds Ratio",
      "Chancenverhältnis"
    ],
    "category": "Konzept",
    "short": "Die logistische Regression modelliert Log-Chancen; Effekte werden als Chancenverhältnis (Odds Ratio) gedeutet.",
    "long": "Die logistische Regression sagt nicht die Wahrscheinlichkeit direkt vorher, sondern deren <b>Logit</b> (logarithmierte Chance), damit die Vorhersage zwischen 0 und 1 bleibt. Die Koeffizienten lassen sich als <b>Odds Ratio</b> (Chancenverhältnis) interpretieren: um welchen Faktor sich die Chance pro Prädiktoreinheit ändert.",
    "related": [],
    "status": "Entwurf"
  },
  "zaehldaten": {
    "term": "Zähldaten & Überdispersion",
    "aliases": [
      "Zähldaten",
      "Ereigniszahlen",
      "Überdispersion",
      "count data"
    ],
    "category": "Datenstruktur",
    "short": "Ergebnis ist eine Anzahl von Ereignissen (0, 1, 2 …); Überdispersion = Varianz größer als Mittelwert.",
    "long": "Zähldaten sind nichtnegative ganze Zahlen (Ereignishäufigkeiten) und werden mit Poisson-Regression modelliert, die Mittelwert ≈ Varianz annimmt. Ist die Varianz deutlich größer (<b>Überdispersion</b>), passt die negativ-binomiale Variante besser.",
    "related": [],
    "status": "Entwurf"
  },
  "kovarianz": {
    "term": "Kovarianz",
    "aliases": [
      "covariance"
    ],
    "category": "Grundbegriff",
    "short": "Maß für das gemeinsame Variieren zweier Variablen – unstandardisierte Vorstufe der Korrelation.",
    "long": "Die Kovarianz misst, ob zwei Variablen tendenziell gemeinsam steigen oder gegenläufig sind. Sie hängt aber von den Maßeinheiten ab und ist dadurch schwer interpretierbar; standardisiert man sie über die beiden Standardabweichungen, erhält man die Pearson-Korrelation.",
    "related": [],
    "status": "Entwurf"
  },
  "monotoner_zusammenhang": {
    "term": "Monotoner Zusammenhang",
    "aliases": [
      "monoton",
      "monotonic"
    ],
    "category": "Konzept",
    "short": "Die eine Variable steigt (oder fällt) durchgehend mit der anderen – nicht notwendig geradlinig.",
    "long": "Ein Zusammenhang ist monoton, wenn die eine Variable mit der anderen durchgehend in dieselbe Richtung läuft, ohne dass die Beziehung linear sein muss. Die Spearman-Rangkorrelation erfasst genau solche monotonen Zusammenhänge und ist deshalb robuster als Pearson, das auf <b>lineare</b> Beziehungen ausgelegt ist.",
    "related": [],
    "status": "Entwurf"
  }
};
