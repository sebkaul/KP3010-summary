import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Box, Arrow, Label, Curve,
  M, V, T, tone,
} from '../components'

const W4 = 'Week 4 - Design of columns with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E4 = 'exercise_04_solutions.pdf'
const E4E = 'exercise_04_eng.pdf'
const PX = 'practice_exam_solutions.pdf'

export const meta = {
  title: 'Column diameter and flooding',
  topic: 'column-design',
  examWeight: {
    level: 'medium',
    note: 'Flooding definition and flooding velocity on 1 of 2 practice exams (Practice exam 1, Ex. 3a–b, 4 pts)',
  },
  examTasks: [
    'Practice exam 1, Ex. 3a: what is flooding, and why is a gas velocity above flooding a problem?',
    'Practice exam 1, Ex. 3b: flooding gas velocity for a random packing (F_p = 28 m⁻¹) at 2 atm. Flow parameter 0.19, capacity parameter 0.26, giving u_V = 3.18 m/s.',
  ],
  buildsOn: ['12-trays-vs-packing'],
  usedIn: ['14-column-height-pressure-drop'],
  sources: [
    `[${W4}, p. 10–27]`,
    `[${FS}, p. 3, eq. 29–31; p. 12, Fig. 1–2]`,
    `[${E4E}, Exercise 1a–c, 2e–f]`,
    `[${E4}, Oppg. 1a–c, 2f]`,
    `[${PX}, Ex. 3a–b]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Does a wider column give a purer product?', a: "No. The diameter doesn't influence the degree of separation or purity. It sets the capacity. [Week 4, p. 10]" },
    { id: 'p2', kind: 'pretest', q: 'What is flooding?', a: 'The gas velocity is so high (column too narrow, or gas flow too large) that liquid is pushed out instead of flowing down. Gas and liquid then lose contact and there is no mass transfer. [Week 4, p. 10; practice_exam_solutions.pdf, Ex. 3a]' },
    { id: 'p3', kind: 'pretest', q: 'Where in an absorber do you size the diameter?', a: 'At the bottom (gas inlet, liquid outlet), where the internal flows are largest. [Week 4, p. 16]' },
    { id: 't1', q: 'NH₃ in air at 2 atm and 25 °C ($\\bar M = 28.61$ g/mol). Find $\\rho_V$.', a: '$\\rho_V = 28.61\\cdot 202650/(8.314\\cdot 298.15) = 2339$ g/m³ $= 2.34$ kg/m³. [practice_exam_solutions.pdf, Ex. 3b]' },
    { id: 't2', q: 'With $Q_L/Q_V = 1/110$ and $\\rho_L = 997$ kg/m³, find the flow parameter. With capacity parameter 0.26 and $F_p = 28$ m⁻¹, find $u_{V,flood}$.', a: 'Flow parameter $= \\frac{1}{110}\\sqrt{997/2.34} = 0.19$. $u_V = 0.26/\\sqrt{\\frac{28}{9.81}\\cdot\\frac{2.34}{997}} = 3.18$ m/s. [practice_exam_solutions.pdf, Ex. 3b]' },
    { id: 't3', q: 'Mellapak 250Y ($F_p = 72.2$ m⁻¹), capacity parameter 0.38, $\\rho_V = 1.17$ kg/m³. Find $u_{V,flood}$ and $D$ at 50 % with $Q_V = 0.155$ m³/s.', a: '$u_V = 0.38/\\sqrt{\\frac{72.2}{9.81}\\cdot\\frac{1.17}{997}} = 4.09$ m/s. Operating velocity 2.04 m/s, $A = 0.076$ m², $D = 0.31$ m. [exercise_04_solutions.pdf, Oppg. 1b–c]' },
    { id: 't4', q: 'Name the two flooding mechanisms in a plate column.', a: 'Downcomer flooding (liquid pushed up the downcomer by a high plate pressure drop) and entrainment flooding (liquid carried up by high vapour velocity). [Week 4, p. 20]' },
    { id: 't5', q: 'Why is there also a minimum liquid load?', a: 'The packing must be covered by a liquid layer (wetted) for optimal mass transfer. [Week 4, p. 10]' },
  ],
  equations: [
    {
      id: 'flow',
      label: 'Flow parameter (strømningsparameter)',
      tex: String.raw`\text{Flow par.} = \frac{\ve{Q_L}}{\vd{Q_V}}\sqrt{\frac{\rho_L}{\rho_V}}`,
      vars: [
        { sym: String.raw`\ve{Q_L}, \vd{Q_V}`, desc: 'volumetric liquid and gas flow', unit: String.raw`\mathrm{m^3/s}` },
        { sym: String.raw`\rho_L, \rho_V`, desc: 'liquid and gas density', unit: String.raw`\mathrm{kg/m^3}` },
      ],
      note: 'Same definition for packed and plate columns.',
      cite: `[${W4}, p. 12, 21; ${FS}, p. 3, eq. 29]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 29 (on PDF p. 4) and W4 p. 12, 21.' },
    },
    {
      id: 'cappack',
      label: 'Capacity parameter, packed column',
      tex: String.raw`\text{Cap. par.} = \vb{u_V}\sqrt{\frac{\vc{F_p}}{g}\cdot\frac{\rho_V}{\rho_L}}`,
      vars: [
        { sym: String.raw`\vb{u_V}`, desc: 'superficial gas velocity (at flooding when read from the flooding curve)', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`\vc{F_p}`, desc: 'packing factor', unit: String.raw`\mathrm{m^{-1}}` },
        { sym: String.raw`g`, desc: 'gravitational acceleration, 9.81', unit: String.raw`\mathrm{m/s^2}` },
      ],
      note: 'Read from the packed-column chart.',
      cite: `[${W4}, p. 12; ${FS}, p. 3, eq. 31]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 31 and W4 p. 12.' },
    },
    {
      id: 'capplate',
      label: 'Capacity parameter, plate column',
      tex: String.raw`\text{Cap. par.} = \vb{u_V}\sqrt{\frac{\rho_V}{\rho_L\, g\, H_{space}}}`,
      vars: [{ sym: String.raw`H_{space}`, desc: 'tray spacing', unit: String.raw`\mathrm{m}` }],
      note: 'Read from the tray-column chart.',
      cite: `[${W4}, p. 21; ${FS}, p. 3, eq. 30, p. 12, Fig. 1]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 30 and W4 p. 21.' },
    },
    {
      id: 'rho',
      label: 'Gas density (ideal gas)',
      tex: String.raw`\rho_V = \frac{\bar M\, p}{RT}, \qquad \bar M = \sum_i y_i M_i`,
      vars: [
        { sym: String.raw`\bar M`, desc: 'mean molar mass of the gas', unit: String.raw`\mathrm{kg/mol}` },
        { sym: String.raw`p`, desc: 'pressure', unit: String.raw`\mathrm{Pa}` },
        { sym: String.raw`R`, desc: '8.314', unit: String.raw`\mathrm{J/(mol\cdot K)}` },
        { sym: String.raw`T`, desc: 'temperature', unit: String.raw`\mathrm{K}` },
      ],
      cite: `[${W4}, p. 16, 24]`,
      check: { status: 'verified', note: 'Matches W4 p. 16.' },
    },
    {
      id: 'dpack',
      label: 'Diameter, packed column',
      tex: String.raw`\vd{Q_V} = A\, \vb{u_V}, \qquad A = \frac{\pi}{4}\va{D}^2 \;\Rightarrow\; \va{D} = \sqrt{\frac{4}{\pi}\cdot\frac{\vd{Q_V}}{\vb{u_V}}}`,
      vars: [
        { sym: String.raw`A`, desc: 'column cross-section', unit: String.raw`\mathrm{m^2}` },
        { sym: String.raw`\va{D}`, desc: 'column diameter', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\vb{u_V}`, desc: '**operating** superficial gas velocity (fraction × flooding)', unit: String.raw`\mathrm{m/s}` },
      ],
      cite: `[${W4}, p. 13]`,
      check: { status: 'verified', note: 'Matches W4 p. 13.' },
    },
    {
      id: 'dplate',
      label: 'Diameter, plate column',
      tex: String.raw`A = \frac{\vd{Q_V}}{\vb{u_V}}, \qquad \va{D} = \sqrt{\frac{4}{\pi}\cdot\frac{A}{1 - f_{DC}}}`,
      vars: [{ sym: String.raw`f_{DC}`, desc: 'downcomer area fraction, about 0.15', unit: '–' }],
      cite: `[${W4}, p. 22]`,
      check: { status: 'verified', note: 'Matches W4 p. 22.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })

// ---- Visual 1: normal vs flooding ----------------------------------------------
function NormalVsFlood() {
  const col = (x) => <rect x={x} y={40} width={120} height={200} rx={10} style={st('ink', false, 2)} />
  const pack = (x) => Array.from({ length: 24 }, (_, i) => (
    <circle key={i} cx={x + 18 + (i % 5) * 21 + ((Math.floor(i / 5) % 2) * 10)} cy={70 + Math.floor(i / 5) * 34} r={6} style={{ fill: 'none', stroke: tone('muted'), strokeWidth: 1.3 }} />
  ))
  return (
    <Svg w={520} h={290} label="Packed column in normal operation versus flooding">
      {col(60)}
      {pack(60)}
      {[85, 120, 155].map((x) => <Arrow key={x} x1={x} y1={230} x2={x} y2={60} t="var-d" />)}
      {[75, 140].map((x) => <path key={x} d={`M${x},45 q6,40 -2,80 q-6,40 4,100`} style={st('var-e', false, 2)} />)}
      <Label x={120} y={268} size={12} t="intuition">contact → mass transfer</Label>
      <Label x={120} y={24} size={13}>normal</Label>
      {col(320)}
      {pack(320)}
      {[345, 380, 415].map((x) => <Arrow key={x} x1={x} y1={235} x2={x} y2={30} t="var-d" />)}
      {[350, 370, 395, 410, 430].map((x, i) => <circle key={x} cx={x} cy={20 + (i % 3) * 8} r={3.5} style={{ fill: tone('var-e') }} />)}
      <rect x={322} y={45} width={116} height={60} style={{ fill: `color-mix(in srgb, ${tone('var-e')} 30%, transparent)` }} />
      <Label x={380} y={268} size={12} t="trap">flooding: no contact</Label>
      <Label x={446} y={70} anchor="start" size={11} t="var-e">liquid held</Label>
      <Label x={446} y={84} anchor="start" size={11} t="var-e">up, blown out</Label>
    </Svg>
  )
}

// ---- Visual 2: schematic flooding chart ---------------------------------------
function FloodChart() {
  const x0 = 70
  const y0 = 20
  const w = 500
  const h = 260
  const lx = (v) => x0 + ((Math.log10(v) + 2) / 2) * w // 0.01 .. 1
  const ly = (v) => y0 + h - ((Math.log10(v) + 1) / 1) * h // 0.1 .. 1
  const pts = [[0.012, 0.44], [0.043, 0.38], [0.0695, 0.35], [0.19, 0.26], [0.45, 0.16], [0.95, 0.09]]
  const marks = [
    { p: [0.0695, 0.35], lab: 'Example 1 (0.0695, 0.35)', dx: -8, dy: 26, end: true },
    { p: [0.043, 0.38], lab: 'Mellapak ex. (0.043, 0.38)', dx: -8, dy: -26, end: true },
    { p: [0.19, 0.26], lab: 'Practice exam 1 (0.19, 0.26)', dx: 10, dy: -14 },
  ]
  return (
    <Svg w={600} h={340} label="Schematic log-log flooding chart: capacity parameter against flow parameter with course read-off points">
      <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      {[0.01, 0.1, 1].map((v) => <text key={v} x={lx(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
      {[0.1, 0.2, 0.5, 1].map((v) => <text key={v} x={x0 - 7} y={ly(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13}>flow parameter (–, log)</Label>
      <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13}>capacity parameter (–, log)</Label>
      <Curve points={pts.map(([a, b]) => [lx(a), ly(b)])} t="trap" />
      {[0.75, 0.55, 0.4].map((k) => (
        <Curve key={k} points={pts.filter(([, b]) => b * k >= 0.1).map(([a, b]) => [lx(a), ly(b * k)])} t="muted" dashed width={1.5} />
      ))}
      <Label x={lx(0.5)} y={ly(0.16) - 10} anchor="start" size={12} t="trap">flooding</Label>
      <Label x={lx(0.3)} y={ly(0.115)} anchor="start" size={11} t="muted">constant ΔP</Label>
      {/* reading arrows for Example 1 */}
      <line x1={lx(0.0695)} y1={y0 + h} x2={lx(0.0695)} y2={ly(0.35)} style={st('example', true, 1.5)} />
      <line x1={lx(0.0695)} y1={ly(0.35)} x2={x0} y2={ly(0.35)} style={st('example', true, 1.5)} />
      {marks.map((m) => (
        <g key={m.lab}>
          <circle cx={lx(m.p[0])} cy={ly(m.p[1])} r={5} style={{ fill: tone('example') }} />
          <Label x={lx(m.p[0]) + m.dx} y={ly(m.p[1]) + m.dy} anchor={m.end ? 'end' : 'start'} size={11} t="example">{m.lab}</Label>
        </g>
      ))}
    </Svg>
  )
}

function StepFlow() {
  const r1 = ['packing', 'F_p', 'volume flows', 'flow parameter', 'chart']
  const r2 = ['capacity par.', 'u_V,flood', '× fraction', 'u_V', 'A = Q_V/u_V', 'D']
  const bw = 96
  const gap = 18
  return (
    <Svg w={700} h={170} label="Seven-step sizing flow from packing choice to diameter">
      {r1.map((t, i) => (
        <g key={t}>
          <Box x={10 + i * (bw + gap + 20)} y={14} w={bw + 20} h={44} label={t} t="definition" />
          {i < r1.length - 1 && <Arrow x1={10 + i * (bw + gap + 20) + bw + 20} y1={36} x2={10 + (i + 1) * (bw + gap + 20)} y2={36} />}
        </g>
      ))}
      <Arrow x1={10 + 4 * (bw + gap + 20) + (bw + 20) / 2} y1={58} x2={10 + 4 * (bw + gap + 20) + (bw + 20) / 2} y2={80} />
      <path d={`M${10 + 4 * (bw + gap + 20) + (bw + 20) / 2},80 H${10 + bw / 2}`} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <Arrow x1={10 + bw / 2} y1={80} x2={10 + bw / 2} y2={103} />
      {r2.map((t, i) => (
        <g key={t}>
          <Box x={10 + i * (bw + gap)} y={104} w={bw} h={44} label={t} t={i === r2.length - 1 ? 'var-a' : 'definition'} />
          {i < r2.length - 1 && <Arrow x1={10 + i * (bw + gap) + bw} y1={126} x2={10 + (i + 1) * (bw + gap)} y2={126} />}
        </g>
      ))}
    </Svg>
  )
}

// ---- Visual 4: plate flooding ---------------------------------------------------
function PlateFlood() {
  const trays = (x) => (
    <g>
      {[60, 150].map((y, i) => (
        <g key={y}>
          <line x1={i ? x + 30 : x} y1={y} x2={i ? x + 200 : x + 170} y2={y} style={{ stroke: tone('ink'), strokeWidth: 3 }} />
          <line x1={i ? x + 30 : x + 170} y1={y} x2={i ? x + 30 : x + 170} y2={y + 60} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
          <rect x={i ? x + 30 : x} y={y - 14} width={170} height={14} style={{ fill: `color-mix(in srgb, ${tone('var-e')} 30%, var(--bg))` }} />
        </g>
      ))}
    </g>
  )
  return (
    <Svg w={520} h={260} label="Downcomer flooding and entrainment flooding in a plate column">
      {trays(20)}
      <rect x={172} y={62} width={26} height={88} style={{ fill: `color-mix(in srgb, ${tone('var-e')} 45%, var(--bg))` }} />
      <Arrow x1={185} y1={140} x2={185} y2={70} t="trap" />
      <Label x={110} y={240} size={12} t="trap">downcomer flooding</Label>
      <Label x={110} y={20} size={11} t="muted">liquid backs up onto the tray above</Label>
      {trays(290)}
      {[330, 370, 410, 450].map((x, i) => (
        <g key={x}>
          <Arrow x1={x} y1={140} x2={x} y2={80} t="var-d" />
          <circle cx={x + 8} cy={100 + (i % 2) * 14} r={3} style={{ fill: tone('var-e') }} />
          <circle cx={x - 6} cy={86 + (i % 2) * 10} r={3} style={{ fill: tone('var-e') }} />
        </g>
      ))}
      <Label x={385} y={240} size={12} t="trap">entrainment flooding</Label>
      <Label x={385} y={20} size={11} t="muted">droplets carried up to the tray above</Label>
    </Svg>
  )
}

// ---- Visual 5: tray cross-section area ------------------------------------------
function TrayArea() {
  const cx = 150
  const cy = 130
  const r = 100
  const yc = cy + r * 0.55
  const dx = Math.sqrt(r * r - (yc - cy) ** 2)
  return (
    <Svg w={320} h={270} label="Tray cross-section with a downcomer segment">
      <circle cx={cx} cy={cy} r={r} style={{ fill: `color-mix(in srgb, ${tone('var-d')} 12%, var(--bg))`, stroke: tone('ink'), strokeWidth: 2 }} />
      <path d={`M${cx - dx},${yc} A${r},${r} 0 0,0 ${cx + dx},${yc} Z`} style={{ fill: `color-mix(in srgb, ${tone('var-e')} 40%, var(--bg))`, stroke: tone('var-e'), strokeWidth: 2 }} />
      <Label x={cx} y={yc + 26} size={12} t="var-e">downcomer, f_DC ≈ 0.15</Label>
      <Label x={cx} y={cy - 10} size={13} t="var-d">gas area A = Q_V / u_V</Label>
      <line x1={cx - r} y1={cy - 70} x2={cx + r} y2={cy - 70} style={{ stroke: 'none' }} />
      <Arrow x1={cx - r} y1={252} x2={cx + r} y2={252} t="var-a" />
      <Arrow x1={cx + r} y1={252} x2={cx - r} y2={252} t="var-a" />
      <Label x={cx} y={246} size={12} t="var-a">D</Label>
    </Svg>
  )
}

// ---- Interactive ----------------------------------------------------------------
function DExplorer() {
  const [f, setF] = useState(0.5)
  const QV = 0.15
  const uf = 2.36
  const D = (fr) => Math.sqrt((4 / Math.PI) * (QV / (fr * uf)))
  const x0 = 64
  const y0 = 20
  const w = 360
  const h = 230
  const X = (v) => x0 + ((v - 0.4) / 0.5) * w
  const Y = (v) => y0 + h - ((v - 0.3) / 0.3) * h
  const fs = Array.from({ length: 60 }, (_, i) => 0.4 + (i / 59) * 0.5)
  return (
    <Diagram
      title="Diameter vs fraction of flooding (Example 1)"
      caption={String.raw`$D = \sqrt{\frac{4}{\pi}\frac{Q_V}{f\,u_{V,flood}}}$ with $Q_V = 0.15$ m³/s and $u_{V,flood} = 2.36$ m/s [Week 4, p. 13, 19]. At $f = 0.50$: $D = 0.40$ m. Typical packed operation is about 0.70 [Week 4, p. 11].`}
      cite={`[${W4}, p. 11, 13, 19]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><M>f</M> = <strong>{f.toFixed(2)}</strong> of flooding</span>
            <input type="range" min={0.4} max={0.9} step={0.01} value={f} onChange={(e) => setF(Number(e.target.value))} />
          </label>
        </div>
        <p><V c="b"><M>u_V</M> = {(f * uf).toFixed(2)}</V> m/s · <V c="a"><M>D</M> = {D(f).toFixed(3)}</V> m</p>
        <Svg w={460} h={300} label="Diameter against fraction of flooding">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {[0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
          {[0.3, 0.4, 0.5, 0.6].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
          <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13}>fraction of flooding f (–)</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-a">D (m)</Label>
          <line x1={X(0.7)} y1={y0} x2={X(0.7)} y2={y0 + h} style={st('intuition', true, 1.5)} />
          <Label x={X(0.7) + 6} y={y0 + 14} anchor="start" size={12} t="intuition">typical packed</Label>
          <polyline points={fs.map((v) => `${X(v)},${Y(D(v))}`).join(' ')} style={st('var-a')} />
          <circle cx={X(f)} cy={Y(D(f))} r={6} style={{ fill: tone('var-b') }} />
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Stages set purity, diameter sets capacity">
        <MentalModel cite={`[${W4}, p. 10–22; ${E4}, Oppg. 1a]`}>
          <T text="The number of stages decides the purity. The diameter decides how much the column can handle [Week 4, p. 10]. Push gas up too fast and it holds the liquid up, then blows it out: the column floods, contact is lost, and nothing separates [Week 4, p. 10; exercise_04_solutions.pdf, Oppg. 1a]." />
          <p>
            So the design is a velocity problem. First find the flooding velocity from an empirical chart that links two dimensionless
            groups: the flow parameter (how much liquid per gas, weighted by density) and the capacity parameter (the{' '}
            <V c="b">gas velocity</V> scaled by packing factor or tray spacing and densities) [Week 4, p. 12, 21]. Then pick an operating
            velocity safely below flooding, about 70 % for packing and 85 % for trays, or whatever the task specifies [Week 4, p. 11, 21].
            The area follows from <M>{String.raw`A = Q_V/u_V`}</M> and the <V c="a">diameter</V> from <M>{String.raw`A = \pi D^2/4`}</M>.
            Trays lose extra area to the downcomer [Week 4, p. 13, 22].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Flooding and the sizing procedure">
        <Columns>
          <Diagram title="Normal operation vs flooding" cite={`[${W4}, p. 10]`} caption="Moderate gas: liquid trickles over the packing. Too much gas: liquid is held up and blown out.">
            <NormalVsFlood />
          </Diagram>
          <div>
            <Def term="Diameter vs capacity" cite={`[${W4}, p. 10]`}>
              {"The diameter doesn't influence separation or purities but sets capacity. A wider column handles higher gas flow rates."}
            </Def>
            <Def term="Flooding (packed)" cite={`[${W4}, p. 10; ${E4}, Oppg. 1a]`}>
              If the diameter is too small or the gas flow too high, the gas velocity is too high and the liquid is pushed out. The flooding point is the gas velocity that prevents water from flowing down the column.
            </Def>
            <Def term="Minimum liquid load (wetting)" cite={`[${W4}, p. 10]`}>
              Needed so the packing is covered by a liquid layer for optimal mass transfer.
            </Def>
            <Def term="Operating point (packed)" cite={`[${W4}, p. 11]`}>
              The column operates best at about 70 % of the flooding gas flow rate.
            </Def>
          </div>
        </Columns>

        <Diagram title="Flooding / pressure-drop correlation (schematic)" cite={`[${W4}, p. 12, 18; ${FS}, p. 12, Fig. 2; ${E4}, Oppg. 1b; ${PX}, Ex. 3b]`}
            caption="Log-log. The flooding curve and constant-ΔP curves are schematic; only the three marked read-offs are course numbers. Dashed: reading Example 1 — up from 0.0695 to the curve, left to 0.35.">
            <FloodChart />
          </Diagram>
        <Columns>
            <Def term="Flow parameter" cite={`[${W4}, p. 12; ${FS}, p. 3, eq. 29]`}>
              {String.raw`$\frac{Q_L}{Q_V}\sqrt{\rho_L/\rho_V}$, the x-axis of the flooding/pressure-drop chart. $Q_i$ is the volume flow (m³/s).`}
            </Def>
            <Def term="Capacity parameter (packing)" cite={`[${W4}, p. 12; ${FS}, p. 3, eq. 31]`}>
              {String.raw`$u_V\sqrt{\frac{F_p}{g}\cdot\frac{\rho_V}{\rho_L}}$, read from the packed-column chart.`}
            </Def>
            <Def term="Capacity parameter (plates)" cite={`[${W4}, p. 21; ${FS}, p. 3, eq. 30]`}>
              {String.raw`$u_V\sqrt{\frac{\rho_V}{\rho_L g H_{space}}}$, with $H_{space}$ the tray spacing (m). Normally 85 % of flooding velocity is used.`}
            </Def>
        </Columns>

        <Diagram title="Seven-step sizing (packed column)" cite={`[${W4}, p. 14]`} caption="Choose packing → F_p; volume flows; flow parameter; chart → capacity parameter; flooding velocity; operating fraction (e.g. 0.7); area and diameter.">
          <StepFlow />
        </Diagram>
        <Def term="Seven-step approach (packed)" cite={`[${W4}, p. 14]`}>
          {String.raw`(1) choose the packing and find $F_p$; (2) find the volume flows and $Q_L/Q_V$; (3) calculate the flow parameter; (4) read the capacity parameter from the empirical plot; (5) solve for the flooding velocity; (6) choose the operating velocity (e.g. 70 %); (7) find the area and diameter.`}
        </Def>

        <Columns>
          <Diagram title="Plate-column flooding mechanisms" cite={`[${W4}, p. 20]`} caption="Left: downcomer flooding. Right: entrainment flooding.">
            <PlateFlood />
          </Diagram>
          <Def term="Plate-column flooding types" cite={`[${W4}, p. 20]`}>
            (1) Downcomer flooding, where the pressure drop across the plates is too high and liquid is pushed up the downcomer to the plate above. (2) Entrainment flooding, where high vapour velocities tear the liquid apart and carry it with the gas to the tray above. Both depend on tray design and flow properties.
          </Def>
        </Columns>
        <Columns>
          <Diagram title="Tray cross-section area" cite={`[${W4}, p. 22]`} caption="Part of the tray is taken by the downcomer and is not available to the gas.">
            <TrayArea />
          </Diagram>
          <Def term={String.raw`Downcomer fraction $f_{DC}$`} cite={`[${W4}, p. 22]`}>
            The part of the tray area used by the downcomer and not available to the gas. Usually about 0.15.
          </Def>
        </Columns>
        <Gap>{'The flooding and pressure-drop correlation charts (Week 4, p. 18, 26; formula sheet p. 12; "Fig. 4.18/4.10 in the book") are images. Only individual read-off points are available, so the visual curve must be schematic.'}</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="flow" />
        <Eq id="cappack" />
        <Eq id="capplate" />
        <Eq id="rho" />
        <Eq id="dpack" />
        <DExplorer />
        <Eq id="dplate" />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title='Packed NH₃ absorber with 1" metal Pall rings'
          given={String.raw`25 °C, 1 atm. Gas feed 653.2 kg/h with 3 mol % NH₃, the rest air. $Q_L/Q_V = 1/420$, $\rho_L = 997$ kg/m³. Operate at 50 % of flooding.`}
          steps={[
            { body: String.raw`Design at the bottom (gas inlet, liquid outlet), where the flows are largest. Packing factor $F_p = 184$ m⁻¹.` },
            { body: String.raw`Mean molar mass: $\bar M = 0.97\cdot 28.97 + 0.03\cdot 17 = 28.61$ g/mol.` },
            { body: String.raw`Gas density: $\rho_V = \dfrac{28.61\cdot 101325}{8.314\cdot 298.15} = 1169$ g/m³ $= 1.17$ kg/m³.` },
            { body: String.raw`Flow parameter: $\dfrac{1}{420}\sqrt{\dfrac{997}{1.17}} = 0.0695$.` },
            { body: 'Chart: capacity parameter $= 0.35$.' },
            { body: String.raw`Flooding velocity: $u_V = \dfrac{0.35}{\sqrt{\frac{184}{9.81}\cdot\frac{1.17}{997}}} = 2.36$ m/s.` },
            { body: String.raw`Operating velocity at 50 %: $2.36/2 = 1.18$ m/s.` },
            { body: String.raw`Gas flow: $\dot m_V = 645$ kg/h $= 0.181$ kg/s, so $Q_V = 0.181/1.17 = 0.15$ m³/s.` },
            { body: String.raw`Diameter: $D = \sqrt{\dfrac{4}{\pi}\cdot\dfrac{0.15}{1.18}} = 0.40$ m.` },
          ]}
          result="D = 0.40 m"
          cite={`[${W4}, p. 15–19]`}
        />
        <Gap>{String.raw`Week 4, p. 19 uses $\dot m_V = 645$ kg/h for the gas, while the example states a 653.2 kg/h feed. The slide doesn't explain the difference. (Source discrepancy, listed in the index.)`}</Gap>
        <FadedExample
          title="Sieve-tray ethanol absorber"
          given={String.raw`25 °C, 1 atm. Gas 211.7 kmol/h with 2 mol % ethanol, the rest air ($M = 29.0$). Liquid 320 kmol/h water. Tray spacing 15.24 cm. Operate at 85 % of flooding, $f_{DC} = 0.15$.`}
          steps={[
            { body: 'Gas molar flow: $211.7$ kmol/h $= 58.8$ mol/s.' },
            { title: 'Gas volume flow.', body: String.raw`$Q_V = \dfrac{58.8\cdot 8.314\cdot 298.15}{101325} = 1.44$ m³/s.`, hidden: true },
            { title: 'Gas density.', body: String.raw`$\bar M = 0.98\cdot 29 + 0.02\cdot 46.1 = 29.34$ kg/kmol, so $\rho_V = 1.2$ kg/m³.`, hidden: true },
            { title: 'Liquid volume flow.', body: String.raw`$88.9$ mol/s $\cdot\, 0.01802/997 = 1.6\cdot 10^{-3}$ m³/s.`, hidden: true },
            { title: 'Flow parameter.', body: String.raw`$\dfrac{1.6\cdot 10^{-3}}{1.44}\sqrt{\dfrac{997}{1.2}} = 0.032$.`, hidden: true },
            { body: 'From the tray chart: capacity parameter $= 0.04$.' },
            { title: 'Flooding velocity, then 85 %.', body: String.raw`$u_V = 0.04/\sqrt{1.2/(997\cdot 9.81\cdot 0.1524)} = 1.41$ m/s, so $1.20$ m/s.`, hidden: true },
            { title: 'Gas area and diameter.', body: String.raw`$A = 1.44/1.20 = 1.16$ m², and $D = \sqrt{\frac{4}{\pi}\cdot\frac{1.16}{1 - 0.15}} = 1.32$ m.`, hidden: true },
          ]}
          cite={`[${W4}, p. 23–27]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Square root in the flow parameter" cite={`[${FS}, p. 3, eq. 29; ${W4}, p. 17]`}>
          {String.raw`It's $\frac{Q_L}{Q_V}\sqrt{\rho_L/\rho_V}$. The slide layout can hide the root, but all the course numbers use it.`}
        </Trap>
        <Trap title="Packed vs plate capacity parameter" cite={`[${FS}, p. 3, p. 12]`}>
          {String.raw`Packed uses $F_p$, plates use the tray spacing $H_{space}$. Use the matching chart (formula sheet Fig. 2 packed, Fig. 1 plates).`}
        </Trap>
        <Trap title="Size where the flow is largest" cite={`[${W4}, p. 16; ${E4}, Oppg. 2f]`}>
          {String.raw`The absorber bottom. In a distillation column, wherever the vapour flow is largest. In exercise 4 that is the top, since $V' > V''$.`}
        </Trap>
        <Trap title="Fraction of flooding" cite={`[${W4}, p. 11, 15, 21; ${E4E}, Exercise 1c, 2f]`}>
          About 70 % (packed) and 85 % (plates) are the defaults. Tasks often set their own (50 %, 75 %), so always use the given value.
        </Trap>
        <Trap title="Subtract the downcomer" cite={`[${W4}, p. 22]`}>
          {String.raw`For trays, divide the gas area by $(1 - f_{DC})$ before computing D.`}
        </Trap>
        <Trap title="Volumes, not moles" cite={`[${W4}, p. 24–25]`}>
          {String.raw`The flow parameter needs $Q$ in m³/s. Convert molar or mass flows with the ideal gas law or densities.`}
        </Trap>
        <Trap title={String.raw`$F_p$ units`} cite={`[${E4}, Oppg. 1b]`}>Convert ft²/ft³ to m⁻¹ (× 3.28) before the capacity parameter.</Trap>
        <Trap title="Typo in the exercise solution (source discrepancy)" cite={`[${E4}, Oppg. 1c]`}>
          {String.raw`Oppg. 1c writes $A = 0.155/2.04 = 0.76$ m². It is 0.076 m², which gives the stated $D = 0.31$ m.`}
        </Trap>
      </Section>
    </>
  )
}
