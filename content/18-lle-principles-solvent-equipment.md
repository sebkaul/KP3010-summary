---
slug: 18-lle-principles-solvent-equipment
title: Liquid–liquid extraction — principles, solvent selection and equipment
topic: extraction
exam_weight: medium
exam_weight_note: "'Is X a good solvent? Use the diagram' on 1 of 2 practice exams (Autumn 2022 Q4a, 2 pts); definitions underpin every Q4"
builds_on: [01-separation-basics-k-selectivity, 03-vle-diagrams-azeotropes]
used_in: [19-ternary-diagrams, 20-extraction-stage-schemes, 21-counter-current-extraction-design]
sources: ["Week 6 - Liquid-liquid extraction with solutions.pdf", "FormelarkKP3010.pdf", "exercise_06_eng.pdf", "exercise_06_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** Name two situations where extraction is preferred over distillation.
**A:** Any two of: low relative volatility or azeotropes, heat-sensitive components, small concentrations of product or impurity. [Week 6, p. 5]

**Q:** What leaves the extractor as the "extract", and what as the "raffinate"?
**A:** Extract: the solvent with the extracted product. Raffinate: the carrier with the leftover product. [Week 6, p. 4]

**Q:** Looking at a ternary diagram, what two features tell you a solvent is good?
**A:** Steep tie lines (the solute strongly prefers the solvent phase) and a large miscibility gap (carrier and solvent nearly immiscible). [exercise_06_solutions.pdf, P2a; practice exam 2 solutions.pdf, Q4a]

## Mental model
Add a second liquid that doesn't mix with the first, and you get two phases. A solute that dissolves much better in the new liquid (the solvent) moves over to it [Week 6, p. 2]. So the process is: mix hard to make a large interface, then let the phases settle and separate [Week 6, p. 2]. You get an extract (solvent + solute) and a raffinate (carrier + what's left) [Week 6, p. 4]. Use it when distillation struggles: close boiling points or azeotropes, heat-sensitive products, very dilute solutes [Week 6, p. 5]. But you've added a chemical, so you now have to recover the solvent, usually by distillation. That costs money, which is why solvent choice matters so much [Week 6, p. 6, 8]. The key numbers are the distribution coefficient K (how much the solute prefers the solvent), the selectivity β (how differently two solutes behave, like α in distillation) and the extraction factor E (K scaled by the solvent-to-feed ratio) [Week 6, p. 7].

## Concepts and definitions
- **Principle**: adding a solvent gives a two-phase system, and solute solubility can differ a lot between the phases. Mixing creates a large interface, and settling separates the phases. Batch (lab) or continuous (industrial). [Week 6, p. 2]
- **Carrier**: the component in which the solute is present. [Week 6, p. 4]
- **Solvent**: immiscible or partly immiscible with the carrier, creating two phases. [Week 6, p. 4]
- **Solute**: the product, with a different solubility in the two phases. [Week 6, p. 4]
- **Extract**: solvent with extracted product. **Raffinate**: carrier with left-over product. [Week 6, p. 4]
- **When to use LLE**: mostly when distillation isn't feasible (low relative volatility or azeotropes, heat-sensitive components, small concentrations of product or impurity). [Week 6, p. 5]
- **Process overview**: the solvent adds complexity and cost, so solvent recovery is important. Examples: acetic acid from water with ethyl acetate, vitamin D from fish oil with liquid propane, caffeine from black tea with methylene chloride, metals from acidic leach solutions. [Week 6, p. 6]
- **Distribution coefficient (K)**: ratio of solute mole fractions in extract and raffinate. [Week 6, p. 7; FormelarkKP3010.pdf, p. 5, eq. 52]
- **Selectivity ($\beta_{12}$)**: $K_1/K_2$. Says how easy it is to separate two solutes, analogous to relative volatility $\alpha_{12}$. [Week 6, p. 7; FormelarkKP3010.pdf, p. 5, eq. 53]
- **Extraction factor (E)**: amount of solute in extract / amount in raffinate $= K\cdot$ extract flow / raffinate flow. The formula sheet writes $E = KS/F$. [Week 6, p. 7; FormelarkKP3010.pdf, p. 6, eq. 54]
- **Solvent selection criteria**: high distribution coefficient; high selectivity (fewer stages); sufficient volatility difference from the solute; low viscosity for better phase separation; stability; cost; toxicity and environmental impact. [Week 6, p. 8]
- **Diagram test for a good solvent**: steep tie lines mean much higher solute concentration in the solvent phase. A large miscibility gap (carrier and solvent almost immiscible) means little solvent in the raffinate and little carrier in the extract. [exercise_06_solutions.pdf, P2a; practice exam 2 solutions.pdf, Q4a]
- **Mixer-settler**: + simple, reliable, flexible, high capacity. Single stage, with a trade-off between dispersion intensity and settling time. − high capital cost, large inventory. [Week 6, p. 23]
- **Agitated columns**: + high efficiency, multiple stages. − high capital cost, can be complex, moving parts. [Week 6, p. 24]
- **Unagitated columns**: + simple and low cost, multiple stages. Need good phase contact and must prevent back-mixing. − lower efficiency than agitated columns. [Week 6, p. 25]
- **Centrifugal extractor**: + short contact time, faster settling, small footprint. One device per stage. − complex, moving parts, high capital and operating cost. [Week 6, p. 26]

## Visuals
- **Mix, then settle** · process diagram [Week 6, p. 2–4]
  - Feed (carrier + solute) and solvent enter a mixer (impeller, "large interface"), then flow to a settler where two layers form. One outlet is the extract (solvent + solute), the other the raffinate (carrier + leftover solute). Label "which layer is on top depends on density".
- **Extraction + solvent recovery loop** · process diagram [Week 6, p. 6]
  - Extractor → extract → distillation column (solvent recovery) → recovered solvent recycled to the extractor, with the solute product taken out separately. Raffinate leaves the extractor. Caption: "solvent adds complexity and cost → recovery is essential".
- **When to choose LLE** · flowchart [Week 6, p. 5]
  - "Can distillation do it?" → No, because of low α or an azeotrope / heat-sensitive product / very dilute product → "consider liquid–liquid extraction".
- **Good vs poor solvent on a ternary diagram** · curve sketch [exercise_06_solutions.pdf, P2a; practice exam 2 solutions.pdf, Q4a]
  - Two small ternary sketches. Left ("good"): a wide two-phase region spanning nearly the whole carrier–solvent edge, with steep tie lines rising toward the solvent side. Right ("poor"): a narrow two-phase region with nearly flat tie lines. Annotate "steep tie lines → high K", "wide gap → nearly immiscible".
- **Equipment comparison** · table-as-picture [Week 6, p. 23–26]
  - Four columns (mixer-settler | agitated column | unagitated column | centrifugal extractor) and rows: stages per unit, efficiency, cost, moving parts, key plus, key minus. Use the slide's + and − lists.
- **Interactive plot**: single-stage split from $E = KS/F$ and $x_R/x_F = 1/(1+E)$ [FormelarkKP3010.pdf, p. 6, eq. 54–55].
  - Sliders: K from 0.05 to 10 (start 0.2, phenol in heptane [exercise_06_eng.pdf, Problem 1]) and S/F from 0.1 to 500, log scale (start 1).
  - Show E, the fraction of solute in the raffinate $1/(1+E)$ and in the extract $E/(1+E)$ as a stacked bar. Preset button "99 % removal" sets S/F = 495 for K = 0.2 (page 20).

## Equations

### Distribution coefficient
$$K_i = \frac{x_{i,E}}{x_{i,R}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $K_i$ | distribution coefficient of solute i | – |
| $x_{i,E}$ | fraction of i in the extract phase | – (mole or weight fraction, check the task) |
| $x_{i,R}$ | fraction of i in the raffinate phase | – |

[Week 6, p. 7; FormelarkKP3010.pdf, p. 5, eq. 52]

### Selectivity
$$\beta_{12} = \frac{K_1}{K_2} = \frac{(x_1/x_2)_E}{(x_1/x_2)_R}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\beta_{12}$ | selectivity of solute 1 over 2 | – |

Analogous to $\alpha_{12}$ in distillation. The second form follows from inserting the definition of K. [Week 6, p. 7; FormelarkKP3010.pdf, p. 5, eq. 53]

### Extraction factor
$$E = \frac{\text{amount of solute in extract phase}}{\text{amount of solute in raffinate phase}} = K\,\frac{\text{extract flow}}{\text{raffinate flow}} \approx \frac{KS}{F}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $E$ | extraction factor | – |
| $S$ | solvent flow (or amount) | kg/h or kg |
| $F$ | feed (carrier) flow (or amount) | kg/h or kg |

The $KS/F$ form treats the extract flow as ≈ solvent and the raffinate flow as ≈ feed carrier (immiscible, dilute). [Week 6, p. 7; FormelarkKP3010.pdf, p. 6, eq. 54]

## Worked example
**Is water a good solvent to wash methanol out of biodiesel?** [exercise_06_eng.pdf, Problem 2a, 2d; exercise_06_solutions.pdf, P2a, P2d]
Ternary diagram biodiesel/water/methanol (weight fractions) with tie lines.
1. Look at the tie lines. They rise relatively steeply toward the water side, so at equilibrium the methanol concentration is much higher in water than in biodiesel. That means a high distribution coefficient.
2. Look at the two-phase region. Water and biodiesel are almost completely immiscible (a large miscibility gap), so little water ends up in the biodiesel raffinate and vice versa.
3. Conclusion: water is a good solvent for this wash.
4. Solvent recovery: methanol and water differ in boiling point, so distillation can separate the methanol from the wash water. This matches the "sufficient volatility difference" criterion. [Week 6, p. 8]

## Faded example
**Is benzene a good solvent for removing acetone from water?** [practice exam 2 solutions.pdf, Q4a]
Ternary diagram acetone/water/benzene (weight fractions). The exam asks for a judgement from the diagram (2 points).
1. **(try)** What do the tie lines show? → They are steep, so a higher acetone concentration is expected in benzene than in water (1 pt).
2. **(try)** What does the two-phase region show? → Benzene and water are mostly immiscible at low acetone concentrations (1 pt).
3. **(try)** Why does point 2 matter? → There is little benzene in the raffinate and little water in the extract to separate afterwards.
4. **(try)** Verdict. → Yes, benzene is a good solvent.

[practice exam 2 solutions.pdf, Q4a]

## Exam traps
- **The slides use two A/B/C labellings**: p. 2 has solvent B extracting solute A from carrier C, while p. 4 defines carrier A, solvent B, solute C. Name the components in words in your answer. [Week 6, p. 2, 4]
- **K is extract over raffinate**: $K = x_E/x_R$, not the reverse. [Week 6, p. 7]
- **Check the fraction basis**: K may be in mole fractions (slide) or weight fractions (exercise: wt fr phenol in heptane / wt fr phenol in water). [Week 6, p. 7; exercise_06_eng.pdf, Problem 1]
- **"Good solvent" answers need two arguments**: tie-line slope (distribution) and miscibility gap (immiscibility). Each is worth a point. [practice exam 2 solutions.pdf, Q4a]
- **Don't forget recovery**: a solvent with too little volatility difference from the solute is hard to recover. That's on the selection list. [Week 6, p. 6, 8]
- **High selectivity → fewer stages**: β plays the role α plays in distillation. [Week 6, p. 7–8]
- **E assumes immiscible phases**: $E = KS/F$ uses solvent and feed flows in place of extract and raffinate flows. [FormelarkKP3010.pdf, p. 6, eq. 54; Week 6, p. 7]

## Past exam tasks
- Autumn 2022, Q4a: is benzene a good solvent for acetone/water? Explain from the ternary diagram (tie lines steep, phases mostly immiscible).

## Test yourself
**Q:** List four solvent-selection criteria.
**A:** Any four of: high distribution coefficient, high selectivity, sufficient volatility difference from the solute, low viscosity, stability, cost, toxicity/environmental impact. [Week 6, p. 8]

**Q:** Phenol has $K_D = 0.2$ (heptane/water) and you use S/F = 1. What is E for a single stage, and what fraction of the phenol stays in the raffinate?
**A:** $E = 0.2$, so $x_R/x_F = 1/(1 + 0.2) = 0.83$. 83 % stays in the water. [exercise_06_eng.pdf, Problem 1; FormelarkKP3010.pdf, p. 6, eq. 54–55]

**Q:** Two solutes have $K_1 = 4$ and $K_2 = 0.5$ in the same solvent. What is $\beta_{12}$, and what is it analogous to?
**A:** $\beta_{12} = 8$, analogous to relative volatility $\alpha_{12}$. [Week 6, p. 7]

**Q:** Which extractor would you pick for a product that degrades quickly, and what is the downside?
**A:** A centrifugal extractor (short contact time). It is complex, with moving parts and high capital and operating costs. [Week 6, p. 26]

**Q:** Why do unagitated columns need to prevent back-mixing?
**A:** They are multistage counter-current devices that rely on good phase contacting. Back-mixing would undo the staging. They have lower efficiency than agitated columns. [Week 6, p. 25]

## Sources
- [Week 6 - Liquid-liquid extraction with solutions.pdf, p. 2–11, 23–26]
- [FormelarkKP3010.pdf, p. 5–6, eq. 52–55]
- [exercise_06_eng.pdf, Problem 1–2]
- [exercise_06_solutions.pdf, P2a, P2d]
- [practice exam 2 solutions.pdf, Q4a]

> GAP: The solvent-group table (Week 6, p. 9) is an image, so the example "which groups extract ethanol from water? → groups 1, 2, 7 and 8" (p. 10–11) can't be reproduced with its reasoning.
