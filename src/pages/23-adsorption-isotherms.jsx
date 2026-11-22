import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Box, Arrow, Label, Curve,
  M, V, T, tone,
} from '../components'

const W7 = 'Week 7 - Adsorption and ion-exchange with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E7E = 'exercise_07_eng.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Adsorption isotherms — Langmuir (single and two-component)',
  topic: 'adsorption',
  examWeight: {
    level: 'high',
    note: 'Langmuir constants from an isotherm on 2 of 2 practice exams (Practice exam 1 Ex. 5a; Autumn 2022 Q5b)',
  },
  examTasks: [
    'Practice exam 1, Ex. 5a: q_max for N₂ and O₂ from Langmuir expressions and the equilibrium selectivity (page 22).',
    'Autumn 2022, Q5b: Langmuir constant b_A from one point on the isotherm and q_max (b_A = 0.20).',
    'Autumn 2022, Q5a: favourable vs unfavourable isotherm. Covered on page 24.',
  ],
  buildsOn: ['22-adsorbents-properties'],
  usedIn: ['24-fixed-bed-adsorption', '25-adsorption-cycles-ion-exchange'],
  sources: [`[${W7}, p. 16–24]`, `[${FS}, p. 6, eq. 65–68]`, `[${E7E}, Problem 1–2 and short answers]`, `[${PX2}, Q5b]`, `[${PX}, Ex. 5a]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'What does the occupancy θ mean?', a: 'The fraction of adsorption sites that are occupied, $\\theta = q_A/q_{A,max}$. [Week 7, p. 16]' },
    { id: 'p2', kind: 'pretest', q: 'In a two-component Langmuir model, what changes compared to one component?', a: 'Both components appear in the denominator: $\\theta_A = b_Ap_A/(1 + b_Ap_A + b_Bp_B)$. They compete for the same sites. [Week 7, p. 19]' },
    { id: 'p3', kind: 'pretest', q: 'An isotherm is written $q = \\dfrac{0.190c}{1 + 0.146c}$. What is $q_{max}$?', a: '$0.190/0.146 = 1.3$ mol/kg. [exercise_07_eng.pdf, Problem 1a and short answers]' },
    { id: 't1', q: 'Derive the Langmuir isotherm from the rates.', a: '$k_{ads}p_A(1-\\theta) = k_{des}\\theta$ gives $\\theta = \\frac{(k_{ads}/k_{des})p_A}{1 + (k_{ads}/k_{des})p_A} = \\frac{b_Ap_A}{1 + b_Ap_A}$. [Week 7, p. 18]' },
    { id: 't2', q: 'In the propane/propylene table, which adsorbent has the greatest capacity, which the greatest selectivity, and which is best for separation?', a: 'Greatest capacity: activated carbon (highest $q_{max}$). Greatest selectivity: ZMS 4A (largest relative difference in b). Best for separation on equilibrium grounds: ZMS 4A. [Week 7, p. 23]' },
    { id: 't3', q: 'Nitrobenzene from 0.01 to 10⁻⁶ kg/m³ in one ideally stirred tank, $q = 675c$ (m³/kg). How much activated carbon per m³?', a: 'At equilibrium $q = 675\\cdot 10^{-6} = 6.75\\cdot 10^{-4}$ kg/kg. Carbon $= (0.01 - 10^{-6})/6.75\\cdot 10^{-4} = 14.8$ kg/m³. [exercise_07_eng.pdf, Problem 2 and short answer]' },
    { id: 't4', q: 'What causes the hysteresis in type IV and V isotherms?', a: 'Capillary condensation. [Week 7, p. 20]' },
    { id: 't5', q: 'Why is the Langmuir separation factor called "constant"?', a: "$\\alpha'_{AB} = (q_A/c_A)/(q_B/c_B) = b_A/b_B$, which doesn't depend on concentration. [Week 7, p. 19]" },
  ],
  equations: [
    {
      id: 'lgas',
      label: 'Langmuir isotherm (single component, gas)',
      tex: String.raw`\theta_A = \frac{\vb{q_A}}{\vc{q_{A,max}}} = \frac{\vd{b_A}\va{p_A}}{1 + \vd{b_A}\va{p_A}}, \qquad \vb{q_A} = \vc{q_{A,max}}\frac{\vd{b_A}\va{p_A}}{1 + \vd{b_A}\va{p_A}}`,
      vars: [
        { sym: String.raw`\theta_A`, desc: 'occupancy', unit: '–' },
        { sym: String.raw`\vb{q_A}`, desc: 'amount adsorbed', unit: String.raw`\mathrm{mol/kg}` },
        { sym: String.raw`\vc{q_{A,max}}`, desc: 'monolayer capacity', unit: String.raw`\mathrm{mol/kg}` },
        { sym: String.raw`\vd{b_A}`, desc: 'Langmuir constant', unit: String.raw`\mathrm{1/Pa}\ (\text{or 1/bar})` },
        { sym: String.raw`\va{p_A}`, desc: 'partial pressure', unit: String.raw`\mathrm{Pa}\ (\text{or bar})` },
      ],
      note: 'Under the four Langmuir assumptions.',
      cite: `[${W7}, p. 16, 21; ${FS}, p. 6, eq. 65–66]`,
      check: { status: 'verified', note: 'Matches W7 p. 16, 21 and formula sheet eq. 65–66 (on PDF p. 7).' },
    },
    {
      id: 'lliq',
      label: 'Langmuir isotherm (liquid)',
      tex: String.raw`\theta_A = \frac{\vb{q_A}}{\vc{q_{A,max}}} = \frac{\vd{b'_A}\va{c_A}}{1 + \vd{b'_A}\va{c_A}}`,
      vars: [
        { sym: String.raw`\vd{b'_A}`, desc: 'Langmuir constant (concentration form)', unit: String.raw`\mathrm{m^3/mol}` },
        { sym: String.raw`\va{c_A}`, desc: 'concentration', unit: String.raw`\mathrm{mol/m^3}` },
      ],
      cite: `[${W7}, p. 21]`,
      check: { status: 'verified', note: 'Matches W7 p. 21.' },
    },
    {
      id: 'kin',
      label: 'Langmuir constant from kinetics and temperature',
      tex: String.raw`\vd{b_A} = \frac{k_{ads}}{k_{des}}, \qquad \vd{b_A} = b_A^0\,e^{-\Delta E_{ads}/RT}`,
      vars: [
        { sym: String.raw`k_{ads}, k_{des}`, desc: 'adsorption and desorption rate constants', unit: '–' },
        { sym: String.raw`\Delta E_{ads}`, desc: 'adsorption energy', unit: String.raw`\mathrm{J/mol}` },
        { sym: String.raw`b_A^0`, desc: 'pre-exponential factor', unit: String.raw`\text{same as } b_A` },
      ],
      cite: `[${W7}, p. 18]`,
      check: { status: 'verified', note: 'Matches W7 p. 18.' },
    },
    {
      id: 'two',
      label: 'Two-component (extended) Langmuir',
      tex: String.raw`\theta_A = \frac{\vb{q_A}}{\vc{q_{A,max}}} = \frac{\vd{b_A}\va{p_A}}{1 + \vd{b_A}\va{p_A} + \ve{b_B}p_B}, \qquad \theta_B = \frac{q_B}{q_{B,max}} = \frac{\ve{b_B}p_B}{1 + \vd{b_A}\va{p_A} + \ve{b_B}p_B}`,
      vars: [{ sym: String.raw`\va{p_A}, p_B`, desc: 'partial pressures (or c for liquids)', unit: String.raw`\mathrm{Pa}\ (\text{or mol/m}^3)` }],
      cite: `[${W7}, p. 19; ${FS}, p. 6, eq. 67–68]`,
      check: { status: 'verified', note: 'Matches W7 p. 19 and formula sheet eq. 67–68 (on PDF p. 8).' },
    },
    {
      id: 'sel',
      label: 'Equilibrium selectivity',
      tex: String.raw`\alpha'_{AB} = \frac{\vb{q_A}/\va{c_A}}{q_B/c_B} = \frac{\vd{b_A}}{\ve{b_B}}`,
      vars: [{ sym: String.raw`\alpha'_{AB}`, desc: 'separation factor (constant for Langmuir)', unit: '–' }],
      cite: `[${W7}, p. 19]`,
      check: { status: 'verified', note: 'Matches W7 p. 19.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

function IsoPlot({ qm = 1.3, b = 0.2, comp = 0, w = 460, showMark = true, notes = true }) {
  const x0 = 64
  const y0 = 20
  const pw = w - 100
  const h = 240
  const X = (c) => x0 + (c / 40) * pw
  const ymax = Math.max(1.5, Math.ceil(qm * 2) / 2 + 0.2)
  const Yq = (q) => y0 + h - (q / ymax) * h
  const cs = Array.from({ length: 120 }, (_, i) => (i / 119) * 40)
  const f = (c) => (qm * b * c) / (1 + b * c + comp)
  return (
    <Svg w={w} h={310} label="Langmuir isotherm q against concentration">
      <Arrow x1={x0} y1={y0 + h} x2={x0 + pw + 10} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      {[0, 10, 20, 30, 40].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
      {Array.from({ length: Math.floor(ymax / 0.5) }, (_, i) => (i + 1) * 0.5).map((v) => <text key={v} x={x0 - 7} y={Yq(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={x0 + pw} y={y0 + h + 36} anchor="end" size={13} t="var-a">c_A (mol/m³)</Label>
      <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-b">q (mol/kg)</Label>
      <line x1={x0} y1={Yq(qm)} x2={x0 + pw} y2={Yq(qm)} style={st('var-c', true, 1.5)} />
      <Label x={x0 + pw} y={Yq(qm) - 6} anchor="end" size={12} t="var-c">{`q_max = ${qm.toFixed(2)}`}</Label>
      <polyline points={cs.map((c) => `${X(c)},${Yq(f(c))}`).join(' ')} style={st('var-b')} />
      {showMark && (
        <>
          <circle cx={X(8)} cy={Yq(0.8)} r={5} style={{ fill: tone('example') }} />
          <Label x={X(8) + 8} y={Yq(0.8) + 18} anchor="start" size={12} t="example">(8, 0.8)</Label>
        </>
      )}
      {notes && (
        <>
          <Label x={X(1.5)} y={Yq(0.12)} anchor="start" size={11} t="muted">linear (Henry) region</Label>
          <Label x={X(28)} y={Yq(qm) + 18} size={11} t="muted">plateau = monolayer</Label>
        </>
      )}
    </Svg>
  )
}

// ---- Visual 2: kinetic picture --------------------------------------------------------
function Sites() {
  const occ = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
  return (
    <Svg w={520} h={200} label="Row of identical sites, some occupied; adsorption and desorption arrows">
      <rect x={20} y={140} width={480} height={20} style={shade('muted', 50)} />
      {occ.map((o, i) => (
        <g key={i}>
          <rect x={30 + i * 47} y={128} width={34} height={12} rx={3} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 1.5 }} />
          {o ? <circle cx={47 + i * 47} cy={118} r={10} style={{ fill: tone('var-a') }} /> : null}
        </g>
      ))}
      <Arrow x1={140} y1={30} x2={140} y2={100} t="intuition" />
      <Label x={150} y={46} anchor="start" size={12} t="intuition">r_ads = k_ads p_A (1 − θ)</Label>
      <Arrow x1={330} y1={100} x2={330} y2={30} t="trap" />
      <Label x={340} y={46} anchor="start" size={12} t="trap">r_des = k_des θ</Label>
      <Label x={260} y={188} size={11} t="muted">one molecule per site · equal energy · no neighbour interaction · localised</Label>
    </Svg>
  )
}

// ---- Visual 3: isotherm types ------------------------------------------------------------
function Types() {
  const panel = (i, title, pts, back) => {
    const ox = 8 + i * 126
    const P = ([x, y]) => [ox + 14 + x * 100, 120 - y * 90]
    return (
      <g key={title}>
        <Arrow x1={ox + 14} y1={120} x2={ox + 118} y2={120} head={6} />
        <Arrow x1={ox + 14} y1={120} x2={ox + 14} y2={22} head={6} />
        <Curve points={pts.map(P)} t="var-b" width={2} />
        {back && <Curve points={back.map(P)} t="trap" dashed width={1.8} />}
        <Label x={ox + 66} y={142} size={12}>{title}</Label>
      </g>
    )
  }
  return (
    <Svg w={640} h={180} label="Five isotherm types: I plateau, II multilayer, III convex, IV and V with hysteresis">
      {panel(0, 'I', [[0, 0], [0.15, 0.55], [0.4, 0.78], [1, 0.85]])}
      {panel(1, 'II', [[0, 0], [0.2, 0.45], [0.5, 0.55], [0.8, 0.72], [1, 1]])}
      {panel(2, 'III', [[0, 0], [0.4, 0.1], [0.7, 0.3], [1, 0.95]])}
      {panel(3, 'IV', [[0, 0], [0.2, 0.4], [0.5, 0.5], [0.75, 0.8], [1, 0.9]], [[1, 0.9], [0.65, 0.85], [0.45, 0.55]])}
      {panel(4, 'V', [[0, 0], [0.4, 0.12], [0.65, 0.5], [0.85, 0.85], [1, 0.9]], [[1, 0.9], [0.6, 0.82], [0.45, 0.4]])}
      <Label x={505} y={170} size={11} t="trap">IV, V: hysteresis (capillary condensation)</Label>
    </Svg>
  )
}

// ---- Visual 4: competitive bars -------------------------------------------------------------
function CompBars() {
  const x0 = 60
  const y0 = 20
  const h = 200
  const Y = (v) => y0 + h - (v / 2) * h
  const groups = [
    { n: 'acetone (1)', a: 1.3, b: 0.75 },
    { n: 'propionitrile (2)', a: 1.8, b: 0.58 },
  ]
  return (
    <Svg w={440} h={280} label="Single-component capacity vs loading in the mixture for acetone and propionitrile">
      <Arrow x1={x0} y1={y0 + h} x2={420} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      {[0.5, 1, 1.5, 2].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={x0 + 6} y={y0 - 4} anchor="start" size={12} t="var-b">q (mol/kg)</Label>
      {groups.map((g, i) => (
        <g key={g.n}>
          <rect x={100 + i * 160} y={Y(g.a)} width={50} height={Y(0) - Y(g.a)} style={{ ...shade('var-c', 40), stroke: tone('var-c') }} />
          <rect x={155 + i * 160} y={Y(g.b)} width={50} height={Y(0) - Y(g.b)} style={{ ...shade('var-b', 40), stroke: tone('var-b') }} />
          <text x={125 + i * 160} y={Y(g.a) - 5} textAnchor="middle" className="svg-label">{g.a}</text>
          <text x={180 + i * 160} y={Y(g.b) - 5} textAnchor="middle" className="svg-label">{g.b}</text>
          <text x={152 + i * 160} y={y0 + h + 18} textAnchor="middle" className="svg-sub">{g.n}</text>
        </g>
      ))}
      <rect x={76} y={22} width={12} height={12} style={shade("var-c", 40)} />
      <Label x={92} y={33} anchor="start" size={11} t="var-c">q_max alone</Label>
      <rect x={76} y={40} width={12} height={12} style={shade("var-b", 40)} />
      <Label x={92} y={51} anchor="start" size={11} t="var-b">in mixture (c₁ 40, c₂ 34)</Label>
    </Svg>
  )
}

// ---- Visual 5: gravimetric apparatus ----------------------------------------------------------
function Apparatus() {
  return (
    <Svg w={520} h={260} label="Gravimetric isotherm apparatus: chamber with spring and sample basket in an isothermal bath, gauge, adsorbate supply and pump">
      <rect x={150} y={60} width={200} height={170} rx={10} style={{ ...shade('var-e', 14), stroke: tone('var-e'), strokeWidth: 2 }} />
      <Label x={250} y={250} size={11} t="var-e">7 isothermal bath</Label>
      <rect x={200} y={40} width={100} height={160} rx={8} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <Label x={250} y={32} size={11}>3 adsorption chamber</Label>
      <path d="M250,40 v10 l-10,6 l20,6 l-20,6 l20,6 l-20,6 l10,6 v20" style={st('ink', false, 1.5)} />
      <Label x={274} y={82} anchor="start" size={11}>4 spring</Label>
      <path d="M230,126 h40 l-6,24 h-28 z" style={{ fill: tone('var-a'), opacity: 0.6 }} />
      <Label x={274} y={142} anchor="start" size={11}>5 sample basket</Label>
      <circle cx={90} cy={70} r={22} style={{ fill: 'var(--bg)', stroke: tone('ink'), strokeWidth: 2 }} />
      <line x1={90} y1={70} x2={102} y2={58} style={st('trap', false, 2)} />
      <line x1={112} y1={70} x2={200} y2={70} style={st('ink', false, 1.5)} />
      <Label x={90} y={108} size={11}>1 pressure gauge</Label>
      <Box x={20} y={150} w={100} h={40} label="2 adsorbate" t="var-a" />
      <line x1={120} y1={170} x2={200} y2={170} style={st('ink', false, 1.5)} />
      <Box x={400} y={150} w={100} h={40} label="6 pump(s)" t="muted" />
      <line x1={300} y1={170} x2={400} y2={170} style={st('ink', false, 1.5)} />
    </Svg>
  )
}

// ---- Interactive -------------------------------------------------------------------------------
function IsoExplorer() {
  const [b, setB] = useState(0.2)
  const [qm, setQm] = useState(1.3)
  const [comp, setComp] = useState(0)
  const q8 = (qm * b * 8) / (1 + b * 8 + comp)
  return (
    <Diagram
      title="Langmuir isotherm, with or without a competitor"
      caption={String.raw`$q_A = q_{A,max}\frac{b_Ac_A}{1 + b_Ac_A + b_Bc_B}$ [Week 7, p. 19, 21]. Start $b_A = 0.20$ m³/mol, $q_{max} = 1.30$ mol/kg, no competitor: the curve passes through (8, 0.8) [practice exam 2 solutions.pdf, Q5b]. The competitor term $b_Bc_B$ is treated as fixed.`}
      cite={`[${W7}, p. 19, 21; ${PX2}, Q5b]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="d"><M>b_A</M></V> = <strong>{b.toFixed(3)}</strong> m³/mol</span>
            <input type="range" min={0.01} max={2} step={0.005} value={b} onChange={(e) => setB(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="c"><M>{String.raw`q_{A,max}`}</M></V> = <strong>{qm.toFixed(2)}</strong> mol/kg</span>
            <input type="range" min={0.5} max={3} step={0.01} value={qm} onChange={(e) => setQm(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="e"><M>b_Bc_B</M></V> = <strong>{comp.toFixed(2)}</strong></span>
            <input type="range" min={0} max={5} step={0.01} value={comp} onChange={(e) => setComp(Number(e.target.value))} />
          </label>
        </div>
        <p>q at c = 8 mol/m³: <strong>{q8.toFixed(3)}</strong> mol/kg</p>
        <IsoPlot qm={qm} b={b} comp={comp} showMark notes={false} w={480} />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Landing and leaving at equal rates">
        <MentalModel cite={`[${W7}, p. 16–20]`}>
          <T text="At equilibrium, molecules land on free sites at a rate ∝ pressure × (free fraction) and leave at a rate ∝ (occupied fraction) [Week 7, p. 18]. Set the two equal and you get the Langmuir isotherm. At low pressure θ rises linearly. At high pressure it flattens toward 1 as the sites fill, so q approaches the monolayer capacity $q_{max}$ [Week 7, p. 16, 18]." />
          <p>
            The <V c="d">Langmuir constant b</V> = <M>{String.raw`k_{ads}/k_{des}`}</M> measures affinity: large b means the surface fills at
            low pressure [Week 7, p. 18]. This picture only works if each site holds one molecule, all sites are equal and neighbours
            don&apos;t interact [Week 7, p. 17]. With two adsorbates they compete for the same sites, so each one&apos;s occupancy is reduced by
            the other&apos;s <M>b\,p</M> term. The ratio of their loadings per concentration is just <M>b_A/b_B</M>, a constant separation
            factor [Week 7, p. 19]. Other isotherm shapes (multilayer, hysteresis) break those assumptions [Week 7, p. 20].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Langmuir, competition and other isotherm types">
        <Columns>
          <Diagram title="Langmuir isotherm shape" cite={`[${W7}, p. 16, 21; ${PX2}, Q5b]`}
            caption="q = 1.30 · 0.20c/(1 + 0.20c) with q_max = 1.30 as the asymptote; the exam read-off point (8, 0.8).">
            <IsoPlot />
          </Diagram>
          <div>
            <Def term="Adsorption equilibrium" cite={`[${W7}, p. 16]`}>A dynamic balance between constant adsorption to and desorption from the surface.</Def>
            <Def term="Occupancy (θ)" cite={`[${W7}, p. 16]`}>The fraction of sites occupied.</Def>
            <Def term="Langmuir quantities" cite={`[${W7}, p. 16]`}>{String.raw`$q_A$ is the amount adsorbed per volume or weight, $q_{A,max}$ the monolayer capacity, $b_A$ the Langmuir adsorption constant.`}</Def>
            <Def term="Gas vs liquid" cite={`[${W7}, p. 21]`}>{String.raw`Gas uses partial pressure, with $b_A$ in 1/Pa. Liquid uses concentration, with $b'_A$ in m³/mol.`}</Def>
            <Def term="Linear (Henry) isotherm" cite={`[${E7E}, Problem 2]`}>{String.raw`At low concentrations an isotherm can be linear, $q = Kc$.`}</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Kinetic picture" cite={`[${W7}, p. 17–18]`} caption="Identical sites, some occupied (θ), some free (1 − θ).">
            <Sites />
          </Diagram>
          <div>
            <Def term="Langmuir assumptions (type I)" cite={`[${W7}, p. 17]`}>
              {"(1) The adsorbed molecule is held at a definite, localised site; (2) each site holds one molecule; (3) the adsorption energy is the same for all sites; (4) neighbouring adsorbates don't interact."}
            </Def>
            <Def term="Kinetic derivation" cite={`[${W7}, p. 18]`}>
              {String.raw`$r_{ads} = k_{ads}p_A(1-\theta)$ and $r_{des} = k_{des}\theta$. Setting them equal gives $\theta = b_Ap_A/(1 + b_Ap_A)$ with $b_A = k_{ads}/k_{des}$.`}
            </Def>
            <Def term="Temperature dependence of b" cite={`[${W7}, p. 18]`}>{String.raw`Arrhenius form $b_A = b_A^0 e^{-\Delta E_{ads}/RT}$.`}</Def>
          </div>
        </Columns>

        <Diagram title="Isotherm types" cite={`[${W7}, p. 20]`} caption="I Langmuir plateau; II rises again (multilayer); III low initial capacity; IV and V adsorption/desorption branches forming a hysteresis loop. Schematic.">
          <Types />
        </Diagram>
        <Def term="Other isotherm types" cite={`[${W7}, p. 20]`}>
          Types II and III allow more molecules per site, and type III has a lower capacity at the start. Types IV and V show hysteresis: the amount adsorbed depends on whether the concentration is rising or falling, caused by capillary condensation.
        </Def>

        <Columns>
          <Diagram title="Competitive adsorption (acetone / propionitrile on activated carbon)" cite={`[${E7E}, Problem 1, short answers]`}
            caption="Single-component q_max vs loading in the mixture at c₁ = 40, c₂ = 34 mol/m³.">
            <CompBars />
          </Diagram>
          <div>
            <Def term="Two-component (extended) Langmuir" cite={`[${W7}, p. 19; ${FS}, p. 6, eq. 67–68]`}>Both components share the denominator.</Def>
            <Def term="Equilibrium selectivity (separation factor)" cite={`[${W7}, p. 19]`}>{String.raw`$\alpha'_{AB} = \frac{q_A/c_A}{q_B/c_B} = b_A/b_B$, a constant separation factor.`}</Def>
            <Def term="Choosing an adsorbent from Langmuir data" cite={`[${W7}, p. 22–23]`}>
              {String.raw`Strongest-adsorbed component = larger b. Greatest capacity = highest $q_{max}$. Greatest selectivity = largest relative difference in b between the two adsorbates.`}
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Gravimetric isotherm apparatus" cite={`[${W7}, p. 24]`} caption="Numbered as on the slide.">
            <Apparatus />
          </Diagram>
          <Def term="Measuring isotherms" cite={`[${W7}, p. 24]`}>
            Commonly gravimetric (pressure gauge, adsorbate, adsorption chamber, spring with sample basket, pumps, isothermal bath), measured at several adsorbate concentrations.
          </Def>
        </Columns>
        <Gap>{String.raw`The propane/propylene Langmuir constant table (Week 7, p. 22–23) is an image, so the $q_{max}$ and b values can't be reproduced. Only the slide's conclusions are used.`}</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="lgas" />
        <Eq id="lliq" />
        <Eq id="kin" />
        <Eq id="two" />
        <Eq id="sel" />
        <IsoExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Langmuir constant from an isotherm figure"
          given={String.raw`Langmuir type I isotherm at 300 K and 1 bar, $q_{max} = 1.30$ mol A/kg. The figure passes through $(c_A, q) = (8\ \text{mol/m}^3, 0.8\ \text{mol/kg})$.`}
          steps={[
            { body: String.raw`Model: $q = q_{max}\dfrac{b_Ac_A}{1 + b_Ac_A}$.` },
            { body: String.raw`Insert the point: $0.8 = 1.30\dfrac{8b_A}{1 + 8b_A}$.` },
            { body: String.raw`Divide: $0.62 = \dfrac{8b_A}{1 + 8b_A}$.` },
            { body: String.raw`Multiply out: $0.62 + 4.92b_A = 8b_A$.` },
            { body: String.raw`Solve: $b_A = 0.20$ m³/mol, since c is in mol/m³.` },
          ]}
          result={String.raw`$b_A = 0.20$ m³/mol`}
          cite={`[${PX2}, Q5b]`}
        />
        <FadedExample
          title="Competitive adsorption of acetone and propionitrile on activated carbon"
          given={String.raw`$q_1 = \dfrac{0.190c_1}{1 + 0.146c_1}$ and $q_2 = \dfrac{0.173c_2}{1 + 0.096c_2}$ (q in mol/kg, c in mol/m³). Waste stream: $c_1 = 40$, $c_2 = 34$ mol/m³.`}
          steps={[
            { body: String.raw`Match each to $q = q_m\dfrac{bc}{1 + bc}$, so $b_1 = 0.146$ and $b_2 = 0.096$ m³/mol.` },
            { title: 'Capacities.', body: String.raw`$q_{1,m} = 0.190/0.146 = 1.3$ and $q_{2,m} = 0.173/0.096 = 1.8$ mol/kg.`, hidden: true },
            { title: 'Shared denominator.', body: String.raw`$1 + 0.146\cdot 40 + 0.096\cdot 34 = 10.1$.`, hidden: true },
            { title: 'Loadings.', body: String.raw`$q_1 = 1.30\cdot 5.84/10.1 = 0.75$ and $q_2 = 1.80\cdot 3.26/10.1 = 0.58$ mol/kg.`, hidden: true },
            { title: 'Compare with single-component.', body: String.raw`Alone, acetone at 40 mol/m³ would give $1.30\cdot 5.84/6.84 = 1.11$ mol/kg. Competition cuts it to 0.75.`, hidden: true },
          ]}
          cite={`[${E7E}, Problem 1a–b and short answers 1a–b]`}
        />
        <Gap>The official exercise 7 solutions are blank. Results come from the short answers on the task sheet. The faded example&apos;s step 5 (single-component comparison) is computed here from the given isotherm.</Gap>
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title={String.raw`$q_{max}$ = numerator coefficient ÷ b`} cite={`[${PX}, Ex. 5a; ${E7E}, Problem 1a]`}>
          {"E.g. $100/2 = 50$ mol/kg. Don't read the numerator coefficient as $q_{max}$."}
        </Trap>
        <Trap title="Units of b follow the variable" cite={`[${W7}, p. 21; ${PX2}, Q5b]`}>
          {String.raw`1/Pa (or 1/bar) for partial pressure, m³/mol for concentration. The exam's $b_A = 0.20$ is in m³/mol.`}
        </Trap>
        <Trap title="Extended Langmuir has both terms in every denominator" cite={`[${W7}, p. 19]`}>
          {String.raw`Forgetting $b_Bc_B$ overestimates the loading.`}
        </Trap>
        <Trap title={String.raw`Selectivity from b, capacity from $q_{max}$`} cite={`[${W7}, p. 23]`}>
          The propane/propylene example ranks activated carbon highest for capacity but ZMS 4A for selectivity, and ZMS 4A best overall.
        </Trap>
        <Trap title="Langmuir assumptions" cite={`[${W7}, p. 17]`}>
          If asked why a real isotherm deviates, give the four assumptions (localised sites, one molecule per site, uniform energy, no interactions).
        </Trap>
        <Trap title="Hysteresis means type IV/V" cite={`[${W7}, p. 20]`}>Capillary condensation, and the loading depends on direction.</Trap>
        <Trap title="Low c means linear" cite={`[${E7E}, Problem 2]`}>{String.raw`At very low concentration, use $q = Kc$.`}</Trap>
      </Section>
    </>
  )
}
