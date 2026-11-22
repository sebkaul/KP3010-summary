import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W9 = 'Week 9 - Membrane filtration with solutions.pdf'
const E9 = 'exercise_09_solutions.pdf'

export const meta = {
  title: 'Membrane modules and design of a membrane separation',
  topic: 'membranes',
  examWeight: { level: 'low', note: 'Not asked on either practice exam' },
  examTasks: [],
  buildsOn: ['31-membrane-flux-permeability-selectivity', '32-concentration-polarization'],
  usedIn: [],
  sources: [`[${W9}, p. 35–43]`, `[${E9}, Problem 4 (statement only)]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Which module type has the highest packing density, and what is its weak point?', a: 'Hollow fibre (500–9000 m²/m³). It has poor resistance to fouling and is hard to clean. [Week 9, p. 39]' },
    { id: 'p2', kind: 'pretest', q: "Why don't membrane plants get cheaper per unit at large scale?", a: 'Modules have limited sizes, so you add more of them in parallel. The cost benefits of scaling no longer apply. [Week 9, p. 41]' },
    { id: 'p3', kind: 'pretest', q: 'What is the "cut" of a membrane stage?', a: 'The part of the feed allowed to permeate, cut = P/F. [Week 9, p. 43]' },
    { id: 't1', q: 'Give one advantage and one disadvantage of each module type.', a: 'Plate-and-frame: easy to clean / low packing density. Spiral wound: high packing density / high ΔP. Tubular: fouling resistant / expensive. Hollow fibre: very high packing density / poor fouling resistance. [Week 9, p. 36–39]' },
    { id: 't2', q: 'List the four flow patterns and say which one is used for estimates.', a: 'Co-current, counter-current, cross flow, perfect mixing. Perfect mixing is used for estimates. [Week 9, p. 42]' },
    { id: 't3', q: 'Write the overall and component balances for a membrane stage.', a: '$F = P + R$ and $x_FF = x_PP + x_RR$. [Week 9, p. 43]' },
    { id: 't4', q: 'What two complications does the slide list for membrane design?', a: 'Mass-transfer resistances, and geometry and flow pattern in the module. [Week 9, p. 41]' },
    { id: 't5', q: 'How small are hollow fibres, and what packing density do they reach?', a: 'Less than 0.5 mm, and 500–9000 m²/m³. [Week 9, p. 39]' },
  ],
  equations: [
    {
      id: 'ptot',
      label: 'Total permeate flow',
      tex: String.raw`\va{P_{tot}} = \vb{J}\cdot A_{tot} = \vb{J}\cdot \vc{A_{mod}}\cdot \vd{N_{mod}}`,
      vars: [
        { sym: String.raw`\va{P_{tot}}`, desc: 'total permeate flow', unit: String.raw`\mathrm{m^3/s}\ (\text{or mol/s})` },
        { sym: String.raw`\vb{J}`, desc: 'flux', unit: String.raw`\mathrm{m^3/(m^2\cdot s)}` },
        { sym: String.raw`\vc{A_{mod}}`, desc: 'membrane area per module', unit: String.raw`\mathrm{m^2}` },
        { sym: String.raw`\vd{N_{mod}}`, desc: 'number of modules in parallel', unit: '–' },
      ],
      note: 'Flux may also be in mol/(m²·s), giving P in mol/s.',
      cite: `[${W9}, p. 41]`,
      check: { status: 'verified', note: 'Matches W9 p. 41.' },
    },
    {
      id: 'bal',
      label: 'Stage material balances',
      tex: String.raw`\ve{F} = P + R, \qquad x_F\ve{F} = x_PP + x_RR`,
      vars: [
        { sym: String.raw`\ve{F}, P, R`, desc: 'feed, permeate, retentate flows', unit: String.raw`\mathrm{mol/s}` },
        { sym: String.raw`x_F, x_P, x_R`, desc: 'mole fraction of i in each stream', unit: '–' },
      ],
      cite: `[${W9}, p. 43]`,
      check: { status: 'verified', note: 'Matches W9 p. 43.' },
    },
    {
      id: 'trans',
      label: 'Transport through the membrane (perfect mixing)',
      tex: String.raw`\begin{gathered} x_PP = \frac{D_{im}}{\delta_M}(x_R - x_P)\,A \\ \text{or} \\ x_PP = \frac{P_{M,i}}{\delta_M}(x_Rp_R - x_Pp_P)\,A \end{gathered}`,
      vars: [
        { sym: String.raw`A`, desc: 'membrane area', unit: String.raw`\mathrm{m^2}` },
        { sym: String.raw`p_R, p_P`, desc: 'total pressure on the retentate and permeate side', unit: String.raw`\mathrm{Pa}` },
        { sym: String.raw`P_{M,i}`, desc: 'permeability of i', unit: String.raw`\mathrm{mol\cdot m/(m^2\cdot s\cdot Pa)}` },
      ],
      note: 'Driving force taken with the retentate composition (perfect mixing).',
      cite: `[${W9}, p. 43]`,
      check: { status: 'verified', note: 'Matches W9 p. 43.' },
    },
    {
      id: 'cut',
      label: 'Cut',
      tex: String.raw`\text{cut} = \frac{P}{\ve{F}}`,
      vars: [],
      cite: `[${W9}, p. 43]`,
      check: { status: 'verified', note: 'Matches W9 p. 43.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

// ---- Visual 1: four module types -------------------------------------------------------------
function Modules() {
  const W = 175
  const panel = (i, title, draw, plus, minus) => {
    const ox = 5 + (i % 2) * (W + 12)
    const oy = Math.floor(i / 2) * 290
    return (
      <g key={title} transform={`translate(0 ${oy})`}>
        <rect x={ox} y={26} width={W} height={150} rx={8} style={st('muted', true, 1)} />
        <Label x={ox + W / 2} y={18} size={14}>{title}</Label>
        {draw(ox + W / 2, 101)}
        {plus.map((p, k) => <Label key={p} x={ox + 4} y={200 + k * 18} anchor="start" size={13} t="intuition">{`+ ${p}`}</Label>)}
        {minus.map((p, k) => <Label key={p} x={ox + 4} y={242 + k * 18} anchor="start" size={13} t="trap">{`− ${p}`}</Label>)}
      </g>
    )
  }
  const spiral = (cx, cy) => {
    const pts = Array.from({ length: 160 }, (_, i) => {
      const a = i * 0.2
      const r = 6 + a * 2.2
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
    })
    return <><polyline points={pts.join(' ')} style={st('var-c', false, 3)} /><circle cx={cx} cy={cy} r={6} style={{ fill: tone('var-b') }} /></>
  }
  return (
    <Svg w={372} h={560} label="Cross-sections of plate-and-frame, spiral wound, tubular and hollow fibre modules">
      {panel(0, 'plate-and-frame', (cx, cy) => (
        <>{Array.from({ length: 7 }, (_, k) => <rect key={k} x={cx - 60} y={cy - 58 + k * 17} width={120} height={k % 2 ? 4 : 8} style={k % 2 ? shade('muted', 50) : { fill: tone('var-c') }} />)}</>
      ), ['high pressure possible', 'easy to clean'], ['low packing density', 'relatively expensive'])}
      {panel(1, 'spiral wound', spiral, ['high packing density', 'relatively inexpensive'], ['ΔP 100–150 kPa', 'hard to clean/sterilise'])}
      {panel(2, 'tubular', (cx, cy) => (
        <>{[[-36, -30], [0, -30], [36, -30], [-18, 2], [18, 2], [-36, 34], [0, 34], [36, 34]].map(([dx, dy], k) => <circle key={k} cx={cx + dx} cy={cy + dy} r={15} style={{ ...shade('var-a', 20), stroke: tone('var-c'), strokeWidth: 3 }} />)}</>
      ), ['resistant to fouling', 'easy to clean'], ['low packing density', 'relatively expensive'])}
      {panel(3, 'hollow fibre (< 0.5 mm)', (cx, cy) => (
        <>{Array.from({ length: 130 }, (_, k) => {
          const a = k * 2.4
          const r = 4.8 * Math.sqrt(k)
          return <circle key={k} cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r={2.6} style={{ fill: 'none', stroke: tone('var-c'), strokeWidth: 1.2 }} />
        })}</>
      ), ['500–9000 m²/m³', 'relatively inexpensive'], ['poor fouling resistance', 'difficult to clean'])}
    </Svg>
  )
}

// ---- Visual 2: comparison table ---------------------------------------------------------------
function Compare() {
  const cols = ['packing density', 'cost', 'fouling / cleaning', 'pressure', 'membrane replacement']
  const rows = [
    ['plate-and-frame', ['low', 'relatively expensive', 'easy to clean', 'high work pressure possible', 'easy']],
    ['spiral wound', ['high', 'relatively inexpensive', 'difficult to clean & sterilise', 'high (100–150 kPa)', '—']],
    ['tubular', ['low', 'relatively expensive', 'resistant to fouling, easy to clean', '—', '—']],
    ['hollow fibre', ['high (500–9000 m²/m³)', 'relatively inexpensive', 'poor fouling resistance, difficult to clean', '—', 'difficult']],
  ]
  const good = /^(high|easy|relatively inexpensive|resistant)/
  const bad = /^(low|relatively expensive|difficult|poor)/
  const tint = (txt, j) => {
    if (txt === '—') return 'muted'
    if (j === 3) return txt.startsWith('high (') ? 'trap' : 'intuition'
    if (good.test(txt)) return 'intuition'
    if (bad.test(txt)) return 'trap'
    return 'ink'
  }
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr><th />{cols.map((c) => <th key={c} style={{ textAlign: 'left', padding: '6px 8px', color: tone('muted') }}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map(([n, cells]) => (
            <tr key={n} style={{ borderTop: '1px solid var(--line)' }}>
              <th style={{ textAlign: 'left', padding: '6px 8px' }}>{n}</th>
              {cells.map((c, j) => (
                <td key={j} style={{ padding: '6px 8px', color: tone(tint(c, j)), background: c === '—' ? undefined : `color-mix(in srgb, ${tone(tint(c, j))} 10%, transparent)` }}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ---- Visual 3: flow patterns -----------------------------------------------------------------
function Flows() {
  const W = 165
  const panel = (i, title, draw, note) => {
    const ox = 5 + (i % 2) * (W + 12)
    const oy = Math.floor(i / 2) * 175
    return (
      <g key={title} transform={`translate(0 ${oy})`}>
        <rect x={ox} y={26} width={W} height={120} rx={8} style={st('muted', true, 1)} />
        <line x1={ox + 10} y1={86} x2={ox + W - 10} y2={86} style={{ stroke: tone('var-c'), strokeWidth: 4, strokeDasharray: '3 3' }} />
        <Label x={ox + W / 2} y={18} size={14}>{title}</Label>
        {draw(ox)}
        {note && <Label x={ox + W / 2} y={164} size={12} t="intuition">{note}</Label>}
      </g>
    )
  }
  return (
    <Svg w={352} h={350} label="Co-current, counter-current, cross flow and perfect mixing">
      {panel(0, '(a) co-current', (ox) => (
        <><Arrow x1={ox + 15} y1={56} x2={ox + 150} y2={56} t="var-a" /><Arrow x1={ox + 15} y1={116} x2={ox + 150} y2={116} t="var-b" /><Label x={ox + 82} y={50} size={10} t="var-a">feed</Label><Label x={ox + 82} y={136} size={10} t="var-b">permeate</Label></>
      ))}
      {panel(1, '(b) counter-current', (ox) => (
        <><Arrow x1={ox + 15} y1={56} x2={ox + 150} y2={56} t="var-a" /><Arrow x1={ox + 150} y1={116} x2={ox + 15} y2={116} t="var-b" /><Label x={ox + 82} y={50} size={10} t="var-a">feed</Label><Label x={ox + 82} y={136} size={10} t="var-b">permeate</Label></>
      ))}
      {panel(2, '(c) cross flow', (ox) => (
        <><Arrow x1={ox + 15} y1={56} x2={ox + 150} y2={56} t="var-a" />{[40, 82, 124].map((x) => <Arrow key={x} x1={ox + x} y1={92} x2={ox + x} y2={138} t="var-b" />)}<Label x={ox + 82} y={50} size={10} t="var-a">feed</Label></>
      ))}
      {panel(3, '(d) perfect mixing', (ox) => (
        <>{[[50, 56], [115, 56], [50, 116], [115, 116]].map(([x, y], k) => (
          <path key={k} d={`M${ox + x - 12},${y} a12,10 0 1,1 4,8`} style={st(y < 86 ? 'var-a' : 'var-b', false, 2)} />
        ))}</>
      ), 'easiest, use for estimates')}
    </Svg>
  )
}

// ---- Visual 4: stage balance -------------------------------------------------------------------
function Stage() {
  return (
    <Svg w={440} h={240} label="Feed into a module; permeate and retentate out; F = P + R, cut = P/F; N modules in parallel">
      <rect x={110} y={30} width={220} height={110} rx={10} style={shade('var-c', 15)} />
      <line x1={120} y1={90} x2={320} y2={90} style={{ stroke: tone('var-c'), strokeWidth: 4, strokeDasharray: '3 3' }} />
      <Label x={220} y={62} size={14}>module: A, P_M, δ_M</Label>
      <Arrow x1={8} y1={60} x2={108} y2={60} t="var-e" />
      <Label x={8} y={50} anchor="start" size={15} t="var-e">F, x_F</Label>
      <Arrow x1={330} y1={60} x2={432} y2={60} t="var-a" />
      <Label x={432} y={50} anchor="end" size={15} t="var-a">R, x_R</Label>
      <Arrow x1={330} y1={120} x2={432} y2={120} t="var-b" />
      <Label x={432} y={140} anchor="end" size={15} t="var-b">P, x_P</Label>
      <Label x={220} y={178} size={15}>F = P + R · cut = P/F</Label>
      <Label x={220} y={204} size={14} t="var-d">N modules in parallel:</Label>
      <Label x={220} y={226} size={14} t="var-d">P_tot = J A_mod N_mod</Label>
    </Svg>
  )
}

// ---- Interactive ----------------------------------------------------------------------------------
function SizingExplorer() {
  const [P, setP] = useState(10)
  const [J, setJ] = useState(0.05)
  const [A, setA] = useState(30)
  const [F, setF] = useState(40)
  const N = Math.ceil(P / (J * A))
  const cut = P / F
  const sl = (label, v, show, set, min, max, step) => (
    <label>
      <span className="plot-param">{label} = <strong>{show}</strong></span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(Number(e.target.value))} />
    </label>
  )
  const shown = Math.min(N, 40)
  return (
    <Diagram
      title="Module count and cut (illustrative values)"
      caption={String.raw`Illustrative values: the files give no design numbers. $N_{mod} = \lceil P_{tot}/(J A_{mod})\rceil$ from $P_{tot} = JA_{mod}N_{mod}$, and cut = $P_{tot}/F$ [Week 9, p. 41, 43].`}
      cite={`[${W9}, p. 41, 43]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          {sl(<V c="a"><M>{String.raw`P_{tot}`}</M></V>, P, `${P.toFixed(1)} m³/h`, setP, 1, 50, 0.5)}
          {sl(<V c="b"><M>J</M></V>, J, `${J.toFixed(3)} m³/(m²·h)`, setJ, 0.005, 0.2, 0.005)}
          {sl(<V c="c"><M>{String.raw`A_{mod}`}</M></V>, A, `${A} m²`, setA, 1, 100, 1)}
          {sl(<V c="e"><M>F</M></V>, F, `${F.toFixed(1)} m³/h`, setF, 5, 200, 0.5)}
        </div>
        <p>
          <V c="d"><M>{String.raw`N_{mod}`}</M> = {N}</V> modules in parallel · cut = <strong>{cut.toFixed(2)}</strong>
          {cut > 1 && <span style={{ color: tone('trap') }}> (P &gt; F is impossible: raise F)</span>}
        </p>
        <Svg w={600} h={Math.ceil(shown / 20) * 26 + 70} label={`${N} module icons and a cut bar`}>
          {Array.from({ length: shown }, (_, k) => (
            <rect key={k} x={10 + (k % 20) * 29} y={10 + Math.floor(k / 20) * 26} width={22} height={18} rx={3} style={{ ...shade('var-d', 45), stroke: tone('var-d') }} />
          ))}
          {N > 40 && <Label x={590} y={20} anchor="end" size={11} t="muted">{`+${N - 40} more`}</Label>}
          <rect x={10} y={Math.ceil(shown / 20) * 26 + 24} width={580} height={20} rx={5} style={shade('muted', 15)} />
          <rect x={10} y={Math.ceil(shown / 20) * 26 + 24} width={Math.min(1, cut) * 580} height={20} rx={5} style={shade('var-b', 55)} />
          <Label x={14} y={Math.ceil(shown / 20) * 26 + 60} anchor="start" size={11} t="var-b">permeate share of feed (cut)</Label>
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="A housing for the membrane, sized by simple arithmetic">
        <MentalModel cite={`[${W9}, p. 35–43]`}>
          <T text="A membrane is useless without a housing that brings feed to it and carries permeate and retentate away. That housing is the module [Week 9, p. 35]. Module types trade the same few properties: how much membrane area fits per m³ (packing density), how badly it fouls, how easy it is to clean, and what it costs [Week 9, p. 35–39]. Flat-sheet designs (plate-and-frame) are robust and cleanable but bulky. Rolling the sheets up (spiral wound) packs them densely and cheaply, at the cost of pressure drop and cleanability. Tubes resist fouling but waste space, and shrinking the tubes to hollow fibres flips that trade-off [Week 9, p. 36–39]." />
          <p>
            Sizing is mostly arithmetic: total permeate = flux × area per module × number of modules in parallel [Week 9, p. 41]. The
            complications are the boundary-layer resistances (page 32) and the flow pattern inside the module, which is often unclear.
            Assuming perfect mixing gives a quick estimate [Week 9, p. 41–42]. Balances over the stage plus the flux law give the permeate
            flow and composition, and the cut [Week 9, p. 43].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Modules and design">
        <Def term="Module" cite={`[${W9}, p. 35]`}>Housing containing the membrane and regulating the flows. Important properties: area per volume (m²/m³), fouling tendency, production cost, area of a standard module (m²). Types: plate-and-frame, spiral wound, tubular, hollow fibre.</Def>
        <Columns>
          <Diagram title="Four module types" cite={`[${W9}, p. 36–39]`} caption="Schematic cross-sections with the slides' main advantages (+) and disadvantages (−).">
            <Modules />
          </Diagram>
          <div>
            <Def term="Plate-and-frame" cite={`[${W9}, p. 36]`}>Flat membrane sheets. + high working pressure possible, easy to clean, easy to replace membranes. − low packing density, relatively expensive.</Def>
            <Def term="Spiral wound" cite={`[${W9}, p. 37]`}>Sheets separated by a spacer layer, wound into a spiral. + high packing density, relatively inexpensive, easy to adjust hydrodynamics. − high pressure drop (100–150 kPa), difficult to clean and sterilise.</Def>
            <Def term="Tubular" cite={`[${W9}, p. 38]`}>Module containing tubular membranes. + resistant to fouling, easy to clean. − low packing density, relatively expensive.</Def>
            <Def term="Hollow fibre" cite={`[${W9}, p. 39]`}>Like tubular but much smaller tubes (&lt; 0.5 mm). + high packing density (500–9000 m²/m³), relatively inexpensive. − poor fouling resistance, difficult to clean, difficult to change the membrane.</Def>
          </div>
        </Columns>

        <Diagram title="Module comparison" cite={`[${W9}, p. 35–39]`} caption="Only the slides' qualitative statements and the two numbers they give; — = not stated.">
          <Compare />
        </Diagram>
        <Gap>Week 9, p. 40 (module overview table) is an image, so its comparison values can't be extracted.</Gap>

        <Columns>
          <Diagram title="Flow patterns in a module" cite={`[${W9}, p. 42]`} caption="Hard to identify in practice (is a hollow fibre co-, counter- or cross-flow?).">
            <Flows />
          </Diagram>
          <div>
            <Def term="Flow patterns" cite={`[${W9}, p. 42]`}>Co-current, counter-current, cross flow, perfect mixing. The pattern can be hard to identify (e.g. is a hollow fibre co-, counter- or cross-flow?). Perfect mixing is the easiest and can be used for estimates.</Def>
            <Def term="Design scale-up" cite={`[${W9}, p. 41]`}>Modules have limited sizes, so multiple modules are usually placed in parallel, and the cost benefits of scaling no longer hold.</Def>
            <Def term="Complications" cite={`[${W9}, p. 41]`}>Mass-transfer resistances, and geometry and flow pattern in the module.</Def>
          </div>
        </Columns>

        <Diagram title="Membrane stage balance" cite={`[${W9}, p. 41, 43]`} caption="Feed splits into permeate and retentate.">
          <Stage />
        </Diagram>
        <Def term="Cut" cite={`[${W9}, p. 43]`}>The fraction of the feed allowed to permeate, P/F.</Def>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="ptot" />
        <Eq id="bal" />
        <Eq id="trans" />
        <Eq id="cut" />
        <SizingExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Choosing a module for a fouling-prone feed (reasoning from the slides)"
          given="A feed has a strong fouling tendency and the plant needs regular cleaning."
          steps={[
            { body: 'List the module properties that matter: fouling tendency, ease of cleaning, packing density, cost. [Week 9, p. 35]' },
            { body: 'Hollow fibre: high packing density and cheap, but poor fouling resistance and difficult to clean. Reject. [Week 9, p. 39]' },
            { body: 'Spiral wound: dense and cheap, but difficult to clean and sterilise, with a high pressure drop. Reject. [Week 9, p. 37]' },
            { body: 'Tubular: resistant to fouling and easy to clean. The price is low packing density and higher cost. [Week 9, p. 38]' },
            { body: 'Plate-and-frame: easy to clean and to replace membranes, high working pressure. Also low packing density and expensive. [Week 9, p. 36]' },
            { body: String.raw`Choose tubular (or plate-and-frame if high pressure or easy membrane replacement matter more). Accept a larger, costlier installation, and size it with $P_{tot} = JA_{mod}N_{mod}$. [Week 9, p. 41]` },
          ]}
          result="Tubular (or plate-and-frame)"
          cite={`[${W9}, p. 35–39, 41]`}
        />
        <Gap>No numerical module-sizing or stage-balance example in the files. Exercise 9, Problem 4 (RO permeances for water and NaCl) has a blank solution and no short answer.</Gap>
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Packing density vs fouling is the key trade-off" cite={`[${W9}, p. 36–39]`}>Hollow fibre and spiral wound are dense and cheap but foul and are hard to clean. Tubular and plate-and-frame are the reverse.</Trap>
        <Trap title="Spiral-wound pressure drop" cite={`[${W9}, p. 37]`}>100–150 kPa, a quoted drawback.</Trap>
        <Trap title="No economy of scale" cite={`[${W9}, p. 41]`}>More capacity means more modules in parallel.</Trap>
        <Trap title="Perfect mixing uses the retentate composition" cite={`[${W9}, p. 43]`}>{String.raw`The driving force is $x_R - x_P$ (or $x_Rp_R - x_Pp_P$), not $x_F - x_P$.`}</Trap>
        <Trap title="Cut is based on the feed" cite={`[${W9}, p. 43]`}>P/F, not P/R.</Trap>
        <Trap title="Flow pattern is uncertain" cite={`[${W9}, p. 42]`}>{"If asked, say it's hard to identify and that perfect mixing is the simple estimate."}</Trap>
      </Section>
    </>
  )
}
