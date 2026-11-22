import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Box, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W1 = 'Week 1 - Introduction  VLE with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E1 = 'exercise_01_solutions.pdf'

export const meta = {
  title: 'Equilibrium and flash distillation',
  topic: 'flash-distillation',
  examWeight: {
    level: 'medium',
    note: 'No dedicated flash task on the practice exams; the same balance + lever-rule math is Autumn 2022 Q1d, and the lever rule returns in the extraction questions',
  },
  examTasks: [
    'Autumn 2022, Q1d: liquid composition and moles of liquid at 90 °C via the arm-lever rule or an acetone mole balance (n_L = 40.0 mol). Same math as here, for a closed vessel (see page 03).',
    'Practice exam 1, Ex. 4b and Autumn 2022, Q4c: the lever-arm rule again, for extraction mixing points (page 19).',
    'No practice exam has a stand-alone flash distillation question.',
  ],
  buildsOn: ['02-vapor-pressure-raoult-dalton', '03-vle-diagrams-azeotropes'],
  usedIn: ['05-column-balances-operating-lines', '19-ternary-diagrams'],
  sources: [
    `[${W1}, p. 54–73]`,
    `[${FS}, p. 1, eq. 8]`,
    '[exercise_01_eng.pdf, Exercise 5–7]',
    `[${E1}, Oppg. 5–7]`,
    '[practice exam 2 solutions.pdf, Q1d, Q4c]',
    '[practice_exam_solutions.pdf, Ex. 4b]',
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'A binary feed splits into a vapour and a liquid stream. How many independent mass balances can you write?', a: "Two: one total and one component balance. The second component balance isn't independent, because the mole fractions sum to one. [Week 1, p. 58–59]" },
    { id: 'p2', kind: 'pretest', q: 'Seawater is heated and the water leaves as vapour, leaving salt behind. Is that distillation?', a: "No, it's evaporation. NaCl isn't volatile, so it isn't present in the vapour phase. [Week 1, p. 56]" },
    { id: 'p3', kind: 'pretest', q: 'You double the feed rate of a flash drum while keeping V/F the same. What happens to $x_A$ and $y_A$?', a: 'Nothing. Both flows double, but the compositions are unchanged. [exercise_01_solutions.pdf, Oppg. 5d]' },
    { id: 't1', q: 'Isopropanol–water flash at 100 kPa, $F = 10$ kmol/h, $z_A = 0.4$, $V/L = 0.3$. Find $L$, $V$ and the balance line.', a: '$F = 1.3L$, so $L = 7.69$ kmol/h and $V = 2.31$ kmol/h. Line: $y_A = 1.72 - 3.33x_A$, which intersects the equilibrium curve at $x_A = 0.35$, $y_A = 0.55$. [exercise_01_solutions.pdf, Oppg. 5b–c]' },
    { id: 't2', q: 'Same drum, feed raised to 15 kmol/h at the same ratio. New flows and compositions?', a: '$L = 11.54$ kmol/h, $V = 3.46$ kmol/h. Compositions are unchanged, because the balance line is the same. [exercise_01_solutions.pdf, Oppg. 5d]' },
    { id: 't3', q: 'Benzene/toluene at 200 kPa, $F = 10$ kmol/h, $z_A = 0.4$. The diagram gives $x_A = 0.37$, $y_A = 0.58$. Find $V$ and $L$.', a: '$4 = 0.37(10 - V) + 0.58V$, so $V = 1.43$ kmol/h and $L = 8.57$ kmol/h. The graphical lever rule gives 1.47 and 8.53. [Week 1, p. 70–73]' },
    { id: 't4', q: "Why doesn't the drum in flash distillation need a heater?", a: 'The feed is already hot and pressurised. Dropping the pressure in the valve lowers the boiling point, so part of the feed evaporates instantly. [Week 1, p. 61]' },
    { id: 't5', q: 'Ethanol–water flash, $F = 15$ kmol/h, $z_A = 0.3$. At 87.62 °C, $x_A = 0.08$ and $y_A = 0.41$. Find $L$ and $V$.', a: '$L = F\\dfrac{z_A - y_A}{x_A - y_A} = 15 \\cdot \\dfrac{0.3 - 0.41}{0.08 - 0.41} = 5$ kmol/h, and $V = 10$ kmol/h. [exercise_01_solutions.pdf, Oppg. 6a]' },
  ],
  equations: [
    {
      id: 'total',
      label: 'Total balance',
      tex: String.raw`\vc{F} = \vd{V} + \ve{L} \quad (= B + D)`,
      vars: [
        { sym: String.raw`\vc{F}`, desc: 'feed flow', unit: String.raw`\mathrm{kmol/h}\ (\text{or mol/s})` },
        { sym: String.raw`\vd{V}\ (D)`, desc: 'vapour / distillate flow', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\ve{L}\ (B)`, desc: 'liquid / bottoms flow', unit: String.raw`\mathrm{kmol/h}` },
      ],
      note: 'Steady state.',
      cite: `[${W1}, p. 58, 63]`,
      check: { status: 'verified', note: 'W1 p. 58 writes F = B + D; p. 63 writes F = V + L.' },
    },
    {
      id: 'comp',
      label: 'Component balance',
      tex: String.raw`\vf{z_A} \vc{F} = \vb{y_A} \vd{V} + \va{x_A} \ve{L}`,
      vars: [
        { sym: String.raw`\vf{z_A}`, desc: 'mole fraction of A in the feed', unit: '–' },
        { sym: String.raw`\vb{y_A}`, desc: 'mole fraction of A in the vapour', unit: '–' },
        { sym: String.raw`\va{x_A}`, desc: 'mole fraction of A in the liquid', unit: '–' },
      ],
      note: 'The only independent component balance for a binary.',
      cite: `[${W1}, p. 58–59]`,
      check: { status: 'verified', note: 'Matches W1 p. 58 ($z_A F = y_A D + x_A B$).' },
    },
    {
      id: 'line',
      label: 'Balance line (operating line of the flash)',
      tex: String.raw`\vb{y_A} = \frac{\vc{F}}{\vd{V}} \vf{z_A} - \frac{\ve{L}}{\vd{V}} \va{x_A}`,
      vars: [
        { sym: String.raw`\vc{F}/\vd{V}`, desc: 'feed-to-vapour ratio', unit: '–' },
        { sym: String.raw`\ve{L}/\vd{V}`, desc: 'liquid-to-vapour ratio (minus the slope)', unit: '–' },
      ],
      note: 'Straight line in the y–x diagram. Intersect it with the equilibrium curve.',
      cite: `[${W1}, p. 64; ${E1}, Oppg. 5c, eq. 11]`,
      check: { status: 'verified', note: 'W1 p. 64 writes $y_A = z_A F/V - x_A L/V$; same terms.' },
    },
    {
      id: 'eq',
      label: 'Equilibrium (constant α)',
      tex: String.raw`\vb{y_A} = \frac{\alpha\, \va{x_A}}{1 + (\alpha - 1)\, \va{x_A}}`,
      vars: [{ sym: String.raw`\alpha`, desc: 'relative volatility', unit: '–' }],
      note: 'Ideal, constant α. Use it instead of a diagram for the analytical solution. Combined with the balance line it gives a quadratic in $x_A$.',
      cite: `[${W1}, p. 60, 65–67; ${FS}, p. 1, eq. 8]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 8 and W1 p. 67.' },
    },
    {
      id: 'lever',
      label: 'Inverse lever rule',
      tex: String.raw`\vd{V} = \vc{F}\,\frac{\vf{z_A} - \va{x_A}}{\vb{y_A} - \va{x_A}}, \qquad \ve{L} = \vc{F}\,\frac{\vf{z_A} - \vb{y_A}}{\va{x_A} - \vb{y_A}}`,
      vars: [
        { sym: String.raw`\vf{z_A} - \va{x_A}`, desc: 'segment from liquid point to feed point (|ML|)', unit: String.raw`\text{– (or cm on the diagram)}` },
        { sym: String.raw`\vb{y_A} - \va{x_A}`, desc: 'full tie-line length (|LV|)', unit: String.raw`\text{– (or cm)}` },
      ],
      note: 'Derived by substituting $L = F - V$ into the component balance. Valid with compositions read off the diagram or measured as distances.',
      cite: `[${W1}, p. 72–73; ${E1}, Oppg. 6a, eq. 14]`,
      check: { status: 'verified', note: 'Matches the derivation on W1 p. 72.' },
    },
  ],
}

// ---- helpers ---------------------------------------------------------------
const frame = ({ x0 = 50, y0 = 16, w = 300, h = 300, xmin = 0, xmax = 1, ymin = 0, ymax = 1 }) => ({
  X: (v) => x0 + ((v - xmin) / (xmax - xmin)) * w,
  Y: (v) => y0 + h - ((v - ymin) / (ymax - ymin)) * h,
  x0, y0, w, h,
})
const poly = (pts) => pts.map((p) => p.join(',')).join(' ')
const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const range = (n) => Array.from({ length: n + 1 }, (_, i) => i / n)
const eqY = (a) => (x) => (a * x) / (1 + (a - 1) * x)

function AxesBox({ f, xl, yl, ticks = [0, 0.2, 0.4, 0.6, 0.8, 1] }) {
  return (
    <g>
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 8} y2={f.y0 + f.h} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 8} />
      {ticks.map((v) => (
        <g key={v}>
          <text x={f.X(v)} y={f.y0 + f.h + 17} textAnchor="middle" className="svg-sub">{v}</text>
          {v > 0 && <text x={f.x0 - 7} y={f.Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>}
        </g>
      ))}
      <Label x={f.x0 + f.w} y={f.y0 + f.h + 34} anchor="end" size={13}>{xl}</Label>
      <Label x={f.x0 + 6} y={f.y0 - 2} anchor="start" size={13}>{yl}</Label>
    </g>
  )
}

/** Physical root of (c − m x)(1 + (α−1)x) = αx. */
function intersect(phi, a, z) {
  const m = (1 - phi) / phi
  const c = z / phi
  const A = -m * (a - 1)
  const B = c * (a - 1) - m - a
  const C = c
  const D = Math.sqrt(B * B - 4 * A * C)
  const roots = Math.abs(A) < 1e-12 ? [-C / B] : [(-B + D) / (2 * A), (-B - D) / (2 * A)]
  return roots.find((r) => r >= 0 && r <= 1)
}

// ---- Visual 1: equilibrium distillation flowsheet --------------------------
function Flowsheet() {
  return (
    <Svg w={560} h={300} label="Equilibrium distillation: feed through heater into vessel; vapour to condenser, liquid out at the bottom">
      <Label x={20} y={140} anchor="start" t="var-c" size={14}>F, z_A</Label>
      <Arrow x1={20} y1={155} x2={110} y2={155} t="var-c" />
      <Box x={110} y={130} w={90} h={50} label="heater" t="muted" />
      <Arrow x1={200} y1={155} x2={250} y2={155} t="var-c" />
      <rect x={220} y={60} width={150} height={200} rx={8} style={st('definition', true, 1.8)} />
      <Box x={250} y={80} w={90} h={160} label="vessel" t="topic" />
      <Label x={295} y={276} size={12} t="definition">equilibrium: y_A ↔ x_A</Label>
      <Arrow x1={295} y1={80} x2={295} y2={30} t="var-d" />
      <Arrow x1={295} y1={30} x2={410} y2={30} t="var-d" />
      <Label x={355} y={22} size={13} t="var-d">D (= V), y_A</Label>
      <Box x={410} y={8} w={100} h={44} label="condenser" t="muted" />
      <Arrow x1={510} y1={30} x2={550} y2={30} t="var-d" />
      <Label x={545} y={66} anchor="end" size={12} t="muted">liquid distillate</Label>
      <Arrow x1={340} y1={220} x2={470} y2={220} t="var-e" />
      <Label x={470} y={210} anchor="end" size={13} t="var-e">B (= L), x_A</Label>
    </Svg>
  )
}

// ---- Visual 2: flash drum --------------------------------------------------
function FlashDrum() {
  return (
    <Svg w={520} h={260} label="Flash drum: hot pressurised feed through a valve into a drum; vapour out the top, liquid out the bottom">
      <Label x={10} y={118} anchor="start" t="var-c" size={13}>hot, pressurised feed</Label>
      <Arrow x1={10} y1={130} x2={150} y2={130} t="var-c" />
      {/* valve: bow-tie */}
      <polygon points="150,115 150,145 180,130" style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <polygon points="210,115 210,145 180,130" style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <Label x={180} y={170} size={12} t="trap">pressure ↓ →</Label>
      <Label x={180} y={186} size={12} t="trap">boiling point ↓</Label>
      <Arrow x1={210} y1={130} x2={290} y2={130} t="var-c" />
      <rect x={290} y={40} width={110} height={180} rx={40} style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2.5 }} />
      <rect x={292} y={150} width={106} height={68} rx={30} style={{ fill: `color-mix(in srgb, ${tone('topic')} 22%, var(--bg))` }} />
      <Label x={345} y={100} size={12} t="muted">drum</Label>
      <Arrow x1={345} y1={40} x2={345} y2={8} t="var-d" />
      <Label x={355} y={20} anchor="start" size={13} t="var-d">vapour</Label>
      <Arrow x1={400} y1={200} x2={500} y2={200} t="var-e" />
      <Label x={500} y={190} anchor="end" size={13} t="var-e">liquid</Label>
      <Label x={345} y={245} size={12} t="muted">no heating of the drum</Label>
    </Svg>
  )
}

// ---- Visual 3: graphical solution on y–x (Example 1) ------------------------
function GraphicalYx() {
  const f = frame({ x0: 50, y0: 24, w: 300, h: 300 })
  // schematic equilibrium curve chosen to pass through the slide's read point (0.77, 0.82)
  const aFit = (0.82 * (1 - 0.77)) / (0.77 * (1 - 0.82))
  const ys = range(60).map((x) => [f.X(x), f.Y(eqY(aFit)(x))])
  return (
    <Svg w={420} h={380} label="y–x diagram: balance line y = 1.6 − x intersecting the equilibrium curve at (0.77, 0.82)">
      <AxesBox f={f} xl="x_A (–)" yl="y_A (–)" />
      <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={st('muted', true, 1.5)} />
      <polyline points={poly(ys)} style={st('var-b')} />
      <line x1={f.X(0.6)} y1={f.Y(1)} x2={f.X(1)} y2={f.Y(0.6)} style={st('example', false, 2.5)} />
      <circle cx={f.X(0.8)} cy={f.Y(0.8)} r={5} style={{ fill: tone('var-f') }} />
      <Label x={f.X(0.8) + 2} y={f.Y(0.8) + 30} anchor="start" size={12} t="var-f">(z_A, z_A)</Label>
      <Label x={f.X(0.8) + 2} y={f.Y(0.8) + 45} anchor="start" size={12} t="var-f">= (0.8, 0.8)</Label>
      <circle cx={f.X(0.77)} cy={f.Y(0.82)} r={6} style={{ fill: 'none', stroke: tone('example'), strokeWidth: 2.5 }} />
      <Label x={f.X(0.77) - 10} y={f.Y(0.82) - 10} anchor="end" size={12} t="example">(0.77, 0.82)</Label>
      <Label x={f.X(1)} y={f.Y(0.56)} anchor="end" size={12} t="example">y_A = 1.6 − x_A</Label>
      <Label x={f.X(0.06)} y={f.Y(0.5)} anchor="start" size={12} t="muted">slope = −L/V</Label>
      <Label x={f.X(0.06)} y={f.Y(0.5) + 16} anchor="start" size={12} t="muted">intercept = z_A F/V</Label>
      <Label x={f.X(0.3)} y={f.Y(0.18)} anchor="start" size={12} t="var-b">equilibrium curve</Label>
    </Svg>
  )
}

// ---- Visual 4: inverse lever rule on T–x–y ----------------------------------
function LeverTxy() {
  const f = frame({ x0: 40, y0: 30, w: 460, h: 180, xmin: 0.25, xmax: 0.7 })
  const yT = 0.5
  const L = 0.37
  const Mz = 0.4
  const Vv = 0.58
  return (
    <Svg w={540} h={290} label="Tie line on a T–x–y diagram: L at 0.37, M at 0.40, V at 0.58, with lever arms">
      {/* schematic bubble / dew fragments */}
      <polyline points={poly([[f.X(0.25), f.Y(0.85)], [f.X(L), f.Y(yT)], [f.X(0.5), f.Y(0.12)]])} style={st('var-a')} />
      <polyline points={poly([[f.X(0.4), f.Y(0.95)], [f.X(Vv), f.Y(yT)], [f.X(0.7), f.Y(0.18)]])} style={st('var-b')} />
      <line x1={f.X(L)} y1={f.Y(yT)} x2={f.X(Vv)} y2={f.Y(yT)} style={st('ink', false, 2)} />
      <circle cx={f.X(L)} cy={f.Y(yT)} r={6} style={{ fill: tone('var-a') }} />
      <circle cx={f.X(Mz)} cy={f.Y(yT)} r={6} style={{ fill: tone('var-f') }} />
      <circle cx={f.X(Vv)} cy={f.Y(yT)} r={6} style={{ fill: tone('var-b') }} />
      <Label x={f.X(L) - 8} y={f.Y(yT) + 22} anchor="end" size={13} t="var-a">L: x_A = 0.37</Label>
      <Label x={f.X(Mz) + 4} y={f.Y(yT) - 12} anchor="start" size={13} t="var-f">M: z_A = 0.4</Label>
      <Label x={f.X(Vv) + 10} y={f.Y(yT) - 10} anchor="start" size={13} t="var-b">V: y_A = 0.58</Label>
      {/* distances */}
      <line x1={f.X(L)} y1={f.Y(yT) + 26} x2={f.X(Mz)} y2={f.Y(yT) + 26} style={st('var-d', false, 2)} />
      <Label x={(f.X(L) + f.X(Mz)) / 2} y={f.Y(yT) + 46} size={12} t="var-d">|ML| = 1 cm</Label>
      <line x1={f.X(Mz)} y1={f.Y(yT) + 60} x2={f.X(Vv)} y2={f.Y(yT) + 60} style={st('var-e', false, 2)} />
      <Label x={(f.X(Mz) + f.X(Vv)) / 2} y={f.Y(yT) + 80} size={12} t="var-e">|MV| = 5.8 cm</Label>
      <Label x={f.X(0.47)} y={f.Y(yT) + 110} size={13} t="var-d">V ∝ |ML| → V = 10 · 1/6.8 = 1.47 kmol/h</Label>
      <Label x={f.X(0.47)} y={f.Y(yT) + 130} size={13} t="var-e">L ∝ |MV| → L = 10 · 5.8/6.8 = 8.53 kmol/h</Label>
      <Label x={f.X(0.26)} y={f.Y(0.92)} anchor="start" size={12} t="muted">T</Label>
    </Svg>
  )
}

// ---- Interactive ------------------------------------------------------------
function FlashExplorer() {
  const [phi, setPhi] = useState(0.5)
  const [a, setA] = useState(1.8)
  const z = 0.8
  const F = 10
  const x = intersect(phi, a, z)
  const y = x == null ? null : z / phi - ((1 - phi) / phi) * x
  const f = frame({ x0: 60, y0: 20, w: 300, h: 300 })
  const lineY = (xx) => z / phi - ((1 - phi) / phi) * xx
  const pts = range(200).map((xx) => [xx, lineY(xx)]).filter(([, yy]) => yy >= 0 && yy <= 1)
  return (
    <Diagram
      title="Flash: balance line vs equilibrium curve"
      caption={String.raw`Balance line $y_A = \frac{F}{V} z_A - \frac{L}{V} x_A$ with $z_A = 0.8$, $F = 10$ kmol/h, against $y_A = \alpha x_A/(1+(\alpha-1)x_A)$. Start values $V/F = 0.5$, $\alpha = 1.8$ give $x_A = 0.75$, $y_A = 0.85$ (Example 2). The line always passes through $(z_A, z_A)$.`}
      cite={`[${W1}, p. 64–68]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><M>V/F</M> = <strong>{phi.toFixed(2)}</strong></span>
            <input type="range" min={0.05} max={0.95} step={0.01} value={phi} onChange={(e) => setPhi(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><M>\alpha</M> = <strong>{a.toFixed(2)}</strong></span>
            <input type="range" min={1.1} max={6} step={0.01} value={a} onChange={(e) => setA(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <V c="a"><M>x_A</M> = {x == null ? '—' : x.toFixed(2)}</V> · <V c="b"><M>y_A</M> = {y == null ? '—' : y.toFixed(2)}</V> ·{' '}
          <V c="d"><M>V</M> = {(phi * F).toFixed(2)}</V> kmol/h · <V c="e"><M>L</M> = {((1 - phi) * F).toFixed(2)}</V> kmol/h
        </p>
        <Svg w={420} h={370} label="Interactive y–x diagram with the flash balance line and equilibrium curve">
          <AxesBox f={f} xl="x_A (–)" yl="y_A (–)" />
          <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={st('muted', true, 1.5)} />
          <polyline points={poly(range(80).map((xx) => [f.X(xx), f.Y(eqY(a)(xx))]))} style={st('var-b')} />
          {pts.length > 1 && <polyline points={poly(pts.map(([xx, yy]) => [f.X(xx), f.Y(yy)]))} style={st('example')} />}
          <circle cx={f.X(z)} cy={f.Y(z)} r={4.5} style={{ fill: tone('var-f') }} />
          {x != null && (
            <g>
              <polyline points={`${f.X(x)},${f.Y(0)} ${f.X(x)},${f.Y(y)} ${f.X(0)},${f.Y(y)}`} style={st('muted', true, 1.2)} />
              <circle cx={f.X(x)} cy={f.Y(y)} r={6} style={{ fill: tone('example') }} />
            </g>
          )}
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="One stage: balances meet equilibrium">
        <MentalModel cite={`[${W1}, p. 54–64]`}>
          <T text="Distillation separates components because the vapour formed by boiling a liquid is richer in the more volatile component. Condense that vapour and boil it again, and it gets richer still [Week 1, p. 54–55]. Equilibrium distillation (likevektsdestillasjon) is the simplest continuous version: one feed goes in, and one vapour and one liquid product come out of a single vessel in equilibrium [Week 1, p. 57]." />
          <p>
            Two unknown flows and two unknown compositions are pinned down by two mass balances plus the equilibrium relation
            (a VLE diagram or <M>\alpha</M>) [Week 1, p. 58–60]. The component balance rearranges into a straight{' '}
            <V c="f">balance line</V> in the y–x diagram. Where that line cuts the <V c="b">equilibrium curve</V> is the answer
            [Week 1, p. 64]. Flash distillation is the same thing with a pressure drop: the hot, pressurised feed is let down
            through a valve, its boiling point drops, and part of it evaporates instantly, so the drum needs no heating [Week 1, p. 61].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="The equilibrium stage and the flash drum">
        <Columns>
          <Diagram title="Equilibrium distillation flowsheet" cite={`[${W1}, p. 57–58]`}
            caption="Feed F, z_A → heater → vessel. Vapour D (= V), y_A goes to the condenser; liquid B (= L), x_A leaves at the bottom. Outlet streams are in equilibrium.">
            <Flowsheet />
          </Diagram>
          <div>
            <Def term="Distillation" cite={`[${W1}, p. 54]`}>
              Separates components by their difference in liquid and vapour compositions. The vapour is made by heating and boiling the liquid, and all components are volatile and present in both phases.
            </Def>
            <Def term="Evaporation (vs distillation)" cite={`[${W1}, p. 56]`}>
              Used when one component is not volatile, e.g. seawater leaving NaCl behind.
            </Def>
            <Def term="Equilibrium distillation (likevektsdestillasjon)" cite={`[${W1}, p. 57]`}>
              Continuous, stationary process with one feed and two product streams. The liquid is heated to produce vapour, and distillate and bottoms are taken from the vessel. The distillate can be condensed into a liquid product.
            </Def>
          </div>
        </Columns>
        <Columns>
          <div>
            <Def term="Stream notation" cite={`[${W1}, p. 58, 63]`}>
              {String.raw`$F$, $D$, $B$ (or $F$, $V$, $L$) are the process flows, typically mol/s or kmol/h. $z_i$, $y_i$, $x_i$ are the feed, vapour and liquid mole fractions.`}
            </Def>
            <Def term="Independent balances" cite={`[${W1}, p. 58–59]`}>
              {String.raw`A binary system has two independent balances (total and one component). The third is dependent because $x_A + x_B = 1$, $y_A + y_B = 1$ and $z_A + z_B = 1$.`}
            </Def>
            <Def term="Equilibrium relation" cite={`[${W1}, p. 60]`}>
              {String.raw`The outlet liquid and vapour are in equilibrium, described by the VLE diagram or by $\alpha$.`}
            </Def>
          </div>
          <Diagram title="Flash drum" cite={`[${W1}, p. 61]`}
            caption="The pressure drop in the valve lowers the boiling point, so part of the hot feed evaporates instantly.">
            <FlashDrum />
          </Diagram>
        </Columns>
        <Def term="Flash distillation" cite={`[${W1}, p. 61]`}>
          The feed is heated to high temperature and pressure, and the pressure is reduced in a valve just before the drum. The boiling point falls and part of the feed evaporates instantly, so the drum contents need no heating.
        </Def>

        <Columns>
          <Diagram
            title="Graphical solution on the y–x diagram (Example 1)"
            caption={String.raw`Balance line $y_A = 1.6 - x_A$ (slope $-L/V = -1$) meets the equilibrium curve at (0.77, 0.82). Setting $x_A = z_A$ gives $y_A = z_A$, so the line passes through (0.8, 0.8) on the diagonal. The slide's curve is an image; the curve drawn here is schematic, shaped only to pass through the read-off point.`}
            cite={`[${W1}, p. 62–64]`}
          >
            <GraphicalYx />
          </Diagram>
          <Diagram
            title="Inverse lever rule on a T–x–y diagram (Example 3)"
            caption="Benzene/toluene at 200 kPa. The feed point M splits the tie line; each product is proportional to the opposite segment. Curve fragments are schematic."
            cite={`[${W1}, p. 69–73]`}
          >
            <LeverTxy />
          </Diagram>
        </Columns>
        <Def term="Inverse lever rule" cite={`[${W1}, p. 72–73]`}>
          {String.raw`The feed point $z_A$ divides the tie line between $x_A$ and $y_A$. Each product flow is proportional to the length of the **opposite** segment.`}
        </Def>
        <Gap>{String.raw`The Example 1 feed composition ($z_A = 0.8$) and $F$, $V$ values come from the slide's solution steps ($L = 10 - 5$, $y_A = 1.6 - x_A$). The figure with the given data (p. 62) is an image.`}</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="total" />
        <Eq id="comp" />
        <Eq id="line" />
        <Eq id="eq" />
        <FlashExplorer />
        <Eq id="lever" />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Analytical flash with α = 1.8"
          given={String.raw`Given $F = 10$ kmol/h, $V = 5$ kmol/h, feed liquid at boiling point, $z_A = 0.8$ (from $z_A F/V = 1.6$) and $\alpha_{AB} = 1.8$.`}
          steps={[
            { body: String.raw`Total balance: $L = F - V = 10 - 5 = 5$ kmol/h.` },
            { body: String.raw`Component balance: $z_A F = x_A L + y_A V$, so $y_A = \dfrac{z_A F}{V} - \dfrac{x_A L}{V} = 2 z_A - x_A$.` },
            { body: String.raw`Insert $z_A$: $y_A = 1.6 - x_A$.` },
            { body: String.raw`Equilibrium: $1.6 - x_A = \dfrac{\alpha x_A}{1 + (\alpha - 1) x_A}$.` },
            { body: String.raw`Multiply out: $(\alpha - 1)x_A^2 + (\alpha + 1 - 2\cdot 0.8(\alpha - 1))\,x_A - 2\cdot 0.8 = 0$, which gives $0.8x_A^2 + 1.52x_A - 1.6 = 0$.` },
            { body: String.raw`Quadratic formula: $x_A = 0.75$ or $x_A = -2.65$. Only $[0, 1]$ is physical, so $x_A = 0.75$.` },
            { body: String.raw`Vapour: $y_A = 1.6 - 0.75 = 0.85$.` },
            { body: String.raw`Compare with the graphical solution from a VLE diagram (Example 1): $x_A = 0.77$, $y_A = 0.82$. [Week 1, p. 64]` },
          ]}
          result={String.raw`$x_A = 0.75$, $y_A = 0.85$`}
          cite={`[${W1}, p. 62–68]`}
        />
        <FadedExample
          title="Flash with α = 3.1"
          given={String.raw`$F = 9$ kmol/h, $z_A = 0.45$, bottoms $L = 4$ kmol/h, $\alpha_{AB} = 3.1$.`}
          steps={[
            { title: 'Vapour flow from the total balance.', body: String.raw`$V = F - L = 5$ kmol/h.`, hidden: true },
            { title: 'Balance line.', body: String.raw`$y_A = \dfrac{F}{V} z_A - \dfrac{L}{V} x_A = 1.8 z_A - 0.8 x_A = 0.81 - 0.8x_A$.`, hidden: true },
            { body: String.raw`Set it equal to the equilibrium relation: $0.81 - 0.8x_A = \dfrac{3.1x_A}{1 + 2.1x_A}$.` },
            { title: 'Multiply out and collect terms.', body: String.raw`$x_A^2 + 1.309x_A - 0.482 = 0$.`, hidden: true },
            { title: 'Solve and keep the physical root.', body: String.raw`$x_A \approx 0.3$.`, hidden: true },
            { title: 'Vapour composition.', body: String.raw`$y_A = 0.57$.`, hidden: true },
            { title: 'The vapour is condensed in a separate vessel. Condensate composition?', body: String.raw`$x_{A,K} = 0.57$, the same as the vapour.`, hidden: true },
          ]}
          cite={`[exercise_01_eng.pdf, Exercise 7; ${E1}, Oppg. 7a–b]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Only two independent balances" cite={`[${W1}, p. 59]`}>
          {String.raw`Writing a second component balance adds nothing. **Source discrepancy:** slide p. 59 also has a typo in balance 3 ($y_B B$ should be $x_B B$) — confirmed in the PDF.`}
        </Trap>
        <Trap title="Throw away the non-physical root" cite={`[${W1}, p. 68]`}>
          {String.raw`The quadratic gives a negative or >1 root, and $x_A$ must be in $[0, 1]$.`}
        </Trap>
        <Trap title="Molar vs mass" cite={`[${W1}, p. 69–71; ${E1}, Oppg. 6a, eq. 15–17]`}>
          {String.raw`**Source discrepancy:** Example 3 asks for "mass flows" but is solved in kmol/h [Week 1, p. 69–71]. If a feed is given in mass %, convert to a mole fraction first. In exercise Oppg. 6, 52.28 wt % ethanol gives $z_A = 0.3$.`}
        </Trap>
        <Trap title="Composition is set by ratio, not size" cite={`[${E1}, Oppg. 5d, 6b]`}>
          {String.raw`Changing $F$ at a fixed $V/L$ ratio or fixed T leaves $x_A$ and $y_A$ unchanged. Only the flows scale.`}
        </Trap>
        <Trap title="Given T means compositions come first" cite={`[${E1}, Oppg. 6a; ${W1}, p. 70–71]`}>
          {String.raw`If the drum temperature and pressure are given, read $x_A$ and $y_A$ straight off the diagram, then use the lever rule for the flows.`}
        </Trap>
        <Trap title="Inverse, not direct" cite={`[${W1}, p. 72–73]`}>
          {String.raw`$V$ is proportional to the segment on the **liquid** side, $z_A - x_A$, not the vapour side.`}
        </Trap>
        <Trap title="Flash balances are not on the formula sheet" cite={`[${FS}, p. 1]`}>
          {String.raw`Only the equilibrium relation (eq. 8) is. Memorise $F = V + L$ and $z_A F = y_A V + x_A L$.`}
        </Trap>
        <Trap title="Notation switches" cite={`[${W1}, p. 58, 63]`}>
          {String.raw`Slides use $D/B$ for the equilibrium-distillation flowsheet and $V/L$ in the examples.`}
        </Trap>
      </Section>
    </>
  )
}
