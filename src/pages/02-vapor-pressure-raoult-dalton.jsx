import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label, Curve,
  M, V, T, tone,
} from '../components'

const W1 = 'Week 1 - Introduction  VLE with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E1 = 'exercise_01_solutions.pdf'
const PX = 'practice_exam_solutions.pdf'

export const meta = {
  title: "Vapour pressure, Raoult's law and Dalton's law",
  topic: 'vle',
  examWeight: {
    level: 'medium',
    note: 'Reading pure-component vapour pressure off a diagram on 1 of 2 practice exams (Practice exam 1, Ex. 1b); the equations underpin every Q1',
  },
  examTasks: [
    'Practice exam 1, Ex. 1b: which of benzene, styrene or n-propanal has the highest pure-component vapour pressure, read off p–x diagrams, and why (n-propanal, 0.42 bar).',
    'Practice exam 1, Ex. 1d: uses a p–x diagram for the first evaporation on lowering the pressure. Covered on page 03.',
  ],
  buildsOn: ['01-separation-basics-k-selectivity'],
  usedIn: ['03-vle-diagrams-azeotropes', '04-equilibrium-flash-distillation'],
  sources: [
    `[${W1}, p. 17–31]`,
    `[${FS}, p. 1 (eq. 1–6), p. 11 (pressure conversion table)]`,
    '[exercise_01_eng.pdf, Exercise 1–2]',
    `[${E1}, Oppg. 1–2, Fig. 2]`,
    `[${PX}, Ex. 1b, 1d]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'A liquid evaporates at 20 °C in an open glass, far below its boiling point. How is that possible?', a: 'Evaporation happens at any temperature, because surface molecules escape into the vapour. Boiling is only the point where the vapour pressure equals the surrounding pressure. [Week 1, p. 22]' },
    { id: 'p2', kind: 'pretest', q: 'In a 50/50 liquid of two components, is the vapour also 50/50?', a: 'Not necessarily. The more volatile component is enriched in the vapour, so $x_A \\neq y_A$. [Week 1, p. 29]' },
    { id: 'p3', kind: 'pretest', q: 'Two pure liquids have $P^\\circ_A = 0.327$ bar and $P^\\circ_B = 0.137$ bar at the same T. Which is more volatile?', a: 'A, because it has the higher vapour pressure. [exercise_01_solutions.pdf, Oppg. 2a]' },
    { id: 't1', q: 'From the water vapour-pressure table, what is the boiling point of water at 0.32 atm, and what is the vapour pressure at 10 °C?', a: 'About 70 °C, and 0.014 atm. [Week 1, p. 21]' },
    { id: 't2', q: 'n-propanol (A)/1-butanol (B) at 70 °C, $P_A^\\circ = 0.327$ bar, $P_B^\\circ = 0.137$ bar, ideal. A liquid with $x_A = 0.2$ is depressurised until it boils. At what pressure does it boil, and what is $y_{\\text{1-butanol}}$?', a: 'Bubble pressure $= (0.327 - 0.137)\\cdot 0.2 + 0.137 = 0.175$ bar. $y_A = 0.327\\cdot 0.2/0.175 = 0.37$, which the solution reads graphically as about 0.38. So $y_{\\text{1-butanol}} = 1 - y_A \\approx 0.62$. [exercise_01_solutions.pdf, Oppg. 2b–c; FormelarkKP3010.pdf, p. 1, eq. 4–5]' },
    { id: 't3', q: 'On a p–T diagram for a pure component, which side of the vapour-pressure curve is liquid?', a: 'Above the curve, at higher pressure for a given T. Vapour is below the curve. [exercise_01_solutions.pdf, Oppg. 1a]' },
    { id: 't4', q: 'What two conditions define vapour–liquid equilibrium in the closed-vessel picture?', a: 'Equal evaporation and condensation rates, and identical chemical potential in both phases. [Week 1, p. 17]' },
    { id: 't5', q: 'Why is the bubble line of an ideal binary p–x diagram straight but the dew line curved?', a: 'The bubble pressure $P_{L\\to V} = (P_A^\\circ - P_B^\\circ)x_A + P_B^\\circ$ is linear in $x_A$. The dew pressure $P_{V\\to L} = P_A^\\circ P_B^\\circ / (P_A^\\circ + (P_B^\\circ - P_A^\\circ)y_A)$ has $y_A$ in the denominator. [FormelarkKP3010.pdf, p. 1, eq. 5–6]' },
  ],
  equations: [
    {
      id: 'raoult',
      label: "Raoult's law (ideal liquid mixture)",
      tex: String.raw`\vd{p_A} = \va{x_A}\, \vc{P_A^\circ}`,
      vars: [
        { sym: String.raw`\vd{p_A}`, desc: 'partial pressure of A in the vapour', unit: String.raw`\mathrm{bar}\ (\text{or atm, Pa})` },
        { sym: String.raw`\va{x_A}`, desc: 'mole fraction of A in the liquid', unit: '–' },
        { sym: String.raw`\vc{P_A^\circ}`, desc: 'vapour pressure of pure A at the system temperature', unit: String.raw`\mathrm{bar}` },
      ],
      note: 'Ideal liquid mixtures only. Non-ideal mixtures deviate (page 03).',
      cite: `[${W1}, p. 23; ${FS}, p. 1, eq. 1]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 1 (written there with unit [Pa]) and W1 p. 23.' },
    },
    {
      id: 'dalton',
      label: "Dalton's law",
      tex: String.raw`\vd{p_A} = \ve{P_{tot}}\, \vb{y_A}`,
      vars: [
        { sym: String.raw`\vd{p_A}`, desc: 'partial pressure of A', unit: String.raw`\mathrm{bar}` },
        { sym: String.raw`\ve{P_{tot}}`, desc: 'total pressure', unit: String.raw`\mathrm{bar}` },
        { sym: String.raw`\vb{y_A}`, desc: 'mole fraction of A in the vapour', unit: '–' },
      ],
      cite: `[${W1}, p. 29; ${FS}, p. 1, eq. 2]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 2 and W1 p. 29.' },
    },
    {
      id: 'sum',
      label: 'Sum of partial pressures',
      tex: String.raw`\ve{P_{tot}} = \sum_{i} \vd{p_i} \qquad \text{binary: } \ve{P_{tot}} = \vd{p_A} + \vd{p_B} = \vc{P_A^\circ} \va{x_A} + \vc{P_B^\circ} \va{x_B}`,
      vars: [
        { sym: String.raw`\vd{p_i}`, desc: 'partial pressure of component $i$', unit: String.raw`\mathrm{bar}` },
        { sym: String.raw`\va{x_A}, \va{x_B}`, desc: 'liquid mole fractions, $x_A + x_B = 1$', unit: '–' },
      ],
      cite: `[${W1}, p. 23; ${FS}, p. 1, eq. 3]`,
      check: { status: 'verified', note: 'Formula sheet eq. 3 writes the sum as $\\sum_{i=0}^{n} p_i$; binary form matches W1 p. 23.' },
    },
    {
      id: 'yx',
      label: 'Equilibrium between ideal vapour and ideal liquid',
      tex: String.raw`\vb{y_A} = \frac{\vc{P_A^\circ}}{\ve{P_{tot}}}\, \va{x_A}`,
      vars: [
        { sym: String.raw`\vb{y_A}`, desc: 'vapour mole fraction of A', unit: '–' },
        { sym: String.raw`\va{x_A}`, desc: 'liquid mole fraction of A', unit: '–' },
        { sym: String.raw`\vc{P_A^\circ} / \ve{P_{tot}}`, desc: 'ratio of pure vapour pressure to total pressure', unit: '–' },
      ],
      note: 'Raoult and Dalton combined. Ideal vapour and ideal liquid.',
      cite: `[${FS}, p. 1, eq. 4; ${W1}, p. 29]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 4.' },
    },
    {
      id: 'bubble',
      label: 'Bubble-point pressure (damptrykk, binary ideal)',
      tex: String.raw`\ve{P_{L\to V}} = (\vc{P_A^\circ} - \vc{P_B^\circ})\, \va{x_A} + \vc{P_B^\circ}`,
      vars: [
        { sym: String.raw`\ve{P_{L\to V}}`, desc: 'pressure at which a liquid of composition $x_A$ starts to evaporate (bubble line)', unit: String.raw`\mathrm{bar}` },
      ],
      note: 'Linear in $x_A$, so the bubble line of an ideal mixture is straight.',
      cite: `[${FS}, p. 1, eq. 5; ${W1}, p. 28; ${E1}, Oppg. 2b, eq. 1]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 5 and the rearranged form on W1 p. 28.' },
    },
    {
      id: 'dew',
      label: 'Dew-point pressure (metningstrykk, binary ideal)',
      tex: String.raw`\ve{P_{V\to L}} = \frac{\vc{P_A^\circ} \vc{P_B^\circ}}{\vc{P_A^\circ} + (\vc{P_B^\circ} - \vc{P_A^\circ})\, \vb{y_A}}`,
      vars: [
        { sym: String.raw`\ve{P_{V\to L}}`, desc: 'pressure at which a vapour of composition $y_A$ starts to condense (dew line)', unit: String.raw`\mathrm{bar}` },
      ],
      note: 'Ideal binary. Curved in $y_A$.',
      cite: `[${FS}, p. 1, eq. 6; ${E1}, Oppg. 2b, eq. 2]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 6.' },
    },
  ],
}

// ---- small chart helper (data → SVG coordinates) ------------------------------
const frame = ({ x0 = 60, y0 = 20, w = 440, h = 240, xmin, xmax, ymin, ymax }) => ({
  X: (v) => x0 + ((v - xmin) / (xmax - xmin)) * w,
  Y: (v) => y0 + h - ((v - ymin) / (ymax - ymin)) * h,
  x0, y0, w, h,
})

function Ticks({ f, xs, ys, xfmt = (v) => v, yfmt = (v) => v }) {
  return (
    <g>
      {xs.map((v) => (
        <g key={`x${v}`}>
          <line x1={f.X(v)} y1={f.y0 + f.h} x2={f.X(v)} y2={f.y0 + f.h + 5} style={{ stroke: tone('muted') }} />
          <text x={f.X(v)} y={f.y0 + f.h + 19} textAnchor="middle" className="svg-sub">{xfmt(v)}</text>
        </g>
      ))}
      {ys.map((v) => (
        <g key={`y${v}`}>
          <line x1={f.x0 - 5} y1={f.Y(v)} x2={f.x0} y2={f.Y(v)} style={{ stroke: tone('muted') }} />
          <text x={f.x0 - 8} y={f.Y(v) + 4} textAnchor="end" className="svg-sub">{yfmt(v)}</text>
        </g>
      ))}
    </g>
  )
}

const dashed = (t) => ({ stroke: tone(t), strokeWidth: 1.5, strokeDasharray: '5 4', fill: 'none' })

// ---- Visual 1: closed vessel at equilibrium --------------------------------
function Vessel({ x, hot }) {
  const n = hot ? 58 : 38
  return (
    <g>
      <rect x={x} y={40} width={170} height={200} rx={12} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <rect x={x + 2} y={160} width={166} height={78} rx={10} style={{ fill: `color-mix(in srgb, ${tone('topic')} 22%, var(--bg))` }} />
      <line x1={x} y1={160} x2={x + 170} y2={160} style={{ stroke: tone('topic'), strokeWidth: 2 }} />
      <Label x={x + 85} y={215} t="muted" size={13}>liquid</Label>
      <Label x={x + 85} y={62} t="muted" size={13}>vapour</Label>
      <Arrow x1={x + 50} y1={170} x2={x + 50} y2={170 - n - 30} t="intuition" />
      <Arrow x1={x + 120} y1={170 - n - 30} x2={x + 120} y2={170} t="definition" />
      <Label x={x + 50} y={188} size={12} t="intuition">evap.</Label>
      <Label x={x + 120} y={188} size={12} t="definition">cond.</Label>
      {/* gauge */}
      <circle cx={x + 85} cy={20} r={16} style={{ fill: 'var(--bg)', stroke: tone('ink'), strokeWidth: 2 }} />
      <line x1={x + 85} y1={20} x2={x + 85 + 11 * Math.cos(hot ? -0.5 : -2.4)} y2={20 + 11 * Math.sin(hot ? -0.5 : -2.4)}
        style={{ stroke: tone('trap'), strokeWidth: 2.5 }} />
      <line x1={x + 85} y1={36} x2={x + 85} y2={40} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      <Label x={x + 85} y={265} size={14}>{hot ? 'higher T' : 'T'}</Label>
    </g>
  )
}

// ---- Visual 2: water vapour pressure ---------------------------------------
const WATER = [[0.51, 0.0102], [11.19, 0.0161], [20.86, 0.0256], [30.77, 0.0453], [39.68, 0.0718], [50.1, 0.1221],
  [59.77, 0.1927], [69.94, 0.3043], [80.12, 0.4668], [90.03, 0.6873], [99.97, 1.0], [106.1, 1.2001]]

function WaterCurve() {
  const f = frame({ x0: 64, y0: 16, w: 450, h: 250, xmin: 0, xmax: 110, ymin: 0, ymax: 1.25 })
  const read = [
    { T: 100, p: 1, label: '1 atm → 100 °C' },
    { T: 70, p: 0.32, label: '0.32 atm → 70 °C (Everest)' },
    { T: 10, p: 0.014, label: '10 °C → 0.014 atm' },
  ]
  return (
    <Svg w={540} h={310} label="Vapour pressure of water against temperature, 0 to 110 °C">
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 10} y2={f.y0 + f.h} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 6} />
      <Ticks f={f} xs={[0, 20, 40, 60, 80, 100]} ys={[0, 0.25, 0.5, 0.75, 1, 1.25]} />
      <Label x={f.x0 + f.w} y={f.y0 + f.h + 38} anchor="end" size={13}>T (°C)</Label>
      <Label x={f.x0 + 6} y={f.y0 + 4} anchor="start" size={13}>P° (atm)</Label>
      <Curve points={WATER.map(([t, p]) => [f.X(t), f.Y(p)])} t="var-c" />
      {WATER.map(([t, p]) => <circle key={t} cx={f.X(t)} cy={f.Y(p)} r={3.5} style={{ fill: tone('var-c') }} />)}
      {read.map((r) => (
        <g key={r.label}>
          <polyline points={`${f.X(0)},${f.Y(r.p)} ${f.X(r.T)},${f.Y(r.p)} ${f.X(r.T)},${f.Y(0)}`} style={dashed('example')} />
          <circle cx={f.X(r.T)} cy={f.Y(r.p)} r={5} style={{ fill: 'none', stroke: tone('example'), strokeWidth: 2 }} />
        </g>
      ))}
      <Label x={f.X(98)} y={f.Y(1) - 10} anchor="end" size={12} t="example">1 atm → 100 °C</Label>
      <Label x={f.X(68)} y={f.Y(0.32) - 10} anchor="end" size={12} t="example">0.32 atm → 70 °C (Everest)</Label>
      <Label x={f.X(13)} y={f.Y(0.014) - 30} anchor="start" size={12} t="example">10 °C → 0.014 atm</Label>
      <Label x={f.X(40)} y={f.Y(0.85)} size={16} t="muted">liquid</Label>
      <Label x={f.X(92)} y={f.Y(0.2)} size={16} t="muted">vapour</Label>
    </Svg>
  )
}

// ---- Visual 3: p–x–y for n-propanol / 1-butanol at 70 °C --------------------
function PxyPropanol() {
  const PA = 0.327
  const PB = 0.137
  const f = frame({ x0: 64, y0: 16, w: 430, h: 250, xmin: 0, xmax: 1, ymin: 0.1, ymax: 0.35 })
  const xs = Array.from({ length: 41 }, (_, i) => i / 40)
  const bubble = xs.map((x) => [f.X(x), f.Y((PA - PB) * x + PB)])
  const dew = xs.map((y) => [f.X(y), f.Y((PA * PB) / (PA + (PB - PA) * y))])
  const pb = (PA - PB) * 0.2 + PB // 0.175
  const yA = (PA * 0.2) / pb
  return (
    <Svg w={540} h={310} label="p–x–y diagram of n-propanol and 1-butanol at 70 °C with the Oppg. 2c path">
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 10} y2={f.y0 + f.h} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 6} />
      <Ticks f={f} xs={[0, 0.2, 0.4, 0.6, 0.8, 1]} ys={[0.1, 0.15, 0.2, 0.25, 0.3, 0.35]} />
      <text x={f.x0 + f.w} y={f.y0 + f.h + 38} textAnchor="end" className="svg-label" style={{ fontSize: 13 }}>
        <tspan style={{ fill: tone('var-a') }}>x<tspan baselineShift="sub" fontSize="70%">A</tspan></tspan>,{' '}
        <tspan style={{ fill: tone('var-b') }}>y<tspan baselineShift="sub" fontSize="70%">A</tspan></tspan> (–)
      </text>
      <Label x={f.x0 + 6} y={f.y0 + 4} anchor="start" size={13}>p (bar)</Label>
      <polyline points={bubble.map((p) => p.join(',')).join(' ')} style={{ stroke: tone('var-e'), strokeWidth: 2.5, fill: 'none' }} />
      <polyline points={dew.map((p) => p.join(',')).join(' ')} style={{ stroke: tone('var-b'), strokeWidth: 2.5, fill: 'none' }} />
      <Label x={f.X(0.62)} y={f.Y(0.31)} size={15} t="muted">liquid</Label>
      <Label x={f.X(0.42)} y={f.Y(0.2)} size={13} t="muted">liquid + vapour</Label>
      <Label x={f.X(0.82)} y={f.Y(0.14)} size={15} t="muted">vapour</Label>
      <Label x={f.X(0.5)} y={f.Y(0.255)} size={12} t="var-e" anchor="end">bubble line</Label>
      <Label x={f.X(0.78)} y={f.Y(0.205)} size={12} t="var-b" anchor="start">dew line</Label>
      {/* Oppg. 2c path */}
      <circle cx={f.X(0.2)} cy={f.Y(0.3)} r={5} style={{ fill: tone('example') }} />
      <Arrow x1={f.X(0.2)} y1={f.Y(0.3)} x2={f.X(0.2)} y2={f.Y(pb) - 4} t="example" />
      <Arrow x1={f.X(0.2)} y1={f.Y(pb)} x2={f.X(yA) - 4} y2={f.Y(pb)} t="example" />
      <polyline points={`${f.X(yA)},${f.Y(pb)} ${f.X(yA)},${f.Y(0.1)}`} style={dashed('example')} />
      <Label x={f.X(0.2) + 8} y={f.Y(0.3) + 4} anchor="start" size={12} t="example">start (0.2, 0.3 bar)</Label>
      <Label x={f.X(yA) + 6} y={f.Y(0.115)} anchor="start" size={12} t="example">y_A ≈ 0.38</Label>
      <Label x={f.X(0) + 4} y={f.Y(PB) + 18} anchor="start" size={11} t="var-c">P°_B = 0.137</Label>
      <Label x={f.X(1) - 4} y={f.Y(PA) - 8} anchor="end" size={11} t="var-c">P°_A = 0.327</Label>
    </Svg>
  )
}

// ---- Interactive: benzene/toluene at 90 °C ---------------------------------
function BenzeneToluene() {
  const PB = 0.719
  const PT = 0.547
  const [xB, setXB] = useState(0.5)
  const f = frame({ x0: 64, y0: 16, w: 430, h: 250, xmin: 0, xmax: 1, ymin: 0, ymax: 0.8 })
  const pB = PB * xB
  const pT = PT * (1 - xB)
  const Ptot = pB + pT
  const yB = pB / Ptot
  const xs = Array.from({ length: 41 }, (_, i) => i / 40)
  const dew = xs.map((y) => [f.X(y), f.Y((PB * PT) / (PB + (PT - PB) * y))])
  const line = (a, b, t, dash) => (
    <line x1={f.X(0)} y1={f.Y(a)} x2={f.X(1)} y2={f.Y(b)} style={{ stroke: tone(t), strokeWidth: 2.5, strokeDasharray: dash ? '6 5' : undefined }} />
  )
  const fmt = (v) => v.toFixed(3)
  return (
    <Diagram
      title="Raoult + Dalton, live: benzene (B) / toluene (T) at 90 °C"
      caption={String.raw`Formula sheet eq. 5 (bubble line = $P_{tot}$) and eq. 6 (dew line) with $P^\circ_T = 0.547$ bar and $P^\circ_B = 0.719$ bar. Dashed lines are the partial pressures $p_B = P^\circ_B x_B$ and $p_T = P^\circ_T(1-x_B)$ [Week 1, p. 23]; the ends of $P_{tot}$ are the pure-component vapour pressures. At $x_B = 0.5$: $P_{tot} = 0.633$ bar, $y_B = 0.57$.`}
      cite={`[${W1}, p. 23–31; ${FS}, p. 1, eq. 5–6]`}
    >
      <div style={{ width: '100%' }}>
      <div className="plot-controls">
        <label>
          <span className="plot-param"><T text="$x_B$" /> = <strong>{xB.toFixed(2)}</strong></span>
          <input type="range" min={0} max={1} step={0.01} value={xB} onChange={(e) => setXB(Number(e.target.value))} />
        </label>
      </div>
      <p className="plot-readout" style={{ lineHeight: 1.9 }}>
        <V c="d"><M>{String.raw`p_B`}</M> = {fmt(pB)}</V> bar · <V c="d"><M>{String.raw`p_T`}</M> = {fmt(pT)}</V> bar<br />
        <V c="e"><M>{String.raw`P_{tot}`}</M> = {fmt(Ptot)}</V> bar · <V c="b"><M>{String.raw`y_B`}</M> = {yB.toFixed(2)}</V>
      </p>
      <Svg w={540} h={310} label="Partial pressures, bubble line and dew line for benzene/toluene at 90 °C">
        <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 10} y2={f.y0 + f.h} />
        <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 6} />
        <Ticks f={f} xs={[0, 0.2, 0.4, 0.6, 0.8, 1]} ys={[0, 0.2, 0.4, 0.6, 0.8]} />
        <text x={f.x0 + f.w} y={f.y0 + f.h + 38} textAnchor="end" className="svg-label" style={{ fontSize: 13 }}>
          <tspan style={{ fill: tone('var-a') }}>x<tspan baselineShift="sub" fontSize="70%">B</tspan></tspan>,{' '}
          <tspan style={{ fill: tone('var-b') }}>y<tspan baselineShift="sub" fontSize="70%">B</tspan></tspan> (–)
        </text>
        <Label x={f.x0 + 6} y={f.y0 + 4} anchor="start" size={13}>p (bar)</Label>
        {line(0, PB, 'var-d', true)}
        {line(PT, 0, 'var-d', true)}
        {line(PT, PB, 'var-e')}
        <polyline points={dew.map((p) => p.join(',')).join(' ')} style={{ stroke: tone('var-b'), strokeWidth: 2.5, fill: 'none' }} />
        <Label x={f.X(0.9)} y={f.Y(0.56)} size={12} t="var-d" anchor="end">p_B</Label>
        <Label x={f.X(0.1)} y={f.Y(0.42)} size={12} t="var-d" anchor="start">p_T</Label>
        <Label x={f.X(0.03)} y={f.Y(PT) - 10} size={12} t="var-c" anchor="start">P°_T = 0.547</Label>
        <Label x={f.X(0.97)} y={f.Y(PB) - 10} size={12} t="var-c" anchor="end">P°_B = 0.719</Label>
        <Label x={f.X(0.62)} y={f.Y(0.68)} size={12} t="var-e" anchor="end">bubble (P_tot)</Label>
        <Label x={f.X(0.66)} y={f.Y(0.6)} size={12} t="var-b" anchor="start">dew</Label>
        {/* live points */}
        <line x1={f.X(xB)} y1={f.Y(0)} x2={f.X(xB)} y2={f.Y(Ptot)} style={dashed('muted')} />
        <line x1={f.X(xB)} y1={f.Y(Ptot)} x2={f.X(yB)} y2={f.Y(Ptot)} style={{ stroke: tone('ink'), strokeWidth: 1.5 }} />
        <circle cx={f.X(xB)} cy={f.Y(pB)} r={4.5} style={{ fill: tone('var-d') }} />
        <circle cx={f.X(xB)} cy={f.Y(pT)} r={4.5} style={{ fill: tone('var-d') }} />
        <circle cx={f.X(xB)} cy={f.Y(Ptot)} r={6} style={{ fill: tone('var-a') }} />
        <circle cx={f.X(yB)} cy={f.Y(Ptot)} r={6} style={{ fill: tone('var-b') }} />
      </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Evaporation and condensation in balance">
        <MentalModel cite={`[${W1}, p. 17–23, 29; ${FS}, p. 1, eq. 4]`}>
          <T text="In a closed vessel, molecules evaporate and condense continuously. At equilibrium the two rates are equal and the chemical potential is the same in both phases [Week 1, p. 17]. Heating raises the evaporation rate, so the equilibrium gas pressure (the vapour pressure $P^\circ_A$) rises with temperature [Week 1, p. 18–19]. A liquid boils when its vapour pressure reaches the surrounding pressure, which is why water boils at about 70 °C on Everest [Week 1, p. 21–22]." />
          <p>
            In an ideal binary mixture, each component contributes a <V c="d">partial pressure</V> proportional to how much of it is
            in the <V c="a">liquid</V> (Raoult). Its share of the <V c="b">vapour</V> is that partial pressure divided by the{' '}
            <V c="e">total pressure</V> (Dalton) [Week 1, p. 23, 29]. Combining the two gives the vapour composition from the liquid
            composition. That is the basis of every VLE diagram and every equilibrium stage that follows [FormelarkKP3010.pdf, p. 1, eq. 4].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Vapour pressure, boiling and partial pressures">
        <Columns>
          <Diagram
            title="Closed vessel at equilibrium"
            caption={String.raw`Rates equal, $\mu_{liq} = \mu_{vap}$. At higher T the evaporation rate rises and the gauge reads a higher equilibrium pressure.`}
            cite={`[${W1}, p. 17–18]`}
          >
            <Svg w={420} h={275} label="Two closed vessels: at T and at higher T, with evaporation and condensation arrows of equal length">
              <Vessel x={20} />
              <Vessel x={230} hot />
            </Svg>
          </Diagram>
          <div>
            <Def term="Vapour–liquid equilibrium (VLE)" cite={`[${W1}, p. 17]`}>
              {String.raw`State where evaporation and condensation rates are equal and the chemical potential $\mu$ is identical in both phases.`}
            </Def>
            <Def term={String.raw`Vapour pressure ($P^\circ_A$, damptrykket)`} cite={`[${W1}, p. 18–19]`}>
              {String.raw`The gas pressure at equilibrium above pure component A. It is a function of temperature, $P^\circ_A(T)$.`}
            </Def>
            <Def term="Evaporation" cite={`[${W1}, p. 22]`}>
              Happens at any temperature, as surface molecules escape into the vapour. Evaporation and condensation both occur continuously.
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram
            title="Vapour pressure curve of water"
            caption="The slide's 12 data points. Dashed: the three readings from the slide. Above the curve is liquid, below it vapour."
            cite={`[${W1}, p. 20–21; ${E1}, Oppg. 1a]`}
          >
            <WaterCurve />
          </Diagram>
          <div>
            <Def term="Boiling point" cite={`[${W1}, p. 22]`}>
              The temperature where the vapour pressure equals the surrounding pressure. Vapour bubbles can then form throughout the liquid, not just at the surface.
            </Def>
            <Def term="p–T diagram regions" cite={`[${E1}, Oppg. 1a]`}>
              Liquid for (p, T) above the vapour-pressure curve, vapour below it.
            </Def>
            <Def term="Volatility" cite={`[${E1}, Oppg. 2a]`}>
              The component with the higher vapour pressure is the more volatile one, because vapour escapes more easily from the liquid.
            </Def>
          </div>
        </Columns>

        <Columns>
          <div>
            <Def term={String.raw`Partial pressure ($p_A$)`} cite={`[${W1}, p. 23]`}>
              The contribution of A to the total pressure of the mixture.
            </Def>
            <Def term="Raoult's law" cite={`[${W1}, p. 23; ${FS}, p. 1, eq. 1]`}>
              {String.raw`$p_A = P^\circ_A x_A$, for an ideal liquid mixture.`}
            </Def>
            <Def term="Dalton's law" cite={`[${W1}, p. 29; ${FS}, p. 1, eq. 2]`}>
              {String.raw`$p_A = y_A P_{tot}$. It links partial pressure to vapour mole fraction.`}
            </Def>
          </div>
          <Diagram
            title="p–x–y diagram of an ideal binary: n-propanol (A) / 1-butanol (B) at 70 °C"
            caption={String.raw`Straight bubble line, curved dew line, meeting at the pure-component vapour pressures. Oppg. 2c path: from (0.2, 0.3 bar) down to the bubble line (0.175 bar), across to the dew line, read $y_A \approx 0.38$.`}
            cite={`[${E1}, Oppg. 2b–c, Fig. 2]`}
          >
            <PxyPropanol />
          </Diagram>
        </Columns>
        <Gap>Week 1, p. 19 and p. 26 are image-only slides (vapour-pressure curve figure, repeated example header) and add no extractable content.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="raoult" />
        <Eq id="dalton" />
        <Eq id="sum" />
        <Eq id="yx" />
        <Eq id="bubble" />
        <Eq id="dew" />
        <BenzeneToluene />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Total pressure and vapour composition of a 50/50 benzene–toluene liquid at 90 °C"
          given={String.raw`Given $P_T^\circ = 0.547$ bar, $P_B^\circ = 0.719$ bar and $x_B = x_T = 0.5$.`}
          steps={[
            { body: String.raw`Raoult for toluene: $p_T = P_T^\circ x_T = 0.547 \cdot 0.5 = 0.2735$ bar.` },
            { body: String.raw`Raoult for benzene: $p_B = P_B^\circ x_B = 0.719 \cdot 0.5 = 0.3595$ bar.` },
            { body: String.raw`Total pressure: $P_{tot} = p_T + p_B = 0.2735 + 0.3595 = 0.633$ bar.` },
            { body: String.raw`Dalton for toluene: $y_T = p_T / P_{tot} = 0.2735/0.633 = 0.43$.` },
            { body: String.raw`Dalton for benzene: $y_B = p_B / P_{tot} = 0.3595/0.633 = 0.57$.` },
            { body: String.raw`Check: $y_B + y_T = 1$. The vapour is enriched in benzene, the component with the higher $P^\circ$, so $x_B \neq y_B$. [Week 1, p. 29]` },
          ]}
          result={String.raw`$P_{tot} = 0.633$ bar, $y_B = 0.57$, $y_T = 0.43$`}
          cite={`[${W1}, p. 24–25, 30–31]`}
        />
        <FadedExample
          title={String.raw`Which liquid composition gives $P_{tot} = 0.70$ bar at 90 °C?`}
          given={String.raw`Same system: $P_T^\circ = 0.547$ bar, $P_B^\circ = 0.719$ bar.`}
          steps={[
            { body: String.raw`Write the total pressure: $P_{tot} = x_T P_T^\circ + x_B P_B^\circ$.` },
            { body: String.raw`Eliminate $x_T$ with $x_T = 1 - x_B$: $P_{tot} = (1-x_B) P_T^\circ + x_B P_B^\circ$.` },
            { title: 'Rearrange into bubble-point form.', body: String.raw`$P_{tot} = (P_B^\circ - P_T^\circ)\, x_B + P_T^\circ$.`, hidden: true },
            { title: 'Insert the numbers and solve.', body: String.raw`$0.70 = (0.719 - 0.547)\, x_B + 0.547$, so $x_B = 0.89$.`, hidden: true },
            { title: 'Toluene fraction.', body: String.raw`$x_T = 1 - 0.89 = 0.11$.`, hidden: true },
          ]}
          cite={`[${W1}, p. 27–28]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Pure-component vapour pressure from a diagram" cite={`[${PX}, Ex. 1b; ${E1}, Oppg. 2b, eq. 3–4]`}>
          {String.raw`At $x = 0$ or $x = 1$, the total pressure on a p–x diagram is the pure-component vapour pressure. The component with the highest end-point pressure has the highest $P^\circ$.`}
        </Trap>
        <Trap title={String.raw`$x_A \neq y_A$`} cite={`[${W1}, p. 29]`}>
          Use the liquid fraction in Raoult and the vapour fraction in Dalton. Mixing them up gives a wrong answer that still looks plausible.
        </Trap>
        <Trap title="Slide typo (source discrepancy)" cite={`[${W1}, p. 25, 31]`}>
          {String.raw`Week 1, p. 31 writes $P_{tot} = P_T^\circ + P_B^\circ$, but the numbers use the partial pressures, $0.2735 + 0.3595$. The correct form is $P_{tot} = p_T + p_B$. (Listed in the index's known discrepancies; confirmed in the PDF.)`}
        </Trap>
        <Trap title="Boiling ≠ evaporation" cite={`[${W1}, p. 21–22]`}>
          {String.raw`Boiling needs $P^\circ = P_{surroundings}$. Evaporation happens at any T. Lower pressure gives a lower boiling point (water boils at 70 °C at 0.32 atm).`}
        </Trap>
        <Trap title="A boiling point is a (p, T) pair" cite={`[${E1}, Oppg. 1c]`}>
          &quot;The vapour pressure of 1-butanol at 80 °C is 0.225 bar&quot; means 1-butanol boils at 80 °C at 0.225 bar.
        </Trap>
        <Trap title="Ideal only" cite={`[${FS}, p. 1; ${PX}, Ex. 1c]`}>
          Raoult and eqs. 5–6 assume an ideal liquid mixture. For non-ideal systems the bubble line isn&apos;t straight (page 03).
        </Trap>
        <Trap title="Mixed pressure units" cite={`[${W1}, p. 20, 24; ${FS}, p. 11]`}>
          The slides use atm for water and bar for benzene/toluene. The conversion table is on the formula sheet.
        </Trap>
      </Section>
    </>
  )
}
