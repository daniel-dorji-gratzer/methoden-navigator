/* Hypothesentypen-Manifest – Reihenfolge, Texte und Icons der Einstiege.
   Aus dieser Liste werden Welcome-Karten und Umschalter generiert.
   Jede id muss einen Baum in trees.js haben. Struktur: data/schema.md */
window.ROOTS = [
  {
    "id": "unterschied",
    "title": "Unterschiede",
    "short": "Unterschied",
    "label": "Unterschiedshypothesen",
    "desc": "Vergleich von Gruppen, Messungen oder gegen einen Sollwert",
    "icon": "<svg viewBox=\"0 0 22 22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"><line x1=\"6\" y1=\"17\" x2=\"6\" y2=\"10\"/><line x1=\"11\" y1=\"17\" x2=\"11\" y2=\"5\"/><line x1=\"16\" y1=\"17\" x2=\"16\" y2=\"13\"/></svg>"
  },
  {
    "id": "zusammenhang",
    "title": "Zusammenhänge",
    "short": "Zusammenhang",
    "label": "Zusammenhangshypothesen",
    "desc": "Korrelationen und Regressionen zwischen Variablen",
    "icon": "<svg viewBox=\"0 0 22 22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"><line x1=\"4\" y1=\"18\" x2=\"18\" y2=\"6\"/><circle cx=\"7\" cy=\"14.5\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"11\" cy=\"11.5\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"14.5\" cy=\"9\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\"/></svg>"
  },
  {
    "id": "moderation",
    "title": "Moderation",
    "short": "Moderation",
    "label": "Moderationshypothesen",
    "desc": "Einfluss einer dritten Variable auf einen Effekt",
    "icon": "<svg viewBox=\"0 0 22 22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"4\" y1=\"15\" x2=\"18\" y2=\"15\"/><path d=\"M15 12l3 3-3 3\"/><line x1=\"11\" y1=\"5\" x2=\"11\" y2=\"12\"/><path d=\"M8.5 9.5l2.5 2.5 2.5-2.5\"/></svg>"
  },
  {
    "id": "mediation",
    "title": "Mediation",
    "short": "Mediation",
    "label": "Mediationshypothesen",
    "desc": "Wirkung über eine vermittelnde dritte Variable (Mechanismus)",
    "icon": "<svg viewBox=\"0 0 22 22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"2.4\"/><line x1=\"3\" y1=\"11\" x2=\"8\" y2=\"11\"/><line x1=\"14\" y1=\"11\" x2=\"19\" y2=\"11\"/><path d=\"M16.5 9l2 2-2 2\"/></svg>"
  }
];
