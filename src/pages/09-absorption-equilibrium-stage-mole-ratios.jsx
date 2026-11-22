import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W3 = 'Week 3 - Absorption and stripping with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E3 = 'exercise_03_solutions.pdf'
const E3T = 'exercise_03.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Single equilibrium stage, inert flows and mole ratios',
  topic: 'absorption',
  examWeight: {
    level: 'medium',
    note: 'Mole-ratio conversion for outlet composition on 1 of 2 practice exams (Autumn 2022 Q3b); the constant-flow/dilute assumption is asked in Practice exam 1 Ex. 3c',
  },
  examTasks: [
    'Autumn 2022, Q3b: CO₂ mole fraction at the absorber outlet for 90 % removal, via mole ratios (y_out = 0.013).',
    "Practice exam 1, Ex. 3c: conditions for using Kremser's equation (dilute, constant total flows). Covered on page 11.",
  ],
  buildsOn: ['04-equilibrium-flash-distillation', '08-absorption-principles-henrys-law'],
  usedIn: ['10-multistage-absorption-stripping', '11-kremser-minimum-absorbent-flow'],
  sources: [
    `[${W3}, p. 11–22]`,
    `[${FS}, p. 2, eq. 16–22]`,
    `[${E3T}, Oppgave 2, 3a–b, 3d]`,
    `[${E3}, Oppg. 2a–d]`,
    `[${PX2}, Q3b]`,
    `[${PX}, Ex. 3c]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'In an absorber, which flows stay constant: total gas and liquid, or something else?', a: "The inert flows: the insoluble carrier gas $G'$ and the non-volatile solvent $L'$. Total G falls and total L rises as solute transfers. [Week 3, p. 13, 15]" },
    { id: 'p2', kind: 'pretest', q: 'A gas has $y_A = 0.2$. What is its mole ratio $Y_A$?', a: '$Y_A = 0.2/(1 - 0.2) = 0.25$. [Week 3, p. 20]' },
    { id: 'p3', kind: 'pretest', q: 'Henry gives $y_A = K x_A$. Is $Y_A = K X_A$ then also exact?', a: 'No. In mole ratios the equilibrium becomes $Y_A = \\dfrac{K X_A}{1 + (1-K)X_A}$. [Week 3, p. 17–18]' },
    { id: 't1', q: '100 mol/s gas (60 % A) contacts 100 mol/s pure solvent, and 40 mol/s A is absorbed. What are the outlet gas and liquid flows?', a: 'Gas: 20 A + 40 B = 60 mol/s. Liquid: 100 C + 40 A = 140 mol/s. [Week 3, p. 14]' },
    { id: 't2', q: '$y_{in} = 0.12$, and 90 % of the solute is removed. What is $y_{out}$?', a: '$Y_{in} = 0.136$, $Y_{out} = 0.0136$, so $y_{out} = 0.0136/1.0136 = 0.013$. [practice exam 2 solutions.pdf, Q3b]' },
    { id: 't3', q: 'Derive the mole-ratio equilibrium from $y = Kx$.', a: 'Substitute $y = Y/(1+Y)$ and $x = X/(1+X)$, which gives $Y(1+X) = KX(1+Y)$ and so $Y = KX/(1+(1-K)X)$. [Week 3, p. 18]' },
    { id: 't4', q: 'Why can you write a straight-line balance in $X$–$Y$ even for concentrated gas?', a: "$G'$ and $L'$ are exactly constant, so $L'X_0 + G'Y_2 = L'X_1 + G'Y_1$ is linear in X and Y without any dilute assumption. [Week 3, p. 15–16]" },
    { id: 't5', q: 'In the CO₂ example, why is $G_1$ almost equal to $G_2$?', a: 'CO₂ is poorly soluble ($H = 1670$ atm), so only about $3.6\\cdot 10^{-2}$ kmol/h transfers. The flows barely change. [Week 3, p. 21–22]' },
  ],
  equations: [
    {
      id: 'bal',
      label: 'Total and component balance (one stage)',
      tex: String.raw`\vd{G_2} + \ve{L_0} = \vd{G_1} + \ve{L_1}, \qquad \vd{G_2} \vb{y_{A,2}} + \ve{L_0} \va{x_{A,0}} = \vd{G_1} \vb{y_{A,1}} + \ve{L_1} \va{x_{A,1}}`,
      vars: [
        { sym: String.raw`\vd{G_2}, \vd{G_1}`, desc: 'total gas flow in and out', unit: String.raw`\mathrm{kmol/h}\ (\text{or mol/s})` },
        { sym: String.raw`\ve{L_0}, \ve{L_1}`, desc: 'total liquid flow in and out', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\vb{y_A}, \va{x_A}`, desc: 'mole fraction of solute A in gas and liquid', unit: '–' },
      ],
      cite: `[${W3}, p. 12; ${FS}, p. 2, eq. 20]`,
      check: { status: 'verified', note: 'Matches W3 p. 12 and formula sheet eq. 20 (on PDF p. 3).' },
    },
    {
      id: 'inert',
      label: 'Inert flows',
      tex: String.raw`\ve{L'} = \ve{L}(1 - \va{x_A}) \;\Rightarrow\; \ve{L} = \frac{\ve{L'}}{1-\va{x_A}}, \qquad \vd{G'} = \vd{G}(1 - \vb{y_A}) \;\Rightarrow\; \vd{G} = \frac{\vd{G'}}{1-\vb{y_A}}`,
      vars: [
        { sym: String.raw`\ve{L'}`, desc: 'solute-free liquid (solvent) flow', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\vd{G'}`, desc: 'solute-free gas (carrier) flow', unit: String.raw`\mathrm{kmol/h}` },
      ],
      note: 'Valid at any point in the column.',
      cite: `[${W3}, p. 15; ${FS}, p. 2, eq. 17]`,
      check: { status: 'verified', note: 'Matches W3 p. 15; formula sheet eq. 17 gives the liquid form.' },
    },
    {
      id: 'ratio',
      label: 'Mole ratio ↔ mole fraction',
      tex: String.raw`\va{X_A} = \frac{\va{x_A}}{1-\va{x_A}}, \quad \vb{Y_A} = \frac{\vb{y_A}}{1-\vb{y_A}}, \qquad \va{x_A} = \frac{\va{X_A}}{1+\va{X_A}}, \quad \vb{y_A} = \frac{\vb{Y_A}}{1+\vb{Y_A}}`,
      vars: [
        { sym: String.raw`\va{X_A}`, desc: 'mol A per mol solvent', unit: '–' },
        { sym: String.raw`\vb{Y_A}`, desc: 'mol A per mol carrier gas', unit: '–' },
      ],
      cite: `[${W3}, p. 16; ${FS}, p. 2, eq. 18–19]`,
      check: { status: 'verified', note: 'Matches W3 p. 16, 18 and formula sheet eq. 18–19.' },
    },
    {
      id: 'inertbal',
      label: 'Inert component balance',
      tex: String.raw`\ve{L'} \va{X_{A,0}} + \vd{G'} \vb{Y_{A,2}} = \ve{L'} \va{X_{A,1}} + \vd{G'} \vb{Y_{A,1}}`,
      vars: [
        { sym: String.raw`\ve{L'}, \vd{G'}`, desc: 'constant inert flows', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\va{X_{A,0}}, \va{X_{A,1}}`, desc: 'liquid mole ratio in and out', unit: '–' },
        { sym: String.raw`\vb{Y_{A,2}}, \vb{Y_{A,1}}`, desc: 'gas mole ratio in and out', unit: '–' },
      ],
      note: 'Exact (no dilute assumption). Linear in X and Y.',
      cite: `[${W3}, p. 16–17; ${FS}, p. 2, eq. 22]`,
      check: { status: 'verified', note: 'Matches W3 p. 16–17 and formula sheet eq. 22 (N-stage indexing there).' },
    },
    {
      id: 'eqratio',
      label: 'Equilibrium in mole ratios',
      tex: String.raw`\vb{y_A} = \vc{K_A} \va{x_A} \quad\Rightarrow\quad \vb{Y_A} = \frac{\vc{K_A} \va{X_A}}{1 + (1 - \vc{K_A}) \va{X_A}}, \qquad \vc{K_A} = \frac{H_A}{P_{tot}}`,
      vars: [{ sym: String.raw`\vc{K_A}`, desc: 'distribution coefficient (Henry)', unit: '–' }],
      note: 'Derived by substituting $x_A = X_A/(1+X_A)$ and $y_A = Y_A/(1+Y_A)$ into $y_A = K_A x_A$. For very dilute systems $Y_A \\approx K_A X_A$ (as assumed in exercise 3, Oppg. 3d).',
      cite: `[${W3}, p. 17–18; ${E3T}, Oppgave 3d]`,
      check: { status: 'verified', note: 'Matches the derivation on W3 p. 18.' },
    },
  ],
}

// ---- helpers ---------------------------------------------------------------
const poly = (pts) => pts.map((p) => p.join(',')).join(' ')
const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const lin = (n, a, b) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n)
const frame = ({ x0, y0, w, h, xmax, ymax }) => ({ X: (v) => x0 + (v / xmax) * w, Y: (v) => y0 + h - (v / ymax) * h, x0, y0, w, h, xmax, ymax })
const Yeq = (K) => (X) => (K * X) / (1 + (1 - K) * X)

function Axes2({ f, xl, yl, xt, yt, xc = 'var-a', yc = 'var-b' }) {
  return (
    <g>
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 8} y2={f.y0 + f.h} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 8} />
      {xt.map((v) => <text key={v} x={f.X(v)} y={f.y0 + f.h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
      {yt.map((v) => <text key={v} x={f.x0 - 7} y={f.Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={f.x0 + f.w} y={f.y0 + f.h + 34} anchor="end" size={13} t={xc}>{xl}</Label>
      <Label x={f.x0 + 6} y={f.y0 - 4} anchor="start" size={13} t={yc}>{yl}</Label>
    </g>
  )
}

/** Physical root of (Y2 − mX)(1 + (1−K)X) = KX. */
function solveStage(Y2, m, K) {
  const A = -m * (1 - K)
  const B = Y2 * (1 - K) - m - K
  const C = Y2
  if (Math.abs(A) < 1e-12) return -C / B
  const D = Math.sqrt(B * B - 4 * A * C)
  return [(-B + D) / (2 * A), (-B - D) / (2 * A)].find((r) => r >= 0)
}

// ---- Visual 1: single stage ----------------------------------------------------
function Stage() {
  return (
    <Svg w={480} h={300} label="Single absorption stage with gas in at the bottom and liquid in at the top">
      <rect x={150} y={70} width={180} height={150} rx={10} style={{ fill: `color-mix(in srgb, ${tone('topic')} 12%, var(--bg))`, stroke: tone('topic'), strokeWidth: 2.5 }} />
      <Label x={240} y={130} size={13}>equilibrium:</Label>
      <Label x={240} y={150} size={14} t="var-c">y₁ = K x₁</Label>
      <Label x={240} y={190} size={11} t="muted">gas: A + B (inert)</Label>
      <Label x={240} y={206} size={11} t="muted">liquid: A + C (solvent)</Label>
      <Arrow x1={300} y1={290} x2={300} y2={222} t="var-d" />
      <Label x={308} y={280} anchor="start" size={13} t="var-d">G₂, y₂ (gas in)</Label>
      <Arrow x1={300} y1={68} x2={300} y2={8} t="var-d" />
      <Label x={308} y={22} anchor="start" size={13} t="var-d">G₁, y₁ (gas out)</Label>
      <Arrow x1={180} y1={8} x2={180} y2={68} t="var-e" />
      <Label x={172} y={22} anchor="end" size={13} t="var-e">L₀, x₀ (liquid in)</Label>
      <Arrow x1={180} y1={222} x2={180} y2={290} t="var-e" />
      <Label x={172} y={280} anchor="end" size={13} t="var-e">L₁, x₁ (liquid out)</Label>
    </Svg>
  )
}

// ---- Visual 2: stacked bars -----------------------------------------------------
function Bars() {
  const s = 1.6 // px per mol/s
  const base = 260
  const bar = (x, segs, label) => {
    let y = base
    return (
      <g>
        {segs.map(([v, t, name]) => {
          y -= v * s
          return (
            <g key={name}>
              <rect x={x} y={y} width={70} height={v * s} style={{ fill: `color-mix(in srgb, ${tone(t)} 35%, var(--bg))`, stroke: tone(t), strokeWidth: 1.5 }} />
              <text x={x + 35} y={y + (v * s) / 2 + 5} textAnchor="middle" className="svg-sub">{`${v} ${name}`}</text>
            </g>
          )
        })}
        <Label x={x + 35} y={base + 20} size={12}>{label}</Label>
        <Label x={x + 35} y={y - 6} size={12} t="muted">{segs.reduce((a, b) => a + b[0], 0)}</Label>
      </g>
    )
  }
  return (
    <Svg w={520} h={290} label="Stacked bars: gas in 60 A + 40 B, gas out 20 A + 40 B, liquid in 100 C, liquid out 100 C + 40 A">
      {bar(20, [[40, 'var-d', 'B'], [60, 'var-b', 'A']], 'gas in')}
      {bar(120, [[40, 'var-d', 'B'], [20, 'var-b', 'A']], 'gas out')}
      {bar(280, [[100, 'var-e', 'C']], 'liquid in')}
      {bar(380, [[100, 'var-e', 'C'], [40, 'var-a', 'A']], 'liquid out')}
      <line x1={20} y1={base - 40 * s} x2={192} y2={base - 40 * s} style={st('trap', true, 1.5)} />
      <line x1={280} y1={base - 100 * s} x2={450} y2={base - 100 * s} style={st('trap', true, 1.5)} />
      <Label x={196} y={base - 40 * s + 4} anchor="start" size={11} t="trap">G′ const.</Label>
      <Label x={456} y={base - 100 * s + 4} anchor="start" size={11} t="trap">L′ const.</Label>
    </Svg>
  )
}

// ---- Visual 3: fractions vs ratios ---------------------------------------------
function FracVsRatio() {
  const K = 0.893
  const f1 = frame({ x0: 50, y0: 24, w: 200, h: 200, xmax: 0.3, ymax: 0.3 })
  const f2 = frame({ x0: 340, y0: 24, w: 200, h: 200, xmax: 0.4, ymax: 0.4 })
  return (
    <Svg w={580} h={280} label="NH₃ equilibrium: straight in mole fractions, curved in mole ratios">
      <Axes2 f={f1} xl="x (–)" yl="y (–)" xt={[0, 0.1, 0.2, 0.3]} yt={[0.1, 0.2, 0.3]} />
      <line x1={f1.X(0)} y1={f1.Y(0)} x2={f1.X(0.3)} y2={f1.Y(K * 0.3)} style={st('var-c')} />
      <Label x={f1.X(0.15)} y={f1.Y(0.2)} size={13} t="var-c">y = 0.893x</Label>
      <Axes2 f={f2} xl="X (–)" yl="Y (–)" xt={[0, 0.2, 0.4]} yt={[0.2, 0.4]} />
      <line x1={f2.X(0)} y1={f2.Y(0)} x2={f2.X(0.4)} y2={f2.Y(0.4)} style={st('muted', true, 1.2)} />
      <polyline points={poly(lin(60, 0, 0.4).map((X) => [f2.X(X), f2.Y(Yeq(K)(X))]))} style={st('var-c')} />
      <Label x={f2.X(0.2)} y={f2.Y(0.3)} size={13} t="var-c">Y = 0.893X/(1+0.107X)</Label>
    </Svg>
  )
}

// ---- Visual 4 + interactive: stage in X–Y ---------------------------------------
function StageXY({ L0, compact }) {
  const K = 0.893
  const G2 = 150
  const y2 = 0.15
  const Gp = G2 * (1 - y2)
  const Y2 = y2 / (1 - y2)
  const m = L0 / Gp
  const X1 = solveStage(Y2, m, K)
  const Y1 = Y2 - m * X1
  const f = frame({ x0: 64, y0: 24, w: 320, h: 260, xmax: 0.1, ymax: 0.2 })
  const xEnd = Math.min(0.1, Y2 / m)
  return (
    <Svg w={430} h={330} label="One stage in mole ratios: balance line from (0, Y2) with slope −L′/G′ meets the equilibrium curve">
      <Axes2 f={f} xl="X (–)" yl="Y (–)" xt={[0, 0.02, 0.04, 0.06, 0.08, 0.1]} yt={[0.05, 0.1, 0.15, 0.2]} />
      <polyline points={poly(lin(60, 0, 0.1).map((X) => [f.X(X), f.Y(Yeq(K)(X))]))} style={st('var-c')} />
      <line x1={f.X(0)} y1={f.Y(Y2)} x2={f.X(xEnd)} y2={f.Y(Y2 - m * xEnd)} style={st('example')} />
      <circle cx={f.X(0)} cy={f.Y(Y2)} r={5} style={{ fill: tone('var-b') }} />
      <Label x={f.X(0) + 8} y={f.Y(Y2) - 8} anchor="start" size={12} t="var-b">{`(0, Y₂ = ${Y2.toFixed(3)})`}</Label>
      <polyline points={`${f.X(X1)},${f.Y(0)} ${f.X(X1)},${f.Y(Y1)} ${f.X(0)},${f.Y(Y1)}`} style={st('muted', true, 1.2)} />
      <circle cx={f.X(X1)} cy={f.Y(Y1)} r={6} style={{ fill: tone('example') }} />
      <Label x={f.X(X1) + 10} y={f.Y(Y1) - 8} anchor="start" size={12} t="example">{`(${X1.toFixed(3)}, ${Y1.toFixed(3)})`}</Label>
      {!compact && <Label x={f.X(0.06)} y={f.Y(0.07)} anchor="start" size={12} t="var-c">equilibrium</Label>}
      {!compact && <Label x={f.X(0.012)} y={f.Y(0.12)} anchor="start" size={12} t="example">slope −L′/G′</Label>}
    </Svg>
  )
}

function StageExplorer() {
  const [L0, setL0] = useState(400)
  const K = 0.893
  const G2 = 150
  const y2 = 0.15
  const Gp = G2 * (1 - y2)
  const Y2 = y2 / (1 - y2)
  const X1 = solveStage(Y2, L0 / Gp, K)
  const Y1 = Y2 - (L0 / Gp) * X1
  const x1 = X1 / (1 + X1)
  const y1 = Y1 / (1 + Y1)
  return (
    <Diagram
      title="One NH₃ scrubbing stage, live"
      caption={String.raw`Inert balance $Y_1 = Y_2 - \frac{L'}{G'}X_1$ against $Y = \frac{KX}{1+(1-K)X}$ with $G_2 = 150$ kmol/h, $y_2 = 0.15$, $K = 0.893$ and pure water. At $L_0 = 400$ kmol/h: $x_1 = 0.042$; the exact solution gives $y_1 = 0.037$ (the solution reports 0.038 after rounding $X_1$ to 0.044).`}
      cite={`[${E3}, Oppg. 2d]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="e"><M>L_0</M></V> = <strong>{L0.toFixed(0)}</strong> kmol/h</span>
            <input type="range" min={50} max={1000} step={1} value={L0} onChange={(e) => setL0(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <V c="a"><M>X_1</M> = {X1.toFixed(4)}</V> · <V c="b"><M>Y_1</M> = {Y1.toFixed(4)}</V> · <V c="a"><M>x_1</M> = {x1.toFixed(3)}</V> ·{' '}
          <V c="b"><M>y_1</M> = {y1.toFixed(3)}</V> · <V c="e"><M>L_1</M> = {(L0 / (1 - x1)).toFixed(2)}</V> · <V c="d"><M>G_1</M> = {(Gp / (1 - y1)).toFixed(2)}</V> kmol/h
        </p>
        <StageXY L0={L0} compact />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Count only what doesn't move">
        <MentalModel cite={`[${W3}, p. 11–18]`}>
          <T text="A theoretical stage brings gas and liquid into contact long enough to reach equilibrium, so both outlet streams have equilibrium compositions [Week 3, p. 11]. In distillation the flows stayed roughly constant. In absorption they don't: the solute moves from gas to liquid, so the gas shrinks and the liquid grows, sometimes a lot [Week 3, p. 13–14]." />
          <p>
            What does stay constant is everything that doesn&apos;t transfer: the inert carrier gas B and the solvent C [Week 3, p. 15].
            So write the balances on solute-free flows (<V c="d"><M>G&apos;</M></V>, <V c="e"><M>L&apos;</M></V>) and express composition as
            moles of solute per mole of inert (mole ratios <V c="a"><M>X</M></V>, <V c="b"><M>Y</M></V>). Then the component balance is
            exactly linear again [Week 3, p. 16–17]. The catch is that Henry&apos;s law is written in mole fractions. In mole ratios the
            equilibrium line bends, much like the α-curve in distillation [Week 3, p. 18].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Stage, inert flows and mole ratios">
        <Columns>
          <Diagram title="Single absorption stage" cite={`[${W3}, p. 11–12; ${E3T}, Oppgave 2, Fig. 1]`}
            caption="Gas in at the bottom, liquid in at the top; the outlet streams are in equilibrium.">
            <Stage />
          </Diagram>
          <div>
            <Def term="Theoretical stage (absorption)" cite={`[${W3}, p. 11]`}>
              {String.raw`Gas and liquid in contact long enough to reach equilibrium. The exiting streams have the equilibrium concentrations. If the inlet rates and compositions ($G_2$, $L_0$) are known, the outlet can be calculated.`}
            </Def>
            <Def term="System components" cite={`[${W3}, p. 12]`}>
              {String.raw`A (solute) is in both phases. B is an inert in the gas, and C is the liquid solvent. Each phase is binary: $y_B = 1 - y_A$, $x_C = 1 - x_A$.`}
            </Def>
          </div>
        </Columns>

        <Columns>
          <div>
            <Def term="Flow rate changes" cite={`[${W3}, p. 13]`}>
              Absorbing A increases the liquid flow and reduces the gas flow. Constant total flows can only be assumed if the change is negligible, i.e. for dilute streams.
            </Def>
            <Def term={String.raw`Inert (solute-free) flows $G'$, $L'$`} cite={`[${W3}, p. 15; ${E3}, Oppg. 2b]`}>
              {String.raw`Inerts and non-volatiles stay in their phase, so their flows are constant. $L'$ is moles of non-volatile solvent per second, and $G'$ is moles of insoluble carrier gas per second.`}
            </Def>
          </div>
          <Diagram title="Flow rates change, inerts don't" cite={`[${W3}, p. 14]`}
            caption="Gas 100 → 60 mol/s, liquid 100 → 140 mol/s, but the B and C segments stay the same: G′ and L′ are constant.">
            <Bars />
          </Diagram>
        </Columns>

        <Diagram title="Equilibrium in mole fractions vs mole ratios (NH₃, K = 0.893)" cite={`[${W3}, p. 17–18; ${E3}, Oppg. 2d]`}
            caption={String.raw`Straight in $x$–$y$, curved in $X$–$Y$: same shape as $y = \frac{\alpha x}{1+(\alpha-1)x}$ from distillation.`}>
            <FracVsRatio />
          </Diagram>
        <Columns>
          <div>
            <Def term="Mole ratio (molforhold)" cite={`[${W3}, p. 16; ${FS}, p. 2, eq. 18–19]`}>
              {String.raw`$X_A = x_A/(1-x_A)$ and $Y_A = y_A/(1-y_A)$, moles of A per mole of inert.`}
            </Def>
            <Def term="Inert component balance" cite={`[${E3}, Oppg. 2c; ${W3}, p. 16]`}>
              The ordinary component balance with each total flow replaced by its inert flow and each mole fraction by its mole ratio.
            </Def>
            <Def term="Equilibrium in mole ratios" cite={`[${W3}, p. 17–18]`}>
              {String.raw`Henry ($y_A = K_A x_A$) holds in mole fractions, not mole ratios. Converted, it has the same shape as the distillation α-relation.`}
            </Def>
          </div>
          <Diagram title="Graphical solution of one stage in mole ratios (NH₃)" cite={`[${E3}, Oppg. 2d]`}
            caption="Balance line Y₁ = 0.176 − 3.137 X₁ from (0, 0.176) with slope −L′/G′ meets the equilibrium curve at (0.044, 0.039).">
            <StageXY L0={400} />
          </Diagram>
        </Columns>

      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="bal" />
        <Eq id="inert" />
        <Eq id="ratio" />
        <Eq id="inertbal" />
        <Eq id="eqratio" />
        <StageExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="CO₂ absorbed in water on one equilibrium stage"
          given={String.raw`1 atm, 298.15 K. Gas in $G_2 = 100$ kmol/h with 20 mol % CO₂. Pure water in $L_0 = 300$ kmol/h. Physical absorption only.`}
          steps={[
            { body: String.raw`Inert flows: $L' = L_0 = 300$ kmol/h (pure water), and $G' = G_2(1 - y_2) = 100\cdot 0.8 = 80$ kmol/h.` },
            { body: String.raw`Inlet mole ratios: $X_0 = 0$ and $Y_2 = 0.2/0.8 = 0.25$.` },
            { body: String.raw`Inert balance: $300\cdot 0 + 80\cdot 0.25 = 300X_1 + 80Y_1$, so $Y_1 = 0.25 - 3.75X_1$.` },
            { body: String.raw`Henry: $H_{CO_2} = 1/6.0\cdot 10^{-4} = 1670$ atm, so $y = 1670x$ at 1 atm.` },
            { body: String.raw`In mole ratios: $Y_1 = \dfrac{1670X_1}{1 + (1-1670)X_1}$.` },
            { body: String.raw`Combine: $\dfrac{1670X_1}{1-1669X_1} = 0.25 - 3.75X_1$, which gives $X_1^2 + 0.33X_1 - 4.0\cdot 10^{-5} = 0$.` },
            { body: String.raw`Roots: $X_1 = 1.21\cdot 10^{-4}$ or $-0.33$. Keep the positive one.` },
            { body: String.raw`Back to mole fractions: $x_1 = 1.196\cdot 10^{-4}$ and $y_1 = 1670\, x_1 = 0.1997$.` },
            { body: String.raw`Outlet flows: $L_1 = L'/(1-x_1) = 300.036$ kmol/h and $G_1 = G'/(1-y_1) = 99.964$ kmol/h.` },
            { body: String.raw`Check: $L_0 + G_2 = 400 \approx L_1 + G_1 = 300.036 + 99.964$. ✓` },
          ]}
          result={String.raw`$x_1 = 1.196\cdot 10^{-4}$, $y_1 = 0.1997$`}
          cite={`[${W3}, p. 19–22]`}
        />
        <FadedExample
          title="NH₃ scrubbed in one stage"
          given={String.raw`1 atm, 298.15 K. Gas $G_2 = 150$ kmol/h with 15 mol % NH₃. Pure water $L_0 = 400$ kmol/h.`}
          steps={[
            { body: String.raw`Equilibrium constant from formula-sheet Table 2: $K = 0.893$, so $y = 0.893x$.` },
            { title: 'Inert flows.', body: String.raw`$L' = 400$ kmol/h and $G' = 150\cdot 0.85 = 127.5$ kmol/h.`, hidden: true },
            { title: 'Inlet mole ratios.', body: String.raw`$X_0 = 0$ and $Y_2 = 0.15/0.85 = 0.176$.`, hidden: true },
            { title: 'Balance line.', body: String.raw`$Y_1 = 0.176 - 3.137X_1$.`, hidden: true },
            { title: String.raw`Combine with $Y_1 = \dfrac{0.893X_1}{1+0.107X_1}$ and solve.`, body: String.raw`$X_1^2 + 7.246X_1 - 0.319 = 0$, so $X_1 = 0.044$ (discard −7.289).`, hidden: true },
            { title: String.raw`$Y_1$ and the mole fractions.`, body: String.raw`$Y_1 = 0.039$, $x_1 = 0.042$, $y_1 = 0.038$.`, hidden: true },
            { title: 'Outlet flows and check.', body: String.raw`$L_1 = 417.54$, $G_1 = 132.40$ kmol/h, and the sum is 549.94 ≈ 550. ✓`, hidden: true },
          ]}
          cite={`[${E3T}, Oppgave 2d; ${E3}, Oppg. 2d]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Henry is in mole fractions" cite={`[${W3}, p. 17–18]`}>
          {String.raw`$y = Kx$ but $Y \neq KX$. Convert, or use $Y = KX/(1+(1-K)X)$. The slide literally says "Note: not in mole ratios!"`}
        </Trap>
        <Trap title="Percent removal on a mole-ratio basis" cite={`[${PX2}, Q3b]`}>
          {String.raw`"90 % of CO₂ removed" means $Y_{out} = 0.1\, Y_{in}$, because $G'$ is constant. From $y_{in} = 0.12$: $Y_{in} = 0.136$, $Y_{out} = 0.0136$, $y_{out} = 0.013$.`}
        </Trap>
        <Trap title="Constant total flows only if dilute" cite={`[${W3}, p. 13; ${PX}, Ex. 3c]`}>
          Kremser and straight operating lines in mole fractions need small transfer. This is an exam question in its own right.
        </Trap>
        <Trap title="Get the inert flow from the stream you know" cite={`[${W3}, p. 20; ${E3}, Oppg. 2d]`}>
          {String.raw`Usually the inlet ($G' = G_2(1-y_2)$, and $L' = L_0$ for pure solvent).`}
        </Trap>
        <Trap title="Mole ratio must be ≥ 0" cite={`[${W3}, p. 21; ${E3}, Oppg. 2d]`}>
          Discard the negative root of the quadratic.
        </Trap>
        <Trap title="Convert back and check" cite={`[${W3}, p. 22]`}>
          {String.raw`Report mole fractions if asked, and verify $L_0 + G_2 = L_1 + G_1$.`}
        </Trap>
        <Trap title="Volume % = mole % for ideal gases, and volumetric gas flow needs the ideal gas law" cite={`[${E3T}, Oppgave 3a–b]`}>
          E.g. 3000 m³/h at 1 atm and 298.15 K gives 122.6 kmol/h.
        </Trap>
        <Trap title="Formula sheet rendering (source discrepancy)" cite={`[${FS}, p. 2, eq. 22, 24]`}>
          {String.raw`$L'$ and $G'$ show up as "L0" and "G0" in eq. 22 and eq. 24. They are inert flows, not "inlet" flows.`}
        </Trap>
      </Section>
    </>
  )
}
