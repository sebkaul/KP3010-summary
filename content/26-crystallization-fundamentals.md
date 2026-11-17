---
slug: 26-crystallization-fundamentals
title: Crystallization fundamentals — supersaturation, crystal quality and solubility
topic: crystallization
exam_weight: high
exam_weight_note: "Ways to create supersaturation and reading solubility curves on 2 of 2 practice exams (Practice exam 1 Ex. 6a–b; Autumn 2022 Q6.1, Q6.4)"
builds_on: []
used_in: [27-crystallization-mass-balance-yield, 28-supersaturation-metastable-zone, 29-nucleation-growth-crystallizers]
sources: ["Week 8 - Crystallization and precipitation with solutions.pdf", "FormelarkKP3010.pdf", "exercise_08_eng.pdf", "practice_exam_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** What must a solution be before anything can crystallize?
**A:** Supersaturated: it carries more solute than the thermodynamic equilibrium value. [Week 8, p. 4, 9]

**Q:** Name three ways to create supersaturation.
**A:** Cooling, evaporating the solvent, adding an anti-solvent. Reaction/precipitation also counts. [Week 8, p. 4; practice_exam_solutions.pdf, Ex. 6a; practice exam 2 solutions.pdf, Q6.4]

**Q:** NaCl's solubility barely changes with temperature. Is cooling a good way to crystallize it?
**A:** No. The yield would be small, so evaporation is the better option. [practice exam 2 solutions.pdf, Q6.1; practice_exam_solutions.pdf, Ex. 6b]

## Mental model
Crystallization forms a solid from a gas, liquid or melt. Because a crystal lattice is picky about what fits, it separates and purifies in one step and can reach > 99 % purity [Week 8, p. 2]. The driving force is supersaturation: more solute dissolved than the solubility curve allows. You get there by moving the state across the curve. Cool (solubility drops), evaporate (concentration rises), or add an anti-solvent (solubility drops) [Week 8, p. 4, 9]. Once supersaturated, two things happen: new nuclei form, and existing crystals grow [Week 8, p. 5]. The balance between them sets the product's quality: form (polymorph), size distribution, shape (habit) and purity. Those qualities are tangled together, so changing one operating condition usually shifts several of them [Week 8, p. 6–8]. Solubility data is the foundation of every design. It can be estimated from the melting enthalpy, but measured data is usually more accurate [Week 8, p. 10].

## Concepts and definitions
- **Crystallization**: solid formation from gas, liquid or melt. About 70 % of fine chemicals are solids. Separates and purifies simultaneously, to very high purity (> 99 %). [Week 8, p. 2]
- **When to use it**: distillation impossible or expensive (heat-sensitive solute, low relative volatility); a solid or high-purity product needed; uniform crystals with a desired morphology or size distribution. [Week 8, p. 3]
- **When not to use it**: more than one component must be purified, or full solute recovery isn't attainable in one stage. [Week 8, p. 3]
- **Supersaturation**: the solution carries more solute than the thermodynamic equilibrium value. Created by cooling, evaporation of solvent or addition of an anti-solvent (e.g. cooling or evaporating NaCl in water). [Week 8, p. 4]
- **Other routes**: reaction/precipitation (reagents added), and melt crystallization. [practice_exam_solutions.pdf, Ex. 6a; practice exam 2 solutions.pdf, Q6.4]
- **Nucleation**: the first ordered solid structures (nuclei) form. **Growth**: the nuclei increase in size. [Week 8, p. 5]
- **Crystal form**: polymorphism/allotropy means one species with the same building blocks in different unit structures and dramatically different properties (e.g. calcite vs aragonite, both CaCO₃). Co-crystals have more than one molecule in the unit structure (solvate, hydrate, co-crystal). [Week 8, p. 6]
- **Crystal size distribution (CSD)**: important for process and product properties. Described by the mean size $L_D$ and coefficient of variation $c_v = \sigma_D/L_D$. Monodisperse is ideal. Attrition and agglomeration are undesired. [Week 8, p. 6]
- **Morphology (habit)**: the general crystal shape. Angles are constant but face sizes vary. Influenced by crystallization rate, agitation, solvent, impurities and degree of supersaturation. [Week 8, p. 7]
- **Purity**: mainly set by nucleation and growth. Impurities enter by inclusion, attrition or agglomeration. Important when crystallization is the purification step. [Week 8, p. 7]
- **Interdependency**: design and operating conditions often affect more than one quality, e.g. a broad size distribution, aggregated low-purity crystals, filtering problems. [Week 8, p. 8]
- **Phase diagram**: equilibrium data for crystallization from solution at constant pressure. It splits undersaturated from supersaturated, and changing T (heating/cooling) or concentration (dilution/evaporation) can cause supersaturation. [Week 8, p. 9]
- **Solubility prediction**: from solid–liquid equilibrium with the melting enthalpy. For non-ideal solutions include $\gamma_s$. Experimental data is usually more accurate. [Week 8, p. 10]

## Visuals
- **Phase diagram with the three routes** · curve sketch [Week 8, p. 4, 9]
  - x-axis T (°C), y-axis concentration (kg solute/kg solvent). A rising solubility curve, with "undersaturated" below it and "supersaturated" above it.
  - From a point just under the curve: an arrow left (cooling) that crosses the curve; an arrow up (evaporation, concentration rises) that crosses the curve; and the solubility curve drawn shifting down (anti-solvent).
- **Solubility curves: steep vs flat** · plot [exercise_08_eng.pdf, Problem 1; practice exam 2 solutions.pdf, Q6.1; practice_exam_solutions.pdf, Ex. 6b]
  - Sodium acetate data (kg salt/kg H₂O): (0, 0.363), (10, 0.408), (20, 0.465), (30, 0.545), (40, 0.655), (60, 1.39). This is the steep, cooling-friendly case.
  - Add a nearly horizontal line labelled "NaCl: solubility ~T-independent → evaporate". Curve values for NaCl are not in the files, so draw it schematically.
- **Nucleation → growth** · process diagram [Week 8, p. 5]
  - Three frames: clear supersaturated solution → tiny nuclei appear ("nucleation") → the same nuclei larger ("growth").
- **Crystal size distribution** · curve sketch [Week 8, p. 6]
  - x-axis crystal size L (µm), y-axis number or mass fraction. A narrow peak ("monodisperse, ideal, low $c_v$") and a broad peak ("polydisperse, high $c_v$"). Mark $L_D$ and $\sigma_D$ on the broad one.
- **Quality web** · flowchart [Week 8, p. 6–8]
  - Central node "operating conditions (supersaturation, agitation, solvent, impurities, rate)" linked to four quality nodes: form, CSD, morphology, purity. Example outcomes A (wide CSD), B (aggregated, low purity), C (filtering problems).
- **Interactive plot**: cooling-crystallization yield from the sodium-acetate solubility table (linear interpolation) [exercise_08_eng.pdf, Problem 1].
  - Sliders: $T_{start}$ from 10 to 60 °C (start 40) and $T_{end}$ from 0 °C up to $T_{start}$ (start 0).
  - Show the solubility curve with both points and the vertical drop $\Delta c$. Report kg crystals per 100 kg water $= 100(c^*(T_{start}) - c^*(T_{end}))$. At 40 → 0 °C it must show 29.2 kg.

## Equations

### Coefficient of variation
$$c_v = \frac{\sigma_D}{L_D}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $c_v$ | coefficient of variation of the CSD | – |
| $\sigma_D$ | standard deviation of crystal size | m (µm) |
| $L_D$ | mean crystal size | m (µm) |

Lower means more uniform, and monodisperse is ideal. [Week 8, p. 6; FormelarkKP3010.pdf, p. 7, eq. 77]

### Ideal solubility (van 't Hoff, solid–liquid)
$$\ln x_s = \frac{\Delta H_{melt}}{R}\left(\frac{1}{T} - \frac{1}{T_{melt}}\right) \qquad\text{non-ideal: } \ln(\gamma_s x_s) = \dots$$
| Symbol | Meaning | Unit |
|---|---|---|
| $x_s$ | saturation mole fraction of solute | – |
| $\Delta H_{melt}$ | melting enthalpy of the solute | J/mol |
| $T, T_{melt}$ | temperature and melting point | K |
| $\gamma_s$ | activity coefficient (non-ideal) | – |

Written as on the slide and formula sheet. [Week 8, p. 10; FormelarkKP3010.pdf, p. 8, eq. 78]

## Worked example
**KNO₃ crystals from cooling, read off a solubility curve** [practice_exam_solutions.pdf, Ex. 6b]
A KNO₃ solution at 70 °C with 70 g KNO₃ per 100 g H₂O is cooled to 30 °C.
1. Read the solubility at 30 °C from the curve: 45 g KNO₃ per 100 g H₂O.
2. The water stays (100 g). Crystals = dissolved before − dissolved after = 70 − 45 = 25 g per 100 g water.
3. The remaining liquid is saturated at 30 °C: 45 g KNO₃ in (45 + 100) g solution.
4. Concentration: $45/145\cdot 100 = 31$ wt %.

## Faded example
**Choosing a supersaturation method from solubility curves** [practice_exam_solutions.pdf, Ex. 6b; practice exam 2 solutions.pdf, Q6.1]
Solubility curves for NaCl and CaCl₂ (and KNO₃) in water are given.
1. **(try)** How does CaCl₂'s solubility change with T, and which method follows? → It changes a lot with T, so cooling is effective.
2. **(try)** How does NaCl's solubility change with T? → It is not sensitive to temperature.
3. **(try)** Method for NaCl, and why not cooling? → Evaporation (vaporisation). Cooling would give only a small yield.
4. **(try)** Name one more method and how it works. → Anti-solvent: mixing in an anti-solvent lowers the solubility of the solute. Or precipitation: reagents added to create supersaturation.

[practice_exam_solutions.pdf, Ex. 6a–b; practice exam 2 solutions.pdf, Q6.1, Q6.4]

## Exam traps
- **Flat solubility curve → evaporate**: the standard 2-point answer for NaCl. [practice exam 2 solutions.pdf, Q6.1]
- **Know more than cooling and evaporation**: anti-solvent, precipitation (reaction) and melt crystallization are all accepted "other methods". [practice exam 2 solutions.pdf, Q6.4; practice_exam_solutions.pdf, Ex. 6a]
- **g/100 mL vs g/100 g water**: with water at 1 kg/L they're the same, but the exam states that assumption explicitly. [practice exam 2 solutions.pdf, Q6]
- **Concentration of the mother liquor**: report wt % of the *solution* (45/145), not the solubility ratio (45/100). [practice_exam_solutions.pdf, Ex. 6b]
- **Two van 't Hoff equations on the formula sheet**: eq. 78 is solid–liquid solubility with $\Delta H_{melt}$. It's not the Henry/K temperature equation from absorption. [FormelarkKP3010.pdf, p. 8, eq. 78; Week 3, p. 23]
- **Sign check on eq. 78**: for $T < T_{melt}$, $x_s$ must come out ≤ 1 ($\ln x_s \le 0$). Check that your sign convention for $\Delta H_{melt}$ gives that. [Week 8, p. 10]
- **When not to crystallize**: more than one component to purify, or incomplete recovery in one stage. [Week 8, p. 3]
- **Monodisperse is the target**: attrition and agglomeration both broaden the CSD and hurt purity. [Week 8, p. 6–7]

## Past exam tasks
- Practice exam 1, Ex. 6a: describe three ways to create supersaturation (cooling, vaporisation, reaction).
- Practice exam 1, Ex. 6b: choose the method for NaCl vs CaCl₂ from solubility curves, and the KNO₃ cooling crystals and mother-liquor wt %.
- Autumn 2022, Q6.1: is cooling effective for NaCl? (No, solubility barely changes with T.)
- Autumn 2022, Q6.4: name and describe a supersaturation method besides cooling and evaporation.

## Test yourself
**Q:** Sodium acetate saturated at 40 °C (0.655 kg/kg H₂O), cooled to 0 °C (0.363 kg/kg H₂O), 100 kg water/h. Crystals per hour?
**A:** $100\cdot(0.655 - 0.363) = 29.2$ kg/h, matching the short answer. [exercise_08_eng.pdf, Problem 1 and short answer]

**Q:** Name the four crystal quality parameters.
**A:** Crystal form, crystal size distribution, morphology (habit), purity. [Week 8, p. 6–7]

**Q:** What is polymorphism? Give the course example.
**A:** The same species and building blocks in different crystal unit structures, with very different properties. Calcite vs aragonite, both CaCO₃. [Week 8, p. 6]

**Q:** Give two reasons to choose crystallization over distillation.
**A:** Any two of: heat-sensitive solute, low relative volatility, solid or high-purity product needed, uniform crystals of a desired morphology or size needed. [Week 8, p. 3]

**Q:** How do impurities end up in crystals?
**A:** Through inclusion, attrition or agglomeration. [Week 8, p. 7]

## Sources
- [Week 8 - Crystallization and precipitation with solutions.pdf, p. 2–10]
- [FormelarkKP3010.pdf, p. 7–8, eq. 77–78]
- [exercise_08_eng.pdf, Problem 1 and short answers]
- [practice_exam_solutions.pdf, Ex. 6a–b]
- [practice exam 2 solutions.pdf, Q6.1, Q6.4]

> GAP: The solubility figures used in the exams (NaCl, CaCl₂, KNO₃) are images. Only the quoted read-offs (KNO₃ 45 g/100 g at 30 °C, 45.8 g/100 mL in Autumn 2022) are available.
> GAP: The interdependency figure (Week 8, p. 8) and the phase diagram (p. 9) are images.
