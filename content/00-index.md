---
subject: KP3010
name: "Introduksjon til separasjonsprosesser (NTNU)"
language: en
term_language_note: "Content in English (slides are English). Formula-sheet terms kept in Norwegian where useful (tilbakeløpsforhold, driftslinje, forsterker, avdriver, løsningsentalpi)."
sources:
  lectures: "Week 1–9 lecture PDFs 'Week N - <topic> with solutions.pdf' (73, 48, 49, 39, 28, 39, 42, 36, 43 slides)"
  formula_sheet: "FormelarkKP3010.pdf (12 p, Norwegian; eq. 1–102; p. 11 unit/Henry tables, p. 12 flooding charts)"
  tables: "packing_tables.pdf (random + structured packing data; F_p in ft²/ft³)"
  exercises: "exercise_01–09 (task sheets, _eng versions) + exercise_0N_solutions.pdf (official)"
  past_exams: "practice_exam_solutions.pdf (Practice exam 1, no year), practice exam 2 solutions.pdf (Autumn 2022)"
excluded_sources: "Øving N Ferdig.pdf and the project docs (exercise_0X.docx, *.ipynb, *.py) are the student's own answers — never used as source of truth"
citation_convention: "[file, p. N] where p = PDF page = slide number for lecture files; formula sheet cited by page + eq. number; exercises by 'Oppg. N' (Norwegian solutions) or 'Problem N'; exams by 'Ex. N' (Practice exam 1) or 'QN' (Autumn 2022)"
exam_weighting_method: "Points per question in Autumn 2022 (64 p total: VLE 9, distillation 12, absorption 12, extraction 8, adsorption 7, crystallization 8, membranes 8) plus presence in Practice exam 1 (points only given for Ex. 1–3: 9, 10, 13). high = own question ≥ 9 p on both exams; medium = own question 7–8 p, or recurring sub-questions inside another question; low = barely or never tested. Page-level exam_weight can differ from its topic weight."
exam_structure: "Both practice exams: 7 questions, one per process, in course order (VLE, distillation, absorption incl. column design/Kremser, extraction, adsorption, crystallization, membranes). Mostly diagram reading + short calculations; fallback values are given for later sub-questions."

topics:
  - id: vle
    title: Vapour–liquid equilibrium
    weight: high
    weight_note: "Q1 on 2 of 2 practice exams (9 p each). Diagram reading (p–x, T–x), bubble/dew points, non-ideality, azeotropes, α from a point"
    summary: Why separations work, K and selectivity, Raoult/Dalton, VLE diagrams, relative volatility and azeotropes.
    pages:
      - { slug: 01-separation-basics-k-selectivity, title: "Separation basics — techniques, K and selectivity" }
      - { slug: 02-vapor-pressure-raoult-dalton, title: "Vapour pressure, Raoult's and Dalton's law" }
      - { slug: 03-vle-diagrams-azeotropes, title: "VLE diagrams, relative volatility and azeotropes" }
  - id: flash-distillation
    title: Equilibrium (flash) distillation
    weight: medium
    weight_note: "No stand-alone question; lever rule/mole balance inside Q1 (Autumn 2022 Q1d), lever rule again in extraction"
    summary: Single equilibrium stage, balance line vs equilibrium curve, analytical α-quadratic, inverse lever rule.
    pages:
      - { slug: 04-equilibrium-flash-distillation, title: "Equilibrium and flash distillation" }
  - id: distillation
    title: Multistage distillation
    weight: high
    weight_note: "Q2 on 2 of 2 practice exams (10–12 p). Balances, R from intercept, q-line, feed stage, R_min, reboiler duty"
    summary: Column balances, operating lines, q-line, McCabe–Thiele, N_min and R_min.
    pages:
      - { slug: 05-column-balances-operating-lines, title: "Column balances, reflux ratio and operating lines" }
      - { slug: 06-feed-line-mccabe-thiele, title: "Feed line (q-line) and McCabe–Thiele stepping" }
      - { slug: 07-nmin-rmin-limiting-conditions, title: "Minimum stages, minimum reflux and limiting conditions" }
  - id: absorption
    title: Absorption and stripping
    weight: high
    weight_note: "Q3 on 2 of 2 practice exams (12–13 p). Henry/K, mole ratios, Kremser, L_min; Q3 also carries the column-design sub-questions"
    summary: Henry's law, inert flows and mole ratios, McCabe–Thiele for absorption/stripping, Kremser, minimum absorbent flow.
    pages:
      - { slug: 08-absorption-principles-henrys-law, title: "Absorption principles and Henry's law" }
      - { slug: 09-absorption-equilibrium-stage-mole-ratios, title: "Single equilibrium stage, inert flows and mole ratios" }
      - { slug: 10-multistage-absorption-stripping, title: "Multistage absorption and stripping (McCabe–Thiele)" }
      - { slug: 11-kremser-minimum-absorbent-flow, title: "Kremser equation and minimum absorbent flow" }
  - id: column-design
    title: Design of columns
    weight: medium
    weight_note: "Sub-questions inside Q2/Q3 on 2 of 2 exams: flooding definition + flooding velocity (Practice exam 1 Ex. 3a–b), packing/tray height (Ex. 3e; Autumn 2022 Q2b, Q3d, Q3e.3)"
    summary: Trays vs packing, F_p, flooding and diameter, HETP and tray-spacing height, Ergun pressure drop.
    pages:
      - { slug: 12-trays-vs-packing, title: "Tray columns vs packed columns" }
      - { slug: 13-column-diameter-flooding, title: "Column diameter and flooding" }
      - { slug: 14-column-height-pressure-drop, title: "Column height (HETP, tray spacing) and pressure drop (Ergun)" }
  - id: mass-transfer
    title: Efficiency and mass transfer
    weight: low
    weight_note: "Only overall tray efficiency examined (Autumn 2022 Q2b); film model and HTU/NTU only in exercise 5"
    summary: Film model and k_OV, HTU/NTU, overall and Murphree plate efficiency.
    pages:
      - { slug: 15-film-model-mass-transfer, title: "Film model and mass transfer coefficients" }
      - { slug: 16-htu-ntu-packed-columns, title: "HTU/NTU — packed height from mass transfer" }
      - { slug: 17-plate-murphree-efficiency, title: "Overall and Murphree plate efficiency" }
  - id: extraction
    title: Liquid–liquid extraction
    weight: medium
    weight_note: "Q4 on 2 of 2 practice exams (8 p in Autumn 2022), always ternary-diagram based: solvent suitability, F/S/M/R/E points, minimum solvent"
    summary: Solvent selection, ternary diagrams and lever rule, stage schemes, counter-current design (McCabe–Thiele, Kremser, ternary stepping, S_min).
    pages:
      - { slug: 18-lle-principles-solvent-equipment, title: "LLE principles, solvent selection and equipment" }
      - { slug: 19-ternary-diagrams, title: "Ternary diagrams — reading points, tie lines and the mixing point" }
      - { slug: 20-extraction-stage-schemes, title: "Single, co-, cross- and counter-current extraction stages" }
      - { slug: 21-counter-current-extraction-design, title: "Design of counter-current extraction" }
  - id: adsorption
    title: Adsorption and ion exchange
    weight: medium
    weight_note: "Q5 on 2 of 2 practice exams (7 p in Autumn 2022): Langmuir constants, favourable isotherm, bed mass / saturation time"
    summary: Adsorbent properties, Langmuir (single and competitive), kinetics and fixed beds, TSA/PSA/purge cycles, ion exchange.
    pages:
      - { slug: 22-adsorbents-properties, title: "Adsorption basics and adsorbent properties" }
      - { slug: 23-adsorption-isotherms, title: "Adsorption isotherms — Langmuir" }
      - { slug: 24-fixed-bed-adsorption, title: "Adsorption kinetics and fixed-bed adsorption" }
      - { slug: 25-adsorption-cycles-ion-exchange, title: "Adsorption cycles (TSA, PSA, purge) and ion exchange" }
  - id: crystallization
    title: Crystallization and precipitation
    weight: medium
    weight_note: "Q6 on 2 of 2 practice exams (8 p in Autumn 2022): supersaturation methods, solubility-curve reading, yield, evaporation fraction"
    summary: Supersaturation and crystal quality, mass balances and yield, metastable zone and methods, nucleation (CNT), growth, crystallizers.
    pages:
      - { slug: 26-crystallization-fundamentals, title: "Crystallization fundamentals — supersaturation, crystal quality and solubility" }
      - { slug: 27-crystallization-mass-balance-yield, title: "Crystallization mass balances and yield" }
      - { slug: 28-supersaturation-metastable-zone, title: "Supersaturation measures, metastable zone and methods" }
      - { slug: 29-nucleation-growth-crystallizers, title: "Nucleation (CNT), crystal growth and crystallizer operation" }
  - id: membranes
    title: Membrane separation
    weight: medium
    weight_note: "Q7 on 2 of 2 practice exams (8 p in Autumn 2022): flux/thickness, selectivity, barrer conversions, boundary-layer effect"
    summary: Membrane processes and transport mechanisms, osmosis, flux/permeability/selectivity, concentration polarization, modules and design.
    pages:
      - { slug: 30-membrane-fundamentals-osmosis, title: "Membrane fundamentals — processes, transport mechanisms and osmosis" }
      - { slug: 31-membrane-flux-permeability-selectivity, title: "Membrane flux, permeability, permeance and selectivity" }
      - { slug: 32-concentration-polarization, title: "Concentration polarization and boundary-layer resistance" }
      - { slug: 33-membrane-modules-design, title: "Membrane modules and design of a membrane separation" }

past_exams:
  - id: practice-1
    label: "Practice exam 1 (year not stated)"
    file: "practice_exam_solutions.pdf"
    note: "Questions + solutions in one file; points only for Ex. 1–3"
    tasks_by_page:
      "01": ["Ex. 5a"]
      "02": ["Ex. 1b", "Ex. 1d"]
      "03": ["Ex. 1a", "Ex. 1c", "Ex. 1d", "Ex. 2a"]
      "05": ["Ex. 2d"]
      "06": ["Ex. 2b", "Ex. 2d", "Ex. 2e"]
      "07": ["Ex. 2c"]
      "09": ["Ex. 3c"]
      "11": ["Ex. 3c", "Ex. 3d"]
      "12": ["Ex. 3b (packing data)"]
      "13": ["Ex. 3a", "Ex. 3b"]
      "14": ["Ex. 3e"]
      "19": ["Ex. 4a", "Ex. 4b", "Ex. 4c"]
      "21": ["Ex. 4c"]
      "22": ["Ex. 5a"]
      "23": ["Ex. 5a"]
      "24": ["Ex. 5b"]
      "26": ["Ex. 6a", "Ex. 6b"]
      "27": ["Ex. 6b"]
      "28": ["Ex. 6a"]
      "30": ["Ex. 7a"]
      "31": ["Ex. 7b", "Ex. 7c"]
  - id: h2022
    label: "Exam autumn 2022 (practice exam 2)"
    file: "practice exam 2 solutions.pdf"
    note: "Questions + solutions in one file; 64 p total"
    tasks_by_page:
      "03": ["Q1a", "Q1b", "Q1c", "Q1d", "Q2a.1"]
      "04": ["Q1d"]
      "05": ["Q2a.2", "Q2a.5"]
      "06": ["Q2a.3", "Q2a.4", "Q2b"]
      "08": ["Q3a", "Q3e.1", "Q3e.2"]
      "09": ["Q3b"]
      "10": ["Q3e.4"]
      "11": ["Q3c"]
      "12": ["Q3 packing table", "Q3e.3"]
      "14": ["Q2b", "Q3d", "Q3e.3"]
      "17": ["Q2b"]
      "18": ["Q4a"]
      "19": ["Q4b"]
      "21": ["Q4c"]
      "23": ["Q5b"]
      "24": ["Q5a", "Q5c"]
      "26": ["Q6.1", "Q6.4"]
      "27": ["Q6.2", "Q6.3"]
      "28": ["Q6.1", "Q6.4"]
      "31": ["Q7a", "Q7b"]
      "32": ["Q7c"]

exercises:
  - { id: ex1, pages: ["02", "03", "04"], solution: "full (Norwegian)" }
  - { id: ex2, pages: ["05", "06", "07"], solution: "full (Norwegian)" }
  - { id: ex3, pages: ["08", "09", "10", "11"], solution: "full (Norwegian); Oppg. 3d internally inconsistent" }
  - { id: ex4, pages: ["12", "13", "14"], solution: "full (Norwegian); typo in Oppg. 1c" }
  - { id: ex5, pages: ["11", "14", "16", "17"], solution: "full (Norwegian)" }
  - { id: ex6, pages: ["18", "19", "20", "21"], solution: "scanned images (P1 a–e, P2 a–d); text not extractable" }
  - { id: ex7, pages: ["23", "24", "25"], solution: "BLANK — only short answers on the task sheet" }
  - { id: ex8, pages: ["26", "27"], solution: "only Problem 1 solved; short answers on the task sheet" }
  - { id: ex9, pages: ["30", "31", "32"], solution: "only Problem 3 solved; no task sheet, no short answers" }

source_status:
  missing_files: ["exercise_09.pdf (task sheet; problem statements are repeated in the solution file)", "Table 11.1 of the textbook (referenced in ex. 9 Problem 1)"]
  image_only_content: "Most diagrams (VLE, McCabe–Thiele, ternary, flooding charts, solubility curves, isotherm figures, module figures) are images. Only quoted read-off values are available, so those visuals must be drawn schematically with just the quoted points placed exactly."
  pages_without_faded_example: ["15", "25", "29", "33"]
  pages_with_reasoning_only_worked_example: ["29", "33"]
  illustrative_only_interactives: ["29 (dimensionless CNT)", "33 (module count / cut)"]

known_discrepancies:
  - "W1 p. 31: P_tot = P°_T + P°_B written, but numbers use partial pressures (p_T + p_B) [page 02]"
  - "W1 p. 59: balance 3 writes y_B·B, should be x_B·B [page 04]"
  - "W1 Example 3 (p. 69–71) asks for 'mass flows' but is solved in kmol/h [page 04]"
  - "W2 p. 31: stripper balance written −B·x_D, should be −B·x_B [page 06]"
  - "Formula sheet text extraction renders L', L'', G' as 'L0', 'L00', 'G0' (eq. 9–11, 22, 24). They are inert/section flows, not inlet flows [pages 05, 09]"
  - "Kremser A: slide uses total inlet flows L_in/(K·G_in) (A = 1.32), formula sheet uses inert L'/(K·G') (A = 1.35) [page 11]"
  - "Exercise 3 Oppg. 3d: slope 47.32 and A = 1.05 used, but L'/G' = 5880/116.47 = 50.5, and its own X_N = 9.43e-4 matches 50.5. Not used as an example [page 11]"
  - "Henry van 't Hoff (K vs T) is NOT on the formula sheet; formula-sheet eq. 78 is the solid–liquid solubility version [pages 08, 26]"
  - "W4 p. 19: gas mass flow 645 kg/h used, while the example states 653.2 kg/h feed — unexplained [page 13]"
  - "Exercise 4 Oppg. 1c: A = 0.155/2.04 written as 0.76 m², should be 0.076 m² (D = 0.31 m is consistent with 0.076) [page 13]"
  - "Exercise 4 Oppg. 2f: text says capacity parameter 0.045, calculation uses 0.041 [page 13]"
  - "HETP random packing: 18·d_p with d_p in m (slides, formula sheet) vs 0.018·d_p with d_p in mm (Practice exam 1 Ex. 3e) — same thing, different units [page 14]"
  - "W5 Example 2: flows given in mol/s but intermediate flows labelled kmol/h [page 16]"
  - "HTU Q_V basis: slide uses total gas flow, exercise 5 Oppg. 3 uses inert G' [page 16]"
  - "E_O–E_M relation: formula sheet written with S; exercise 5 solution substitutes A for an absorber [page 17]"
  - "W6 p. 2 vs p. 4: component letters swapped (p. 2: solvent B extracts solute A from carrier C; p. 4: carrier A, solvent B, solute C) [page 18]"
  - "W6 p. 19: K written as x_R/x_E; definition elsewhere (p. 7, p. 16) is x_E/x_R [page 20]"
  - "W6 p. 29: K = x/y with y = extract, inconsistent with formula-sheet eq. 60 (K = y/x). Use the formula sheet [page 21]"
  - "Exercise 6 P2b asks for m³ wash water per day; solution stops at 5.1 t/h [page 19]"
  - "W7 p. 4: physisorption called 'intramolecular', chemisorption 'intermolecular'; also 'absorption of hydrogen on activated carbon' (should be adsorption) [page 22]"
  - "Formula sheet eq. 78 / W8 p. 10: ln x_s = (ΔH_melt/R)(1/T − 1/T_melt) as printed gives x_s > 1 for T < T_melt with ΔH_melt > 0 — sign check flagged, not corrected [page 26]"
  - "W8 p. 21 / formula sheet eq. 82: undercooling written ΔT = T − T_m (negative below T_m) [page 28]"
  - "Mean free path: slide W9 p. 20 has 2σ_i, formula sheet eq. 94 has √2·σ_i. Use the formula sheet [page 31]"
  - "W9 p. 12 says the thermodynamic potential of pure water is 'lower'; page 30 must not restate this as 'higher' (see build_fixes) [page 30]"

build_fixes:
  - page: 30-membrane-fundamentals-osmosis
    section: "Concepts and definitions"
    find: "- **Osmosis**: with a membrane permeable to water but not salts, pure water has the lower thermodynamic potential... the driving force is the osmotic pressure Π. At equilibrium it equals the hydrostatic pressure. Applying $P_{ext} > \\Pi_{OSM}$ reverses the process to give pure water (reverse osmosis). [Week 9, p. 12]"
    replace: "- **Osmosis**: with a membrane permeable to water but not salts, water moves toward the salt side because the thermodynamic potential of pure water differs from that of the solution (the slide says it is lower). The driving force is the osmotic pressure Π. At equilibrium it equals the hydrostatic pressure. Applying $P_{ext} > \\Pi_{OSM}$ reverses the process to give pure water (reverse osmosis). [Week 9, p. 12]"
  - page: 30-membrane-fundamentals-osmosis
    section: "Mental model"
    find: "because pure water has the higher thermodynamic potential,"
    replace: "because of the difference in thermodynamic potential between pure water and the solution [Week 9, p. 12],"
  - page: "*"
    rule: "Any equation or statement listed in known_discrepancies must render with a small 'source discrepancy' badge linking to this list; never silently 'correct' the course material beyond build_fixes."
---

## Topic map

```mermaid
graph TD
  subgraph VLE
    P01[01 Basics, K, S] --> P02[02 Raoult/Dalton] --> P03[03 VLE diagrams, α, azeotropes]
  end
  subgraph Flash
    P04[04 Flash distillation]
  end
  subgraph Distillation
    P05[05 Balances, operating lines] --> P06[06 q-line, McCabe–Thiele] --> P07[07 N_min, R_min]
  end
  subgraph Absorption
    P08[08 Henry's law] --> P09[09 Stage, mole ratios] --> P10[10 Multistage MT] --> P11[11 Kremser, L_min]
  end
  subgraph Column design
    P12[12 Trays vs packing] --> P13[13 Diameter, flooding] --> P14[14 Height, Ergun]
  end
  subgraph Mass transfer
    P15[15 Film model] --> P16[16 HTU/NTU]
    P17[17 Plate efficiency]
  end
  subgraph Extraction
    P18[18 Principles, solvent] --> P19[19 Ternary diagrams] --> P20[20 Stage schemes] --> P21[21 Counter-current design]
  end
  subgraph Adsorption
    P22[22 Adsorbents] --> P23[23 Isotherms] --> P24[24 Fixed bed] --> P25[25 Cycles, ion exchange]
  end
  subgraph Crystallization
    P26[26 Fundamentals] --> P27[27 Mass balance, yield] --> P28[28 Supersaturation, MSZ] --> P29[29 Nucleation, growth]
  end
  subgraph Membranes
    P30[30 Fundamentals, osmosis] --> P31[31 Flux, selectivity] --> P32[32 Conc. polarization] --> P33[33 Modules, design]
  end

  P02 --> P04
  P03 --> P04
  P04 --> P05
  P03 --> P06
  P05 --> P10
  P07 --> P11
  P11 --> P14
  P06 --> P14
  P14 --> P17
  P11 --> P16
  P08 --> P15
  P04 --> P19
  P11 --> P21
  P07 --> P21
  P01 --> P22
  P01 --> P31
  P15 --> P32
  P26 -.-> P28
```

The equilibrium-stage idea runs through the whole course. VLE (01–03) gives the equilibrium line, and flash (04) is one stage. Distillation, absorption and counter-current extraction stack stages and solve them with McCabe–Thiele or Kremser (05–11, 20–21). Column design and mass transfer then turn the number of stages into a diameter and a height (12–17). The minimum-flow "pinch" idea repeats three times: R_min (07), L_min (11) and S_min (21). The ratio-of-K selectivity idea from 01 comes back in adsorption (22–23) and membranes (31). The lever rule (04) comes back on ternary diagrams (19).

**Recommended reading order for the exam (by weight):** 01 → 02 → 03 → 05 → 06 → 07 → 08 → 09 → 11 → 10 → 04 → 13 → 14 → 12 → 19 → 21 → 18 → 20 → 23 → 24 → 22 → 25 → 26 → 27 → 28 → 29 → 31 → 32 → 30 → 33 → 17 → 16 → 15.

**Exercise coupling:** Ex. 1 → 02–04. Ex. 2 → 05–07. Ex. 3 → 08–11. Ex. 4 → 12–14. Ex. 5 → 11, 14, 16, 17. Ex. 6 → 18–21. Ex. 7 → 23–25. Ex. 8 → 26–27. Ex. 9 → 30–32. The student's own answers (`Øving N Ferdig`) are deliberately not linked.
