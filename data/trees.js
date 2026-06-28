/* Datengetrieben – AUTOMATISCH erzeugt, nicht von Hand editieren.
   Quelle: tools/migrate_extract.py. Struktur: data/schema.md */
window.TREES = {
  "unterschied": {
    "start": "u_root",
    "nodes": {
      "u_design": {
        "tag": "Studiendesign",
        "q": "Wie hängen deine Stichproben zusammen?",
        "hint": "Werden verschiedene Personen/Gruppen verglichen (unabhängig) oder dieselben Personen mehrfach gemessen (abhängig)?",
        "opts": [
          {
            "label": "Unabhängige Stichproben (ZSF)",
            "crumb": "ZSF",
            "go": "u_zsf_stufen"
          },
          {
            "label": "Abhängige Stichproben (ISF)",
            "crumb": "ISF",
            "go": "u_isf_struktur"
          }
        ]
      },
      "u_zsf_stufen": {
        "tag": "Anzahl Stufen",
        "q": "Wie viele Gruppen / Stufen vergleichst du?",
        "hint": "Zwei Bedingungen oder mehr als zwei?",
        "opts": [
          {
            "label": "2 Stufen",
            "crumb": "2 Stufen",
            "go": "u_zsf2_av"
          },
          {
            "label": "Mehr als 2 Stufen",
            "crumb": ">2 Stufen",
            "go": "u_zsf3_av"
          }
        ]
      },
      "u_zsf2_av": {
        "tag": "Skalenniveau der AV",
        "q": "Welches Skalenniveau hat die abhängige Variable?",
        "hint": "Metrisch, ordinal oder nominal?",
        "opts": [
          {
            "label": "Metrisch",
            "crumb": "AV metrisch",
            "go": "u_zsf2_nv"
          },
          {
            "label": "Ordinal",
            "crumb": "AV ordinal",
            "go": "r_mwu"
          },
          {
            "label": "Nominal",
            "crumb": "AV nominal",
            "go": "r_kreuz"
          }
        ]
      },
      "u_zsf2_nv": {
        "tag": "Voraussetzung",
        "q": "Sind die Daten pro Gruppe normalverteilt?",
        "hint": "NV pro Gruppe – relevant für parametrische Verfahren.",
        "opts": [
          {
            "label": "Ja, normalverteilt",
            "crumb": "NV: ja",
            "go": "u_zsf2_var"
          },
          {
            "label": "Nein",
            "crumb": "NV: nein",
            "go": "r_mwu"
          }
        ]
      },
      "u_zsf2_var": {
        "tag": "Voraussetzung",
        "q": "Sind die Varianzen homogen?",
        "hint": "Homogene Varianzen entscheiden zwischen klassischem t-Test und Welch.",
        "opts": [
          {
            "label": "Ja, homogen",
            "crumb": "Varianzen homogen",
            "go": "r_ttest_zsf"
          },
          {
            "label": "Nein",
            "crumb": "Varianzen heterogen",
            "go": "r_welch"
          }
        ]
      },
      "u_zsf3_av": {
        "tag": "Skalenniveau der AV",
        "q": "Welches Skalenniveau hat die abhängige Variable?",
        "hint": "Bei mehr als zwei Gruppen.",
        "opts": [
          {
            "label": "Metrisch",
            "crumb": "AV metrisch",
            "go": "u_zsf3_nv"
          },
          {
            "label": "Ordinal",
            "crumb": "AV ordinal",
            "go": "u_zsf3_ordnung"
          },
          {
            "label": "Nominal",
            "crumb": "AV nominal",
            "go": "r_kreuz"
          }
        ]
      },
      "u_zsf3_nv": {
        "tag": "Voraussetzung",
        "q": "Sind die Daten pro Gruppe normalverteilt?",
        "hint": "NV pro Gruppe.",
        "opts": [
          {
            "label": "Ja, normalverteilt",
            "crumb": "NV: ja",
            "go": "u_zsf3_var"
          },
          {
            "label": "Nein",
            "crumb": "NV: nein",
            "go": "r_kruskal"
          }
        ]
      },
      "u_zsf3_var": {
        "tag": "Voraussetzung",
        "q": "Sind die Varianzen homogen?",
        "hint": "Entscheidet zwischen klassischer ANOVA und Welch + Games-Howell.",
        "opts": [
          {
            "label": "Ja, homogen",
            "crumb": "Varianzen homogen",
            "go": "r_anova"
          },
          {
            "label": "Nein",
            "crumb": "Varianzen heterogen",
            "go": "r_gameshowell"
          }
        ]
      },
      "u_zsf3_ordnung": {
        "tag": "Hypothesenform",
        "q": "Hat deine Hypothese eine geordnete Erwartung über die Gruppen?",
        "hint": "Erwartest du eine bestimmte Reihenfolge (Trend) zwischen den Gruppen?",
        "opts": [
          {
            "label": "Ja, geordnete Reihenfolge",
            "crumb": "Ordnung: ja",
            "go": "r_jonckheere"
          },
          {
            "label": "Nein",
            "crumb": "Ordnung: nein",
            "go": "r_kruskal"
          }
        ]
      },
      "u_isf_stufen": {
        "tag": "Anzahl Stufen",
        "q": "Wie viele Messzeitpunkte / Stufen?",
        "hint": "Zwei abhängige Messungen oder mehr?",
        "opts": [
          {
            "label": "2 Stufen",
            "crumb": "2 Stufen",
            "go": "u_isf2_av"
          },
          {
            "label": "Mehr als 2 Stufen",
            "crumb": ">2 Stufen",
            "go": "u_isf3_av"
          }
        ]
      },
      "u_isf2_av": {
        "tag": "Skalenniveau der AV",
        "q": "Welches Skalenniveau hat die abhängige Variable?",
        "hint": "Bei zwei abhängigen Messungen.",
        "opts": [
          {
            "label": "Nominal",
            "crumb": "AV nominal",
            "go": "r_bowker"
          },
          {
            "label": "Dichotom",
            "crumb": "AV dichotom",
            "go": "r_mcnemar"
          },
          {
            "label": "Ordinal",
            "crumb": "AV ordinal",
            "go": "r_vorzeichen"
          },
          {
            "label": "Metrisch",
            "crumb": "AV metrisch",
            "go": "u_isf2_nv"
          }
        ]
      },
      "u_isf2_nv": {
        "tag": "Voraussetzung",
        "q": "Sind die Differenzen normalverteilt?",
        "hint": "NV der Differenzwerte (nicht der Rohwerte) ist hier entscheidend.",
        "opts": [
          {
            "label": "Ja, normalverteilt",
            "crumb": "NV Diff.: ja",
            "go": "r_ttest_isf"
          },
          {
            "label": "Nein",
            "crumb": "NV Diff.: nein",
            "go": "r_wilcoxon"
          }
        ]
      },
      "u_isf3_av": {
        "tag": "Skalenniveau der AV",
        "q": "Welches Skalenniveau hat die abhängige Variable?",
        "hint": "Bei mehr als zwei abhängigen Messungen.",
        "opts": [
          {
            "label": "Dichotom",
            "crumb": "AV dichotom",
            "go": "r_cochran"
          },
          {
            "label": "Ordinal",
            "crumb": "AV ordinal",
            "go": "r_friedman"
          },
          {
            "label": "Metrisch",
            "crumb": "AV metrisch",
            "go": "u_isf3_sph"
          }
        ]
      },
      "u_isf3_sph": {
        "tag": "Voraussetzung",
        "q": "Ist die Sphärizität gegeben? (Mauchly-Test)",
        "hint": "Sphärizität ist die zentrale Voraussetzung der ANOVA mit Messwiederholung.",
        "opts": [
          {
            "label": "Ja, angenommen",
            "crumb": "Sphärizität: ja",
            "go": "r_anova_isf"
          },
          {
            "label": "Nein, verletzt",
            "crumb": "Sphärizität: nein",
            "go": "u_isf3_eps"
          }
        ]
      },
      "u_isf3_eps": {
        "tag": "Korrektur",
        "q": "Wie groß ist das Epsilon (Greenhouse-Geisser)?",
        "hint": "ε < 0,75 oder ε ≥ 0,75 bestimmt die geeignete Korrektur.",
        "opts": [
          {
            "label": "ε < 0,75",
            "crumb": "ε < 0,75",
            "go": "r_gg"
          },
          {
            "label": "ε ≥ 0,75",
            "crumb": "ε ≥ 0,75",
            "go": "r_hf"
          }
        ]
      },
      "u_root": {
        "tag": "Vergleichsart",
        "q": "Was möchtest du vergleichen?",
        "hint": "Eine einzelne Stichprobe gegen einen festen Sollwert/die Theorie – oder Gruppen bzw. Messungen untereinander?",
        "opts": [
          {
            "label": "Eine Stichprobe gegen einen Sollwert / die Theorie",
            "crumb": "gegen Sollwert",
            "go": "es_start"
          },
          {
            "label": "Gruppen oder Messungen untereinander",
            "crumb": "Gruppenvergleich",
            "go": "u_design"
          }
        ]
      },
      "es_start": {
        "tag": "Art der Prüfung",
        "q": "Was prüfst du gegen die Theorie?",
        "hint": "Eine Kennzahl gegen einen Sollwert – oder ob die Daten einer theoretischen Verteilung folgen.",
        "opts": [
          {
            "label": "Eine Kennzahl gegen einen Sollwert (Mittelwert, Median, Anteil, Häufigkeiten)",
            "crumb": "Kennzahl vs. Sollwert",
            "go": "es_av"
          },
          {
            "label": "Ob die Daten einer theoretischen Verteilung folgen (z. B. Normalverteilung)",
            "crumb": "Verteilungsanpassung",
            "go": "r_vtlg_fit"
          }
        ]
      },
      "es_av": {
        "tag": "Skalenniveau der AV",
        "q": "Welches Skalenniveau hat die untersuchte Variable?",
        "hint": "Davon hängt das Einstichproben-Verfahren ab.",
        "opts": [
          {
            "label": "Metrisch",
            "crumb": "metrisch",
            "go": "es_nv"
          },
          {
            "label": "Ordinal",
            "crumb": "ordinal",
            "go": "r_wilcoxon_1s"
          },
          {
            "label": "Dichotom",
            "crumb": "dichotom",
            "go": "r_binomial"
          },
          {
            "label": "Nominal (mehrere Kategorien)",
            "crumb": "nominal",
            "go": "r_chi_gof"
          }
        ]
      },
      "es_nv": {
        "tag": "Voraussetzung",
        "q": "Sind die Werte (näherungsweise) normalverteilt?",
        "hint": "Bei metrischer Variable entscheidet die Normalverteilung zwischen t-Test und rangbasierter Alternative.",
        "opts": [
          {
            "label": "Ja, normalverteilt",
            "crumb": "NV: ja",
            "go": "r_ttest_1s"
          },
          {
            "label": "Nein",
            "crumb": "NV: nein",
            "go": "r_wilcoxon_1s"
          }
        ]
      },
      "u_isf_struktur": {
        "tag": "Datenstruktur",
        "q": "Wie sind die abhängigen Daten strukturiert?",
        "hint": "Klassische Messwiederholung (Messungen in Personen) – oder komplexer genested (z. B. Messungen in Personen in Kliniken, gekreuzte Effekte)?",
        "opts": [
          {
            "label": "Klassische Messwiederholung (eine Gruppierungsebene)",
            "crumb": "Messwiederholung",
            "go": "u_isf_stufen"
          },
          {
            "label": "Komplexer genested / zufällige Effekte nötig",
            "crumb": "Mehrebenen",
            "go": "mehr_av"
          }
        ]
      },
      "mehr_av": {
        "tag": "Skalenniveau der AV",
        "q": "Welches Skalenniveau hat die abhängige Variable?",
        "hint": "Bei hierarchischen Daten bestimmt das AV-Niveau, ob ein lineares oder generalisiertes Mixed-Model passt.",
        "opts": [
          {
            "label": "Metrisch",
            "crumb": "AV metrisch",
            "go": "r_lmm"
          },
          {
            "label": "Nicht-metrisch (binär, Zähl- oder ordinal)",
            "crumb": "AV nicht-metrisch",
            "go": "r_glmm"
          }
        ]
      }
    }
  },
  "zusammenhang": {
    "start": "z_av",
    "nodes": {
      "z_av": {
        "tag": "Skalenniveau der AV",
        "q": "Welches Skalenniveau hat die abhängige Variable?",
        "hint": "Davon hängt der ganze weitere Pfad ab.",
        "opts": [
          {
            "label": "Metrisch",
            "crumb": "AV metrisch",
            "go": "z_m_uv"
          },
          {
            "label": "Ordinal",
            "crumb": "AV ordinal",
            "go": "z_o_uv"
          },
          {
            "label": "Dichotom",
            "crumb": "AV dichotom",
            "go": "z_d_uv"
          },
          {
            "label": "Nominal",
            "crumb": "AV nominal",
            "go": "z_n_uv"
          }
        ]
      },
      "z_m_uv": {
        "tag": "Anzahl UVs",
        "q": "Wie viele unabhängige Variablen?",
        "hint": "Eine oder mehrere Prädiktoren?",
        "opts": [
          {
            "label": "Eine UV",
            "crumb": "1 UV",
            "go": "z_m_uvtyp"
          },
          {
            "label": "Zwei oder mehr UVs",
            "crumb": "≥2 UVs",
            "go": "r_mlr"
          }
        ]
      },
      "z_m_uvtyp": {
        "tag": "Skalenniveau der UV",
        "q": "Welches Skalenniveau hat die UV?",
        "hint": "Metrisch, ordinal oder dichotom?",
        "opts": [
          {
            "label": "Metrisch",
            "crumb": "UV metrisch",
            "go": "z_m_ausreisser"
          },
          {
            "label": "Ordinal",
            "crumb": "UV ordinal",
            "go": "r_spearman"
          },
          {
            "label": "Dichotom",
            "crumb": "UV dichotom",
            "go": "r_punktbiserial"
          }
        ]
      },
      "z_m_ausreisser": {
        "tag": "Voraussetzung",
        "q": "Gibt es Ausreißer im Streudiagramm?",
        "hint": "Ausreißer verzerren Pearson – dann ist die rangbasierte Alternative robuster.",
        "opts": [
          {
            "label": "Nein, sauber",
            "crumb": "Ausreißer: nein",
            "go": "r_pearson"
          },
          {
            "label": "Ja, Ausreißer vorhanden",
            "crumb": "Ausreißer: ja",
            "go": "r_spearman"
          }
        ]
      },
      "z_o_uv": {
        "tag": "Anzahl UVs",
        "q": "Wie viele unabhängige Variablen?",
        "hint": "",
        "opts": [
          {
            "label": "Eine UV",
            "crumb": "1 UV",
            "go": "r_spearman"
          },
          {
            "label": "Zwei oder mehr UVs",
            "crumb": "≥2 UVs",
            "go": "r_ordreg"
          }
        ]
      },
      "z_d_uv": {
        "tag": "Anzahl UVs",
        "q": "Wie viele unabhängige Variablen?",
        "hint": "",
        "opts": [
          {
            "label": "Eine UV",
            "crumb": "1 UV",
            "go": "z_d_uvtyp"
          },
          {
            "label": "Zwei oder mehr UVs",
            "crumb": "≥2 UVs",
            "go": "r_binlog"
          }
        ]
      },
      "z_d_uvtyp": {
        "tag": "Skalenniveau der UV",
        "q": "Welches Skalenniveau hat die UV?",
        "hint": "",
        "opts": [
          {
            "label": "Dichotom",
            "crumb": "UV dichotom",
            "go": "r_vierfelder"
          },
          {
            "label": "Nominal",
            "crumb": "UV nominal",
            "go": "r_kontingenz"
          },
          {
            "label": "Metrisch",
            "crumb": "UV metrisch",
            "go": "r_binlog"
          }
        ]
      },
      "z_n_uv": {
        "tag": "Anzahl UVs",
        "q": "Wie viele unabhängige Variablen?",
        "hint": "",
        "opts": [
          {
            "label": "Eine UV",
            "crumb": "1 UV",
            "go": "z_n_uvtyp"
          },
          {
            "label": "Zwei oder mehr UVs",
            "crumb": "≥2 UVs",
            "go": "r_multinom"
          }
        ]
      },
      "z_n_uvtyp": {
        "tag": "Skalenniveau der UV",
        "q": "Welches Skalenniveau hat die UV?",
        "hint": "",
        "opts": [
          {
            "label": "Dichotom oder nominal",
            "crumb": "UV dichotom/nominal",
            "go": "r_kontingenz"
          },
          {
            "label": "Metrisch",
            "crumb": "UV metrisch",
            "go": "r_multinom"
          }
        ]
      }
    }
  },
  "moderation": {
    "start": "m_av",
    "nodes": {
      "m_av": {
        "tag": "Skalenniveau der AV",
        "q": "Welches Skalenniveau hat die abhängige Variable?",
        "hint": "Bei Moderation wird geprüft, ob ein Moderator den Effekt der UV auf die AV verändert – „ein Effekt auf einen Effekt“. Das AV-Niveau bestimmt die Verfahrensfamilie.",
        "opts": [
          {
            "label": "Metrisch",
            "crumb": "AV metrisch",
            "go": "m_uv"
          },
          {
            "label": "Ordinal / dichotom / nominal",
            "crumb": "AV nicht-metrisch",
            "go": "r_mod_loglin"
          }
        ]
      },
      "m_uv": {
        "tag": "Art der UV",
        "q": "Definiert die unabhängige Variable Gruppen oder ist sie metrisch?",
        "hint": "Erste der beiden Kreuzungsachsen aus den vier Moderationssituationen (T05).",
        "opts": [
          {
            "label": "UV definiert Gruppen",
            "crumb": "UV kategorial",
            "go": "m_uvkat_mod"
          },
          {
            "label": "UV ist metrisch",
            "crumb": "UV metrisch",
            "go": "m_uvmet_mod"
          }
        ]
      },
      "m_uvkat_mod": {
        "tag": "Art des Moderators",
        "q": "Definiert der Moderator Gruppen oder ist er metrisch?",
        "hint": "Zweite Kreuzungsachse.",
        "opts": [
          {
            "label": "Moderator definiert Gruppen",
            "crumb": "Mod. kategorial",
            "go": "r_mod_anova"
          },
          {
            "label": "Moderator ist metrisch",
            "crumb": "Mod. metrisch",
            "go": "r_mod_ancova"
          }
        ]
      },
      "m_uvmet_mod": {
        "tag": "Art des Moderators",
        "q": "Definiert der Moderator Gruppen oder ist er metrisch?",
        "hint": "Zweite Kreuzungsachse.",
        "opts": [
          {
            "label": "Moderator definiert Gruppen",
            "crumb": "Mod. kategorial",
            "go": "r_mod_groupreg"
          },
          {
            "label": "Moderator ist metrisch",
            "crumb": "Mod. metrisch",
            "go": "r_mod_modreg"
          }
        ]
      }
    }
  },
  "mediation": {
    "start": "med_start",
    "nodes": {
      "med_start": {
        "tag": "Mediationshypothese",
        "q": "Prüfst du, ob der Effekt der UV auf die AV über einen Mediator vermittelt wird?",
        "hint": "Mechanismus UV → Mediator → AV. Abzugrenzen von Moderation (der Effekt variiert je nach dritter Variable).",
        "opts": [
          {
            "label": "Ja – den indirekten Effekt (Mechanismus) prüfen",
            "crumb": "Mediation",
            "go": "r_mediation"
          }
        ]
      }
    }
  },
  "survival": {
    "start": "surv_start",
    "nodes": {
      "surv_start": {
        "tag": "Fragestellung",
        "q": "Du hast Zeit-bis-Ereignis-Daten (mit Zensierung) – was ist dein Ziel?",
        "hint": "Survival-Analyse: Ergebnis ist die Zeit bis zu einem Ereignis; für manche Fälle ist der Endpunkt nicht beobachtet (Zensierung).",
        "opts": [
          {
            "label": "Den Überlebensverlauf beschreiben/schätzen",
            "crumb": "Verlauf schätzen",
            "go": "r_kaplanmeier"
          },
          {
            "label": "Überlebenskurven zwischen Gruppen vergleichen",
            "crumb": "Gruppen vergleichen",
            "go": "r_logrank"
          },
          {
            "label": "Einfluss mehrerer Prädiktoren auf das Risiko modellieren",
            "crumb": "Prädiktoren",
            "go": "r_cox"
          }
        ]
      }
    }
  }
};
