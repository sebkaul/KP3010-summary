---
slug: 21-counter-current-extraction-design
title: Design of counter-current extraction — McCabe–Thiele, Kremser and ternary stepping
topic: extraction
exam_weight: high
exam_weight_note: "Minimum solvent and extract composition from the ternary diagram in Autumn 2022 Q4c (4 of 8 pts); counter-current product line in Practice exam 1 Ex. 4c"
builds_on: [10-multistage-absorption-stripping, 11-kremser-minimum-absorbent-flow, 19-ternary-diagrams, 20-extraction-stage-schemes]
used_in: []
sources: ["Week 6 - Liquid-liquid extraction with solutions.pdf", "FormelarkKP3010.pdf", "exercise_06_eng.pdf", "exercise_06_solutions.pdf", "practice exam 2 solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** What are the two types of systems and the two design methods for counter-current extraction?
**A:** Systems: immiscible and partially miscible. Methods: graphical McCabe–Thiele and analytical Kremser. [Week 6, p. 27]

**Q:** At minimum solvent flow, how is the operating line oriented relative to the tie lines?
**A:** Parallel to a tie line. That corresponds to an infinite number of stages. [Week 6, p. 36]

**Q:** What happens if you add far too much solvent?
**A:** The mixing point may leave the two-phase region, which is the maximum solvent-to-feed limit. [Week 6, p. 37]

## Mental model
Counter-current extraction is designed exactly like an absorber, with feed and solvent playing the roles of liquid and gas [Week 6, p. 28]. If carrier and solvent are immiscible, the solute-free flows F′ and S′ are constant. In mole or mass *ratios* the balance is a straight operating line, so you can step McCabe–Thiele against the equilibrium line, or use Kremser with $E = KS/F$ if the system is dilute with constant K [Week 6, p. 28–30]. If they are partly miscible, the flows change, so you work on the ternary diagram instead [Week 6, p. 31]. Mixing gives M, and the products $E_1$ and $R_N$ sit on a line through it [Week 6, p. 31]. Extending $E_1F$ and $SR_N$ to where they cross gives the operating (difference) point P. Every passing pair of streams lies on a line through P, so you step alternately along a tie line (equilibrium) and along a line to P (balance) from F until you pass $R_N$ [Week 6, p. 34–35]. The minimum solvent is where an operating line coincides with a tie line, the extraction analogue of the pinch [Week 6, p. 36].

## Concepts and definitions
- **Immiscible systems, McCabe–Thiele**: same approach as absorption, using solute-free carrier flow F′ and solute-free solvent flow S′ with ratios $X = x/(1-x)$, $Y = y/(1-y)$. Check whether weight or mole fractions are used. [Week 6, p. 28]
- **Notation**: y and Y represent the *extract* phase, and x and X the raffinate. [Week 6, p. 29]
- **Operating line (extraction)**: from the component balance $F'X_n + S'Y_1 = F'X_0 + S'Y_{n+1}$. [Week 6, p. 29; FormelarkKP3010.pdf, p. 6, eq. 61]
- **Minimum solvent flow (immiscible)**: found as for absorption. [Week 6, p. 29]
- **Analytical Kremser (immiscible)**: assumes dilute streams and a constant distribution coefficient. [Week 6, p. 30]
- **Partly miscible, graphical**: use the ternary diagram with F (feed), S (solvent), R (raffinate product), E (extract product) and M (mixing point = overall feed composition). $M = F + S = R_N + E_1$. [Week 6, p. 31]
- **Operating (difference) point P**: the intersection of the line through $E_1$ and F with the line through S and $R_N$. Operating lines through P represent the passing streams. [Week 6, p. 34]
- **Stage stepping (ternary)**: alternate between lines parallel to the tie lines (equilibrium) and lines to P (flows between stages). Start at F, stop when $R_N$ is passed, count the stages. [Week 6, p. 35]
- **Minimum solvent-to-feed ratio**: at an infinite number of stages, with the operating line parallel to a tie line. From F, follow the tie line to $E_{1,max}$, then locate M on line $E_{1,max}R_N$ and FS. A reasonable value is $S = 1.5\,S_{min}$. [Week 6, p. 36]
- **Maximum solvent-to-feed ratio**: with too much solvent, M may not lie in the two-phase region. The limit is at the equilibrium (binodal) curve. In most cases this is not a problem. [Week 6, p. 37]

## Visuals
- **Counter-current cascade** · process diagram [Week 6, p. 31; practice_exam_solutions.pdf, Ex. 4]
  - Boxes 1…N. Feed F enters stage 1 and the raffinate flows right to leave stage N as $R_N$. Solvent S enters stage N and the extract flows left to leave stage 1 as $E_1$. A dashed envelope around all stages labelled "$M = F + S = R_N + E_1$".
- **McCabe–Thiele for immiscible extraction** · curve sketch (schematic) [Week 6, p. 28–29]
  - x-axis X (raffinate ratio), y-axis Y (extract ratio). Equilibrium line through the origin and a straight operating line with slope $F'/S'$ through the end points $(X_0, Y_1)$ and $(X_N, Y_{N+1})$, with a staircase between them.
  - Caption: "same construction as absorption; y/Y = extract".
- **Ternary: difference point and stepping** · curve sketch [Week 6, p. 34–35; exercise_06_solutions.pdf, P2c]
  - Ternary diagram with binodal curve and tie lines. Points F, S, $R_N$, $E_1$. Extend line $E_1F$ and line $SR_N$ until they meet at P.
  - From F: tie line to the first equilibrium extract/raffinate pair, then a line to P to the next stream, alternating until past $R_N$. Number the stages. Biodiesel example: 3 stages ($E_1$, $E_2$, $E_3$).
- **Minimum solvent construction** · curve sketch [Week 6, p. 36, 38–39; practice exam 2 solutions.pdf, Q4c]
  - From F, draw the line parallel to the tie lines to the extract branch: $E_{max}$. Line $E_{max}$–$R_N$ crosses FS at $M_{min}$.
  - Lecture numbers: $x_{M} = 0.25$, $x_F = 0.3$, giving S/F = 0.2. Exam numbers: $M_{min}$ at 23 % acetone, $E_{max}$ at 65 % acetone / 16 % water / 19 % benzene.
- **Maximum solvent** · curve sketch [Week 6, p. 37]
  - Line FS with M sliding toward S. Shade the part beyond the binodal curve red: "M outside the two-phase region → no separation".
- **Interactive plot**: Kremser for extraction, $N = \dfrac{\ln\left[\frac{x_{in} - y_{in}/K}{x_{out} - y_{in}/K}(1 - \frac{1}{E}) + \frac{1}{E}\right]}{\ln E}$ [Week 6, p. 30; FormelarkKP3010.pdf, p. 6, eq. 62].
  - Slider: E from 1.05 to 20 (start 9.46). Fixed $x_{in}/x_{out} = 100$ (99 % removal), $y_{in} = 0$.
  - Show N live and a curve of N vs E. At E = 9.46 it must show N = 2.0, matching the phenol two-stage counter-current answer [exercise_06_solutions.pdf, P1c].

## Equations

### Inert-basis ratios
$$X = \frac{x}{1-x}, \qquad Y = \frac{y}{1-y}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $X$ | solute per solute-free carrier (raffinate side) | – (mol/mol or kg/kg) |
| $Y$ | solute per solute-free solvent (extract side) | – |

[Week 6, p. 28]

### Component balance and operating line (immiscible)
$$F'X_n + S'Y_1 = F'X_0 + S'Y_{n+1} \;\Rightarrow\; Y_{n+1} = \frac{F'}{S'}X_n + Y_1 - \frac{F'}{S'}X_0$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F'$ | solute-free carrier flow | kg/h or kmol/h |
| $S'$ | solute-free solvent flow | kg/h or kmol/h |
| $X_0, X_n$ | raffinate ratio entering stage 1, leaving stage n | – |
| $Y_1, Y_{n+1}$ | extract ratio leaving stage 1, entering stage n | – |

[Week 6, p. 29; FormelarkKP3010.pdf, p. 6, eq. 61]

### Equilibrium (McCabe–Thiele, extraction)
$$K_A = \frac{y_A}{x_A}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $y_A, x_A$ | solute fraction in extract and raffinate | – |

The formula sheet form. [FormelarkKP3010.pdf, p. 6, eq. 60; Week 6, p. 7]

### Kremser for extraction
$$N = \frac{\ln\left[\dfrac{x_{in} - y_{in}/K}{x_{out} - y_{in}/K}\left(1 - \dfrac{1}{E}\right) + \dfrac{1}{E}\right]}{\ln E}, \quad E = \frac{KS}{F}, \qquad \frac{x_{in} - x_{out}}{x_{in} - y_{in}/K} = 1 - \frac{x_R}{x_F} = \frac{E^{N+1} - E}{E^{N+1} - 1}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $x_{in}, x_{out}$ | solute fraction in feed and final raffinate | – |
| $y_{in}$ | solute fraction in the entering solvent | – |
| $E$ | extraction factor | – |

Dilute streams, constant K. [Week 6, p. 30; FormelarkKP3010.pdf, p. 6, eq. 62]

### Mixing point (partly miscible)
$$M = F + S = R_N + E_1, \qquad x_M M = x_F F + x_S S = x_R R_N + x_E E_1$$
| Symbol | Meaning | Unit |
|---|---|---|
| $M$ | total of feed and solvent | kg/h (or normalised to 1) |
| $x_M$ | mixing-point composition read off the diagram | – |

To get S/F, set M = 1 and solve. [Week 6, p. 31, 33, 36]

## Worked example
**Minimum benzene flow for acetone/water extraction** [practice exam 2 solutions.pdf, Q4c]
Feed 40 kg/h with 25 wt % acetone in water. Pure benzene solvent. Raffinate 5 wt % acetone. Counter-current.
1. Minimum solvent means the operating line is parallel to a tie line. Draw the line from F parallel to the tie lines to the extract branch: that is $E_{max}$. [Week 6, p. 36]
2. Draw the line $E_{max}$–$R_N$ ($R_N$ on the raffinate branch at 5 wt % acetone). Where it crosses FS is the mixing point M.
3. Read M: 23 wt % acetone, 72 % water, 5 % benzene.
4. Acetone balance: $Fx_F + Sx_S = Mx_M$, so $40\cdot 0.25 + S\cdot 0 = M\cdot 0.23$, giving M = 43.5 kg/h.
5. $S_{min} = M - F = 43.5 - 40 = 3.5$ kg/h.
6. Extract composition at $S_{min}$, read at $E_{max}$: 65 wt % acetone, 16 % water, 19 % benzene.
7. Design value would be about $1.5\,S_{min}$. [Week 6, p. 36]

## Faded example
**Minimum solvent-to-feed ratio from the lecture diagram** [Week 6, p. 38–39]
Ternary diagram with F at $x_F = 0.3$ (solute), pure solvent S, raffinate $R_N$ given.
1. **(try)** How do you find $E_{max}$? → Draw a line from F parallel to the tie lines to the extract side of the binodal curve.
2. **(try)** How do you find M? → Draw $E_{max}$–$R_N$ and intersect it with FS.
3. Read $x_M = 0.25$ (solute).
4. **(try)** Solute balance with M = 1. → $0.25 = 0.3F + 0$, so F = 0.83 and S = 0.17.
5. **(try)** Ratio. → $S/F = 0.2$ (minimum). A reasonable design is $1.5\times$ that, so S/F ≈ 0.3.

[Week 6, p. 36, 39]

## Exam traps
- **Minimum solvent: tie line from F, not from $R_N$**: the operating line through F coincides with a tie line, which gives $E_{max}$. [Week 6, p. 36; practice exam 2 solutions.pdf, Q4c]
- **M comes from two lines**: in a design, M is the intersection of FS with $E_1R_N$. Then use the balance, not the other way round. [Week 6, p. 36; practice exam 2 solutions.pdf, Q4c]
- **Normalise M = 1 to get S/F**: that's the slide's trick. Don't confuse S/F with S/M. [Week 6, p. 33, 39]
- **Inconsistent K on slide p. 29**: it writes $K = x/y$ while saying y is the extract. The formula sheet and p. 7 use extract over raffinate ($K = y/x$). Use the formula sheet. [Week 6, p. 7, 29; FormelarkKP3010.pdf, p. 6, eq. 60]
- **Kremser in extraction uses x (raffinate) compositions and E**: it has the stripping form, with E in place of S. [Week 6, p. 30; FormelarkKP3010.pdf, p. 6, eq. 62]
- **Ratios vs fractions**: McCabe–Thiele uses X and Y on a solute-free basis. Check whether wt or mol is used. [Week 6, p. 28]
- **Stepping order on the ternary**: tie line (equilibrium), then a line to P (balance), alternating. Start at F and stop once you pass $R_N$. [Week 6, p. 35]
- **Too much solvent**: if M falls outside the two-phase region there's no extraction. Check before reporting a large S/F. [Week 6, p. 37]

## Past exam tasks
- Autumn 2022, Q4c: minimum benzene flow (3.5 kg/h) and the extract composition at that flow (65/16/19 wt %).
- Practice exam 1, Ex. 4c: extract composition $E_1$ (45 wt % solute) from the line $R_2$–M in a two-stage counter-current system (page 19).

## Test yourself
**Q:** Acetone/water/ethyl-acetate example: $x_M = 0.35$ acetone, $x_F = 0.46$, pure solvent. Find S/F.
**A:** With M = 1: $0.35 = 0.46F$, so F = 0.76, S = 0.24, S/F = 0.31. [Week 6, p. 33]

**Q:** How do you locate the operating point P?
**A:** Intersect the line through $E_1$ and F with the line through S and $R_N$. [Week 6, p. 34]

**Q:** Biodiesel wash on the ternary diagram: how many stages were needed, and how were they found?
**A:** Three stages. Use the crossing of $E_1F$ and $SR$ as the working (difference) point, then alternate tie lines and operating lines. [exercise_06_solutions.pdf, P2c]

**Q:** Write the immiscible operating line and give its slope.
**A:** $Y_{n+1} = \frac{F'}{S'}X_n + Y_1 - \frac{F'}{S'}X_0$, with slope $F'/S'$. [Week 6, p. 29]

**Q:** E = 9.46, $y_{in} = 0$, 99 % removal. How many counter-current stages?
**A:** $N = \ln[100(1 - 1/9.46) + 1/9.46]/\ln 9.46 = 2.0$. [Week 6, p. 30; exercise_06_solutions.pdf, P1c]

## Sources
- [Week 6 - Liquid-liquid extraction with solutions.pdf, p. 27–39]
- [FormelarkKP3010.pdf, p. 6, eq. 59–62]
- [exercise_06_eng.pdf, Problem 1c, 2c]
- [exercise_06_solutions.pdf, P1c, P2c (scanned pages)]
- [practice exam 2 solutions.pdf, Q4c]
- [practice_exam_solutions.pdf, Ex. 4c]

> GAP: The files contain no worked McCabe–Thiele example for immiscible extraction (Week 6, p. 28–29 only give the equations), so that visual is schematic.
> GAP: The ternary figures (Week 6, p. 32–39) are images. Only the quoted read-off values are available.
