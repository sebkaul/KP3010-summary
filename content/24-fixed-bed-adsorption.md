---
slug: 24-fixed-bed-adsorption
title: Adsorption kinetics and fixed-bed adsorption
topic: adsorption
exam_weight: high
exam_weight_note: "Bed sizing / saturation time on 2 of 2 practice exams (Practice exam 1 Ex. 5b; Autumn 2022 Q5a, Q5c — 5 of 7 pts)"
builds_on: [22-adsorbents-properties, 23-adsorption-isotherms]
used_in: [25-adsorption-cycles-ion-exchange]
sources: ["Week 7 - Adsorption and ion-exchange with solutions.pdf", "FormelarkKP3010.pdf", "exercise_07_eng.pdf", "practice exam 2 solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** Name the three conditions for ideal fixed-bed adsorption.
**A:** Small mass-transfer resistances, plug flow (no axial dispersion), and an adsorbent that starts free of adsorbate. [Week 7, p. 27]

**Q:** Is a Langmuir (type I) isotherm favourable or unfavourable for a fixed bed?
**A:** Favourable. Its slope dq/dc is lower at high concentration, so those points move faster and the front compresses, giving better bed use. [practice exam 2 solutions.pdf, Q5a; Week 7, p. 33]

**Q:** What is the difference between useful capacity and total capacity?
**A:** Useful capacity is integrated up to the breakthrough time $t_{bp}$. Total capacity is integrated up to saturation $t_s$ (or ∞). [Week 7, p. 30; FormelarkKP3010.pdf, p. 7, eq. 69–70]

## Mental model
Getting onto a site takes four steps: from the fluid to the particle, into the pores, along the surface, then binding. Any of them can be slow. Regeneration runs them in reverse [Week 7, p. 25]. In an ideal bed, all of that is instant and the flow is plug flow. The adsorbate then fills the bed as a sharp shock front, like water filling a tube, and nothing leaves until the bed is full. Sizing is just "how much the bed holds / how much arrives per hour" [Week 7, p. 27–29]. Real beds smear the front into an S-shaped mass-transfer zone, so breakthrough comes before full saturation. That's why useful capacity is less than total capacity [Week 7, p. 30]. The equilibrium model says each concentration travels at a speed set by the isotherm slope: a steep slope (the bed soaks up a lot per unit c) means slow travel [Week 7, p. 31–32]. With a favourable isotherm, high concentrations have the shallower slope, run faster and catch up with the low ones, keeping the front sharp. An unfavourable isotherm does the opposite [Week 7, p. 33].

## Concepts and definitions
- **Four adsorption steps**: (1) external mass transfer, (2) internal mass transfer (pore diffusion), (3) surface diffusion, (4) adsorption. Steps 3–4 happen at all active sites but are most prominent in the smaller pores (high area). Regeneration runs in the opposite order. [Week 7, p. 25]
- **Equilibrium vs kinetic selectivity**: mass-transfer rate is irrelevant for equilibrium selectivity. Kinetic selectivity comes from rates, e.g. small pores can slow N₂ transfer compared with O₂. [Week 7, p. 26]
- **Ideal fixed-bed adsorption**: instantaneous equilibrium, a shock wave (stoichiometric front). Ideal when mass-transfer resistances are small, flow is plug flow (no axial dispersion) and the adsorbent starts free of adsorbate. Breakthrough happens when the bed is full. [Week 7, p. 27]
- **Non-ideal bed**: mass-transfer resistances and axial dispersion give a mass-transfer zone (MTZ) with an S-shaped front that moves through the bed. Characterised by the breakthrough time $t_{bp}$ and saturation time $t_s$. Curve steepness affects usable capacity. [Week 7, p. 30]
- **Useful capacity $Q_{uc}$ and total capacity $Q_{tot}$**: solute taken up until breakthrough and until saturation, respectively. [Week 7, p. 30; FormelarkKP3010.pdf, p. 7, eq. 69–70]
- **Equilibrium model**: equilibrium at every point in the bed. A balance on a slice (accumulation in voids + adsorption = in − out) gives the propagation velocity of each concentration. [Week 7, p. 31]
- **Concentration propagation velocity $v_c$**: depends on the isotherm slope dq/dc. For a linear isotherm the slope is constant, so all concentrations travel at the same speed. [Week 7, p. 32]
- **Unfavourable isotherm**: dispersive front, less capacity used in the bed. [Week 7, p. 33]
- **Favourable isotherm**: compressive (shock-wave) front, full capacity used. [Week 7, p. 33]
- **Bed saturation balance**: time × flow × feed concentration = adsorbent mass × equilibrium loading, $tQC = Wq$. [practice_exam_solutions.pdf, Ex. 5b]

## Visuals
- **Four kinetic steps** · cross-section [Week 7, p. 25]
  - A porous particle with a film around it. Numbered arrows: 1 bulk → film (external mass transfer), 2 into a pore (pore diffusion), 3 along the pore wall (surface diffusion), 4 onto a site (adsorption). Note "regeneration: 4 → 1".
- **Ideal front vs mass-transfer zone** · curve sketch, 2 panels [Week 7, p. 27, 30]
  - Panel A, concentration profile along the bed: x-axis bed position z, y-axis $c/c_F$. A vertical step (ideal shock front) and an S-curve (MTZ), both moving right at successive times.
  - Panel B, breakthrough curve at the outlet: x-axis time, y-axis $c_{out}/c_F$. Ideal: vertical jump at $t_s$. Real: S-curve with $t_{bp}$ (first breakthrough) and $t_s$ (saturation) marked.
  - Shade the area above the curve up to $t_{bp}$ as "$Q_{uc}$" and up to $t_s$ as "$Q_{tot}$".
- **Isotherm shape → front shape** · curve sketch, 3 × 2 panels [Week 7, p. 32–33; practice exam 2 solutions.pdf, Q5a]
  - Row 1: isotherms q vs c, (a) unfavourable (convex up), (b) linear, (c) favourable (Langmuir).
  - Row 2: matching fronts in the bed, (a) spreading (dispersive), (b) constant shape, (c) sharpening (compressive, shock).
  - Annotate (c): "low dq/dc at high c → high c moves faster → front compresses".
- **Equilibrium-model control volume** · cross-section [Week 7, p. 31]
  - A bed slice of length Δz and area A with Q·c in and Q·(c + Δc) out. Inside, void fraction $\epsilon_b$ (accumulation in the fluid) and solid $(1-\epsilon_b)\rho_{part}$ (adsorption Δq).
- **Interactive plot**: relative front speed for a Langmuir isotherm, $\frac{v_c(c)}{v_c(0)} = (1 + bc)^2$ (from $v_c \propto 1/(dq/dc)$ with $dq/dc = q_{max}b/(1+bc)^2$, $\epsilon_b$ neglected) [Week 7, p. 32; FormelarkKP3010.pdf, p. 7, eq. 72].
  - Slider: b from 0 to 1 m³/mol (start 0.20 [practice exam 2 solutions.pdf, Q5b]). Plot $v_c(c)/v_c(0)$ for c from 0 to 10 mol/m³.
  - Show "front compresses" whenever the curve rises with c, and "linear: all c move together" at b = 0.

## Equations

### Capacities
$$Q_{tot} = \int_0^\infty Q(c_F - c_{out})\,dt, \qquad Q_{uc} = \int_0^{t_{bp}} Q(c_F - c_{out})\,dt$$
| Symbol | Meaning | Unit |
|---|---|---|
| $Q_{tot}$ | total capacity (amount adsorbed until saturation) | mol (or kg) |
| $Q_{uc}$ | useful capacity (until breakthrough) | mol |
| $Q$ | volumetric flow | m³/h |
| $c_F, c_{out}$ | feed and outlet concentration | mol/m³ |
| $t_{bp}$ | breakthrough time | h |

The slide's rectangular form is $Q_{uc} = t_{bp}Q(c_F - c_{out})$ and $Q_{tot} = t_sQ(c_F - c_{out})$. [Week 7, p. 30; FormelarkKP3010.pdf, p. 7, eq. 69–70]

### Ideal-bed saturation balance
$$t\,Q\,C = W\,q$$
| Symbol | Meaning | Unit |
|---|---|---|
| $t$ | time to saturation (= breakthrough for an ideal bed) | h |
| $C$ | feed concentration | g/m³ (or mol/m³) |
| $W$ | adsorbent mass | kg |
| $q$ | equilibrium loading at the feed concentration | g/kg (or mol/kg) |

Whole-bed mass balance, ideal front. [practice_exam_solutions.pdf, Ex. 5b; practice exam 2 solutions.pdf, Q5c]

### Equilibrium-model slice balance
$$\epsilon_b\frac{dc}{dt} + (1-\epsilon_b)\rho_{part}\frac{dq}{dt} = -\frac{Q}{A}\frac{dc}{dz}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\epsilon_b$ | bed void fraction | – |
| $\rho_{part}$ | particle density | kg/m³ |
| $A$ | bed cross-section | m² |
| $z$ | bed position | m |

[Week 7, p. 31]

### Concentration propagation velocity
$$v_c = \left.\frac{dz}{dt}\right|_c = \frac{u_{carrier}}{\epsilon_b + (1-\epsilon_b)\rho_{part}\left.\frac{dq}{dc}\right|_c} \;\approx\; \frac{u_{carrier}}{(1-\epsilon_b)\rho_{part}\left.\frac{dq}{dc}\right|_c}, \qquad u_{carrier} = \frac{Q}{A}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $v_c$ | speed at which concentration c moves through the bed | m/s |
| $u_{carrier}$ | superficial carrier velocity | m/s |
| $dq/dc$ | isotherm slope at c | m³/kg |

The approximation holds because $\epsilon_b \ll (1-\epsilon_b)\rho_{part}\,dq/dc$ usually. [Week 7, p. 31–32; FormelarkKP3010.pdf, p. 7, eq. 71–72]

## Worked example
**Adsorbent needed for 30 min of flue-gas treatment** [practice exam 2 solutions.pdf, Q5c]
Inert flue gas 50 m³/h at 300 K and 1 bar, 10 vol % pollutant A. Langmuir: $q_{max} = 1.30$ mol/kg, $b_A = 0.20$ m³/mol. The bed must last 30 min. Assume the whole bed is saturated at breakpoint.
1. Total molar flow: $\dot n = \dot V\frac{P}{RT} = 50\cdot\frac{10^5}{8.314\cdot 300} = 2004.7$ mol/h.
2. Total concentration: $c = \dot n/\dot V = 2004.7/50 = 40.1$ mol/m³, so $c_A = 0.10\cdot 40.1 = 4.0$ mol/m³.
3. Loading at the feed concentration: $q = 1.30\cdot\frac{0.2\cdot 4.0}{1 + 0.2\cdot 4.0} = 0.58$ mol A/kg.
4. A fed in 30 min: $50\cdot 4.0\cdot 0.5 = 100$ mol.
5. Adsorbent: $100/0.58 = 170.1$ kg.

## Faded example
**Silica-gel dryer: time before regeneration** [Week 7, p. 28–29]
Gas 10 kmol/h at 50 °C with 6 mol % water (50 % RH). Bed of 50 kg silica gel. At these conditions silica gel holds 0.28 kg water per kg (from the slide's isotherm).
1. **(try)** Bed capacity. → $50\cdot 0.28 = 14$ kg water.
2. **(try)** Water molar flow. → $10\cdot 0.06 = 0.6$ kmol/h.
3. **(try)** Water mass flow. → $0.6\cdot 18.016 = 10.8$ kg/h.
4. **(try)** Time to saturation (ideal bed). → $14/10.8 = 1.3$ h.

[Week 7, p. 29]

## Exam traps
- **Use q at the feed concentration, not $q_{max}$**: the bed saturates to equilibrium with $c_F$ (0.58, not 1.30 mol/kg). [practice exam 2 solutions.pdf, Q5c]
- **Convert vol % to mol/m³**: via the ideal gas law ($c = P/RT$) and the vol % (= mol %). [practice exam 2 solutions.pdf, Q5c]
- **Favourable explanation needs the slope argument**: "dq/dc lower at high c → those points move faster → compressive front → better bed use". Just saying "Langmuir" isn't enough for full marks. [practice exam 2 solutions.pdf, Q5a]
- **Steeper isotherm means a slower front**: $v_c \propto 1/(dq/dc)$. Don't invert it. [Week 7, p. 32]
- **Ideal vs real breakthrough**: ideal means the whole bed is used at breakthrough. Real beds have an MTZ, so $Q_{uc} < Q_{tot}$. Use $t_{bp}$ for design. [Week 7, p. 27, 30]
- **Time units**: 30 min = 0.5 h when Q is in m³/h. [practice exam 2 solutions.pdf, Q5c]
- **Linear-isotherm velocity ratio**: with $dq/dc = \Delta q/\Delta c$, the ratio of front speeds is the inverse ratio of slopes. [exercise_07_eng.pdf, Problem 1c]

## Past exam tasks
- Practice exam 1, Ex. 5b: saturation time of a wastewater adsorber, $t = Wq/(QC) = 500$ h.
- Autumn 2022, Q5a: is the Langmuir type I isotherm favourable or unfavourable? Explain.
- Autumn 2022, Q5c: mass of adsorbent for 30 min of operation (170.1 kg).

## Test yourself
**Q:** Wastewater 10 m³/h with 0.4 g/m³ contaminant. Adsorbent capacity 1 kg/kg, 2 kg in the column. Time to saturation?
**A:** $t = Wq/(QC) = 2\cdot 1000\ \text{g}/(10\cdot 0.4\ \text{g/h}) = 500$ h. [practice_exam_solutions.pdf, Ex. 5b]

**Q:** Acetone (0.75 mol/kg at 40 mol/m³) and propionitrile (0.58 mol/kg at 34 mol/m³), linear isotherms assumed. Ratio of front velocities $v_1/v_2$?
**A:** $v \propto 1/(\Delta q/\Delta c)$, so $v_1/v_2 = (0.58/34)/(0.75/40) = 0.91$. [exercise_07_eng.pdf, Problem 1c and short answer]

**Q:** List the four kinetic steps of adsorption in order.
**A:** External mass transfer, pore diffusion, surface diffusion, adsorption. [Week 7, p. 25]

**Q:** Why does an unfavourable isotherm waste bed capacity?
**A:** It gives a dispersive front: breakthrough starts early while much of the bed is still unsaturated. [Week 7, p. 33]

**Q:** What is kinetic selectivity? Give the course example.
**A:** Selectivity from different mass-transfer rates rather than equilibrium. Small pores can slow N₂ compared with O₂. [Week 7, p. 26]

## Sources
- [Week 7 - Adsorption and ion-exchange with solutions.pdf, p. 25–35]
- [FormelarkKP3010.pdf, p. 7, eq. 69–72]
- [exercise_07_eng.pdf, Problem 1c and short answers]
- [practice exam 2 solutions.pdf, Q5a, Q5c]
- [practice_exam_solutions.pdf, Ex. 5b]

> GAP: The exit-response example (Week 7, p. 34–35, cases A–C) is image-only, so its cases and answers can't be extracted.
> GAP: The silica-gel isotherm behind the 0.28 kg/kg capacity (Week 7, p. 28–29) is an image. Only the value is used.
