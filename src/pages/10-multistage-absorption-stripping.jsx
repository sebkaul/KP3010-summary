import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W3 = 'Week 3 - Absorption and stripping with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E3 = 'exercise_03_solutions.pdf'
const E3T = 'exercise_03.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Multistage absorption and stripping (McCabe–Thiele)',
  topic: 'absorption',
  examWeight: {
    level: 'medium',
    note: 'Practice exams give the stage count or use Kremser instead of stepping; L/G effect asked in Autumn 2022 Q3e.4',
  },
  examTasks: [
    'Autumn 2022, Q3e.4: does increasing the water flow from 6200 to 6500 kmol/h increase CO₂ removal? (Yes: more driving force.)',
    'Autumn 2022, Q3d: gives the stage count (11.4) directly and asks for packing height (page 14).',
    'Practice exam 1, Ex. 3d: stage count by Kremser instead of stepping (page 11).',
  ],
  buildsOn: ['05-column-balances-operating-lines', '09-absorption-equilibrium-stage-mole-ratios'],
  usedIn: ['11-kremser-minimum-absorbent-flow', '16-htu-ntu-packed-columns'],
  sources: [
    `[${W3}, p. 24–37]`,
    `[${FS}, p. 2, eq. 21–22, 24]`,
    `[${E3T}, Oppgave 3]`,
    `[${E3}, Oppg. 3a–b, 3d]`,
    `[${PX2}, Q3d, Q3e.4]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'In an absorption McCabe–Thiele diagram, is the operating line above or below the equilibrium line?', a: 'Above. For stripping it is below. [Week 3, p. 30, 37]' },
    { id: 'p2', kind: 'pretest', q: 'In an N-stage absorber, which stage does the fresh liquid enter, and which does the fresh gas enter?', a: 'Liquid $L_0$ enters stage 1 (top). Gas $G_{N+1}$ enters stage N (bottom). [Week 3, p. 25]' },
    { id: 'p3', kind: 'pretest', q: '90 % of a solute is absorbed. How are $Y_1$ and $Y_{N+1}$ related?', a: '$Y_1 = 0.10\\, Y_{N+1}$. [Week 3, p. 29]' },
    { id: 't1', q: 'In the acetone example, what is $X_N$ and why is it so small?', a: '$X_N = \\frac{29.7}{90}(0.010 - 0.001) = 2.97\\cdot 10^{-3}$. Only a little acetone is fed (1 mol %) and the water flow is three times the gas flow. [Week 3, p. 29]' },
    { id: 't2', q: 'SO₂ absorber: 3000 m³/h gas at 1 atm and 298.15 K, 5 vol % SO₂. Find the total molar gas flow and $y_{N+1}$. ($R = 8.205\\cdot 10^{-5}$ m³·atm/(mol·K))', a: '$\\dot n = pV/RT = 3000/(298.15\\cdot 8.205\\cdot 10^{-5}) = 122.6$ kmol/h. $y_{N+1} = 0.05$, because vol % equals mol % for an ideal gas. [exercise_03_solutions.pdf, Oppg. 3a–b]' },
    { id: 't3', q: 'List the five steps for a McCabe–Thiele stage count in absorption or stripping.', a: 'Calculate the unknowns, plot the operating and equilibrium lines, plot the inlet/outlet points, draw the stages from one point to the other, and count them. [Week 3, p. 34]' },
    { id: 't4', q: "In the VOC stripper, what does $L'/G' = 1$ mean for the operating line, and where does it cross $Y = 0$?", a: 'The slope is 1, giving $Y = X - 0.005$. It crosses $Y = 0$ at $X = X_N = 0.005$, the clean-gas inlet end. [Week 3, p. 37]' },
    { id: 't5', q: 'Where in the stepping do you stop?', a: 'When you reach or pass the other end point, $X_N$ for absorption starting from $(X_0, Y_1)$. A fractional last step gives fractional stages (5.0, 5.1). [Week 3, p. 30, 37]' },
  ],
  equations: [
    {
      id: 'overall',
      label: 'Overall mass balance (N stages)',
      tex: String.raw`\ve{L_0} + \vd{G_{N+1}} = \ve{L_N} + \vd{G_1}`,
      vars: [
        { sym: String.raw`\ve{L_0}, \ve{L_N}`, desc: 'total liquid in (top) and out (bottom)', unit: String.raw`\mathrm{kmol/h}\ (\text{or mol/h})` },
        { sym: String.raw`\vd{G_{N+1}}, \vd{G_1}`, desc: 'total gas in (bottom) and out (top)', unit: String.raw`\mathrm{kmol/h}` },
      ],
      cite: `[${W3}, p. 26]`,
      check: { status: 'verified', note: 'Matches W3 p. 26.' },
    },
    {
      id: 'comp',
      label: 'Component balance (inert form, top of column to stage n)',
      tex: String.raw`\ve{L'} \va{X_0} + \vd{G'} \vb{Y_{n+1}} = \ve{L'} \va{X_n} + \vd{G'} \vb{Y_1}`,
      vars: [
        { sym: String.raw`\ve{L'}, \vd{G'}`, desc: 'inert liquid and gas flow', unit: String.raw`\mathrm{kmol/h}` },
        { sym: String.raw`\va{X_0}, \va{X_n}`, desc: 'liquid mole ratio entering stage 1, leaving stage n', unit: '–' },
        { sym: String.raw`\vb{Y_1}, \vb{Y_{n+1}}`, desc: 'gas mole ratio leaving stage 1, entering stage n', unit: '–' },
      ],
      note: 'For the whole column, set $n = N$.',
      cite: `[${W3}, p. 26; ${FS}, p. 2, eq. 22]`,
      check: { status: 'verified', note: 'Matches W3 p. 26 and formula sheet eq. 22.' },
    },
    {
      id: 'op',
      label: 'Operating line (driftslinje for absorbsjon/stripping)',
      tex: String.raw`\vb{Y_{n+1}} = \frac{\ve{L'}}{\vd{G'}} \va{X_n} + \left(\vb{Y_1} - \frac{\ve{L'}}{\vd{G'}} \va{X_0}\right)`,
      vars: [{ sym: String.raw`\ve{L'}/\vd{G'}`, desc: 'slope, ratio of inert flows', unit: '–' }],
      note: 'Straight in X–Y because the inert flows are constant. Used for both absorption and stripping.',
      cite: `[${W3}, p. 26, 33; ${FS}, p. 2, eq. 24]`,
      check: { status: 'verified', note: 'Matches W3 p. 26 and formula sheet eq. 24.' },
    },
    {
      id: 'eq',
      label: 'Equilibrium (as used in the multistage examples)',
      tex: String.raw`\vb{Y_A} = \vc{K_A} \va{X_A}`,
      vars: [{ sym: String.raw`\vc{K_A}`, desc: 'distribution coefficient', unit: '–' }],
      note: 'A straight line in X–Y. The slides and exercises use this directly for dilute systems. Strictly, the mole-ratio form is $Y = KX/(1+(1-K)X)$ (page 09).',
      cite: `[${W3}, p. 26, 28; ${E3T}, Oppgave 3d]`,
      check: { status: 'verified', note: 'W3 p. 26 writes "Henry\'s law: $Y_A = K_A X_A$".' },
    },
  ],
}

// ---- helpers ---------------------------------------------------------------
const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const frame = ({ x0 = 70, y0 = 24, w, h, xmax, ymax }) => ({ X: (v) => x0 + (v / xmax) * w, Y: (v) => y0 + h - (v / ymax) * h, x0, y0, w, h })

/** Step from (X0, Y1) between Y = KX and the straight operating line to the other end XN. */
function stepping({ K, m, X0, Y1, XN }) {
  const op = (X) => m * X + Y1 - m * X0
  const up = XN > X0
  const steps = []
  let Y = Y1
  let Xp = X0
  let frac = null
  for (let n = 1; n <= 60; n++) {
    const X = Y / K
    const done = up ? X >= XN : X <= XN
    const Yn = done ? Y : op(X)
    steps.push({ Xp, Y, X, Yn })
    if (done) {
      frac = n - 1 + (XN - Xp) / (X - Xp)
      break
    }
    if (up && Yn <= Y) break
    Y = Yn
    Xp = X
  }
  return { steps, frac, op }
}

function McT({ K, m, X0, Y1, XN, YN1, xmax, ymax, xt, yt, xfmt = (v) => v, yfmt = (v) => v, note, opLabel, eqLeft, w = 460 }) {
  const f = frame({ w: w - 110, h: 300, xmax, ymax })
  const g = stepping({ K, m, X0, Y1, XN })
  const pinch = g.frac == null
  return (
    <Svg w={w} h={370} label="McCabe–Thiele diagram in mole ratios">
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 8} y2={f.y0 + f.h} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 8} />
      {xt.map((v) => <text key={v} x={f.X(v)} y={f.y0 + f.h + 17} textAnchor="middle" className="svg-sub">{xfmt(v)}</text>)}
      {yt.map((v) => <text key={v} x={f.x0 - 7} y={f.Y(v) + 4} textAnchor="end" className="svg-sub">{yfmt(v)}</text>)}
      <Label x={f.x0 + f.w} y={f.y0 + f.h + 34} anchor="end" size={13} t="var-a">X (–)</Label>
      <Label x={f.x0 + 6} y={f.y0 - 4} anchor="start" size={13} t="var-b">Y (–)</Label>
      <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(Math.min(xmax, ymax / K))} y2={f.Y(Math.min(ymax, K * xmax))} style={st('var-c')} />
      <line x1={f.X(X0)} y1={f.Y(Y1)} x2={f.X(XN)} y2={f.Y(YN1)} style={st('var-e')} />
      {g.steps.map((s, i) => (
        <g key={i}>
          <line x1={f.X(s.Xp)} y1={f.Y(s.Y)} x2={f.X(s.X)} y2={f.Y(s.Y)} style={st('example', false, 1.8)} />
          <line x1={f.X(s.X)} y1={f.Y(s.Y)} x2={f.X(s.X)} y2={f.Y(s.Yn)} style={st('example', false, 1.8)} />
        </g>
      ))}
      <circle cx={f.X(X0)} cy={f.Y(Y1)} r={5} style={{ fill: tone('ink') }} />
      <circle cx={f.X(XN)} cy={f.Y(YN1)} r={5} style={{ fill: tone('ink') }} />
      {eqLeft ? (
        <Label x={f.X((0.6 * ymax) / K) - 10} y={f.Y(0.6 * ymax) - 4} anchor="end" size={12} t="var-c">{`equilibrium Y = ${K}X`}</Label>
      ) : (
        <Label x={f.X(Math.min(xmax * 0.6, (0.7 * ymax) / K)) + 10} y={f.Y(K * Math.min(xmax * 0.6, (0.7 * ymax) / K)) + 14} anchor="start" size={12} t="var-c">{`equilibrium Y = ${K}X`}</Label>
      )}
      {opLabel && <Label x={f.X(X0 + (XN - X0) * 0.35) - 6} y={f.Y(Y1 + (YN1 - Y1) * 0.35) - 10} anchor="end" size={12} t="var-e">{opLabel}</Label>}
      {note && <Label x={f.x0 + f.w} y={f.y0 + 14} anchor="end" size={13} t="example">{note}</Label>}
      {pinch && <Label x={f.x0 + f.w / 2} y={f.y0 + 40} size={14} t="trap">pinch: stages → ∞</Label>}
    </Svg>
  )
}

// ---- Visual 1: N-stage absorber ---------------------------------------------
function NStage() {
  const ys = [60, 100, 140, 210, 250]
  const names = ['1', '2', 'n', 'n+1', 'N']
  return (
    <Svg w={520} h={330} label="N-stage counter-current absorber">
      <rect x={180} y={40} width={130} height={250} rx={12} style={st('ink', false, 2)} />
      {ys.map((y, i) => (
        <g key={y}>
          <line x1={180} y1={y + 20} x2={310} y2={y + 20} style={st('muted', false, 1.2)} />
          <Label x={245} y={y + 12} size={12} t="muted">{`stage ${names[i]}`}</Label>
        </g>
      ))}
      <Label x={245} y={196} size={14} t="muted">⋮</Label>
      <line x1={170} y1={180} x2={320} y2={180} style={st('trap', true, 2)} />
      <Label x={326} y={176} anchor="start" size={12} t="trap">cut: X_n, Y_n+1</Label>
      <Arrow x1={60} y1={50} x2={178} y2={50} t="var-e" />
      <Label x={60} y={40} anchor="start" size={13} t="var-e">L₀, X₀ (clean liquid)</Label>
      <Arrow x1={290} y1={40} x2={290} y2={8} t="var-d" />
      <Label x={298} y={20} anchor="start" size={13} t="var-d">G₁, Y₁ (cleaned gas)</Label>
      <Arrow x1={470} y1={275} x2={312} y2={275} t="var-d" />
      <Label x={470} y={300} anchor="end" size={13} t="var-d">G_N+1, Y_N+1 (contaminated gas)</Label>
      <Arrow x1={200} y1={290} x2={200} y2={322} t="var-e" />
      <Label x={192} y={316} anchor="end" size={13} t="var-e">L_N, X_N (contaminated liquid)</Label>
      <Label x={170} y={120} anchor="end" size={12} t="var-e">L′ constant</Label>
      <Label x={320} y={120} anchor="start" size={12} t="var-d">G′ constant</Label>
    </Svg>
  )
}

const ACETONE = { K: 2.53, m: 90 / 29.7, X0: 0, Y1: 0.1 * (0.01 / 0.99), XN: (29.7 / 90) * 0.9 * (0.01 / 0.99), YN1: 0.01 / 0.99 }
const VOC = { K: 1.5, m: 1, X0: 0.1 / 0.9, Y1: 0.1 / 0.9 - 0.005 / 0.995, XN: 0.005 / 0.995, YN1: 0 }

// ---- Interactive -------------------------------------------------------------
function AbsExplorer() {
  const [Lp, setLp] = useState(90)
  const Gp = 29.7
  const YN1 = 0.0101
  const Y1 = 0.001
  const XN = (Gp * (YN1 - Y1)) / Lp
  const p = { K: 2.53, m: Lp / Gp, X0: 0, Y1, XN, YN1 }
  const g = stepping(p)
  return (
    <Diagram
      title="Absorption stepping vs solvent flow"
      caption={String.raw`Operating line $Y_{n+1} = \frac{L'}{G'}X_n + Y_1 - \frac{L'}{G'}X_0$ against $Y = 2.53X$ with $G' = 29.7$ mol/h, $X_0 = 0$, $Y_{N+1} = 0.0101$, $Y_1 = 0.001$ [Week 3, p. 28–30]. At $L' = 90$ mol/h: about 5 stages. As $L'$ approaches about 68 mol/h the operating line touches the equilibrium line at the bottom and the stages go to ∞ (page 11).`}
      cite={`[${W3}, p. 28–30]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="e"><M>L&apos;</M></V> = <strong>{Lp.toFixed(0)}</strong> mol/h</span>
            <input type="range" min={70} max={300} step={1} value={Lp} onChange={(e) => setLp(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <V c="a"><M>X_N</M> = {(XN * 1000).toFixed(2)}·10⁻³</V> · slope <M>L&apos;/G&apos;</M> = {(Lp / Gp).toFixed(2)} · stages:{' '}
          <strong>{g.frac == null ? '∞' : g.frac.toFixed(1)}</strong>
        </p>
        <McT {...p} xmax={0.0045} ymax={0.011} xt={[0, 0.001, 0.002, 0.003, 0.004]} yt={[0.002, 0.004, 0.006, 0.008, 0.01]}
          xfmt={(v) => (v ? `${v * 1000}e−3` : 0)} />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Stack stages, step between two lines">
        <MentalModel cite={`[${W3}, p. 24–37; ${PX2}, Q3e.4]`}>
          <T text="One stage can only transfer so much. Feed the treated gas to another stage with fresh contact, repeat, and you get a counter-current column of N stages, with liquid entering at the top and gas at the bottom [Week 3, p. 24–25]." />
          <p>
            Because the inert flows <V c="e"><M>L&apos;</M></V> and <V c="d"><M>G&apos;</M></V> are constant, a balance from the top down to
            any stage gives a straight <V c="e">operating line</V> in mole ratios. Its slope is <M>L&apos;/G&apos;</M> and it connects the
            two column ends, <M>{String.raw`(X_0, Y_1)`}</M> at the top and <M>{String.raw`(X_N, Y_{N+1})`}</M> at the bottom
            [Week 3, p. 26–27]. In absorption the gas is richer than equilibrium with the liquid, so the operating line sits above the{' '}
            <V c="c">equilibrium line</V> and the solute flows gas → liquid. In stripping it sits below, so the solute flows liquid → gas
            [Week 3, p. 32, 37]. Stepping between the two lines from one end to the other counts theoretical stages, exactly as in
            distillation [Week 3, p. 27, 34]. More solvent means a steeper line, further from equilibrium, so more driving force
            [practice exam 2 solutions.pdf, Q3e.4].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Counter-current stages and their diagram">
        <Columns>
          <Diagram title="N-stage counter-current absorber" cite={`[${W3}, p. 25; ${E3T}, Oppgave 3, Fig. 2]`}
            caption="Liquid enters stage 1 (top), gas enters stage N (bottom). A cut between stage n and n+1 crosses X_n and Y_n+1.">
            <NStage />
          </Diagram>
          <div>
            <Def term="Multistage absorption" cite={`[${W3}, p. 24–25]`}>
              {String.raw`N stages/trays. Liquid enters as $L_0$ and gas as $G_{N+1}$. The gas is mainly B, the liquid mainly C, and A transfers between them. Exiting streams of each stage are in equilibrium.`}
            </Def>
            <Def term="Operating line (absorption/stripping)" cite={`[${W3}, p. 26; ${FS}, p. 2, eq. 24]`}>
              {String.raw`The inert component balance over the top of the column, solved for $Y_{n+1}$. It is straight with slope $L'/G'$.`}
            </Def>
            <Def term="Column end points" cite={`[${W3}, p. 27]`}>
              {String.raw`Top $(X_0, Y_1)$ and bottom $(X_N, Y_{N+1})$.`}
            </Def>
            <Def term="Stripping (desorption)" cite={`[${W3}, p. 32–33]`}>
              The reverse process, where A is stripped from the liquid by a gas. Same equations, same type of diagram.
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Absorption: acetone in water" cite={`[${W3}, p. 28–31]`}
            caption="Y = 2.53X; operating line Y = 3.03X + 0.001 from (0, 0.001) to (2.97·10⁻³, 0.0101) lies above the equilibrium line. Staircase from (X₀, Y₁): 5.0 theoretical stages.">
            <McT {...ACETONE} xmax={0.0035} ymax={0.011} xt={[0, 0.001, 0.002, 0.003]} yt={[0.002, 0.004, 0.006, 0.008, 0.01]}
              xfmt={(v) => (v ? `${v * 1000}e−3` : 0)} note="5.0 theoretical stages" opLabel="operating line (above)" />
          </Diagram>
          <Diagram title="Stripping: VOC from water" cite={`[${W3}, p. 35–37]`}
            caption="Y = 1.5X; operating line Y = X − 0.005 from (0.005, 0) to (0.111, 0.105) lies BELOW the equilibrium line. Staircase from (X₀, Y₁): 5.1 theoretical stages.">
            <McT {...VOC} xmax={0.12} ymax={0.18} xt={[0, 0.04, 0.08, 0.12]} yt={[0.05, 0.1, 0.15]} note="5.1 theoretical stages" opLabel="" eqLeft />
          </Diagram>
        </Columns>
        <Columns>
          <div>
            <Def term="Operating line position" cite={`[${W3}, p. 30, 37]`}>
              Above the equilibrium line in absorption, below it in stripping.
            </Def>
            <Def term="Effect of solvent flow" cite={`[${PX2}, Q3e.4]`}>
              A higher solvent flow increases the driving force and the absorption.
            </Def>
          </div>
          <Def term="General procedure (absorption and stripping)" cite={`[${W3}, p. 34]`}>
            (1) calculate all unknowns, (2) plot the operating and equilibrium lines, (3) plot the inlet and outlet points, (4) draw stages from one point to the other, (5) count the stages.
          </Def>
        </Columns>
        <Gap>The staircase figures (Week 3, p. 30–31, 37) are images. The stage counts 5.0 and 5.1 are from the slide text.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="overall" />
        <Eq id="comp" />
        <Eq id="op" />
        <Eq id="eq" />
        <AbsExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Acetone absorbed in water, number of stages"
          given={String.raw`Gas 30 mol/h with 1 mol % acetone. Pure water 90 mol/h. 90 % of the acetone absorbed. 300 K, 1 bar, $Y_A = 2.53X_A$.`}
          steps={[
            { body: String.raw`Given: $y_{N+1} = 0.01$, $x_0 = 0$, $G = 30$ mol/h, $L = 90$ mol/h.` },
            { body: String.raw`Inert flows: $L' = L_0(1-x_0) = 90$ mol/h and $G' = G_{N+1}(1 - 0.01) = 29.7$ mol/h.` },
            { body: String.raw`Inlet ratios: $X_0 = 0$ and $Y_{N+1} = 0.01/0.99 = 0.010$.` },
            { body: String.raw`90 % absorbed: $Y_1 = 0.10\cdot Y_{N+1} = 0.001$.` },
            { body: String.raw`Liquid outlet from the inert balance: $X_N = X_0 + \frac{G'}{L'}(Y_{N+1} - Y_1) = 2.97\cdot 10^{-3}$.` },
            { body: String.raw`Operating line: $Y_{n+1} = \frac{90}{29.7}X_n + 0.001 - \frac{90}{29.7}\cdot 0 = 3.03X_n + 0.001$.` },
            { body: String.raw`Plot the equilibrium line $Y = 2.53X$ and the operating line between $(0, 0.001)$ and $(2.97\cdot 10^{-3}, 0.010)$.` },
            { body: String.raw`Step from $(X_0, Y_1)$: horizontally to equilibrium, vertically to the operating line, until $X \ge X_N$.` },
            { body: 'Result: 5.0 theoretical stages.' },
          ]}
          result="5.0 theoretical stages"
          cite={`[${W3}, p. 28–31]`}
        />
        <FadedExample
          title="Stripping VOCs from water with an inert gas"
          given={String.raw`Liquid with 10 mol % VOC, stripped to 0.5 mol %. Clean inert gas. $L' = G' = 500$ kmol/h. $Y_{VOC} = 1.5X_{VOC}$.`}
          steps={[
            { body: String.raw`Given: $x_0 = 0.10$, $x_N = 0.005$, $y_{N+1} = 0$.` },
            { title: 'Liquid mole ratios.', body: String.raw`$X_0 = 0.10/0.90 = 0.11$ and $X_N = 0.005/0.995 = 0.005$.`, hidden: true },
            { body: String.raw`Gas in is clean: $Y_{N+1} = 0$.` },
            { title: 'Gas out from the inert balance.', body: String.raw`$Y_1 = Y_{N+1} + \frac{L'}{G'}(X_0 - X_N) = 0.105$.`, hidden: true },
            { title: 'Operating line.', body: String.raw`$Y_{n+1} = \frac{500}{500}X_n + 0.105 - \frac{500}{500}\cdot 0.11$, i.e. $Y = X - 0.005$.`, hidden: true },
            { title: String.raw`Plot it with $Y = 1.5X$. Where is the operating line relative to equilibrium?`, body: 'Below it (stripping).', hidden: true },
            { title: String.raw`Step from $(X_0, Y_1)$ to $(X_N, Y_{N+1})$.`, body: '5.1 theoretical stages.', hidden: true },
          ]}
          cite={`[${W3}, p. 35–37]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Absorption above, stripping below" cite={`[${W3}, p. 30, 37]`}>
          {"If your absorption operating line is under the equilibrium line, you've swapped the end points or the X/Y axes."}
        </Trap>
        <Trap title="Pair the end points correctly" cite={`[${W3}, p. 27]`}>
          {String.raw`The top is $(X_0, Y_1)$, liquid in with gas out. The bottom is $(X_N, Y_{N+1})$, liquid out with gas in. They are passing streams, not equilibrium pairs.`}
        </Trap>
        <Trap title="Slope uses inert flows" cite={`[${W3}, p. 29–30]`}>
          {String.raw`$L'/G'$, not $L/G$ totals (e.g. $90/29.7 = 3.03$, not $90/30$).`}
        </Trap>
        <Trap title={String.raw`Recovery → $Y_1$`} cite={`[${W3}, p. 29]`}>
          {String.raw`"90 % absorbed" sets $Y_1 = 0.1\,Y_{N+1}$ in mole ratios.`}
        </Trap>
        <Trap title={String.raw`$Y = KX$ is a dilute shortcut`} cite={`[${W3}, p. 18, 26]`}>
          The slides use it in the multistage examples. For concentrated gas use the exact mole-ratio equilibrium (page 09).
        </Trap>
        <Trap title="More solvent = more removal" cite={`[${PX2}, Q3e.4]`}>
          {String.raw`A higher $L'$ gives a steeper operating line, further from equilibrium. That's the expected exam reasoning for "does increasing the water flow increase CO₂ removal?"`}
        </Trap>
        <Trap title="Stripping recovery is specified on the liquid" cite={`[${W3}, p. 36]`}>
          {String.raw`$X_N$ (the target liquid composition) is the given end, and $Y_1$ is computed. Don't mix up which end is fixed.`}
        </Trap>
      </Section>
    </>
  )
}
