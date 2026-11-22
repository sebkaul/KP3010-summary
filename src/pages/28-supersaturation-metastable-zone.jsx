import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Arrow, Label,
  M, V, T, tone,
} from '../components'

const W8 = 'Week 8 - Crystallization and precipitation with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Supersaturation measures, the metastable zone and ways to create supersaturation',
  topic: 'crystallization',
  examWeight: {
    level: 'medium',
    note: 'Supersaturation methods asked on 2 of 2 practice exams (Practice exam 1 Ex. 6a; Autumn 2022 Q6.1, Q6.4); S/σ/Δc definitions on the formula sheet but not examined',
  },
  examTasks: [
    'Practice exam 1, Ex. 6a: describe three ways to create supersaturation.',
    'Autumn 2022, Q6.1: is cooling effective for NaCl? (No, flat solubility.)',
    'Autumn 2022, Q6.4: name and describe a method besides cooling and evaporation (precipitation, anti-solvent, melt crystallization).',
  ],
  buildsOn: ['26-crystallization-fundamentals', '27-crystallization-mass-balance-yield'],
  usedIn: ['29-nucleation-growth-crystallizers'],
  sources: [`[${W8}, p. 13–15, 19–28]`, `[${FS}, p. 8, eq. 79–82]`, `[${PX}, Ex. 6a]`, `[${PX2}, Q6.1, Q6.4]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'In which zone should a crystallizer operate, metastable or labile?', a: 'Metastable. The labile zone gives uncontrolled crystallization. [Week 8, p. 19]' },
    { id: 'p2', kind: 'pretest', q: 'High supersaturation: many small crystals or few large ones?', a: 'Many smaller crystals, because primary nucleation is relatively high. [Week 8, p. 28]' },
    { id: 'p3', kind: 'pretest', q: 'Na₂SO₄: cooling or evaporation?', a: 'It depends on where on its solubility curve you operate. [Week 8, p. 27]' },
    { id: 't1', q: 'What happens in the metastable zone, and what at its limit?', a: 'Inside: limited driving force, no new crystals, but growth is possible. At the limit: the first nuclei form. [Week 8, p. 19]' },
    { id: 't2', q: 'Explain salting out.', a: 'Adding a salt reduces the activity of water, which creates supersaturation of the solute. It is a form of anti-solvent crystallization. [Week 8, p. 23]' },
    { id: 't3', q: 'Give two advantages and one drawback of melt crystallization.', a: "No solvent is required and there is no solvent removal or recovery, and it suits high concentrations. Drawback: you can't influence the melt properties. [Week 8, p. 24]" },
    { id: 't4', q: 'Why is cooling seldom used below room temperature?', a: 'The slide states it as a practical limit of cooling crystallization. The cost of refrigeration is not discussed in the files. [Week 8, p. 22]' },
    { id: 't5', q: 'You want fewer but larger crystals. High or low supersaturation?', a: 'Low. Growth then dominates over primary nucleation. [Week 8, p. 28]' },
  ],
  equations: [
    {
      id: 'S',
      label: 'Supersaturation ratio',
      tex: String.raw`\vd{S} = \frac{\va{c}}{\vb{c^*}}`,
      vars: [
        { sym: String.raw`\vd{S}`, desc: 'supersaturation ratio', unit: '–' },
        { sym: String.raw`\va{c}`, desc: 'actual concentration', unit: String.raw`\text{e.g. kg/kg solvent or mol/m}^3` },
        { sym: String.raw`\vb{c^*}`, desc: 'equilibrium saturation concentration', unit: String.raw`\text{same as } c` },
      ],
      cite: `[${W8}, p. 21; ${FS}, p. 8, eq. 79]`,
      check: { status: 'verified', note: 'Matches W8 p. 21 and formula sheet eq. 79 (on PDF p. 9).' },
    },
    {
      id: 'sigma',
      label: 'Relative supersaturation',
      tex: String.raw`\ve{\sigma} = \frac{\va{c} - \vb{c^*}}{\vb{c^*}}`,
      vars: [{ sym: String.raw`\ve{\sigma}`, desc: 'relative supersaturation ($= S - 1$)', unit: '–' }],
      cite: `[${W8}, p. 21; ${FS}, p. 8, eq. 80]`,
      check: { status: 'verified', note: 'Matches W8 p. 21 and formula sheet eq. 80.' },
    },
    {
      id: 'dc',
      label: 'Absolute supersaturation',
      tex: String.raw`\vf{\Delta c} = \va{c} - \vb{c^*}`,
      vars: [{ sym: String.raw`\vf{\Delta c}`, desc: 'absolute supersaturation', unit: String.raw`\text{same as } c` }],
      cite: `[${W8}, p. 21; ${FS}, p. 8, eq. 81]`,
      check: { status: 'verified', note: 'Matches W8 p. 21 and formula sheet eq. 81.' },
    },
    {
      id: 'dT',
      label: 'Undercooling',
      tex: String.raw`\Delta T = T - T_m`,
      vars: [
        { sym: String.raw`\Delta T`, desc: 'undercooling: deviation from the melting temperature', unit: String.raw`\mathrm{K}` },
        { sym: String.raw`T_m`, desc: 'melting temperature', unit: String.raw`\mathrm{K}` },
      ],
      note: 'Written as on the slide and formula sheet. **Source discrepancy (index):** as written, ΔT is negative below $T_m$.',
      cite: `[${W8}, p. 21; ${FS}, p. 8, eq. 82]`,
      check: { status: 'verified', note: 'Matches W8 p. 21 and formula sheet eq. 82 as printed.' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })
const shade = (t, p = 25) => ({ fill: `color-mix(in srgb, ${tone(t)} ${p}%, var(--bg))` })

// ---- Visual 1: zones (schematic) ----------------------------------------------------
function Zones() {
  const X = (T) => 60 + (T / 100) * 400
  const Y = (c) => 260 - c * 230
  const sol = (T) => 0.15 + 0.55 * (T / 100) ** 1.5
  const lim = (T) => sol(T) + 0.14
  const ts = Array.from({ length: 51 }, (_, i) => i * 2)
  const top = ts.map((T) => `${X(T)},${Y(1)}`).reverse().join(' ')
  return (
    <Svg w={520} h={300} label="Solubility curve and metastable limit dividing stable, metastable and labile zones; a cooling path">
      <polygon points={`${ts.map((T) => `${X(T)},${Y(lim(T))}`).join(' ')} ${top}`} style={shade('trap', 14)} />
      <polygon points={`${ts.map((T) => `${X(T)},${Y(sol(T))}`).join(' ')} ${ts.map((T) => `${X(T)},${Y(lim(T))}`).reverse().join(' ')}`} style={shade('intuition', 22)} />
      <Arrow x1={60} y1={260} x2={480} y2={260} />
      <Arrow x1={60} y1={260} x2={60} y2={20} />
      <Label x={480} y={280} anchor="end" size={12}>T</Label>
      <Label x={66} y={22} anchor="start" size={12} t="var-a">c</Label>
      <polyline points={ts.map((T) => `${X(T)},${Y(sol(T))}`).join(' ')} style={st('var-b')} />
      <polyline points={ts.map((T) => `${X(T)},${Y(lim(T))}`).join(' ')} style={st('trap', true, 2)} />
      <Label x={X(98)} y={Y(sol(98)) + 18} anchor="end" size={11} t="var-b">solubility c*(T)</Label>
      <Label x={X(98)} y={Y(lim(98)) - 6} anchor="end" size={11} t="trap">metastable limit</Label>
      <Label x={X(75)} y={Y(0.12)} size={12} t="muted">undersaturated (stable)</Label>
      <Label x={X(22)} y={Y(0.75)} size={12} t="trap">labile: uncontrolled nucleation</Label>
      <Label x={X(68)} y={Y(sol(68) + 0.075) + 4} size={11} t="intuition">metastable: growth only</Label>
      <Arrow x1={X(90)} y1={Y(0.5)} x2={X(30)} y2={Y(0.5)} t="var-e" />
      <Label x={X(88)} y={Y(0.5) + 16} size={11} t="var-e">cooling</Label>
    </Svg>
  )
}

// ---- Visual 2: measures ----------------------------------------------------------------
function Measures() {
  const X = (T) => 60 + (T / 100) * 320
  const Y = (c) => 230 - c * 180
  const sol = (T) => 0.2 + 0.6 * (T / 100) ** 1.5
  const ts = Array.from({ length: 51 }, (_, i) => i * 2)
  const T0 = 50
  const c = 0.75
  return (
    <Svg w={460} h={270} label="A point above the solubility curve with Δc, S and σ annotated">
      <Arrow x1={60} y1={230} x2={400} y2={230} />
      <Arrow x1={60} y1={230} x2={60} y2={20} />
      <Label x={400} y={250} anchor="end" size={12}>T</Label>
      <Label x={66} y={22} anchor="start" size={12} t="var-a">c</Label>
      <polyline points={ts.map((T) => `${X(T)},${Y(sol(T))}`).join(' ')} style={st('var-b')} />
      <circle cx={X(T0)} cy={Y(c)} r={6} style={{ fill: tone('var-a') }} />
      <circle cx={X(T0)} cy={Y(sol(T0))} r={5} style={{ fill: tone('var-b') }} />
      <Arrow x1={X(T0)} y1={Y(sol(T0))} x2={X(T0)} y2={Y(c) + 6} t="var-f" />
      <Label x={X(T0) - 8} y={(Y(c) + Y(sol(T0))) / 2} anchor="end" size={12} t="var-f">Δc</Label>
      <Label x={X(T0) + 10} y={Y(c) - 6} anchor="start" size={12} t="var-a">(c, T)</Label>
      <Label x={X(T0) + 10} y={Y(sol(T0)) + 16} anchor="start" size={12} t="var-b">c*</Label>
      <Label x={300} y={60} anchor="start" size={12} t="var-d">S = c/c*</Label>
      <Label x={300} y={80} anchor="start" size={12} t="var-e">σ = Δc/c*</Label>
      <Label x={300} y={100} anchor="start" size={12} t="muted">melts: ΔT from T_m</Label>
    </Svg>
  )
}

// ---- Visual 3: six methods -----------------------------------------------------------
function Methods() {
  const cards = [
    ['cooling', 'steep curve', 'not often below room T'],
    ['evaporation', 'flat curve', 'thermal degradation risk'],
    ['vacuum', 'cooling + evaporation', 'adiabatic'],
    ['precipitation', 'sparingly soluble', '0.001–1 kg/m³; impure aggregate'],
    ['anti-solvent', 'lowers solubility', 'salting out: less water activity'],
    ['melt', 'no solvent', 'high concentration; melt props fixed'],
  ]
  return (
    <Svg w={640} h={250} label="Six cards for ways to create supersaturation">
      {cards.map(([n, a, b], i) => {
        const x = 6 + (i % 3) * 212
        const y = 6 + Math.floor(i / 3) * 122
        return (
          <g key={n}>
            <rect x={x} y={y} width={204} height={112} rx={10} style={{ ...shade('definition', 12), stroke: tone('definition'), strokeWidth: 1.5 }} />
            <text x={x + 10} y={y + 26} className="svg-label">{`(${i + 1}) ${n}`}</text>
            <text x={x + 10} y={y + 52} className="svg-sub">{a}</text>
            {(b.match(/.{1,30}(\s|$)/g) || [b]).map((l, k) => <text key={k} x={x + 10} y={y + 74 + k * 16} className="svg-sub" style={{ fill: tone('muted') }}>{l.trim()}</text>)}
          </g>
        )
      })}
    </Svg>
  )
}

// ---- Visual 4: three solubility shapes ---------------------------------------------------
function ThreeCurves() {
  const panel = (i, title, f, verdict, t) => {
    const ox = 10 + i * 205
    const P = (x, y) => [ox + 20 + x * 160, 160 - y * 130]
    const xs = Array.from({ length: 40 }, (_, k) => k / 39)
    return (
      <g key={title}>
        <Arrow x1={ox + 20} y1={160} x2={ox + 188} y2={160} head={6} />
        <Arrow x1={ox + 20} y1={160} x2={ox + 20} y2={20} head={6} />
        <Label x={ox + 186} y={176} anchor="end" size={10}>T</Label>
        <Label x={ox + 24} y={26} anchor="start" size={10}>c*</Label>
        <polyline points={xs.map((x) => P(x, f(x)).join(',')).join(' ')} style={st('var-b')} />
        <Label x={ox + 104} y={196} size={12}>{title}</Label>
        <Label x={ox + 104} y={214} size={11} t={t}>{verdict}</Label>
      </g>
    )
  }
  return (
    <Svg w={630} h={225} label="Schematic solubility curves: KNO₃ steep, NaCl flat, Na₂SO₄ with a slope change">
      {panel(0, 'KNO₃', (x) => 0.1 + 0.85 * x ** 1.8, '→ cool', 'intuition')}
      {panel(1, 'NaCl', (x) => 0.45 + 0.04 * x, '→ evaporate', 'var-e')}
      {panel(2, 'Na₂SO₄', (x) => (x < 0.35 ? 0.1 + 2 * x * x * 2.4 : 0.69 - 0.12 * (x - 0.35)), '→ depends on location', 'trap')}
    </Svg>
  )
}

// ---- Visual 5: rates vs supersaturation --------------------------------------------------
function Rates({ mark }) {
  const X = (s) => 60 + s * 380
  const Y = (r) => 230 - r * 200
  const lin = (s) => 0.6 * s
  const prim = (s) => 1.2 * s ** 3
  const ss = Array.from({ length: 60 }, (_, i) => i / 59)
  const cross = Math.sqrt(0.6 / 1.2)
  return (
    <Svg w={480} h={270} label="Rate against supersaturation: growth linear, primary nucleation higher order; crossing splits large from small crystals">
      <rect x={60} y={30} width={X(cross) - 60} height={200} style={shade('intuition', 10)} />
      <rect x={X(cross)} y={30} width={X(1) - X(cross)} height={200} style={shade('trap', 10)} />
      <Arrow x1={60} y1={230} x2={450} y2={230} />
      <Arrow x1={60} y1={230} x2={60} y2={20} />
      <Label x={450} y={250} anchor="end" size={12} t="var-d">supersaturation</Label>
      <Label x={66} y={22} anchor="start" size={12}>rate</Label>
      <polyline points={ss.map((s) => `${X(s)},${Y(lin(s))}`).join(' ')} style={st('intuition')} />
      <polyline points={ss.map((s) => `${X(s)},${Y(Math.min(1, prim(s)))}`).join(' ')} style={st('trap')} />
      <Label x={X(0.98)} y={Y(lin(0.98)) + 18} anchor="end" size={11} t="intuition">growth & secondary nucleation (linear)</Label>
      <Label x={X(0.78)} y={Y(0.95)} anchor="end" size={11} t="trap">primary nucleation (higher order)</Label>
      <Label x={X(cross / 2)} y={50} size={12} t="intuition">few, large crystals</Label>
      <Label x={X((cross + 1) / 2)} y={50} size={12} t="trap">many, small crystals</Label>
      {mark != null && (
        <g>
          <line x1={X(mark)} y1={30} x2={X(mark)} y2={230} style={st('var-d', false, 2.5)} />
          <polygon points={`${X(mark) - 7},22 ${X(mark) + 7},22 ${X(mark)},32`} style={{ fill: tone('var-d') }} />
        </g>
      )}
    </Svg>
  )
}

// ---- Interactive --------------------------------------------------------------------------
function SupersatExplorer() {
  const [c, setC] = useState(1.2)
  const [cs, setCs] = useState(0.85)
  const S = c / cs
  const sigma = (c - cs) / cs
  const dc = c - cs
  // schematic position on the rate chart: σ mapped to 0..1 (no numeric zone limits in the files)
  const pos = Math.max(0, Math.min(1, sigma / 1))
  return (
    <Diagram
      title="Supersaturation measures, live"
      caption={String.raw`$S = c/c^*$, $\sigma = (c-c^*)/c^*$, $\Delta c = c - c^*$ [Week 8, p. 21; FormelarkKP3010.pdf, p. 8, eq. 79–81]. Start c = 1.2, $c^*$ = 0.85 kg/kg water (KNO₃ lecture values [Week 8, p. 15]). The marker on the rate chart is qualitative only — the files give no numeric zone limits.`}
      cite={`[${W8}, p. 15, 21, 28; ${FS}, p. 8, eq. 79–81]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="a"><M>c</M></V> = <strong>{c.toFixed(2)}</strong> kg/kg</span>
            <input type="range" min={0.5} max={2} step={0.01} value={c} onChange={(e) => setC(Number(e.target.value))} />
          </label>
          <label>
            <span className="plot-param"><V c="b"><M>c^*</M></V> = <strong>{cs.toFixed(2)}</strong> kg/kg</span>
            <input type="range" min={0.3} max={1.5} step={0.01} value={cs} onChange={(e) => setCs(Number(e.target.value))} />
          </label>
        </div>
        <p>
          <V c="d"><M>S</M> = {S.toFixed(2)}</V> · <V c="e"><M>\sigma</M> = {sigma.toFixed(2)}</V> · <V c="f"><M>\Delta c</M> = {dc.toFixed(2)}</V> kg/kg
          {sigma <= 0 ? ' · not supersaturated (no crystallization)' : ''}
        </p>
        <Rates mark={sigma > 0 ? pos : null} />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Stay in the metastable band">
        <MentalModel cite={`[${W8}, p. 19–28]`}>
          <T text="Being above the solubility curve isn't enough to make crystals appear. Just above it is the metastable zone, where the driving force is too small to create new nuclei but existing crystals can grow [Week 8, p. 19]. Push further, past the metastable limit, and nuclei form spontaneously. In the labile zone that becomes uncontrolled, so you design to stay in the metastable band and let seeds grow [Week 8, p. 19]." />
          <p>
            How far you are from equilibrium is the supersaturation, expressed as a ratio <V c="d"><M>S</M></V>, a relative{' '}
            <V c="e"><M>\sigma</M></V> or an absolute <V c="f"><M>\Delta c</M></V> [Week 8, p. 21]. It matters because growth (and secondary
            nucleation) scale roughly linearly with it, while primary nucleation rises much faster. Gentle supersaturation gives few large
            crystals, aggressive gives a shower of fines [Week 8, p. 28]. How you create it depends on the solubility curve and the product:
            cool if the curve is steep, evaporate if it is flat. Vacuum, precipitation, anti-solvent and melt crystallization cover the
            special cases [Week 8, p. 22–24, 27].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Zones, measures and methods">
        <Diagram title="Solubility, metastable and labile zones (schematic)" cite={`[${W8}, p. 19]`}
            caption="A cooling path from the undersaturated region enters the metastable band (operate here) and then the labile zone.">
            <Zones />
          </Diagram>
        <Columns>
          <div>
            <Def term="Metastable zone" cite={`[${W8}, p. 19]`}>Supersaturated, but the driving force is still limited. No new crystals form, though crystal growth is possible.</Def>
            <Def term="Metastable zone limit" cite={`[${W8}, p. 19]`}>Where the first nuclei form.</Def>
          </div>
          <div>
            <Def term="Labile zone" cite={`[${W8}, p. 19]`}>Uncontrolled crystallization, so operating in the metastable zone is preferred.</Def>
          </div>
        </Columns>

        <Columns>
          <Diagram title="Supersaturation measures" cite={`[${W8}, p. 21]`} caption="One point above c*: the vertical gap is Δc.">
            <Measures />
          </Diagram>
          <Def term="Degree of supersaturation" cite={`[${W8}, p. 21]`}>The deviation from equilibrium, measured as the ratio S, relative σ, absolute Δc, or (for melts) undercooling ΔT.</Def>
        </Columns>

        <Diagram title="Six ways to create supersaturation" cite={`[${W8}, p. 22–24]`} caption="From the slide bullet points.">
          <Methods />
        </Diagram>
        <Columns>
          <div>
            <Def term="(1) Cooling" cite={`[${W8}, p. 22]`}>Used if the solubility slope with temperature is steep. Not often below room temperature. Direct or indirect (heat exchanger). Yield limited by the solubility curve.</Def>
            <Def term="(2) Evaporation" cite={`[${W8}, p. 22]`}>Remove solvent to raise the solute concentration. Used for (nearly) flat solubility curves. May cause thermal degradation (operation at boiling point).</Def>
            <Def term="(3) Vacuum crystallization" cite={`[${W8}, p. 23]`}>Cooling and evaporation combined. Evaporating the solvent cools the mixture (adiabatic).</Def>
          </div>
          <div>
            <Def term="(4) Precipitation" cite={`[${W8}, p. 23]`}>Reagents added to generate supersaturation. Used for sparingly soluble compounds (0.001–1 kg/m³). The precipitate is an aggregate and often impure.</Def>
            <Def term="(5) Anti-solvent crystallization" cite={`[${W8}, p. 23]`}>{"Another solvent is added to reduce the solute's solubility. Salting out: adding a salt reduces the activity of water."}</Def>
            <Def term="(6) Melt crystallization" cite={`[${W8}, p. 24]`}>{"No solvent. The solute itself is the liquid (melt), cooled until crystals form while impurities stay behind. For high solute concentrations, with no solvent removal or recovery, but melt properties can't be influenced."}</Def>
          </div>
        </Columns>

        <Diagram title="Steep vs flat vs non-monotonic solubility (schematic)" cite={`[${W8}, p. 26–27]`} caption="Shapes only; no curve data in the files.">
          <ThreeCurves />
        </Diagram>
        <Columns>
          <Diagram title="Rates vs supersaturation (schematic)" cite={`[${W8}, p. 28]`} caption="Linear growth vs higher-order primary nucleation; the crossing splits the two regimes.">
            <Rates />
          </Diagram>
          <Def term="Effect of supersaturation" cite={`[${W8}, p. 28]`}>
            Growth rate and secondary nucleation are linear in supersaturation. Primary nucleation has a higher-order dependence. High supersaturation gives many smaller crystals, low supersaturation gives fewer but larger crystals.
          </Def>
        </Columns>
        <Gap>The metastable-zone diagram (Week 8, p. 19), the supersaturation-methods figure (p. 25) and the three solubility curves (p. 26–27) are images. No metastable-limit data are available, so those visuals are schematic.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="S" />
        <Eq id="sigma" />
        <Eq id="dc" />
        <Eq id="dT" />
        <SupersatExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Cooling or evaporation? Three salts"
          given="Solubility curves for KNO₃, NaCl and Na₂SO₄ are given."
          steps={[
            { body: 'KNO₃: the solubility curve is steep in T, so a modest temperature drop gives a large Δc. Choose cooling. [Week 8, p. 22, 27]' },
            { body: 'NaCl: the curve is nearly flat, so cooling gives almost no supersaturation. Choose evaporation and accept the risk of operating at the boiling point. [Week 8, p. 22, 27]' },
            { body: 'Na₂SO₄: the slope depends on where you are on the curve, so it "depends on location". Cool where it is steep, evaporate where it is flat. [Week 8, p. 27]' },
          ]}
          cite={`[${W8}, p. 26–27]`}
        />
        <FadedExample
          title="Supersaturation of the KNO₃ lecture feed at 50 °C"
          given="Feed 1.2 kg KNO₃/kg water. At 50 °C the saturation is 0.85 kg/kg. Treat the feed as briefly cooled to 50 °C before any crystals form."
          steps={[
            { title: 'Supersaturation ratio.', body: '$S = 1.2/0.85 = 1.41$.', hidden: true },
            { title: 'Relative supersaturation.', body: String.raw`$\sigma = 0.35/0.85 = 0.41$.`, hidden: true },
            { title: 'Absolute supersaturation.', body: String.raw`$\Delta c = 0.35$ kg/kg, which equals the crystal mass per kg water found on page 27.`, hidden: true },
            { title: String.raw`Compared with a gentle cooling to $S \approx 1.05$, which product would have more fines?`, body: 'The $S = 1.41$ case, because primary nucleation grows faster than growth with supersaturation. [Week 8, p. 28]', hidden: true },
          ]}
          cite={`[${W8}, p. 15, 21, 28] (S, σ and Δc are computed here from the lecture data)`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Operate in the metastable zone" cite={`[${W8}, p. 19]`}>{'The labile zone means uncontrolled nucleation. A frequent "why" question.'}</Trap>
        <Trap title="Three different supersaturation measures" cite={`[${W8}, p. 21; ${FS}, p. 8, eq. 79–81]`}>S is a ratio, σ is relative ($= S - 1$), Δc is absolute. Use the one the task names.</Trap>
        <Trap title="Steep curve → cool, flat curve → evaporate" cite={`[${W8}, p. 22, 27]`}>{'And for a curve whose slope changes (Na₂SO₄), the answer is "depends on location".'}</Trap>
        <Trap title="High supersaturation means small crystals" cite={`[${W8}, p. 28]`}>The higher-order dependence of primary nucleation is the reason.</Trap>
        <Trap title="Evaporation side effect" cite={`[${W8}, p. 22]`}>Operation at the boiling point can thermally degrade the product.</Trap>
        <Trap title="Precipitation gives impure aggregates" cite={`[${W8}, p. 23]`}>It suits sparingly soluble compounds (0.001–1 kg/m³) but not purity-critical products.</Trap>
        <Trap title="Undercooling sign (source discrepancy)" cite={`[${W8}, p. 21]`}>{String.raw`The slide and formula sheet write $\Delta T = T - T_m$. State your sign if you use it.`}</Trap>
        <Trap title="Vacuum crystallization is not just evaporation" cite={`[${W8}, p. 23]`}>It is cooling and evaporation together, adiabatic.</Trap>
      </Section>
    </>
  )
}
