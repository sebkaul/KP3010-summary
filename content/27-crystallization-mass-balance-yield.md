---
slug: 27-crystallization-mass-balance-yield
title: Crystallization mass balances and yield
topic: crystallization
exam_weight: high
exam_weight_note: "Maximum yield and evaporation fraction on 1 of 2 practice exams (Autumn 2022 Q6.2–6.3, 4 of 8 pts); cooling balance in Practice exam 1 Ex. 6b"
builds_on: [26-crystallization-fundamentals]
used_in: [28-supersaturation-metastable-zone]
sources: ["Week 8 - Crystallization and precipitation with solutions.pdf", "FormelarkKP3010.pdf", "exercise_08_eng.pdf", "exercise_08_solutions.pdf", "practice exam 2 solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** On what basis are the crystallization balances written?
**A:** Solute-free solvent flows (F′, V′, S′) and solute weight ratios (kg solute per kg solvent), $X_F$ and $X_C$. [Week 8, p. 11]

**Q:** What composition does the mother liquor leaving the crystallizer usually have?
**A:** The saturation composition at the crystallizer conditions. [Week 8, p. 12]

**Q:** Feed $X_F = 1.0$, saturation at the end $X_C = 0.458$, no evaporation. Maximum yield?
**A:** $Y = 1 - 0.458/1.00 = 0.542$. [practice exam 2 solutions.pdf, Q6.2]

## Mental model
Track the solvent, because it doesn't crystallize (except in hydrates). A feed with F′ kg of solvent carries $F'X_F$ kg of solute in [Week 8, p. 11]. Some solvent may boil off ($V' = \phi_EF'$), and the rest leaves as mother liquor ($S' = F'(1-\phi_E)$), saturated, so it holds $S'X_C$ kg of solute [Week 8, p. 12]. Whatever solute isn't in the liquor is crystals: $C = F'X_F - S'X_C$ [Week 8, p. 11]. The yield is that over what came in. It improves when the end solubility $X_C$ is low compared to $X_F$ (cool more) or when less solvent remains to hold solute (evaporate more) [Week 8, p. 16]. Cooling alone is capped by the solubility curve, and evaporation lifts that cap. That is why the exam asks how much water to evaporate to hit a target yield [practice exam 2 solutions.pdf, Q6.3].

## Concepts and definitions
- **Solute-free basis**: solvent flows $F'$ (feed), $V'$ (vapour), $S'$ (mother liquor), and solute weight ratios $X_F$, $X_C$. Evaporative crystallization has three relevant phases. [Week 8, p. 11]
- **Overall mass balance**: $F = V + S + C$. [Week 8, p. 11]
- **Fraction evaporated $\phi_E$**: $V' = F'\phi_E$ and $S' = F'(1-\phi_E)$. [Week 8, p. 12]
- **Exit composition**: often the saturation composition at the crystallizer conditions. [Week 8, p. 12]
- **Yield Y**: how much of the solute is recovered, $C/(F'X_F)$. [Week 8, p. 16]
- **Hydrated crystals**: if the product is a hydrate (e.g. CuSO₄·5H₂O), the crystals carry water out, so the water balance must include it. [exercise_08_eng.pdf, Problem 3]
- **Multi-step evaporation**: with 20 % of the initial feed water evaporated in each of three steps, 60 % of the feed water is removed in total. [exercise_08_eng.pdf, Problem 4 and short answer]

## Visuals
- **Crystallizer flowsheet** · process diagram [Week 8, p. 11–12]
  - Feed F ($F'$, $X_F$) → crystallizer. Out: vapour V ($V' = \phi_EF'$, no solute), mother liquor S ($S' = F'(1-\phi_E)$, $X_C$ = saturation), crystals C.
  - Under the diagram: "$F = V + S + C$" and "$F'X_F = C + S'X_C$".
- **KNO₃ cooling path on the solubility curve** · curve sketch [Week 8, p. 13–15]
  - x-axis T (°C), y-axis kg KNO₃ per kg water. Point (80 °C, 1.2) above the curve. Move horizontally (cooling) to 50 °C, then drop vertically to the curve at 0.85.
  - Label the vertical drop "crystals C = 0.35 kg per kg water" and "29 % crystallized".
- **Cooling only vs cooling + evaporation** · plot (bar chart) [Week 8, p. 15, 18]
  - KNO₃ 80 → 50 °C: yield 0.29 without evaporation, 0.65 with half the water evaporated.
- **Yield map** · plot [Week 8, p. 16; practice exam 2 solutions.pdf, Q6.2–6.3]
  - x-axis $\phi_E$ (0–0.9), y-axis Y (0–1). Lines $Y = 1 - r(1-\phi_E)$ for r = $X_C/X_F$ = 0.458 (KNO₃ exam), 0.71 (KNO₃ lecture), 0.563 (sugar).
  - Mark the exam point $\phi_E = 0.56$, Y = 0.80.
- **Interactive plot**: $Y = 1 - \dfrac{X_C}{X_F}(1 - \phi_E)$ and $C = F'(X_F - X_C(1-\phi_E))$ [Week 8, p. 16; FormelarkKP3010.pdf, p. 7, eq. 75–76].
  - Sliders: $X_F$ from 0.2 to 2 (start 1.00), $X_C$ from 0 to $X_F$ (start 0.458), $\phi_E$ from 0 to 0.9 (start 0). Fixed $F' = 100$ kg water/h.
  - Show Y and C live. Preset buttons: "exam Y_max" (0.542) and "exam 80 % target", which sets $\phi_E = 0.56$.

## Equations

### Overall and inert balances
$$F = V + S + C, \qquad F' + F'X_F = V' + S' + S'X_C + C$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F, V, S, C$ | total feed, vapour, mother liquor and crystal flows | kg/h |
| $F', V', S'$ | solute-free solvent flows | kg solvent/h |
| $X_F, X_C$ | solute weight ratio in feed and mother liquor | kg solute/kg solvent |

[Week 8, p. 11; FormelarkKP3010.pdf, p. 7, eq. 74]

### Solute balance
$$F'X_F = C + S'X_C$$
Anhydrous crystals. [Week 8, p. 11]

### Evaporation split
$$V' = F'\phi_E, \qquad S' = F'(1 - \phi_E)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\phi_E$ | fraction of feed solvent evaporated | – |

[Week 8, p. 12]

### Yield
$$Y = \frac{C}{F'X_F} = 1 - \frac{S'X_C}{F'X_F} = 1 - \frac{X_C}{X_F}(1 - \phi_E)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $Y$ | (maximum, equilibrium) yield | – |

With no evaporation, $Y = 1 - X_C/X_F$. [Week 8, p. 16; FormelarkKP3010.pdf, p. 7, eq. 75]

### Crystal production rate
$$C = F'\left(X_F - X_C(1 - \phi_E)\right)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $C$ | crystal production rate | kg/h |

[FormelarkKP3010.pdf, p. 7, eq. 76]

## Worked example
**KNO₃ cooled from 80 to 50 °C, without and with evaporation** [Week 8, p. 13–18]
Feed 1.2 kg/L KNO₃ in water at 80 °C, cooled to 50 °C.
1. Saturation at 50 °C from the curve: about 85 g/100 mL = 0.85 kg/L.
2. With water ≈ 1 kg/L: $X_F = 1.2$ and $X_C = 0.85$ kg KNO₃/kg water.
3. No vapour, so $F' = S'$. Basis $F' = 1$ kg/s.
4. Solute in: $F'X_F = 1.2$ kg/s.
5. Balance: $1.2 = C + 1\cdot 0.85$, so $C = 0.35$ kg/s.
6. Fraction crystallized: $0.35/1.2 = 0.29$.
7. Now evaporate half the water, $\phi_E = 0.5$: $Y = 1 - \frac{0.85}{1.2}(1 - 0.5) = 0.65$.

## Faded example
**KNO₃ yield and the evaporation needed for 80 %** [practice exam 2 solutions.pdf, Q6.2–6.3]
100 g KNO₃ per 100 mL water at 60 °C, cooled to 30 °C. Water density 1 kg/L. The figure gives 45.8 g/100 mL at 30 °C.
1. **(try)** Feed ratio. → $X_F = 100/100 = 1.00$.
2. **(try)** Mother-liquor ratio. → $X_C = 0.458$.
3. **(try)** Maximum yield with cooling only. → $Y_{max} = 1 - 0.458/1.00 = 0.542$.
4. Target Y = 0.80 by also evaporating water: $0.80 = 1 - \frac{0.458}{1.00}(1 - \phi_E)$.
5. **(try)** Solve for $\phi_E$. → $1 - \phi_E = 0.20/0.458 = 0.437$, so $\phi_E = 0.56$.

[practice exam 2 solutions.pdf, Q6.2–6.3]

## Exam traps
- **Ratios, not fractions**: $X$ is kg solute per kg solvent. Solubility in g/100 g water divides by 100 directly (45.8 → 0.458). Don't convert to wt %. [practice exam 2 solutions.pdf, Q6.2; Week 8, p. 11]
- **$X_C$ is read at the final temperature**: it's the saturation value in the crystallizer, not at the feed temperature. [Week 8, p. 12]
- **$\phi_E$ is a fraction of the feed solvent**: $S' = F'(1-\phi_E)$. Evaporating 38 kg/h out of 1000 kg/h is $\phi_E = 0.038$. [Week 8, p. 12; exercise_08_eng.pdf, Problem 3]
- **Yield is based on solute in**: $Y = C/(F'X_F)$. Dividing by the feed mass gives a different number. [Week 8, p. 16]
- **kg/L ≈ kg/kg**: the lecture treats 1.2 kg/L as 1.2 kg per kg water, which assumes water at 1 kg/L. [Week 8, p. 15]
- **Hydrates break the simple formula**: for CuSO₄·5H₂O, the crystals remove water too. Write separate water and salt balances, because $C = F'(X_F - X_C(1-\phi_E))$ no longer holds as is. [exercise_08_eng.pdf, Problem 3]
- **Multi-step evaporation adds up on the initial water**: 3 × 20 % of the *initial* feed water means $\phi_E = 0.6$. [exercise_08_eng.pdf, Problem 4]

## Past exam tasks
- Autumn 2022, Q6.2: maximum yield when cooling KNO₃ from 60 to 30 °C ($Y_{max} = 0.542$).
- Autumn 2022, Q6.3: fraction of water to evaporate for 80 % yield ($\phi_E = 0.56$).
- Practice exam 1, Ex. 6b: KNO₃ crystals from cooling 70 → 30 °C (25 g per 100 g water) and mother-liquor wt % (page 26).

## Test yourself
**Q:** Sugar, saturated at 80 °C (3.62 kg/kg water) and cooled to 20 °C (2.04 kg/kg water). Maximum yield, and with half the water evaporated first?
**A:** $Y = 1 - 2.04/3.62 = 0.44$. With $\phi_E = 0.5$: $Y = 1 - 0.564\cdot 0.5 = 0.72$. [exercise_08_eng.pdf, Problem 2 and short answers]

**Q:** Sodium acetate, $X_F = 0.655$, $X_C = 0.363$, $F' = 100$ kg water/h. Find the yield and C.
**A:** $Y = 1 - 0.363/0.655 = 0.445$, and $C = 0.445\cdot 0.655\cdot 100 = 29.2$ kg/h. [exercise_08_solutions.pdf, Problem 1]

**Q:** CuSO₄·5H₂O (anhydrous fraction 0.160/0.2497 = 0.641): 1000 kg/h water + 280 kg/h CuSO₄ at 40 °C, cooled to 10 °C (17.4 g/100 g water), 38 kg/h water evaporated. Crystals?
**A:** Free water in the liquor $S' = 1000 - 38 - 0.359C$. Salt: $280 = 0.174S' + 0.641C$, which gives $C \approx 195$ kg/h. [exercise_08_eng.pdf, Problem 3 and short answer]

**Q:** Saturated NaCl brine (temperature-independent solubility), three steps each evaporating 20 % of the initial water. Yield?
**A:** $X_C = X_F$ and $\phi_E = 0.6$, so $Y = 1 - 1\cdot(1 - 0.6) = 0.60$. [exercise_08_eng.pdf, Problem 4a and short answer]

**Q:** That plant makes 250 000 t/yr over 8000 h/yr. What is C?
**A:** $250\cdot 10^6/8000 = 31\,250$ kg/h. [exercise_08_eng.pdf, Problem 4b and short answer]

## Sources
- [Week 8 - Crystallization and precipitation with solutions.pdf, p. 11–18]
- [FormelarkKP3010.pdf, p. 7, eq. 74–76]
- [exercise_08_eng.pdf, Problems 1–4 and short answers]
- [exercise_08_solutions.pdf, Problem 1]
- [practice exam 2 solutions.pdf, Q6.2–6.3]
- [practice_exam_solutions.pdf, Ex. 6b]

> GAP: Exercise 8 official solutions exist only for Problem 1. The worked steps for Problems 3–4 above are computed from the task data and match the short answers. Problem 4c's brine feed (short answer 208 490 kg/h) isn't reproduced step by step.
