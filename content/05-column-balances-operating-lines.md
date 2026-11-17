---
slug: 05-column-balances-operating-lines
title: Column balances, reflux ratio and operating lines
topic: distillation
exam_weight: high
exam_weight_note: "Overall/internal balances and R from the operating line in Q2 on 2 of 2 practice exams (Practice exam 1 Ex. 2d; Autumn 2022 Q2a.2, Q2a.5)"
builds_on: [04-equilibrium-flash-distillation]
used_in: [06-feed-line-mccabe-thiele, 07-nmin-rmin-limiting-conditions, 10-multistage-absorption-stripping]
sources: ["Week 2 - Multi-stage distillation with solutions.pdf", "FormelarkKP3010.pdf", "exercise_02_eng.pdf", "exercise_02_solutions.pdf", "practice_exam_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** Why use a column instead of one flash drum?
**A:** One flash gives limited separation. A counter-current cascade of flash stages raises purity and yield without intermediate products. [Week 2, p. 2]

**Q:** The top vapour is totally condensed. How do $y_1$, $x_D$ and the reflux composition compare?
**A:** They're all equal: $x_D = y_1$, and the reflux has composition $x_D$. [exercise_02_solutions.pdf, Oppg. 1b]

**Q:** Is the vapour flow above the feed the same as below it?
**A:** Generally not. Flows are constant *within* each section, but they change at the feed depending on its condition. [exercise_02_solutions.pdf, Oppg. 1d; Week 2, p. 9]

## Mental model
A distillation column is a stack of flash stages run counter-current. Vapour rises, liquid falls, and on every tray the leaving vapour and liquid are in equilibrium [Week 2, p. 2–3]. Two kinds of relation describe it. Equilibrium (VLE) links $y_n$ and $x_n$ on the *same* tray. Mass balances link the streams *passing between* trays, $y_{n+1}$ and $x_n$ [Week 2, p. 8, 13]. If both components have the same enthalpy of evaporation, the liquid and vapour flows stay constant through each section. The balance over the top or bottom part then becomes a straight line in the y–x diagram, called the operating line (driftslinje) [Week 2, p. 9, 11, 25]. The reflux ratio $R = L'/D$ fixes the slope of the rectifier line, and alternating between that line and the equilibrium curve walks you stage by stage down the column (McCabe–Thiele) [Week 2, p. 12, 15–18].

## Concepts and definitions
- **Counter-current cascade**: several flash separations in sequence, with vapour and liquid flowing opposite ways. No intermediate products, high yield of end products. [Week 2, p. 2]
- **Stages (trays, trinn)**: on each stage vapour moves up and meets the liquid from the stage above, and unevaporated liquid flows down. Each stage is at equilibrium. [Week 2, p. 3]
- **Stage numbering**: the top tray is 1 and the bottom tray is N, which is also the total number of trays. More stages generally means better separation and higher purity. [Week 2, p. 4]
- **Reflux (tilbakeløp) and boilup (oppvarming)**: the liquid returned at the top and the vapour returned at the bottom. [Week 2, p. 4]
- **Rectifying section (forsterker)**: stages above the feed. **Stripping section (avdriver)**: stages below the feed. [Week 2, p. 24; exercise_02_solutions.pdf, Oppg. 1a]
- **Stream notation**: rectifier $L'$, $V'$. Stripper $L''$, $V''$. [Week 2, p. 10–11, 25]
- **Constant molar flows**: $L_{n-1} = L_n = L$ and $V_{n-1} = V_n = V$ within a section. True when all components have the same enthalpy of evaporation. Not true across a point where a stream is added (the feed). [Week 2, p. 9]
- **Internal balances**: three of them (rectifying, stripping, feed section). Often they must be solved before the overall balance can be. [Week 2, p. 10]
- **Operating line (driftslinje)**: relates the passing concentrations $y_{n+1}$ and $x_n$. It is a mass balance and says nothing about equilibrium. [Week 2, p. 11, 13]
- **Reflux ratio ($R$, tilbakeløpsforholdet)**: liquid entering at the top, $L'$, over the distillate, $D$. [Week 2, p. 12]
- **Theoretical stage**: each step in the McCabe–Thiele diagram. [Week 2, p. 18]
- **Total condensation**: the vapour leaving stage 1 is condensed to liquid at its boiling point, so $x_D = y_1$. [exercise_02_solutions.pdf, Oppg. 1b]

## Visuals
- **Column overview** · process diagram [Week 2, p. 3–4, 10; exercise_02_solutions.pdf, Oppg. 1, Fig. 1]
  - Vertical column with trays numbered 1 (top) to N (bottom). Total condenser on top, with distillate $D, x_D$ out and reflux $L', x_D$ back. Reboiler at the bottom, with bottoms $B, x_B$ out and boilup $V''$ back up. Feed $F, x_F$ at mid-height.
  - Brackets: "rectifying section (forsterker): $L'$, $V'$" above the feed, and "stripping section (avdriver): $L''$, $V''$" below it.
  - Highlight: "$x_D = y_1$ (total condensation)".
- **Single-tray control volume** · cross-section [Week 2, p. 8]
  - Tray n with arrows: $L_{n-1}, x_{n-1}$ in from above; $V_{n+1}, y_{n+1}$ in from below; $L_n, x_n$ out down; $V_n, y_n$ out up.
  - Tag "VLE: $y_n$ ↔ $x_n$" on the tray, and "operating line: $y_{n+1}$ ↔ $x_n$" between trays.
- **Rectifier and stripper control volumes** · process diagram [exercise_02_eng.pdf, Exercise 2, Fig. 2a–b; Week 2, p. 11, 25]
  - (a) Envelope around the condenser plus trays 1…n, cutting $V'$ ($y_{n+1}$) and $L'$ ($x_n$), with $D, x_D$ leaving.
  - (b) Envelope around the reboiler plus trays m+1…N, cutting $L''$ ($x_m$) and $V''$ ($y_{m+1}$), with $B, x_B$ leaving.
- **Rectifier operating line and stepping** · curve sketch [Week 2, p. 14–18, 21–23]
  - y–x diagram with diagonal, equilibrium curve, and the rectifier operating line from $(x_D, x_D)$ to the y-intercept $(0, x_D/(R+1))$.
  - Steps: start at $(x_D, x_D)$, go horizontally to the equilibrium curve (gives $x_1$), then vertically down to the operating line (gives $y_2$). Repeat until $x \le x_F$. Number each corner 1, 2, 3.
  - Example 3 values: $x_D = 0.95$, intercept 0.29, R = 2.3, $x_F = 0.4$, 3 stages.
- **Stripper operating line from two points** · curve sketch [Week 2, p. 26–28]
  - Line through (0.1, 0.1) on the diagonal and (0.7, 1.0), slope 1.5 (> 1). Annotate "slope = $L''/V''$; with $V''$ = 10 kmol/h → $L''$ = 15, B = 5 kmol/h".
- **Interactive plot**: rectifier operating line $y_{n+1} = \frac{R}{R+1}x_n + \frac{x_D}{R+1}$ on a y–x diagram with the diagonal [Week 2, p. 12, 21–22].
  - Slider: $R$ from 0.3 to 10 (start 2.3). Fixed $x_D = 0.95$.
  - Show live slope and y-intercept. At R = 2.3 the intercept must read 0.29. As R grows, the line rotates towards the diagonal (see page 07).

## Equations

### Overall balances (whole column)
$$F = B + D, \qquad F x_F = D x_D + B x_B$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F, D, B$ | feed, distillate and bottoms flow | kmol/h |
| $x_F, x_D, x_B$ | mole fraction of the light component in each stream | – |

Binary, steady state. [Week 2, p. 5]

Rearranged form: $D = \dfrac{x_F - x_B}{x_D - x_B} F$. [exercise_02_solutions.pdf, Oppg. 4c, eq. 37]

### Tray balances
$$V_{n+1} + L_{n-1} = V_n + L_n, \qquad V_{n+1} y_{n+1} + L_{n-1} x_{n-1} = V_n y_n + L_n x_n$$
| Symbol | Meaning | Unit |
|---|---|---|
| $V_n, L_n$ | vapour and liquid leaving tray n | kmol/h |
| $y_n, x_n$ | their mole fractions | – |

Steady state. VLE links $y_n$ and $x_n$. [Week 2, p. 8]

### Rectifier balances and operating line (driftslinje for forsterker)
$$V' = L' + D, \qquad V' y_{n+1} = L' x_n + D x_D$$
$$y_{n+1} = \frac{L'}{V'} x_n + \frac{D}{V'} x_D = \frac{R}{R+1} x_n + \frac{1}{R+1} x_D$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L', V'$ | liquid and vapour flow in the rectifier | kmol/h |
| $y_{n+1}$ | vapour mole fraction entering tray n from below | – |
| $x_n$ | liquid mole fraction leaving tray n | – |
| $R$ | reflux ratio | – |

Constant molar flows. The line runs from $(0, x_D/(R+1))$ to $(x_D, x_D)$. [Week 2, p. 11–12; FormelarkKP3010.pdf, p. 2, eq. 10; exercise_02_solutions.pdf, Oppg. 2a]

### Reflux ratio (tilbakeløpsforhold)
$$R = \frac{L'}{D}, \qquad \frac{L'}{V'} = \frac{R}{R+1}, \qquad \frac{D}{V'} = \frac{1}{R+1}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L'$ | reflux (liquid returned to the top) | kmol/h |
| $D$ | distillate | kmol/h |

[Week 2, p. 12; FormelarkKP3010.pdf, p. 2, eq. 9]

### Stripper balances and operating line (driftslinje for avdriver)
$$L'' = V'' + B, \qquad L'' x_n = V'' y_{n+1} + B x_B$$
$$y_{n+1} = \frac{L''}{V''} x_n - \frac{B}{V''} x_B$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L'', V''$ | liquid and vapour flow in the stripper | kmol/h |
| $B, x_B$ | bottoms flow and mole fraction | kmol/h, – |

Slope $L''/V'' \ge 1$ because $L'' \ge V''$. The line starts at $(x_B, x_B)$ and ends where the rectifier line crosses the q-line (page 06). The formula sheet writes it with index m: $y_{m+1} = \frac{L''}{V''}x_m - \frac{B}{V''}x_B$. [Week 2, p. 25–26; FormelarkKP3010.pdf, p. 2, eq. 11; exercise_02_solutions.pdf, Oppg. 2b]

## Worked example
**Recovery spec → all external flows and the rectifier flows** [exercise_02_eng.pdf, Exercise 3; exercise_02_solutions.pdf, Oppg. 3b]
Acetone/water. $F = 200$ kmol/h, $x_F = 0.40$, $x_D \ge 0.90$. At most 2 % of the fed acetone may be lost in the bottoms. $R = 2R_{min} = 0.6$.
1. Acetone in: $F x_F = 200 \cdot 0.40 = 80$ kmol/h.
2. Acetone lost in bottoms: $B x_B = 0.02 \cdot 80 = 1.6$ kmol/h.
3. Acetone in distillate: $D x_D = 80 - 1.6 = 78.4$ kmol/h, so $D = 78.4/0.90 = 87.1$ kmol/h.
4. Total balance: $B = F - D = 200 - 87.1 = 112.9$ kmol/h.
5. Bottoms composition: $x_B = 1.6/112.9 = 0.014$.
6. Reflux: $L' = R D = 0.6 \cdot 87.1 = 52.3$ kmol/h.
7. Rectifier vapour: $V' = L' + D = 52.3 + 87.1 = 139.4$ kmol/h.
8. Rectifier operating line: $y_{n+1} = \frac{0.6}{1.6}x_n + \frac{0.90}{1.6}$, which has intercept $x_D/(R+1) = 0.56$. [exercise_02_solutions.pdf, Oppg. 3c]

The stripper flows need the feed condition q (page 06): $L'' = 152.3$ kmol/h and $V'' = 39.4$ kmol/h.

## Faded example
**Stripper flows from a drawn operating line** [Week 2, p. 27–28]
A stripper operating line passes through (0.1, 0.1) and (0.7, 1.0). The vapour from the reboiler is $V'' = 10$ kmol/h. Find $B$.
1. Slope from the two points: $\dfrac{1 - 0.1}{0.7 - 0.1}$.
2. **(try)** Evaluate it. → slope $= 1.5$.
3. **(try)** Match it to the operating line $y_{n+1} = \frac{L''}{V''}x_n - \frac{B}{V''}x_B$. → $L''/V'' = 1.5$, so $L'' = 15$ kmol/h.
4. **(try)** Balance over the reboiler, $L'' = B + V''$. → $B = 15 - 10 = 5$ kmol/h.
5. **(try)** Read $x_B$ off the diagram. → The line meets the diagonal at $x_B = 0.1$.

[Week 2, p. 28]

## Exam traps
- **$R$ is $L'/D$, not $L'/V'$**: from vapour data, $R = V'/D - 1$ (e.g. $10/3 - 1 = 2.33$). [Week 2, p. 12, 20]
- **R from the y-intercept**: set $x_n = 0$, so $y = x_D/(R+1)$. The exam uses intercept 0.52 with $x_D = 0.95$, giving $R = 0.83$. Check which axis value you read. [practice exam 2 solutions.pdf, Q2a.5; Week 2, p. 22]
- **"Mole fraction of the heavy component in the distillate"**: diagrams plot the light component. Answer $1 - x_D$ (e.g. 0.05 cyclohexane). [practice exam 2 solutions.pdf, Q2a.2]
- **Recovery or loss specs**: "2 % of supplied acetone lost in bottoms" means $B x_B = 0.02 F x_F$, not $x_B = 0.02$. [exercise_02_solutions.pdf, Oppg. 3b]
- **Flows change at the feed**: constant molar flow holds *within* a section. $V' \neq V''$ and $L' \neq L''$ in general. [Week 2, p. 9; exercise_02_solutions.pdf, Oppg. 1d]
- **Constant molar flow needs equal heats of evaporation**: that's the assumption behind straight operating lines. [Week 2, p. 9]
- **The operating line is a mass balance, not equilibrium**: it links $y_{n+1}$ and $x_n$ (passing streams). Stepping alternates between it and the VLE curve. [Week 2, p. 13, 15]
- **Stripper slope > 1**: if your stripper line is flatter than the diagonal, you've swapped $L''$ and $V''$. [Week 2, p. 26]
- **Primes on the formula sheet**: $L'$ and $L''$ are rendered as $L0$ and $L00$ in the PDF text. In the original, R = $L'/D$. [FormelarkKP3010.pdf, p. 2, eq. 9–11]

## Past exam tasks
- Practice exam 1, Ex. 2d: with $R = 2.1$, find $x_B$, $B$, and $L'$, $V'$, $L''$, $V''$ ($B = 48$, $x_B = 0.125$, $L' = 25.2$, $V' = 37.2$ kmol/h). The stripper part uses q, see page 06.
- Autumn 2022, Q2a.2: mole fraction of cyclohexane in the distillate from a McCabe–Thiele diagram (0.05).
- Autumn 2022, Q2a.5: reflux ratio from the rectifier operating line intercept ($R = 0.83$).

## Test yourself
**Q:** Benzene/toluene, $F = 12$ kmol/h, $x_F = 0.6$, $D = 8$ kmol/h, $x_B = 0.05$. Find $B$ and $x_D$.
**A:** $B = 12 - 8 = 4$ kmol/h. $x_D = (7.2 - 0.2)/8 = 0.875$. [Week 2, p. 6–7]

**Q:** Rectifier vapour is 10 kmol/h and the distillate is 3 kmol/h. What is R?
**A:** $L' = V' - D = 7$, so $R = 7/3 = 2.33$. [Week 2, p. 19–20]

**Q:** The rectifier line hits the y-axis at 0.29 with $x_D = 0.95$. What is R?
**A:** $0.29 = 0.95/(R+1)$, so $R = 2.3$. [Week 2, p. 22]

**Q:** Isopropanol/water, $F = 200$ kmol/h, $x_F = 0.20$, $x_D = 0.63$, $x_B = 0.01$. Find D and B.
**A:** $D = \frac{0.20 - 0.01}{0.63 - 0.01} \cdot 200 = 61.3$ kmol/h, and $B = 138.7$ kmol/h. [exercise_02_solutions.pdf, Oppg. 4c]

**Q:** Between which two points do you draw the rectifier operating line?
**A:** From $(0, x_D/(R+1))$ to $(x_D, x_D)$. [exercise_02_solutions.pdf, Oppg. 2a]

## Sources
- [Week 2 - Multi-stage distillation with solutions.pdf, p. 2–28]
-
