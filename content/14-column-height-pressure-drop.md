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
  - x-axis pressure, y-axis height. P is highest at the bottom and falls upwards. Side callouts: "boiling points shift", "gas density changes", "equilibria/mass transfer change", "may need compression".
- **Ergun iteration** · flowchart [Week 4, p. 37]
  - Boxes: compute $G_0$, Re → guess ΔP (10 % of $P_{tot}$) → $\bar\rho$ → Ergun ΔP → converged? No: loop back with the new ΔP. Yes: done.
  - Show the course iterations: 18000 → 1679 → 1602 → 1602 Pa [Week 4, p. 39].
- **Interactive plot**: Ergun ΔP vs superficial velocity, solved iteratively [Week 4, p. 36–39].
  - Slider: $v_0$ from 0.5 to 3.0 m/s (start 2.1). Fixed L = 6 m, $D_p$ = 0.015 m, ε = 0.85, T = 298 K, $P_{tot}$ = 1.8 bar, η = 2·10⁻⁵ Pa·s, M = 0.029 kg/mol.
  - Show $G_0$, Re, the iteration count and ΔP (Pa and mbar) live, plus the ΔP vs $v_0$ curve. At 2.1 m/s it must show $G_0 = 4.42$ kg/(m²·s), Re = 2.21·10⁴ and ΔP ≈ 1602 Pa (16 mbar).

## Equations

### Packed height
$$H_{col} \approx H_{pack} = \text{HETP}\cdot N_{TS}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $H_{pack}$ | packed height | m |
| HETP | height equivalent of a theoretical plate | m |
| $N_{TS}$ | theoretical stages in the column (reboiler excluded) | – |

[Week 4, p. 28; FormelarkKP3010.pdf, p. 3, eq. 34]

### HETP estimates
$$\text{random: } \text{HETP} = 18\, d_p \qquad\qquad \text{structured: } \text{HETP} = \frac{100}{a} + 0.1$$
| Symbol | Meaning | Unit |
|---|---|---|
| $d_p$ | nominal packing diameter | m |
| $a$ | specific surface (interfacial) area | m²/m³ |
| HETP | result | m |

Rules of thumb. [Week 4, p. 28; FormelarkKP3010.pdf, p. 3, eq. 32–33]

### Tray column height
$$H_{col} = H_{space}\cdot N_S$$
| Symbol | Meaning | Unit |
|---|---|---|
| $H_{space}$ | tray spacing (0.15–1.0 m) | m |
| $N_S$ | number of real trays (rounded up) | – |

If an overall efficiency is given, $N_S = N_{TS}/E_O$ first (page 17). [Week 4, p. 30; FormelarkKP3010.pdf, p. 3, eq. 35; practice exam 2 solutions.pdf, Q2b]

### Ergun equation (packed-bed pressure drop)
$$\frac{\Delta P}{L} = \frac{G_0^2}{D_p\,\bar\rho}\cdot\frac{1-\epsilon}{\epsilon^3}\cdot\left(1.75 + \frac{150}{\mathrm{Re}}\right)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\Delta P$ | pressure drop | Pa |
| $L$ | length of packed bed | m |
| $G_0$ | inlet mass flux | kg/(m²·s) |
| $D_p$ | effective particle (packing) diameter | m |
| $\bar\rho$ | average gas density | kg/m³ |
| $\epsilon$ | bed porosity (void fraction) | – |
| Re | Reynolds number | – |

[Week 4, p. 36; FormelarkKP3010.pdf, p. 3, eq. 36]

### Ergun auxiliaries
$$G_0 = \rho_0 v_0 = \frac{\bar M P_{tot}}{RT}\, v_0, \qquad \mathrm{Re} = \frac{G_0 D_p}{(1-\epsilon)\eta}, \qquad \bar\rho = \frac{\bar M}{RT}\left(P_{tot} - \frac{\Delta P}{2}\right)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $v_0$ | superficial velocity at the inlet | m/s |
| $\bar M$ | gas molar mass | kg/mol |
| $P_{tot}$ | inlet total pressure | Pa |
| $\eta$ | gas viscosity | Pa·s |

$\bar\rho$ depends on ΔP, so solve iteratively. [Week 4, p. 36–37; FormelarkKP3010.pdf, p. 3, eq. 37–39]

## Worked example
**Benzene/toluene column height for three column types** [Week 4, p. 31–33]
McCabe–Thiele gives 7.6 theoretical stages including an external reboiler.
1. Remove the reboiler: $7.6 - 1 = 6.6$ theoretical stages in the column.
2. **Plate column**, 60 cm spacing: 0.6 of a plate isn't possible, so 7 plates. $H_{col} = 0.60\cdot 7 = 4.20$ m.
3. **Random packing**, 1" metal Pall rings: $d_p = 25.4$ mm $= 0.0254$ m, so $\text{HETP} = 18\cdot 0.0254 = 0.457$ m.
4. $H_{col} = 0.457\cdot 6.6 = 3.02$ m.
5. **Structured packing**, $a = 223$ m²/m³: $\text{HETP} = 100/223 + 0.1 = 0.548$ m.
6. $H_{col} = 0.548\cdot 6.6 = 3.62$ m.
7. The example also gives a viscosity (0.279 mPa·s) and α (2.465), but this calculation doesn't use them. They're the inputs for efficiency correlations (page 17).

## Faded example
**Ergun pressure drop over a 6 m packed bed** [Week 4, p. 38–39]
$D_p = 15$ mm, ε = 0.85, T = 298 K, $P_{tot}$ = 1.8 bar, $v_0$ = 2.1 m/s, η = 2·10⁻⁵ Pa·s, M = 0.029 kg/mol.
1. **(try)** Inlet mass flux. → $G_0 = \frac{0.029\cdot 1.8\cdot 10^5}{8.314\cdot 298}\cdot 2.1 = 4.42$ kg/(m²·s).
2. **(try)** Reynolds number. → $\mathrm{Re} = \frac{4.42\cdot 0.015}{(1-0.85)\cdot 2\cdot 10^{-5}} = 2.21\cdot 10^4$.
3. Guess ΔP = 18000 Pa (10 % of $P_{tot}$): $\bar\rho = 2.00$ kg/m³, and Ergun gives ΔP = 1679 Pa.
4. **(try)** Iterate with 1679 Pa. → $\bar\rho = 2.10$ kg/m³ and ΔP = 1602 Pa.
5. **(try)** Iterate again with 1602 Pa. → $\bar\rho = 2.10$ kg/m³ and ΔP = 1602 Pa. Converged.
6. **(try)** Express it in mbar. → ΔP ≈ 16 mbar.

[Week 4, p. 39]

## Exam traps
- **Subtract the reboiler stage**: 7 theoretical with an external reboiler means 6 in the column. [practice exam 2 solutions.pdf, Q2b; Week 4, p. 32]
- **Round real trays up, not packing stages**: plates go to whole numbers (6.6 → 7, 8.57 → 9). Packed height uses the fractional $N_{TS}$ directly. [Week 4, p. 32–33; practice exam 2 solutions.pdf, Q2b]
- **$d_p$ in metres**: $18\,d_p$ needs $d_p$ in m (1" = 0.0254 m). Practice exam 1 writes it as $0.018\cdot d_p$ with $d_p$ in mm ($0.018\cdot 64 = 1.152$ m). It's the same thing, but mixing them gives a factor of 1000. [practice_exam_solutions.pdf, Ex. 3e; exercise_04_solutions.pdf, Oppg. 1e]
- **Random vs structured HETP formula**: random uses $d_p$, structured uses $a$. Using the wrong one is a common slip. [FormelarkKP3010.pdf, p. 3, eq. 32–33]
- **Efficiency before spacing**: if an overall tray efficiency is given, divide the theoretical trays by it before multiplying by the spacing ($6/0.7 = 8.57$ → 9 trays → 4.05 m). [practice exam 2 solutions.pdf, Q2b]
- **Bigger packing isn't free capacity**: 50 mm Pall rings give a larger HETP, so fewer stages fit in the same height and CO₂ removal drops. [practice exam 2 solutions.pdf, Q3e.3]
- **Ergun needs iteration**: $\bar\rho$ uses $P_{tot} - \Delta P/2$. Start at 10 % of $P_{tot}$ and repeat until ΔP stops changing. [Week 4, p. 37; exercise_04_solutions.pdf, Oppg. 1e]
- **$(1-\epsilon)$ appears twice**: in the Ergun factor $(1-\epsilon)/\epsilon^3$ and in the Re denominator $(1-\epsilon)\eta$. [Week 4, p. 36]

## Past exam tasks
- Practice exam 1, Ex. 3e: packing height with HETP = $0.018\,d_p$ (mm), $d_p$ = 64 mm, $N_{TS}$ = 2.48, giving 2.86 m.
- Autumn 2022, Q2b: tray column height with an external reboiler, 70 % overall efficiency and 45 cm spacing (7 theoretical → 6 → 9 trays → 4.05 m).
- Autumn 2022, Q3d: packing height for 25 mm Pall rings with 11.4 theoretical stages (HETP 0.45 m, H = 5.13 m).
- Autumn 2022, Q3e.3: effect of switching to 50 mm Pall rings at the same height (less CO₂ removed).

## Test yourself
**Q:** Mellapak 250Y ($a = 250$ m²/m³), 6.8 theoretical stages. Packed height?
**A:** HETP = 100/250 + 0.1 = 0.5 m, so H = 0.5·6.8 = 3.4 m. [exercise_04_solutions.pdf, Oppg. 1d]

**Q:** Same duty with 1" metal Pall rings?
**A:** HETP = 18·0.0254 = 0.46 m, so H = 0.46·6.8 = 3.2 m. [exercise_04_solutions.pdf, Oppg. 1e]

**Q:** For that Pall-ring tower (ε = 0.954, $v_0$ = 2.5 m/s, M = 0.029 kg/mol, η = 2·10⁻⁵ Pa·s, 1 atm, 298.15 K), what are $G_0$, Re and the converged ΔP?
**A:** $G_0 = 2.97$ kg/(m²·s), Re = 81812, ΔP ≈ 86.7 Pa after three iterations from a 10 % guess. [exercise_04_solutions.pdf, Oppg. 1e]

**Q:** Acetone/water: McCabe–Thiele gives 3 stages including the external reboiler, tray spacing 30 cm. Column height?
**A:** 2 plates in the column, so $0.30\cdot 2 = 0.60$ m. [exercise_04_solutions.pdf, Oppg. 2d]

**Q:** Give three reasons the pressure drop matters in column design.
**A:** Boiling points change, gas density changes, and mass-transfer resistances and equilibria change. Compression may also be needed. [Week 4, p. 35]

## Sources
- [Week 4 - Design of columns with solutions.pdf, p. 28–39]
- [FormelarkKP3010.pdf, p. 3, eq. 32–39]
- [exercise_04_eng.pdf, Exercise 1d–e, 2d]
- [exercise_04_solutions.pdf, Oppg. 1d–e, 2d]
- [practice_exam_solutions.pdf, Ex. 3e]
- [practice exam 2 solutions.pdf, Q2b, Q3d, Q3e.3]

> GAP: Week 4, p. 29 ("diagrams or manufacturer information" for HETP) is an image with no data.
