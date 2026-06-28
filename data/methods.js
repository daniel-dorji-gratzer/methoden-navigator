/* Datengetrieben – AUTOMATISCH erzeugt aus dem Katalog-Blatt 'Methoden'.
   Nicht von Hand editieren. Struktur: data/schema.md */
window.METHODS = {
  "r_ttest_zsf": {
    "name": "t-Test für unabhängige Stichproben",
    "why": "Metrische AV, zwei unabhängige Gruppen, <b>normalverteilt</b> und <b>varianzhomogen</b> – das sind genau die Voraussetzungen des klassischen t-Tests.",
    "check": "Wäre nur die Varianzhomogenität verletzt → Welch. Wäre die NV verletzt → Mann-Whitney-U.",
    "how": "Der t-Test vergleicht die beiden Gruppen<b>mittelwerte</b> und setzt ihre Differenz ins Verhältnis zur Streuung der Daten (gepoolter Standardfehler). Je größer der Mittelwertunterschied relativ zur Streuung, desto größer der t-Wert. Aus t und den Freiheitsgraden ergibt sich der p-Wert. Voraussetzungen – metrische AV, Normalverteilung pro Gruppe, homogene Varianzen – sind nötig, weil nur dann die t-Verteilung als Prüfverteilung exakt gilt. An dieser Stelle steht er, weil alle drei Bedingungen erfüllt sind; fällt eine weg, übernimmt Welch (Varianzen) oder Mann-Whitney-U (Verteilung)."
  },
  "r_welch": {
    "name": "Welch-Test",
    "why": "Metrische, normalverteilte AV bei zwei Gruppen, aber <b>heterogene Varianzen</b> – der Welch-Test korrigiert dafür über angepasste Freiheitsgrade.",
    "check": "Bei homogenen Varianzen genügt der gewöhnliche t-Test.",
    "how": "Der Welch-Test ist eine Variante des t-Tests für <b>ungleiche Varianzen</b>. Er poolt die Streuungen nicht, sondern gewichtet sie getrennt und passt die Freiheitsgrade über die Welch-Satterthwaite-Formel nach unten an. Dadurch bleibt der Test auch dann gültig, wenn die Gruppen unterschiedlich stark streuen. Er steht hier, weil die Varianzhomogenität verletzt ist – die einzige Bedingung, die den klassischen t-Test ausschließt. Da Welch bei homogenen Varianzen kaum Power verliert, empfehlen ihn manche generell als Standard.",
    "warn": true
  },
  "r_mwu": {
    "name": "Mann-Whitney-U-Test",
    "why": "Zwei unabhängige Gruppen mit <b>ordinaler</b> AV oder verletzter Normalverteilung – das nonparametrische Pendant zum t-Test vergleicht Rangsummen.",
    "check": "Frag dich: ist die AV wirklich nur ordinal, oder metrisch-aber-nicht-normalverteilt? Beide Wege führen hierher.",
    "how": "Der Mann-Whitney-U-Test wirft alle Werte beider Gruppen in eine gemeinsame <b>Rangreihe</b> und prüft, ob die Ränge der einen Gruppe systematisch höher liegen als die der anderen. Er vergleicht also nicht Mittelwerte, sondern die Lage der Verteilungen über Ränge – deshalb braucht er weder metrisches Niveau noch Normalverteilung. Genau das macht ihn zur richtigen Wahl, wenn die AV nur ordinal ist oder die Normalverteilungsannahme nicht hält. Das parametrische Gegenstück wäre der t-Test."
  },
  "r_kruskal": {
    "name": "Kruskal-Wallis-Test",
    "why": "Mehr als zwei unabhängige Gruppen, AV ordinal oder nicht normalverteilt, <b>ohne</b> geordnete Hypothese – die Rang-Verallgemeinerung des Mann-Whitney-U.",
    "check": "Mit geordneter Erwartung wäre stattdessen Jonckheere-Terpstra die stärkere Wahl.",
    "how": "Der Kruskal-Wallis-Test verallgemeinert den Mann-Whitney-U auf <b>mehr als zwei</b> Gruppen: Alle Werte werden gemeinsam in Ränge überführt, dann wird geprüft, ob sich die mittleren Ränge zwischen den Gruppen unterscheiden. Er beantwortet nur die Globalfrage „gibt es irgendwo einen Unterschied?“ – für paarweise Vergleiche braucht es Post-hoc-Tests (z. B. Dunn). Er steht hier, weil mehr als zwei Gruppen vorliegen, die AV ordinal/nicht normalverteilt ist und keine geordnete Hypothese besteht. Mit Ordnungserwartung wäre Jonckheere-Terpstra stärker."
  },
  "r_jonckheere": {
    "name": "Jonckheere-Terpstra-Test",
    "why": "Mehr als zwei Gruppen, ordinale AV und eine <b>geordnete</b> Hypothese (erwarteter Trend) – der Test nutzt genau diese Ordnungsinformation und gewinnt dadurch Power.",
    "check": "Ohne Ordnungserwartung verschenkst du diese Power – dann Kruskal-Wallis.",
    "how": "Der Jonckheere-Terpstra-Test ist ein rangbasierter Trendtest: Er prüft nicht nur, <b>ob</b> sich Gruppen unterscheiden, sondern ob sie in einer vorab erwarteten <b>Reihenfolge</b> ansteigen oder abfallen (z. B. niedrig &lt; mittel &lt; hoch). Weil er diese Ordnungsinformation gezielt nutzt, hat er mehr Power als Kruskal-Wallis, wenn die Hypothese tatsächlich gerichtet ist. Genau deshalb steht er an dieser Stelle: mehr als zwei Gruppen, ordinale AV und eine geordnete Erwartung. Ohne diese Erwartung würde man die Power verschenken."
  },
  "r_anova": {
    "name": "Einfaktorielle ANOVA (+ z. B. Tukey HSD)",
    "why": "Mehr als zwei unabhängige Gruppen, metrische AV, <b>normalverteilt</b> und <b>varianzhomogen</b> – Post-hoc z. B. Tukey HSD für paarweise Vergleiche.",
    "check": "Bei heterogenen Varianzen → Welch-ANOVA mit Games-Howell.",
    "how": "Die einfaktorielle ANOVA zerlegt die Gesamtvarianz der Daten in einen Anteil <b>zwischen</b> den Gruppen und einen <b>innerhalb</b> der Gruppen. Ihr F-Wert ist das Verhältnis dieser beiden Varianzanteile – ist die Variation zwischen den Gruppen deutlich größer als zufällig zu erwarten, wird F signifikant. Voraussetzungen sind metrische AV, Normalverteilung und Varianzhomogenität. Sie steht hier, weil all das erfüllt ist und mehr als zwei Gruppen vorliegen. Da F nur „irgendwo ein Unterschied“ sagt, folgt ein Post-hoc-Test wie Tukey HSD für die paarweisen Vergleiche."
  },
  "r_gameshowell": {
    "name": "Welch-ANOVA + Games-Howell",
    "why": "Metrische, normalverteilte AV über mehr als zwei Gruppen, aber <b>heterogene Varianzen</b> – Games-Howell ist das varianz-robuste Post-hoc-Verfahren.",
    "check": "Bei Varianzhomogenität genügt die klassische ANOVA mit Tukey HSD.",
    "how": "Bei mehr als zwei Gruppen mit metrischer, normalverteilter AV, aber <b>ungleichen Varianzen</b> greift die Welch-ANOVA (sie korrigiert wie der Welch-Test die Freiheitsgrade). Für die anschließenden paarweisen Vergleiche ist Games-Howell das passende Post-hoc-Verfahren, weil es – anders als Tukey HSD – keine Varianzhomogenität voraussetzt. Diese Kombination steht hier genau deshalb: Die Varianzheterogenität schließt die klassische ANOVA mit Tukey aus.",
    "warn": true
  },
  "r_kreuz": {
    "name": "Kreuztabelle / χ²-Test",
    "why": "Nominale AV bei unabhängigen Stichproben – Häufigkeiten werden in einer Kreuztabelle gegen die erwarteten Werte (χ²) geprüft.",
    "check": "Erwartete Zellhäufigkeiten beachten – sind sie zu klein, ist χ² nicht zuverlässig.",
    "how": "Bei einer <b>nominalen</b> AV werden die Häufigkeiten in einer Kreuztabelle dargestellt. Der χ²-Test vergleicht die <b>beobachteten</b> Zellhäufigkeiten mit den <b>erwarteten</b> Häufigkeiten, die bei völliger Unabhängigkeit zu erwarten wären; große Abweichungen ergeben ein großes χ². Mittelwerte oder Ränge gibt es bei nominalen Daten nicht – deshalb ist dieser häufigkeitsbasierte Ansatz hier das einzig Sinnvolle. Wichtig: Die erwarteten Zellhäufigkeiten sollten groß genug sein (Faustregel ≥ 5), sonst ist χ² unzuverlässig (dann exakter Test nach Fisher)."
  },
  "r_bowker": {
    "name": "Bowker-Test",
    "why": "Zwei abhängige Messungen mit <b>nominaler</b> AV (mehr als zwei Kategorien) – prüft die Symmetrie der Veränderungen.",
    "check": "Bei genau zwei Kategorien (dichotom) → McNemar.",
    "how": "Der Bowker-Test prüft bei <b>abhängigen</b> Messungen mit nominaler AV (mehr als zwei Kategorien), ob die Veränderungen zwischen den beiden Zeitpunkten <b>symmetrisch</b> sind – also ob Wechsel von Kategorie A→B genauso häufig sind wie B→A. Er betrachtet die quadratische Kreuztabelle der Paarungen. Er steht hier, weil die Messungen verbunden sind (dieselben Personen) und die AV mehr als zwei nominale Kategorien hat. Bei genau zwei Kategorien ist er identisch mit McNemar."
  },
  "r_mcnemar": {
    "name": "McNemar-Test",
    "why": "Zwei abhängige Messungen mit <b>dichotomer</b> AV – betrachtet nur die Fälle, die sich zwischen den Zeitpunkten verändert haben.",
    "check": "McNemar ist der dichotome Spezialfall von Bowker.",
    "how": "Der McNemar-Test ist der Spezialfall des Bowker-Tests für eine <b>dichotome</b> AV bei abhängigen Messungen. Er betrachtet ausschließlich die <b>Wechsler</b> – die Fälle, die vom ersten zum zweiten Zeitpunkt ihre Kategorie geändert haben – und prüft, ob Wechsel in die eine Richtung häufiger sind als in die andere. Die „Bleiber“ tragen keine Information über Veränderung und werden ignoriert. Er steht hier, weil zwei verbundene Messungen mit zwei Kategorien vorliegen (typisch: vorher/nachher ja/nein)."
  },
  "r_vorzeichen": {
    "name": "Vorzeichentest",
    "why": "Zwei abhängige Messungen mit <b>ordinaler</b> AV – nutzt nur die Richtung (Vorzeichen) der Differenzen.",
    "check": "Wilcoxon nutzt zusätzlich die Größe der Differenzen und ist bei metrischen Daten stärker.",
    "how": "Der Vorzeichentest bildet für jedes Messpaar die Differenz und schaut nur auf deren <b>Vorzeichen</b> (Verbesserung oder Verschlechterung) – die Größe der Differenz bleibt unberücksichtigt. Geprüft wird, ob beide Richtungen etwa gleich häufig sind (wie ein Münzwurf). Weil nur die Richtung zählt, genügt ordinales Niveau. Er steht hier für zwei abhängige Messungen mit ordinaler AV. Sind die Daten metrisch, nutzt der Wilcoxon-Test zusätzlich die Größe der Differenzen und ist dadurch stärker."
  },
  "r_ttest_isf": {
    "name": "t-Test für abhängige Stichproben",
    "why": "Zwei abhängige Messungen, metrische AV, <b>Differenzen normalverteilt</b> – der gepaarte t-Test arbeitet auf den Differenzwerten.",
    "check": "Wichtig: geprüft wird die NV der Differenzen, nicht der Rohwerte.",
    "how": "Der gepaarte t-Test bildet pro Person die <b>Differenz</b> der beiden Messungen und testet, ob deren Mittelwert von null abweicht. Durch die Differenzbildung fällt die personenbezogene Grundstreuung heraus – das macht den Test bei verbundenen Daten sensitiver als der ungepaarte. Voraussetzung ist, dass diese <b>Differenzen normalverteilt</b> sind (nicht die Rohwerte!). Er steht hier, weil zwei verbundene metrische Messungen vorliegen und die Differenzen die NV erfüllen. Andernfalls greift Wilcoxon."
  },
  "r_wilcoxon": {
    "name": "Wilcoxon-Vorzeichen-Rang-Test",
    "why": "Zwei abhängige metrische Messungen, deren <b>Differenzen nicht normalverteilt</b> sind – das nonparametrische Pendant zum gepaarten t-Test.",
    "check": "Bei normalverteilten Differenzen → gepaarter t-Test.",
    "how": "Der Wilcoxon-Vorzeichen-Rang-Test ist das nonparametrische Gegenstück zum gepaarten t-Test. Er bildet die Differenzen, ordnet ihre <b>Beträge</b> in Ränge und summiert die Ränge getrennt nach Vorzeichen. Anders als der reine Vorzeichentest nutzt er damit auch die <b>Größe</b> der Differenzen, bleibt aber robust gegen Verletzungen der Normalverteilung. Er steht hier, weil zwei verbundene metrische Messungen vorliegen, deren Differenzen <b>nicht</b> normalverteilt sind.",
    "warn": true
  },
  "r_cochran": {
    "name": "Cochran-Q-Test",
    "why": "Mehr als zwei abhängige Messungen mit <b>dichotomer</b> AV – Verallgemeinerung des McNemar-Tests auf mehrere Zeitpunkte.",
    "check": "Der dichotome Mehr-Zeitpunkt-Fall.",
    "how": "Der Cochran-Q-Test verallgemeinert McNemar auf <b>mehr als zwei</b> abhängige Messungen mit dichotomer AV. Er prüft, ob sich der Anteil der „Treffer“ (z. B. „ja“) über die Messzeitpunkte hinweg verändert. Er steht hier, weil mehrere verbundene Messungen einer 0/1-Variable vorliegen – etwa dieselbe Aufgabe zu drei Zeitpunkten gelöst/nicht gelöst. Wird Q signifikant, zeigen Post-hoc-Vergleiche (paarweise McNemar), zwischen welchen Zeitpunkten der Unterschied liegt."
  },
  "r_friedman": {
    "name": "Friedman-Test",
    "why": "Mehr als zwei abhängige Messungen mit <b>ordinaler</b> AV (oder metrisch ohne NV) – die rangbasierte Alternative zur Messwiederholungs-ANOVA.",
    "check": "Der nonparametrische Gegenpart zur ANOVA mit Messwiederholung.",
    "how": "Der Friedman-Test ist das nonparametrische Pendant zur Messwiederholungs-ANOVA. Er <b>rangordnet die Werte innerhalb jeder Person</b> über die Messzeitpunkte und prüft, ob bestimmte Zeitpunkte systematisch höhere Ränge bekommen. Weil innerhalb jeder Person gerankt wird, braucht es keine Normalverteilung und nur ordinales Niveau. Er steht hier für mehr als zwei verbundene Messungen mit ordinaler AV (oder metrisch ohne NV). Für die paarweisen Vergleiche folgen Post-hoc-Tests (z. B. Nemenyi)."
  },
  "r_anova_isf": {
    "name": "Einfaktorielle ANOVA mit Messwiederholung",
    "why": "Mehr als zwei abhängige metrische Messungen mit gegebener <b>Sphärizität</b> – keine Korrektur nötig.",
    "check": "Bei verletzter Sphärizität entscheidet das Epsilon über die Korrektur.",
    "how": "Die ANOVA mit Messwiederholung vergleicht mehr als zwei <b>verbundene</b> metrische Messungen. Sie zieht – ähnlich dem gepaarten t-Test – die personenbezogene Streuung heraus und gewinnt dadurch Power. Ihre zentrale Zusatzannahme ist die <b>Sphärizität</b>: Die Varianzen aller paarweisen Differenzen zwischen den Messzeitpunkten müssen etwa gleich sein (geprüft mit dem Mauchly-Test). Sie steht hier, weil Sphärizität gegeben ist; ist sie verletzt, werden die Freiheitsgrade korrigiert (Greenhouse-Geisser oder Huynh-Feldt)."
  },
  "r_gg": {
    "name": "Greenhouse-Geisser-Korrektur",
    "why": "Messwiederholungs-ANOVA mit <b>verletzter Sphärizität</b> und <b>ε &lt; 0,75</b> – Greenhouse-Geisser korrigiert die Freiheitsgrade konservativer.",
    "check": "Bei ε ≥ 0,75 ist Greenhouse-Geisser zu konservativ → Huynh-Feldt.",
    "how": "Ist bei der Messwiederholungs-ANOVA die <b>Sphärizität verletzt</b>, wird der Test zu liberal (zu viele falsch-positive Ergebnisse). Die Greenhouse-Geisser-Korrektur multipliziert die Freiheitsgrade mit einem Schätzer ε (zwischen 0 und 1), der das Ausmaß der Verletzung abbildet, und macht den Test dadurch <b>konservativer</b>. Sie steht hier, weil ε &lt; 0,75 – also eine deutliche Verletzung vorliegt, bei der die stärkere (konservativere) Korrektur angemessen ist. Bei ε ≥ 0,75 wäre Greenhouse-Geisser zu streng, dann Huynh-Feldt.",
    "warn": true
  },
  "r_hf": {
    "name": "Huynh-Feldt-Korrektur",
    "why": "Messwiederholungs-ANOVA mit verletzter Sphärizität, aber <b>ε ≥ 0,75</b> – Huynh-Feldt ist hier die weniger konservative, passendere Korrektur.",
    "check": "Bei ε &lt; 0,75 wäre Greenhouse-Geisser angemessener.",
    "how": "Die Huynh-Feldt-Korrektur passt – wie Greenhouse-Geisser – bei verletzter Sphärizität die Freiheitsgrade der Messwiederholungs-ANOVA über ε an, ist dabei aber <b>weniger konservativ</b>. Sie steht hier, weil ε ≥ 0,75 ist: Die Sphärizitätsverletzung ist moderat, und Greenhouse-Geisser würde unnötig Power kosten. Faustregel: ε &lt; 0,75 → Greenhouse-Geisser, ε ≥ 0,75 → Huynh-Feldt.",
    "warn": true
  },
  "r_mlr": {
    "name": "Multiple lineare Regression",
    "why": "Metrische AV mit <b>mehreren</b> Prädiktoren – modelliert deren gemeinsamen und je eigenen Beitrag.",
    "check": "Bei nur einer UV reicht eine Korrelation bzw. einfache Regression.",
    "how": "Die multiple lineare Regression sagt eine metrische AV aus <b>mehreren</b> Prädiktoren gleichzeitig vorher. Jeder Regressionskoeffizient gibt den Effekt eines Prädiktors an, <b>während die anderen konstant gehalten</b> werden – so trennt sie überlappende Einflüsse. Das Modell minimiert die Summe der quadrierten Vorhersagefehler (kleinste Quadrate). Sie steht hier, weil die AV metrisch ist und mehr als eine UV vorliegt. Bei nur einer UV genügt eine einfache Korrelation/Regression."
  },
  "r_pearson": {
    "name": "Korrelation nach Pearson",
    "why": "Metrische AV, eine metrische UV, <b>keine Ausreißer</b> – Pearson misst den linearen Zusammenhang.",
    "check": "Ausreißer würden Pearson verzerren → dann Spearman.",
    "how": "Die Pearson-Korrelation misst die Stärke und Richtung des <b>linearen</b> Zusammenhangs zweier metrischer Variablen als Wert r zwischen −1 und +1. Sie beruht auf der Kovarianz, standardisiert durch beide Standardabweichungen. Weil sie auf den Rohwerten rechnet, reagiert sie <b>empfindlich auf Ausreißer</b> und setzt einen linearen Zusammenhang voraus. Sie steht hier, weil beide Variablen metrisch und das Streudiagramm ausreißerfrei ist. Bei Ausreißern oder Nichtlinearität ist Spearman robuster."
  },
  "r_spearman": {
    "name": "Rangkorrelation nach Spearman",
    "why": "Ordinale Daten oder metrische Daten mit <b>Ausreißern</b> – Spearman korreliert Ränge und ist dadurch robust gegen Ausreißer und Nichtlinearität.",
    "check": "Mehrere Wege führen hierher: ordinale AV, ordinale UV oder Ausreißer bei metrischen Daten.",
    "how": "Die Spearman-Rangkorrelation wandelt beide Variablen zunächst in <b>Ränge</b> um und berechnet darauf die Korrelation. Dadurch erfasst sie jeden <b>monotonen</b> Zusammenhang (nicht nur linearen) und ist unempfindlich gegen Ausreißer und schiefe Verteilungen. Sie steht hier, weil entweder ordinale Daten vorliegen oder metrische Daten mit Ausreißern im Streudiagramm – Situationen, in denen Pearson verzerrt würde."
  },
  "r_punktbiserial": {
    "name": "Punktbiseriale Korrelation",
    "why": "Metrische AV und <b>dichotome</b> UV – Sonderfall der Pearson-Korrelation.",
    "check": "Inhaltlich oft sinnvoller als Unterschiedshypothese (zwei Gruppen) zu formulieren.",
    "how": "Die punktbiseriale Korrelation ist mathematisch ein <b>Spezialfall der Pearson-Korrelation</b> für den Fall, dass eine Variable metrisch und die andere <b>dichotom</b> (0/1) ist. Sie quantifiziert, wie stark die beiden Gruppen der dichotomen Variable sich im Mittel der metrischen Variable unterscheiden. Sie steht hier genau für diese Konstellation. Inhaltlich beschreibt das oft denselben Sachverhalt wie ein Gruppenvergleich – häufig ist eine Unterschiedshypothese (t-Test) die natürlichere Formulierung."
  },
  "r_ordreg": {
    "name": "Ordinale Regression",
    "why": "Ordinale AV mit <b>mehreren</b> UVs.",
    "check": "Bei einer UV reicht meist die Spearman-Korrelation.",
    "how": "Die ordinale Regression modelliert eine <b>ordinale</b> AV (geordnete Kategorien, z. B. niedrig/mittel/hoch) aus mehreren Prädiktoren. Statt eines Mittelwerts schätzt sie über kumulative Wahrscheinlichkeiten, in welche oder höhere Kategorie ein Fall fällt (proportionale-Odds-Modell). Sie steht hier, weil die AV ordinal ist und mehr als eine UV vorliegt – ein Fall, den weder die metrische Regression noch eine einzelne Rangkorrelation abdeckt."
  },
  "r_vierfelder": {
    "name": "Vierfelderkorrelation (Phi)",
    "why": "Dichotome AV und <b>dichotome</b> UV – der Zusammenhang in einer 2×2-Tabelle.",
    "check": "Bei mehr als zwei Kategorien einer Variable → Kontingenzkoeffizient.",
    "how": "Die Vierfelderkorrelation (Phi-Koeffizient) misst den Zusammenhang zweier <b>dichotomer</b> Variablen in einer 2×2-Kreuztabelle. Sie ist die Anwendung der Pearson-Korrelation auf zwei 0/1-Variablen und liegt zwischen −1 und +1. Sie steht hier, weil sowohl AV als auch UV genau zwei Kategorien haben. Hat eine der Variablen mehr als zwei Kategorien, wird die Tabelle größer als 2×2, und man nutzt den Kontingenzkoeffizienten."
  },
  "r_kontingenz": {
    "name": "Kontingenzkoeffizient",
    "why": "Dichotome oder nominale AV mit nominaler/dichotomer UV – Zusammenhangsmaß für Kreuztabellen größer als 2×2.",
    "check": "Für reine 2×2-Tabellen ist Phi (Vierfelder) gebräuchlich.",
    "how": "Der Kontingenzkoeffizient misst die Stärke des Zusammenhangs in einer Kreuztabelle, die <b>größer als 2×2</b> ist (nominale Variablen mit mehreren Kategorien). Er basiert auf dem χ²-Wert der Tabelle, normiert auf einen Bereich um 0 bis knapp unter 1. Er steht hier, weil mindestens eine der nominalen/dichotomen Variablen mehr als zwei Ausprägungen hat. Für reine 2×2-Tabellen ist Phi (Vierfelder) gebräuchlicher."
  },
  "r_binlog": {
    "name": "Binär logistische Regression",
    "why": "<b>Dichotome</b> AV mit metrischer UV oder mehreren UVs – modelliert die Wahrscheinlichkeit der einen Kategorie.",
    "check": "Bei mehr als zwei AV-Kategorien → multinomial logistische Regression.",
    "how": "Die binär logistische Regression sagt die Wahrscheinlichkeit für eine von <b>zwei</b> Ausprägungen der AV (z. B. Erfolg/Misserfolg) aus einem metrischen Prädiktor oder mehreren UVs vorher. Sie modelliert nicht die Wahrscheinlichkeit direkt, sondern deren <b>Logit</b> (Log-Odds) als lineare Funktion der Prädiktoren – so bleibt die Vorhersage immer zwischen 0 und 1. Die Koeffizienten lassen sich als Odds Ratios deuten. Sie steht hier, weil die AV dichotom ist und ein metrischer bzw. mehrere Prädiktoren vorliegen."
  },
  "r_multinom": {
    "name": "Multinomial logistische Regression",
    "why": "<b>Nominale</b> AV (mehr als zwei Kategorien) mit metrischer UV oder mehreren UVs.",
    "check": "Bei dichotomer AV genügt die binäre Variante.",
    "how": "Die multinomiale logistische Regression erweitert die binäre Variante auf eine <b>nominale</b> AV mit <b>mehr als zwei</b> ungeordneten Kategorien. Sie wählt eine Referenzkategorie und modelliert für jede übrige Kategorie deren Log-Odds gegenüber dieser Referenz. Sie steht hier, weil die AV nominal mit mehreren Kategorien ist und metrische oder mehrere UVs vorliegen. Wären die Kategorien geordnet, wäre die ordinale Regression passender; bei nur zwei Kategorien die binäre."
  },
  "r_mod_anova": {
    "name": "Mehrfaktorielle ANOVA",
    "why": "Metrische AV; <b>UV und Moderator definieren beide Gruppen</b>. Die Interaktion UV×Moderator beantwortet die Moderationsfrage.",
    "check": "Beide Faktoren kategorial → klassisches faktorielles Design. Ein metrischer Faktor → ANCOVA bzw. moderierte Regression.",
    "how": "Moderation heißt: Der Effekt der UV auf die AV hängt vom Moderator ab – ein „Effekt auf einen Effekt“. Wenn UV und Moderator beide Gruppen definieren, ist das eine <b>mehrfaktorielle (z. B. zweifaktorielle) ANOVA</b>: Sie zerlegt die Varianz in die <b>Haupteffekte</b> beider Faktoren und – entscheidend für die Moderation – den <b>Interaktionseffekt</b> UV×Moderator. Ein signifikanter Interaktionsterm bedeutet, dass der Gruppenunterschied der UV je nach Moderatorstufe verschieden ausfällt. Sie steht hier, weil beide Faktoren kategorial sind; bei einer Crossover-Interaktion interpretiert man die Haupteffekte nicht isoliert, sondern die Interaktion."
  },
  "r_mod_ancova": {
    "name": "ANCOVA / ANOVA mit Moderator-Interaktion",
    "why": "Metrische AV; <b>UV kategorial, Moderator metrisch</b>. Der metrische Moderator geht als Kovariate ein, geprüft wird die Interaktion mit der Gruppen-UV.",
    "check": "Ist der Moderator stattdessen kategorial → mehrfaktorielle ANOVA. Ist die UV metrisch → moderierte Regression.",
    "how": "Ist die UV kategorial, der Moderator aber metrisch, lässt sich die Moderation als <b>ANCOVA mit Interaktion</b> modellieren: Der metrische Moderator geht als Kovariate ein, und geprüft wird der <b>Interaktionsterm Gruppe×Kovariate</b>. Ist er signifikant, unterscheiden sich die Gruppen-Effekte über die Ausprägung des Moderators hinweg (die Regressionsgeraden je Gruppe sind nicht parallel). Sie steht hier wegen der Kombination kategoriale UV + metrischer Moderator; ist der Moderator ebenfalls kategorial, wird es eine mehrfaktorielle ANOVA."
  },
  "r_mod_groupreg": {
    "name": "Moderierte Regression (Gruppen-Moderator)",
    "why": "Metrische AV; <b>UV metrisch, Moderator kategorial</b>. Die Steigung der UV darf je Moderatorgruppe variieren – getestet über das Produkt UV×Gruppenindikator.",
    "check": "Inhaltlich oft als „unterschiedliche Steigungen je Gruppe“ formuliert; entspricht einer ANCOVA-Sicht mit metrischer UV.",
    "how": "Bei metrischer UV und gruppendefiniertem Moderator prüft man, ob die <b>Steigung</b> der UV-AV-Beziehung je Moderatorgruppe verschieden ist. In der Regression nimmt man dazu das Produkt aus UV und Gruppenindikator(en) auf; ein signifikanter Produktterm zeigt unterschiedliche Steigungen und damit Moderation. Das ist dieselbe Idee wie eine ANCOVA, nur mit der metrischen Variable als eigentlichem Prädiktor. Sie steht hier wegen metrischer UV + kategorialem Moderator."
  },
  "r_mod_modreg": {
    "name": "Moderierte Regression (Produktterm)",
    "why": "Metrische AV; <b>UV und Moderator beide metrisch</b>. Es wird ein <b>Interaktionsterm</b> (UV × Moderator, meist zentriert) in die Regression aufgenommen.",
    "check": "Signifikanter Produktterm = Moderation. Zentrieren der Prädiktoren erleichtert die Interpretation der Haupteffekte.",
    "how": "Sind UV und Moderator beide metrisch, prüft die <b>moderierte Regression</b> einen <b>Produktterm</b> UV×Moderator: AV = b₁·UV + b₂·Moderator + b₃·(UV×Moderator). Der Koeffizient b₃ ist der Moderationseffekt – er gibt an, wie sich die Wirkung der UV pro Einheit des Moderators ändert. Üblich ist, beide Prädiktoren vorher zu <b>zentrieren</b>, damit die Haupteffekte interpretierbar bleiben und Multikollinearität mit dem Produktterm sinkt. Sie steht hier, weil beide Variablen metrisch sind."
  },
  "r_mod_loglin": {
    "name": "Logistische Regression / loglineare Modelle mit Interaktion",
    "why": "<b>Nicht-metrische AV</b> (dichotom/nominal/ordinal): Die Moderation wird über einen Interaktionsterm in der passenden (binär-, multinomial- oder ordinal-)logistischen Regression bzw. einem loglinearen Modell geprüft.",
    "check": "Die Verfahrensfamilie richtet sich nach dem AV-Niveau wie auf der Zusammenhangsseite; ergänzt wird jeweils der Interaktionsterm UV×Moderator.",
    "how": "Ist die AV nicht metrisch, verschiebt sich die Moderation in die Familie der <b>logistischen bzw. loglinearen Modelle</b>: Man wählt – wie auf der Zusammenhangsseite – das zum AV-Niveau passende Verfahren (binär-, multinomial- oder ordinal-logistisch) und nimmt zusätzlich einen <b>Interaktionsterm UV×Moderator</b> auf. Ein signifikanter Interaktionsterm zeigt, dass der Einfluss der UV auf die (Log-)Odds der AV vom Moderator abhängt. Sie steht hier als Sammelknoten für alle nicht-metrischen AV; das konkrete Verfahren richtet sich nach Dichotomie/Nominal-/Ordinalniveau der AV."
  },
  "r_mediation": {
    "name": "Mediationsanalyse",
    "why": "Prüft, ob der Effekt einer UV auf die AV (teilweise) über eine dritte Variable (Mediator) vermittelt wird – moderne Praxis nutzt bootstrap-basierte Konfidenzintervalle des Indirekteffekts.",
    "check": "Mediation (Mechanismus: UV→M→AV) ist von Moderation (Bedingung: Effekt variiert je nach Moderator) zu unterscheiden – häufige Verwechslung.",
    "how": "Die Mediationsanalyse zerlegt den Gesamteffekt einer UV auf die AV in einen <b>direkten</b> Pfad und einen <b>indirekten</b> Pfad über einen Mediator (UV → M → AV) und prüft so, ob der Effekt ganz oder teilweise über diese Zwischenvariable vermittelt wird. Den Indirekteffekt schätzt die moderne Praxis über <b>bootstrap-basierte Konfidenzintervalle</b> statt über den älteren Sobel-Test. Sie steht hier, wenn ein vermittelnder Mechanismus geprüft werden soll. Wichtig ist die Abgrenzung zur Moderation: Mediation fragt nach dem Mechanismus (wie/warum), Moderation nach der Bedingung (für wen/wann der Effekt variiert)."
  },
  "r_kaplanmeier": {
    "name": "Kaplan-Meier-Schätzer",
    "why": "Deskriptive Schätzung der Überlebensfunktion über die Zeit, wenn für manche Fälle der Endpunkt nicht erreicht ist (Zensierung) – Grundbaustein der Survival-Analyse.",
    "check": "Für den Vergleich von Überlebenskurven zwischen Gruppen → Log-Rank-Test. Für Prädiktoreffekte → Cox-Regression.",
    "how": "Der Kaplan-Meier-Schätzer berechnet die <b>Überlebensfunktion</b> als Treppenkurve: An jedem Ereigniszeitpunkt wird der Anteil der weiterhin „Überlebenden“ aktualisiert, wobei <b>zensierte</b> Fälle (Endpunkt nicht beobachtet) korrekt nur bis zu ihrem Ausscheiden zählen. So nutzt er auch unvollständige Verläufe, statt sie zu verwerfen. Er steht hier als deskriptiver Grundbaustein der Survival-Analyse, wenn die AV eine Zeit bis zum Ereignis ist. Für den Vergleich von Überlebenskurven zwischen Gruppen folgt der Log-Rank-Test, für Prädiktoreffekte die Cox-Regression."
  },
  "r_logrank": {
    "name": "Log-Rank-Test",
    "why": "Vergleicht die Überlebenskurven von zwei oder mehr Gruppen auf Gleichheit – das Survival-Pendant zum Gruppenvergleich.",
    "check": "Beschreibt Unterschiede, ohne Prädiktoren zu quantifizieren. Für adjustierte Effekte/Kovariaten → Cox-Regression.",
    "how": "Der Log-Rank-Test vergleicht <b>Überlebenskurven</b> mehrerer Gruppen, indem er an jedem Ereigniszeitpunkt die beobachtete mit der unter Gleichheit erwarteten Ereigniszahl je Gruppe vergleicht und diese Differenzen über die Zeit aufsummiert. Er ist damit das Survival-Pendant zum Gruppenvergleich und berücksichtigt Zensierung. Er steht hier, wenn zwei oder mehr Gruppen hinsichtlich ihres Überlebensverlaufs verglichen werden sollen. Er sagt nur, <b>ob</b> sich die Kurven unterscheiden – für adjustierte Effekte oder Kovariaten ist die Cox-Regression nötig."
  },
  "r_cox": {
    "name": "Cox-Regression (Proportional Hazards)",
    "why": "Modelliert den Einfluss mehrerer Prädiktoren auf die Hazard-Rate (Ereignisrisiko über die Zeit), mit Zensierung – das Regressionsmodell der Survival-Analyse.",
    "check": "Setzt proportionale Hazards voraus; bei Verletzung sind zeitabhängige Kovariaten oder erweiterte Modelle nötig.",
    "how": "Die Cox-Regression modelliert die <b>Hazard-Rate</b> (das momentane Ereignisrisiko über die Zeit) als Produkt aus einer unspezifizierten Basis-Hazard und dem Einfluss der Prädiktoren; deren Koeffizienten lassen sich als <b>Hazard Ratios</b> deuten. Weil die Form der Basis-Hazard offenbleibt, ist sie flexibel und nutzt zensierte Daten. Sie steht hier, wenn mehrere Prädiktoren gleichzeitig auf eine Zeit-bis-Ereignis-AV bezogen werden sollen – das Regressionsmodell der Survival-Analyse. Sie setzt <b>proportionale Hazards</b> voraus; ist diese Annahme verletzt, braucht es zeitabhängige Kovariaten oder erweiterte Modelle.",
    "warn": true
  },
  "r_lmm": {
    "name": "Lineares Mixed-Model (LMM)",
    "why": "Metrische AV bei genesteten/hierarchischen Daten (Messungen in Personen, Personen in Gruppen/Kliniken) – trennt feste von zufälligen Effekten. Erfordert Long-Format der Daten.",
    "check": "Sobald Daten genested sind, sind klassische ANOVA/Regression nicht mehr angemessen – die ganze Modellklasse ändert sich. Wide- vs. Long-Format beachten.",
    "how": "Das lineare Mixed-Model erweitert die Regression um <b>zufällige Effekte</b> und trägt damit der Tatsache Rechnung, dass Beobachtungen <b>genested</b> sind (z. B. Messungen in Personen, Personen in Kliniken) und sich innerhalb einer Einheit ähneln. Es trennt feste Effekte (durchschnittliche Zusammenhänge) von zufälligen Effekten (Variation zwischen den Einheiten) und schätzt beide gemeinsam. Es steht hier für eine metrische AV bei hierarchischen Daten und setzt das <b>Long-Format</b> voraus. Sobald Daten genested sind, sind klassische ANOVA/Regression nicht mehr angemessen, weil sie die Abhängigkeit der Beobachtungen ignorieren.",
    "warn": true
  },
  "r_glmm": {
    "name": "Generalisiertes Mixed-Model (GLMM)",
    "why": "Wie LMM, aber für nicht-metrische AV (binär, Zähldaten, ordinal) bei genesteten Daten – kombiniert Mixed-Model-Logik mit generalisierter Regression.",
    "check": "AV-Niveau bestimmt die Verteilungsfamilie (analog zur Zusammenhangsseite); ergänzt um zufällige Effekte für die Datenhierarchie.",
    "how": "Das generalisierte Mixed-Model verbindet die Logik des Mixed-Models (<b>zufällige Effekte</b> für genestete Daten) mit der generalisierten Regression: Über eine passende <b>Verteilungsfamilie und Link-Funktion</b> verarbeitet es nicht-metrische AV wie binäre, Zähl- oder ordinale Daten. Es ist damit die Verallgemeinerung des LMM auf AV, die keine metrische, normalverteilte Größe sind. Es steht hier, wenn solche AV in hierarchischen Daten vorliegen. Welche Verteilungsfamilie zu wählen ist, richtet sich nach dem AV-Niveau – analog zur Zusammenhangsseite, nur ergänzt um zufällige Effekte für die Datenhierarchie.",
    "warn": true
  },
  "r_ttest_1s": {
    "name": "Einstichproben-t-Test",
    "why": "Metrische Variable aus einer einzigen Stichprobe, die gegen einen theoretisch erwarteten Mittelwert μ₀ geprüft wird (z. B. Testwert gegen Normwert) – bei normalverteilten Daten ist das der Einstichproben-t-Test.",
    "check": "Bei verletzter Normalverteilung → Einstichproben-Wilcoxon-Test. Werden zwei Gruppen statt eines Sollwerts verglichen → t-Test für unabhängige bzw. abhängige Stichproben.",
    "how": "Der Einstichproben-t-Test setzt die Differenz zwischen Stichprobenmittelwert und theoretischem Sollwert μ₀ ins Verhältnis zum <b>Standardfehler des Mittelwerts</b>. Je weiter der beobachtete Mittelwert vom Sollwert entfernt liegt (relativ zur Streuung), desto größer der t-Wert; aus t und den Freiheitsgraden folgt der p-Wert. Er steht hier, weil nicht zwei Gruppen verglichen werden, sondern eine Stichprobe <b>gegen einen festen theoretischen Wert</b> – und die AV metrisch und normalverteilt ist. Ist die Normalverteilung verletzt, übernimmt der Einstichproben-Wilcoxon-Test."
  },
  "r_wilcoxon_1s": {
    "name": "Einstichproben-Wilcoxon-Test",
    "why": "Eine Stichprobe gegen einen theoretischen Median, wenn die Daten ordinal sind oder die Normalverteilung verletzt ist – die nonparametrische Alternative zum Einstichproben-t-Test.",
    "check": "Bei erfüllter Normalverteilung ist der Einstichproben-t-Test stärker. Geht es um zwei verbundene Messungen statt um einen Sollwert → Wilcoxon-Vorzeichen-Rang-Test (Paardifferenzen).",
    "how": "Der Einstichproben-Wilcoxon-Test bildet die Differenzen jedes Werts zum theoretischen Sollwert, rangordnet deren <b>Beträge</b> und prüft, ob positive und negative Abweichungen symmetrisch ausfallen oder systematisch in eine Richtung weisen. Weil er auf Rängen statt Rohwerten rechnet, braucht er keine Normalverteilung und nur ordinales Niveau. Er steht hier, weil eine Stichprobe gegen einen Sollwert geprüft wird und die Voraussetzungen des t-Tests nicht erfüllt sind. Noch voraussetzungsärmer, aber schwächer, ist der Einstichproben-Vorzeichentest."
  },
  "r_binomial": {
    "name": "Binomialtest",
    "why": "Dichotome Variable aus einer Stichprobe, deren beobachteter Anteil gegen einen theoretisch erwarteten Anteil p₀ geprüft wird (z. B. Trefferquote gegen Ratewahrscheinlichkeit 0,5).",
    "check": "Mehr als zwei Kategorien gegen eine Sollverteilung → χ²-Anpassungstest. Zwei Gruppen mit dichotomer AV → Vierfeldertafel / χ²-Test.",
    "how": "Der Binomialtest berechnet <b>exakt</b>, wie wahrscheinlich der beobachtete (oder ein extremerer) Trefferanteil wäre, wenn der wahre Anteil dem theoretischen p₀ entspräche – direkt über die Binomialverteilung. Weil er exakt rechnet, ist er auch bei kleinen Stichproben gültig. Er steht hier, weil eine einzelne dichotome Variable gegen einen <b>Sollwert-Anteil</b> getestet wird, nicht zwei Gruppen verglichen werden. Bei großen Stichproben nähert sich das Ergebnis dem χ²-Anpassungstest an."
  },
  "r_chi_gof": {
    "name": "χ²-Anpassungstest (Goodness-of-Fit)",
    "why": "Nominale Variable aus einer Stichprobe, deren beobachtete Kategorienhäufigkeiten gegen eine theoretisch erwartete Verteilung geprüft werden (z. B. Gleichverteilung über Antwortoptionen).",
    "check": "Zwei nominale Variablen auf Zusammenhang → χ²-Unabhängigkeitstest (Kreuztabelle). Nur zwei Kategorien → Binomialtest ist exakter.",
    "how": "Der χ²-Anpassungstest vergleicht die <b>beobachteten</b> Häufigkeiten je Kategorie mit den Häufigkeiten, die eine <b>theoretische Verteilung</b> vorhersagt; große Abweichungen summieren sich zu einem großen χ². Er prüft also die Passung der Daten an ein Modell, nicht den Zusammenhang zweier Variablen. Er steht hier, weil eine einzelne nominale Variable gegen eine Sollverteilung getestet wird. Die erwarteten Häufigkeiten sollten groß genug sein (Faustregel ≥ 5), sonst ist er unzuverlässig."
  },
  "r_vtlg_fit": {
    "name": "Verteilungs-Anpassungstest (KS / Shapiro-Wilk)",
    "why": "Prüft, ob eine metrische Variable einer theoretischen Verteilung folgt – am häufigsten der Normalverteilung. Doppelrolle: eigenständige Fragestellung „gegen die Theorie“ und zugleich Voraussetzungstest für viele parametrische Verfahren.",
    "check": "Als Voraussetzungstest mit Vorsicht interpretieren (siehe Konzept „Grenzen von Voraussetzungstests“). Für den Vergleich zweier Verteilungen statt gegen eine Theorie → Zweistichproben-KS-Test.",
    "how": "Der Kolmogorov-Smirnov-Test vergleicht die <b>empirische</b> mit der <b>theoretischen</b> kumulativen Verteilung und nimmt die größte Abweichung als Prüfgröße; der Shapiro-Wilk-Test ist speziell auf die Normalverteilung zugeschnitten und dort meist trennschärfer. Sie stehen hier, wenn die Frage lautet, ob die Daten einer angenommenen Verteilung entsprechen. <b>Wichtige Einschränkung:</b> Bei kleinen Stichproben haben sie wenig Power (Verletzungen bleiben unentdeckt), bei sehr großen schlagen schon unbedeutende Abweichungen an – ihre Aussagekraft als Voraussetzungstest ist daher begrenzt.",
    "warn": true
  }
};
