---
slug: 32-concentration-polarization
title: Concentration polarization and boundary-layer resistance
topic: membranes
exam_weight: medium
exam_weight_note: "Effect of a permeate-side boundary-layer resistance on interface concentrations and flux in Autumn 2022 Q7c (3 pts)"
builds_on: [15-film-model-mass-transfer, 31-membrane-flux-permeability-selectivity]
used_in: [33-membrane-modules-design]
sources: ["Week 9 - Membrane filtration with solutions.pdf", "FormelarkKP3010.pdf", "exercise_09_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** What happens to a fully retained solute near the membrane surface during filtration?
**A:** It accumulates at the interface. Its concentration there rises above the bulk value: concentration polarization. [Week 9, p. 28]

**Q:** A permeate-side boundary-layer resistance appears in a dense-membrane setup. What happens to the flux?
**A:** It decreases. The concentration gradient inside the membrane gets smaller. [practice exam 2 solutions.pdf, Q7c]

**Q:** In $c_m/c_b = \exp(J/k)$, what does k stand for?
**A:** The mass-transfer coefficient of the boundary layer, $k = D/\delta$. [Week 9, p. 29]

## Mental model
When liquid is pushed through a porous membrane, the solvent goes through but retained solutes are carried *to* the surface and can't leave. They pile up in a thin boundary layer until back-diffusion into the bulk balances the convective supply [Week 9, p. 28–29]. The steady state gives an exponential profile. The ratio of wall to bulk concentration is $\exp(J/k)$: convection (J) against diffusion (k = D/δ) [Week 9, p. 29–30]. Higher wall concentration means more solute leaks through (lower retention) and more resistance (lower flux). Sometimes the piled-up macromolecules form a "secondary membrane" that retains other solutes better [Week 9, p. 30]. Dense membranes show the same physics as resistances in series. The flux through the membrane must equal the flux through the boundary layer, so a slow boundary layer raises the concentration on the permeate face, flattens the gradient in the membrane and cuts the flux [Week 9, p. 34; exercise_09_solutions.pdf, Problem 3]. Gas-separation dense membranes are usually thick and slow enough that boundary layers don't matter [Week 9, p. 28].

## Concepts and definitions
- **When resistances matter**: dense membranes for gas separation usually show no mass-transfer resistance, because they are relatively thick and limit the flux. For liquids through porous membranes there are no concentration jumps at the interfaces, but gradients exist because the flux can be high, and retained solutes can accumulate at the interface. [Week 9, p. 28]
- **Steady-state mole balance (boundary layer)**: convective transport toward the membrane plus back-diffusion equals the permeate flux of the solute. [Week 9, p. 28–29]
- **Boundary conditions**: $c = c_m$ at the membrane (x = 0) and $c = c_b$ at the bulk edge of the layer (x = δ). [Week 9, p. 29]
- **Concentration polarization modulus**: $c_m/c_b$ for a fully retained solute (R = 1, $c_P = 0$). [Week 9, p. 30; FormelarkKP3010.pdf, p. 10, eq. 102]
- **Consequences**: retention can be lower (higher $c_m$). Retention of other solutes can be higher when macromolecules form a secondary membrane. Flux is lower (boundary-layer resistance). [Week 9, p. 30]
- **Mass-transfer coefficient k**: depends on the flow regime, module geometry and fluid properties, and comes from Sherwood correlations. [Week 9, p. 33]
- **Dense membrane with a transfer layer**: at steady state the flux through the membrane equals the flux through the mass-transfer layer. [Week 9, p. 34]

## Visuals
- **Polarization profile at a porous membrane** · curve sketch [Week 9, p. 28–29]
  - x-axis distance from the membrane (0 at the membrane, δ at the bulk edge), y-axis solute concentration. Exponential rise from $c_b$ (bulk) to $c_m$ (at the membrane). Permeate side at $c_P$.
  - Arrows: "J·c convection →" toward the membrane and "← $D\,dc/dx$ back-diffusion". Label the layer thickness δ.
- **Dense membrane + permeate boundary layer** · curve sketch [exercise_09_solutions.pdf, Problem 3; Week 9, p. 34]
  - Feed $c_F = 30$ mol/m³ → jump to $Kc_F = 45$ inside → linear drop across 30 µm to $c_{A,z=\delta} = 13.0$ → jump down to $c_{P,z=\delta} = 8.72$ → boundary-layer drop to the bulk permeate $c_P = 5.0$.
  - Overlay the no-resistance case (dashed): inside drop from 45 to 7.5. Annotate "boundary layer raises the permeate-face concentration → flatter gradient → lower flux".
- **Consequences of polarization** · table-as-picture [Week 9, p. 30]
  - Three tiles: "retention ↓ (higher $c_m$)", "secondary membrane → retention of others ↑", "flux ↓ (extra resistance)".
- **Sherwood correlations card** · table-as-picture [Week 9, p. 33]
  - Two columns: turbulent tube ($Sh = 0.023Re^{0.8}Sc^{0.25}$) and laminar tube ($Sh = 1.86Re^{0.33}Sc^{0.33}(D_h/L)^{0.33}$), with Re and Sc definitions.
- **Interactive plot**: polarization modulus $c_m/c_b = \exp(J/k)$ and the series-resistance flux $J = \dfrac{c_F - c_P}{\delta_M/(D K) + 1/k_P}$ [Week 9, p. 30–32; exercise_09_solutions.pdf, Problem 3].
  - Panel A sliders: J from 0 to 2·10⁻⁴ m³/(m²·s) (start 4.0·10⁻⁵) and k from 10⁻⁵ to 10⁻³ m/s (start 1.2·10⁻⁴), with $c_b$ = 30 mol/m³. Show $c_m$. At start values it must show $c_m/c_b = 1.40$ and $c_m = 41.9$ mol/m³.
  - Panel B slider: $k_P$ from 10⁻⁶ to 10⁻² m/s, log scale (start 2.0·10⁻⁵). Fixed $c_F = 30$, $c_P = 5$ mol/m³, $\delta_M$ = 30 µm, K = 1.5, D = 7.0·10⁻¹¹ m²/s. Show J. At start it must show 7.45·10⁻⁵ mol/(m²·s), approaching 8.75·10⁻⁵ as $k_P \to \infty$.

## Equations

### Boundary-layer mole balance and its solution
$$J c_i + D_i\frac{dc_i}{dx} = J c_{P,i} \;\Rightarrow\; \ln\frac{c_m - c_P}{c_b - c_P} = \frac{J\delta}{D_i} \;\Rightarrow\; \frac{c_m - c_P}{c_b - c_P} = \exp\left(\frac{J}{k}\right), \quad k = \frac{D}{\delta}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $J$ | volumetric permeate flux | m³/(m²·s) = m/s |
| $c_i$ | solute concentration in the boundary layer | mol/m³ |
| $c_m, c_b, c_P$ | concentration at the membrane, in the bulk, in the permeate | mol/m³ |
| $D_i$ | solute diffusivity | m²/s |
| $\delta$ | boundary-layer thickness | m |
| $k$ | boundary-layer mass-transfer coefficient | m/s |

Steady state. [Week 9, p. 28–29]

### Concentration polarization modulus
$$\frac{c_m}{c_b} = \exp\left(\frac{J}{k}\right)$$
Fully retained solute ($R = 1$, $c_P = 0$). [Week 9, p. 30; FormelarkKP3010.pdf, p. 10, eq. 102]

### Mass-transfer coefficient correlations (circular tube)
$$\text{turbulent: } Sh = \frac{kD_h}{D_{im}} = 0.023\,Re^{0.8}Sc^{0.25}; \qquad \text{laminar: } Sh = 1.86\,Re^{0.33}Sc^{0.33}\left(\frac{D_h}{L}\right)^{0.33}; \qquad Re = \frac{\rho vD_h}{\eta},\; Sc = \frac{\eta}{\rho D_{im}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $Sh, Re, Sc$ | Sherwood, Reynolds, Schmidt numbers | – |
| $D_h$ | hydraulic (tube) diameter | m |
| $L$ | tube length | m |
| $v$ | flow velocity | m/s |
| $\eta$ | viscosity | Pa·s |

[Week 9, p. 33]

### Dense membrane with a permeate-side boundary layer
$$J_A = \frac{D_A}{\delta_M}(c_{A,z=0} - c_{A,z=\delta}) = k_P(c_{P,z=\delta} - c_P), \quad c_{A,z=0} = K_Ac_F,\; c_{A,z=\delta} = K_Ac_{P,z=\delta} \;\Rightarrow\; J_A = \frac{c_F - c_P}{\dfrac{\delta_M}{D_AK_A} + \dfrac{1}{k_P}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $k_P$ | permeate-side mass-transfer coefficient | m/s |
| $c_{P,z=\delta}$ | permeate concentration right outside the membrane | mol/m³ |
| $c_{A,z=\delta}$ | concentration inside the membrane at the permeate face | mol/m³ |

Steady state: equal fluxes in series. [Week 9, p. 34; exercise_09_solutions.pdf, Problem 3]

## Worked example
**Dense membrane with a permeate-side resistance** [exercise_09_solutions.pdf, Problem 3]
$c_F = 0.030$ kmol/m³, $c_P = 0.0050$ kmol/m³, $\delta_M = 30$ µm, $K_A = 1.5$, $D_A = 7.0\cdot 10^{-11}$ m²/s, $k_P = 2\cdot 10^{-5}$ m/s.
1. No accumulation at the interface, so the membrane flux equals the boundary-layer flux.
2. Membrane: $J_A = \frac{D_A}{\delta_M}(K_Ac_F - K_Ac_{P,z=\delta})$. Layer: $J_A = k_P(c_{P,z=\delta} - c_P)$, so $c_{P,z=\delta} = J_A/k_P + c_P$.
3. Eliminate $c_{P,z=\delta}$: $J_A = \dfrac{c_F - c_P}{\delta_M/(D_AK_A) + 1/k_P}$.
4. Insert (mol/m³): $J_A = \dfrac{30 - 5}{\frac{3\cdot 10^{-5}}{7\cdot 10^{-11}\cdot 1.5} + \frac{1}{2\cdot 10^{-5}}} = 7.45\cdot 10^{-5}$ mol/(m²·s).
5. Outside the membrane, permeate side: $c_{P,z=\delta} = 7.45\cdot 10^{-5}/2\cdot 10^{-5} + 5 = 8.72$ mol/m³.
6. Inside the membrane, permeate face: $c_{A,z=\delta} = 1.5\cdot 8.72 = 13.0$ mol/m³.
7. Compare with no resistance (Problem 2): flux $8.75\cdot 10^{-5}$ and inside face $7.5$ mol/m³. The boundary layer cuts the flux by about 15 %.

## Faded example
**Wall concentration of a fully retained solute** [Week 9, p. 31–32]
B fully retained (R = 1). Feed $c_b = 30$ mol/m³, $k = 1.2\cdot 10^{-4}$ m/s, flux $J = 4.0\cdot 10^{-5}$ m³/(m²·s).
1. **(try)** Which equation applies, and why? → $c_m/c_b = \exp(J/k)$, because R = 1 and $c_P = 0$.
2. **(try)** $J/k$. → $4.0\cdot 10^{-5}/1.2\cdot 10^{-4} = 0.333$.
3. **(try)** Modulus. → $\exp(0.333) = 1.40$.
4. **(try)** Wall concentration. → $c_m = 1.40\cdot 30 = 41.9$ mol/m³.

[Week 9, p. 32]

## Exam traps
- **Which interface concentration changes**: with a permeate-side boundary layer, the feed-side inside concentration ($Kc_F$) is unchanged. The permeate-side inside concentration *increases*, the gradient in the membrane gets smaller, and the flux drops. That is the full 3-point answer. [practice exam 2 solutions.pdf, Q7c]
- **The modulus formula needs R = 1 and $c_P = 0$**: otherwise use $(c_m - c_P)/(c_b - c_P) = \exp(J/k)$. [Week 9, p. 29–30]
- **J here is a volumetric flux**: m³/(m²·s) = m/s, so J/k is dimensionless. [Week 9, p. 31]
- **Resistances add in series**: $\delta_M/(DK) + 1/k_P$. Don't add the fluxes. [exercise_09_solutions.pdf, Problem 3]
- **Gas-separation dense membranes**: usually no boundary-layer resistance, so don't add one unless the task says so. [Week 9, p. 28; practice exam 2 solutions.pdf, Q7a–b]
- **Polarization can raise or lower retention**: it lowers retention of the polarized solute, but a secondary membrane can raise retention of others. [Week 9, p. 30]
- **Turbulent Sh uses $Sc^{0.25}$ here**, and laminar includes $(D_h/L)^{0.33}$. Use the slide's exponents. [Week 9, p. 33]

## Past exam tasks
- Autumn 2022, Q7c: effect of a product-side boundary-layer resistance on the membrane interface concentrations and the solute flux.

## Test yourself
**Q:** Derive $(c_m - c_P)/(c_b - c_P) = \exp(J/k)$ in one line.
**A:** Integrate $Jc + D\,dc/dx = Jc_P$ from x = 0 ($c_m$) to x = δ ($c_b$): $\ln\frac{c_m - c_P}{c_b - c_P} = J\delta/D = J/k$. [Week 9, p. 29]

**Q:** Name three consequences of concentration polarization.
**A:** Lower retention (higher $c_m$), possibly higher retention of other solutes (secondary membrane), lower flux. [Week 9, p. 30]

**Q:** With $k_P \to \infty$, what flux does the Problem 3 membrane give?
**A:** $J = K D(c_F - c_P)/\delta_M = 1.5\cdot 7\cdot 10^{-11}\cdot 25/3\cdot 10^{-5} = 8.75\cdot 10^{-5}$ mol/(m²·s). [exercise_09_solutions.pdf, Problems 2–3]

**Q:** Why do dense gas-separation membranes usually show no boundary-layer resistance?
**A:** They are relatively thick and limit the flux themselves. [Week 9, p. 28]

**Q:** If J doubles at constant k in the faded example, what is $c_m$?
**A:** $\exp(0.667) = 1.95$, so $c_m = 58.4$ mol/m³. [Week 9, p. 30–32]

## Sources
- [Week 9 - Membrane filtration with solutions.pdf, p. 28–34]
- [FormelarkKP3010.pdf, p. 10, eq. 102]
- [exercise_09_solutions.pdf, Problems 2–3]
- [practice exam 2 solutions.pdf, Q7a–c]

> GAP: No numerical Sherwood-correlation example in the files. The correlations are given without a worked case.
