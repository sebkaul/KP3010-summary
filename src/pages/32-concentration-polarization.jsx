import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W9 = 'Week 9 - Membrane filtration with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E9 = 'exercise_09_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Concentration polarization and boundary-layer resistance',
  topic: 'membranes',
  examWeight: { level: 'medium', note: 'Effect of a permeate-side boundary-layer resistance on interface concentrations and flux in Autumn 2022 Q7c (3 pts)' },
  examTasks: ['Autumn 2022, Q7c: effect of a product-side boundary-layer resistance on the membrane interface concentrations and the solute flux.'],
  buildsOn: ['15-film-model-mass-transfer', '31-membrane-flux-permeability-selectivity'],
  usedIn: ['33-membrane-modules-design'],
  sources: [`[${W9}, p. 28–34]`, `[${FS}, p. 10, eq. 102]`, `[${E9}, Problems 2–3]`, `[${PX2}, Q7a–c]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'What happens to a fully retained solute near the membrane surface during filtration?', a: 'It accumulates at the interface. Its concentration there rises above the bulk value: concentration polarization. [Week 9, p. 28]' },
    { id: 'p2', kind: 'pretest', q: 'A permeate-side boundary-layer resistance appears in a dense-membrane setup. What happens to the flux?', a: 'It decreases. The concentration gradient inside the membrane gets smaller. [practice exam 2 solutions.pdf, Q7c]' },
    { id: 'p3', kind: 'pretest', q: 'In $c_m/c_b = \\exp(J/k)$, what does k stand for?', a: 'The mass-transfer coefficient of the boundary layer, $k = D/\\delta$. [Week 9, p. 29]' },
    { id: 't1', q: 'Derive $(c_m - c_P)/(c_b - c_P) = \\exp(J/k)$ in one line.', a: 'Integrate $Jc + D\\,dc/dx = Jc_P$ from x = 0 ($c_m$) to x = δ ($c_b$): $\\ln\\frac{c_m - c_P}{c_b - c_P} = J\\delta/D = J/k$. [Week 9, p. 29]' },
    { id: 't2', q: 'Name three consequences of concentration polarization.', a: 'Lower retention (higher $c_m$), possibly higher retention of other solutes (secondary membrane), lower flux. [Week 9, p. 30]' },
    { id: 't3', q: 'With $k_P \\to \\infty$, what flux does the Problem 3 membrane give?', a: '$J = K D(c_F - c_P)/\\delta_M = 1.5\\cdot 7\\cdot 10^{-11}\\cdot 25/3\\cdot 10^{-5} = 8.75\\cdot 10^{-5}$ mol/(m²·s). [exercise_09_solutions.pdf, Problems 2–3]' },
    { id: 't4', q: 'Why do dense gas-separation membranes usually show no boundary-layer resistance?', a: 'They are relatively thick and limit the flux themselves. [Week 9, p. 28]' },
    { id: 't5', q: 'If J doubles at constant k in the faded example, what is $c_m$?', a: '$\\exp(0.667) = 1.95$, so $c_m = 58.4$ mol/m³. [Week 9, p. 30–32]' },
  ],
  equations: [
    {
      id: 'bal',
      label: 'Boundary-layer mole balance and its solution',
      tex: String.raw`\begin{gathered} \vf{J} c_i + D_i\frac{dc_i}{dx} = \vf{J} \vb{c_{P,i}} \\ \Rightarrow\; \ln\frac{\va{c_m} - \vb{c_P}}{\vc{c_b} - \vb{c_P}} = \frac{\vf{J}\delta}{D_i} \\ \Rightarrow\; \frac{\va{c_m} - \vb{c_P}}{\vc{c_b} - \vb{c_P}} = \exp\left(\frac{\vf{J}}{\vd{k}}\right), \quad \vd{k} = \frac{D}{\delta} \end{gathered}`,
      vars: [
        { sym: String.raw`\vf{J}`, desc: 'volumetric permeate flux', unit: String.raw`\mathrm{m^3/(m^2\cdot s)} = \mathrm{m/s}` },
        { sym: String.raw`c_i`, desc: 'solute concentration in the boundary layer', unit: String.raw`\mathrm{mol/m^3}` },
        { sym: String.raw`\va{c_m}, \vc{c_b}, \vb{c_P}`, desc: 'concentration at the membrane, in the bulk, in the permeate', unit: String.raw`\mathrm{mol/m^3}` },
        { sym: String.raw`D_i`, desc: 'solute diffusivity', unit: String.raw`\mathrm{m^2/s}` },
        { sym: String.raw`\delta`, desc: 'boundary-layer thickness', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\vd{k}`, desc: 'boundary-layer mass-transfer coefficient', unit: String.raw`\mathrm{m/s}` },
      ],
      note: 'Steady state.',
      cite: `[${W9}, p. 28–29]`,
      check: { status: 'verified', note: 'Matches W9 p. 28–29.' },
    },
    {
      id: 'mod',
      label: 'Concentration polarization modulus',
      tex: String.raw`\frac{\va{c_m}}{\vc{c_b}} = \exp\left(\frac{\vf{J}}{\vd{k}}\right)`,
      vars: [],
      note: 'Fully retained solute ($R = 1$, $c_P = 0$).',
      cite: `[${W9}, p. 30; ${FS}, p. 10, eq. 102]`,
      check: { status: 'verified', note: 'Matches W9 p. 30 and formula sheet eq. 102 (on PDF p. 11; the content cites p. 10).' },
    },
    {
      id: 'sh',
      label: 'Mass-transfer coefficient correlations (circular tube)',
      tex: String.raw`\begin{gathered} Sh = \frac{\vd{k}D_h}{D_{im}} \\ \text{turbulent: } Sh = 0.023\,Re^{0.8}Sc^{0.25} \\ \text{laminar:} \\ Sh = 1.86\,Re^{0.33}Sc^{0.33}\left(\frac{D_h}{L}\right)^{0.33} \\ Re = \frac{\rho vD_h}{\eta},\quad Sc = \frac{\eta}{\rho D_{im}} \end{gathered}`,
      vars: [
        { sym: String.raw`Sh, Re, Sc`, desc: 'Sherwood, Reynolds, Schmidt numbers', unit: '–' },
        { sym: String.raw`D_h`, desc: 'hydraulic (tube) diameter', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`L`, desc: 'tube length', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`v`, desc: 'flow velocity', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`\eta`, desc: 'viscosity', unit: String.raw`\mathrm{Pa\cdot s}` },
      ],
      cite: `[${W9}, p. 33]`,
      check: { status: 'verified', note: 'Matches W9 p. 33 (not on the formula sheet).' },
    },
    {
      id: 'series',
      label: 'Dense membrane with a permeate-side boundary layer',
      tex: String.raw`\begin{gathered} \vf{J_A} = \frac{D_A}{\delta_M}(c_{A,z=0} - c_{A,z=\delta}) \\ \vf{J_A} = \vd{k_P}(c_{P,z=\delta} - \vb{c_P}) \\ c_{A,z=0} = K_A\va{c_F} \\ c_{A,z=\delta} = K_Ac_{P,z=\delta} \\ \Rightarrow\; \vf{J_A} = \frac{\va{c_F} - \vb{c_P}}{\dfrac{\delta_M}{D_AK_A} + \dfrac{1}{\vd{k_P}}} \end{gathered}`,
      vars: [
        { sym: String.raw`\vd{k_P}`, desc: 'permeate-side mass-transfer coefficient', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`c_{P,z=\delta}`, desc: 'permeate concentration right outside the membrane', unit: String.raw`\mathrm{mol/m^3}` },
        { sym: String.raw`c_{A,z=\delta}`, desc: 'concentration inside the membrane at the permeate face', unit: String.raw`\mathrm{mol/m^3}` },
      ],
      note: 'Steady state: equal fluxes in series.',
      cite: `[${W9}, p. 34; ${E9}, Problem 3]`,
      check: { status: 'verified', note: 'Flux pair matches W9 p. 34; partition and combined form match exercise 9 Problem 3 solution.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

// ---- Visual 1: polarization profile --------------------------------------------------------
function PolProfile({ cb = 30, ratio = 1.4, cmLabel }) {
  // membrane at left (x = 0), bulk to the right (x = δ). Feed flows toward the membrane (right → left).
  const mx = 130
  const dx = 360
  const top = Math.max(50, cb * ratio * 1.15)
  const Y = (c) => 210 - (c / top) * 170
  const n = 50
  const pts = Array.from({ length: n + 1 }, (_, i) => {
    const s = i / n
    const c = cb * Math.pow(ratio, 1 - s) // c_P = 0 → exp profile from c_m at x = 0 to c_b at x = δ
    return `${mx + s * (dx - mx)},${Y(c)}`
  })
  return (
    <Svg w={560} h={260} label="Concentration rises exponentially from the bulk to the membrane surface">
      <rect x={mx - 30} y={30} width={30} height={180} style={shade('muted', 40)} />
      <Label x={mx - 15} y={24} size={11} t="muted">membrane</Label>
      <rect x={mx} y={30} width={dx - mx} height={180} style={shade('var-d', 8)} />
      <line x1={20} y1={Y(0) - 1} x2={mx - 30} y2={Y(0) - 1} style={st('var-b')} />
      <Label x={60} y={Y(0) - 8} size={12} t="var-b">c_P</Label>
      <polyline points={pts.join(' ')} style={st('var-a')} />
      <line x1={dx} y1={Y(cb)} x2={540} y2={Y(cb)} style={st('var-c')} />
      <Label x={mx + 6} y={Y(cb * ratio) - 8} anchor="start" size={12} t="var-a">{cmLabel || 'c_m'}</Label>
      <Label x={540} y={Y(cb) - 8} anchor="end" size={12} t="var-c">c_b (bulk)</Label>
      <line x1={mx} y1={220} x2={dx} y2={220} style={st('var-d', false, 1.5)} />
      <Label x={(mx + dx) / 2} y={236} size={12} t="var-d">δ (boundary layer)</Label>
      <Label x={mx} y={252} size={11}>x = 0</Label>
      <Label x={dx} y={252} size={11}>x = δ</Label>
      <Arrow x1={330} y1={60} x2={180} y2={60} t="var-f" />
      <Label x={255} y={52} size={12} t="var-f">J·c convection</Label>
      <Arrow x1={180} y1={170} x2={330} y2={170} t="var-e" />
      <Label x={255} y={190} size={12} t="var-e">D dc/dx back-diffusion</Label>
    </Svg>
  )
}

// ---- Visual 2: dense membrane + permeate layer ---------------------------------------------
function SeriesProfile({ J = 7.45e-5, kP = 2e-5, fixed = true }) {
  const cF = 30, cP = 5, K = 1.5
  const cPz = J / kP + cP
  const cAz = K * cPz
  const Y = (c) => 220 - (c / 50) * 190
  const m0 = 170, m1 = 320, b1 = 420
  return (
    <Svg w={580} h={270} label="Feed 30, inside 45 dropping to 13.0, outside 8.72, bulk permeate 5.0; dashed no-resistance case drops to 7.5">
      <rect x={m0} y={25} width={m1 - m0} height={195} style={shade('var-c', 18)} />
      <rect x={m1} y={25} width={b1 - m1} height={195} style={shade('var-d', 10)} />
      <Arrow x1={50} y1={220} x2={570} y2={220} />
      <Arrow x1={50} y1={220} x2={50} y2={18} />
      {[0, 10, 20, 30, 40, 50].map((v) => <text key={v} x={44} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={56} y={16} anchor="start" size={11}>c (mol/m³)</Label>
      <Label x={110} y={240} size={11} t="var-a">feed</Label>
      <Label x={(m0 + m1) / 2} y={240} size={11} t="var-c">membrane 30 µm</Label>
      <Label x={(m1 + b1) / 2} y={240} size={11} t="var-d">layer (k_P)</Label>
      <Label x={(b1 + 570) / 2} y={240} size={11} t="var-b">permeate</Label>
      <line x1={50} y1={Y(cF)} x2={m0} y2={Y(cF)} style={st('var-a')} />
      <line x1={m0} y1={Y(cF)} x2={m0} y2={Y(K * cF)} style={st('muted', true, 1.5)} />
      <line x1={m0} y1={Y(K * cF)} x2={m1} y2={Y(K * cP)} style={st('muted', true, 2)} />
      <line x1={m0} y1={Y(K * cF)} x2={m1} y2={Y(cAz)} style={st('var-c')} />
      <line x1={m1} y1={Y(cAz)} x2={m1} y2={Y(cPz)} style={st('muted', true, 1.5)} />
      <line x1={m1} y1={Y(cPz)} x2={b1} y2={Y(cP)} style={st('var-d')} />
      <line x1={b1} y1={Y(cP)} x2={570} y2={Y(cP)} style={st('var-b')} />
      <Label x={60} y={Y(cF) - 6} anchor="start" size={11} t="var-a">c_F = 30</Label>
      <Label x={m0 + 6} y={Y(K * cF) - 6} anchor="start" size={11} t="var-c">Kc_F = 45</Label>
      <Label x={m1 + 4} y={Y(cAz) - 4} anchor="start" size={11} t="var-c">{`c_A,z=δ = ${fixed ? '13.0' : cAz.toFixed(1)}`}</Label>
      <Label x={m1 - 4} y={Y(K * cP) + 14} anchor="end" size={11} t="muted">no resistance: 7.5</Label>
      <Label x={b1 + 6} y={Math.min(Y(cPz), Y(cP)) - 14} anchor="start" size={11} t="var-d">{`c_P,z=δ = ${fixed ? '8.72' : cPz.toFixed(2)}`}</Label>
      <Label x={570} y={Y(cP) - 6} anchor="end" size={11} t="var-b">c_P = 5.0</Label>
    </Svg>
  )
}

// ---- Visual 3: consequences -----------------------------------------------------------------
function Consequences() {
  const tiles = [
    ['retention ↓', '(higher c_m)', 'trap'],
    ['secondary membrane', '→ retention of others ↑', 'intuition'],
    ['flux ↓', '(extra resistance)', 'trap'],
  ]
  return (
    <Svg w={600} h={110} label="Three consequences of concentration polarization">
      {tiles.map(([a, b, t], i) => (
        <g key={a}>
          <rect x={10 + i * 196} y={10} width={184} height={86} rx={10} style={{ ...shade(t, 18), stroke: tone(t) }} />
          <Label x={102 + i * 196} y={48} size={15} t={t}>{a}</Label>
          <Label x={102 + i * 196} y={72} size={12}>{b}</Label>
        </g>
      ))}
    </Svg>
  )
}

// ---- Visual 4: Sherwood card ----------------------------------------------------------------
function ShCard() {
  return (
    <Svg w={600} h={170} label="Sherwood correlations for turbulent and laminar flow in a circular tube">
      <rect x={10} y={10} width={284} height={110} rx={10} style={{ ...shade('var-e', 14), stroke: tone('var-e') }} />
      <rect x={306} y={10} width={284} height={110} rx={10} style={{ ...shade('var-a', 14), stroke: tone('var-a') }} />
      <Label x={152} y={38} size={15} t="var-e">turbulent tube</Label>
      <Label x={152} y={72} size={14}>Sh = 0.023 Re^0.8 Sc^0.25</Label>
      <Label x={448} y={38} size={15} t="var-a">laminar tube</Label>
      <Label x={448} y={72} size={13}>Sh = 1.86 Re^0.33 Sc^0.33 (D_h/L)^0.33</Label>
      <Label x={300} y={146} size={13}>Sh = k D_h / D_im · Re = ρ v D_h / η · Sc = η / (ρ D_im)</Label>
    </Svg>
  )
}

// ---- Interactive -----------------------------------------------------------------------------
const slider = (label, value, display, onChange, min, max, step) => (
  <label>
    <span className="plot-param">{label} = <strong>{display}</strong></span>
    <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
  </label>
)

function PolExplorer() {
  const [J, setJ] = useState(4.0e-5)
  const [k, setK] = useState(1.2e-4)
  const cb = 30
  const r = Math.exp(J / k)
  return (
    <Diagram
      title="A · Polarization modulus"
      caption={String.raw`$c_m/c_b = \exp(J/k)$ with $c_b$ = 30 mol/m³ [Week 9, p. 30–32]. Start values: $c_m/c_b = 1.40$, $c_m = 41.9$ mol/m³.`}
      cite={`[${W9}, p. 30–32]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          {slider(<V c="f"><M>J</M></V>, J, `${J.toExponential(2)} m³/(m²·s)`, setJ, 0, 2e-4, 1e-6)}
          {slider(<V c="d"><M>k</M></V>, Math.log10(k), `${k.toExponential(2)} m/s`, (v) => setK(Math.pow(10, v)), -5, -3, 0.01)}
        </div>
        <p><M>J/k</M> = {(J / k).toFixed(3)} · <V c="a"><M>{String.raw`c_m/c_b`}</M> = {r.toFixed(2)}</V> · <V c="a"><M>c_m</M> = {(r * cb).toFixed(1)}</V> mol/m³</p>
        <PolProfile cb={cb} ratio={Math.min(r, 2.6)} cmLabel={r > 2.6 ? `c_m = ${(r * cb).toFixed(0)} (off scale)` : `c_m = ${(r * cb).toFixed(1)}`} />
      </div>
    </Diagram>
  )
}

function SeriesExplorer() {
  const [lk, setLk] = useState(Math.log10(2e-5))
  const kP = Math.pow(10, lk)
  const J = 25 / (3e-5 / (7e-11 * 1.5) + 1 / kP)
  return (
    <Diagram
      title="B · Series-resistance flux"
      caption={String.raw`$J = \dfrac{c_F - c_P}{\delta_M/(DK) + 1/k_P}$ with $c_F = 30$, $c_P = 5$ mol/m³, $\delta_M$ = 30 µm, K = 1.5, D = 7.0·10⁻¹¹ m²/s [Week 9, p. 34; exercise_09_solutions.pdf, Problem 3]. Start: 7.45·10⁻⁵; as $k_P \to \infty$: 8.75·10⁻⁵ mol/(m²·s).`}
      cite={`[${W9}, p. 34; ${E9}, Problems 2–3]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          {slider(<V c="d"><M>k_P</M></V>, lk, `${kP.toExponential(2)} m/s (log)`, setLk, -6, -2, 0.01)}
        </div>
        <p><V c="f"><M>J_A</M> = {J.toExponential(3)}</V> mol/(m²·s) · {((J / 8.75e-5) * 100).toFixed(0)} % of the no-resistance flux</p>
        <SeriesProfile J={J} kP={kP} fixed={false} />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Solutes pile up where the solvent leaves">
        <MentalModel cite={`[${W9}, p. 28–34; ${E9}, Problem 3]`}>
          <T text="When liquid is pushed through a porous membrane, the solvent goes through but retained solutes are carried **to** the surface and can't leave. They pile up in a thin boundary layer until back-diffusion into the bulk balances the convective supply [Week 9, p. 28–29]. The steady state gives an exponential profile. The ratio of wall to bulk concentration is $\exp(J/k)$: convection (J) against diffusion (k = D/δ) [Week 9, p. 29–30]." />
          <p>
            Higher wall concentration means more solute leaks through (lower retention) and more resistance (lower flux). Sometimes the
            piled-up macromolecules form a "secondary membrane" that retains other solutes better [Week 9, p. 30]. Dense membranes show the
            same physics as resistances in series. The flux through the membrane must equal the flux through the boundary layer, so a slow
            boundary layer raises the concentration on the permeate face, flattens the gradient in the membrane and cuts the flux [Week 9,
            p. 34; exercise_09_solutions.pdf, Problem 3]. Gas-separation dense membranes are usually thick and slow enough that boundary
            layers don't matter [Week 9, p. 28].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Polarization and boundary-layer resistance">
        <Diagram title="Polarization profile at a porous membrane" cite={`[${W9}, p. 28–29]`} caption="Exponential rise from c_b (bulk) to c_m at the membrane; convection toward the membrane balanced by back-diffusion.">
          <PolProfile />
        </Diagram>
        <Columns>
          <div>
            <Def term="When resistances matter" cite={`[${W9}, p. 28]`}>Dense membranes for gas separation usually show no mass-transfer resistance, because they are relatively thick and limit the flux. For liquids through porous membranes there are no concentration jumps at the interfaces, but gradients exist because the flux can be high, and retained solutes can accumulate at the interface.</Def>
            <Def term="Steady-state mole balance (boundary layer)" cite={`[${W9}, p. 28–29]`}>Convective transport toward the membrane plus back-diffusion equals the permeate flux of the solute.</Def>
          </div>
          <div>
            <Def term="Boundary conditions" cite={`[${W9}, p. 29]`}>{String.raw`$c = c_m$ at the membrane (x = 0) and $c = c_b$ at the bulk edge of the layer (x = δ).`}</Def>
            <Def term="Concentration polarization modulus" cite={`[${W9}, p. 30; ${FS}, p. 10, eq. 102]`}>{String.raw`$c_m/c_b$ for a fully retained solute (R = 1, $c_P = 0$).`}</Def>
          </div>
        </Columns>

        <Diagram title="Consequences of polarization" cite={`[${W9}, p. 30]`} caption="Retention down, retention of others possibly up, flux down.">
          <Consequences />
        </Diagram>
        <Def term="Consequences" cite={`[${W9}, p. 30]`}>{String.raw`Retention can be lower (higher $c_m$). Retention of other solutes can be higher when macromolecules form a secondary membrane. Flux is lower (boundary-layer resistance).`}</Def>

        <Diagram title="Dense membrane + permeate boundary layer" cite={`[${E9}, Problem 3; ${W9}, p. 34]`}
          caption="Boundary layer raises the permeate-face concentration → flatter gradient → lower flux. Dashed: no resistance (inside drop 45 → 7.5).">
          <SeriesProfile />
        </Diagram>
        <Columns>
          <Def term="Dense membrane with a transfer layer" cite={`[${W9}, p. 34]`}>At steady state the flux through the membrane equals the flux through the mass-transfer layer.</Def>
          <Def term="Mass-transfer coefficient k" cite={`[${W9}, p. 33]`}>Depends on the flow regime, module geometry and fluid properties, and comes from Sherwood correlations.</Def>
        </Columns>
        <Diagram title="Sherwood correlations" cite={`[${W9}, p. 33]`} caption="Circular tube; use the slide's exponents.">
          <ShCard />
        </Diagram>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="bal" />
        <Eq id="mod" />
        <PolExplorer />
        <Eq id="sh" />
        <Eq id="series" />
        <SeriesExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Dense membrane with a permeate-side resistance"
          given={String.raw`$c_F = 0.030$ kmol/m³, $c_P = 0.0050$ kmol/m³, $\delta_M = 30$ µm, $K_A = 1.5$, $D_A = 7.0\cdot 10^{-11}$ m²/s, $k_P = 2\cdot 10^{-5}$ m/s.`}
          steps={[
            { body: 'No accumulation at the interface, so the membrane flux equals the boundary-layer flux.' },
            { body: String.raw`Membrane: $J_A = \frac{D_A}{\delta_M}(K_Ac_F - K_Ac_{P,z=\delta})$. Layer: $J_A = k_P(c_{P,z=\delta} - c_P)$, so $c_{P,z=\delta} = J_A/k_P + c_P$.` },
            { body: String.raw`Eliminate $c_{P,z=\delta}$: $J_A = \dfrac{c_F - c_P}{\delta_M/(D_AK_A) + 1/k_P}$.` },
            { body: String.raw`Insert (mol/m³): $J_A = \dfrac{30 - 5}{\frac{3\cdot 10^{-5}}{7\cdot 10^{-11}\cdot 1.5} + \frac{1}{2\cdot 10^{-5}}} = 7.45\cdot 10^{-5}$ mol/(m²·s).` },
            { body: String.raw`Outside the membrane, permeate side: $c_{P,z=\delta} = 7.45\cdot 10^{-5}/2\cdot 10^{-5} + 5 = 8.72$ mol/m³.` },
            { body: String.raw`Inside the membrane, permeate face: $c_{A,z=\delta} = 1.5\cdot 8.72 = 13.0$ mol/m³.` },
            { body: String.raw`Compare with no resistance (Problem 2): flux $8.75\cdot 10^{-5}$ and inside face $7.5$ mol/m³. The boundary layer cuts the flux by about 15 %.` },
          ]}
          result="J_A = 7.45·10⁻⁵ mol/(m²·s); 8.72 and 13.0 mol/m³"
          cite={`[${E9}, Problem 3]`}
        />
        <FadedExample
          title="Wall concentration of a fully retained solute"
          given={String.raw`B fully retained (R = 1). Feed $c_b = 30$ mol/m³, $k = 1.2\cdot 10^{-4}$ m/s, flux $J = 4.0\cdot 10^{-5}$ m³/(m²·s).`}
          steps={[
            { title: 'Which equation applies, and why?', body: String.raw`$c_m/c_b = \exp(J/k)$, because R = 1 and $c_P = 0$.`, hidden: true },
            { title: String.raw`$J/k$.`, body: String.raw`$4.0\cdot 10^{-5}/1.2\cdot 10^{-4} = 0.333$.`, hidden: true },
            { title: 'Modulus.', body: String.raw`$\exp(0.333) = 1.40$.`, hidden: true },
            { title: 'Wall concentration.', body: String.raw`$c_m = 1.40\cdot 30 = 41.9$ mol/m³.`, hidden: true },
          ]}
          cite={`[${W9}, p. 31–32]`}
        />
        <Gap>No numerical Sherwood-correlation example in the files. The correlations are given without a worked case.</Gap>
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Which interface concentration changes" cite={`[${PX2}, Q7c]`}>{String.raw`With a permeate-side boundary layer, the feed-side inside concentration ($Kc_F$) is unchanged. The permeate-side inside concentration **increases**, the gradient in the membrane gets smaller, and the flux drops. That is the full 3-point answer.`}</Trap>
        <Trap title={String.raw`The modulus formula needs R = 1 and $c_P = 0$`} cite={`[${W9}, p. 29–30]`}>{String.raw`Otherwise use $(c_m - c_P)/(c_b - c_P) = \exp(J/k)$.`}</Trap>
        <Trap title="J here is a volumetric flux" cite={`[${W9}, p. 31]`}>m³/(m²·s) = m/s, so J/k is dimensionless.</Trap>
        <Trap title="Resistances add in series" cite={`[${E9}, Problem 3]`}>{String.raw`$\delta_M/(DK) + 1/k_P$. Don't add the fluxes.`}</Trap>
        <Trap title="Gas-separation dense membranes" cite={`[${W9}, p. 28; ${PX2}, Q7a–b]`}>{"Usually no boundary-layer resistance, so don't add one unless the task says so."}</Trap>
        <Trap title="Polarization can raise or lower retention" cite={`[${W9}, p. 30]`}>It lowers retention of the polarized solute, but a secondary membrane can raise retention of others.</Trap>
        <Trap title={String.raw`Turbulent Sh uses $Sc^{0.25}$ here`} cite={`[${W9}, p. 33]`}>{String.raw`Laminar includes $(D_h/L)^{0.33}$. Use the slide's exponents.`}</Trap>
      </Section>
    </>
  )
}
