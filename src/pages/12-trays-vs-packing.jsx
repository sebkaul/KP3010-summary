import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W4 = 'Week 4 - Design of columns with solutions.pdf'
const PT = 'packing_tables.pdf'
const E4 = 'exercise_04_solutions.pdf'
const E4E = 'exercise_04_eng.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Tray columns vs packed columns',
  topic: 'column-design',
  examWeight: {
    level: 'low',
    note: 'No stand-alone question; packing data (F_p, a, ε, d_p) is given as input to the flooding and HETP sub-questions on 2 of 2 practice exams',
  },
  examTasks: [
    'Practice exam 1, Ex. 3b: random packing given with F_p = 28 m⁻¹, a = 223 m²/m³, d_p = 64 mm as input for flooding (page 13).',
    'Autumn 2022, Q3 table: Raschig and Pall data given. Q3e.3: switching from 25 to 50 mm Pall rings (page 14).',
    'Autumn 2022, Q2b: "a tray column with an external reboiler stage is the best option" is given as context for the height calculation (pages 14, 17).',
  ],
  buildsOn: ['06-feed-line-mccabe-thiele', '10-multistage-absorption-stripping'],
  usedIn: ['13-column-diameter-flooding', '14-column-height-pressure-drop'],
  sources: [
    `[${W4}, p. 2–9]`,
    `[${PT}, Table 6.6 (random and structured packings)]`,
    `[${E4E}, Exercise 1]`,
    `[${E4}, Oppg. 1b]`,
    `[${PX2}, Q3 table, Q2b, Q3e.3]`,
    `[${PX}, Ex. 3b]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Which tray type is cheap and simple but has a limited operating range?', a: 'Sieve trays. [Week 4, p. 3]' },
    { id: 'p2', kind: 'pretest', q: 'Why is structured packing preferred for vacuum distillation?', a: 'The vertical corrugated sheets give very low pressure drops. [Week 4, p. 6, 9]' },
    { id: 'p3', kind: 'pretest', q: 'A packing table gives $F_p$ in ft²/ft³. What do you do before using it?', a: 'Convert to m⁻¹: 1 ft²/ft³ = 3.28 m²/m³. [exercise_04_solutions.pdf, Oppg. 1b]' },
    { id: 't1', q: 'Give one advantage and one drawback each of bubble-cap, sieve and valve trays.', a: 'Bubble cap: no leakage, but expensive with high ΔP. Sieve: cheap and simple, but limited range, weeping and high ΔP. Valve: efficient over a wide gas-flow range (drawback not stated in the slides). [Week 4, p. 3]' },
    { id: 't2', q: 'Why does random packing give better mass transfer than trays?', a: 'There is no downcomer and the flow is fully counter-current. [Week 4, p. 9]' },
    { id: 't3', q: 'Convert a tabulated $F_p = 40$ ft²/ft³ to SI.', a: '$40\\cdot 3.28 = 131$ m⁻¹. [exercise_04_solutions.pdf, Oppg. 1b]' },
    { id: 't4', q: 'What are $a$ and $\\epsilon$, and how do you estimate $F_p$ from them?', a: '$a$ is the interfacial area per m³ of packing and $\\epsilon$ the void fraction. $F_p \\approx a/\\epsilon^3$. [Week 4, p. 8]' },
    { id: 't5', q: 'How much more expensive is structured packing than random packing, and what do you get for it?', a: 'About 3–4×. You get lower pressure drop, better performance, higher capacity and no random inhomogeneity. [Week 4, p. 6]' },
  ],
  equations: [
    {
      id: 'fp',
      label: 'Packing factor estimate',
      tex: String.raw`\vc{F_p} = \frac{\va{a}}{\vb{\epsilon_v}^3}`,
      vars: [
        { sym: String.raw`\vc{F_p}`, desc: 'packing factor', unit: String.raw`\mathrm{m^{-1}}\ (\mathrm{m^2/m^3})` },
        { sym: String.raw`\va{a}`, desc: 'specific (interfacial) surface area of the packing', unit: String.raw`\mathrm{m^2/m^3}` },
        { sym: String.raw`\vb{\epsilon_v}`, desc: 'void fraction', unit: '–' },
      ],
      note: 'Use only if no tabulated $F_p$ is available.',
      cite: `[${W4}, p. 8]`,
      check: { status: 'verified', note: 'Matches W4 p. 8.' },
    },
    {
      id: 'conv',
      label: 'Unit conversion for tabulated packing factors',
      tex: String.raw`1\ \mathrm{ft^2/ft^3} = 3.28\ \mathrm{m^2/m^3}`,
      vars: [{ sym: String.raw`\vc{F_p}\ (\text{table})`, desc: 'packing factor as listed in the packing tables', unit: String.raw`\mathrm{ft^2/ft^3}` }],
      note: 'The packing tables list $F_p$ in ft²/ft³ and $a$ in m²/m³.',
      cite: `[${PT}, Table 6.6; ${E4}, Oppg. 1b]`,
      check: { status: 'verified', note: 'Matches exercise 4 solution, Oppg. 1b.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const fill = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))`, stroke: tone(t), strokeWidth: 1.5 })

// ---- Visual 1: three tray types -----------------------------------------------
function TrayTypes() {
  const tray = (x) => (
    <g>
      <rect x={x} y={120} width={160} height={8} style={{ fill: tone('ink') }} />
      <rect x={x} y={92} width={160} height={28} style={fill('var-e', 30)} />
    </g>
  )
  const bubbles = (xs) => xs.map((x, i) => <circle key={i} cx={x} cy={100 + (i % 2) * 10} r={3} style={{ fill: 'none', stroke: tone('var-d'), strokeWidth: 1.5 }} />)
  return (
    <Svg w={600} h={240} label="Bubble-cap, sieve and valve tray cross-sections">
      {/* bubble cap */}
      {tray(20)}
      {[55, 125].map((x) => (
        <g key={x}>
          <rect x={x - 6} y={96} width={12} height={28} style={{ fill: 'var(--bg)', stroke: tone('ink'), strokeWidth: 1.5 }} />
          <path d={`M${x - 16},104 v-12 h32 v12`} style={{ fill: 'var(--bg)', stroke: tone('ink'), strokeWidth: 2 }} />
        </g>
      ))}
      {bubbles([36, 74, 106, 144])}
      <Arrow x1={100} y1={175} x2={100} y2={135} t="var-d" />
      <Label x={100} y={30} size={14}>bubble cap</Label>
      <Label x={100} y={200} size={11} t="muted">no leakage</Label>
      <Label x={100} y={214} size={11} t="muted">expensive, high ΔP</Label>
      {/* sieve */}
      {tray(220)}
      {[240, 262, 284, 306, 328, 350].map((x) => <rect key={x} x={x} y={120} width={6} height={8} style={{ fill: 'var(--bg)' }} />)}
      {bubbles([243, 265, 287, 309, 331, 353])}
      <Arrow x1={300} y1={175} x2={300} y2={135} t="var-d" />
      <Label x={300} y={30} size={14}>sieve</Label>
      <Label x={300} y={200} size={11} t="muted">5–15 % open, cheap</Label>
      <Label x={300} y={214} size={11} t="muted">limited range, weeping</Label>
      {/* valve */}
      {tray(420)}
      {[460, 540].map((x) => (
        <g key={x}>
          <rect x={x - 8} y={120} width={16} height={8} style={{ fill: 'var(--bg)' }} />
          <rect x={x - 14} y={108} width={28} height={5} style={{ fill: tone('ink') }} />
          <line x1={x - 10} y1={113} x2={x - 10} y2={124} style={{ stroke: tone('ink'), strokeWidth: 1.5 }} />
          <line x1={x + 10} y1={113} x2={x + 10} y2={124} style={{ stroke: tone('ink'), strokeWidth: 1.5 }} />
        </g>
      ))}
      {bubbles([440, 478, 522, 560])}
      <Arrow x1={500} y1={175} x2={500} y2={135} t="var-d" />
      <Label x={500} y={30} size={14}>valve</Label>
      <Label x={500} y={200} size={11} t="muted">efficient over a wide</Label>
      <Label x={500} y={214} size={11} t="muted">gas-flow range</Label>
      <Label x={300} y={60} size={11} t="var-e">liquid on the tray, gas bubbling up</Label>
    </Svg>
  )
}

// ---- Visual 2: tray vs packed ----------------------------------------------------
function TrayVsPacked() {
  const shell = (x) => <rect x={x} y={30} width={120} height={230} rx={10} style={st('ink', false, 2)} />
  const flows = (x) => (
    <>
      <Arrow x1={x + 135} y1={250} x2={x + 135} y2={45} t="var-d" />
      <Arrow x1={x - 15} y1={45} x2={x - 15} y2={250} t="var-e" />
    </>
  )
  const rand = []
  for (let r = 0; r < 10; r++) for (let c = 0; c < 6; c++) rand.push([248 + c * 18 + (r % 2) * 9, 50 + r * 20, (r * 7 + c * 13) % 4])
  return (
    <Svg w={640} h={300} label="Tray column with downcomers, random packed bed and structured corrugated packing">
      {shell(40)}
      {[70, 115, 160, 205].map((y, i) => (
        <g key={y}>
          <line x1={i % 2 ? 40 : 65} y1={y} x2={i % 2 ? 135 : 160} y2={y} style={{ stroke: tone('muted'), strokeWidth: 3 }} />
          <line x1={i % 2 ? 135 : 65} y1={y} x2={i % 2 ? 135 : 65} y2={y + 30} style={{ stroke: tone('muted'), strokeWidth: 2 }} />
        </g>
      ))}
      {flows(40)}
      <Label x={100} y={282} size={13}>trays (+ downcomers)</Label>
      {shell(240)}
      {rand.map(([x, y, k], i) => (k === 0
        ? <circle key={i} cx={x} cy={y} r={5} style={{ fill: 'none', stroke: tone('muted'), strokeWidth: 1.5 }} />
        : <path key={i} d={`M${x - 6},${y + 3} q6,-10 12,0`} style={{ fill: 'none', stroke: tone('muted'), strokeWidth: 1.5, transform: `rotate(${k * 40}deg)`, transformOrigin: `${x}px ${y}px` }} />))}
      {flows(240)}
      <Label x={300} y={282} size={13}>random packing</Label>
      {shell(440)}
      {Array.from({ length: 6 }, (_, i) => 452 + i * 18).map((x) => (
        <path key={x} d={`M${x},40 ${Array.from({ length: 10 }, (_, j) => `l${j % 2 ? -8 : 8},22`).join(' ')}`} style={{ fill: 'none', stroke: tone('muted'), strokeWidth: 1.5 }} />
      ))}
      {flows(440)}
      <Label x={500} y={282} size={13}>structured packing</Label>
      <Label x={400} y={18} size={12} t="definition">packed: turbulent, low ΔP, low holdup</Label>
    </Svg>
  )
}

// ---- Visual 3: random packing shapes --------------------------------------------
function Shapes() {
  const items = [
    ['(a) Raschig ring', (x) => (<><ellipse cx={x} cy={62} rx={20} ry={7} style={st('ink', false, 2)} /><line x1={x - 20} y1={62} x2={x - 20} y2={92} style={st('ink', false, 2)} /><line x1={x + 20} y1={62} x2={x + 20} y2={92} style={st('ink', false, 2)} /><path d={`M${x - 20},92 a20,7 0 0,0 40,0`} style={st('ink', false, 2)} /></>)],
    ['(b) Berl saddle', (x) => <path d={`M${x - 24},90 q24,-50 48,0 q-24,-25 -48,0`} style={st('ink', false, 2)} />],
    ['(c) Pall ring', (x) => (<><ellipse cx={x} cy={62} rx={20} ry={7} style={st('ink', false, 2)} /><line x1={x - 20} y1={62} x2={x - 20} y2={92} style={st('ink', false, 2)} /><line x1={x + 20} y1={62} x2={x + 20} y2={92} style={st('ink', false, 2)} /><path d={`M${x - 20},92 a20,7 0 0,0 40,0`} style={st('ink', false, 2)} /><rect x={x - 8} y={70} width={6} height={12} style={st('ink', false, 1.5)} /><rect x={x + 3} y={70} width={6} height={12} style={st('ink', false, 1.5)} /></>)],
    ['(d) Intalox IMPT', (x) => <path d={`M${x - 24},90 q12,-40 24,-10 q12,-30 24,10`} style={st('ink', false, 2)} />],
    ['(e) Jaeger Tri-Pack', (x) => (<><circle cx={x} cy={75} r={20} style={st('ink', false, 2)} /><line x1={x - 20} y1={75} x2={x + 20} y2={75} style={st('ink', false, 1.5)} /><line x1={x} y1={55} x2={x} y2={95} style={st('ink', false, 1.5)} /></>)],
  ]
  return (
    <Svg w={620} h={150} label="Generic outlines of five random packing shapes">
      {items.map(([name, draw], i) => (
        <g key={name}>
          {draw(62 + i * 124)}
          <Label x={62 + i * 124} y={124} size={12}>{name}</Label>
        </g>
      ))}
      <Label x={310} y={20} size={12} t="muted">materials: metal / ceramic / plastic</Label>
    </Svg>
  )
}

// ---- Visual 4: choice table ------------------------------------------------------
function ChoiceTable() {
  const cols = ['', 'Trays', 'Random packing', 'Structured packing']
  const rows = [
    ['Cost', 'inexpensive', '—', 'most expensive (3–4× random)'],
    ['Mass transfer', '—', 'more effective (no downcomer, counter-current)', 'better performance'],
    ['ΔP', 'bubble cap / sieve: high', 'lower', 'even lower'],
    ['Liquid holdup', '—', 'lower (safety)', '—'],
    ['Typical use', 'lots of experience', '—', 'vacuum distillation / stripping'],
  ]
  const cw = [110, 150, 190, 190]
  const xs = cw.reduce((a, w, i) => [...a, a[i] + w], [0])
  const rh = 44
  const hi = { '4-1': 'intuition', '4-3': 'intuition', '0-1': 'intuition' }
  return (
    <Svg w={650} h={50 + rows.length * rh} label="Comparison of trays, random packing and structured packing">
      {cols.map((c, i) => <text key={i} x={xs[i] + 6} y={26} className="svg-label">{c}</text>)}
      {rows.map((r, ri) => r.map((cell, ci) => {
        const y = 36 + ri * rh
        const h = hi[`${ri}-${ci}`]
        return (
          <g key={`${ri}-${ci}`}>
            <rect x={xs[ci]} y={y} width={cw[ci] - 4} height={rh - 4} rx={6}
              style={h ? fill(h, 22) : { fill: ci === 0 ? 'none' : `color-mix(in srgb, ${tone('muted')} 10%, var(--bg))`, stroke: 'none' }} />
            {String(cell).length > 26 ? (
              <>
                <text x={xs[ci] + 6} y={y + 17} className="svg-sub">{cell.slice(0, cell.lastIndexOf(' ', 26))}</text>
                <text x={xs[ci] + 6} y={y + 32} className="svg-sub">{cell.slice(cell.lastIndexOf(' ', 26) + 1)}</text>
              </>
            ) : (
              <text x={xs[ci] + 6} y={y + 25} className={ci === 0 ? 'svg-label' : 'svg-sub'}>{cell}</text>
            )}
          </g>
        )
      }))}
    </Svg>
  )
}

// ---- Visual 5: tabulated vs estimated F_p ----------------------------------------
const PACK = [
  { name: 'Raschig ceramic 13 mm', a: 364, e: 0.64, Fp: 1900 },
  { name: 'Raschig ceramic 25 mm', a: 190, e: 0.74, Fp: 587 },
  { name: 'Pall metallic 25 mm', a: 207, e: 0.94, Fp: 184 },
]

function FpBars() {
  const x0 = 70
  const y0 = 20
  const h = 240
  const Y = (v) => y0 + h - (v / 2200) * h
  return (
    <Svg w={560} h={320} label="Tabulated packing factor vs estimate a/ε³ for three packings">
      <Arrow x1={x0} y1={y0 + h} x2={540} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      {[500, 1000, 1500, 2000].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-c">F_p (m⁻¹)</Label>
      {PACK.map((p, i) => {
        const est = p.a / p.e ** 3
        const bx = 100 + i * 150
        return (
          <g key={p.name}>
            <rect x={bx} y={Y(p.Fp)} width={44} height={Y(0) - Y(p.Fp)} style={fill('var-c', 45)} />
            <rect x={bx + 50} y={Y(est)} width={44} height={Y(0) - Y(est)} style={{ ...fill('var-c', 10), strokeDasharray: '5 4' }} />
            <text x={bx + 22} y={Y(p.Fp) - 5} textAnchor="middle" className="svg-sub">{p.Fp}</text>
            <text x={bx + 72} y={Y(est) - 5} textAnchor="middle" className="svg-sub">{Math.round(est)}</text>
            <text x={bx + 47} y={y0 + h + 18} textAnchor="middle" className="svg-sub">{p.name}</text>
            <text x={bx + 47} y={y0 + h + 33} textAnchor="middle" className="svg-sub">{`a = ${p.a}, ε = ${p.e}`}</text>
          </g>
        )
      })}
      <rect x={360} y={40} width={14} height={14} style={fill('var-c', 45)} />
      <Label x={380} y={52} anchor="start" size={12}>tabulated</Label>
      <rect x={360} y={62} width={14} height={14} style={{ ...fill('var-c', 10), strokeDasharray: '5 4' }} />
      <Label x={380} y={74} anchor="start" size={12}>estimate a/ε³</Label>
    </Svg>
  )
}

// ---- Interactive ----------------------------------------------------------------
function FpExplorer() {
  const [e, setE] = useState(0.94)
  const a = 207
  const Fp = a / e ** 3
  const x0 = 64
  const y0 = 20
  const w = 380
  const h = 240
  const X = (v) => x0 + ((v - 0.6) / 0.38) * w
  const Y = (v) => y0 + h - (v / 1000) * h
  const es = Array.from({ length: 80 }, (_, i) => 0.6 + (i / 79) * 0.38)
  return (
    <Diagram
      title={String.raw`Packing factor vs void fraction ($a = 207$ m²/m³)`}
      caption={String.raw`$F_p = a/\epsilon^3$ [Week 4, p. 8] with $a$ of 25 mm metallic Pall rings [practice exam 2 solutions.pdf, Q3 table]. The cubic means a small drop in void fraction makes $F_p$ jump.`}
      cite={`[${W4}, p. 8; ${PX2}, Q3 table]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="b"><M>\epsilon</M></V> = <strong>{e.toFixed(2)}</strong></span>
            <input type="range" min={0.6} max={0.98} step={0.005} value={e} onChange={(ev) => setE(Number(ev.target.value))} />
          </label>
        </div>
        <p><V c="c"><M>F_p</M> = {Fp.toFixed(0)}</V> m⁻¹</p>
        <Svg w={480} h={310} label="F_p against void fraction">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {[0.6, 0.7, 0.8, 0.9].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
          {[250, 500, 750, 1000].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
          <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13} t="var-b">ε (–)</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13} t="var-c">F_p (m⁻¹)</Label>
          <polyline points={es.map((v) => `${X(v)},${Y(a / v ** 3)}`).join(' ')} style={st('var-c')} />
          <circle cx={X(e)} cy={Y(Fp)} r={6} style={{ fill: tone('var-b') }} />
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Hardware that makes contact area">
        <MentalModel cite={`[${W4}, p. 2–9]`}>
          <T text="McCabe–Thiele gives the number of theoretical stages. Now you need hardware that brings gas and liquid into close contact over a large area, because mass transfer needs contact area [Week 4, p. 2]. There are two families. Tray columns hold the liquid on discrete plates and bubble gas through it [Week 4, p. 2–3]. Packed columns fill the column with packing that the liquid trickles over while gas rises through the voids, giving turbulent, continuous contact [Week 4, p. 4]." />
          <p>
            Trays are cheap and well understood. Random packing gives better mass transfer, lower pressure drop and less liquid holdup.
            Structured packing gives the lowest pressure drop and best distribution, at the highest price [Week 4, p. 9]. For packed
            columns one number summarises how the packing behaves hydraulically, the <V c="c">packing factor <M>F_p</M></V>, which feeds
            straight into the flooding calculation on the next page [Week 4, p. 8].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Trays, packing and the packing factor">
        <Diagram title="Three tray types" cite={`[${W4}, p. 3]`} caption="Liquid sits on the tray; gas bubbles up through caps, holes or valves.">
          <TrayTypes />
        </Diagram>
        <Columns>
          <div>
            <Def term="Tray (plate) columns" cite={`[${W4}, p. 2]`}>Give high contact area for mass transfer. Common for both absorption and distillation.</Def>
            <Def term="Bubble-cap trays" cite={`[${W4}, p. 3]`}>Conventional, prevent liquid from leaking through the tray. Expensive, with higher pressure drops.</Def>
          </div>
          <div>
            <Def term="Sieve trays" cite={`[${W4}, p. 3]`}>Simple and inexpensive, but limited operating range, weeping or high pressure drops. 5–15 % of the tray area is open.</Def>
            <Def term="Valve trays" cite={`[${W4}, p. 3]`}>Designed to operate efficiently over a large range of gas flow rates. Fixed or floating.</Def>
          </div>
        </Columns>

        <Diagram title="Tray column vs packed column" cite={`[${W4}, p. 2, 4, 6]`} caption="Trays with downcomers, a random packed bed, and vertical corrugated sheets (structured). Gas ↑, liquid ↓.">
          <TrayVsPacked />
        </Diagram>
        <Columns>
          <Def term="Packed columns" cite={`[${W4}, p. 4]`}>
            Packing provides contact area. Gas rises while liquid trickles down. Flows are often very turbulent, which raises mass transfer. Relatively low pressure drop and liquid holdup. Packing can be random or structured.
          </Def>
          <Def term="Structured packing" cite={`[${W4}, p. 6]`}>
            Fixed packing that removes the inhomogeneity of random packing. Vertical corrugated sheets give low pressure drops. Better performance and higher capacities than random packing, but 3–4 times more expensive.
          </Def>
        </Columns>

        <Diagram title="Random packing shapes" cite={`[${W4}, p. 5]`} caption="Generic outlines only.">
          <Shapes />
        </Diagram>
        <Def term="Random packing" cite={`[${W4}, p. 5]`}>
          Many shapes, each designed for specific processes (structuring in the column, pressure drop, viscous liquids). Made of metal, ceramic or plastic. Examples: Raschig ring, Berl saddle, Pall ring, Intalox IMPT, Jaeger Tri-Pack.
        </Def>

        <Diagram title="Which column type?" cite={`[${W4}, p. 3, 6, 9]`}
          caption="Only what the slides state; “—” means not stated. Highlighted: cheap/known → trays, vacuum → structured.">
          <ChoiceTable />
        </Diagram>
        <Def term="Choosing a column type" cite={`[${W4}, p. 9]`}>
          Trays are inexpensive with lots of experience. Random packing gives more effective mass transfer (no downcomer, counter-current flow), lower pressure drop and lower liquid holdup (safety). Structured packing gives even lower pressure drop (vacuum distillation/stripping) and good distribution, but is the most expensive (including distributors and collectors).
        </Def>

        <Columns>
          <Diagram title="Packing factor: tabulated vs estimated" cite={`[${PX2}, Q3 table; ${W4}, p. 8]`} caption="Use the table when you have it.">
            <FpBars />
          </Diagram>
          <div>
            <Def term={String.raw`Packing factor ($F_p$)`} cite={`[${W4}, p. 8]`}>
              {String.raw`"How efficient is the packing?" Use the tabulated value if possible, otherwise estimate it from $a$ and $\epsilon$.`}
            </Def>
            <Def term={String.raw`Specific surface area ($a$)`} cite={`[${W4}, p. 8]`}>Interfacial area, m² per m³ of packing.</Def>
            <Def term={String.raw`Void fraction ($\epsilon$)`} cite={`[${W4}, p. 8]`}>Fraction of the volume that is empty (not packing).</Def>
          </div>
        </Columns>
        <Gap>Week 4, p. 7 (&quot;Packing specifications&quot;) is an image-only table with no extractable text.</Gap>
        <Gap>{String.raw`The structured-packing rows in packing_tables.pdf are rotated in the PDF, so $a$ and $\epsilon$ for Mellapak 250Y couldn't be extracted. Only $F_p = 22$ ft²/ft³ (via the exercise solution) is used.`}</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="fp" />
        <FpExplorer />
        <Eq id="conv" />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Estimated vs tabulated packing factor (exam packing table)"
          given={String.raw`Table: Raschig ceramic 25 mm ($\epsilon = 0.74$, $a = 190$ m²/m³, $F_p = 587$ m⁻¹) and Pall metallic 25 mm ($\epsilon = 0.94$, $a = 207$ m²/m³, $F_p = 184$ m⁻¹).`}
          steps={[
            { body: String.raw`Estimate for Raschig: $F_p \approx 190/0.74^3 = 190/0.405 = 469$ m⁻¹.` },
            { body: String.raw`Estimate for Pall: $F_p \approx 207/0.94^3 = 207/0.831 = 249$ m⁻¹.` },
            { body: 'Compare with the table: 469 vs 587 (Raschig) and 249 vs 184 (Pall). The estimate gets the order right (Raschig ≫ Pall) but is off by 20–35 %.' },
            { body: 'Conclusion: "If possible: use the packing factor" from the table, and only estimate when it\'s missing. [Week 4, p. 8]' },
            { body: String.raw`Physical reading: the Pall ring's much higher void fraction (0.94 vs 0.74) dominates through $\epsilon^3$, so its $F_p$ is about 3× lower.` },
          ]}
          cite={`[${PX2}, Q3 table; ${W4}, p. 8]`}
        />
        <FadedExample
          title={String.raw`Reading $F_p$ from the packing tables`}
          given="An NH₃ absorber uses Mellapak 250Y, and the alternative is 1-inch (25 mm) metal Pall rings."
          steps={[
            { body: String.raw`The packing table gives Mellapak 250Y: $F_p = 22$ ft²/ft³.` },
            { title: 'Convert to SI.', body: String.raw`$22\cdot 3.28 = 72.2$ m⁻¹.`, hidden: true },
            { body: String.raw`The table gives metal Pall rings, 25 mm: $F_p = 56$ ft²/ft³, $a = 223.5$ m²/m³, $\epsilon = 0.954$.` },
            { title: 'Convert.', body: String.raw`$56\cdot 3.28 = 184$ m⁻¹, matching the exam table's 184 m⁻¹ for 25 mm metallic Pall rings.`, hidden: true },
            { title: 'Which packing type does the lecture say has higher capacity?', body: String.raw`Structured (Mellapak), consistent with its lower $F_p$. [Week 4, p. 6]`, hidden: true },
          ]}
          cite={`[${E4E}, Exercise 1b, 1e; ${E4}, Oppg. 1b; ${PT}, Table 6.6]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title={String.raw`Units of $F_p$`} cite={`[${E4}, Oppg. 1b]`}>
          Tables in ft²/ft³, equations in m⁻¹. Forgetting the factor 3.28 ruins every later flooding number.
        </Trap>
        <Trap title={String.raw`Use the given $F_p$`} cite={`[${PX}, Ex. 3b; ${W4}, p. 8]`}>
          {String.raw`Exams give $F_p$ directly (28 m⁻¹, 184 m⁻¹). Only estimate $a/\epsilon^3$ when it's absent.`}
        </Trap>
        <Trap title={String.raw`$a$ vs $F_p$`} cite={`[${W4}, p. 8]`}>
          {String.raw`The specific surface area $a$ (m²/m³) and the packing factor $F_p$ (m⁻¹) have compatible units but are different quantities. Don't plug one in for the other.`}
        </Trap>
        <Trap title="Sieve-tray drawbacks" cite={`[${W4}, p. 3]`}>
          {'Weeping and a limited operating range are the standard "why not sieve trays" answer.'}
        </Trap>
        <Trap title="Safety argument for packing" cite={`[${W4}, p. 9]`}>Low liquid holdup is listed as a safety benefit.</Trap>
        <Trap title="Packing size matters downstream" cite={`[${PX2}, Q3e.3]`}>
          Larger packing (50 mm vs 25 mm Pall) gives a larger HETP and fewer stages at the same height (page 14).
        </Trap>
      </Section>
    </>
  )
}
