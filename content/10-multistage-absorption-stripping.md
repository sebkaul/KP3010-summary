---
slug: 10-multistage-absorption-stripping
title: Multistage absorption and stripping (McCabe–Thiele)
topic: absorption
exam_weight: medium
exam_weight_note: "Practice exams give the stage count or use Kremser instead of stepping; L/G effect asked in Autumn 2022 Q3e.4"
builds_on: [05-column-balances-operating-lines, 09-absorption-equilibrium-stage-mole-ratios]
used_in: [11-kremser-minimum-absorbent-flow, 16-htu-ntu-packed-columns]
sources: ["Week 3 - Absorption and stripping with solutions.pdf", "FormelarkKP3010.pdf", "exercise_03.pdf", "exercise_03_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** In an absorption McCabe–Thiele diagram, is the operating line above or below the equilibrium line?
**A:** Above. For stripping it is below. [Week 3, p. 30, 37]

**Q:** In an N-stage absorber, which stage does the fresh liquid enter, and which does the fresh gas enter?
**A:** Liquid $L_0$ enters stage 1 (top). Gas $G_{N+1}$ enters stage N (bottom). [Week 3, p. 25]

**Q:** 90 % of a solute is absorbed. How are $Y_1$ and $Y_{N+1}$ related?
**A:** $Y_1 = 0.10\, Y_{N+1}$. [Week 3, p. 29]

## Mental model
One stage can only transfer so much. Feed the treated gas to another stage with fresh contact, repeat, and you get a counter-current column of N stages, with liquid entering at the top and gas at the bottom [Week 3, p. 24–25]. Because the inert flows $L'$ and $G'$ are constant, a balance from the top down to any stage gives a straight operating line in mole ratios. Its slope is $L'/G'$ and it connects the two column ends, $(X_0, Y_1)$ at the top and $(X_N, Y_{N+1})$ at the bottom [Week 3, p. 26–27]. In absorption the gas is richer than equilibrium with the liquid, so the operating line sits above the equilibrium line and the solute flows gas → liquid. In stripping it sits below, so the solute flows liquid → gas [Week 3, p. 32, 37]. Stepping between the two lines from one end to the other counts theoretical stages, exactly as in distillation [Week 3, p. 27, 34]. More solvent means a steeper line, further from equilibrium, so more driving force [practice exam 2 solutions.pdf, Q3e.4].

## Concepts and definitions
- **Multistage absorption**: N stages/trays. Liquid enters as $L_0$ and gas as $G_{N+1}$. The gas is mainly B, the liquid mainly C, and A transfers between them. Exiting streams of each stage are in equilibrium. [Week 3, p. 24–25]
- **Operating line (absorption/stripping)**: the inert component balance over the top of the column, solved for $Y_{n+1}$. It is straight with slope $L'/G'$. [Week 3, p. 26; FormelarkKP3010.pdf, p. 2, eq. 24]
- **Column end points**: top $(X_0, Y_1)$ and bottom $(X_N, Y_{N+1})$. [Week 3, p. 27]
- **Stripping (desorption)**: the reverse process, where A is stripped from the liquid by a gas. Same equations, same type of diagram. [Week 3, p. 32–33]
- **Operating line position**: above the equilibrium line in absorption, below it in stripping. [Week 3, p. 30, 37]
- **General procedure (absorption and stripping)**: (1) calculate all unknowns, (2) plot the operating and equilibrium lines, (3) plot the inlet and outlet points, (4) draw stages from one point to the other, (5) count the stages. [Week 3, p. 34]
- **Effect of solvent flow**: a higher solvent flow increases the driving force and the absorption. [practice exam 2 solutions.pdf, Q3e.4]

## Visuals
- **N-stage counter-current absorber** · process diagram [Week 3, p. 25; exercise_03.pdf, Oppgave 3, Fig. 2]
  - A column with stages 1 (top) to N (bottom). Top: $L_0, X_0$ in (clean liquid) and $G_1, Y_1$ out (cleaned gas). Bottom: $G_{N+1}, Y_{N+1}$ in (contaminated gas) and $L_N, X_N$ out (contaminated liquid).
  - Side labels: "$L'$ constant", "$G'$ constant". Mark a cut between stage n and n+1 with $X_n$ and $Y_{n+1}$.
- **Absorption McCabe–Thiele (acetone in water)** · plot [Week 3, p. 28–31]
  - x-axis X (–) from 0 to 3.5·10⁻³, y-axis Y (–) from 0 to 0.011.
  - Equilibrium line $Y = 2.53X$. Operating line $Y = 3.03X + 0.001$ from $(0, 0.001)$ to $(2.97\cdot 10^{-3}, 0.0101)$, *above* the equilibrium line.
  - Staircase from $(X_0, Y_1) = (0, 0.001)$: horizontal to equilibrium, vertical to the operating line. Label "5.0 theoretical stages".
- **Stripping McCabe–Thiele (VOC from water)** · plot [Week 3, p. 35–37]
  - x-axis X (–) from 0 to 0.12, y-axis Y (–) from 0 to 0.18.
  - Equilibrium line $Y = 1.5X$. Operating line $Y = X - 0.005$ from $(0.005, 0)$ to $(0.111, 0.105)$, *below* the equilibrium line. Highlight that with a callout.
  - Staircase from $(X_0, Y_1)$. Label "5.1 theoretical stages".
- **Interactive plot**: absorption stepping with operating line $Y_{n+1} = \frac{L'}{G'}X_n + Y_1 - \frac{L'}{G'}X_0$ and equilibrium $Y = KX$ [Week 3, p. 28–30].
  - Slider: $L'$ from 70 to 300 mol/h (start 90). Fixed $G' = 29.7$ mol/h, $K = 2.53$, $X_0 = 0$, $Y_{N+1} = 0.0101$, $Y_1 = 0.001$.
  - Show $X_N = G'(Y_{N+1}-Y_1)/L'$, the staircase and the stage count. At 90 mol/h it must show about 5 stages. As $L'$ approaches about 68 mol/h the operating line touches the equilibrium line at the bottom and the stages go to ∞ (see page 11).

## Equations

### Overall mass balance (N stages)
$$L_0 + G_{N+1} = L_N + G_1$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L_0, L_N$ | total liquid in (top) and out (bottom) | kmol/h (or mol/h) |
| $G_{N+1}, G_1$ | total gas in (bottom) and out (top) | kmol/h |

[Week 3, p. 26]

### Component balance (inert form, top of column to stage n)
$$L' X_0 + G' Y_{n+1} = L' X_n + G' Y_1$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L', G'$ | inert liquid and gas flow | kmol/h |
| $X_0, X_n$ | liquid mole ratio entering stage 1, leaving stage n | – |
| $Y_1, Y_{n+1}$ | gas mole ratio leaving stage 1, entering stage n | – |

For the whole column, set $n = N$. [Week 3, p. 26; FormelarkKP3010.pdf, p. 2, eq. 22]

### Operating line (driftslinje for absorbsjon/stripping)
$$Y_{n+1} = \frac{L'}{G'} X_n + \left(Y_1 - \frac{L'}{G'} X_0\right)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L'/G'$ | slope, ratio of inert flows | – |

Straight in X–Y because the inert flows are constant. Used for both absorption and stripping. [Week 3, p. 26, 33; FormelarkKP3010.pdf, p. 2, eq. 24]

### Equilibrium (as used in the multistage examples)
$$Y_A = K_A X_A$$
| Symbol | Meaning | Unit |
|---|---|---|
| $K_A$ | distribution coefficient | – |

A straight line in X–Y. The slides and exercises use this directly for dilute systems. Strictly, the mole-ratio form is $Y = KX/(1+(1-K)X)$ (page 09). [Week 3, p. 26, 28; exercise_03.pdf, Oppgave 3d]

## Worked example
**Acetone absorbed in water, number of stages** [Week 3, p. 28–31]
Gas 30 mol/h with 1 mol % acetone. Pure water 90 mol/h. 90 % of the acetone absorbed. 300 K, 1 bar, $Y_A = 2.53X_A$.
1. Given: $y_{N+1} = 0.01$, $x_0 = 0$, $G = 30$ mol/h, $L = 90$ mol/h.
2. Inert flows: $L' = L_0(1-x_0) = 90$ mol/h and $G' = G_{N+1}(1 - 0.01) = 29.7$ mol/h.
3. Inlet ratios: $X_0 = 0$ and $Y_{N+1} = 0.01/0.99 = 0.010$.
4. 90 % absorbed: $Y_1 = 0.10\cdot Y_{N+1} = 0.001$.
5. Liquid outlet from the inert balance: $X_N = X_0 + \frac{G'}{L'}(Y_{N+1} - Y_1) = 2.97\cdot 10^{-3}$.
6. Operating line: $Y_{n+1} = \frac{90}{29.7}X_n + 0.001 - \frac{90}{29.7}\cdot 0 = 3.03X_n + 0.001$.
7. Plot the equilibrium line $Y = 2.53X$ and the operating line between $(0, 0.001)$ and $(2.97\cdot 10^{-3}, 0.010)$.
8. Step from $(X_0, Y_1)$: horizontally to equilibrium, vertically to the operating line, until $X \ge X_N$.
9. Result: 5.0 theoretical stages.

## Faded example
**Stripping VOCs from water with an inert gas** [Week 3, p. 35–37]
Liquid with 10 mol % VOC, stripped to 0.5 mol %. Clean inert gas. $L' = G' = 500$ kmol/h. $Y_{VOC} = 1.5X_{VOC}$.
1. Given: $x_0 = 0.10$, $x_N = 0.005$, $y_{N+1} = 0$.
2. **(try)** Liquid mole ratios. → $X_0 = 0.10/0.90 = 0.11$ and $X_N = 0.005/0.995 = 0.005$.
3. Gas in is clean: $Y_{N+1} = 0$.
4. **(try)** Gas out from the inert balance. → $Y_1 = Y_{N+1} + \frac{L'}{G'}(X_0 - X_N) = 0.105$.
5. **(try)** Operating line. → $Y_{n+1} = \frac{500}{500}X_n + 0.105 - \frac{500}{500}\cdot 0.11$, i.e. $Y = X - 0.005$.
6. **(try)** Plot it with $Y = 1.5X$. Where is the operating line relative to equilibrium? → Below it (stripping).
7. **(try)** Step from $(X_0, Y_1)$ to $(X_N, Y_{N+1})$. → 5.1 theoretical stages.

[Week 3, p. 36–37]

## Exam traps
- **Absorption above, stripping below**: if your absorption operating line is under the equilibrium line, you've swapped the end points or the X/Y axes. [Week 3, p. 30, 37]
- **Pair the end points correctly**: the top is $(X_0, Y_1)$, liquid in with gas out. The bottom is $(X_N, Y_{N+1})$, liquid out with gas in. They are passing streams, not equilibrium pairs. [Week 3, p. 27]
- **Slope uses inert flows**: $L'/G'$, not $L/G$ totals (e.g. $90/29.7 = 3.03$, not $90/30$). [Week 3, p. 29–30]
- **Recovery → $Y_1$**: "90 % absorbed" sets $Y_1 = 0.1\,Y_{N+1}$ in mole ratios. [Week 3, p. 29]
- **$Y = KX$ is a dilute shortcut**: the slides use it in the multistage examples. For concentrated gas use the exact mole-ratio equilibrium (page 09). [Week 3, p. 18, 26]
- **More solvent = more removal**: a higher $L'$ gives a steeper operating line, further from equilibrium. That's the expected exam reasoning for "does increasing the water flow increase CO₂ removal?" [practice exam 2 solutions.pdf, Q3e.4]
- **Stripping recovery is specified on the liquid**: $X_N$ (the target liquid composition) is the given end, and $Y_1$ is computed. Don't mix up which end is fixed. [Week 3, p. 36]

## Past exam tasks
- Autumn 2022, Q3e.4: does increasing the water flow from 6200 to 6500 kmol/h increase CO₂ removal? (Yes: more driving force.)
- Autumn 2022, Q3d: gives the stage count (11.4) directly and asks for packing height (page 14).
- Practice exam 1, Ex. 3d: stage count by Kremser instead of stepping (page 11).

## Test yourself
**Q:** In the acetone example, what is $X_N$ and why is it so small?
**A:** $X_N = \frac{29.7}{90}(0.010 - 0.001) = 2.97\cdot 10^{-3}$. Only a little acetone is fed (1 mol %) and the water flow is three times the gas flow. [Week 3, p. 29]

**Q:** SO₂ absorber: 3000 m³/h gas at 1 atm and 298.15 K, 5 vol % SO₂. Find the total molar gas flow and $y_{N+1}$. ($R = 8.205\cdot 10^{-5}$ m³·atm/(mol·K))
**A:** $\dot n = pV/RT = 3000/(298.15\cdot 8.205\cdot 10^{-5}) = 122.6$ kmol/h. $y_{N+1} = 0.05$, because vol % equals mol % for an ideal gas. [exercise_03_solutions.pdf, Oppg. 3a–b]

**Q:** List the five steps for a McCabe–Thiele stage count in absorption or stripping.
**A:** Calculate the unknowns, plot the operating and equilibrium lines, plot the inlet/outlet points, draw the stages from one point to the other, and count them. [Week 3, p. 34]

**Q:** In the VOC stripper, what does $L'/G' = 1$ mean for the operating line, and where does it cross $Y = 0$?
**A:** The slope is 1, giving $Y = X - 0.005$. It crosses $Y = 0$ at $X = X_N = 0.005$, the clean-gas inlet end. [Week 3, p. 37]

**Q:** Where in the stepping do you stop?
**A:** When you reach or pass the other end point, $X_N$ for absorption starting from $(X_0, Y_1)$. A fractional last step gives fractional stages (5.0, 5.1). [Week 3, p. 30, 37]

## Sources
- [Week 3 - Absorption and stripping with solutions.pdf, p. 24–37]
- [FormelarkKP3010.pdf, p. 2, eq. 21–22, 24]
- [exercise_03.pdf, Oppgave 3]
- [exercise_03_solutions.pdf, Oppg. 3a–b, 3d]
- [practice exam 2 solutions.pdf, Q3d, Q3e.4]

> GAP: The staircase figures (Week 3, p. 30–31, 37) are images. The stage counts 5.0 and 5.1 are from the slide text.
