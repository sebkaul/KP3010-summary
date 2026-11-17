---
slug: 23-adsorption-isotherms
title: Adsorption isotherms — Langmuir (single and two-component)
topic: adsorption
exam_weight: high
exam_weight_note: "Langmuir constants from an isotherm on 2 of 2 practice exams (Practice exam 1 Ex. 5a; Autumn 2022 Q5b)"
builds_on: [22-adsorbents-properties]
used_in: [24-fixed-bed-adsorption, 25-adsorption-cycles-ion-exchange]
sources: ["Week 7 - Adsorption and ion-exchange with solutions.pdf", "FormelarkKP3010.pdf", "exercise_07_eng.pdf", "practice exam 2 solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** What does the occupancy θ mean?
**A:** The fraction of adsorption sites that are occupied, $\theta = q_A/q_{A,max}$. [Week 7, p. 16]

**Q:** In a two-component Langmuir model, what changes compared to one component?
**A:** Both components appear in the denominator: $\theta_A = b_Ap_A/(1 + b_Ap_A + b_Bp_B)$. They compete for the same sites. [Week 7, p. 19]

**Q:** An isotherm is written $q = \dfrac{0.190c}{1 + 0.146c}$. What is $q_{max}$?
**A:** $0.190/0.146 = 1.3$ mol/kg. [exercise_07_eng.pdf, Problem 1a and short answers]

## Mental model
At equilibrium, molecules land on free sites at a rate ∝ pressure × (free fraction) and leave at a rate ∝ (occupied fraction) [Week 7, p. 18]. Set the two equal and you get the Langmuir isotherm. At low pressure θ rises linearly. At high pressure it flattens toward 1 as the sites fill, so q approaches the monolayer capacity $q_{max}$ [Week 7, p. 16, 18]. The Langmuir constant b = $k_{ads}/k_{des}$ measures affinity: large b means the surface fills at low pressure [Week 7, p. 18]. This picture only works if each site holds one molecule, all sites are equal and neighbours don't interact [Week 7, p. 17]. With two adsorbates they compete for the same sites, so each one's occupancy is reduced by the other's $b\,p$ term. The ratio of their loadings per concentration is just $b_A/b_B$, a constant separation factor [Week 7, p. 19]. Other isotherm shapes (multilayer, hysteresis) break those assumptions [Week 7, p. 20].

## Concepts and definitions
- **Adsorption equilibrium**: a dynamic balance between constant adsorption to and desorption from the surface. [Week 7, p. 16]
- **Occupancy (θ)**: the fraction of sites occupied. [Week 7, p. 16]
- **Langmuir quantities**: $q_A$ is the amount adsorbed per volume or weight, $q_{A,max}$ the monolayer capacity, $b_A$ the Langmuir adsorption constant. [Week 7, p. 16]
- **Langmuir assumptions (type I)**: (1) the adsorbed molecule is held at a definite, localised site; (2) each site holds one molecule; (3) the adsorption energy is the same for all sites; (4) neighbouring adsorbates don't interact. [Week 7, p. 17]
- **Kinetic derivation**: $r_{ads} = k_{ads}p_A(1-\theta)$ and $r_{des} = k_{des}\theta$. Setting them equal gives $\theta = b_Ap_A/(1 + b_Ap_A)$ with $b_A = k_{ads}/k_{des}$. [Week 7, p. 18]
- **Temperature dependence of b**: Arrhenius form $b_A = b_A^0 e^{-\Delta E_{ads}/RT}$. [Week 7, p. 18]
- **Two-component (extended) Langmuir**: both components share the denominator. [Week 7, p. 19; FormelarkKP3010.pdf, p. 6, eq. 67–68]
- **Equilibrium selectivity (separation factor)**: $\alpha'_{AB} = \frac{q_A/c_A}{q_B/c_B} = b_A/b_B$, a constant separation factor. [Week 7, p. 19]
- **Other isotherm types**: types II and III allow more molecules per site, and type III has a lower capacity at the start. Types IV and V show hysteresis: the amount adsorbed depends on whether the concentration is rising or falling, caused by capillary condensation. [Week 7, p. 20]
- **Gas vs liquid**: gas uses partial pressure, with $b_A$ in 1/Pa. Liquid uses concentration, with $b'_A$ in m³/mol. [Week 7, p. 21]
- **Choosing an adsorbent from Langmuir data**: strongest-adsorbed component = larger b. Greatest capacity = highest $q_{max}$. Greatest selectivity = largest relative difference in b between the two adsorbates. [Week 7, p. 22–23]
- **Measuring isotherms**: commonly gravimetric (pressure gauge, adsorbate, adsorption chamber, spring with sample basket, pumps, isothermal bath), measured at several adsorbate concentrations. [Week 7, p. 24]
- **Linear (Henry) isotherm**: at low concentrations an isotherm can be linear, $q = Kc$. [exercise_07_eng.pdf, Problem 2]

## Visuals
- **Langmuir isotherm shape** · plot [Week 7, p. 16, 21; practice exam 2 solutions.pdf, Q5b]
  - x-axis $c_A$ (mol/m³) from 0 to 40, y-axis q (mol/kg) from 0 to 1.4. Curve $q = 1.30\cdot\frac{0.20c}{1 + 0.20c}$, with a dashed asymptote at $q_{max} = 1.30$.
  - Mark the exam read-off point (8, 0.8). Annotate the "linear (Henry) region at low c" and "plateau = monolayer".
- **Kinetic picture** · cross-section [Week 7, p. 17–18]
  - A surface row of identical sites, some occupied (θ) and some free (1 − θ). Arrows down "$r_{ads} = k_{ads}p_A(1-\theta)$" and up "$r_{des} = k_{des}\theta$". Caption: the four Langmuir assumptions.
- **Isotherm types** · curve sketch, 5 panels [Week 7, p. 20]
  - Type I (Langmuir plateau), II (rises again, multilayer), III (low initial capacity, convex), IV and V (adsorption and desorption branches forming a hysteresis loop, labelled "capillary condensation").
- **Competitive adsorption** · plot (grouped bars) [exercise_07_eng.pdf, Problem 1, short answers]
  - Acetone (1) and propionitrile (2) on activated carbon. For each, show the single-component $q_{max}$ (1.3, 1.8 mol/kg) and the mixture loading at $c_1 = 40$, $c_2 = 34$ mol/m³ (0.75, 0.58 mol/kg).
- **Gravimetric isotherm apparatus** · process diagram [Week 7, p. 24]
  - Chamber in an isothermal bath with a spring-suspended sample basket, pressure gauge, adsorbate supply and pump. Numbered 1–7 as on the slide.
- **Interactive plot**: $q_A = q_{A,max}\dfrac{b_Ac_A}{1 + b_Ac_A + b_Bc_B}$ [Week 7, p. 19, 21].
  - Sliders: $b_A$ from 0.01 to 2 m³/mol (start 0.20), $q_{A,max}$ from 0.5 to 3 mol/kg (start 1.30), and a competitor term $b_Bc_B$ from 0 to 5 (start 0).
  - Plot q vs $c_A$ (0–40 mol/m³). With $b_Bc_B = 0$ the curve must pass through (8, 0.8). Show the selectivity $b_A/b_B$ when $b_B > 0$.

## Equations

### Langmuir isotherm (single component, gas)
$$\theta_A = \frac{q_A}{q_{A,max}} = \frac{b_Ap_A}{1 + b_Ap_A}, \qquad q_A = q_{A,max}\frac{b_Ap_A}{1 + b_Ap_A}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\theta_A$ | occupancy | – |
| $q_A$ | amount adsorbed | mol/kg |
| $q_{A,max}$ | monolayer capacity | mol/kg |
| $b_A$ | Langmuir constant | 1/Pa (or 1/bar) |
| $p_A$ | partial pressure | Pa (or bar) |

Under the four Langmuir assumptions. [Week 7, p. 16, 21; FormelarkKP3010.pdf, p. 6, eq. 65–66]

### Langmuir isotherm (liquid)
$$\theta_A = \frac{q_A}{q_{A,max}} = \frac{b'_Ac_A}{1 + b'_Ac_A}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $b'_A$ | Langmuir constant (concentration form) | m³/mol |
| $c_A$ | concentration | mol/m³ |

[Week 7, p. 21]

### Langmuir constant from kinetics and temperature
$$b_A = \frac{k_{ads}}{k_{des}}, \qquad b_A = b_A^0\,e^{-\Delta E_{ads}/RT}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $k_{ads}, k_{des}$ | adsorption and desorption rate constants | – |
| $\Delta E_{ads}$ | adsorption energy | J/mol |
| $b_A^0$ | pre-exponential factor | same as $b_A$ |

[Week 7, p. 18]

### Two-component (extended) Langmuir
$$\theta_A = \frac{q_A}{q_{A,max}} = \frac{b_Ap_A}{1 + b_Ap_A + b_Bp_B}, \qquad \theta_B = \frac{q_B}{q_{B,max}} = \frac{b_Bp_B}{1 + b_Ap_A + b_Bp_B}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $p_A, p_B$ | partial pressures (or c for liquids) | Pa (or mol/m³) |

[Week 7, p. 19; FormelarkKP3010.pdf, p. 6, eq. 67–68]

### Equilibrium selectivity
$$\alpha'_{AB} = \frac{q_A/c_A}{q_B/c_B} = \frac{b_A}{b_B}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\alpha'_{AB}$ | separation factor (constant for Langmuir) | – |

[Week 7, p. 19]

## Worked example
**Langmuir constant from an isotherm figure** [practice exam 2 solutions.pdf, Q5b]
Langmuir type I isotherm at 300 K and 1 bar, $q_{max} = 1.30$ mol A/kg. The figure passes through $(c_A, q) = (8\ \text{mol/m}^3, 0.8\ \text{mol/kg})$.
1. Model: $q = q_{max}\dfrac{b_Ac_A}{1 + b_Ac_A}$.
2. Insert the point: $0.8 = 1.30\dfrac{8b_A}{1 + 8b_A}$.
3. Divide: $0.62 = \dfrac{8b_A}{1 + 8b_A}$.
4. Multiply out: $0.62 + 4.92b_A = 8b_A$.
5. Solve: $b_A = 0.20$ m³/mol, since c is in mol/m³.

## Faded example
**Competitive adsorption of acetone and propionitrile on activated carbon** [exercise_07_eng.pdf, Problem 1a–b and short answers]
$q_1 = \dfrac{0.190c_1}{1 + 0.146c_1}$ and $q_2 = \dfrac{0.173c_2}{1 + 0.096c_2}$ (q in mol/kg, c in mol/m³). Waste stream: $c_1 = 40$, $c_2 = 34$ mol/m³.
1. Match each to $q = q_m\dfrac{bc}{1 + bc}$, so $b_1 = 0.146$ and $b_2 = 0.096$ m³/mol.
2. **(try)** Capacities. → $q_{1,m} = 0.190/0.146 = 1.3$ and $q_{2,m} = 0.173/0.096 = 1.8$ mol/kg.
3. **(try)** Shared denominator. → $1 + 0.146\cdot 40 + 0.096\cdot 34 = 10.1$.
4. **(try)** Loadings. → $q_1 = 1.30\cdot 5.84/10.1 = 0.75$ and $q_2 = 1.80\cdot 3.26/10.1 = 0.58$ mol/kg.
5. **(try)** Compare with single-component. → Alone, acetone at 40 mol/m³ would give $1.30\cdot 5.84/6.84 = 1.11$ mol/kg. Competition cuts it to 0.75.

[exercise_07_eng.pdf, short answers 1a–b]

## Exam traps
- **$q_{max}$ = numerator coefficient ÷ b**: e.g. $100/2 = 50$ mol/kg. Don't read the numerator coefficient as $q_{max}$. [practice_exam_solutions.pdf, Ex. 5a; exercise_07_eng.pdf, Problem 1a]
- **Units of b follow the variable**: 1/Pa (or 1/bar) for partial pressure, m³/mol for concentration. The exam's $b_A = 0.20$ is in m³/mol. [Week 7, p. 21; practice exam 2 solutions.pdf, Q5b]
- **Extended Langmuir has both terms in every denominator**: forgetting $b_Bc_B$ overestimates the loading. [Week 7, p. 19]
- **Selectivity from b, capacity from $q_{max}$**: the propane/propylene example ranks activated carbon highest for capacity but ZMS 4A for selectivity, and ZMS 4A best overall. [Week 7, p. 23]
- **Langmuir assumptions**: if asked why a real isotherm deviates, give the four assumptions (localised sites, one molecule per site, uniform energy, no interactions). [Week 7, p. 17]
- **Hysteresis means type IV/V**: capillary condensation, and the loading depends on direction. [Week 7, p. 20]
- **Low c means linear**: at very low concentration, use $q = Kc$. [exercise_07_eng.pdf, Problem 2]

## Past exam tasks
- Practice exam 1, Ex. 5a: $q_{max}$ for N₂ and O₂ from Langmuir expressions and the equilibrium selectivity (page 22).
- Autumn 2022, Q5b: Langmuir constant $b_A$ from one point on the isotherm and $q_{max}$ ($b_A = 0.20$).
- Autumn 2022, Q5a: favourable vs unfavourable isotherm. Covered on page 24.

## Test yourself
**Q:** Derive the Langmuir isotherm from the rates.
**A:** $k_{ads}p_A(1-\theta) = k_{des}\theta$ gives $\theta = \frac{(k_{ads}/k_{des})p_A}{1 + (k_{ads}/k_{des})p_A} = \frac{b_Ap_A}{1 + b_Ap_A}$. [Week 7, p. 18]

**Q:** In the propane/propylene table, which adsorbent has the greatest capacity, which the greatest selectivity, and which is best for separation?
**A:** Greatest capacity: activated carbon (highest $q_{max}$). Greatest selectivity: ZMS 4A (largest relative difference in b). Best for separation on equilibrium grounds: ZMS 4A. [Week 7, p. 23]

**Q:** Nitrobenzene from 0.01 to 10⁻⁶ kg/m³ in one ideally stirred tank, $q = 675c$ (m³/kg). How much activated carbon per m³?
**A:** At equilibrium $q = 675\cdot 10^{-6} = 6.75\cdot 10^{-4}$ kg/kg. Carbon $= (0.01 - 10^{-6})/6.75\cdot 10^{-4} = 14.8$ kg/m³. [exercise_07_eng.pdf, Problem 2 and short answer]

**Q:** What causes the hysteresis in type IV and V isotherms?
**A:** Capillary condensation. [Week 7, p. 20]

**Q:** Why is the Langmuir separation factor called "constant"?
**A:** $\alpha'_{AB} = (q_A/c_A)/(q_B/c_B) = b_A/b_B$, which doesn't depend on concentration. [Week 7, p. 19]

## Sources
- [Week 7 - Adsorption and ion-exchange with solutions.pdf, p. 16–24]
- [FormelarkKP3010.pdf, p. 6, eq. 65–68]
- [exercise_07_eng.pdf, Problem 1–2 and short answers]
- [practice exam 2 solutions.pdf, Q5b]
- [practice_exam_solutions.pdf, Ex. 5a]

> GAP: The propane/propylene Langmuir constant table (Week 7, p. 22–23) is an image, so the $q_{max}$ and b values can't be reproduced. Only the slide's conclusions are used.
> GAP: The official exercise 7 solutions are blank. Results come from the short answers on the task sheet. The faded example's step 5 (single-component comparison) is computed here from the given isotherm.
