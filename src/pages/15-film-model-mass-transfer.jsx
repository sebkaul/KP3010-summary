import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W5 = 'Week 5 - Efficiency and mass transfer with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'

export const meta = {
  title: 'Film model and mass transfer coefficients',
  topic: 'mass-transfer',
  examWeight: {
    level: 'low',
    note: 'Not on either practice exam; k_OV feeds the HTU calculation on page 16 (exercise 5)',
  },
  examTasks: ['None on either practice exam. The film-model result (k_OV) is used on page 16 (exercise 5, Oppg. 3).'],
  buildsOn: ['08-absorption-principles-henrys-law'],
  usedIn: ['16-htu-ntu-packed-columns', '32-concentration-polarization'],
  sources: [`[${W5}, p. 2–12]`, `[${FS}, p. 5, eq. 43–46]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'At the gas–liquid interface, are the two phases at equilibrium?', a: 'Yes. Transfer at the interface is taken as instantaneous, so the interface compositions are in equilibrium. [Week 5, p. 3]' },
    { id: 'p2', kind: 'pretest', q: 'What kind of transport happens inside the film in the film model?', a: 'Only diffusion, through a thin laminar layer. The bulk has no gradient. [Week 5, p. 5]' },
    { id: 'p3', kind: 'pretest', q: 'Why go beyond HETP = 18·d_p?', a: "It's only an approximation. A mass-transfer model is more accurate when the HETP isn't known. [Week 5, p. 2]" },
    { id: 't1', q: 'State the two assumptions of the film model.', a: 'A thin laminar layer on each side of the interface with only diffusive transport, and no gradient in the bulk. [Week 5, p. 5]' },
    { id: 't2', q: 'Write $k_V$ in terms of film properties.', a: '$k_V = D_{AB}^V/\\delta_V$. [Week 5, p. 6]' },
    { id: 't3', q: 'Convert $\\rho_V = 1.2$ kg/m³ (air, M = 0.029 kg/mol) to molar density.', a: '$1.2/0.029 = 41.4$ mol/m³. [Week 5, p. 12]' },
    { id: 't4', q: 'In the aquarium, $k_L$ is doubled to 0.01 m/s. What is the new $k_{OV}$, and roughly what happens to the O₂ transfer?', a: '$k_{OV} = 0.01/(1 + 37.4) = 2.6\\cdot 10^{-4}$ m/s, about double, so $\\Phi_A \\approx 0.25$ mol/s. [Week 5, p. 8, 12]' },
    { id: 't5', q: 'Why can the film model be used for bubbles even though their interface is curved?', a: 'Zoomed in, the interface approaches a flat surface. [Week 5, p. 10]' },
  ],
  equations: [
    {
      id: 'fick',
      label: "Fick's law across the gas film",
      tex: String.raw`\vf{\Phi_A} = -D_{AB}^V A_Z \rho_V \frac{d\vb{y_A}}{dz}, \qquad \frac{d\vb{y_A}}{dz} = \frac{\vb{y_{Ai}} - \vb{y_A}}{\delta_V}`,
      vars: [
        { sym: String.raw`\vf{\Phi_A}`, desc: 'molar flow of A through the film', unit: String.raw`\mathrm{mol/s}` },
        { sym: String.raw`D_{AB}^V`, desc: 'diffusivity of A in the gas', unit: String.raw`\mathrm{m^2/s}` },
        { sym: String.raw`A_Z`, desc: 'interfacial area', unit: String.raw`\mathrm{m^2}` },
        { sym: String.raw`\rho_V`, desc: 'molar density of the gas', unit: String.raw`\mathrm{mol/m^3}` },
        { sym: String.raw`\delta_V`, desc: 'gas film thickness', unit: String.raw`\mathrm{m}` },
      ],
      note: 'Linear profile in a stagnant film.',
      cite: `[${W5}, p. 5]`,
      check: { status: 'verified', note: 'Matches W5 p. 5.' },
    },
    {
      id: 'single',
      label: 'Single-film fluxes',
      tex: String.raw`\vf{\Phi_A} = \vc{k_V} A\,\rho_V (\vb{y_A} - \vb{y_{Ai}}), \qquad \vf{\Phi_A} = \vd{k_L} A\,\rho_L (\va{x_{Ai}} - \va{x_A}), \qquad \vc{k_V} = \frac{D_{AB}^V}{\delta_V}`,
      vars: [
        { sym: String.raw`\vc{k_V}, \vd{k_L}`, desc: 'gas- and liquid-side mass transfer coefficients', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`A`, desc: 'interfacial area ($A_Z$ or $A_{LV}$)', unit: String.raw`\mathrm{m^2}` },
        { sym: String.raw`\rho_L`, desc: 'molar density of the liquid', unit: String.raw`\mathrm{mol/m^3}` },
        { sym: String.raw`\vb{y_{Ai}}, \va{x_{Ai}}`, desc: 'interface compositions', unit: '–' },
      ],
      cite: `[${W5}, p. 6; ${FS}, p. 5, eq. 43–44]`,
      check: { status: 'verified', note: 'Matches W5 p. 6 and formula sheet eq. 43–44 (on PDF p. 6).' },
    },
    {
      id: 'iface',
      label: 'Interface equilibrium',
      tex: String.raw`\vb{y_{Ai}} = K \va{x_{Ai}}`,
      vars: [{ sym: String.raw`K`, desc: 'equilibrium constant (Henry, $y = Kx$)', unit: '–' }],
      cite: `[${W5}, p. 7]`,
      check: { status: 'verified', note: 'Matches W5 p. 7.' },
    },
    {
      id: 'overall',
      label: 'Overall flux and overall coefficient',
      tex: String.raw`\vf{\Phi_A} = \ve{k_{OV}} A_{LV} \rho_V (\vb{y_A} - K \va{x_A}), \qquad \ve{k_{OV}} = \frac{\vc{k_V}}{1 + \dfrac{\vc{k_V}}{\vd{k_L}}\cdot K\dfrac{\rho_V}{\rho_L}} = \frac{\vc{k_V}}{1 + m\dfrac{\vc{k_V}}{\vd{k_L}}}, \qquad m = K\frac{\rho_V}{\rho_L}`,
      vars: [
        { sym: String.raw`\ve{k_{OV}}`, desc: 'overall mass transfer coefficient (gas basis)', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`m`, desc: 'volumetric distribution coefficient', unit: '–' },
        { sym: String.raw`\vb{y_A} - K\va{x_A}`, desc: 'overall driving force (bulk gas vs gas in equilibrium with bulk liquid)', unit: '–' },
      ],
      note: 'Derived by adding $y_A - y_{Ai}$ and $y_{Ai} - Kx_A$ to eliminate the interface terms.',
      cite: `[${W5}, p. 7–9; ${FS}, p. 5, eq. 45–46]`,
      check: { status: 'verified', note: 'Matches W5 p. 8 and formula sheet eq. 45–46.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 14) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })
const sub = (m, s) => <>{m}<tspan baselineShift="sub" fontSize="70%">{s}</tspan></>

// ---- Visual 1: two-film profile ------------------------------------------------
function TwoFilm() {
  const xi = 300
  return (
    <Svg w={600} h={300} label="Two-film concentration profile across a gas–liquid interface">
      <rect x={20} y={30} width={180} height={220} style={shade('var-b', 6)} />
      <rect x={200} y={30} width={100} height={220} style={shade('var-b', 22)} />
      <rect x={300} y={30} width={100} height={220} style={shade('var-a', 22)} />
      <rect x={400} y={30} width={180} height={220} style={shade('var-a', 6)} />
      <line x1={xi} y1={20} x2={xi} y2={260} style={st('ink', false, 2.5)} />
      <Label x={110} y={22} size={12} t="var-b">gas bulk</Label>
      <Label x={250} y={22} size={12} t="var-b">gas film δ_V</Label>
      <Label x={350} y={22} size={12} t="var-a">liquid film δ_L</Label>
      <Label x={490} y={22} size={12} t="var-a">liquid bulk</Label>
      <Label x={xi} y={278} size={12}>interface</Label>
      <polyline points="20,70 200,70 300,150" style={st('var-b', false, 3)} />
      <polyline points="300,120 400,210 580,210" style={st('var-a', false, 3)} />
      <text x={30} y={62} className="svg-label" style={{ fill: tone('var-b') }}>{sub('y', 'A')}</text>
      <text x={262} y={166} className="svg-label" style={{ fill: tone('var-b') }}>{sub('y', 'Ai')}</text>
      <text x={308} y={114} className="svg-label" style={{ fill: tone('var-a') }}>{sub('x', 'Ai')}</text>
      <text x={540} y={202} className="svg-label" style={{ fill: tone('var-a') }}>{sub('x', 'A')}</text>
      <Label x={xi} y={245} size={12} t="definition">y_Ai = K x_Ai</Label>
      <Arrow x1={140} y1={120} x2={460} y2={120} t="var-f" />
      <Label x={440} y={110} anchor="end" size={13} t="var-f">Φ_A</Label>
      <Label x={110} y={225} size={11} t="muted">no gradient</Label>
      <Label x={490} y={235} size={11} t="muted">no gradient</Label>
    </Svg>
  )
}

// ---- Visual 2: resistances in series --------------------------------------------
function Resistors({ gas = 100, liq = 7480 }) {
  const tot = gas + liq
  const resistor = (x, w, t, lab, val) => (
    <g>
      <rect x={x} y={60} width={w} height={36} rx={6} style={{ ...shade(t, 35), stroke: tone(t), strokeWidth: 2 }} />
      <Label x={x + w / 2} y={52} size={12} t={t}>{lab}</Label>
      <Label x={x + w / 2} y={118} size={12} t={t}>{val}</Label>
    </g>
  )
  const wg = Math.max(30, (gas / tot) * 330)
  const wl = Math.max(30, (liq / tot) * 330)
  return (
    <Svg w={560} h={170} label="Gas-film and liquid-film resistances in series">
      <Label x={20} y={84} anchor="start" size={14} t="var-b">y_A</Label>
      <line x1={58} y1={78} x2={90} y2={78} style={st('ink', false, 2)} />
      {resistor(90, wg, 'var-c', '1/k_V', `${gas} s/m`)}
      <line x1={90 + wg} y1={78} x2={100 + wg} y2={78} style={st('ink', false, 2)} />
      {resistor(100 + wg, wl, 'var-d', 'm/k_L', `${liq} s/m (${((liq / tot) * 100).toFixed(0)} %)`)}
      <line x1={100 + wg + wl} y1={78} x2={130 + wg + wl} y2={78} style={st('ink', false, 2)} />
      <Label x={134 + wg + wl} y={84} anchor="start" size={14} t="var-a">K x_A</Label>
      <Label x={280} y={155} size={13} t="var-e">1/k_OV = 1/k_V + m/k_L</Label>
    </Svg>
  )
}

// ---- Visual 3: bubble zoom ---------------------------------------------------------
function BubbleZoom() {
  return (
    <Svg w={560} h={200} label="A gas bubble zoomed twice until the interface looks flat with two films">
      <rect x={10} y={20} width={160} height={160} rx={10} style={shade('var-a', 14)} />
      <circle cx={90} cy={100} r={40} style={{ ...shade('var-b', 20), stroke: tone('ink'), strokeWidth: 2 }} />
      <rect x={118} y={62} width={26} height={26} style={st('trap', true, 1.5)} />
      <Arrow x1={176} y1={90} x2={208} y2={90} t="trap" />
      <rect x={210} y={20} width={160} height={160} rx={10} style={shade('var-a', 14)} />
      <path d="M210,180 Q270,40 370,20 L210,20 Z" style={{ ...shade('var-b', 20), stroke: tone('ink'), strokeWidth: 2 }} />
      <rect x={270} y={70} width={26} height={26} style={st('trap', true, 1.5)} />
      <Arrow x1={376} y1={90} x2={408} y2={90} t="trap" />
      <rect x={410} y={20} width={140} height={160} rx={10} style={shade('var-a', 14)} />
      <rect x={410} y={20} width={60} height={160} style={shade('var-b', 20)} />
      <rect x={455} y={20} width={15} height={160} style={shade('var-b', 40)} />
      <rect x={470} y={20} width={15} height={160} style={shade('var-a', 40)} />
      <line x1={470} y1={20} x2={470} y2={180} style={st('ink', false, 2)} />
      <Label x={480} y={196} size={12}>flat + two films</Label>
      <Label x={90} y={196} size={12}>bubble</Label>
    </Svg>
  )
}

// ---- Interactive ---------------------------------------------------------------------
function KovExplorer() {
  const [lm, setLm] = useState(Math.log10(37.4))
  const m = 10 ** lm
  const kV = 0.01
  const kL = 0.005
  const kov = kV / (1 + (m * kV) / kL)
  const rg = 1 / kV
  const rl = m / kL
  const share = rl / (rg + rl)
  return (
    <Diagram
      title="Which film controls? Overall coefficient vs m"
      caption={String.raw`$k_{OV} = \dfrac{k_V}{1 + m\,k_V/k_L}$ with $k_V = 0.01$ m/s and $k_L = 0.005$ m/s [Week 5, p. 8, 12]. Log slider for m. At m = 37.4 (aquarium): $k_{OV} = 1.32\cdot 10^{-4}$ m/s; the liquid film carries about 99 % of the resistance.`}
      cite={`[${W5}, p. 8, 12]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><M>m</M> = <strong>{m < 1 ? m.toFixed(3) : m.toFixed(1)}</strong></span>
            <input type="range" min={-2} max={3} step={0.01} value={lm} onChange={(e) => setLm(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <V c="e"><M>{String.raw`k_{OV}`}</M> = {kov.toExponential(2)}</V> m/s · gas film share {((1 - share) * 100).toFixed(1)} % · liquid film share {(share * 100).toFixed(1)} %
        </p>
        <Svg w={560} h={90} label="Stacked bar of gas-film and liquid-film share of the total resistance">
          <rect x={20} y={20} width={520 * (1 - share)} height={34} style={{ ...shade('var-c', 45), stroke: tone('var-c') }} />
          <rect x={20 + 520 * (1 - share)} y={20} width={520 * share} height={34} style={{ ...shade('var-d', 45), stroke: tone('var-d') }} />
          <Label x={24} y={74} anchor="start" size={12} t="var-c">gas film 1/k_V</Label>
          <Label x={536} y={74} anchor="end" size={12} t="var-d">liquid film m/k_L</Label>
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Two thin films, two resistances in series">
        <MentalModel cite={`[${W5}, p. 3–10]`}>
          <T text="Absorption moves a component across an interface. Getting there means convection plus diffusion on both sides, which is hard to solve exactly [Week 5, p. 3–4]. The film model simplifies this. Picture a thin stagnant laminar layer on each side of the interface where only diffusion happens, with well-mixed bulk beyond it [Week 5, p. 5]." />
          <p>
            Then the flux on each side is a coefficient times a composition difference (<V c="c"><M>{String.raw`k_V = D/\delta`}</M></V>),
            like current = conductance × voltage [Week 5, p. 6]. The interface is at equilibrium, <M>{String.raw`y_{Ai} = Kx_{Ai}`}</M>, so
            you can eliminate the unknown interface compositions and add the two &quot;resistances&quot; in series. That gives one{' '}
            <V c="e">overall coefficient <M>{String.raw`k_{OV}`}</M></V> and a driving force <M>{String.raw`y_A - Kx_A`}</M> that uses only
            bulk compositions [Week 5, p. 7–8]. Whichever side has the larger resistance (small k, or large m on the liquid side)
            controls the rate. It doesn&apos;t matter if the interface is curved, because zoomed in it&apos;s flat [Week 5, p. 10].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Interface, films and coefficients">
        <Diagram title="Two-film concentration profile" cite={`[${W5}, p. 5–7]`}
          caption="Flat in the bulk, linear across each film, equilibrium at the interface. The flux Φ_A runs from gas to liquid.">
          <TwoFilm />
        </Diagram>
        <Columns>
          <div>
            <Def term="Interface" cite={`[${W5}, p. 3]`}>
              Separates the two phases. Transfer at the interface is instantaneous, so liquid and gas at the interface are at equilibrium.
            </Def>
            <Def term="Transport to/from the interface" cite={`[${W5}, p. 3–4]`}>
              A combination of convective and diffusive transport. At steady state the molar flows to and from the interface are equal.
            </Def>
            <Def term="Film model" cite={`[${W5}, p. 5]`}>
              A thin laminar layer on both sides of the interface with only diffusive transport, and no gradient in the bulk.
            </Def>
          </div>
          <div>
            <Def term="Gas-side mass transfer coefficient" cite={`[${W5}, p. 6]`}>
              {String.raw`$k_V = D_{AB}^V/\delta_V$, film diffusivity over film thickness.`}
            </Def>
            <Def term={String.raw`Liquid-side mass transfer coefficient $k_L$`} cite={`[${W5}, p. 6]`}>
              Same approach for the liquid phase.
            </Def>
            <Def term={String.raw`Molar density $\rho$`} cite={`[${W5}, p. 4, 8]`}>In mol/m³, not kg/m³.</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Resistances in series (aquarium numbers)" cite={`[${W5}, p. 8, 12]`}
            caption="1/k_V = 100 s/m and m/k_L = 37.4/0.005 = 7480 s/m: the liquid film is the dominant (≈ 99 %) resistance. The slide's k_OV formula inverted.">
            <Resistors />
          </Diagram>
          <div>
            <Def term={String.raw`Overall mass transfer coefficient $k_{OV}$`} cite={`[${W5}, p. 8]`}>
              Combines both films, referred to the gas phase (m/s).
            </Def>
            <Def term={String.raw`Volumetric distribution coefficient $m$`} cite={`[${W5}, p. 8]`}>
              {String.raw`$m = K\rho_V/\rho_L$, with molar densities.`}
            </Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Bubble zoom" cite={`[${W5}, p. 10]`} caption="Film model works for any shape.">
            <BubbleZoom />
          </Diagram>
          <Def term="Interface shape" cite={`[${W5}, p. 10]`}>
            {"The film model isn't limited to flat interfaces, because zoomed in any interface approaches a flat surface."}
          </Def>
        </Columns>
        <Gap>{'Week 5, p. 4 (full convection–diffusion balance) is an image. Only the note "ρ is the molar density" is extractable.'}</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="fick" />
        <Eq id="single" />
        <Eq id="iface" />
        <Eq id="overall" />
        <KovExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Oxygen transfer in an aquarium"
          given={String.raw`Air bubbled through water. $x_{O_2} = 10^{-6}$ is held constant. Interfacial area 145 m², $k_L = 5\cdot 10^{-3}$ m/s, $k_V = 1\cdot 10^{-2}$ m/s, $\rho_L = 997$ kg/m³, $\rho_V = 1.2$ kg/m³, $y = 5\cdot 10^4 x$. Bulk gas composition constant ($y_{O_2} = 0.21$).`}
          steps={[
            { body: String.raw`Liquid molar density: $\rho_L = 997/0.018 = 5.5\cdot 10^4$ mol/m³.` },
            { body: String.raw`Gas molar density: $\rho_V = 1.20/0.029 = 41.4$ mol/m³.` },
            { body: String.raw`Volumetric distribution coefficient: $m = \dfrac{K\rho_V}{\rho_L} = \dfrac{5\cdot 10^4\cdot 41.4}{5.5\cdot 10^4} = 37.4$.` },
            { body: String.raw`Overall coefficient: $k_{OV} = \dfrac{0.01}{1 + \frac{37.4\cdot 0.01}{0.005}} = 1.32\cdot 10^{-4}$ m/s.` },
            { body: String.raw`Driving force: $y_A - Kx_A = 0.21 - 5\cdot 10^4\cdot 10^{-6} = 0.16$.` },
            { body: String.raw`Flux: $\Phi_A = 1.32\cdot 10^{-4}\cdot 145\cdot 41.4\cdot 0.16 = 0.127$ mol O₂/s.` },
          ]}
          result={String.raw`$\Phi_A = 0.127$ mol O₂/s`}
          cite={`[${W5}, p. 11–12]`}
        />
        <Gap>{String.raw`No second film-model example in the files. The lectures, exercise 5 and the practice exams only use $k_{OV}$ as a given input (page 16).`}</Gap>
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Molar densities" cite={`[${W5}, p. 8, 12]`}>
          {String.raw`$\rho_V$ and $\rho_L$ must be in mol/m³. Using kg/m³ gives a wrong $m$ (it is 37.4 with molar densities).`}
        </Trap>
        <Trap title={String.raw`Driving force is $y_A - Kx_A$, not $y_A - x_A$`} cite={`[${W5}, p. 8]`}>
          The liquid is converted to its equilibrium gas composition with K.
        </Trap>
        <Trap title="m ≠ K" cite={`[${W5}, p. 12]`}>
          {String.raw`$m = K\rho_V/\rho_L$. For O₂ in water K = 5·10⁴ but m = 37.4.`}
        </Trap>
        <Trap title="The interface compositions are unknown" cite={`[${W5}, p. 7–8]`}>
          {String.raw`You don't need them. The overall form eliminates $y_{Ai}$ and $x_{Ai}$ through the equilibrium.`}
        </Trap>
        <Trap title={String.raw`$k_{OV}$ is gas-based`} cite={`[${W5}, p. 8; ${FS}, p. 5, eq. 45]`}>
          {String.raw`It pairs with $\rho_V$ and the gas-phase driving force in $\Phi_A$.`}
        </Trap>
        <Trap title="A poorly soluble gas is liquid-film controlled" cite={`[${W5}, p. 12]`}>
          {String.raw`With large K (hence large m), the $m k_V/k_L$ term dominates and $k_{OV} \ll k_V$ ($1.32\cdot 10^{-4}$ vs $10^{-2}$ m/s).`}
        </Trap>
        <Trap title="Notation" cite={`[${W5}, p. 6, 8]`}>
          {String.raw`The slides write the interfacial area as $A_Z$ in one place and $A_{LV}$ in another. It's the same quantity.`}
        </Trap>
      </Section>
    </>
  )
}
