---
slug: 07-nmin-rmin-limiting-conditions
title: Minimum stages, minimum reflux and limiting conditions
topic: distillation
exam_weight: high
exam_weight_note: "Minimum reflux from a diagram on 1 of 2 practice exams (Practice exam 1, Ex. 2c); the same pinch logic is the minimum-absorbent question in Autumn 2022 Q3c"
builds_on: [03-vle-diagrams-azeotropes, 05-column-balances-operating-lines, 06-feed-line-mccabe-thiele]
used_in: [11-kremser-minimum-absorbent-flow, 21-counter-current-extraction-design]
sources: ["Week 2 - Multi-stage distillation with solutions.pdf", "exercise_02_eng.pdf", "exercise_02_solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** You raise the reflux ratio. Do you need more or fewer theoretical stages?
**A:** Fewer. [Week 2, p. 40]

**Q:** At infinite reflux, where are the operating lines?
**A:** On the diagonal $y = x$. Both slopes $L'/V'$ and $L''/V''$ approach 1. [Week 2, p. 41, 45]

**Q:** How many stages do you need at minimum reflux?
**A:** Infinitely many. [Week 2, p. 42]

## Mental model
For a given separation you can trade stages against reflux. Many stages with little reflux, or few stages with lots of reflux, both work [Week 2, p. 40]. The two extremes bound the design. At total (infinite) reflux, the operating lines collapse onto the diagonal, as far from the equilibrium curve as they can get. Each step is then as large as possible, which gives the minimum number of stages, independent of feed composition and q [Week 2, p. 41]. At minimum reflux, the operating lines move toward the equilibrium curve until they touch it at a pinch point. The steps there shrink to zero, so you need infinitely many stages, but the internal flows and reboiler duty are at their lowest [Week 2, p. 42]. Neither extreme is affordable: stages cost capital and reflux costs energy. Real designs sit at about 1.1–1.5 × $R_{min}$ [Week 2, p. 43].

## Concepts and definitions
- **Reflux–stages trade-off**: infinitely many $(R, N)$ combinations achieve one separation. A larger R needs fewer stages. More stages mean higher capital cost (larger column, more material). Higher reflux means higher operating cost (larger internal flows, more liquid to evaporate). [Week 2, p. 40]
- **Minimum number of stages ($N_{min}$)**: needed when the reflux is infinitely large. Both operating-line slopes approach 1, so the lines lie on the diagonal. Neither $x_F$ nor q influences the result. [Week 2, p. 41, 45]
- **Minimum reflux ($R_{min}$)**: internal flows and reboil duty are at their lowest, and an infinite number of stages is required. The operating lines intersect the feed line and the equilibrium line at the same point. $R_{min}$ follows from the slope (or intercept) of that operating line. [Week 2, p. 42]
- **Pinch point, ideal case**: the intersection of the q-line with the equilibrium curve. [Week 2, p. 47; exercise_02_solutions.pdf, Oppg. 3a]
- **Pinch point, non-ideal case**: the operating line can't cross the equilibrium line. If the line through the q-line/equilibrium intersection would cross the curve, make it steeper until it *touches* (tangent to) the equilibrium curve. [Week 2, p. 48; exercise_02_solutions.pdf, Oppg. 4a]
- **Economic optimum**: operating at $R_{min}$ or $N_{min}$ is not feasible because of the costs. The optimum is usually $1.1$–$1.5 \times R_{min}$. [Week 2, p. 43]

## Visuals
- **Same separation, two reflux ratios** · curve sketch, 2 panels [Week 2, p. 40]
  - Identical equilibrium curve, $x_D$, $x_B$ and $x_F$. The left panel has R = 5.0 (steep rectifier line, few large steps), the right panel R = 1.5 (line closer to the curve, more steps). Caption: "higher R → fewer stages → lower capital cost, higher energy cost".
- **Total reflux, N_min** · curve sketch [Week 2, p. 41, 44–45]
  - Benzene/toluene, α = 2.5, $x_D = 0.95$, $x_B = 0.10$. Equilibrium curve and diagonal only, with the operating lines *on* the diagonal.
  - Step between the curve and the diagonal from (0.95, 0.95) down to $x \le 0.10$. Annotate "5.8 theoretical stages (6 real)". Highlight that $x_F$ and q don't appear.
- **Minimum reflux, ideal pinch** · curve sketch [Week 2, p. 42, 46–47]
  - Same system, $x_F = 0.45$, q = 1, so the feed line is vertical at x = 0.45. It meets the equilibrium curve at about (0.45, 0.67).
  - Rectifier line from (0.95, 0.95) through that pinch to the y-axis at 0.42. Label "$R_{min} = 1.26$" and "∞ stages near the pinch".
- **Non-ideal tangent pinch** · curve sketch [Week 2, p. 48; exercise_02_solutions.pdf, Oppg. 4a, Fig. 8–9]
  - Isopropanol/water, $x_D = 0.63$, $x_F = 0.20$, q = 1. The dashed wrong line (from $(x_D, x_D)$ to the q-line/equilibrium intersection) crosses the equilibrium curve, marked with a red ✗.
  - The correct line from (0.63, 0.63) is tangent to the curve at (0.45, 0.575). Label "$R_{min} = 0.45$".
- **Cost vs reflux** · curve sketch (qualitative, built from the slide text) [Week 2, p. 40, 43]
  - x-axis $R/R_{min}$ from 1 to 3. A capital-cost curve that falls (fewer stages), an energy-cost curve that rises (reboiler duty), and their sum with a minimum. Shade the 1.1–1.5 band as "usual optimum".
- **Interactive plot**: rectifier OL $y = \frac{R}{R+1}x + \frac{x_D}{R+1}$, q = 1 feed line, stripper OL and equilibrium curve $y = \frac{\alpha x}{1+(\alpha-1)x}$ [Week 2, p. 44–47].
  - Slider: R from 0.8 to 8 (start 1.5). Fixed $\alpha = 2.5$, $x_F = 0.45$, $x_D = 0.95$, $x_B = 0.10$.
  - Show the stage count live. Mark $R_{min} = 1.26$ on the slider. Below $R_{min}$ the operating-line intersection lies above the equilibrium curve: show "infeasible". Add a button "R → ∞" that puts the lines on the diagonal and shows $N_{min} \approx 5.8$.

## Equations

### Rectifier operating line (used at the limits)
$$y_A = \frac{R}{R+1} x_A + \frac{1}{R+1} x_D$$
| Symbol | Meaning | Unit |
|---|---|---|
| $R$ | reflux ratio | – |
| $x_D$ | distillate mole fraction | – |

As $R \to \infty$, the slope $R/(R+1) \to 1$ and the intercept goes to 0, giving the diagonal. [Week 2, p. 41]

### Minimum reflux from the pinch point
$$\frac{R_{min}}{R_{min}+1} = \frac{x_D - y'}{x_D - x'} \qquad\text{or}\qquad y(x=0) = \frac{x_D}{R_{min}+1}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $R_{min}$ | minimum reflux ratio | – |
| $(x', y')$ | pinch point: q-line ∩ equilibrium (ideal), or tangent point (non-ideal) | – |
| $x_D$ | distillate mole fraction | – |

The slope form uses the line from $(x_D, x_D)$ to the pinch. The intercept form reads the y-axis crossing. [Week 2, p. 42, 47; exercise_02_solutions.pdf, Oppg. 3a, eq. 18; Oppg. 4a, eq. 32]

### Design reflux
$$R = (1.1\text{–}1.5)\, R_{min}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $R$ | chosen operating reflux ratio | – |

Usual economic range. Exercises sometimes prescribe their own factor, e.g. $2R_{min}$. [Week 2, p. 43; exercise_02_eng.pdf, Exercise 3c]

## Worked example
**Minimum reflux for benzene/toluene, liquid feed** [Week 2, p. 46–47]
$F = 100$ kmol/h, $x_F = 0.45$, $x_D = 0.95$, $x_B = 0.10$, α = 2.5, feed liquid at bubbling point.
1. Feed condition: liquid at bubbling point, so $q = 1$ and the feed line is vertical at $x = 0.45$.
2. Pinch on the equilibrium curve: $y' = \dfrac{2.5\cdot 0.45}{1 + 1.5\cdot 0.45} = 0.67$, so the pinch is $(0.45, 0.67)$.
3. Draw the rectifier OL from $(0.95, 0.95)$ through the pinch to the y-axis.
4. Read the intercept: $0.42 = \dfrac{x_D}{1+R_{min}} = \dfrac{0.95}{1+R_{min}}$.
5. Solve: $R_{min} = 1.26$.
6. Check with the slope form: $\dfrac{0.95 - 0.67}{0.95 - 0.45} = 0.557 = \dfrac{R_{min}}{R_{min}+1}$, so $R_{min} = 1.26$. ✓

## Faded example
**Minimum reflux from a given diagram** [practice_exam_solutions.pdf, Ex. 2c]
Ethyl acetate/cyclohexane, $x_D = 0.5$, liquid feed at bubbling point (feed line C). Line C meets the equilibrium curve at C = (0.2, 0.32).
1. Pinch point = intersection of the chosen feed line with the equilibrium curve: (0.2, 0.32).
2. **(try)** Slope of the rectifier OL from $(x_D, x_D) = (0.5, 0.5)$ to the pinch. → $\dfrac{0.5 - 0.32}{0.5 - 0.2} = 0.6$.
3. **(try)** Set the slope equal to $R/(R+1)$ and solve. → $0.6 = R_{min}/(R_{min}+1)$, so $R_{min} = 1.5$.
4. **(try)** The exam then uses $R = 2.1$. What multiple of $R_{min}$ is that? → $2.1/1.5 = 1.4$, inside the usual 1.1–1.5 range.

[practice_exam_solutions.pdf, Ex. 2c–d; Week 2, p. 43]

## Exam traps
- **The slope is $R/(R+1)$, not R**: the exam's slope 0.6 means $R_{min} = 1.5$, not 0.6. [practice_exam_solutions.pdf, Ex. 2c]
- **Check for a tangent pinch**: for non-ideal curves, the line to the q-line intersection may cross the equilibrium curve. Then the pinch is the tangent point, and $R_{min}$ is larger. [Week 2, p. 48; exercise_02_solutions.pdf, Oppg. 4a]
- **The feed line matters for $R_{min}$ but not for $N_{min}$**: $N_{min}$ is independent of $x_F$ and q. $R_{min}$ depends on both through the pinch. [Week 2, p. 41, 47]
- **Use the right feed line**: in multi-option questions, pick the q-line first (page 06). The pinch is *that* line's intersection with the equilibrium curve. [practice_exam_solutions.pdf, Ex. 2b–c]
- **$N_{min}$ is theoretical**: 5.8 theoretical stages means 6 real stages. [Week 2, p. 45]
- **Minimum reflux means minimum reboiler duty, not minimum cost**: it needs infinite stages and is never the design point. [Week 2, p. 42–43]
- **Read $(x', y')$ carefully**: in a two-phase feed problem the pinch is on the sloped q-line, e.g. (0.09, 0.71) for $q = 0.5$, not at $x_F$. [exercise_02_solutions.pdf, Oppg. 3a]

## Past exam tasks
- Practice exam 1, Ex. 2c: minimum reflux ratio from the feed line and equilibrium intersection ($R_{min} = 1.5$).
- Autumn 2022, Q3c: minimum water flow in an absorber. Same pinch idea, covered on page 11.

## Test yourself
**Q:** Acetone/water, $x_D = 0.90$, $q = 0.5$ (q-line $y = -x + 0.8$). The q-line meets the equilibrium curve at (0.09, 0.71). Find $R_{min}$.
**A:** $\dfrac{0.90 - 0.71}{0.90 - 0.09} = 0.234 = \dfrac{R_{min}}{R_{min}+1}$, so $R_{min} \approx 0.30$. [exercise_02_solutions.pdf, Oppg. 3a]

**Q:** Isopropanol/water, $x_D = 0.63$. The operating line from $(x_D, x_D)$ is tangent to the equilibrium curve at (0.45, 0.575). Find $R_{min}$. Why not use the q-line intersection?
**A:** $\dfrac{0.63 - 0.575}{0.63 - 0.45} = 0.31$, so $R_{min} = 0.45$. A line to the q-line intersection would cross the equilibrium curve, which isn't allowed. [exercise_02_solutions.pdf, Oppg. 4a; Week 2, p. 48]

**Q:** You change the feed from saturated liquid to saturated vapour at the same $x_F$. What happens to $N_{min}$?
**A:** Nothing. $N_{min}$ doesn't depend on q or $x_F$. [Week 2, p. 41]

**Q:** Give two reasons not to operate at minimum reflux, and the usual design range.
**A:** It needs an infinite number of stages (infinite capital cost), and it is not economically feasible. The usual range is 1.1–1.5 × $R_{min}$. [Week 2, p. 42–43]

**Q:** Benzene/toluene, α = 2.5, $x_D = 0.95$, $x_B = 0.10$. How do you find $N_{min}$, and what's the result?
**A:** Put both operating lines on the diagonal and step between the diagonal and the equilibrium curve: 5.8 theoretical stages (6 real). [Week 2, p. 44–45]

## Sources
- [Week 2 - Multi-stage distillation with solutions.pdf, p. 40–48]
- [exercise_02_eng.pdf, Exercise 3–4]
- [exercise_02_solutions.pdf, Oppg. 3a, 4a, Fig. 5, 8–9]
- [practice_exam_solutions.pdf, Ex. 2b–d]

> GAP: No analytical equation for $N_{min}$ (e.g. Fenske) is in the slides, exercises or formula sheet. $N_{min}$ is found graphically only.
> GAP: The cost-vs-reflux curve is not drawn in the files. The visual is built from the text on Week 2, p. 40 and 43.
