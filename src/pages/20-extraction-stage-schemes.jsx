import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Columns, Diagram, Svg, Box, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W6 = 'Week 6 - Liquid-liquid extraction with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E6 = 'exercise_06_solutions.pdf'
const E6E = 'exercise_06_eng.pdf'

export const meta = {
  title: 'Single, co-, cross- and counter-current extraction stages',
  topic: 'extraction',
  examWeight: {
    level: 'low',
    note: "The analytical stage formulas aren't on either practice exam (both use ternary diagrams); exercise 6 Problem 1 is built on them",
  },
  examTasks: ['None on either practice exam uses these formulas. Both practice-exam extraction questions are graphical (pages 19, 21).'],
  buildsOn: ['18-lle-principles-solvent-equipment', '19-ternary-diagrams', '11-kremser-minimum-absorbent-flow'],
  usedIn: ['21-counter-current-extraction-design'],
  sources: [`[${W6}, p. 15–22]`, `[${FS}, p. 6, eq. 54–58]`, `[${E6E}, Problem 1]`, `[${E6}, P1a–e (scanned pages)]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'You add a second co-current stage after the first. How much extra separation do you get?', a: 'None. The second stage starts already at equilibrium, so $x_{2,R}/x_F = 1/(1+E)$, the same as one stage. [Week 6, p. 17]' },
    { id: 'p2', kind: 'pretest', q: 'Which scheme gives the highest fraction extracted for the same solvent and number of stages?', a: 'Counter-current. [Week 6, p. 20, 22]' },
    { id: 'p3', kind: 'pretest', q: 'In cross-current extraction with N stages, what extraction factor does each stage get?', a: '$E/N$, because the solvent is split equally over the stages. [Week 6, p. 18]' },
    { id: 't1', q: 'K = 1.613, S/F = 8/12, single stage. What fraction of acetic acid is extracted?', a: 'E = 1.08, so $1 - 1/2.08 = 0.52$. [Week 6, p. 22]' },
    { id: 't2', q: 'Write the counter-current result for N = 2 and check it against the phenol solution.', a: '$x_R/x_F = (E-1)/(E^3-1) = 1/(1+E+E^2)$. With 0.01 this gives E = 9.46. [Week 6, p. 19; exercise_06_solutions.pdf, P1c]' },
    { id: 't3', q: 'Why does infinite counter-current need far less solvent than infinite cross-current (4.95 vs 23.0)?', a: 'In counter-current, fresh solvent meets the leanest raffinate, so every stage keeps a driving force. In cross-current each portion of solvent equilibrates only once with partly extracted raffinate. [Week 6, p. 18–20; exercise_06_solutions.pdf, P1d–e]' },
    { id: 't4', q: 'What two assumptions let you write $S = E_1$ and $F = R_1$?', a: 'The solute is dilute (transfer negligible for the flows), and the phases are immiscible. [Week 6, p. 16; exercise_06_solutions.pdf, P1]' },
    { id: 't5', q: 'Name the two goals the slide gives for choosing an extraction scheme.', a: 'High extract concentration and high degree of solute extraction. [Week 6, p. 15]' },
  ],
  equations: [
    {
      id: 'single',
      label: 'Single stage',
      tex: String.raw`\va{x_F} F + x_S \ve{S} = \vb{x_E} \ve{S} + \va{x_R} F, \quad \vc{K} = \frac{\vb{x_E}}{\va{x_R}} \;\Rightarrow\; \va{x_R} = \frac{\va{x_F}}{1 + \frac{\vc{K}\ve{S}}{F}}, \qquad \frac{\va{x_R}}{\va{x_F}} = \frac{1}{1+\vf{E}}, \quad \vf{E} = \frac{\vc{K}\ve{S}}{F}`,
      vars: [
        { sym: String.raw`\va{x_F}, \va{x_R}`, desc: 'solute fraction (or ratio) in feed and raffinate', unit: '–' },
        { sym: String.raw`x_S, \vb{x_E}`, desc: 'solute fraction in solvent and extract', unit: '–' },
        { sym: String.raw`F, \ve{S}`, desc: 'carrier (feed) and solvent flow or amount', unit: String.raw`\mathrm{kg/h},\ \mathrm{kmol/h}\text{ or kg}` },
        { sym: String.raw`\vc{K}`, desc: 'distribution coefficient', unit: '–' },
        { sym: String.raw`\vf{E}`, desc: 'extraction factor', unit: '–' },
      ],
      note: 'Dilute, immiscible phases ($S = E_1$, $F = R_1$), pure solvent.',
      cite: `[${W6}, p. 16; ${FS}, p. 6, eq. 54–55]`,
      check: { status: 'verified', note: 'Matches W6 p. 16 and formula sheet eq. 54–55.' },
    },
    {
      id: 'co',
      label: 'Co-current (N stages)',
      tex: String.raw`\frac{x_{N,R}}{\va{x_F}} = \frac{1}{1+\vf{E}}`,
      note: 'Same as one stage.',
      cite: `[${W6}, p. 17; ${FS}, p. 6, eq. 56]`,
      check: { status: 'verified', note: 'Matches W6 p. 17 and formula sheet eq. 56.' },
    },
    {
      id: 'cross',
      label: 'Cross-current (N stages, solvent split equally)',
      tex: String.raw`\frac{x_{N,R}}{\va{x_F}} = \frac{1}{(1 + \vf{E}/N)^N}, \qquad \frac{\vb{x_E}}{\va{x_F}} = 1 - \frac{1}{(1+\vf{E}/N)^N}, \qquad N\to\infty:\; \frac{x_\infty}{\va{x_F}} = \frac{1}{e^{\vf{E}}}`,
      vars: [
        { sym: String.raw`N`, desc: 'number of stages', unit: '–' },
        { sym: String.raw`\vf{E}`, desc: 'extraction factor based on the total solvent', unit: '–' },
      ],
      cite: `[${W6}, p. 18; ${FS}, p. 6, eq. 57; ${E6}, P1d]`,
      check: { status: 'verified', note: 'Finite-N forms match W6 p. 18 and formula sheet eq. 57. The N → ∞ limit is from the scanned exercise solution (image, not text-checked); it follows from the finite-N form.' },
    },
    {
      id: 'counter',
      label: 'Counter-current (Kremser for extraction)',
      tex: String.raw`\frac{\va{x_R}}{\va{x_F}} = \frac{1}{1 + \vf{E} + \vf{E}^2 + \dots + \vf{E}^N} = \frac{\vf{E} - 1}{\vf{E}^{N+1} - 1}, \qquad \frac{\vb{x_E}}{\va{x_F}} = 1 - \frac{\va{x_R}}{\va{x_F}} = \frac{\vf{E}^{N+1} - \vf{E}}{\vf{E}^{N+1} - 1}`,
      vars: [{ sym: String.raw`\va{x_R}`, desc: 'solute fraction in the final raffinate', unit: '–' }],
      note: 'Derived from stage-by-stage balances and $K$ on each stage. For $N\\to\\infty$ with $E < 1$: $x_R/x_F \\to 1 - E$.',
      cite: `[${W6}, p. 19–20; ${FS}, p. 6, eq. 58; ${E6}, P1e]`,
      check: { status: 'verified', note: 'Matches W6 p. 19–20 and formula sheet eq. 58. The N → ∞ limit is from the scanned exercise solution (not text-checked).' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const fr = {
  co: (E) => 1 - 1 / (1 + E),
  cross: (E, N) => 1 - 1 / (1 + E / N) ** N,
  counter: (E, N) => (Math.abs(E - 1) < 1e-9 ? N / (N + 1) : (E ** (N + 1) - E) / (E ** (N + 1) - 1)),
}

// ---- Visual 1: four schemes ------------------------------------------------------
function Schemes() {
  const bw = 70
  const bh = 36
  const row = (y, title) => <Label x={8} y={y + 22} anchor="start" size={12} t="muted">{title}</Label>
  return (
    <Svg w={640} h={430} label="Single, co-current, cross-current and counter-current extraction schemes">
      {/* single */}
      {row(10, 'single')}
      <Box x={200} y={10} w={bw} h={bh} label="1" t="topic" />
      <Arrow x1={130} y1={22} x2={198} y2={22} t="var-a" />
      <Label x={126} y={26} anchor="end" size={11} t="var-a">F, x_F</Label>
      <Arrow x1={130} y1={38} x2={198} y2={38} t="var-e" />
      <Label x={126} y={44} anchor="end" size={11} t="var-e">S, x_S</Label>
      <Arrow x1={272} y1={22} x2={340} y2={22} t="var-d" />
      <Label x={344} y={26} anchor="start" size={11} t="var-d">R, x_R</Label>
      <Arrow x1={272} y1={38} x2={340} y2={38} t="var-b" />
      <Label x={344} y={44} anchor="start" size={11} t="var-b">E, x_E</Label>
      {/* co-current */}
      {row(90, 'co-current')}
      <Box x={150} y={90} w={bw} h={bh} label="1" t="topic" />
      <Box x={300} y={90} w={bw} h={bh} label="2" t="topic" />
      <Arrow x1={100} y1={102} x2={148} y2={102} t="var-a" />
      <Arrow x1={100} y1={118} x2={148} y2={118} t="var-e" />
      <Arrow x1={222} y1={102} x2={298} y2={102} t="var-d" />
      <Arrow x1={222} y1={118} x2={298} y2={118} t="var-b" />
      <Label x={260} y={96} size={10} t="var-d">R₁</Label>
      <Label x={260} y={134} size={10} t="var-b">E₁</Label>
      <Arrow x1={372} y1={102} x2={420} y2={102} t="var-d" />
      <Arrow x1={372} y1={118} x2={420} y2={118} t="var-b" />
      <Label x={430} y={114} anchor="start" size={12} t="trap">no extra separation</Label>
      {/* cross-current */}
      {row(180, 'cross-current')}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Box x={150 + i * 140} y={190} w={bw} h={bh} label={String(i + 1)} t="topic" />
          <Arrow x1={185 + i * 140} y1={165} x2={185 + i * 140} y2={188} t="var-e" />
          <Label x={185 + i * 140} y={160} size={10} t="var-e">S/N</Label>
          <Arrow x1={185 + i * 140} y1={228} x2={185 + i * 140} y2={252} t="var-b" />
          <Label x={185 + i * 140} y={266} size={10} t="var-b">{`E${i + 1}`}</Label>
          {i < 2 && <Arrow x1={222 + i * 140} y1={208} x2={288 + i * 140} y2={208} t="var-d" />}
        </g>
      ))}
      <Arrow x1={100} y1={208} x2={148} y2={208} t="var-a" />
      <Label x={96} y={212} anchor="end" size={11} t="var-a">F</Label>
      <Arrow x1={502} y1={208} x2={550} y2={208} t="var-d" />
      <Label x={554} y={212} anchor="start" size={11} t="var-d">R₃</Label>
      {/* counter-current */}
      {row(320, 'counter-current')}
      {[0, 1, 2].map((i) => <Box key={i} x={150 + i * 140} y={320} w={bw} h={bh + 20} label={String(i + 1)} t="topic" />)}
      <Arrow x1={100} y1={332} x2={148} y2={332} t="var-a" />
      <Label x={96} y={336} anchor="end" size={11} t="var-a">F</Label>
      {[0, 1].map((i) => <Arrow key={`r${i}`} x1={222 + i * 140} y1={332} x2={288 + i * 140} y2={332} t="var-d" />)}
      <Arrow x1={502} y1={332} x2={550} y2={332} t="var-d" />
      <Label x={554} y={336} anchor="start" size={11} t="var-d">R₃ (leanest)</Label>
      <Arrow x1={550} y1={366} x2={504} y2={366} t="var-e" />
      <Label x={554} y={370} anchor="start" size={11} t="var-e">fresh S</Label>
      {[0, 1].map((i) => <Arrow key={`e${i}`} x1={288 + i * 140} y1={366} x2={222 + i * 140} y2={366} t="var-b" />)}
      <Arrow x1={148} y1={366} x2={100} y2={366} t="var-b" />
      <Label x={96} y={370} anchor="end" size={11} t="var-b">E₁ (richest)</Label>
      <Label x={330} y={408} size={12} t="intuition">only counter-current puts fresh solvent against the leanest raffinate</Label>
    </Svg>
  )
}

// ---- Visual 2/3: bar charts ------------------------------------------------------
function Bars({ data, log, yl, max, w = 520 }) {
  const x0 = 70
  const y0 = 24
  const h = 200
  const Y = log ? (v) => y0 + h - (Math.log10(v) / Math.log10(max)) * h : (v) => y0 + h - (v / max) * h
  const bw = Math.min(70, (w - x0 - 30) / data.length - 20)
  return (
    <Svg w={w} h={300} label={yl}>
      <Arrow x1={x0} y1={y0 + h} x2={w - 10} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      {(log ? [1, 10, 100, 1000].filter((v) => v <= max) : [0.25, 0.5, 0.75, 1]).map((v) => (
        <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>
      ))}
      <Label x={x0 + 6} y={y0 - 6} anchor="start" size={12}>{yl}</Label>
      {data.map((d, i) => {
        const x = x0 + 20 + i * (bw + 20)
        return (
          <g key={d.lab}>
            <rect x={x} y={Y(d.v)} width={bw} height={Y(log ? 1 : 0) - Y(d.v)} style={{ fill: `color-mix(in srgb, ${tone(d.t)} 40%, var(--bg))`, stroke: tone(d.t), strokeWidth: 1.5 }} />
            <text x={x + bw / 2} y={Y(d.v) - 6} textAnchor="middle" className="svg-label">{d.v}</text>
            {d.lab.split('\n').map((l, k) => <text key={k} x={x + bw / 2} y={y0 + h + 16 + k * 14} textAnchor="middle" className="svg-sub">{l}</text>)}
          </g>
        )
      })}
    </Svg>
  )
}

// ---- Interactive -------------------------------------------------------------------
function SchemeExplorer() {
  const [N, setN] = useState(5)
  const [S, setS] = useState(8)
  const K = 1.613
  const F = 12
  const E = (K * S) / F
  const x0 = 64
  const y0 = 20
  const w = 380
  const h = 220
  const X = (n) => x0 + ((n - 1) / 9) * w
  const Y = (v) => y0 + h - v * h
  const ns = Array.from({ length: 10 }, (_, i) => i + 1)
  const series = [
    { key: 'co', t: 'var-d', f: () => fr.co(E), lab: 'co-current' },
    { key: 'cross', t: 'var-e', f: (n) => fr.cross(E, n), lab: 'cross-current' },
    { key: 'counter', t: 'var-b', f: (n) => fr.counter(E, n), lab: 'counter-current' },
  ]
  return (
    <Diagram
      title="Fraction extracted vs number of stages"
      caption={String.raw`Co-current $1 - \frac{1}{1+E}$, cross-current $1 - \frac{1}{(1+E/N)^N}$, counter-current $\frac{E^{N+1}-E}{E^{N+1}-1}$ with K = 1.613, F = 12 kmol/h [Week 6, p. 21–22]. Start values N = 5, S = 8 kmol/h: E = 1.08 and 0.52 / 0.62 / 0.86.`}
      cite={`[${W6}, p. 21–22]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><M>N</M> = <strong>{N}</strong></span>
            <input type="range" min={1} max={10} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="e"><M>S</M></V> = <strong>{S.toFixed(1)}</strong> kmol/h</span>
            <input type="range" min={1} max={30} step={0.1} value={S} onChange={(e) => setS(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <V c="f"><M>E</M> = {E.toFixed(2)}</V> · co {fr.co(E).toFixed(2)} · cross {fr.cross(E, N).toFixed(2)} · counter {fr.counter(E, N).toFixed(2)}
        </p>
        <Svg w={480} h={300} label="Fraction extracted against number of stages for three schemes">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {ns.map((n) => <text key={n} x={X(n)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{n}</text>)}
          {[0.25, 0.5, 0.75, 1].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
          <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13}>N (stages)</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-b">x_E / x_F</Label>
          <line x1={X(N)} y1={y0} x2={X(N)} y2={y0 + h} style={st('muted', true, 1)} />
          {series.map((s) => (
            <g key={s.key}>
              <polyline points={ns.map((n) => `${X(n)},${Y(s.f(n))}`).join(' ')} style={st(s.t)} />
              {ns.map((n) => <circle key={n} cx={X(n)} cy={Y(s.f(n))} r={n === N ? 6 : 2.5} style={{ fill: tone(s.t) }} />)}
              <Label x={X(10) + 4} y={Y(s.f(10)) + 4} anchor="start" size={11} t={s.t}>{s.lab}</Label>
            </g>
          ))}
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Keep a fresh driving force at every stage">
        <MentalModel cite={`[${W6}, p. 16–20]`}>
          <T text="One equilibrium stage splits the solute between the solvent and the carrier according to the extraction factor $E = KS/F$. The raffinate keeps the fraction $1/(1+E)$ [Week 6, p. 16]. Adding stages helps only if each new stage sees a fresh driving force. Co-current sends the already-equilibrated extract and raffinate on together, so nothing changes [Week 6, p. 17]." />
          <p>
            Cross-current gives every stage a fresh portion of <V c="e">solvent</V>, which helps but dilutes the extract [Week 6, p. 18].
            Counter-current sends the fresh solvent to meet the leanest raffinate and the richest extract to meet the incoming feed.
            Every stage keeps a driving force, giving the best extraction from the least solvent [Week 6, p. 19–20]. Its formula is the
            Kremser equation again, with <V c="f"><M>E</M></V> playing the role of <M>A</M> [Week 6, p. 20]. All of these assume dilute
            solute and immiscible phases, so the flows S and F stay constant [Week 6, p. 16].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Four stage schemes">
        <Diagram title="Four flow schemes" cite={`[${W6}, p. 15–20]`} caption="Single, co-current, cross-current (fresh S/N per stage) and counter-current (feed and solvent at opposite ends).">
          <Schemes />
        </Diagram>
        <Columns>
          <div>
            <Def term="Extraction schemes" cite={`[${W6}, p. 15]`}>
              Single stage (often not sufficient), co-current, cross-current, counter-current. The goals are a high extract concentration and a high degree of solute extraction.
            </Def>
            <Def term="Single equilibrium stage assumptions" cite={`[${W6}, p. 16]`}>
              {String.raw`The solute is dilute, so transfer doesn't change the flows: $S = E_1$, $F = R_1$. Pure solvent, $x_S = 0$.`}
            </Def>
            <Def term="Co-current stages" cite={`[${W6}, p. 17]`}>Raffinate and extract go to the next stage together. No additional separation.</Def>
          </div>
          <div>
            <Def term="Cross-current stages" cite={`[${W6}, p. 18]`}>
              {String.raw`The solvent is divided between N stages, $S = S_{total}/N$, so each stage has $E/N$.`}
            </Def>
            <Def term="Counter-current stages" cite={`[${W6}, p. 19–20]`}>
              Feed and solvent enter at opposite ends. Balances over each stage plus equilibrium per stage give the Kremser equation for extraction. Counter-current works best.
            </Def>
            <Def term="Fraction extracted" cite={`[${W6}, p. 20, 22]`}>
              {String.raw`$x_E/x_F$ on the slide means the fraction of solute that ends up in the extract, $1 - x_R/x_F$.`}
            </Def>
            <Def term="Weight ratios" cite={`[${E6}, P1]`}>
              When concentrations are high, use solute/carrier weight ratios (e.g. phenol/water), and K can still be used.
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Fraction extracted by scheme (acetic acid / 1-butanol)" cite={`[${W6}, p. 21–22]`} caption="E = 1.08, N = 5.">
            <Bars yl="fraction extracted (–)" max={1} data={[
              { lab: 'co-current', v: 0.52, t: 'var-d' },
              { lab: 'cross-current', v: 0.62, t: 'var-e' },
              { lab: 'counter-current', v: 0.86, t: 'var-b' },
            ]} />
          </Diagram>
          <Diagram title="Solvent needed for 99 % phenol removal" cite={`[${E6}, P1a–e]`} caption="K = 0.2. S/F in kg heptane per kg feed, log scale.">
            <Bars yl="S/F (log)" log max={1000} w={560} data={[
              { lab: 'single\nbatch', v: 495, t: 'muted' },
              { lab: '2 cross', v: 90, t: 'var-e' },
              { lab: '2 counter', v: 47.3, t: 'var-b' },
              { lab: '∞ cross', v: 23.0, t: 'var-e' },
              { lab: '∞ counter', v: 4.95, t: 'var-b' },
            ]} />
          </Diagram>
        </Columns>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="single" />
        <Eq id="co" />
        <Eq id="cross" />
        <Eq id="counter" />
        <SchemeExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Acetic acid extracted with 1-butanol: compare the schemes"
          given="10 mol % acetic acid in water, pure 1-butanol, K = 1.613, F = 12 kmol/h, S = 8 kmol/h, 5 stages."
          steps={[
            { body: String.raw`Extraction factor: $E = KS/F = 1.613\cdot 8/12 = 1.08$.` },
            { body: String.raw`Co-current: $x_E/x_F = 1 - \frac{1}{1+E} = 1 - \frac{1}{2.08} = 0.52$.` },
            { body: String.raw`Cross-current: $1 - \frac{1}{(1+E/5)^5} = 1 - \frac{1}{1.215^5} = 0.62$.` },
            { body: String.raw`Counter-current: $\frac{E^6 - E}{E^6 - 1} = 0.86$.` },
            { body: 'Conclusion: with the same solvent and stages, counter-current extracts 86 %, compared with 62 % and 52 %.' },
          ]}
          result="0.52 / 0.62 / 0.86"
          cite={`[${W6}, p. 21–22]`}
        />
        <FadedExample
          title="Heptane needed for 99 % phenol removal"
          given="1000 kg water with 8 wt % phenol, phenol-free heptane, $K = 0.2$ (wt fr heptane / wt fr water). Water and heptane are immiscible."
          steps={[
            { body: String.raw`Concentrations are high, so use weight ratios: phenol in 80 kg, phenol out $(1 - 0.99)\cdot 80 = 0.8$ kg, so $X_{out}/X_{feed} = (0.8/920)/(80/920) = 0.01$. Then $S/F = E/K$.` },
            { title: String.raw`Single batch: $1/(1+E) = 0.01$.`, body: 'E = 99, so S/F = 99/0.2 = 495.', hidden: true },
            { title: String.raw`Two cross-current stages with equal heptane: $1/(1+E/2)^2 = 0.01$.`, body: String.raw`$(1 + E/2)^2 = 100$, E = 18, S/F = 90.`, hidden: true },
            { title: String.raw`Two counter-current stages: $1/(1+E+E^2) = 0.01$.`, body: 'E = 9.46, S/F = 47.3.', hidden: true },
            { title: String.raw`Infinite cross-current: $1/e^E = 0.01$.`, body: 'E = 4.6, S/F = 23.0.', hidden: true },
            { title: String.raw`Infinite counter-current: limit $= 1 - E = 0.01$.`, body: 'E = 0.99, S/F = 4.95.', hidden: true },
          ]}
          cite={`[${E6E}, Problem 1; ${E6}, P1a–e]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Co-current adds nothing" cite={`[${W6}, p. 17]`}>
          {'If a question offers co-current stages as "more stages = better", it\'s a trap.'}
        </Trap>
        <Trap title="Cross-current uses E/N per stage" cite={`[${W6}, p. 18]`}>
          With E based on the **total** solvent. Using E in each stage double-counts the solvent.
        </Trap>
        <Trap title="Exponent N+1" cite={`[${W6}, p. 19; ${FS}, p. 6, eq. 58]`}>
          {String.raw`The counter-current formula has $E^{N+1}$, not $E^N$. Check with N = 1: $(E-1)/(E^2-1) = 1/(1+E)$.`}
        </Trap>
        <Trap title="Slide typo in K (source discrepancy)" cite={`[${W6}, p. 7, 16, 19]`}>
          {String.raw`Week 6, p. 19 writes $K = x_{1,R}/x_{1,E}$. The definition is $K = x_E/x_R$ (p. 7, p. 16), and the result $1/(1+E+\dots)$ only follows from that. (Confirmed in the PDF.)`}
        </Trap>
        <Trap title="Fraction extracted vs raffinate ratio" cite={`[${W6}, p. 22]`}>
          {String.raw`The "% extracted" is $1 - x_R/x_F$. Don't report $x_R/x_F$.`}
        </Trap>
        <Trap title="Extraction factor E ≠ extract stream E" cite={`[${W6}, p. 16]`}>Same letter, different things.</Trap>
        <Trap title="High concentrations → weight ratios" cite={`[${E6}, P1]`}>
          Base the 99 % on phenol per kg water (ratio), so the carrier basis stays constant.
        </Trap>
        <Trap title="The formulas assume dilute, immiscible, constant K" cite={`[${W6}, p. 16]`}>
          If the ternary diagram shows significant mutual solubility, use the graphical method (page 21).
        </Trap>
      </Section>
    </>
  )
}
