import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Box, Arrow, Label,
  Mermaid, M, V, T, tone,
} from '../components'

const W4 = 'Week 4 - Design of columns with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E4 = 'exercise_04_solutions.pdf'
const E4E = 'exercise_04_eng.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Column height (HETP, tray spacing) and pressure drop (Ergun)',
  topic: 'column-design',
  examWeight: {
    level: 'medium',
    note: 'Packing/column height on 2 of 2 practice exams (Practice exam 1 Ex. 3e; Autumn 2022 Q2b, Q3d, Q3e.3); Ergun only in exercises',
  },
  examTasks: [
    'Practice exam 1, Ex. 3e: packing height with HETP = 0.018·d_p (mm), d_p = 64 mm, N_TS = 2.48, giving 2.86 m.',
    'Autumn 2022, Q2b: tray column height with an external reboiler, 70 % overall efficiency and 45 cm spacing (7 theoretical → 6 → 9 trays → 4.05 m).',
    'Autumn 2022, Q3d: packing height for 25 mm Pall rings with 11.4 theoretical stages (HETP 0.45 m, H = 5.13 m).',
    'Autumn 2022, Q3e.3: effect of switching to 50 mm Pall rings at the same height (less CO₂ removed).',
  ],
  buildsOn: ['06-feed-line-mccabe-thiele', '12-trays-vs-packing', '13-column-diameter-flooding'],
  usedIn: ['16-htu-ntu-packed-columns', '17-plate-murphree-efficiency'],
  sources: [
    `[${W4}, p. 28–39]`,
    `[${FS}, p. 3, eq. 32–39]`,
    `[${E4E}, Exercise 1d–e, 2d]`,
    `[${E4}, Oppg. 1d–e, 2d]`,
    `[${PX}, Ex. 3e]`,
    `[${PX2}, Q2b, Q3d, Q3e.3]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'McCabe–Thiele gives 7.6 theoretical stages including an external reboiler. How many theoretical stages must the column itself provide?', a: '6.6. [Week 4, p. 32]' },
    { id: 'p2', kind: 'pretest', q: 'What does HETP stand for?', a: 'Height Equivalent of a Theoretical Plate: the packed height that gives one theoretical stage. [Week 4, p. 28]' },
    { id: 'p3', kind: 'pretest', q: 'Where in a column is the pressure highest?', a: 'At the bottom. The gas meets resistance as it moves up. [Week 4, p. 34]' },
    { id: 't1', q: 'Mellapak 250Y ($a = 250$ m²/m³), 6.8 theoretical stages. Packed height?', a: 'HETP = 100/250 + 0.1 = 0.5 m, so H = 0.5·6.8 = 3.4 m. [exercise_04_solutions.pdf, Oppg. 1d]' },
    { id: 't2', q: 'Same duty with 1" metal Pall rings?', a: 'HETP = 18·0.0254 = 0.46 m, so H = 0.46·6.8 = 3.2 m. [exercise_04_solutions.pdf, Oppg. 1e]' },
    { id: 't3', q: 'For that Pall-ring tower (ε = 0.954, $v_0$ = 2.5 m/s, M = 0.029 kg/mol, η = 2·10⁻⁵ Pa·s, 1 atm, 298.15 K), what are $G_0$, Re and the converged ΔP?', a: '$G_0 = 2.97$ kg/(m²·s), Re = 81812, ΔP ≈ 86.7 Pa after three iterations from a 10 % guess. [exercise_04_solutions.pdf, Oppg. 1e]' },
    { id: 't4', q: 'Acetone/water: McCabe–Thiele gives 3 stages including the external reboiler, tray spacing 30 cm. Column height?', a: '2 plates in the column, so $0.30\\cdot 2 = 0.60$ m. [exercise_04_solutions.pdf, Oppg. 2d]' },
    { id: 't5', q: 'Give three reasons the pressure drop matters in column design.', a: 'Boiling points change, gas density changes, and mass-transfer resistances and equilibria change. Compression may also be needed. [Week 4, p. 35]' },
  ],
  equations: [
    {
      id: 'hpack',
      label: 'Packed height',
      tex: String.raw`\va{H_{col}} \approx H_{pack} = \vc{\text{HETP}}\cdot \vb{N_{TS}}`,
      vars: [
        { sym: String.raw`H_{pack}`, desc: 'packed height', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\vc{\text{HETP}}`, desc: 'height equivalent of a theoretical plate', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\vb{N_{TS}}`, desc: 'theoretical stages in the column (reboiler excluded)', unit: '–' },
      ],
      cite: `[${W4}, p. 28; ${FS}, p. 3, eq. 34]`,
      check: { status: 'verified', note: 'Matches W4 p. 28 and formula sheet eq. 34.' },
    },
    {
      id: 'hetp',
      label: 'HETP estimates',
      tex: String.raw`\text{random: } \vc{\text{HETP}} = 18\, d_p \qquad\qquad \text{structured: } \vc{\text{HETP}} = \frac{100}{a} + 0.1`,
      vars: [
        { sym: String.raw`d_p`, desc: 'nominal packing diameter', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`a`, desc: 'specific surface (interfacial) area', unit: String.raw`\mathrm{m^2/m^3}` },
        { sym: String.raw`\vc{\text{HETP}}`, desc: 'result', unit: String.raw`\mathrm{m}` },
      ],
      note: 'Rules of thumb.',
      cite: `[${W4}, p. 28; ${FS}, p. 3, eq. 32–33]`,
      check: { status: 'verified', note: 'Matches W4 p. 28 and formula sheet eq. 32–33 (on PDF p. 4).' },
    },
    {
      id: 'htray',
      label: 'Tray column height',
      tex: String.raw`\va{H_{col}} = H_{space}\cdot N_S`,
      vars: [
        { sym: String.raw`H_{space}`, desc: 'tray spacing (0.15–1.0 m)', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`N_S`, desc: 'number of real trays (rounded up)', unit: '–' },
      ],
      note: 'If an overall efficiency is given, $N_S = N_{TS}/E_O$ first (page 17).',
      cite: `[${W4}, p. 30; ${FS}, p. 3, eq. 35; ${PX2}, Q2b]`,
      check: { status: 'verified', note: 'Matches W4 p. 30 and formula sheet eq. 35.' },
    },
    {
      id: 'ergun',
      label: 'Ergun equation (packed-bed pressure drop)',
      tex: String.raw`\frac{\vd{\Delta P}}{L} = \frac{\ve{G_0}^2}{D_p\,\bar\rho}\cdot\frac{1-\epsilon}{\epsilon^3}\cdot\left(1.75 + \frac{150}{\mathrm{Re}}\right)`,
      vars: [
        { sym: String.raw`\vd{\Delta P}`, desc: 'pressure drop', unit: String.raw`\mathrm{Pa}` },
        { sym: String.raw`L`, desc: 'length of packed bed', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\ve{G_0}`, desc: 'inlet mass flux', unit: String.raw`\mathrm{kg/(m^2\cdot s)}` },
        { sym: String.raw`D_p`, desc: 'effective particle (packing) diameter', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\bar\rho`, desc: 'average gas density', unit: String.raw`\mathrm{kg/m^3}` },
        { sym: String.raw`\epsilon`, desc: 'bed porosity (void fraction)', unit: '–' },
        { sym: String.raw`\mathrm{Re}`, desc: 'Reynolds number', unit: '–' },
      ],
      cite: `[${W4}, p. 36; ${FS}, p. 3, eq. 36]`,
      check: { status: 'verified', note: 'Matches W4 p. 36 and formula sheet eq. 36.' },
    },
    {
      id: 'aux',
      label: 'Ergun auxiliaries',
      tex: String.raw`\ve{G_0} = \rho_0 \vb{v_0} = \frac{\bar M P_{tot}}{RT}\, \vb{v_0}, \qquad \mathrm{Re} = \frac{\ve{G_0} D_p}{(1-\epsilon)\eta}, \qquad \bar\rho = \frac{\bar M}{RT}\left(P_{tot} - \frac{\vd{\Delta P}}{2}\right)`,
      vars: [
        { sym: String.raw`\vb{v_0}`, desc: 'superficial velocity at the inlet', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`\bar M`, desc: 'gas molar mass', unit: String.raw`\mathrm{kg/mol}` },
        { sym: String.raw`P_{tot}`, desc: 'inlet total pressure', unit: String.raw`\mathrm{Pa}` },
        { sym: String.raw`\eta`, desc: 'gas viscosity', unit: String.raw`\mathrm{Pa\cdot s}` },
      ],
      note: '$\\bar\\rho$ depends on ΔP, so solve iteratively.',
      cite: `[${W4}, p. 36–37; ${FS}, p. 3, eq. 37–39]`,
      check: { status: 'verified', note: 'Matches W4 p. 36 and formula sheet eq. 37–38.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })

/** Iterative Ergun, as on the slide (start at 10 % of P_tot). */
function ergun({ v0, L = 6, Dp = 0.015, eps = 0.85, T = 298, P = 1.8e5, eta = 2e-5, M = 0.029 }) {
  const R = 8.314
  const G0 = ((M * P) / (R * T)) * v0
  const Re = (G0 * Dp) / ((1 - eps) * eta)
  let dP = 0.1 * P
  let it = 0
  const hist = []
  for (; it < 30; it++) {
    const rho = (M / (R * T)) * (P - dP / 2)
    const next = L * (G0 ** 2 / (Dp * rho)) * ((1 - eps) / eps ** 3) * (1.75 + 150 / Re)
    hist.push([dP, rho, next])
    if (Math.abs(next - dP) < 0.5) {
      dP = next
      it++
      break
    }
    dP = next
  }
  return { G0, Re, dP, it, hist }
}

// ---- Visual 1: HETP slicing and tray spacing ----------------------------------
function Heights() {
  return (
    <Svg w={560} h={330} label="Packed bed split into HETP slices next to a tray column with spacing and an external reboiler">
      <rect x={60} y={20} width={110} height={270} rx={10} style={st('ink', false, 2)} />
      {Array.from({ length: 5 }, (_, i) => 20 + (i + 1) * 54).map((y, i) => (
        <g key={y}>
          {i < 4 && <line x1={60} y1={y} x2={170} y2={y} style={st('var-c', true, 1.5)} />}
          <Label x={115} y={y - 22} size={10} t="var-c">1 HETP = 1 stage</Label>
        </g>
      ))}
      <Arrow x1={30} y1={290} x2={30} y2={22} t="var-a" />
      <Arrow x1={30} y1={22} x2={30} y2={290} t="var-a" />
      <Label x={115} y={312} size={12} t="var-a">H = HETP · N_TS</Label>
      <rect x={310} y={20} width={110} height={270} rx={10} style={st('ink', false, 2)} />
      {[60, 110, 160, 210, 260].map((y) => <line key={y} x1={310} y1={y} x2={420} y2={y} style={{ stroke: tone('muted'), strokeWidth: 3 }} />)}
      <Arrow x1={295} y1={60} x2={295} y2={110} t="var-f" />
      <Arrow x1={295} y1={110} x2={295} y2={60} t="var-f" />
      <Label x={288} y={90} anchor="end" size={11} t="var-f">H_space</Label>
      <Label x={365} y={312} size={12} t="var-a">H = H_space · N_S</Label>
      <Box x={450} y={250} w={90} h={40} label="reboiler" t="muted" />
      <line x1={420} y1={280} x2={450} y2={270} style={st('ink', false, 1.5)} />
      <Label x={495} y={232} size={10} t="trap">stage, but not</Label>
      <Label x={495} y={244} size={10} t="trap">column height</Label>
    </Svg>
  )
}

// ---- Visual 2: three column types bar chart ---------------------------------------
function HeightBars() {
  const bars = [
    { name: 'plate', sub: '0.60 m × 7 trays', v: 4.2 },
    { name: 'random Pall 1″', sub: 'HETP 0.457 m', v: 3.02 },
    { name: 'structured a = 223', sub: 'HETP 0.548 m', v: 3.62 },
  ]
  const x0 = 60
  const y0 = 20
  const h = 220
  const Y = (v) => y0 + h - (v / 5) * h
  return (
    <Svg w={560} h={304} label="Column heights for the same separation: plate 4.20 m, random 3.02 m, structured 3.62 m">
      <Arrow x1={x0} y1={y0 + h} x2={540} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      {[1, 2, 3, 4, 5].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-a">H_col (m)</Label>
      {bars.map((b, i) => (
        <g key={b.name}>
          <rect x={100 + i * 150} y={Y(b.v)} width={80} height={Y(0) - Y(b.v)} style={{ fill: `color-mix(in srgb, ${tone('var-a')} 35%, var(--bg))`, stroke: tone('var-a'), strokeWidth: 1.5 }} />
          <text x={140 + i * 150} y={Y(b.v) - 6} textAnchor="middle" className="svg-label">{`${b.v.toFixed(2)} m`}</text>
          <text x={140 + i * 150} y={y0 + h + 18} textAnchor="middle" className="svg-sub">{b.name}</text>
          <text x={140 + i * 150} y={y0 + h + 32} textAnchor="middle" className="svg-sub">{b.sub}</text>
        </g>
      ))}
      <Label x={300} y={294} size={12} t="muted">benzene/toluene, 6.6 column stages</Label>
    </Svg>
  )
}

// ---- Visual 3: pressure profile -----------------------------------------------------
function PressureProfile() {
  return (
    <Svg w={520} h={280} label="Pressure falls from the bottom to the top of the column">
      <Arrow x1={60} y1={240} x2={300} y2={240} />
      <Arrow x1={60} y1={240} x2={60} y2={20} />
      <Label x={300} y={262} anchor="end" size={13} t="var-d">pressure</Label>
      <Label x={66} y={16} anchor="start" size={13}>height</Label>
      <line x1={260} y1={230} x2={110} y2={30} style={st('var-d')} />
      <Label x={262} y={226} anchor="start" size={12} t="var-d">P highest (bottom)</Label>
      <Label x={118} y={30} anchor="start" size={12} t="var-d">lowest (top)</Label>
      {['boiling points shift', 'gas density changes', 'equilibria / mass transfer change', 'may need compression (cost)'].map((t, i) => (
        <Label key={t} x={320} y={70 + i * 34} anchor="start" size={12} t={i === 3 ? 'trap' : 'muted'}>{`• ${t}`}</Label>
      ))}
    </Svg>
  )
}

const ERGUN_FLOW = `flowchart TD
  A["compute G₀, Re"] --> B["guess ΔP = 10 % of P_tot"]
  B --> C["ρ̄ = M/RT · (P_tot − ΔP/2)"]
  C --> D[Ergun ΔP]
  D --> E{converged?}
  E -- no: use new ΔP --> C
  E -- yes --> F[done]`

// ---- Interactive -------------------------------------------------------------------
function ErgunExplorer() {
  const [v0, setV0] = useState(2.1)
  const r = ergun({ v0 })
  const x0 = 70
  const y0 = 20
  const w = 360
  const h = 230
  const X = (v) => x0 + ((v - 0.5) / 2.5) * w
  const Y = (p) => y0 + h - (p / 3500) * h
  const vs = Array.from({ length: 50 }, (_, i) => 0.5 + (i / 49) * 2.5)
  return (
    <Diagram
      title="Ergun pressure drop vs superficial velocity (solved iteratively)"
      caption={String.raw`L = 6 m, $D_p$ = 0.015 m, ε = 0.85, T = 298 K, $P_{tot}$ = 1.8 bar, η = 2·10⁻⁵ Pa·s, M = 0.029 kg/mol [Week 4, p. 38–39]. Each point is iterated from a 10 % guess. At 2.1 m/s: $G_0 = 4.42$ kg/(m²·s), Re = 2.21·10⁴, ΔP ≈ 1602 Pa (16 mbar).`}
      cite={`[${W4}, p. 36–39]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="b"><M>v_0</M></V> = <strong>{v0.toFixed(2)}</strong> m/s</span>
            <input type="range" min={0.5} max={3} step={0.01} value={v0} onChange={(e) => setV0(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <V c="e"><M>G_0</M> = {r.G0.toFixed(2)}</V> kg/(m²·s) · Re = {(r.Re / 1e4).toFixed(2)}·10⁴ · iterations: {r.it} ·{' '}
          <V c="d"><M>\Delta P</M> = {r.dP.toFixed(0)} Pa ({(r.dP / 100).toFixed(1)} mbar)</V>
        </p>
        <Svg w={470} h={300} label="Ergun pressure drop against superficial velocity">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {[0.5, 1, 1.5, 2, 2.5, 3].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
          {[1000, 2000, 3000].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
          <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13} t="var-b">v₀ (m/s)</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-d">ΔP (Pa)</Label>
          <polyline points={vs.map((v) => `${X(v)},${Y(ergun({ v0: v }).dP)}`).join(' ')} style={st('var-d')} />
          <circle cx={X(v0)} cy={Y(r.dP)} r={6} style={{ fill: tone('var-b') }} />
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Stages become metres; gas pays in pressure">
        <MentalModel cite={`[${W4}, p. 28–37]`}>
          <T text="Theoretical stages are abstract. Height turns them into metres. In a packed column, each theoretical stage corresponds to a slice of packing one HETP tall, so the height is HETP × stages. Better packing means a smaller HETP and a shorter column [Week 4, p. 28]. Course rules of thumb give HETP from the packing's nominal size (random) or its specific area (structured) [Week 4, p. 28]." />
          <p>
            In a tray column, height is just the number of real trays times the tray spacing. You can&apos;t have a fractional tray, so
            round up [Week 4, p. 30, 32]. Either way, first remove the reboiler from the stage count, because it&apos;s a stage but not
            part of the column [Week 4, p. 32]. The gas loses <V c="d">pressure</V> as it squeezes up through the packing. That shifts
            boiling points, densities and equilibria and may need a compressor [Week 4, p. 34–35]. For packed beds the Ergun equation
            predicts the drop, but the gas density depends on the very ΔP you&apos;re calculating, so you iterate [Week 4, p. 36–37].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Height and pressure drop">
        <Columns>
          <Diagram title="HETP slicing and tray spacing" cite={`[${W4}, p. 28, 30, 32]`}
            caption="Packed: each HETP slice is one theoretical stage. Trays: real trays × spacing. The reboiler is a stage but sits outside the column.">
            <Heights />
          </Diagram>
          <div>
            <Def term="HETP (Height Equivalent of a Theoretical Plate)" cite={`[${W4}, p. 28]`}>
              Packing height per theoretical stage. High packing performance gives a lower packing height.
            </Def>
            <Def term="Packed column height" cite={`[${W4}, p. 28–29]`}>
              {String.raw`$H_{col} \approx H_{pack} = \text{HETP}\cdot N_{TS}$. Alternatively use diagrams or manufacturer information.`}
            </Def>
            <Def term="Tray column height" cite={`[${W4}, p. 30]`}>
              {String.raw`$H_{col} = H_{space}\cdot N_S$. Tray spacing ranges from 0.15 to 1.0 m and depends on column diameter, vapour load and properties.`}
            </Def>
            <Def term="External/partial reboiler" cite={`[${W4}, p. 32; ${E4}, Oppg. 2d]`}>
              Counts as a theoretical stage, so subtract it before computing the column height.
            </Def>
            <Def term="Real trays" cite={`[${W4}, p. 32]`}>
              {"A fraction of a plate isn't possible, so round up (6.6 → 7)."}
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Same separation, three column types" cite={`[${W4}, p. 31–33]`} caption="Benzene/toluene with 6.6 theoretical stages in the column.">
            <HeightBars />
          </Diagram>
          <Def term="Packing size and HETP" cite={`[${PX2}, Q3e.3]`}>
            Larger packing (50 mm vs 25 mm Pall rings) has a larger HETP, so the same packed height gives fewer theoretical stages and less removal.
          </Def>
        </Columns>

        <Columns>
          <Diagram title="Pressure profile up a column" cite={`[${W4}, p. 34–35]`} caption="P is highest at the bottom and falls upwards.">
            <PressureProfile />
          </Diagram>
          <Def term="Pressure drop" cite={`[${W4}, p. 34–35]`}>
            Present in both packed and plate columns. It is important because boiling points, gas density, mass-transfer resistances and equilibria may change, and compression may be required (cost). Plate-column ΔP is out of scope. Packed columns use the Ergun equation.
          </Def>
        </Columns>

        <Columns>
          <Mermaid title="Ergun iteration" chart={ERGUN_FLOW} cite={`[${W4}, p. 37, 39]`}
            caption="Course iterations: 18000 → 1679 → 1602 → 1602 Pa." />
          <Def term="Ergun iterative approach" cite={`[${W4}, p. 37]`}>
            {String.raw`(1) calculate $G_0$ and Re; (2) assume ΔP (e.g. 0.10·$P_{tot}$); (3) calculate $\bar\rho$; (4) calculate ΔP and compare; (5) adjust until it converges.`}
          </Def>
        </Columns>
        <Gap>{'Week 4, p. 29 ("diagrams or manufacturer information" for HETP) is an image with no data.'}</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="hpack" />
        <Eq id="hetp" />
        <Eq id="htray" />
        <Eq id="ergun" />
        <Eq id="aux" />
        <ErgunExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Benzene/toluene column height for three column types"
          given="McCabe–Thiele gives 7.6 theoretical stages including an external reboiler."
          steps={[
            { body: String.raw`Remove the reboiler: $7.6 - 1 = 6.6$ theoretical stages in the column.` },
            { body: String.raw`**Plate column**, 60 cm spacing: 0.6 of a plate isn't possible, so 7 plates. $H_{col} = 0.60\cdot 7 = 4.20$ m.` },
            { body: String.raw`**Random packing**, 1" metal Pall rings: $d_p = 25.4$ mm $= 0.0254$ m, so $\text{HETP} = 18\cdot 0.0254 = 0.457$ m.` },
            { body: String.raw`$H_{col} = 0.457\cdot 6.6 = 3.02$ m.` },
            { body: String.raw`**Structured packing**, $a = 223$ m²/m³: $\text{HETP} = 100/223 + 0.1 = 0.548$ m.` },
            { body: String.raw`$H_{col} = 0.548\cdot 6.6 = 3.62$ m.` },
            { body: "The example also gives a viscosity (0.279 mPa·s) and α (2.465), but this calculation doesn't use them. They're the inputs for efficiency correlations (page 17)." },
          ]}
          result="Plate 4.20 m · random 3.02 m · structured 3.62 m"
          cite={`[${W4}, p. 31–33]`}
        />
        <FadedExample
          title="Ergun pressure drop over a 6 m packed bed"
          given={String.raw`$D_p = 15$ mm, ε = 0.85, T = 298 K, $P_{tot}$ = 1.8 bar, $v_0$ = 2.1 m/s, η = 2·10⁻⁵ Pa·s, M = 0.029 kg/mol.`}
          steps={[
            { title: 'Inlet mass flux.', body: String.raw`$G_0 = \frac{0.029\cdot 1.8\cdot 10^5}{8.314\cdot 298}\cdot 2.1 = 4.42$ kg/(m²·s).`, hidden: true },
            { title: 'Reynolds number.', body: String.raw`$\mathrm{Re} = \frac{4.42\cdot 0.015}{(1-0.85)\cdot 2\cdot 10^{-5}} = 2.21\cdot 10^4$.`, hidden: true },
            { body: String.raw`Guess ΔP = 18000 Pa (10 % of $P_{tot}$): $\bar\rho = 2.00$ kg/m³, and Ergun gives ΔP = 1679 Pa.` },
            { title: 'Iterate with 1679 Pa.', body: String.raw`$\bar\rho = 2.10$ kg/m³ and ΔP = 1602 Pa.`, hidden: true },
            { title: 'Iterate again with 1602 Pa.', body: String.raw`$\bar\rho = 2.10$ kg/m³ and ΔP = 1602 Pa. Converged.`, hidden: true },
            { title: 'Express it in mbar.', body: 'ΔP ≈ 16 mbar.', hidden: true },
          ]}
          cite={`[${W4}, p. 38–39]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Subtract the reboiler stage" cite={`[${PX2}, Q2b; ${W4}, p. 32]`}>
          7 theoretical with an external reboiler means 6 in the column.
        </Trap>
        <Trap title="Round real trays up, not packing stages" cite={`[${W4}, p. 32–33; ${PX2}, Q2b]`}>
          {String.raw`Plates go to whole numbers (6.6 → 7, 8.57 → 9). Packed height uses the fractional $N_{TS}$ directly.`}
        </Trap>
        <Trap title={String.raw`$d_p$ in metres (source discrepancy)`} cite={`[${PX}, Ex. 3e; ${E4}, Oppg. 1e]`}>
          {String.raw`$18\,d_p$ needs $d_p$ in m (1" = 0.0254 m). Practice exam 1 writes it as $0.018\cdot d_p$ with $d_p$ in mm ($0.018\cdot 64 = 1.152$ m). It's the same thing, but mixing them gives a factor of 1000.`}
        </Trap>
        <Trap title="Random vs structured HETP formula" cite={`[${FS}, p. 3, eq. 32–33]`}>
          {String.raw`Random uses $d_p$, structured uses $a$. Using the wrong one is a common slip.`}
        </Trap>
        <Trap title="Efficiency before spacing" cite={`[${PX2}, Q2b]`}>
          {String.raw`If an overall tray efficiency is given, divide the theoretical trays by it before multiplying by the spacing ($6/0.7 = 8.57$ → 9 trays → 4.05 m).`}
        </Trap>
        <Trap title={"Bigger packing isn't free capacity"} cite={`[${PX2}, Q3e.3]`}>
          50 mm Pall rings give a larger HETP, so fewer stages fit in the same height and CO₂ removal drops.
        </Trap>
        <Trap title="Ergun needs iteration" cite={`[${W4}, p. 37; ${E4}, Oppg. 1e]`}>
          {String.raw`$\bar\rho$ uses $P_{tot} - \Delta P/2$. Start at 10 % of $P_{tot}$ and repeat until ΔP stops changing.`}
        </Trap>
        <Trap title={String.raw`$(1-\epsilon)$ appears twice`} cite={`[${W4}, p. 36]`}>
          {String.raw`In the Ergun factor $(1-\epsilon)/\epsilon^3$ and in the Re denominator $(1-\epsilon)\eta$.`}
        </Trap>
      </Section>
    </>
  )
}
