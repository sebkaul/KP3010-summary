import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Box, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W8 = 'Week 8 - Crystallization and precipitation with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E8E = 'exercise_08_eng.pdf'
const E8 = 'exercise_08_solutions.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Crystallization mass balances and yield',
  topic: 'crystallization',
  examWeight: {
    level: 'high',
    note: 'Maximum yield and evaporation fraction on 1 of 2 practice exams (Autumn 2022 Q6.2–6.3, 4 of 8 pts); cooling balance in Practice exam 1 Ex. 6b',
  },
  examTasks: [
    'Autumn 2022, Q6.2: maximum yield when cooling KNO₃ from 60 to 30 °C (Y_max = 0.542).',
    'Autumn 2022, Q6.3: fraction of water to evaporate for 80 % yield (φ_E = 0.56).',
    'Practice exam 1, Ex. 6b: KNO₃ crystals from cooling 70 → 30 °C (25 g per 100 g water) and mother-liquor wt % (page 26).',
  ],
  buildsOn: ['26-crystallization-fundamentals'],
  usedIn: ['28-supersaturation-metastable-zone'],
  sources: [`[${W8}, p. 11–18]`, `[${FS}, p. 7, eq. 74–76]`, `[${E8E}, Problems 1–4 and short answers]`, `[${E8}, Problem 1]`, `[${PX2}, Q6.2–6.3]`, `[${PX}, Ex. 6b]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'On what basis are the crystallization balances written?', a: "Solute-free solvent flows (F′, V′, S′) and solute weight ratios (kg solute per kg solvent), $X_F$ and $X_C$. [Week 8, p. 11]" },
    { id: 'p2', kind: 'pretest', q: 'What composition does the mother liquor leaving the crystallizer usually have?', a: 'The saturation composition at the crystallizer conditions. [Week 8, p. 12]' },
    { id: 'p3', kind: 'pretest', q: 'Feed $X_F = 1.0$, saturation at the end $X_C = 0.458$, no evaporation. Maximum yield?', a: '$Y = 1 - 0.458/1.00 = 0.542$. [practice exam 2 solutions.pdf, Q6.2]' },
    { id: 't1', q: 'Sugar, saturated at 80 °C (3.62 kg/kg water) and cooled to 20 °C (2.04 kg/kg water). Maximum yield, and with half the water evaporated first?', a: '$Y = 1 - 2.04/3.62 = 0.44$. With $\\phi_E = 0.5$: $Y = 1 - 0.564\\cdot 0.5 = 0.72$. [exercise_08_eng.pdf, Problem 2 and short answers]' },
    { id: 't2', q: "Sodium acetate, $X_F = 0.655$, $X_C = 0.363$, $F' = 100$ kg water/h. Find the yield and C.", a: '$Y = 1 - 0.363/0.655 = 0.445$, and $C = 0.445\\cdot 0.655\\cdot 100 = 29.2$ kg/h. [exercise_08_solutions.pdf, Problem 1]' },
    { id: 't3', q: 'CuSO₄·5H₂O (anhydrous fraction 0.160/0.2497 = 0.641): 1000 kg/h water + 280 kg/h CuSO₄ at 40 °C, cooled to 10 °C (17.4 g/100 g water), 38 kg/h water evaporated. Crystals?', a: "Free water in the liquor $S' = 1000 - 38 - 0.359C$. Salt: $280 = 0.174S' + 0.641C$, which gives $C \\approx 195$ kg/h. [exercise_08_eng.pdf, Problem 3 and short answer]" },
    { id: 't4', q: 'Saturated NaCl brine (temperature-independent solubility), three steps each evaporating 20 % of the initial water. Yield?', a: '$X_C = X_F$ and $\\phi_E = 0.6$, so $Y = 1 - 1\\cdot(1 - 0.6) = 0.60$. [exercise_08_eng.pdf, Problem 4a and short answer]' },
    { id: 't5', q: 'That plant makes 250 000 t/yr over 8000 h/yr. What is C?', a: '$250\\cdot 10^6/8000 = 31\\,250$ kg/h. [exercise_08_eng.pdf, Problem 4b and short answer]' },
  ],
  equations: [
    {
      id: 'bal',
      label: 'Overall and inert balances',
      tex: String.raw`F = V + S + \vc{C}, \qquad F' + F'\va{X_F} = V' + S' + S'\vb{X_C} + \vc{C}`,
      vars: [
        { sym: String.raw`F, V, S, \vc{C}`, desc: 'total feed, vapour, mother liquor and crystal flows', unit: String.raw`\mathrm{kg/h}` },
        { sym: String.raw`F', V', S'`, desc: 'solute-free solvent flows', unit: String.raw`\mathrm{kg\ solvent/h}` },
        { sym: String.raw`\va{X_F}, \vb{X_C}`, desc: 'solute weight ratio in feed and mother liquor', unit: String.raw`\mathrm{kg\ solute/kg\ solvent}` },
      ],
      cite: `[${W8}, p. 11; ${FS}, p. 7, eq. 74]`,
      check: { status: 'verified', note: 'Matches W8 p. 11 and formula sheet eq. 74 (on PDF p. 8).' },
    },
    {
      id: 'solute',
      label: 'Solute balance',
      tex: String.raw`F'\va{X_F} = \vc{C} + S'\vb{X_C}`,
      note: 'Anhydrous crystals.',
      cite: `[${W8}, p. 11]`,
      check: { status: 'verified', note: 'Matches W8 p. 11.' },
    },
    {
      id: 'evap',
      label: 'Evaporation split',
      tex: String.raw`V' = F'\vd{\phi_E}, \qquad S' = F'(1 - \vd{\phi_E})`,
      vars: [{ sym: String.raw`\vd{\phi_E}`, desc: 'fraction of feed solvent evaporated', unit: '–' }],
      cite: `[${W8}, p. 12]`,
      check: { status: 'verified', note: 'Matches W8 p. 12.' },
    },
    {
      id: 'Y',
      label: 'Yield',
      tex: String.raw`\vf{Y} = \frac{\vc{C}}{F'\va{X_F}} = 1 - \frac{S'\vb{X_C}}{F'\va{X_F}} = 1 - \frac{\vb{X_C}}{\va{X_F}}(1 - \vd{\phi_E})`,
      vars: [{ sym: String.raw`\vf{Y}`, desc: '(maximum, equilibrium) yield', unit: '–' }],
      note: 'With no evaporation, $Y = 1 - X_C/X_F$.',
      cite: `[${W8}, p. 16; ${FS}, p. 7, eq. 75]`,
      check: { status: 'verified', note: 'Matches W8 p. 16 and formula sheet eq. 75.' },
    },
    {
      id: 'C',
      label: 'Crystal production rate',
      tex: String.raw`\vc{C} = F'\left(\va{X_F} - \vb{X_C}(1 - \vd{\phi_E})\right)`,
      vars: [{ sym: String.raw`\vc{C}`, desc: 'crystal production rate', unit: String.raw`\mathrm{kg/h}` }],
      cite: `[${FS}, p. 7, eq. 76]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 76.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

// ---- Visual 1: flowsheet -------------------------------------------------------------
function Flowsheet() {
  return (
    <Svg w={600} h={250} label="Crystallizer with feed in and vapour, mother liquor and crystals out">
      <Arrow x1={10} y1={110} x2={198} y2={110} t="var-a" />
      <Label x={10} y={98} anchor="start" size={12} t="var-a">F (F′, X_F)</Label>
      <Box x={200} y={70} w={140} h={80} label="crystallizer" t="topic" />
      <Arrow x1={270} y1={70} x2={270} y2={20} t="var-d" />
      <Label x={280} y={28} anchor="start" size={12} t="var-d">V: V′ = φ_E F′ (no solute)</Label>
      <Arrow x1={340} y1={100} x2={590} y2={100} t="var-b" />
      <Label x={590} y={90} anchor="end" size={12} t="var-b">S: S′ = F′(1 − φ_E), X_C (saturated)</Label>
      <Arrow x1={270} y1={150} x2={270} y2={190} t="var-c" />
      <Label x={280} y={186} anchor="start" size={12} t="var-c">C (crystals)</Label>
      <Label x={300} y={222} size={13}>F = V + S + C</Label>
      <Label x={300} y={242} size={13}>F′X_F = C + S′X_C</Label>
    </Svg>
  )
}

// ---- Visual 2: KNO₃ cooling path (schematic curve) --------------------------------------
function KnoPath() {
  const X = (T) => 60 + ((T - 20) / 70) * 360
  const Y = (c) => 250 - (c / 1.6) * 220
  const sol = (T) => 0.32 * Math.exp(0.0257 * (T - 20)) // schematic, through (50, 0.85)
  const ts = Array.from({ length: 71 }, (_, i) => 20 + i)
  return (
    <Svg w={480} h={300} label="KNO₃: point (80 °C, 1.2) cooled to 50 °C, drops to the curve at 0.85">
      <Arrow x1={60} y1={250} x2={430} y2={250} />
      <Arrow x1={60} y1={250} x2={60} y2={20} />
      {[20, 40, 60, 80].map((v) => <text key={v} x={X(v)} y={267} textAnchor="middle" className="svg-sub">{v}</text>)}
      {[0.4, 0.8, 1.2, 1.6].map((v) => <text key={v} x={53} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={430} y={286} anchor="end" size={12}>T (°C)</Label>
      <Label x={66} y={22} anchor="start" size={12} t="var-a">X (kg KNO₃/kg water)</Label>
      <polyline points={ts.map((T) => `${X(T)},${Y(sol(T))}`).join(' ')} style={st('var-b')} />
      <Label x={X(86)} y={Y(sol(86)) + 18} anchor="end" size={11} t="var-b">solubility (schematic)</Label>
      <circle cx={X(80)} cy={Y(1.2)} r={6} style={{ fill: tone('var-a') }} />
      <Label x={X(80) + 8} y={Y(1.2) - 6} anchor="start" size={12} t="var-a">(80 °C, 1.2)</Label>
      <Arrow x1={X(80) - 6} y1={Y(1.2)} x2={X(50) + 4} y2={Y(1.2)} t="var-e" />
      <Label x={X(65)} y={Y(1.2) - 8} size={11} t="var-e">cool</Label>
      <Arrow x1={X(50)} y1={Y(1.2)} x2={X(50)} y2={Y(0.85) - 4} t="var-c" />
      <circle cx={X(50)} cy={Y(0.85)} r={5} style={{ fill: tone('var-b') }} />
      <Label x={X(50) - 8} y={Y(1.02)} anchor="end" size={12} t="var-c">C = 0.35 kg/kg water</Label>
      <Label x={X(50) - 8} y={Y(1.02) + 16} anchor="end" size={12} t="var-c">29 % crystallized</Label>
      <Label x={X(50) + 8} y={Y(0.85) + 18} anchor="start" size={11} t="var-b">0.85 at 50 °C</Label>
    </Svg>
  )
}

// ---- Visual 3: bars -------------------------------------------------------------------------
function Bars() {
  const Y = (v) => 210 - v * 180
  return (
    <Svg w={360} h={260} label="KNO₃ yield: 0.29 cooling only, 0.65 with half the water evaporated">
      <Arrow x1={50} y1={210} x2={340} y2={210} />
      <Arrow x1={50} y1={210} x2={50} y2={20} />
      {[0.25, 0.5, 0.75, 1].map((v) => <text key={v} x={43} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={56} y={22} anchor="start" size={12} t="var-f">Y</Label>
      {[['cooling only', 0.29, 'var-e'], ['+ φ_E = 0.5', 0.65, 'var-d']].map(([n, v, t], i) => (
        <g key={n}>
          <rect x={90 + i * 130} y={Y(v)} width={80} height={Y(0) - Y(v)} style={{ ...shade(t, 40), stroke: tone(t), strokeWidth: 1.5 }} />
          <text x={130 + i * 130} y={Y(v) - 6} textAnchor="middle" className="svg-label">{v}</text>
          <text x={130 + i * 130} y={228} textAnchor="middle" className="svg-sub">{n}</text>
        </g>
      ))}
      <Label x={195} y={252} size={11} t="muted">KNO₃ 80 → 50 °C</Label>
    </Svg>
  )
}

// ---- Visual 4: yield map ------------------------------------------------------------------
function YieldMap({ r, phi }) {
  const X = (p) => 60 + (p / 0.9) * 360
  const Y = (y) => 250 - y * 220
  const lines = [
    { r: 0.458, t: 'var-c', n: 'r = 0.458 (KNO₃ exam)' },
    { r: 0.71, t: 'var-e', n: 'r = 0.71 (KNO₃ lecture)' },
    { r: 0.563, t: 'var-d', n: 'r = 0.563 (sugar)' },
  ]
  return (
    <Svg w={480} h={300} label="Yield against fraction evaporated for three X_C/X_F ratios">
      <Arrow x1={60} y1={250} x2={430} y2={250} />
      <Arrow x1={60} y1={250} x2={60} y2={20} />
      {[0, 0.3, 0.6, 0.9].map((v) => <text key={v} x={X(v)} y={267} textAnchor="middle" className="svg-sub">{v}</text>)}
      {[0.25, 0.5, 0.75, 1].map((v) => <text key={v} x={53} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={430} y={286} anchor="end" size={12} t="var-d">φ_E</Label>
      <Label x={66} y={22} anchor="start" size={12} t="var-f">Y</Label>
      {lines.map((l, i) => (
        <g key={l.n}>
          <line x1={X(0)} y1={Y(1 - l.r)} x2={X(0.9)} y2={Y(1 - l.r * 0.1)} style={st(l.t)} />
          <Label x={X(0.02)} y={Y(1 - l.r) + (i === 0 ? -8 : 16)} anchor="start" size={10} t={l.t}>{l.n}</Label>
        </g>
      ))}
      <circle cx={X(0.56)} cy={Y(0.8)} r={6} style={{ fill: tone('example') }} />
      <Label x={X(0.56) + 8} y={Y(0.8) + 18} anchor="start" size={11} t="example">exam: φ_E = 0.56, Y = 0.80</Label>
      {r != null && (
        <g>
          <line x1={X(0)} y1={Y(1 - r)} x2={X(0.9)} y2={Y(1 - r * 0.1)} style={st('var-f', true, 1.5)} />
          <circle cx={X(phi)} cy={Y(1 - r * (1 - phi))} r={6} style={{ fill: tone('var-f') }} />
        </g>
      )}
    </Svg>
  )
}

// ---- Interactive -------------------------------------------------------------------------
function YieldExplorer() {
  const [XF, setXF] = useState(1.0)
  const [XC, setXC] = useState(0.458)
  const [phi, setPhi] = useState(0)
  const xc = Math.min(XC, XF)
  const Fp = 100
  const Y = 1 - (xc / XF) * (1 - phi)
  const C = Fp * (XF - xc * (1 - phi))
  return (
    <Diagram
      title="Yield and crystal rate"
      caption={String.raw`$Y = 1 - \frac{X_C}{X_F}(1-\phi_E)$ and $C = F'(X_F - X_C(1-\phi_E))$ with $F' = 100$ kg water/h [Week 8, p. 16; FormelarkKP3010.pdf, p. 7, eq. 75–76]. Start values (exam KNO₃): $X_F = 1.00$, $X_C = 0.458$, $\phi_E = 0$.`}
      cite={`[${W8}, p. 16; ${FS}, p. 7, eq. 75–76; ${PX2}, Q6.2–6.3]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="a"><M>X_F</M></V> = <strong>{XF.toFixed(3)}</strong></span>
            <input type="range" min={0.2} max={2} step={0.001} value={XF} onChange={(e) => setXF(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="b"><M>X_C</M></V> = <strong>{xc.toFixed(3)}</strong></span>
            <input type="range" min={0} max={2} step={0.001} value={xc} onChange={(e) => setXC(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="d"><M>{String.raw`\phi_E`}</M></V> = <strong>{phi.toFixed(2)}</strong></span>
            <input type="range" min={0} max={0.9} step={0.01} value={phi} onChange={(e) => setPhi(Number(e.target.value))} />
          </label>
        </div>
        <p style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <button type="button" className="reveal" onClick={() => { setXF(1); setXC(0.458); setPhi(0) }}>exam Y_max</button>
          <button type="button" className="reveal" onClick={() => { setXF(1); setXC(0.458); setPhi(0.56) }}>exam 80 % target</button>
          <span><V c="f"><M>Y</M> = {Y.toFixed(3)}</V> · <V c="c"><M>C</M> = {C.toFixed(1)}</V> kg/h</span>
        </p>
        <YieldMap r={xc / XF} phi={phi} />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Count solvent, then whatever doesn't stay dissolved is crystal">
        <MentalModel cite={`[${W8}, p. 11–16; ${PX2}, Q6.3]`}>
          <T text="Track the solvent, because it doesn't crystallize (except in hydrates). A feed with F′ kg of solvent carries $F'X_F$ kg of solute in [Week 8, p. 11]. Some solvent may boil off ($V' = \phi_EF'$), and the rest leaves as mother liquor ($S' = F'(1-\phi_E)$), saturated, so it holds $S'X_C$ kg of solute [Week 8, p. 12]." />
          <p>
            Whatever solute isn&apos;t in the liquor is <V c="c">crystals</V>: <M>{String.raw`C = F'X_F - S'X_C`}</M> [Week 8, p. 11]. The{' '}
            <V c="f">yield</V> is that over what came in. It improves when the end solubility <V c="b"><M>X_C</M></V> is low compared to{' '}
            <V c="a"><M>X_F</M></V> (cool more) or when less solvent remains to hold solute (evaporate more) [Week 8, p. 16]. Cooling alone
            is capped by the solubility curve, and evaporation lifts that cap. That is why the exam asks how much water to evaporate to hit
            a target yield [practice exam 2 solutions.pdf, Q6.3].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Balances, evaporation and yield">
        <Diagram title="Crystallizer flowsheet" cite={`[${W8}, p. 11–12]`} caption="Solute-free solvent flows with solute weight ratios; mother liquor leaves saturated.">
          <Flowsheet />
        </Diagram>
        <Columns>
          <div>
            <Def term="Solute-free basis" cite={`[${W8}, p. 11]`}>{String.raw`Solvent flows $F'$ (feed), $V'$ (vapour), $S'$ (mother liquor), and solute weight ratios $X_F$, $X_C$. Evaporative crystallization has three relevant phases.`}</Def>
            <Def term="Overall mass balance" cite={`[${W8}, p. 11]`}>$F = V + S + C$.</Def>
            <Def term={String.raw`Fraction evaporated $\phi_E$`} cite={`[${W8}, p. 12]`}>{String.raw`$V' = F'\phi_E$ and $S' = F'(1-\phi_E)$.`}</Def>
            <Def term="Exit composition" cite={`[${W8}, p. 12]`}>Often the saturation composition at the crystallizer conditions.</Def>
          </div>
          <div>
            <Def term="Yield Y" cite={`[${W8}, p. 16]`}>{String.raw`How much of the solute is recovered, $C/(F'X_F)$.`}</Def>
            <Def term="Hydrated crystals" cite={`[${E8E}, Problem 3]`}>If the product is a hydrate (e.g. CuSO₄·5H₂O), the crystals carry water out, so the water balance must include it.</Def>
            <Def term="Multi-step evaporation" cite={`[${E8E}, Problem 4 and short answer]`}>With 20 % of the initial feed water evaporated in each of three steps, 60 % of the feed water is removed in total.</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="KNO₃ cooling path on the solubility curve" cite={`[${W8}, p. 13–15]`}
            caption="(80 °C, 1.2) cooled to 50 °C drops to the curve at 0.85: 0.35 kg crystals per kg water, 29 % crystallized. Curve shape schematic; only the quoted points are exact.">
            <KnoPath />
          </Diagram>
          <Diagram title="Cooling only vs cooling + evaporation" cite={`[${W8}, p. 15, 18]`} caption="KNO₃ 80 → 50 °C.">
            <Bars />
          </Diagram>
        </Columns>

        <Diagram title="Yield map" cite={`[${W8}, p. 16; ${PX2}, Q6.2–6.3]`} caption="Y = 1 − r(1 − φ_E) for r = X_C/X_F; the exam point φ_E = 0.56, Y = 0.80.">
          <YieldMap />
        </Diagram>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="bal" />
        <Eq id="solute" />
        <Eq id="evap" />
        <Eq id="Y" />
        <Eq id="C" />
        <YieldExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="KNO₃ cooled from 80 to 50 °C, without and with evaporation"
          given="Feed 1.2 kg/L KNO₃ in water at 80 °C, cooled to 50 °C."
          steps={[
            { body: 'Saturation at 50 °C from the curve: about 85 g/100 mL = 0.85 kg/L.' },
            { body: String.raw`With water ≈ 1 kg/L: $X_F = 1.2$ and $X_C = 0.85$ kg KNO₃/kg water.` },
            { body: String.raw`No vapour, so $F' = S'$. Basis $F' = 1$ kg/s.` },
            { body: String.raw`Solute in: $F'X_F = 1.2$ kg/s.` },
            { body: String.raw`Balance: $1.2 = C + 1\cdot 0.85$, so $C = 0.35$ kg/s.` },
            { body: String.raw`Fraction crystallized: $0.35/1.2 = 0.29$.` },
            { body: String.raw`Now evaporate half the water, $\phi_E = 0.5$: $Y = 1 - \frac{0.85}{1.2}(1 - 0.5) = 0.65$.` },
          ]}
          result="Y = 0.29 (cooling only), 0.65 (half the water evaporated)"
          cite={`[${W8}, p. 13–18]`}
        />
        <FadedExample
          title="KNO₃ yield and the evaporation needed for 80 %"
          given="100 g KNO₃ per 100 mL water at 60 °C, cooled to 30 °C. Water density 1 kg/L. The figure gives 45.8 g/100 mL at 30 °C."
          steps={[
            { title: 'Feed ratio.', body: String.raw`$X_F = 100/100 = 1.00$.`, hidden: true },
            { title: 'Mother-liquor ratio.', body: String.raw`$X_C = 0.458$.`, hidden: true },
            { title: 'Maximum yield with cooling only.', body: String.raw`$Y_{max} = 1 - 0.458/1.00 = 0.542$.`, hidden: true },
            { body: String.raw`Target Y = 0.80 by also evaporating water: $0.80 = 1 - \frac{0.458}{1.00}(1 - \phi_E)$.` },
            { title: String.raw`Solve for $\phi_E$.`, body: String.raw`$1 - \phi_E = 0.20/0.458 = 0.437$, so $\phi_E = 0.56$.`, hidden: true },
          ]}
          cite={`[${PX2}, Q6.2–6.3]`}
        />
        <Gap>{"Exercise 8 official solutions exist only for Problem 1. The worked steps for Problems 3–4 above are computed from the task data and match the short answers. Problem 4c's brine feed (short answer 208 490 kg/h) isn't reproduced step by step."}</Gap>
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Ratios, not fractions" cite={`[${PX2}, Q6.2; ${W8}, p. 11]`}>{"X is kg solute per kg solvent. Solubility in g/100 g water divides by 100 directly (45.8 → 0.458). Don't convert to wt %."}</Trap>
        <Trap title={String.raw`$X_C$ is read at the final temperature`} cite={`[${W8}, p. 12]`}>{"It's the saturation value in the crystallizer, not at the feed temperature."}</Trap>
        <Trap title={String.raw`$\phi_E$ is a fraction of the feed solvent`} cite={`[${W8}, p. 12; ${E8E}, Problem 3]`}>{String.raw`$S' = F'(1-\phi_E)$. Evaporating 38 kg/h out of 1000 kg/h is $\phi_E = 0.038$.`}</Trap>
        <Trap title="Yield is based on solute in" cite={`[${W8}, p. 16]`}>{String.raw`$Y = C/(F'X_F)$. Dividing by the feed mass gives a different number.`}</Trap>
        <Trap title="kg/L ≈ kg/kg" cite={`[${W8}, p. 15]`}>The lecture treats 1.2 kg/L as 1.2 kg per kg water, which assumes water at 1 kg/L.</Trap>
        <Trap title="Hydrates break the simple formula" cite={`[${E8E}, Problem 3]`}>{String.raw`For CuSO₄·5H₂O, the crystals remove water too. Write separate water and salt balances, because $C = F'(X_F - X_C(1-\phi_E))$ no longer holds as is.`}</Trap>
        <Trap title="Multi-step evaporation adds up on the initial water" cite={`[${E8E}, Problem 4]`}>{String.raw`3 × 20 % of the **initial** feed water means $\phi_E = 0.6$.`}</Trap>
      </Section>
    </>
  )
}
