---
slug: 19-ternary-diagrams
title: Ternary diagrams — reading points, tie lines and the mixing point
topic: extraction
exam_weight: high
exam_weight_note: "Locating F, S, M, R, E on a ternary diagram on 2 of 2 practice exams (Practice exam 1 Ex. 4a–c; Autumn 2022 Q4b)"
builds_on: [04-equilibrium-flash-distillation, 18-lle-principles-solvent-equipment]
used_in: [20-extraction-stage-schemes, 21-counter-current-extraction-design]
sources: ["Week 6 - Liquid-liquid extraction with solutions.pdf", "FormelarkKP3010.pdf", "exercise_06_eng.pdf", "exercise_06_solutions.pdf", "practice_exam_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** On a ternary diagram, where is a mixture of pure solvent?
**A:** At the solvent vertex. Each vertex is 100 % of its component, and the closer a point is to a vertex, the more of that component it contains. [practice_exam_solutions.pdf, Ex. 4a]

**Q:** What does a tie line connect?
**A:** The equilibrium compositions of the extract and the raffinate. [Week 6, p. 12]

**Q:** Feed 90 kg/h and solvent 30 kg/h are mixed. Is the mixing point M closer to F or to S?
**A:** Closer to F. MF/MS = S/F = 1/3. [practice_exam_solutions.pdf, Ex. 4b]

## Mental model
With three components (carrier, solvent, solute), fractions no longer fit on an x–y plot, so you use an equilateral triangle. Each corner is a pure component and every point inside is a mixture whose three fractions sum to 1 [Week 6, p. 12–14; practice_exam_solutions.pdf, Ex. 4a]. Somewhere along the carrier–solvent base, the binodal curve marks out a dome. Inside it the mixture splits into two liquid phases, outside it stays as one [Week 6, p. 12]. Tie lines across the dome join the raffinate (low-solvent side) and the extract (low-carrier side) that are in equilibrium. At the plait point the tie lines shrink to nothing and no separation is possible [Week 6, p. 12]. Mixing two streams is a mass balance that lands on the straight line between them. Where along it is set by the lever rule, closer to the bigger stream [practice_exam_solutions.pdf, Ex. 4b; FormelarkKP3010.pdf, p. 6, eq. 59]. The same balance in reverse, M = R + E, puts the products at the two ends of a line through M. That is the whole graphical toolkit for extraction [practice_exam_solutions.pdf, Ex. 4c].

## Concepts and definitions
- **Reading a ternary diagram**: each vertex is 100 % of solute, solvent or carrier. The closer to a vertex, the higher that component's fraction. [practice_exam_solutions.pdf, Ex. 4a]
- **Binodal curve**: separates the two-phase region from the single-phase region. [Week 6, p. 12]
- **Tie lines**: connect the equilibrium compositions of extract and raffinate. [Week 6, p. 12]
- **Plait point**: where no separation is possible (the tie lines vanish). [Week 6, p. 12]
- **Extract vs raffinate side**: low carrier means the extract side, low solvent means the raffinate side. [Week 6, p. 12]
- **Number of phases**: a point inside the binodal curve gives two phases, outside gives one. Example: $x_{solvent} = 0.5$, $x_{solute} = 0.5$ is one phase, while $x_{carrier} = 0.3$, $x_{solute} = 0.5$ is two phases. [Week 6, p. 13–14]
- **Mixing point M**: lies on the line FS. Its position follows from the lever arm rule, MF/MS = S/F. [practice_exam_solutions.pdf, Ex. 4b; exercise_06_solutions.pdf, P2b]
- **Product line through M**: the raffinate and extract are on the binodal curve, on a straight line through M. For a counter-current cascade, extend the line from $R_N$ through M to the binodal curve to find $E_1$. [practice_exam_solutions.pdf, Ex. 4c; exercise_06_solutions.pdf, P2b]

## Visuals
- **Anatomy of a ternary diagram** · curve sketch [Week 6, p. 12]
  - Equilateral triangle with vertices solute (top), carrier (bottom left) and solvent (bottom right). A dome-shaped binodal curve rising from the carrier–solvent base, labelled "two phases" inside and "one phase" outside.
  - Five or six tie lines inside the dome, tilting up toward the solvent side. The plait point near the top of the dome, where the tie lines shrink to a point.
  - Labels on the left branch "raffinate side (low solvent)" and on the right branch "extract side (low carrier)".
- **Reading a point** · curve sketch [Week 6, p. 13–14]
  - The same triangle with gridlines. Point P1 ($x_{solvent} = 0.5$, $x_{solute} = 0.5$) on the solute–solvent edge, outside the dome: "one phase". Point P2 ($x_{carrier} = 0.3$, $x_{solute} = 0.5$, so $x_{solvent} = 0.2$) inside the dome: "two phases".
  - Show dashed lines from P2 parallel to each side to the three axes.
- **Mixing point and product line** · curve sketch [practice_exam_solutions.pdf, Ex. 4a–c]
  - F on the carrier–solute edge at 30 % solute / 70 % carrier. S at the solvent vertex. M on line FS with MF : MS = 1 : 3, giving composition 22.5 % solute, 52.5 % carrier, 25 % solvent.
  - $R_2$ on the raffinate branch at 10 % solute. Line from $R_2$ through M extended to the extract branch: $E_1$ at 45 % solute. Arrows label the lever arms.
- **Biodiesel wash construction** · curve sketch [exercise_06_solutions.pdf, P2b]
  - Biodiesel/water/methanol (weight fractions). F near the biodiesel vertex (1/9 methanol), S at the water vertex, R at 1 wt % methanol, $E_1$ on the binodal curve at 50 wt % methanol. Lines FS and $E_1$R crossing at M, with SF annotated as "FM/SM = 0.09".
- **Interactive plot**: mixing point on line FS from $x_M = (F x_F + S x_S)/(F + S)$ [FormelarkKP3010.pdf, p. 6, eq. 59; practice_exam_solutions.pdf, Ex. 4].
  - Slider: S/F from 0 to 3 (start 1/3). Fixed F = 30 % solute, 70 % carrier; S = pure solvent.
  - Show M moving along FS, with its three fractions and the lever-arm ratio MF/MS live. At S/F = 1/3 it must show M = (22.5 % solute, 52.5 % carrier, 25 % solvent).

## Equations

### Closure
$$x_{solute} + x_{solvent} + x_{carrier} = 1$$
| Symbol | Meaning | Unit |
|---|---|---|
| $x_i$ | mass or mole fraction of component i | – |

Any two fractions fix a point. [Week 6, p. 13–14]

### Mixing-point balance (component balance for extraction)
$$x_F F + y_S S = x_M M = x_R R + y_E E, \qquad M = F + S = R + E$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F, S, M, R, E$ | feed, solvent, mixture, raffinate, extract flows | kg/h (or kmol/h) |
| $x_F, x_M, x_R$ | solute fraction in feed, mixture, raffinate | – |
| $y_S, y_E$ | solute fraction in solvent, extract | – |

Written for the solute. The same form holds for each component. [FormelarkKP3010.pdf, p. 6, eq. 59; practice exam 2 solutions.pdf, Q4c]

### Lever arm rule
$$\frac{\overline{MF}}{\overline{MS}} = \frac{S}{F}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\overline{MF}, \overline{MS}$ | distances from M to F and to S on the diagram | length |

Inverse lever: M sits closer to the larger stream. [practice_exam_solutions.pdf, Ex. 4b; exercise_06_solutions.pdf, P2b]

## Worked example
**Mixing point and extract composition for a two-stage counter-current extractor** [practice_exam_solutions.pdf, Ex. 4a–c]
Feed 90 kg/h, 30 % solute + 70 % carrier. Pure solvent S = 30 kg/h. Final raffinate $R_2$ has 10 % solute.
1. Locate F: on the carrier–solute edge at 30 % solute (0 % solvent). Locate S: the solvent vertex.
2. Lever rule: MF/MS = S/F = 30/90 = 1/3, so M lies one quarter of the way from F to S.
3. Check by balance (eq. 59): M = 120 kg/h, $x_{M,solute} = 90\cdot 0.30/120 = 0.225$, $x_{M,carrier} = 63/120 = 0.525$, $x_{M,solvent} = 30/120 = 0.25$.
4. Locate $R_2$: on the binodal curve (raffinate side) at 10 % solute.
5. Draw the line from $R_2$ through M and extend it to the binodal curve on the extract side. The intersection is $E_1$.
6. Read $E_1$: 45 wt % solute.
7. Continuing with eq. 59 (solute): $27 = 0.10R_2 + 0.45E_1$ with $R_2 + E_1 = 120$ gives $E_1 = 42.9$ kg/h and $R_2 = 77.1$ kg/h, so about 19.3 kg/h of the 27 kg/h solute (≈ 71 %) is recovered in the extract.

## Faded example
**Wash water for a biodiesel plant** [exercise_06_eng.pdf, Problem 2b; exercise_06_solutions.pdf, P2b]
50 t/h biodiesel with 1/9 weight fraction methanol (the solution uses a total feed of 55.5 t/h). Pure water as solvent. The aqueous extract must contain 50 wt % methanol and the raffinate at most 1 wt % methanol.
1. **(try)** Locate F, S, $E_1$ and R on the biodiesel/water/methanol diagram. → F near the biodiesel vertex at 1/9 methanol; S at the water vertex; $E_1$ on the binodal curve at 0.5 methanol; R at 0.01 methanol.
2. **(try)** Draw the two lines whose intersection is M. → FS and $E_1$R. M is where they cross.
3. **(try)** Lever rule for the solvent-to-feed ratio. → S/F = FM/SM = 0.09.
4. **(try)** Wash water. → $0.09\cdot 55.5$ t/h ≈ 5.1 t/h (the solution's value), about 5 m³/h of water.

[exercise_06_solutions.pdf, P2b]

## Exam traps
- **Read each fraction parallel to the opposite side**: a component's fraction increases toward its vertex. Check the tick direction on each axis before reading. [practice_exam_solutions.pdf, Ex. 4a; Week 6, p. 13–14]
- **Inverse lever**: MF/MS = S/F, not F/S. M lies nearer the *bigger* stream. [practice_exam_solutions.pdf, Ex. 4b]
- **The mixing line isn't a tie line**: M lies on FS (a mass balance). R and E lie at the ends of a line through M, and they are on the binodal curve. [practice_exam_solutions.pdf, Ex. 4c; Week 6, p. 12]
- **R and E must be on the binodal curve**: a raffinate "with 10 % solute" means the point on the raffinate branch at 10 % solute, not just any 10 % point. [practice_exam_solutions.pdf, Ex. 4c]
- **Weight fractions**: the exam diagrams are in wt %. Do balances in kg/h, not kmol/h. [practice exam 2 solutions.pdf, Q4; practice_exam_solutions.pdf, Ex. 4]
- **Outside the dome means no separation**: a single-phase mixture can't be split by settling. At the plait point the phases are identical. [Week 6, p. 12–14]
- **Side assignment**: the extract is on the low-carrier side, the raffinate on the low-solvent side. Swapping them reverses every later construction. [Week 6, p. 12]
- **Points are graded separately**: in Autumn 2022 Q4b, 1 point for S and 1 for F and R. Mark each point clearly. [practice exam 2 solutions.pdf, Q4b]

## Past exam tasks
- Practice exam 1, Ex. 4a: locate the feed and solvent points.
- Practice exam 1, Ex. 4b: find the mixing point with the lever arm rule (MF/MS = 1/3).
- Practice exam 1, Ex. 4c: locate $R_2$, extend $R_2$–M to $E_1$, and read the solute fraction in the extract (45 wt %).
- Autumn 2022, Q4b: locate F, S and R on the acetone/water/benzene diagram.

## Test yourself
**Q:** What is $x_{solvent}$ for a mixture with $x_{carrier} = 0.3$ and $x_{solute} = 0.5$, and how many phases does it have on the lecture diagram?
**A:** $x_{solvent} = 0.2$. Two phases (inside the binodal curve). [Week 6, p. 13–14]

**Q:** Feed 40 kg/h (25 wt % acetone) mixed with pure benzene to give M at 23 wt % acetone. Find M and S.
**A:** $40\cdot 0.25 = M\cdot 0.23$, so M = 43.5 kg/h and S = 3.5 kg/h. [practice exam 2 solutions.pdf, Q4c]

**Q:** What happens at the plait point?
**A:** No separation is possible. Extract and raffinate become identical. [Week 6, p. 12]

**Q:** F = 60 kg/h and S = 20 kg/h. What is MF/MS?
**A:** S/F = 1/3. [practice_exam_solutions.pdf, Ex. 4b]

**Q:** In a counter-current cascade, which two points does the line through M connect?
**A:** The final raffinate $R_N$ and the first extract $E_1$, both on the binodal curve. [practice_exam_solutions.pdf, Ex. 4c; exercise_06_solutions.pdf, P2b]

## Sources
- [Week 6 - Liquid-liquid extraction with solutions.pdf, p. 12–14]
- [FormelarkKP3010.pdf, p. 6, eq. 59]
- [exercise_06_eng.pdf, Problem 2b]
- [exercise_06_solutions.pdf, P2b (figure)]
- [practice_exam_solutions.pdf, Ex. 4a–c]
- [practice exam 2 solutions.pdf, Q4b–c]

> GAP: The ternary diagrams (Week 6, p. 12–14; Practice exam 1 Ex. 4; Autumn 2022 Q4) are images. Binodal and tie-line data aren't available as numbers, so curves must be schematic, with only the quoted points placed exactly.
> GAP: Exercise 6 P2b asks for m³ per day, but the solution stops at 5.1 t/h.
