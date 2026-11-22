import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W5 = 'Week 5 - Efficiency and mass transfer with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E5 = 'exercise_05_solutions.pdf'
const E5E = 'exercise_05_eng.pdf'

export const meta = {
  title: 'HTU/NTU — packed height from mass transfer',
  topic: 'mass-transfer',
  examWeight: {
    level: 'low',
    note: 'Not on either practice exam (both use HETP instead); exercise 5 Oppg. 3 uses it',
  },
  examTasks: ['None on either practice exam. Both use HETP × NTS for packed height (page 14).'],
  buildsOn: ['11-kremser-minimum-absorbent-flow', '14-column-height-pressure-drop', '15-film-model-mass-transfer'],
  usedIn: [],
  sources: [`[${W5}, p. 2, 13–19]`, `[${FS}, p. 5, eq. 47–51]`, `[${E5E}, Exercise 3]`, `[${E5}, Oppg. 3a–c]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Is the height of a transfer unit (HTU) the same as the HETP?', a: 'No. HTU ≠ HETP and NTU ≠ NTS. [Week 5, p. 14]' },
    { id: 'p2', kind: 'pretest', q: 'Which two quantities do you multiply to get packed height in the mass-transfer approach?', a: '$H = HTU\\cdot NTU$. [Week 5, p. 19; FormelarkKP3010.pdf, p. 5, eq. 47]' },
    { id: 'p3', kind: 'pretest', q: 'What does $A_h$ mean in $HTU = Q_V/(k_{OV}A_h)$?', a: 'The interfacial area per metre of column height (m²/m): specific area × cross-section. [Week 5, p. 13, 18]' },
    { id: 't1', q: 'Write HTU and NTU and say which depends on hardware and which on the separation.', a: '$HTU = Q_V/(k_{OV}A_h)$ depends on flow, packing and $k_{OV}$. $NTU = \\int dy/(y^* - y)$ depends on compositions and equilibrium. [Week 5, p. 14]' },
    { id: 't2', q: 'Packing with $a_i = 207$ m²/m³ in a column of 0.15 m² cross-section. What is $A_h$?', a: '$31.05$ m²/m. [Week 5, p. 18]' },
    { id: 't3', q: 'With A = 1.17 and NTS = 4.47, what is NTU?', a: '$4.47\\cdot\\frac{1.17\\ln 1.17}{0.17} = 4.83$. [exercise_05_solutions.pdf, Oppg. 3c]' },
    { id: 't4', q: 'HTU = 0.386 m and NTU = 4.83. Packed height?', a: '1.86 m. [exercise_05_solutions.pdf, Oppg. 3c]' },
    { id: 't5', q: 'In which special case are the operating and equilibrium lines straight, so the NTS→NTU shortcut applies?', a: 'Linear operating and equilibrium lines, e.g. dilute absorption with $y^* = Kx$. [Week 5, p. 15]' },
  ],
  equations: [
    {
      id: 'diff',
      label: 'Differential gas-phase balance',
      tex: String.raw`V\frac{d\vb{y}}{dh} = -\vc{k_{OV}}\rho_V (\vb{y} - \va{y^*})\vd{A_h} \;\Rightarrow\; \frac{d\vb{y}}{dh} = \frac{\vc{k_{OV}}\vd{A_h}}{\ve{Q_V}}(\va{y^*} - \vb{y})`,
      vars: [
        { sym: String.raw`V`, desc: 'molar gas flow', unit: String.raw`\mathrm{mol/s}` },
        { sym: String.raw`\vb{y}`, desc: 'gas mole fraction of solute', unit: '–' },
        { sym: String.raw`\va{y^*}`, desc: 'gas composition in equilibrium with the local liquid, $Kx$', unit: '–' },
        { sym: String.raw`\vc{k_{OV}}`, desc: 'overall mass transfer coefficient', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`\rho_V`, desc: 'gas molar density', unit: String.raw`\mathrm{mol/m^3}` },
        { sym: String.raw`\vd{A_h}`, desc: 'interfacial area per m column', unit: String.raw`\mathrm{m^2/m}` },
        { sym: String.raw`\ve{Q_V} = V/\rho_V`, desc: 'volumetric gas flow', unit: String.raw`\mathrm{m^3/s}` },
        { sym: String.raw`h`, desc: 'height coordinate', unit: String.raw`\mathrm{m}` },
      ],
      cite: `[${W5}, p. 13]`,
      check: { status: 'verified', note: 'Matches W5 p. 13.' },
    },
    {
      id: 'height',
      label: 'Packed height',
      tex: String.raw`H = \underbrace{\frac{\ve{Q_V}}{\vc{k_{OV}}\vd{A_h}}}_{HTU}\cdot\underbrace{\int_{y_{in}}^{y_{out}}\frac{1}{\va{y^*} - \vb{y}}\,d\vb{y}}_{NTU} = HTU\cdot NTU`,
      vars: [
        { sym: String.raw`H`, desc: 'packed height', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`HTU`, desc: 'height of a transfer unit', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`NTU`, desc: 'number of transfer units', unit: '–' },
      ],
      note: 'Integrated from h = 0 ($y = y_{in}$) to h = H ($y = y_{out}$).',
      cite: `[${W5}, p. 14; ${FS}, p. 5, eq. 47–49]`,
      check: { status: 'verified', note: 'Matches W5 p. 14 and formula sheet eq. 47–49.' },
    },
    {
      id: 'ah',
      label: 'Interfacial area per metre of column',
      tex: String.raw`\vd{A_h} = a_i\cdot S`,
      vars: [
        { sym: String.raw`a_i`, desc: 'specific surface area of the packing', unit: String.raw`\mathrm{m^2/m^3}` },
        { sym: String.raw`S`, desc: 'column cross-sectional area', unit: String.raw`\mathrm{m^2}` },
      ],
      cite: `[${W5}, p. 18]`,
      check: { status: 'verified', note: 'Matches W5 p. 18.' },
    },
    {
      id: 'ntu',
      label: 'NTU for straight operating and equilibrium lines',
      tex: String.raw`NTU = NTS\cdot\frac{\vf{A}\ln \vf{A}}{\vf{A} - 1}, \quad \vf{A} = \frac{L}{KG} \qquad\text{or}\qquad NTU = NTS\cdot\frac{S\ln S}{S - 1}, \quad S = \frac{KG}{L}`,
      vars: [
        { sym: String.raw`NTS`, desc: 'number of theoretical stages (e.g. Kremser)', unit: '–' },
        { sym: String.raw`\vf{A}, S`, desc: 'absorption and stripping factor', unit: '–' },
      ],
      note: 'Linear operating and equilibrium lines only.',
      cite: `[${W5}, p. 15; ${FS}, p. 5, eq. 50–51]`,
      check: { status: 'verified', note: 'Matches W5 p. 15 and formula sheet eq. 50–51 (the formula itself is consistent; the slide\'s Example 2 arithmetic is not — see the source check under the worked example).' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const ratio = (A) => (Math.abs(A - 1) < 1e-9 ? 1 : (A * Math.log(A)) / (A - 1))

// ---- Visual 1: slice balance ---------------------------------------------------
function Slice() {
  return (
    <Svg w={520} h={320} label="Packed column with a thin slice: gas in with y, out with y + Δy, transfer to the liquid">
      <rect x={120} y={20} width={140} height={280} rx={12} style={st('ink', false, 2)} />
      {Array.from({ length: 30 }, (_, i) => <circle key={i} cx={138 + (i % 6) * 21} cy={40 + Math.floor(i / 6) * 55} r={5} style={{ fill: 'none', stroke: tone('muted'), strokeWidth: 1.2 }} />)}
      <rect x={120} y={140} width={140} height={40} style={{ fill: `color-mix(in srgb, ${tone('var-f')} 30%, var(--bg))`, stroke: tone('var-f'), strokeWidth: 2 }} />
      <Label x={110} y={165} anchor="end" size={12} t="var-f">Δh</Label>
      <Arrow x1={190} y1={215} x2={190} y2={182} t="var-b" />
      <Label x={198} y={210} anchor="start" size={12} t="var-b">V, y</Label>
      <Arrow x1={190} y1={138} x2={190} y2={104} t="var-b" />
      <Label x={198} y={112} anchor="start" size={12} t="var-b">V, y + Δy</Label>
      <Arrow x1={262} y1={160} x2={330} y2={160} t="var-c" />
      <Label x={336} y={156} anchor="start" size={12} t="var-c">k_OV ρ_V (y − y*) A_h Δh</Label>
      <Label x={336} y={174} anchor="start" size={12} t="var-a">y* = Kx</Label>
      <Label x={336} y={230} anchor="start" size={11} t="var-d">A_h = m² interface</Label>
      <Label x={336} y={244} anchor="start" size={11} t="var-d">per m column</Label>
    </Svg>
  )
}

// ---- Visual 2: driving force on y–x (schematic) ---------------------------------
function DrivingForce() {
  const x0 = 60
  const y0 = 20
  const w = 320
  const h = 260
  const X = (v) => x0 + v * w
  const Y = (v) => y0 + h - v * h
  const K = 0.6
  const op = (x) => 0.12 + 1.1 * x
  return (
    <Svg w={430} h={330} label="Operating line above a straight equilibrium line; vertical gaps are the local driving force">
      <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      <Label x={x0 + w} y={y0 + h + 22} anchor="end" size={13} t="var-a">x</Label>
      <Label x={x0 + 6} y={y0 - 2} anchor="start" size={13} t="var-b">y</Label>
      <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(K)} style={st('var-a')} />
      <line x1={X(0.05)} y1={Y(op(0.05))} x2={X(0.75)} y2={Y(op(0.75))} style={st('var-e')} />
      {[0.15, 0.35, 0.55, 0.7].map((x) => (
        <g key={x}>
          <line x1={X(x)} y1={Y(op(x)) + 4} x2={X(x)} y2={Y(K * x) - 4} style={st('var-c', false, 2)} />
        </g>
      ))}
      <Label x={X(0.36)} y={Y((op(0.35) + K * 0.35) / 2)} anchor="start" size={12} t="var-c">y − y*</Label>
      <Label x={X(0.95)} y={Y(K * 0.95) + 18} anchor="end" size={12} t="var-a">y* = Kx</Label>
      <Label x={X(0.75)} y={Y(op(0.75)) - 8} anchor="end" size={12} t="var-e">operating line</Label>
      <circle cx={X(0.05)} cy={Y(op(0.05))} r={5} style={{ fill: tone('ink') }} />
      <Label x={X(0.05) + 8} y={Y(op(0.05)) - 8} anchor="start" size={11}>top (x_in, y_out)</Label>
      <circle cx={X(0.75)} cy={Y(op(0.75))} r={5} style={{ fill: tone('ink') }} />
      <Label x={X(0.75) + 8} y={Y(op(0.75)) + 16} anchor="start" size={11}>bottom (x_out, y_in)</Label>
    </Svg>
  )
}

// ---- Visual 3: NTU as an area (schematic) ----------------------------------------
function NtuArea() {
  const x0 = 70
  const y0 = 20
  const w = 340
  const h = 230
  const yo = 0.005
  const yi = 0.03
  const X = (v) => x0 + ((v - yo) / (yi - yo)) * w
  const f = (y) => 1 / (y - 0.4 * (y - yo) * 0.6) // schematic: driving force shrinks towards y_out
  const fmax = f(yo)
  const Y = (v) => y0 + h - (v / (fmax * 1.1)) * h
  const ys = Array.from({ length: 60 }, (_, i) => yo + (i / 59) * (yi - yo))
  const pts = ys.map((y) => `${X(y)},${Y(f(y))}`).join(' ')
  return (
    <Svg w={460} h={300} label="Integrand 1/(y − y*) against y; the shaded area is NTU">
      <polygon points={`${X(yo)},${Y(0)} ${pts} ${X(yi)},${Y(0)}`} style={{ fill: `color-mix(in srgb, ${tone('var-f')} 25%, var(--bg))` }} />
      <polyline points={pts} style={st('var-f')} />
      <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      <Label x={X(yo)} y={y0 + h + 18} size={12}>y_out</Label>
      <Label x={X(yi)} y={y0 + h + 18} size={12}>y_in</Label>
      <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13} t="var-b">y (–)</Label>
      <Label x={x0 + 6} y={y0 - 2} anchor="start" size={13} t="var-f">1/(y − y*)</Label>
      <Label x={X(0.016)} y={Y(f(0.016) * 0.4)} size={16} t="var-f">NTU</Label>
    </Svg>
  )
}

// ---- Visual 4: two views table ----------------------------------------------------
function TwoViews() {
  return (
    <Svg w={560} h={160} label="Stage view H = HETP · NTS versus rate view H = HTU · NTU with Example 2 numbers">
      <rect x={10} y={10} width={540} height={56} rx={8} style={{ fill: `color-mix(in srgb, ${tone('muted')} 12%, var(--bg))` }} />
      <Label x={24} y={44} anchor="start" size={15}>stage view:  H = HETP · NTS</Label>
      <rect x={10} y={80} width={540} height={70} rx={8} style={{ fill: `color-mix(in srgb, ${tone('var-f')} 18%, var(--bg))`, stroke: tone('var-f'), strokeWidth: 1.5 }} />
      <Label x={24} y={108} anchor="start" size={15}>rate view:  H = HTU · NTU</Label>
      <Label x={24} y={134} anchor="start" size={12} t="muted">Example 2 (as on the slide): HTU = 3.14 m, NTU = 4.22, H = 13.3 m, NTS = 0.428 → NTU ≠ NTS</Label>
    </Svg>
  )
}

// ---- Interactive --------------------------------------------------------------------
function RatioExplorer() {
  const [lA, setLA] = useState(Math.log10(63.7))
  const A = 10 ** lA
  const x0 = 64
  const y0 = 20
  const w = 380
  const h = 230
  const lmin = Math.log10(1.05)
  const lmax = Math.log10(70)
  const X = (a) => x0 + ((Math.log10(a) - lmin) / (lmax - lmin)) * w
  const Y = (r) => y0 + h - ((r - 1) / 4) * h
  const as = Array.from({ length: 80 }, (_, i) => 10 ** (lmin + (i / 79) * (lmax - lmin)))
  const marks = [
    { a: 63.7, lab: 'Example 2' },
    { a: 1.17, lab: 'exercise 5 Oppg. 3' },
  ]
  return (
    <Diagram
      title="NTU / NTS vs absorption factor"
      caption={String.raw`$NTU/NTS = \dfrac{A\ln A}{A-1}$ [Week 5, p. 15], log slider for A. As $A \to 1$ the ratio → 1. Marked: A = 63.7 (Example 2) and A = 1.17 (exercise 5, Oppg. 3, ratio ≈ 1.08). The content file labels A = 63.7 "ratio ≈ 9.9"; the formula gives 4.22 — see the source check under the worked example.`}
      cite={`[${W5}, p. 15, 18–19; ${E5}, Oppg. 3c]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="f"><M>A</M></V> = <strong>{A.toFixed(2)}</strong></span>
            <input type="range" min={lmin} max={lmax} step={0.005} value={lA} onChange={(e) => setLA(Number(e.target.value))} />
          </label>
        </div>
        <p>NTU / NTS = <strong>{ratio(A).toFixed(3)}</strong></p>
        <Svg w={480} h={300} label="NTU/NTS ratio against A on a log axis">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {[1.05, 2, 5, 10, 20, 50].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
          {[1, 2, 3, 4, 5].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
          <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13} t="var-f">A (log)</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13}>NTU / NTS</Label>
          <polyline points={as.map((a) => `${X(a)},${Y(ratio(a))}`).join(' ')} style={st('var-f')} />
          {marks.map((m) => (
            <g key={m.lab}>
              <circle cx={X(m.a)} cy={Y(ratio(m.a))} r={5} style={{ fill: 'none', stroke: tone('example'), strokeWidth: 2 }} />
              <Label x={X(m.a) + (m.a > 10 ? -8 : 8)} y={Y(ratio(m.a)) - 10} anchor={m.a > 10 ? 'end' : 'start'} size={11} t="example">{`${m.lab}: ${ratio(m.a).toFixed(2)}`}</Label>
            </g>
          ))}
          <circle cx={X(A)} cy={Y(ratio(A))} r={6} style={{ fill: tone('var-f') }} />
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Height from the transfer rate">
        <MentalModel cite={`[${W5}, p. 2, 13–15]`}>
          <T text="HETP needs a rule of thumb. The mass-transfer approach builds the height from the transfer rate instead [Week 5, p. 2]. Take a thin slice of packing. Whatever solute the gas loses in the slice is what crosses the interface there, at rate $k_{OV}\rho_V(y - y^*)$ times the interface area in the slice [Week 5, p. 13]." />
          <p>
            Integrating that balance up the column splits the height into two factors [Week 5, p. 14]. HTU (
            <M>{String.raw`Q_V/k_{OV}A_h`}</M>) says how tall a slice must be for the gas composition to change by one &quot;driving
            force&apos;s worth&quot;. It depends on flows, packing and <V c="c"><M>{String.raw`k_{OV}`}</M></V>. NTU (
            <M>{String.raw`\int dy/(y^*-y)`}</M>) says how many of those units the separation needs. It depends only on compositions and
            equilibrium. When both the operating and equilibrium lines are straight, as in dilute absorption, NTU follows from the
            Kremser stage count through a factor depending only on <V c="f"><M>A</M></V> [Week 5, p. 15].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Slice balance, HTU and NTU">
        <Columns>
          <Diagram title="Slice balance in a packed column" cite={`[${W5}, p. 13]`} caption="What the gas loses in Δh is transferred to the liquid.">
            <Slice />
          </Diagram>
          <div>
            <Def term="Why a mass-transfer model" cite={`[${W5}, p. 2]`}>
              {"For packed columns the earlier approach was theoretical stages (McCabe–Thiele/Kremser) × HETP. If HETP isn't known, use either the approximation (HETP = 18·d_p) or a more accurate mass-transfer model."}
            </Def>
            <Def term="Differential slice balance" cite={`[${W5}, p. 13]`}>
              {String.raw`What is lost from the gas is transferred to the liquid. Rate $k_{OV}\rho_V(y - y^*)A_h\Delta h$, with $y^* = Kx$.`}
            </Def>
            <Def term={String.raw`$A_h$`} cite={`[${W5}, p. 13, 18]`}>
              {String.raw`Interfacial area per metre of column (m²/m), $A_h = a_i\cdot S$ (specific area × cross-sectional area).`}
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Driving force along the column" cite={`[${W5}, p. 13–15]`} caption="Straight equilibrium and operating lines; the vertical gap is the local driving force y − y*. Schematic.">
            <DrivingForce />
          </Diagram>
          <Diagram title="NTU as an area" cite={`[${W5}, p. 14]`} caption="The integrand 1/(y − y*) rises as the driving force shrinks; the area from y_out to y_in is NTU. Schematic shape.">
            <NtuArea />
          </Diagram>
        </Columns>
        <Columns>
          <div>
            <Def term="Height of a transfer unit (HTU)" cite={`[${W5}, p. 14; ${FS}, p. 5, eq. 48]`}>{String.raw`$Q_V/(k_{OV}A_h)$.`}</Def>
            <Def term="Number of transfer units (NTU)" cite={`[${W5}, p. 14; ${FS}, p. 5, eq. 49]`}>{String.raw`$\int_{y_{in}}^{y_{out}} \frac{dy}{y^* - y}$.`}</Def>
          </div>
          <div>
            <Def term="Not equal to the stage concepts" cite={`[${W5}, p. 14]`}>HTU ≠ HETP and NTU ≠ NTS.</Def>
            <Def term="Linear case" cite={`[${W5}, p. 15]`}>With linear operating and equilibrium lines (e.g. absorption), NTU follows from NTS and A (or S).</Def>
          </div>
        </Columns>
        <Diagram title="HTU × NTU vs HETP × NTS" cite={`[${W5}, p. 14, 18–19]`} caption="Two ways to get packed height. The Example 2 numbers are shown as printed on the slide.">
          <TwoViews />
        </Diagram>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="diff" />
        <Eq id="height" />
        <Eq id="ah" />
        <Eq id="ntu" />
        <RatioExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title='NH₃ absorber with 1" metal Pall rings'
          given={String.raw`Gas in 20 mol/s with 3 mol % NH₃, reduced to 0.5 mol %. Liquid out 520 mol/s, pure water in. $y = 0.42x$, $a_{VL} = 207$ m²/m³, cross-section 0.15 m², $k_{OV} = 5.0\cdot 10^{-3}$ m/s, $\rho_V = 41$ mol/m³ (constant).`}
          steps={[
            { body: String.raw`Inert gas: $G' = 20(1 - 0.03) = 19.4$, so $G_{out} = G'/(1 - 0.005) = 19.41$.` },
            { body: String.raw`Liquid in from the total balance: $L_{in} = L_{out} + G_{out} - G_{in} = 520 + 19.41 - 20 = 519.4$. Pure water, so $L' = 519.4$.` },
            { body: String.raw`Liquid out: $x_{out} = 1 - L'/L_{out} = 1.14\cdot 10^{-3}$. Equilibrium: $y^*_{out} = Kx_{out} = 4.77\cdot 10^{-4}$ and $y^*_{in} = Kx_{in} = 0$.` },
            { body: String.raw`Gas volume flow: $Q_V = 20/41 = 0.49$ m³/s.` },
            { body: String.raw`Area per metre: $A_h = 207\cdot 0.15 = 31.05$ m²/m.` },
            { body: String.raw`$HTU = 0.49/(5\cdot 10^{-3}\cdot 31.05) = 3.14$ m.` },
            { body: String.raw`Absorption factor: $A = L'/(KG') = 519.4/(0.42\cdot 19.4) = 63.7$.` },
            { body: String.raw`Kremser: $NTS = \dfrac{\ln\left[\frac{0.03}{0.005}(1 - \frac{1}{63.7}) + \frac{1}{63.7}\right]}{\ln 63.7} = 0.428$.` },
            { body: String.raw`$NTU = 0.428\cdot\dfrac{63.7\ln 63.7}{63.7 - 1} = 4.22$.` },
            { body: String.raw`$H = HTU\cdot NTU = 3.14\cdot 4.22 = 13.3$ m.` },
          ]}
          result="H = 13.3 m (as on the slide — see the source check below)"
          cite={`[${W5}, p. 16–19]`}
        />
        <div className="eq-mismatch">
          <T text={String.raw`**Source check (steps 9–10):** $\frac{63.7\ln 63.7}{62.7} = 4.22$ is the **ratio** NTU/NTS; multiplied by NTS = 0.428 it gives $NTU \approx 1.81$, not 4.22 [Week 5, p. 19]. That fits a direct estimate: with $y^* \approx 0$, $NTU \approx \ln(0.03/0.005) = 1.79$. The slide's $H = 13.3$ m would then be about $3.14\cdot 1.81 \approx 5.7$ m. The values above are shown unchanged, as in the content file.`} />
        </div>
        <FadedExample
          title="SO₂ absorber with a new packing"
          given={String.raw`2886 m³/h waste gas with 4 vol % SO₂, reduced to 0.5 vol %. 1 atm, 25 °C, pure water, $y = 22x$ (and $Y = 22X$). $k_{OV} = 0.02$ m/s, $a = 105$ m²/m³, D = 1.1 m, $L' = 1.33L'_{min}$.`}
          steps={[
            { body: String.raw`Total gas in (ideal gas): $\dot n = \frac{101325\cdot 2886}{8.314\cdot 298.15} = 117.97$ kmol/h.` },
            { title: 'Inert gas.', body: String.raw`$G' = 117.97\cdot 0.96 = 113.25$ kmol/h $= 31.46$ mol/s.`, hidden: true },
            { title: String.raw`$L'_{min}$ with $X_N = Y_{N+1}/K$.`, body: String.raw`$Y_{N+1} = 0.042$, $Y_1 = 0.005$, $X_N = 0.00189$, $L'_{min} = 2191$ kmol/h, so $L' = 2914$ kmol/h $= 809.5$ mol/s.`, hidden: true },
            { title: 'A and NTS.', body: String.raw`$A = 809.5/(22\cdot 31.46) = 1.17$, and Kremser gives $NTS = 4.47$.`, hidden: true },
            { title: 'NTU.', body: String.raw`$4.47\cdot\frac{1.17\ln 1.17}{0.17} = 4.83$.`, hidden: true },
            { title: String.raw`$Q_V$, $A_h$ and HTU.`, body: String.raw`$Q_V = 0.77$ m³/s, $S = \frac{\pi}{4}1.1^2 = 0.95$ m², $A_h = 99.8$ m²/m, $HTU = 0.77/(0.02\cdot 99.8) = 0.386$ m.`, hidden: true },
            { title: 'Height.', body: String.raw`$H = 0.386\cdot 4.83 = 1.86$ m.`, hidden: true },
          ]}
          cite={`[${E5E}, Exercise 3; ${E5}, Oppg. 3a–c]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="HTU ≠ HETP, NTU ≠ NTS" cite={`[${W5}, p. 14, 18–19]`}>
          {"In Example 2, NTS = 0.428 but NTU = 4.22. Don't multiply HTU by NTS."}
        </Trap>
        <Trap title={String.raw`$A_h$ is per metre of column`} cite={`[${W5}, p. 18]`}>
          Multiply the specific area (m²/m³) by the cross-section (m²). Using $a_i$ alone gives HTU in the wrong units.
        </Trap>
        <Trap title="Volumetric flow in HTU" cite={`[${W5}, p. 18]`}>
          {String.raw`$Q_V = G/\rho_V$ in m³/s, not the molar flow.`}
        </Trap>
        <Trap title="Straight lines only" cite={`[${W5}, p. 15]`}>
          {String.raw`The $A\ln A/(A-1)$ shortcut needs linear operating and equilibrium lines (dilute). Otherwise integrate NTU.`}
        </Trap>
        <Trap title="Which A" cite={`[${W5}, p. 18]`}>
          {String.raw`The slide shows $L_{in}/(KG_{out})$, $L_{out}/(KG_{in})$ or $L'/(KG')$ as options. They're nearly equal when dilute, so pick one and be consistent.`}
        </Trap>
        <Trap title="Units mix-up on the slide (source discrepancy)" cite={`[${W5}, p. 16–17]`}>
          {'Example 2 gives flows in mol/s but labels the intermediate flows "kmol/h". The numbers are consistent in mol/s.'}
        </Trap>
        <Trap title={String.raw`$Q_V$ basis (source discrepancy)`} cite={`[${W5}, p. 18; ${E5}, Oppg. 3c]`}>
          {"The slide uses the total gas flow (20 mol/s). The exercise uses the inert flow G′ (31.46 mol/s). Dilute, so the difference is small, but say which you use."}
        </Trap>
      </Section>
    </>
  )
}
