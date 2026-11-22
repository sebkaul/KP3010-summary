import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W7 = 'Week 7 - Adsorption and ion-exchange with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const PX = 'practice_exam_solutions.pdf'

export const meta = {
  title: 'Adsorption basics and adsorbent properties',
  topic: 'adsorption',
  examWeight: {
    level: 'low',
    note: 'Capacity (q_max) and selectivity from Langmuir constants in Practice exam 1 Ex. 5a; otherwise background for Q5',
  },
  examTasks: ['Practice exam 1, Ex. 5a: maximum adsorption capacity for N₂ and O₂ and the equilibrium selectivity of N₂ over O₂.'],
  buildsOn: ['01-separation-basics-k-selectivity'],
  usedIn: ['23-adsorption-isotherms', '24-fixed-bed-adsorption', '25-adsorption-cycles-ion-exchange'],
  sources: [`[${W7}, p. 2–15]`, `[${FS}, p. 6, eq. 63–64]`, `[${PX}, Ex. 5a]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Is adsorption exothermic or endothermic? What does that mean for regeneration?', a: 'Exothermic (releases heat). Desorption is endothermic and needs heat, so heating is one way to regenerate. [Week 7, p. 3, 5]' },
    { id: 'p2', kind: 'pretest', q: 'Which binds more strongly and more selectively: physisorption or chemisorption?', a: 'Chemisorption (ionic or covalent bonds). [Week 7, p. 4]' },
    { id: 'p3', kind: 'pretest', q: 'Typical specific surface area of an adsorbent?', a: 'About 300–1200 m²/g. [Week 7, p. 6]' },
    { id: 't1', q: 'Give the selectivity toward A for $K_A = 1/6$, $K_B = 3/5$.', a: '$\\alpha_A = (1/6)/(3/5) = 0.28$. [Week 7, p. 8]' },
    { id: 't2', q: 'Derive $S/V = 4/d$ for a cylindrical pore.', a: '$S = \\pi dL$ and $V = \\frac{1}{4}\\pi d^2L$, so $S/V = 4/d$. [Week 7, p. 10]' },
    { id: 't3', q: 'Same material as the worked example but with 2 nm pores. What is S?', a: 'S doubles to 1000 m²/g, because $S \\propto 1/d$. [Week 7, p. 10–12]' },
    { id: 't4', q: 'Which adsorbent would you choose for deep drying of a gas, and which for easy regeneration?', a: 'Zeolites for strong water binding and high removal. Silica or alumina for high capacity and easier regeneration. [Week 7, p. 15]' },
    { id: 't5', q: 'Name two ways to regenerate a saturated bed, and why you need several beds.', a: 'Change the temperature, or the pressure/concentration. Multiple beds keep the operation continuous while one regenerates. [Week 7, p. 5]' },
  ],
  equations: [
    {
      id: 'alpha',
      label: 'Selectivity',
      tex: String.raw`\vc{\alpha_A} = \frac{\va{K_A}}{\vb{K_B}}`,
      vars: [
        { sym: String.raw`\vc{\alpha_A}`, desc: 'selectivity of the adsorbent toward A over B', unit: '–' },
        { sym: String.raw`\va{K_A}, \vb{K_B}`, desc: 'adsorption equilibrium (isotherm) constants', unit: String.raw`\text{e.g. bar}^{-1}\text{ or m}^3/\text{mol (same for both)}` },
      ],
      note: 'Binary mixture.',
      cite: `[${W7}, p. 6; ${FS}, p. 6, eq. 63]`,
      check: { status: 'verified', note: 'Matches W7 p. 6 and formula sheet eq. 63.' },
    },
    {
      id: 'cyl',
      label: 'Cylindrical pore geometry',
      tex: String.raw`V_{pore} = \tfrac{1}{4}\pi \vd{d}^2 L, \qquad S_{pore} = \pi \vd{d} L, \qquad \frac{S_{pore}}{V_{pore}} = \frac{4}{\vd{d}}`,
      vars: [
        { sym: String.raw`\vd{d}`, desc: 'pore diameter', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`L`, desc: 'pore length', unit: String.raw`\mathrm{m}` },
      ],
      cite: `[${W7}, p. 10]`,
      check: { status: 'verified', note: 'Matches W7 p. 10.' },
    },
    {
      id: 'S',
      label: 'Specific surface area',
      tex: String.raw`\vf{S} = \frac{S_{pore}}{m_{part}} = \frac{4\,\ve{\epsilon_{part}}}{\vd{d}\,\rho_{part}}, \qquad V_{pore} = \ve{\epsilon_{part}}V_{part}, \quad V_{part} = \frac{m_{part}}{\rho_{part}}`,
      vars: [
        { sym: String.raw`\vf{S}`, desc: 'specific surface area', unit: String.raw`\mathrm{m^2/g}` },
        { sym: String.raw`\ve{\epsilon_{part}}`, desc: 'particle porosity (pore volume / particle volume)', unit: '–' },
        { sym: String.raw`\rho_{part}`, desc: 'particle density', unit: String.raw`\mathrm{g/m^3}` },
        { sym: String.raw`\vd{d}`, desc: 'pore diameter', unit: String.raw`\mathrm{m}` },
      ],
      note: 'Assumes cylindrical pores.',
      cite: `[${W7}, p. 10; ${FS}, p. 6, eq. 64]`,
      check: { status: 'verified', note: 'Matches W7 p. 10 and formula sheet eq. 64.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

// ---- Visual 1: absorption vs adsorption -------------------------------------------
function AbsVsAds() {
  const mol = (x, y, k) => <circle key={k} cx={x} cy={y} r={4} style={{ fill: tone('var-a') }} />
  return (
    <Svg w={600} h={250} label="Absorption into a liquid versus adsorption onto a solid surface">
      <rect x={30} y={110} width={220} height={110} style={{ ...shade('var-e', 25), stroke: tone('var-e'), strokeWidth: 1.5 }} />
      <Label x={140} y={100} size={12} t="muted">gas</Label>
      {[[60, 140], [100, 180], [150, 150], [200, 195], [230, 135], [80, 205], [180, 125]].map(([x, y], i) => mol(x, y, i))}
      {[[70, 60], [160, 75], [220, 50]].map(([x, y], i) => mol(x, y, `g${i}`))}
      <Label x={140} y={240} size={12}>absorption: into the bulk</Label>
      <circle cx={440} cy={160} r={60} style={{ ...shade('muted', 35), stroke: tone('ink'), strokeWidth: 2 }} />
      {[[440, 160, 10], [425, 140, 6], [460, 178, 7]].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} style={{ fill: 'var(--bg)', stroke: tone('ink'), strokeWidth: 1 }} />)}
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2
        return mol(440 + 64 * Math.cos(a), 160 + 64 * Math.sin(a), `s${i}`)
      })}
      {mol(440, 160, 'p1')}{mol(425, 140, 'p2')}
      {[[380, 60], [470, 50], [520, 80]].map(([x, y], i) => mol(x, y, `h${i}`))}
      <Arrow x1={400} y1={70} x2={410} y2={100} t="intuition" />
      <Arrow x1={500} y1={105} x2={510} y2={78} t="trap" />
      <Label x={455} y={30} size={11} t="muted">dynamic equilibrium</Label>
      <Label x={440} y={240} size={12}>adsorption: onto the surface (and pores)</Label>
    </Svg>
  )
}

// ---- Visual 2: particle and bed volumes ------------------------------------------
function Volumes() {
  const centers = [[90, 90], [190, 90], [140, 175], [240, 175], [40, 175]]
  return (
    <Svg w={420} h={260} label="Packed porous spheres: solid, internal pores and voids between particles">
      <rect x={10} y={20} width={290} height={220} rx={8} style={shade('var-b', 22)} />
      {centers.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={48} style={{ ...shade('muted', 55), stroke: tone('ink'), strokeWidth: 1.5 }} />
          {[[-15, -10, 8], [12, 6, 10], [-6, 20, 6], [18, -18, 5]].map(([dx, dy, r], k) => (
            <circle key={k} cx={x + dx} cy={y + dy} r={r} style={shade('var-e', 60)} />
          ))}
        </g>
      ))}
      <rect x={320} y={50} width={16} height={16} style={shade('muted', 55)} />
      <Label x={342} y={63} anchor="start" size={12}>solid V_s</Label>
      <rect x={320} y={90} width={16} height={16} style={shade('var-e', 60)} />
      <Label x={342} y={103} anchor="start" size={12} t="var-e">pores V_pore</Label>
      <rect x={320} y={130} width={16} height={16} style={shade('var-b', 22)} />
      <Label x={342} y={143} anchor="start" size={12} t="var-b">voids V_void</Label>
    </Svg>
  )
}

// ---- Visual 3: cylinder pore ---------------------------------------------------------
function Cylinder() {
  return (
    <Svg w={420} h={190} label="Cylindrical pore of diameter d and length L">
      <ellipse cx={80} cy={95} rx={22} ry={50} style={{ ...shade('var-e', 25), stroke: tone('ink'), strokeWidth: 2 }} />
      <line x1={80} y1={45} x2={320} y2={45} style={st('ink', false, 2)} />
      <line x1={80} y1={145} x2={320} y2={145} style={st('ink', false, 2)} />
      <path d="M320,45 a22,50 0 0,1 0,100" style={st('ink', false, 2)} />
      <path d="M320,45 a22,50 0 0,0 0,100" style={st('ink', true, 1.2)} />
      <Arrow x1={40} y1={145} x2={40} y2={45} t="var-d" />
      <Arrow x1={40} y1={45} x2={40} y2={145} t="var-d" />
      <Label x={32} y={100} anchor="end" size={13} t="var-d">d</Label>
      <Arrow x1={80} y1={168} x2={320} y2={168} t="muted" />
      <Arrow x1={320} y1={168} x2={80} y2={168} t="muted" />
      <Label x={200} y={186} size={13} t="muted">L</Label>
      <Label x={200} y={80} size={12}>V = π/4 · d² · L</Label>
      <Label x={200} y={100} size={12}>S = π · d · L</Label>
      <Label x={200} y={124} size={14} t="var-f">S/V = 4/d</Label>
    </Svg>
  )
}

// ---- Visual 4: pore classes ------------------------------------------------------------
const lx = (nm) => 30 + ((Math.log10(nm) + 1) / 4) * 520 // 0.1 → 1000 nm
function PoreClasses({ mark = 4 }) {
  return (
    <Svg w={580} h={130} label="Pore size classes on a log axis: micro below 2 nm, meso 2–50 nm, macro above 50 nm">
      <rect x={lx(0.1)} y={30} width={lx(2) - lx(0.1)} height={36} style={shade('var-a', 35)} />
      <rect x={lx(2)} y={30} width={lx(50) - lx(2)} height={36} style={shade('var-c', 35)} />
      <rect x={lx(50)} y={30} width={lx(1000) - lx(50)} height={36} style={shade('var-b', 35)} />
      <Label x={(lx(0.1) + lx(2)) / 2} y={52} size={12}>micro</Label>
      <Label x={(lx(2) + lx(50)) / 2} y={52} size={12}>meso</Label>
      <Label x={(lx(50) + lx(1000)) / 2} y={52} size={12}>macro</Label>
      <Label x={(lx(0.1) + lx(2)) / 2} y={22} size={10} t="muted">high area, poor transport</Label>
      <Label x={(lx(50) + lx(1000)) / 2} y={22} size={10} t="muted">low area, easy transport</Label>
      {[0.1, 1, 10, 100, 1000].map((v) => <text key={v} x={lx(v)} y={86} textAnchor="middle" className="svg-sub">{v}</text>)}
      {[2, 50].map((v) => <line key={v} x1={lx(v)} y1={26} x2={lx(v)} y2={70} style={st('ink', false, 1.5)} />)}
      <Label x={550} y={104} anchor="end" size={11}>pore diameter (nm, log)</Label>
      <line x1={lx(mark)} y1={24} x2={lx(mark)} y2={74} style={st('trap', false, 3)} />
      <Label x={lx(mark)} y={118} size={11} t="trap">{`${mark < 10 ? mark.toFixed(1) : mark.toFixed(0)} nm`}</Label>
    </Svg>
  )
}

// ---- Visual 5: adsorbent cards ---------------------------------------------------------
function Cards() {
  const cards = [
    ['activated carbon', 'hydrophobic', 'pellets, spheres, cylinders, powder', ''],
    ['silica gel', 'mildly hydrophobic / hydrophilic', 'often water removal from gases', 'water: high capacity, easy regen.'],
    ['activated alumina', 'hydrophilic', 'microporous Al₂O₃', 'water: high capacity, easy regen.'],
    ['zeolite (mol. sieve)', 'hydrophilic', 'crystalline; channels exclude bulky molecules', 'water: strong bond, high removal'],
  ]
  return (
    <Svg w={640} h={170} label="Cards for four common adsorbents">
      {cards.map(([n, h, u, w], i) => {
        const x = 6 + i * 158
        return (
          <g key={n}>
            <rect x={x} y={8} width={150} height={150} rx={10} style={{ ...shade(h.startsWith('hydrophobic') ? 'var-d' : 'var-e', 14), stroke: tone(h.startsWith('hydrophobic') ? 'var-d' : 'var-e'), strokeWidth: 1.5 }} />
            <text x={x + 8} y={30} className="svg-label" style={{ fontSize: 13 }}>{n}</text>
            <text x={x + 8} y={50} className="svg-sub" style={{ fill: tone(h.startsWith('hydrophobic') ? 'var-d' : 'var-e') }}>{h.length > 24 ? h.slice(0, 22) + '…' : h}</text>
            {(u.match(/.{1,24}(\s|$)/g) || [u]).slice(0, 3).map((l, k) => <text key={k} x={x + 8} y={74 + k * 15} className="svg-sub">{l.trim()}</text>)}
            {w && (w.match(/.{1,22}(\s|$)/g) || [w]).slice(0, 2).map((l, k) => <text key={`w${k}`} x={x + 8} y={128 + k * 14} className="svg-sub" style={{ fill: tone('example') }}>{l.trim()}</text>)}
          </g>
        )
      })}
    </Svg>
  )
}

// ---- Interactive -------------------------------------------------------------------------
function SExplorer() {
  const [ld, setLd] = useState(Math.log10(4))
  const [eps, setEps] = useState(0.6)
  const d = 10 ** ld
  const rho = 1.2e6 // g/m³
  const S = (4 * eps) / (d * 1e-9 * rho)
  const cls = d < 2 ? 'micropore' : d <= 50 ? 'mesopore' : 'macropore'
  const clsTone = d < 2 ? 'var-a' : d <= 50 ? 'var-c' : 'var-b'
  return (
    <Diagram
      title="Specific surface area vs pore size"
      caption={String.raw`$S = \frac{4\epsilon_{part}}{d\,\rho_{part}}$ with $\rho_{part} = 1.2$ g/cm³ [Week 7, p. 10–12]. Start: d = 4 nm, ε = 0.6 → 500 m²/g. Pore classes from [Week 7, p. 14].`}
      cite={`[${W7}, p. 10–14]`}
    >
      <div style={{ width: '100%', background: `color-mix(in srgb, ${tone(clsTone)} 8%, transparent)`, borderRadius: 8, padding: 8 }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="d"><M>{String.raw`d_{pore}`}</M></V> = <strong>{d.toFixed(1)}</strong> nm</span>
            <input type="range" min={0} max={2} step={0.005} value={ld} onChange={(e) => setLd(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="e"><M>{String.raw`\epsilon_{part}`}</M></V> = <strong>{eps.toFixed(2)}</strong></span>
            <input type="range" min={0.2} max={0.8} step={0.01} value={eps} onChange={(e) => setEps(Number(e.target.value))} />
          </label>
        </div>
        <p><V c="f"><M>S</M> = {S.toFixed(0)}</V> m²/g · <strong style={{ color: tone(clsTone) }}>{cls}</strong></p>
        <PoreClasses mark={d} />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Stick to a surface, so make lots of surface">
        <MentalModel cite={`[${W7}, p. 2–10]`}>
          <T text="In absorption the solute dissolves into a liquid. In adsorption it sticks onto the surface of an insoluble solid [Week 7, p. 2–3]. Molecules land and leave all the time. The balance between the two rates is a dynamic equilibrium, much like evaporation and condensation in VLE [Week 7, p. 3]." />
          <p>
            Since everything happens on the surface, an adsorbent is all about area. Pores give a gram of solid hundreds of m² of wall,
            and the smaller the <V c="d">pores</V>, the more <V c="f">area per gram</V> [Week 7, p. 6, 9–10]. Two numbers describe a
            good adsorbent: capacity (how much fits per kg, i.e. binding sites) and <V c="c">selectivity</V> (how much more it likes the
            target than the rest, a ratio of equilibrium constants) [Week 7, p. 6]. A saturated bed is useless until regenerated, so the
            binding must be reversible. You shift the equilibrium by changing temperature or pressure/concentration, and you run several
            beds to stay continuous [Week 7, p. 5].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Adsorption, adsorbents and pores">
        <Diagram title="Absorption vs adsorption (schematic)" cite={`[${W7}, p. 2–3]`} caption="Into the bulk vs onto the surface; adsorption and desorption run in both directions.">
          <AbsVsAds />
        </Diagram>
        <Columns>
          <div>
            <Def term="Adsorption" cite={`[${W7}, p. 3]`}>Mass transfer of a component (adsorbate) onto insoluble solid particles (adsorbent).</Def>
            <Def term="Desorption" cite={`[${W7}, p. 3]`}>Transfer of components away from the particle surface.</Def>
            <Def term="Heat effects" cite={`[${W7}, p. 3]`}>Adsorption is exothermic and releases heat. Desorption is endothermic and requires heat.</Def>
            <Def term="Dynamic equilibrium" cite={`[${W7}, p. 3]`}>Adsorption and desorption rates depend on process conditions, similar to VLE with constant evaporation and condensation.</Def>
          </div>
          <div>
            <Def term="Physisorption" cite={`[${W7}, p. 4]`}>{"Van der Waals or electrostatic forces, relatively weak, doesn't change the chemical identity. Example: hydrogen on activated carbon."}</Def>
            <Def term="Chemisorption" cite={`[${W7}, p. 4]`}>Ionic or covalent bonds, relatively strong forces and high selectivity, needs higher temperatures. Example: in hydrogenation of an alkene.</Def>
            <Def term="Bed and regeneration" cite={`[${W7}, p. 5]`}>Particles packed in a column form a bed. When saturated, the bed is regenerated by changing temperature or pressure/concentration. Reversibility is important, and several beds are often needed for continuous operation.</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Particle and bed volumes" cite={`[${W7}, p. 9]`} caption="Solid, internal pores and the voids between particles.">
            <Volumes />
          </Diagram>
          <div>
            <Def term="Selectivity" cite={`[${W7}, p. 6; ${FS}, p. 6, eq. 63]`}>{String.raw`Preference of an adsorbent for a target molecule. For binary A+B, $\alpha_A = K_A/K_B$.`}</Def>
            <Def term="Capacity" cite={`[${W7}, p. 6]`}>Amount of adsorbed molecules possible per mass of adsorbent, i.e. number of binding sites per mass. More surface area means more binding sites.</Def>
            <Def term="Volumes in a bed" cite={`[${W7}, p. 9]`}>{String.raw`Solid particle $V_s$, empty space in the particle $V_{pore}$, and empty space between particles $V_{void}$.`}</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Cylindrical pore model" cite={`[${W7}, p. 10]`} caption="Surface-to-volume ratio of a pore is 4/d.">
            <Cylinder />
          </Diagram>
          <Def term="Specific surface area S" cite={`[${W7}, p. 10; ${FS}, p. 6, eq. 64]`}>Pore surface per mass of particle (m²/g), assuming cylindrical pores.</Def>
        </Columns>

        <Diagram title="Pore-size classes" cite={`[${W7}, p. 11, 14]`} caption="Marked: the 4 nm example pore (a mesopore).">
          <PoreClasses />
        </Diagram>
        <Def term="Pore classes" cite={`[${W7}, p. 14]`}>Micropores &lt; 2 nm (high surface area, limited transport volume); mesopores 2–50 nm; macropores &gt; 50 nm (limited surface area, large transport volume).</Def>

        <Diagram title="Adsorbent cards" cite={`[${W7}, p. 13, 15]`} caption="Hydrophobic vs hydrophilic, typical use, and water behaviour.">
          <Cards />
        </Diagram>
        <Columns>
          <Def term="Common adsorbents" cite={`[${W7}, p. 13]`}>
            (1) Activated carbon, hydrophobic (pellets, spheres, cylinders, powder); (2) silica gels, mildly hydrophobic or hydrophilic, often for water removal from gases; (3) activated alumina, hydrophilic, microporous Al₂O₃; (4) molecular-sieve zeolites, hydrophilic, crystalline regular structures whose channel size may exclude bulky molecules, with strong bonds to polar molecules.
          </Def>
          <Def term="Water adsorption" cite={`[${W7}, p. 15]`}>
            Silica and alumina have high capacity and are easier to regenerate. Zeolites bind water strongly, giving high water removal.
          </Def>
        </Columns>
        <Gap>Week 7, p. 2 (absorption vs adsorption) and p. 15 (water capacity vs relative humidity) are image-based. No curve data are available, so those visuals are schematic.</Gap>
        <Gap>{'The formula sheet\'s "density and porosity definitions" block (p. 6) is an image with no extractable text.'}</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="alpha" />
        <Eq id="cyl" />
        <Eq id="S" />
        <SExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Specific surface area of a porous solid"
          given={String.raw`$\epsilon_{part} = 0.6$, $\rho_{part} = 1.2$ g/cm³, $d_{pore} = 4$ nm.`}
          steps={[
            { body: String.raw`Convert density: $1.2$ g/cm³ $= 1.2\cdot 10^6$ g/m³.` },
            { body: String.raw`Convert diameter: $4$ nm $= 4\cdot 10^{-9}$ m.` },
            { body: String.raw`Insert: $S = \dfrac{4\cdot 0.6}{4\cdot 10^{-9}\cdot 1.2\cdot 10^6} = 500$ m²/g.` },
            { body: 'Check: within the typical 300–1200 m²/g, and 4 nm is a mesopore. [Week 7, p. 6, 14]' },
          ]}
          result="S = 500 m²/g"
          cite={`[${W7}, p. 11–12]`}
        />
        <FadedExample
          title="Capacity and selectivity from two Langmuir isotherms (N₂/O₂)"
          given={String.raw`$q_{N_2} = \dfrac{100\,p_{N_2}}{1 + 2p_{N_2}}$ and $q_{O_2} = \dfrac{250\,p_{O_2}}{1 + 10p_{O_2}}$, with q in mol/kg.`}
          steps={[
            { body: String.raw`Compare with $q = \dfrac{q_{max}Kp}{1 + Kp}$.` },
            { title: 'Equilibrium constants.', body: String.raw`$K_{N_2} = 2$ and $K_{O_2} = 10$.`, hidden: true },
            { title: 'Capacities.', body: String.raw`$q_{max,N_2} = 100/2 = 50$ mol/kg and $q_{max,O_2} = 250/10 = 25$ mol/kg.`, hidden: true },
            { title: 'Selectivity of N₂ over O₂.', body: '$S = 2/10 = 0.2$.', hidden: true },
            { title: 'Interpret.', body: 'The adsorbent holds **more** N₂ at saturation (capacity) but **prefers** O₂ (selectivity < 1).', hidden: true },
          ]}
          cite={`[${PX}, Ex. 5a] (also used on page 01)`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Capacity ≠ selectivity" cite={`[${W7}, p. 6; ${PX}, Ex. 5a]`}>{String.raw`Capacity is $q_{max}$ (binding sites per kg). Selectivity uses only the K values.`}</Trap>
        <Trap title="Units in S" cite={`[${W7}, p. 12]`}>Density must be in g/m³ (× 10⁶ from g/cm³) and d in m (× 10⁻⁹ from nm). Then S comes out in m²/g.</Trap>
        <Trap title="d is the pore diameter, not the particle diameter" cite={`[${W7}, p. 10–11]`} />
        <Trap title="Small pores give more area but slower transport" cite={`[${W7}, p. 14]`}>Micropores have high area and limited transport volume, macropores the opposite.</Trap>
        <Trap title="Hydrophobic vs hydrophilic" cite={`[${W7}, p. 13, 15]`}>Activated carbon is hydrophobic. Silica, alumina and zeolites are hydrophilic, so they are used for water removal.</Trap>
        <Trap title="Regeneration direction" cite={`[${W7}, p. 3, 5]`}>Adsorption is exothermic, so raising T (or lowering p/c) desorbs.</Trap>
        <Trap title="Slide wording (source discrepancy)" cite={`[${W7}, p. 4]`}>
          {'Week 7, p. 4 calls physisorption "intramolecular" and chemisorption "intermolecular". The physical content (weak VdW/electrostatic vs strong ionic/covalent bonds) is what matters. It also writes "absorption of hydrogen on activated carbon" where adsorption is meant. (Confirmed in the PDF.)'}
        </Trap>
      </Section>
    </>
  )
}
