---
slug: 29-nucleation-growth-crystallizers
title: Nucleation (CNT), crystal growth and crystallizer operation
topic: crystallization
exam_weight: low
exam_weight_note: "Not asked on either practice exam; CNT rate equations are on the formula sheet"
builds_on: [26-crystallization-fundamentals, 28-supersaturation-metastable-zone]
used_in: []
sources: ["Week 8 - Crystallization and precipitation with solutions.pdf", "FormelarkKP3010.pdf"]
---

## Pretest
**Q:** Which type of nucleation does classical nucleation theory describe?
**A:** Homogeneous primary nucleation. [Week 8, p. 29]

**Q:** At low supersaturation, which is faster: homogeneous or heterogeneous nucleation?
**A:** Heterogeneous. [Week 8, p. 29]

**Q:** Where on a crystal surface does growth happen most easily?
**A:** At dislocations and defects, and corners are preferred spots, rather than flat surfaces. [Week 8, p. 33]

## Mental model
A tiny cluster of solute molecules is in a tug-of-war. Turning dissolved solute into solid releases free energy in proportion to the cluster's volume ($r^3$), which is favourable when supersaturated, $\Delta\mu = RT\ln S$. But every cluster also creates a solid–liquid surface that costs energy in proportion to $r^2$ [Week 8, p. 30]. Small clusters are surface-dominated and tend to fall apart. Once a cluster passes the top of the energy barrier, it is volume-dominated and grows on its own [Week 8, p. 30]. The barrier $W^*$ shrinks rapidly as S rises ($\ln^2 S$ in the exponent), so the nucleation rate switches on sharply [FormelarkKP3010.pdf, p. 8, eq. 84]. Foreign surfaces and existing crystals lower the effective surface cost, which is why heterogeneous and secondary nucleation dominate at low supersaturation [Week 8, p. 29]. After nucleation, crystals grow by mass transfer to the surface and incorporation into the lattice, fastest at defects and corners [Week 8, p. 31–33]. At plant scale: continuous for large volumes, batch when scaling or batch-wise flexibility matter, and multiple evaporation stages to save energy [Week 8, p. 34–35].

## Concepts and definitions
- **Primary nucleation, homogeneous**: in the bulk liquid with no foreign bodies (impurities, vessel walls). [Week 8, p. 29]
- **Primary nucleation, heterogeneous**: on impurity surfaces. [Week 8, p. 29]
- **Secondary nucleation**: heterogeneous nucleation on existing crystals. Especially at lower supersaturation, heterogeneous nucleation is quicker than homogeneous. [Week 8, p. 29]
- **Classical nucleation theory (CNT)**: describes homogeneous primary nucleation as a competition between surface and volume formation in a prenucleation cluster. Solid formation is thermodynamically favoured at supersaturation ($\Delta\mu = RT\ln S$), while a growing cluster adds unfavourable solute–solvent surface. For larger crystals the surface term matters less. [Week 8, p. 29–30]
- **Kinetics vs thermodynamics**: phase diagrams say which phases are favoured at equilibrium. Kinetics (driven by supersaturation) say how and how fast equilibrium is reached. [Week 8, p. 31]
- **Steps to form a crystal**: (1) nucleation, (2) mass transfer to the crystal surface, (3) incorporation into the lattice. [Week 8, p. 31]
- **Growth mass transfer, detailed**: (1) bulk diffusion through the film, (2) diffusion of dissolved solute in the layer, (3) partial or total desolvation, (4) surface diffusion of solute units, (5) incorporation into the lattice, (6) counter-diffusion of solvent. Simplified to (1) bulk diffusion through the film and (2) incorporation into the lattice. [Week 8, p. 32]
- **Defining crystal growth**: linear advance rate of a single face, change in a characteristic dimension (diameter), or change in the total mass of a crystal. [Week 8, p. 33]
- **Growth sites**: faster at dislocations and defects than at flat surfaces. Forming extra surface area is unfavourable (minimum surface area is favourable), so corners are preferred spots. [Week 8, p. 33]
- **Batch vs continuous**: continuous is more cost-efficient for large quantities. Batch-to-batch variations may occur. Wall deposits (scaling) may need removing, which makes batch operation more suitable. [Week 8, p. 34]
- **Number of stages**: multiple stages are used for energy-intensive processes (evaporation). Vapour from one stage heats the next, and product cost is inversely proportional to the number of stages. [Week 8, p. 35]
- **Crystallizer types**: stirred tank, forced circulation, draft tube baffle, fluidized bed. [Week 8, p. 36]

## Visuals
- **Nucleation tree** · flowchart [Week 8, p. 29]
  - Nucleation → Primary (homogeneous: bulk, no foreign bodies; heterogeneous: on impurity surfaces) and Secondary (on existing crystals). Tag "CNT describes this one" on homogeneous primary, and "faster at low S" on the heterogeneous branches.
- **CNT free-energy curve** · curve sketch (dimensionless) [Week 8, p. 30; FormelarkKP3010.pdf, p. 8, eq. 84]
  - x-axis cluster radius r, y-axis ΔG. A dashed rising curve $+4\pi r^2\gamma$ (surface), a dashed falling curve $\frac{4}{3}\pi r^3\Delta\mu$ (volume, with Δμ < 0 when supersaturated), and their sum, which rises to a maximum and then falls.
  - Mark the maximum as "barrier $W^*$" at "critical size". Left of it: "cluster dissolves". Right of it: "cluster grows".
- **From solution to lattice** · process diagram [Week 8, p. 31–32]
  - Crystal surface with a film. Six numbered arrows for the detailed steps (bulk diffusion, layer diffusion, desolvation, surface diffusion, incorporation, solvent counter-diffusion), with a bracket "simplified: film diffusion + incorporation".
- **Growth at corners and defects** · cross-section [Week 8, p. 33]
  - A cubic crystal with a step and a corner highlighted ("preferred"), a flat face ("slow") and a dislocation ("fast").
- **Multi-stage evaporative crystallizer** · process diagram [Week 8, p. 35]
  - Three crystallizers in series. Steam heats stage 1, the vapour from stage 1 heats stage 2, and so on. Caption: "cost ∝ 1/number of stages".
- **Crystallizer types** · cross-section, 4 panels [Week 8, p. 36]
  - Simple outlines labelled stirred tank, forced circulation (external loop and heat exchanger), draft tube baffle (internal draft tube), fluidized bed (upflow suspending crystals). Names only, because the slide has no further text.
- **Interactive plot**: dimensionless CNT [Week 8, p. 30; FormelarkKP3010.pdf, p. 8, eq. 84].
  - Panel A: $\Delta G(r) = \frac{4}{3}\pi r^3(-\ln S) + 4\pi r^2\tilde\gamma$ (arbitrary units). Sliders: S from 1.05 to 5 and $\tilde\gamma$ from 0.2 to 2. Show the barrier height and the critical r moving as S changes.
  - Panel B: $J/A = \exp(-B/\ln^2 S)$ with a slider for the lumped B (log scale, 1 to 1000), plotted for S from 1 to 5. Highlight the sharp onset. Numbers are illustrative, as no course values exist.

## Equations

### CNT free energy of a spherical cluster
$$\Delta G = \Delta G_v + \Delta G_s = \frac{4}{3}\pi r^3\Delta\mu + 4\pi r^2\gamma, \qquad \Delta\mu = RT\ln S$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\Delta G$ | free energy of forming the cluster | J |
| $r$ | cluster radius | m |
| $\Delta\mu$ | free energy change of the solid phase (per volume in this expression) | J/m³ |
| $\gamma$ | surface (interfacial) interaction | N/m (J/m²) |
| $S$ | supersaturation ratio | – |

Homogeneous primary nucleation. The slide writes $\Delta\mu = RT\ln S$ as the driving force, and the volume term must be negative for supersaturation to favour the solid. [Week 8, p. 30]

### Molecular volume
$$v_i = \frac{M_i}{\rho_i N_{av}}, \qquad N_{av} = 6.022\cdot 10^{23}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $v_i$ | volume of one molecule | m³ |
| $M_i$ | molar mass | kg/mol |
| $\rho_i$ | density of the solid | kg/m³ |

[FormelarkKP3010.pdf, p. 8, eq. 83]

### Homogeneous primary nucleation rate
$$J = A\exp\left(-\frac{W^*}{k_bT}\right) = A\exp\left(-\frac{16\pi v^2\gamma^3}{3k_b^3T^3\ln^2 S}\right)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $J$ | nucleation rate | nuclei/(m³·s) |
| $A$ | pre-exponential factor | nuclei/(m³·s) |
| $W^*$ | nucleation barrier | J |
| $\gamma$ | interfacial tension | N/m |
| $k_b$ | Boltzmann constant, $1.381\cdot 10^{-23}$ | J/K (m²·kg·s⁻²·K⁻¹) |
| $T$ | temperature | K |

[FormelarkKP3010.pdf, p. 8, eq. 84]

### Heterogeneous primary nucleation rate
$$J = A_{HET}\exp\left(-\frac{16\pi v^2\gamma_{eff}^3}{3k_b^3T^3\ln^2 S}\right)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $A_{HET}$ | pre-exponential factor (heterogeneous) | nuclei/(m³·s) |
| $\gamma_{eff}$ | effective interfacial tension on the foreign surface | N/m |

[FormelarkKP3010.pdf, p. 8, eq. 85]

## Worked example
**Why do small clusters dissolve, and why does more supersaturation make more crystals?** (reasoning from the slides) [Week 8, p. 28–30; FormelarkKP3010.pdf, p. 8, eq. 84]
1. Write the cluster's free energy as volume + surface: $\Delta G = \frac{4}{3}\pi r^3\Delta\mu + 4\pi r^2\gamma$.
2. In a supersaturated solution the solid is favoured ($\Delta\mu$ from $RT\ln S$), so the $r^3$ term lowers ΔG.
3. The $r^2$ surface term is positive. For small r it dominates (r² > r³ when r is small), so ΔG rises with size and small clusters are unstable.
4. For larger r the volume term wins: "larger crystals → surface interaction less important". ΔG passes a maximum (barrier $W^*$) and then falls, so bigger clusters grow.
5. Raising S makes $\Delta\mu$ larger in magnitude, so the barrier drops. In eq. 84 that appears as $\ln^2 S$ in the denominator of the exponent, so J rises steeply.
6. This is why primary nucleation has a higher-order dependence on supersaturation than growth, and why high S gives many small crystals. [Week 8, p. 28]

## Faded example
> GAP: no numerical nucleation, growth or crystallizer-design example in the files (lectures, exercise 8 and both practice exams).

## Exam traps
- **CNT is for homogeneous primary nucleation only**: heterogeneous uses $\gamma_{eff}$ and $A_{HET}$ (eq. 85). [Week 8, p. 29; FormelarkKP3010.pdf, p. 8, eq. 84–85]
- **$\ln^2 S$ makes J extremely sensitive**: a small increase in S can switch nucleation on. [FormelarkKP3010.pdf, p. 8, eq. 84]
- **Molecular volume per molecule**: $v = M/(\rho N_{av})$, in m³ per molecule, not per mol. [FormelarkKP3010.pdf, p. 8, eq. 83]
- **$k_b$, not R**: the nucleation exponent uses Boltzmann's constant because v is per molecule. [FormelarkKP3010.pdf, p. 8, eq. 84]
- **At low supersaturation, heterogeneous/secondary nucleation dominates**: homogeneous needs higher S. [Week 8, p. 29]
- **Growth has three possible definitions**: face advance rate, characteristic dimension, or mass. State which one you use. [Week 8, p. 33]
- **Batch is chosen for scaling, not just small volume**: wall deposits that need regular removal favour batch. [Week 8, p. 34]
- **More stages, cheaper product**: in evaporative crystallization, because vapour reuse cuts energy. [Week 8, p. 35]

## Past exam tasks
- None on either practice exam.

## Test yourself
**Q:** List the three steps for forming a crystal.
**A:** Nucleation, mass transfer to the crystal surface, incorporation into the crystal lattice. [Week 8, p. 31]

**Q:** Give the simplified two-step model of crystal growth mass transfer.
**A:** Bulk diffusion through the film, then incorporation into the lattice. [Week 8, p. 32]

**Q:** What is secondary nucleation?
**A:** Heterogeneous nucleation on existing crystals. [Week 8, p. 29]

**Q:** Name the four crystallizer types on the slide.
**A:** Stirred tank, forced circulation, draft tube baffle, fluidized bed. [Week 8, p. 36]

**Q:** Why is product cost inversely proportional to the number of stages in an evaporative crystallization plant?
**A:** The vapour from each stage heats the next, so adding stages reuses the energy. [Week 8, p. 35]

## Sources
- [Week 8 - Crystallization and precipitation with solutions.pdf, p. 28–36]
- [FormelarkKP3010.pdf, p. 8, eq. 83–85]

> GAP: The crystallizer-type figures (Week 8, p. 36) and the CNT ΔG(r) figure (p. 30) are images. The visuals are schematic.
