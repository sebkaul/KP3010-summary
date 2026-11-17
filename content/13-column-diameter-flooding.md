---
slug: 13-column-diameter-flooding
title: Column diameter and flooding
topic: column-design
exam_weight: medium
exam_weight_note: "Flooding definition and flooding velocity on 1 of 2 practice exams (Practice exam 1, Ex. 3a–b, 4 pts)"
builds_on: [12-trays-vs-packing]
used_in: [14-column-height-pressure-drop]
sources: ["Week 4 - Design of columns with solutions.pdf", "FormelarkKP3010.pdf", "exercise_04_eng.pdf", "exercise_04_solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** Does a wider column give a purer product?
**A:** No. The diameter doesn't influence the degree of separation or purity. It sets the capacity. [Week 4, p. 10]

**Q:** What is flooding?
**A:** The gas velocity is so high (column too narrow, or gas flow too large) that liquid is pushed out instead of flowing down. Gas and liquid then lose contact and there is no mass transfer. [Week 4, p. 10; practice_exam_solutions.pdf, Ex. 3a]

**Q:** Where in an absorber do you size the diameter?
**A:** At the bottom (gas inlet, liquid outlet), where the internal flows are largest. [Week 4, p. 16]

## Mental model
The number of stages decides the purity. The diameter decides how much the column can handle [Week 4, p. 10]. Push gas up too fast and it holds the liquid up, then blows it out: the column floods, contact is lost, and nothing separates [Week 4, p. 10; exercise_04_solutions.pdf, Oppg. 1a]. So the design is a velocity problem. First find the flooding velocity from an empirical chart that links two dimensionless groups: the flow parameter (how much liquid per gas, weighted by density) and the capacity parameter (the gas velocity scaled by packing factor or tray spacing and densities) [Week 4, p. 12, 21]. Then pick an operating velocity safely below flooding, about 70 % for packing and 85 % for trays, or whatever the task specifies [Week 4, p. 11, 21]. The area follows from $A = Q_V/u_V$ and the diameter from $A = \pi D^2/4$. Trays lose extra area to the downcomer [Week 4, p. 13, 22].

## Concepts and definitions
- **Diameter vs capacity**: the diameter doesn't influence separation or purities but sets capacity. A wider column handles higher gas flow rates. [Week 4, p. 10]
- **Flooding (packed)**: if the diameter is too small or the gas flow too high, the gas velocity is too high and the liquid is pushed out. The flooding point is the gas velocity that prevents water from flowing down the column. [Week 4, p. 10; exercise_04_solutions.pdf, Oppg. 1a]
- **Minimum liquid load (wetting)**: needed so the packing is covered by a liquid layer for optimal mass transfer. [Week 4, p. 10]
- **Operating point (packed)**: the column operates best at about 70 % of the flooding gas flow rate. [Week 4, p. 11]
- **Flow parameter**: $\frac{Q_L}{Q_V}\sqrt{\rho_L/\rho_V}$, the x-axis of the flooding/pressure-drop chart. $Q_i$ is the volume flow (m³/s). [Week 4, p. 12; FormelarkKP3010.pdf, p. 3, eq. 29]
- **Capacity parameter (packing)**: $u_V\sqrt{\frac{F_p}{g}\cdot\frac{\rho_V}{\rho_L}}$, read from the packed-column chart. [Week 4, p. 12; FormelarkKP3010.pdf, p. 3, eq. 31]
- **Plate-column flooding types**: (1) downcomer flooding, where the pressure drop across the plates is too high and liquid is pushed up the downcomer to the plate above. (2) Entrainment flooding, where high vapour velocities tear the liquid apart and carry it with the gas to the tray above. Both depend on tray design and flow properties. [Week 4, p. 20]
- **Capacity parameter (plates)**: $u_V\sqrt{\frac{\rho_V}{\rho_L g H_{space}}}$, with $H_{space}$ the tray spacing (m). Normally 85 % of flooding velocity is used. [Week 4, p. 21; FormelarkKP3010.pdf, p. 3, eq. 30]
- **Downcomer fraction $f_{DC}$**: the part of the tray area used by the downcomer and not available to the gas. Usually about 0.15. [Week 4, p. 22]
- **Seven-step approach (packed)**: (1) choose the packing and find $F_p$; (2) find the volume flows and $Q_L/Q_V$; (3) calculate the flow parameter; (4) read the capacity parameter from the empirical plot; (5) solve for the flooding velocity; (6) choose the operating velocity (e.g. 70 %); (7) find the area and diameter. [Week 4, p. 14]

## Visuals
- **Normal operation vs flooding** · cross-section [Week 4, p. 10]
  - Two packed columns. Left: gas ↑ (moderate arrows), liquid film trickling ↓ over the packing, labelled "contact → mass transfer". Right: gas ↑ (thick arrows), liquid held up and blown out of the top, red label "flooding: no contact".
- **Flooding / pressure-drop correlation** · plot (schematic, log-log) [Week 4, p. 12, 18; FormelarkKP3010.pdf, p. 12, Fig. 2]
  - x-axis: flow parameter (–), log scale. y-axis: capacity parameter (–), log scale. A falling flooding curve with lower curves for constant pressure drop.
  - Mark the course read-offs as labelled points: Example 1 (0.0695, 0.35) [Week 4, p. 18]; Mellapak exercise (0.043, 0.38) [exercise_04_solutions.pdf, Oppg. 1b]; Practice exam 1 (0.19, 0.26) [practice_exam_solutions.pdf, Ex. 3b].
  - Arrow from a flow-parameter value up to the curve and left to the capacity parameter.
- **Seven-step sizing flowchart** · flowchart [Week 4, p. 14]
  - Packing → $F_p$ → volume flows → flow parameter → chart → capacity parameter → $u_{V,flood}$ → × fraction → $u_V$ → $A = Q_V/u_V$ → $D$.
- **Plate-column flooding mechanisms** · cross-section [Week 4, p. 20]
  - Two trays with downcomers. Panel 1: liquid backing up the downcomer onto the tray above ("downcomer flooding"). Panel 2: droplets carried up by the vapour to the tray above ("entrainment flooding").
- **Tray cross-section area** · cross-section [Week 4, p. 22]
  - Circle of diameter D with a segment shaded "downcomer, $f_{DC} \approx 0.15$". The rest is labelled "gas area $A = Q_V/u_V$".
- **Interactive plot**: $D = \sqrt{\frac{4}{\pi}\frac{Q_V}{f\, u_{V,flood}}}$ [Week 4, p. 13, 19].
  - Slider: fraction of flooding $f$ from 0.40 to 0.90 (start 0.50). Fixed $Q_V = 0.15$ m³/s and $u_{V,flood} = 2.36$ m/s (Example 1).
  - Show the live $D$ and a curve of D vs f. At 0.50 it must show $D = 0.40$ m. Mark f = 0.70 as "typical packed" [Week 4, p. 11].

## Equations

### Flow parameter (strømningsparameter)
$$\text{Flow par.} = \frac{Q_L}{Q_V}\sqrt{\frac{\rho_L}{\rho_V}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $Q_L, Q_V$ | volumetric liquid and gas flow | m³/s |
| $\rho_L, \rho_V$ | liquid and gas density | kg/m³ |

Same definition for packed and plate columns. [Week 4, p. 12, 21; FormelarkKP3010.pdf, p. 3, eq. 29]

### Capacity parameter, packed column
$$\text{Cap. par.} = u_V\sqrt{\frac{F_p}{g}\cdot\frac{\rho_V}{\rho_L}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $u_V$ | superficial gas velocity (at flooding when read from the flooding curve) | m/s |
| $F_p$ | packing factor | m⁻¹ |
| $g$ | gravitational acceleration, 9.81 | m/s² |

Read from the packed-column chart. [Week 4, p. 12; FormelarkKP3010.pdf, p. 3, eq. 31]

### Capacity parameter, plate column
$$\text{Cap. par.} = u_V\sqrt{\frac{\rho_V}{\rho_L\, g\, H_{space}}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $H_{space}$ | tray spacing | m |

Read from the tray-column chart. [Week 4, p. 21; FormelarkKP3010.pdf, p. 3, eq. 30, p. 12, Fig. 1]

### Gas density (ideal gas)
$$\rho_V = \frac{\bar M\, p}{RT}, \qquad \bar M = \sum_i y_i M_i$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\bar M$ | mean molar mass of the gas | kg/mol |
| $p$ | pressure | Pa |
| $R$ | 8.314 | J/(mol·K) |
| $T$ | temperature | K |

[Week 4, p. 16, 24]

### Diameter, packed column
$$Q_V = A\, u_V, \qquad A = \frac{\pi}{4}D^2 \;\Rightarrow\; D = \sqrt{\frac{4}{\pi}\cdot\frac{Q_V}{u_V}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $A$ | column cross-section | m² |
| $D$ | column diameter | m |
| $u_V$ | *operating* superficial gas velocity (fraction × flooding) | m/s |

[Week 4, p. 13]

### Diameter, plate column
$$A = \frac{Q_V}{u_V}, \qquad D = \sqrt{\frac{4}{\pi}\cdot\frac{A}{1 - f_{DC}}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $f_{DC}$ | downcomer area fraction, about 0.15 | – |

[Week 4, p. 22]

## Worked example
**Packed NH₃ absorber with 1" metal Pall rings** [Week 4, p. 15–19]
25 °C, 1 atm. Gas feed 653.2 kg/h with 3 mol % NH₃, the rest air. $Q_L/Q_V = 1/420$, $\rho_L = 997$ kg/m³. Operate at 50 % of flooding.
1. Design at the bottom (gas inlet, liquid outlet), where the flows are largest. Packing factor $F_p = 184$ m⁻¹.
2. Mean molar mass: $\bar M = 0.97\cdot 28.97 + 0.03\cdot 17 = 28.61$ g/mol.
3. Gas density: $\rho_V = \dfrac{28.61\cdot 101325}{8.314\cdot 298.15} = 1169$ g/m³ $= 1.17$ kg/m³.
4. Flow parameter: $\dfrac{1}{420}\sqrt{\dfrac{997}{1.17}} = 0.0695$.
5. Chart: capacity parameter $= 0.35$.
6. Flooding velocity: $u_V = \dfrac{0.35}{\sqrt{\frac{184}{9.81}\cdot\frac{1.17}{997}}} = 2.36$ m/s.
7. Operating velocity at 50 %: $2.36/2 = 1.18$ m/s.
8. Gas flow: $\dot m_V = 645$ kg/h $= 0.181$ kg/s, so $Q_V = 0.181/1.17 = 0.15$ m³/s.
9. Diameter: $D = \sqrt{\dfrac{4}{\pi}\cdot\dfrac{0.15}{1.18}} = 0.40$ m.

## Faded example
**Sieve-tray ethanol absorber** [Week 4, p. 23–27]
25 °C, 1 atm. Gas 211.7 kmol/h with 2 mol % ethanol, the rest air ($M = 29.0$). Liquid 320 kmol/h water. Tray spacing 15.24 cm. Operate at 85 % of flooding, $f_{DC} = 0.15$.
1. Gas molar flow: $211.7$ kmol/h $= 58.8$ mol/s.
2. **(try)** Gas volume flow. → $Q_V = \dfrac{58.8\cdot 8.314\cdot 298.15}{101325} = 1.44$ m³/s.
3. **(try)** Gas density. → $\bar M = 0.98\cdot 29 + 0.02\cdot 46.1 = 29.34$ kg/kmol, so $\rho_V = 1.2$ kg/m³.
4. **(try)** Liquid volume flow. → $88.9$ mol/s $\cdot\, 0.01802/997 = 1.6\cdot 10^{-3}$ m³/s.
5. **(try)** Flow parameter. → $\dfrac{1.6\cdot 10^{-3}}{1.44}\sqrt{\dfrac{997}{1.2}} = 0.032$.
6. From the tray chart: capacity parameter $= 0.04$.
7. **(try)** Flooding velocity, then 85 %. → $u_V = 0.04/\sqrt{1.2/(997\cdot 9.81\cdot 0.1524)} = 1.41$ m/s, so $1.20$ m/s.
8. **(try)** Gas area and diameter. → $A = 1.44/1.20 = 1.16$ m², and $D = \sqrt{\frac{4}{\pi}\cdot\frac{1.16}{1 - 0.15}} = 1.32$ m.

[Week 4, p. 24–27]

## Exam traps
- **Square root in the flow parameter**: it's $\frac{Q_L}{Q_V}\sqrt{\rho_L/\rho_V}$. The slide layout can hide the root, but all the course numbers use it. [FormelarkKP3010.pdf, p. 3, eq. 29; Week 4, p. 17]
- **Packed vs plate capacity parameter**: packed uses $F_p$, plates use the tray spacing $H_{space}$. Use the matching chart (formula sheet Fig. 2 packed, Fig. 1 plates). [FormelarkKP3010.pdf, p. 3, p. 12]
- **Size where the flow is largest**: the absorber bottom [Week 4, p. 16]. In a distillation column, wherever the vapour flow is largest. In exercise 4 that is the top, since $V' > V''$. [exercise_04_solutions.pdf, Oppg. 2f]
- **Fraction of flooding**: about 70 % (packed) and 85 % (plates) are the defaults [Week 4, p. 11, 21]. Tasks often set their own (50 %, 75 %), so always use the given value. [Week 4, p. 15; exercise_04_eng.pdf, Exercise 1c, 2f]
- **Subtract the downcomer**: for trays, divide the gas area by $(1 - f_{DC})$ before computing D. [Week 4, p. 22]
- **Volumes, not moles**: the flow parameter needs $Q$ in m³/s. Convert molar or mass flows with the ideal gas law or densities. [Week 4, p. 24–25]
- **$F_p$ units**: convert ft²/ft³ to m⁻¹ (× 3.28) before the capacity parameter. [exercise_04_solutions.pdf, Oppg. 1b]
- **Typo in the exercise solution**: Oppg. 1c writes $A = 0.155/2.04 = 0.76$ m². It is 0.076 m², which gives the stated $D = 0.31$ m. [exercise_04_solutions.pdf, Oppg. 1c]

## Past exam tasks
- Practice exam 1, Ex. 3a: what is flooding, and why is a gas velocity above flooding a problem?
- Practice exam 1, Ex. 3b: flooding gas velocity for a random packing ($F_p = 28$ m⁻¹) at 2 atm. Flow parameter 0.19, capacity parameter 0.26, giving $u_V = 3.18$ m/s.

## Test yourself
**Q:** NH₃ in air at 2 atm and 25 °C ($\bar M = 28.61$ g/mol). Find $\rho_V$.
**A:** $\rho_V = 28.61\cdot 202650/(8.314\cdot 298.15) = 2339$ g/m³ $= 2.34$ kg/m³. [practice_exam_solutions.pdf, Ex. 3b]

**Q:** With $Q_L/Q_V = 1/110$ and $\rho_L = 997$ kg/m³, find the flow parameter. With capacity parameter 0.26 and $F_p = 28$ m⁻¹, find $u_{V,flood}$.
**A:** Flow parameter $= \frac{1}{110}\sqrt{997/2.34} = 0.19$. $u_V = 0.26/\sqrt{\frac{28}{9.81}\cdot\frac{2.34}{997}} = 3.18$ m/s. [practice_exam_solutions.pdf, Ex. 3b]

**Q:** Mellapak 250Y ($F_p = 72.2$ m⁻¹), capacity parameter 0.38, $\rho_V = 1.17$ kg/m³. Find $u_{V,flood}$ and $D$ at 50 % with $Q_V = 0.155$ m³/s.
**A:** $u_V = 0.38/\sqrt{\frac{72.2}{9.81}\cdot\frac{1.17}{997}} = 4.09$ m/s. Operating velocity 2.04 m/s, $A = 0.076$ m², $D = 0.31$ m. [exercise_04_solutions.pdf, Oppg. 1b–c]

**Q:** Name the two flooding mechanisms in a plate column.
**A:** Downcomer flooding (liquid pushed up the downcomer by a high plate pressure drop) and entrainment flooding (liquid carried up by high vapour velocity). [Week 4, p. 20]

**Q:** Why is there also a *minimum* liquid load?
**A:** The packing must be covered by a liquid layer (wetted) for optimal mass transfer. [Week 4, p. 10]

## Sources
- [Week 4 - Design of columns with solutions.pdf, p. 10–27]
- [FormelarkKP3010.pdf, p. 3, eq. 29–31; p. 12, Fig. 1–2]
- [exercise_04_eng.pdf, Exercise 1a–c, 2e–f]
- [exercise_04_solutions.pdf, Oppg. 1a–c, 2f]
- [practice_exam_solutions.pdf, Ex. 3a–b]

> GAP: The flooding and pressure-drop correlation charts (Week 4, p. 18, 26; formula sheet p. 12; "Fig. 4.18/4.10 in the book") are images. Only individual read-off points are available, so the visual curve must be schematic.
> GAP: Week 4, p. 19 uses $\dot m_V = 645$ kg/h for the gas, while the example states a 653.2 kg/h feed. The slide doesn't explain the difference.
