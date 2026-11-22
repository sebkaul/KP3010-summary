import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Columns, Diagram, Svg, Box, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W2 = 'Week 2 - Multi-stage distillation with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E2 = 'exercise_02_solutions.pdf'
const E2E = 'exercise_02_eng.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Column balances, reflux ratio and operating lines',
  topic: 'distillation',
  examWeight: {
    level: 'high',
    note: 'Overall/internal balances and R from the operating line in Q2 on 2 of 2 practice exams (Practice exam 1 Ex. 2d; Autumn 2022 Q2a.2, Q2a.5)',
  },
  examTasks: [
    "Practice exam 1, Ex. 2d: with R = 2.1, find x_B, B, and L', V', L'', V'' (B = 48, x_B = 0.125, L' = 25.2, V' = 37.2 kmol/h). The stripper part uses q, see page 06.",
    'Autumn 2022, Q2a.2: mole fraction of cyclohexane in the distillate from a McCabe–Thiele diagram (0.05).',
    'Autumn 2022, Q2a.5: reflux ratio from the rectifier operating line intercept (R = 0.83).',
  ],
  buildsOn: ['04-equilibrium-flash-distillation'],
  usedIn: ['06-feed-line-mccabe-thiele', '07-nmin-rmin-limiting-conditions', '10-multistage-absorption-stripping'],
  sources: [`[${W2}, p. 2–28]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Why use a column instead of one flash drum?', a: 'One flash gives limited separation. A counter-current cascade of flash stages raises purity and yield without intermediate products. [Week 2, p. 2]' },
    { id: 'p2', kind: 'pretest', q: 'The top vapour is totally condensed. How do $y_1$, $x_D$ and the reflux composition compare?', a: "They're all equal: $x_D = y_1$, and the reflux has composition $x_D$. [exercise_02_solutions.pdf, Oppg. 1b]" },
    { id: 'p3', kind: 'pretest', q: 'Is the vapour flow above the feed the same as below it?', a: 'Generally not. Flows are constant within each section, but they change at the feed depending on its condition. [exercise_02_solutions.pdf, Oppg. 1d; Week 2, p. 9]' },
    { id: 't1', q: 'Benzene/toluene, $F = 12$ kmol/h, $x_F = 0.6$, $D = 8$ kmol/h, $x_B = 0.05$. Find $B$ and $x_D$.', a: '$B = 12 - 8 = 4$ kmol/h. $x_D = (7.2 - 0.2)/8 = 0.875$. [Week 2, p. 6–7]' },
    { id: 't2', q: 'Rectifier vapour is 10 kmol/h and the distillate is 3 kmol/h. What is R?', a: "$L' = V' - D = 7$, so $R = 7/3 = 2.33$. [Week 2, p. 19–20]" },
    { id: 't3', q: 'The rectifier line hits the y-axis at 0.29 with $x_D = 0.95$. What is R?', a: '$0.29 = 0.95/(R+1)$, so $R = 2.3$. [Week 2, p. 22]' },
    { id: 't4', q: 'Isopropanol/water, $F = 200$ kmol/h, $x_F = 0.20$, $x_D = 0.63$, $x_B = 0.01$. Find D and B.', a: '$D = \\frac{0.20 - 0.01}{0.63 - 0.01} \\cdot 200 = 61.3$ kmol/h, and $B = 138.7$ kmol/h. [exercise_02_solutions.pdf, Oppg. 4c]' },
    { id: 't5', q: 'Between which two points do you draw the rectifier operating line?', a: 'From $(0, x_D/(R+1))$ to $(x_D, x_D)$. [exercise_02_solutions.pdf, Oppg. 2a]' },
  ],
  equations: [
    {
      id: 'overall',
      label: 'Overall balances (whole column)',
      tex: String.raw`F = B + D, \qquad F \vf{x_F} = D \vf{x_D} + B \vf{x_B} \qquad\Rightarrow\qquad D = \frac{\vf{x_F} - \vf{x_B}}{\vf{x_D} - \vf{x_B}} F`,
      vars: [
        { sym: String.raw`F, D, B`, desc: 'feed, distillate and bottoms flow', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\vf{x_F}, \vf{x_D}, \vf{x_B}`, desc: 'mole fraction of the light component in each stream', unit: '–' },
      ],
      note: 'Binary, steady state. The rearranged form for $D$ is from [exercise_02_solutions.pdf, Oppg. 4c, eq. 37].',
      cite: `[${W2}, p. 5; ${E2}, Oppg. 4c, eq. 37]`,
      check: { status: 'verified', note: 'Matches W2 p. 5; rearranged form matches exercise 2 solution eq. 37.' },
    },
    {
      id: 'tray',
      label: 'Tray balances',
      tex: String.raw`\vd{V_{n+1}} + \ve{L_{n-1}} = \vd{V_n} + \ve{L_n}, \qquad \vd{V_{n+1}} \vb{y_{n+1}} + \ve{L_{n-1}} \va{x_{n-1}} = \vd{V_n} \vb{y_n} + \ve{L_n} \va{x_n}`,
      vars: [
        { sym: String.raw`\vd{V_n}, \ve{L_n}`, desc: 'vapour and liquid leaving tray n', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\vb{y_n}, \va{x_n}`, desc: 'their mole fractions', unit: '–' },
      ],
      note: 'Steady state. VLE links $y_n$ and $x_n$.',
      cite: `[${W2}, p. 8]`,
      check: { status: 'verified', note: 'Matches W2 p. 8.' },
    },
    {
      id: 'rect',
      label: 'Rectifier balances and operating line (driftslinje for forsterker)',
      tex: String.raw`\begin{gathered} \vd{V'} = \ve{L'} + D, \qquad \vd{V'} \vb{y_{n+1}} = \ve{L'} \va{x_n} + D \vf{x_D} \\ \vb{y_{n+1}} = \frac{\ve{L'}}{\vd{V'}} \va{x_n} + \frac{D}{\vd{V'}} \vf{x_D} = \frac{\vc{R}}{\vc{R}+1} \va{x_n} + \frac{1}{\vc{R}+1} \vf{x_D} \end{gathered}`,
      vars: [
        { sym: String.raw`\ve{L'}, \vd{V'}`, desc: 'liquid and vapour flow in the rectifier', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\vb{y_{n+1}}`, desc: 'vapour mole fraction entering tray n from below', unit: '–' },
        { sym: String.raw`\va{x_n}`, desc: 'liquid mole fraction leaving tray n', unit: '–' },
        { sym: String.raw`\vc{R}`, desc: 'reflux ratio', unit: '–' },
      ],
      note: 'Constant molar flows. The line runs from $(0, x_D/(R+1))$ to $(x_D, x_D)$.',
      cite: `[${W2}, p. 11–12; ${FS}, p. 2, eq. 10; ${E2}, Oppg. 2a]`,
      check: { status: 'verified', note: 'Matches W2 p. 11–12 and formula sheet eq. 10.' },
    },
    {
      id: 'R',
      label: 'Reflux ratio (tilbakeløpsforhold)',
      tex: String.raw`\vc{R} = \frac{\ve{L'}}{D}, \qquad \frac{\ve{L'}}{\vd{V'}} = \frac{\vc{R}}{\vc{R}+1}, \qquad \frac{D}{\vd{V'}} = \frac{1}{\vc{R}+1}`,
      vars: [
        { sym: String.raw`\ve{L'}`, desc: 'reflux (liquid returned to the top)', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`D`, desc: 'distillate', unit: String.raw`\mathrm{kmol/h}` },
      ],
      cite: `[${W2}, p. 12; ${FS}, p. 2, eq. 9]`,
      check: { status: 'verified', note: 'Matches W2 p. 12 and formula sheet eq. 9.' },
    },
    {
      id: 'strip',
      label: 'Stripper balances and operating line (driftslinje for avdriver)',
      tex: String.raw`\begin{gathered} \ve{L''} = \vd{V''} + B, \qquad \ve{L''} \va{x_n} = \vd{V''} \vb{y_{n+1}} + B \vf{x_B} \\ \vb{y_{n+1}} = \frac{\ve{L''}}{\vd{V''}} \va{x_n} - \frac{B}{\vd{V''}} \vf{x_B} \end{gathered}`,
      vars: [
        { sym: String.raw`\ve{L''}, \vd{V''}`, desc: 'liquid and vapour flow in the stripper', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`B, \vf{x_B}`, desc: 'bottoms flow and mole fraction', unit: String.raw`\mathrm{kmol/h},\ –` },
      ],
      note: "Slope $L''/V'' \\ge 1$ because $L'' \\ge V''$. The line starts at $(x_B, x_B)$ and ends where the rectifier line crosses the q-line (page 06). The formula sheet writes it with index m: $y_{m+1} = \\frac{L''}{V''}x_m - \\frac{B}{V''}x_B$.",
      cite: `[${W2}, p. 25–26; ${FS}, p. 2, eq. 11; ${E2}, Oppg. 2b]`,
      check: { status: 'verified', note: 'Matches W2 p. 25–26; formula sheet eq. 11 uses index m.' },
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
const eqX = (a) => (y) => y / (a - (a - 1) * y)

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

// ---- Visual 1: column overview ---------------------------------------------
function ColumnOverview() {
  const cx = 230
  const top = 90
  const trayY = [110, 140, 170, 200, 260, 290, 320, 350]
  return (
    <Svg w={560} h={470} label="Distillation column with trays 1 to N, total condenser, reboiler, feed, rectifying and stripping sections">
      {/* shell */}
      <rect x={cx - 60} y={top} width={120} height={290} rx={16} style={st('ink', false, 2)} />
      {trayY.map((y) => (
        <line key={y} x1={cx - 60} y1={y} x2={cx + 60} y2={y} style={st('muted', false, 1.5)} />
      ))}
      <Label x={cx} y={126} size={11} t="muted">tray 1</Label>
      <Label x={cx} y={236} size={14} t="muted">⋮</Label>
      <Label x={cx} y={366} size={11} t="muted">tray N</Label>
      {/* condenser */}
      <Arrow x1={cx} y1={top} x2={cx} y2={40} t="var-d" />
      <Arrow x1={cx} y1={40} x2={328} y2={40} t="var-d" />
      <Label x={290} y={32} size={12} t="var-d">V′, y₁</Label>
      <Box x={328} y={18} w={134} h={44} label="total condenser" t="muted" />
      <Arrow x1={462} y1={40} x2={548} y2={40} t="var-f" />
      <Label x={545} y={30} anchor="end" size={13} t="var-f">D, x_D</Label>
      <Arrow x1={395} y1={62} x2={395} y2={100} t="var-e" />
      <Arrow x1={395} y1={100} x2={cx + 60} y2={100} t="var-e" />
      <Label x={330} y={118} size={12} t="var-e">reflux L′, x_D</Label>
      <Label x={470} y={84} size={11} t="trap">x_D = y₁</Label>
      <Label x={470} y={98} size={11} t="trap">(total condensation)</Label>
      {/* feed */}
      <Arrow x1={40} y1={230} x2={cx - 60} y2={230} t="var-c" />
      <Label x={40} y={220} anchor="start" size={13} t="var-c">F, x_F</Label>
      {/* reboiler */}
      <Arrow x1={cx} y1={380} x2={cx} y2={420} t="var-e" />
      <Box x={cx - 55} y={420} w={110} h={40} label="reboiler" t="muted" />
      <Arrow x1={cx + 55} y1={440} x2={545} y2={440} t="var-f" />
      <Label x={545} y={430} anchor="end" size={13} t="var-f">B, x_B</Label>
      <Arrow x1={cx + 30} y1={420} x2={cx + 30} y2={366} t="var-d" />
      <Label x={cx + 36} y={404} anchor="start" size={12} t="var-d">boilup V″</Label>
      {/* section brackets */}
      <path d={`M${cx - 72},${top + 6} h-10 v${130} h10`} style={st('definition', false, 2)} />
      <Label x={cx - 90} y={150} anchor="end" size={12} t="definition">rectifying section</Label>
      <Label x={cx - 90} y={166} anchor="end" size={12} t="definition">(forsterker): L′, V′</Label>
      <path d={`M${cx - 72},${244} h-10 v${130} h10`} style={st('definition', false, 2)} />
      <Label x={cx - 90} y={300} anchor="end" size={12} t="definition">stripping section</Label>
      <Label x={cx - 90} y={316} anchor="end" size={12} t="definition">(avdriver): L″, V″</Label>
    </Svg>
  )
}

// ---- Visual 2: single tray --------------------------------------------------
function Tray() {
  return (
    <Svg w={420} h={300} label="Tray n with liquid in from above, vapour in from below, liquid out below and vapour out above">
      <rect x={110} y={120} width={200} height={50} rx={6} style={{ fill: `color-mix(in srgb, ${tone('topic')} 18%, var(--bg))`, stroke: tone('topic'), strokeWidth: 2 }} />
      <Label x={210} y={150} size={14}>tray n</Label>
      <Label x={210} y={192} size={12} t="definition">VLE: y_n ↔ x_n</Label>
      <Arrow x1={150} y1={30} x2={150} y2={118} t="var-e" />
      <Label x={142} y={50} anchor="end" size={13} t="var-e">L_n−1, x_n−1</Label>
      <Arrow x1={270} y1={118} x2={270} y2={30} t="var-d" />
      <Label x={278} y={50} anchor="start" size={13} t="var-d">V_n, y_n</Label>
      <Arrow x1={150} y1={172} x2={150} y2={270} t="var-e" />
      <Label x={142} y={260} anchor="end" size={13} t="var-e">L_n, x_n</Label>
      <Arrow x1={270} y1={270} x2={270} y2={172} t="var-d" />
      <Label x={278} y={260} anchor="start" size={13} t="var-d">V_n+1, y_n+1</Label>
      <line x1={150} y1={236} x2={270} y2={236} style={st('example', true, 1.5)} />
      <Label x={210} y={230} size={11} t="example">operating line:</Label>
      <Label x={210} y={252} size={11} t="example">y_n+1 ↔ x_n</Label>
    </Svg>
  )
}

// ---- Visual 3: control volumes ----------------------------------------------
function Envelopes() {
  const col = (x, label) => (
    <g>
      <rect x={x} y={60} width={70} height={210} rx={10} style={st('ink', false, 2)} />
      <Label x={x + 35} y={290} size={12} t="muted">{label}</Label>
    </g>
  )
  return (
    <Svg w={560} h={326} label="Two control volumes: (a) condenser plus trays 1 to n, (b) reboiler plus trays m+1 to N">
      {/* (a) */}
      {col(60, '(a) rectifier')}
      <Box x={60} y={10} w={70} h={30} label="cond." t="muted" />
      <line x1={95} y1={40} x2={95} y2={60} style={st('ink', false, 2)} />
      <rect x={40} y={0} width={170} height={150} rx={8} style={st('example', true, 2)} />
      <line x1={60} y1={150} x2={130} y2={150} style={st('muted', false, 1.5)} />
      <Label x={95} y={140} size={11} t="muted">tray n</Label>
      <Arrow x1={110} y1={190} x2={110} y2={152} t="var-d" />
      <Label x={120} y={186} anchor="start" size={12} t="var-d">V′, y_n+1</Label>
      <Arrow x1={80} y1={152} x2={80} y2={190} t="var-e" />
      <Label x={72} y={186} anchor="end" size={12} t="var-e">L′, x_n</Label>
      <Arrow x1={130} y1={25} x2={240} y2={25} t="var-f" />
      <Label x={240} y={16} anchor="end" size={12} t="var-f">D, x_D</Label>
      {/* (b) */}
      <rect x={350} y={20} width={70} height={210} rx={10} style={st('ink', false, 2)} />
      <rect x={330} y={130} width={170} height={170} rx={8} style={st('example', true, 2)} />
      <line x1={350} y1={130} x2={420} y2={130} style={st('muted', false, 1.5)} />
      <Label x={385} y={148} size={11} t="muted">tray m+1</Label>
      <Label x={385} y={210} size={11} t="muted">tray N</Label>
      <Arrow x1={370} y1={90} x2={370} y2={128} t="var-e" />
      <Label x={362} y={96} anchor="end" size={12} t="var-e">L″, x_m</Label>
      <Arrow x1={400} y1={128} x2={400} y2={90} t="var-d" />
      <Label x={408} y={96} anchor="start" size={12} t="var-d">V″, y_m+1</Label>
      <Box x={350} y={250} w={70} h={30} label="reb." t="muted" />
      <line x1={385} y1={230} x2={385} y2={250} style={st('ink', false, 2)} />
      <Arrow x1={420} y1={265} x2={545} y2={265} t="var-f" />
      <Label x={545} y={255} anchor="end" size={12} t="var-f">B, x_B</Label>
      <Label x={415} y={318} size={12} t="muted">(b) stripper</Label>
    </Svg>
  )
}

// ---- Visual 4: rectifier line + stepping (Example 3) ------------------------
function RectStepping() {
  const f = frame({ x0: 50, y0: 24, w: 320, h: 320 })
  const a = 4 // schematic equilibrium curve: chosen so the stepping reproduces 3 stages
  const R = 2.3
  const xD = 0.95
  const xF = 0.4
  const op = (x) => (R / (R + 1)) * x + xD / (R + 1)
  const corners = []
  let y = xD
  let x0 = xD
  for (let i = 0; i < 4; i++) {
    const x = eqX(a)(y)
    corners.push({ from: [x0, y], to: [x, y], down: [x, op(x)] })
    if (x <= xF) break
    x0 = x
    y = op(x)
  }
  return (
    <Svg w={430} h={400} label="Rectifier operating line from (0.95, 0.95) to intercept 0.29, with three McCabe–Thiele steps">
      <AxesBox f={f} xl="x (–)" yl="y (–)" />
      <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={st('muted', true, 1.5)} />
      <polyline points={poly(range(80).map((x) => [f.X(x), f.Y(eqY(a)(x))]))} style={st('var-b')} />
      <line x1={f.X(0)} y1={f.Y(op(0))} x2={f.X(xD)} y2={f.Y(xD)} style={st('var-c')} />
      <line x1={f.X(xF)} y1={f.Y(0)} x2={f.X(xF)} y2={f.Y(1)} style={st('var-f', true, 1.2)} />
      <Label x={f.X(xF) + 4} y={f.Y(0.03)} anchor="start" size={11} t="var-f">x_F = 0.4</Label>
      {corners.map((c, i) => (
        <g key={i}>
          <line x1={f.X(c.from[0])} y1={f.Y(c.from[1])} x2={f.X(c.to[0])} y2={f.Y(c.to[1])} style={st('example', false, 2)} />
          <line x1={f.X(c.to[0])} y1={f.Y(c.to[1])} x2={f.X(c.down[0])} y2={f.Y(c.down[1])} style={st('example', false, 2)} />
          <circle cx={f.X(c.to[0])} cy={f.Y(c.to[1])} r={4} style={{ fill: tone('example') }} />
          <Label x={f.X(c.to[0]) - 8} y={f.Y(c.to[1]) - 6} anchor="end" size={13} t="example">{i + 1}</Label>
        </g>
      ))}
      <circle cx={f.X(xD)} cy={f.Y(xD)} r={5} style={{ fill: tone('var-f') }} />
      <Label x={f.X(xD) + 6} y={f.Y(xD) + 20} anchor="start" size={11} t="var-f">(x_D, x_D)</Label>
      <circle cx={f.X(0)} cy={f.Y(op(0))} r={5} style={{ fill: tone('var-c') }} />
      <Label x={f.X(0) + 8} y={f.Y(op(0)) - 8} anchor="start" size={12} t="var-c">x_D/(R+1) = 0.29</Label>
      <Label x={f.X(0.55)} y={f.Y(0.2)} anchor="start" size={12} t="var-b">equilibrium (schematic)</Label>
    </Svg>
  )
}

// ---- Visual 5: stripper line ------------------------------------------------
function StripLine() {
  const f = frame({ x0: 50, y0: 24, w: 300, h: 300 })
  return (
    <Svg w={420} h={380} label="Stripper operating line through (0.1, 0.1) and (0.7, 1.0), slope 1.5">
      <AxesBox f={f} xl="x (–)" yl="y (–)" />
      <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={st('muted', true, 1.5)} />
      <line x1={f.X(0.1)} y1={f.Y(0.1)} x2={f.X(0.7)} y2={f.Y(1)} style={st('var-c')} />
      <circle cx={f.X(0.1)} cy={f.Y(0.1)} r={5} style={{ fill: tone('var-f') }} />
      <circle cx={f.X(0.7)} cy={f.Y(1)} r={5} style={{ fill: tone('var-c') }} />
      <Label x={f.X(0.1) + 8} y={f.Y(0.1) + 4} anchor="start" size={12} t="var-f">(x_B, x_B) = (0.1, 0.1)</Label>
      <Label x={f.X(0.7) + 8} y={f.Y(1) + 4} anchor="start" size={12} t="var-c">(0.7, 1.0)</Label>
      <Label x={f.X(0.44)} y={f.Y(0.42)} anchor="start" size={12} t="var-c">slope = L″/V″ = 1.5</Label>
      <Label x={f.X(0.44)} y={f.Y(0.42) + 18} anchor="start" size={12} t="muted">V″ = 10 kmol/h →</Label>
      <Label x={f.X(0.44)} y={f.Y(0.42) + 34} anchor="start" size={12} t="muted">L″ = 15, B = 5 kmol/h</Label>
    </Svg>
  )
}

// ---- Interactive: rectifier line vs R ---------------------------------------
function RectExplorer() {
  const [R, setR] = useState(2.3)
  const xD = 0.95
  const f = frame({ x0: 60, y0: 20, w: 300, h: 300 })
  const slope = R / (R + 1)
  const b = xD / (R + 1)
  return (
    <Diagram
      title="Rectifier operating line vs reflux ratio"
      caption={String.raw`$y_{n+1} = \frac{R}{R+1}x_n + \frac{x_D}{R+1}$ with $x_D = 0.95$ fixed. At $R = 2.3$ the intercept reads 0.29 [Week 2, p. 22]. As $R$ grows, the line rotates towards the diagonal (see page 07).`}
      cite={`[${W2}, p. 12, 21–22]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="c"><M>R</M></V> = <strong>{R.toFixed(2)}</strong></span>
            <input type="range" min={0.3} max={10} step={0.01} value={R} onChange={(e) => setR(Number(e.target.value))} />
          </label>
        </div>
        <p>
          slope <M>{String.raw`R/(R+1)`}</M> = <strong>{slope.toFixed(3)}</strong> · y-intercept <M>{String.raw`x_D/(R+1)`}</M> = <strong>{b.toFixed(2)}</strong>
        </p>
        <Svg w={420} h={370} label="Interactive rectifier operating line on a y–x diagram">
          <AxesBox f={f} xl="x_n (–)" yl="y_n+1 (–)" />
          <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(1)} y2={f.Y(1)} style={st('muted', true, 1.5)} />
          <line x1={f.X(0)} y1={f.Y(b)} x2={f.X(xD)} y2={f.Y(xD)} style={st('var-c')} />
          <circle cx={f.X(0)} cy={f.Y(b)} r={6} style={{ fill: tone('var-c') }} />
          <circle cx={f.X(xD)} cy={f.Y(xD)} r={5} style={{ fill: tone('var-f') }} />
          <Label x={f.X(0) + 10} y={f.Y(b) - 8} anchor="start" size={12} t="var-c">{`(0, ${b.toFixed(2)})`}</Label>
          <Label x={f.X(xD) - 6} y={f.Y(xD) + 22} anchor="end" size={12} t="var-f">(x_D, x_D)</Label>
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="A stack of flash stages, held together by balances">
        <MentalModel cite={`[${W2}, p. 2–3, 8–18, 25]`}>
          <T text="A distillation column is a stack of flash stages run counter-current. Vapour rises, liquid falls, and on every tray the leaving vapour and liquid are in equilibrium [Week 2, p. 2–3]. Two kinds of relation describe it. Equilibrium (VLE) links $y_n$ and $x_n$ on the same tray. Mass balances link the streams passing between trays, $y_{n+1}$ and $x_n$ [Week 2, p. 8, 13]." />
          <p>
            If both components have the same enthalpy of evaporation, the <V c="e">liquid</V> and <V c="d">vapour</V> flows stay
            constant through each section. The balance over the top or bottom part then becomes a straight line in the y–x diagram,
            called the operating line (driftslinje) [Week 2, p. 9, 11, 25]. The <V c="c">reflux ratio</V>{' '}
            <M>{String.raw`R = L'/D`}</M> fixes the slope of the rectifier line, and alternating between that line and the equilibrium
            curve walks you stage by stage down the column (McCabe–Thiele) [Week 2, p. 12, 15–18].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Column anatomy and notation">
        <Columns>
          <Diagram
            title="Column overview"
            caption="Trays numbered 1 (top) to N (bottom). Total condenser on top gives distillate D and reflux L′, both at x_D. Reboiler at the bottom gives bottoms B and boilup V″."
            cite={`[${W2}, p. 3–4, 10; ${E2}, Oppg. 1, Fig. 1]`}
          >
            <ColumnOverview />
          </Diagram>
          <div>
            <Def term="Counter-current cascade" cite={`[${W2}, p. 2]`}>
              Several flash separations in sequence, with vapour and liquid flowing opposite ways. No intermediate products, high yield of end products.
            </Def>
            <Def term="Stages (trays, trinn)" cite={`[${W2}, p. 3]`}>
              On each stage vapour moves up and meets the liquid from the stage above, and unevaporated liquid flows down. Each stage is at equilibrium.
            </Def>
            <Def term="Stage numbering" cite={`[${W2}, p. 4]`}>
              The top tray is 1 and the bottom tray is N, which is also the total number of trays. More stages generally means better separation and higher purity.
            </Def>
            <Def term="Reflux (tilbakeløp) and boilup (oppvarming)" cite={`[${W2}, p. 4]`}>
              The liquid returned at the top and the vapour returned at the bottom.
            </Def>
            <Def term="Rectifying section (forsterker) / stripping section (avdriver)" cite={`[${W2}, p. 24; ${E2}, Oppg. 1a]`}>
              Stages above the feed / stages below the feed.
            </Def>
            <Def term="Stream notation" cite={`[${W2}, p. 10–11, 25]`}>
              {String.raw`Rectifier $L'$, $V'$. Stripper $L''$, $V''$.`}
            </Def>
            <Def term="Total condensation" cite={`[${E2}, Oppg. 1b]`}>
              {String.raw`The vapour leaving stage 1 is condensed to liquid at its boiling point, so $x_D = y_1$.`}
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Single-tray control volume" cite={`[${W2}, p. 8]`}
            caption="Equilibrium links the streams leaving the same tray; the operating line links the streams passing between trays.">
            <Tray />
          </Diagram>
          <div>
            <Def term="Constant molar flows" cite={`[${W2}, p. 9]`}>
              {String.raw`$L_{n-1} = L_n = L$ and $V_{n-1} = V_n = V$ within a section. True when all components have the same enthalpy of evaporation. Not true across a point where a stream is added (the feed).`}
            </Def>
            <Def term="Internal balances" cite={`[${W2}, p. 10]`}>
              Three of them (rectifying, stripping, feed section). Often they must be solved before the overall balance can be.
            </Def>
            <Def term="Operating line (driftslinje)" cite={`[${W2}, p. 11, 13]`}>
              {String.raw`Relates the passing concentrations $y_{n+1}$ and $x_n$. It is a mass balance and says nothing about equilibrium.`}
            </Def>
          </div>
        </Columns>

        <Diagram title="Rectifier and stripper control volumes" cite={`[${E2E}, Exercise 2, Fig. 2a–b; ${W2}, p. 11, 25]`}
          caption="(a) Envelope around the condenser plus trays 1…n, cutting V′ (y_n+1) and L′ (x_n). (b) Envelope around the reboiler plus trays m+1…N, cutting L″ (x_m) and V″ (y_m+1).">
          <Envelopes />
        </Diagram>

        <Columns>
          <Diagram
            title="Rectifier operating line and stepping (Example 3)"
            caption="x_D = 0.95, intercept 0.29, R = 2.3, x_F = 0.4 → 3 stages. Start at (x_D, x_D), go horizontally to the equilibrium curve (x₁), then down to the operating line (y₂); repeat until x ≤ x_F. The slide's equilibrium curve is an image: the curve here is schematic, chosen so the stepping gives the slide's 3 stages."
            cite={`[${W2}, p. 14–18, 21–23]`}
          >
            <RectStepping />
          </Diagram>
          <div>
            <Def term={String.raw`Reflux ratio ($R$, tilbakeløpsforholdet)`} cite={`[${W2}, p. 12]`}>
              {String.raw`Liquid entering at the top, $L'$, over the distillate, $D$.`}
            </Def>
            <Def term="Theoretical stage" cite={`[${W2}, p. 18]`}>
              Each step in the McCabe–Thiele diagram.
            </Def>
            <Diagram title="Stripper operating line from two points" cite={`[${W2}, p. 26–28]`}
              caption="Line through (0.1, 0.1) on the diagonal and (0.7, 1.0): slope 1.5 (> 1).">
              <StripLine />
            </Diagram>
          </div>
        </Columns>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="overall" />
        <Eq id="tray" />
        <Eq id="rect" />
        <Eq id="R" />
        <RectExplorer />
        <Eq id="strip" />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Recovery spec → all external flows and the rectifier flows"
          given={String.raw`Acetone/water. $F = 200$ kmol/h, $x_F = 0.40$, $x_D \ge 0.90$. At most 2 % of the fed acetone may be lost in the bottoms. $R = 2R_{min} = 0.6$.`}
          steps={[
            { body: String.raw`Acetone in: $F x_F = 200 \cdot 0.40 = 80$ kmol/h.` },
            { body: String.raw`Acetone lost in bottoms: $B x_B = 0.02 \cdot 80 = 1.6$ kmol/h.` },
            { body: String.raw`Acetone in distillate: $D x_D = 80 - 1.6 = 78.4$ kmol/h, so $D = 78.4/0.90 = 87.1$ kmol/h.` },
            { body: String.raw`Total balance: $B = F - D = 200 - 87.1 = 112.9$ kmol/h.` },
            { body: String.raw`Bottoms composition: $x_B = 1.6/112.9 = 0.014$.` },
            { body: String.raw`Reflux: $L' = R D = 0.6 \cdot 87.1 = 52.3$ kmol/h.` },
            { body: String.raw`Rectifier vapour: $V' = L' + D = 52.3 + 87.1 = 139.4$ kmol/h.` },
            { body: String.raw`Rectifier operating line: $y_{n+1} = \frac{0.6}{1.6}x_n + \frac{0.90}{1.6}$, which has intercept $x_D/(R+1) = 0.56$. [exercise_02_solutions.pdf, Oppg. 3c]` },
          ]}
          result={String.raw`The stripper flows need the feed condition q (page 06): $L'' = 152.3$ kmol/h and $V'' = 39.4$ kmol/h.`}
          cite={`[${E2E}, Exercise 3; ${E2}, Oppg. 3b]`}
        />
        <FadedExample
          title="Stripper flows from a drawn operating line"
          given={String.raw`A stripper operating line passes through (0.1, 0.1) and (0.7, 1.0). The vapour from the reboiler is $V'' = 10$ kmol/h. Find $B$.`}
          steps={[
            { body: String.raw`Slope from the two points: $\dfrac{1 - 0.1}{0.7 - 0.1}$.` },
            { title: 'Evaluate it.', body: 'slope $= 1.5$.', hidden: true },
            { title: String.raw`Match it to the operating line $y_{n+1} = \frac{L''}{V''}x_n - \frac{B}{V''}x_B$.`, body: String.raw`$L''/V'' = 1.5$, so $L'' = 15$ kmol/h.`, hidden: true },
            { title: String.raw`Balance over the reboiler, $L'' = B + V''$.`, body: String.raw`$B = 15 - 10 = 5$ kmol/h.`, hidden: true },
            { title: String.raw`Read $x_B$ off the diagram.`, body: String.raw`The line meets the diagonal at $x_B = 0.1$.`, hidden: true },
          ]}
          cite={`[${W2}, p. 27–28]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title={String.raw`$R$ is $L'/D$, not $L'/V'$`} cite={`[${W2}, p. 12, 20]`}>
          {String.raw`From vapour data, $R = V'/D - 1$ (e.g. $10/3 - 1 = 2.33$).`}
        </Trap>
        <Trap title="R from the y-intercept" cite={`[${PX2}, Q2a.5; ${W2}, p. 22]`}>
          {String.raw`Set $x_n = 0$, so $y = x_D/(R+1)$. The exam uses intercept 0.52 with $x_D = 0.95$, giving $R = 0.83$. Check which axis value you read.`}
        </Trap>
        <Trap title={'"Mole fraction of the heavy component in the distillate"'} cite={`[${PX2}, Q2a.2]`}>
          {String.raw`Diagrams plot the light component. Answer $1 - x_D$ (e.g. 0.05 cyclohexane).`}
        </Trap>
        <Trap title="Recovery or loss specs" cite={`[${E2}, Oppg. 3b]`}>
          {String.raw`"2 % of supplied acetone lost in bottoms" means $B x_B = 0.02 F x_F$, not $x_B = 0.02$.`}
        </Trap>
        <Trap title="Flows change at the feed" cite={`[${W2}, p. 9; ${E2}, Oppg. 1d]`}>
          {String.raw`Constant molar flow holds **within** a section. $V' \neq V''$ and $L' \neq L''$ in general.`}
        </Trap>
        <Trap title="Constant molar flow needs equal heats of evaporation" cite={`[${W2}, p. 9]`}>
          {"That's the assumption behind straight operating lines."}
        </Trap>
        <Trap title="The operating line is a mass balance, not equilibrium" cite={`[${W2}, p. 13, 15]`}>
          {String.raw`It links $y_{n+1}$ and $x_n$ (passing streams). Stepping alternates between it and the VLE curve.`}
        </Trap>
        <Trap title="Stripper slope > 1" cite={`[${W2}, p. 26]`}>
          {String.raw`If your stripper line is flatter than the diagonal, you've swapped $L''$ and $V''$.`}
        </Trap>
        <Trap title="Primes on the formula sheet (source discrepancy)" cite={`[${FS}, p. 2, eq. 9–11]`}>
          {String.raw`$L'$ and $L''$ are rendered as $L0$ and $L00$ in the PDF text. In the original, R = $L'/D$.`}
        </Trap>
      </Section>
    </>
  )
}
