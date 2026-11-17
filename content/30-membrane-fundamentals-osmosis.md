---
slug: 30-membrane-fundamentals-osmosis
title: Membrane fundamentals — processes, transport mechanisms and osmosis
topic: membranes
exam_weight: medium
exam_weight_note: "Membrane processes and applications in Practice exam 1 Ex. 7a; osmotic pressure in exercise 9 and the lecture"
builds_on: [01-separation-basics-k-selectivity]
used_in: [31-membrane-flux-permeability-selectivity, 32-concentration-polarization, 33-membrane-modules-design]
sources: ["Week 9 - Membrane filtration with solutions.pdf", "FormelarkKP3010.pdf", "exercise_09_solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** What's the smallest particle conventional filtration can separate, compared with membrane filtration?
**A:** Conventional filtration handles particles larger than 1 µm. Membrane filtration goes down to molecular size. [Week 9, p. 2]

**Q:** How many moles of ions does 1 mol NaCl give for osmotic pressure?
**A:** 2. [Week 9, p. 14]

**Q:** What must the applied pressure exceed for reverse osmosis to give pure water?
**A:** The osmotic pressure: $P_{ext} > \Pi_{OSM}$. [Week 9, p. 12]

## Mental model
A membrane is a semi-permeable layer that lets some species through more easily than others. Feed goes in on one side, permeate comes out the other, and a driving force pushes material across: a difference in concentration, pressure, temperature or electric potential [Week 9, p. 5]. How it discriminates depends on its structure. Big pores just let everything flow (no selectivity). Small pores add Knudsen/molecular diffusion. Pores near molecular size sieve by size. Dense membranes work by solution–diffusion [Week 9, p. 6]. The filtration processes are essentially a size ladder: micro (µm), ultra (nm), nano (< 2 nm, charged), then reverse osmosis that holds back salts [Week 9, p. 3, 10]. Osmosis is the twist. If the membrane passes water but not salt, water flows *toward* the salty side, because pure water has the higher thermodynamic potential, until a pressure difference Π balances it. Push harder than Π on the salty side and the flow reverses: reverse osmosis gives fresh water [Week 9, p. 12].

## Concepts and definitions
- **Conventional filtration**: separates solid particles > 1 µm. A cake grows on the filter over time and reduces performance. [Week 9, p. 2]
- **Membrane filtration**: separates particles down to molecular size, for liquid and gas streams. [Week 9, p. 2]
- **Process families**: micro- and ultrafiltration (particles from liquid or gas); reverse osmosis and nanofiltration (low-MW solutes from a solvent, e.g. decolouring wastewater, desalinating seawater); dialysis (low-MW solutes from macromolecular mixtures, e.g. artificial kidneys); gas separation (N₂ or O₂ from air); pervaporation and vapour permeation. [Week 9, p. 3]
- **Advantages**: fewer chemical additives, low energy use, smaller and lighter systems, low capital and operating cost at small scale. [Week 9, p. 4]
- **Disadvantages**: not always highly selective, membrane stability, not suited to large throughputs, relatively immature technology. [Week 9, p. 4]
- **Membrane**: a semi-permeable phase that restricts the motion of certain species. Transport mechanisms are set by its structure. It may carry a charge (nanofiltration). Driving force: ΔC, ΔP, ΔT or ΔE. [Week 9, p. 5]
- **Transport mechanisms**: (a) bulk flow through macropores, no selectivity; (b) flow through micropores, Knudsen flow and molecular diffusion; (c) size exclusion / molecular sieving, the molecule is too large to pass; (d) solution through a dense membrane, the solution–diffusion mechanism. [Week 9, p. 6]
- **Symmetrical membranes**: homogeneous, dense or (micro)porous, several µm thick. [Week 9, p. 8]
- **Asymmetrical membranes**: heterogeneous with a support. Dense or porous top layer, relatively thick porous support, very thin selective top layer. [Week 9, p. 8]
- **Microfiltration (0.1–10 µm)**: removes fine particles, separates bacteria from drinking water. [Week 9, p. 10]
- **Ultrafiltration (2–100 nm)**: removes ultra-fine particles, separates viruses and proteins (e.g. lactose and proteins from whey). [Week 9, p. 10]
- **Nanofiltration (< 2 nm)**: removes particles and molecules smaller than 2 nm. Water is almost always the solvent. The membrane is usually charged, which lets salts permeate. [Week 9, p. 10]
- **Osmosis**: with a membrane permeable to water but not salts, pure water has the lower thermodynamic potential... the driving force is the osmotic pressure Π. At equilibrium it equals the hydrostatic pressure. Applying $P_{ext} > \Pi_{OSM}$ reverses the process to give pure water (reverse osmosis). [Week 9, p. 12]
- **Exam examples of membrane processes**: ultrafiltration (virus removal, sterilisation), reverse osmosis (seawater desalination), gas separation (O₂ from air). [practice_exam_solutions.pdf, Ex. 7a]

## Visuals
- **Conventional vs membrane filtration** · cross-section [Week 9, p. 2]
  - Left: a filter with a growing cake of particles > 1 µm, labelled "performance drops over time". Right: a membrane retaining molecules, labelled "down to molecular size, liquid or gas".
- **Membrane as a separator** · process diagram [Week 9, p. 5]
  - Feed → membrane (semi-permeable) → permeate, with retentate leaving along the feed side. Arrow across the membrane labelled "driving force: ΔC, ΔP, ΔT, ΔE".
- **Four transport mechanisms** · cross-section, 4 panels [Week 9, p. 6]
  - (a) Wide pores, all molecules pass ("bulk flow, no selectivity"). (b) Narrow pores with molecules bouncing off walls ("Knudsen / molecular diffusion"). (c) Pores sized so small molecules pass and large ones are blocked ("molecular sieving"). (d) A dense layer where molecules dissolve, diffuse and exit ("solution–diffusion").
- **Symmetric vs asymmetric membrane** · cross-section [Week 9, p. 8]
  - Left: a uniform layer several µm thick. Right: a very thin dense or porous top layer on a thick porous support.
- **Size ladder of filtration processes** · table-as-picture (log scale) [Week 9, p. 10, 3]
  - Horizontal log axis from 0.1 nm to 10 µm. Bars: microfiltration 0.1–10 µm (bacteria), ultrafiltration 2–100 nm (viruses, proteins), nanofiltration < 2 nm (charged membrane), reverse osmosis at the low end (salts, desalination).
- **Osmosis and reverse osmosis** · cross-section [Week 9, p. 12]
  - U-tube: pure water on the left, salt water on the right, membrane in between. Panel 1: water flows right until the salt-side level is Δh higher, "Π = ρgΔh". Panel 2: piston on the salt side with $P_{ext} > \Pi$, water flowing left, "reverse osmosis → pure water".
- **Interactive plot**: $\Pi_{OSM} \approx cRT$ and the equivalent water column $\Delta h = \Pi/(\rho g)$ [Week 9, p. 12–14; FormelarkKP3010.pdf, p. 8, eq. 86].
  - Sliders: molality from 0 to 1.0 mol/kg H₂O (start 0.5), T from 0 to 80 °C (start 45), ions per formula unit 1/2/3 (start 2, NaCl). Fixed ρ = 997 kg/m³.
  - Show c (mol/m³), Π (Pa and bar) and Δh (m). At the start values it must show c = 997 mol/m³ and Π ≈ 2.6·10⁶ Pa = 26 bar.

## Equations

### Osmotic pressure (van 't Hoff, dilute)
$$\Pi_{OSM} \approx cRT = \rho g\Delta h$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\Pi_{OSM}$ | osmotic pressure | Pa |
| $c$ | concentration of ions (total solute per unit pure solution) | mol/m³ |
| $R$ | 8.314 | J/(mol·K) |
| $T$ | temperature | K |
| $\rho$ | liquid density | kg/m³ |
| $g$ | 9.81 | m/s² |
| $\Delta h$ | equivalent hydrostatic height | m |

The van 't Hoff relation applies only to dilute solutions. [Week 9, p. 12; FormelarkKP3010.pdf, p. 8, eq. 86]

### Ion concentration from molality
$$c = \nu\cdot m\cdot \rho_{water}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\nu$ | ions per formula unit (NaCl: 2) | – |
| $m$ | molality | mol/kg H₂O |
| $\rho_{water}$ | density of pure water | kg/m³ |

As used in the lecture example. [Week 9, p. 14]

## Worked example
**Osmotic pressure of 0.5 mol NaCl/kg H₂O at 45 °C** [Week 9, p. 13–14]
Pure water density 997.0 kg/m³.
1. 1 mol NaCl gives 2 mol ions.
2. Ion concentration: $c = 2\cdot 0.5\cdot 997.0 = 997$ mol/m³.
3. Temperature: $45 + 273.15 = 318.15$ K.
4. $\Pi_{OSM} = cRT = 997\cdot 8.314\cdot 318.15 = 2.6\cdot 10^6$ Pa.
5. Result: about 26 bar.

## Faded example
**Osmotic pressure of 0.1 mol NaCl/kg H₂O at 25 °C** [exercise_09_solutions.pdf, Problem 1]
Pure water density 997.0 kg/m³.
1. **(try)** Ions per formula unit. → 2.
2. **(try)** Ion concentration. → $c = 2\cdot 0.1\cdot 997.0 = 199.4$ mol/m³.
3. **(try)** Osmotic pressure at 298.15 K. → $\Pi = 199.4\cdot 8.314\cdot 298.15 = 4.9\cdot 10^5$ Pa ≈ 4.9 bar.
4. **(try)** Compare with the lecture case (0.5 mol/kg at 45 °C). → 5× lower concentration and a lower T, so Π is about 5.3× lower, consistent with $\Pi \propto cT$.

[exercise_09_solutions.pdf, Problem 1] (solution sheet blank, numbers computed here with the lecture method)

## Exam traps
- **Count ions**: NaCl gives 2 ions per formula unit, so the concentration doubles. Forgetting this halves Π. [Week 9, p. 14]
- **Molality to mol/m³**: multiply by the water density (kg/m³). [Week 9, p. 14]
- **Kelvin**: T must be in K. [Week 9, p. 14]
- **Dilute only**: van 't Hoff ($\Pi \approx cRT$) applies only to dilute solutions. [Week 9, p. 12]
- **Direction of osmosis**: water flows toward the salt side. Reverse osmosis needs $P_{ext} > \Pi$ on the salt side. [Week 9, p. 12]
- **Nanofiltration lets salts through**: its membranes are usually charged, unlike RO which holds salts back. [Week 9, p. 10, 3]
- **Bulk flow has no selectivity**: macropores only filter by gross size, they don't discriminate between dissolved components. [Week 9, p. 6]
- **Membranes don't suit large throughputs**: a standard disadvantage question. [Week 9, p. 4]
- **Size units**: microfiltration is µm (0.1–10), ultrafiltration nm (2–100), nanofiltration < 2 nm. [Week 9, p. 10]

## Past exam tasks
- Practice exam 1, Ex. 7a: give three membrane separation processes and their applications (UF for virus removal/sterilisation, RO for seawater desalination, gas separation for O₂ from air).

## Test yourself
**Q:** Give two advantages and two disadvantages of membrane processes.
**A:** Advantages (any two): fewer chemical additives, low energy, smaller and lighter, low cost at small scale. Disadvantages (any two): not always highly selective, membrane stability, not suited to large throughput, immature technology. [Week 9, p. 4]

**Q:** Which filtration process separates bacteria from drinking water, and which separates proteins from whey?
**A:** Microfiltration (0.1–10 µm) for bacteria. Ultrafiltration (2–100 nm) for proteins and lactose from whey. [Week 9, p. 10]

**Q:** Describe an asymmetric membrane.
**A:** Heterogeneous, with a very thin selective top layer (dense or porous) on a relatively thick porous support. [Week 9, p. 8]

**Q:** What equivalent water column does 26 bar osmotic pressure correspond to?
**A:** $\Delta h = \Pi/(\rho g) = 2.6\cdot 10^6/(997\cdot 9.81) \approx 266$ m. [Week 9, p. 12, 14]

**Q:** Which transport mechanism governs dense membranes?
**A:** Solution–diffusion. [Week 9, p. 6]

## Sources
- [Week 9 - Membrane filtration with solutions.pdf, p. 2–14]
- [FormelarkKP3010.pdf, p. 8, eq. 86]
- [exercise_09_solutions.pdf, Problem 1]
- [practice_exam_solutions.pdf, Ex. 7a]

> GAP: Week 9, p. 7 (membranes in industry), p. 9 (composite membranes) and p. 11 are image-only slides.
> GAP: Exercise 9 Problem 1 asks for a comparison with "Table 11.1 in the book". That table is not in the files.
