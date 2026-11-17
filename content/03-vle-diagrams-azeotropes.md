---
slug: 03-vle-diagrams-azeotropes
title: VLE diagrams, relative volatility and azeotropes
topic: vle
exam_weight: high
exam_weight_note: "Diagram reading is most of Q1 on 2 of 2 practice exams; relative volatility also in Autumn 2022 Q2a; azeotrope limit in Practice exam 1 Ex. 2a"
builds_on: [02-vapor-pressure-raoult-dalton]
used_in: [04-equilibrium-flash-distillation, 06-feed-line-mccabe-thiele, 07-nmin-rmin-limiting-conditions]
sources: ["Week 1 - Introduction  VLE with solutions.pdf", "FormelarkKP3010.pdf", "exercise_01_eng.pdf", "exercise_01_solutions.pdf", "practice_exam_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** On a constant-pressure T–x–y diagram, is the vapour region at the top or the bottom?
**A:** At the top (high T). It sits above the vapour dew point line. On a constant-temperature p–x–y diagram it is the other way round: vapour is at the bottom (low p). [Week 1, p. 36–38; practice_exam_solutions.pdf, Ex. 1a]

**Q:** What does it mean if liquid and vapour have the same composition?
**A:** The mixture is at an azeotrope, and normal distillation can't get past that composition. [Week 1, p. 52–53; exercise_01_solutions.pdf, Oppg. 3a]

**Q:** Two components have relative volatility $\alpha_{AB} = 1$. Can they be separated by distillation?
**A:** No. [Week 1, p. 44]

## Mental model
Raoult and Dalton (page 02) give vapour composition from liquid composition. A VLE diagram plots that relationship so you can read it off instead of calculating [Week 1, p. 32]. There are three views. Isothermal p–x–y holds T fixed, isobaric T–x–y holds p fixed (the more common case in practice), and the composition diagram y–x has p fixed and T not reported [Week 1, p. 33, 36, 47]. In the p–x–y and T–x–y views, two lines bound a two-phase region. The bubble point line is where a liquid starts to evaporate, and the dew point line is where a vapour starts to condense [Week 1, p. 33–35]. Inside the two-phase region the liquid and vapour compositions are fixed by the two lines at the same T (or p), and the overall composition decides how much of each you have [Week 1, p. 41–43]. How far the y–x curve bulges above the diagonal is set by the relative volatility. A larger $\alpha$ means an easier separation, $\alpha = 1$ means impossible, and where the curve crosses the diagonal (an azeotrope) distillation stops [Week 1, p. 44, 52–53].

## Concepts and definitions
- **Three VLE diagram types**: isobaric, isothermal and composition. [Week 1, p. 32]
- **Isothermal VLE (p–x–y)**: constant T, so constant pure-component vapour pressures. A mixture has no single boiling point but a trajectory. [Week 1, p. 33–34]
- **Liquid bubble point line** ($x_A$, blue): where a liquid starts to evaporate. [Week 1, p. 33–34]
- **Vapour dew point line** ($y_A$, red): where a vapour starts to condense, i.e. on cooling forms the first drop of liquid. [Week 1, p. 33, 35; practice exam 2 solutions.pdf, Q1b]
- **Axis convention**: the most volatile component is always reported on the x-axis. The other follows from $x_A + x_B = 1$. [Week 1, p. 33]
- **Isobaric VLE (T–x–y)**: constant pressure, more common. The pure components have different boiling points ($T_1$, $T_2$). At equilibrium, liquid and gas have the same temperature. [Week 1, p. 36–37]
- **Two-phase region**: between the lines both phases coexist. Liquid composition is read on the bubble line and vapour composition on the dew line, at the same T. The overall mole fraction is unchanged. [Week 1, p. 41–43]
- **Inverse lever rule (arm-lever rule)**: $|ML| \cdot n_L = |MV| \cdot n_V$, where M is the mixing point and L, V are the bubble and dew line points at that T. It is equivalent to a component mole balance. [practice exam 2 solutions.pdf, Q1d; Week 1, p. 43]
- **Composition (equilibrium) diagram (y–x)**: constant pressure, temperature not reported. [Week 1, p. 47]
- **Relative volatility ($\alpha_{AB}$)**: separation by evaporation relies on differences in volatility (flyktighet). A more volatile component has a higher vapour pressure and so a larger presence in the vapour. A high $\alpha_{AB}$ makes separation easier, and $\alpha_{AB} = 1$ cannot be separated. [Week 1, p. 44]
- **Non-ideal mixture**: most real liquid mixtures. Raoult's law needs a liquid-phase activity coefficient $\gamma_A$, which depends strongly on the interactions in the mixture and its composition. [Week 1, p. 51]
- **Recognising non-ideality**: for an ideal mixture the bubble point line on a p–x diagram is straight (unmodified Raoult). If it isn't straight, the mixture is non-ideal. [practice_exam_solutions.pdf, Ex. 1c]
- **Azeotrope**: liquid and vapour composition are the same, $x_A = y_A = x_{AZ}$. Distillation can't go past it. On p–x or T–x diagrams the dew and bubble lines touch there, and on a y–x diagram the equilibrium curve crosses $y = x$. Azeotropes can be minimum or maximum boiling. Example: ethanol–water, where normal distillation can't exceed 95.6 % ethanol. [Week 1, p. 52–53; exercise_01_solutions.pdf, Oppg. 3a]

## Visuals
- **The three VLE diagram types side by side** · curve sketch [Week 1, p. 32–36, 47]
  - Panel 1, isothermal p–x–y: x-axis $x_A, y_A$ (–), y-axis $P$ (bar). Straight bubble line (blue) above a curved dew line (red). Liquid on top, vapour at the bottom.
  - Panel 2, isobaric T–x–y: x-axis $x_A, y_A$ (–), y-axis T (°C). Bubble line (blue) below a dew line (red). Vapour on top, liquid at the bottom. The lines meet at the pure-component boiling points $T_1$ (pure B, left) and $T_2$ (pure A, right).
  - Panel 3, y–x: both axes 0–1, diagonal $y = x$, equilibrium curve bulging above it.
  - Highlight that the vapour/liquid regions swap between panels 1 and 2.
- **Isobaric n-hexane/n-octane walk-through** · curve sketch with labelled points [Week 1, p. 37–43]
  - T–x–y diagram, x-axis $x_{HEX}$ (–), y-axis T (°C), with regions "liquid", "liquid + vapour" and "vapour".
  - Points to show: (0.4, 70 °C) = liquid; $x_{OCT} = 0.1$ ($x_{HEX} = 0.9$) at 93.3 °C = vapour [p. 38].
  - Cooling path: vapour $y_{HEX} = 0.7$ from 125 °C drops vertically to the dew line at about 96 °C (C) [p. 40].
  - Heating path at $x_{HEX} = 0.3$: bubble point B at about 95 °C, first vapour 0.7 (C); then E at 107.2 °C with tie line from D ($x = 0.18$) to F ($y = 0.56$); finally G, all vapour [p. 41].
  - Tie line at 93.3 °C for $z = 0.6$: L at 0.38, V at 0.78, mixing point M at 0.6. Annotate "45 % liquid / 55 % vapour" [p. 43].
- **y–x diagram with α and an azeotrope** · curve sketch [Week 1, p. 45–50; exercise_01_solutions.pdf, Oppg. 5a]
  - Left panel: ideal curve $y = \alpha x/(1+(\alpha-1)x)$ with $\alpha = 5.44$ through the point (0.3, 0.7), plus the diagonal. Mark the point (0.3, 0.7) used to find α.
  - Right panel: a curve that crosses the diagonal, labelled "azeotrope, $x_{AZ} \approx 0.67$" (isopropanol–water, 100 kPa).
- **Minimum- vs maximum-boiling azeotrope** · curve sketch [Week 1, p. 53; exercise_01_solutions.pdf, Oppg. 3a]
  - Two T–x–y panels in which the bubble and dew lines touch at $x_{AZ}$. In the minimum-boiling case the touching point is a temperature minimum, and in the maximum-boiling case a maximum. Caption: "distillation can't cross $x_{AZ}$".
- **Interactive plot**: eq. 8, $y_A = \alpha_{AB} x_A/(1+(\alpha_{AB}-1)x_A)$, on a y–x diagram with the diagonal.
  - Slider: $\alpha_{AB}$ from 1 to 10, starting at 5.44 [Week 1, p. 50]. Preset buttons for 4.33 (pentane/cyclohexane) [practice exam 2 solutions.pdf, Q2a.1] and 3.1 [exercise_01_eng.pdf, Exercise 7].
  - At $\alpha = 1$ the curve lies on the diagonal. Show the label "no separation possible" [Week 1, p. 44].

## Equations

### Bubble point line (isothermal, ideal)
$$P_{L\to V} = (P_A^0 - P_B^0)\, x_A + P_B^0$$
| Symbol | Meaning | Unit |
|---|---|---|
| $P_{L\to V}$ | pressure at which liquid of composition $x_A$ starts to evaporate | bar |
| $P_A^0, P_B^0$ | pure-component vapour pressures at the fixed T | bar |
| $x_A$ | liquid mole fraction of A | – |

From $P_{L\to V} = p_A + p_B$ with Raoult. Ideal liquid. [Week 1, p. 34; FormelarkKP3010.pdf, p. 1, eq. 5]

### Dew point line (isothermal, ideal)
$$P_{V\to L} = \frac{P_A^0 P_B^0}{(P_B^0 - P_A^0)\, y_A + P_A^0}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $P_{V\to L}$ | pressure at which vapour of composition $y_A$ starts to condense | bar |
| $y_A$ | vapour mole fraction of A | – |

Derivation: Dalton alone isn't enough, because $p_A$ is unknown. Use $x_A = P_{V\to L} y_A/P_A^0$ and $x_B = P_{V\to L} y_B/P_B^0$, then $x_A + x_B = 1$. [Week 1, p. 35; FormelarkKP3010.pdf, p. 1, eq. 6]

### Relative volatility (ideal)
$$\alpha_{AB} = \frac{P_A^0}{P_B^0} = \frac{y_A/x_A}{y_B/x_B}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\alpha_{AB}$ | relative volatility of A to B | – |
| $P_A^0, P_B^0$ | pure-component vapour pressures | bar |
| $x_i, y_i$ | liquid and vapour mole fractions | – |

From $x_A P_A^0 = p_A = y_A P_{tot}$. $P_{tot}$ cancels. [Week 1, p. 44–45; FormelarkKP3010.pdf, p. 1, eq. 7]

### Equilibrium line in terms of α
$$y_A = \frac{\alpha_{AB}\, x_A}{1 + (\alpha_{AB} - 1)\, x_A}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $y_A$ | vapour mole fraction of A in equilibrium with $x_A$ | – |
| $x_A$ | liquid mole fraction of A | – |
| $\alpha_{AB}$ | relative volatility (assumed constant) | – |

Binary. Rearranged from $\alpha_{AB} = \dfrac{y_A/x_A}{(1-y_A)/(1-x_A)}$. To get α from one point on a diagram: $\alpha = \dfrac{y(1-x)}{x(1-y)}$. [Week 1, p. 45, 49–50; FormelarkKP3010.pdf, p. 1, eq. 8]

### Modified Raoult's law (non-ideal liquid)
$$p_A = \gamma_A x_A P_A^\circ \qquad \alpha_{AB} = \frac{\gamma_A P_A^\circ}{\gamma_B P_B^\circ}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\gamma_A$ | liquid-phase activity coefficient of A | – |
| $p_A$ | partial pressure of A | bar |

$\gamma$ depends on the interactions in, and the composition of, the mixture. [Week 1, p. 51]

### Lever rule / mole balance in the two-phase region
$$n_L + n_V = n_{tot}, \qquad x_L n_L + y_V n_V = z\, n_{tot} \quad\Leftrightarrow\quad \frac{n_V}{n_L} = \frac{|ML|}{|MV|} = \frac{z - x_L}{y_V - z}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $n_L, n_V$ | moles in the liquid and vapour | mol |
| $z$ | overall mole fraction (mixing point M) | – |
| $x_L, y_V$ | liquid and vapour compositions on the tie line at the same T | – |

[Week 1, p. 43; practice exam 2 solutions.pdf, Q1d]

## Worked example
**Phase split of $x_{HEX} = 0.6$ at 93.3 °C (n-hexane/n-octane, isobaric)** [Week 1, p. 42–43]
1. Locate the point (0.6, 93.3 °C). It lies between the bubble and dew lines, so the mixture is two-phase.
2. Draw the horizontal tie line at 93.3 °C. It meets the bubble line at $x_{HEX} \approx 0.38$ (liquid) and the dew line at $y_{HEX} \approx 0.78$ (vapour).
3. Basis 100 mol. The overall mole fraction is still 0.6: $0.38\, n_L + 0.78\, n_V = 100 \cdot 0.6$.
4. Total balance: $n_L + n_V = 100$.
5. Substitute: $0.38\, n_L + 0.78(100 - n_L) = 60$, so $n_L = 45$ mol.
6. Result: 45 % liquid, 55 % vapour.

## Faded example
**Heating acetone/ethyl acetate to its boiling point and beyond** [practice exam 2 solutions.pdf, Q1c–d]
A mixture of 25 mol acetone and 37.5 mol ethyl acetate is heated at constant pressure (isobaric diagram given).
1. Overall acetone mole fraction: $z = 25/(25 + 37.5) = 0.4$.
2. **(try)** Move up vertically from $z = 0.4$ to the bubble line. → Boiling starts at 80 °C.
3. **(try)** Go horizontally at 80 °C to the dew line. → $y_{acetone} = 0.82$, so $y_{EA} = 1 - 0.82 = 0.18$.
4. Heat to 90 °C. Tie line: $x_{acetone} = 0.26$ (liquid), $y_{acetone} = 0.65$ (vapour).
5. **(try)** Acetone balance with $n_L + n_V = 62.5$: $25 = 0.26\, n_L + 0.65\,(62.5 - n_L)$. → $n_L = 40.0$ mol.
6. **(try)** Check with the lever rule. → $n_V/n_L = |ML|/|MV| = 0.56$, giving the same $n_L$.

[practice exam 2 solutions.pdf, Q1c–d]

## Exam traps
- **Regions swap between diagram types**: on an isothermal p–x diagram the vapour is the bottom section, below the dew line. On an isobaric T–x diagram it's the top. [practice_exam_solutions.pdf, Ex. 1a; Week 1, p. 38]
- **Which component is asked for**: diagrams use the most volatile component on the x-axis [Week 1, p. 33]. The exam then asks for the other one, e.g. "mole fraction of ethyl acetate in the vapour" $= 1 - 0.82$. [practice exam 2 solutions.pdf, Q1c]
- **Convert moles to mole fraction first**: "25 mol acetone + 37.5 mol ethyl acetate" means $z = 0.4$ before you touch the diagram. [practice exam 2 solutions.pdf, Q1c]
- **The tie line is horizontal**: both phases are at the same T (isobaric) or p (isothermal), so read L and V at the same level. [Week 1, p. 37; practice_exam_solutions.pdf, Ex. 1d]
- **Spotting non-ideality**: a non-straight bubble line on a p–x diagram means non-ideal. The dew line is curved even for ideal systems. [practice_exam_solutions.pdf, Ex. 1c; FormelarkKP3010.pdf, p. 1, eq. 5–6]
- **The activity coefficient isn't on the formula sheet**: you must know $p_A = \gamma_A x_A P_A^\circ$. [Week 1, p. 51; FormelarkKP3010.pdf, p. 1]
- **The azeotrope is the purity ceiling**: the highest purity reachable by distillation is $x_{AZ}$, wherever you start from on that side. [practice_exam_solutions.pdf, Ex. 2a; exercise_01_solutions.pdf, Oppg. 3b]
- **Mole % vs mass %**: exercise answers sometimes switch to mass %, $\mathrm{Wt}\%_i = 100\, M_i x_i / \sum M_i x_i$ (e.g. $x_{AZ} = 0.42$ n-propanol → 70.7 wt %). [exercise_01_solutions.pdf, Oppg. 3c]
- **Graphical answers have tolerance**: exam solutions give "±0.059 bar" and "±0.92". Show where you read the value. [practice_exam_solutions.pdf, Ex. 1d]

## Past exam tasks
- Practice exam 1, Ex. 1a: which section (A/B/C) of a p–x diagram is vapour.
- Practice exam 1, Ex. 1c: which of two mixtures is non-ideal, and why.
- Practice exam 1, Ex. 1d: benzene/styrene at 25 °C, $x_S = 0.6$, pressure lowered. Find the first evaporation pressure (±0.059 bar) and the benzene fraction in the first vapour (±0.92).
- Practice exam 1, Ex. 2a: highest ethyl acetate purity by distillation (azeotrope, about 54 mol %).
- Autumn 2022, Q1a–b: boiling point of pure ethyl acetate (117 °C), and which line is the dew line and what it means.
- Autumn 2022, Q1c–d: bubble temperature and vapour composition, then liquid composition and moles of liquid at 90 °C (lever rule).
- Autumn 2022, Q2a.1: relative volatility from a point on a McCabe–Thiele equilibrium line (α = 4.33).

## Test yourself
**Q:** Find $\alpha$ from the point (0.3, 0.7) on a y–x diagram.
**A:** $\alpha = \dfrac{0.7 \cdot 0.7}{0.3 \cdot 0.3} = 5.44$. [Week 1, p. 50]

**Q:** Same method for the point (0.3, 0.65) on the pentane/cyclohexane equilibrium line.
**A:** $\alpha = \dfrac{0.65 \cdot 0.7}{0.3 \cdot 0.35} = 4.33$. [practice exam 2 solutions.pdf, Q2a.1]

**Q:** n-hexane/n-octane: a vapour with $y_{HEX} = 0.7$ at 125 °C is cooled. Where does condensation start?
**A:** When it reaches the dew point line, at about 96 °C. [Week 1, p. 40]

**Q:** Name three ways an azeotrope shows up on the different diagram types.
**A:** $x_A = y_A$. On p–x and T–x diagrams the dew and bubble lines touch. On y–x the equilibrium curve crosses the diagonal. [exercise_01_solutions.pdf, Oppg. 3a]

**Q:** Benzene–toluene at 10 kPa, $x_A = 0.5$ (benzene). At what temperature does it boil, and what is the vapour composition?
**A:** About 29 °C. Move horizontally to the dew line: $y_A = 0.77$. [exercise_01_solutions.pdf, Oppg. 4b–c]

## Sources
- [Week 1 - Introduction  VLE with solutions.pdf, p. 32–53]
- [FormelarkKP3010.pdf, p. 1, eq. 5–8]
- [exercise_01_eng.pdf, Exercise 3–5, 7]
- [exercise_01_solutions.pdf, Oppg. 3–5]
- [practice_exam_solutions.pdf, Ex. 1a–d, 2a]
- [practice exam 2 solutions.pdf, Q1a–d, Q2a.1]

> GAP: Week 1 diagram figures (p. 32, 36–43, 46–50, 53) are images. The point values above come from the slide text, but the full n-hexane/n-octane curve and the azeotrope sketches have no numeric data in the files.
