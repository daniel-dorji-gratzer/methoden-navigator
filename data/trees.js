/* Datengetrieben – AUTOMATISCH erzeugt, nicht von Hand editieren.
   Quelle: tools/migrate_extract.py. Struktur: data/schema.md */
window.TREES = {
  "unterschied": {
    "start": "u_design",
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
            "go": "u_isf_stufen"
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
  }
};
