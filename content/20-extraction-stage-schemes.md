---
slug: 20-extraction-stage-schemes
title: Single, co-, cross- and counter-current extraction stages
topic: extraction
exam_weight: low
exam_weight_note: "The analytical stage formulas aren't on either practice exam (both use ternary diagrams); exercise 6 Problem 1 is built on them"
builds_on: [18-lle-principles-solvent-equipment, 19-ternary-diagrams, 11-kremser-minimum-absorbent-flow]
used_in: [21-counter-current-extraction-design]
sources: ["Week 6 - Liquid-liquid extraction with solutions.pdf", "FormelarkKP3010.pdf", "exercise_06_eng.pdf", "exercise_06_solutions.pdf"]
---

## Pretest
**Q:** You add a second co-current stage after the first. How much extra separation do you get?
**A:** None. The second stage starts already at equilibrium, so $x_{2,R}/x_F = 1/(1+E)$, the same as one stage. [Week 6, p. 17]

**Q:** Which scheme gives the highest fraction extracted for the same solvent and number of stages?
**A:** Counter-current. [Week 6, p. 20, 22]

**Q:** In cross-current extraction with N stages, what extraction factor does each stage get?
**A:** $E/N$, because the solvent is split equally over the stages. [Week 6, p. 18]

## Mental model
One equilibrium stage splits the solute between the solvent and the carrier according to the extraction factor $E = KS/F$. The raffinate keeps the fraction $1/(1+E)$ [Week 6, p. 16]. Adding stages helps only if each new stage sees a fresh driving force. Co-current sends the already-equilibrated extract and raffinate on together, so nothing changes [Week 6, p. 17]. Cross-current gives every stage a fresh portion of solvent, which helps but dilutes the extract [Week 6, p. 18]. Counter-current sends the fresh solvent to meet the leanest raffinate and the richest extract to meet the incoming feed. Every stage keeps a driving force, giving the best extraction from the least solvent [Week 6, p. 19–20]. Its formula is the Kremser equation again, with E playing the role of A [Week 6, p. 20]. All of these assume dilute solute and immiscible phases, so the flows S and F stay constant [Week 6, p. 16].

## Concepts and definitions
- **Extraction schemes**: single stage (often not sufficient), co-current, cross-current, counter-current. The goals are a high extract concentration and a high degree of solute extraction. [Week 6, p. 15]
- **Single equilibrium stage assumptions**: the solute is dilute, so transfer doesn't change the flows: $S = E_1$, $F = R_1$. Pure solvent, $x_S = 0$. [Week 6, p. 16]
- **Co-current stages**: raffinate and extract go to the next stage together. No additional separation. [Week 6, p. 17]
- **Cross-current stages**: the solvent is divided between N stages, $S = S_{total}/N$, so each stage has $E/N$. [Week 6, p. 18]
- **Counter-current stages**: feed and solvent enter at opposite ends. Balances over each stage plus equilibrium per stage give the Kremser equation for extraction. Counter-current works best. [Week 6, p. 19–20]
- **Fraction extracted**: $x_E/x_F$ on the slide means the fraction of solute that ends up in the extract, $1 - x_R/x_F$. [Week 6, p. 20, 22]
- **Weight ratios**: when concentrations are high, use solute/carrier weight ratios (e.g. phenol/water), and K can still be used. [exercise_06_solutions.pdf, P1]

## Visuals
- **Four flow schemes** · process diagram [Week 6, p. 15–20]
  - Row 1, single stage: F, $x_F$ and S, $x_S$ in; R, $x_R$ and E, $x_E$ out.
  - Row 2, co-current: two boxes, with R and E from stage 1 both going into stage 2. Caption "no extra separation".
  - Row 3, cross-current: three boxes in series for the raffinate, each with its own fresh solvent S/N in and extract out.
  - Row 4, counter-current: three boxes. Feed enters stage 1 and the raffinate flows → stage 3. Fresh solvent enters stage 3 and the extract flows ← to stage 1.
  - Highlight that only counter-current puts fresh solvent against the leanest raffinate.
- **Fraction extracted by scheme (acetic acid/1-butanol)** · plot (bar chart) [Week 6, p. 21–22]
  - E = 1.08, N = 5. Bars: co-current 0.52, cross-current 0.62, counter-current 0.86. y-axis: fraction of acetic acid extracted (–).
- **Solvent needed for 99 % phenol removal** · plot (bar chart, log y) [exercise_06_solutions.pdf, P1a–e]
  - $K = 0.2$. Bars for S/F: single batch 495; 2 cross-current 90; 2 counter-current 47.3; ∞ cross-current 23.0; ∞ counter-current 4.95. y-axis: S/F (kg heptane per kg feed), log scale.
- **Interactive plot**: fraction extracted vs number of stages for the three multistage formulas [Week 6, p. 21–22].
  - Sliders: N from 1 to 10 (start 5) and S from 1 to 30 kmol/h (start 8). Fixed K = 1.613, F = 12 kmol/h.
  - Show E live and three curves (co-, cross- and counter-current fraction extracted vs N) with markers at the current N. At start values it must show E = 1.08 and 0.52 / 0.62 / 0.86.

## Equations

### Single stage
$$x_F F + x_S S = x_E S + x_R F, \quad K = \frac{x_E}{x_R} \;\Rightarrow\; x_R = \frac{x_F}{1 + \frac{KS}{F}}, \qquad \frac{x_R}{x_F} = \frac{1}{1+E}, \quad E = \frac{KS}{F}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $x_F, x_R$ | solute fraction (or ratio) in feed and raffinate | – |
| $x_S, x_E$ | solute fraction in solvent and extract | – |
| $F, S$ | carrier (feed) and solvent flow or amount | kg/h, kmol/h or kg |
| $K$ | distribution coefficient | – |
| $E$ | extraction factor | – |

Dilute, immiscible phases ($S = E_1$, $F = R_1$), pure solvent. [Week 6, p. 16; FormelarkKP3010.pdf, p. 6, eq. 54–55]

### Co-current (N stages)
$$\frac{x_{N,R}}{x_F} = \frac{1}{1+E}$$
Same as one stage. [Week 6, p. 17; FormelarkKP3010.pdf, p. 6, eq. 56]

### Cross-current (N stages, solvent split equally)
$$\frac{x_{N,R}}{x_F} = \frac{1}{(1 + E/N)^N}, \qquad \frac{x_E}{x_F} = 1 - \frac{1}{(1+E/N)^N}, \qquad N\to\infty:\; \frac{x_\infty}{x_F} = \frac{1}{e^{E}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $N$ | number of stages | – |
| $E$ | extraction factor based on the total solvent | – |

[Week 6, p. 18; FormelarkKP3010.pdf, p. 6, eq. 57; exercise_06_solutions.pdf, P1d]

### Counter-current (Kremser for extraction)
$$\frac{x_R}{x_F} = \frac{1}{1 + E + E^2 + \dots + E^N} = \frac{E - 1}{E^{N+1} - 1}, \qquad \frac{x_E}{x_F} = 1 - \frac{x_R}{x_F} = \frac{E^{N+1} - E}{E^{N+1} - 1}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $x_R$ | solute fraction in the final raffinate | – |

Derived from stage-by-stage balances and $K$ on each stage. For $N\to\infty$ with $E < 1$: $x_R/x_F \to 1 - E$. [Week 6, p. 19–20; FormelarkKP3010.pdf, p. 6, eq. 58; exercise_06_solutions.pdf, P1e]

## Worked example
**Acetic acid extracted with 1-butanol: compare the schemes** [Week 6, p. 21–22]
10 mol % acetic acid in water, pure 1-butanol, K = 1.613, F = 12 kmol/h, S = 8 kmol/h, 5 stages.
1. Extraction factor: $E = KS/F = 1.613\cdot 8/12 = 1.08$.
2. Co-current: $x_E/x_F = 1 - \frac{1}{1+E} = 1 - \frac{1}{2.08} = 0.52$.
3. Cross-current: $1 - \frac{1}{(1+E/5)^5} = 1 - \frac{1}{1.215^5} = 0.62$.
4. Counter-current: $\frac{E^6 - E}{E^6 - 1} = 0.86$.
5. Conclusion: with the same solvent and stages, counter-current extracts 86 %, compared with 62 % and 52 %.

## Faded example
**Heptane needed for 99 % phenol removal** [exercise_06_eng.pdf, Problem 1; exercise_06_solutions.pdf, P1a–e]
1000 kg water with 8 wt % phenol, phenol-free heptane, $K = 0.2$ (wt fr heptane / wt fr water). Water and heptane are immiscible.
1. Concentrations are high, so use weight ratios: phenol in 80 kg, phenol out $(1 - 0.99)\cdot 80 = 0.8$ kg, so $X_{out}/X_{feed} = (0.8/920)/(80/920) = 0.01$. Then $S/F = E/K$.
2. **(try)** Single batch: $1/(1+E) = 0.01$. → E = 99, so S/F = 99/0.2 = 495.
3. **(try)** Two cross-current stages with equal heptane: $1/(1+E/2)^2 = 0.01$. → $(1 + E/2)^2 = 100$, E = 18, S/F = 90.
4. **(try)** Two counter-current stages: $1/(1+E+E^2) = 0.01$. → E = 9.46, S/F = 47.3.
5. **(try)** Infinite cross-current: $1/e^E = 0.01$. → E = 4.6, S/F = 23.0.
6. **(try)** Infinite counter-current: limit $= 1 - E = 0.01$. → E = 0.99, S/F = 4.95.

[exercise_06_solutions.pdf, P1a–e]

## Exam traps
- **Co-current adds nothing**: if a question offers co-current stages as "more stages = better", it's a trap. [Week 6, p. 17]
- **Cross-current uses E/N per stage**: with E based on the *total* solvent. Using E in each stage double-counts the solvent. [Week 6, p. 18]
- **Exponent N+1**: the counter-current formula has $E^{N+1}$, not $E^N$. Check with N = 1: $(E-1)/(E^2-1) = 1/(1+E)$. [Week 6, p. 19; FormelarkKP3010.pdf, p. 6, eq. 58]
- **Slide typo in K**: Week 6, p. 19 writes $K = x_{1,R}/x_{1,E}$. The definition is $K = x_E/x_R$ (p. 7, p. 16), and the result $1/(1+E+\dots)$ only follows from that. [Week 6, p. 7, 16, 19]
- **Fraction extracted vs raffinate ratio**: the "% extracted" is $1 - x_R/x_F$. Don't report $x_R/x_F$. [Week 6, p. 22]
- **Extraction factor E ≠ extract stream E**: same letter, different things. [Week 6, p. 16]
- **High concentrations → weight ratios**: base the 99 % on phenol per kg water (ratio), so the carrier basis stays constant. [exercise_06_solutions.pdf, P1]
- **The formulas assume dilute, immiscible, constant K**: if the ternary diagram shows significant mutual solubility, use the graphical method (page 21). [Week 6, p. 16]

## Past exam tasks
- None on either practice exam uses these formulas. Both practice-exam extraction questions are graphical (pages 19, 21).

## Test yourself
**Q:** K = 1.613, S/F = 8/12, single stage. What fraction of acetic acid is extracted?
**A:** E = 1.08, so $1 - 1/2.08 = 0.52$. [Week 6, p. 22]

**Q:** Write the counter-current result for N = 2 and check it against the phenol solution.
**A:** $x_R/x_F = (E-1)/(E^3-1) = 1/(1+E+E^2)$. With 0.01 this gives E = 9.46. [Week 6, p. 19; exercise_06_solutions.pdf, P1c]

**Q:** Why does infinite counter-current need far less solvent than infinite cross-current (4.95 vs 23.0)?
**A:** In counter-current, fresh solvent meets the leanest raffinate, so every stage keeps a driving force. In cross-current each portion of solvent equilibrates only once with partly extracted raffinate. [Week 6, p. 18–20; exercise_06_solutions.pdf, P1d–e]

**Q:** What two assumptions let you write $S = E_1$ and $F = R_1$?
**A:** The solute is dilute (transfer negligible for the flows), and the phases are immiscible. [Week 6, p. 16; exercise_06_solutions.pdf, P1]

**Q:** Name the two goals the slide gives for choosing an extraction scheme.
**A:** High extract concentration and high degree of solute extraction. [Week 6, p. 15]

## Sources
- [Week 6 - Liquid-liquid extraction with solutions.pdf, p. 15–22]
- [FormelarkKP3010.pdf, p. 6, eq. 54–58]
- [exercise_06_eng.pdf, Problem 1]
- [exercise_06_solutions.pdf, P1a–e (scanned pages)]
