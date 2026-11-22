import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Box, Arrow, Label, Curve,
  Mermaid, M, V, T, tone,
} from '../components'

const W6 = 'Week 6 - Liquid-liquid extraction with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E6 = 'exercise_06_solutions.pdf'
const E6E = 'exercise_06_eng.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Liquid–liquid extraction — principles, solvent selection and equipment',
  topic: 'extraction',
  examWeight: {
    level: 'medium',
    note: "'Is X a good solvent? Use the diagram' on 1 of 2 practice exams (Autumn 2022 Q4a, 2 pts); definitions underpin every Q4",
  },
  examTasks: ['Autumn 2022, Q4a: is benzene a good solvent for acetone/water? Explain from the ternary diagram (tie lines steep, phases mostly immiscible).'],
  buildsOn: ['01-separation-basics-k-selectivity', '03-vle-diagrams-azeotropes'],
  usedIn: ['19-ternary-diagrams', '20-extraction-stage-schemes', '21-counter-current-extraction-design'],
  sources: [`[${W6}, p. 2–11, 23–26]`, `[${FS}, p. 5–6, eq. 52–55]`, `[${E6E}, Problem 1–2]`, `[${E6}, P2a, P2d]`, `[${PX2}, Q4a]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Name two situations where extraction is preferred over distillation.', a: 'Any two of: low relative volatility or azeotropes, heat-sensitive components, small concentrations of product or impurity. [Week 6, p. 5]' },
    { id: 'p2', kind: 'pretest', q: 'What leaves the extractor as the "extract", and what as the "raffinate"?', a: 'Extract: the solvent with the extracted product. Raffinate: the carrier with the leftover product. [Week 6, p. 4]' },
    { id: 'p3', kind: 'pretest', q: 'Looking at a ternary diagram, what two features tell you a solvent is good?', a: 'Steep tie lines (the solute strongly prefers the solvent phase) and a large miscibility gap (carrier and solvent nearly immiscible). [exercise_06_solutions.pdf, P2a; practice exam 2 solutions.pdf, Q4a]' },
    { id: 't1', q: 'List four solvent-selection criteria.', a: 'Any four of: high distribution coefficient, high selectivity, sufficient volatility difference from the solute, low viscosity, stability, cost, toxicity/environmental impact. [Week 6, p. 8]' },
    { id: 't2', q: 'Phenol has $K_D = 0.2$ (heptane/water) and you use S/F = 1. What is E for a single stage, and what fraction of the phenol stays in the raffinate?', a: '$E = 0.2$, so $x_R/x_F = 1/(1 + 0.2) = 0.83$. 83 % stays in the water. [exercise_06_eng.pdf, Problem 1; FormelarkKP3010.pdf, p. 6, eq. 54–55]' },
    { id: 't3', q: 'Two solutes have $K_1 = 4$ and $K_2 = 0.5$ in the same solvent. What is $\\beta_{12}$, and what is it analogous to?', a: '$\\beta_{12} = 8$, analogous to relative volatility $\\alpha_{12}$. [Week 6, p. 7]' },
    { id: 't4', q: 'Which extractor would you pick for a product that degrades quickly, and what is the downside?', a: 'A centrifugal extractor (short contact time). It is complex, with moving parts and high capital and operating costs. [Week 6, p. 26]' },
    { id: 't5', q: 'Why do unagitated columns need to prevent back-mixing?', a: 'They are multistage counter-current devices that rely on good phase contacting. Back-mixing would undo the staging. They have lower efficiency than agitated columns. [Week 6, p. 25]' },
  ],
  equations: [
    {
      id: 'K',
      label: 'Distribution coefficient',
      tex: String.raw`\vc{K_i} = \frac{\vb{x_{i,E}}}{\va{x_{i,R}}}`,
      vars: [
        { sym: String.raw`\vc{K_i}`, desc: 'distribution coefficient of solute i', unit: '–' },
        { sym: String.raw`\vb{x_{i,E}}`, desc: 'fraction of i in the extract phase', unit: String.raw`\text{– (mole or weight fraction, check the task)}` },
        { sym: String.raw`\va{x_{i,R}}`, desc: 'fraction of i in the raffinate phase', unit: '–' },
      ],
      cite: `[${W6}, p. 7; ${FS}, p. 5, eq. 52]`,
      check: { status: 'verified', note: 'Matches W6 p. 7 and formula sheet eq. 52.' },
    },
    {
      id: 'beta',
      label: 'Selectivity',
      tex: String.raw`\vd{\beta_{12}} = \frac{\vc{K_1}}{\vc{K_2}} = \frac{(x_1/x_2)_E}{(x_1/x_2)_R}`,
      vars: [{ sym: String.raw`\vd{\beta_{12}}`, desc: 'selectivity of solute 1 over 2', unit: '–' }],
      note: 'Analogous to $\\alpha_{12}$ in distillation. The second form follows from inserting the definition of K.',
      cite: `[${W6}, p. 7; ${FS}, p. 5, eq. 53]`,
      check: { status: 'mismatch', note: 'First form $K_1/K_2$ matches W6 p. 7 and formula sheet eq. 53. The second form differs: the slide (checked on the PDF image) writes $\\frac{(x_1/x_2)_R}{(x_1/x_2)_E}$ — raffinate over extract. The content\'s extract-over-raffinate form is what $K = x_E/x_R$ implies, so the slide\'s version looks inverted. Shown as in the content file.' },
    },
    {
      id: 'E',
      label: 'Extraction factor',
      tex: String.raw`\vf{E} = \frac{\text{amount of solute in extract phase}}{\text{amount of solute in raffinate phase}} = \vc{K}\,\frac{\text{extract flow}}{\text{raffinate flow}} \approx \frac{\vc{K}\ve{S}}{F}`,
      vars: [
        { sym: String.raw`\vf{E}`, desc: 'extraction factor', unit: '–' },
        { sym: String.raw`\ve{S}`, desc: 'solvent flow (or amount)', unit: String.raw`\mathrm{kg/h}\text{ or kg}` },
        { sym: String.raw`F`, desc: 'feed (carrier) flow (or amount)', unit: String.raw`\mathrm{kg/h}\text{ or kg}` },
      ],
      note: 'The $KS/F$ form treats the extract flow as ≈ solvent and the raffinate flow as ≈ feed carrier (immiscible, dilute).',
      cite: `[${W6}, p. 7; ${FS}, p. 6, eq. 54]`,
      check: { status: 'verified', note: 'Matches W6 p. 7 and formula sheet eq. 54.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

// ---- Visual 1: mix, then settle ----------------------------------------------------
function MixSettle() {
  return (
    <Svg w={600} h={250} label="Feed and solvent enter a mixer, then a settler separates extract and raffinate layers">
      <Arrow x1={10} y1={80} x2={108} y2={80} t="var-a" />
      <Label x={10} y={56} anchor="start" size={12} t="var-a">feed</Label>
      <Label x={10} y={70} anchor="start" size={11} t="var-a">(carrier + solute)</Label>
      <Arrow x1={10} y1={150} x2={108} y2={150} t="var-e" />
      <Label x={10} y={170} anchor="start" size={12} t="var-e">solvent</Label>
      <rect x={110} y={50} width={130} height={140} rx={10} style={{ ...shade('topic', 10), stroke: tone('topic'), strokeWidth: 2 }} />
      <line x1={175} y1={40} x2={175} y2={130} style={st('ink', false, 2)} />
      <path d="M150,130 l25,-8 l25,8 l-25,8 z" style={{ fill: tone('ink') }} />
      {Array.from({ length: 14 }, (_, i) => <circle key={i} cx={125 + (i * 37) % 100} cy={150 + (i * 13) % 30} r={4} style={shade(i % 2 ? 'var-a' : 'var-e', 60)} />)}
      <Label x={175} y={210} size={12}>mixer: large interface</Label>
      <Arrow x1={240} y1={120} x2={310} y2={120} />
      <rect x={310} y={50} width={160} height={140} rx={10} style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2 }} />
      <rect x={312} y={52} width={156} height={66} style={shade('var-b', 30)} />
      <rect x={312} y={120} width={156} height={68} style={shade('var-d', 30)} />
      <line x1={310} y1={119} x2={470} y2={119} style={st('ink', true, 1.5)} />
      <Label x={390} y={210} size={12}>settler</Label>
      <Arrow x1={470} y1={80} x2={590} y2={80} t="var-b" />
      <Label x={590} y={70} anchor="end" size={12} t="var-b">extract (solvent + solute)</Label>
      <Arrow x1={470} y1={160} x2={590} y2={160} t="var-d" />
      <Label x={590} y={180} anchor="end" size={12} t="var-d">raffinate (carrier + leftover)</Label>
      <Label x={390} y={238} size={11} t="muted">which layer is on top depends on density</Label>
    </Svg>
  )
}

// ---- Visual 2: recovery loop -----------------------------------------------------------
function Recovery() {
  return (
    <Svg w={560} h={250} label="Extractor sends extract to a distillation column; recovered solvent is recycled">
      <Box x={60} y={70} w={120} h={80} label="extractor" t="topic" />
      <Arrow x1={0} y1={90} x2={58} y2={90} t="var-a" />
      <Label x={4} y={80} anchor="start" size={11} t="var-a">feed</Label>
      <Arrow x1={160} y1={150} x2={160} y2={190} t="var-d" />
      <Label x={168} y={186} anchor="start" size={12} t="var-d">raffinate</Label>
      <Arrow x1={180} y1={90} x2={320} y2={90} t="var-b" />
      <Label x={250} y={80} size={12} t="var-b">extract</Label>
      <rect x={320} y={30} width={70} height={160} rx={12} style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2 }} />
      <Label x={355} y={110} size={11}>distil-</Label>
      <Label x={355} y={124} size={11}>lation</Label>
      <Arrow x1={390} y1={60} x2={540} y2={60} t="var-f" />
      <Label x={540} y={50} anchor="end" size={12} t="var-f">solute product</Label>
      <path d="M355,190 V232 H30 V130 H58" style={{ fill: 'none', stroke: tone('var-e'), strokeWidth: 2 }} />
      <Arrow x1={40} y1={130} x2={58} y2={130} t="var-e" />
      <Label x={250} y={226} size={12} t="var-e">recovered solvent (recycle)</Label>
    </Svg>
  )
}

const WHEN = `flowchart TD
  Q{Can distillation do it?}
  Q -- yes --> D[distil]
  Q -- no --> R["low α or azeotrope<br/>heat-sensitive product<br/>very dilute product"]
  R --> L[consider liquid–liquid extraction]`

// ---- Visual 4: good vs poor solvent ternaries (schematic) --------------------------------
function GoodPoor() {
  const tri = (ox, label, wide, steep) => {
    const A = [ox + 100, 20]
    const B = [ox, 193]
    const C = [ox + 200, 193]
    // binodal: from near B to near C along the base, peaking at a plait point
    const peak = wide ? 70 : 140
    const left = wide ? 6 : 50
    const right = wide ? 194 : 150
    const pts = [[ox + left, 190], [ox + left + 15, wide ? 120 : 165], [ox + 100, peak], [ox + right - 15, wide ? 120 : 165], [ox + right, 190]]
    const ties = wide
      ? (steep ? [[[ox + 22, 168], [ox + 175, 110]], [[ox + 35, 140], [ox + 160, 95]]] : [[[ox + 22, 168], [ox + 178, 160]], [[ox + 35, 140], [ox + 165, 135]]])
      : (steep ? [[[ox + 60, 170], [ox + 140, 160]]] : [[[ox + 62, 175], [ox + 138, 173]], [[ox + 75, 160], [ox + 125, 158]]])
    return (
      <g>
        <polygon points={[A, B, C].map((p) => p.join(',')).join(' ')} style={st('ink', false, 1.5)} />
        <Curve points={pts} t="var-c" />
        {ties.map(([p, q], i) => <line key={i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} style={st('example', false, 1.8)} />)}
        <Label x={ox + 100} y={14} size={11}>solute</Label>
        <Label x={ox} y={210} anchor="start" size={11}>carrier</Label>
        <Label x={ox + 200} y={210} anchor="end" size={11}>solvent</Label>
        <Label x={ox + 100} y={232} size={13} t={label === 'good' ? 'intuition' : 'trap'}>{label}</Label>
      </g>
    )
  }
  return (
    <Svg w={560} h={300} label="Two schematic ternary diagrams: a good solvent with a wide gap and steep tie lines, a poor one with a narrow gap and flat tie lines">
      {tri(30, 'good', true, true)}
      {tri(320, 'poor', false, false)}
      <Label x={130} y={258} size={11} t="example">steep tie lines → high K</Label>
      <Label x={130} y={274} size={11} t="var-c">wide gap → nearly immiscible</Label>
      <Label x={420} y={258} size={11} t="muted">flat tie lines, narrow gap</Label>
    </Svg>
  )
}

// ---- Visual 5: equipment table -------------------------------------------------------------
function EquipTable() {
  const cols = ['', 'mixer-settler', 'agitated column', 'unagitated column', 'centrifugal']
  const rows = [
    ['stages / unit', 'single stage', 'multiple', 'multiple', 'one per stage'],
    ['efficiency', '—', 'high', 'lower than agitated', '—'],
    ['cost', 'high capital', 'high capital', 'simple, low cost', 'high capital + operating'],
    ['moving parts', '—', 'yes', '—', 'yes, complex'],
    ['key plus', 'simple, reliable, flexible, high capacity', 'high efficiency', 'simple, low cost', 'short contact time, small footprint'],
    ['key minus', 'large inventory; dispersion vs settling', 'complex', 'needs good contact, no back-mixing', 'complex, costly'],
  ]
  const cw = [100, 130, 120, 130, 130]
  const xs = cw.reduce((a, w, i) => [...a, a[i] + w], [0])
  const rh = 46
  const wrap = (s) => {
    if (s.length <= 20) return [s]
    const cut = s.lastIndexOf(' ', 20)
    return [s.slice(0, cut), s.slice(cut + 1)]
  }
  return (
    <Svg w={620} h={40 + rows.length * rh} label="Comparison of extraction equipment">
      {cols.map((c, i) => <text key={i} x={xs[i] + 4} y={24} className="svg-label" style={{ fontSize: 12 }}>{c}</text>)}
      {rows.map((r, ri) => r.map((cell, ci) => {
        const y = 32 + ri * rh
        const lines = wrap(cell)
        return (
          <g key={`${ri}-${ci}`}>
            <rect x={xs[ci]} y={y} width={cw[ci] - 4} height={rh - 4} rx={5}
              style={ci === 0 ? { fill: 'none' } : shade(ri === 4 ? 'intuition' : ri === 5 ? 'trap' : 'muted', ri >= 4 ? 16 : 8)} />
            {lines.map((l, k) => (
              <text key={k} x={xs[ci] + 5} y={y + (lines.length === 1 ? 26 : 18 + k * 15)} className={ci === 0 ? 'svg-label' : 'svg-sub'} style={ci === 0 ? { fontSize: 12 } : undefined}>{l.length > 24 ? `${l.slice(0, 23)}…` : l}</text>
            ))}
          </g>
        )
      }))}
    </Svg>
  )
}

// ---- Interactive ---------------------------------------------------------------------------
function SingleStage() {
  const [K, setK] = useState(0.2)
  const [lsf, setLsf] = useState(0)
  const SF = 10 ** lsf
  const E = K * SF
  const fr = 1 / (1 + E)
  return (
    <Diagram
      title="One stage: how the solute splits"
      caption={String.raw`$E = KS/F$ and $x_R/x_F = 1/(1+E)$ [FormelarkKP3010.pdf, p. 6, eq. 54–55]. Start K = 0.2 (phenol in heptane [exercise_06_eng.pdf, Problem 1]), S/F = 1. The preset sets S/F = 495 for K = 0.2 (99 % removal, page 20).`}
      cite={`[${FS}, p. 6, eq. 54–55; ${E6E}, Problem 1]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="c"><M>K</M></V> = <strong>{K.toFixed(2)}</strong></span>
            <input type="range" min={0.05} max={10} step={0.01} value={K} onChange={(e) => setK(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><M>S/F</M> = <strong>{SF < 10 ? SF.toFixed(2) : SF.toFixed(0)}</strong></span>
            <input type="range" min={-1} max={Math.log10(500)} step={0.005} value={lsf} onChange={(e) => setLsf(Number(e.target.value))} />
          </label>
        </div>
        <p style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <button type="button" className="reveal" onClick={() => { setK(0.2); setLsf(Math.log10(495)) }}>99 % removal (K = 0.2, S/F = 495)</button>
          <span><V c="f"><M>E</M> = {E.toFixed(2)}</V> · raffinate {(fr * 100).toFixed(1)} % · extract {((1 - fr) * 100).toFixed(1)} %</span>
        </p>
        <Svg w={560} h={90} label="Stacked bar: share of solute in raffinate and extract">
          <rect x={20} y={20} width={520 * fr} height={34} style={{ ...shade('var-d', 45), stroke: tone('var-d') }} />
          <rect x={20 + 520 * fr} y={20} width={520 * (1 - fr)} height={34} style={{ ...shade('var-b', 45), stroke: tone('var-b') }} />
          <Label x={24} y={74} anchor="start" size={12} t="var-d">raffinate 1/(1+E)</Label>
          <Label x={536} y={74} anchor="end" size={12} t="var-b">extract E/(1+E)</Label>
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="A second liquid that the solute prefers">
        <MentalModel cite={`[${W6}, p. 2–8]`}>
          <T text="Add a second liquid that doesn't mix with the first, and you get two phases. A solute that dissolves much better in the new liquid (the solvent) moves over to it [Week 6, p. 2]. So the process is: mix hard to make a large interface, then let the phases settle and separate [Week 6, p. 2]. You get an extract (solvent + solute) and a raffinate (carrier + what's left) [Week 6, p. 4]." />
          <p>
            Use it when distillation struggles: close boiling points or azeotropes, heat-sensitive products, very dilute solutes
            [Week 6, p. 5]. But you&apos;ve added a chemical, so you now have to recover the solvent, usually by distillation. That costs
            money, which is why solvent choice matters so much [Week 6, p. 6, 8]. The key numbers are the{' '}
            <V c="c">distribution coefficient K</V> (how much the solute prefers the solvent), the <V c="d">selectivity β</V> (how
            differently two solutes behave, like α in distillation) and the <V c="f">extraction factor E</V> (K scaled by the
            solvent-to-feed ratio) [Week 6, p. 7].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Principle, terms, solvent choice and equipment">
        <Diagram title="Mix, then settle" cite={`[${W6}, p. 2–4]`} caption="Mixing makes a large interface; settling separates extract and raffinate.">
          <MixSettle />
        </Diagram>
        <Columns>
          <div>
            <Def term="Principle" cite={`[${W6}, p. 2]`}>
              Adding a solvent gives a two-phase system, and solute solubility can differ a lot between the phases. Mixing creates a large interface, and settling separates the phases. Batch (lab) or continuous (industrial).
            </Def>
            <Def term="Carrier" cite={`[${W6}, p. 4]`}>The component in which the solute is present.</Def>
            <Def term="Solvent" cite={`[${W6}, p. 4]`}>Immiscible or partly immiscible with the carrier, creating two phases.</Def>
            <Def term="Solute" cite={`[${W6}, p. 4]`}>The product, with a different solubility in the two phases.</Def>
            <Def term="Extract / raffinate" cite={`[${W6}, p. 4]`}>Extract: solvent with extracted product. Raffinate: carrier with left-over product.</Def>
          </div>
          <div>
            <Mermaid title="When to choose LLE" chart={WHEN} cite={`[${W6}, p. 5]`} caption="Mostly when distillation isn't feasible." />
            <Def term="When to use LLE" cite={`[${W6}, p. 5]`}>
              {"Mostly when distillation isn't feasible (low relative volatility or azeotropes, heat-sensitive components, small concentrations of product or impurity)."}
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Extraction + solvent recovery loop" cite={`[${W6}, p. 6]`} caption="Solvent adds complexity and cost → recovery is essential.">
            <Recovery />
          </Diagram>
          <Def term="Process overview" cite={`[${W6}, p. 6]`}>
            The solvent adds complexity and cost, so solvent recovery is important. Examples: acetic acid from water with ethyl acetate, vitamin D from fish oil with liquid propane, caffeine from black tea with methylene chloride, metals from acidic leach solutions.
          </Def>
        </Columns>

        <Columns>
          <div>
            <Def term="Distribution coefficient (K)" cite={`[${W6}, p. 7; ${FS}, p. 5, eq. 52]`}>Ratio of solute mole fractions in extract and raffinate.</Def>
            <Def term={String.raw`Selectivity ($\beta_{12}$)`} cite={`[${W6}, p. 7; ${FS}, p. 5, eq. 53]`}>
              {String.raw`$K_1/K_2$. Says how easy it is to separate two solutes, analogous to relative volatility $\alpha_{12}$.`}
            </Def>
            <Def term="Extraction factor (E)" cite={`[${W6}, p. 7; ${FS}, p. 6, eq. 54]`}>
              {String.raw`Amount of solute in extract / amount in raffinate $= K\cdot$ extract flow / raffinate flow. The formula sheet writes $E = KS/F$.`}
            </Def>
            <Def term="Solvent selection criteria" cite={`[${W6}, p. 8]`}>
              High distribution coefficient; high selectivity (fewer stages); sufficient volatility difference from the solute; low viscosity for better phase separation; stability; cost; toxicity and environmental impact.
            </Def>
          </div>
          <div>
            <Diagram title="Good vs poor solvent on a ternary diagram (schematic)" cite={`[${E6}, P2a; ${PX2}, Q4a]`}
              caption="Good: wide two-phase region and steep tie lines rising toward the solvent side. Poor: narrow region, nearly flat tie lines.">
              <GoodPoor />
            </Diagram>
            <Def term="Diagram test for a good solvent" cite={`[${E6}, P2a; ${PX2}, Q4a]`}>
              Steep tie lines mean much higher solute concentration in the solvent phase. A large miscibility gap (carrier and solvent almost immiscible) means little solvent in the raffinate and little carrier in the extract.
            </Def>
          </div>
        </Columns>

        <Diagram title="Equipment comparison" cite={`[${W6}, p. 23–26]`} caption="From the slides' + and − lists; “—” means not stated.">
          <EquipTable />
        </Diagram>
        <Columns>
          <div>
            <Def term="Mixer-settler" cite={`[${W6}, p. 23]`}>+ simple, reliable, flexible, high capacity. Single stage, with a trade-off between dispersion intensity and settling time. − high capital cost, large inventory.</Def>
            <Def term="Agitated columns" cite={`[${W6}, p. 24]`}>+ high efficiency, multiple stages. − high capital cost, can be complex, moving parts.</Def>
          </div>
          <div>
            <Def term="Unagitated columns" cite={`[${W6}, p. 25]`}>+ simple and low cost, multiple stages. Need good phase contact and must prevent back-mixing. − lower efficiency than agitated columns.</Def>
            <Def term="Centrifugal extractor" cite={`[${W6}, p. 26]`}>+ short contact time, faster settling, small footprint. One device per stage. − complex, moving parts, high capital and operating cost.</Def>
          </div>
        </Columns>
        <Gap>{'The solvent-group table (Week 6, p. 9) is an image, so the example "which groups extract ethanol from water? → groups 1, 2, 7 and 8" (p. 10–11) can\'t be reproduced with its reasoning.'}</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="K" />
        <Eq id="beta" />
        <Eq id="E" />
        <SingleStage />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Is water a good solvent to wash methanol out of biodiesel?"
          given="Ternary diagram biodiesel/water/methanol (weight fractions) with tie lines."
          steps={[
            { body: 'Look at the tie lines. They rise relatively steeply toward the water side, so at equilibrium the methanol concentration is much higher in water than in biodiesel. That means a high distribution coefficient.' },
            { body: 'Look at the two-phase region. Water and biodiesel are almost completely immiscible (a large miscibility gap), so little water ends up in the biodiesel raffinate and vice versa.' },
            { body: 'Conclusion: water is a good solvent for this wash.' },
            { body: 'Solvent recovery: methanol and water differ in boiling point, so distillation can separate the methanol from the wash water. This matches the "sufficient volatility difference" criterion. [Week 6, p. 8]' },
          ]}
          result="Yes — steep tie lines and a wide miscibility gap"
          cite={`[${E6E}, Problem 2a, 2d; ${E6}, P2a, P2d]`}
        />
        <FadedExample
          title="Is benzene a good solvent for removing acetone from water?"
          given="Ternary diagram acetone/water/benzene (weight fractions). The exam asks for a judgement from the diagram (2 points)."
          steps={[
            { title: 'What do the tie lines show?', body: 'They are steep, so a higher acetone concentration is expected in benzene than in water (1 pt).', hidden: true },
            { title: 'What does the two-phase region show?', body: 'Benzene and water are mostly immiscible at low acetone concentrations (1 pt).', hidden: true },
            { title: 'Why does point 2 matter?', body: 'There is little benzene in the raffinate and little water in the extract to separate afterwards.', hidden: true },
            { title: 'Verdict.', body: 'Yes, benzene is a good solvent.', hidden: true },
          ]}
          cite={`[${PX2}, Q4a]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="The slides use two A/B/C labellings (source discrepancy)" cite={`[${W6}, p. 2, 4]`}>
          P. 2 has solvent B extracting solute A from carrier C, while p. 4 defines carrier A, solvent B, solute C. Name the components in words in your answer.
        </Trap>
        <Trap title="K is extract over raffinate" cite={`[${W6}, p. 7]`}>{String.raw`$K = x_E/x_R$, not the reverse.`}</Trap>
        <Trap title="Check the fraction basis" cite={`[${W6}, p. 7; ${E6E}, Problem 1]`}>
          K may be in mole fractions (slide) or weight fractions (exercise: wt fr phenol in heptane / wt fr phenol in water).
        </Trap>
        <Trap title={'"Good solvent" answers need two arguments'} cite={`[${PX2}, Q4a]`}>
          Tie-line slope (distribution) and miscibility gap (immiscibility). Each is worth a point.
        </Trap>
        <Trap title={"Don't forget recovery"} cite={`[${W6}, p. 6, 8]`}>
          {"A solvent with too little volatility difference from the solute is hard to recover. That's on the selection list."}
        </Trap>
        <Trap title="High selectivity → fewer stages" cite={`[${W6}, p. 7–8]`}>β plays the role α plays in distillation.</Trap>
        <Trap title="E assumes immiscible phases" cite={`[${FS}, p. 6, eq. 54; ${W6}, p. 7]`}>
          {String.raw`$E = KS/F$ uses solvent and feed flows in place of extract and raffinate flows.`}
        </Trap>
      </Section>
    </>
  )
}
