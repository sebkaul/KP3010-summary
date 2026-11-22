import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, Trap, Gap, Columns, Diagram, Svg, Box, Arrow, Label,
  Mermaid, M, V, T, tone,
} from '../components'

const W8 = 'Week 8 - Crystallization and precipitation with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'

export const meta = {
  title: 'Nucleation (CNT), crystal growth and crystallizer operation',
  topic: 'crystallization',
  examWeight: { level: 'low', note: 'Not asked on either practice exam; CNT rate equations are on the formula sheet' },
  examTasks: ['None on either practice exam.'],
  buildsOn: ['26-crystallization-fundamentals', '28-supersaturation-metastable-zone'],
  usedIn: [],
  sources: [`[${W8}, p. 28–36]`, `[${FS}, p. 8, eq. 83–85]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Which type of nucleation does classical nucleation theory describe?', a: 'Homogeneous primary nucleation. [Week 8, p. 29]' },
    { id: 'p2', kind: 'pretest', q: 'At low supersaturation, which is faster: homogeneous or heterogeneous nucleation?', a: 'Heterogeneous. [Week 8, p. 29]' },
    { id: 'p3', kind: 'pretest', q: 'Where on a crystal surface does growth happen most easily?', a: 'At dislocations and defects, and corners are preferred spots, rather than flat surfaces. [Week 8, p. 33]' },
    { id: 't1', q: 'List the three steps for forming a crystal.', a: 'Nucleation, mass transfer to the crystal surface, incorporation into the crystal lattice. [Week 8, p. 31]' },
    { id: 't2', q: 'Give the simplified two-step model of crystal growth mass transfer.', a: 'Bulk diffusion through the film, then incorporation into the lattice. [Week 8, p. 32]' },
    { id: 't3', q: 'What is secondary nucleation?', a: 'Heterogeneous nucleation on existing crystals. [Week 8, p. 29]' },
    { id: 't4', q: 'Name the four crystallizer types on the slide.', a: 'Stirred tank, forced circulation, draft tube baffle, fluidized bed. [Week 8, p. 36]' },
    { id: 't5', q: 'Why is product cost inversely proportional to the number of stages in an evaporative crystallization plant?', a: 'The vapour from each stage heats the next, so adding stages reuses the energy. [Week 8, p. 35]' },
  ],
  equations: [
    {
      id: 'dG',
      label: 'CNT free energy of a spherical cluster',
      tex: String.raw`\Delta G = \Delta G_v + \Delta G_s = \frac{4}{3}\pi \va{r}^3\vb{\Delta\mu} + 4\pi \va{r}^2\vc{\gamma}, \qquad \vb{\Delta\mu} = RT\ln \vd{S}`,
      vars: [
        { sym: String.raw`\Delta G`, desc: 'free energy of forming the cluster', unit: String.raw`\mathrm{J}` },
        { sym: String.raw`\va{r}`, desc: 'cluster radius', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\vb{\Delta\mu}`, desc: 'free energy change of the solid phase (per volume in this expression)', unit: String.raw`\mathrm{J/m^3}` },
        { sym: String.raw`\vc{\gamma}`, desc: 'surface (interfacial) interaction', unit: String.raw`\mathrm{N/m}\ (\mathrm{J/m^2})` },
        { sym: String.raw`\vd{S}`, desc: 'supersaturation ratio', unit: '–' },
      ],
      note: 'Homogeneous primary nucleation. The slide writes $\\Delta\\mu = RT\\ln S$ as the driving force, and the volume term must be negative for supersaturation to favour the solid.',
      cite: `[${W8}, p. 30]`,
      check: { status: 'verified', note: 'Matches W8 p. 30 as printed (Δμ = RT ln S, ΔG = 4/3πr³Δμ + 4πr²γ); the sign of the volume term is not explicit on the slide — see the note.' },
    },
    {
      id: 'v',
      label: 'Molecular volume',
      tex: String.raw`v_i = \frac{M_i}{\rho_i N_{av}}, \qquad N_{av} = 6.022\cdot 10^{23}`,
      vars: [
        { sym: String.raw`v_i`, desc: 'volume of one molecule', unit: String.raw`\mathrm{m^3}` },
        { sym: String.raw`M_i`, desc: 'molar mass', unit: String.raw`\mathrm{kg/mol}` },
        { sym: String.raw`\rho_i`, desc: 'density of the solid', unit: String.raw`\mathrm{kg/m^3}` },
      ],
      cite: `[${FS}, p. 8, eq. 83]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 83 (on PDF p. 9).' },
    },
    {
      id: 'J',
      label: 'Homogeneous primary nucleation rate',
      tex: String.raw`\ve{J} = A\exp\left(-\frac{W^*}{k_bT}\right) = A\exp\left(-\frac{16\pi v^2\vc{\gamma}^3}{3k_b^3T^3\ln^2 \vd{S}}\right)`,
      vars: [
        { sym: String.raw`\ve{J}`, desc: 'nucleation rate', unit: String.raw`\mathrm{nuclei/(m^3\cdot s)}` },
        { sym: String.raw`A`, desc: 'pre-exponential factor', unit: String.raw`\mathrm{nuclei/(m^3\cdot s)}` },
        { sym: String.raw`W^*`, desc: 'nucleation barrier', unit: String.raw`\mathrm{J}` },
        { sym: String.raw`\vc{\gamma}`, desc: 'interfacial tension', unit: String.raw`\mathrm{N/m}` },
        { sym: String.raw`k_b`, desc: 'Boltzmann constant, $1.381\\cdot 10^{-23}$', unit: String.raw`\mathrm{J/K}\ (\mathrm{m^2\cdot kg\cdot s^{-2}\cdot K^{-1}})` },
        { sym: String.raw`T`, desc: 'temperature', unit: String.raw`\mathrm{K}` },
      ],
      cite: `[${FS}, p. 8, eq. 84]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 84.' },
    },
    {
      id: 'Jhet',
      label: 'Heterogeneous primary nucleation rate',
      tex: String.raw`\ve{J} = A_{HET}\exp\left(-\frac{16\pi v^2\gamma_{eff}^3}{3k_b^3T^3\ln^2 \vd{S}}\right)`,
      vars: [
        { sym: String.raw`A_{HET}`, desc: 'pre-exponential factor (heterogeneous)', unit: String.raw`\mathrm{nuclei/(m^3\cdot s)}` },
        { sym: String.raw`\gamma_{eff}`, desc: 'effective interfacial tension on the foreign surface', unit: String.raw`\mathrm{N/m}` },
      ],
      cite: `[${FS}, p. 8, eq. 85]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 85.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

const TREE = `flowchart LR
  N[Nucleation] --> P[Primary]
  N --> Sx["Secondary<br/>on existing crystals"]
  P --> Ho["Homogeneous<br/>bulk, no foreign bodies<br/>(CNT describes this one)"]
  P --> He["Heterogeneous<br/>on impurity surfaces"]
  He -.- F["faster at low S"]
  Sx -.- F`

// ---- CNT curve (dimensionless) -------------------------------------------------------
function CntCurve({ S = 2, g = 1, w = 480, labels = true }) {
  const lnS = Math.log(S)
  const dG = (r) => (4 / 3) * Math.PI * r ** 3 * -lnS + 4 * Math.PI * r * r * g
  const rc = (2 * g) / lnS
  const Wst = dG(rc)
  const rmax = Math.max(3, rc * 2.2)
  const rs = Array.from({ length: 120 }, (_, i) => (i / 119) * rmax)
  const ymax = Math.max(Wst * 1.6, 5)
  const x0 = 60
  const y0 = 20
  const pw = w - 100
  const h = 240
  const X = (r) => x0 + (r / rmax) * pw
  const Y = (v) => y0 + h / 2 - (v / ymax) * (h / 2)
  const clip = (v) => Math.max(-ymax, Math.min(ymax, v))
  return (
    <Svg w={w} h={290} label="Free energy of a cluster against radius: surface term, volume term and their sum with a barrier">
      <Arrow x1={x0} y1={Y(0)} x2={x0 + pw + 10} y2={Y(0)} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 6} />
      <Label x={x0 + pw} y={Y(0) + 18} anchor="end" size={12} t="var-a">cluster radius r</Label>
      <Label x={x0 + 6} y={y0 - 4} anchor="start" size={12}>ΔG (arb. units)</Label>
      <polyline points={rs.map((r) => `${X(r)},${Y(clip(4 * Math.PI * r * r * g))}`).join(' ')} style={st('var-c', true, 1.6)} />
      <polyline points={rs.map((r) => `${X(r)},${Y(clip((4 / 3) * Math.PI * r ** 3 * -lnS))}`).join(' ')} style={st('var-b', true, 1.6)} />
      <polyline points={rs.map((r) => `${X(r)},${Y(clip(dG(r)))}`).join(' ')} style={st('ink', false, 2.8)} />
      <line x1={X(rc)} y1={Y(Wst)} x2={X(rc)} y2={Y(0)} style={st('trap', true, 1.5)} />
      <circle cx={X(rc)} cy={Y(Wst)} r={5} style={{ fill: tone('trap') }} />
      {labels && (
        <>
          <Label x={X(rc)} y={Y(Wst) - 10} size={12} t="trap">barrier W*</Label>
          <Label x={X(rc)} y={Y(0) + 18} size={11} t="trap">critical size</Label>
          <Label x={X(rc * 0.4)} y={Y(0) - 10} size={11} t="muted">dissolves</Label>
          <Label x={X(Math.min(rmax * 0.95, rc * 1.8))} y={Y(0) - 10} size={11} t="muted">grows</Label>
          <Label x={X(rmax * 0.45)} y={Y(Math.min(ymax * 0.9, 4 * Math.PI * (rmax * 0.45) ** 2 * g)) - 6} anchor="end" size={11} t="var-c">surface +4πr²γ</Label>
          <Label x={X(rmax * 0.6)} y={Y(Math.max(-ymax * 0.9, (4 / 3) * Math.PI * (rmax * 0.6) ** 3 * -lnS)) + 16} anchor="end" size={11} t="var-b">volume (Δμ &lt; 0)</Label>
        </>
      )}
    </Svg>
  )
}

// ---- Visual: solution → lattice ----------------------------------------------------------
function ToLattice() {
  const steps = ['bulk diffusion', 'layer diffusion', 'desolvation', 'surface diffusion', 'incorporation', 'solvent counter-diffusion']
  return (
    <Svg w={560} h={230} label="Six numbered steps from bulk solution to incorporation into the crystal lattice">
      <rect x={20} y={150} width={520} height={60} style={shade('var-a', 30)} />
      <Label x={280} y={190} size={12} t="var-a">crystal</Label>
      <rect x={20} y={100} width={520} height={50} style={shade('var-e', 14)} />
      <Label x={530} y={118} anchor="end" size={11} t="var-e">film / layer</Label>
      {steps.map((s, i) => {
        const x = 50 + i * 85
        const down = i < 5
        return (
          <g key={s}>
            <Arrow x1={x} y1={down ? 40 + i * 12 : 148} x2={x} y2={down ? 96 + i * 10 : 70} t={i === 5 ? 'trap' : 'example'} />
            <Label x={x} y={down ? 30 + i * 12 : 60} size={10} t={i === 5 ? 'trap' : 'example'}>{`${i + 1} ${s}`}</Label>
          </g>
        )
      })}
      <Label x={280} y={226} size={11} t="muted">simplified: film diffusion + incorporation</Label>
    </Svg>
  )
}

// ---- Visual: growth sites ------------------------------------------------------------------
function Sites() {
  return (
    <Svg w={420} h={220} label="Cube crystal with a step and corner preferred, flat face slow, dislocation fast">
      <polygon points="120,80 260,80 320,40 180,40" style={{ ...shade('var-a', 25), stroke: tone('ink'), strokeWidth: 2 }} />
      <polygon points="120,80 260,80 260,200 120,200" style={{ ...shade('var-a', 35), stroke: tone('ink'), strokeWidth: 2 }} />
      <polygon points="260,80 320,40 320,160 260,200" style={{ ...shade('var-a', 20), stroke: tone('ink'), strokeWidth: 2 }} />
      <path d="M150,80 v-14 l40,-26" style={st('ink', false, 2)} />
      <circle cx={260} cy={80} r={8} style={{ fill: 'none', stroke: tone('intuition'), strokeWidth: 3 }} />
      <Label x={272} y={100} anchor="start" size={11} t="intuition">corner: preferred</Label>
      <Label x={190} y={150} size={11} t="muted">flat face: slow</Label>
      <line x1={200} y1={170} x2={230} y2={190} style={st('trap', false, 3)} />
      <Label x={236} y={196} anchor="start" size={11} t="trap">dislocation: fast</Label>
      <Label x={140} y={62} anchor="end" size={11} t="example">step</Label>
    </Svg>
  )
}

// ---- Visual: multi-stage evaporation --------------------------------------------------------
function MultiStage() {
  return (
    <Svg w={600} h={170} label="Three crystallizers in series; steam heats stage 1, vapour from each stage heats the next">
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Box x={60 + i * 180} y={60} w={110} h={70} label={`stage ${i + 1}`} t="topic" />
          {i < 2 && <Arrow x1={115 + i * 180} y1={60} x2={115 + i * 180} y2={30} t="var-e" />}
          {i < 2 && <path d={`M${115 + i * 180},30 H${200 + i * 180} V95 H${238 + i * 180}`} style={st('var-e', false, 2)} />}
        </g>
      ))}
      <Arrow x1={10} y1={95} x2={58} y2={95} t="trap" />
      <Label x={10} y={85} anchor="start" size={12} t="trap">steam</Label>
      <Label x={300} y={160} size={12} t="muted">vapour from one stage heats the next · cost ∝ 1/number of stages</Label>
    </Svg>
  )
}

// ---- Visual: crystallizer types (outlines) ------------------------------------------------------
function Types() {
  const box = (x, name, inner) => (
    <g key={name}>
      <rect x={x} y={20} width={120} height={140} rx={14} style={st('ink', false, 2)} />
      {inner}
      <Label x={x + 60} y={182} size={12}>{name}</Label>
    </g>
  )
  return (
    <Svg w={600} h={200} label="Outlines of stirred tank, forced circulation, draft tube baffle and fluidized bed crystallizers">
      {box(10, 'stirred tank', <><line x1={70} y1={10} x2={70} y2={120} style={st('ink', false, 2)} /><path d="M50,120 h40" style={st('ink', false, 4)} /></>)}
      {box(160, 'forced circulation', <><path d="M280,60 h30 v80 h-30" style={st('var-e', false, 2.5)} /><rect x={300} y={85} width={20} height={30} style={{ ...shade('trap', 40), stroke: tone('trap') }} /></>)}
      {box(310, 'draft tube baffle', <><rect x={355} y={50} width={30} height={90} style={st('var-e', false, 2)} /><line x1={370} y1={10} x2={370} y2={130} style={st('ink', false, 2)} /></>)}
      {box(460, 'fluidized bed', <>{Array.from({ length: 14 }, (_, i) => <circle key={i} cx={480 + (i % 5) * 20} cy={80 + Math.floor(i / 5) * 22} r={5} style={shade('var-a', 60)} />)}<Arrow x1={520} y1={170} x2={520} y2={140} t="var-e" /></>)}
    </Svg>
  )
}

// ---- Interactive ---------------------------------------------------------------------------------
function CntExplorer() {
  const [S, setS] = useState(2)
  const [g, setG] = useState(1)
  const [lB, setLB] = useState(1)
  const B = 10 ** lB
  const lnS = Math.log(S)
  const rc = (2 * g) / lnS
  const Wst = (16 * Math.PI * g ** 3) / (3 * lnS * lnS)
  const x0 = 60
  const y0 = 20
  const w = 360
  const h = 180
  const X = (s) => x0 + ((s - 1) / 4) * w
  const Y = (v) => y0 + h - v * h
  const ss = Array.from({ length: 200 }, (_, i) => 1.001 + (i / 199) * 3.999)
  return (
    <Diagram
      title="Dimensionless CNT (illustrative)"
      caption={String.raw`Panel A: $\Delta G(r) = \frac{4}{3}\pi r^3(-\ln S) + 4\pi r^2\tilde\gamma$ in arbitrary units. Panel B: $J/A = \exp(-B/\ln^2 S)$ with lumped B. Shapes from [Week 8, p. 30; FormelarkKP3010.pdf, p. 8, eq. 84]; the numbers are illustrative — no course values exist.`}
      cite={`[${W8}, p. 30; ${FS}, p. 8, eq. 84]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="d"><M>S</M></V> = <strong>{S.toFixed(2)}</strong></span>
            <input type="range" min={1.05} max={5} step={0.01} value={S} onChange={(e) => setS(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="c"><M>{String.raw`\tilde\gamma`}</M></V> = <strong>{g.toFixed(2)}</strong></span>
            <input type="range" min={0.2} max={2} step={0.01} value={g} onChange={(e) => setG(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param">lumped <M>B</M> = <strong>{B.toFixed(1)}</strong></span>
            <input type="range" min={0} max={3} step={0.01} value={lB} onChange={(e) => setLB(Number(e.target.value))} />
          </label>
        </div>
        <p>critical radius <M>r^*</M> = {rc.toFixed(2)} · barrier <M>W^*</M> = {Wst.toFixed(2)} (arb. units) · <M>J/A</M> at this S = {Math.exp(-B / (lnS * lnS)).toExponential(2)}</p>
        <CntCurve S={S} g={g} w={480} labels={false} />
        <Svg w={480} h={250} label="J/A against S showing a sharp onset">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {[1, 2, 3, 4, 5].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
          {[0.5, 1].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
          <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={12} t="var-d">S</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={12} t="var-e">J/A</Label>
          <polyline points={ss.map((s) => `${X(s)},${Y(Math.exp(-B / Math.log(s) ** 2))}`).join(' ')} style={st('var-e')} />
          <circle cx={X(S)} cy={Y(Math.exp(-B / (lnS * lnS)))} r={6} style={{ fill: tone('var-d') }} />
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="A tug-of-war between volume and surface">
        <MentalModel cite={`[${W8}, p. 28–35; ${FS}, p. 8, eq. 84]`}>
          <T text="A tiny cluster of solute molecules is in a tug-of-war. Turning dissolved solute into solid releases free energy in proportion to the cluster's volume ($r^3$), which is favourable when supersaturated, $\Delta\mu = RT\ln S$. But every cluster also creates a solid–liquid surface that costs energy in proportion to $r^2$ [Week 8, p. 30]. Small clusters are surface-dominated and tend to fall apart. Once a cluster passes the top of the energy barrier, it is volume-dominated and grows on its own [Week 8, p. 30]." />
          <p>
            The barrier <M>W^*</M> shrinks rapidly as <V c="d">S</V> rises (<M>{String.raw`\ln^2 S`}</M> in the exponent), so the{' '}
            <V c="e">nucleation rate</V> switches on sharply [FormelarkKP3010.pdf, p. 8, eq. 84]. Foreign surfaces and existing crystals lower
            the effective surface cost, which is why heterogeneous and secondary nucleation dominate at low supersaturation [Week 8, p. 29].
            After nucleation, crystals grow by mass transfer to the surface and incorporation into the lattice, fastest at defects and
            corners [Week 8, p. 31–33]. At plant scale: continuous for large volumes, batch when scaling or batch-wise flexibility matter,
            and multiple evaporation stages to save energy [Week 8, p. 34–35].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Nucleation, growth and crystallizers">
        <Columns>
          <Mermaid title="Nucleation tree" chart={TREE} cite={`[${W8}, p. 29]`} caption="CNT describes homogeneous primary nucleation; heterogeneous routes are faster at low S." />
          <div>
            <Def term="Primary nucleation, homogeneous" cite={`[${W8}, p. 29]`}>In the bulk liquid with no foreign bodies (impurities, vessel walls).</Def>
            <Def term="Primary nucleation, heterogeneous" cite={`[${W8}, p. 29]`}>On impurity surfaces.</Def>
            <Def term="Secondary nucleation" cite={`[${W8}, p. 29]`}>Heterogeneous nucleation on existing crystals. Especially at lower supersaturation, heterogeneous nucleation is quicker than homogeneous.</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="CNT free-energy curve (dimensionless, schematic)" cite={`[${W8}, p. 30; ${FS}, p. 8, eq. 84]`}
            caption="Surface term (+r²), volume term (−r³ when supersaturated) and their sum with a maximum: barrier W* at the critical size.">
            <CntCurve />
          </Diagram>
          <div>
            <Def term="Classical nucleation theory (CNT)" cite={`[${W8}, p. 29–30]`}>
              {String.raw`Describes homogeneous primary nucleation as a competition between surface and volume formation in a prenucleation cluster. Solid formation is thermodynamically favoured at supersaturation ($\Delta\mu = RT\ln S$), while a growing cluster adds unfavourable solute–solvent surface. For larger crystals the surface term matters less.`}
            </Def>
            <Def term="Kinetics vs thermodynamics" cite={`[${W8}, p. 31]`}>Phase diagrams say which phases are favoured at equilibrium. Kinetics (driven by supersaturation) say how and how fast equilibrium is reached.</Def>
          </div>
        </Columns>

        <Diagram title="From solution to lattice" cite={`[${W8}, p. 31–32]`} caption="Six detailed steps; simplified to film diffusion + incorporation.">
          <ToLattice />
        </Diagram>
        <Columns>
          <div>
            <Def term="Steps to form a crystal" cite={`[${W8}, p. 31]`}>(1) Nucleation, (2) mass transfer to the crystal surface, (3) incorporation into the lattice.</Def>
            <Def term="Growth mass transfer, detailed" cite={`[${W8}, p. 32]`}>(1) Bulk diffusion through the film, (2) diffusion of dissolved solute in the layer, (3) partial or total desolvation, (4) surface diffusion of solute units, (5) incorporation into the lattice, (6) counter-diffusion of solvent. Simplified to (1) bulk diffusion through the film and (2) incorporation into the lattice.</Def>
          </div>
          <div>
            <Diagram title="Growth at corners and defects" cite={`[${W8}, p. 33]`} caption="Corners and dislocations grow faster than flat faces.">
              <Sites />
            </Diagram>
            <Def term="Defining crystal growth" cite={`[${W8}, p. 33]`}>Linear advance rate of a single face, change in a characteristic dimension (diameter), or change in the total mass of a crystal.</Def>
            <Def term="Growth sites" cite={`[${W8}, p. 33]`}>Faster at dislocations and defects than at flat surfaces. Forming extra surface area is unfavourable (minimum surface area is favourable), so corners are preferred spots.</Def>
          </div>
        </Columns>

        <Diagram title="Multi-stage evaporative crystallizer" cite={`[${W8}, p. 35]`} caption="Vapour from each stage heats the next.">
          <MultiStage />
        </Diagram>
        <Columns>
          <Def term="Batch vs continuous" cite={`[${W8}, p. 34]`}>Continuous is more cost-efficient for large quantities. Batch-to-batch variations may occur. Wall deposits (scaling) may need removing, which makes batch operation more suitable.</Def>
          <Def term="Number of stages" cite={`[${W8}, p. 35]`}>Multiple stages are used for energy-intensive processes (evaporation). Vapour from one stage heats the next, and product cost is inversely proportional to the number of stages.</Def>
        </Columns>
        <Diagram title="Crystallizer types" cite={`[${W8}, p. 36]`} caption="Names only — the slide has no further text; outlines are generic.">
          <Types />
        </Diagram>
        <Def term="Crystallizer types" cite={`[${W8}, p. 36]`}>Stirred tank, forced circulation, draft tube baffle, fluidized bed.</Def>
        <Gap>The crystallizer-type figures (Week 8, p. 36) and the CNT ΔG(r) figure (p. 30) are images. The visuals are schematic.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="dG" />
        <Eq id="v" />
        <Eq id="J" />
        <Eq id="Jhet" />
        <CntExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Why do small clusters dissolve, and why does more supersaturation make more crystals? (reasoning from the slides)"
          steps={[
            { body: String.raw`Write the cluster's free energy as volume + surface: $\Delta G = \frac{4}{3}\pi r^3\Delta\mu + 4\pi r^2\gamma$.` },
            { body: String.raw`In a supersaturated solution the solid is favoured ($\Delta\mu$ from $RT\ln S$), so the $r^3$ term lowers ΔG.` },
            { body: 'The $r^2$ surface term is positive. For small r it dominates (r² > r³ when r is small), so ΔG rises with size and small clusters are unstable.' },
            { body: String.raw`For larger r the volume term wins: "larger crystals → surface interaction less important". ΔG passes a maximum (barrier $W^*$) and then falls, so bigger clusters grow.` },
            { body: String.raw`Raising S makes $\Delta\mu$ larger in magnitude, so the barrier drops. In eq. 84 that appears as $\ln^2 S$ in the denominator of the exponent, so J rises steeply.` },
            { body: 'This is why primary nucleation has a higher-order dependence on supersaturation than growth, and why high S gives many small crystals. [Week 8, p. 28]' },
          ]}
          cite={`[${W8}, p. 28–30; ${FS}, p. 8, eq. 84]`}
        />
        <Gap>No numerical nucleation, growth or crystallizer-design example in the files (lectures, exercise 8 and both practice exams).</Gap>
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="CNT is for homogeneous primary nucleation only" cite={`[${W8}, p. 29; ${FS}, p. 8, eq. 84–85]`}>{String.raw`Heterogeneous uses $\gamma_{eff}$ and $A_{HET}$ (eq. 85).`}</Trap>
        <Trap title={String.raw`$\ln^2 S$ makes J extremely sensitive`} cite={`[${FS}, p. 8, eq. 84]`}>A small increase in S can switch nucleation on.</Trap>
        <Trap title="Molecular volume per molecule" cite={`[${FS}, p. 8, eq. 83]`}>{String.raw`$v = M/(\rho N_{av})$, in m³ per molecule, not per mol.`}</Trap>
        <Trap title={String.raw`$k_b$, not R`} cite={`[${FS}, p. 8, eq. 84]`}>{"The nucleation exponent uses Boltzmann's constant because v is per molecule."}</Trap>
        <Trap title="At low supersaturation, heterogeneous/secondary nucleation dominates" cite={`[${W8}, p. 29]`}>Homogeneous needs higher S.</Trap>
        <Trap title="Growth has three possible definitions" cite={`[${W8}, p. 33]`}>Face advance rate, characteristic dimension, or mass. State which one you use.</Trap>
        <Trap title="Batch is chosen for scaling, not just small volume" cite={`[${W8}, p. 34]`}>Wall deposits that need regular removal favour batch.</Trap>
        <Trap title="More stages, cheaper product" cite={`[${W8}, p. 35]`}>In evaporative crystallization, because vapour reuse cuts energy.</Trap>
      </Section>
    </>
  )
}
