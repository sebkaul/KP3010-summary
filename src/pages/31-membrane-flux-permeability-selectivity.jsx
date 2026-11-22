import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W9 = 'Week 9 - Membrane filtration with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E9 = 'exercise_09_solutions.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Membrane flux, permeability, permeance and selectivity',
  topic: 'membranes',
  examWeight: { level: 'high', note: 'Flux/thickness and selectivity calculations on 2 of 2 practice exams (Practice exam 1 Ex. 7b–c; Autumn 2022 Q7a–b, 5 of 8 pts)' },
  examTasks: [
    'Practice exam 1, Ex. 7b: CO₂ flux through a 1.5 µm graphene-oxide membrane, 500 barrer, 760 vs 76 cmHg (1.02·10⁻⁵ kmol/(m²·s)).',
    'Practice exam 1, Ex. 7c: N₂ permeability from a CO₂/N₂ selectivity of 400 (1.25 barrer).',
    'Autumn 2022, Q7a: interface concentrations inside a dense membrane (103.5 and 13.8 mol/m³).',
    'Autumn 2022, Q7b: membrane thickness for 0.25 mmol/(m²·s) (23.3 µm).',
  ],
  buildsOn: ['30-membrane-fundamentals-osmosis'],
  usedIn: ['32-concentration-polarization', '33-membrane-modules-design'],
  sources: [`[${W9}, p. 15–27]`, `[${FS}, p. 8–9, eq. 87–95]`, `[${E9}, Problem 2]`, `[${PX}, Ex. 7b–c]`, `[${PX2}, Q7a–b]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: "What's the difference between permeability and permeance?", a: 'Permeability is flux per unit driving force per unit membrane thickness. Permeance is flux per unit driving force for a specified membrane, $P_i = P_{M,i}/\\delta_M$, so the thickness is already included. [Week 9, p. 17]' },
    { id: 'p2', kind: 'pretest', q: 'A dense membrane has partition constant K = 2.30 and the feed is 45 mol/m³. What is the concentration just inside the membrane on the feed side?', a: '$2.30\\cdot 45 = 103.5$ mol/m³. [practice exam 2 solutions.pdf, Q7a]' },
    { id: 'p3', kind: 'pretest', q: 'A membrane has CO₂ permeability 500 barrer and CO₂/N₂ selectivity 400. N₂ permeability?', a: '$500/400 = 1.25$ barrer. [practice_exam_solutions.pdf, Ex. 7c]' },
    { id: 't1', q: 'Solute A: δ = 10 µm, $c_F = 50$, $c_P = 3$ mol/m³, $K_A = 2$, $D_A = 7.0\\cdot 10^{-11}$ m²/s. Flux?', a: '$J_A = \\frac{7.0\\cdot 10^{-11}}{10\\cdot 10^{-6}}(2\\cdot 50 - 2\\cdot 3) = 6.58\\cdot 10^{-4}$ mol/(m²·s). [Week 9, p. 26]' },
    { id: 't2', q: 'CO₂ at 500 barrer, 1.5 µm, 760 vs 76 cmHg. Flux in kmol/(m²·s)?', a: '$500\\cdot 3.35\\cdot 10^{-16}\\cdot 133.3\\cdot 684/1.5\\cdot 10^{-6} = 1.02\\cdot 10^{-2}$ mol/(m²·s) $= 1.02\\cdot 10^{-5}$ kmol/(m²·s). [practice_exam_solutions.pdf, Ex. 7b]' },
    { id: 't3', q: 'δ = 30 µm, $c_F = 0.030$ and $c_P = 0.0050$ kmol/m³, K = 1.5, $D_A = 7.0\\cdot 10^{-11}$ m²/s, no liquid-side resistance. Flux and interface concentrations?', a: '$J = 1.5\\cdot 7.0\\cdot 10^{-11}\\cdot(30 - 5)/30\\cdot 10^{-6} = 8.75\\cdot 10^{-5}$ mol/(m²·s). Inside concentrations $1.5\\cdot 30 = 45$ and $1.5\\cdot 5 = 7.5$ mol/m³. [exercise_09_solutions.pdf, Problem 2] (solution blank, computed with eq. as in Problem 3)' },
    { id: 't4', q: 'For molecular diffusion of ideal gases through a porous membrane, what is the H₂/CO₂ selectivity in terms of molar masses?', a: '$\\alpha = \\sqrt{M_{CO_2}/M_{H_2}} = \\sqrt{44/2} \\approx 4.7$. [Week 9, p. 21; FormelarkKP3010.pdf, p. 9, eq. 92]' },
    { id: 't5', q: 'Define retention, and what is the MWCO?', a: '$R_i = (C_{R,i} - C_{P,i})/C_{R,i}$. The MWCO is the molecular weight at 90 % retention. [Week 9, p. 27]' },
  ],
  equations: [
    {
      id: 'jp',
      label: 'Flux with a pressure driving force',
      tex: String.raw`\vf{J_i} = \vc{P_{M,i}}\frac{p_0 - p_\delta}{\vd{\delta_M}} = \vc{P_{M,i}}\frac{\Delta p}{\vd{\delta_M}}`,
      vars: [
        { sym: String.raw`\vf{J_i}`, desc: 'flux of i', unit: String.raw`\mathrm{mol/(m^2\cdot s)}` },
        { sym: String.raw`\vc{P_{M,i}}`, desc: 'permeability of i', unit: String.raw`\mathrm{mol\cdot m/(m^2\cdot s\cdot Pa)}` },
        { sym: String.raw`p_0, p_\delta`, desc: '(partial) pressure of i on feed and permeate side', unit: String.raw`\mathrm{Pa}` },
        { sym: String.raw`\vd{\delta_M}`, desc: 'membrane thickness', unit: String.raw`\mathrm{m}` },
      ],
      cite: `[${W9}, p. 16; ${FS}, p. 8, eq. 87–88]`,
      check: { status: 'verified', note: 'Matches W9 p. 16 and formula sheet eq. 88 (on PDF p. 10).' },
    },
    {
      id: 'jro',
      label: 'Flux with osmotic pressure (RO)',
      tex: String.raw`\vf{J_i} = \vc{P_{M,i}}\frac{\Delta p_{ext} - \Delta\Pi_{OSM}}{\vd{\delta_M}}`,
      vars: [
        { sym: String.raw`\Delta p_{ext}`, desc: 'applied pressure difference', unit: String.raw`\mathrm{Pa}` },
        { sym: String.raw`\Delta\Pi_{OSM}`, desc: 'osmotic pressure difference across the membrane', unit: String.raw`\mathrm{Pa}` },
      ],
      note: "When osmotic pressure can't be neglected.",
      cite: `[${W9}, p. 16; ${FS}, p. 8, eq. 89]`,
      check: { status: 'verified', note: 'Matches W9 p. 16 and formula sheet eq. 89.' },
    },
    {
      id: 'jc',
      label: 'Flux with a concentration driving force',
      tex: String.raw`\vf{J_i} = \vc{P_{M,i}}\frac{\va{c_0} - \vb{c_\delta}}{\vd{\delta_M}}`,
      vars: [
        { sym: String.raw`\va{c_0}, \vb{c_\delta}`, desc: 'concentrations at the two faces', unit: String.raw`\mathrm{mol/m^3}` },
        { sym: String.raw`\vc{P_{M,i}}`, desc: 'permeability (here m²/s)', unit: String.raw`\mathrm{m^2/s}` },
      ],
      cite: `[${W9}, p. 16; ${FS}, p. 8, eq. 87]`,
      check: { status: 'verified', note: 'Matches W9 p. 16 and formula sheet eq. 87.' },
    },
    {
      id: 'perm',
      label: 'Permeance and the barrer',
      tex: String.raw`\begin{gathered} P_i = \frac{\vc{P_{M,i}}}{\vd{\delta_M}} \\ 1\ \text{barrer} = 3.35\cdot 10^{-16}\ \frac{\text{mol·m}}{\text{m}^2\text{·s·Pa}} \\ 1\ \text{cmHg} = 133.3\ \text{Pa} \end{gathered}`,
      vars: [{ sym: String.raw`P_i`, desc: 'permeance (unit for a concentration driving force)', unit: String.raw`\mathrm{m/s}` }],
      cite: `[${W9}, p. 17–18; ${PX}, Ex. 7b]`,
      check: { status: 'verified', note: 'Permeance matches W9 p. 17; barrer conversion matches W9 p. 18.' },
    },
    {
      id: 'fick',
      label: "Porous membrane: Fick's law",
      tex: String.raw`\begin{gathered} \vf{J_i} = D_{im}\frac{\va{c_{i,0}} - \vb{c_{i,\delta}}}{\vd{\delta_M}} \\ \text{(ideal gas: } \vf{J_i} = \frac{D_{im}}{RT}\frac{p_{i,0} - p_{i,\delta}}{\vd{\delta_M}}\text{)} \end{gathered}`,
      vars: [{ sym: String.raw`D_{im}`, desc: 'diffusion coefficient of i in the mixture', unit: String.raw`\mathrm{m^2/s}` }],
      note: 'Dilute ($c_i/c_{tot} \\ll 1$).',
      cite: `[${W9}, p. 20; ${FS}, p. 9, eq. 90–91]`,
      check: { status: 'verified', note: 'Matches W9 p. 20 and formula sheet eq. 90–91.' },
    },
    {
      id: 'diff',
      label: 'Ideal-gas diffusivities (molecular and Knudsen)',
      tex: String.raw`\begin{gathered} D_i = \tfrac{1}{3}\lambda_i\bar v_i, \qquad \bar v_i = \sqrt{\frac{8RT}{\pi M_i}} \\ \lambda_i = \frac{RT}{\sqrt2\,\sigma_iP_{tot}N_{Av}}, \qquad D_{i,K} = \frac{d_p}{3}\bar v_i \end{gathered}`,
      vars: [
        { sym: String.raw`\lambda_i`, desc: 'mean free path', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\bar v_i`, desc: 'mean molecular speed', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`\sigma_i`, desc: 'cross-sectional area of molecule i', unit: String.raw`\mathrm{m^2}` },
        { sym: String.raw`M_i`, desc: 'molar mass', unit: String.raw`\mathrm{kg/mol}` },
        { sym: String.raw`d_p`, desc: 'pore diameter', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`N_{Av}`, desc: '6.022·10²³', unit: String.raw`\mathrm{1/mol}` },
      ],
      note: 'The formula sheet writes $\\sqrt2\\,\\sigma_i$ in $\\lambda_i$, and the slide writes $2\\sigma_i$. Source discrepancy: use the formula sheet.',
      cite: `[${W9}, p. 20, 22; ${FS}, p. 9, eq. 93–95]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 93–95, and the Knudsen form matches eq. 96 (cited as 93–95 in the content). The slide (W9 p. 20, 22) writes $2\\sigma_i$ in $\\lambda_i$.' },
    },
    {
      id: 'alpha',
      label: 'Selectivity',
      tex: String.raw`\begin{gathered} \ve{\alpha_{i,j}} = \frac{\vc{P_{M,i}}}{P_{M,j}} \\ \text{porous (molecular, ideal gas):} \\ \ve{\alpha_{i,j}} = \frac{D_i}{D_j} = \sqrt{\frac{M_j}{M_i}} \\ \text{dense: } \ve{\alpha_{i,j}} = \frac{K_iD_{im}}{K_jD_{jm}} \end{gathered}`,
      vars: [{ sym: String.raw`\ve{\alpha_{i,j}}`, desc: 'selectivity of i over j', unit: '–' }],
      cite: `[${W9}, p. 21, 24; ${FS}, p. 9, eq. 92; ${PX}, Ex. 7c]`,
      check: { status: 'verified', note: 'Matches W9 p. 21, 24 and formula sheet eq. 92.' },
    },
    {
      id: 'dense',
      label: 'Dense membrane: partition and flux',
      tex: String.raw`\begin{gathered} K_i = \frac{c_{i,0}}{\va{c_{i,F}}} = \frac{c_{i,\delta}}{\vb{c_{i,P}}} \\ \vf{J_i} = K_iD_{im}\frac{\va{c_{iF}} - \vb{c_{iP}}}{\vd{\delta_M}} = \frac{K_iD_{im}}{RT}\frac{p_{iF} - p_{iP}}{\vd{\delta_M}} \end{gathered}`,
      vars: [
        { sym: String.raw`K_i`, desc: 'partition (equilibrium) constant', unit: '–' },
        { sym: String.raw`c_{i,0}, c_{i,\delta}`, desc: 'concentration inside the membrane at feed and permeate faces', unit: String.raw`\mathrm{mol/m^3}` },
        { sym: String.raw`\va{c_{iF}}, \vb{c_{iP}}`, desc: 'feed and permeate bulk concentrations', unit: String.raw`\mathrm{mol/m^3}` },
      ],
      note: 'No external mass-transfer resistance.',
      cite: `[${W9}, p. 24]`,
      check: { status: 'verified', note: 'Matches W9 p. 24.' },
    },
    {
      id: 'ret',
      label: 'Retention and gas separation factor',
      tex: String.raw`\begin{gathered} R_i = \frac{C_{R,i} - C_{P,i}}{C_{R,i}} \\ S_{i,j} = \frac{(c_i/c_j)_P}{(c_i/c_j)_R} \end{gathered}`,
      vars: [{ sym: String.raw`C_{R,i}, C_{P,i}`, desc: 'concentration in retentate and permeate', unit: String.raw`\mathrm{mol/m^3}` }],
      cite: `[${W9}, p. 27]`,
      check: { status: 'verified', note: 'Matches W9 p. 27.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

// ---- Visual 1: slab --------------------------------------------------------------------------
function Slab() {
  return (
    <Svg w={420} h={250} label="Membrane slab of thickness delta with pressures p0 and p_delta and flux across">
      <Label x={210} y={18} size={14} t="var-c">permeability P_M (per thickness)</Label>
      <rect x={160} y={30} width={100} height={140} style={shade('var-c', 40)} />
      <Label x={80} y={80} size={16} t="var-a">p₀</Label>
      <Label x={80} y={98} size={12} t="var-a">feed</Label>
      <Label x={340} y={80} size={16} t="var-b">p_δ</Label>
      <Label x={340} y={98} size={12} t="var-b">permeate</Label>
      <Arrow x1={60} y1={130} x2={360} y2={130} t="var-f" />
      <Label x={372} y={135} anchor="start" size={15} t="var-f">J_i</Label>
      <Arrow x1={160} y1={185} x2={260} y2={185} t="var-d" />
      <Arrow x1={260} y1={185} x2={160} y2={185} t="var-d" />
      <Label x={210} y={204} size={14} t="var-d">δ_M</Label>
      <Label x={210} y={228} size={13}>permeance P = P_M/δ_M</Label>
      <Label x={210} y={245} size={12} t="muted">(thickness included)</Label>
    </Svg>
  )
}

// ---- Visual 2: dense membrane profile -----------------------------------------------------------
function Profile({ delta = 23.3, cF = 45, cP = 6, K = 2.3 }) {
  const x0 = 60
  const Y = (c) => 230 - (c / 120) * 200
  const mx0 = 200
  const mw = Math.max(40, Math.min(220, delta * 3))
  const mx1 = mx0 + mw
  return (
    <Svg w={560} h={270} label="Concentration across feed, dense membrane and permeate with partition jumps at the interfaces">
      <rect x={mx0} y={20} width={mw} height={210} style={shade('var-c', 18)} />
      <Arrow x1={x0} y1={230} x2={540} y2={230} />
      <Arrow x1={x0} y1={230} x2={x0} y2={14} />
      {[0, 30, 60, 90, 120].map((v) => <text key={v} x={x0 - 6} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={x0 + 4} y={14} anchor="start" size={11}>c (mol/m³)</Label>
      <Label x={(x0 + mx0) / 2} y={250} size={11} t="var-a">feed</Label>
      <Label x={(mx0 + mx1) / 2} y={250} size={11} t="var-c">membrane δ_M</Label>
      <Label x={(mx1 + 540) / 2} y={250} size={11} t="var-b">permeate</Label>
      <line x1={x0} y1={Y(cF)} x2={mx0} y2={Y(cF)} style={st('var-a')} />
      <line x1={mx0} y1={Y(cF)} x2={mx0} y2={Y(K * cF)} style={st('muted', true, 1.5)} />
      <line x1={mx0} y1={Y(K * cF)} x2={mx1} y2={Y(K * cP)} style={st('var-c')} />
      <line x1={mx1} y1={Y(K * cP)} x2={mx1} y2={Y(cP)} style={st('muted', true, 1.5)} />
      <line x1={mx1} y1={Y(cP)} x2={540} y2={Y(cP)} style={st('var-b')} />
      <Label x={x0 + 6} y={Y(cF) - 6} anchor="start" size={11} t="var-a">{`c_F = ${cF}`}</Label>
      <Label x={mx0 + 6} y={Y(K * cF) - 6} anchor="start" size={11} t="var-c">{`Kc_F = ${(K * cF).toFixed(1)}`}</Label>
      <Label x={mx1 - 4} y={Y(K * cP) - 8} anchor="end" size={11} t="var-c">{`Kc_P = ${(K * cP).toFixed(1)}`}</Label>
      <Label x={mx1 + 6} y={Y(cP) - 6} anchor="start" size={11} t="var-b">{`c_P = ${cP}`}</Label>
      <Label x={540} y={60} anchor="end" size={11}>partition: c_i,0 = K_i c_i,F</Label>
      <Label x={540} y={76} anchor="end" size={11}>diffusion: slope ∝ J/D</Label>
    </Svg>
  )
}

// ---- Visual 3: molecular vs Knudsen -----------------------------------------------------------
function Pores() {
  return (
    <Svg w={540} h={190} label="Wide pore with molecule–molecule collisions versus narrow pore with wall collisions">
      <rect x={20} y={40} width={220} height={100} style={shade('muted', 10)} />
      <line x1={20} y1={40} x2={240} y2={40} style={st('ink', false, 3)} />
      <line x1={20} y1={140} x2={240} y2={140} style={st('ink', false, 3)} />
      {[[50, 70], [80, 100], [110, 80], [140, 115], [170, 65], [200, 95], [95, 125], [160, 95]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={5} style={{ fill: tone('var-a') }} />)}
      <path d="M80,100 L110,80 L140,115" style={st('var-a', true, 1.2)} />
      <Label x={130} y={164} size={12}>molecular: collisions between molecules</Label>
      <Label x={130} y={180} size={12} t="muted">depends on P_tot (λ ∝ 1/P_tot)</Label>
      <rect x={300} y={75} width={220} height={30} style={shade('muted', 10)} />
      <line x1={300} y1={75} x2={520} y2={75} style={st('ink', false, 3)} />
      <line x1={300} y1={105} x2={520} y2={105} style={st('ink', false, 3)} />
      <polyline points="310,90 340,77 375,103 410,77 445,103 480,77 510,90" style={st('var-a', false, 1.5)} />
      <circle cx={510} cy={90} r={5} style={{ fill: tone('var-a') }} />
      <Label x={410} y={164} size={12}>Knudsen: collisions with the wall</Label>
      <Label x={410} y={180} size={12} t="muted">D_K ∝ d_p</Label>
    </Svg>
  )
}

// ---- Visual 4: H₂ vs CO bars ---------------------------------------------------------------------
function HCOBars() {
  const Y = (v) => 200 - ((Math.log10(v) + 2) / 4) * 170 // 0.01 .. 100
  return (
    <Svg w={360} h={250} label="H₂ flux 55.3 vs CO flux 0.065 mol/(m²·s), log scale">
      <Arrow x1={60} y1={200} x2={340} y2={200} />
      <Arrow x1={60} y1={200} x2={60} y2={20} />
      {[0.01, 0.1, 1, 10, 100].map((v) => <text key={v} x={53} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <Label x={66} y={20} anchor="start" size={11} t="var-f">J (mol/(m²·s), log)</Label>
      {[['H₂', 55.3, 'var-a'], ['CO', 0.065, 'var-b']].map(([n, v, t], i) => (
        <g key={n}>
          <rect x={100 + i * 120} y={Y(v)} width={70} height={200 - Y(v)} style={{ ...shade(t, 40), stroke: tone(t) }} />
          <text x={135 + i * 120} y={Y(v) - 6} textAnchor="middle" className="svg-label">{v}</text>
          <text x={135 + i * 120} y={218} textAnchor="middle" className="svg-sub">{n}</text>
        </g>
      ))}
      <Label x={200} y={244} size={11} t="var-e">permeability ratio 200 000/700 ≈ 286</Label>
    </Svg>
  )
}

// ---- Visual 5: retention vs MW ---------------------------------------------------------------------
function Retention() {
  const X = (l) => 60 + l * 380
  const Y = (r) => 200 - r * 170
  const ls = Array.from({ length: 80 }, (_, i) => i / 79)
  const R = (l) => 1 / (1 + Math.exp(-(l - 0.5) * 12))
  const lc = 0.5 + Math.log(9) / 12
  return (
    <Svg w={480} h={240} label="Retention against molecular weight, S-curve; MWCO at 90 % retention">
      <Arrow x1={60} y1={200} x2={450} y2={200} />
      <Arrow x1={60} y1={200} x2={60} y2={20} />
      <Label x={450} y={220} anchor="end" size={12}>molecular weight (log)</Label>
      <Label x={66} y={20} anchor="start" size={12}>R_i</Label>
      {[0.5, 0.9, 1].map((v) => <text key={v} x={53} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
      <polyline points={ls.map((l) => `${X(l)},${Y(R(l))}`).join(' ')} style={st('var-e')} />
      <line x1={60} y1={Y(0.9)} x2={440} y2={Y(0.9)} style={st('trap', true, 1.5)} />
      <line x1={X(lc)} y1={Y(0.9)} x2={X(lc)} y2={200} style={st('trap', true, 1.5)} />
      <Label x={X(lc)} y={216} size={12} t="trap">MWCO</Label>
    </Svg>
  )
}

// ---- Interactive ----------------------------------------------------------------------------------
function DenseExplorer() {
  const [d, setD] = useState(23.3)
  const K = 2.3
  const D = 6.5e-11
  const cF = 45
  const cP = 6
  const J = ((K * D) / (d * 1e-6)) * (cF - cP)
  return (
    <Diagram
      title="Dense membrane: flux vs thickness"
      caption={String.raw`$J = \frac{KD}{\delta_M}(c_F - c_P)$ with $c_F = 45$, $c_P = 6.0$ mol/m³, K = 2.30, D = 6.5·10⁻¹¹ m²/s [Week 9, p. 24–26; practice exam 2 solutions.pdf, Q7]. At 23.3 µm: J = 0.25 mmol/(m²·s).`}
      cite={`[${W9}, p. 24–26; ${PX2}, Q7a–b]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="d"><M>{String.raw`\delta_M`}</M></V> = <strong>{d.toFixed(1)}</strong> µm</span>
            <input type="range" min={1} max={100} step={0.1} value={d} onChange={(e) => setD(Number(e.target.value))} />
          </label>
        </div>
        <p><V c="f"><M>J</M> = {J.toExponential(2)}</V> mol/(m²·s) = <strong>{(J * 1000).toFixed(3)}</strong> mmol/(m²·s)</p>
        <Profile delta={d} />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Flux like current, selectivity like a ratio">
        <MentalModel cite={`[${W9}, p. 15–24]`}>
          <T text="Two numbers rate a membrane: how much gets through (flux, mol per m² per s) and how well it discriminates (selectivity) [Week 9, p. 15]. Flux is like current through a resistor. It is the material's permeability times the driving force (pressure or concentration difference), divided by the thickness. Thinner membranes give more flux, which is why asymmetric membranes have a very thin top layer [Week 9, p. 16–17, 8]. If you lump the thickness in, you get the permeance, which behaves like a mass-transfer coefficient [Week 9, p. 17]." />
          <p>
            What sets the <V c="c">permeability</V> depends on the membrane type. In porous membranes molecules diffuse through the gas in the
            pores (molecular diffusion) or bounce between the walls (Knudsen), so lighter molecules move faster and{' '}
            <V c="e">selectivity</V> follows <M>{String.raw`\sqrt{M_j/M_i}`}</M> [Week 9, p. 20–22]. In dense membranes molecules first
            dissolve (partition K) and then diffuse (D), so selectivity combines solubility and diffusivity [Week 9, p. 23–24]. In RO, the
            osmotic pressure works against the applied pressure [Week 9, p. 16].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Flux, permeability and transport">
        <Columns>
          <Diagram title="Flux as permeability × driving force / thickness" cite={`[${W9}, p. 16–17]`} caption="Thinner membrane → more flux.">
            <Slab />
          </Diagram>
          <div>
            <Def term="Performance depends on" cite={`[${W9}, p. 15]`}>Membrane properties, membrane geometry in the module, and the pressure difference across the membrane.</Def>
            <Def term="Flux" cite={`[${W9}, p. 15]`}>How much of the component passes through the membrane per area per time (mol/m²/s).</Def>
            <Def term="Selectivity" cite={`[${W9}, p. 15]`}>Relative permeation of different components through the membrane.</Def>
            <Def term={String.raw`Permeability $P_M$`} cite={`[${W9}, p. 16–18]`}>Unique for each component and membrane. Flux per unit driving force per unit thickness. SI units: kmol·m/(m²·s·kPa). Alternative unit: barrer, 1 barrer = 10⁻¹⁰ cm³(STP)·cm/(cm²·s·cmHg) = 3.35·10⁻¹⁶ mol·m/(m²·s·Pa).</Def>
            <Def term={String.raw`Permeance $P_i$`} cite={`[${W9}, p. 17]`}>{String.raw`$P_{M,i}/\delta_M$, flux per unit driving force for a specified membrane. Similar to a mass-transfer coefficient, in m/s for a concentration driving force.`}</Def>
          </div>
        </Columns>

        <Diagram title="Dense-membrane concentration profile" cite={`[${W9}, p. 24–26; ${PX2}, Q7a]`}
          caption="Feed 45 → jump to Kc_F = 103.5 inside the membrane → linear drop → Kc_P = 13.8 → jump down to c_P = 6.0.">
          <Profile />
        </Diagram>
        <Columns>
          <div>
            <Def term="Dense membranes" cite={`[${W9}, p. 23–24]`}>{String.raw`Permeating species dissolve into the membrane matrix, a concentration gradient forms, and species diffuse through. Concentrations just outside and inside the membrane are in equilibrium (partition constant $K_i$). Often there is extra mass-transfer resistance outside the membrane (page 32).`}</Def>
            <Def term={String.raw`Membrane selectivity $\alpha_{i,j}$`} cite={`[${W9}, p. 21]`}>Ratio of the permeabilities of species i and j.</Def>
          </div>
          <div>
            <Diagram title="Molecular vs Knudsen diffusion in a pore" cite={`[${W9}, p. 22]`} caption="Wide pore: molecule–molecule collisions. Narrow pore: wall collisions.">
              <Pores />
            </Diagram>
            <Def term="Porous membranes" cite={`[${W9}, p. 20]`}>Transport by molecular diffusion and Knudsen diffusion.</Def>
            <Def term="Molecular vs Knudsen diffusion" cite={`[${W9}, p. 22]`}>Molecule–molecule collisions dominate in molecular diffusion, wall collisions dominate in Knudsen diffusion. Knudsen is mainly for gas diffusion through porous membranes, and its coefficient depends on the pore diameter.</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="H₂ vs CO flux through silica glass" cite={`[${W9}, p. 18–19]`} caption="Log scale.">
            <HCOBars />
          </Diagram>
          <Diagram title="Retention vs molecular weight (schematic)" cite={`[${W9}, p. 27]`} caption="MWCO is defined at 90 % retention.">
            <Retention />
          </Diagram>
        </Columns>
        <Columns>
          <Def term={String.raw`Retention $R_i$`} cite={`[${W9}, p. 27]`}>Selectivity is usually expressed as retention of a species, comparing retentate and permeate concentrations.</Def>
          <div>
            <Def term="Molecular weight cut-off (MWCO)" cite={`[${W9}, p. 27]`}>Defined as 90 % retention.</Def>
            <Def term={String.raw`Gas separation factor $S_{i,j}$`} cite={`[${W9}, p. 27]`}>Ratio of concentration ratios in permeate vs retentate.</Def>
          </div>
        </Columns>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="jp" />
        <Eq id="jro" />
        <Eq id="jc" />
        <Eq id="perm" />
        <Eq id="fick" />
        <Eq id="diff" />
        <Eq id="alpha" />
        <Eq id="dense" />
        <DenseExplorer />
        <Eq id="ret" />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="H₂ and CO fluxes through a silica-glass membrane"
          given="Thickness 2 µm. Permeabilities H₂ 200 000 barrer, CO 700 barrer. Partial-pressure driving forces 16.5 bar (H₂) and 5.5 bar (CO)."
          steps={[
            { body: String.raw`Convert: $P_{M,H_2} = 200\,000\cdot 3.35\cdot 10^{-16} = 6.70\cdot 10^{-11}$ mol·m/(m²·s·Pa).` },
            { body: String.raw`$P_{M,CO} = 700\cdot 3.35\cdot 10^{-16} = 2.35\cdot 10^{-13}$ mol·m/(m²·s·Pa).` },
            { body: String.raw`Pressures in Pa: 16.5 bar = 1 650 000 Pa and 5.5 bar = 550 000 Pa. Thickness: $2\cdot 10^{-6}$ m.` },
            { body: String.raw`$J_{H_2} = 6.70\cdot 10^{-11}\cdot 1\,650\,000/(2\cdot 10^{-6}) = 55.3$ mol/(m²·s).` },
            { body: String.raw`$J_{CO} = 2.35\cdot 10^{-13}\cdot 550\,000/(2\cdot 10^{-6}) = 0.065$ mol/(m²·s).` },
            { body: String.raw`Selectivity (permeability ratio): $\alpha_{H_2,CO} = 200\,000/700 \approx 286$.` },
          ]}
          result="J_H₂ = 55.3, J_CO = 0.065 mol/(m²·s)"
          cite={`[${W9}, p. 18–19]`}
        />
        <FadedExample
          title="Dense membrane: interface concentrations and required thickness"
          given={String.raw`Solute at 45 mol/m³ (feed) and 6.0 mol/m³ (permeate). $D_m = 6.5\cdot 10^{-11}$ m²/s, K = 2.30. No boundary-layer resistance. Target flux 0.25 mmol/(m²·s).`}
          steps={[
            { title: 'Concentration inside the membrane at the feed face.', body: String.raw`$c_{A,z=0} = 45\cdot 2.30 = 103.5$ mol/m³.`, hidden: true },
            { title: 'At the permeate face.', body: String.raw`$c_{A,z=\delta} = 6.0\cdot 2.30 = 13.8$ mol/m³.`, hidden: true },
            { body: String.raw`Flux equation: $J_A = \dfrac{KD}{\delta_M}(c_F - c_P)$.` },
            { title: 'Insert the flux in SI.', body: String.raw`$2.5\cdot 10^{-4} = \dfrac{2.3\cdot 6.5\cdot 10^{-11}}{\delta_M}(45 - 6)$.`, hidden: true },
            { title: 'Solve.', body: String.raw`$\delta_M = 2.33\cdot 10^{-5}$ m $= 23.3$ µm.`, hidden: true },
          ]}
          cite={`[${PX2}, Q7a–b]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Unit conversions decide the answer" cite={`[${PX}, Ex. 7b; ${PX2}, Q7b]`}>barrer → SI (× 3.35·10⁻¹⁶), cmHg → Pa (× 133.3), µm → m, mmol → mol. The exam asks for kmol/(m²·s), so divide mol by 1000.</Trap>
        <Trap title="Permeability vs permeance" cite={`[${W9}, p. 17]`}>{String.raw`Permeability needs ÷ $\delta_M$, permeance already includes it.`}</Trap>
        <Trap title="Dense membranes: multiply by K at the interfaces" cite={`[${PX2}, Q7a]`}>Inside concentrations are $Kc$, not c.</Trap>
        <Trap title="Selectivity is a ratio of permeabilities" cite={`[${PX}, Ex. 7c]`}>{String.raw`So $P_{N_2} = P_{CO_2}/\alpha$.`}</Trap>
        <Trap title={"Use each component's own partial-pressure difference"} cite={`[${W9}, p. 18]`}>H₂ 16.5 bar, CO 5.5 bar.</Trap>
        <Trap title="Osmotic pressure lowers RO flux" cite={`[${W9}, p. 16]`}>{String.raw`Use $\Delta p - \Delta\Pi$ when it isn't negligible.`}</Trap>
        <Trap title="Knudsen depends on pore size, molecular diffusion on total pressure" cite={`[${W9}, p. 20, 22]`}>{String.raw`$D_K \propto d_p$, while $\lambda \propto 1/P_{tot}$.`}</Trap>
        <Trap title="√2 vs 2 in the mean free path (source discrepancy)" cite={`[${FS}, p. 9, eq. 94; ${W9}, p. 20]`}>{String.raw`The formula sheet ($\sqrt2\,\sigma$) and the slide ($2\sigma$) differ. Use the formula sheet.`}</Trap>
        <Trap title="MWCO = 90 % retention" cite={`[${W9}, p. 27]`} />
      </Section>
    </>
  )
}
