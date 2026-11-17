---
slug: 11-kremser-minimum-absorbent-flow
title: Kremser equation and minimum absorbent flow
topic: absorption
exam_weight: high
exam_weight_note: "Kremser stages on 1 of 2 and minimum liquid flow on 1 of 2 practice exams (Practice exam 1 Ex. 3c–d; Autumn 2022 Q3c)"
builds_on: [07-nmin-rmin-limiting-conditions, 09-absorption-equilibrium-stage-mole-ratios, 10-multistage-absorption-stripping]
used_in: [14-column-height-pressure-drop, 16-htu-ntu-packed-columns, 21-counter-current-extraction-design]
sources: ["Week 3 - Absorption and stripping with solutions.pdf", "FormelarkKP3010.pdf", "exercise_03.pdf", "exercise_03_solutions.pdf", "practice_exam_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** Under what conditions can you use Kremser's equation instead of stepping?
**A:** When the solutions are very dilute (below about 1 % in both gas and liquid), so the total flows are essentially constant and the equilibrium is linear, $y = Kx$. [Week 3, p. 38; practice_exam_solutions.pdf, Ex. 3c]

**Q:** You keep reducing the solvent flow in an absorber. What eventually limits you?
**A:** The liquid outlet can't exceed equilibrium with the entering gas. At that point the flow is minimal and you'd need ever more trays. [Week 3, p. 43]

**Q:** How are the absorption factor A and the stripping factor S defined?
**A:** $A = L/(KG)$ and $S = KG/L$. [Week 3, p. 38]

## Mental model
When the system is dilute, both the operating line and the equilibrium line are straight in mole fractions. Stepping between two straight lines has a closed-form answer: Kremser's equation [Week 3, p. 38]. Everything depends on one number, the absorption factor $A = L/(KG)$. It is the ratio of the operating-line slope $L/G$ to the equilibrium slope $K$, i.e. how fast the liquid can take up solute compared with how fast equilibrium pushes it back [Week 3, p. 38; FormelarkKP3010.pdf, p. 2, eq. 26]. Stripping is the mirror image, with $S = KG/L$ [Week 3, p. 38]. The solvent flow has a floor. Lowering $L'$ rotates the operating line about the top end point until its bottom end touches the equilibrium line. There the rich liquid leaving the bottom is saturated with respect to the entering gas, and you'd need infinite stages. That is $L'_{min}$ [Week 3, p. 43–45]. As in distillation with $R_{min}$, you design at a modest multiple of it [Week 3, p. 43].

## Concepts and definitions
- **Analytical Kremser solution**: usable when the solutions are very dilute (less than 1 % in both gas and liquid). [Week 3, p. 38]
- **Kremser conditions (exam wording)**: uses mole or mass fractions and constant total gas and liquid flows. Only a small amount of solute may transfer, so the solutions must be dilute. [practice_exam_solutions.pdf, Ex. 3c]
- **Absorption factor $A$**: $A = L_{in}/(K G_{in})$ on the slide, $A = L'/(KG')$ on the formula sheet. Both are used, and they differ slightly (e.g. 1.32 vs 1.35). [Week 3, p. 38, 49; FormelarkKP3010.pdf, p. 2, eq. 26]
- **Stripping factor $S$**: $S = K G_{in}/L_{in}$ (slide), $S = KG'/L'$ (formula sheet). [Week 3, p. 38; FormelarkKP3010.pdf, p. 2, eq. 28]
- **Minimum absorbent flow $L'_{min}$**: usually the gas flow, the gas inlet/outlet compositions and the liquid inlet composition are known. The liquid flow and outlet composition depend on each other. The outlet concentration can't exceed equilibrium, so the lowest flow is when the outlet liquid is at equilibrium with the inlet gas. [Week 3, p. 43, 45]
- **Flow trade-off**: low liquid flow means high outlet concentration and more trays. High liquid flow means low outlet concentration and higher energy duty. The economic optimum is about 1.2–1.5 $L'_{min}$. [Week 3, p. 43]

## Visuals
- **Operating line rotating to minimum flow** · curve sketch [Week 3, p. 44–45]
  - Axes X (–), Y (–). Equilibrium line $Y = KX$. Fixed top point $(X_0, Y_1)$, and the horizontal level $Y = Y_{N+1}$ at the bottom.
  - Draw three operating lines from $(X_0, Y_1)$ with decreasing slope $L'/G'$, ending at $Y_{N+1}$. The last one ends *on* the equilibrium line at $(Y_{N+1}/K, Y_{N+1})$. Label it "$L'_{min}$: pinch, ∞ stages". An arrow along the $Y_{N+1}$ level shows $X_N$ increasing as $L'$ decreases.
  - Numbers from Example 7: $K = 0.68$, $Y_1 = 0.0022$, $Y_{N+1} = 0.0225$, $X_{N,max} = 0.0331$. Actual line at $1.5L'_{min}$ ends at $X_N = 0.22$.
- **Solvent-flow trade-off** · curve sketch (qualitative, built from the slide text) [Week 3, p. 43]
  - x-axis $L'/L'_{min}$ from 1 to 3. One curve for the number of trays (falling) and one for energy duty (rising). Shade 1.2–1.5 as "economic optimum".
- **Absorber vs stripper factors** · process diagram [Week 3, p. 38]
  - Two columns side by side. Absorber: $A = L/(KG)$, solute gas → liquid, formula in $y$. Stripper: $S = KG/L$, solute liquid → gas, formula in $x$. Note "$S = 1/A$".
- **Interactive plot**: Kremser for absorption, $N = \dfrac{\ln\left[\frac{y_{in}-Kx_{in}}{y_{out}-Kx_{in}}(1-\frac1A)+\frac1A\right]}{\ln A}$, with $A = L'/(KG')$ [Week 3, p. 46–49].
  - Slider: $L'$ from 62 to 300 kmol/h (start 90). Fixed $G' = 97.8$ kmol/h, $K = 0.68$, $x_{in} = 0$, $y_{in}/y_{out} = 10$.
  - Show A, N, and a marker for $L'_{min} = 60$ kmol/h. N should climb steeply as $L' \to L'_{min}$. At $L' = 90$, $A = 1.35$ and $N \approx 4.0$. The slide's 4.17 uses $A = 1.32$ with total G.

## Equations

### Kremser's equation for absorption
$$N = \frac{\ln\left[\dfrac{y_{in} - K x_{in}}{y_{out} - K x_{in}}\left(1 - \dfrac{1}{A}\right) + \dfrac{1}{A}\right]}{\ln A}, \qquad A = \frac{L'}{K G'}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $N$ | number of theoretical stages | – |
| $y_{in}, y_{out}$ | gas mole fraction in (bottom, $y_{N+1}$) and out (top, $y_1$) | – |
| $x_{in}$ | liquid mole fraction in (top, $x_0$) | – |
| $K$ | equilibrium constant, $y = Kx$ | – |
| $A$ | absorption factor | – |
| $L', G'$ | liquid and gas flow (inert on the formula sheet, total inlet on the slide) | kmol/h |

Very dilute (< 1 %), constant flows, linear equilibrium. [Week 3, p. 38; FormelarkKP3010.pdf, p. 2, eq. 25–26]

### Kremser's equation for stripping
$$N = \frac{\ln\left[\dfrac{x_{in} - y_{in}/K}{x_{out} - y_{in}/K}\left(1 - \dfrac{1}{S}\right) + \dfrac{1}{S}\right]}{\ln S}, \qquad S = \frac{K G'}{L'}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $x_{in}, x_{out}$ | liquid mole fraction in (top, $x_0$) and out (bottom, $x_N$) | – |
| $y_{in}$ | stripping-gas mole fraction in ($y_{N+1}$) | – |
| $S$ | stripping factor | – |

Same assumptions. [Week 3, p. 38; FormelarkKP3010.pdf, p. 2, eq. 27–28]

### Minimum absorbent flow (mole ratios)
$$L'_{min} = G' \cdot \frac{Y_{N+1} - Y_1}{\dfrac{Y_{N+1}}{K} - X_0}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L'_{min}$ | minimum inert liquid flow | kmol/h |
| $G'$ | inert gas flow | kmol/h |
| $Y_{N+1}, Y_1$ | gas mole ratio in and out | – |
| $X_0$ | liquid mole ratio in | – |
| $K$ | equilibrium constant, $Y = KX$ | – |

From the inert balance with the outlet liquid saturated: $Y_{N+1} = K X_N$, so $X_N = Y_{N+1}/K$. [Week 3, p. 45]

### Minimum liquid flow (mole fractions, formula sheet)
$$L_{min} = G \cdot \frac{y_{in} - y_{out}}{x_{max} - x_{in}} = G \cdot \frac{y_{in} - y_{out}}{\dfrac{y_{in}}{K} - x_{in}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $x_{max}$ | liquid outlet in equilibrium with the gas inlet, $y_{in}/K$ | – |
| $G$ | gas flow | kmol/h |

Dilute form, used in the Autumn 2022 exam. [FormelarkKP3010.pdf, p. 2, eq. 23; practice exam 2 solutions.pdf, Q3c]

## Worked example
**Ethanol absorber: minimum flow, design flow, outlet and stages** [Week 3, p. 46–49]
$G = 100$ kmol/h with 2.2 mol % ethanol, 90 % absorbed, $Y = 0.68X$, pure water. Design $L' = 1.5L'_{min}$.
1. Data: $x_{in} = 0$, $y_{in} = 0.022$, $y_{out} = 0.0022$.
2. Inert gas: $G' = 100(1 - 0.022) = 97.8$ kmol/h.
3. Ratios: $X_0 = 0$, $Y_{N+1} = 0.022/0.978 = 0.0225$, $Y_1 = 0.0022/0.9978 = 0.0022$.
4. Minimum flow: $L'_{min} = 97.8 \cdot \dfrac{0.0225 - 0.0022}{0.0225/0.68 - 0} = 60.0$ kmol/h.
5. Design flow: $L' = 1.5\cdot 60.0 = 90.0$ kmol/h.
6. Outlet liquid: $X_N = X_0 + \frac{G'}{L'}(Y_{N+1} - Y_1) = 0.22$, so $x_N = 0.22/1.22 = 0.216$ and $L_N = L'/(1 - x_N) = 92.0$ kmol/h.
7. Absorption factor: $A = \dfrac{L}{KG} = \dfrac{90}{0.68\cdot 100} = 1.32$. Alternatively $A = \dfrac{L'}{KG'} = \dfrac{90}{0.68\cdot 97.8} = 1.35$.
8. Kremser (with $A = 1.32$): $N = \dfrac{\ln\left[10(1 - \frac{1}{1.32}) + \frac{1}{1.32}\right]}{\ln 1.32} = \dfrac{\ln(3.18)}{\ln(1.32)} = 4.17$ theoretical stages.

## Faded example
**Ammonia absorber stages by Kremser** [practice_exam_solutions.pdf, Ex. 3c–d]
$G = 100$ kmol/h with 3 mol % NH₃ in air, outlet 0.5 mol %. Pure water $L = 50$ kmol/h. $y = 0.35x$.
1. **(try)** State the conditions for using Kremser. → Dilute solutions, a small amount of solute transferred, and constant total flows.
2. Data: $x_{in} = 0$, $y_{in} = 0.03$, $y_{out} = 0.005$, $K = 0.35$.
3. **(try)** Flows. → $L' = 50$ kmol/h (pure water) and $G' = 100(1 - 0.03) = 97$ kmol/h.
4. **(try)** Absorption factor. → $A = 50/(0.35\cdot 97) = 1.47$.
5. **(try)** Kremser argument. → $\frac{0.03}{0.005}(1 - \frac{1}{1.47}) + \frac{1}{1.47} = 2.60$.
6. **(try)** N. → $N = \ln(2.60)/\ln(1.47) = 2.48$ theoretical stages.

[practice_exam_solutions.pdf, Ex. 3c–d]

## Exam traps
- **Kremser is in mole fractions**: use $y_{in}$, $y_{out}$, $x_{in}$ and $y = Kx$, not $Y$ and $X$. [Week 3, p. 38; practice_exam_solutions.pdf, Ex. 3c]
- **Total or inert flows in A**: the slide uses $L_{in}/(KG_{in})$ and the formula sheet $L'/(KG')$. For dilute systems the difference is small (1.32 vs 1.35), but say which one you use. [Week 3, p. 49; FormelarkKP3010.pdf, p. 2, eq. 26]
- **Absorption uses A, stripping uses S**: and the stripping formula is written in liquid compositions, with $y_{in}/K$ subtracted. [Week 3, p. 38, 42]
- **Saturated at the bottom, not the top**: at $L_{min}$ the *outlet liquid* is in equilibrium with the *inlet gas*: $X_N = Y_{N+1}/K$ (or $x_{max} = y_{in}/K$). [Week 3, p. 45; FormelarkKP3010.pdf, p. 2, eq. 23]
- **Dividing by K**: in $L_{min}$ the denominator is $y_{in}/K$. Exam: $0.12/66.7 = 1.8\cdot 10^{-3}$, giving $L_{min} = 5947$ kmol/h. Multiplying by K instead is a classic slip. [practice exam 2 solutions.pdf, Q3c]
- **Kremser ≠ graphical exactly**: 5.16 vs 5.0 for acetone absorption, 4.91 vs 5.1 for VOC stripping. Both are accepted methods, so don't panic if they differ slightly. [Week 3, p. 30, 37, 40, 42]
- **Design factor**: absorbers use about 1.2–1.5 $L'_{min}$ [Week 3, p. 43]. Example 7 uses 1.5. Distillation's 1.1–1.5 $R_{min}$ is a different number (page 07).
- **Fall-back values**: exams give "if you couldn't solve a, use K = 80". Use them, because the later parts are graded on method. [practice exam 2 solutions.pdf, Q3c; practice_exam_solutions.pdf, Ex. 3e]

## Past exam tasks
- Practice exam 1, Ex. 3c: conditions for using Kremser's equation.
- Practice exam 1, Ex. 3d: theoretical stages for NH₃ absorption with Kremser ($N = 2.48$).
- Autumn 2022, Q3c: minimum water flow for 90 % CO₂ removal ($L_{min} = 5947$ kmol/h).

## Test yourself
**Q:** Acetone absorption: $y_{in} = 0.01$, $y_{out} = 0.001$, $x_{in} = 0$, $K = 2.53$, $G = 30$, $L = 90$ mol/h. Find A and N by Kremser.
**A:** $A = 90/(2.53\cdot 30) = 1.186$, $N = 5.16$. [Week 3, p. 40]

**Q:** VOC stripping: $x_{in} = 0.1$, $x_{out} = 0.005$, $y_{in} = 0$, $K = 1.5$, $G = L = 500$. Find S and N.
**A:** $S = 1.5\cdot 500/500 = 1.5$, $N = 4.91$. [Week 3, p. 42]

**Q:** SO₂ absorber: $G' = 116.47$ kmol/h, $Y_{N+1} = 0.0526$, $Y_1 = 0.0050$, $K = 45.01$, pure water. Find $L'_{min}$.
**A:** $X_N = 0.05/45.01 = 1.11\cdot 10^{-3}$. $L'_{min} = 116.47\cdot (0.0526 - 0.0050)/1.11\cdot 10^{-3} \approx 4994$ kmol/h. [exercise_03_solutions.pdf, Oppg. 3c]

**Q:** CO₂ absorber: $G = 100$ kmol/h, $y_{in} = 0.12$, $y_{out} = 0.013$, $K = 66.7$, pure water. Find $L_{min}$.
**A:** $L_{min} = 100\cdot \frac{0.12 - 0.013}{0.12/66.7} = 5947$ kmol/h. [practice exam 2 solutions.pdf, Q3c]

**Q:** Why not operate at $L'_{min}$, and what range is typical?
**A:** At $L'_{min}$ the liquid outlet is at equilibrium, which needs ever more trays. Higher flows cost energy. The economic optimum is about 1.2–1.5 $L'_{min}$. [Week 3, p. 43]

## Sources
- [Week 3 - Absorption and stripping with solutions.pdf, p. 38–49]
- [FormelarkKP3010.pdf, p. 2, eq. 23, 25–28]
- [exercise_03.pdf, Oppgave 3c–d]
- [exercise_03_solutions.pdf, Oppg. 3c–d]
- [practice_exam_solutions.pdf, Ex. 3c–d]
- [practice exam 2 solutions.pdf, Q3c]

> GAP: The exercise 3, Oppg. 3d official solution is internally inconsistent. Its operating line has slope 47.32 and A = 1.05, but $L'/G' = 5880/116.47 = 50.5$, and its own $X_N = 9.43\cdot 10^{-4}$ matches 50.5. It reports about 6.7 stages (graphical) and N ≈ 7 (Kremser), so it is not used as an example here.
> GAP: The cost-trade-off visual is built from the text on Week 3, p. 43. No figure is in the files.
