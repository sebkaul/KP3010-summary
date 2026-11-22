import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W2 = 'Week 2 - Multi-stage distillation with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E2 = 'exercise_02_solutions.pdf'
const E2E = 'exercise_02_eng.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Feed line (q-line) and McCabe–Thiele stepping',
  topic: 'distillation',
  examWeight: {
    level: 'high',
    note: 'Feed line, feed stage, stripper flows and reboiler in Q2 on 2 of 2 practice exams (Practice exam 1 Ex. 2b, 2d–e; Autumn 2022 Q2a.3–4, Q2b)',
  },
  examTasks: [
    'Practice exam 1, Ex. 2b: pick the correct feed line for a liquid at bubbling point.',
    "Practice exam 1, Ex. 2d: internal stripper flows for a liquid feed (L'' = 85.2, V'' = 37.2 kmol/h).",
    'Practice exam 1, Ex. 2e: reboiler vapour composition (±0.23) and reboiler duty (314.8 kW).',
    'Autumn 2022, Q2a.3: feed stage from a McCabe–Thiele diagram (4th from the top).',
    'Autumn 2022, Q2a.4: liquid fraction of the feed from the feed-line slope (q = 0.5).',
    'Autumn 2022, Q2b: reboiler stage subtracted before computing column height (height itself on pages 14 and 17).',
  ],
  buildsOn: ['03-vle-diagrams-azeotropes', '05-column-balances-operating-lines'],
  usedIn: ['07-nmin-rmin-limiting-conditions', '14-column-height-pressure-drop', '17-plate-murphree-efficiency'],
  sources: [
    `[${W2}, p. 29–39]`,
    `[${FS}, p. 2, eq. 11–14]`,
    `[${E2E}, Exercise 2–4]`,
    `[${E2}, Oppg. 1c, 2b–d, 3b–c, 4b–d]`,
    `[${PX}, Ex. 2b, 2d–e]`,
    `[${PX2}, Q2a.3–4, Q2b]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'The feed is a liquid at its boiling point. What is q, and what does the feed line look like?', a: '$q = 1$, and the feed line is vertical through $(x_F, x_F)$. [Week 2, p. 30; practice_exam_solutions.pdf, Ex. 2b]' },
    { id: 'p2', kind: 'pretest', q: 'McCabe–Thiele gives 6 theoretical stages with a partial reboiler. How many trays are in the column?', a: '5. The reboiler is itself an equilibrium stage. [Week 2, p. 38]' },
    { id: 'p3', kind: 'pretest', q: 'While stepping down from $x_D$, when do you switch from the rectifier to the stripper operating line?', a: 'After you pass the feed point, i.e. the intersection of the feed line with the operating lines. [Week 2, p. 36]' },
    { id: 't1', q: 'For $q = 0.7$, write the feed line.', a: '$y = -2.33x + 3.33x_F$. [Week 2, p. 34]' },
    { id: 't2', q: 'A feed line passes through (0.5, 0.7) and (0.6, 0.6). What is q?', a: 'Slope $= -1 = -q/(1-q)$, so $q = 0.5$: half the feed is liquid. [practice exam 2 solutions.pdf, Q2a.4]' },
    { id: 't3', q: "Isopropanol/water, $F = 200$ kmol/h, $q = 1$, $D = 61.3$, $B = 138.7$ kmol/h, $R = 0.8$. Find $L'$, $L''$, $V''$ and $V'$.", a: "$L' = 49.04$, $L'' = L' + F = 249.04$, $V'' = L'' - B = 110.34$, and $V' = V'' = 110.34$ kmol/h. [exercise_02_solutions.pdf, Oppg. 4c]" },
    { id: 't4', q: 'Same column: $y_B = 0.12$ at $x_B = 0.01$, $\\Delta H_{vap}$ isopropanol 39.85 kJ/mol, water 41.38 kJ/mol. Reboiler duty?', a: '$\\Delta H_{mix} = 0.12\\cdot 39.85 + 0.88 \\cdot 41.38 = 41.2$ kJ/mol. $Q = (110.34/3.6)\\cdot 41.2 \\approx 1.26$ MW. [exercise_02_solutions.pdf, Oppg. 4d]' },
    { id: 't5', q: 'The McCabe–Thiele staircase for that column gives 6.8 theoretical stages. How many are in the column, and where is the feed?', a: '5.8 in the column (the reboiler is one stage). Feed on stage 5. [exercise_02_solutions.pdf, Oppg. 4b]' },
  ],
  equations: [
    {
      id: 'feedbal',
      label: 'Feed-section flow balances',
      tex: String.raw`\ve{L''} = \ve{L'} + \vc{q}F, \qquad \vd{V'} = \vd{V''} + (1-\vc{q})F`,
      vars: [
        { sym: String.raw`\ve{L'}, \vd{V'}`, desc: 'rectifier liquid and vapour flow', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\ve{L''}, \vd{V''}`, desc: 'stripper liquid and vapour flow', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`F`, desc: 'feed flow', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\vc{q}`, desc: 'liquid fraction of the feed', unit: '–' },
      ],
      note: 'Constant molar flows in each section.',
      cite: `[${W2}, p. 29–30; ${FS}, p. 2, eq. 13–14]`,
      check: { status: 'verified', note: 'Matches W2 p. 30 and formula sheet eq. 13–14.' },
    },
    {
      id: 'qdef',
      label: 'q (thermal definition)',
      tex: String.raw`\vc{q} = \frac{\text{heat required to vaporize 1 mol of feed}}{\text{heat required to vaporize 1 mol of liquid}}`,
      vars: [{ sym: String.raw`\vc{q}`, desc: 'feed condition: 1 for saturated liquid, 0 for saturated vapour, between for a partially evaporated mixture', unit: '–' }],
      cite: `[${W2}, p. 30]`,
      check: { status: 'verified', note: 'Matches W2 p. 30.' },
    },
    {
      id: 'qline',
      label: 'Feed line (q-ligning)',
      tex: String.raw`\vb{y} = -\frac{\vc{q}}{1-\vc{q}}\, \va{x} + \frac{1}{1-\vc{q}}\, \vf{x_F}`,
      vars: [
        { sym: String.raw`\vb{y}, \va{x}`, desc: 'vapour and liquid mole fraction (general coordinates, not tray-indexed)', unit: '–' },
        { sym: String.raw`\vf{x_F}`, desc: 'feed mole fraction of the light component', unit: '–' },
      ],
      note: 'Derived by subtracting the stripper balance from the rectifier balance, written for general $(x, y)$, and using $Fx_F = Dx_D + Bx_B$ and the feed-section balances. Passes through $(x_F, x_F)$.',
      cite: `[${W2}, p. 31; ${FS}, p. 2, eq. 12; ${E2}, Oppg. 2c, eq. 10–15]`,
      check: { status: 'verified', note: 'Matches W2 p. 31 (final line) and formula sheet eq. 12.' },
    },
    {
      id: 'qslope',
      label: 'q from the slope of a drawn feed line',
      tex: String.raw`\text{slope} = -\frac{\vc{q}}{1-\vc{q}} \;\Rightarrow\; \vc{q} = \frac{-\text{slope}}{1 - \text{slope}}`,
      vars: [{ sym: String.raw`\text{slope}`, desc: 'slope of the feed line read from two points on it', unit: '–' }],
      note: 'Example: slope −1 gives $q = 0.5$.',
      cite: `[${PX2}, Q2a.4]`,
      check: { status: 'verified', note: 'Autumn 2022 Q2a.4 solution: slope −1 from (0.5, 0.7) and (0.6, 0.6) → q = 0.5.' },
    },
    {
      id: 'duty',
      label: 'Reboiler duty',
      tex: String.raw`Q = \vd{V''}\,\Delta H_{vap,M}, \qquad \Delta H_{vap,M} = \vb{y_B}\,\Delta H_{vap,A} + (1 - \vb{y_B})\,\Delta H_{vap,B}`,
      vars: [
        { sym: String.raw`Q`, desc: 'reboiler heat duty', unit: String.raw`\mathrm{kW}\ (= \mathrm{kJ/s})` },
        { sym: String.raw`\vd{V''}`, desc: 'vapour flow produced in the reboiler', unit: String.raw`\mathrm{mol/s}\ (\text{convert from kmol/h})` },
        { sym: String.raw`\vb{y_B}`, desc: 'light-component fraction in the reboiler vapour, read from VLE at $x_B$', unit: '–' },
        { sym: String.raw`\Delta H_{vap,i}`, desc: 'enthalpy of evaporation of component $i$', unit: String.raw`\mathrm{kJ/mol}` },
      ],
      note: 'Mixture enthalpy weighted by the **vapour** composition.',
      cite: `[${PX}, Ex. 2e; ${E2}, Oppg. 4d]`,
      check: { status: 'verified', note: 'Practice exam 1 Ex. 2e solution uses 0.23·32 + 0.77·30 = 30.46 kJ/mol and 37.2 kmol/h → 314.8 kW.' },
    },
  ],
}

// ---- helpers ---------------------------------------------------------------
const frame = ({ x0 = 50, y0 = 16, w = 300, h = 300 }) => ({
  X: (v) => x0 + v * w,
  Y: (v) => y0 + h - v * h,
  x0, y0, w, h,
})
const poly = (pts) => pts.map((p) => p.join(',')).join(' ')
const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const range = (n) => Array.from({ length: n + 1 }, (_, i) => i / n)

function AxesBox({ f, xl = 'x (–)', yl = 'y (–)', ticks = [0, 0.2, 0.4, 0.6, 0.8, 1], small }) {
  return (
    <g>
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 8} y2={f.y0 + f.h} head={small ? 7 : 10} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 8} head={small ? 7 : 10} />
      {!small && ticks.map((v) => (
        <g key={v}>
          <text x={f.X(v)} y={f.y0 + f.h + 17} textAnchor="middle" className="svg-sub">{v}</text>
          {v > 0 && <text x={f.x0 - 7} y={f.Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>}
        </g>
      ))}
      {!small && <Label x={f.x0 + f.w} y={f.y0 + f.h + 34} anchor="end" size={13}>{xl}</Label>}
      {!small && <Label x={f.x0 + 6} y={f.y0 - 2} anchor="start" size={13}>{yl}</Label>}
    </g>
  )
}

/** McCabe–Thiele geometry for constant α. */
function mccabe({ R, q, a, xF, xD, xB }) {
  const eqY = (x) => (a * x) / (1 + (a - 1) * x)
  const eqX = (y) => y / (a - (a - 1) * y)
  const s = R / (R + 1)
  const b = xD / (R + 1)
  const xi = q >= 0.999 ? xF : (xF / (1 - q) - b) / (s + q / (1 - q))
  const yi = s * xi + b
  const feasible = yi <= eqY(xi) && xi > xB && xi < xD
  const m = (yi - xB) / (xi - xB)
  const rect = (x) => s * x + b
  const strip = (x) => xB + m * (x - xB)
  const steps = []
  let feed = null
  let frac = null
  if (feasible) {
    let y = xD
    let xp = xD
    for (let n = 1; n <= 60; n++) {
      const x = eqX(y)
      const yNext = x >= xi ? rect(x) : strip(x)
      steps.push({ x0: xp, y, x, yNext: x <= xB ? x : yNext })
      if (feed == null && x < xi) feed = n
      if (x <= xB) {
        frac = n - 1 + (xp - xB) / (xp - x)
        break
      }
      y = yNext
      xp = x
    }
  }
  return { eqY, xi, yi, feasible, rect, strip, steps, feed, frac, b }
}

function McCabeSvg({ p, layers = 5, small, w = 420 }) {
  const sz = small ? 150 : 300
  const f = frame({ x0: small ? 14 : 56, y0: small ? 12 : 20, w: sz, h: sz })
  const g = mccabe(p)
  const { xF, xD, xB, q } = p
  // q-line endpoints within the unit box
  let qA, qB
  if (q >= 0.999) {
    qA = [xF, xF]
    qB = [xF, Math.min(1, g.eqY(xF) + 0.08)]
  } else {
    const slope = -q / (1 - q)
    const c = xF / (1 - q)
    const xEnd = q <= 0.001 ? Math.min(1, g.xi - 0.12) : Math.max(0, Math.min(1, (1 - c) / slope))
    qA = [xF, xF]
    qB = q <= 0.001 ? [xEnd, xF] : [Math.max(xEnd, g.xi - 0.08), c + slope * Math.max(xEnd, g.xi - 0.08)]
  }
  const H = small ? 175 : 370
  return (
    <Svg w={small ? 180 : w} h={H} label="McCabe–Thiele diagram">
      <AxesBox f={f} small={small} />
      <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={st('muted', true, 1.3)} />
      <polyline points={poly(range(80).map((x) => [f.X(x), f.Y(g.eqY(x))]))} style={st('var-b', false, small ? 2 : 2.5)} />
      {layers >= 2 && <line x1={f.X(0)} y1={f.Y(g.b)} x2={f.X(xD)} y2={f.Y(xD)} style={st('var-c', false, small ? 1.8 : 2.5)} />}
      {layers >= 3 && <line x1={f.X(qA[0])} y1={f.Y(qA[1])} x2={f.X(qB[0])} y2={f.Y(qB[1])} style={st('var-f', false, small ? 1.8 : 2.5)} />}
      {layers >= 4 && g.feasible && <line x1={f.X(xB)} y1={f.Y(xB)} x2={f.X(g.xi)} y2={f.Y(g.yi)} style={st('var-e', false, small ? 1.8 : 2.5)} />}
      {layers >= 5 && g.steps.map((s, i) => (
        <g key={i}>
          <line x1={f.X(s.x0)} y1={f.Y(s.y)} x2={f.X(s.x)} y2={f.Y(s.y)} style={st(i + 1 === g.feed ? 'trap' : 'example', false, small ? 1.4 : 2)} />
          <line x1={f.X(s.x)} y1={f.Y(s.y)} x2={f.X(s.x)} y2={f.Y(s.yNext)} style={st(i + 1 === g.feed ? 'trap' : 'example', false, small ? 1.4 : 2)} />
          {!small && <Label x={f.X(s.x) - 6} y={f.Y(s.y) - 5} anchor="end" size={11} t={i + 1 === g.feed ? 'trap' : 'example'}>{i + 1}</Label>}
        </g>
      ))}
      {!small && layers >= 5 && g.steps.length > 0 && (
        <Label x={f.X(g.steps[g.steps.length - 1].x0) + 6} y={f.Y((g.steps[g.steps.length - 1].y + g.steps[g.steps.length - 1].x) / 2)} anchor="start" size={11} t="example">← partial reboiler</Label>
      )}
      {[xB, xF, xD].map((v) => <circle key={v} cx={f.X(v)} cy={f.Y(v)} r={small ? 2.5 : 4} style={{ fill: tone('ink') }} />)}
      {!g.feasible && layers >= 4 && (
        <Label x={f.X(0.5)} y={f.Y(0.12)} size={small ? 10 : 15} t="trap">infeasible: R below R_min</Label>
      )}
    </Svg>
  )
}

// ---- Visual 1: feed tray ----------------------------------------------------
function FeedTray() {
  return (
    <Svg w={460} h={300} label="Feed tray: feed splits into qF liquid going down and (1−q)F vapour going up">
      <rect x={150} y={125} width={180} height={50} rx={6} style={{ fill: `color-mix(in srgb, ${tone('topic')} 18%, var(--bg))`, stroke: tone('topic'), strokeWidth: 2 }} />
      <Label x={240} y={155} size={14}>feed tray</Label>
      <Arrow x1={190} y1={30} x2={190} y2={123} t="var-e" />
      <Label x={182} y={44} anchor="end" size={13} t="var-e">L′ in</Label>
      <Arrow x1={290} y1={123} x2={290} y2={30} t="var-d" />
      <Label x={298} y={44} anchor="start" size={13} t="var-d">V′ out</Label>
      <Arrow x1={190} y1={177} x2={190} y2={270} t="var-e" />
      <Label x={182} y={262} anchor="end" size={13} t="var-e">L″ out</Label>
      <Arrow x1={290} y1={270} x2={290} y2={177} t="var-d" />
      <Label x={298} y={262} anchor="start" size={13} t="var-d">V″ in</Label>
      <Arrow x1={30} y1={150} x2={148} y2={150} t="var-c" />
      <Label x={30} y={140} anchor="start" size={13} t="var-c">F</Label>
      <Arrow x1={120} y1={150} x2={120} y2={215} t="var-e" dashed />
      <Label x={112} y={232} anchor="end" size={12} t="var-e">qF (liquid)</Label>
      <Arrow x1={100} y1={150} x2={100} y2={85} t="var-d" dashed />
      <Label x={92} y={78} anchor="end" size={12} t="var-d">(1−q)F (vapour)</Label>
      <Label x={450} y={120} anchor="end" size={13} t="var-e">L″ = L′ + qF</Label>
      <Label x={450} y={190} anchor="end" size={13} t="var-d">V′ = V″ + (1−q)F</Label>
    </Svg>
  )
}

// ---- Visual 2: q-line family ------------------------------------------------
function QFamily() {
  const f = frame({ x0: 56, y0: 20, w: 300, h: 300 })
  const p = { R: 2, q: 0.7, a: 4.5, xF: 0.4, xD: 0.95, xB: 0.1 }
  const g = mccabe(p)
  const xF = 0.4
  const slope = -0.7 / 0.3
  const c = xF / 0.3
  return (
    <Svg w={420} h={370} label="Feed lines from (x_F, x_F): vertical for q = 1, horizontal for q = 0, negative slope for 0 < q < 1">
      <AxesBox f={f} />
      <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={st('muted', true, 1.3)} />
      <polyline points={poly(range(80).map((x) => [f.X(x), f.Y(g.eqY(x))]))} style={st('var-b')} />
      <line x1={f.X(xF)} y1={f.Y(xF)} x2={f.X(xF)} y2={f.Y(0.92)} style={st('var-f', true, 2)} />
      <Label x={f.X(xF) - 4} y={f.Y(0.95)} anchor="end" size={12} t="var-f">q = 1</Label>
      <line x1={f.X(xF)} y1={f.Y(xF)} x2={f.X(0.05)} y2={f.Y(xF)} style={st('var-f', true, 2)} />
      <Label x={f.X(0.03)} y={f.Y(xF) - 6} anchor="start" size={12} t="var-f">q = 0</Label>
      <line x1={f.X(xF)} y1={f.Y(xF)} x2={f.X(0.3)} y2={f.Y(c + slope * 0.3)} style={st('var-f', false, 2.5)} />
      <Label x={f.X(0.3) - 4} y={f.Y(c + slope * 0.3) - 6} anchor="end" size={12} t="var-f">0 &lt; q &lt; 1</Label>
      <line x1={f.X(0)} y1={f.Y(g.b)} x2={f.X(0.95)} y2={f.Y(0.95)} style={st('var-c')} />
      <line x1={f.X(0.1)} y1={f.Y(0.1)} x2={f.X(g.xi)} y2={f.Y(g.yi)} style={st('var-e')} />
      <circle cx={f.X(g.xi)} cy={f.Y(g.yi)} r={5} style={{ fill: tone('trap') }} />
      <circle cx={f.X(xF)} cy={f.Y(xF)} r={4} style={{ fill: tone('ink') }} />
      <Label x={f.X(xF) + 8} y={f.Y(xF) + 16} anchor="start" size={12}>(x_F, x_F)</Label>
      <Label x={f.X(0.7)} y={f.Y(0.62)} anchor="start" size={12} t="var-c">rectifier OL</Label>
      <Label x={f.X(0.16)} y={f.Y(0.08)} anchor="start" size={12} t="var-e">stripper OL</Label>
    </Svg>
  )
}

// ---- Interactive ------------------------------------------------------------
function MTExplorer() {
  const [R, setR] = useState(2)
  const [q, setQ] = useState(0.7)
  const [a, setA] = useState(4.5)
  const p = { R, q, a, xF: 0.4, xD: 0.95, xB: 0.1 }
  const g = mccabe(p)
  const slider = (lab, val, set, min, max, step, c) => (
    <label>
      <span className="plot-param"><V c={c}><M>{lab}</M></V> = <strong>{val.toFixed(2)}</strong></span>
      <input type="range" min={min} max={max} step={step} value={val} onChange={(e) => set(Number(e.target.value))} />
    </label>
  )
  return (
    <Diagram
      title="McCabe–Thiele, live"
      caption={String.raw`Equilibrium $y = \frac{\alpha x}{1+(\alpha-1)x}$, rectifier OL, q-line $y = -\frac{q}{1-q}x + \frac{x_F}{1-q}$ (vertical at $q = 1$) and stripper OL from $(x_B, x_B)$ through the intersection. Fixed $x_F = 0.4$, $x_D = 0.95$, $x_B = 0.10$. Start values $R = 2$, $q = 0.7$, $\alpha = 4.5$ are the Week 2 self-exercise [Week 2, p. 39]. The feed step is drawn in red; the last step is the partial reboiler.`}
      cite={`[${W2}, p. 32–36, 39]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          {slider('R', R, setR, 0.5, 6, 0.01, 'c')}
          {slider('q', q, setQ, 0, 1, 0.01, 'c')}
          {slider('\\alpha', a, setA, 1.5, 8, 0.01, 'd')}
        </div>
        <p>
          {g.feasible ? (
            <>
              Steps: <strong>{g.steps.length}</strong> (≈ {g.frac?.toFixed(2)} theoretical) · feed on stage <strong>{g.feed}</strong>
              {' '}· in the column: {g.steps.length - 1} trays + reboiler
            </>
          ) : (
            <strong style={{ color: tone('trap') }}>Infeasible: the operating lines meet above the equilibrium curve — R is below R_min (page 07).</strong>
          )}
        </p>
        <McCabeSvg p={p} />
      </div>
    </Diagram>
  )
}

export default function Page() {
  const P = { R: 2, q: 0.7, a: 4.5, xF: 0.4, xD: 0.95, xB: 0.1 }
  const panels = ['1. diagonal + equilibrium', '2. + rectifier OL', '3. + q-line', '4. + stripper OL', '5. step, switch at feed']
  const g = mccabe(P)
  return (
    <>
      <Section kind="intuition" title="The feed ties the two operating lines together">
        <MentalModel cite={`[${W2}, p. 29–38; ${E2}, Oppg. 2c]`}>
          <T text="You usually don't know the stripper flows, so you can't draw the stripper operating line directly. The feed fixes it [Week 2, p. 29]. The liquid part of the feed, $qF$, joins the falling liquid, and the vapour part, $(1-q)F$, joins the rising vapour. That links $L''$ to $L'$ and $V'$ to $V''$ [Week 2, p. 29–30]." />
          <p>
            Subtracting the two operating lines gives the <V c="f">feed line (q-line)</V>. It passes through{' '}
            <M>{String.raw`(x_F, x_F)`}</M>, its slope depends only on the feed&apos;s state, and both operating lines must meet on it
            [Week 2, p. 31; exercise_02_solutions.pdf, Oppg. 2c]. The full construction follows: diagonal and equilibrium curve, then
            the <V c="c">rectifier line</V> from <M>x_D</M>, then the q-line, then the <V c="e">stripper line</V> from <M>x_B</M>{' '}
            through the intersection. Then step from <M>x_D</M> to <M>x_B</M>, switching lines at the feed [Week 2, p. 32–36]. The
            last step is the partial reboiler, which is also an equilibrium stage [Week 2, p. 38].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Feed condition, feed line and stage counting">
        <Columns>
          <Diagram title="Feed tray control volume" cite={`[${W2}, p. 29–30; ${E2E}, Exercise 2, Fig. 2c]`}
            caption="The feed's liquid part joins the falling liquid, its vapour part the rising vapour.">
            <FeedTray />
          </Diagram>
          <div>
            <Def term="Feed-section balance" cite={`[${W2}, p. 29]`}>
              {String.raw`$F + V'' + L' = V' + L''$. The feed's liquid $F_L$ adds to the liquid flow and its vapour $F_V$ adds to the vapour flow.`}
            </Def>
            <Def term="q (liquid fraction of the feed)" cite={`[${W2}, p. 30]`}>
              {String.raw`$F_L = qF$ and $F_V = (1-q)F$. Formally, $q$ = heat required to vaporise 1 mol of feed / heat required to vaporise 1 mol of liquid.`}
            </Def>
            <Def term="Feed states" cite={`[${W2}, p. 30]`}>
              {String.raw`$q = 1$ is saturated liquid at its bubble point. $q = 0$ is saturated vapour at its dew point. $0 < q < 1$ is a partially evaporated mixture.`}
            </Def>
          </div>
        </Columns>

        <Columns>
          <div>
            <Def term="Feed line (q-line)" cite={`[${W2}, p. 31; ${E2}, Oppg. 2c–d]`}>
              {String.raw`The locus where the rectifier and stripper operating lines intersect. It runs through $(x_F, x_F)$ with slope $q/(q-1)$. It is horizontal for $q = 0$ and vertical for $q = 1$.`}
            </Def>
            <Def term="Stripper operating line construction" cite={`[${W2}, p. 35; ${E2}, Oppg. 2b]`}>
              {String.raw`From $(x_B, x_B)$ through the intersection of the q-line and the rectifier operating line.`}
            </Def>
            <Def term="Stepping" cite={`[${W2}, p. 36]`}>
              {String.raw`Start at $(x_D, x_D)$ and step until the liquid fraction is below $x_B$. Switch to the stripper line after the feed point.`}
            </Def>
          </div>
          <Diagram title="q-line family" cite={`[${W2}, p. 30–31; ${E2}, Oppg. 2d, Fig. 3]`}
            caption="Three feed lines from (x_F, x_F). The rectifier and stripper operating lines meet on the 0 < q < 1 line (red dot). Equilibrium curve schematic (α = 4.5).">
            <QFamily />
          </Diagram>
        </Columns>

        <Diagram
          title="McCabe–Thiele construction, step by step"
          caption={String.raw`Slide data $x_B = 0.1$, $x_F = 0.4$, $x_D = 0.95$, $q = 0.7$ (q-line $y = -2.33x + 3.33x_F$). The slide's result is 6 stages, feed on stage 4, about 5.65 theoretical [p. 37]. The slides don't give R and α for this example; these panels use R = 2 and α = 4.5 from the p. 39 self-exercise, which gives ${g.steps.length} steps (≈ ${g.frac?.toFixed(2)}), feed on stage ${g.feed}.`}
          cite={`[${W2}, p. 32–37]`}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', width: '100%' }}>
            {panels.map((t, i) => (
              <div key={t} style={{ textAlign: 'center', fontSize: 13 }}>
                <McCabeSvg p={P} layers={i + 1} small />
                <div>{t}</div>
              </div>
            ))}
          </div>
        </Diagram>

        <Columns>
          <div>
            <Def term="Feed stage" cite={`[${E2}, Oppg. 3c]`}>The step where the staircase crosses the q-line.</Def>
            <Def term="Theoretical vs actual stages" cite={`[${W2}, p. 37]`}>
              Theoretical stages can be fractional (e.g. 5.65). Actual stages must be whole numbers, rounded up.
            </Def>
          </div>
          <div>
            <Def term="Partial reboiler stage" cite={`[${W2}, p. 38]`}>
              Part of the liquid is evaporated, so it is an equilibrium stage. The vapour is richer in the most volatile component than the liquid. N theoretical stages means 1 reboiler stage + (N−1) trays.
            </Def>
            <Def term="Reboiler vapour composition" cite={`[${E2}, Oppg. 1c, 4d]`}>
              {String.raw`Read $y_B$ from the equilibrium curve at $x_B$.`}
            </Def>
          </div>
        </Columns>
        <Gap>The slides don&apos;t give R and α for the p. 32–36 example. The interactive start values R = 2, α = 4.5 come from the p. 39 self-exercise, which uses the same compositions and q, so the slider&apos;s stage count may differ slightly from the slide&apos;s 6 / 5.65.</Gap>
        <Gap>Reboiler duty is not in the lecture slides. It comes only from the exercise and exam solutions.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="feedbal" />
        <Eq id="qdef" />
        <Eq id="qline" />
        <Eq id="qslope" />
        <MTExplorer />
        <Eq id="duty" />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Acetone/water column with a two-phase feed"
          given={String.raw`Given $F = 200$ kmol/h, $x_F = 0.40$, $x_D = 0.90$, $x_B = 0.014$, $D = 87.1$, $B = 112.9$ kmol/h (from page 05), $q = 0.5$ (50 % vapour, 50 % liquid at boiling point) and $R = 0.6$.`}
          steps={[
            { body: String.raw`Rectifier flows: $L' = RD = 52.3$ kmol/h and $V' = L' + D = 139.4$ kmol/h.` },
            { body: String.raw`Stripper liquid: $L'' = L' + qF = 52.3 + 0.5 \cdot 200 = 152.3$ kmol/h.` },
            { body: String.raw`Stripper vapour: $V'' = V' - (1-q)F = 139.4 - 100 = 39.4$ kmol/h.` },
            { body: String.raw`Check: $L'' = V'' + B = 39.4 + 112.9 = 152.3$ kmol/h. ✓` },
            { body: String.raw`Points on the diagonal: $(x_B, x_B) = (0.014, 0.014)$, $(x_F, x_F) = (0.4, 0.4)$, $(x_D, x_D) = (0.9, 0.9)$.` },
            { body: String.raw`Rectifier OL from $(0, x_D/(R+1)) = (0, 0.56)$ to $(0.9, 0.9)$.` },
            { body: String.raw`q-line: $y = \frac{q}{q-1}x - \frac{1}{q-1}x_F = -x + 0.8$, from $(0.4, 0.4)$ with slope −1.` },
            { body: String.raw`Stripper OL from $(0.014, 0.014)$ to the intersection of the rectifier OL and the q-line.` },
            { body: 'Step from $(x_D, x_D)$ to $(x_B, x_B)$. Result: 5.9 theoretical stages. The reboiler counts as one, so 4.9 are in the column: 4 in the rectifier and 0.9 in the stripper. Feed on stage 4.' },
          ]}
          result="5.9 theoretical stages (4.9 in the column), feed on stage 4"
          cite={`[${E2E}, Exercise 3; ${E2}, Oppg. 3b–c]`}
        />
        <FadedExample
          title="Liquid feed, internal flows and reboiler duty"
          given={String.raw`Ethyl acetate/cyclohexane, $F = 60$ kmol/h, $x_F = 0.2$, $D = 12$ kmol/h, $x_D = 0.5$, $R = 2.1$. Feed is liquid at its bubbling point. $\Delta H_{vap}$: ethyl acetate 32 kJ/mol, cyclohexane 30 kJ/mol.`}
          steps={[
            { title: 'Which of three feed lines is correct?', body: '$q = 1$, so the vertical line (C).', hidden: true },
            { title: 'Bottoms.', body: String.raw`$B = 60 - 12 = 48$ kmol/h. $x_B = (60\cdot 0.2 - 12\cdot 0.5)/48 = 0.125$.`, hidden: true },
            { title: 'Rectifier flows.', body: String.raw`$L' = 2.1 \cdot 12 = 25.2$ and $V' = 12 + 25.2 = 37.2$ kmol/h.`, hidden: true },
            { title: 'Stripper flows for a liquid feed.', body: String.raw`$L'' = L' + F = 85.2$ kmol/h. $V'' = V' = 37.2$ kmol/h.`, hidden: true },
            { body: String.raw`Reboiler vapour from VLE at $x_B = 0.125$: $y_B \approx 0.23$.` },
            { title: 'Mixture heat of evaporation.', body: String.raw`$0.23\cdot 32 + 0.77 \cdot 30 = 30.46$ kJ/mol.`, hidden: true },
            { title: String.raw`Duty, with $V'' = 37.2$ kmol/h $= 10.33$ mol/s.`, body: String.raw`$Q = 30.46 \cdot 10.33 = 314.8$ kW.`, hidden: true },
          ]}
          cite={`[${PX}, Ex. 2b, 2d–e]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="The reboiler is a stage" cite={`[${W2}, p. 38; ${PX2}, Q2b; ${E2}, Oppg. 3c]`}>
          Column trays = theoretical stages − 1 when there is a partial or external reboiler. Autumn 2022 Q2b: 7 theoretical → 6 in the column.
        </Trap>
        <Trap title="Switch lines at the feed" cite={`[${W2}, p. 36]`}>
          Keep using the rectifier OL past the feed and you get the wrong stage count and feed stage.
        </Trap>
        <Trap title="q = 1 means a vertical feed line" cite={`[${PX}, Ex. 2b; ${E2}, Oppg. 4b]`}>
          {String.raw`The slope formula divides by zero, so draw it straight up from $(x_F, x_F)$.`}
        </Trap>
        <Trap title={String.raw`Liquid feed: $V'' = V'$`} cite={`[${PX}, Ex. 2d]`}>
          {"All of F goes to the liquid. Don't subtract F from the vapour."}
        </Trap>
        <Trap title="Reading q off a diagram" cite={`[${PX2}, Q2a.4]`}>
          {String.raw`Take two points on the feed line, compute the slope, then use slope $= -q/(1-q)$. The answer is the liquid fraction of the feed.`}
        </Trap>
        <Trap title={String.raw`Reboiler duty uses $V''$ and $y_B$, not $x_B$`} cite={`[${PX}, Ex. 2e]`}>
          And convert kmol/h to mol/s to get kW.
        </Trap>
        <Trap title="Fractional stages" cite={`[${W2}, p. 37]`}>
          Give the theoretical number (e.g. 5.65) when asked for theoretical stages, and round up for actual stages.
        </Trap>
        <Trap title="Slide typo (source discrepancy)" cite={`[${W2}, p. 31; ${FS}, p. 2, eq. 11]`}>
          {String.raw`Week 2, p. 31 writes the stripper balance as $V''y = L''x - Bx_D$. It should be $Bx_B$, as in the next line and on the formula sheet. (Confirmed in the PDF.)`}
        </Trap>
        <Trap title="Always check with a second balance" cite={`[${E2}, Oppg. 3b, 4c]`}>
          {String.raw`E.g. $L'' = V'' + B$ after computing $L''$ from q.`}
        </Trap>
      </Section>
    </>
  )
}
