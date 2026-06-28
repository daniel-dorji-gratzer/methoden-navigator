/* Hypothesentypen-Manifest – Reihenfolge & Texte der Einstiege.
   Aus dieser Liste werden Welcome-Karten und Umschalter generiert.
   Jede id muss einen Baum in trees.js haben. Struktur: data/schema.md */
window.ROOTS = [
  {
    "id": "unterschied",
    "tag": "UNTERSCHIEDE",
    "label": "Unterschiedshypothesen",
    "short": "Unterschied",
    "desc": "Vergleich von Gruppen, Messungen oder gegen einen Sollwert"
  },
  {
    "id": "zusammenhang",
    "tag": "ZUSAMMENHANG",
    "label": "Zusammenhangshypothesen",
    "short": "Zusammenhang",
    "desc": "Korrelationen und Regressionen zwischen Variablen"
  },
  {
    "id": "moderation",
    "tag": "MODERATION",
    "label": "Moderationshypothesen",
    "short": "Moderation",
    "desc": "Einfluss einer dritten Variable auf einen Effekt"
  },
  {
    "id": "mediation",
    "tag": "MEDIATION",
    "label": "Mediationshypothesen",
    "short": "Mediation",
    "desc": "Wirkung über eine vermittelnde dritte Variable (Mechanismus)"
  }
];
