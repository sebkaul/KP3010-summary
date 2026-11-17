---
slug: 14-column-height-pressure-drop
title: Column height (HETP, tray spacing) and pressure drop (Ergun)
topic: column-design
exam_weight: medium
exam_weight_note: "Packing/column height on 2 of 2 practice exams (Practice exam 1 Ex. 3e; Autumn 2022 Q2b, Q3d, Q3e.3); Ergun only in exercises"
builds_on: [06-feed-line-mccabe-thiele, 12-trays-vs-packing, 13-column-diameter-flooding]
used_in: [16-htu-ntu-packed-columns, 17-plate-murphree-efficiency]
sources: ["Week 4 - Design of columns with solutions.pdf", "FormelarkKP3010.pdf", "exercise_04_eng.pdf", "exercise_04_solutions.pdf", "practice_exam_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** McCabe–Thiele gives 7.6 theoretical stages including an external reboiler. How many theoretical stages must the column itself provide?
**A:** 6.6. [Week 4, p. 32]

**Q:** What does HETP stand for?
**A:** Height Equivalent of a Theoretical Plate: the packed height that gives one theoretical stage. [Week 4, p. 28]

**Q:** Where in a column is the pressure highest?
**A:** At the bottom. The gas meets resistance as it moves up. [Week 4, p. 34]

## Mental model
Theoretical stages are abstract. Height turns them into metres. In a packed column, each theoretical stage corresponds to a slice of packing one HETP tall, so the height is HETP × stages. Better packing means a smaller HETP and a shorter column [Week 4, p. 28]. Course rules of thumb give HETP from the packing's nominal size (random) or its specific area (structured) [Week 4, p. 28]. In a tray column, height is just the number of real trays times the tray spacing. You can't have a fractional tray, so round up [Week 4, p. 30, 32]. Either way, first remove the reboiler from the stage count, because it's a stage but not part of the column [Week 4, p. 32]. The gas loses pressure as it squeezes up through the packing. That shifts boiling points, densities and equilibria and may need a compressor [Week 4, p. 34–35]. For packed beds the Ergun equation predicts the drop, but the gas density depends on the very ΔP you're calculating, so you iterate [Week 4, p. 36–37].

## Concepts and definitions
- **HETP (Height Equivalent of a Theoretical Plate)**: packing height per theoretical stage. High packing performance gives a lower packing height. [Week 4, p. 28]
- **Packed column height**: $H_{col} \approx H_{pack} = \text{HETP}\cdot N_{TS}$. Alternatively use diagrams or manufacturer information. [Week 4, p. 28–29]
- **Tray column height**: $H_{col} = H_{space}\cdot N_S$. Tray spacing ranges from 0.15 to 1.0 m and depends on column diameter, vapour load and properties. [Week 4, p. 30]
- **External/partial reboiler**: counts as a theoretical stage, so subtract it before computing the column height. [Week 4, p. 32; exercise_04_solutions.pdf, Oppg. 2d]
- **Real trays**: a fraction of a plate isn't possible, so round up (6.6 → 7). [Week 4, p. 32]
- **Pressure drop**: present in both packed and plate columns. It is important because boiling points, gas density, mass-transfer resistances and equilibria may change, and compression may be required (cost). Plate-column ΔP is out of scope. Packed columns use the Ergun equation. [Week 4, p. 34–35]
- **Ergun iterative approach**: (1) calculate $G_0$ and Re; (2) assume ΔP (e.g. 0.10·$P_{tot}$); (3) calculate $\bar\rho$; (4) calculate ΔP and compare; (5) adjust until it converges. [Week 4, p. 37]
- **Packing size and HETP**: larger packing (50 mm vs 25 mm Pall rings) has a larger HETP, so the same packed height gives fewer theoretical stages and less removal. [practice exam 2 solutions.pdf, Q3e.3]

## Visuals
- **HETP slicing and tray spacing** · cross-section [Week 4, p. 28, 30]
  - Left: packed bed divided by dashed lines into equal slices, each labelled "1 HETP = 1 theoretical stage", with a total-height arrow "$H = \text{HETP}\cdot N_{TS}$".
  - Right: tray column with trays spaced $H_{space}$ apart, total-height arrow "$H = H_{space}\cdot N_S$". A reboiler drawn outside the column, labelled "stage, but not column height".
- **Same separation, three column types** · plot (bar chart) [Week 4, p. 31–33]
  - Benzene/toluene, 6.6 column stages. Bars: plate column (0.60 m spacing, 7 plates) 4.20 m; random 1" metal Pall rings (HETP 0.457 m) 3.02 m; structured packing with a = 223 m²/m³ (HETP 0.548 m) 3.62 m. y-axis: column height (m).
- **Pressure profile up a column** · curve sketch [Week 4, p. 34–35]
  - x-axis pressure, y-axis height. P is highest at the bottom and
