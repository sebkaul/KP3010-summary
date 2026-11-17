---
slug: 01-separation-basics-k-selectivity
title: Separation basics — techniques, equilibrium ratio K and selectivity S
topic: vle
exam_weight: low
exam_weight_note: "Selectivity sub-question on 1 of 2 practice exams (Practice exam 1, Ex. 5a); otherwise background for every topic"
builds_on: []
used_in: [03-vle-diagrams-azeotropes, 22-adsorbents-properties, 31-membrane-flux-permeability-selectivity]
sources: ["Week 1 - Introduction  VLE with solutions.pdf", "Week 7 - Adsorption and ion-exchange with solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** Component A has mole fraction 0.6 in phase 1 and 0.2 in phase 2. What is $K_A$?
**A:** $K_A = x_{A,1}/x_{A,2} = 0.6/0.2 = 3$. [Week 1, p. 15]

**Q:** What has to differ between two molecules for a separation to be possible at all?
**A:** A molecular property, e.g. molecular weight, size, shape, dipole moment/polarizability, molecular interactions or electric charge. [Week 1, p. 11]

**Q:** Absorption and extraction belong to which family of separation techniques?
**A:** Solvent addition. [Week 1, p. 10]

## Mental model
Every separation exploits a difference in some molecular property between the components: weight, size, shape, polarity, interactions or charge [Week 1, p. 11]. The technique you pick decides *how* the second phase or barrier is created: by creating a phase (evaporation/distillation), adding a solvent (absorption/extraction), adding a solid agent (adsorption/ion exchange), using a barrier (membranes) or applying a force field or gradient [Week 1, p. 10]. Once two phases coexist, each component distributes between them. The equilibrium ratio $K$ measures how one component distributes, and the selectivity $S$ compares two components [Week 1, p. 15]. The further $S$ is from the point where both components distribute equally, the easier the separation. The same "ratio of K-values" idea comes back as selectivity in adsorption [Week 7, p. 6].

## Concepts and definitions
- **Why separations matter**: separating products and by-products, recycling solvents and unconverted reactants, purifying products, removing impurities from the feed, removing contaminants from waste streams. [Week 1, p. 9]
- **Separation techniques** (five classes): (a) phase creation: evaporation and distillation; (b) solvent addition: absorption and extraction; (c) solid separating agent: adsorption and ion exchange; (d) barriers: membranes (and filtration); (e) force field or gradient: electrodialysis and centrifugation. [Week 1, p. 10]
- **Molecular properties that enable separation**: molecular weight, molecular size, molecular shape, dipole moment and polarizability, molecular interactions, electric charge. [Week 1, p. 11]
- **Selection criteria for a separation process**: feasibility, economics, product stability, design knowledge/reliability, safety and environment. [Week 1, p. 14]
- **Equilibrium ratio $K_A$**: ratio of the mole fraction of A in phase 1 to that in phase 2. [Week 1, p. 15]
- **Selectivity $S_{AB}$**: ratio of the equilibrium ratios of A and B. [Week 1, p. 15]
- **Selectivity (adsorbent)**: "preference of an adsorbent for a target molecule", for binary A+B written $\alpha_A = K_A/K_B$. [Week 7, p. 6]
- **Volatility (flyktighet)** and **VLE (likevekt)**: the key design data for separation by evaporation, which relies on the composition difference between the liquid and gas phase. [Week 1, p. 16]

## Visuals
- **Map of separation techniques** · flowchart [Week 1, p. 10]
  - Root node "Separation technique", with five branches: Phase creation → Evaporation & distillation; Solvent addition → Absorption & extraction; Solid separating agent → Adsorption & ion-exchange; Barriers → Membranes (& filtration); Force field/gradient → Electrodialysis & centrifugation.
  - Highlight the five that are course topics (distillation, absorption, extraction, adsorption, membranes) plus crystallization, which is listed as a course topic [Week 1, p. 3]. Each leaf links to its topic page.
- **Two phases, two components** · cross-section [Week 1, p. 15]
  - A vessel split horizontally into phase 1 and phase 2, with A and B molecules in each. Label $x_{A,1}, x_{B,1}$ in phase 1 and $x_{A,2}, x_{B,2}$ in phase 2.
  - Arrows show $K_A = x_{A,1}/x_{A,2}$, $K_B = x_{B,1}/x_{B,2}$, and $S_{AB} = K_A/K_B$ underneath.
- **Boiling points vs molecular structure** · table-as-picture [Week 1, p. 12]
  - Bar or point chart: methane −164 °C, ethane −89 °C, isopentane 28 °C, pentane 36 °C, methanol 65 °C, water 100 °C.
  - Annotate the drivers: "weight, hydrogen bonds and Van der Waals interactions". Highlight the pentane/isopentane pair (same formula C₅H₁₂, different shape, different boiling point) and the methanol/water pair (hydrogen bonding).
- **Interactive plot**: none. $S = K_A/K_B$ is a single ratio, so a slider adds nothing.

## Equations

### Equilibrium ratio
$$K_A \equiv \frac{x_{A,1}}{x_{A,2}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $K_A$ | equilibrium ratio of component A | – |
| $x_{A,1}$ | mole fraction of A in phase 1 | – |
| $x_{A,2}$ | mole fraction of A in phase 2 | – |

Valid for any two coexisting phases at equilibrium. Which phase is "1" is a choice, so always state it. [Week 1, p. 15]

### Selectivity
$$S_{AB} = \frac{K_A}{K_B} = \frac{x_{A,1}/x_{A,2}}{x_{B,1}/x_{B,2}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $S_{AB}$ | selectivity of A relative to B | – |
| $K_A, K_B$ | equilibrium ratios of A and B | – |
| $x_{i,j}$ | mole fraction of component $i$ in phase $j$ | – |

Phases 1 and 2 and components A and B at equilibrium. [Week 1, p. 15]

### Adsorbent selectivity
$$\alpha_A = \frac{K_A}{K_B}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\alpha_A$ | selectivity of the adsorbent towards A (binary A+B) | – |
| $K_A, K_B$ | equilibrium (isotherm) constants of A and B on the adsorbent | depends on isotherm, e.g. $\mathrm{bar^{-1}}$ for Langmuir in partial pressure |

Same ratio-of-K form, but here $K$ is the adsorption equilibrium constant. Details are on page 22/23. [Week 7, p. 6–8]

## Worked example
**Selectivity towards A** [Week 7, p. 7–8]
Given $K_A = 1/6$ and $K_B = 3/5$, find the selectivity towards A.
1. Selectivity definition: $\alpha_A = K_A/K_B$. [Week 7, p. 6]
2. Insert: $\alpha_A = \dfrac{1/6}{3/5} = \dfrac{5}{18}$.
3. Result: $\alpha_A = 0.28$. [Week 7, p. 8]
4. Interpretation (from the definition): $\alpha_A < 1$ means $K_B > K_A$, so the adsorbent prefers B over A.

## Faded example
**Equilibrium selectivity of N₂ over O₂** [practice_exam_solutions.pdf, Ex. 5a]
Langmuir isotherms: $q_{N_2} = \dfrac{100\,p_{N_2}}{1+2\,p_{N_2}}$ and $q_{O_2} = \dfrac{250\,p_{O_2}}{1+10\,p_{O_2}}$, with $q$ in mol/kg.
1. Match each isotherm to the Langmuir form $q = \dfrac{q_{max} K p}{1+Kp}$.
2. **(try)** Read off $K_{N_2}$ and $K_{O_2}$ from the denominators. → $K_{N_2} = 2$, $K_{O_2} = 10$.
3. **(try)** Find $q_{max}$ from the numerators ($q_{max}K$ = numerator coefficient). → $q_{max,N_2} = 100/2 = 50$ mol/kg, $q_{max,O_2} = 250/10 = 25$ mol/kg.
4. **(try)** Selectivity of N₂ over O₂: $S = K_{N_2}/K_{O_2}$. → $S = 2/10 = 0.2$.

[practice_exam_solutions.pdf, Ex. 5a]

## Exam traps
- **Selectivity below 1**: $S_{AB} = K_A/K_B < 1$ means B, not A, is preferred. The exam answer $S = 0.2$ for N₂ over O₂ means O₂ is preferred, even though N₂ has the larger $q_{max}$. [practice_exam_solutions.pdf, Ex. 5a; Week 1, p. 15]
- **Capacity ≠ selectivity**: $q_{max}$ (capacity) and $K$ (affinity) are different numbers. Selectivity uses only $K$. [Week 7, p. 6; practice_exam_solutions.pdf, Ex. 5a]
- **Same symbol, different K**: in VLE/LLE, $K$ is a mole fraction ratio between phases [Week 1, p. 15]. In adsorption, $K$ is the isotherm constant [Week 7, p. 6]. Check which one the task means.
- **Naming**: the slides write $S_{AB}$ [Week 1, p. 15] and $\alpha_A$ [Week 7, p. 6], and the exam writes $S$ [practice_exam_solutions.pdf, Ex. 5a]. It's the same ratio-of-K idea. Don't confuse it with relative volatility $\alpha_{AB} = P_A^0/P_B^0$ (page 03). [FormelarkKP3010.pdf, p. 1, eq. 7]
- **Phase order**: $K_A$ flips to $1/K_A$ if you swap which phase is "1". Keep the same convention for A and B. [Week 1, p. 15]

## Past exam tasks
- Practice exam 1, Ex. 5a: find $q_{max}$ for N₂ and O₂ from Langmuir isotherms and the equilibrium selectivity of N₂ over O₂.
- Practice exam 1, Ex. 7c and Practice exam 2 (Autumn 2022), Ex. 2a.1 also use "selectivity" and "relative volatility", but with their own definitions. They're covered on pages 31 and 03.

## Test yourself
**Q:** List the five classes of separation techniques with one example each.
**A:** Phase creation (distillation), solvent addition (absorption/extraction), solid separating agent (adsorption/ion exchange), barriers (membranes), force field/gradient (centrifugation/electrodialysis). [Week 1, p. 10]

**Q:** Pentane and isopentane are both C₅H₁₂ but boil at 36 °C and 28 °C. Which molecular property explains the difference?
**A:** Molecular shape. The slide attributes boiling point differences to weight, hydrogen bonds and Van der Waals interactions, and with the same formula, shape changes the Van der Waals interactions. [Week 1, p. 11–12]

**Q:** $K_A = 0.5$, $K_B = 2$. Compute $S_{AB}$. Which component does phase 1 favour?
**A:** $S_{AB} = 0.5/2 = 0.25$. Since $S_{AB} < 1$, phase 1 favours B relative to A. [Week 1, p. 15]

**Q:** Name the five criteria for selecting a separation process.
**A:** Feasibility, economics, product stability, design knowledge/reliability, safety and environment. [Week 1, p. 14]

**Q:** What are the two key pieces of design information for separation by evaporation?
**A:** Component volatility (flyktighet) and the vapour–liquid equilibrium (VLE, likevekt). [Week 1, p. 16]

## Sources
- [Week 1 - Introduction  VLE with solutions.pdf, p. 3, 9–12, 14–16]
- [Week 7 - Adsorption and ion-exchange with solutions.pdf, p. 6–8]
- [practice_exam_solutions.pdf, Ex. 5a]
- [FormelarkKP3010.pdf, p. 1, eq. 7]

> GAP: Week 1, p. 13 ("Molecular properties") is an image with no extractable text and is not used.
