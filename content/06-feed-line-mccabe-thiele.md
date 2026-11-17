---
slug: 06-feed-line-mccabe-thiele
title: Feed line (q-line) and McCabe–Thiele stepping
topic: distillation
exam_weight: high
exam_weight_note: "Feed line, feed stage, stripper flows and reboiler in Q2 on 2 of 2 practice exams (Practice exam 1 Ex. 2b, 2d–e; Autumn 2022 Q2a.3–4, Q2b)"
builds_on: [03-vle-diagrams-azeotropes, 05-column-balances-operating-lines]
used_in: [07-nmin-rmin-limiting-conditions, 14-column-height-pressure-drop, 17-plate-murphree-efficiency]
sources: ["Week 2 - Multi-stage distillation with solutions.pdf", "FormelarkKP3010.pdf", "exercise_02_eng.pdf", "exercise_02_solutions.pdf", "practice_exam_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** The feed is a liquid at its boiling point. What is q, and what does the feed line look like?
**A:** $q = 1$, and the feed line is vertical through $(x_F, x_F)$. [Week 2, p. 30; practice_exam_solutions.pdf, Ex. 2b]

**Q:** McCabe–Thiele gives 6 theoretical stages with a partial reboiler. How many trays are in the column?
**A:** 5. The reboiler is itself an equilibrium stage. [Week 2, p. 38]

**Q:** While stepping down from $x_D$, when do you switch from the rectifier to the stripper operating line?
**A:** After you pass the feed point, i.e. the intersection of the feed line with the operating lines. [Week 2, p. 36]

## Mental model
You usually don't know the stripper flows, so you can't draw the stripper operating line directly. The feed fixes it [Week 2, p. 29]. The liquid part of the feed, $qF$, joins the falling liquid, and the vapour part, $(1-q)F$, joins the rising vapour. That links $L''$ to $L'$ and $V'$ to $V''$ [Week 2, p. 29–30]. Subtracting the two operating lines gives the feed line (q-line). It passes through $(x_F, x_F)$, its slope depends only on the feed's state, and both operating lines must meet on it [Week 2, p. 31; exercise_02_solutions.pdf, Oppg. 2c]. The full construction follows: diagonal and equilibrium curve, then the rectifier line from $x_D$, then the q-line, then the stripper line from $x_B$ through the intersection. Then step from $x_D$ to $x_B$, switching lines at the feed [Week 2, p. 32–36]. The last step is the partial reboiler, which is also an equilibrium stage [Week 2, p. 38].

## Concepts and definitions
- **Feed-section balance**: $F + V'' + L' = V' + L''$. The feed's liquid $F_L$ adds to the liquid flow and its vapour $F_V$ adds to the vapour flow. [Week 2, p. 29]
- **q (liquid fraction of the feed)**: $F_L = qF$ and $F_V = (1-q)F$. Formally, $q$ = heat required to vaporise 1 mol of feed / heat required to vaporise 1 mol of liquid. [Week 2, p. 30]
- **Feed states**: $q = 1$ is saturated liquid at its bubble point. $q = 0$ is saturated vapour at its dew point. $0 < q < 1$ is a partially evaporated mixture. [Week 2, p. 30]
- **Feed line (q-line)**: the locus where the rectifier and stripper operating lines intersect. It runs through $(x_F, x_F)$ with slope $q/(q-1)$. It is horizontal for $q = 0$ and vertical for $q = 1$. [Week 2, p. 31; exercise_02_solutions.pdf, Oppg. 2c–d]
- **Stripper operating line construction**: from $(x_B, x_B)$ through the intersection of the q-line and the rectifier operating line. [Week 2, p. 35; exercise_02_solutions.pdf, Oppg. 2b]
- **Stepping**: start at $(x_D, x_D)$ and step until the liquid fraction is below $x_B$. Switch to the stripper line after the feed point. [Week 2, p. 36]
- **Feed stage**: the step where the staircase crosses the q-line. [exercise_02_solutions.pdf, Oppg. 3c]
- **Theoretical vs actual stages**: theoretical stages can be fractional (e.g. 5.65). Actual stages must be whole numbers, rounded up. [Week 2, p. 37]
- **Partial reboiler stage**: part of the liquid is evaporated, so it is an equilibrium stage. The vapour is richer in the most volatile component than the liquid. N theoretical stages means 1 reboiler stage + (N−1) trays. [Week 2, p. 38]
- **Reboiler vapour composition**: read $y_B$ from the equilibrium curve at $x_B$. [exercise_02_solutions.pdf, Oppg. 1c, 4d]

## Visuals
- **Feed tray control volume** · process diagram [Week 2, p. 29–30; exercise_02_eng.pdf, Exercise 2, Fig. 2c]
  - Feed tray with $L'$ in from above, $V''$ in from below, $L''$ out down and $V'$ out up. Feed F enters from the side and splits: $qF$ (liquid) goes down to join $L''$, and $(1-q)F$ (vapour) goes up to join $V'$.
  - Labels: "$L'' = L' + qF$", "$V' = V'' + (1-q)F$".
- **q-line family** · curve sketch [Week 2, p. 30–31; exercise_02_solutions.pdf, Oppg. 2d, Fig. 3]
  - y–x diagram with diagonal and equilibrium curve. Three lines from $(x_F, x_F)$: vertical ($q = 1$, saturated liquid), horizontal ($q = 0$, saturated vapour), and a negative slope for $0 < q < 1$.
  - Show the rectifier and stripper operating lines meeting on the $0 < q < 1$ line.
- **McCabe–Thiele construction, step by step** · curve sketch, 5 panels [Week 2, p. 32–36]
  - Data: $x_B = 0.1$, $x_F = 0.4$, $x_D = 0.95$, $q = 0.7$, so the q-line is $y = -2.33x + 3.33x_F$.
  - Panel 1: diagonal + equilibrium curve. Panel 2: add the rectifier OL from $(x_D, x_D)$. Panel 3: add the q-line from $(x_F, x_F)$. Panel 4: add the stripper OL from $(x_B, x_B)$ through the intersection. Panel 5: stepped staircase, with the switch at the feed highlighted. Result: 6 stages, feed on stage 4, about 5.65 theoretical [p. 37].
  - Mark the last step as "partial reboiler".
- **Interactive plot**: full McCabe–Thiele with the equilibrium curve $y = \frac{\alpha x}{1+(\alpha-1)x}$, the rectifier OL, the q-line $y = -\frac{q}{1-q}x + \frac{x_F}{1-q}$ and the stripper OL [Week 2, p. 32–36].
  - Sliders: $R$ from 0.5 to 6 (start 2), $q$ from 0 to 1 (start 0.7), $\alpha$ from 1.5 to 8 (start 4.5). Fixed $x_F = 0.4$, $x_D = 0.95$, $x_B = 0.10$. Start values are from the Week 2 self-exercise [Week 2, p. 39].
  - Show live stage count and feed stage. Draw $q = 1$ as a vertical line (the slope is infinite). If R drops so low that the operating lines meet above the equilibrium curve, show "infeasible: R below R_min" (page 07).

## Equations

### Feed-section flow balances
$$L'' = L' + qF, \qquad V' = V'' + (1-q)F$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L', V'$ | rectifier liquid and vapour flow | kmol/h |
| $L'', V''$ | stripper liquid and vapour flow | kmol/h |
| $F$ | feed flow | kmol/h |
| $q$ | liquid fraction of the feed | – |

Constant molar flows in each section. [Week 2, p. 29–30; FormelarkKP3010.pdf, p. 2, eq. 13–14]

### q (thermal definition)
$$q = \frac{\text{heat required to vaporize 1 mol of feed}}{\text{heat required to vaporize 1 mol of liquid}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $q$ | feed condition: 1 for saturated liquid, 0 for saturated vapour, between for a partially evaporated mixture | – |

[Week 2, p. 30]

### Feed line (q-ligning)
$$y = -\frac{q}{1-q}\, x + \frac{1}{1-q}\, x_F$$
| Symbol | Meaning | Unit |
|---|---|---|
| $y, x$ | vapour and liquid mole fraction (general coordinates, not tray-indexed) | – |
| $x_F$ | feed mole fraction of the light component | – |

Derived by subtracting the stripper balance from the rectifier balance, written for general $(x, y)$, and using $Fx_F = Dx_D + Bx_B$ and the feed-section balances. Passes through $(x_F, x_F)$. [Week 2, p. 31; FormelarkKP3010.pdf, p. 2, eq. 12; exercise_02_solutions.pdf, Oppg. 2c, eq. 10–15]

### q from the slope of a drawn feed line
$$\text{slope} = -\frac{q}{1-q} \;\Rightarrow\; q = \frac{-\text{slope}}{1 - \text{slope}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| slope | slope of the feed line read from two points on it | – |

Example: slope −1 gives $q = 0.5$. [practice exam 2 solutions.pdf, Q2a.4]

### Reboiler duty
$$Q = V''\,\Delta H_{vap,M}, \qquad \Delta H_{vap,M} = y_B\,\Delta H_{vap,A} + (1 - y_B)\,\Delta H_{vap,B}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $Q$ | reboiler heat duty | kW (= kJ/s) |
| $V''$ | vapour flow produced in the reboiler | mol/s (convert from kmol/h) |
| $y_B$ | light-component fraction in the reboiler vapour, read from VLE at $x_B$ | – |
| $\Delta H_{vap,i}$ | enthalpy of evaporation of component $i$ | kJ/mol |

Mixture enthalpy weighted by the *vapour* composition. [practice_exam_solutions.pdf, Ex. 2e; exercise_02_solutions.pdf, Oppg. 4d]

## Worked example
**Acetone/water column with a two-phase feed** [exercise_02_eng.pdf, Exercise 3; exercise_02_solutions.pdf, Oppg. 3b–c]
Given $F = 200$ kmol/h, $x_F = 0.40$, $x_D = 0.90$, $x_B = 0.014$, $D = 87.1$, $B = 112.9$ kmol/h (from page 05), $q = 0.5$ (50 % vapour, 50 % liquid at boiling point) and $R = 0.6$.
1. Rectifier flows: $L' = RD = 52.3$ kmol/h and $V' = L' + D = 139.4$ kmol/h.
2. Stripper liquid: $L'' = L' + qF = 52.3 + 0.5 \cdot 200 = 152.3$ kmol/h.
3. Stripper vapour: $V'' = V' - (1-q)F = 139.4 - 100 = 39.4$ kmol/h.
4. Check: $L'' = V'' + B = 39.4 + 112.9 = 152.3$ kmol/h. ✓
5. Points on the diagonal: $(x_B, x_B) = (0.014, 0.014)$, $(x_F, x_F) = (0.4, 0.4)$, $(x_D, x_D) = (0.9, 0.9)$.
6. Rectifier OL from $(0, x_D/(R+1)) = (0, 0.56)$ to $(0.9, 0.9)$.
7. q-line: $y = \frac{q}{q-1}x - \frac{1}{q-1}x_F = -x + 0.8$, from $(0.4, 0.4)$ with slope −1.
8. Stripper OL from $(0.014, 0.014)$ to the intersection of the rectifier OL and the q-line.
9. Step from $(x_D, x_D)$ to $(x_B, x_B)$. Result: 5.9 theoretical stages. The reboiler counts as one, so 4.9 are in the column: 4 in the rectifier and 0.9 in the stripper. Feed on stage 4.

## Faded example
**Liquid feed, internal flows and reboiler duty** [practice_exam_solutions.pdf, Ex. 2b, 2d–e]
Ethyl acetate/cyclohexane, $F = 60$ kmol/h, $x_F = 0.2$, $D = 12$ kmol/h, $x_D = 0.5$, $R = 2.1$. Feed is liquid at its bubbling point. $\Delta H_{vap}$: ethyl acetate 32 kJ/mol, cyclohexane 30 kJ/mol.
1. **(try)** Which of three feed lines is correct? → $q = 1$, so the vertical line (C).
2. **(try)** Bottoms. → $B = 60 - 12 = 48$ kmol/h. $x_B = (60\cdot 0.2 - 12\cdot 0.5)/48 = 0.125$.
3. **(try)** Rectifier flows. → $L' = 2.1 \cdot 12 = 25.2$ and $V' = 12 + 25.2 = 37.2$ kmol/h.
4. **(try)** Stripper flows for a liquid feed. → $L'' = L' + F = 85.2$ kmol/h. $V'' = V' = 37.2$ kmol/h.
5. Reboiler vapour from VLE at $x_B = 0.125$: $y_B \approx 0.23$.
6. **(try)** Mixture heat of evaporation. → $0.23\cdot 32 + 0.77 \cdot 30 = 30.46$ kJ/mol.
7. **(try)** Duty, with $V'' = 37.2$ kmol/h $= 10.33$ mol/s. → $Q = 30.46 \cdot 10.33 = 314.8$ kW.

[practice_exam_solutions.pdf, Ex. 2b, 2d–e]

## Exam traps
- **The reboiler is a stage**: column trays = theoretical stages − 1 when there is a partial or external reboiler. Autumn 2022 Q2b: 7 theoretical → 6 in the column. [Week 2, p. 38; practice exam 2 solutions.pdf, Q2b; exercise_02_solutions.pdf, Oppg. 3c]
- **Switch lines at the feed**: keep using the rectifier OL past the feed and you get the wrong stage count and feed stage. [Week 2, p. 36]
- **q = 1 means a vertical feed line**: the slope formula divides by zero, so draw it straight up from $(x_F, x_F)$. [practice_exam_solutions.pdf, Ex. 2b; exercise_02_solutions.pdf, Oppg. 4b]
- **Liquid feed: $V'' = V'$**: all of F goes to the liquid. Don't subtract F from the vapour. [practice_exam_solutions.pdf, Ex. 2d]
- **Reading q off a diagram**: take two points on the feed line, compute the slope, then use slope $= -q/(1-q)$. The answer is the liquid fraction of the feed. [practice exam 2 solutions.pdf, Q2a.4]
- **Reboiler duty uses $V''$ and $y_B$, not $x_B$**: and convert kmol/h to mol/s to get kW. [practice_exam_solutions.pdf, Ex. 2e]
- **Fractional stages**: give the theoretical number (e.g. 5.65) when asked for theoretical stages, and round up for actual stages. [Week 2, p. 37]
- **Slide typo**: Week 2, p. 31 writes the stripper balance as $V''y = L''x - Bx_D$. It should be $Bx_B$, as in the next line and on the formula sheet. [Week 2, p. 31; FormelarkKP3010.pdf, p. 2, eq. 11]
- **Always check with a second balance**: e.g. $L'' = V'' + B$ after computing $L''$ from q. [exercise_02_solutions.pdf, Oppg. 3b, 4c]

## Past exam tasks
- Practice exam 1, Ex. 2b: pick the correct feed line for a liquid at bubbling point.
- Practice exam 1, Ex. 2d: internal stripper flows for a liquid feed ($L'' = 85.2$, $V'' = 37.2$ kmol/h).
- Practice exam 1, Ex. 2e: reboiler vapour composition (±0.23) and reboiler duty (314.8 kW).
- Autumn 2022, Q2a.3: feed stage from a McCabe–Thiele diagram (4th from the top).
- Autumn 2022, Q2a.4: liquid fraction of the feed from the feed-line slope ($q = 0.5$).
- Autumn 2022, Q2b: reboiler stage subtracted before computing column height (height itself on pages 14 and 17).

## Test yourself
**Q:** For $q = 0.7$, write the feed line.
**A:** $y = -2.33x + 3.33x_F$. [Week 2, p. 34]

**Q:** A feed line passes through (0.5, 0.7) and (0.6, 0.6). What is q?
**A:** Slope $= -1 = -q/(1-q)$, so $q = 0.5$: half the feed is liquid. [practice exam 2 solutions.pdf, Q2a.4]

**Q:** Isopropanol/water, $F = 200$ kmol/h, $q = 1$, $D = 61.3$, $B = 138.7$ kmol/h, $R = 0.8$. Find $L'$, $L''$, $V''$ and $V'$.
**A:** $L' = 49.04$, $L'' = L' + F = 249.04$, $V'' = L'' - B = 110.34$, and $V' = V'' = 110.34$ kmol/h. [exercise_02_solutions.pdf, Oppg. 4c]

**Q:** Same column: $y_B = 0.12$ at $x_B = 0.01$, $\Delta H_{vap}$ isopropanol 39.85 kJ/mol, water 41.38 kJ/mol. Reboiler duty?
**A:** $\Delta H_{mix} = 0.12\cdot 39.85 + 0.88 \cdot 41.38 = 41.2$ kJ/mol. $Q = (110.34/3.6)\cdot 41.2 \approx 1.26$ MW. [exercise_02_solutions.pdf, Oppg. 4d]

**Q:** The McCabe–Thiele staircase for that column gives 6.8 theoretical stages. How many are in the column, and where is the feed?
**A:** 5.8 in the column (the reboiler is one stage). Feed on stage 5. [exercise_02_solutions.pdf, Oppg. 4b]

## Sources
- [Week 2 - Multi-stage distillation with solutions.pdf, p. 29–39]
- [FormelarkKP3010.pdf, p. 2, eq. 11–14]
- [exercise_02_eng.pdf, Exercise 2–4]
- [exercise_02_solutions.pdf, Oppg. 1c, 2b–d, 3b–c, 4b–d]
- [practice_exam_solutions.pdf, Ex. 2b, 2d–e]
- [practice exam 2 solutions.pdf, Q2a.3–4, Q2b]

> GAP: The slides don't give R and α for the p. 32–36 example. The interactive start values R = 2, α = 4.5 come from the p. 39 self-exercise, which uses the same compositions and q, so the slider's stage count may differ slightly from the slide's 6 / 5.65.
> GAP: Reboiler duty is not in the lecture slides. It comes only from the exercise and exam solutions.
