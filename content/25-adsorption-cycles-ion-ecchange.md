---
slug: 25-adsorption-cycles-ion-exchange
title: Adsorption cycles (TSA, PSA, purge) and ion exchange
topic: adsorption
exam_weight: low
exam_weight_note: "Not asked on either practice exam; ion-exchange capacity in exercise 7 Problem 3"
builds_on: [22-adsorbents-properties, 23-adsorption-isotherms, 24-fixed-bed-adsorption]
used_in: []
sources: ["Week 7 - Adsorption and ion-exchange with solutions.pdf", "FormelarkKP3010.pdf", "exercise_07_eng.pdf"]
---

## Pretest
**Q:** You need to remove ppm-level water from a gas. Bulk separation or purification, and which cycle fits?
**A:** Purification (less than 10 % adsorbed). Thermal swing adsorption is typical, e.g. drying of gases. [Week 7, p. 36–37]

**Q:** Why are PSA cycles faster than TSA cycles?
**A:** Pressure changes are quick, while heating and cooling a packed bed takes time. [Week 7, p. 37–38]

**Q:** $K_{AB} > 1$ for an ion exchanger. Which ion does the resin prefer?
**A:** B. [Week 7, p. 42]

## Mental model
A saturated bed has to be emptied again. You do that by tipping the equilibrium away from the solid, in one of three ways: heat it, drop the (partial) pressure or concentration, or flush it with something that competes for the sites [Week 7, p. 36]. The choice follows from how much you're adsorbing. Bulk separations (≥ 10 % of the stream) need quick cycles, so pressure swing fits. Purification (< 10 %) tolerates the slow heat-up and cool-down of a thermal swing [Week 7, p. 36–38]. Purge cycles flush with an inert or with a competing adsorbate [Week 7, p. 39]. Ion exchange is a special, chemisorption-type case. The resin holds charged groups, and an ion from the liquid swaps with an ion of the same charge on the resin. The equilibrium is a ratio of ratios, $K_{AB}$, that says which ion the resin prefers [Week 7, p. 40, 42]. Capacity is simply how many exchange groups fit on a kg of resin [exercise_07_eng.pdf, Problem 3].

## Concepts and definitions
- **Bulk separation**: 10 % or more of the stream is adsorbed, e.g. air separation. [Week 7, p. 36]
- **Purification**: less than 10 % of the stream is adsorbed, e.g. water treatment. [Week 7, p. 36]
- **Ways to change the adsorbate loading**: change the temperature; change the (partial) pressure or concentration; introduce a competitive adsorbate. [Week 7, p. 36]
- **Thermal swing adsorption (TSA)**: desorption at higher temperature, with a continuous feed used as stripping gas. Heating and cooling the bed takes time, so the total cycle time is long. Mostly used for purification and impurity removal at small adsorbate concentrations. Applications: drying gases (H₂O removal), pollutant removal with activated carbon. [Week 7, p. 37]
- **Pressure swing adsorption (PSA)**: desorption at lower pressure along the adsorption/desorption isotherm. Pressure and concentration changes are quick, so it is used for bulk separations, with no thermal degradation. Applications: CO₂ removal from hydrogen and hydrocarbons (methane), air separation to obtain oxygen. [Week 7, p. 38]
- **Purge swing adsorption**: a purge stream is used for desorption, for bulk separations. Inert purge: a non-adsorbing gas or liquid, and the adsorbed compound concentration is low. Displacement purge: an adsorbing gas or liquid, desorbing by competitive adsorption. [Week 7, p. 39]
- **Ion exchange**: a chemisorption process with an ion complex reaction. Ions of the same charge are replaced on the exchange resin. Common uses: water softening and demineralisation. [Week 7, p. 40]
- **Two-step demineralisation**: (1) cation-exchange resins remove Ca²⁺, Na⁺ etc., (2) anion-exchange resins remove Cl⁻, SO₄²⁻ etc. [Week 7, p. 40]
- **Ion-exchange resins**: natural zeolites (inorganic aluminosilicates) or, most widely used, synthetic organic polymer resins. These are 3D copolymer networks based on styrene or acrylic-acid-type monomers cross-linked with divinylbenzene, carrying sulfonic acid or quaternary ammonium groups. [Week 7, p. 41]
- **Ion-exchange equilibrium**: different from adsorption because an ion is exchanged. Depends on the functional group and polymer structure. $K_{AB} > 1$ means B is preferred, $K_{AB} < 1$ means A is preferred. [Week 7, p. 42]

## Visuals
- **Choosing a regeneration cycle** · flowchart [Week 7, p. 36–39]
  - "Fraction adsorbed?" → ≥ 10 % (bulk) → PSA or purge swing. < 10 % (purification) → TSA.
  - Side box: "three levers: T, p/c, competitive adsorbate".
- **TSA vs PSA on the isotherm** · curve sketch (schematic, built from the slide text) [Week 7, p. 37–38]
  - Axes: partial pressure p (or c), loading q. Two Langmuir curves, $T_{low}$ (upper) and $T_{high}$ (lower).
  - TSA arrow: vertical drop at constant p from the $T_{low}$ to the $T_{high}$ curve ("heat → desorb, slow"). PSA arrow: along the $T_{low}$ curve from high p to low p ("depressurise → desorb, fast").
- **Two-bed continuous operation** · process diagram [Week 7, p. 5, 36–38]
  - Bed 1 adsorbing (feed in, clean product out). Bed 2 regenerating (heated for TSA, depressurised for PSA, or purged), desorbed stream out. Valves switch the beds each half-cycle.
- **Two-step demineralisation** · process diagram [Week 7, p. 40]
  - Raw water → cation-exchange column ("removes Ca²⁺, Na⁺") → anion-exchange column ("removes Cl⁻, SO₄²⁻") → demineralised water.
- **Polymer resin** · cross-section [Week 7, p. 41]
  - Polystyrene chains cross-linked by divinylbenzene bridges, with −SO₃H groups on benzene rings (cation resin). Note "anion resins: quaternary ammonium groups".
- **Interactive plot**: maximum capacity of a sulfonated styrene–DVB resin vs styrene fraction (one SO₃H per benzene ring), $\text{cap} = \dfrac{n_{rings}}{1 + n_{rings}\cdot 0.0811}$ with $n_{rings} = \dfrac{w_{sty}}{0.104} + \dfrac{1-w_{sty}}{0.1302}$ per kg copolymer [exercise_07_eng.pdf, Problem 3].
  - Slider: styrene weight fraction from 0.50 to 1.00 (start 0.88). Show the capacity (eq/kg resin) live. At 0.88 it must show 5.33 eq/kg.

## Equations

### Ion-exchange equilibrium
$$K_{AB} = \frac{q_{B,res}\,m_{A,liq}}{q_{A,res}\,m_{B,liq}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $K_{AB}$ | ion-exchange equilibrium constant | – |
| $q_{A,res}, q_{B,res}$ | concentration of ions A and B on the resin | eq/kg (or mol/kg) |
| $m_{A,liq}, m_{B,liq}$ | concentration of A and B in the liquid | mol/kg (or mol/m³) |

$K_{AB} > 1$ means B is preferred, $K_{AB} < 1$ means A is preferred. [Week 7, p. 42; FormelarkKP3010.pdf, p. 7, eq. 73]

### Resin exchange capacity (one functional group per benzene ring)
$$\text{capacity} = \frac{\text{mol rings per kg copolymer}}{\text{kg resin after functionalisation per kg copolymer}} = \frac{n_{rings}}{1 + n_{rings}M_{group}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $n_{rings}$ | moles of benzene rings per kg copolymer | mol/kg |
| $M_{group}$ | molar mass added per functional group | kg/mol |
| capacity | exchangeable equivalents per kg final resin | eq/kg |

Set up from exercise 7 Problem 3, which states the result (5.33 eq/kg). [exercise_07_eng.pdf, Problem 3 and short answer]

## Worked example
**Maximum ion-exchange capacity of a sulfonated styrene–DVB resin** [exercise_07_eng.pdf, Problem 3 and short answer]
88 wt % styrene (M = 0.104 kg/mol), 12 wt % divinylbenzene (M = 0.1302 kg/mol). One sulfonic acid group (M = 0.0811 kg/mol) on each benzene ring.
1. Basis: 1 kg copolymer.
2. Styrene: $0.88/0.104 = 8.46$ mol. Each has one benzene ring.
3. DVB: $0.12/0.1302 = 0.92$ mol. Each has one benzene ring.
4. Rings, which equal the sulfonic acid groups: $8.46 + 0.92 = 9.38$ mol.
5. Resin mass after sulfonation: $1 + 9.38\cdot 0.0811 = 1.76$ kg.
6. Capacity: $9.38/1.76 = 5.33$ equivalents/kg resin, matching the given answer.

## Faded example
> GAP: no second numerical example on adsorption cycles or ion exchange in the files. The exercise 7 official solutions are blank, and neither practice exam covers this subtopic.

## Exam traps
- **The 10 % rule**: bulk is ≥ 10 % adsorbed, purification < 10 %. That decides PSA/purge vs TSA. [Week 7, p. 36]
- **TSA is slow, PSA is fast**: TSA's long cycle comes from heating and cooling the bed. PSA avoids thermal degradation. [Week 7, p. 37–38]
- **Inert vs displacement purge**: inert means a non-adsorbing purge. Displacement means an adsorbing purge that competes for sites. [Week 7, p. 39]
- **Read $K_{AB}$ subscripts carefully**: $K_{AB} = (q_B m_A)/(q_A m_B)$, so $K_{AB} > 1$ favours **B**, not A. [Week 7, p. 42]
- **Same charge only**: cations exchange with cations and anions with anions. Full demineralisation needs both resin types in series. [Week 7, p. 40]
- **Capacity per kg of final resin**: include the added mass of the functional groups in the denominator. [exercise_07_eng.pdf, Problem 3]
- **Ion exchange is chemisorption**: it involves an ion complex reaction, not just physisorption. [Week 7, p. 40]

## Past exam tasks
- None on either practice exam.

## Test yourself
**Q:** Give one application each for TSA and PSA.
**A:** TSA: drying gases, or pollutant removal with activated carbon. PSA: CO₂ removal from hydrogen or methane, or air separation for oxygen. [Week 7, p. 37–38]

**Q:** Name the three ways to change the adsorbate loading for regeneration.
**A:** Change the temperature, change the (partial) pressure or concentration, or introduce a competitive adsorbate. [Week 7, p. 36]

**Q:** What are the two steps of water demineralisation, and what do they remove?
**A:** A cation-exchange resin removes Ca²⁺, Na⁺ etc. An anion-exchange resin removes Cl⁻, SO₄²⁻ etc. [Week 7, p. 40]

**Q:** Which functional groups are typical on synthetic ion-exchange resins?
**A:** Sulfonic acid groups and quaternary ammonium groups. [Week 7, p. 41]

**Q:** $K_{AB} = 0.4$. Which ion accumulates on the resin?
**A:** A. [Week 7, p. 42]

## Sources
- [Week 7 - Adsorption and ion-exchange with solutions.pdf, p. 5, 36–42]
- [FormelarkKP3010.pdf, p. 7, eq. 73]
- [exercise_07_eng.pdf, Problem 3 and short answers]

> GAP: The TSA/PSA isotherm figures (Week 7, p. 37–38) and the resin structure image (p. 41) are images. The visuals are schematic, built from the slide text.
