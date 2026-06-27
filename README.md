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

[index.html](index.html) ohne Build-Schritt und **ohne externe Abhängigkeiten**. Die Schriften (Fraunces, Spline Sans, Spline Sans Mono) werden selbst gehostet im Ordner [fonts/](fonts/) ausgeliefert – es gibt **keine Anfragen an Google-Server**, daher keine Übertragung von Besucher-IP-Adressen an Dritte (DSGVO-konform). Lokal nutzbar durch einfaches Öffnen der Datei im Browser.

Die Schriften stammen von Google Fonts und stehen unter der [SIL Open Font License 1.1](https://openfontlicense.org/).

## Kontext

Entstanden als Lernhilfe zur Vorlesung *Forschungsmethoden* (MSc Psychologie). Ohne Gewähr – im Zweifel gilt das Vorlesungsskript.
