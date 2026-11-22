import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label, Curve,
  Mermaid, M, V, T, tone,
} from '../components'

const W3 = 'Week 3 - Absorption and stripping with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E3 = 'exercise_03_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: "Absorption principles and Henry's law",
  topic: 'absorption',
  examWeight: {
    level: 'medium',
    note: 'Henry coefficient and K, plus P/T effects, on 1 of 2 practice exams (Autumn 2022 Q3a, Q3e.1–2); Practice exam 1 gives K directly',
  },
  examTasks: [
    'Autumn 2022, Q3a: Henry coefficient and K for CO₂ at 8 °C / 15 atm from a solubility figure (H = 1000 atm, K = 66.7).',
    'Autumn 2022, Q3e.1–2: effect of raising P to 20 atm (more CO₂ removed) and T to 15 °C (less removed).',
    'Practice exam 1, Ex. 3: gives y = 0.35x directly, so no Henry step. The equilibrium is used in Kremser (page 11).',
  ],
  buildsOn: ['02-vapor-pressure-raoult-dalton'],
  usedIn: ['09-absorption-equilibrium-stage-mole-ratios', '10-multistage-absorption-stripping', '11-kremser-minimum-absorbent-flow'],
  sources: [
    `[${W3}, p. 2–10, 23]`,
    `[${FS}, p. 2, eq. 15–16; p. 8, eq. 78; p. 11, Table 2]`,
    '[exercise_03.pdf, Oppgave 1]',
    `[${E3}, Oppg. 1a–c]`,
    `[${PX2}, Q3a, Q3e.1–2]`,
    '[practice_exam_solutions.pdf, Ex. 3]',
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'What property does absorption exploit, compared with distillation?', a: 'The difference in solubility of the components in a liquid. Distillation exploits volatility. [Week 3, p. 2; Week 1, p. 44]' },
    { id: 'p2', kind: 'pretest', q: 'You raise the absorber pressure. Does more or less gas dissolve?', a: 'More. $K = H_A/P_{tot}$ falls, so the equilibrium liquid concentration for a given $y$ rises. [practice exam 2 solutions.pdf, Q3e.1]' },
    { id: 'p3', kind: 'pretest', q: 'A dissolved gas has a negative enthalpy of solution. Heating the absorber does what to its solubility?', a: 'Lowers it. The Henry constant increases with temperature. [Week 3, p. 23; exercise_03_solutions.pdf, Oppg. 1c]' },
    { id: 't1', q: 'A soluble gas A with $p_A = 0.15$ atm is in equilibrium with water at 298.15 K. Find $x_A$ for SO₂ ($H = 45.01$ atm) and NH₃ ($H = 0.893$ atm).', a: 'SO₂: $x_A = 0.15/45.01 = 0.0033$. NH₃: $x_A = 0.15/0.893 = 0.17$. [exercise_03_solutions.pdf, Oppg. 1a]' },
    { id: 't2', q: 'Convert $x_{SO_2} = 0.0033$ in water to mass %.', a: '$m\\% = 100\\cdot \\dfrac{0.0033\\cdot 64.1}{0.0033\\cdot 64.1 + 0.9967\\cdot 18} = 1.16\\,\\%$. [exercise_03_solutions.pdf, Oppg. 1b]' },
    { id: 't3', q: 'Name the three interaction types and say which can be regenerated.', a: 'Physical absorption, reversible reaction and irreversible reaction. The first two can be stripped. [Week 3, p. 5–6]' },
    { id: 't4', q: 'Name three ways to strip an absorbate from a solvent.', a: 'Lower the (partial) pressure, heat to generate a stripping vapour, or strip with an inert gas. [Week 3, p. 6]' },
    { id: 't5', q: "Why might measured CO₂ uptake in an amine solvent exceed what Henry's law predicts?", a: "Henry's law doesn't account for reactions in the liquid phase, so chemical absorption can take up more. [Week 3, p. 8]" },
  ],
  equations: [
    {
      id: 'raoult',
      label: "Raoult's law (compare)",
      tex: String.raw`\vb{y_A} = \frac{P_A^\circ}{\ve{P_{tot}}}\, \va{x_A}`,
      vars: [
        { sym: String.raw`P_A^\circ`, desc: 'vapour pressure of pure A', unit: String.raw`\mathrm{atm}\text{ or }\mathrm{bar}` },
        { sym: String.raw`\ve{P_{tot}}`, desc: 'total pressure', unit: String.raw`\mathrm{atm}\text{ or }\mathrm{bar}` },
      ],
      note: 'The distillation-style equilibrium, shown for comparison.',
      cite: `[${W3}, p. 7]`,
      check: { status: 'verified', note: 'Matches W3 p. 7.' },
    },
    {
      id: 'henry',
      label: "Henry's law (pressure form)",
      tex: String.raw`p_A = \vc{H_A} \va{x_A} \qquad\Leftrightarrow\qquad \vb{y_A} = \frac{\vc{H_A}}{\ve{P_{tot}}}\, \va{x_A}`,
      vars: [
        { sym: String.raw`p_A`, desc: 'partial pressure of A in the gas', unit: String.raw`\mathrm{atm}` },
        { sym: String.raw`\vc{H_A}`, desc: 'Henry coefficient (pressure/mole-fraction form)', unit: String.raw`\mathrm{atm}` },
        { sym: String.raw`\va{x_A}`, desc: 'mole fraction of A in the liquid', unit: '–' },
        { sym: String.raw`\vb{y_A}`, desc: 'mole fraction of A in the gas', unit: '–' },
      ],
      note: 'Low solubility (dilute liquid), no reaction in the liquid. Values at 298.15 K are in Table 2 of the formula sheet.',
      cite: `[${W3}, p. 7–8; ${FS}, p. 2, eq. 15, and p. 11, Table 2]`,
      check: { status: 'verified', note: 'Matches W3 p. 7 and formula sheet eq. 15 (written there with $p_A$ in Pa).' },
    },
    {
      id: 'K',
      label: 'Equilibrium with distribution coefficient',
      tex: String.raw`\vb{y_A} = \vd{K_A} \va{x_A}, \qquad \vd{K_A} = \frac{\vc{H_A}}{\ve{P_{tot}}}`,
      vars: [{ sym: String.raw`\vd{K_A}`, desc: 'vapour–liquid distribution coefficient', unit: '–' }],
      cite: `[${FS}, p. 2, eq. 16; ${W3}, p. 23]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 16.' },
    },
    {
      id: 'vth',
      label: "Van 't Hoff (temperature dependence of Henry/K)",
      tex: String.raw`\frac{d\ln \vd{K_A}}{dT} = -\frac{\Delta H}{RT^2} \quad\Rightarrow\quad \vd{K_A}(T_2) = \vd{K_A}(T_1)\,\exp\!\left[-\frac{\Delta H}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)\right]`,
      vars: [
        { sym: String.raw`\vd{K_A}(T)`, desc: 'distribution coefficient (or $H_A$) at temperature T', unit: String.raw`\text{– (or atm)}` },
        { sym: String.raw`\Delta H`, desc: 'enthalpy of solution', unit: String.raw`\mathrm{J/mol}` },
        { sym: String.raw`R`, desc: 'gas constant, 8.314', unit: String.raw`\mathrm{J/(mol\cdot K)}` },
        { sym: String.raw`T_1, T_2`, desc: 'temperatures', unit: String.raw`\mathrm{K}` },
      ],
      note: "For most gases $\\Delta H < 0$, so K increases with T. The same form is used for $H_A$. **Source discrepancy:** this equation is not on the formula sheet — eq. 78 there is the solid–liquid solubility version.",
      cite: `[${W3}, p. 23; ${E3}, Oppg. 1c, eq. 4]`,
      check: { status: 'verified', note: 'Matches W3 p. 23 (both forms) and exercise 3 solution eq. 4 (written for $H_A$).' },
    },
  ],
}

// ---- Visual 1: absorber–stripper loop ---------------------------------------
function Loop() {
  return (
    <Svg w={620} h={330} label="Absorber and stripper loop with gas and solvent streams">
      <rect x={120} y={50} width={90} height={220} rx={14} style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2.5 }} />
      <Label x={165} y={165} size={14}>absorber</Label>
      <rect x={400} y={50} width={90} height={220} rx={14} style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2.5 }} />
      <Label x={445} y={158} size={14}>stripper</Label>
      <Label x={445} y={176} size={12} t="muted">(desorber)</Label>
      <Arrow x1={10} y1={250} x2={118} y2={250} t="var-d" />
      <Label x={10} y={240} anchor="start" size={13} t="var-d">dirty gas</Label>
      <Arrow x1={165} y1={50} x2={165} y2={10} t="var-d" />
      <Label x={175} y={20} anchor="start" size={13} t="var-d">clean gas</Label>
      <Arrow x1={210} y1={260} x2={398} y2={260} t="var-e" />
      <Label x={305} y={252} size={13} t="var-e">rich solvent</Label>
      <Arrow x1={398} y1={70} x2={212} y2={70} t="var-a" />
      <Label x={305} y={62} size={13} t="var-a">lean solvent</Label>
      <Arrow x1={445} y1={50} x2={445} y2={10} t="var-b" />
      <Label x={455} y={20} anchor="start" size={13} t="var-b">absorbate</Label>
      <Label x={520} y={210} anchor="start" size={11} t="muted">desorb by:</Label>
      <Label x={520} y={226} anchor="start" size={11} t="muted">• lower (partial) p</Label>
      <Label x={520} y={242} anchor="start" size={11} t="muted">• heat → stripping</Label>
      <Label x={520} y={256} anchor="start" size={11} t="muted">   vapour</Label>
      <Label x={520} y={272} anchor="start" size={11} t="muted">• inert strip gas</Label>
    </Svg>
  )
}

// ---- Visual 2: three column types --------------------------------------------
function ColumnTypes() {
  const shell = (x) => <rect x={x} y={30} width={110} height={210} rx={10} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
  const flows = (x) => (
    <>
      <Arrow x1={x + 125} y1={225} x2={x + 125} y2={45} t="var-d" />
      <Label x={x + 133} y={60} anchor="start" size={11} t="var-d">gas ↑</Label>
      <Arrow x1={x - 15} y1={45} x2={x - 15} y2={225} t="var-e" />
      <Label x={x - 22} y={220} anchor="end" size={11} t="var-e">liq. ↓</Label>
    </>
  )
  const packing = []
  for (let r = 0; r < 8; r++) for (let c = 0; c < 6; c++) packing.push([60 + c * 16 + (r % 2) * 8, 80 + r * 16])
  const drops = []
  for (let r = 0; r < 7; r++) for (let c = 0; c < 5; c++) drops.push([470 + c * 20 + (r % 2) * 10, 75 + r * 22])
  return (
    <Svg w={640} h={280} label="Packed, plate and spray absorption columns">
      {shell(50)}
      {packing.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={5} style={{ fill: 'none', stroke: tone('muted'), strokeWidth: 1.5 }} />)}
      {flows(50)}
      <Label x={105} y={262} size={13}>packed</Label>
      {shell(250)}
      {[70, 110, 150, 190].map((y, i) => (
        <line key={y} x1={i % 2 ? 250 : 270} y1={y} x2={i % 2 ? 340 : 360} y2={y} style={{ stroke: tone('muted'), strokeWidth: 3 }} />
      ))}
      {flows(250)}
      <Label x={305} y={262} size={13}>plate</Label>
      {shell(450)}
      {[470, 505, 540].map((x) => <polygon key={x} points={`${x},38 ${x + 12},38 ${x + 6},50`} style={{ fill: tone('ink') }} />)}
      {drops.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={2.5} style={{ fill: tone('var-e') }} />)}
      {flows(450)}
      <Label x={505} y={262} size={13}>spray (dusjtårn)</Label>
    </Svg>
  )
}

const INTERACT = `flowchart LR
  P[Physical absorption] --> R[Reversible reaction] --> I["Irreversible reaction<br/>e.g. NO₂ in water → nitric acid"]
  subgraph regen [regenerable by stripping]
    P
    R
  end`

// ---- Visual 4: Henry lines at two pressures ----------------------------------
const frame = ({ x0, y0, w, h, xmax, ymax }) => ({ X: (v) => x0 + (v / xmax) * w, Y: (v) => y0 + h - (v / ymax) * h, x0, y0, w, h })

function HenryLines({ P, compact }) {
  const H = 1000
  const yA = 0.12
  const f = frame({ x0: 64, y0: 22, w: 330, h: 260, xmax: 0.004, ymax: 0.2 })
  const lines = P ? [{ P, t: 'var-d' }] : [{ P: 15, t: 'var-d' }, { P: 20, t: 'var-c' }]
  return (
    <Svg w={440} h={340} label="Henry lines y = (H/P) x for CO₂ with H = 1000 atm">
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0 + f.w + 10} y2={f.y0 + f.h} />
      <Arrow x1={f.x0} y1={f.y0 + f.h} x2={f.x0} y2={f.y0 - 8} />
      {[0, 0.001, 0.002, 0.003, 0.004].map((v) => <text key={v} x={f.X(v)} y={f.y0 + f.h + 17} textAnchor="middle" className="svg-sub">{v ? `${v * 1000}e−3` : 0}</text>)}
      {[0.05, 0.1, 0.15, 0.2].map((v) => <text key={v} x={f.x0 - 7} y={f.Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={f.x0 + f.w} y={f.y0 + f.h + 36} anchor="end" size={13} t="var-a">x_A (–)</Label>
      <Label x={f.x0 + 6} y={f.y0 - 4} anchor="start" size={13} t="var-b">y_A (–)</Label>
      <line x1={f.X(0)} y1={f.Y(yA)} x2={f.X(0.004)} y2={f.Y(yA)} style={{ stroke: tone('var-b'), strokeWidth: 1.5, strokeDasharray: '5 4' }} />
      <Label x={f.X(0.004)} y={f.Y(yA) - 6} anchor="end" size={12} t="var-b">y_A = 0.12</Label>
      {lines.map(({ P: p, t }) => {
        const K = H / p
        const xs = yA / K
        const xEnd = Math.min(0.004, 0.2 / K)
        return (
          <g key={p}>
            <line x1={f.X(0)} y1={f.Y(0)} x2={f.X(xEnd)} y2={f.Y(K * xEnd)} style={{ stroke: tone(t), strokeWidth: 2.5 }} />
            {xs <= 0.004 && (
              <>
                <line x1={f.X(xs)} y1={f.Y(yA)} x2={f.X(xs)} y2={f.Y(0)} style={{ stroke: tone(t), strokeWidth: 1.5, strokeDasharray: '4 4' }} />
                <circle cx={f.X(xs)} cy={f.Y(yA)} r={5} style={{ fill: tone(t) }} />
              </>
            )}
            {!compact && (
              <Label x={f.X(xEnd * 0.45) + (p === 15 ? -8 : 10)} y={f.Y(K * xEnd * 0.45) + (p === 15 ? -4 : 14)} anchor={p === 15 ? 'end' : 'start'} size={12} t={t}>{`${p} atm: K = ${K.toFixed(1)}`}</Label>
            )}
          </g>
        )
      })}
    </Svg>
  )
}

// ---- Visual 5: solubility vs T (schematic, log axis) -------------------------
function SolubilityT() {
  const x0 = 70
  const y0 = 20
  const w = 340
  const h = 230
  const X = (T) => x0 + (T / 60) * w
  const Y = (l) => y0 + h - ((l + 6) / 4) * h // log10(1/H) from −6 to −2
  const L = Math.log10
  return (
    <Svg w={460} h={300} label="Schematic solubility 1/H against temperature for O₂ and CO₂ on a log axis">
      <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      {[0, 20, 40, 60].map((T) => <text key={T} x={X(T)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{T}</text>)}
      {[-6, -5, -4, -3, -2].map((l) => <text key={l} x={x0 - 7} y={Y(l) + 4} textAnchor="end" className="svg-sub">{`1e${l}`}</text>)}
      <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13}>T (°C)</Label>
      <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13}>1/H (atm⁻¹, log)</Label>
      <Curve points={[[X(0), Y(L(3.2e-5))], [X(25), Y(L(2.0e-5))], [X(50), Y(L(1.45e-5))], [X(60), Y(L(1.35e-5))]]} t="var-c" dashed />
      <Curve points={[[X(0), Y(L(1.4e-3))], [X(10), Y(L(1e-3))], [X(35), Y(L(5.5e-4))], [X(60), Y(L(3.6e-4))]]} t="var-c" dashed />
      <circle cx={X(25)} cy={Y(L(2e-5))} r={5} style={{ fill: tone('example') }} />
      <Label x={X(25) + 8} y={Y(L(2e-5)) - 10} anchor="start" size={12} t="example">O₂, 25 °C: 1/H ≈ 2.0·10⁻⁵</Label>
      <circle cx={X(10)} cy={Y(L(1e-3))} r={5} style={{ fill: tone('example') }} />
      <Label x={X(10) + 8} y={Y(L(1e-3)) - 10} anchor="start" size={12} t="example">CO₂, ≈10 °C: 1/H = 10⁻³</Label>
      <Label x={X(58)} y={Y(-3.95)} anchor="end" size={12} t="trap">ΔH &lt; 0: higher T → higher H</Label>
      <Label x={X(58)} y={Y(-3.95) + 16} anchor="end" size={12} t="trap">→ lower solubility</Label>
    </Svg>
  )
}

// ---- Interactive ---------------------------------------------------------------
function HenryExplorer() {
  const [P, setP] = useState(15)
  const K = 1000 / P
  const xs = 0.12 / K
  return (
    <Diagram
      title="Pressure shifts the Henry line (CO₂, H = 1000 atm)"
      caption={String.raw`$y_A = \frac{H_A}{P_{tot}}x_A$ with $H_A = 1000$ atm [practice exam 2 solutions.pdf, Q3a]. For a fixed gas $y_A = 0.12$ the equilibrium liquid fraction is $x_A^* = y_A/K$. At 15 atm: K = 66.7, $x^* = 1.8\cdot 10^{-3}$.`}
      cite={`[${PX2}, Q3a, Q3e.1]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="e"><M>{String.raw`P_{tot}`}</M></V> = <strong>{P.toFixed(1)}</strong> atm</span>
            <input type="range" min={1} max={30} step={0.1} value={P} onChange={(e) => setP(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <V c="d"><M>K</M> = {K.toFixed(1)}</V> · <V c="a"><M>{String.raw`x_A^*`}</M> = {(xs * 1000).toFixed(2)}·10⁻³</V>
          {xs > 0.004 && ' (off the chart to the right)'}
        </p>
        <HenryLines P={P} compact />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Dissolve the gas you want to remove">
        <MentalModel cite={`[${W3}, p. 2–8, 23; ${FS}, p. 2, eq. 16; ${PX2}, Q3e]`}>
          <T text="In absorption a gas mixture contacts a liquid solvent (absorbent), and the components that dissolve best (solutes, absorbates) transfer from the gas to the liquid [Week 3, p. 2]. Like distillation, it needs equilibrium data, but here they describe gas solubility [Week 3, p. 7]." />
          <p>
            Gases usually dissolve only a little, so the liquid is dilute and the equilibrium is a straight line, Henry&apos;s law:
            partial pressure ∝ <V c="a">liquid mole fraction</V>, with a large coefficient <V c="c"><M>H_A</M></V> for poorly
            soluble gases [Week 3, p. 7]. Dividing by <V c="e">total pressure</V> gives the distribution coefficient{' '}
            <V c="d"><M>{String.raw`K_A = H_A/P_{tot}`}</M></V>. A small <M>K_A</M> means a soluble gas and easy absorption
            [FormelarkKP3010.pdf, p. 2, eq. 16]. High pressure and low temperature both lower <M>K_A</M>, which is why absorbers run
            cold and pressurised and strippers run hot or at low pressure [practice exam 2 solutions.pdf, Q3e; Week 3, p. 6, 23]. If
            the solvent reacts reversibly with the solute, it can be regenerated by stripping (desorption). If the reaction is
            irreversible, it can&apos;t [Week 3, p. 5–6].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Absorption, columns and Henry's law">
        <Columns>
          <Diagram title="Absorber–stripper loop" cite={`[${W3}, p. 3, 6]`}
            caption="Gas in at the bottom, clean gas out at the top; lean solvent in at the top, rich solvent out at the bottom and on to the stripper, which returns lean solvent.">
            <Loop />
          </Diagram>
          <div>
            <Def term="Absorption" cite={`[${W3}, p. 2]`}>
              Separation based on differences in solubility in the liquid phase. Gas and liquid (solvent or absorbent) are in direct contact, and mass transfer goes from gas to liquid. The transferred components are solutes or absorbates. Batch or continuous, the latter in a column similar to distillation.
            </Def>
            <Def term="Main application" cite={`[${W3}, p. 3]`}>
              Gas cleaning, e.g. removal of SO₂, H₂S, CO₂. Gas enters at the bottom and leaves at the top. Liquid enters at the top and leaves at the bottom carrying the captured components.
            </Def>
            <Def term="Stripping (desorption)" cite={`[${W3}, p. 6]`}>
              Removing absorbates from the solvent again. Only possible for physical and reversible absorption. Achieved by lowering the (partial) pressure, heating to generate a stripping vapour, or stripping with an inert gas.
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Three column types" cite={`[${W3}, p. 4]`} caption="Gas rises, liquid falls in each. The internal structure sets the mass transfer rate.">
            <ColumnTypes />
          </Diagram>
          <Def term="Column types" cite={`[${W3}, p. 3–4]`}>
            Packed column (structured or unstructured packing creates the gas–liquid interface), plate column (plates as in distillation), spray column (dusjtårn, absorbent sprayed at the top). The internal structure determines mass transfer rates.
          </Def>
        </Columns>

        <Columns>
          <Mermaid title="Interaction types" chart={INTERACT} cite={`[${W3}, p. 5–6]`} caption="Physical and reversible absorption can be regenerated by stripping; irreversible cannot." />
          <div>
            <Def term="Physical absorption" cite={`[${W3}, p. 5]`}>
              {"The absorbed components are more soluble than the others but don't react with the solvent."}
            </Def>
            <Def term="Reversible reaction" cite={`[${W3}, p. 5]`}>
              Reversible chemical reaction between the absorbed gas and a reactant in the solvent.
            </Def>
            <Def term="Irreversible reaction" cite={`[${W3}, p. 5]`}>
              Irreversible reaction between absorbate and a reactant in the solvent, e.g. nitric acid production by absorbing NO₂ in water.
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Henry's law line and the pressure effect" cite={`[${W3}, p. 7; ${PX2}, Q3a, Q3e.1]`}
            caption="CO₂ with H = 1000 atm: K = 66.7 at 15 atm and K = 50 at 20 atm. For the same y_A = 0.12 the 20 atm line gives a larger equilibrium x_A: higher P → lower K → more absorbed.">
            <HenryLines />
          </Diagram>
          <div>
            <Def term="Henry's law" cite={`[${W3}, p. 7–8]`}>
              {String.raw`Equilibrium for gases of low solubility, with $H_A$ the Henry coefficient. It can be written in several forms (pressure or concentration), so always check which version is used. It ignores reactions in the liquid, so actual absorption can be higher than predicted.`}
            </Def>
            <Def term={String.raw`Distribution coefficient $K_A$`} cite={`[${FS}, p. 2, eq. 16; ${W3}, p. 23]`}>
              {String.raw`$K_A = H_A/P_{tot}$, giving $y_A = K_A x_A$.`}
            </Def>
            <Def term={String.raw`Enthalpy of solution (løsningsentalpien, $\Delta H$)`} cite={`[${W3}, p. 23]`}>
              {String.raw`For most gases $\Delta H < 0$, so $K_A$ increases with temperature and solubility drops.`}
            </Def>
          </div>
        </Columns>

        <Diagram title="Solubility vs temperature" cite={`[${W3}, p. 7, 10, 23; ${PX2}, Q3a]`}
          caption="Only the two marked readings are numbers from the course (O₂ at 25 °C from the slide figure, CO₂ near 10 °C from the exam). The dashed falling curves through them are schematic.">
          <SolubilityT />
        </Diagram>
        <Gap>The gas-solubility figure (1/H vs T, Week 3, p. 7, 10) is an image. Only the O₂ reading (25 °C) and the CO₂ reading (about 10 °C, from the exam) are available as numbers.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="raoult" />
        <Eq id="henry" />
        <Eq id="K" />
        <HenryExplorer />
        <Eq id="vth" />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Mole fraction of oxygen in water in equilibrium with air"
          given="Water at 25 °C, air at 1 atm."
          steps={[
            { body: 'Air is 21 mol % O₂.' },
            { body: String.raw`Partial pressure (Dalton): $p_{O_2} = y_{O_2} P_{tot} = 0.21 \cdot 1 = 0.21$ atm.` },
            { body: String.raw`Read the solubility figure at 25 °C: $1/H \approx 2.0\cdot 10^{-5}$ atm⁻¹, so $H_{O_2} \approx 50\,000$ atm.` },
            { body: String.raw`Henry: $p_{O_2} = H_{O_2} x_{O_2}$, so $0.21 = 50\,000 \cdot x_{O_2}$.` },
            { body: String.raw`$x_{O_2} = 4.2 \cdot 10^{-6}$.` },
            { body: String.raw`Sense check: a large H means a poorly soluble gas and a tiny $x$. The formula sheet lists $H_{O_2} = 4.259\cdot 10^4$ atm at 298.15 K, the same order of magnitude. [FormelarkKP3010.pdf, p. 11, Table 2]` },
          ]}
          result={String.raw`$x_{O_2} = 4.2\cdot 10^{-6}$`}
          cite={`[${W3}, p. 9–10]`}
        />
        <FadedExample
          title="CO₂ absorber: Henry coefficient, K and process changes"
          given="Absorber at 8 °C and 15 atm, pure water solvent, gas 12 mol % CO₂."
          steps={[
            { body: String.raw`From the solubility figure near 10 °C: $1/H_{CO_2} = 10^{-3}$ atm⁻¹.` },
            { title: 'Henry coefficient.', body: String.raw`$H_{CO_2} = 1000$ atm.`, hidden: true },
            { title: 'Distribution coefficient.', body: String.raw`$K = H/P_{tot} = 1000/15 = 66.7$.`, hidden: true },
            { title: 'The pressure rises to 20 atm. More or less CO₂ removed?', body: String.raw`More. $K = 1000/20 = 50$ is lower, so a higher equilibrium liquid concentration is possible at the same $y$.`, hidden: true },
            { title: 'The temperature rises to 15 °C. More or less?', body: 'Less. A higher temperature gives a higher Henry constant and a higher K.', hidden: true },
          ]}
          cite={`[${PX2}, Q3a, Q3e.1–2]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="The figure shows 1/H, not H" cite={`[${PX2}, Q3a; ${W3}, p. 10]`}>
          {String.raw`Read the reciprocal and invert it. $10^{-3}$ atm⁻¹ means $H = 1000$ atm.`}
        </Trap>
        <Trap title="Use the partial pressure" cite={`[${W3}, p. 10]`}>
          {String.raw`Henry relates $p_A$ (e.g. $0.21$ atm O₂), not $P_{tot}$, to $x_A$.`}
        </Trap>
        <Trap title="Check the Henry form" cite={`[${W3}, p. 8; ${FS}, p. 11, Table 2]`}>
          Pressure vs concentration forms have different units and values. The formula sheet table is the pressure/mole-fraction form in atm at 298.15 K.
        </Trap>
        <Trap title={"K depends on pressure, H doesn't"} cite={`[${PX2}, Q3e.1]`}>
          {String.raw`$K = H/P_{tot}$. Higher P gives lower K and more absorption.`}
        </Trap>
        <Trap title="Temperature direction" cite={`[${W3}, p. 23; ${E3}, Oppg. 1c]`}>
          {String.raw`$\Delta H < 0$ for most gases, so higher T gives higher H and K and lower solubility. Don't flip the sign in the exponential.`}
        </Trap>
        <Trap title="The formula sheet's van 't Hoff is a different one (source discrepancy)" cite={`[${FS}, p. 8, eq. 78; ${W3}, p. 23]`}>
          {String.raw`Eq. 78 is the crystallization solubility version ($\ln x_s$ with $\Delta H_{melt}$). The Henry/K temperature equation is not on the sheet.`}
        </Trap>
        <Trap title="Reactions break Henry" cite={`[${W3}, p. 8]`}>
          Chemical absorption can take up more than Henry predicts.
        </Trap>
        <Trap title="Irreversible means not regenerable" cite={`[${W3}, p. 5–6]`}>
          Stripping only works for physical and reversible absorption.
        </Trap>
      </Section>
    </>
  )
}
