# KP3010 — study site

A visual, interactive summary of **KP3010**: one page per subtopic, with diagrams, interactive plots, colored equations, worked and faded examples, exam traps and self-tests. There's also a review queue, mixed practice, an equation sheet and an Anki export.

Built from [study-template](https://github.com/sebkaul/study-template). See `CLAUDE.md` for the workflow.

## Topics

| Slug | Title | Topic | Weight |
|---|---|---|---|
| `01-separation-basics-k-selectivity` | Separation basics — techniques, K and selectivity | Vapour–liquid equilibrium | high |
| `02-vapor-pressure-raoult-dalton` | Vapour pressure, Raoult's and Dalton's law | Vapour–liquid equilibrium | high |
| `03-vle-diagrams-azeotropes` | VLE diagrams, relative volatility and azeotropes | Vapour–liquid equilibrium | high |
| `04-equilibrium-flash-distillation` | Equilibrium and flash distillation | Equilibrium (flash) distillation | medium |
| `05-column-balances-operating-lines` | Column balances, reflux ratio and operating lines | Multistage distillation | high |
| `06-feed-line-mccabe-thiele` | Feed line (q-line) and McCabe–Thiele stepping | Multistage distillation | high |
| `07-nmin-rmin-limiting-conditions` | Minimum stages, minimum reflux and limiting conditions | Multistage distillation | high |
| `08-absorption-principles-henrys-law` | Absorption principles and Henry's law | Absorption and stripping | high |
| `09-absorption-equilibrium-stage-mole-ratios` | Single equilibrium stage, inert flows and mole ratios | Absorption and stripping | high |
| `10-multistage-absorption-stripping` | Multistage absorption and stripping (McCabe–Thiele) | Absorption and stripping | high |
| `11-kremser-minimum-absorbent-flow` | Kremser equation and minimum absorbent flow | Absorption and stripping | high |
| `12-trays-vs-packing` | Tray columns vs packed columns | Design of columns | medium |
| `13-column-diameter-flooding` | Column diameter and flooding | Design of columns | medium |
| `14-column-height-pressure-drop` | Column height (HETP, tray spacing) and pressure drop (Ergun) | Design of columns | medium |
| `15-film-model-mass-transfer` | Film model and mass transfer coefficients | Efficiency and mass transfer | low |
| `16-htu-ntu-packed-columns` | HTU/NTU — packed height from mass transfer | Efficiency and mass transfer | low |
| `17-plate-murphree-efficiency` | Overall and Murphree plate efficiency | Efficiency and mass transfer | low |
| `18-lle-principles-solvent-equipment` | LLE principles, solvent selection and equipment | Liquid–liquid extraction | medium |
| `19-ternary-diagrams` | Ternary diagrams — reading points, tie lines and the mixing point | Liquid–liquid extraction | medium |
| `20-extraction-stage-schemes` | Single, co-, cross- and counter-current extraction stages | Liquid–liquid extraction | medium |
| `21-counter-current-extraction-design` | Design of counter-current extraction | Liquid–liquid extraction | medium |
| `22-adsorbents-properties` | Adsorption basics and adsorbent properties | Adsorption and ion exchange | medium |
| `23-adsorption-isotherms` | Adsorption isotherms — Langmuir | Adsorption and ion exchange | medium |
| `24-fixed-bed-adsorption` | Adsorption kinetics and fixed-bed adsorption | Adsorption and ion exchange | medium |
| `25-adsorption-cycles-ion-exchange` | Adsorption cycles (TSA, PSA, purge) and ion exchange | Adsorption and ion exchange | medium |
| `26-crystallization-fundamentals` | Crystallization fundamentals — supersaturation, crystal quality and solubility | Crystallization and precipitation | medium |
| `27-crystallization-mass-balance-yield` | Crystallization mass balances and yield | Crystallization and precipitation | medium |
| `28-supersaturation-metastable-zone` | Supersaturation measures, metastable zone and methods | Crystallization and precipitation | medium |
| `29-nucleation-growth-crystallizers` | Nucleation (CNT), crystal growth and crystallizer operation | Crystallization and precipitation | medium |
| `30-membrane-fundamentals-osmosis` | Membrane fundamentals — processes, transport mechanisms and osmosis | Membrane separation | medium |
| `31-membrane-flux-permeability-selectivity` | Membrane flux, permeability, permeance and selectivity | Membrane separation | medium |
| `32-concentration-polarization` | Concentration polarization and boundary-layer resistance | Membrane separation | medium |
| `33-membrane-modules-design` | Membrane modules and design of a membrane separation | Membrane separation | medium |

## Run

```bash
npm install
npm run dev      # → http://localhost:5173
```

Progress (checkboxes, grades) is saved in your browser only. Use **Export → Progress backup** to move it between devices. Course PDFs go in `sources/` (gitignored).
