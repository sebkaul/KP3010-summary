---
slug: 09-absorption-equilibrium-stage-mole-ratios
title: Single equilibrium stage, inert flows and mole ratios
topic: absorption
exam_weight: medium
exam_weight_note: "Mole-ratio conversion for outlet composition on 1 of 2 practice exams (Autumn 2022 Q3b); the constant-flow/dilute assumption is asked in Practice exam 1 Ex. 3c"
builds_on: [04-equilibrium-flash-distillation, 08-absorption-principles-henrys-law]
used_in: [10-multistage-absorption-stripping, 11-kremser-minimum-absorbent-flow]
sources: ["Week 3 - Absorption and stripping with solutions.pdf", "FormelarkKP3010.pdf", "exercise_03.pdf", "exercise_03_solutions.pdf", "practice exam 2 solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** In an absorber, which flows stay constant: total gas and liquid, or something else?
**A:** The inert flows: the insoluble carrier gas $G'$ and the non-volatile solvent $L'$. Total G falls and total L rises as solute transfers. [Week 3, p. 13, 15]

**Q:** A gas has $y_A = 0.2$. What is its mole ratio $Y_A$?
**A:** $Y_A = 0.2/(1 - 0.2) = 0.25$. [Week 3, p. 20]

**Q:** Henry gives $y_A = K x_A$. Is $Y_A = K X_A$ then also exact?
**A:** No. In mole ratios the equilibrium becomes $Y_A = \dfrac{K X_A}{1 + (1-K)X_A}$. [Week 3, p. 17–18]

## Mental model
A theoretical stage brings gas and liquid into contact long enough to reach equilibrium, so both outlet streams have equilibrium compositions [Week 3, p. 11]. In distillation the flows stayed roughly constant. In absorption they don't: the solute moves from gas to liquid, so the gas shrinks and the liquid grows, sometimes a lot [Week 3, p. 13–14]. What does stay constant is everything that *doesn't* transfer: the inert carrier gas B and the solvent C [Week 3, p. 15]. So write the balances on solute-free flows ($G'$, $L'$) and express composition as moles of solute per mole of inert (mole ratios $X$, $Y$). Then the component balance is exactly linear again [Week 3, p. 16–17]. The catch is that Henry's law is written in mole fractions. In mole ratios the equilibrium line bends, much like the α-curve in distillation [Week 3, p. 18].

## Concepts and definitions
- **Theoretical stage (absorption)**: gas and liquid in contact long enough to reach equilibrium. The exiting streams have the equilibrium concentrations. If the inlet rates and compositions ($G_2$, $L_0$) are known, the outlet can be calculated. [Week 3, p. 11]
- **System components**: A (solute) is in both phases. B is an inert in the gas, and C is the liquid solvent. Each phase is binary: $y_B = 1 - y_A$, $x_C = 1 - x_A$. [Week 3, p. 12]
- **Flow rate changes**: absorbing A increases the liquid flow and reduces the gas flow. Constant total flows can only be assumed if the change is negligible, i.e. for dilute streams. [Week 3, p. 13]
- **Inert (solute-free) flows $G'$, $L'$**: inerts and non-volatiles stay in their phase, so their flows are constant. $L'$ is moles of non-volatile solvent per second, and $G'$ is moles of insoluble carrier gas per second. [Week 3, p. 15; exercise_03_solutions.pdf, Oppg. 2b]
- **Mole ratio (molforhold)**: $X_A = x_A/(1-x_A)$ and $Y_A = y_A/(1-y_A)$, moles of A per mole of inert. [Week 3, p. 16; FormelarkKP3010.pdf, p. 2, eq. 18–19]
- **Inert component balance**: the ordinary component balance with each total flow replaced by its inert flow and each mole fraction by its mole ratio. [exercise_03_solutions.pdf, Oppg. 2c; Week 3, p. 16]
- **Equilibrium in mole ratios**: Henry ($y_A = K_A x_A$) holds in mole fractions, not mole ratios. Converted, it has the same shape as the distillation α-relation. [Week 3, p. 17–18]

## Visuals
- **Single absorption stage** · process diagram [Week 3, p. 11–12; exercise_03.pdf, Oppgave 2, Fig. 1]
  - One box. Gas $G_2, y_2$ enters at the bottom and $G_1, y_1$ leaves at the top. Liquid $L_0, x_0$ enters at the top and $L_1, x_1$ leaves at the bottom.
  - Inside: "equilibrium: $y_1 = K x_1$". Gas phase "A + B (inert)", liquid phase "A + C (solvent)".
- **Flow rates change, inerts don't** · table-as-picture (stacked bars) [Week 3, p. 14]
  - Gas in: 60 A + 40 B = 100 mol/s. Gas out: 20 A + 40 B = 60 mol/s.
  - Liquid in: 100 C. Liquid out: 100 C + 40 A = 140 mol/s.
  - Highlight that the B and C segments are the same height in and out: "$G'$ and $L'$ constant".
- **Equilibrium in mole fractions vs mole ratios** · plot [Week 3, p. 17–18]
  - NH₃ with $K = 0.893$ [exercise_03_solutions.pdf, Oppg. 2d]. Left panel: $y = 0.893x$ (straight) for x from 0 to 0.3. Right panel: $Y = \frac{0.893X}{1+0.107X}$ (curved) for X from 0 to 0.4.
  - Caption: "same shape as $y = \frac{\alpha x}{1+(\alpha-1)x}$ from distillation".
- **Graphical solution of one stage in mole ratios** · curve sketch [exercise_03_solutions.pdf, Oppg. 2d]
  - Axes X (–) and Y (–). Equilibrium curve $Y = \frac{0.893X}{1+0.107X}$ and balance line $Y_1 = 0.176 - 3.137X_1$, which starts at (0, 0.176) with slope $-L'/G'$.
  - Highlight the intersection (0.044, 0.039).
- **Interactive plot**: inert balance $Y_1 = Y_2 - \frac{L'}{G'}X_1$ against $Y = \frac{KX}{1+(1-K)X}$ [exercise_03_solutions.pdf, Oppg. 2d].
  - Slider: $L_0$ (pure water) from 50 to 1000 kmol/h (start 400). Fixed $G_2 = 150$ kmol/h, $y_2 = 0.15$, $K = 0.893$.
  - Show live $X_1$, $Y_1$, $x_1$, $y_1$, $L_1$ and $G_1$. At the start value it must show $x_1 = 0.042$ and $y_1 = 0.038$.

## Equations

### Total and component balance (one stage)
$$G_2 + L_0 = G_1 + L_1, \qquad G_2 y_{A,2} + L_0 x_{A,0} = G_1 y_{A,1} + L_1 x_{A,1}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $G_2, G_1$ | total gas flow in and out | kmol/h (or mol/s) |
| $L_0, L_1$ | total liquid flow in and out | kmol/h |
| $y_{A}, x_{A}$ | mole fraction of solute A in gas and liquid | – |

[Week 3, p. 12; FormelarkKP3010.pdf, p. 2, eq. 20]

### Inert flows
$$L' = L(1 - x_A) \;\Rightarrow\; L = \frac{L'}{1-x_A}, \qquad G' = G(1 - y_A) \;\Rightarrow\; G = \frac{G'}{1-y_A}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L'$ | solute-free liquid (solvent) flow | kmol/h |
| $G'$ | solute-free gas (carrier) flow | kmol/h |

Valid at any point in the column. [Week 3, p. 15; FormelarkKP3010.pdf, p. 2, eq. 17]

### Mole ratio ↔ mole fraction
$$X_A = \frac{x_A}{1-x_A}, \quad Y_A = \frac{y_A}{1-y_A}, \qquad x_A = \frac{X_A}{1+X_A}, \quad y_A = \frac{Y_A}{1+Y_A}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $X_A$ | mol A per mol solvent | – |
| $Y_A$ | mol A per mol carrier gas | – |

[Week 3, p. 16; FormelarkKP3010.pdf, p. 2, eq. 18–19]

### Inert component balance
$$L' X_{A,0} + G' Y_{A,2} = L' X_{A,1} + G' Y_{A,1}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L', G'$ | constant inert flows | kmol/h |
| $X_{A,0}, X_{A,1}$ | liquid mole ratio in and out | – |
| $Y_{A,2}, Y_{A,1}$ | gas mole ratio in and out | – |

Exact (no dilute assumption). Linear in X and Y. [Week 3, p. 16–17; FormelarkKP3010.pdf, p. 2, eq. 22]

### Equilibrium in mole ratios
$$y_A = K_A x_A \quad\Rightarrow\quad Y_A = \frac{K_A X_A}{1 + (1 - K_A) X_A}, \qquad K_A = \frac{H_A}{P_{tot}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $K_A$ | distribution coefficient (Henry) | – |

Derived by substituting $x_A = X_A/(1+X_A)$ and $y_A = Y_A/(1+Y_A)$ into $y_A = K_A x_A$. For very dilute systems $Y_A \approx K_A X_A$ (as assumed in exercise 3, Oppg. 3d). [Week 3, p. 17–18; exercise_03.pdf, Oppgave 3d]

## Worked example
**CO₂ absorbed in water on one equilibrium stage** [Week 3, p. 19–22]
1 atm, 298.15 K. Gas in $G_2 = 100$ kmol/h with 20 mol % CO₂. Pure water in $L_0 = 300$ kmol/h. Physical absorption only.
1. Inert flows: $L' = L_0 = 300$ kmol/h (pure water), and $G' = G_2(1 - y_2) = 100\cdot 0.8 = 80$ kmol/h.
2. Inlet mole ratios: $X_0 = 0$ and $Y_2 = 0.2/0.8 = 0.25$.
3. Inert balance: $300\cdot 0 + 80\cdot 0.25 = 300X_1 + 80Y_1$, so $Y_1 = 0.25 - 3.75X_1$.
4. Henry: $H_{CO_2} = 1/6.0\cdot 10^{-4} = 1670$ atm, so $y = 1670x$ at 1 atm.
5. In mole ratios: $Y_1 = \dfrac{1670X_1}{1 + (1-1670)X_1}$.
6. Combine: $\dfrac{1670X_1}{1-1669X_1} = 0.25 - 3.75X_1$, which gives $X_1^2 + 0.33X_1 - 4.0\cdot 10^{-5} = 0$.
7. Roots: $X_1 = 1.21\cdot 10^{-4}$ or $-0.33$. Keep the positive one.
8. Back to mole fractions: $x_1 = 1.196\cdot 10^{-4}$ and $y_1 = 1670\, x_1 = 0.1997$.
9. Outlet flows: $L_1 = L'/(1-x_1) = 300.036$ kmol/h and $G_1 = G'/(1-y_1) = 99.964$ kmol/h.
10. Check: $L_0 + G_2 = 400 \approx L_1 + G_1 = 300.036 + 99.964$. ✓

## Faded example
**NH₃ scrubbed in one stage** [exercise_03.pdf, Oppgave 2d; exercise_03_solutions.pdf, Oppg. 2d]
1 atm, 298.15 K. Gas $G_2 = 150$ kmol/h with 15 mol % NH₃. Pure water $L_0 = 400$ kmol/h.
1. Equilibrium constant from formula-sheet Table 2: $K = 0.893$, so $y = 0.893x$.
2. **(try)** Inert flows. → $L' = 400$ kmol/h and $G' = 150\cdot 0.85 = 127.5$ kmol/h.
3. **(try)** Inlet mole ratios. → $X_0 = 0$ and $Y_2 = 0.15/0.85 = 0.176$.
4. **(try)** Balance line. → $Y_1 = 0.176 - 3.137X_1$.
5. **(try)** Combine with $Y_1 = \dfrac{0.893X_1}{1+0.107X_1}$ and solve. → $X_1^2 + 7.246X_1 - 0.319 = 0$, so $X_1 = 0.044$ (discard −7.289).
6. **(try)** $Y_1$ and the mole fractions. → $Y_1 = 0.039$, $x_1 = 0.042$, $y_1 = 0.038$.
7. **(try)** Outlet flows and check. → $L_1 = 417.54$, $G_1 = 132.40$ kmol/h, and the sum is 549.94 ≈ 550. ✓

[exercise_03_solutions.pdf, Oppg. 2d]

## Exam traps
- **Henry is in mole fractions**: $y = Kx$ but $Y \neq KX$. Convert, or use $Y = KX/(1+(1-K)X)$. The slide literally says "Note: not in mole ratios!" [Week 3, p. 17–18]
- **Percent removal on a mole-ratio basis**: "90 % of CO₂ removed" means $Y_{out} = 0.1\, Y_{in}$, because $G'$ is constant. From $y_{in} = 0.12$: $Y_{in} = 0.136$, $Y_{out} = 0.0136$, $y_{out} = 0.013$. [practice exam 2 solutions.pdf, Q3b]
- **Constant total flows only if dilute**: Kremser and straight operating lines in mole fractions need small transfer. This is an exam question in its own right. [Week 3, p. 13; practice_exam_solutions.pdf, Ex. 3c]
- **Get the inert flow from the stream you know**: usually the inlet ($G' = G_2(1-y_2)$, and $L' = L_0$ for pure solvent). [Week 3, p. 20; exercise_03_solutions.pdf, Oppg. 2d]
- **Mole ratio must be ≥ 0**: discard the negative root of the quadratic. [Week 3, p. 21; exercise_03_solutions.pdf, Oppg. 2d]
- **Convert back and check**: report mole fractions if asked, and verify $L_0 + G_2 = L_1 + G_1$. [Week 3, p. 22]
- **Volume % = mole % for ideal gases, and volumetric gas flow needs the ideal gas law**: e.g. 3000 m³/h at 1 atm and 298.15 K gives 122.6 kmol/h. [exercise_03.pdf, Oppgave 3a–b]
- **Formula sheet rendering**: $L'$ and $G'$ show up as "L0" and "G0" in eq. 22 and eq. 24. They are inert flows, not "inlet" flows. [FormelarkKP3010.pdf, p. 2, eq. 22, 24]

## Past exam tasks
- Autumn 2022, Q3b: CO₂ mole fraction at the absorber outlet for 90 % removal, via mole ratios ($y_{out} = 0.013$).
- Practice exam 1, Ex. 3c: conditions for using Kremser's equation (dilute, constant total flows). Covered on page 11.

## Test yourself
**Q:** 100 mol/s gas (60 % A) contacts 100 mol/s pure solvent, and 40 mol/s A is absorbed. What are the outlet gas and liquid flows?
**A:** Gas: 20 A + 40 B = 60 mol/s. Liquid: 100 C + 40 A = 140 mol/s. [Week 3, p. 14]

**Q:** $y_{in} = 0.12$, and 90 % of the solute is removed. What is $y_{out}$?
**A:** $Y_{in} = 0.136$, $Y_{out} = 0.0136$, so $y_{out} = 0.0136/1.0136 = 0.013$. [practice exam 2 solutions.pdf, Q3b]

**Q:** Derive the mole-ratio equilibrium from $y = Kx$.
**A:** Substitute $y = Y/(1+Y)$ and $x = X/(1+X)$, which gives $Y(1+X) = KX(1+Y)$ and so $Y = KX/(1+(1-K)X)$. [Week 3, p. 18]

**Q:** Why can you write a straight-line balance in $X$–$Y$ even for concentrated gas?
**A:** $G'$ and $L'$ are exactly constant, so $L'X_0 + G'Y_2 = L'X_1 + G'Y_1$ is linear in X and Y without any dilute assumption. [Week 3, p. 15–16]

**Q:** In the CO₂ example, why is $G_1$ almost equal to $G_2$?
**A:** CO₂ is poorly soluble ($H = 1670$ atm), so only about $3.6\cdot 10^{-2}$ kmol/h transfers. The flows barely change. [Week 3, p. 21–22]

## Sources
- [Week 3 - Absorption and stripping with solutions.pdf, p. 11–22]
- [FormelarkKP3010.pdf, p. 2, eq. 16–22]
- [exercise_03.pdf, Oppgave 2, 3a–b, 3d]
- [exercise_03_solutions.pdf, Oppg. 2a–d]
- [practice exam 2 solutions.pdf, Q3b]
- [practice_exam_solutions.pdf, Ex. 3c]
