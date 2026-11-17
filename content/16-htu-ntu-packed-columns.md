---
slug: 16-htu-ntu-packed-columns
title: HTU/NTU — packed height from mass transfer
topic: mass-transfer
exam_weight: low
exam_weight_note: "Not on either practice exam (both use HETP instead); exercise 5 Oppg. 3 uses it"
builds_on: [11-kremser-minimum-absorbent-flow, 14-column-height-pressure-drop, 15-film-model-mass-transfer]
used_in: []
sources: ["Week 5 - Efficiency and mass transfer with solutions.pdf", "FormelarkKP3010.pdf", "exercise_05_eng.pdf", "exercise_05_solutions.pdf"]
---

## Pretest
**Q:** Is the height of a transfer unit (HTU) the same as the HETP?
**A:** No. HTU ≠ HETP and NTU ≠ NTS. [Week 5, p. 14]

**Q:** Which two quantities do you multiply to get packed height in the mass-transfer approach?
**A:** $H = HTU\cdot NTU$. [Week 5, p. 19; FormelarkKP3010.pdf, p. 5, eq. 47]

**Q:** What does $A_h$ mean in $HTU = Q_V/(k_{OV}A_h)$?
**A:** The interfacial area per metre of column height (m²/m): specific area × cross-section. [Week 5, p. 13, 18]

## Mental model
HETP needs a rule of thumb. The mass-transfer approach builds the height from the transfer rate instead [Week 5, p. 2]. Take a thin slice of packing. Whatever solute the gas loses in the slice is what crosses the interface there, at rate $k_{OV}\rho_V(y - y^*)$ times the interface area in the slice [Week 5, p. 13]. Integrating that balance up the column splits the height into two factors [Week 5, p. 14]. HTU ($Q_V/k_{OV}A_h$) says how tall a slice must be for the gas composition to change by one "driving force's worth". It depends on flows, packing and $k_{OV}$. NTU ($\int dy/(y^*-y)$) says how many of those units the separation needs. It depends only on compositions and equilibrium. When both the operating and equilibrium lines are straight, as in dilute absorption, NTU follows from the Kremser stage count through a factor depending only on A [Week 5, p. 15].

## Concepts and definitions
- **Why a mass-transfer model**: for packed columns the earlier approach was theoretical stages (McCabe–Thiele/Kremser) × HETP. If HETP isn't known, use either the approximation (HETP = 18·d_p) or a more accurate mass-transfer model. [Week 5, p. 2]
- **Differential slice balance**: what is lost from the gas is transferred to the liquid. Rate $k_{OV}\rho_V(y - y^*)A_h\Delta h$, with $y^* = Kx$. [Week 5, p. 13]
- **$A_h$**: interfacial area per metre of column (m²/m), $A_h = a_i\cdot S$ (specific area × cross-sectional area). [Week 5, p. 13, 18]
- **Height of a transfer unit (HTU)**: $Q_V/(k_{OV}A_h)$. [Week 5, p. 14; FormelarkKP3010.pdf, p. 5, eq. 48]
- **Number of transfer units (NTU)**: $\int_{y_{in}}^{y_{out}} \frac{dy}{y^* - y}$. [Week 5, p. 14; FormelarkKP3010.pdf, p. 5, eq. 49]
- **Not equal to the stage concepts**: HTU ≠ HETP and NTU ≠ NTS. [Week 5, p. 14]
- **Linear case**: with linear operating and equilibrium lines (e.g. absorption), NTU follows from NTS and A (or S). [Week 5, p. 15]

## Visuals
- **Slice balance in a packed column** · cross-section [Week 5, p. 13]
  - A packed column with a thin slice of height Δh highlighted. Gas flow V enters the slice from below with composition y and leaves above with $y + \Delta y$. An arrow out of the slice into the liquid labelled "$k_{OV}\rho_V(y - y^*)A_h\Delta h$". Tag "$y^* = Kx$". Side note "$A_h$ = m² interface per m column".
- **Driving force along the column** · curve sketch [Week 5, p. 13–15]
  - y–x diagram with a straight equilibrium line $y^* = Kx$ and a straight operating line above it. Vertical arrows between them at several x values, labelled "$y - y^*$" (local driving force). Bottom end $(x_{out}, y_{in})$ and top end $(x_{in}, y_{out})$ marked.
- **NTU as an area** · plot [Week 5, p. 14]
  - x-axis y (–) from $y_{out}$ to $y_{in}$. y-axis $1/(y - y^*)$. A curve rising as the driving force shrinks. Shade the area under it, labelled "NTU".
- **HTU × NTU vs HETP × NTS** · table-as-picture [Week 5, p. 14, 18–19]
  - Two-row box. Row 1: "stage view: H = HETP · NTS". Row 2: "rate view: H = HTU · NTU". Example 2 numbers in the second row: HTU = 3.14 m, NTU = 4.22, H = 13.3 m, and NTS = 0.428 to show NTU ≠ NTS.
- **Interactive plot**: $NTU/NTS = \dfrac{A\ln A}{A - 1}$ [Week 5, p. 15].
  - Slider: A from 1.05 to 70, log scale (start 63.7). Show the ratio live and a curve of the ratio vs A.
  - Mark A = 63.7 (Example 2, ratio ≈ 9.9) and A = 1.17 (exercise 5 Oppg. 3, ratio ≈ 1.08). As A → 1 the ratio → 1.

## Equations

### Differential gas-phase balance
$$V\frac{dy}{dh} = -k_{OV}\rho_V (y - y^*)A_h \;\Rightarrow\; \frac{dy}{dh} = \frac{k_{OV}A_h}{Q_V}(y^* - y)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $V$ | molar gas flow | mol/s |
| $y$ | gas mole fraction of solute | – |
| $y^*$ | gas composition in equilibrium with the local liquid, $Kx$ | – |
| $k_{OV}$ | overall mass transfer coefficient | m/s |
| $\rho_V$ | gas molar density | mol/m³ |
| $A_h$ | interfacial area per m column | m²/m |
| $Q_V = V/\rho_V$ | volumetric gas flow | m³/s |
| $h$ | height coordinate | m |

[Week 5, p. 13]

### Packed height
$$H = \underbrace{\frac{Q_V}{k_{OV}A_h}}_{HTU}\cdot\underbrace{\int_{y_{in}}^{y_{out}}\frac{1}{y^* - y}\,dy}_{NTU} = HTU\cdot NTU$$
| Symbol | Meaning | Unit |
|---|---|---|
| $H$ | packed height | m |
| $HTU$ | height of a transfer unit | m |
| $NTU$ | number of transfer units | – |

Integrated from h = 0 ($y = y_{in}$) to h = H ($y = y_{out}$). [Week 5, p. 14; FormelarkKP3010.pdf, p. 5, eq. 47–49]

### Interfacial area per metre of column
$$A_h = a_i\cdot S$$
| Symbol | Meaning | Unit |
|---|---|---|
| $a_i$ | specific surface area of the packing | m²/m³ |
| $S$ | column cross-sectional area | m² |

[Week 5, p. 18]

### NTU for straight operating and equilibrium lines
$$NTU = NTS\cdot\frac{A\ln A}{A - 1}, \quad A = \frac{L}{KG} \qquad\text{or}\qquad NTU = NTS\cdot\frac{S\ln S}{S - 1}, \quad S = \frac{KG}{L}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $NTS$ | number of theoretical stages (e.g. Kremser) | – |
| $A, S$ | absorption and stripping factor | – |

Linear operating and equilibrium lines only. [Week 5, p. 15; FormelarkKP3010.pdf, p. 5, eq. 50–51]

## Worked example
**NH₃ absorber with 1" metal Pall rings** [Week 5, p. 16–19]
Gas in 20 mol/s with 3 mol % NH₃, reduced to 0.5 mol %. Liquid out 520 mol/s, pure water in. $y = 0.42x$, $a_{VL} = 207$ m²/m³, cross-section 0.15 m², $k_{OV} = 5.0\cdot 10^{-3}$ m/s, $\rho_V = 41$ mol/m³ (constant).
1. Inert gas: $G' = 20(1 - 0.03) = 19.4$, so $G_{out} = G'/(1 - 0.005) = 19.41$.
2. Liquid in from the total balance: $L_{in} = L_{out} + G_{out} - G_{in} = 520 + 19.41 - 20 = 519.4$. Pure water, so $L' = 519.4$.
3. Liquid out: $x_{out} = 1 - L'/L_{out} = 1.14\cdot 10^{-3}$. Equilibrium: $y^*_{out} = Kx_{out} = 4.77\cdot 10^{-4}$ and $y^*_{in} = Kx_{in} = 0$.
4. Gas volume flow: $Q_V = 20/41 = 0.49$ m³/s.
5. Area per metre: $A_h = 207\cdot 0.15 = 31.05$ m²/m.
6. $HTU = 0.49/(5\cdot 10^{-3}\cdot 31.05) = 3.14$ m.
7. Absorption factor: $A = L'/(KG') = 519.4/(0.42\cdot 19.4) = 63.7$.
8. Kremser: $NTS = \dfrac{\ln\left[\frac{0.03}{0.005}(1 - \frac{1}{63.7}) + \frac{1}{63.7}\right]}{\ln 63.7} = 0.428$.
9. $NTU = 0.428\cdot\dfrac{63.7\ln 63.7}{63.7 - 1} = 4.22$.
10. $H = HTU\cdot NTU = 3.14\cdot 4.22 = 13.3$ m.

## Faded example
**SO₂ absorber with a new packing** [exercise_05_eng.pdf, Exercise 3; exercise_05_solutions.pdf, Oppg. 3]
2886 m³/h waste gas with 4 vol % SO₂, reduced to 0.5 vol %. 1 atm, 25 °C, pure water, $y = 22x$ (and $Y = 22X$). $k_{OV} = 0.02$ m/s, $a = 105$ m²/m³, D = 1.1 m, $L' = 1.33L'_{min}$.
1. Total gas in (ideal gas): $\dot n = \frac{101325\cdot 2886}{8.314\cdot 298.15} = 117.97$ kmol/h.
2. **(try)** Inert gas. → $G' = 117.97\cdot 0.96 = 113.25$ kmol/h $= 31.46$ mol/s.
3. **(try)** $L'_{min}$ with $X_N = Y_{N+1}/K$. → $Y_{N+1} = 0.042$, $Y_1 = 0.005$, $X_N = 0.00189$, $L'_{min} = 2191$ kmol/h, so $L' = 2914$ kmol/h $= 809.5$ mol/s.
4. **(try)** A and NTS. → $A = 809.5/(22\cdot 31.46) = 1.17$, and Kremser gives $NTS = 4.47$.
5. **(try)** NTU. → $4.47\cdot\frac{1.17\ln 1.17}{0.17} = 4.83$.
6. **(try)** $Q_V$, $A_h$ and HTU. → $Q_V = 0.77$ m³/s, $S = \frac{\pi}{4}1.1^2 = 0.95$ m², $A_h = 99.8$ m²/m, $HTU = 0.77/(0.02\cdot 99.8) = 0.386$ m.
7. **(try)** Height. → $H = 0.386\cdot 4.83 = 1.86$ m.

[exercise_05_solutions.pdf, Oppg. 3a–c]

## Exam traps
- **HTU ≠ HETP, NTU ≠ NTS**: in Example 2, NTS = 0.428 but NTU = 4.22. Don't multiply HTU by NTS. [Week 5, p. 14, 18–19]
- **$A_h$ is per metre of column**: multiply the specific area (m²/m³) by the cross-section (m²). Using $a_i$ alone gives HTU in the wrong units. [Week 5, p. 18]
- **Volumetric flow in HTU**: $Q_V = G/\rho_V$ in m³/s, not the molar flow. [Week 5, p. 18]
- **Straight lines only**: the $A\ln A/(A-1)$ shortcut needs linear operating and equilibrium lines (dilute). Otherwise integrate NTU. [Week 5, p. 15]
- **Which A**: the slide shows $L_{in}/(KG_{out})$, $L_{out}/(KG_{in})$ or $L'/(KG')$ as options. They're nearly equal when dilute, so pick one and be consistent. [Week 5, p. 18]
- **Units mix-up on the slide**: Example 2 gives flows in mol/s but labels the intermediate flows "kmol/h". The numbers are consistent in mol/s. [Week 5, p. 16–17]
- **$Q_V$ basis**: the slide uses the total gas flow (20 mol/s). The exercise uses the inert flow G′ (31.46 mol/s). Dilute, so the difference is small, but say which you use. [Week 5, p. 18; exercise_05_solutions.pdf, Oppg. 3c]

## Past exam tasks
- None on either practice exam. Both use HETP × NTS for packed height (page 14).

## Test yourself
**Q:** Write HTU and NTU and say which depends on hardware and which on the separation.
**A:** $HTU = Q_V/(k_{OV}A_h)$ depends on flow, packing and $k_{OV}$. $NTU = \int dy/(y^* - y)$ depends on compositions and equilibrium. [Week 5, p. 14]

**Q:** Packing with $a_i = 207$ m²/m³ in a column of 0.15 m² cross-section. What is $A_h$?
**A:** $31.05$ m²/m. [Week 5, p. 18]

**Q:** With A = 1.17 and NTS = 4.47, what is NTU?
**A:** $4.47\cdot\frac{1.17\ln 1.17}{0.17} = 4.83$. [exercise_05_solutions.pdf, Oppg. 3c]

**Q:** HTU = 0.386 m and NTU = 4.83. Packed height?
**A:** 1.86 m. [exercise_05_solutions.pdf, Oppg. 3c]

**Q:** In which special case are the operating and equilibrium lines straight, so the NTS→NTU shortcut applies?
**A:** Linear operating and equilibrium lines, e.g. dilute absorption with $y^* = Kx$. [Week 5, p. 15]

## Sources
- [Week 5 - Efficiency and mass transfer with solutions.pdf, p. 2, 13–19]
- [FormelarkKP3010.pdf, p. 5, eq. 47–51]
- [exercise_05_eng.pdf, Exercise 3]
- [exercise_05_solutions.pdf, Oppg. 3a–c]
