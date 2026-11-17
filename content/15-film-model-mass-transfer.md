---
slug: 15-film-model-mass-transfer
title: Film model and mass transfer coefficients
topic: mass-transfer
exam_weight: low
exam_weight_note: "Not on either practice exam; k_OV feeds the HTU calculation on page 16 (exercise 5)"
builds_on: [08-absorption-principles-henrys-law]
used_in: [16-htu-ntu-packed-columns, 32-concentration-polarization]
sources: ["Week 5 - Efficiency and mass transfer with solutions.pdf", "FormelarkKP3010.pdf"]
---

## Pretest
**Q:** At the gas–liquid interface, are the two phases at equilibrium?
**A:** Yes. Transfer at the interface is taken as instantaneous, so the interface compositions are in equilibrium. [Week 5, p. 3]

**Q:** What kind of transport happens inside the film in the film model?
**A:** Only diffusion, through a thin laminar layer. The bulk has no gradient. [Week 5, p. 5]

**Q:** Why go beyond HETP = 18·d_p?
**A:** It's only an approximation. A mass-transfer model is more accurate when the HETP isn't known. [Week 5, p. 2]

## Mental model
Absorption moves a component across an interface. Getting there means convection plus diffusion on both sides, which is hard to solve exactly [Week 5, p. 3–4]. The film model simplifies this. Picture a thin stagnant laminar layer on each side of the interface where only diffusion happens, with well-mixed bulk beyond it [Week 5, p. 5]. Then the flux on each side is a coefficient times a composition difference ($k_V = D/\delta$), like current = conductance × voltage [Week 5, p. 6]. The interface is at equilibrium, $y_{Ai} = Kx_{Ai}$, so you can eliminate the unknown interface compositions and add the two "resistances" in series. That gives one overall coefficient $k_{OV}$ and a driving force $y_A - Kx_A$ that uses only bulk compositions [Week 5, p. 7–8]. Whichever side has the larger resistance (small k, or large m on the liquid side) controls the rate. It doesn't matter if the interface is curved, because zoomed in it's flat [Week 5, p. 10].

## Concepts and definitions
- **Interface**: separates the two phases. Transfer at the interface is instantaneous, so liquid and gas at the interface are at equilibrium. [Week 5, p. 3]
- **Transport to/from the interface**: a combination of convective and diffusive transport. At steady state the molar flows to and from the interface are equal. [Week 5, p. 3–4]
- **Film model**: a thin laminar layer on both sides of the interface with only diffusive transport, and no gradient in the bulk. [Week 5, p. 5]
- **Gas-side mass transfer coefficient**: $k_V = D_{AB}^V/\delta_V$, film diffusivity over film thickness. [Week 5, p. 6]
- **Liquid-side mass transfer coefficient $k_L$**: same approach for the liquid phase. [Week 5, p. 6]
- **Overall mass transfer coefficient $k_{OV}$**: combines both films, referred to the gas phase (m/s). [Week 5, p. 8]
- **Volumetric distribution coefficient $m$**: $m = K\rho_V/\rho_L$, with molar densities. [Week 5, p. 8]
- **Molar density $\rho$**: in mol/m³, not kg/m³. [Week 5, p. 4, 8]
- **Interface shape**: the film model isn't limited to flat interfaces, because zoomed in any interface approaches a flat surface. [Week 5, p. 10]

## Visuals
- **Two-film concentration profile** · curve sketch [Week 5, p. 5–7]
  - x-axis: position z across the interface, gas bulk on the left and liquid bulk on the right. Two shaded strips, gas film of thickness $\delta_V$ and liquid film of thickness $\delta_L$, with the interface between them.
  - Gas side: flat at $y_A$ in the bulk, linear drop to $y_{Ai}$ across $\delta_V$. Liquid side: linear drop from $x_{Ai}$ to $x_A$ across $\delta_L$, flat in the bulk. At the interface a tag "$y_{Ai} = Kx_{Ai}$". A flux arrow $\Phi_A$ points from gas to liquid.
- **Resistances in series** · process diagram [Week 5, p. 8]
  - Two resistors in series between "$y_A$" and "$Kx_A$": gas film $1/k_V$ and liquid film $m/k_L$. Total $1/k_{OV} = 1/k_V + m/k_L$, which is the slide's $k_{OV}$ formula inverted.
  - Aquarium numbers [Week 5, p. 12]: $1/k_V = 100$ s/m and $m/k_L = 37.4/0.005 = 7480$ s/m. Show the liquid film as the dominant (≈ 99 %) resistance.
- **Bubble zoom** · cross-section [Week 5, p. 10]
  - A gas bubble in liquid, magnified twice. At the final zoom the curved interface looks flat with two films. Caption: "film model works for any shape".
- **Interactive plot**: $k_{OV} = \dfrac{k_V}{1 + m\,k_V/k_L}$ [Week 5, p. 8, 12].
  - Slider: $m$ from 0.01 to 1000, log scale (start 37.4). Fixed $k_V = 0.01$ m/s and $k_L = 0.005$ m/s.
  - Show $k_{OV}$ live and a stacked bar of the gas vs liquid share of the total resistance. At m = 37.4 it must show $k_{OV} = 1.32\cdot 10^{-4}$ m/s.

## Equations

### Fick's law across the gas film
$$\Phi_A = -D_{AB}^V A_Z \rho_V \frac{dy_A}{dz}, \qquad \frac{dy_A}{dz} = \frac{y_{Ai} - y_A}{\delta_V}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\Phi_A$ | molar flow of A through the film | mol/s |
| $D_{AB}^V$ | diffusivity of A in the gas | m²/s |
| $A_Z$ | interfacial area | m² |
| $\rho_V$ | molar density of the gas | mol/m³ |
| $\delta_V$ | gas film thickness | m |

Linear profile in a stagnant film. [Week 5, p. 5]

### Single-film fluxes
$$\Phi_A = k_V A\,\rho_V (y_A - y_{Ai}), \qquad \Phi_A = k_L A\,\rho_L (x_{Ai} - x_A), \qquad k_V = \frac{D_{AB}^V}{\delta_V}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $k_V, k_L$ | gas- and liquid-side mass transfer coefficients | m/s |
| $A$ | interfacial area ($A_Z$ or $A_{LV}$) | m² |
| $\rho_L$ | molar density of the liquid | mol/m³ |
| $y_{Ai}, x_{Ai}$ | interface compositions | – |

[Week 5, p. 6; FormelarkKP3010.pdf, p. 5, eq. 43–44]

### Interface equilibrium
$$y_{Ai} = K x_{Ai}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $K$ | equilibrium constant (Henry, $y = Kx$) | – |

[Week 5, p. 7]

### Overall flux and overall coefficient
$$\Phi_A = k_{OV} A_{LV} \rho_V (y_A - K x_A), \qquad k_{OV} = \frac{k_V}{1 + \dfrac{k_V}{k_L}\cdot K\dfrac{\rho_V}{\rho_L}} = \frac{k_V}{1 + m\dfrac{k_V}{k_L}}, \qquad m = K\frac{\rho_V}{\rho_L}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $k_{OV}$ | overall mass transfer coefficient (gas basis) | m/s |
| $m$ | volumetric distribution coefficient | – |
| $y_A - Kx_A$ | overall driving force (bulk gas vs gas in equilibrium with bulk liquid) | – |

Derived by adding $y_A - y_{Ai}$ and $y_{Ai} - Kx_A$ to eliminate the interface terms. [Week 5, p. 7–9; FormelarkKP3010.pdf, p. 5, eq. 45–46]

## Worked example
**Oxygen transfer in an aquarium** [Week 5, p. 11–12]
Air bubbled through water. $x_{O_2} = 10^{-6}$ is held constant. Interfacial area 145 m², $k_L = 5\cdot 10^{-3}$ m/s, $k_V = 1\cdot 10^{-2}$ m/s, $\rho_L = 997$ kg/m³, $\rho_V = 1.2$ kg/m³, $y = 5\cdot 10^4 x$. Bulk gas composition constant ($y_{O_2} = 0.21$).
1. Liquid molar density: $\rho_L = 997/0.018 = 5.5\cdot 10^4$ mol/m³.
2. Gas molar density: $\rho_V = 1.20/0.029 = 41.4$ mol/m³.
3. Volumetric distribution coefficient: $m = \dfrac{K\rho_V}{\rho_L} = \dfrac{5\cdot 10^4\cdot 41.4}{5.5\cdot 10^4} = 37.4$.
4. Overall coefficient: $k_{OV} = \dfrac{0.01}{1 + \frac{37.4\cdot 0.01}{0.005}} = 1.32\cdot 10^{-4}$ m/s.
5. Driving force: $y_A - Kx_A = 0.21 - 5\cdot 10^4\cdot 10^{-6} = 0.16$.
6. Flux: $\Phi_A = 1.32\cdot 10^{-4}\cdot 145\cdot 41.4\cdot 0.16 = 0.127$ mol O₂/s.

## Faded example
> GAP: no second film-model example in the files. The lectures, exercise 5 and the practice exams only use $k_{OV}$ as a given input (page 16).

## Exam traps
- **Molar densities**: $\rho_V$ and $\rho_L$ must be in mol/m³. Using kg/m³ gives a wrong $m$ (it is 37.4 with molar densities). [Week 5, p. 8, 12]
- **Driving force is $y_A - Kx_A$, not $y_A - x_A$**: the liquid is converted to its equilibrium gas composition with K. [Week 5, p. 8]
- **$m$ ≠ K**: $m = K\rho_V/\rho_L$. For O₂ in water K = 5·10⁴ but m = 37.4. [Week 5, p. 12]
- **The interface compositions are unknown**: you don't need them. The overall form eliminates $y_{Ai}$ and $x_{Ai}$ through the equilibrium. [Week 5, p. 7–8]
- **$k_{OV}$ is gas-based**: it pairs with $\rho_V$ and the gas-phase driving force in $\Phi_A$. [Week 5, p. 8; FormelarkKP3010.pdf, p. 5, eq. 45]
- **A poorly soluble gas is liquid-film controlled**: with large K (hence large m), the $m k_V/k_L$ term dominates and $k_{OV} \ll k_V$ ($1.32\cdot 10^{-4}$ vs $10^{-2}$ m/s). [Week 5, p. 12]
- **Notation**: the slides write the interfacial area as $A_Z$ in one place and $A_{LV}$ in another. It's the same quantity. [Week 5, p. 6, 8]

## Past exam tasks
- None on either practice exam. The film-model result ($k_{OV}$) is used on page 16 (exercise 5, Oppg. 3).

## Test yourself
**Q:** State the two assumptions of the film model.
**A:** A thin laminar layer on each side of the interface with only diffusive transport, and no gradient in the bulk. [Week 5, p. 5]

**Q:** Write $k_V$ in terms of film properties.
**A:** $k_V = D_{AB}^V/\delta_V$. [Week 5, p. 6]

**Q:** Convert $\rho_V = 1.2$ kg/m³ (air, M = 0.029 kg/mol) to molar density.
**A:** $1.2/0.029 = 41.4$ mol/m³. [Week 5, p. 12]

**Q:** In the aquarium, $k_L$ is doubled to 0.01 m/s. What is the new $k_{OV}$, and roughly what happens to the O₂ transfer?
**A:** $k_{OV} = 0.01/(1 + 37.4) = 2.6\cdot 10^{-4}$ m/s, about double, so $\Phi_A \approx 0.25$ mol/s. [Week 5, p. 8, 12]

**Q:** Why can the film model be used for bubbles even though their interface is curved?
**A:** Zoomed in, the interface approaches a flat surface. [Week 5, p. 10]

## Sources
- [Week 5 - Efficiency and mass transfer with solutions.pdf, p. 2–12]
- [FormelarkKP3010.pdf, p. 5, eq. 43–46]

> GAP: Week 5, p. 4 (full convection–diffusion balance) is an image. Only the note "ρ is the molar density" is extractable.
