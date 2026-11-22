import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W7 = 'Week 7 - Adsorption and ion-exchange with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E7E = 'exercise_07_eng.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Adsorption kinetics and fixed-bed adsorption',
  topic: 'adsorption',
  examWeight: {
    level: 'high',
    note: 'Bed sizing / saturation time on 2 of 2 practice exams (Practice exam 1 Ex. 5b; Autumn 2022 Q5a, Q5c — 5 of 7 pts)',
  },
  examTasks: [
    'Practice exam 1, Ex. 5b: saturation time of a wastewater adsorber, t = Wq/(QC) = 500 h.',
    'Autumn 2022, Q5a: is the Langmuir type I isotherm favourable or unfavourable? Explain.',
    'Autumn 2022, Q5c: mass of adsorbent for 30 min of operation (170.1 kg).',
  ],
  buildsOn: ['22-adsorbents-properties', '23-adsorption-isotherms'],
  usedIn: ['25-adsorption-cycles-ion-exchange'],
  sources: [`[${W7}, p. 25–35]`, `[${FS}, p. 7, eq. 69–72]`, `[${E7E}, Problem 1c and short answers]`, `[${PX2}, Q5a, Q5c]`, `[${PX}, Ex. 5b]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Name the three conditions for ideal fixed-bed adsorption.', a: 'Small mass-transfer resistances, plug flow (no axial dispersion), and an adsorbent that starts free of adsorbate. [Week 7, p. 27]' },
    { id: 'p2', kind: 'pretest', q: 'Is a Langmuir (type I) isotherm favourable or unfavourable for a fixed bed?', a: 'Favourable. Its slope dq/dc is lower at high concentration, so those points move faster and the front compresses, giving better bed use. [practice exam 2 solutions.pdf, Q5a; Week 7, p. 33]' },
    { id: 'p3', kind: 'pretest', q: 'What is the difference between useful capacity and total capacity?', a: 'Useful capacity is integrated up to the breakthrough time $t_{bp}$. Total capacity is integrated up to saturation $t_s$ (or ∞). [Week 7, p. 30; FormelarkKP3010.pdf, p. 7, eq. 69–70]' },
    { id: 't1', q: 'Wastewater 10 m³/h with 0.4 g/m³ contaminant. Adsorbent capacity 1 kg/kg, 2 kg in the column. Time to saturation?', a: '$t = Wq/(QC) = 2\\cdot 1000\\ \\text{g}/(10\\cdot 0.4\\ \\text{g/h}) = 500$ h. [practice_exam_solutions.pdf, Ex. 5b]' },
    { id: 't2', q: 'Acetone (0.75 mol/kg at 40 mol/m³) and propionitrile (0.58 mol/kg at 34 mol/m³), linear isotherms assumed. Ratio of front velocities $v_1/v_2$?', a: '$v \\propto 1/(\\Delta q/\\Delta c)$, so $v_1/v_2 = (0.58/34)/(0.75/40) = 0.91$. [exercise_07_eng.pdf, Problem 1c and short answer]' },
    { id: 't3', q: 'List the four kinetic steps of adsorption in order.', a: 'External mass transfer, pore diffusion, surface diffusion, adsorption. [Week 7, p. 25]' },
    { id: 't4', q: 'Why does an unfavourable isotherm waste bed capacity?', a: 'It gives a dispersive front: breakthrough starts early while much of the bed is still unsaturated. [Week 7, p. 33]' },
    { id: 't5', q: 'What is kinetic selectivity? Give the course example.', a: 'Selectivity from different mass-transfer rates rather than equilibrium. Small pores can slow N₂ compared with O₂. [Week 7, p. 26]' },
  ],
  equations: [
    {
      id: 'cap',
      label: 'Capacities',
      tex: String.raw`Q_{tot} = \int_0^\infty \ve{Q}(\va{c_F} - c_{out})\,dt, \qquad Q_{uc} = \int_0^{t_{bp}} \ve{Q}(\va{c_F} - c_{out})\,dt`,
      vars: [
        { sym: String.raw`Q_{tot}`, desc: 'total capacity (amount adsorbed until saturation)', unit: String.raw`\mathrm{mol}\ (\text{or kg})` },
        { sym: String.raw`Q_{uc}`, desc: 'useful capacity (until breakthrough)', unit: String.raw`\mathrm{mol}` },
        { sym: String.raw`\ve{Q}`, desc: 'volumetric flow', unit: String.raw`\mathrm{m^3/h}` },
        { sym: String.raw`\va{c_F}, c_{out}`, desc: 'feed and outlet concentration', unit: String.raw`\mathrm{mol/m^3}` },
        { sym: String.raw`t_{bp}`, desc: 'breakthrough time', unit: String.raw`\mathrm{h}` },
      ],
      note: "The slide's rectangular form is $Q_{uc} = t_{bp}Q(c_F - c_{out})$ and $Q_{tot} = t_sQ(c_F - c_{out})$.",
      cite: `[${W7}, p. 30; ${FS}, p. 7, eq. 69–70]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 69–70 (on PDF p. 8) and the rectangular forms on W7 p. 30.' },
    },
    {
      id: 'sat',
      label: 'Ideal-bed saturation balance',
      tex: String.raw`t\,\ve{Q}\,\va{C} = \vd{W}\,\vb{q}`,
      vars: [
        { sym: String.raw`t`, desc: 'time to saturation (= breakthrough for an ideal bed)', unit: String.raw`\mathrm{h}` },
        { sym: String.raw`\va{C}`, desc: 'feed concentration', unit: String.raw`\mathrm{g/m^3}\ (\text{or mol/m}^3)` },
        { sym: String.raw`\vd{W}`, desc: 'adsorbent mass', unit: String.raw`\mathrm{kg}` },
        { sym: String.raw`\vb{q}`, desc: 'equilibrium loading at the feed concentration', unit: String.raw`\mathrm{g/kg}\ (\text{or mol/kg})` },
      ],
      note: 'Whole-bed mass balance, ideal front.',
      cite: `[${PX}, Ex. 5b; ${PX2}, Q5c]`,
      check: { status: 'verified', note: 'Practice exam 1 Ex. 5b solution: t = Wq/QC = 500 h.' },
    },
    {
      id: 'slice',
      label: 'Equilibrium-model slice balance',
      tex: String.raw`\epsilon_b\frac{d\va{c}}{dt} + (1-\epsilon_b)\rho_{part}\frac{d\vb{q}}{dt} = -\frac{\ve{Q}}{A}\frac{d\va{c}}{dz}`,
      vars: [
        { sym: String.raw`\epsilon_b`, desc: 'bed void fraction', unit: '–' },
        { sym: String.raw`\rho_{part}`, desc: 'particle density', unit: String.raw`\mathrm{kg/m^3}` },
        { sym: String.raw`A`, desc: 'bed cross-section', unit: String.raw`\mathrm{m^2}` },
        { sym: String.raw`z`, desc: 'bed position', unit: String.raw`\mathrm{m}` },
      ],
      cite: `[${W7}, p. 31]`,
      check: { status: 'verified', note: 'Matches W7 p. 31.' },
    },
    {
      id: 'vc',
      label: 'Concentration propagation velocity',
      tex: String.raw`\vf{v_c} = \left.\frac{dz}{dt}\right|_c = \frac{u_{carrier}}{\epsilon_b + (1-\epsilon_b)\rho_{part}\left.\frac{d\vb{q}}{d\va{c}}\right|_c} \;\approx\; \frac{u_{carrier}}{(1-\epsilon_b)\rho_{part}\left.\frac{d\vb{q}}{d\va{c}}\right|_c}, \qquad u_{carrier} = \frac{\ve{Q}}{A}`,
      vars: [
        { sym: String.raw`\vf{v_c}`, desc: 'speed at which concentration c moves through the bed', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`u_{carrier}`, desc: 'superficial carrier velocity', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`d\vb{q}/d\va{c}`, desc: 'isotherm slope at c', unit: String.raw`\mathrm{m^3/kg}` },
      ],
      note: 'The approximation holds because $\\epsilon_b \\ll (1-\\epsilon_b)\\rho_{part}\\,dq/dc$ usually.',
      cite: `[${W7}, p. 31–32; ${FS}, p. 7, eq. 71–72]`,
      check: { status: 'verified', note: 'Matches W7 p. 31–32 and formula sheet eq. 71–72.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })
const sig = (x, x0, k) => 1 / (1 + Math.exp(-(x - x0) * k))

// ---- Visual 1: four kinetic steps ---------------------------------------------------
function Steps() {
  return (
    <Svg w={520} h={260} label="Porous particle with film: external mass transfer, pore diffusion, surface diffusion, adsorption">
      <circle cx={300} cy={130} r={110} style={{ ...shade('var-b', 10), stroke: tone('var-b'), strokeWidth: 1.5, strokeDasharray: '6 5' }} />
      <circle cx={300} cy={130} r={90} style={{ ...shade('muted', 40), stroke: tone('ink'), strokeWidth: 2 }} />
      <path d="M210,130 C250,128 270,112 300,110 C320,108 330,120 345,118" style={{ fill: 'none', stroke: 'var(--bg)', strokeWidth: 16, strokeLinecap: 'round' }} />
      <Arrow x1={40} y1={130} x2={188} y2={130} t="var-a" />
      <Label x={60} y={120} anchor="start" size={12} t="var-a">1 external mass transfer</Label>
      <Arrow x1={214} y1={130} x2={268} y2={114} t="var-a" />
      <Label x={240} y={156} size={11} t="var-a">2 pore diffusion</Label>
      <Arrow x1={290} y1={104} x2={330} y2={110} t="var-a" />
      <Label x={310} y={94} size={11} t="var-a">3 surface diffusion</Label>
      <circle cx={345} cy={120} r={6} style={{ fill: tone('var-a') }} />
      <Label x={360} y={140} anchor="start" size={11} t="var-a">4 adsorption</Label>
      <Label x={300} y={30} size={11} t="var-b">film</Label>
      <Label x={300} y={254} size={11} t="trap">regeneration: 4 → 1</Label>
    </Svg>
  )
}

// ---- Visual 2: ideal front vs MTZ, and breakthrough ----------------------------------
function FrontsAndBreakthrough() {
  const ox = 40
  const oy = 30
  const w = 240
  const h = 150
  const X = (v) => ox + v * w
  const Y = (v) => oy + h - v * h
  const xs = Array.from({ length: 80 }, (_, i) => i / 79)
  const bx = 330
  const BX = (v) => bx + v * w
  return (
    <Svg w={620} h={250} label="Left: concentration along the bed, ideal step vs S-shaped zone. Right: breakthrough curve with t_bp and t_s">
      {/* panel A */}
      <Arrow x1={ox} y1={oy + h} x2={ox + w + 10} y2={oy + h} />
      <Arrow x1={ox} y1={oy + h} x2={ox} y2={oy - 8} />
      <Label x={ox + w} y={oy + h + 18} anchor="end" size={12}>bed position z</Label>
      <Label x={ox + 4} y={oy - 10} anchor="start" size={12} t="var-a">c/c_F</Label>
      {[0.3, 0.6].map((z0, i) => (
        <g key={z0}>
          <polyline points={`${X(0)},${Y(1)} ${X(z0)},${Y(1)} ${X(z0)},${Y(0)} ${X(1)},${Y(0)}`} style={st('ink', true, 1.5)} />
          <polyline points={xs.map((x) => `${X(x)},${Y(1 - sig(x, z0, 18))}`).join(' ')} style={st('var-a', false, 2.2)} />
          <Label x={X(z0) + 4} y={Y(0.55)} anchor="start" size={10} t="muted">{`t${i + 1}`}</Label>
        </g>
      ))}
      <Arrow x1={X(0.35)} y1={Y(1.1)} x2={X(0.6)} y2={Y(1.1)} t="example" />
      <Label x={X(0.75)} y={Y(0.85)} anchor="start" size={10}>dashed: ideal shock</Label>
      <Label x={X(0.75)} y={Y(0.72)} anchor="start" size={10} t="var-a">S: MTZ</Label>
      {/* panel B */}
      <Arrow x1={bx} y1={oy + h} x2={bx + w + 10} y2={oy + h} />
      <Arrow x1={bx} y1={oy + h} x2={bx} y2={oy - 8} />
      <Label x={bx + w} y={oy + h + 18} anchor="end" size={12}>time t</Label>
      <Label x={bx + 4} y={oy - 10} anchor="start" size={12} t="var-a">c_out/c_F</Label>
      <polygon points={`${BX(0)},${Y(1)} ${BX(0.42)},${Y(1)} ${BX(0.42)},${Y(0)} ${BX(0)},${Y(0)}`} style={shade('intuition', 25)} />
      <polygon points={`${BX(0.42)},${Y(1)} ${xs.filter((x) => x >= 0.42 && x <= 0.8).map((x) => `${BX(x)},${Y(sig(x, 0.6, 18))}`).join(' ')} ${BX(0.8)},${Y(1)}`} style={shade('example', 25)} />
      <polyline points={xs.map((x) => `${BX(x)},${Y(sig(x, 0.6, 18))}`).join(' ')} style={st('var-a', false, 2.2)} />
      <polyline points={`${BX(0)},${Y(0)} ${BX(0.6)},${Y(0)} ${BX(0.6)},${Y(1)} ${BX(1)},${Y(1)}`} style={st('ink', true, 1.5)} />
      <line x1={BX(0.42)} y1={oy + h} x2={BX(0.42)} y2={oy + h + 6} style={st('ink', false, 1.5)} />
      <Label x={BX(0.42)} y={oy + h + 30} size={11}>t_bp</Label>
      <line x1={BX(0.8)} y1={oy + h} x2={BX(0.8)} y2={oy + h + 6} style={st('ink', false, 1.5)} />
      <Label x={BX(0.8)} y={oy + h + 30} size={11}>t_s</Label>
      <Label x={BX(0.2)} y={Y(0.5)} size={11} t="intuition">Q_uc</Label>
      <Label x={BX(0.55)} y={Y(0.85)} size={11} t="example">+ → Q_tot</Label>
    </Svg>
  )
}

// ---- Visual 3: isotherm shape → front shape -------------------------------------------
function ShapeGrid() {
  const cols = [
    { n: '(a) unfavourable', iso: (c) => c ** 2.2, front: 'disp', t: 'trap' },
    { n: '(b) linear', iso: (c) => c, front: 'const', t: 'muted' },
    { n: '(c) favourable', iso: (c) => (3 * c) / (1 + 2 * c), front: 'comp', t: 'intuition' },
  ]
  const xs = Array.from({ length: 40 }, (_, i) => i / 39)
  return (
    <Svg w={640} h={320} label="Isotherm shape (top) determines whether the front spreads, keeps shape or sharpens (bottom)">
      {cols.map((c, i) => {
        const ox = 20 + i * 210
        const P1 = (x, y) => [ox + 14 + x * 150, 120 - y * 90]
        const P2 = (x, y) => [ox + 14 + x * 150, 280 - y * 90]
        return (
          <g key={c.n}>
            <Label x={ox + 90} y={16} size={12} t={c.t}>{c.n}</Label>
            <Arrow x1={ox + 14} y1={120} x2={ox + 172} y2={120} head={6} />
            <Arrow x1={ox + 14} y1={120} x2={ox + 14} y2={24} head={6} />
            <Label x={ox + 170} y={134} anchor="end" size={10}>c</Label>
            <Label x={ox + 18} y={30} anchor="start" size={10}>q</Label>
            <polyline points={xs.map((x) => P1(x, c.iso(x)).join(',')).join(' ')} style={st('var-b', false, 2)} />
            <Arrow x1={ox + 14} y1={280} x2={ox + 172} y2={280} head={6} />
            <Arrow x1={ox + 14} y1={280} x2={ox + 14} y2={184} head={6} />
            <Label x={ox + 170} y={294} anchor="end" size={10}>z</Label>
            <Label x={ox + 18} y={190} anchor="start" size={10}>c</Label>
            {[0.3, 0.65].map((z0, k) => {
              const steep = c.front === 'comp' ? 30 : c.front === 'const' ? 14 : k === 0 ? 14 : 6
              return <polyline key={k} points={xs.map((x) => P2(x, 1 - sig(x, z0, steep)).join(',')).join(' ')} style={st('var-a', k === 0, 2)} />
            })}
            <Label x={ox + 90} y={312} size={11} t={c.t}>{c.front === 'disp' ? 'spreading (dispersive)' : c.front === 'const' ? 'constant shape' : 'sharpening (shock)'}</Label>
          </g>
        )
      })}
      <Label x={540} y={170} size={10} t="intuition">low dq/dc at high c →</Label>
      <Label x={540} y={182} size={10} t="intuition">high c faster → compresses</Label>
    </Svg>
  )
}

// ---- Visual 4: slice control volume --------------------------------------------------------
function SliceCV() {
  return (
    <Svg w={480} h={220} label="Bed slice of length Δz with flow in and out, voids and solid">
      <rect x={140} y={40} width={200} height={140} rx={6} style={{ ...shade('var-e', 12), stroke: tone('ink'), strokeWidth: 2 }} />
      {Array.from({ length: 12 }, (_, i) => <circle key={i} cx={165 + (i % 4) * 50} cy={70 + Math.floor(i / 4) * 40} r={15} style={shade('muted', 55)} />)}
      <Arrow x1={30} y1={110} x2={138} y2={110} t="var-a" />
      <Label x={30} y={100} anchor="start" size={12} t="var-a">Q · c</Label>
      <Arrow x1={342} y1={110} x2={460} y2={110} t="var-a" />
      <Label x={460} y={100} anchor="end" size={12} t="var-a">Q · (c + Δc)</Label>
      <Arrow x1={140} y1={196} x2={340} y2={196} t="muted" />
      <Arrow x1={340} y1={196} x2={140} y2={196} t="muted" />
      <Label x={240} y={214} size={12} t="muted">Δz (area A)</Label>
      <Label x={240} y={30} size={11} t="var-e">voids ε_b: accumulation in the fluid</Label>
      <Label x={240} y={160} size={11}>solid (1 − ε_b) ρ_part: Δq</Label>
    </Svg>
  )
}

// ---- Interactive -------------------------------------------------------------------------------
function FrontSpeed() {
  const [b, setB] = useState(0.2)
  const x0 = 64
  const y0 = 20
  const w = 380
  const h = 220
  const cs = Array.from({ length: 60 }, (_, i) => (i / 59) * 10)
  const r = (c) => (1 + b * c) ** 2
  const ymax = Math.max(2, r(10) * 1.05)
  const X = (c) => x0 + (c / 10) * w
  const Y = (v) => y0 + h - (v / ymax) * h
  const ticks = [1, ymax / 2, ymax].map((v) => Number(v.toPrecision(2)))
  return (
    <Diagram
      title="Langmuir: which concentrations move faster?"
      caption={String.raw`Relative front speed $v_c(c)/v_c(0) = (1+bc)^2$, from $v_c \propto 1/(dq/dc)$ with $dq/dc = q_{max}b/(1+bc)^2$ and $\epsilon_b$ neglected (as stated in the content file) [Week 7, p. 32; FormelarkKP3010.pdf, p. 7, eq. 72]. Start b = 0.20 m³/mol [practice exam 2 solutions.pdf, Q5b].`}
      cite={`[${W7}, p. 32; ${FS}, p. 7, eq. 72; ${PX2}, Q5b]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="d"><M>b</M></V> = <strong>{b.toFixed(2)}</strong> m³/mol</span>
            <input type="range" min={0} max={1} step={0.01} value={b} onChange={(e) => setB(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <strong style={{ color: tone(b > 0 ? 'intuition' : 'muted') }}>
            {b > 0 ? 'front compresses: higher c travels faster' : 'linear: all c move together'}
          </strong>{' '}
          · <M>{String.raw`v_c(10)/v_c(0)`}</M> = {r(10).toFixed(2)}
        </p>
        <Svg w={480} h={300} label="Relative front speed against concentration">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {[0, 2, 4, 6, 8, 10].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
          {ticks.map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
          <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13} t="var-a">c (mol/m³)</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-f">v_c(c) / v_c(0)</Label>
          <line x1={x0} y1={Y(1)} x2={x0 + w} y2={Y(1)} style={st('muted', true, 1.2)} />
          <polyline points={cs.map((c) => `${X(c)},${Y(r(c))}`).join(' ')} style={st('var-f')} />
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="A front that sweeps through the bed">
        <MentalModel cite={`[${W7}, p. 25–33]`}>
          <T text="Getting onto a site takes four steps: from the fluid to the particle, into the pores, along the surface, then binding. Any of them can be slow. Regeneration runs them in reverse [Week 7, p. 25]. In an ideal bed, all of that is instant and the flow is plug flow. The adsorbate then fills the bed as a sharp shock front, like water filling a tube, and nothing leaves until the bed is full. Sizing is just &quot;how much the bed holds / how much arrives per hour&quot; [Week 7, p. 27–29]." />
          <p>
            Real beds smear the front into an S-shaped mass-transfer zone, so breakthrough comes before full saturation. That&apos;s why
            useful capacity is less than total capacity [Week 7, p. 30]. The equilibrium model says each concentration travels at a{' '}
            <V c="f">speed</V> set by the isotherm slope: a steep slope (the bed soaks up a lot per unit c) means slow travel
            [Week 7, p. 31–32]. With a favourable isotherm, high concentrations have the shallower slope, run faster and catch up with the
            low ones, keeping the front sharp. An unfavourable isotherm does the opposite [Week 7, p. 33].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Kinetics, the moving front and the isotherm shape">
        <Columns>
          <Diagram title="Four kinetic steps" cite={`[${W7}, p. 25]`} caption="External film → pore → surface → site; regeneration runs in reverse.">
            <Steps />
          </Diagram>
          <div>
            <Def term="Four adsorption steps" cite={`[${W7}, p. 25]`}>
              (1) External mass transfer, (2) internal mass transfer (pore diffusion), (3) surface diffusion, (4) adsorption. Steps 3–4 happen at all active sites but are most prominent in the smaller pores (high area). Regeneration runs in the opposite order.
            </Def>
            <Def term="Equilibrium vs kinetic selectivity" cite={`[${W7}, p. 26]`}>
              Mass-transfer rate is irrelevant for equilibrium selectivity. Kinetic selectivity comes from rates, e.g. small pores can slow N₂ transfer compared with O₂.
            </Def>
          </div>
        </Columns>

        <Diagram title="Ideal front vs mass-transfer zone; breakthrough curve (schematic)" cite={`[${W7}, p. 27, 30]`}
          caption="Left: concentration along the bed at two times — ideal shock (dashed) vs S-shaped MTZ. Right: outlet concentration over time; Q_uc is taken up until t_bp, Q_tot until t_s.">
          <FrontsAndBreakthrough />
        </Diagram>
        <Columns>
          <div>
            <Def term="Ideal fixed-bed adsorption" cite={`[${W7}, p. 27]`}>
              Instantaneous equilibrium, a shock wave (stoichiometric front). Ideal when mass-transfer resistances are small, flow is plug flow (no axial dispersion) and the adsorbent starts free of adsorbate. Breakthrough happens when the bed is full.
            </Def>
            <Def term="Non-ideal bed" cite={`[${W7}, p. 30]`}>
              {String.raw`Mass-transfer resistances and axial dispersion give a mass-transfer zone (MTZ) with an S-shaped front that moves through the bed. Characterised by the breakthrough time $t_{bp}$ and saturation time $t_s$. Curve steepness affects usable capacity.`}
            </Def>
          </div>
          <div>
            <Def term={String.raw`Useful capacity $Q_{uc}$ and total capacity $Q_{tot}$`} cite={`[${W7}, p. 30; ${FS}, p. 7, eq. 69–70]`}>
              Solute taken up until breakthrough and until saturation, respectively.
            </Def>
            <Def term="Bed saturation balance" cite={`[${PX}, Ex. 5b]`}>
              {String.raw`Time × flow × feed concentration = adsorbent mass × equilibrium loading, $tQC = Wq$.`}
            </Def>
          </div>
        </Columns>

        <Diagram title="Isotherm shape → front shape (schematic)" cite={`[${W7}, p. 32–33; ${PX2}, Q5a]`}
          caption="Top: isotherms. Bottom: matching fronts at two times (dashed earlier).">
          <ShapeGrid />
        </Diagram>
        <Columns>
          <div>
            <Def term={String.raw`Concentration propagation velocity $v_c$`} cite={`[${W7}, p. 32]`}>
              Depends on the isotherm slope dq/dc. For a linear isotherm the slope is constant, so all concentrations travel at the same speed.
            </Def>
            <Def term="Unfavourable isotherm" cite={`[${W7}, p. 33]`}>Dispersive front, less capacity used in the bed.</Def>
            <Def term="Favourable isotherm" cite={`[${W7}, p. 33]`}>Compressive (shock-wave) front, full capacity used.</Def>
          </div>
          <div>
            <Diagram title="Equilibrium-model control volume" cite={`[${W7}, p. 31]`} caption="Accumulation in the voids + adsorption on the solid = in − out.">
              <SliceCV />
            </Diagram>
            <Def term="Equilibrium model" cite={`[${W7}, p. 31]`}>
              Equilibrium at every point in the bed. A balance on a slice (accumulation in voids + adsorption = in − out) gives the propagation velocity of each concentration.
            </Def>
          </div>
        </Columns>
        <Gap>The exit-response example (Week 7, p. 34–35, cases A–C) is image-only, so its cases and answers can&apos;t be extracted.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="cap" />
        <Eq id="sat" />
        <Eq id="slice" />
        <Eq id="vc" />
        <FrontSpeed />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Adsorbent needed for 30 min of flue-gas treatment"
          given={String.raw`Inert flue gas 50 m³/h at 300 K and 1 bar, 10 vol % pollutant A. Langmuir: $q_{max} = 1.30$ mol/kg, $b_A = 0.20$ m³/mol. The bed must last 30 min. Assume the whole bed is saturated at breakpoint.`}
          steps={[
            { body: String.raw`Total molar flow: $\dot n = \dot V\frac{P}{RT} = 50\cdot\frac{10^5}{8.314\cdot 300} = 2004.7$ mol/h.` },
            { body: String.raw`Total concentration: $c = \dot n/\dot V = 2004.7/50 = 40.1$ mol/m³, so $c_A = 0.10\cdot 40.1 = 4.0$ mol/m³.` },
            { body: String.raw`Loading at the feed concentration: $q = 1.30\cdot\frac{0.2\cdot 4.0}{1 + 0.2\cdot 4.0} = 0.58$ mol A/kg.` },
            { body: String.raw`A fed in 30 min: $50\cdot 4.0\cdot 0.5 = 100$ mol.` },
            { body: String.raw`Adsorbent: $100/0.58 = 170.1$ kg.` },
          ]}
          result="W = 170.1 kg"
          cite={`[${PX2}, Q5c]`}
        />
        <FadedExample
          title="Silica-gel dryer: time before regeneration"
          given="Gas 10 kmol/h at 50 °C with 6 mol % water (50 % RH). Bed of 50 kg silica gel. At these conditions silica gel holds 0.28 kg water per kg (from the slide's isotherm)."
          steps={[
            { title: 'Bed capacity.', body: String.raw`$50\cdot 0.28 = 14$ kg water.`, hidden: true },
            { title: 'Water molar flow.', body: String.raw`$10\cdot 0.06 = 0.6$ kmol/h.`, hidden: true },
            { title: 'Water mass flow.', body: String.raw`$0.6\cdot 18.016 = 10.8$ kg/h.`, hidden: true },
            { title: 'Time to saturation (ideal bed).', body: String.raw`$14/10.8 = 1.3$ h.`, hidden: true },
          ]}
          cite={`[${W7}, p. 28–29]`}
        />
        <Gap>The silica-gel isotherm behind the 0.28 kg/kg capacity (Week 7, p. 28–29) is an image. Only the value is used.</Gap>
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title={String.raw`Use q at the feed concentration, not $q_{max}$`} cite={`[${PX2}, Q5c]`}>
          The bed saturates to equilibrium with $c_F$ (0.58, not 1.30 mol/kg).
        </Trap>
        <Trap title="Convert vol % to mol/m³" cite={`[${PX2}, Q5c]`}>Via the ideal gas law ($c = P/RT$) and the vol % (= mol %).</Trap>
        <Trap title="Favourable explanation needs the slope argument" cite={`[${PX2}, Q5a]`}>
          {'"dq/dc lower at high c → those points move faster → compressive front → better bed use". Just saying "Langmuir" isn\'t enough for full marks.'}
        </Trap>
        <Trap title="Steeper isotherm means a slower front" cite={`[${W7}, p. 32]`}>{String.raw`$v_c \propto 1/(dq/dc)$. Don't invert it.`}</Trap>
        <Trap title="Ideal vs real breakthrough" cite={`[${W7}, p. 27, 30]`}>
          {String.raw`Ideal means the whole bed is used at breakthrough. Real beds have an MTZ, so $Q_{uc} < Q_{tot}$. Use $t_{bp}$ for design.`}
        </Trap>
        <Trap title="Time units" cite={`[${PX2}, Q5c]`}>30 min = 0.5 h when Q is in m³/h.</Trap>
        <Trap title="Linear-isotherm velocity ratio" cite={`[${E7E}, Problem 1c]`}>
          {String.raw`With $dq/dc = \Delta q/\Delta c$, the ratio of front speeds is the inverse ratio of slopes.`}
        </Trap>
      </Section>
    </>
  )
}
