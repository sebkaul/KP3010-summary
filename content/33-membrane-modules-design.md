---
slug: 33-membrane-modules-design
title: Membrane modules and design of a membrane separation
topic: membranes
exam_weight: low
exam_weight_note: "Not asked on either practice exam"
builds_on: [31-membrane-flux-permeability-selectivity, 32-concentration-polarization]
used_in: []
sources: ["Week 9 - Membrane filtration with solutions.pdf", "exercise_09_solutions.pdf"]
---

## Pretest
**Q:** Which module type has the highest packing density, and what is its weak point?
**A:** Hollow fibre (500–9000 m²/m³). It has poor resistance to fouling and is hard to clean. [Week 9, p. 39]

**Q:** Why don't membrane plants get cheaper per unit at large scale?
**A:** Modules have limited sizes, so you add more of them in parallel. The cost benefits of scaling no longer apply. [Week 9, p. 41]

**Q:** What is the "cut" of a membrane stage?
**A:** The part of the feed allowed to permeate, cut = P/F. [Week 9, p. 43]

## Mental model
A membrane is useless without a housing that brings feed to it and carries permeate and retentate away. That housing is the module [Week 9, p. 35]. Module types trade the same few properties: how much membrane area fits per m³ (packing density), how badly it fouls, how easy it is to clean, and what it costs [Week 9, p. 35–39]. Flat-sheet designs (plate-and-frame) are robust and cleanable but bulky. Rolling the sheets up (spiral wound) packs them densely and cheaply, at the cost of pressure drop and cleanability. Tubes resist fouling but waste space, and shrinking the tubes to hollow fibres flips that trade-off [Week 9, p. 36–39]. Sizing is mostly arithmetic: total permeate = flux × area per module × number of modules in parallel [Week 9, p. 41]. The complications are the boundary-layer resistances (page 32) and the flow pattern inside the module, which is often unclear. Assuming perfect mixing gives a quick estimate [Week 9, p. 41–42]. Balances over the stage plus the flux law give the permeate flow and composition, and the cut [Week 9, p. 43].

## Concepts and definitions
- **Module**: housing containing the membrane and regulating the flows. Important properties: area per volume (m²/m³), fouling tendency, production cost, area of a standard module (m²). Types: plate-and-frame, spiral wound, tubular, hollow fibre. [Week 9, p. 35]
- **Plate-and-frame**: flat membrane sheets. + high working pressure possible, easy to clean, easy to replace membranes. − low packing density, relatively expensive. [Week 9, p. 36]
- **Spiral wound**: sheets separated by a spacer layer, wound into a spiral. + high packing density, relatively inexpensive, easy to adjust hydrodynamics. − high pressure drop (100–150 kPa), difficult to clean and sterilise. [Week 9, p. 37]
- **Tubular**: module containing tubular membranes. + resistant to fouling, easy to clean. − low packing density, relatively expensive. [Week 9, p. 38]
- **Hollow fibre**: like tubular but much smaller tubes (< 0.5 mm). + high packing density (500–9000 m²/m³), relatively inexpensive. − poor fouling resistance, difficult to clean, difficult to change the membrane. [Week 9, p. 39]
- **Design scale-up**: modules have limited sizes, so multiple modules are usually placed in parallel, and the cost benefits of scaling no longer hold. [Week 9, p. 41]
- **Complications**: mass-transfer resistances, and geometry and flow pattern in the module. [Week 9, p. 41]
- **Flow patterns**: co-current, counter-current, cross flow, perfect mixing. The pattern can be hard to identify (e.g. is a hollow fibre co-, counter- or cross-flow?). Perfect mixing is the easiest and can be used for estimates. [Week 9, p. 42]
- **Cut**: the fraction of the feed allowed to permeate, P/F. [Week 9, p. 43]

## Visuals
- **Four module types** · cross-section, 4 panels [Week 9, p. 36–39]
  - Plate-and-frame: stacked flat sheets with spacers. Spiral wound: sheets and spacers wrapped around a central permeate tube. Tubular: a bundle of wide tubes. Hollow fibre: a dense bundle of fine fibres (< 0.5 mm).
  - Under each panel, two green "+" and two red "−" tags from the slides.
- **Module comparison** · table-as-picture [Week 9, p. 35–40]
  - Rows: plate-and-frame, spiral wound, tubular, hollow fibre. Columns: packing density, cost, fouling resistance / cleanability, pressure drop, membrane replacement. Fill only with the slide's qualitative statements, plus the two numbers given (spiral wound ΔP 100–150 kPa, hollow fibre 500–9000 m²/m³).
- **Flow patterns in a module** · process diagram, 4 panels [Week 9, p. 42]
  - (a) Co-current: feed and permeate flow the same direction along the membrane. (b) Counter-current: opposite directions. (c) Cross flow: permeate leaves perpendicular to the feed. (d) Perfect mixing: both sides well mixed, labelled "easiest, use for estimates".
- **Membrane stage balance** · process diagram [Week 9, p. 41, 43]
  - Feed F, $x_F$ → module (area A, permeability $P_M$, thickness $\delta_M$) → permeate P, $x_P$ and retentate R, $x_R$. Labels: "$F = P + R$", "cut = P/F", "N modules in parallel: $P_{tot} = J A_{mod}N_{mod}$".
- **Interactive plot**: number of modules and cut for a perfectly mixed stage. Illustrative, because the files give no design numbers [Week 9, p. 41, 43].
  - Sliders: required permeate $P_{tot}$ (m³/h), flux J (m³/(m²·h)), area per module $A_{mod}$ (m²) and feed F.
  - Show $N_{mod} = \lceil P_{tot}/(J A_{mod})\rceil$ and cut = $P_{tot}/F$. Label the panel clearly as "illustrative values".

## Equations

### Total permeate flow
$$P_{tot} = J\cdot A_{tot} = J\cdot A_{mod}\cdot N_{mod}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $P_{tot}$ | total permeate flow | m³/s (or mol/s) |
| $J$ | flux | m³/(m²·s) (or mol/(m²·s)) |
| $A_{mod}$ | membrane area per module | m² |
| $N_{mod}$ | number of modules in parallel | – |

[Week 9, p. 41]

### Stage material balances
$$F = P + R, \qquad x_FF = x_PP + x_RR$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F, P, R$ | feed, permeate, retentate flows | mol/s |
| $x_F, x_P, x_R$ | mole fraction of i in each stream | – |

[Week 9, p. 43]

### Transport through the membrane (perfect mixing)
$$x_PP = \frac{D_{im}}{\delta_M}(x_R - x_P)\,A \qquad\text{or}\qquad x_PP = \frac{P_{M,i}}{\delta_M}(x_Rp_R - x_Pp_P)\,A$$
| Symbol | Meaning | Unit |
|---|---|---|
| $A$ | membrane area | m² |
| $p_R, p_P$ | total pressure on the retentate and permeate side | Pa |
| $P_{M,i}$ | permeability of i | mol·m/(m²·s·Pa) |

Driving force taken with the retentate composition (perfect mixing). [Week 9, p. 43]

### Cut
$$\text{cut} = \frac{P}{F}$$
[Week 9, p. 43]

## Worked example
**Choosing a module for a fouling-prone feed** (reasoning from the slides) [Week 9, p. 35–39]
A feed has a strong fouling tendency and the plant needs regular cleaning.
1. List the module properties that matter: fouling tendency, ease of cleaning, packing density, cost. [Week 9, p. 35]
2. Hollow fibre: high packing density and cheap, but poor fouling resistance and difficult to clean. Reject. [Week 9, p. 39]
3. Spiral wound: dense and cheap, but difficult to clean and sterilise, with a high pressure drop. Reject. [Week 9, p. 37]
4. Tubular: resistant to fouling and easy to clean. The price is low packing density and higher cost. [Week 9, p. 38]
5. Plate-and-frame: easy to clean and to replace membranes, high working pressure. Also low packing density and expensive. [Week 9, p. 36]
6. Choose tubular (or plate-and-frame if high pressure or easy membrane replacement matter more). Accept a larger, costlier installation, and size it with $P_{tot} = JA_{mod}N_{mod}$. [Week 9, p. 41]

## Faded example
> GAP: no numerical module-sizing or stage-balance example in the files. Exercise 9, Problem 4 (RO permeances for water and NaCl) has a blank solution and no short answer.

## Exam traps
- **Packing density vs fouling is the key trade-off**: hollow fibre and spiral wound are dense and cheap but foul and are hard to clean. Tubular and plate-and-frame are the reverse. [Week 9, p. 36–39]
- **Spiral-wound pressure drop**: 100–150 kPa, a quoted drawback. [Week 9, p. 37]
- **No economy of scale**: more capacity means more modules in parallel. [Week 9, p. 41]
- **Perfect mixing uses the retentate composition**: the driving force is $x_R - x_P$ (or $x_Rp_R - x_Pp_P$), not $x_F - x_P$. [Week 9, p. 43]
- **Cut is based on the feed**: P/F, not P/R. [Week 9, p. 43]
- **Flow pattern is uncertain**: if asked, say it's hard to identify and that perfect mixing is the simple estimate. [Week 9, p. 42]

## Past exam tasks
- None on either practice exam.

## Test yourself
**Q:** Give one advantage and one disadvantage of each module type.
**A:** Plate-and-frame: easy to clean / low packing density. Spiral wound: high packing density / high ΔP. Tubular: fouling resistant / expensive. Hollow fibre: very high packing density / poor fouling resistance. [Week 9, p. 36–39]

**Q:** List the four flow patterns and say which one is used for estimates.
**A:** Co-current, counter-current, cross flow, perfect mixing. Perfect mixing is used for estimates. [Week 9, p. 42]

**Q:** Write the overall and component balances for a membrane stage.
**A:** $F = P + R$ and $x_FF = x_PP + x_RR$. [Week 9, p. 43]

**Q:** What two complications does the slide list for membrane design?
**A:** Mass-transfer resistances, and geometry and flow pattern in the module. [Week 9, p. 41]

**Q:** How small are hollow fibres, and what packing density do they reach?
**A:** Less than 0.5 mm, and 500–9000 m²/m³. [Week 9, p. 39]

## Sources
- [Week 9 - Membrane filtration with solutions.pdf, p. 35–43]
- [exercise_09_solutions.pdf, Problem 4 (statement only)]

> GAP: Week 9, p. 40 (module overview table) is an image, so its comparison values can't be extracted.
