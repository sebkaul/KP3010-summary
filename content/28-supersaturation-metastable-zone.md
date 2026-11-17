---
slug: 28-supersaturation-metastable-zone
title: Supersaturation measures, the metastable zone and ways to create supersaturation
topic: crystallization
exam_weight: medium
exam_weight_note: "Supersaturation methods asked on 2 of 2 practice exams (Practice exam 1 Ex. 6a; Autumn 2022 Q6.1, Q6.4); S/σ/Δc definitions on the formula sheet but not examined"
builds_on: [26-crystallization-fundamentals, 27-crystallization-mass-balance-yield]
used_in: [29-nucleation-growth-crystallizers]
sources: ["Week 8 - Crystallization and precipitation with solutions.pdf", "FormelarkKP3010.pdf", "practice_exam_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** In which zone should a crystallizer operate, metastable or labile?
**A:** Metastable. The labile zone gives uncontrolled crystallization. [Week 8, p. 19]

**Q:** High supersaturation: many small crystals or few large ones?
**A:** Many smaller crystals, because primary nucleation is relatively high. [Week 8, p. 28]

**Q:** Na₂SO₄: cooling or evaporation?
**A:** It depends on where on its solubility curve you operate. [Week 8, p. 27]

## Mental model
Being above the solubility curve isn't enough to make crystals appear. Just above it is the metastable zone, where the driving force is too small to create new nuclei but existing crystals can grow [Week 8, p. 19]. Push further, past the metastable limit, and nuclei form spontaneously. In the labile zone that becomes uncontrolled, so you design to stay in the metastable band and let seeds grow [Week 8, p. 19]. How far you are from equilibrium is the supersaturation, expressed as a ratio S, a relative σ or an absolute Δc [Week 8, p. 21]. It matters because growth (and secondary nucleation) scale roughly linearly with it, while primary nucleation rises much faster. Gentle supersaturation gives few large crystals, aggressive gives a shower of fines [Week 8, p. 28]. How you create it depends on the solubility curve and the product: cool if the curve is steep, evaporate if it is flat. Vacuum, precipitation, anti-solvent and melt crystallization cover the special cases [Week 8, p. 22–24, 27].

## Concepts and definitions
- **Metastable zone**: supersaturated, but the driving force is still limited. No new crystals form, though crystal growth is possible. [Week 8, p. 19]
- **Metastable zone limit**: where the first nuclei form. [Week 8, p. 19]
- **Labile zone**: uncontrolled crystallization, so operating in the metastable zone is preferred. [Week 8, p. 19]
- **Degree of supersaturation**: the deviation from equilibrium, measured as the ratio S, relative σ, absolute Δc, or (for melts) undercooling ΔT. [Week 8, p. 21]
- **(1) Cooling**: used if the solubility slope with temperature is steep. Not often below room temperature. Direct or indirect (heat exchanger). Yield limited by the solubility curve. [Week 8, p. 22]
- **(2) Evaporation**: remove solvent to raise the solute concentration. Used for (nearly) flat solubility curves. May cause thermal degradation (operation at boiling point). [Week 8, p. 22]
- **(3) Vacuum crystallization**: cooling and evaporation combined. Evaporating the solvent cools the mixture (adiabatic). [Week 8, p. 23]
- **(4) Precipitation**: reagents added to generate supersaturation. Used for sparingly soluble compounds (0.001–1 kg/m³). The precipitate is an aggregate and often impure. [Week 8, p. 23]
- **(5) Anti-solvent crystallization**: another solvent is added to reduce the solute's solubility. Salting out: adding a salt reduces the activity of water. [Week 8, p. 23]
- **(6) Melt crystallization**: no solvent. The solute itself is the liquid (melt), cooled until crystals form while impurities stay behind. For high solute concentrations, with no solvent removal or recovery, but melt properties can't be influenced. [Week 8, p. 24]
- **Effect of supersaturation**: growth rate and secondary nucleation are linear in supersaturation. Primary nucleation has a higher-order dependence. High supersaturation gives many smaller crystals, low supersaturation gives fewer but larger crystals. [Week 8, p. 28]

## Visuals
- **Solubility, metastable and labile zones** · curve sketch [Week 8, p. 19]
  - x-axis T, y-axis concentration c. Lower curve: solubility $c^*(T)$, with "undersaturated (stable)" below. Upper dashed curve: metastable limit. Between them "metastable: growth only, no new nuclei". Above: "labile: uncontrolled nucleation".
  - A cooling path from the undersaturated region going left, entering the metastable zone (green, "operate here") and then the labile zone (red).
- **Supersaturation measures** · table-as-picture [Week 8, p. 21]
  - A single point (c, T) above $c^*$, with the vertical gap labelled Δc and annotations $S = c/c^*$ and $\sigma = \Delta c/c^*$. For melts, the horizontal gap from $T_m$ labelled ΔT.
- **Six ways to create supersaturation** · table-as-picture [Week 8, p. 22–24]
  - Six cards: cooling (steep curve, room T limit), evaporation (flat curve, thermal degradation risk), vacuum (cooling + evaporation, adiabatic), precipitation (sparingly soluble, 0.001–1 kg/m³, impure aggregate), anti-solvent / salting out, melt (no solvent, high concentration).
- **Steep vs flat vs non-monotonic solubility** · curve sketch [Week 8, p. 26–27]
  - Three schematic curves: KNO₃ (steep → "cool"), NaCl (nearly flat → "evaporate"), Na₂SO₄ (curve with a change in slope → "depends on location").
- **Rates vs supersaturation** · curve sketch [Week 8, p. 28]
  - x-axis supersaturation, y-axis rate. A straight line "growth & secondary nucleation (linear)" and a steeper curve "primary nucleation (higher order)" that crosses it.
  - Left of the crossing: "few, large crystals". Right of it: "many, small crystals".
- **Interactive plot**: $S = c/c^*$, $\sigma = (c - c^*)/c^*$, $\Delta c = c - c^*$ [Week 8, p. 21; FormelarkKP3010.pdf, p. 8, eq. 79–81].
  - Sliders: $c$ from 0.5 to 2.0 and $c^*$ from 0.3 to 1.5 kg/kg water (start c = 1.2, $c^*$ = 0.85, the KNO₃ lecture values [Week 8, p. 15]).
  - Show S, σ and Δc live, and an arrow on a schematic rate chart (p. 28) showing whether the regime leans toward "large crystals" or "many fines". Don't show numeric zone limits, because they're not in the files.

## Equations

### Supersaturation ratio
$$S = \frac{c}{c^*}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $S$ | supersaturation ratio | – |
| $c$ | actual concentration | e.g. kg/kg solvent or mol/m³ |
| $c^*$ | equilibrium saturation concentration | same as c |

[Week 8, p. 21; FormelarkKP3010.pdf, p. 8, eq. 79]

### Relative supersaturation
$$\sigma = \frac{c - c^*}{c^*}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\sigma$ | relative supersaturation ($= S - 1$) | – |

[Week 8, p. 21; FormelarkKP3010.pdf, p. 8, eq. 80]

### Absolute supersaturation
$$\Delta c = c - c^*$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\Delta c$ | absolute supersaturation | same as c |

[Week 8, p. 21; FormelarkKP3010.pdf, p. 8, eq. 81]

### Undercooling
$$\Delta T = T - T_m$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\Delta T$ | undercooling: deviation from the melting temperature | K |
| $T_m$ | melting temperature | K |

Written as on the slide and formula sheet. [Week 8, p. 21; FormelarkKP3010.pdf, p. 8, eq. 82]

## Worked example
**Cooling or evaporation? Three salts** [Week 8, p. 26–27]
Solubility curves for KNO₃, NaCl and Na₂SO₄ are given.
1. KNO₃: the solubility curve is steep in T, so a modest temperature drop gives a large Δc. Choose cooling. [Week 8, p. 22, 27]
2. NaCl: the curve is nearly flat, so cooling gives almost no supersaturation. Choose evaporation and accept the risk of operating at the boiling point. [Week 8, p. 22, 27]
3. Na₂SO₄: the slope depends on where you are on the curve, so it "depends on location". Cool where it is steep, evaporate where it is flat. [Week 8, p. 27]

## Faded example
**Supersaturation of the KNO₃ lecture feed at 50 °C** [Week 8, p. 13–15, 21]
Feed 1.2 kg KNO₃/kg water. At 50 °C the saturation is 0.85 kg/kg. Treat the feed as briefly cooled to 50 °C before any crystals form.
1. **(try)** Supersaturation ratio. → $S = 1.2/0.85 = 1.41$.
2. **(try)** Relative supersaturation. → $\sigma = 0.35/0.85 = 0.41$.
3. **(try)** Absolute supersaturation. → $\Delta c = 0.35$ kg/kg, which equals the crystal mass per kg water found on page 27.
4. **(try)** Compared with a gentle cooling to $S \approx 1.05$, which product would have more fines? → The $S = 1.41$ case, because primary nucleation grows faster than growth with supersaturation. [Week 8, p. 28]

[Week 8, p. 15, 21, 28] (S, σ and Δc are computed here from the lecture data)

## Exam traps
- **Operate in the metastable zone**: the labile zone means uncontrolled nucleation. A frequent "why" question. [Week 8, p. 19]
- **Three different supersaturation measures**: S is a ratio, σ is relative ($= S - 1$), Δc is absolute. Use the one the task names. [Week 8, p. 21; FormelarkKP3010.pdf, p. 8, eq. 79–81]
- **Steep curve → cool, flat curve → evaporate**: and for a curve whose slope changes (Na₂SO₄), the answer is "depends on location". [Week 8, p. 22, 27]
- **High supersaturation means small crystals**: the higher-order dependence of primary nucleation is the reason. [Week 8, p. 28]
- **Evaporation side effect**: operation at the boiling point can thermally degrade the product. [Week 8, p. 22]
- **Precipitation gives impure aggregates**: it suits sparingly soluble compounds (0.001–1 kg/m³) but not purity-critical products. [Week 8, p. 23]
- **Undercooling sign**: the slide and formula sheet write $\Delta T = T - T_m$. State your sign if you use it. [Week 8, p. 21]
- **Vacuum crystallization is not just evaporation**: it is cooling and evaporation together, adiabatic. [Week 8, p. 23]

## Past exam tasks
- Practice exam 1, Ex. 6a: describe three ways to create supersaturation.
- Autumn 2022, Q6.1: is cooling effective for NaCl? (No, flat solubility.)
- Autumn 2022, Q6.4: name and describe a method besides cooling and evaporation (precipitation, anti-solvent, melt crystallization).

## Test yourself
**Q:** What happens in the metastable zone, and what at its limit?
**A:** Inside: limited driving force, no new crystals, but growth is possible. At the limit: the first nuclei form. [Week 8, p. 19]

**Q:** Explain salting out.
**A:** Adding a salt reduces the activity of water, which creates supersaturation of the solute. It is a form of anti-solvent crystallization. [Week 8, p. 23]

**Q:** Give two advantages and one drawback of melt crystallization.
**A:** No solvent is required and there is no solvent removal or recovery, and it suits high concentrations. Drawback: you can't influence the melt properties. [Week 8, p. 24]

**Q:** Why is cooling seldom used below room temperature?
**A:** The slide states it as a practical limit of cooling crystallization. The cost of refrigeration is not discussed in the files. [Week 8, p. 22]

**Q:** You want fewer but larger crystals. High or low supersaturation?
**A:** Low. Growth then dominates over primary nucleation. [Week 8, p. 28]

## Sources
- [Week 8 - Crystallization and precipitation with solutions.pdf, p. 13–15, 19–28]
- [FormelarkKP3010.pdf, p. 8, eq. 79–82]
- [practice_exam_solutions.pdf, Ex. 6a]
- [practice exam 2 solutions.pdf, Q6.1, Q6.4]

> GAP: The metastable-zone diagram (Week 8, p. 19), the supersaturation-methods figure (p. 25) and the three solubility curves (p. 26–27) are images. No metastable-limit data are available, so those visuals are schematic.
