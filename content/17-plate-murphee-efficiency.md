---
slug: 17-plate-murphree-efficiency
title: Overall and Murphree plate efficiency
topic: mass-transfer
exam_weight: medium
exam_weight_note: "Overall efficiency → real trays → height in Autumn 2022 Q2b (4 pts); Murphree only in exercise 5"
builds_on: [06-feed-line-mccabe-thiele, 11-kremser-minimum-absorbent-flow, 14-column-height-pressure-drop, 16-htu-ntu-packed-columns]
used_in: []
sources: ["Week 5 - Efficiency and mass transfer with solutions.pdf", "FormelarkKP3010.pdf", "exercise_05_eng.pdf", "exercise_05_solutions.pdf", "practice exam 2 solutions.pdf"]
---

## Pretest
**Q:** Why do real columns need more plates than McCabe–Thiele predicts?
**A:** Contact times are often too short to reach equilibrium, and the phases don't behave ideally. [Week 5, p. 20]

**Q:** McCabe–Thiele gives 7 theoretical stages including an external reboiler, and $E_O = 0.7$. How many real trays?
**A:** $6/0.7 = 8.57$, so 9 trays. [practice exam 2 solutions.pdf, Q2b]

**Q:** Can the Murphree efficiency exceed 1?
**A:** Not in this model. $E_M = 1 - e^{-NTU}$ is always below 1. [Week 5, p. 26]

## Mental model
A theoretical stage assumes the vapour and liquid leaving a plate are at equilibrium. Real plates don't get there [Week 5, p. 20]. The crude fix is one overall efficiency for the whole column: real plates = theoretical plates / $E_O$, with the reboiler left out [Week 5, p. 21]. The finer fix looks at one plate. Gas bubbles up through a well-mixed liquid, approaching (but not reaching) the vapour composition $y_n^*$ in equilibrium with that liquid. The Murphree efficiency is the fraction of that maximum change actually achieved [Week 5, p. 24]. Plug-flow gas through mixed liquid turns the mass-transfer model into a simple exponential, $E_M = 1 - e^{-NTU}$, with NTU set by the liquid depth over the HTU [Week 5, p. 25–26]. For straight equilibrium lines (absorption, stripping), a closed formula converts $E_M$ into $E_O$ [Week 5, p. 28].

## Concepts and definitions
- **Why efficiency is needed**: equal numbers of theoretical and real plates is only true if liquid and vapour reach full equilibrium on each stage. In reality contact times are too short and the phases aren't ideal, so more plates are required. [Week 5, p. 20]
- **Overall efficiency $E_O$**: the same efficiency for all trays, $E_O = N_{th}/N_s$. The reboiler stage is not included. [Week 5, p. 21]
- **Murphree tray efficiency $E_M$**: a better estimate, based on the mass-transfer driving force on each stage. Assumes plug-flow gas and an ideally mixed liquid. [Week 5, p. 24]
- **$y_n^*$**: the liquid-phase concentration on tray n expressed as the vapour composition in equilibrium with it. [Week 5, p. 24]
- **$E_M$ as a ratio**: actual change in vapour composition over the plate divided by the maximum (equilibrium) change. [Week 5, p. 24]
- **NTU of a plate**: from the mass-transfer model with mixed liquid, often found as $H_L/HTU$, with $H_L$ the liquid height on the plate. [Week 5, p. 25–26]
- **Murphree in McCabe–Thiele**: triangle *acd* is a theoretical stage, triangle *abe* an actual stage. The actual vertical step covers only $E_M$ of the distance to the equilibrium curve. [Week 5, p. 27]
- **$E_O$ from $E_M$**: for a linear equilibrium curve (typically absorption/stripping) there is a closed relation using the stripping factor S, or A. [Week 5, p. 28]

## Visuals
- **Theoretical vs actual stage (Murphree)** · curve sketch [Week 5, p. 27]
  - McCabe–Thiele detail: operating line and equilibrium curve. From point *a* on the operating line, the theoretical step goes vertically to the equilibrium curve (*c*) and closes the triangle *acd*. The actual step goes vertically only to *b*, a fraction $E_M$ of the way, and closes the smaller triangle *abe*.
  - Label the vertical distances "actual = $y_n - y_{n+1}$" and "max = $y_n^* - y_{n+1}$".
- **Gas through a mixed liquid on one tray** · cross-section [Week 5, p. 24–26]
  - One tray with liquid of height $H_L$, labelled "ideally mixed, composition $x_n$ → $y_n^*$". Gas enters from below at $y_{n+1}$, rises in plug flow, and leaves at $y_n$.
  - Profile inset: y rises exponentially toward $y_n^*$ with height in the liquid, with "$E_M = 1 - e^{-NTU}$".
- **Real trays from theoretical stages** · flowchart [Week 5, p. 21–23; practice exam 2 solutions.pdf, Q2b]
  - $N_{TS}$ (McCabe–Thiele) → minus reboiler → ÷ $E_O$ → round up → × $H_{space}$ → H.
  - Two worked chains: 7.8 → 6.8 → 10.97 → 11 plates; and 7 → 6 → 8.57 → 9 trays → 4.05 m.
- **Interactive plot**: $E_O = \dfrac{\ln[1 + E_M(S-1)]}{\ln S}$ [Week 5, p. 28; exercise_05_solutions.pdf, Oppg. 1c].
  - Sliders: $E_M$ from 0.1 to 1.0 (start 0.6) and the factor S (or A) from 0.2 to 5 (start 1.22).
  - Show $E_O$ live and the curve of $E_O$ vs S for the current $E_M$. At $E_M = 0.6$ and factor 1.22 it must show $E_O = 0.62$. Second readout: $E_M = 1 - e^{-NTU}$ with an NTU slider from 0 to 4.

## Equations

### Overall efficiency
$$E_O = \frac{N_{th}}{N_s} \quad\Leftrightarrow\quad N_S = \frac{N_{TS}}{E_O}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $E_O$ | overall (column) efficiency | – |
| $N_{th}$, $N_{TS}$ | theoretical stages in the column (reboiler excluded) | – |
| $N_s$, $N_S$ | actual plates (round up) | – |

[Week 5, p. 21; FormelarkKP3010.pdf, p. 4, eq. 40]

### Murphree tray efficiency
$$E_M = \frac{y_n - y_{n+1}}{y_n^* - y_{n+1}} = \frac{y_{n+1} - y_n}{y_{n+1} - y_n^*} = \frac{\text{actual difference}}{\text{maximum difference}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $y_n$ | vapour leaving tray n | – |
| $y_{n+1}$ | vapour entering tray n from below | – |
| $y_n^*$ | vapour in equilibrium with the liquid on tray n | – |

The two forms are the same ratio with signs flipped (used for distillation vs absorption direction). [Week 5, p. 24, 26]

### Plate NTU and Murphree efficiency
$$NTU = \int_{y_{n+1}}^{y_n}\frac{1}{y_n^* - y}\,dy = \ln\frac{y_{n+1} - y_n^*}{y_n - y_n^*}, \qquad E_M = 1 - e^{-NTU}, \qquad NTU = \frac{H_L}{HTU} = \frac{k_{OV}A_h H_L}{Q_V}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $H_L$ | liquid height on the plate | m |
| $HTU$ | height of a transfer unit | m |
| $k_{OV}, A_h, Q_V$ | as on page 16 | m/s, m²/m, m³/s |

Plug-flow gas and a mixed liquid, so $y_n^*$ is constant over the plate. [Week 5, p. 25–26; FormelarkKP3010.pdf, p. 4, eq. 41]

### Overall from Murphree (linear equilibrium)
$$E_O = \frac{\ln[1 + E_M(S - 1)]}{\ln S}, \qquad S = \frac{KG}{L} \;(\text{or replace } S \to A = \tfrac{L}{KG})$$
| Symbol | Meaning | Unit |
|---|---|---|
| $S$ | stripping factor | – |
| $A$ | absorption factor | – |

Linear equilibrium curve, typically absorption or stripping. The exercise solution substitutes A for an absorber. [Week 5, p. 28; FormelarkKP3010.pdf, p. 5, eq. 42; exercise_05_solutions.pdf, Oppg. 1c]

## Worked example
**Actual plates from overall efficiency** [Week 5, p. 22–23]
Benzene/toluene at 1 atm. McCabe–Thiele gives 7.8 theoretical stages in total. $E_O = 62\,\%$.
1. Remove the reboiler: $7.8 - 1 = 6.8$ theoretical stages in the column.
2. $N_s = N_{ts}/E_O = 6.8/0.62 = 10.97$.
3. Round up: 10 plates aren't enough, so 11 plates plus the reboiler.

## Faded example
**Absorber with Murphree trays: $E_O$, plates and height** [exercise_05_eng.pdf, Exercise 1b–d; exercise_05_solutions.pdf, Oppg. 1b–d]
Gas 200 kmol/h with 3 mol % contaminant, 95 % absorbed, pure water, $y = 0.6x$, $L' = 1.3L'_{min} = 142.5$ kmol/h, $G' = 194$ kmol/h, $E_M = 0.6$, tray spacing 46 cm.
1. **(try)** Absorption factor. → $A = L'/(KG') = 142.5/(0.6\cdot 194) = 1.22$.
2. **(try)** Kremser NTS with $y_{in} = 0.03$, $y_{out} = 0.001544$. → $N = \ln 4.49/\ln 1.22 = 7.42$.
3. **(try)** Overall efficiency with A in place of S. → $E_O = \ln[1 + 0.6(1.22 - 1)]/\ln 1.22 = \ln 1.132/\ln 1.22 = 0.62$.
4. **(try)** Real plates. → $N_S = 7.42/0.62 = 11.97$, so 12 plates.
5. **(try)** Height. → $H = 12\cdot 0.46 = 5.52$ m.
6. **(try)** With 23 cm spacing instead? → $12\cdot 0.23 = 2.76$ m. [exercise_05_solutions.pdf, Oppg. 2a]

[exercise_05_solutions.pdf, Oppg. 1b–d, 2a]

## Exam traps
- **Reboiler not included in $E_O$**: subtract the reboiler stage before dividing by $E_O$. [Week 5, p. 21; practice exam 2 solutions.pdf, Q2b]
- **Round up after dividing**: 10.97 → 11, 8.57 → 9, 11.97 → 12. Rounding before dividing gives the wrong count. [Week 5, p. 23; practice exam 2 solutions.pdf, Q2b]
- **Divide, don't multiply**: $N_S = N_{TS}/E_O$ is larger than $N_{TS}$. If you end up with fewer real trays than theoretical ones, you've multiplied. [FormelarkKP3010.pdf, p. 4, eq. 40]
- **The $E_O$–$E_M$ formula needs a linear equilibrium**: fine for absorption and stripping with $y = Kx$, not for a curved distillation equilibrium. [Week 5, p. 28]
- **S or A**: the formula sheet writes it with S. For an absorber the course solution uses A. Check which factor the task defines. [FormelarkKP3010.pdf, p. 5, eq. 42; exercise_05_solutions.pdf, Oppg. 1c]
- **$y_n^*$ is set by the liquid on the same tray**: not by the liquid from the tray above. [Week 5, p. 24]
- **Murphree's assumptions**: plug-flow gas, ideally mixed liquid. That is what makes $E_M = 1 - e^{-NTU}$ exact. [Week 5, p. 24–26]

## Past exam tasks
- Autumn 2022, Q2b: tray column, external reboiler, $E_O = 70\,\%$, 45 cm spacing. 7 theoretical stages → 6 in column → 8.57 → 9 trays → H = 4.05 m.

## Test yourself
**Q:** A tray gives $y_{n+1} = 0.40$, $y_n = 0.55$, and the vapour in equilibrium with its liquid is $y_n^* = 0.60$. What is $E_M$?
**A:** $E_M = (0.55 - 0.40)/(0.60 - 0.40) = 0.75$. [Week 5, p. 24]

**Q:** A plate has NTU = 1.2. What is $E_M$?
**A:** $1 - e^{-1.2} = 0.70$. [Week 5, p. 26]

**Q:** How do you get the NTU of a plate if you know the liquid height and the HTU?
**A:** $NTU = H_L/HTU = k_{OV}A_hH_L/Q_V$. [Week 5, p. 26]

**Q:** In the McCabe–Thiele figure, which triangle is the theoretical stage and which the actual one?
**A:** *acd* is theoretical and *abe* is actual. [Week 5, p. 27]

**Q:** Give the two physical reasons plates aren't at equilibrium.
**A:** Contact time is too short, and the gas and liquid phases don't behave ideally. [Week 5, p. 20]

## Sources
- [Week 5 - Efficiency and mass transfer with solutions.pdf, p. 20–28]
- [FormelarkKP3010.pdf, p. 4–5, eq. 40–42]
- [exercise_05_eng.pdf, Exercise 1–2]
- [exercise_05_solutions.pdf, Oppg. 1b–d, 2a]
- [practice exam 2 solutions.pdf, Q2b]

> GAP: No correlation that predicts $E_O$ from viscosity and relative volatility is in the files, even though Week 4, p. 31 gives those properties. $E_O$ is always given or computed from $E_M$.
> GAP: The Murphree triangle figure (Week 5, p. 27) is an image. The point labels a–e come from the slide text.
