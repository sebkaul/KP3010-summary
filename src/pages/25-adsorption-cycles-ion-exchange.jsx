import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, Trap, Gap, Columns, Diagram, Svg, Box, Arrow, Label,
  Mermaid, M, V, T, tone,
} from '../components'

const W7 = 'Week 7 - Adsorption and ion-exchange with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E7E = 'exercise_07_eng.pdf'

export const meta = {
  title: 'Adsorption cycles (TSA, PSA, purge) and ion exchange',
  topic: 'adsorption',
  examWeight: { level: 'low', note: 'Not asked on either practice exam; ion-exchange capacity in exercise 7 Problem 3' },
  examTasks: ['None on either practice exam.'],
  buildsOn: ['22-adsorbents-properties', '23-adsorption-isotherms', '24-fixed-bed-adsorption'],
  usedIn: [],
  sources: [`[${W7}, p. 5, 36–42]`, `[${FS}, p. 7, eq. 73]`, `[${E7E}, Problem 3 and short answers]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'You need to remove ppm-level water from a gas. Bulk separation or purification, and which cycle fits?', a: 'Purification (less than 10 % adsorbed). Thermal swing adsorption is typical, e.g. drying of gases. [Week 7, p. 36–37]' },
    { id: 'p2', kind: 'pretest', q: 'Why are PSA cycles faster than TSA cycles?', a: 'Pressure changes are quick, while heating and cooling a packed bed takes time. [Week 7, p. 37–38]' },
    { id: 'p3', kind: 'pretest', q: '$K_{AB} > 1$ for an ion exchanger. Which ion does the resin prefer?', a: 'B. [Week 7, p. 42]' },
    { id: 't1', q: 'Give one application each for TSA and PSA.', a: 'TSA: drying gases, or pollutant removal with activated carbon. PSA: CO₂ removal from hydrogen or methane, or air separation for oxygen. [Week 7, p. 37–38]' },
    { id: 't2', q: 'Name the three ways to change the adsorbate loading for regeneration.', a: 'Change the temperature, change the (partial) pressure or concentration, or introduce a competitive adsorbate. [Week 7, p. 36]' },
    { id: 't3', q: 'What are the two steps of water demineralisation, and what do they remove?', a: 'A cation-exchange resin removes Ca²⁺, Na⁺ etc. An anion-exchange resin removes Cl⁻, SO₄²⁻ etc. [Week 7, p. 40]' },
    { id: 't4', q: 'Which functional groups are typical on synthetic ion-exchange resins?', a: 'Sulfonic acid groups and quaternary ammonium groups. [Week 7, p. 41]' },
    { id: 't5', q: '$K_{AB} = 0.4$. Which ion accumulates on the resin?', a: 'A. [Week 7, p. 42]' },
  ],
  equations: [
    {
      id: 'kab',
      label: 'Ion-exchange equilibrium',
      tex: String.raw`\vc{K_{AB}} = \frac{\vb{q_{B,res}}\,\va{m_{A,liq}}}{\va{q_{A,res}}\,\vb{m_{B,liq}}}`,
      vars: [
        { sym: String.raw`\vc{K_{AB}}`, desc: 'ion-exchange equilibrium constant', unit: '–' },
        { sym: String.raw`\va{q_{A,res}}, \vb{q_{B,res}}`, desc: 'concentration of ions A and B on the resin', unit: String.raw`\mathrm{eq/kg}\ (\text{or mol/kg})` },
        { sym: String.raw`\va{m_{A,liq}}, \vb{m_{B,liq}}`, desc: 'concentration of A and B in the liquid', unit: String.raw`\mathrm{mol/kg}\ (\text{or mol/m}^3)` },
      ],
      note: '$K_{AB} > 1$ means B is preferred, $K_{AB} < 1$ means A is preferred.',
      cite: `[${W7}, p. 42; ${FS}, p. 7, eq. 73]`,
      check: { status: 'mismatch', note: 'Matches W7 p. 42 (product of two ratios). The formula sheet eq. 73 (on PDF p. 8, checked on the page image) prints it as $K_A^B = \\frac{q_{B,resin}}{q_{A,resin}} = \\frac{m_{A,liquid}}{m_{B,liquid}}$ — an equals sign between the two ratios where the slide multiplies them, and a different subscript layout.' },
    },
    {
      id: 'cap',
      label: 'Resin exchange capacity (one functional group per benzene ring)',
      tex: String.raw`\text{capacity} = \frac{\text{mol rings per kg copolymer}}{\text{kg resin after functionalisation per kg copolymer}} = \frac{\vd{n_{rings}}}{1 + \vd{n_{rings}}M_{group}}`,
      vars: [
        { sym: String.raw`\vd{n_{rings}}`, desc: 'moles of benzene rings per kg copolymer', unit: String.raw`\mathrm{mol/kg}` },
        { sym: String.raw`M_{group}`, desc: 'molar mass added per functional group', unit: String.raw`\mathrm{kg/mol}` },
        { sym: String.raw`\text{capacity}`, desc: 'exchangeable equivalents per kg final resin', unit: String.raw`\mathrm{eq/kg}` },
      ],
      note: 'Set up from exercise 7 Problem 3, which states the result (5.33 eq/kg).',
      cite: `[${E7E}, Problem 3 and short answer]`,
      check: { status: 'verified', note: 'Reproduces the task sheet\'s short answer 5.33 eq/kg (9.38/1.76).' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

const CYCLE = `flowchart LR
  Q{Fraction adsorbed?}
  Q -- "≥ 10 % (bulk)" --> P[PSA or purge swing]
  Q -- "< 10 % (purification)" --> T[TSA]
  L["three levers: T · p/c · competitive adsorbate"]`

// ---- Visual 2: TSA vs PSA on the isotherm (schematic) ------------------------------
function TsaPsa() {
  const x0 = 60
  const y0 = 20
  const w = 340
  const h = 230
  const X = (p) => x0 + p * w
  const Y = (q) => y0 + h - q * h
  const iso = (b) => (p) => (0.95 * b * p) / (1 + b * p)
  const ps = Array.from({ length: 60 }, (_, i) => i / 59)
  const lo = iso(12)
  const hi = iso(2)
  return (
    <Svg w={460} h={300} label="Langmuir curves at low and high temperature; TSA drops vertically, PSA moves along the curve">
      <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      <Label x={x0 + w} y={y0 + h + 20} anchor="end" size={12}>p (or c)</Label>
      <Label x={x0 + 6} y={y0 - 4} anchor="start" size={12}>q</Label>
      <polyline points={ps.map((p) => `${X(p)},${Y(lo(p))}`).join(' ')} style={st('var-d')} />
      <polyline points={ps.map((p) => `${X(p)},${Y(hi(p))}`).join(' ')} style={st('var-e')} />
      <Label x={X(0.98)} y={Y(lo(0.98)) - 8} anchor="end" size={12} t="var-d">T_low</Label>
      <Label x={X(0.98)} y={Y(hi(0.98)) + 18} anchor="end" size={12} t="var-e">T_high</Label>
      <Arrow x1={X(0.7)} y1={Y(lo(0.7))} x2={X(0.7)} y2={Y(hi(0.7)) - 4} t="trap" />
      <Label x={X(0.7) + 8} y={Y((lo(0.7) + hi(0.7)) / 2)} anchor="start" size={11} t="trap">TSA: heat → desorb (slow)</Label>
      <path d={ps.filter((p) => p <= 0.7 && p >= 0.04).reverse().map((p, i) => `${i ? 'L' : 'M'}${X(p)},${Y(lo(p)) + 10}`).join(' ')} style={st('intuition', false, 2)} />
      <polygon points={`${X(0.04)},${Y(lo(0.04)) + 10} ${X(0.04) + 4},${Y(lo(0.04)) + 22} ${X(0.04) + 10},${Y(lo(0.04)) + 8}`} style={{ fill: tone('intuition') }} />
      <Label x={X(0.2)} y={Y(lo(0.2)) + 34} anchor="start" size={11} t="intuition">PSA: depressurise → desorb (fast)</Label>
    </Svg>
  )
}

// ---- Visual 3: two-bed operation --------------------------------------------------------
function TwoBeds() {
  return (
    <Svg w={560} h={240} label="Bed 1 adsorbing while bed 2 regenerates; valves switch each half-cycle">
      <rect x={140} y={40} width={80} height={150} rx={12} style={{ ...shade('var-a', 18), stroke: tone('var-a'), strokeWidth: 2 }} />
      <Label x={180} y={118} size={12}>bed 1</Label>
      <Label x={180} y={134} size={10} t="var-a">adsorbing</Label>
      <rect x={340} y={40} width={80} height={150} rx={12} style={{ ...shade('trap', 12), stroke: tone('trap'), strokeWidth: 2 }} />
      <Label x={380} y={118} size={12}>bed 2</Label>
      <Label x={380} y={134} size={10} t="trap">regenerating</Label>
      <Arrow x1={20} y1={210} x2={180} y2={210} t="var-a" />
      <Arrow x1={180} y1={210} x2={180} y2={192} t="var-a" />
      <Label x={20} y={200} anchor="start" size={12} t="var-a">feed</Label>
      <Arrow x1={180} y1={40} x2={180} y2={14} t="intuition" />
      <Label x={190} y={20} anchor="start" size={12} t="intuition">clean product</Label>
      <Arrow x1={380} y1={14} x2={380} y2={38} t="var-e" />
      <Label x={390} y={20} anchor="start" size={11} t="var-e">heat / depressurise / purge</Label>
      <Arrow x1={380} y1={192} x2={380} y2={226} t="trap" />
      <Label x={390} y={222} anchor="start" size={11} t="trap">desorbed stream</Label>
      <Label x={280} y={118} size={11} t="muted">⇄ valves switch</Label>
      <Label x={280} y={134} size={11} t="muted">each half-cycle</Label>
    </Svg>
  )
}

// ---- Visual 4: demineralisation --------------------------------------------------------
function Demin() {
  return (
    <Svg w={600} h={150} label="Raw water through a cation-exchange column then an anion-exchange column">
      <Arrow x1={10} y1={75} x2={118} y2={75} t="var-b" />
      <Label x={10} y={65} anchor="start" size={12} t="var-b">raw water</Label>
      <Box x={120} y={40} w={140} h={70} label="cation exchange" sub="removes Ca²⁺, Na⁺" t="var-a" />
      <Arrow x1={260} y1={75} x2={318} y2={75} t="var-b" />
      <Box x={320} y={40} w={140} h={70} label="anion exchange" sub="removes Cl⁻, SO₄²⁻" t="var-e" />
      <Arrow x1={460} y1={75} x2={590} y2={75} t="var-b" />
      <Label x={590} y={65} anchor="end" size={12} t="var-b">demineralised</Label>
    </Svg>
  )
}

// ---- Visual 5: polymer resin (schematic) -------------------------------------------------
function Resin() {
  const ring = (x, y, k) => (
    <g key={k}>
      <polygon points={Array.from({ length: 6 }, (_, i) => `${x + 14 * Math.cos((Math.PI / 3) * i + Math.PI / 6)},${y + 14 * Math.sin((Math.PI / 3) * i + Math.PI / 6)}`).join(' ')} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 1.5 }} />
      <line x1={x} y1={y + 14} x2={x} y2={y + 28} style={st('ink', false, 1.2)} />
      <text x={x} y={y + 40} textAnchor="middle" className="svg-sub" style={{ fill: tone('var-a') }}>SO₃H</text>
    </g>
  )
  return (
    <Svg w={560} h={240} label="Polystyrene chains cross-linked by divinylbenzene with sulfonic acid groups on the rings">
      <polyline points="20,40 540,40" style={st('ink', false, 2)} />
      <polyline points="20,170 540,170" style={st('ink', false, 2)} />
      {[70, 170, 270, 370, 470].map((x, i) => (
        <g key={x}>
          <line x1={x} y1={40} x2={x} y2={56} style={st('ink', false, 1.2)} />
          {ring(x, 70, `a${i}`)}
          <line x1={x + 40} y1={170} x2={x + 40} y2={154} style={st('ink', false, 1.2)} />
          {i % 2 ? null : ring(x + 40, 140, `b${i}`)}
        </g>
      ))}
      {[220, 420].map((x) => (
        <g key={x}>
          <line x1={x} y1={40} x2={x} y2={170} style={st('var-c', false, 3)} />
          <Label x={x + 6} y={125} anchor="start" size={10} t="var-c">DVB</Label>
        </g>
      ))}
      <Label x={10} y={28} anchor="start" size={11} t="muted">polystyrene chain</Label>
      <Label x={280} y={222} size={11} t="muted">cation resin: −SO₃H · anion resins: quaternary ammonium groups</Label>
    </Svg>
  )
}

// ---- Interactive ----------------------------------------------------------------------------
function CapExplorer() {
  const [w, setW] = useState(0.88)
  const n = w / 0.104 + (1 - w) / 0.1302
  const cap = n / (1 + n * 0.0811)
  const x0 = 64
  const y0 = 20
  const pw = 360
  const h = 200
  const ws = Array.from({ length: 50 }, (_, i) => 0.5 + (i / 49) * 0.5)
  const c = (ww) => {
    const nn = ww / 0.104 + (1 - ww) / 0.1302
    return nn / (1 + nn * 0.0811)
  }
  const X = (v) => x0 + ((v - 0.5) / 0.5) * pw
  const Y = (v) => y0 + h - ((v - 5) / 0.6) * h
  return (
    <Diagram
      title="Maximum resin capacity vs styrene fraction"
      caption={String.raw`One SO₃H per benzene ring: $\text{cap} = \frac{n_{rings}}{1 + n_{rings}\cdot 0.0811}$, $n_{rings} = \frac{w_{sty}}{0.104} + \frac{1-w_{sty}}{0.1302}$ per kg copolymer [exercise_07_eng.pdf, Problem 3]. At 0.88: 5.33 eq/kg.`}
      cite={`[${E7E}, Problem 3]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param">styrene weight fraction = <strong>{w.toFixed(2)}</strong></span>
            <input type="range" min={0.5} max={1} step={0.005} value={w} onChange={(e) => setW(Number(e.target.value))} />
          </label>
        </div>
        <p><V c="d"><M>{String.raw`n_{rings}`}</M> = {n.toFixed(2)}</V> mol/kg copolymer · capacity = <strong>{cap.toFixed(2)}</strong> eq/kg resin</p>
        <Svg w={460} h={270} label="Capacity against styrene weight fraction">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + pw + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {[0.5, 0.6, 0.7, 0.8, 0.9, 1].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
          {[5.0, 5.2, 5.4, 5.6].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v.toFixed(1)}</text>)}
          <Label x={x0 + pw} y={y0 + h + 34} anchor="end" size={12}>styrene weight fraction</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={12}>capacity (eq/kg)</Label>
          <polyline points={ws.map((v) => `${X(v)},${Y(c(v))}`).join(' ')} style={st('var-d')} />
          <circle cx={X(w)} cy={Y(cap)} r={6} style={{ fill: tone('var-d') }} />
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Empty the bed by tipping the equilibrium">
        <MentalModel cite={`[${W7}, p. 36–42; ${E7E}, Problem 3]`}>
          <T text="A saturated bed has to be emptied again. You do that by tipping the equilibrium away from the solid, in one of three ways: heat it, drop the (partial) pressure or concentration, or flush it with something that competes for the sites [Week 7, p. 36]. The choice follows from how much you're adsorbing. Bulk separations (≥ 10 % of the stream) need quick cycles, so pressure swing fits. Purification (< 10 %) tolerates the slow heat-up and cool-down of a thermal swing [Week 7, p. 36–38]. Purge cycles flush with an inert or with a competing adsorbate [Week 7, p. 39]." />
          <p>
            Ion exchange is a special, chemisorption-type case. The resin holds charged groups, and an ion from the liquid swaps with an
            ion of the same charge on the resin. The equilibrium is a ratio of ratios, <V c="c"><M>{String.raw`K_{AB}`}</M></V>, that says
            which ion the resin prefers [Week 7, p. 40, 42]. Capacity is simply how many exchange groups fit on a kg of resin
            [exercise_07_eng.pdf, Problem 3].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Regeneration cycles and ion exchange">
        <Columns>
          <Mermaid title="Choosing a regeneration cycle" chart={CYCLE} cite={`[${W7}, p. 36–39]`} caption="Bulk (≥ 10 %) vs purification (< 10 %)." />
          <div>
            <Def term="Bulk separation" cite={`[${W7}, p. 36]`}>10 % or more of the stream is adsorbed, e.g. air separation.</Def>
            <Def term="Purification" cite={`[${W7}, p. 36]`}>Less than 10 % of the stream is adsorbed, e.g. water treatment.</Def>
            <Def term="Ways to change the adsorbate loading" cite={`[${W7}, p. 36]`}>Change the temperature; change the (partial) pressure or concentration; introduce a competitive adsorbate.</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="TSA vs PSA on the isotherm (schematic)" cite={`[${W7}, p. 37–38]`} caption="Built from the slide text: TSA drops to the hotter isotherm at constant p; PSA follows the isotherm to lower p.">
            <TsaPsa />
          </Diagram>
          <div>
            <Def term="Thermal swing adsorption (TSA)" cite={`[${W7}, p. 37]`}>
              Desorption at higher temperature, with a continuous feed used as stripping gas. Heating and cooling the bed takes time, so the total cycle time is long. Mostly used for purification and impurity removal at small adsorbate concentrations. Applications: drying gases (H₂O removal), pollutant removal with activated carbon.
            </Def>
            <Def term="Pressure swing adsorption (PSA)" cite={`[${W7}, p. 38]`}>
              Desorption at lower pressure along the adsorption/desorption isotherm. Pressure and concentration changes are quick, so it is used for bulk separations, with no thermal degradation. Applications: CO₂ removal from hydrogen and hydrocarbons (methane), air separation to obtain oxygen.
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Two-bed continuous operation" cite={`[${W7}, p. 5, 36–38]`} caption="One bed adsorbs while the other regenerates.">
            <TwoBeds />
          </Diagram>
          <Def term="Purge swing adsorption" cite={`[${W7}, p. 39]`}>
            A purge stream is used for desorption, for bulk separations. Inert purge: a non-adsorbing gas or liquid, and the adsorbed compound concentration is low. Displacement purge: an adsorbing gas or liquid, desorbing by competitive adsorption.
          </Def>
        </Columns>

        <Diagram title="Two-step demineralisation" cite={`[${W7}, p. 40]`} caption="Cations first, then anions.">
          <Demin />
        </Diagram>
        <Columns>
          <div>
            <Def term="Ion exchange" cite={`[${W7}, p. 40]`}>
              A chemisorption process with an ion complex reaction. Ions of the same charge are replaced on the exchange resin. Common uses: water softening and demineralisation.
            </Def>
            <Def term="Two-step demineralisation" cite={`[${W7}, p. 40]`}>
              (1) Cation-exchange resins remove Ca²⁺, Na⁺ etc., (2) anion-exchange resins remove Cl⁻, SO₄²⁻ etc.
            </Def>
          </div>
          <div>
            <Def term="Ion-exchange resins" cite={`[${W7}, p. 41]`}>
              Natural zeolites (inorganic aluminosilicates) or, most widely used, synthetic organic polymer resins. These are 3D copolymer networks based on styrene or acrylic-acid-type monomers cross-linked with divinylbenzene, carrying sulfonic acid or quaternary ammonium groups.
            </Def>
            <Def term="Ion-exchange equilibrium" cite={`[${W7}, p. 42]`}>
              {String.raw`Different from adsorption because an ion is exchanged. Depends on the functional group and polymer structure. $K_{AB} > 1$ means B is preferred, $K_{AB} < 1$ means A is preferred.`}
            </Def>
          </div>
        </Columns>
        <Diagram title="Polymer resin (schematic)" cite={`[${W7}, p. 41]`} caption="Polystyrene chains cross-linked by DVB bridges with −SO₃H groups on the benzene rings.">
          <Resin />
        </Diagram>
        <Gap>The TSA/PSA isotherm figures (Week 7, p. 37–38) and the resin structure image (p. 41) are images. The visuals are schematic, built from the slide text.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="kab" />
        <Eq id="cap" />
        <CapExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Maximum ion-exchange capacity of a sulfonated styrene–DVB resin"
          given="88 wt % styrene (M = 0.104 kg/mol), 12 wt % divinylbenzene (M = 0.1302 kg/mol). One sulfonic acid group (M = 0.0811 kg/mol) on each benzene ring."
          steps={[
            { body: 'Basis: 1 kg copolymer.' },
            { body: String.raw`Styrene: $0.88/0.104 = 8.46$ mol. Each has one benzene ring.` },
            { body: String.raw`DVB: $0.12/0.1302 = 0.92$ mol. Each has one benzene ring.` },
            { body: String.raw`Rings, which equal the sulfonic acid groups: $8.46 + 0.92 = 9.38$ mol.` },
            { body: String.raw`Resin mass after sulfonation: $1 + 9.38\cdot 0.0811 = 1.76$ kg.` },
            { body: String.raw`Capacity: $9.38/1.76 = 5.33$ equivalents/kg resin, matching the given answer.` },
          ]}
          result="5.33 eq/kg resin"
          cite={`[${E7E}, Problem 3 and short answer]`}
        />
        <Gap>No second numerical example on adsorption cycles or ion exchange in the files. The exercise 7 official solutions are blank, and neither practice exam covers this subtopic.</Gap>
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="The 10 % rule" cite={`[${W7}, p. 36]`}>Bulk is ≥ 10 % adsorbed, purification &lt; 10 %. That decides PSA/purge vs TSA.</Trap>
        <Trap title="TSA is slow, PSA is fast" cite={`[${W7}, p. 37–38]`}>{"TSA's long cycle comes from heating and cooling the bed. PSA avoids thermal degradation."}</Trap>
        <Trap title="Inert vs displacement purge" cite={`[${W7}, p. 39]`}>Inert means a non-adsorbing purge. Displacement means an adsorbing purge that competes for sites.</Trap>
        <Trap title={String.raw`Read $K_{AB}$ subscripts carefully`} cite={`[${W7}, p. 42]`}>
          {String.raw`$K_{AB} = (q_B m_A)/(q_A m_B)$, so $K_{AB} > 1$ favours **B**, not A.`}
        </Trap>
        <Trap title="Same charge only" cite={`[${W7}, p. 40]`}>Cations exchange with cations and anions with anions. Full demineralisation needs both resin types in series.</Trap>
        <Trap title="Capacity per kg of final resin" cite={`[${E7E}, Problem 3]`}>Include the added mass of the functional groups in the denominator.</Trap>
        <Trap title="Ion exchange is chemisorption" cite={`[${W7}, p. 40]`}>It involves an ion complex reaction, not just physisorption.</Trap>
      </Section>
    </>
  )
}
