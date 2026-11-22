import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W9 = 'Week 9 - Membrane filtration with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E9 = 'exercise_09_solutions.pdf'
const PX = 'practice_exam_solutions.pdf'

export const meta = {
  title: 'Membrane fundamentals — processes, transport mechanisms and osmosis',
  topic: 'membranes',
  examWeight: { level: 'medium', note: 'Membrane processes and applications in Practice exam 1 Ex. 7a; osmotic pressure in exercise 9 and the lecture' },
  examTasks: ['Practice exam 1, Ex. 7a: give three membrane separation processes and their applications (UF for virus removal/sterilisation, RO for seawater desalination, gas separation for O₂ from air).'],
  buildsOn: ['01-separation-basics-k-selectivity'],
  usedIn: ['31-membrane-flux-permeability-selectivity', '32-concentration-polarization', '33-membrane-modules-design'],
  sources: [`[${W9}, p. 2–14]`, `[${FS}, p. 8, eq. 86]`, `[${E9}, Problem 1]`, `[${PX}, Ex. 7a]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: "What's the smallest particle conventional filtration can separate, compared with membrane filtration?", a: 'Conventional filtration handles particles larger than 1 µm. Membrane filtration goes down to molecular size. [Week 9, p. 2]' },
    { id: 'p2', kind: 'pretest', q: 'How many moles of ions does 1 mol NaCl give for osmotic pressure?', a: '2. [Week 9, p. 14]' },
    { id: 'p3', kind: 'pretest', q: 'What must the applied pressure exceed for reverse osmosis to give pure water?', a: 'The osmotic pressure: $P_{ext} > \\Pi_{OSM}$. [Week 9, p. 12]' },
    { id: 't1', q: 'Give two advantages and two disadvantages of membrane processes.', a: 'Advantages (any two): fewer chemical additives, low energy, smaller and lighter, low cost at small scale. Disadvantages (any two): not always highly selective, membrane stability, not suited to large throughput, immature technology. [Week 9, p. 4]' },
    { id: 't2', q: 'Which filtration process separates bacteria from drinking water, and which separates proteins from whey?', a: 'Microfiltration (0.1–10 µm) for bacteria. Ultrafiltration (2–100 nm) for proteins and lactose from whey. [Week 9, p. 10]' },
    { id: 't3', q: 'Describe an asymmetric membrane.', a: 'Heterogeneous, with a very thin selective top layer (dense or porous) on a relatively thick porous support. [Week 9, p. 8]' },
    { id: 't4', q: 'What equivalent water column does 26 bar osmotic pressure correspond to?', a: '$\\Delta h = \\Pi/(\\rho g) = 2.6\\cdot 10^6/(997\\cdot 9.81) \\approx 266$ m. [Week 9, p. 12, 14]' },
    { id: 't5', q: 'Which transport mechanism governs dense membranes?', a: 'Solution–diffusion. [Week 9, p. 6]' },
  ],
  equations: [
    {
      id: 'pi',
      label: "Osmotic pressure (van 't Hoff, dilute)",
      tex: String.raw`\vd{\Pi_{OSM}} \approx \va{c}R\vb{T} = \rho g\Delta h`,
      vars: [
        { sym: String.raw`\vd{\Pi_{OSM}}`, desc: 'osmotic pressure', unit: String.raw`\mathrm{Pa}` },
        { sym: String.raw`\va{c}`, desc: 'concentration of ions (total solute per unit pure solution)', unit: String.raw`\mathrm{mol/m^3}` },
        { sym: String.raw`R`, desc: '8.314', unit: String.raw`\mathrm{J/(mol\cdot K)}` },
        { sym: String.raw`\vb{T}`, desc: 'temperature', unit: String.raw`\mathrm{K}` },
        { sym: String.raw`\rho`, desc: 'liquid density', unit: String.raw`\mathrm{kg/m^3}` },
        { sym: String.raw`g`, desc: '9.81', unit: String.raw`\mathrm{m/s^2}` },
        { sym: String.raw`\Delta h`, desc: 'equivalent hydrostatic height', unit: String.raw`\mathrm{m}` },
      ],
      note: "The van 't Hoff relation applies only to dilute solutions.",
      cite: `[${W9}, p. 12; ${FS}, p. 8, eq. 86]`,
      check: { status: 'verified', note: 'Matches W9 p. 12 and formula sheet eq. 86 (on PDF p. 10).' },
    },
    {
      id: 'c',
      label: 'Ion concentration from molality',
      tex: String.raw`\va{c} = \vc{\nu}\cdot \ve{m}\cdot \rho_{water}`,
      vars: [
        { sym: String.raw`\vc{\nu}`, desc: 'ions per formula unit (NaCl: 2)', unit: '–' },
        { sym: String.raw`\ve{m}`, desc: 'molality', unit: String.raw`\mathrm{mol/kg\ H_2O}` },
        { sym: String.raw`\rho_{water}`, desc: 'density of pure water', unit: String.raw`\mathrm{kg/m^3}` },
      ],
      note: 'As used in the lecture example.',
      cite: `[${W9}, p. 14]`,
      check: { status: 'verified', note: 'W9 p. 14: c = 2 · 0.5 · 997.0 = 997 mol/m³.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

// ---- Visual 1: conventional vs membrane -------------------------------------------------
function ConvVsMem() {
  return (
    <Svg w={560} h={210} label="Filter with a growing cake versus a membrane retaining molecules">
      <rect x={40} y={30} width={180} height={150} rx={8} style={st('muted', true, 1.2)} />
      <line x1={130} y1={30} x2={130} y2={180} style={st('ink', false, 4)} />
      {Array.from({ length: 16 }, (_, i) => <circle key={i} cx={100 + (i % 3) * 9} cy={45 + Math.floor(i / 3) * 24} r={7} style={shade('example', 70)} />)}
      <Label x={130} y={198} size={11} t="example">cake of particles &gt; 1 µm</Label>
      <Label x={130} y={22} size={11} t="muted">performance drops over time</Label>
      <rect x={330} y={30} width={180} height={150} rx={8} style={st('muted', true, 1.2)} />
      <line x1={420} y1={30} x2={420} y2={180} style={{ stroke: tone('var-c'), strokeWidth: 4, strokeDasharray: '2 3' }} />
      {Array.from({ length: 10 }, (_, i) => <circle key={i} cx={350 + (i % 4) * 16} cy={50 + Math.floor(i / 4) * 40} r={4} style={{ fill: tone('var-a') }} />)}
      {Array.from({ length: 5 }, (_, i) => <circle key={`p${i}`} cx={445 + (i % 3) * 18} cy={60 + i * 25} r={2} style={{ fill: tone('var-b') }} />)}
      <Label x={420} y={198} size={11} t="var-c">down to molecular size, liquid or gas</Label>
      <Label x={130} y={110} size={12} anchor="end" t="muted">filter</Label>
      <Label x={420} y={22} size={11} t="muted">membrane</Label>
    </Svg>
  )
}

// ---- Visual 2: separator ------------------------------------------------------------------
function Separator() {
  return (
    <Svg w={540} h={200} label="Feed along a membrane; permeate passes through, retentate leaves along the feed side">
      <rect x={60} y={40} width={400} height={60} style={shade('var-a', 14)} />
      <rect x={60} y={110} width={400} height={50} style={shade('var-b', 14)} />
      <line x1={60} y1={105} x2={460} y2={105} style={{ stroke: tone('var-c'), strokeWidth: 6, strokeDasharray: '4 3' }} />
      <Arrow x1={10} y1={70} x2={58} y2={70} t="var-a" />
      <Label x={10} y={60} anchor="start" size={12} t="var-a">feed</Label>
      <Arrow x1={460} y1={70} x2={530} y2={70} t="var-a" />
      <Label x={530} y={60} anchor="end" size={12} t="var-a">retentate</Label>
      <Arrow x1={460} y1={135} x2={530} y2={135} t="var-b" />
      <Label x={530} y={155} anchor="end" size={12} t="var-b">permeate</Label>
      {[150, 260, 370].map((x) => <Arrow key={x} x1={x} y1={80} x2={x} y2={128} t="ink" />)}
      <Label x={260} y={186} size={12} t="var-d">driving force: ΔC, ΔP, ΔT, ΔE</Label>
      <Label x={470} y={109} anchor="start" size={11} t="var-c">semi-permeable</Label>
    </Svg>
  )
}

// ---- Visual 3: four mechanisms -------------------------------------------------------------
function Mechanisms() {
  const panel = (i, title, note, draw) => {
    const ox = 6 + i * 158
    return (
      <g key={title}>
        <rect x={ox} y={20} width={150} height={150} rx={8} style={st('muted', true, 1)} />
        {draw(ox)}
        <Label x={ox + 75} y={190} size={12}>{title}</Label>
        <Label x={ox + 75} y={206} size={10} t="muted">{note}</Label>
      </g>
    )
  }
  const wall = (ox, gaps) => gaps.map(([a, b], k) => <rect key={k} x={ox + 60} y={a} width={30} height={b - a} style={{ fill: tone('ink'), opacity: 0.55 }} />)
  return (
    <Svg w={640} h={215} label="Four transport mechanisms: bulk flow, Knudsen/molecular diffusion, molecular sieving, solution–diffusion">
      {panel(0, '(a) bulk flow', 'no selectivity', (ox) => (
        <>{wall(ox, [[20, 50], [100, 120], [160, 170]])}{[[25, 70], [40, 140], [130, 75], [140, 145]].map(([x, y], k) => <circle key={k} cx={ox + x} cy={y} r={k % 2 ? 4 : 7} style={{ fill: tone(k % 2 ? 'var-a' : 'var-b') }} />)}</>
      ))}
      {panel(1, '(b) micropores', 'Knudsen / molecular diff.', (ox) => (
        <>{wall(ox, [[20, 80], [90, 170]])}<polyline points={`${ox + 30},85 ${ox + 62},82 ${ox + 75},88 ${ox + 88},82 ${ox + 120},86`} style={st('var-a', false, 1.5)} /><circle cx={ox + 120} cy={86} r={4} style={{ fill: tone('var-a') }} /></>
      ))}
      {panel(2, '(c) sieving', 'size exclusion', (ox) => (
        <>{wall(ox, [[20, 70], [80, 120], [130, 170]])}<circle cx={ox + 120} cy={75} r={4} style={{ fill: tone('var-a') }} /><circle cx={ox + 40} cy={125} r={9} style={{ fill: tone('var-b') }} /></>
      ))}
      {panel(3, '(d) dense', 'solution–diffusion', (ox) => (
        <><rect x={ox + 60} y={20} width={30} height={150} style={shade('var-c', 50)} /><path d={`M${ox + 30},95 C${ox + 60},95 ${ox + 70},70 ${ox + 80},110 S${ox + 100},95 ${ox + 125},95`} style={st('var-a', false, 1.5)} /><circle cx={ox + 125} cy={95} r={4} style={{ fill: tone('var-a') }} /></>
      ))}
    </Svg>
  )
}

// ---- Visual 4: symmetric vs asymmetric ------------------------------------------------------
function SymAsym() {
  return (
    <Svg w={600} h={170} label="Symmetric membrane, uniform; asymmetric, thin selective layer on a thick porous support">
      <rect x={40} y={40} width={150} height={70} style={shade('var-c', 40)} />
      <Label x={115} y={140} size={12}>symmetric</Label>
      <Label x={115} y={156} size={10} t="muted">homogeneous, several µm</Label>
      <rect x={280} y={40} width={150} height={8} style={{ fill: tone('var-c') }} />
      <rect x={280} y={48} width={150} height={62} style={shade('muted', 25)} />
      {Array.from({ length: 18 }, (_, i) => <circle key={i} cx={292 + (i % 6) * 25} cy={60 + Math.floor(i / 6) * 18} r={5} style={{ fill: 'var(--bg)' }} />)}
      <Label x={440} y={47} anchor="start" size={10} t="var-c">very thin selective top layer</Label>
      <Label x={440} y={84} anchor="start" size={10} t="muted">thick porous support</Label>
      <Label x={355} y={140} size={12}>asymmetric</Label>
    </Svg>
  )
}

// ---- Visual 5: size ladder -------------------------------------------------------------------
function Ladder() {
  const lx = (nm) => 40 + ((Math.log10(nm) + 1) / 6) * 480 // 0.1 nm → 100 µm (1e5 nm)
  const bars = [
    { a: 100, b: 10000, n: 'microfiltration 0.1–10 µm', s: 'bacteria', t: 'var-b', y: 30 },
    { a: 2, b: 100, n: 'ultrafiltration 2–100 nm', s: 'viruses, proteins', t: 'var-a', y: 70 },
    { a: 0.1, b: 2, n: 'nanofiltration < 2 nm', s: 'charged membrane', t: 'var-e', y: 110, open: true },
  ]
  return (
    <Svg w={660} h={230} label="Log-scale size ladder of membrane processes">
      {bars.map((b) => (
        <g key={b.n}>
          <rect x={lx(b.a)} y={b.y} width={lx(b.b) - lx(b.a)} height={26} rx={5} style={{ ...shade(b.t, 40), stroke: tone(b.t), strokeDasharray: b.open ? '5 4' : undefined }} />
          <text x={lx(b.b) + 6} y={b.y + 13} className="svg-label" style={{ fontSize: 12 }}>{b.n}</text>
          <text x={lx(b.b) + 6} y={b.y + 26} className="svg-sub">{b.s}</text>
        </g>
      ))}
      <Arrow x1={lx(1)} y1={163} x2={lx(0.1)} y2={163} t="var-d" />
      <text x={lx(1) + 6} y={160} className="svg-label" style={{ fontSize: 12 }}>reverse osmosis: low end</text>
      <text x={lx(1) + 6} y={175} className="svg-sub">holds back salts (desalination)</text>
      <line x1={40} y1={194} x2={520} y2={194} style={st('ink', false, 1.5)} />
      {[[0.1, '0.1 nm'], [1, '1 nm'], [10, '10 nm'], [100, '100 nm'], [1000, '1 µm'], [10000, '10 µm']].map(([v, l]) => (
        <g key={l}>
          <line x1={lx(v)} y1={190} x2={lx(v)} y2={198} style={st('ink', false, 1.5)} />
          <text x={lx(v)} y={214} textAnchor="middle" className="svg-sub">{l}</text>
        </g>
      ))}
    </Svg>
  )
}

// ---- Visual 6: osmosis and reverse osmosis -----------------------------------------------------
function Osmosis() {
  const ut = (ox, hl, hr, rev) => (
    <g>
      <path d={`M${ox},30 V180 Q${ox},210 ${ox + 30},210 H${ox + 150} Q${ox + 180},210 ${ox + 180},180 V30`} style={st('ink', false, 2)} />
      <path d={`M${ox + 40},30 V170 H${ox + 140} V30`} style={st('ink', false, 2)} />
      <rect x={ox + 2} y={hl} width={36} height={205 - hl} style={shade('var-b', 30)} />
      <rect x={ox + 142} y={hr} width={36} height={205 - hr} style={shade('var-e', 45)} />
      <rect x={ox + 40} y={172} width={100} height={36} style={shade('var-b', 30)} />
      <line x1={ox + 90} y1={170} x2={ox + 90} y2={210} style={{ stroke: tone('var-c'), strokeWidth: 4, strokeDasharray: '2 3' }} />
      <Label x={ox + 20} y={24} size={11} t="var-b">pure water</Label>
      <Label x={ox + 160} y={24} size={11} t="var-e">salt water</Label>
      {rev ? <Arrow x1={ox + 120} y1={190} x2={ox + 60} y2={190} t="trap" /> : <Arrow x1={ox + 60} y1={190} x2={ox + 120} y2={190} t="intuition" />}
    </g>
  )
  return (
    <Svg w={600} h={260} label="U-tube with a membrane: osmosis raises the salt side by Δh; a piston pressure above Π reverses the flow">
      {ut(30, 120, 70, false)}
      <line x1={215} y1={70} x2={225} y2={70} style={st('ink', false, 1)} />
      <line x1={215} y1={120} x2={225} y2={120} style={st('ink', false, 1)} />
      <Arrow x1={220} y1={120} x2={220} y2={72} t="var-d" />
      <Label x={228} y={98} anchor="start" size={11} t="var-d">Δh: Π = ρgΔh</Label>
      <Label x={120} y={250} size={12} t="intuition">osmosis</Label>
      {ut(330, 90, 90, true)}
      <rect x={470} y={70} width={40} height={14} style={{ fill: tone('ink') }} />
      <Arrow x1={490} y1={40} x2={490} y2={68} t="trap" />
      <Label x={520} y={50} anchor="start" size={11} t="trap">P_ext &gt; Π</Label>
      <Label x={420} y={250} size={12} t="trap">reverse osmosis → pure water</Label>
    </Svg>
  )
}

// ---- Interactive ------------------------------------------------------------------------------------
function PiExplorer() {
  const [m, setM] = useState(0.5)
  const [Tc, setTc] = useState(45)
  const [nu, setNu] = useState(2)
  const rho = 997
  const c = nu * m * rho
  const Pi = c * 8.314 * (Tc + 273.15)
  const dh = Pi / (rho * 9.81)
  return (
    <Diagram
      title="Osmotic pressure and its water column"
      caption={String.raw`$\Pi_{OSM} \approx cRT$ with $c = \nu\cdot m\cdot\rho_{water}$ and $\Delta h = \Pi/(\rho g)$, ρ = 997 kg/m³ [Week 9, p. 12–14; FormelarkKP3010.pdf, p. 8, eq. 86]. Start 0.5 mol/kg NaCl (ν = 2) at 45 °C: c = 997 mol/m³, Π ≈ 2.6·10⁶ Pa = 26 bar.`}
      cite={`[${W9}, p. 12–14; ${FS}, p. 8, eq. 86]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="e"><M>m</M></V> = <strong>{m.toFixed(2)}</strong> mol/kg H₂O</span>
            <input type="range" min={0} max={1} step={0.01} value={m} onChange={(e) => setM(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="b"><M>T</M></V> = <strong>{Tc.toFixed(0)}</strong> °C</span>
            <input type="range" min={0} max={80} step={1} value={Tc} onChange={(e) => setTc(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="c"><M>\nu</M></V> = <strong>{nu}</strong> ions per formula unit</span>
            <input type="range" min={1} max={3} step={1} value={nu} onChange={(e) => setNu(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <V c="a"><M>c</M> = {c.toFixed(0)}</V> mol/m³ · <V c="d"><M>\Pi</M> = {Pi.toExponential(2)}</V> Pa = {(Pi / 1e5).toFixed(1)} bar · <M>\Delta h</M> = {dh.toFixed(0)} m
        </p>
        <Svg w={480} h={80} label="Bar showing the osmotic pressure in bar">
          <rect x={20} y={20} width={440} height={30} rx={6} style={shade('muted', 12)} />
          <rect x={20} y={20} width={Math.min(440, (Pi / 1e5 / 70) * 440)} height={30} rx={6} style={shade('var-d', 55)} />
          <Label x={24} y={70} anchor="start" size={11} t="muted">0 bar</Label>
          <Label x={456} y={70} anchor="end" size={11} t="muted">70 bar</Label>
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="A selective layer and a driving force">
        <MentalModel cite={`[${W9}, p. 3–12]`}>
          <T text="A membrane is a semi-permeable layer that lets some species through more easily than others. Feed goes in on one side, permeate comes out the other, and a driving force pushes material across: a difference in concentration, pressure, temperature or electric potential [Week 9, p. 5]. How it discriminates depends on its structure. Big pores just let everything flow (no selectivity). Small pores add Knudsen/molecular diffusion. Pores near molecular size sieve by size. Dense membranes work by solution–diffusion [Week 9, p. 6]." />
          <p>
            The filtration processes are essentially a size ladder: micro (µm), ultra (nm), nano (&lt; 2 nm, charged), then reverse osmosis
            that holds back salts [Week 9, p. 3, 10]. Osmosis is the twist. If the membrane passes water but not salt, water flows{' '}
            <strong>toward</strong> the salty side, because of the difference in thermodynamic potential between pure water and the solution
            [Week 9, p. 12], until a pressure difference <V c="d"><M>\Pi</M></V> balances it. Push harder than Π on the salty side and the
            flow reverses: reverse osmosis gives fresh water [Week 9, p. 12].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Membranes, mechanisms and processes">
        <Columns>
          <Diagram title="Conventional vs membrane filtration" cite={`[${W9}, p. 2]`} caption="Cake filtration of particles > 1 µm vs membrane separation down to molecular size.">
            <ConvVsMem />
          </Diagram>
          <div>
            <Def term="Conventional filtration" cite={`[${W9}, p. 2]`}>Separates solid particles &gt; 1 µm. A cake grows on the filter over time and reduces performance.</Def>
            <Def term="Membrane filtration" cite={`[${W9}, p. 2]`}>Separates particles down to molecular size, for liquid and gas streams.</Def>
            <Def term="Process families" cite={`[${W9}, p. 3]`}>Micro- and ultrafiltration (particles from liquid or gas); reverse osmosis and nanofiltration (low-MW solutes from a solvent, e.g. decolouring wastewater, desalinating seawater); dialysis (low-MW solutes from macromolecular mixtures, e.g. artificial kidneys); gas separation (N₂ or O₂ from air); pervaporation and vapour permeation.</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Membrane as a separator" cite={`[${W9}, p. 5]`} caption="Feed, retentate and permeate; a driving force pushes material across.">
            <Separator />
          </Diagram>
          <div>
            <Def term="Membrane" cite={`[${W9}, p. 5]`}>A semi-permeable phase that restricts the motion of certain species. Transport mechanisms are set by its structure. It may carry a charge (nanofiltration). Driving force: ΔC, ΔP, ΔT or ΔE.</Def>
            <Def term="Advantages" cite={`[${W9}, p. 4]`}>Fewer chemical additives, low energy use, smaller and lighter systems, low capital and operating cost at small scale.</Def>
            <Def term="Disadvantages" cite={`[${W9}, p. 4]`}>Not always highly selective, membrane stability, not suited to large throughputs, relatively immature technology.</Def>
          </div>
        </Columns>

        <Diagram title="Four transport mechanisms" cite={`[${W9}, p. 6]`} caption="From open pores to dense layers.">
          <Mechanisms />
        </Diagram>
        <Def term="Transport mechanisms" cite={`[${W9}, p. 6]`}>(a) Bulk flow through macropores, no selectivity; (b) flow through micropores, Knudsen flow and molecular diffusion; (c) size exclusion / molecular sieving, the molecule is too large to pass; (d) solution through a dense membrane, the solution–diffusion mechanism.</Def>

        <Columns>
          <Diagram title="Symmetric vs asymmetric membrane" cite={`[${W9}, p. 8]`} caption="Uniform layer vs thin selective layer on a porous support.">
            <SymAsym />
          </Diagram>
          <div>
            <Def term="Symmetrical membranes" cite={`[${W9}, p. 8]`}>Homogeneous, dense or (micro)porous, several µm thick.</Def>
            <Def term="Asymmetrical membranes" cite={`[${W9}, p. 8]`}>Heterogeneous with a support. Dense or porous top layer, relatively thick porous support, very thin selective top layer.</Def>
          </div>
        </Columns>

        <Diagram title="Size ladder of filtration processes" cite={`[${W9}, p. 3, 10]`} caption="Log scale. The files give no lower size bound for NF (< 2 nm, dashed) or RO (low end), so none is drawn.">
          <Ladder />
        </Diagram>
        <Columns>
          <div>
            <Def term="Microfiltration (0.1–10 µm)" cite={`[${W9}, p. 10]`}>Removes fine particles, separates bacteria from drinking water.</Def>
            <Def term="Ultrafiltration (2–100 nm)" cite={`[${W9}, p. 10]`}>Removes ultra-fine particles, separates viruses and proteins (e.g. lactose and proteins from whey).</Def>
          </div>
          <div>
            <Def term="Nanofiltration (< 2 nm)" cite={`[${W9}, p. 10]`}>Removes particles and molecules smaller than 2 nm. Water is almost always the solvent. The membrane is usually charged, which lets salts permeate.</Def>
            <Def term="Exam examples of membrane processes" cite={`[${PX}, Ex. 7a]`}>Ultrafiltration (virus removal, sterilisation), reverse osmosis (seawater desalination), gas separation (O₂ from air).</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Osmosis and reverse osmosis" cite={`[${W9}, p. 12]`} caption="Water moves to the salt side until Π = ρgΔh; with P_ext > Π the flow reverses.">
            <Osmosis />
          </Diagram>
          <Def term="Osmosis" cite={`[${W9}, p. 12]`}>
            {String.raw`With a membrane permeable to water but not salts, water moves toward the salt side because the thermodynamic potential of pure water differs from that of the solution (the slide says it is lower). The driving force is the osmotic pressure Π. At equilibrium it equals the hydrostatic pressure. Applying $P_{ext} > \Pi_{OSM}$ reverses the process to give pure water (reverse osmosis).`}
          </Def>
        </Columns>
        <Gap>Week 9, p. 7 (membranes in industry), p. 9 (composite membranes) and p. 11 are image-only slides.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="pi" />
        <Eq id="c" />
        <PiExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Osmotic pressure of 0.5 mol NaCl/kg H₂O at 45 °C"
          given="Pure water density 997.0 kg/m³."
          steps={[
            { body: '1 mol NaCl gives 2 mol ions.' },
            { body: String.raw`Ion concentration: $c = 2\cdot 0.5\cdot 997.0 = 997$ mol/m³.` },
            { body: String.raw`Temperature: $45 + 273.15 = 318.15$ K.` },
            { body: String.raw`$\Pi_{OSM} = cRT = 997\cdot 8.314\cdot 318.15 = 2.6\cdot 10^6$ Pa.` },
            { body: 'Result: about 26 bar.' },
          ]}
          result="Π ≈ 26 bar"
          cite={`[${W9}, p. 13–14]`}
        />
        <FadedExample
          title="Osmotic pressure of 0.1 mol NaCl/kg H₂O at 25 °C"
          given="Pure water density 997.0 kg/m³."
          steps={[
            { title: 'Ions per formula unit.', body: '2.', hidden: true },
            { title: 'Ion concentration.', body: String.raw`$c = 2\cdot 0.1\cdot 997.0 = 199.4$ mol/m³.`, hidden: true },
            { title: 'Osmotic pressure at 298.15 K.', body: String.raw`$\Pi = 199.4\cdot 8.314\cdot 298.15 = 4.9\cdot 10^5$ Pa ≈ 4.9 bar.`, hidden: true },
            { title: 'Compare with the lecture case (0.5 mol/kg at 45 °C).', body: String.raw`5× lower concentration and a lower T, so Π is about 5.3× lower, consistent with $\Pi \propto cT$.`, hidden: true },
          ]}
          cite={`[${E9}, Problem 1] (solution sheet blank, numbers computed here with the lecture method)`}
        />
        <Gap>{'Exercise 9 Problem 1 asks for a comparison with "Table 11.1 in the book". That table is not in the files.'}</Gap>
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Count ions" cite={`[${W9}, p. 14]`}>NaCl gives 2 ions per formula unit, so the concentration doubles. Forgetting this halves Π.</Trap>
        <Trap title="Molality to mol/m³" cite={`[${W9}, p. 14]`}>Multiply by the water density (kg/m³).</Trap>
        <Trap title="Kelvin" cite={`[${W9}, p. 14]`}>T must be in K.</Trap>
        <Trap title="Dilute only" cite={`[${W9}, p. 12]`}>{String.raw`Van 't Hoff ($\Pi \approx cRT$) applies only to dilute solutions.`}</Trap>
        <Trap title="Direction of osmosis" cite={`[${W9}, p. 12]`}>{String.raw`Water flows toward the salt side. Reverse osmosis needs $P_{ext} > \Pi$ on the salt side.`}</Trap>
        <Trap title="Nanofiltration lets salts through" cite={`[${W9}, p. 10, 3]`}>Its membranes are usually charged, unlike RO which holds salts back.</Trap>
        <Trap title="Bulk flow has no selectivity" cite={`[${W9}, p. 6]`}>{"Macropores only filter by gross size, they don't discriminate between dissolved components."}</Trap>
        <Trap title={"Membranes don't suit large throughputs"} cite={`[${W9}, p. 4]`}>A standard disadvantage question.</Trap>
        <Trap title="Size units" cite={`[${W9}, p. 10]`}>Microfiltration is µm (0.1–10), ultrafiltration nm (2–100), nanofiltration &lt; 2 nm.</Trap>
      </Section>
    </>
  )
}
