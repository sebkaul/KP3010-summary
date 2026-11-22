import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  Mermaid, M, V, T, tone,
} from '../components'

const W8 = 'Week 8 - Crystallization and precipitation with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E8E = 'exercise_08_eng.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Crystallization fundamentals — supersaturation, crystal quality and solubility',
  topic: 'crystallization',
  examWeight: {
    level: 'high',
    note: 'Ways to create supersaturation and reading solubility curves on 2 of 2 practice exams (Practice exam 1 Ex. 6a–b; Autumn 2022 Q6.1, Q6.4)',
  },
  examTasks: [
    'Practice exam 1, Ex. 6a: describe three ways to create supersaturation (cooling, vaporisation, reaction).',
    'Practice exam 1, Ex. 6b: choose the method for NaCl vs CaCl₂ from solubility curves, and the KNO₃ cooling crystals and mother-liquor wt %.',
    'Autumn 2022, Q6.1: is cooling effective for NaCl? (No, solubility barely changes with T.)',
    'Autumn 2022, Q6.4: name and describe a supersaturation method besides cooling and evaporation.',
  ],
  buildsOn: [],
  usedIn: ['27-crystallization-mass-balance-yield', '28-supersaturation-metastable-zone', '29-nucleation-growth-crystallizers'],
  sources: [`[${W8}, p. 2–10]`, `[${FS}, p. 7–8, eq. 77–78]`, `[${E8E}, Problem 1 and short answers]`, `[${PX}, Ex. 6a–b]`, `[${PX2}, Q6.1, Q6.4]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'What must a solution be before anything can crystallize?', a: 'Supersaturated: it carries more solute than the thermodynamic equilibrium value. [Week 8, p. 4, 9]' },
    { id: 'p2', kind: 'pretest', q: 'Name three ways to create supersaturation.', a: 'Cooling, evaporating the solvent, adding an anti-solvent. Reaction/precipitation also counts. [Week 8, p. 4; practice_exam_solutions.pdf, Ex. 6a; practice exam 2 solutions.pdf, Q6.4]' },
    { id: 'p3', kind: 'pretest', q: "NaCl's solubility barely changes with temperature. Is cooling a good way to crystallize it?", a: 'No. The yield would be small, so evaporation is the better option. [practice exam 2 solutions.pdf, Q6.1; practice_exam_solutions.pdf, Ex. 6b]' },
    { id: 't1', q: 'Sodium acetate saturated at 40 °C (0.655 kg/kg H₂O), cooled to 0 °C (0.363 kg/kg H₂O), 100 kg water/h. Crystals per hour?', a: '$100\\cdot(0.655 - 0.363) = 29.2$ kg/h, matching the short answer. [exercise_08_eng.pdf, Problem 1 and short answer]' },
    { id: 't2', q: 'Name the four crystal quality parameters.', a: 'Crystal form, crystal size distribution, morphology (habit), purity. [Week 8, p. 6–7]' },
    { id: 't3', q: 'What is polymorphism? Give the course example.', a: 'The same species and building blocks in different crystal unit structures, with very different properties. Calcite vs aragonite, both CaCO₃. [Week 8, p. 6]' },
    { id: 't4', q: 'Give two reasons to choose crystallization over distillation.', a: 'Any two of: heat-sensitive solute, low relative volatility, solid or high-purity product needed, uniform crystals of a desired morphology or size needed. [Week 8, p. 3]' },
    { id: 't5', q: 'How do impurities end up in crystals?', a: 'Through inclusion, attrition or agglomeration. [Week 8, p. 7]' },
  ],
  equations: [
    {
      id: 'cv',
      label: 'Coefficient of variation',
      tex: String.raw`\vc{c_v} = \frac{\vb{\sigma_D}}{\va{L_D}}`,
      vars: [
        { sym: String.raw`\vc{c_v}`, desc: 'coefficient of variation of the CSD', unit: '–' },
        { sym: String.raw`\vb{\sigma_D}`, desc: 'standard deviation of crystal size', unit: String.raw`\mathrm{m}\ (\mu\mathrm{m})` },
        { sym: String.raw`\va{L_D}`, desc: 'mean crystal size', unit: String.raw`\mathrm{m}\ (\mu\mathrm{m})` },
      ],
      note: 'Lower means more uniform, and monodisperse is ideal.',
      cite: `[${W8}, p. 6; ${FS}, p. 7, eq. 77]`,
      check: { status: 'verified', note: 'Matches W8 p. 6 and formula sheet eq. 77 (on PDF p. 9).' },
    },
    {
      id: 'vth',
      label: "Ideal solubility (van 't Hoff, solid–liquid)",
      tex: String.raw`\ln \vd{x_s} = \frac{\Delta H_{melt}}{R}\left(\frac{1}{\ve{T}} - \frac{1}{T_{melt}}\right) \qquad\text{non-ideal: } \ln(\gamma_s \vd{x_s}) = \dots`,
      vars: [
        { sym: String.raw`\vd{x_s}`, desc: 'saturation mole fraction of solute', unit: '–' },
        { sym: String.raw`\Delta H_{melt}`, desc: 'melting enthalpy of the solute', unit: String.raw`\mathrm{J/mol}` },
        { sym: String.raw`\ve{T}, T_{melt}`, desc: 'temperature and melting point', unit: String.raw`\mathrm{K}` },
        { sym: String.raw`\gamma_s`, desc: 'activity coefficient (non-ideal)', unit: '–' },
      ],
      note: 'Written as on the slide and formula sheet. **Source discrepancy (index):** as printed, with $\\Delta H_{melt} > 0$ this gives $x_s > 1$ for $T < T_{melt}$ — sign check flagged, not corrected.',
      cite: `[${W8}, p. 10; ${FS}, p. 8, eq. 78]`,
      check: { status: 'verified', note: 'Matches W8 p. 10 and formula sheet eq. 78 (on PDF p. 9) as printed; the sign issue is in the source itself.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

// sodium acetate solubility (kg salt / kg water)
const NAAC = [[0, 0.363], [10, 0.408], [20, 0.465], [30, 0.545], [40, 0.655], [60, 1.39]]
const interp = (T) => {
  for (let i = 0; i < NAAC.length - 1; i++) {
    const [a, ya] = NAAC[i]
    const [b, yb] = NAAC[i + 1]
    if (T >= a && T <= b) return ya + ((T - a) / (b - a)) * (yb - ya)
  }
  return NAAC[NAAC.length - 1][1]
}

// ---- Visual 1: phase diagram with three routes (schematic) -----------------------
function Routes() {
  const X = (T) => 60 + (T / 100) * 380
  const Y = (c) => 260 - c * 220
  const sol = (T) => 0.15 + 0.6 * (T / 100) ** 1.6
  const ts = Array.from({ length: 50 }, (_, i) => i * 2)
  const p = [70, sol(70) - 0.08]
  return (
    <Svg w={500} h={310} label="Solubility curve with cooling, evaporation and anti-solvent routes into the supersaturated region">
      <Arrow x1={60} y1={260} x2={450} y2={260} />
      <Arrow x1={60} y1={260} x2={60} y2={20} />
      <Label x={450} y={280} anchor="end" size={12} t="var-e">T (°C)</Label>
      <Label x={66} y={22} anchor="start" size={12} t="var-a">c (kg solute/kg solvent)</Label>
      <polyline points={ts.map((T) => `${X(T)},${Y(sol(T))}`).join(' ')} style={st('var-c')} />
      <polyline points={ts.map((T) => `${X(T)},${Y(sol(T) - 0.13)}`).join(' ')} style={st('var-c', true, 1.5)} />
      <Label x={X(95)} y={Y(sol(95)) - 8} anchor="end" size={12} t="var-c">solubility c*</Label>
      <Label x={X(35)} y={Y(sol(35) - 0.13) + 18} anchor="start" size={11} t="var-c">with anti-solvent (curve shifts down)</Label>
      <Label x={X(20)} y={Y(0.75)} size={13} t="trap">supersaturated</Label>
      <Label x={X(80)} y={Y(0.12)} size={13} t="intuition">undersaturated</Label>
      <circle cx={X(p[0])} cy={Y(p[1])} r={6} style={{ fill: tone('ink') }} />
      <Arrow x1={X(p[0]) - 6} y1={Y(p[1])} x2={X(40)} y2={Y(p[1])} t="var-e" />
      <Label x={X(50)} y={Y(p[1]) + 18} size={11} t="var-e">cooling</Label>
      <Arrow x1={X(p[0])} y1={Y(p[1]) - 6} x2={X(p[0])} y2={Y(p[1] + 0.22)} t="var-a" />
      <Label x={X(p[0]) + 6} y={Y(p[1] + 0.18)} anchor="start" size={11} t="var-a">evaporation</Label>
    </Svg>
  )
}

// ---- Visual 2: sodium acetate data + NaCl schematic --------------------------------
function SolCurves({ Ts, Te }) {
  const X = (T) => 60 + (T / 60) * 360
  const Y = (c) => 260 - (c / 1.5) * 230
  const ts = Array.from({ length: 61 }, (_, i) => i)
  return (
    <Svg w={480} h={310} label="Sodium acetate solubility data against temperature; NaCl drawn flat (schematic)">
      <Arrow x1={60} y1={260} x2={430} y2={260} />
      <Arrow x1={60} y1={260} x2={60} y2={20} />
      {[0, 10, 20, 30, 40, 50, 60].map((v) => <text key={v} x={X(v)} y={277} textAnchor="middle" className="svg-sub">{v}</text>)}
      {[0.5, 1, 1.5].map((v) => <text key={v} x={53} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={430} y={296} anchor="end" size={12} t="var-e">T (°C)</Label>
      <Label x={66} y={22} anchor="start" size={12} t="var-a">c* (kg/kg H₂O)</Label>
      <polyline points={ts.map((T) => `${X(T)},${Y(interp(T))}`).join(' ')} style={st('var-c')} />
      {NAAC.map(([T, c]) => <circle key={T} cx={X(T)} cy={Y(c)} r={4} style={{ fill: tone('var-c') }} />)}
      <Label x={X(48)} y={Y(interp(48)) - 10} anchor="end" size={12} t="var-c">sodium acetate (data)</Label>
      <line x1={X(0)} y1={Y(0.36)} x2={X(60)} y2={Y(0.38)} style={st('muted', true, 2)} />
      <Label x={X(60)} y={Y(0.38) + 18} anchor="end" size={11} t="muted">NaCl: ~T-independent → evaporate (schematic)</Label>
      {Ts != null && (
        <g>
          <circle cx={X(Ts)} cy={Y(interp(Ts))} r={6} style={{ fill: tone('var-d') }} />
          <circle cx={X(Te)} cy={Y(interp(Te))} r={6} style={{ fill: tone('var-b') }} />
          <line x1={X(Ts)} y1={Y(interp(Ts))} x2={X(Te)} y2={Y(interp(Ts))} style={st('var-e', true, 1.5)} />
          <Arrow x1={X(Te)} y1={Y(interp(Ts))} x2={X(Te)} y2={Y(interp(Te)) - 4} t="example" />
          <Label x={X(Te) + 8} y={(Y(interp(Ts)) + Y(interp(Te))) / 2} anchor="start" size={12} t="example">Δc</Label>
        </g>
      )}
    </Svg>
  )
}

// ---- Visual 3: nucleation → growth ---------------------------------------------------
function NucGrowth() {
  const frame = (x, title, r, n) => (
    <g key={title}>
      <rect x={x} y={20} width={150} height={120} rx={10} style={{ ...shade('var-e', 12), stroke: tone('ink'), strokeWidth: 1.5 }} />
      {Array.from({ length: n }, (_, i) => [x + 25 + ((i * 47) % 110), 45 + ((i * 31) % 80)]).map(([cx, cy], i) => (
        <rect key={i} x={cx - r} y={cy - r} width={2 * r} height={2 * r} transform={`rotate(${i * 23} ${cx} ${cy})`} style={{ fill: tone('var-a'), opacity: 0.8 }} />
      ))}
      <Label x={x + 75} y={160} size={12}>{title}</Label>
    </g>
  )
  return (
    <Svg w={560} h={175} label="Three frames: clear supersaturated solution, nuclei appear, nuclei grow">
      {frame(10, 'supersaturated', 0, 0)}
      <Arrow x1={165} y1={80} x2={200} y2={80} />
      {frame(205, 'nucleation', 2.5, 7)}
      <Arrow x1={360} y1={80} x2={395} y2={80} />
      {frame(400, 'growth', 9, 7)}
    </Svg>
  )
}

// ---- Visual 4: CSD --------------------------------------------------------------------
function CSD() {
  const X = (L) => 50 + (L / 400) * 400
  const Y = (f) => 220 - f * 190
  const g = (L, m, s) => Math.exp(-((L - m) ** 2) / (2 * s * s))
  const Ls = Array.from({ length: 120 }, (_, i) => (i / 119) * 400)
  return (
    <Svg w={500} h={270} label="Narrow monodisperse peak and broad polydisperse peak of crystal size">
      <Arrow x1={50} y1={220} x2={460} y2={220} />
      <Arrow x1={50} y1={220} x2={50} y2={20} />
      <Label x={460} y={240} anchor="end" size={12} t="var-a">crystal size L (µm)</Label>
      <Label x={56} y={22} anchor="start" size={12}>number / mass fraction</Label>
      <polyline points={Ls.map((L) => `${X(L)},${Y(g(L, 120, 15))}`).join(' ')} style={st('intuition')} />
      <polyline points={Ls.map((L) => `${X(L)},${Y(0.55 * g(L, 230, 60))}`).join(' ')} style={st('trap')} />
      <Label x={X(120)} y={Y(1) - 6} size={11} t="intuition">monodisperse, low c_v (ideal)</Label>
      <Label x={X(300)} y={Y(0.5)} anchor="start" size={11} t="trap">polydisperse, high c_v</Label>
      <line x1={X(230)} y1={Y(0)} x2={X(230)} y2={Y(0.55)} style={st('var-a', true, 1.5)} />
      <Label x={X(230)} y={236} size={11} t="var-a">L_D</Label>
      <Arrow x1={X(230)} y1={Y(0.33)} x2={X(290)} y2={Y(0.33)} t="var-b" />
      <Label x={X(262)} y={Y(0.33) - 6} size={11} t="var-b">σ_D</Label>
    </Svg>
  )
}

const WEB = `flowchart LR
  O["operating conditions<br/>supersaturation · agitation · solvent · impurities · rate"]
  O --> F[crystal form]
  O --> C[CSD]
  O --> Mo[morphology]
  O --> P[purity]
  C -.-> A["A: wide CSD"]
  P -.-> B["B: aggregated, low purity"]
  Mo -.-> Cc["C: filtering problems"]`

// ---- Interactive ------------------------------------------------------------------------
function YieldExplorer() {
  const [Ts, setTs] = useState(40)
  const [Te, setTe] = useState(0)
  const te = Math.min(Te, Ts)
  const kg = 100 * (interp(Ts) - interp(te))
  return (
    <Diagram
      title="Cooling crystallization of sodium acetate"
      caption={String.raw`Solubility table [exercise_08_eng.pdf, Problem 1], linear interpolation between data points. Crystals per 100 kg water $= 100\,(c^*(T_{start}) - c^*(T_{end}))$. 40 → 0 °C gives 29.2 kg.`}
      cite={`[${E8E}, Problem 1]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="d"><M>{String.raw`T_{start}`}</M></V> = <strong>{Ts.toFixed(0)}</strong> °C</span>
            <input type="range" min={10} max={60} step={1} value={Ts} onChange={(e) => setTs(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="b"><M>{String.raw`T_{end}`}</M></V> = <strong>{te.toFixed(0)}</strong> °C</span>
            <input type="range" min={0} max={60} step={1} value={te} onChange={(e) => setTe(Math.min(Number(e.target.value), Ts))} />
          </label>
        </div>
        <p>c*({Ts}) = {interp(Ts).toFixed(3)} · c*({te}) = {interp(te).toFixed(3)} kg/kg · crystals = <strong>{kg.toFixed(1)} kg</strong> per 100 kg water</p>
        <SolCurves Ts={Ts} Te={te} />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Push the solution over the solubility line">
        <MentalModel cite={`[${W8}, p. 2–10]`}>
          <T text="Crystallization forms a solid from a gas, liquid or melt. Because a crystal lattice is picky about what fits, it separates and purifies in one step and can reach > 99 % purity [Week 8, p. 2]. The driving force is supersaturation: more solute dissolved than the solubility curve allows. You get there by moving the state across the curve. Cool (solubility drops), evaporate (concentration rises), or add an anti-solvent (solubility drops) [Week 8, p. 4, 9]." />
          <p>
            Once supersaturated, two things happen: new nuclei form, and existing crystals grow [Week 8, p. 5]. The balance between them
            sets the product&apos;s quality: form (polymorph), <V c="a">size distribution</V>, shape (habit) and purity. Those qualities are
            tangled together, so changing one operating condition usually shifts several of them [Week 8, p. 6–8]. Solubility data is the
            foundation of every design. It can be estimated from the melting enthalpy, but measured data is usually more accurate
            [Week 8, p. 10].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Supersaturation, crystal quality and solubility">
        <Diagram title="Phase diagram with the three routes (schematic)" cite={`[${W8}, p. 4, 9]`}
            caption="From a point just under the curve: cooling (left) or evaporation (up) crosses into the supersaturated region; an anti-solvent lowers the curve itself.">
            <Routes />
          </Diagram>
        <Columns>
          <div>
            <Def term="Crystallization" cite={`[${W8}, p. 2]`}>Solid formation from gas, liquid or melt. About 70 % of fine chemicals are solids. Separates and purifies simultaneously, to very high purity (&gt; 99 %).</Def>
            <Def term="When to use it" cite={`[${W8}, p. 3]`}>Distillation impossible or expensive (heat-sensitive solute, low relative volatility); a solid or high-purity product needed; uniform crystals with a desired morphology or size distribution.</Def>
            <Def term="When not to use it" cite={`[${W8}, p. 3]`}>{"More than one component must be purified, or full solute recovery isn't attainable in one stage."}</Def>
          </div>
          <div>
            <Def term="Supersaturation" cite={`[${W8}, p. 4]`}>The solution carries more solute than the thermodynamic equilibrium value. Created by cooling, evaporation of solvent or addition of an anti-solvent (e.g. cooling or evaporating NaCl in water).</Def>
            <Def term="Other routes" cite={`[${PX}, Ex. 6a; ${PX2}, Q6.4]`}>Reaction/precipitation (reagents added), and melt crystallization.</Def>
            <Def term="Phase diagram" cite={`[${W8}, p. 9]`}>Equilibrium data for crystallization from solution at constant pressure. It splits undersaturated from supersaturated, and changing T (heating/cooling) or concentration (dilution/evaporation) can cause supersaturation.</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Solubility curves: steep vs flat" cite={`[${E8E}, Problem 1; ${PX2}, Q6.1; ${PX}, Ex. 6b]`}
            caption="Sodium acetate data points (steep, cooling-friendly). NaCl drawn schematically as nearly flat — its values aren't in the files.">
            <SolCurves />
          </Diagram>
          <Diagram title="Nucleation → growth" cite={`[${W8}, p. 5]`} caption="Clear supersaturated solution → tiny nuclei → the same nuclei larger.">
            <NucGrowth />
          </Diagram>
        </Columns>
        <Columns>
          <Def term="Nucleation / growth" cite={`[${W8}, p. 5]`}>The first ordered solid structures (nuclei) form. Growth: the nuclei increase in size.</Def>
          <Def term="Solubility prediction" cite={`[${W8}, p. 10]`}>{String.raw`From solid–liquid equilibrium with the melting enthalpy. For non-ideal solutions include $\gamma_s$. Experimental data is usually more accurate.`}</Def>
        </Columns>

        <Columns>
          <Diagram title="Crystal size distribution" cite={`[${W8}, p. 6]`} caption="Narrow (monodisperse, low c_v) vs broad (polydisperse) distribution with L_D and σ_D.">
            <CSD />
          </Diagram>
          <div>
            <Def term="Crystal form" cite={`[${W8}, p. 6]`}>Polymorphism/allotropy means one species with the same building blocks in different unit structures and dramatically different properties (e.g. calcite vs aragonite, both CaCO₃). Co-crystals have more than one molecule in the unit structure (solvate, hydrate, co-crystal).</Def>
            <Def term="Crystal size distribution (CSD)" cite={`[${W8}, p. 6]`}>{String.raw`Important for process and product properties. Described by the mean size $L_D$ and coefficient of variation $c_v = \sigma_D/L_D$. Monodisperse is ideal. Attrition and agglomeration are undesired.`}</Def>
          </div>
        </Columns>

        <Mermaid title="Quality web" chart={WEB} cite={`[${W8}, p. 6–8]`} caption="One set of operating conditions drives all four qualities; example outcomes A–C." />
        <Columns>
          <div>
            <Def term="Morphology (habit)" cite={`[${W8}, p. 7]`}>The general crystal shape. Angles are constant but face sizes vary. Influenced by crystallization rate, agitation, solvent, impurities and degree of supersaturation.</Def>
            <Def term="Purity" cite={`[${W8}, p. 7]`}>Mainly set by nucleation and growth. Impurities enter by inclusion, attrition or agglomeration. Important when crystallization is the purification step.</Def>
          </div>
          <Def term="Interdependency" cite={`[${W8}, p. 8]`}>Design and operating conditions often affect more than one quality, e.g. a broad size distribution, aggregated low-purity crystals, filtering problems.</Def>
        </Columns>
        <Gap>The solubility figures used in the exams (NaCl, CaCl₂, KNO₃) are images. Only the quoted read-offs (KNO₃ 45 g/100 g at 30 °C, 45.8 g/100 mL in Autumn 2022) are available.</Gap>
        <Gap>The interdependency figure (Week 8, p. 8) and the phase diagram (p. 9) are images.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="cv" />
        <Eq id="vth" />
        <YieldExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="KNO₃ crystals from cooling, read off a solubility curve"
          given="A KNO₃ solution at 70 °C with 70 g KNO₃ per 100 g H₂O is cooled to 30 °C."
          steps={[
            { body: 'Read the solubility at 30 °C from the curve: 45 g KNO₃ per 100 g H₂O.' },
            { body: 'The water stays (100 g). Crystals = dissolved before − dissolved after = 70 − 45 = 25 g per 100 g water.' },
            { body: 'The remaining liquid is saturated at 30 °C: 45 g KNO₃ in (45 + 100) g solution.' },
            { body: String.raw`Concentration: $45/145\cdot 100 = 31$ wt %.` },
          ]}
          result="25 g crystals per 100 g water; mother liquor 31 wt %"
          cite={`[${PX}, Ex. 6b]`}
        />
        <FadedExample
          title="Choosing a supersaturation method from solubility curves"
          given="Solubility curves for NaCl and CaCl₂ (and KNO₃) in water are given."
          steps={[
            { title: "How does CaCl₂'s solubility change with T, and which method follows?", body: 'It changes a lot with T, so cooling is effective.', hidden: true },
            { title: "How does NaCl's solubility change with T?", body: 'It is not sensitive to temperature.', hidden: true },
            { title: 'Method for NaCl, and why not cooling?', body: 'Evaporation (vaporisation). Cooling would give only a small yield.', hidden: true },
            { title: 'Name one more method and how it works.', body: 'Anti-solvent: mixing in an anti-solvent lowers the solubility of the solute. Or precipitation: reagents added to create supersaturation.', hidden: true },
          ]}
          cite={`[${PX}, Ex. 6a–b; ${PX2}, Q6.1, Q6.4]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Flat solubility curve → evaporate" cite={`[${PX2}, Q6.1]`}>The standard 2-point answer for NaCl.</Trap>
        <Trap title="Know more than cooling and evaporation" cite={`[${PX2}, Q6.4; ${PX}, Ex. 6a]`}>Anti-solvent, precipitation (reaction) and melt crystallization are all accepted &quot;other methods&quot;.</Trap>
        <Trap title="g/100 mL vs g/100 g water" cite={`[${PX2}, Q6]`}>{"With water at 1 kg/L they're the same, but the exam states that assumption explicitly."}</Trap>
        <Trap title="Concentration of the mother liquor" cite={`[${PX}, Ex. 6b]`}>Report wt % of the **solution** (45/145), not the solubility ratio (45/100).</Trap>
        <Trap title="Two van 't Hoff equations on the formula sheet" cite={`[${FS}, p. 8, eq. 78; Week 3, p. 23]`}>
          {String.raw`Eq. 78 is solid–liquid solubility with $\Delta H_{melt}$. It's not the Henry/K temperature equation from absorption.`}
        </Trap>
        <Trap title="Sign check on eq. 78 (source discrepancy)" cite={`[${W8}, p. 10]`}>
          {String.raw`For $T < T_{melt}$, $x_s$ must come out ≤ 1 ($\ln x_s \le 0$). Check that your sign convention for $\Delta H_{melt}$ gives that.`}
        </Trap>
        <Trap title="When not to crystallize" cite={`[${W8}, p. 3]`}>More than one component to purify, or incomplete recovery in one stage.</Trap>
        <Trap title="Monodisperse is the target" cite={`[${W8}, p. 6–7]`}>Attrition and agglomeration both broaden the CSD and hurt purity.</Trap>
      </Section>
    </>
  )
}
