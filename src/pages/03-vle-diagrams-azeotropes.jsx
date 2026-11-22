import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label, Curve,
  M, V, T, tone,
} from '../components'

const W1 = 'Week 1 - Introduction  VLE with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E1 = 'exercise_01_solutions.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'VLE diagrams, relative volatility and azeotropes',
  topic: 'vle',
  examWeight: {
    level: 'high',
    note: 'Diagram reading is most of Q1 on 2 of 2 practice exams; relative volatility also in Autumn 2022 Q2a; azeotrope limit in Practice exam 1 Ex. 2a',
  },
  examTasks: [
    'Practice exam 1, Ex. 1a: which section (A/B/C) of a p–x diagram is vapour.',
    'Practice exam 1, Ex. 1c: which of two mixtures is non-ideal, and why.',
    'Practice exam 1, Ex. 1d: benzene/styrene at 25 °C, x_S = 0.6, pressure lowered. Find the first evaporation pressure (±0.059 bar) and the benzene fraction in the first vapour (±0.92).',
    'Practice exam 1, Ex. 2a: highest ethyl acetate purity by distillation (azeotrope, about 54 mol %).',
    'Autumn 2022, Q1a–b: boiling point of pure ethyl acetate (117 °C), and which line is the dew line and what it means.',
    'Autumn 2022, Q1c–d: bubble temperature and vapour composition, then liquid composition and moles of liquid at 90 °C (lever rule).',
    'Autumn 2022, Q2a.1: relative volatility from a point on a McCabe–Thiele equilibrium line (α = 4.33).',
  ],
  buildsOn: ['02-vapor-pressure-raoult-dalton'],
  usedIn: ['04-equilibrium-flash-distillation', '06-feed-line-mccabe-thiele', '07-nmin-rmin-limiting-conditions'],
  sources: [
    `[${W1}, p. 32–53]`,
    `[${FS}, p. 1, eq. 5–8]`,
    '[exercise_01_eng.pdf, Exercise 3–5, 7]',
    `[${E1}, Oppg. 3–5]`,
    `[${PX}, Ex. 1a–d, 2a]`,
    `[${PX2}, Q1a–d, Q2a.1]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'On a constant-pressure T–x–y diagram, is the vapour region at the top or the bottom?', a: 'At the top (high T). It sits above the vapour dew point line. On a constant-temperature p–x–y diagram it is the other way round: vapour is at the bottom (low p). [Week 1, p. 36–38; practice_exam_solutions.pdf, Ex. 1a]' },
    { id: 'p2', kind: 'pretest', q: 'What does it mean if liquid and vapour have the same composition?', a: "The mixture is at an azeotrope, and normal distillation can't get past that composition. [Week 1, p. 52–53; exercise_01_solutions.pdf, Oppg. 3a]" },
    { id: 'p3', kind: 'pretest', q: 'Two components have relative volatility $\\alpha_{AB} = 1$. Can they be separated by distillation?', a: 'No. [Week 1, p. 44]' },
    { id: 't1', q: 'Find $\\alpha$ from the point (0.3, 0.7) on a y–x diagram.', a: '$\\alpha = \\dfrac{0.7 \\cdot 0.7}{0.3 \\cdot 0.3} = 5.44$. [Week 1, p. 50]' },
    { id: 't2', q: 'Same method for the point (0.3, 0.65) on the pentane/cyclohexane equilibrium line.', a: '$\\alpha = \\dfrac{0.65 \\cdot 0.7}{0.3 \\cdot 0.35} = 4.33$. [practice exam 2 solutions.pdf, Q2a.1]' },
    { id: 't3', q: 'n-hexane/n-octane: a vapour with $y_{HEX} = 0.7$ at 125 °C is cooled. Where does condensation start?', a: 'When it reaches the dew point line, at about 96 °C. [Week 1, p. 40]' },
    { id: 't4', q: 'Name three ways an azeotrope shows up on the different diagram types.', a: '$x_A = y_A$. On p–x and T–x diagrams the dew and bubble lines touch. On y–x the equilibrium curve crosses the diagonal. [exercise_01_solutions.pdf, Oppg. 3a]' },
    { id: 't5', q: 'Benzene–toluene at 10 kPa, $x_A = 0.5$ (benzene). At what temperature does it boil, and what is the vapour composition?', a: 'About 29 °C. Move horizontally to the dew line: $y_A = 0.77$. [exercise_01_solutions.pdf, Oppg. 4b–c]' },
  ],
  equations: [
    {
      id: 'bubble',
      label: 'Bubble point line (isothermal, ideal)',
      tex: String.raw`P_{L\to V} = (\vc{P_A^0} - \vc{P_B^0})\, \va{x_A} + \vc{P_B^0}`,
      vars: [
        { sym: String.raw`P_{L\to V}`, desc: 'pressure at which liquid of composition $x_A$ starts to evaporate', unit: String.raw`\mathrm{bar}` },
        { sym: String.raw`\vc{P_A^0}, \vc{P_B^0}`, desc: 'pure-component vapour pressures at the fixed T', unit: String.raw`\mathrm{bar}` },
        { sym: String.raw`\va{x_A}`, desc: 'liquid mole fraction of A', unit: '–' },
      ],
      note: 'From $P_{L\\to V} = p_A + p_B$ with Raoult. Ideal liquid.',
      cite: `[${W1}, p. 34; ${FS}, p. 1, eq. 5]`,
      check: { status: 'verified', note: 'Matches W1 p. 34 (derivation) and formula sheet eq. 5.' },
    },
    {
      id: 'dew',
      label: 'Dew point line (isothermal, ideal)',
      tex: String.raw`P_{V\to L} = \frac{\vc{P_A^0} \vc{P_B^0}}{(\vc{P_B^0} - \vc{P_A^0})\, \vb{y_A} + \vc{P_A^0}}`,
      vars: [
        { sym: String.raw`P_{V\to L}`, desc: 'pressure at which vapour of composition $y_A$ starts to condense', unit: String.raw`\mathrm{bar}` },
        { sym: String.raw`\vb{y_A}`, desc: 'vapour mole fraction of A', unit: '–' },
      ],
      note: "Derivation: Dalton alone isn't enough, because $p_A$ is unknown. Use $x_A = P_{V\\to L} y_A/P_A^0$ and $x_B = P_{V\\to L} y_B/P_B^0$, then $x_A + x_B = 1$.",
      cite: `[${W1}, p. 35; ${FS}, p. 1, eq. 6]`,
      check: { status: 'verified', note: 'Matches W1 p. 35 (same denominator order) and formula sheet eq. 6.' },
    },
    {
      id: 'alpha',
      label: 'Relative volatility (ideal)',
      tex: String.raw`\vd{\alpha_{AB}} = \frac{\vc{P_A^0}}{\vc{P_B^0}} = \frac{\vb{y_A}/\va{x_A}}{\vb{y_B}/\va{x_B}}`,
      vars: [
        { sym: String.raw`\vd{\alpha_{AB}}`, desc: 'relative volatility of A to B', unit: '–' },
        { sym: String.raw`\vc{P_A^0}, \vc{P_B^0}`, desc: 'pure-component vapour pressures', unit: String.raw`\mathrm{bar}` },
        { sym: String.raw`\va{x_i}, \vb{y_i}`, desc: 'liquid and vapour mole fractions', unit: '–' },
      ],
      note: 'From $x_A P_A^0 = p_A = y_A P_{tot}$. $P_{tot}$ cancels.',
      cite: `[${W1}, p. 44–45; ${FS}, p. 1, eq. 7]`,
      check: { status: 'verified', note: 'Matches W1 p. 44–45 and formula sheet eq. 7.' },
    },
    {
      id: 'yalpha',
      label: 'Equilibrium line in terms of α',
      tex: String.raw`\vb{y_A} = \frac{\vd{\alpha_{AB}}\, \va{x_A}}{1 + (\vd{\alpha_{AB}} - 1)\, \va{x_A}}`,
      vars: [
        { sym: String.raw`\vb{y_A}`, desc: 'vapour mole fraction of A in equilibrium with $x_A$', unit: '–' },
        { sym: String.raw`\va{x_A}`, desc: 'liquid mole fraction of A', unit: '–' },
        { sym: String.raw`\vd{\alpha_{AB}}`, desc: 'relative volatility (assumed constant)', unit: '–' },
      ],
      note: 'Binary. Rearranged from $\\alpha_{AB} = \\dfrac{y_A/x_A}{(1-y_A)/(1-x_A)}$. To get α from one point on a diagram: $\\alpha = \\dfrac{y(1-x)}{x(1-y)}$.',
      cite: `[${W1}, p. 45, 49–50; ${FS}, p. 1, eq. 8]`,
      check: { status: 'verified', note: 'Matches W1 p. 45 and formula sheet eq. 8.' },
    },
    {
      id: 'gamma',
      label: "Modified Raoult's law (non-ideal liquid)",
      tex: String.raw`p_A = \gamma_A \va{x_A} \vc{P_A^\circ} \qquad \vd{\alpha_{AB}} = \frac{\gamma_A \vc{P_A^\circ}}{\gamma_B \vc{P_B^\circ}}`,
      vars: [
        { sym: String.raw`\gamma_A`, desc: 'liquid-phase activity coefficient of A', unit: '–' },
        { sym: String.raw`p_A`, desc: 'partial pressure of A', unit: String.raw`\mathrm{bar}` },
      ],
      note: '$\\gamma$ depends on the interactions in, and the composition of, the mixture.',
      cite: `[${W1}, p. 51]`,
      check: { status: 'verified', note: 'Matches W1 p. 51.' },
    },
    {
      id: 'lever',
      label: 'Lever rule / mole balance in the two-phase region',
      tex: String.raw`\ve{n_L} + \ve{n_V} = n_{tot}, \qquad \va{x_L} \ve{n_L} + \vb{y_V} \ve{n_V} = \vf{z}\, n_{tot} \quad\Leftrightarrow\quad \frac{\ve{n_V}}{\ve{n_L}} = \frac{|ML|}{|MV|} = \frac{\vf{z} - \va{x_L}}{\vb{y_V} - \vf{z}}`,
      vars: [
        { sym: String.raw`\ve{n_L}, \ve{n_V}`, desc: 'moles in the liquid and vapour', unit: String.raw`\mathrm{mol}` },
        { sym: String.raw`\vf{z}`, desc: 'overall mole fraction (mixing point M)', unit: '–' },
        { sym: String.raw`\va{x_L}, \vb{y_V}`, desc: 'liquid and vapour compositions on the tie line at the same T', unit: '–' },
      ],
      cite: `[${W1}, p. 43; ${PX2}, Q1d]`,
      check: { status: 'verified', note: 'Mole balance matches W1 p. 43; arm-lever rule $|ML|\\cdot n_L = |MV|\\cdot n_V$ matches Autumn 2022 Q1d.' },
    },
  ],
}

// ---- helpers ---------------------------------------------------------------
const frame = ({ x0 = 50, y0 = 16, w = 200, h = 160, xmin = 0, xmax = 1, ymin = 0, ymax = 1 }) => ({
  X: (v) => x0 + ((v - xmin) / (xmax - xmin)) * w,
  Y: (v) => y0 + h - ((v - ymin) / (ymax - ymin)) * h,
  x0, y0, w, h,
})
const poly = (pts) => pts.map((p) => p.join(',')).join(' ')
const lineStyle = (t, dash) => ({ stroke: tone(t), strokeWidth: 2.5, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const range = (n) => Array.from({ length: n + 1 }, (_, i) => i / n)

function AxesBox({ f, xl, yl, xs = [], ys = [], yfmt = (v) => v }) {
  return (
    <g>
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 8} y2={f.y0 + f.h} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 8} />
      {xs.map((v) => (
        <text key={`x${v}`} x={f.X(v)} y={f.y0 + f.h + 17} textAnchor="middle" className="svg-sub">{v}</text>
      ))}
      {ys.map((v) => (
        <g key={`y${v}`}>
          <line x1={f.x0 - 4} y1={f.Y(v)} x2={f.x0} y2={f.Y(v)} style={{ stroke: tone('muted') }} />
          <text x={f.x0 - 7} y={f.Y(v) + 4} textAnchor="end" className="svg-sub">{yfmt(v)}</text>
        </g>
      ))}
      <Label x={f.x0 + f.w} y={f.y0 + f.h + 34} anchor="end" size={13}>{xl}</Label>
      <Label x={f.x0 + 6} y={f.y0 - 2} anchor="start" size={13}>{yl}</Label>
    </g>
  )
}

// ---- Visual 1: three diagram types -----------------------------------------
function ThreeTypes() {
  const PA = 1
  const PB = 0.35
  const f1 = frame({ x0: 40, y0: 40, w: 170, h: 170, ymin: 0.2, ymax: 1.1 })
  const f2 = frame({ x0: 290, y0: 40, w: 170, h: 170, ymin: 0, ymax: 1 })
  const f3 = frame({ x0: 540, y0: 40, w: 170, h: 170 })
  const xs = range(30)
  // isobaric sketch: T in arbitrary units, T1 (pure B) high at left, T2 (pure A) low at right
  const Tb = (x) => 0.85 - 0.65 * x + 0.25 * x * (1 - x) * -1
  const Td = (y) => 0.85 - 0.65 * y + 0.28 * y * (1 - y)
  const a = 2.6
  return (
    <Svg w={740} h={280} label="Three VLE diagram types: isothermal p–x–y, isobaric T–x–y and y–x">
      {/* panel 1 */}
      <Label x={f1.x0 + 85} y={18} size={14}>isothermal p–x–y</Label>
      <AxesBox f={f1} xl="x_A, y_A" yl="P" />
      <polyline points={poly(xs.map((x) => [f1.X(x), f1.Y((PA - PB) * x + PB)]))} style={lineStyle('var-a')} />
      <polyline points={poly(xs.map((y) => [f1.X(y), f1.Y((PA * PB) / ((PB - PA) * y + PA))]))} style={lineStyle('var-b')} />
      <Label x={f1.X(0.3)} y={f1.Y(0.95)} size={13} t="muted">liquid</Label>
      <Label x={f1.X(0.72)} y={f1.Y(0.32)} size={13} t="muted">vapour</Label>
      {/* panel 2 */}
      <Label x={f2.x0 + 85} y={18} size={14}>isobaric T–x–y</Label>
      <AxesBox f={f2} xl="x_A, y_A" yl="T" />
      <polyline points={poly(xs.map((x) => [f2.X(x), f2.Y(Tb(x))]))} style={lineStyle('var-a')} />
      <polyline points={poly(xs.map((y) => [f2.X(y), f2.Y(Td(y))]))} style={lineStyle('var-b')} />
      <Label x={f2.X(0.7)} y={f2.Y(0.85)} size={13} t="muted">vapour</Label>
      <Label x={f2.X(0.3)} y={f2.Y(0.18)} size={13} t="muted">liquid</Label>
      <Label x={f2.x0 - 4} y={f2.Y(0.85) + 4} anchor="end" size={12} t="var-c">T₁</Label>
      <Label x={f2.X(1) + 6} y={f2.Y(0.2) + 4} anchor="start" size={12} t="var-c">T₂</Label>
      <Label x={f2.X(0.02)} y={f2.y0 + f2.h + 18} anchor="start" size={11} t="muted">pure B</Label>
      <Label x={f2.X(1)} y={f2.y0 + f2.h + 18} anchor="end" size={11} t="muted">pure A</Label>
      {/* panel 3 */}
      <Label x={f3.x0 + 85} y={18} size={14}>y–x (p fixed)</Label>
      <AxesBox f={f3} xl="x_A" yl="y_A" />
      <line x1={f3.X(0)} y1={f3.Y(0)} x2={f3.X(1)} y2={f3.Y(1)} style={lineStyle('muted', true)} />
      <polyline points={poly(xs.map((x) => [f3.X(x), f3.Y((a * x) / (1 + (a - 1) * x))]))} style={lineStyle('var-b')} />
      <Label x={f3.X(0.62)} y={f3.Y(0.45)} size={12} t="muted">y = x</Label>
      {/* swap arrow */}
      <Label x={250} y={272} size={12} t="trap">← vapour/liquid regions swap →</Label>
    </Svg>
  )
}

// ---- Visual 2: n-hexane / n-octane walk-through ------------------------------
function HexOct() {
  const f = frame({ x0: 70, y0: 26, w: 540, h: 330, xmin: 0, xmax: 1, ymin: 60, ymax: 130 })
  // schematic lines fitted through the quoted points only; ends dashed (no data in the files)
  const bubble = [[0.18, 107.2], [0.3, 95], [0.38, 93.3]]
  const dew = [[0.56, 107.2], [0.7, 95.5], [0.78, 93.3]]
  const P = (x, Tt) => [f.X(x), f.Y(Tt)]
  const pt = (x, Tt, name, dx = 8, dy = -8, t = 'example') => (
    <g key={name}>
      <circle cx={f.X(x)} cy={f.Y(Tt)} r={5} style={{ fill: tone(t) }} />
      <Label x={f.X(x) + dx} y={f.Y(Tt) + dy} anchor={dx < 0 ? 'end' : 'start'} size={13} t={t}>{name}</Label>
    </g>
  )
  return (
    <Svg w={660} h={410} label="Isobaric T–x–y diagram for n-hexane/n-octane with the slide's labelled points">
      <AxesBox f={f} xl="x_HEX, y_HEX (–)" yl="T (°C)" xs={[0, 0.2, 0.4, 0.6, 0.8, 1]} ys={[70, 80, 90, 100, 110, 120]} />
      {/* dashed extensions */}
      <Curve points={[P(0, 124), P(0.08, 117), P(0.18, 107.2)]} t="var-a" dashed />
      <Curve points={[P(0.38, 93.3), P(0.6, 84), P(0.85, 75), P(1, 70)]} t="var-a" dashed />
      <Curve points={[P(0, 124), P(0.25, 121), P(0.45, 114), P(0.56, 107.2)]} t="var-b" dashed />
      <Curve points={[P(0.78, 93.3), P(0.9, 82), P(1, 70)]} t="var-b" dashed />
      {/* solid where the slides give points */}
      <Curve points={bubble.map(([x, Tt]) => P(x, Tt))} t="var-a" width={3} />
      <Curve points={dew.map(([x, Tt]) => P(x, Tt))} t="var-b" width={3} />
      <Label x={f.X(0.12)} y={f.Y(82)} size={15} t="muted">liquid</Label>
      <Label x={f.X(0.9)} y={f.Y(116)} size={15} t="muted">vapour</Label>
      <Label x={f.X(0.47)} y={f.Y(101)} size={13} t="muted">liquid + vapour</Label>
      <Label x={f.X(0.27)} y={f.Y(112)} size={12} t="var-a" anchor="end">bubble line</Label>
      <Label x={f.X(0.6)} y={f.Y(113)} size={12} t="var-b" anchor="start">dew line</Label>
      {/* p. 38 points */}
      {pt(0.4, 70, 'liquid point (0.4, 70 °C)', -12, 5, 'definition')}
      <circle cx={f.X(0.9)} cy={f.Y(93.3)} r={5} style={{ fill: tone('definition') }} />
      <Label x={f.X(0.99)} y={f.Y(101.5)} anchor="end" size={12} t="definition">vapour point</Label>
      <Label x={f.X(0.99)} y={f.Y(101.5) + 15} anchor="end" size={12} t="definition">x_OCT = 0.1, 93.3 °C</Label>
      {/* p. 40 cooling */}
      <Arrow x1={f.X(0.7) + 14} y1={f.Y(125)} x2={f.X(0.7) + 14} y2={f.Y(96.5)} t="var-b" />
      <Label x={f.X(0.7) + 20} y={f.Y(122)} anchor="start" size={12} t="var-b">cool y = 0.7 from 125 °C</Label>
      <Label x={f.X(0.7) + 20} y={f.Y(122) + 16} anchor="start" size={12} t="var-b">→ dew ≈ 96 °C</Label>
      {/* p. 41 heating path */}
      <line x1={f.X(0.3)} y1={f.Y(64)} x2={f.X(0.3)} y2={f.Y(127)} style={lineStyle('example', true)} />
      <line x1={f.X(0.3)} y1={f.Y(95)} x2={f.X(0.7)} y2={f.Y(95)} style={{ stroke: tone('example'), strokeWidth: 1.5 }} />
      <line x1={f.X(0.18)} y1={f.Y(107.2)} x2={f.X(0.56)} y2={f.Y(107.2)} style={{ stroke: tone('example'), strokeWidth: 1.5 }} />
      {pt(0.3, 95, 'B', -10, 5)}
      {pt(0.7, 95, 'C', 8, 16)}
      {pt(0.18, 107.2, 'D (0.18)', -8, -8)}
      {pt(0.3, 107.2, 'E 107.2 °C', 6, -8)}
      {pt(0.56, 107.2, 'F (0.56)', 8, -8)}
      {pt(0.3, 124, 'G (all vapour)', 8, 4)}
      {/* p. 43 tie line */}
      <line x1={f.X(0.38)} y1={f.Y(93.3)} x2={f.X(0.78)} y2={f.Y(93.3)} style={{ stroke: tone('var-f'), strokeWidth: 2.5 }} />
      {pt(0.38, 93.3, 'L 0.38', 4, 20, 'var-a')}
      {pt(0.6, 93.3, 'M 0.6', 0, 20, 'var-f')}
      {pt(0.78, 93.3, 'V 0.78', 8, 18, 'var-b')}
      <Label x={f.X(0.47)} y={f.Y(67)} anchor="start" size={13} t="var-e">at M: 45 % liquid / 55 % vapour</Label>
    </Svg>
  )
}

// ---- Visual 3: y–x with α and with an azeotrope ----------------------------
function YxAlphaAz() {
  const f1 = frame({ x0: 50, y0: 30, w: 220, h: 220 })
  const f2 = frame({ x0: 360, y0: 30, w: 220, h: 220 })
  const xs = range(40)
  const a = 5.44
  // schematic azeotropic curve crossing y = x at 0.67 (no data in files)
  const xaz = 0.67
  const az = (x) => x + 0.9 * x * (1 - x) * (xaz - x)
  return (
    <Svg w={620} h={300} label="Two y–x diagrams: ideal curve with alpha 5.44 through (0.3, 0.7), and a curve crossing the diagonal at an azeotrope">
      <AxesBox f={f1} xl="x_A" yl="y_A" xs={[0, 0.5, 1]} ys={[0.5, 1]} />
      <line x1={f1.X(0)} y1={f1.Y(0)} x2={f1.X(1)} y2={f1.Y(1)} style={lineStyle('muted', true)} />
      <polyline points={poly(xs.map((x) => [f1.X(x), f1.Y((a * x) / (1 + (a - 1) * x))]))} style={lineStyle('var-b')} />
      <polyline points={`${f1.X(0.3)},${f1.Y(0)} ${f1.X(0.3)},${f1.Y(0.7)} ${f1.X(0)},${f1.Y(0.7)}`} style={{ stroke: tone('example'), strokeWidth: 1.5, strokeDasharray: '4 4', fill: 'none' }} />
      <circle cx={f1.X(0.3)} cy={f1.Y(0.7)} r={5} style={{ fill: tone('example') }} />
      <Label x={f1.X(0.33)} y={f1.Y(0.7) + 22} anchor="start" size={12} t="example">(0.3, 0.7)</Label>
      <Label x={f1.X(0.5)} y={f1.y0 - 10} size={13} t="var-d">α = 5.44</Label>

      <AxesBox f={f2} xl="x_A" yl="y_A" xs={[0, 0.5, 1]} ys={[0.5, 1]} />
      <line x1={f2.X(0)} y1={f2.Y(0)} x2={f2.X(1)} y2={f2.Y(1)} style={lineStyle('muted', true)} />
      <polyline points={poly(xs.map((x) => [f2.X(x), f2.Y(az(x))]))} style={lineStyle('var-b')} />
      <circle cx={f2.X(xaz)} cy={f2.Y(xaz)} r={6} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2.5 }} />
      <Label x={f2.X(xaz) + 8} y={f2.Y(xaz) + 24} anchor="start" size={12} t="trap">azeotrope</Label>
      <Label x={f2.X(xaz) + 8} y={f2.Y(xaz) + 40} anchor="start" size={12} t="trap">x_AZ ≈ 0.67</Label>
      <Label x={f2.X(0.5)} y={f2.y0 - 10} size={13}>isopropanol–water, 100 kPa</Label>
    </Svg>
  )
}

// ---- Visual 4: min- vs max-boiling azeotrope --------------------------------
function AzeoTypes() {
  const f1 = frame({ x0: 50, y0: 30, w: 220, h: 190 })
  const f2 = frame({ x0: 360, y0: 30, w: 220, h: 190 })
  const xaz = 0.6
  const xs = range(60)
  // T in 0..1; min-boiling: ends 0.8 / 0.65, minimum 0.25 at xaz
  const lens = (x, T0, T1, Taz, sgn) => {
    const left = x <= xaz
    const s = left ? (xaz - x) / xaz : (x - xaz) / (1 - xaz)
    const Tend = left ? T0 : T1
    const base = Taz + (Tend - Taz) * (1 - (1 - s) ** 2)
    const bulge = 0.09 * Math.sin(Math.PI * s)
    return { b: base, d: base + sgn * bulge }
  }
  const draw = (f, T0, T1, Taz, sgn) => (
    <>
      <polyline points={poly(xs.map((x) => [f.X(x), f.Y(lens(x, T0, T1, Taz, sgn).b)]))} style={lineStyle('var-a')} />
      <polyline points={poly(xs.map((x) => [f.X(x), f.Y(lens(x, T0, T1, Taz, sgn).d + (sgn < 0 ? 0.18 * Math.sin(Math.PI * (x <= xaz ? (xaz - x) / xaz : (x - xaz) / (1 - xaz))) : 0))]))} style={lineStyle('var-b')} />
      <line x1={f.X(xaz)} y1={f.Y(0)} x2={f.X(xaz)} y2={f.Y(Taz)} style={lineStyle('trap', true)} />
      <circle cx={f.X(xaz)} cy={f.Y(Taz)} r={5} style={{ fill: tone('trap') }} />
      <Label x={f.X(xaz)} y={f.y0 + f.h + 17} size={12} t="trap">x_AZ</Label>
    </>
  )
  return (
    <Svg w={620} h={292} label="Two T–x–y diagrams: minimum-boiling and maximum-boiling azeotropes">
      <AxesBox f={f1} xl="x_A, y_A" yl="T" />
      {draw(f1, 0.75, 0.6, 0.25, 1)}
      <Label x={f1.X(0.5)} y={f1.y0 + f1.h + 52} size={13}>minimum-boiling</Label>
      <AxesBox f={f2} xl="x_A, y_A" yl="T" />
      {draw(f2, 0.3, 0.45, 0.85, 1)}
      <Label x={f2.X(0.5)} y={f2.y0 + f2.h + 52} size={13}>maximum-boiling</Label>
    </Svg>
  )
}

// ---- Interactive: eq. 8 -----------------------------------------------------
function AlphaExplorer() {
  const [a, setA] = useState(5.44)
  const f = frame({ x0: 60, y0: 20, w: 300, h: 300 })
  const xs = range(80)
  const presets = [
    { v: 5.44, label: '5.44 (W1 p. 50)' },
    { v: 4.33, label: '4.33 pentane/cyclohexane' },
    { v: 3.1, label: '3.1 (Exercise 7)' },
    { v: 1, label: '1' },
  ]
  return (
    <Diagram
      title={String.raw`Equilibrium line vs relative volatility (formula sheet eq. 8)`}
      caption={String.raw`Slide $\alpha_{AB}$ from 1 to 10. Presets: 5.44 [Week 1, p. 50], 4.33 [practice exam 2 solutions.pdf, Q2a.1], 3.1 [exercise_01_eng.pdf, Exercise 7]. At $\alpha = 1$ the curve lies on the diagonal: no separation possible [Week 1, p. 44].`}
      cite={`[${FS}, p. 1, eq. 8; ${W1}, p. 44, 50]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="d"><M>{String.raw`\alpha_{AB}`}</M></V> = <strong>{a.toFixed(2)}</strong></span>
            <input type="range" min={1} max={10} step={0.01} value={a} onChange={(e) => setA(Number(e.target.value))} />
          </label>
        </div>
        <p style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {presets.map((p) => (
            <button key={p.v} type="button" className="reveal" onClick={() => setA(p.v)}>{p.label}</button>
          ))}
        </p>
        <Svg w={420} h={370} label="y–x diagram with the equilibrium line for the chosen relative volatility">
          <AxesBox f={f} xl="x_A (–)" yl="y_A (–)" xs={[0, 0.2, 0.4, 0.6, 0.8, 1]} ys={[0.2, 0.4, 0.6, 0.8, 1]} />
          <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={lineStyle('muted', true)} />
          <polyline points={poly(xs.map((x) => [f.X(x), f.Y((a * x) / (1 + (a - 1) * x))]))} style={lineStyle('var-b')} />
          {a < 1.03 && (
            <Label x={f.X(0.55)} y={f.Y(0.42)} size={16} t="trap" anchor="start">no separation possible</Label>
          )}
          <Label x={f.X(0.25)} y={f.Y(0.92)} size={14} t="var-d">{`α = ${a.toFixed(2)}`}</Label>
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Read the equilibrium off a picture">
        <MentalModel cite={`[${W1}, p. 32–53]`}>
          <T text="Raoult and Dalton (page 02) give vapour composition from liquid composition. A VLE diagram plots that relationship so you can read it off instead of calculating [Week 1, p. 32]. There are three views. Isothermal p–x–y holds T fixed, isobaric T–x–y holds p fixed (the more common case in practice), and the composition diagram y–x has p fixed and T not reported [Week 1, p. 33, 36, 47]." />
          <p>
            In the p–x–y and T–x–y views, two lines bound a two-phase region. The <V c="a">bubble point line</V> is where a liquid
            starts to evaporate, and the <V c="b">dew point line</V> is where a vapour starts to condense [Week 1, p. 33–35]. Inside
            the two-phase region the liquid and vapour compositions are fixed by the two lines at the same T (or p), and the{' '}
            <V c="f">overall composition</V> decides how much of each you have [Week 1, p. 41–43]. How far the y–x curve bulges
            above the diagonal is set by the <V c="d">relative volatility</V>. A larger <M>\alpha</M> means an easier separation,{' '}
            <M>\alpha = 1</M> means impossible, and where the curve crosses the diagonal (an azeotrope) distillation stops
            [Week 1, p. 44, 52–53].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Diagram types, regions and azeotropes">
        <Diagram
          title="The three VLE diagram types"
          caption={String.raw`Bubble line in the liquid colour, dew line in the vapour colour (the slides draw them blue and red). Vapour sits at the bottom of p–x–y but at the top of T–x–y. In T–x–y the lines meet at the pure-component boiling points $T_1$ (pure B) and $T_2$ (pure A). Schematic shapes.`}
          cite={`[${W1}, p. 32–36, 47]`}
        >
          <ThreeTypes />
        </Diagram>

        <Columns>
          <div>
            <Def term="Three VLE diagram types" cite={`[${W1}, p. 32]`}>Isobaric, isothermal and composition.</Def>
            <Def term="Isothermal VLE (p–x–y)" cite={`[${W1}, p. 33–34]`}>
              Constant T, so constant pure-component vapour pressures. A mixture has no single boiling point but a trajectory.
            </Def>
            <Def term={String.raw`Liquid bubble point line ($x_A$, blue)`} cite={`[${W1}, p. 33–34]`}>
              Where a liquid starts to evaporate.
            </Def>
            <Def term={String.raw`Vapour dew point line ($y_A$, red)`} cite={`[${W1}, p. 33, 35; ${PX2}, Q1b]`}>
              Where a vapour starts to condense, i.e. on cooling forms the first drop of liquid.
            </Def>
            <Def term="Axis convention" cite={`[${W1}, p. 33]`}>
              {String.raw`The most volatile component is always reported on the x-axis. The other follows from $x_A + x_B = 1$.`}
            </Def>
          </div>
          <div>
            <Def term="Isobaric VLE (T–x–y)" cite={`[${W1}, p. 36–37]`}>
              {String.raw`Constant pressure, more common. The pure components have different boiling points ($T_1$, $T_2$). At equilibrium, liquid and gas have the same temperature.`}
            </Def>
            <Def term="Two-phase region" cite={`[${W1}, p. 41–43]`}>
              Between the lines both phases coexist. Liquid composition is read on the bubble line and vapour composition on the dew line, at the same T. The overall mole fraction is unchanged.
            </Def>
            <Def term="Inverse lever rule (arm-lever rule)" cite={`[${PX2}, Q1d; ${W1}, p. 43]`}>
              {String.raw`$|ML| \cdot n_L = |MV| \cdot n_V$, where M is the mixing point and L, V are the bubble and dew line points at that T. It is equivalent to a component mole balance.`}
            </Def>
            <Def term="Composition (equilibrium) diagram (y–x)" cite={`[${W1}, p. 47]`}>
              Constant pressure, temperature not reported.
            </Def>
          </div>
        </Columns>

        <Diagram
          title="Isobaric n-hexane / n-octane: reading points, paths and a tie line"
          caption={String.raw`Solid line segments pass through the values quoted on the slides; dashed ends are schematic (no numeric curve data in the files). p. 38: (0.4, 70 °C) is liquid, $x_{OCT} = 0.1$ at 93.3 °C is vapour. p. 40: vapour $y_{HEX} = 0.7$ cooled from 125 °C reaches the dew line at about 96 °C. p. 41: heating $x_{HEX} = 0.3$ — bubble point B ≈ 95 °C with first vapour C = 0.7, then E at 107.2 °C with tie line D (0.18) – F (0.56), then G all vapour. p. 43: tie line at 93.3 °C for $z = 0.6$.`}
          cite={`[${W1}, p. 37–43]`}
        >
          <HexOct />
        </Diagram>

        <Columns>
          <div>
            <Def term={String.raw`Relative volatility ($\alpha_{AB}$)`} cite={`[${W1}, p. 44]`}>
              {String.raw`Separation by evaporation relies on differences in volatility (flyktighet). A more volatile component has a higher vapour pressure and so a larger presence in the vapour. A high $\alpha_{AB}$ makes separation easier, and $\alpha_{AB} = 1$ cannot be separated.`}
            </Def>
            <Def term="Non-ideal mixture" cite={`[${W1}, p. 51]`}>
              {String.raw`Most real liquid mixtures. Raoult's law needs a liquid-phase activity coefficient $\gamma_A$, which depends strongly on the interactions in the mixture and its composition.`}
            </Def>
            <Def term="Recognising non-ideality" cite={`[${PX}, Ex. 1c]`}>
              {"For an ideal mixture the bubble point line on a p–x diagram is straight (unmodified Raoult). If it isn't straight, the mixture is non-ideal."}
            </Def>
          </div>
          <Diagram
            title="y–x diagram: α from one point, and an azeotrope"
            caption={String.raw`Left: $y = \alpha x/(1+(\alpha-1)x)$ with $\alpha = 5.44$ through (0.3, 0.7). Right: a curve crossing $y = x$ at $x_{AZ} \approx 0.67$ (isopropanol–water, 100 kPa); its shape is schematic.`}
            cite={`[${W1}, p. 45–50; ${E1}, Oppg. 5a]`}
          >
            <YxAlphaAz />
          </Diagram>
        </Columns>

        <Columns>
          <Diagram
            title="Minimum- vs maximum-boiling azeotrope"
            caption={String.raw`Bubble and dew lines touch at $x_{AZ}$: a temperature minimum (left) or maximum (right). Distillation can't cross $x_{AZ}$. Schematic shapes.`}
            cite={`[${W1}, p. 53; ${E1}, Oppg. 3a]`}
          >
            <AzeoTypes />
          </Diagram>
          <Def term="Azeotrope" cite={`[${W1}, p. 52–53; ${E1}, Oppg. 3a]`}>
            {String.raw`Liquid and vapour composition are the same, $x_A = y_A = x_{AZ}$. Distillation can't go past it. On p–x or T–x diagrams the dew and bubble lines touch there, and on a y–x diagram the equilibrium curve crosses $y = x$. Azeotropes can be minimum or maximum boiling. Example: ethanol–water, where normal distillation can't exceed 95.6 % ethanol.`}
          </Def>
        </Columns>
        <Gap>Week 1 diagram figures (p. 32, 36–43, 46–50, 53) are images. The point values above come from the slide text, but the full n-hexane/n-octane curve and the azeotrope sketches have no numeric data in the files.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="bubble" />
        <Eq id="dew" />
        <Eq id="alpha" />
        <Eq id="yalpha" />
        <AlphaExplorer />
        <Eq id="gamma" />
        <Eq id="lever" />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title={String.raw`Phase split of $x_{HEX} = 0.6$ at 93.3 °C (n-hexane/n-octane, isobaric)`}
          steps={[
            { body: 'Locate the point (0.6, 93.3 °C). It lies between the bubble and dew lines, so the mixture is two-phase.' },
            { body: String.raw`Draw the horizontal tie line at 93.3 °C. It meets the bubble line at $x_{HEX} \approx 0.38$ (liquid) and the dew line at $y_{HEX} \approx 0.78$ (vapour).` },
            { body: String.raw`Basis 100 mol. The overall mole fraction is still 0.6: $0.38\, n_L + 0.78\, n_V = 100 \cdot 0.6$.` },
            { body: String.raw`Total balance: $n_L + n_V = 100$.` },
            { body: String.raw`Substitute: $0.38\, n_L + 0.78(100 - n_L) = 60$, so $n_L = 45$ mol.` },
            { body: 'Result: 45 % liquid, 55 % vapour.' },
          ]}
          result="45 % liquid, 55 % vapour"
          cite={`[${W1}, p. 42–43]`}
        />
        <FadedExample
          title="Heating acetone/ethyl acetate to its boiling point and beyond"
          given="A mixture of 25 mol acetone and 37.5 mol ethyl acetate is heated at constant pressure (isobaric diagram given)."
          steps={[
            { body: String.raw`Overall acetone mole fraction: $z = 25/(25 + 37.5) = 0.4$.` },
            { title: String.raw`Move up vertically from $z = 0.4$ to the bubble line.`, body: 'Boiling starts at 80 °C.', hidden: true },
            { title: 'Go horizontally at 80 °C to the dew line.', body: String.raw`$y_{acetone} = 0.82$, so $y_{EA} = 1 - 0.82 = 0.18$.`, hidden: true },
            { body: String.raw`Heat to 90 °C. Tie line: $x_{acetone} = 0.26$ (liquid), $y_{acetone} = 0.65$ (vapour).` },
            { title: String.raw`Acetone balance with $n_L + n_V = 62.5$: $25 = 0.26\, n_L + 0.65\,(62.5 - n_L)$.`, body: String.raw`$n_L = 40.0$ mol.`, hidden: true },
            { title: 'Check with the lever rule.', body: String.raw`$n_V/n_L = |ML|/|MV| = 0.56$, giving the same $n_L$.`, hidden: true },
          ]}
          cite={`[${PX2}, Q1c–d]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Regions swap between diagram types" cite={`[${PX}, Ex. 1a; ${W1}, p. 38]`}>
          {"On an isothermal p–x diagram the vapour is the bottom section, below the dew line. On an isobaric T–x diagram it's the top."}
        </Trap>
        <Trap title="Which component is asked for" cite={`[${W1}, p. 33; ${PX2}, Q1c]`}>
          {String.raw`Diagrams use the most volatile component on the x-axis. The exam then asks for the other one, e.g. "mole fraction of ethyl acetate in the vapour" $= 1 - 0.82$.`}
        </Trap>
        <Trap title="Convert moles to mole fraction first" cite={`[${PX2}, Q1c]`}>
          {String.raw`"25 mol acetone + 37.5 mol ethyl acetate" means $z = 0.4$ before you touch the diagram.`}
        </Trap>
        <Trap title="The tie line is horizontal" cite={`[${W1}, p. 37; ${PX}, Ex. 1d]`}>
          Both phases are at the same T (isobaric) or p (isothermal), so read L and V at the same level.
        </Trap>
        <Trap title="Spotting non-ideality" cite={`[${PX}, Ex. 1c; ${FS}, p. 1, eq. 5–6]`}>
          A non-straight bubble line on a p–x diagram means non-ideal. The dew line is curved even for ideal systems.
        </Trap>
        <Trap title="The activity coefficient isn't on the formula sheet" cite={`[${W1}, p. 51; ${FS}, p. 1]`}>
          {String.raw`You must know $p_A = \gamma_A x_A P_A^\circ$.`}
        </Trap>
        <Trap title="The azeotrope is the purity ceiling" cite={`[${PX}, Ex. 2a; ${E1}, Oppg. 3b]`}>
          {String.raw`The highest purity reachable by distillation is $x_{AZ}$, wherever you start from on that side.`}
        </Trap>
        <Trap title="Mole % vs mass %" cite={`[${E1}, Oppg. 3c]`}>
          {String.raw`Exercise answers sometimes switch to mass %, $\mathrm{Wt}\%_i = 100\, M_i x_i / \sum M_i x_i$ (e.g. $x_{AZ} = 0.42$ n-propanol → 70.7 wt %).`}
        </Trap>
        <Trap title="Graphical answers have tolerance" cite={`[${PX}, Ex. 1d]`}>
          Exam solutions give &quot;±0.059 bar&quot; and &quot;±0.92&quot;. Show where you read the value.
        </Trap>
      </Section>
    </>
  )
}
