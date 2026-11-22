import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Label,
  Mermaid, M, V, T, tone,
} from '../components'

const W1 = 'Week 1 - Introduction  VLE with solutions.pdf'
const W7 = 'Week 7 - Adsorption and ion-exchange with solutions.pdf'
const PX = 'practice_exam_solutions.pdf'

export const meta = {
  title: 'Separation basics — techniques, equilibrium ratio K and selectivity S',
  topic: 'vle',
  examWeight: {
    level: 'low',
    note: 'Selectivity sub-question on 1 of 2 practice exams (Practice exam 1, Ex. 5a); otherwise background for every topic',
  },
  examTasks: [
    'Practice exam 1, Ex. 5a: find q_max for N₂ and O₂ from Langmuir isotherms and the equilibrium selectivity of N₂ over O₂.',
    'Practice exam 1, Ex. 7c and Practice exam 2 (Autumn 2022), Ex. 2a.1 also use "selectivity" and "relative volatility", but with their own definitions. They\'re covered on pages 31 and 03.',
  ],
  buildsOn: [],
  usedIn: ['03-vle-diagrams-azeotropes', '22-adsorbents-properties', '31-membrane-flux-permeability-selectivity'],
  sources: [
    `[${W1}, p. 3, 9–12, 14–16]`,
    `[${W7}, p. 6–8]`,
    `[${PX}, Ex. 5a]`,
    '[FormelarkKP3010.pdf, p. 1, eq. 7]',
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Component A has mole fraction 0.6 in phase 1 and 0.2 in phase 2. What is $K_A$?', a: '$K_A = x_{A,1}/x_{A,2} = 0.6/0.2 = 3$. [Week 1, p. 15]' },
    { id: 'p2', kind: 'pretest', q: 'What has to differ between two molecules for a separation to be possible at all?', a: 'A molecular property, e.g. molecular weight, size, shape, dipole moment/polarizability, molecular interactions or electric charge. [Week 1, p. 11]' },
    { id: 'p3', kind: 'pretest', q: 'Absorption and extraction belong to which family of separation techniques?', a: 'Solvent addition. [Week 1, p. 10]' },
    { id: 't1', q: 'List the five classes of separation techniques with one example each.', a: 'Phase creation (distillation), solvent addition (absorption/extraction), solid separating agent (adsorption/ion exchange), barriers (membranes), force field/gradient (centrifugation/electrodialysis). [Week 1, p. 10]' },
    { id: 't2', q: 'Pentane and isopentane are both C₅H₁₂ but boil at 36 °C and 28 °C. Which molecular property explains the difference?', a: 'Molecular shape. The slide attributes boiling point differences to weight, hydrogen bonds and Van der Waals interactions, and with the same formula, shape changes the Van der Waals interactions. [Week 1, p. 11–12]' },
    { id: 't3', q: '$K_A = 0.5$, $K_B = 2$. Compute $S_{AB}$. Which component does phase 1 favour?', a: '$S_{AB} = 0.5/2 = 0.25$. Since $S_{AB} < 1$, phase 1 favours B relative to A. [Week 1, p. 15]' },
    { id: 't4', q: 'Name the five criteria for selecting a separation process.', a: 'Feasibility, economics, product stability, design knowledge/reliability, safety and environment. [Week 1, p. 14]' },
    { id: 't5', q: 'What are the two key pieces of design information for separation by evaporation?', a: 'Component volatility (flyktighet) and the vapour–liquid equilibrium (VLE, likevekt). [Week 1, p. 16]' },
  ],
  equations: [
    {
      id: 'K',
      label: 'Equilibrium ratio',
      tex: String.raw`\va{K_A} \equiv \frac{\va{x_{A,1}}}{\va{x_{A,2}}}`,
      vars: [
        { sym: String.raw`\va{K_A}`, desc: 'equilibrium ratio of component A', unit: '–' },
        { sym: String.raw`\va{x_{A,1}}`, desc: 'mole fraction of A in phase 1', unit: '–' },
        { sym: String.raw`\va{x_{A,2}}`, desc: 'mole fraction of A in phase 2', unit: '–' },
      ],
      note: 'Valid for any two coexisting phases at equilibrium. Which phase is "1" is a choice, so always state it.',
      cite: `[${W1}, p. 15]`,
      check: { status: 'verified', note: 'Matches W1 p. 15.' },
    },
    {
      id: 'S',
      label: 'Selectivity',
      tex: String.raw`\vc{S_{AB}} = \frac{\va{K_A}}{\vb{K_B}} = \frac{\va{x_{A,1}}/\va{x_{A,2}}}{\vb{x_{B,1}}/\vb{x_{B,2}}}`,
      vars: [
        { sym: String.raw`\vc{S_{AB}}`, desc: 'selectivity of A relative to B', unit: '–' },
        { sym: String.raw`\va{K_A}, \vb{K_B}`, desc: 'equilibrium ratios of A and B', unit: '–' },
        { sym: String.raw`x_{i,j}`, desc: 'mole fraction of component $i$ in phase $j$', unit: '–' },
      ],
      note: 'Phases 1 and 2 and components A and B at equilibrium.',
      cite: `[${W1}, p. 15]`,
      check: { status: 'verified', note: 'Matches W1 p. 15.' },
    },
    {
      id: 'alpha',
      label: 'Adsorbent selectivity',
      tex: String.raw`\vc{\alpha_A} = \frac{\va{K_A}}{\vb{K_B}}`,
      vars: [
        { sym: String.raw`\vc{\alpha_A}`, desc: 'selectivity of the adsorbent towards A (binary A+B)', unit: '–' },
        { sym: String.raw`\va{K_A}, \vb{K_B}`, desc: 'equilibrium (isotherm) constants of A and B on the adsorbent', unit: String.raw`\text{depends on isotherm, e.g. }\mathrm{bar^{-1}}\text{ for Langmuir in partial pressure}` },
      ],
      note: 'Same ratio-of-K form, but here $K$ is the adsorption equilibrium constant. Details are on page 22/23.',
      cite: `[${W7}, p. 6–8]`,
      check: { status: 'verified', note: 'Matches W7 p. 6 (definition) and p. 8 (example).' },
    },
  ],
}

const TECH_CHART = `flowchart LR
  R([Separation technique])
  R --> A[Phase creation]
  R --> B[Solvent addition]
  R --> C[Solid separating agent]
  R --> D[Barriers]
  R --> E[Force field / gradient]
  A --> A1[Evaporation & distillation]
  B --> B1[Absorption & extraction]
  C --> C1[Adsorption & ion-exchange]
  D --> D1["Membranes (& filtration)"]
  E --> E1[Electrodialysis & centrifugation]
  X[["Crystallization (also a course topic)"]]
  classDef course stroke-width:3px,font-weight:bold
  class A1,B1,C1,D1,X course`

/** Vessel with phase 1 over phase 2, A and B molecules in each. */
function TwoPhases() {
  const col = (c) => tone(c === 'A' ? 'var-a' : 'var-b')
  const mol = (cx, cy, c, k) => (
    <g key={k}>
      <circle cx={cx} cy={cy} r={14} style={{ fill: `color-mix(in srgb, ${col(c)} 30%, var(--bg))`, stroke: col(c), strokeWidth: 2 }} />
      <text x={cx} y={cy + 6} textAnchor="middle" style={{ fill: col(c), fontSize: 16, fontWeight: 600 }}>{c}</text>
    </g>
  )
  const top = [[60, 70, 'A'], [115, 95, 'B'], [170, 62, 'A'], [215, 100, 'B'], [85, 130, 'A'], [180, 135, 'A']]
  const bot = [[65, 200, 'B'], [120, 235, 'A'], [148, 205, 'B'], [220, 232, 'B'], [80, 268, 'B'], [190, 272, 'A']]
  const sub = (main, s) => <>{main}<tspan baselineShift="sub" fontSize="70%">{s}</tspan></>
  return (
    <Svg w={380} h={300} label="A vessel split into phase 1 (top) and phase 2 (bottom), each holding A and B molecules">
      <rect x={30} y={36} width={220} height={258} rx={14} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <line x1={30} y1={165} x2={250} y2={165} style={{ stroke: tone('topic'), strokeWidth: 2.5, strokeDasharray: '8 5' }} />
      <Label x={30} y={26} anchor="start" t="muted" size={16}>phase 1</Label>
      <Label x={244} y={186} anchor="end" t="muted" size={16}>phase 2</Label>
      {top.map(([x, y, c], i) => mol(x, y, c, `t${i}`))}
      {bot.map(([x, y, c], i) => mol(x, y, c, `b${i}`))}
      <Label x={290} y={80} t="var-a" size={20}>{sub('x', 'A,1')}</Label>
      <Label x={345} y={80} t="var-b" size={20}>{sub('x', 'B,1')}</Label>
      <Label x={290} y={250} t="var-a" size={20}>{sub('x', 'A,2')}</Label>
      <Label x={345} y={250} t="var-b" size={20}>{sub('x', 'B,2')}</Label>
      <line x1={290} y1={92} x2={290} y2={226} style={{ stroke: tone('var-a'), strokeWidth: 2 }} />
      <line x1={345} y1={92} x2={345} y2={226} style={{ stroke: tone('var-b'), strokeWidth: 2 }} />
      <Label x={290} y={166} t="var-a" size={18}><tspan style={{ paintOrder: 'stroke', stroke: 'var(--surface)', strokeWidth: 8 }}>{sub('K', 'A')}</tspan></Label>
      <Label x={345} y={166} t="var-b" size={18}><tspan style={{ paintOrder: 'stroke', stroke: 'var(--surface)', strokeWidth: 8 }}>{sub('K', 'B')}</tspan></Label>
    </Svg>
  )
}

const BP = [
  ['methane', -164, false],
  ['ethane', -89, false],
  ['isopentane', 28, 'shape'],
  ['pentane', 36, 'shape'],
  ['methanol', 65, 'hb'],
  ['water', 100, 'hb'],
]

/** Boiling points as horizontal bars around 0 °C. */
function BoilingPoints() {
  const x0 = 240
  const sc = 1.0 // px per °C
  const rowH = 38
  return (
    <Svg w={470} h={300} label="Boiling points: methane −164, ethane −89, isopentane 28, pentane 36, methanol 65, water 100 °C">
      <line x1={x0} y1={14} x2={x0} y2={20 + BP.length * rowH} style={{ stroke: tone('muted'), strokeWidth: 1.5 }} />
      <Label x={x0} y={12} t="muted" size={12}>0 °C</Label>
      {BP.map(([name, t, grp], i) => {
        const y = 26 + i * rowH
        const x = t < 0 ? x0 + t * sc : x0
        const w = Math.abs(t) * sc
        const c = grp ? tone('topic') : tone('muted')
        return (
          <g key={name}>
            <rect x={x} y={y} width={w} height={24} rx={4}
              style={{ fill: `color-mix(in srgb, ${c} ${grp ? 45 : 25}%, var(--bg))`, stroke: c, strokeWidth: grp ? 2 : 1 }} />
            <text x={t < 0 ? x - 6 : x0 - 8} y={y + 17} textAnchor="end" className="svg-label">{name}</text>
            <text x={t < 0 ? x0 + 6 : x + w + 6} y={y + 17} textAnchor="start" className="svg-sub">{t} °C</text>
          </g>
        )
      })}
      {/* brackets for the two highlighted pairs */}
      <path d={`M392,${26 + 2 * rowH + 4} h10 v${rowH + 16} h-10`} style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2 }} />
      <Label x={408} y={26 + 2 * rowH + 24} anchor="start" size={12}>C₅H₁₂:</Label>
      <Label x={408} y={26 + 2 * rowH + 40} anchor="start" size={12}>shape</Label>
      <path d={`M392,${26 + 4 * rowH + 4} h10 v${rowH + 16} h-10`} style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2 }} />
      <Label x={408} y={26 + 4 * rowH + 24} anchor="start" size={12}>H-bonds</Label>
      <Label x={235} y={290} t="muted" size={13}>drivers: weight, hydrogen bonds and Van der Waals interactions</Label>
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Every separation exploits a molecular difference">
        <MentalModel cite={`[${W1}, p. 10–11, 15; ${W7}, p. 6]`}>
          <T text="Every separation exploits a difference in some molecular property between the components: weight, size, shape, polarity, interactions or charge [Week 1, p. 11]. The technique you pick decides how the second phase or barrier is created: by creating a phase (evaporation/distillation), adding a solvent (absorption/extraction), adding a solid agent (adsorption/ion exchange), using a barrier (membranes) or applying a force field or gradient [Week 1, p. 10]." />
          <p>
            Once two phases coexist, each component distributes between them. The <V c="a">equilibrium ratio <M>K</M></V> measures
            how one component distributes, and the <V c="c">selectivity <M>S</M></V> compares two components [Week 1, p. 15]. The
            further <M>S</M> is from the point where both components distribute equally, the easier the separation. The same
            &quot;ratio of K-values&quot; idea comes back as selectivity in adsorption [Week 7, p. 6].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Techniques, K and selectivity">
        <Mermaid
          title="Map of separation techniques"
          chart={TECH_CHART}
          caption="Five classes, by how the second phase or barrier is created. Bold boxes are course topics; crystallization is also a course topic [Week 1, p. 3] but is not one of the five branches on the slide."
          cite={`[${W1}, p. 3, 10]`}
        />

        <Columns>
          <div>
            <Def term="Why separations matter" cite={`[${W1}, p. 9]`}>
              Separating products and by-products, recycling solvents and unconverted reactants, purifying products, removing impurities from the feed, removing contaminants from waste streams.
            </Def>
            <Def term="Separation techniques (five classes)" cite={`[${W1}, p. 10]`}>
              (a) phase creation: evaporation and distillation; (b) solvent addition: absorption and extraction; (c) solid separating agent: adsorption and ion exchange; (d) barriers: membranes (and filtration); (e) force field or gradient: electrodialysis and centrifugation.
            </Def>
            <Def term="Selection criteria for a separation process" cite={`[${W1}, p. 14]`}>
              Feasibility, economics, product stability, design knowledge/reliability, safety and environment.
            </Def>
          </div>
          <div>
            <Def term="Molecular properties that enable separation" cite={`[${W1}, p. 11]`}>
              Molecular weight, molecular size, molecular shape, dipole moment and polarizability, molecular interactions, electric charge.
            </Def>
            <Def term="Volatility (flyktighet) and VLE (likevekt)" cite={`[${W1}, p. 16]`}>
              The key design data for separation by evaporation, which relies on the composition difference between the liquid and gas phase.
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram
            title="Two phases, two components"
            caption="Each component distributes between phase 1 and phase 2. The number of molecules drawn is schematic."
            cite={`[${W1}, p. 15]`}
          >
            <TwoPhases />
          </Diagram>
          <div>
            <Def term={String.raw`Equilibrium ratio $K_A$`} cite={`[${W1}, p. 15]`}>
              Ratio of the mole fraction of A in phase 1 to that in phase 2.
            </Def>
            <Def term={String.raw`Selectivity $S_{AB}$`} cite={`[${W1}, p. 15]`}>
              Ratio of the equilibrium ratios of A and B.
            </Def>
            <Def term="Selectivity (adsorbent)" cite={`[${W7}, p. 6]`}>
              {String.raw`"Preference of an adsorbent for a target molecule", for binary A+B written $\alpha_A = K_A/K_B$.`}
            </Def>
            <p>
              <V c="a"><M>{String.raw`K_A = x_{A,1}/x_{A,2}`}</M></V>, <V c="b"><M>{String.raw`K_B = x_{B,1}/x_{B,2}`}</M></V>,
              {' '}<V c="c"><M>{String.raw`S_{AB} = K_A/K_B`}</M></V>.
            </p>
          </div>
        </Columns>

        <Diagram
          title="Boiling points vs molecular structure"
          caption="Same formula C₅H₁₂, different shape → different boiling point (isopentane vs pentane). Methanol and water: hydrogen bonding."
          cite={`[${W1}, p. 12]`}
        >
          <BoilingPoints />
        </Diagram>
        <Gap>Week 1, p. 13 (&quot;Molecular properties&quot;) is an image with no extractable text and is not used.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="K" />
        <Eq id="S" />
        <Eq id="alpha" />
        <p className="muted">
          No interactive plot: the content file notes that <M>S = K_A/K_B</M> is a single ratio, so a slider adds nothing.
        </p>
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Selectivity towards A"
          given={String.raw`Given $K_A = 1/6$ and $K_B = 3/5$, find the selectivity towards A.`}
          steps={[
            { body: String.raw`Selectivity definition: $\alpha_A = K_A/K_B$. [Week 7, p. 6]` },
            { body: String.raw`Insert: $\alpha_A = \dfrac{1/6}{3/5} = \dfrac{5}{18}$.` },
            { body: String.raw`Result: $\alpha_A = 0.28$. [Week 7, p. 8]` },
            { body: String.raw`Interpretation (from the definition): $\alpha_A < 1$ means $K_B > K_A$, so the adsorbent prefers B over A.` },
          ]}
          result={String.raw`$\alpha_A = 0.28$ → B is preferred`}
          cite={`[${W7}, p. 7–8]`}
        />
        <FadedExample
          title="Equilibrium selectivity of N₂ over O₂"
          given={String.raw`Langmuir isotherms: $q_{N_2} = \dfrac{100\,p_{N_2}}{1+2\,p_{N_2}}$ and $q_{O_2} = \dfrac{250\,p_{O_2}}{1+10\,p_{O_2}}$, with $q$ in mol/kg.`}
          steps={[
            { body: String.raw`Match each isotherm to the Langmuir form $q = \dfrac{q_{max} K p}{1+Kp}$.` },
            { title: String.raw`Read off $K_{N_2}$ and $K_{O_2}$ from the denominators.`, body: String.raw`$K_{N_2} = 2$, $K_{O_2} = 10$.`, hidden: true },
            { title: String.raw`Find $q_{max}$ from the numerators ($q_{max}K$ = numerator coefficient).`, body: String.raw`$q_{max,N_2} = 100/2 = 50$ mol/kg, $q_{max,O_2} = 250/10 = 25$ mol/kg.`, hidden: true },
            { title: String.raw`Selectivity of N₂ over O₂: $S = K_{N_2}/K_{O_2}$.`, body: String.raw`$S = 2/10 = 0.2$.`, hidden: true },
          ]}
          cite={`[${PX}, Ex. 5a]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Selectivity below 1" cite={`[${PX}, Ex. 5a; Week 1, p. 15]`}>
          {String.raw`$S_{AB} = K_A/K_B < 1$ means B, not A, is preferred. The exam answer $S = 0.2$ for N₂ over O₂ means O₂ is preferred, even though N₂ has the larger $q_{max}$.`}
        </Trap>
        <Trap title="Capacity ≠ selectivity" cite={`[${W7}, p. 6; ${PX}, Ex. 5a]`}>
          {String.raw`$q_{max}$ (capacity) and $K$ (affinity) are different numbers. Selectivity uses only $K$.`}
        </Trap>
        <Trap title="Same symbol, different K" cite={`[${W1}, p. 15; ${W7}, p. 6]`}>
          {String.raw`In VLE/LLE, $K$ is a mole fraction ratio between phases [Week 1, p. 15]. In adsorption, $K$ is the isotherm constant [Week 7, p. 6]. Check which one the task means.`}
        </Trap>
        <Trap title="Naming" cite="[FormelarkKP3010.pdf, p. 1, eq. 7]">
          {String.raw`The slides write $S_{AB}$ [Week 1, p. 15] and $\alpha_A$ [Week 7, p. 6], and the exam writes $S$ [practice_exam_solutions.pdf, Ex. 5a]. It's the same ratio-of-K idea. Don't confuse it with relative volatility $\alpha_{AB} = P_A^0/P_B^0$ (page 03).`}
        </Trap>
        <Trap title="Phase order" cite={`[${W1}, p. 15]`}>
          {String.raw`$K_A$ flips to $1/K_A$ if you swap which phase is "1". Keep the same convention for A and B.`}
        </Trap>
      </Section>
    </>
  )
}
