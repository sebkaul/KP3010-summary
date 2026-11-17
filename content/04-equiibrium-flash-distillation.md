---
slug: 04-equilibrium-flash-distillation
title: Equilibrium and flash distillation
topic: flash-distillation
exam_weight: medium
exam_weight_note: "No dedicated flash task on the practice exams; the same balance + lever-rule math is Autumn 2022 Q1d, and the lever rule returns in the extraction questions"
builds_on: [02-vapor-pressure-raoult-dalton, 03-vle-diagrams-azeotropes]
used_in: [05-column-balances-operating-lines, 19-ternary-diagrams]
sources: ["Week 1 - Introduction  VLE with solutions.pdf", "FormelarkKP3010.pdf", "exercise_01_eng.pdf", "exercise_01_solutions.pdf", "practice exam 2 solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** A binary feed splits into a vapour and a liquid stream. How many independent mass balances can you write?
**A:** Two: one total and one component balance. The second component balance isn't independent, because the mole fractions sum to one. [Week 1, p. 58–59]

**Q:** Seawater is heated and the water leaves as vapour, leaving salt behind. Is that distillation?
**A:** No, it's evaporation. NaCl isn't volatile, so it isn't present in the vapour phase. [Week 1, p. 56]

**Q:** You double the feed rate of a flash drum while keeping V/F the same. What happens to $x_A$ and $y_A$?
**A:** Nothing. Both flows double, but the compositions are unchanged. [exercise_01_solutions.pdf, Oppg. 5d]

## Mental model
Distillation separates components because the vapour formed by boiling a liquid is richer in the more volatile component. Condense that vapour and boil it again, and it gets richer still [Week 1, p. 54–55]. Equilibrium distillation (likevektsdestillasjon) is the simplest continuous version: one feed goes in, and one vapour and one liquid product come out of a single vessel in equilibrium [Week 1, p. 57]. Two unknown flows and two unknown compositions are pinned down by two mass balances plus the equilibrium relation (a VLE diagram or $\alpha$) [Week 1, p. 58–60]. The component balance rearranges into a straight line in the y–x diagram. Where that line cuts the equilibrium curve is the answer [Week 1, p. 64]. Flash distillation is the same thing with a pressure drop: the hot, pressurised feed is let down through a valve, its boiling point drops, and part of it evaporates instantly, so the drum needs no heating [Week 1, p. 61].

## Concepts and definitions
- **Distillation**: separates components by their difference in liquid and vapour compositions. The vapour is made by heating and boiling the liquid, and all components are volatile and present in both phases. [Week 1, p. 54]
- **Evaporation (vs distillation)**: used when one component is not volatile, e.g. seawater leaving NaCl behind. [Week 1, p. 56]
- **Equilibrium distillation (likevektsdestillasjon)**: continuous, stationary process with one feed and two product streams. The liquid is heated to produce vapour, and distillate and bottoms are taken from the vessel. The distillate can be condensed into a liquid product. [Week 1, p. 57]
- **Stream notation**: $F$, $D$, $B$ (or $F$, $V$, $L$) are the process flows, typically mol/s or kmol/h. $z_i$, $y_i$, $x_i$ are the feed, vapour and liquid mole fractions. [Week 1, p. 58, 63]
- **Independent balances**: a binary system has two independent balances (total and one component). The third is dependent because $x_A + x_B = 1$, $y_A + y_B = 1$ and $z_A + z_B = 1$. [Week 1, p. 58–59]
- **Equilibrium relation**: the outlet liquid and vapour are in equilibrium, described by the VLE diagram or by $\alpha$. [Week 1, p. 60]
- **Flash distillation**: the feed is heated to high temperature and pressure, and the pressure is reduced in a valve just before the drum. The boiling point falls and part of the feed evaporates instantly, so the drum contents need no heating. [Week 1, p. 61]
- **Inverse lever rule**: the feed point $z_A$ divides the tie line between $x_A$ and $y_A$. Each product flow is proportional to the length of the *opposite* segment. [Week 1, p. 72–73]

## Visuals
- **Equilibrium distillation flowsheet** · process diagram [Week 1, p. 57–58]
  - Feed $F$, $z_A$ → heater → vessel. Top outlet: vapour $D$ (= $V$), $y_A$ → condenser → liquid distillate. Bottom outlet: liquid $B$ (= $L$), $x_A$.
  - Dashed box around the vessel labelled "equilibrium: $y_A$ ↔ $x_A$".
- **Flash drum** · process diagram [Week 1, p. 61]
  - Hot, pressurised feed → valve (label "pressure ↓ → boiling point ↓") → drum → vapour out at the top, liquid out at the bottom. Note "no heating of the drum".
- **Graphical solution on the y–x diagram** · curve sketch [Week 1, p. 62–64]
  - x-axis $x_A$ (–), y-axis $y_A$ (–), both 0–1. Equilibrium curve and diagonal.
  - Balance line $y_A = 1.6 - x_A$ (slope $-L/V = -1$). Highlight its intersection with the equilibrium curve at (0.77, 0.82). Annotate "slope = −L/V, intercept = $z_A F/V$".
  - Setting $x_A = z_A$ in the line gives $y_A = z_A$, so the line passes through $(z_A, z_A) = (0.8, 0.8)$ on the diagonal. Mark that point.
- **Inverse lever rule on a T–x–y diagram** · curve sketch [Week 1, p. 69–73]
  - Benzene/toluene at 200 kPa. Horizontal tie line with L at $x_A = 0.37$, M at $z_A = 0.4$, V at $y_A = 0.58$.
  - Measured distances: |ML| = 1 cm, |MV| = 5.8 cm, |LV| = 6.8 cm. Arrows: "V ∝ |ML|", "L ∝ |MV|". Result: $V = 1.47$ and $L = 8.53$ kmol/h.
- **Interactive plot**: balance line $y_A = \dfrac{F}{V} z_A - \dfrac{L}{V} x_A$ against the equilibrium curve $y_A = \dfrac{\alpha x_A}{1+(\alpha-1)x_A}$ [Week 1, p. 64–68].
  - Sliders: $V/F$ from 0.05 to 0.95 (start 0.5) and $\alpha$ from 1.1 to 6 (start 1.8). Fixed $z_A = 0.8$, $F = 10$ kmol/h.
  - Show live intersection $(x_A, y_A)$, plus $L$ and $V$. At the start values it must show $x_A = 0.75$ and $y_A = 0.85$.

## Equations

### Total balance
$$F = V + L \quad (= B + D)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F$ | feed flow | kmol/h (or mol/s) |
| $V$ ($D$) | vapour / distillate flow | kmol/h |
| $L$ ($B$) | liquid / bottoms flow | kmol/h |

Steady state. [Week 1, p. 58, 63]

### Component balance
$$z_A F = y_A V + x_A L$$
| Symbol | Meaning | Unit |
|---|---|---|
| $z_A$ | mole fraction of A in the feed | – |
| $y_A$ | mole fraction of A in the vapour | – |
| $x_A$ | mole fraction of A in the liquid | – |

The only independent component balance for a binary. [Week 1, p. 58–59]

### Balance line (operating line of the flash)
$$y_A = \frac{F}{V} z_A - \frac{L}{V} x_A$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F/V$ | feed-to-vapour ratio | – |
| $L/V$ | liquid-to-vapour ratio (minus the slope) | – |

Straight line in the y–x diagram. Intersect it with the equilibrium curve. [Week 1, p. 64; exercise_01_solutions.pdf, Oppg. 5c, eq. 11]

### Equilibrium (constant α)
$$y_A = \frac{\alpha\, x_A}{1 + (\alpha - 1)\, x_A}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\alpha$ | relative volatility | – |

Ideal, constant α. Use it instead of a diagram for the analytical solution. Combined with the balance line it gives a quadratic in $x_A$. [Week 1, p. 60, 65–67; FormelarkKP3010.pdf, p. 1, eq. 8]

### Inverse lever rule
$$V = F\,\frac{z_A - x_A}{y_A - x_A}, \qquad L = F\,\frac{z_A - y_A}{x_A - y_A}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $z_A - x_A$ | segment from liquid point to feed point (\|ML\|) | – (or cm on the diagram) |
| $y_A - x_A$ | full tie-line length (\|LV\|) | – (or cm) |

Derived by substituting $L = F - V$ into the component balance. Valid with compositions read off the diagram or measured as distances. [Week 1, p. 72–73; exercise_01_solutions.pdf, Oppg. 6a, eq. 14]

## Worked example
**Analytical flash with α = 1.8** [Week 1, p. 62–68]
Given $F = 10$ kmol/h, $V = 5$ kmol/h, feed liquid at boiling point, $z_A = 0.8$ (from $z_A F/V = 1.6$) and $\alpha_{AB} = 1.8$.
1. Total balance: $L = F - V = 10 - 5 = 5$ kmol/h.
2. Component balance: $z_A F = x_A L + y_A V$, so $y_A = \dfrac{z_A F}{V} - \dfrac{x_A L}{V} = 2 z_A - x_A$.
3. Insert $z_A$: $y_A = 1.6 - x_A$.
4. Equilibrium: $1.6 - x_A = \dfrac{\alpha x_A}{1 + (\alpha - 1) x_A}$.
5. Multiply out: $(\alpha - 1)x_A^2 + (\alpha + 1 - 2\cdot 0.8(\alpha - 1))\,x_A - 2\cdot 0.8 = 0$, which gives $0.8x_A^2 + 1.52x_A - 1.6 = 0$.
6. Quadratic formula: $x_A = 0.75$ or $x_A = -2.65$. Only $[0, 1]$ is physical, so $x_A = 0.75$.
7. Vapour: $y_A = 1.6 - 0.75 = 0.85$.
8. Compare with the graphical solution from a VLE diagram (Example 1): $x_A = 0.77$, $y_A = 0.82$. [Week 1, p. 64]

## Faded example
**Flash with α = 3.1** [exercise_01_eng.pdf, Exercise 7; exercise_01_solutions.pdf, Oppg. 7]
$F = 9$ kmol/h, $z_A = 0.45$, bottoms $L = 4$ kmol/h, $\alpha_{AB} = 3.1$.
1. **(try)** Vapour flow from the total balance. → $V = F - L = 5$ kmol/h.
2. **(try)** Balance line. → $y_A = \dfrac{F}{V} z_A - \dfrac{L}{V} x_A = 1.8 z_A - 0.8 x_A = 0.81 - 0.8x_A$.
3. Set it equal to the equilibrium relation: $0.81 - 0.8x_A = \dfrac{3.1x_A}{1 + 2.1x_A}$.
4. **(try)** Multiply out and collect terms. → $x_A^2 + 1.309x_A - 0.482 = 0$.
5. **(try)** Solve and keep the physical root. → $x_A \approx 0.3$.
6. **(try)** Vapour composition. → $y_A = 0.57$.
7. **(try)** The vapour is condensed in a separate vessel. Condensate composition? → $x_{A,K} = 0.57$, the same as the vapour.

[exercise_01_solutions.pdf, Oppg. 7a–b]

## Exam traps
- **Only two independent balances**: writing a second component balance adds nothing [Week 1, p. 59]. Slide p. 59 also has a typo in balance 3 ($y_B B$ should be $x_B B$).
- **Throw away the non-physical root**: the quadratic gives a negative or >1 root, and $x_A$ must be in $[0, 1]$. [Week 1, p. 68]
- **Molar vs mass**: Example 3 asks for "mass flows" but is solved in kmol/h [Week 1, p. 69–71]. If a feed is given in mass %, convert to a mole fraction first. In exercise Oppg. 6, 52.28 wt % ethanol gives $z_A = 0.3$. [exercise_01_solutions.pdf, Oppg. 6a, eq. 15–17]
- **Composition is set by ratio, not size**: changing $F$ at a fixed $V/L$ ratio or fixed T leaves $x_A$ and $y_A$ unchanged. Only the flows scale. [exercise_01_solutions.pdf, Oppg. 5d, 6b]
- **Given T means compositions come first**: if the drum temperature and pressure are given, read $x_A$ and $y_A$ straight off the diagram, then use the lever rule for the flows. [exercise_01_solutions.pdf, Oppg. 6a; Week 1, p. 70–71]
- **Inverse, not direct**: $V$ is proportional to the segment on the *liquid* side, $z_A - x_A$, not the vapour side. [Week 1, p. 72–73]
- **Flash balances are not on the formula sheet**: only the equilibrium relation (eq. 8) is. Memorise $F = V + L$ and $z_A F = y_A V + x_A L$. [FormelarkKP3010.pdf, p. 1]
- **Notation switches**: slides use $D/B$ for the equilibrium-distillation flowsheet and $V/L$ in the examples. [Week 1, p. 58, 63]

## Past exam tasks
- Autumn 2022, Q1d: liquid composition and moles of liquid at 90 °C via the arm-lever rule or an acetone mole balance ($n_L = 40.0$ mol). Same math as here, for a closed vessel (see page 03).
- Practice exam 1, Ex. 4b and Autumn 2022, Q4c: the lever-arm rule again, for extraction mixing points (page 19).
- No practice exam has a stand-alone flash distillation question.

## Test yourself
**Q:** Isopropanol–water flash at 100 kPa, $F = 10$ kmol/h, $z_A = 0.4$, $V/L = 0.3$. Find $L$, $V$ and the balance line.
**A:** $F = 1.3L$, so $L = 7.69$ kmol/h and $V = 2.31$ kmol/h. Line: $y_A = 1.72 - 3.33x_A$, which intersects the equilibrium curve at $x_A = 0.35$, $y_A = 0.55$. [exercise_01_solutions.pdf, Oppg. 5b–c]

**Q:** Same drum, feed raised to 15 kmol/h at the same ratio. New flows and compositions?
**A:** $L = 11.54$ kmol/h, $V = 3.46$ kmol/h. Compositions are unchanged, because the balance line is the same. [exercise_01_solutions.pdf, Oppg. 5d]

**Q:** Benzene/toluene at 200 kPa, $F = 10$ kmol/h, $z_A = 0.4$. The diagram gives $x_A = 0.37$, $y_A = 0.58$. Find $V$ and $L$.
**A:** $4 = 0.37(10 - V) + 0.58V$, so $V = 1.43$ kmol/h and $L = 8.57$ kmol/h. The graphical lever rule gives 1.47 and 8.53. [Week 1, p. 70–73]

**Q:** Why doesn't the drum in flash distillation need a heater?
**A:** The feed is already hot and pressurised. Dropping the pressure in the valve lowers the boiling point, so part of the feed evaporates instantly. [Week 1, p. 61]

**Q:** Ethanol–water flash, $F = 15$ kmol/h, $z_A = 0.3$. At 87.62 °C, $x_A = 0.08$ and $y_A = 0.41$. Find $L$ and $V$.
**A:** $L = F\dfrac{z_A - y_A}{x_A - y_A} = 15 \cdot \dfrac{0.3 - 0.41}{0.08 - 0.41} = 5$ kmol/h, and $V = 10$ kmol/h. [exercise_01_solutions.pdf, Oppg. 6a]

## Sources
- [Week 1 - Introduction  VLE with solutions.pdf, p. 54–73]
- [FormelarkKP3010.pdf, p. 1, eq. 8]
- [exercise_01_eng.pdf, Exercise 5–7]
- [exercise_01_solutions.pdf, Oppg. 5–7]
- [practice exam 2 solutions.pdf, Q1d, Q4c]
- [practice_exam_solutions.pdf, Ex. 4b]

> GAP: The Example 1 feed composition ($z_A = 0.8$) and $F$, $V$ values come from the slide's solution steps ($L = 10 - 5$, $y_A = 1.6 - x_A$). The figure with the given data (p. 62) is an image.
