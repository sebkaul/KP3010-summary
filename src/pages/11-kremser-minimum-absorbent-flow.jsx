import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W3 = 'Week 3 - Absorption and stripping with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E3 = 'exercise_03_solutions.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Kremser equation and minimum absorbent flow',
  topic: 'absorption',
  examWeight: {
    level: 'high',
    note: 'Kremser stages on 1 of 2 and minimum liquid flow on 1 of 2 practice exams (Practice exam 1 Ex. 3c–d; Autumn 2022 Q3c)',
  },
  examTasks: [
    "Practice exam 1, Ex. 3c: conditions for using Kremser's equation.",
    'Practice exam 1, Ex. 3d: theoretical stages for NH₃ absorption with Kremser (N = 2.48).',
    'Autumn 2022, Q3c: minimum water flow for 90 % CO₂ removal (L_min = 5947 kmol/h).',
  ],
  buildsOn: ['07-nmin-rmin-limiting-conditions', '09-absorption-equilibrium-stage-mole-ratios', '10-multistage-absorption-stripping'],
  usedIn: ['14-column-height-pressure-drop', '16-htu-ntu-packed-columns', '21-counter-current-extraction-design'],
  sources: [
    `[${W3}, p. 38–49]`,
    `[${FS}, p. 2, eq. 23, 25–28]`,
    '[exercise_03.pdf, Oppgave 3c–d]',
    `[${E3}, Oppg. 3c–d]`,
    `[${PX}, Ex. 3c–d]`,
    `[${PX2}, Q3c]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: "Under what conditions can you use Kremser's equation instead of stepping?", a: 'When the solutions are very dilute (below about 1 % in both gas and liquid), so the total flows are essentially constant and the equilibrium is linear, $y = Kx$. [Week 3, p. 38; practice_exam_solutions.pdf, Ex. 3c]' },
    { id: 'p2', kind: 'pretest', q: 'You keep reducing the solvent flow in an absorber. What eventually limits you?', a: "The liquid outlet can't exceed equilibrium with the entering gas. At that point the flow is minimal and you'd need ever more trays. [Week 3, p. 43]" },
    { id: 'p3', kind: 'pretest', q: 'How are the absorption factor A and the stripping factor S defined?', a: '$A = L/(KG)$ and $S = KG/L$. [Week 3, p. 38]' },
    { id: 't1', q: 'Acetone absorption: $y_{in} = 0.01$, $y_{out} = 0.001$, $x_{in} = 0$, $K = 2.53$, $G = 30$, $L = 90$ mol/h. Find A and N by Kremser.', a: '$A = 90/(2.53\\cdot 30) = 1.186$, $N = 5.16$. [Week 3, p. 40]' },
    { id: 't2', q: 'VOC stripping: $x_{in} = 0.1$, $x_{out} = 0.005$, $y_{in} = 0$, $K = 1.5$, $G = L = 500$. Find S and N.', a: '$S = 1.5\\cdot 500/500 = 1.5$, $N = 4.91$. [Week 3, p. 42]' },
    { id: 't3', q: "SO₂ absorber: $G' = 116.47$ kmol/h, $Y_{N+1} = 0.0526$, $Y_1 = 0.0050$, $K = 45.01$, pure water. Find $L'_{min}$.", a: "$X_N = 0.05/45.01 = 1.11\\cdot 10^{-3}$. $L'_{min} = 116.47\\cdot (0.0526 - 0.0050)/1.11\\cdot 10^{-3} \\approx 4994$ kmol/h. [exercise_03_solutions.pdf, Oppg. 3c]" },
    { id: 't4', q: 'CO₂ absorber: $G = 100$ kmol/h, $y_{in} = 0.12$, $y_{out} = 0.013$, $K = 66.7$, pure water. Find $L_{min}$.', a: '$L_{min} = 100\\cdot \\frac{0.12 - 0.013}{0.12/66.7} = 5947$ kmol/h. [practice exam 2 solutions.pdf, Q3c]' },
    { id: 't5', q: "Why not operate at $L'_{min}$, and what range is typical?", a: "At $L'_{min}$ the liquid outlet is at equilibrium, which needs ever more trays. Higher flows cost energy. The economic optimum is about 1.2–1.5 $L'_{min}$. [Week 3, p. 43]" },
  ],
  equations: [
    {
      id: 'kabs',
      label: "Kremser's equation for absorption",
      tex: String.raw`\vf{N} = \frac{\ln\left[\dfrac{\vb{y_{in}} - \vc{K} \va{x_{in}}}{\vb{y_{out}} - \vc{K} \va{x_{in}}}\left(1 - \dfrac{1}{\vd{A}}\right) + \dfrac{1}{\vd{A}}\right]}{\ln \vd{A}}, \qquad \vd{A} = \frac{\ve{L'}}{\vc{K} G'}`,
      vars: [
        { sym: String.raw`\vf{N}`, desc: 'number of theoretical stages', unit: '–' },
        { sym: String.raw`\vb{y_{in}}, \vb{y_{out}}`, desc: 'gas mole fraction in (bottom, $y_{N+1}$) and out (top, $y_1$)', unit: '–' },
        { sym: String.raw`\va{x_{in}}`, desc: 'liquid mole fraction in (top, $x_0$)', unit: '–' },
        { sym: String.raw`\vc{K}`, desc: 'equilibrium constant, $y = Kx$', unit: '–' },
        { sym: String.raw`\vd{A}`, desc: 'absorption factor', unit: '–' },
        { sym: String.raw`\ve{L'}, G'`, desc: 'liquid and gas flow (inert on the formula sheet, total inlet on the slide)', unit: String.raw`\mathrm{kmol/h}` },
      ],
      note: 'Very dilute (< 1 %), constant flows, linear equilibrium.',
      cite: `[${W3}, p. 38; ${FS}, p. 2, eq. 25–26]`,
      check: { status: 'verified', note: 'Matches W3 p. 38 and formula sheet eq. 25. Eq. 26 on the sheet lists **both** $A = L/(KG)$ or $A = L\'/(KG\')$.' },
    },
    {
      id: 'kstrip',
      label: "Kremser's equation for stripping",
      tex: String.raw`\vf{N} = \frac{\ln\left[\dfrac{\va{x_{in}} - \vb{y_{in}}/\vc{K}}{\va{x_{out}} - \vb{y_{in}}/\vc{K}}\left(1 - \dfrac{1}{S}\right) + \dfrac{1}{S}\right]}{\ln S}, \qquad S = \frac{\vc{K} G'}{\ve{L'}}`,
      vars: [
        { sym: String.raw`\va{x_{in}}, \va{x_{out}}`, desc: 'liquid mole fraction in (top, $x_0$) and out (bottom, $x_N$)', unit: '–' },
        { sym: String.raw`\vb{y_{in}}`, desc: 'stripping-gas mole fraction in ($y_{N+1}$)', unit: '–' },
        { sym: String.raw`S`, desc: 'stripping factor', unit: '–' },
      ],
      note: 'Same assumptions.',
      cite: `[${W3}, p. 38; ${FS}, p. 2, eq. 27–28]`,
      check: { status: 'verified', note: 'Matches W3 p. 38 and formula sheet eq. 27–28 (sheet lists both total and inert forms of S).' },
    },
    {
      id: 'lmin',
      label: 'Minimum absorbent flow (mole ratios)',
      tex: String.raw`\ve{L'_{min}} = G' \cdot \frac{\vb{Y_{N+1}} - \vb{Y_1}}{\dfrac{\vb{Y_{N+1}}}{\vc{K}} - \va{X_0}}`,
      vars: [
        { sym: String.raw`\ve{L'_{min}}`, desc: 'minimum inert liquid flow', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`G'`, desc: 'inert gas flow', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\vb{Y_{N+1}}, \vb{Y_1}`, desc: 'gas mole ratio in and out', unit: '–' },
        { sym: String.raw`\va{X_0}`, desc: 'liquid mole ratio in', unit: '–' },
        { sym: String.raw`\vc{K}`, desc: 'equilibrium constant, $Y = KX$', unit: '–' },
      ],
      note: 'From the inert balance with the outlet liquid saturated: $Y_{N+1} = K X_N$, so $X_N = Y_{N+1}/K$.',
      cite: `[${W3}, p. 45]`,
      check: { status: 'verified', note: 'Matches W3 p. 45.' },
    },
    {
      id: 'lminfs',
      label: 'Minimum liquid flow (mole fractions, formula sheet)',
      tex: String.raw`\ve{L_{min}} = G \cdot \frac{\vb{y_{in}} - \vb{y_{out}}}{x_{max} - \va{x_{in}}} = G \cdot \frac{\vb{y_{in}} - \vb{y_{out}}}{\dfrac{\vb{y_{in}}}{\vc{K}} - \va{x_{in}}}`,
      vars: [
        { sym: String.raw`x_{max}`, desc: 'liquid outlet in equilibrium with the gas inlet, $y_{in}/K$', unit: '–' },
        { sym: String.raw`G`, desc: 'gas flow', unit: String.raw`\mathrm{kmol/h}` },
      ],
      note: 'Dilute form, used in the Autumn 2022 exam.',
      cite: `[${FS}, p. 2, eq. 23; ${PX2}, Q3c]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 23.' },
    },
  ],
}

// ---- helpers ---------------------------------------------------------------
const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const poly = (pts) => pts.map((p) => p.join(',')).join(' ')
const kremser = (A, ratio) => Math.log(ratio * (1 - 1 / A) + 1 / A) / Math.log(A)

// ---- Visual 1: rotating operating line --------------------------------------
function Rotating() {
  const K = 0.68
  const Y1 = 0.0022
  const YN1 = 0.0225
  const Xmax = YN1 / K
  const x0 = 64
  const y0 = 24
  const w = 460
  const h = 280
  const X = (v) => x0 + (v / 0.04) * w
  const Y = (v) => y0 + h - (v / 0.03) * h
  const ends = [
    { XN: 0.012, t: 'muted', lab: 'large L′' },
    { XN: 0.0221, t: 'var-e', lab: 'actual 1.5 L′_min' },
    { XN: Xmax, t: 'trap', lab: 'L′_min: pinch, ∞ stages' },
  ]
  return (
    <Svg w={580} h={350} label="Operating lines from the top point rotating down to the pinch on the equilibrium line">
      <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      {[0, 0.01, 0.02, 0.03, 0.04].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
      {[0.01, 0.02, 0.03].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={x0 + w} y={y0 + h + 34} anchor="end" size={13} t="var-a">X (–)</Label>
      <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-b">Y (–)</Label>
      <line x1={X(0)} y1={Y(0)} x2={X(0.04)} y2={Y(0.04 * K)} style={st('var-c')} />
      <Label x={X(0.02) + 8} y={Y(0.02 * K) + 18} anchor="start" size={12} t="var-c">Y = 0.68X</Label>
      <line x1={X(0)} y1={Y(YN1)} x2={X(0.04)} y2={Y(YN1)} style={st('var-b', true, 1.3)} />
      <Label x={X(0.0005)} y={Y(YN1) - 6} anchor="start" size={11} t="var-b">Y_N+1 = 0.0225</Label>
      {ends.map((e) => (
        <g key={e.lab}>
          <line x1={X(0)} y1={Y(Y1)} x2={X(e.XN)} y2={Y(YN1)} style={st(e.t, false, e.t === 'muted' ? 1.8 : 2.5)} />
          <circle cx={X(e.XN)} cy={Y(YN1)} r={5} style={{ fill: tone(e.t) }} />
        </g>
      ))}
      <Label x={X(0.012)} y={Y(YN1) - 10} anchor="middle" size={11} t="muted">large L′</Label>
      <Label x={X(0.0221)} y={Y(YN1) - 10} anchor="middle" size={11} t="var-e">1.5 L′_min (X_N ≈ 0.022)</Label>
      <Label x={X(Xmax) + 10} y={Y(YN1) + 18} anchor="start" size={11} t="trap">L′_min: pinch,</Label>
      <Label x={X(Xmax) + 10} y={Y(YN1) + 32} anchor="start" size={11} t="trap">∞ stages</Label>
      <Label x={X(Xmax) + 10} y={Y(YN1) + 46} anchor="start" size={11} t="trap">X_N,max = 0.0331</Label>
      <Arrow x1={X(0.008)} y1={Y(0.0285)} x2={X(0.03)} y2={Y(0.0285)} t="example" />
      <Label x={X(0.019)} y={Y(0.0285) - 8} size={11} t="example">X_N grows as L′ falls</Label>
      <circle cx={X(0)} cy={Y(Y1)} r={5} style={{ fill: tone('ink') }} />
      <Label x={X(0) + 8} y={Y(Y1) + 4} anchor="start" size={11}>(X₀, Y₁) = (0, 0.0022)</Label>
    </Svg>
  )
}

// ---- Visual 2: trade-off ------------------------------------------------------
function TradeOff() {
  const f = { x0: 50, y0: 20, w: 400, h: 210 }
  const X = (r) => f.x0 + ((r - 1) / 2) * f.w
  const Y = (c) => f.y0 + f.h - c * f.h
  const rs = Array.from({ length: 81 }, (_, i) => 1.02 + (i / 80) * 1.98)
  const trays = (r) => Math.min(0.95, 0.06 / (r - 0.97))
  const energy = (r) => 0.1 + 0.33 * (r - 1)
  return (
    <Svg w={480} h={280} label="Qualitative: trays fall and energy duty rises with L′/L′_min; 1.2–1.5 shaded">
      <rect x={X(1.2)} y={f.y0} width={X(1.5) - X(1.2)} height={f.h} style={{ fill: `color-mix(in srgb, ${tone('intuition')} 18%, var(--bg))` }} />
      <Label x={(X(1.2) + X(1.5)) / 2} y={f.y0 + 16} size={11} t="intuition">economic optimum</Label>
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 10} y2={f.y0 + f.h} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 6} />
      {[1, 1.5, 2, 2.5, 3].map((r) => <text key={r} x={X(r)} y={f.y0 + f.h + 17} textAnchor="middle" className="svg-sub">{r}</text>)}
      <Label x={f.x0 + f.w} y={f.y0 + f.h + 36} anchor="end" size={13}>L′ / L′_min</Label>
      <polyline points={poly(rs.map((r) => [X(r), Y(trays(r))]))} style={st('var-f')} />
      <polyline points={poly(rs.map((r) => [X(r), Y(energy(r))]))} style={st('var-d')} />
      <Label x={X(2.9)} y={Y(trays(2.9)) - 8} anchor="end" size={12} t="var-f">number of trays</Label>
      <Label x={X(2.98)} y={Y(energy(2.98)) + 30} anchor="end" size={12} t="var-d">energy duty</Label>
    </Svg>
  )
}

// ---- Visual 3: absorber vs stripper ---------------------------------------------
function Factors() {
  const col = (x, title, f, dir, formula) => (
    <g>
      <rect x={x} y={40} width={90} height={180} rx={12} style={st('topic', false, 2.5)} />
      <Label x={x + 45} y={28} size={14}>{title}</Label>
      <Label x={x + 45} y={120} size={14} t="var-d">{f}</Label>
      <Label x={x + 45} y={145} size={11} t="muted">{dir}</Label>
      <Arrow x1={x + 110} y1={210} x2={x + 110} y2={50} t="var-b" />
      <Label x={x + 118} y={60} anchor="start" size={11} t="var-b">gas</Label>
      <Arrow x1={x - 20} y1={50} x2={x - 20} y2={210} t="var-a" />
      <Label x={x - 26} y={205} anchor="end" size={11} t="var-a">liquid</Label>
      <Label x={x + 45} y={245} size={11}>{formula}</Label>
    </g>
  )
  return (
    <Svg w={500} h={270} label="Absorber with A = L/(KG) and stripper with S = KG/L">
      {col(70, 'absorber', 'A = L/(KG)', 'solute gas → liquid', 'Kremser in y')}
      {col(320, 'stripper', 'S = KG/L', 'solute liquid → gas', 'Kremser in x')}
      <Label x={250} y={130} size={16} t="trap">S = 1/A</Label>
    </Svg>
  )
}

// ---- Interactive ----------------------------------------------------------------
function KremserExplorer() {
  const [Lp, setLp] = useState(90)
  const K = 0.68
  const Gp = 97.8
  const ratio = 10
  const A = Lp / (K * Gp)
  const N = kremser(A, ratio)
  const x0 = 64
  const y0 = 20
  const w = 380
  const h = 250
  const X = (l) => x0 + ((l - 50) / 250) * w
  const Yv = (n) => y0 + h - (Math.min(n, 20) / 20) * h
  const ls = Array.from({ length: 160 }, (_, i) => 61 + (i / 159) * 239)
  return (
    <Diagram
      title="Kremser stages vs solvent flow"
      caption={String.raw`Eq. 25 with $A = L'/(KG')$, $G' = 97.8$ kmol/h, $K = 0.68$, $x_{in} = 0$, $y_{in}/y_{out} = 10$ [Week 3, p. 46–49]. N climbs steeply as $L' \to L'_{min} = 60$ kmol/h. At $L' = 90$: $A = 1.35$, $N \approx 4.0$. The slide's 4.17 uses $A = 1.32$ with total G.`}
      cite={`[${W3}, p. 46–49; ${FS}, p. 2, eq. 25–26]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="e"><M>L&apos;</M></V> = <strong>{Lp.toFixed(0)}</strong> kmol/h</span>
            <input type="range" min={62} max={300} step={1} value={Lp} onChange={(e) => setLp(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <V c="d"><M>A</M> = {A.toFixed(2)}</V> · <V c="f"><M>N</M> = {N.toFixed(2)}</V> theoretical stages
        </p>
        <Svg w={480} h={320} label="Number of stages from Kremser against solvent flow">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {[50, 100, 150, 200, 250, 300].map((l) => <text key={l} x={X(l)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{l}</text>)}
          {[5, 10, 15, 20].map((n) => <text key={n} x={x0 - 7} y={Yv(n) + 4} textAnchor="end" className="svg-sub">{n}</text>)}
          <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13} t="var-e">L′ (kmol/h)</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-f">N (–)</Label>
          <line x1={X(60)} y1={y0} x2={X(60)} y2={y0 + h} style={st('trap', true, 1.5)} />
          <Label x={X(60) + 6} y={y0 + 14} anchor="start" size={12} t="trap">L′_min = 60</Label>
          <polyline points={poly(ls.map((l) => [X(l), Yv(kremser(l / (K * Gp), ratio))]))} style={st('var-f')} />
          <circle cx={X(Lp)} cy={Yv(N)} r={6} style={{ fill: tone('var-e') }} />
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="One number decides the stage count">
        <MentalModel cite={`[${W3}, p. 38–45; ${FS}, p. 2, eq. 26]`}>
          <T text="When the system is dilute, both the operating line and the equilibrium line are straight in mole fractions. Stepping between two straight lines has a closed-form answer: Kremser's equation [Week 3, p. 38]." />
          <p>
            Everything depends on one number, the <V c="d">absorption factor</V> <M>{String.raw`A = L/(KG)`}</M>. It is the ratio of the
            operating-line slope <M>L/G</M> to the equilibrium slope <V c="c"><M>K</M></V>, i.e. how fast the liquid can take up solute
            compared with how fast equilibrium pushes it back [Week 3, p. 38; FormelarkKP3010.pdf, p. 2, eq. 26]. Stripping is the mirror
            image, with <M>{String.raw`S = KG/L`}</M> [Week 3, p. 38]. The solvent flow has a floor. Lowering <V c="e"><M>L&apos;</M></V>{' '}
            rotates the operating line about the top end point until its bottom end touches the equilibrium line. There the rich liquid
            leaving the bottom is saturated with respect to the entering gas, and you&apos;d need infinite stages. That is{' '}
            <M>{String.raw`L'_{min}`}</M> [Week 3, p. 43–45]. As in distillation with <M>{String.raw`R_{min}`}</M>, you design at a
            modest multiple of it [Week 3, p. 43].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Kremser conditions and the minimum flow">
        <Columns>
          <Diagram title="Absorber vs stripper factors" cite={`[${W3}, p. 38]`} caption="A for absorption (formula in y), S for stripping (formula in x).">
            <Factors />
          </Diagram>
          <div>
            <Def term="Analytical Kremser solution" cite={`[${W3}, p. 38]`}>
              Usable when the solutions are very dilute (less than 1 % in both gas and liquid).
            </Def>
            <Def term="Kremser conditions (exam wording)" cite={`[${PX}, Ex. 3c]`}>
              Uses mole or mass fractions and constant total gas and liquid flows. Only a small amount of solute may transfer, so the solutions must be dilute.
            </Def>
            <Def term={String.raw`Absorption factor $A$`} cite={`[${W3}, p. 38, 49; ${FS}, p. 2, eq. 26]`}>
              {String.raw`$A = L_{in}/(K G_{in})$ on the slide, $A = L'/(KG')$ on the formula sheet. Both are used, and they differ slightly (e.g. 1.32 vs 1.35).`}
            </Def>
            <Def term={String.raw`Stripping factor $S$`} cite={`[${W3}, p. 38; ${FS}, p. 2, eq. 28]`}>
              {String.raw`$S = K G_{in}/L_{in}$ (slide), $S = KG'/L'$ (formula sheet).`}
            </Def>
          </div>
        </Columns>

        <Diagram title="Operating line rotating to minimum flow (Example 7)" cite={`[${W3}, p. 44–45, 48]`}
            caption="Fixed top point (X₀, Y₁) and fixed bottom gas level Y_N+1. Lowering L′ swings the line down until its bottom end sits on Y = 0.68X at X_N,max = 0.0331. The actual line at 1.5 L′_min is drawn from the balance (X_N ≈ 0.022); the slide prints 0.22 — see the source check under the worked example.">
            <Rotating />
          </Diagram>
        <Columns>
          <div>
            <Def term={String.raw`Minimum absorbent flow $L'_{min}$`} cite={`[${W3}, p. 43, 45]`}>
              {"Usually the gas flow, the gas inlet/outlet compositions and the liquid inlet composition are known. The liquid flow and outlet composition depend on each other. The outlet concentration can't exceed equilibrium, so the lowest flow is when the outlet liquid is at equilibrium with the inlet gas."}
            </Def>
            <Def term="Flow trade-off" cite={`[${W3}, p. 43]`}>
              {String.raw`Low liquid flow means high outlet concentration and more trays. High liquid flow means low outlet concentration and higher energy duty. The economic optimum is about 1.2–1.5 $L'_{min}$.`}
            </Def>
          </div>
        </Columns>
        <Diagram title="Solvent-flow trade-off (qualitative)" cite={`[${W3}, p. 43]`}
          caption="Built from the slide text only; no numbers on the vertical axis.">
          <TradeOff />
        </Diagram>
        <Gap>{String.raw`The exercise 3, Oppg. 3d official solution is internally inconsistent. Its operating line has slope 47.32 and A = 1.05, but $L'/G' = 5880/116.47 = 50.5$, and its own $X_N = 9.43\cdot 10^{-4}$ matches 50.5. It reports about 6.7 stages (graphical) and N ≈ 7 (Kremser), so it is not used as an example here.`}</Gap>
        <Gap>The cost-trade-off visual is built from the text on Week 3, p. 43. No figure is in the files.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="kabs" />
        <KremserExplorer />
        <Eq id="kstrip" />
        <Eq id="lmin" />
        <Eq id="lminfs" />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Ethanol absorber: minimum flow, design flow, outlet and stages"
          given={String.raw`$G = 100$ kmol/h with 2.2 mol % ethanol, 90 % absorbed, $Y = 0.68X$, pure water. Design $L' = 1.5L'_{min}$.`}
          steps={[
            { body: String.raw`Data: $x_{in} = 0$, $y_{in} = 0.022$, $y_{out} = 0.0022$.` },
            { body: String.raw`Inert gas: $G' = 100(1 - 0.022) = 97.8$ kmol/h.` },
            { body: String.raw`Ratios: $X_0 = 0$, $Y_{N+1} = 0.022/0.978 = 0.0225$, $Y_1 = 0.0022/0.9978 = 0.0022$.` },
            { body: String.raw`Minimum flow: $L'_{min} = 97.8 \cdot \dfrac{0.0225 - 0.0022}{0.0225/0.68 - 0} = 60.0$ kmol/h.` },
            { body: String.raw`Design flow: $L' = 1.5\cdot 60.0 = 90.0$ kmol/h.` },
            { body: String.raw`Outlet liquid: $X_N = X_0 + \frac{G'}{L'}(Y_{N+1} - Y_1) = 0.22$, so $x_N = 0.22/1.22 = 0.216$ and $L_N = L'/(1 - x_N) = 92.0$ kmol/h.` },
            { body: String.raw`Absorption factor: $A = \dfrac{L}{KG} = \dfrac{90}{0.68\cdot 100} = 1.32$. Alternatively $A = \dfrac{L'}{KG'} = \dfrac{90}{0.68\cdot 97.8} = 1.35$.` },
            { body: String.raw`Kremser (with $A = 1.32$): $N = \dfrac{\ln\left[10(1 - \frac{1}{1.32}) + \frac{1}{1.32}\right]}{\ln 1.32} = \dfrac{\ln(3.18)}{\ln(1.32)} = 4.17$ theoretical stages.` },
          ]}
          result={String.raw`$L'_{min} = 60.0$ kmol/h, $L' = 90.0$ kmol/h, $L_N = 92.0$ kmol/h, $N = 4.17$`}
          cite={`[${W3}, p. 46–49]`}
        />
        <div className="eq-mismatch">
          <T text={String.raw`**Source check (step 6):** the slide [Week 3, p. 48] prints $X_N = 0.22$ and $x_N = 0.216$, as the content does. But $\frac{97.8}{90}(0.0225 - 0.0022) = 0.022$, and $L_N = 90/(1 - 0.0216) = 92.0$ only fits $x_N = 0.0216$. The printed values look a factor 10 too large; they are shown unchanged above.`} />
        </div>
        <FadedExample
          title="Ammonia absorber stages by Kremser"
          given={String.raw`$G = 100$ kmol/h with 3 mol % NH₃ in air, outlet 0.5 mol %. Pure water $L = 50$ kmol/h. $y = 0.35x$.`}
          steps={[
            { title: 'State the conditions for using Kremser.', body: 'Dilute solutions, a small amount of solute transferred, and constant total flows.', hidden: true },
            { body: String.raw`Data: $x_{in} = 0$, $y_{in} = 0.03$, $y_{out} = 0.005$, $K = 0.35$.` },
            { title: 'Flows.', body: String.raw`$L' = 50$ kmol/h (pure water) and $G' = 100(1 - 0.03) = 97$ kmol/h.`, hidden: true },
            { title: 'Absorption factor.', body: String.raw`$A = 50/(0.35\cdot 97) = 1.47$.`, hidden: true },
            { title: 'Kremser argument.', body: String.raw`$\frac{0.03}{0.005}(1 - \frac{1}{1.47}) + \frac{1}{1.47} = 2.60$.`, hidden: true },
            { title: 'N.', body: String.raw`$N = \ln(2.60)/\ln(1.47) = 2.48$ theoretical stages.`, hidden: true },
          ]}
          cite={`[${PX}, Ex. 3c–d]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Kremser is in mole fractions" cite={`[${W3}, p. 38; ${PX}, Ex. 3c]`}>
          {String.raw`Use $y_{in}$, $y_{out}$, $x_{in}$ and $y = Kx$, not $Y$ and $X$.`}
        </Trap>
        <Trap title="Total or inert flows in A (source discrepancy)" cite={`[${W3}, p. 49; ${FS}, p. 2, eq. 26]`}>
          {String.raw`The slide uses $L_{in}/(KG_{in})$ and the formula sheet $L'/(KG')$. For dilute systems the difference is small (1.32 vs 1.35), but say which one you use.`}
        </Trap>
        <Trap title="Absorption uses A, stripping uses S" cite={`[${W3}, p. 38, 42]`}>
          {String.raw`And the stripping formula is written in liquid compositions, with $y_{in}/K$ subtracted.`}
        </Trap>
        <Trap title="Saturated at the bottom, not the top" cite={`[${W3}, p. 45; ${FS}, p. 2, eq. 23]`}>
          {String.raw`At $L_{min}$ the **outlet liquid** is in equilibrium with the **inlet gas**: $X_N = Y_{N+1}/K$ (or $x_{max} = y_{in}/K$).`}
        </Trap>
        <Trap title="Dividing by K" cite={`[${PX2}, Q3c]`}>
          {String.raw`In $L_{min}$ the denominator is $y_{in}/K$. Exam: $0.12/66.7 = 1.8\cdot 10^{-3}$, giving $L_{min} = 5947$ kmol/h. Multiplying by K instead is a classic slip.`}
        </Trap>
        <Trap title="Kremser ≠ graphical exactly" cite={`[${W3}, p. 30, 37, 40, 42]`}>
          {"5.16 vs 5.0 for acetone absorption, 4.91 vs 5.1 for VOC stripping. Both are accepted methods, so don't panic if they differ slightly."}
        </Trap>
        <Trap title="Design factor" cite={`[${W3}, p. 43]`}>
          {String.raw`Absorbers use about 1.2–1.5 $L'_{min}$. Example 7 uses 1.5. Distillation's 1.1–1.5 $R_{min}$ is a different number (page 07).`}
        </Trap>
        <Trap title="Fall-back values" cite={`[${PX2}, Q3c; ${PX}, Ex. 3e]`}>
          {'Exams give "if you couldn\'t solve a, use K = 80". Use them, because the later parts are graded on method.'}
        </Trap>
      </Section>
    </>
  )
}
