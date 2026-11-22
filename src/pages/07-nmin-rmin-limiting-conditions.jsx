import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label, Curve,
  M, V, T, tone,
} from '../components'

const W2 = 'Week 2 - Multi-stage distillation with solutions.pdf'
const E2 = 'exercise_02_solutions.pdf'
const E2E = 'exercise_02_eng.pdf'
const PX = 'practice_exam_solutions.pdf'

export const meta = {
  title: 'Minimum stages, minimum reflux and limiting conditions',
  topic: 'distillation',
  examWeight: {
    level: 'high',
    note: 'Minimum reflux from a diagram on 1 of 2 practice exams (Practice exam 1, Ex. 2c); the same pinch logic is the minimum-absorbent question in Autumn 2022 Q3c',
  },
  examTasks: [
    'Practice exam 1, Ex. 2c: minimum reflux ratio from the feed line and equilibrium intersection (R_min = 1.5).',
    'Autumn 2022, Q3c: minimum water flow in an absorber. Same pinch idea, covered on page 11.',
  ],
  buildsOn: ['03-vle-diagrams-azeotropes', '05-column-balances-operating-lines', '06-feed-line-mccabe-thiele'],
  usedIn: ['11-kremser-minimum-absorbent-flow', '21-counter-current-extraction-design'],
  sources: [
    `[${W2}, p. 40–48]`,
    `[${E2E}, Exercise 3–4]`,
    `[${E2}, Oppg. 3a, 4a, Fig. 5, 8–9]`,
    `[${PX}, Ex. 2b–d]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'You raise the reflux ratio. Do you need more or fewer theoretical stages?', a: 'Fewer. [Week 2, p. 40]' },
    { id: 'p2', kind: 'pretest', q: 'At infinite reflux, where are the operating lines?', a: "On the diagonal $y = x$. Both slopes $L'/V'$ and $L''/V''$ approach 1. [Week 2, p. 41, 45]" },
    { id: 'p3', kind: 'pretest', q: 'How many stages do you need at minimum reflux?', a: 'Infinitely many. [Week 2, p. 42]' },
    { id: 't1', q: 'Acetone/water, $x_D = 0.90$, $q = 0.5$ (q-line $y = -x + 0.8$). The q-line meets the equilibrium curve at (0.09, 0.71). Find $R_{min}$.', a: '$\\dfrac{0.90 - 0.71}{0.90 - 0.09} = 0.234 = \\dfrac{R_{min}}{R_{min}+1}$, so $R_{min} \\approx 0.30$. [exercise_02_solutions.pdf, Oppg. 3a]' },
    { id: 't2', q: 'Isopropanol/water, $x_D = 0.63$. The operating line from $(x_D, x_D)$ is tangent to the equilibrium curve at (0.45, 0.575). Find $R_{min}$. Why not use the q-line intersection?', a: "$\\dfrac{0.63 - 0.575}{0.63 - 0.45} = 0.31$, so $R_{min} = 0.45$. A line to the q-line intersection would cross the equilibrium curve, which isn't allowed. [exercise_02_solutions.pdf, Oppg. 4a; Week 2, p. 48]" },
    { id: 't3', q: 'You change the feed from saturated liquid to saturated vapour at the same $x_F$. What happens to $N_{min}$?', a: "Nothing. $N_{min}$ doesn't depend on q or $x_F$. [Week 2, p. 41]" },
    { id: 't4', q: 'Give two reasons not to operate at minimum reflux, and the usual design range.', a: 'It needs an infinite number of stages (infinite capital cost), and it is not economically feasible. The usual range is 1.1–1.5 × $R_{min}$. [Week 2, p. 42–43]' },
    { id: 't5', q: "Benzene/toluene, α = 2.5, $x_D = 0.95$, $x_B = 0.10$. How do you find $N_{min}$, and what's the result?", a: 'Put both operating lines on the diagonal and step between the diagonal and the equilibrium curve: 5.8 theoretical stages (6 real). [Week 2, p. 44–45]' },
  ],
  equations: [
    {
      id: 'rect',
      label: 'Rectifier operating line (used at the limits)',
      tex: String.raw`\vb{y_A} = \frac{\vc{R}}{\vc{R}+1} \va{x_A} + \frac{1}{\vc{R}+1} \vf{x_D}`,
      vars: [
        { sym: String.raw`\vc{R}`, desc: 'reflux ratio', unit: '–' },
        { sym: String.raw`\vf{x_D}`, desc: 'distillate mole fraction', unit: '–' },
      ],
      note: 'As $R \\to \\infty$, the slope $R/(R+1) \\to 1$ and the intercept goes to 0, giving the diagonal.',
      cite: `[${W2}, p. 41]`,
      check: { status: 'verified', note: 'Matches W2 p. 41.' },
    },
    {
      id: 'rmin',
      label: 'Minimum reflux from the pinch point',
      tex: String.raw`\frac{\vc{R_{min}}}{\vc{R_{min}}+1} = \frac{\vf{x_D} - \vb{y'}}{\vf{x_D} - \va{x'}} \qquad\text{or}\qquad y(x=0) = \frac{\vf{x_D}}{\vc{R_{min}}+1}`,
      vars: [
        { sym: String.raw`\vc{R_{min}}`, desc: 'minimum reflux ratio', unit: '–' },
        { sym: String.raw`(\va{x'}, \vb{y'})`, desc: 'pinch point: q-line ∩ equilibrium (ideal), or tangent point (non-ideal)', unit: '–' },
        { sym: String.raw`\vf{x_D}`, desc: 'distillate mole fraction', unit: '–' },
      ],
      note: 'The slope form uses the line from $(x_D, x_D)$ to the pinch. The intercept form reads the y-axis crossing.',
      cite: `[${W2}, p. 42, 47; ${E2}, Oppg. 3a, eq. 18; Oppg. 4a, eq. 32]`,
      check: { status: 'verified', note: 'Slope form matches exercise 2 solution eq. 18 (read from the PDF page); intercept form matches W2 p. 47.' },
    },
    {
      id: 'design',
      label: 'Design reflux',
      tex: String.raw`\vc{R} = (1.1\text{–}1.5)\, \vc{R_{min}}`,
      vars: [{ sym: String.raw`\vc{R}`, desc: 'chosen operating reflux ratio', unit: '–' }],
      note: 'Usual economic range. Exercises sometimes prescribe their own factor, e.g. $2R_{min}$.',
      cite: `[${W2}, p. 43; ${E2E}, Exercise 3c]`,
      check: { status: 'verified', note: 'Matches W2 p. 43.' },
    },
  ],
}

// ---- helpers ---------------------------------------------------------------
const frame = ({ x0 = 50, y0 = 16, w = 300, h = 300 }) => ({ X: (v) => x0 + v * w, Y: (v) => y0 + h - v * h, x0, y0, w, h })
const poly = (pts) => pts.map((p) => p.join(',')).join(' ')
const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const range = (n) => Array.from({ length: n + 1 }, (_, i) => i / n)

function AxesBox({ f, xl = 'x (–)', yl = 'y (–)', ticks = [0, 0.2, 0.4, 0.6, 0.8, 1], bare }) {
  return (
    <g>
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 8} y2={f.y0 + f.h} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 8} />
      {!bare && ticks.map((v) => (
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

const SYS = { a: 2.5, xF: 0.45, xD: 0.95, xB: 0.1 }
const eqY = (a) => (x) => (a * x) / (1 + (a - 1) * x)
const eqX = (a) => (y) => y / (a - (a - 1) * y)

/** Stepping with q = 1. R = Infinity → total reflux (lines on the diagonal). */
function stepping(R, { a, xF, xD, xB } = SYS) {
  const total = !Number.isFinite(R)
  const s = total ? 1 : R / (R + 1)
  const b = total ? 0 : xD / (R + 1)
  const xi = xF
  const yi = s * xi + b
  const feasible = total || yi <= eqY(a)(xi)
  const m = (yi - xB) / (xi - xB)
  const op = (x) => (total ? x : x >= xi ? s * x + b : xB + m * (x - xB))
  const steps = []
  let frac = null
  if (feasible) {
    let y = xD
    let xp = xD
    for (let n = 1; n <= 80; n++) {
      const x = eqX(a)(y)
      const yn = x <= xB ? x : op(x)
      steps.push({ x0: xp, y, x, yn })
      if (x <= xB) {
        frac = n - 1 + (xp - xB) / (xp - x)
        break
      }
      y = yn
      xp = x
    }
  }
  return { s, b, xi, yi, feasible, steps, frac, total }
}

function StairSvg({ R, w = 420, label, showPinch }) {
  const f = frame({ x0: 56, y0: 22, w: 300, h: 300 })
  const { a, xF, xD, xB } = SYS
  const g = stepping(R)
  return (
    <Svg w={w} h={372} label={label}>
      <AxesBox f={f} />
      <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={st(g.total ? 'var-c' : 'muted', !g.total, g.total ? 2.5 : 1.3)} />
      <polyline points={poly(range(80).map((x) => [f.X(x), f.Y(eqY(a)(x))]))} style={st('var-b')} />
      {!g.total && (
        <>
          <line x1={f.X(xF)} y1={f.Y(xF)} x2={f.X(xF)} y2={f.Y(Math.min(1, g.yi + 0.1))} style={st('var-f', false, 2)} />
          <line x1={f.X(g.feasible ? xF : 0)} y1={f.Y(g.feasible ? g.yi : g.b)} x2={f.X(xD)} y2={f.Y(xD)} style={st('var-c')} />
          {g.feasible && <line x1={f.X(xB)} y1={f.Y(xB)} x2={f.X(xF)} y2={f.Y(g.yi)} style={st('var-e')} />}
          {!g.feasible && <Label x={f.X(0.55)} y={f.Y(0.15)} size={15} t="trap">infeasible: R &lt; R_min</Label>}
        </>
      )}
      {g.steps.map((s, i) => (
        <g key={i}>
          <line x1={f.X(s.x0)} y1={f.Y(s.y)} x2={f.X(s.x)} y2={f.Y(s.y)} style={st('example', false, 1.8)} />
          <line x1={f.X(s.x)} y1={f.Y(s.y)} x2={f.X(s.x)} y2={f.Y(s.yn)} style={st('example', false, 1.8)} />
        </g>
      ))}
      {showPinch && (
        <>
          <circle cx={f.X(xF)} cy={f.Y(eqY(a)(xF))} r={6} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2.5 }} />
          <Label x={f.X(xF) - 8} y={f.Y(eqY(a)(xF)) - 10} anchor="end" size={12} t="trap">pinch (0.45, 0.67)</Label>
        </>
      )}
      {[xB, xD].map((v) => <circle key={v} cx={f.X(v)} cy={f.Y(v)} r={4} style={{ fill: tone('ink') }} />)}
    </Svg>
  )
}

// ---- Visual: R_min ideal pinch ----------------------------------------------
function IdealPinch() {
  const f = frame({ x0: 56, y0: 22, w: 300, h: 300 })
  const { a, xF, xD } = SYS
  const yP = eqY(a)(xF)
  return (
    <Svg w={420} h={372} label="Minimum reflux: rectifier line from (0.95, 0.95) through the pinch (0.45, 0.67) to the y-axis at 0.42">
      <AxesBox f={f} />
      <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={st('muted', true, 1.3)} />
      <polyline points={poly(range(80).map((x) => [f.X(x), f.Y(eqY(a)(x))]))} style={st('var-b')} />
      <line x1={f.X(xF)} y1={f.Y(0)} x2={f.X(xF)} y2={f.Y(0.9)} style={st('var-f', false, 2)} />
      <Label x={f.X(xF) + 4} y={f.Y(0.05)} anchor="start" size={11} t="var-f">q = 1, x_F = 0.45</Label>
      <line x1={f.X(0)} y1={f.Y(0.42)} x2={f.X(xD)} y2={f.Y(xD)} style={st('var-c')} />
      <circle cx={f.X(xF)} cy={f.Y(yP)} r={6} style={{ fill: tone('trap') }} />
      <Label x={f.X(xF) + 10} y={f.Y(yP) + 22} anchor="start" size={12} t="trap">pinch (0.45, 0.67)</Label>
      <Label x={f.X(xF) + 10} y={f.Y(yP) + 38} anchor="start" size={12} t="trap">∞ stages near the pinch</Label>
      <circle cx={f.X(0)} cy={f.Y(0.42)} r={5} style={{ fill: tone('var-c') }} />
      <Label x={f.X(0) + 8} y={f.Y(0.42) - 10} anchor="start" size={12} t="var-c">0.42 → R_min = 1.26</Label>
      <circle cx={f.X(xD)} cy={f.Y(xD)} r={4} style={{ fill: tone('ink') }} />
    </Svg>
  )
}

// ---- Visual: non-ideal tangent pinch (schematic) ----------------------------
function TangentPinch() {
  const f = frame({ x0: 56, y0: 22, w: 300, h: 300 })
  const P = (x, y) => [f.X(x), f.Y(y)]
  // schematic isopropanol/water curve: chosen to touch the line from (0.63, 0.63) at (0.45, 0.575)
  const pts = [[0, 0], [0.03, 0.22], [0.07, 0.38], [0.12, 0.49], [0.2, 0.545], [0.3, 0.552], [0.38, 0.562], [0.45, 0.575], [0.52, 0.595], [0.6, 0.625], [0.68, 0.68], [0.8, 0.775], [0.9, 0.87], [1, 1]]
  const xD = 0.63
  const s = (0.63 - 0.575) / (0.63 - 0.45)
  const b = xD - s * xD
  return (
    <Svg w={420} h={372} label="Non-ideal case: wrong line to the q-line intersection crosses the curve; correct line is tangent at (0.45, 0.575)">
      <AxesBox f={f} />
      <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={st('muted', true, 1.3)} />
      <Curve points={pts.map(([x, y]) => P(x, y))} t="var-b" />
      <line x1={f.X(0.2)} y1={f.Y(0)} x2={f.X(0.2)} y2={f.Y(0.8)} style={st('var-f', false, 2)} />
      <Label x={f.X(0.2) + 4} y={f.Y(0.05)} anchor="start" size={11} t="var-f">q = 1, x_F = 0.20</Label>
      {/* wrong line */}
      <line x1={f.X(0.2)} y1={f.Y(0.545)} x2={f.X(xD)} y2={f.Y(xD)} style={st('trap', true, 2.5)} />
      <Label x={f.X(0.38)} y={f.Y(0.62)} size={18} t="trap">✗</Label>
      {/* correct tangent */}
      <line x1={f.X(0)} y1={f.Y(b)} x2={f.X(xD)} y2={f.Y(xD)} style={st('var-c')} />
      <circle cx={f.X(0.45)} cy={f.Y(0.575)} r={6} style={{ fill: 'none', stroke: tone('example'), strokeWidth: 2.5 }} />
      <Label x={f.X(0.47)} y={f.Y(0.5)} anchor="start" size={12} t="example">tangent (0.45, 0.575)</Label>
      <Label x={f.X(0.02)} y={f.Y(b) - 10} anchor="start" size={12} t="var-c">R_min = 0.45</Label>
      <circle cx={f.X(xD)} cy={f.Y(xD)} r={4} style={{ fill: tone('ink') }} />
      <Label x={f.X(xD) + 6} y={f.Y(xD) + 18} anchor="start" size={11}>(0.63, 0.63)</Label>
    </Svg>
  )
}

// ---- Visual: cost vs reflux (qualitative) -----------------------------------
function CostCurve() {
  const f = { x0: 50, y0: 20, w: 400, h: 220 }
  const X = (r) => f.x0 + ((r - 1) / 2) * f.w
  const Y = (c) => f.y0 + f.h - c * f.h
  const rs = Array.from({ length: 81 }, (_, i) => 1.02 + (i / 80) * 1.98)
  const cap = (r) => Math.min(0.95, 0.06 / (r - 0.97))
  const en = (r) => 0.1 + 0.33 * (r - 1)
  const tot = (r) => cap(r) + en(r)
  return (
    <Svg w={480} h={290} label="Qualitative cost against R/R_min: capital falls, energy rises, total has a minimum around 1.1–1.5">
      <rect x={X(1.1)} y={f.y0} width={X(1.5) - X(1.1)} height={f.h} style={{ fill: `color-mix(in srgb, ${tone('intuition')} 18%, var(--bg))` }} />
      <Label x={(X(1.1) + X(1.5)) / 2} y={f.y0 + 16} size={12} t="intuition">usual optimum</Label>
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 10} y2={f.y0 + f.h} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 6} />
      {[1, 1.5, 2, 2.5, 3].map((r) => <text key={r} x={X(r)} y={f.y0 + f.h + 17} textAnchor="middle" className="svg-sub">{r}</text>)}
      <Label x={f.x0 + f.w} y={f.y0 + f.h + 36} anchor="end" size={13}>R / R_min</Label>
      <Label x={f.x0 + 6} y={f.y0 - 2} anchor="start" size={13}>cost</Label>
      <polyline points={poly(rs.map((r) => [X(r), Y(cap(r))]))} style={st('var-a')} />
      <polyline points={poly(rs.map((r) => [X(r), Y(en(r))]))} style={st('var-d')} />
      <polyline points={poly(rs.map((r) => [X(r), Y(Math.min(1, tot(r)))]))} style={st('ink', true, 2.5)} />
      <Label x={X(2.9)} y={Y(cap(2.9)) - 8} anchor="end" size={12} t="var-a">capital (stages)</Label>
      <Label x={X(2.98)} y={Y(en(2.98)) + 34} anchor="end" size={12} t="var-d">energy (reboiler duty)</Label>
      <Label x={X(2.3)} y={Y(Math.min(1, tot(2.3))) - 10} anchor="end" size={12}>total</Label>
    </Svg>
  )
}

// ---- Interactive ------------------------------------------------------------
function RminExplorer() {
  const [R, setR] = useState(1.5)
  const [inf, setInf] = useState(false)
  const Rv = inf ? Infinity : R
  const g = stepping(Rv)
  const rminPos = ((1.26 - 0.8) / (8 - 0.8)) * 100
  return (
    <Diagram
      title="Reflux ratio between the limits"
      caption={String.raw`Benzene/toluene, $\alpha = 2.5$, $x_F = 0.45$ (q = 1), $x_D = 0.95$, $x_B = 0.10$ [Week 2, p. 44–47]. Below $R_{min} = 1.26$ the operating-line intersection lies above the equilibrium curve. "R → ∞" puts both lines on the diagonal: the constant-α stepping gives ≈ 5.7; the slide reads 5.8 graphically.`}
      cite={`[${W2}, p. 44–47]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="c"><M>R</M></V> = <strong>{inf ? '∞' : R.toFixed(2)}</strong></span>
            <input type="range" min={0.8} max={8} step={0.01} value={R} onChange={(e) => { setInf(false); setR(Number(e.target.value)) }} />
            <span style={{ position: 'relative', display: 'block', height: 16, fontSize: 11 }}>
              <span style={{ position: 'absolute', left: `${rminPos}%`, transform: 'translateX(-50%)', color: tone('trap') }}>▲ R_min = 1.26</span>
            </span>
          </label>
        </div>
        <p style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
          <button type="button" className="reveal" onClick={() => setInf(true)}>R → ∞ (total reflux)</button>
          {g.feasible ? (
            <span>
              Steps: <strong>{g.steps.length}</strong> (≈ {g.frac?.toFixed(2)} theoretical){inf && ' — this is N_min'}
            </span>
          ) : (
            <strong style={{ color: tone('trap') }}>Infeasible: R below R_min.</strong>
          )}
        </p>
        <StairSvg R={Rv} label="Interactive McCabe–Thiele for benzene/toluene with variable reflux" />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Trade stages against reflux">
        <MentalModel cite={`[${W2}, p. 40–43]`}>
          <T text="For a given separation you can trade stages against reflux. Many stages with little reflux, or few stages with lots of reflux, both work [Week 2, p. 40]. The two extremes bound the design." />
          <p>
            At total (infinite) reflux, the operating lines collapse onto the diagonal, as far from the equilibrium curve as they can
            get. Each step is then as large as possible, which gives the <V c="a">minimum number of stages</V>, independent of feed
            composition and q [Week 2, p. 41]. At <V c="c">minimum reflux</V>, the operating lines move toward the equilibrium curve
            until they touch it at a pinch point. The steps there shrink to zero, so you need infinitely many stages, but the internal
            flows and reboiler duty are at their lowest [Week 2, p. 42]. Neither extreme is affordable: stages cost capital and reflux
            costs energy. Real designs sit at about 1.1–1.5 × <M>{String.raw`R_{min}`}</M> [Week 2, p. 43].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="The two limits and the pinch">
        <Diagram
          title="Same separation, two reflux ratios"
          caption={String.raw`Higher R → fewer stages → lower capital cost, higher energy cost. Same equilibrium curve (benzene/toluene, α = 2.5), $x_F = 0.45$ (q = 1), $x_D = 0.95$, $x_B = 0.10$. Left R = 5.0, right R = 1.5.`}
          cite={`[${W2}, p. 40]`}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', width: '100%' }}>
            <div style={{ flex: '1 1 260px', maxWidth: 420, textAlign: 'center' }}>
              <StairSvg R={5} label="McCabe–Thiele at R = 5" />
              <div>R = 5.0: {stepping(5).steps.length} steps</div>
            </div>
            <div style={{ flex: '1 1 260px', maxWidth: 420, textAlign: 'center' }}>
              <StairSvg R={1.5} label="McCabe–Thiele at R = 1.5" />
              <div>R = 1.5: {stepping(1.5).steps.length} steps</div>
            </div>
          </div>
        </Diagram>
        <Def term="Reflux–stages trade-off" cite={`[${W2}, p. 40]`}>
          Infinitely many (R, N) combinations achieve one separation. A larger R needs fewer stages. More stages mean higher capital cost (larger column, more material). Higher reflux means higher operating cost (larger internal flows, more liquid to evaporate).
        </Def>

        <Columns>
          <Diagram
            title={String.raw`Total reflux → $N_{min}$`}
            caption="Operating lines on the diagonal; step between curve and diagonal from (0.95, 0.95) to x ≤ 0.10. Slide result: 5.8 theoretical stages (6 real). x_F and q don't appear."
            cite={`[${W2}, p. 41, 44–45]`}
          >
            <StairSvg R={Infinity} label="Total reflux stepping between equilibrium curve and diagonal" />
          </Diagram>
          <div>
            <Def term={String.raw`Minimum number of stages ($N_{min}$)`} cite={`[${W2}, p. 41, 45]`}>
              Needed when the reflux is infinitely large. Both operating-line slopes approach 1, so the lines lie on the diagonal. Neither $x_F$ nor q influences the result.
            </Def>
            <Def term={String.raw`Minimum reflux ($R_{min}$)`} cite={`[${W2}, p. 42]`}>
              {String.raw`Internal flows and reboil duty are at their lowest, and an infinite number of stages is required. The operating lines intersect the feed line and the equilibrium line at the same point. $R_{min}$ follows from the slope (or intercept) of that operating line.`}
            </Def>
            <Def term="Pinch point, ideal case" cite={`[${W2}, p. 47; ${E2}, Oppg. 3a]`}>
              The intersection of the q-line with the equilibrium curve.
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Minimum reflux, ideal pinch (Example 5)" cite={`[${W2}, p. 42, 46–47]`}
            caption="Vertical feed line at x = 0.45 meets the equilibrium curve at about (0.45, 0.67). The rectifier line through that pinch hits the y-axis at 0.42 → R_min = 1.26.">
            <IdealPinch />
          </Diagram>
          <Diagram title="Non-ideal tangent pinch (isopropanol/water)" cite={`[${W2}, p. 48; ${E2}, Oppg. 4a, Fig. 8–9]`}
            caption="x_D = 0.63, x_F = 0.20, q = 1. The dashed line to the q-line/equilibrium intersection crosses the curve (✗). The correct line from (0.63, 0.63) is tangent at (0.45, 0.575) → R_min = 0.45. Curve shape schematic; only the quoted points are from the solution.">
            <TangentPinch />
          </Diagram>
        </Columns>
        <Def term="Pinch point, non-ideal case" cite={`[${W2}, p. 48; ${E2}, Oppg. 4a]`}>
          {"The operating line can't cross the equilibrium line. If the line through the q-line/equilibrium intersection would cross the curve, make it steeper until it **touches** (tangent to) the equilibrium curve."}
        </Def>

        <Columns>
          <Diagram title="Cost vs reflux (qualitative)" cite={`[${W2}, p. 40, 43]`}
            caption="Built from the slide text only: more stages raise capital cost, more reflux raises energy cost; the optimum is usually 1.1–1.5 × R_min. No numbers on the cost axis.">
            <CostCurve />
          </Diagram>
          <Def term="Economic optimum" cite={`[${W2}, p. 43]`}>
            {String.raw`Operating at $R_{min}$ or $N_{min}$ is not feasible because of the costs. The optimum is usually $1.1$–$1.5 \times R_{min}$.`}
          </Def>
        </Columns>
        <Gap>{String.raw`No analytical equation for $N_{min}$ (e.g. Fenske) is in the slides, exercises or formula sheet. $N_{min}$ is found graphically only.`}</Gap>
        <Gap>The cost-vs-reflux curve is not drawn in the files. The visual is built from the text on Week 2, p. 40 and 43.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="rect" />
        <Eq id="rmin" />
        <Eq id="design" />
        <RminExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Minimum reflux for benzene/toluene, liquid feed"
          given={String.raw`$F = 100$ kmol/h, $x_F = 0.45$, $x_D = 0.95$, $x_B = 0.10$, α = 2.5, feed liquid at bubbling point.`}
          steps={[
            { body: String.raw`Feed condition: liquid at bubbling point, so $q = 1$ and the feed line is vertical at $x = 0.45$.` },
            { body: String.raw`Pinch on the equilibrium curve: $y' = \dfrac{2.5\cdot 0.45}{1 + 1.5\cdot 0.45} = 0.67$, so the pinch is $(0.45, 0.67)$.` },
            { body: String.raw`Draw the rectifier OL from $(0.95, 0.95)$ through the pinch to the y-axis.` },
            { body: String.raw`Read the intercept: $0.42 = \dfrac{x_D}{1+R_{min}} = \dfrac{0.95}{1+R_{min}}$.` },
            { body: String.raw`Solve: $R_{min} = 1.26$.` },
            { body: String.raw`Check with the slope form: $\dfrac{0.95 - 0.67}{0.95 - 0.45} = 0.557 = \dfrac{R_{min}}{R_{min}+1}$, so $R_{min} = 1.26$. ✓` },
          ]}
          result={String.raw`$R_{min} = 1.26$`}
          cite={`[${W2}, p. 46–47]`}
        />
        <FadedExample
          title="Minimum reflux from a given diagram"
          given={String.raw`Ethyl acetate/cyclohexane, $x_D = 0.5$, liquid feed at bubbling point (feed line C). Line C meets the equilibrium curve at C = (0.2, 0.32).`}
          steps={[
            { body: 'Pinch point = intersection of the chosen feed line with the equilibrium curve: (0.2, 0.32).' },
            { title: String.raw`Slope of the rectifier OL from $(x_D, x_D) = (0.5, 0.5)$ to the pinch.`, body: String.raw`$\dfrac{0.5 - 0.32}{0.5 - 0.2} = 0.6$.`, hidden: true },
            { title: String.raw`Set the slope equal to $R/(R+1)$ and solve.`, body: String.raw`$0.6 = R_{min}/(R_{min}+1)$, so $R_{min} = 1.5$.`, hidden: true },
            { title: String.raw`The exam then uses $R = 2.1$. What multiple of $R_{min}$ is that?`, body: '$2.1/1.5 = 1.4$, inside the usual 1.1–1.5 range.', hidden: true },
          ]}
          cite={`[${PX}, Ex. 2c–d; ${W2}, p. 43]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title={String.raw`The slope is $R/(R+1)$, not R`} cite={`[${PX}, Ex. 2c]`}>
          {String.raw`The exam's slope 0.6 means $R_{min} = 1.5$, not 0.6.`}
        </Trap>
        <Trap title="Check for a tangent pinch" cite={`[${W2}, p. 48; ${E2}, Oppg. 4a]`}>
          {String.raw`For non-ideal curves, the line to the q-line intersection may cross the equilibrium curve. Then the pinch is the tangent point, and $R_{min}$ is larger.`}
        </Trap>
        <Trap title={String.raw`The feed line matters for $R_{min}$ but not for $N_{min}$`} cite={`[${W2}, p. 41, 47]`}>
          {String.raw`$N_{min}$ is independent of $x_F$ and q. $R_{min}$ depends on both through the pinch.`}
        </Trap>
        <Trap title="Use the right feed line" cite={`[${PX}, Ex. 2b–c]`}>
          In multi-option questions, pick the q-line first (page 06). The pinch is **that** line&apos;s intersection with the equilibrium curve.
        </Trap>
        <Trap title={String.raw`$N_{min}$ is theoretical`} cite={`[${W2}, p. 45]`}>
          5.8 theoretical stages means 6 real stages.
        </Trap>
        <Trap title="Minimum reflux means minimum reboiler duty, not minimum cost" cite={`[${W2}, p. 42–43]`}>
          It needs infinite stages and is never the design point.
        </Trap>
        <Trap title={String.raw`Read $(x', y')$ carefully`} cite={`[${E2}, Oppg. 3a]`}>
          {String.raw`In a two-phase feed problem the pinch is on the sloped q-line, e.g. (0.09, 0.71) for $q = 0.5$, not at $x_F$.`}
        </Trap>
      </Section>
    </>
  )
}
