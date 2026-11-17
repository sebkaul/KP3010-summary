---
slug: 31-membrane-flux-permeability-selectivity
title: Membrane flux, permeability, permeance and selectivity
topic: membranes
exam_weight: high
exam_weight_note: "Flux/thickness and selectivity calculations on 2 of 2 practice exams (Practice exam 1 Ex. 7b–c; Autumn 2022 Q7a–b, 5 of 8 pts)"
builds_on: [30-membrane-fundamentals-osmosis]
used_in: [32-concentration-polarization, 33-membrane-modules-design]
sources: ["Week 9 - Membrane filtration with solutions.pdf", "FormelarkKP3010.pdf", "exercise_09_solutions.pdf", "practice_exam_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** What's the difference between permeability and permeance?
**A:** Permeability is flux per unit driving force per unit membrane thickness. Permeance is flux per unit driving force for a specified membrane, $P_i = P_{M,i}/\delta_M$, so the thickness is already included. [Week 9, p. 17]

**Q:** A dense membrane has partition constant K = 2.30 and the feed is 45 mol/m³. What is the concentration just inside the membrane on the feed side?
**A:** $2.30\cdot 45 = 103.5$ mol/m³. [practice exam 2 solutions.pdf, Q7a]

**Q:** A membrane has CO₂ permeability 500 barrer and CO₂/N₂ selectivity 400. N₂ permeability?
**A:** $500/400 = 1.25$ barrer. [practice_exam_solutions.pdf, Ex. 7c]

## Mental model
Two numbers rate a membrane: how much gets through (flux, mol per m² per s) and how well it discriminates (selectivity) [Week 9, p. 15]. Flux is like current through a resistor. It is the material's permeability times the driving force (pressure or concentration difference), divided by the thickness. Thinner membranes give more flux, which is why asymmetric membranes have a very thin top layer [Week 9, p. 16–17, 8]. If you lump the thickness in, you get the permeance, which behaves like a mass-transfer coefficient [Week 9, p. 17]. What sets the permeability depends on the membrane type. In porous membranes molecules diffuse through the gas in the pores (molecular diffusion) or bounce between the walls (Knudsen), so lighter molecules move faster and selectivity follows $\sqrt{M_j/M_i}$ [Week 9, p. 20–22]. In dense membranes molecules first dissolve (partition K) and then diffuse (D), so selectivity combines solubility and diffusivity [Week 9, p. 23–24]. In RO, the osmotic pressure works against the applied pressure [Week 9, p. 16].

## Concepts and definitions
- **Performance depends on** membrane properties, membrane geometry in the module, and the pressure difference across the membrane. [Week 9, p. 15]
- **Flux**: how much of the component passes through the membrane per area per time (mol/m²/s). [Week 9, p. 15]
- **Selectivity**: relative permeation of different components through the membrane. [Week 9, p. 15]
- **Permeability $P_M$**: unique for each component and membrane. Flux per unit driving force per unit thickness. SI units: kmol·m/(m²·s·kPa). Alternative unit: barrer, 1 barrer = 10⁻¹⁰ cm³(STP)·cm/(cm²·s·cmHg) = 3.35·10⁻¹⁶ mol·m/(m²·s·Pa). [Week 9, p. 16–18]
- **Permeance $P_i$**: $P_{M,i}/\delta_M$, flux per unit driving force for a specified membrane. Similar to a mass-transfer coefficient, in m/s for a concentration driving force. [Week 9, p. 17]
- **Porous membranes**: transport by molecular diffusion and Knudsen diffusion. [Week 9, p. 20]
- **Molecular vs Knudsen diffusion**: molecule–molecule collisions dominate in molecular diffusion, wall collisions dominate in Knudsen diffusion. Knudsen is mainly for gas diffusion through porous membranes, and its coefficient depends on the pore diameter. [Week 9, p. 22]
- **Dense membranes**: permeating species dissolve into the membrane matrix, a concentration gradient forms, and species diffuse through. Concentrations just outside and inside the membrane are in equilibrium (partition constant $K_i$). Often there is extra mass-transfer resistance outside the membrane (page 32). [Week 9, p. 23–24]
- **Membrane selectivity $\alpha_{i,j}$**: ratio of the permeabilities of species i and j. [Week 9, p. 21]
- **Retention $R_i$**: selectivity is usually expressed as retention of a species, comparing retentate and permeate concentrations. [Week 9, p. 27]
- **Molecular weight cut-off (MWCO)**: defined as 90 % retention. [Week 9, p. 27]
- **Gas separation factor $S_{i,j}$**: ratio of concentration ratios in permeate vs retentate. [Week 9, p. 27]

## Visuals
- **Flux as permeability × driving force / thickness** · process diagram [Week 9, p. 16–17]
  - A membrane slab of thickness $\delta_M$ with $p_0$ (feed side) and $p_\delta$ (permeate side). Arrow $J_i$ across it. Callouts: "permeability $P_M$ (per thickness)", "permeance $P = P_M/\delta_M$ (thickness included)".
- **Dense-membrane concentration profile** · curve sketch [Week 9, p. 24–26; practice exam 2 solutions.pdf, Q7a]
  - x-axis position across feed | membrane | permeate, y-axis concentration (mol/m³). Feed bulk at $c_F = 45$. At the feed interface a jump up to $Kc_F = 103.5$ inside the membrane, then a linear drop across $\delta_M$ to $Kc_P = 13.8$, then a jump down to $c_P = 6.0$ in the permeate.
  - Label "partition: $c_{i,0} = K_ic_{i,F}$" and "diffusion: slope ∝ $J/D$".
- **Molecular vs Knudsen diffusion in a pore** · cross-section [Week 9, p. 22]
  - Left: a wide pore with molecules colliding mostly with each other ("molecular, depends on P_tot"). Right: a narrow pore with molecules bouncing off walls ("Knudsen, $D_K \propto d_p$").
- **H₂ vs CO flux through silica glass** · plot (bar chart, log y) [Week 9, p. 18–19]
  - $J_{H_2} = 55.3$ mol/(m²·s) vs $J_{CO} = 0.065$ mol/(m²·s), annotated "permeability ratio 200 000/700 ≈ 286".
- **Retention vs molecular weight** · curve sketch [Week 9, p. 27]
  - x-axis molecular weight (log), y-axis retention $R_i$ (0–1). An S-curve rising to 1, with a horizontal line at 0.9 and the crossing labelled "MWCO".
- **Interactive plot**: dense-membrane flux $J = \frac{KD}{\delta_M}(c_F - c_P)$ and interface concentrations $Kc_F$, $Kc_P$ [Week 9, p. 24–26; practice exam 2 solutions.pdf, Q7].
  - Slider: $\delta_M$ from 1 to 100 µm (start 23.3). Fixed $c_F = 45$, $c_P = 6.0$ mol/m³, K = 2.30, D = 6.5·10⁻¹¹ m²/s.
  - Show J in mol/(m²·s) and mmol/(m²·s), plus the profile from the visual above. At 23.3 µm it must show J = 0.25 mmol/(m²·s).

## Equations

### Flux with a pressure driving force
$$J_i = P_{M,i}\frac{p_0 - p_\delta}{\delta_M} = P_{M,i}\frac{\Delta p}{\delta_M}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $J_i$ | flux of i | mol/(m²·s) |
| $P_{M,i}$ | permeability of i | mol·m/(m²·s·Pa) |
| $p_0, p_\delta$ | (partial) pressure of i on feed and permeate side | Pa |
| $\delta_M$ | membrane thickness | m |

[Week 9, p. 16; FormelarkKP3010.pdf, p. 8, eq. 87–88]

### Flux with osmotic pressure (RO)
$$J_i = P_{M,i}\frac{\Delta p_{ext} - \Delta\Pi_{OSM}}{\delta_M}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\Delta p_{ext}$ | applied pressure difference | Pa |
| $\Delta\Pi_{OSM}$ | osmotic pressure difference across the membrane | Pa |

When osmotic pressure can't be neglected. [Week 9, p. 16; FormelarkKP3010.pdf, p. 8, eq. 89]

### Flux with a concentration driving force
$$J_i = P_{M,i}\frac{c_0 - c_\delta}{\delta_M}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $c_0, c_\delta$ | concentrations at the two faces | mol/m³ |
| $P_{M,i}$ | permeability (here m²/s) | m²/s |

[Week 9, p. 16; FormelarkKP3010.pdf, p. 8, eq. 87]

### Permeance and the barrer
$$P_i = \frac{P_{M,i}}{\delta_M}, \qquad 1\ \text{barrer} = 3.35\cdot 10^{-16}\ \frac{\text{mol·m}}{\text{m}^2\text{·s·Pa}}, \qquad 1\ \text{cmHg} = 133.3\ \text{Pa}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $P_i$ | permeance | m/s (concentration driving force) |

[Week 9, p. 17–18; practice_exam_solutions.pdf, Ex. 7b]

### Porous membrane: Fick's law
$$J_i = D_{im}\frac{c_{i,0} - c_{i,\delta}}{\delta_M} \qquad\text{(ideal gas: } J_i = \frac{D_{im}}{RT}\frac{p_{i,0} - p_{i,\delta}}{\delta_M}\text{)}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $D_{im}$ | diffusion coefficient of i in the mixture | m²/s |

Dilute ($c_i/c_{tot} \ll 1$). [Week 9, p. 20; FormelarkKP3010.pdf, p. 9, eq. 90–91]

### Ideal-gas diffusivities (molecular and Knudsen)
$$D_i = \tfrac{1}{3}\lambda_i\bar v_i, \qquad \bar v_i = \sqrt{\frac{8RT}{\pi M_i}}, \qquad \lambda_i = \frac{RT}{\sqrt2\,\sigma_iP_{tot}N_{Av}}, \qquad D_{i,K} = \frac{d_p}{3}\bar v_i$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\lambda_i$ | mean free path | m |
| $\bar v_i$ | mean molecular speed | m/s |
| $\sigma_i$ | cross-sectional area of molecule i | m² |
| $M_i$ | molar mass | kg/mol |
| $d_p$ | pore diameter | m |
| $N_{Av}$ | 6.022·10²³ | 1/mol |

The formula sheet writes $\sqrt2\,\sigma_i$ in $\lambda_i$, and the slide writes $2\sigma_i$. [Week 9, p. 20, 22; FormelarkKP3010.pdf, p. 9, eq. 93–95]

### Selectivity
$$\alpha_{i,j} = \frac{P_{M,i}}{P_{M,j}}; \qquad \text{porous (molecular, ideal gas): } \alpha_{i,j} = \frac{D_i}{D_j} = \sqrt{\frac{M_j}{M_i}}; \qquad \text{dense: } \alpha_{i,j} = \frac{K_iD_{im}}{K_jD_{jm}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\alpha_{i,j}$ | selectivity of i over j | – |

[Week 9, p. 21, 24; FormelarkKP3010.pdf, p. 9, eq. 92; practice_exam_solutions.pdf, Ex. 7c]

### Dense membrane: partition and flux
$$K_i = \frac{c_{i,0}}{c_{i,F}} = \frac{c_{i,\delta}}{c_{i,P}}, \qquad J_i = K_iD_{im}\frac{c_{iF} - c_{iP}}{\delta_M} = \frac{K_iD_{im}}{RT}\frac{p_{iF} - p_{iP}}{\delta_M}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $K_i$ | partition (equilibrium) constant | – |
| $c_{i,0}, c_{i,\delta}$ | concentration inside the membrane at feed and permeate faces | mol/m³ |
| $c_{iF}, c_{iP}$ | feed and permeate bulk concentrations | mol/m³ |

No external mass-transfer resistance. [Week 9, p. 24]

### Retention and gas separation factor
$$R_i = \frac{C_{R,i} - C_{P,i}}{C_{R,i}}, \qquad S_{i,j} = \frac{(c_i/c_j)_P}{(c_i/c_j)_R}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $C_{R,i}, C_{P,i}$ | concentration in retentate and permeate | mol/m³ |

[Week 9, p. 27]

## Worked example
**H₂ and CO fluxes through a silica-glass membrane** [Week 9, p. 18–19]
Thickness 2 µm. Permeabilities H₂ 200 000 barrer, CO 700 barrer. Partial-pressure driving forces 16.5 bar (H₂) and 5.5 bar (CO).
1. Convert: $P_{M,H_2} = 200\,000\cdot 3.35\cdot 10^{-16} = 6.70\cdot 10^{-11}$ mol·m/(m²·s·Pa).
2. $P_{M,CO} = 700\cdot 3.35\cdot 10^{-16} = 2.35\cdot 10^{-13}$ mol·m/(m²·s·Pa).
3. Pressures in Pa: 16.5 bar = 1 650 000 Pa and 5.5 bar = 550 000 Pa. Thickness: $2\cdot 10^{-6}$ m.
4. $J_{H_2} = 6.70\cdot 10^{-11}\cdot 1\,650\,000/(2\cdot 10^{-6}) = 55.3$ mol/(m²·s).
5. $J_{CO} = 2.35\cdot 10^{-13}\cdot 550\,000/(2\cdot 10^{-6}) = 0.065$ mol/(m²·s).
6. Selectivity (permeability ratio): $\alpha_{H_2,CO} = 200\,000/700 \approx 286$.

## Faded example
**Dense membrane: interface concentrations and required thickness** [practice exam 2 solutions.pdf, Q7a–b]
Solute at 45 mol/m³ (feed) and 6.0 mol/m³ (permeate). $D_m = 6.5\cdot 10^{-11}$ m²/s, K = 2.30. No boundary-layer resistance. Target flux 0.25 mmol/(m²·s).
1. **(try)** Concentration inside the membrane at the feed face. → $c_{A,z=0} = 45\cdot 2.30 = 103.5$ mol/m³.
2. **(try)** At the permeate face. → $c_{A,z=\delta} = 6.0\cdot 2.30 = 13.8$ mol/m³.
3. Flux equation: $J_A = \dfrac{KD}{\delta_M}(c_F - c_P)$.
4. **(try)** Insert the flux in SI. → $2.5\cdot 10^{-4} = \dfrac{2.3\cdot 6.5\cdot 10^{-11}}{\delta_M}(45 - 6)$.
5. **(try)** Solve. → $\delta_M = 2.33\cdot 10^{-5}$ m $= 23.3$ µm.

[practice exam 2 solutions.pdf, Q7a–b]

## Exam traps
- **Unit conversions decide the answer**: barrer → SI (× 3.35·10⁻¹⁶), cmHg → Pa (× 133.3), µm → m, mmol → mol. The exam asks for kmol/(m²·s), so divide mol by 1000. [practice_exam_solutions.pdf, Ex. 7b; practice exam 2 solutions.pdf, Q7b]
- **Permeability vs permeance**: permeability needs ÷ $\delta_M$, permeance already includes it. [Week 9, p. 17]
- **Dense membranes: multiply by K at the interfaces**: inside concentrations are $Kc$, not c. [practice exam 2 solutions.pdf, Q7a]
- **Selectivity is a ratio of permeabilities**: so $P_{N_2} = P_{CO_2}/\alpha$. [practice_exam_solutions.pdf, Ex. 7c]
- **Use each component's own partial-pressure difference**: H₂ 16.5 bar, CO 5.5 bar. [Week 9, p. 18]
- **Osmotic pressure lowers RO flux**: use $\Delta p - \Delta\Pi$ when it isn't negligible. [Week 9, p. 16]
- **Knudsen depends on pore size, molecular diffusion on total pressure**: $D_K \propto d_p$, while $\lambda \propto 1/P_{tot}$. [Week 9, p. 20, 22]
- **$\sqrt2$ vs 2 in the mean free path**: the formula sheet ($\sqrt2\,\sigma$) and the slide ($2\sigma$) differ. Use the formula sheet. [FormelarkKP3010.pdf, p. 9, eq. 94; Week 9, p. 20]
- **MWCO = 90 % retention**. [Week 9, p. 27]

## Past exam tasks
- Practice exam 1, Ex. 7b: CO₂ flux through a 1.5 µm graphene-oxide membrane, 500 barrer, 760 vs 76 cmHg ($1.02\cdot 10^{-5}$ kmol/(m²·s)).
- Practice exam 1, Ex. 7c: N₂ permeability from a CO₂/N₂ selectivity of 400 (1.25 barrer).
- Autumn 2022, Q7a: interface concentrations inside a dense membrane (103.5 and 13.8 mol/m³).
- Autumn 2022, Q7b: membrane thickness for 0.25 mmol/(m²·s) (23.3 µm).

## Test yourself
**Q:** Solute A: δ = 10 µm, $c_F = 50$, $c_P = 3$ mol/m³, $K_A = 2$, $D_A = 7.0\cdot 10^{-11}$ m²/s. Flux?
**A:** $J_A = \frac{7.0\cdot 10^{-11}}{10\cdot 10^{-6}}(2\cdot 50 - 2\cdot 3) = 6.58\cdot 10^{-4}$ mol/(m²·s). [Week 9, p. 26]

**Q:** CO₂ at 500 barrer, 1.5 µm, 760 vs 76 cmHg. Flux in kmol/(m²·s)?
**A:** $500\cdot 3.35\cdot 10^{-16}\cdot 133.3\cdot 684/1.5\cdot 10^{-6} = 1.02\cdot 10^{-2}$ mol/(m²·s) $= 1.02\cdot 10^{-5}$ kmol/(m²·s). [practice_exam_solutions.pdf, Ex. 7b]

**Q:** δ = 30 µm, $c_F = 0.030$ and $c_P = 0.0050$ kmol/m³, K = 1.5, $D_A = 7.0\cdot 10^{-11}$ m²/s, no liquid-side resistance. Flux and interface concentrations?
**A:** $J = 1.5\cdot 7.0\cdot 10^{-11}\cdot(30 - 5)/30\cdot 10^{-6} = 8.75\cdot 10^{-5}$ mol/(m²·s). Inside concentrations $1.5\cdot 30 = 45$ and $1.5\cdot 5 = 7.5$ mol/m³. [exercise_09_solutions.pdf, Problem 2] (solution blank, computed with eq. as in Problem 3)

**Q:** For molecular diffusion of ideal gases through a porous membrane, what is the H₂/CO₂ selectivity in terms of molar masses?
**A:** $\alpha = \sqrt{M_{CO_2}/M_{H_2}} = \sqrt{44/2} \approx 4.7$. [Week 9, p. 21; FormelarkKP3010.pdf, p. 9, eq. 92]

**Q:** Define retention, and what is the MWCO?
**A:** $R_i = (C_{R,i} - C_{P,i})/C_{R,i}$. The MWCO is the molecular weight at 90 % retention. [Week 9, p. 27]

## Sources
- [Week 9 - Membrane filtration with solutions.pdf, p. 15–27]
- [FormelarkKP3010.pdf, p. 8–9, eq. 87–95]
- [exercise_09_solutions.pdf, Problem 2]
- [practice_exam_solutions.pdf, Ex. 7b–c]
- [practice exam 2 solutions.pdf, Q7a–b]
