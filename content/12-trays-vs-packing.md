---
slug: 12-trays-vs-packing
title: Tray columns vs packed columns
topic: column-design
exam_weight: low
exam_weight_note: "No stand-alone question; packing data (F_p, a, ε, d_p) is given as input to the flooding and HETP sub-questions on 2 of 2 practice exams"
builds_on: [06-feed-line-mccabe-thiele, 10-multistage-absorption-stripping]
used_in: [13-column-diameter-flooding, 14-column-height-pressure-drop]
sources: ["Week 4 - Design of columns with solutions.pdf", "packing_tables.pdf", "exercise_04_eng.pdf", "exercise_04_solutions.pdf", "practice exam 2 solutions.pdf", "practice_exam_solutions.pdf"]
---

## Pretest
**Q:** Which tray type is cheap and simple but has a limited operating range?
**A:** Sieve trays. [Week 4, p. 3]

**Q:** Why is structured packing preferred for vacuum distillation?
**A:** The vertical corrugated sheets give very low pressure drops. [Week 4, p. 6, 9]

**Q:** A packing table gives $F_p$ in ft²/ft³. What do you do before using it?
**A:** Convert to m⁻¹: 1 ft²/ft³ = 3.28 m²/m³. [exercise_04_solutions.pdf, Oppg. 1b]

## Mental model
McCabe–Thiele gives the number of *theoretical* stages. Now you need hardware that brings gas and liquid into close contact over a large area, because mass transfer needs contact area [Week 4, p. 2]. There are two families. Tray columns hold the liquid on discrete plates and bubble gas through it [Week 4, p. 2–3]. Packed columns fill the column with packing that the liquid trickles over while gas rises through the voids, giving turbulent, continuous contact [Week 4, p. 4]. Trays are cheap and well understood. Random packing gives better mass transfer, lower pressure drop and less liquid holdup. Structured packing gives the lowest pressure drop and best distribution, at the highest price [Week 4, p. 9]. For packed columns one number summarises how the packing behaves hydraulically, the packing factor $F_p$, which feeds straight into the flooding calculation on the next page [Week 4, p. 8].

## Concepts and definitions
- **Tray (plate) columns**: give high contact area for mass transfer. Common for both absorption and distillation. [Week 4, p. 2]
- **Bubble-cap trays**: conventional, prevent liquid from leaking through the tray. Expensive, with higher pressure drops. [Week 4, p. 3]
- **Sieve trays**: simple and inexpensive, but limited operating range, weeping or high pressure drops. 5–15 % of the tray area is open. [Week 4, p. 3]
- **Valve trays**: designed to operate efficiently over a large range of gas flow rates. Fixed or floating. [Week 4, p. 3]
- **Packed columns**: packing provides contact area. Gas rises while liquid trickles down. Flows are often very turbulent, which raises mass transfer. Relatively low pressure drop and liquid holdup. Packing can be random or structured. [Week 4, p. 4]
- **Random packing**: many shapes, each designed for specific processes (structuring in the column, pressure drop, viscous liquids). Made of metal, ceramic or plastic. Examples: Raschig ring, Berl saddle, Pall ring, Intalox IMPT, Jaeger Tri-Pack. [Week 4, p. 5]
- **Structured packing**: fixed packing that removes the inhomogeneity of random packing. Vertical corrugated sheets give low pressure drops. Better performance and higher capacities than random packing, but 3–4 times more expensive. [Week 4, p. 6]
- **Packing factor ($F_p$)**: "how efficient is the packing?" Use the tabulated value if possible, otherwise estimate it from $a$ and $\epsilon$. [Week 4, p. 8]
- **Specific surface area ($a$)**: interfacial area, m² per m³ of packing. [Week 4, p. 8]
- **Void fraction ($\epsilon$)**: fraction of the volume that is empty (not packing). [Week 4, p. 8]
- **Choosing a column type**: trays are inexpensive with lots of experience. Random packing gives more effective mass transfer (no downcomer, counter-current flow), lower pressure drop and lower liquid holdup (safety). Structured packing gives even lower pressure drop (vacuum distillation/stripping) and good distribution, but is the most expensive (including distributors and collectors). [Week 4, p. 9]

## Visuals
- **Three tray types** · cross-section [Week 4, p. 3]
  - Side-by-side sketches of one tray each with liquid on top and gas bubbling up. Bubble cap: risers with caps, labelled "no leakage, expensive, high ΔP". Sieve: perforated plate, "5–15 % open, cheap, weeping risk". Valve: liftable valves, "wide gas-flow range".
- **Tray column vs packed column** · cross-section [Week 4, p. 2, 4, 6]
  - Left: column with stacked trays and downcomers. Middle: packed bed of random pieces with liquid trickling down and gas rising. Right: vertical corrugated sheets (structured).
  - Highlight the label "packed: turbulent, low ΔP, low holdup".
- **Random packing shapes** · process diagram (icon row) [Week 4, p. 5]
  - Simple generic outlines labelled (a) Raschig ring, (b) Berl saddle, (c) Pall ring, (d) Intalox IMPT, (e) Jaeger Tri-Pack. Materials tag: metal / ceramic / plastic.
- **Which column type?** · table-as-picture [Week 4, p. 9]
  - Three columns (Trays | Random packing | Structured packing) and rows Cost, Mass transfer, ΔP, Liquid holdup, Typical use. Highlight "vacuum → structured" and "cheap/known → trays".
- **Packing factor: tabulated vs estimated** · plot (grouped bars) [practice exam 2 solutions.pdf, Q3 table; Week 4, p. 8]
  - Three packings from the exam table: Raschig ceramic 13 mm (a = 364, ε = 0.64, $F_p$ = 1900 m⁻¹), Raschig ceramic 25 mm (190, 0.74, 587), Pall metallic 25 mm (207, 0.94, 184).
  - Bars for the tabulated $F_p$ next to the estimate $a/\epsilon^3$: 1389, 469 and 249 m⁻¹. y-axis $F_p$ (m⁻¹). Caption: "use the table when you have it".
- **Interactive plot**: $F_p = a/\epsilon^3$ [Week 4, p. 8].
  - Slider: $\epsilon$ from 0.60 to 0.98 (start 0.94), with $a$ fixed at 207 m²/m³ (Pall 25 mm) [practice exam 2 solutions.pdf, Q3 table].
  - Show the live $F_p$ and a curve of $F_p$ vs $\epsilon$. The cubic means a small drop in void fraction makes $F_p$ jump.

## Equations

### Packing factor estimate
$$F_p = \frac{a}{\epsilon_v^3}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F_p$ | packing factor | m⁻¹ (m²/m³) |
| $a$ | specific (interfacial) surface area of the packing | m²/m³ |
| $\epsilon_v$ | void fraction | – |

Use only if no tabulated $F_p$ is available. [Week 4, p. 8]

### Unit conversion for tabulated packing factors
$$1\ \mathrm{ft^2/ft^3} = 3.28\ \mathrm{m^2/m^3}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F_p$ (table) | packing factor as listed in the packing tables | ft²/ft³ |

The packing tables list $F_p$ in ft²/ft³ and $a$ in m²/m³. [packing_tables.pdf, Table 6.6; exercise_04_solutions.pdf, Oppg. 1b]

## Worked example
**Estimated vs tabulated packing factor (exam packing table)** [practice exam 2 solutions.pdf, Q3 table; Week 4, p. 8]
Table: Raschig ceramic 25 mm ($\epsilon = 0.74$, $a = 190$ m²/m³, $F_p = 587$ m⁻¹) and Pall metallic 25 mm ($\epsilon = 0.94$, $a = 207$ m²/m³, $F_p = 184$ m⁻¹).
1. Estimate for Raschig: $F_p \approx 190/0.74^3 = 190/0.405 = 469$ m⁻¹.
2. Estimate for Pall: $F_p \approx 207/0.94^3 = 207/0.831 = 249$ m⁻¹.
3. Compare with the table: 469 vs 587 (Raschig) and 249 vs 184 (Pall). The estimate gets the order right (Raschig ≫ Pall) but is off by 20–35 %.
4. Conclusion: "If possible: use the packing factor" from the table, and only estimate when it's missing. [Week 4, p. 8]
5. Physical reading: the Pall ring's much higher void fraction (0.94 vs 0.74) dominates through $\epsilon^3$, so its $F_p$ is about 3× lower.

## Faded example
**Reading $F_p$ from the packing tables** [exercise_04_eng.pdf, Exercise 1b, 1e; exercise_04_solutions.pdf, Oppg. 1b; packing_tables.pdf, Table 6.6]
An NH₃ absorber uses Mellapak 250Y, and the alternative is 1-inch (25 mm) metal Pall rings.
1. The packing table gives Mellapak 250Y: $F_p = 22$ ft²/ft³.
2. **(try)** Convert to SI. → $22\cdot 3.28 = 72.2$ m⁻¹.
3. The table gives metal Pall rings, 25 mm: $F_p = 56$ ft²/ft³, $a = 223.5$ m²/m³, $\epsilon = 0.954$.
4. **(try)** Convert. → $56\cdot 3.28 = 184$ m⁻¹, matching the exam table's 184 m⁻¹ for 25 mm metallic Pall rings.
5. **(try)** Which packing type does the lecture say has higher capacity? → Structured (Mellapak), consistent with its lower $F_p$. [Week 4, p. 6]

[exercise_04_solutions.pdf, Oppg. 1b; packing_tables.pdf]

## Exam traps
- **Units of $F_p$**: tables in ft²/ft³, equations in m⁻¹. Forgetting the factor 3.28 ruins every later flooding number. [exercise_04_solutions.pdf, Oppg. 1b]
- **Use the given $F_p$**: exams give $F_p$ directly (28 m⁻¹, 184 m⁻¹). Only estimate $a/\epsilon^3$ when it's absent. [practice_exam_solutions.pdf, Ex. 3b; Week 4, p. 8]
- **$a$ vs $F_p$**: the specific surface area $a$ (m²/m³) and the packing factor $F_p$ (m⁻¹) have compatible units but are different quantities. Don't plug one in for the other. [Week 4, p. 8]
- **Sieve-tray drawbacks**: weeping and a limited operating range are the standard "why not sieve trays" answer. [Week 4, p. 3]
- **Safety argument for packing**: low liquid holdup is listed as a safety benefit. [Week 4, p. 9]
- **Packing size matters downstream**: larger packing (50 mm vs 25 mm Pall) gives a larger HETP and fewer stages at the same height (page 14). [practice exam 2 solutions.pdf, Q3e.3]

## Past exam tasks
- Practice exam 1, Ex. 3b: random packing given with $F_p = 28$ m⁻¹, $a = 223$ m²/m³, $d_p = 64$ mm as input for flooding (page 13).
- Autumn 2022, Q3 table: Raschig and Pall data given. Q3e.3: switching from 25 to 50 mm Pall rings (page 14).
- Autumn 2022, Q2b: "a tray column with an external reboiler stage is the best option" is given as context for the height calculation (pages 14, 17).

## Test yourself
**Q:** Give one advantage and one drawback each of bubble-cap, sieve and valve trays.
**A:** Bubble cap: no leakage, but expensive with high ΔP. Sieve: cheap and simple, but limited range, weeping and high ΔP. Valve: efficient over a wide gas-flow range (drawback not stated in the slides). [Week 4, p. 3]

**Q:** Why does random packing give better mass transfer than trays?
**A:** There is no downcomer and the flow is fully counter-current. [Week 4, p. 9]

**Q:** Convert a tabulated $F_p = 40$ ft²/ft³ to SI.
**A:** $40\cdot 3.28 = 131$ m⁻¹. [exercise_04_solutions.pdf, Oppg. 1b]

**Q:** What are $a$ and $\epsilon$, and how do you estimate $F_p$ from them?
**A:** $a$ is the interfacial area per m³ of packing and $\epsilon$ the void fraction. $F_p \approx a/\epsilon^3$. [Week 4, p. 8]

**Q:** How much more expensive is structured packing than random packing, and what do you get for it?
**A:** About 3–4×. You get lower pressure drop, better performance, higher capacity and no random inhomogeneity. [Week 4, p. 6]

## Sources
- [Week 4 - Design of columns with solutions.pdf, p. 2–9]
- [packing_tables.pdf, Table 6.6 (random and structured packings)]
- [exercise_04_eng.pdf, Exercise 1]
- [exercise_04_solutions.pdf, Oppg. 1b]
- [practice exam 2 solutions.pdf, Q3 table, Q2b, Q3e.3]
- [practice_exam_solutions.pdf, Ex. 3b]

> GAP: Week 4, p. 7 ("Packing specifications") is an image-only table with no extractable text.
> GAP: The structured-packing rows in packing_tables.pdf are rotated in the PDF, so $a$ and $\epsilon$ for Mellapak 250Y couldn't be extracted. Only $F_p = 22$ ft²/ft³ (via the exercise solution) is used.
