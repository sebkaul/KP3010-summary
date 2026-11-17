---
slug: 02-vapor-pressure-raoult-dalton
title: Vapour pressure, Raoult's law and Dalton's law
topic: vle
exam_weight: medium
exam_weight_note: "Reading pure-component vapour pressure off a diagram on 1 of 2 practice exams (Practice exam 1, Ex. 1b); the equations underpin every Q1"
builds_on: [01-separation-basics-k-selectivity]
used_in: [03-vle-diagrams-azeotropes, 04-equilibrium-flash-distillation]
sources: ["Week 1 - Introduction  VLE with solutions.pdf", "FormelarkKP3010.pdf", "exercise_01_eng.pdf", "exercise_01_solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** A liquid evaporates at 20 °C in an open glass, far below its boiling point. How is that possible?
**A:** Evaporation happens at any temperature, because surface molecules escape into the vapour. Boiling is only the point where the vapour pressure equals the surrounding pressure. [Week 1, p. 22]

**Q:** In a 50/50 liquid of two components, is the vapour also 50/50?
**A:** Not necessarily. The more volatile component is enriched in the vapour, so $x_A \neq y_A$. [Week 1, p. 29]

**Q:** Two pure liquids have $P^\circ_A = 0.327$ bar and $P^\circ_B = 0.137$ bar at the same T. Which is more volatile?
**A:** A, because it has the higher vapour pressure. [exercise_01_solutions.pdf, Oppg. 2a]

## Mental model
In a closed vessel, molecules evaporate and condense continuously. At equilibrium the two rates are equal and the chemical potential is the same in both phases [Week 1, p. 17]. Heating raises the evaporation rate, so the equilibrium gas pressure (the vapour pressure $P^\circ_A$) rises with temperature [Week 1, p. 18–19]. A liquid boils when its vapour pressure reaches the surrounding pressure, which is why water boils at about 70 °C on Everest [Week 1, p. 21–22]. In an ideal binary mixture, each component contributes a partial pressure proportional to how much of it is in the liquid (Raoult). Its share of the vapour is that partial pressure divided by the total pressure (Dalton) [Week 1, p. 23, 29]. Combining the two gives the vapour composition from the liquid composition. That is the basis of every VLE diagram and every equilibrium stage that follows [FormelarkKP3010.pdf, p. 1, eq. 4].

## Concepts and definitions
- **Vapour–liquid equilibrium (VLE)**: state where evaporation and condensation rates are equal and the chemical potential $\mu$ is identical in both phases. [Week 1, p. 17]
- **Vapour pressure ($P^\circ_A$, damptrykket)**: the gas pressure at equilibrium above pure component A. It is a function of temperature, $P^\circ_A(T)$. [Week 1, p. 18–19]
- **Evaporation**: happens at any temperature, as surface molecules escape into the vapour. Evaporation and condensation both occur continuously. [Week 1, p. 22]
- **Boiling point**: the temperature where the vapour pressure equals the surrounding pressure. Vapour bubbles can then form throughout the liquid, not just at the surface. [Week 1, p. 22]
- **Volatility**: the component with the higher vapour pressure is the more volatile one, because vapour escapes more easily from the liquid. [exercise_01_solutions.pdf, Oppg. 2a]
- **Partial pressure ($p_A$)**: the contribution of A to the total pressure of the mixture. [Week 1, p. 23]
- **Raoult's law**: $p_A = P^\circ_A x_A$, for an ideal liquid mixture. [Week 1, p. 23; FormelarkKP3010.pdf, p. 1, eq. 1]
- **Dalton's law**: $p_A = y_A P_{tot}$. It links partial pressure to vapour mole fraction. [Week 1, p. 29; FormelarkKP3010.pdf, p. 1, eq. 2]
- **p–T diagram regions**: liquid for (p, T) above the vapour-pressure curve, vapour below it. [exercise_01_solutions.pdf, Oppg. 1a]

## Visuals
- **Closed vessel at equilibrium** · cross-section [Week 1, p. 17]
  - A sealed vessel with liquid water at the bottom and vapour above. Up arrows labelled "evaporation" and down arrows labelled "condensation", drawn the same length. Caption: "rates equal, $\mu_{liq} = \mu_{vap}$".
  - Optional second state: higher T, longer evaporation arrows, pressure gauge reading higher [Week 1, p. 18].
- **Vapour pressure curve of water** · plot [Week 1, p. 20–21]
  - x-axis T (°C), 0–110; y-axis $P^\circ$ (atm), 0–1.25. Plot the slide's 12 data points: (0.51, 0.0102), (11.19, 0.0161), (20.86, 0.0256), (30.77, 0.0453), (39.68, 0.0718), (50.1, 0.1221), (59.77, 0.1927), (69.94, 0.3043), (80.12, 0.4668), (90.03, 0.6873), (99.97, 1.0), (106.1, 1.2001).
  - Highlight the three readings with dashed lines to the axes: 1 atm → 100 °C; 0.32 atm → 70 °C (Mt. Everest); 10 °C → 0.014 atm. Label the region above the curve "liquid" and below it "vapour" [exercise_01_solutions.pdf, Oppg. 1a].
- **Partial and total pressure vs liquid composition (ideal binary)** · curve sketch [Week 1, p. 23]
  - x-axis $x_A$ (–) from 0 to 1. y-axis pressure (bar).
  - Line $p_A = P^\circ_A x_A$ from 0 up to $P^\circ_A$. Line $p_B = P^\circ_B(1-x_A)$ from $P^\circ_B$ down to 0. Line $P_{tot}$ as their sum, a straight line from $P^\circ_B$ to $P^\circ_A$. Highlight that the endpoints of $P_{tot}$ are the pure-component vapour pressures.
- **p–x–y diagram of an ideal binary** · curve sketch [exercise_01_solutions.pdf, Oppg. 2b, Fig. 2]
  - n-propanol (A)/1-butanol (B) at 70 °C: $P^\circ_A = 0.327$ bar, $P^\circ_B = 0.137$ bar. x-axis $x_A, y_A$ (–), y-axis p (bar) from 0.1 to 0.35.
  - Straight bubble line $p(x_A)$ and curved dew line $p(y_A)$ that meet at the pure-component ends. Regions: "liquid" above the bubble line, "vapour" below the dew line, "liquid + vapour" between.
  - Show the Oppg. 2c path: start at (0.2, 0.3 bar), drop vertically to the bubble line, go horizontally to the dew line, and read $y_A \approx 0.38$.
- **Interactive plot**: eq. 5 and eq. 6 from the formula sheet, for benzene (B)/toluene (T) at 90 °C with $P^\circ_T = 0.547$ bar and $P^\circ_B = 0.719$ bar [Week 1, p. 24–31].
  - Slider: $x_B$ from 0 to 1, starting at 0.5.
  - Show live $p_B$, $p_T$, $P_{tot}$ and $y_B = P^\circ_B x_B / P_{tot}$ as moving points on the bubble and dew lines.
  - At $x_B = 0.5$ it must show $P_{tot} = 0.633$ bar and $y_B = 0.57$.

## Equations

### Raoult's law (ideal liquid mixture)
$$p_A = x_A P_A^\circ$$
| Symbol | Meaning | Unit |
|---|---|---|
| $p_A$ | partial pressure of A in the vapour | bar (or atm, Pa) |
| $x_A$ | mole fraction of A in the liquid | – |
| $P_A^\circ$ | vapour pressure of pure A at the system temperature | bar |

Ideal liquid mixtures only. Non-ideal mixtures deviate (page 03). [Week 1, p. 23; FormelarkKP3010.pdf, p. 1, eq. 1]

### Dalton's law
$$p_A = P_{tot}\, y_A$$
| Symbol | Meaning | Unit |
|---|---|---|
| $p_A$ | partial pressure of A | bar |
| $P_{tot}$ | total pressure | bar |
| $y_A$ | mole fraction of A in the vapour | – |

[Week 1, p. 29; FormelarkKP3010.pdf, p. 1, eq. 2]

### Sum of partial pressures
$$P_{tot} = \sum_{i} p_i \qquad \text{binary: } P_{tot} = p_A + p_B = P_A^\circ x_A + P_B^\circ x_B$$
| Symbol | Meaning | Unit |
|---|---|---|
| $p_i$ | partial pressure of component $i$ | bar |
| $x_A, x_B$ | liquid mole fractions, $x_A + x_B = 1$ | – |

[Week 1, p. 23; FormelarkKP3010.pdf, p. 1, eq. 3]

### Equilibrium between ideal vapour and ideal liquid
$$y_A = \frac{P_A^\circ}{P_{tot}}\, x_A$$
| Symbol | Meaning | Unit |
|---|---|---|
| $y_A$ | vapour mole fraction of A | – |
| $x_A$ | liquid mole fraction of A | – |
| $P_A^\circ / P_{tot}$ | ratio of pure vapour pressure to total pressure | – |

Raoult and Dalton combined. Ideal vapour and ideal liquid. [FormelarkKP3010.pdf, p. 1, eq. 4; Week 1, p. 29]

### Bubble-point pressure (damptrykk, binary ideal)
$$P_{L\to V} = (P_A^\circ - P_B^\circ)\, x_A + P_B^\circ$$
| Symbol | Meaning | Unit |
|---|---|---|
| $P_{L\to V}$ | pressure at which a liquid of composition $x_A$ starts to evaporate (bubble line) | bar |

Linear in $x_A$, so the bubble line of an ideal mixture is straight. [FormelarkKP3010.pdf, p. 1, eq. 5; Week 1, p. 28; exercise_01_solutions.pdf, Oppg. 2b, eq. 1]

### Dew-point pressure (metningstrykk, binary ideal)
$$P_{V\to L} = \frac{P_A^\circ P_B^\circ}{P_A^\circ + (P_B^\circ - P_A^\circ)\, y_A}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $P_{V\to L}$ | pressure at which a vapour of composition $y_A$ starts to condense (dew line) | bar |

Ideal binary. Curved in $y_A$. [FormelarkKP3010.pdf, p. 1, eq. 6; exercise_01_solutions.pdf, Oppg. 2b, eq. 2]

## Worked example
**Total pressure and vapour composition of a 50/50 benzene–toluene liquid at 90 °C** [Week 1, p. 24–25, 30–31]
Given $P_T^\circ = 0.547$ bar, $P_B^\circ = 0.719$ bar and $x_B = x_T = 0.5$.
1. Raoult for toluene: $p_T = P_T^\circ x_T = 0.547 \cdot 0.5 = 0.2735$ bar.
2. Raoult for benzene: $p_B = P_B^\circ x_B = 0.719 \cdot 0.5 = 0.3595$ bar.
3. Total pressure: $P_{tot} = p_T + p_B = 0.2735 + 0.3595 = 0.633$ bar.
4. Dalton for toluene: $y_T = p_T / P_{tot} = 0.2735/0.633 = 0.43$.
5. Dalton for benzene: $y_B = p_B / P_{tot} = 0.3595/0.633 = 0.57$.
6. Check: $y_B + y_T = 1$. The vapour is enriched in benzene, the component with the higher $P^\circ$, so $x_B \neq y_B$. [Week 1, p. 29]

## Faded example
**Which liquid composition gives $P_{tot} = 0.70$ bar at 90 °C?** [Week 1, p. 27–28]
Same system: $P_T^\circ = 0.547$ bar, $P_B^\circ = 0.719$ bar.
1. Write the total pressure: $P_{tot} = x_T P_T^\circ + x_B P_B^\circ$.
2. Eliminate $x_T$ with $x_T = 1 - x_B$: $P_{tot} = (1-x_B) P_T^\circ + x_B P_B^\circ$.
3. **(try)** Rearrange into bubble-point form. → $P_{tot} = (P_B^\circ - P_T^\circ)\, x_B + P_T^\circ$.
4. **(try)** Insert the numbers and solve. → $0.70 = (0.719 - 0.547)\, x_B + 0.547$, so $x_B = 0.89$.
5. **(try)** Toluene fraction. → $x_T = 1 - 0.89 = 0.11$.

[Week 1, p. 28]

## Exam traps
- **Pure-component vapour pressure from a diagram**: at $x = 0$ or $x = 1$, the total pressure on a p–x diagram is the pure-component vapour pressure. The component with the highest end-point pressure has the highest $P^\circ$. [practice_exam_solutions.pdf, Ex. 1b; exercise_01_solutions.pdf, Oppg. 2b, eq. 3–4]
- **$x_A \neq y_A$**: use the liquid fraction in Raoult and the vapour fraction in Dalton. Mixing them up gives a wrong answer that still looks plausible. [Week 1, p. 29]
- **Slide typo**: Week 1, p. 31 writes $P_{tot} = P_T^\circ + P_B^\circ$, but the numbers use the partial pressures, $0.2735 + 0.3595$. The correct form is $P_{tot} = p_T + p_B$. [Week 1, p. 25, 31]
- **Boiling ≠ evaporation**: boiling needs $P^\circ = P_{surroundings}$. Evaporation happens at any T. Lower pressure gives a lower boiling point (water boils at 70 °C at 0.32 atm). [Week 1, p. 21–22]
- **A boiling point is a (p, T) pair**: "the vapour pressure of 1-butanol at 80 °C is 0.225 bar" means 1-butanol boils at 80 °C at 0.225 bar. [exercise_01_solutions.pdf, Oppg. 1c]
- **Ideal only**: Raoult and eqs. 5–6 assume an ideal liquid mixture. For non-ideal systems the bubble line isn't straight (page 03). [FormelarkKP3010.pdf, p. 1; practice_exam_solutions.pdf, Ex. 1c]
- **Mixed pressure units**: the slides use atm for water and bar for benzene/toluene. The conversion table is on the formula sheet. [Week 1, p. 20, 24; FormelarkKP3010.pdf, p. 11]

## Past exam tasks
- Practice exam 1, Ex. 1b: which of benzene, styrene or n-propanal has the highest pure-component vapour pressure, read off p–x diagrams, and why (n-propanal, 0.42 bar).
- Practice exam 1, Ex. 1d: uses a p–x diagram for the first evaporation on lowering the pressure. Covered on page 03.

## Test yourself
**Q:** From the water vapour-pressure table, what is the boiling point of water at 0.32 atm, and what is the vapour pressure at 10 °C?
**A:** About 70 °C, and 0.014 atm. [Week 1, p. 21]

**Q:** n-propanol (A)/1-butanol (B) at 70 °C, $P_A^\circ = 0.327$ bar, $P_B^\circ = 0.137$ bar, ideal. A liquid with $x_A = 0.2$ is depressurised until it boils. At what pressure does it boil, and what is $y_{\text{1-butanol}}$?
**A:** Bubble pressure $= (0.327 - 0.137)\cdot 0.2 + 0.137 = 0.175$ bar. $y_A = 0.327\cdot 0.2/0.175 = 0.37$, which the solution reads graphically as about 0.38. So $y_{\text{1-butanol}} = 1 - y_A \approx 0.62$. [exercise_01_solutions.pdf, Oppg. 2b–c; FormelarkKP3010.pdf, p. 1, eq. 4–5]

**Q:** On a p–T diagram for a pure component, which side of the vapour-pressure curve is liquid?
**A:** Above the curve, at higher pressure for a given T. Vapour is below the curve. [exercise_01_solutions.pdf, Oppg. 1a]

**Q:** What two conditions define vapour–liquid equilibrium in the closed-vessel picture?
**A:** Equal evaporation and condensation rates, and identical chemical potential in both phases. [Week 1, p. 17]

**Q:** Why is the bubble line of an ideal binary p–x diagram straight but the dew line curved?
**A:** The bubble pressure $P_{L\to V} = (P_A^\circ - P_B^\circ)x_A + P_B^\circ$ is linear in $x_A$. The dew pressure $P_{V\to L} = P_A^\circ P_B^\circ / (P_A^\circ + (P_B^\circ - P_A^\circ)y_A)$ has $y_A$ in the denominator. [FormelarkKP3010.pdf, p. 1, eq. 5–6]

## Sources
- [Week 1 - Introduction  VLE with solutions.pdf, p. 17–31]
- [FormelarkKP3010.pdf, p. 1 (eq. 1–6), p. 11 (pressure conversion table)]
- [exercise_01_eng.pdf, Exercise 1–2]
- [exercise_01_solutions.pdf, Oppg. 1–2, Fig. 2]
- [practice_exam_solutions.pdf, Ex. 1b, 1d]

> GAP: Week 1, p. 19 and p. 26 are image-only slides (vapour-pressure curve figure, repeated example header) and add no extractable content.
