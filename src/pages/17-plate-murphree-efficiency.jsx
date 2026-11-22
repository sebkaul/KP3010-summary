import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Box, Arrow, Label, Curve,
  M, V, T, tone,
} from '../components'

const W5 = 'Week 5 - Efficiency and mass transfer with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E5 = 'exercise_05_solutions.pdf'
const E5E = 'exercise_05_eng.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Overall and Murphree plate efficiency',
  topic: 'mass-transfer',
  examWeight: {
    level: 'medium',
    note: 'Overall efficiency → real trays → height in Autumn 2022 Q2b (4 pts); Murphree only in exercise 5',
  },
  examTasks: ['Autumn 2022, Q2b: tray column, external reboiler, E_O = 70 %, 45 cm spacing. 7 theoretical stages → 6 in column → 8.57 → 9 trays → H = 4.05 m.'],
  buildsOn: ['06-feed-line-mccabe-thiele', '11-kremser-minimum-absorbent-flow', '14-column-height-pressure-drop', '16-htu-ntu-packed-columns'],
  usedIn: [],
  sources: [`[${W5}, p. 20–28]`, `[${FS}, p. 4–5, eq. 40–42]`, `[${E5E}, Exercise 1–2]`, `[${E5}, Oppg. 1b–d, 2a]`, `[${PX2}, Q2b]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Why do real columns need more plates than McCabe–Thiele predicts?', a: "Contact times are often too short to reach equilibrium, and the phases don't behave ideally. [Week 5, p. 20]" },
    { id: 'p2', kind: 'pretest', q: 'McCabe–Thiele gives 7 theoretical stages including an external reboiler, and $E_O = 0.7$. How many real trays?', a: '$6/0.7 = 8.57$, so 9 trays. [practice exam 2 solutions.pdf, Q2b]' },
    { id: 'p3', kind: 'pretest', q: 'Can the Murphree efficiency exceed 1?', a: 'Not in this model. $E_M = 1 - e^{-NTU}$ is always below 1. [Week 5, p. 26]' },
    { id: 't1', q: 'A tray gives $y_{n+1} = 0.40$, $y_n = 0.55$, and the vapour in equilibrium with its liquid is $y_n^* = 0.60$. What is $E_M$?', a: '$E_M = (0.55 - 0.40)/(0.60 - 0.40) = 0.75$. [Week 5, p. 24]' },
    { id: 't2', q: 'A plate has NTU = 1.2. What is $E_M$?', a: '$1 - e^{-1.2} = 0.70$. [Week 5, p. 26]' },
    { id: 't3', q: 'How do you get the NTU of a plate if you know the liquid height and the HTU?', a: '$NTU = H_L/HTU = k_{OV}A_hH_L/Q_V$. [Week 5, p. 26]' },
    { id: 't4', q: 'In the McCabe–Thiele figure, which triangle is the theoretical stage and which the actual one?', a: 'acd is theoretical and abe is actual. [Week 5, p. 27]' },
    { id: 't5', q: "Give the two physical reasons plates aren't at equilibrium.", a: "Contact time is too short, and the gas and liquid phases don't behave ideally. [Week 5, p. 20]" },
  ],
  equations: [
    {
      id: 'eo',
      label: 'Overall efficiency',
      tex: String.raw`\vc{E_O} = \frac{N_{th}}{N_s} \quad\Leftrightarrow\quad N_S = \frac{N_{TS}}{\vc{E_O}}`,
      vars: [
        { sym: String.raw`\vc{E_O}`, desc: 'overall (column) efficiency', unit: '–' },
        { sym: String.raw`N_{th},\ N_{TS}`, desc: 'theoretical stages in the column (reboiler excluded)', unit: '–' },
        { sym: String.raw`N_s,\ N_S`, desc: 'actual plates (round up)', unit: '–' },
      ],
      cite: `[${W5}, p. 21; ${FS}, p. 4, eq. 40]`,
      check: { status: 'verified', note: 'Matches W5 p. 21 and formula sheet eq. 40.' },
    },
    {
      id: 'em',
      label: 'Murphree tray efficiency',
      tex: String.raw`\vd{E_M} = \frac{\vb{y_n} - \va{y_{n+1}}}{\vf{y_n^*} - \va{y_{n+1}}} = \frac{\va{y_{n+1}} - \vb{y_n}}{\va{y_{n+1}} - \vf{y_n^*}} = \frac{\text{actual difference}}{\text{maximum difference}}`,
      vars: [
        { sym: String.raw`\vb{y_n}`, desc: 'vapour leaving tray n', unit: '–' },
        { sym: String.raw`\va{y_{n+1}}`, desc: 'vapour entering tray n from below', unit: '–' },
        { sym: String.raw`\vf{y_n^*}`, desc: 'vapour in equilibrium with the liquid on tray n', unit: '–' },
      ],
      note: 'The two forms are the same ratio with signs flipped (used for distillation vs absorption direction).',
      cite: `[${W5}, p. 24, 26]`,
      check: { status: 'verified', note: 'Matches W5 p. 24.' },
    },
    {
      id: 'ntu',
      label: 'Plate NTU and Murphree efficiency',
      tex: String.raw`NTU = \int_{y_{n+1}}^{y_n}\frac{1}{\vf{y_n^*} - y}\,dy = \ln\frac{\va{y_{n+1}} - \vf{y_n^*}}{\vb{y_n} - \vf{y_n^*}}, \qquad \vd{E_M} = 1 - e^{-NTU}, \qquad NTU = \frac{H_L}{HTU} = \frac{k_{OV}A_h H_L}{Q_V}`,
      vars: [
        { sym: String.raw`H_L`, desc: 'liquid height on the plate', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`HTU`, desc: 'height of a transfer unit', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`k_{OV}, A_h, Q_V`, desc: 'as on page 16', unit: String.raw`\mathrm{m/s},\ \mathrm{m^2/m},\ \mathrm{m^3/s}` },
      ],
      note: 'Plug-flow gas and a mixed liquid, so $y_n^*$ is constant over the plate.',
      cite: `[${W5}, p. 25–26; ${FS}, p. 4, eq. 41]`,
      check: { status: 'verified', note: 'Matches W5 p. 26 and formula sheet eq. 41.' },
    },
    {
      id: 'eoem',
      label: 'Overall from Murphree (linear equilibrium)',
      tex: String.raw`\vc{E_O} = \frac{\ln[1 + \vd{E_M}(S - 1)]}{\ln S}, \qquad S = \frac{KG}{L} \;(\text{or replace } S \to A = \tfrac{L}{KG})`,
      vars: [
        { sym: String.raw`S`, desc: 'stripping factor', unit: '–' },
        { sym: String.raw`A`, desc: 'absorption factor', unit: '–' },
      ],
      note: 'Linear equilibrium curve, typically absorption or stripping. **Source discrepancy:** the formula sheet writes it with S; the exercise solution substitutes A for an absorber.',
      cite: `[${W5}, p. 28; ${FS}, p. 5, eq. 42; ${E5}, Oppg. 1c]`,
      check: { status: 'verified', note: 'Matches W5 p. 28 (which offers S → A) and formula sheet eq. 42.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const eoFrom = (EM, S) => (Math.abs(S - 1) < 1e-6 ? EM : Math.log(1 + EM * (S - 1)) / Math.log(S))

// ---- Visual 1: Murphree triangles ----------------------------------------------
function Triangles() {
  const X = (v) => 60 + v * 380
  const Y = (v) => 330 - v * 300
  const eq = (x) => (2.5 * x) / (1 + 1.5 * x)
  const op = (x) => 0.1 + 0.6 * x
  const xa = 0.35
  const ya = op(xa)
  const yc = eq(xa)
  const EM = 0.6
  const yb = ya + EM * (yc - ya)
  const xd = (yc - 0.1) / 0.6
  const xe = (yb - 0.1) / 0.6
  const pts = Array.from({ length: 40 }, (_, i) => i / 39).map((x) => [X(x), Y(eq(x))])
  const P = (x, y, n, dx = 8, dy = 4, t = 'ink') => (
    <g>
      <circle cx={X(x)} cy={Y(y)} r={5} style={{ fill: tone(t) }} />
      <Label x={X(x) + dx} y={Y(y) + dy} anchor={dx < 0 ? 'end' : 'start'} size={14} t={t}>{n}</Label>
    </g>
  )
  return (
    <Svg w={480} h={360} label="McCabe–Thiele detail with theoretical triangle acd and actual triangle abe">
      <Arrow x1={60} y1={330} x2={450} y2={330} />
      <Arrow x1={60} y1={330} x2={60} y2={20} />
      <Label x={450} y={350} anchor="end" size={13}>x</Label>
      <Label x={66} y={24} anchor="start" size={13}>y</Label>
      <Curve points={pts} t="var-f" />
      <line x1={X(0)} y1={Y(op(0))} x2={X(1)} y2={Y(op(1))} style={st('var-e')} />
      <polygon points={`${X(xa)},${Y(ya)} ${X(xa)},${Y(yc)} ${X(xd)},${Y(yc)}`} style={{ fill: `color-mix(in srgb, ${tone('var-f')} 15%, transparent)`, stroke: tone('var-f'), strokeWidth: 1.5, strokeDasharray: '5 4' }} />
      <polygon points={`${X(xa)},${Y(ya)} ${X(xa)},${Y(yb)} ${X(xe)},${Y(yb)}`} style={{ fill: `color-mix(in srgb, ${tone('example')} 25%, transparent)`, stroke: tone('example'), strokeWidth: 2 }} />
      {P(xa, ya, 'a', -10, 18)}
      {P(xa, yb, 'b', -10, 4, 'example')}
      {P(xa, yc, 'c', -10, 0, 'var-f')}
      {P(xd, yc, 'd', 8, -6, 'var-f')}
      {P(xe, yb, 'e', 8, 16, 'example')}
      <Label x={X(0.5)} y={Y(0.2)} anchor="start" size={12} t="var-f">acd: theoretical stage</Label>
      <Label x={X(0.5)} y={Y(0.14)} anchor="start" size={12} t="example">abe: actual stage (E_M of the way)</Label>
      <Label x={X(0.95)} y={Y(eq(0.95)) + 18} anchor="end" size={12} t="var-f">equilibrium</Label>
      <Label x={X(0.95)} y={Y(op(0.95)) + 18} anchor="end" size={12} t="var-e">operating line</Label>
    </Svg>
  )
}

// ---- Visual 2: tray with mixed liquid + exponential profile ----------------------
function MixedTray() {
  const prof = Array.from({ length: 30 }, (_, i) => i / 29).map((s) => [330 + s * 180, 230 - (1 - Math.exp(-2.2 * s)) * 150])
  return (
    <Svg w={540} h={280} label="Gas rising through an ideally mixed liquid on a tray, with the vapour composition rising exponentially toward y_n*">
      <rect x={40} y={110} width={220} height={90} rx={6} style={{ fill: `color-mix(in srgb, ${tone('var-e')} 25%, var(--bg))`, stroke: tone('var-e'), strokeWidth: 2 }} />
      <line x1={40} y1={200} x2={260} y2={200} style={{ stroke: tone('ink'), strokeWidth: 4 }} />
      <Label x={150} y={140} size={12} t="var-e">ideally mixed, x_n → y_n*</Label>
      {[80, 130, 180, 230].map((x) => <Arrow key={x} x1={x} y1={196} x2={x} y2={116} t="var-d" />)}
      <Arrow x1={150} y1={260} x2={150} y2={204} t="var-a" />
      <Label x={158} y={252} anchor="start" size={12} t="var-a">gas in, y_n+1</Label>
      <Arrow x1={150} y1={106} x2={150} y2={50} t="var-b" />
      <Label x={158} y={62} anchor="start" size={12} t="var-b">gas out, y_n</Label>
      <Arrow x1={30} y1={200} x2={30} y2={110} t="muted" />
      <Arrow x1={30} y1={110} x2={30} y2={200} t="muted" />
      <Label x={24} y={160} anchor="end" size={11} t="muted">H_L</Label>
      <Arrow x1={330} y1={240} x2={520} y2={240} />
      <Arrow x1={330} y1={240} x2={330} y2={50} />
      <Label x={520} y={258} anchor="end" size={11}>height in liquid</Label>
      <Label x={336} y={56} anchor="start" size={11}>y</Label>
      <line x1={330} y1={80} x2={515} y2={80} style={st('var-f', true, 1.5)} />
      <Label x={515} y={72} anchor="end" size={11} t="var-f">y_n*</Label>
      <polyline points={prof.map((p) => p.join(',')).join(' ')} style={st('var-b')} />
      <Label x={420} y={210} size={12} t="var-d">E_M = 1 − e^(−NTU)</Label>
    </Svg>
  )
}

// ---- Visual 3: real trays chain --------------------------------------------------------
function Chain() {
  const rows = [
    { lab: 'Week 5 Example', cells: ['N_TS = 7.8', '− reboiler → 6.8', '÷ E_O (0.62) → 10.97', 'round up → 11 plates'] },
    { lab: 'Autumn 2022 Q2b', cells: ['N_TS = 7', '− reboiler → 6', '÷ E_O (0.7) → 8.57', 'round up → 9 trays', '× 0.45 m → 4.05 m'] },
  ]
  return (
    <Svg w={660} h={160} label="Two chains from theoretical stages to real trays and height">
      {rows.map((r, ri) => (
        <g key={r.lab}>
          <Label x={4} y={44 + ri * 72} anchor="start" size={11} t="muted">{r.lab}</Label>
          {r.cells.map((c, i) => (
            <g key={c}>
              <Box x={100 + i * 112} y={20 + ri * 72} w={104} h={44} label={c} t={i === r.cells.length - 1 ? 'example' : 'definition'} />
              {i < r.cells.length - 1 && <Arrow x1={204 + i * 112} y1={42 + ri * 72} x2={212 + i * 112} y2={42 + ri * 72} />}
            </g>
          ))}
        </g>
      ))}
    </Svg>
  )
}

// ---- Interactive -----------------------------------------------------------------------
function EffExplorer() {
  const [EM, setEM] = useState(0.6)
  const [S, setS] = useState(1.22)
  const [ntu, setNtu] = useState(1.2)
  const EO = eoFrom(EM, S)
  const x0 = 64
  const y0 = 20
  const w = 360
  const h = 220
  const X = (v) => x0 + ((v - 0.2) / 4.8) * w
  const Y = (v) => y0 + h - v * h
  const ss = Array.from({ length: 80 }, (_, i) => 0.2 + (i / 79) * 4.8)
  return (
    <Diagram
      title="Overall efficiency from Murphree efficiency"
      caption={String.raw`$E_O = \frac{\ln[1 + E_M(S-1)]}{\ln S}$ [Week 5, p. 28]; for an absorber use A in place of S [exercise_05_solutions.pdf, Oppg. 1c]. At $E_M = 0.6$ and factor 1.22: $E_O = 0.62$. Second readout: $E_M = 1 - e^{-NTU}$ [Week 5, p. 26].`}
      cite={`[${W5}, p. 26, 28; ${E5}, Oppg. 1c]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="d"><M>E_M</M></V> = <strong>{EM.toFixed(2)}</strong></span>
            <input type="range" min={0.1} max={1} step={0.01} value={EM} onChange={(e) => setEM(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><M>S</M> (or <M>A</M>) = <strong>{S.toFixed(2)}</strong></span>
            <input type="range" min={0.2} max={5} step={0.01} value={S} onChange={(e) => setS(Number(e.target.value))} />
          </label>
        </div>
        <p><V c="c"><M>E_O</M> = {EO.toFixed(3)}</V></p>
        <Svg w={460} h={290} label="E_O against S for the chosen E_M">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {[1, 2, 3, 4, 5].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
          {[0.25, 0.5, 0.75, 1].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
          <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13}>S or A (–)</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-c">E_O (–)</Label>
          <line x1={x0} y1={Y(EM)} x2={x0 + w} y2={Y(EM)} style={st('var-d', true, 1.2)} />
          <Label x={x0 + w} y={Y(EM) - 6} anchor="end" size={11} t="var-d">E_M</Label>
          <polyline points={ss.map((s) => `${X(s)},${Y(eoFrom(EM, s))}`).join(' ')} style={st('var-c')} />
          <circle cx={X(S)} cy={Y(EO)} r={6} style={{ fill: tone('var-c') }} />
        </Svg>
        <div className="plot-controls">
          <label>
            <span className="plot-param">plate <M>NTU</M> = <strong>{ntu.toFixed(2)}</strong> → <V c="d"><M>E_M</M> = {(1 - Math.exp(-ntu)).toFixed(3)}</V></span>
            <input type="range" min={0} max={4} step={0.01} value={ntu} onChange={(e) => setNtu(Number(e.target.value))} />
          </label>
        </div>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Real plates fall short of equilibrium">
        <MentalModel cite={`[${W5}, p. 20–28]`}>
          <T text="A theoretical stage assumes the vapour and liquid leaving a plate are at equilibrium. Real plates don't get there [Week 5, p. 20]. The crude fix is one overall efficiency for the whole column: real plates = theoretical plates / $E_O$, with the reboiler left out [Week 5, p. 21]." />
          <p>
            The finer fix looks at one plate. Gas bubbles up through a well-mixed liquid, approaching (but not reaching) the vapour
            composition <V c="f"><M>{String.raw`y_n^*`}</M></V> in equilibrium with that liquid. The <V c="d">Murphree efficiency</V> is the
            fraction of that maximum change actually achieved [Week 5, p. 24]. Plug-flow gas through mixed liquid turns the
            mass-transfer model into a simple exponential, <M>{String.raw`E_M = 1 - e^{-NTU}`}</M>, with NTU set by the liquid depth over
            the HTU [Week 5, p. 25–26]. For straight equilibrium lines (absorption, stripping), a closed formula converts{' '}
            <M>E_M</M> into <V c="c"><M>E_O</M></V> [Week 5, p. 28].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Overall and Murphree efficiency">
        <Columns>
          <Diagram title="Theoretical vs actual stage (Murphree)" cite={`[${W5}, p. 27]`}
            caption="From a on the operating line: theoretical step to c on the equilibrium curve (triangle acd); actual step only to b, a fraction E_M of the way (triangle abe). Actual = y_n − y_n+1, max = y_n* − y_n+1. Curves schematic.">
            <Triangles />
          </Diagram>
          <div>
            <Def term="Why efficiency is needed" cite={`[${W5}, p. 20]`}>
              {"Equal numbers of theoretical and real plates is only true if liquid and vapour reach full equilibrium on each stage. In reality contact times are too short and the phases aren't ideal, so more plates are required."}
            </Def>
            <Def term={String.raw`Overall efficiency $E_O$`} cite={`[${W5}, p. 21]`}>
              {String.raw`The same efficiency for all trays, $E_O = N_{th}/N_s$. The reboiler stage is not included.`}
            </Def>
            <Def term={String.raw`Murphree tray efficiency $E_M$`} cite={`[${W5}, p. 24]`}>
              A better estimate, based on the mass-transfer driving force on each stage. Assumes plug-flow gas and an ideally mixed liquid.
            </Def>
            <Def term="Murphree in McCabe–Thiele" cite={`[${W5}, p. 27]`}>
              {String.raw`Triangle **acd** is a theoretical stage, triangle **abe** an actual stage. The actual vertical step covers only $E_M$ of the distance to the equilibrium curve.`}
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Gas through a mixed liquid on one tray" cite={`[${W5}, p. 24–26]`}
            caption="Plug-flow gas rises through liquid of height H_L; its composition approaches y_n* exponentially.">
            <MixedTray />
          </Diagram>
          <div>
            <Def term={String.raw`$y_n^*$`} cite={`[${W5}, p. 24]`}>
              The liquid-phase concentration on tray n expressed as the vapour composition in equilibrium with it.
            </Def>
            <Def term={String.raw`$E_M$ as a ratio`} cite={`[${W5}, p. 24]`}>
              Actual change in vapour composition over the plate divided by the maximum (equilibrium) change.
            </Def>
            <Def term="NTU of a plate" cite={`[${W5}, p. 25–26]`}>
              {String.raw`From the mass-transfer model with mixed liquid, often found as $H_L/HTU$, with $H_L$ the liquid height on the plate.`}
            </Def>
            <Def term={String.raw`$E_O$ from $E_M$`} cite={`[${W5}, p. 28]`}>
              For a linear equilibrium curve (typically absorption/stripping) there is a closed relation using the stripping factor S, or A.
            </Def>
          </div>
        </Columns>

        <Diagram title="Real trays from theoretical stages" cite={`[${W5}, p. 21–23; ${PX2}, Q2b]`}
          caption="N_TS → minus reboiler → ÷ E_O → round up → × H_space → H.">
          <Chain />
        </Diagram>
        <Gap>No correlation that predicts $E_O$ from viscosity and relative volatility is in the files, even though Week 4, p. 31 gives those properties. $E_O$ is always given or computed from $E_M$.</Gap>
        <Gap>The Murphree triangle figure (Week 5, p. 27) is an image. The point labels a–e come from the slide text.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="eo" />
        <Eq id="em" />
        <Eq id="ntu" />
        <Eq id="eoem" />
        <EffExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Actual plates from overall efficiency"
          given={String.raw`Benzene/toluene at 1 atm. McCabe–Thiele gives 7.8 theoretical stages in total. $E_O = 62\,\%$.`}
          steps={[
            { body: String.raw`Remove the reboiler: $7.8 - 1 = 6.8$ theoretical stages in the column.` },
            { body: String.raw`$N_s = N_{ts}/E_O = 6.8/0.62 = 10.97$.` },
            { body: "Round up: 10 plates aren't enough, so 11 plates plus the reboiler." },
          ]}
          result="11 plates + reboiler"
          cite={`[${W5}, p. 22–23]`}
        />
        <FadedExample
          title={String.raw`Absorber with Murphree trays: $E_O$, plates and height`}
          given={String.raw`Gas 200 kmol/h with 3 mol % contaminant, 95 % absorbed, pure water, $y = 0.6x$, $L' = 1.3L'_{min} = 142.5$ kmol/h, $G' = 194$ kmol/h, $E_M = 0.6$, tray spacing 46 cm.`}
          steps={[
            { title: 'Absorption factor.', body: String.raw`$A = L'/(KG') = 142.5/(0.6\cdot 194) = 1.22$.`, hidden: true },
            { title: String.raw`Kremser NTS with $y_{in} = 0.03$, $y_{out} = 0.001544$.`, body: String.raw`$N = \ln 4.49/\ln 1.22 = 7.42$.`, hidden: true },
            { title: 'Overall efficiency with A in place of S.', body: String.raw`$E_O = \ln[1 + 0.6(1.22 - 1)]/\ln 1.22 = \ln 1.132/\ln 1.22 = 0.62$.`, hidden: true },
            { title: 'Real plates.', body: String.raw`$N_S = 7.42/0.62 = 11.97$, so 12 plates.`, hidden: true },
            { title: 'Height.', body: String.raw`$H = 12\cdot 0.46 = 5.52$ m.`, hidden: true },
            { title: 'With 23 cm spacing instead?', body: String.raw`$12\cdot 0.23 = 2.76$ m. [exercise_05_solutions.pdf, Oppg. 2a]`, hidden: true },
          ]}
          cite={`[${E5E}, Exercise 1b–d; ${E5}, Oppg. 1b–d, 2a]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title={String.raw`Reboiler not included in $E_O$`} cite={`[${W5}, p. 21; ${PX2}, Q2b]`}>
          {String.raw`Subtract the reboiler stage before dividing by $E_O$.`}
        </Trap>
        <Trap title="Round up after dividing" cite={`[${W5}, p. 23; ${PX2}, Q2b]`}>
          10.97 → 11, 8.57 → 9, 11.97 → 12. Rounding before dividing gives the wrong count.
        </Trap>
        <Trap title={"Divide, don't multiply"} cite={`[${FS}, p. 4, eq. 40]`}>
          {String.raw`$N_S = N_{TS}/E_O$ is larger than $N_{TS}$. If you end up with fewer real trays than theoretical ones, you've multiplied.`}
        </Trap>
        <Trap title={String.raw`The $E_O$–$E_M$ formula needs a linear equilibrium`} cite={`[${W5}, p. 28]`}>
          {String.raw`Fine for absorption and stripping with $y = Kx$, not for a curved distillation equilibrium.`}
        </Trap>
        <Trap title="S or A (source discrepancy)" cite={`[${FS}, p. 5, eq. 42; ${E5}, Oppg. 1c]`}>
          The formula sheet writes it with S. For an absorber the course solution uses A. Check which factor the task defines.
        </Trap>
        <Trap title={String.raw`$y_n^*$ is set by the liquid on the same tray`} cite={`[${W5}, p. 24]`}>
          Not by the liquid from the tray above.
        </Trap>
        <Trap title={"Murphree's assumptions"} cite={`[${W5}, p. 24–26]`}>
          {String.raw`Plug-flow gas, ideally mixed liquid. That is what makes $E_M = 1 - e^{-NTU}$ exact.`}
        </Trap>
      </Section>
    </>
  )
}
