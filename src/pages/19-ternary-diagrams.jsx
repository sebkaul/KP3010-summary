import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Label, Curve,
  M, V, T, tone,
} from '../components'

const W6 = 'Week 6 - Liquid-liquid extraction with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E6 = 'exercise_06_solutions.pdf'
const E6E = 'exercise_06_eng.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Ternary diagrams — reading points, tie lines and the mixing point',
  topic: 'extraction',
  examWeight: {
    level: 'high',
    note: 'Locating F, S, M, R, E on a ternary diagram on 2 of 2 practice exams (Practice exam 1 Ex. 4a–c; Autumn 2022 Q4b)',
  },
  examTasks: [
    'Practice exam 1, Ex. 4a: locate the feed and solvent points.',
    'Practice exam 1, Ex. 4b: find the mixing point with the lever arm rule (MF/MS = 1/3).',
    'Practice exam 1, Ex. 4c: locate R₂, extend R₂–M to E₁, and read the solute fraction in the extract (45 wt %).',
    'Autumn 2022, Q4b: locate F, S and R on the acetone/water/benzene diagram.',
  ],
  buildsOn: ['04-equilibrium-flash-distillation', '18-lle-principles-solvent-equipment'],
  usedIn: ['20-extraction-stage-schemes', '21-counter-current-extraction-design'],
  sources: [`[${W6}, p. 12–14]`, `[${FS}, p. 6, eq. 59]`, `[${E6E}, Problem 2b]`, `[${E6}, P2b (figure)]`, `[${PX}, Ex. 4a–c]`, `[${PX2}, Q4b–c]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'On a ternary diagram, where is a mixture of pure solvent?', a: 'At the solvent vertex. Each vertex is 100 % of its component, and the closer a point is to a vertex, the more of that component it contains. [practice_exam_solutions.pdf, Ex. 4a]' },
    { id: 'p2', kind: 'pretest', q: 'What does a tie line connect?', a: 'The equilibrium compositions of the extract and the raffinate. [Week 6, p. 12]' },
    { id: 'p3', kind: 'pretest', q: 'Feed 90 kg/h and solvent 30 kg/h are mixed. Is the mixing point M closer to F or to S?', a: 'Closer to F. MF/MS = S/F = 1/3. [practice_exam_solutions.pdf, Ex. 4b]' },
    { id: 't1', q: 'What is $x_{solvent}$ for a mixture with $x_{carrier} = 0.3$ and $x_{solute} = 0.5$, and how many phases does it have on the lecture diagram?', a: '$x_{solvent} = 0.2$. Two phases (inside the binodal curve). [Week 6, p. 13–14]' },
    { id: 't2', q: 'Feed 40 kg/h (25 wt % acetone) mixed with pure benzene to give M at 23 wt % acetone. Find M and S.', a: '$40\\cdot 0.25 = M\\cdot 0.23$, so M = 43.5 kg/h and S = 3.5 kg/h. [practice exam 2 solutions.pdf, Q4c]' },
    { id: 't3', q: 'What happens at the plait point?', a: 'No separation is possible. Extract and raffinate become identical. [Week 6, p. 12]' },
    { id: 't4', q: 'F = 60 kg/h and S = 20 kg/h. What is MF/MS?', a: 'S/F = 1/3. [practice_exam_solutions.pdf, Ex. 4b]' },
    { id: 't5', q: 'In a counter-current cascade, which two points does the line through M connect?', a: 'The final raffinate $R_N$ and the first extract $E_1$, both on the binodal curve. [practice_exam_solutions.pdf, Ex. 4c; exercise_06_solutions.pdf, P2b]' },
  ],
  equations: [
    {
      id: 'closure',
      label: 'Closure',
      tex: String.raw`\va{x_{solute}} + \vb{x_{solvent}} + \vc{x_{carrier}} = 1`,
      vars: [{ sym: String.raw`x_i`, desc: 'mass or mole fraction of component i', unit: '–' }],
      note: 'Any two fractions fix a point.',
      cite: `[${W6}, p. 13–14]`,
      check: { status: 'verified', note: 'W6 p. 13–14 reads points from two fractions (0.5/0.5; 0.3/0.5 → 0.2).' },
    },
    {
      id: 'bal',
      label: 'Mixing-point balance (component balance for extraction)',
      tex: String.raw`x_F \vd{F} + y_S \ve{S} = x_M \vf{M} = x_R R + y_E E, \qquad \vf{M} = \vd{F} + \ve{S} = R + E`,
      vars: [
        { sym: String.raw`\vd{F}, \ve{S}, \vf{M}, R, E`, desc: 'feed, solvent, mixture, raffinate, extract flows', unit: String.raw`\mathrm{kg/h}\ (\text{or kmol/h})` },
        { sym: String.raw`x_F, x_M, x_R`, desc: 'solute fraction in feed, mixture, raffinate', unit: '–' },
        { sym: String.raw`y_S, y_E`, desc: 'solute fraction in solvent, extract', unit: '–' },
      ],
      note: 'Written for the solute. The same form holds for each component.',
      cite: `[${FS}, p. 6, eq. 59; ${PX2}, Q4c]`,
      check: { status: 'verified', note: 'Component balance matches formula sheet eq. 59; the total balance M = F + S = R + E is used in Autumn 2022 Q4c.' },
    },
    {
      id: 'lever',
      label: 'Lever arm rule',
      tex: String.raw`\frac{\overline{MF}}{\overline{MS}} = \frac{\ve{S}}{\vd{F}}`,
      vars: [{ sym: String.raw`\overline{MF}, \overline{MS}`, desc: 'distances from M to F and to S on the diagram', unit: 'length' }],
      note: 'Inverse lever: M sits closer to the larger stream.',
      cite: `[${PX}, Ex. 4b; ${E6}, P2b]`,
      check: { status: 'verified', note: 'Practice exam 1 Ex. 4b: "MF/MS = solvent stream/feed stream = 30/90 = 1/3".' },
    },
  ],
}

// ---- ternary helper -------------------------------------------------------------
// top vertex = solute, bottom-left = carrier, bottom-right = solvent.
const tern = (ox = 40, oy = 30, side = 380) => {
  const h = (side * Math.sqrt(3)) / 2
  const Tp = [ox + side / 2, oy]
  const Lp = [ox, oy + h]
  const Rp = [ox + side, oy + h]
  const P = (s, c) => {
    const v = 1 - s - c
    return [s * Tp[0] + c * Lp[0] + v * Rp[0], s * Tp[1] + c * Lp[1] + v * Rp[1]]
  }
  return { P, Tp, Lp, Rp, h }
}
const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })

// schematic binodal (solute, carrier) through the quoted points
const RAFF = [[0, 0.9], [0.1, 0.78], [0.2, 0.68], [0.3, 0.58], [0.4, 0.48], [0.5, 0.38], [0.57, 0.26], [0.6, 0.16]]
const EXTR = [[0.6, 0.16], [0.57, 0.1], [0.45, 0.066], [0.35, 0.048], [0.2, 0.036], [0.1, 0.032], [0, 0.03]]
const TIES = [[[0.05, 0.84], [0.12, 0.032]], [[0.1, 0.78], [0.22, 0.037]], [[0.2, 0.68], [0.35, 0.048]], [[0.3, 0.58], [0.45, 0.066]], [[0.4, 0.48], [0.52, 0.085]], [[0.5, 0.38], [0.57, 0.1]]]

function Frame({ t, labels = ['solute', 'carrier', 'solvent'] }) {
  return (
    <g>
      <polygon points={[t.Tp, t.Lp, t.Rp].map((p) => p.join(',')).join(' ')} style={st('ink', false, 1.8)} />
      <Label x={t.Tp[0]} y={t.Tp[1] - 8} size={13} t="var-a">{labels[0]}</Label>
      <Label x={t.Lp[0] - 4} y={t.Lp[1] + 18} anchor="start" size={13} t="var-c">{labels[1]}</Label>
      <Label x={t.Rp[0] + 4} y={t.Rp[1] + 18} anchor="end" size={13} t="var-b">{labels[2]}</Label>
    </g>
  )
}

function Binodal({ t, raff = RAFF, extr = EXTR, ties = TIES }) {
  return (
    <g>
      <polygon points={[...raff, ...extr].map(([s, c]) => t.P(s, c).join(',')).join(' ')} style={{ fill: `color-mix(in srgb, ${tone('topic')} 10%, transparent)` }} />
      <Curve points={[...raff, ...extr.slice(1)].map(([s, c]) => t.P(s, c))} t="topic" />
      {ties.map(([a, b], i) => {
        const p = t.P(...a)
        const q = t.P(...b)
        return <line key={i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} style={st('muted', false, 1.3)} />
      })}
    </g>
  )
}

const Dot = ({ p, t = 'ink', r = 5 }) => <circle cx={p[0]} cy={p[1]} r={r} style={{ fill: tone(t) }} />

// ---- Visual 1: anatomy -------------------------------------------------------------
function Anatomy() {
  const t = tern(50, 34, 400)
  const plait = t.P(0.6, 0.16)
  return (
    <Svg w={500} h={420} label="Ternary diagram with binodal dome, tie lines, plait point, raffinate and extract sides">
      <Frame t={t} />
      <Binodal t={t} />
      <Dot p={plait} t="trap" />
      <Label x={plait[0] + 10} y={plait[1] - 4} anchor="start" size={12} t="trap">plait point</Label>
      <Label x={t.P(0.15, 0.35)[0]} y={t.P(0.15, 0.35)[1]} size={13} t="topic">two phases</Label>
      <Label x={t.P(0.45, 0.45)[0] - 50} y={t.P(0.45, 0.45)[1] - 20} size={13} t="muted">one phase</Label>
      <Label x={t.P(0.3, 0.58)[0] - 8} y={t.P(0.3, 0.58)[1]} anchor="end" size={11} t="var-d">raffinate side</Label>
      <Label x={t.P(0.3, 0.58)[0] - 8} y={t.P(0.3, 0.58)[1] + 14} anchor="end" size={11} t="var-d">(low solvent)</Label>
      <Label x={t.P(0.35, 0.048)[0] + 10} y={t.P(0.35, 0.048)[1]} anchor="start" size={11} t="var-e">extract side</Label>
      <Label x={t.P(0.35, 0.048)[0] + 10} y={t.P(0.35, 0.048)[1] + 14} anchor="start" size={11} t="var-e">(low carrier)</Label>
      <Label x={t.P(0.15, 0.4)[0]} y={t.P(0.15, 0.4)[1] + 50} size={11} t="muted">tie lines</Label>
    </Svg>
  )
}

// ---- Visual 2: reading a point ------------------------------------------------------
function ReadPoint() {
  const t = tern(50, 34, 400)
  const P1 = t.P(0.5, 0)
  const P2 = t.P(0.5, 0.3)
  // constant-fraction lines through P2 (each parallel to the side opposite its vertex)
  const a = t.P(0.5, 0.5)
  const edgeSolute = [t.P(0.5, 0.5), t.P(0.5, 0)] // constant solute line
  const edgeCarrier = [t.P(0, 0.3), t.P(0.7, 0.3)] // constant carrier line
  const edgeSolvent = [t.P(0, 0.8), t.P(0.8, 0)] // constant solvent 0.2
  return (
    <Svg w={560} h={420} label="Reading a point: P1 on the solute–solvent edge is one phase; P2 inside the dome is two phases">
      <Frame t={t} />
      <Binodal t={t} ties={[]} />
      {[edgeSolute, edgeCarrier, edgeSolvent].map(([p, q], i) => (
        <line key={i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} style={st(['var-a', 'var-c', 'var-b'][i], true, 1.2)} />
      ))}
      <Label x={a[0] - 6} y={a[1] + 4} anchor="end" size={11} t="var-a">solute 0.5</Label>
      <Label x={t.P(0, 0.3)[0]} y={t.P(0, 0.3)[1] + 16} size={11} t="var-c">carrier 0.3</Label>
      <Label x={t.P(0.8, 0)[0] + 8} y={t.P(0.8, 0)[1]} anchor="start" size={11} t="var-b">solvent 0.2</Label>
      <Dot p={P1} t="example" />
      <Label x={P1[0] + 8} y={P1[1] - 4} anchor="start" size={12} t="example">P1: one phase</Label>
      <Label x={P1[0] + 8} y={P1[1] + 11} anchor="start" size={10} t="example">(solvent 0.5, solute 0.5)</Label>
      <Dot p={P2} t="trap" />
      <Label x={P2[0] - 40} y={P2[1] - 30} anchor="end" size={12} t="trap">P2: two phases</Label>
      <Label x={P2[0] - 40} y={P2[1] - 16} anchor="end" size={10} t="trap">(carrier 0.3, solute 0.5, solvent 0.2)</Label>
      <line x1={P2[0] - 38} y1={P2[1] - 22} x2={P2[0] - 4} y2={P2[1] - 3} style={st('trap', false, 1)} />
    </Svg>
  )
}

// ---- Visual 3: mixing point and product line (Practice exam 1 Ex. 4) ---------------
function Mixing({ sf = 1 / 3, showProduct = true }) {
  const t = tern(50, 34, 400)
  const F = [0.3, 0.7]
  const S = [0, 0]
  const Mf = [(F[0] + sf * S[0]) / (1 + sf), (F[1] + sf * S[1]) / (1 + sf)]
  const R2 = [0.1, 0.78]
  const E1 = [0.45, 0.066]
  const pF = t.P(...F)
  const pS = t.P(...S)
  const pM = t.P(...Mf)
  const pR = t.P(...R2)
  const pE = t.P(...E1)
  return (
    <Svg w={500} h={420} label="Feed, solvent and mixing point on line FS; line from R2 through M to E1">
      <Frame t={t} />
      <Binodal t={t} ties={[]} />
      <line x1={pF[0]} y1={pF[1]} x2={pS[0]} y2={pS[1]} style={st('var-f', false, 2)} />
      {showProduct && <line x1={pR[0]} y1={pR[1]} x2={pE[0]} y2={pE[1]} style={st('example', false, 2)} />}
      <Dot p={pF} t="var-d" />
      <Label x={pF[0] - 8} y={pF[1] - 6} anchor="end" size={12} t="var-d">F (30 % solute)</Label>
      <Dot p={pS} t="var-e" />
      <Label x={pS[0] - 4} y={pS[1] - 10} anchor="end" size={12} t="var-e">S</Label>
      <Dot p={pM} t="var-f" r={6} />
      <Label x={pM[0] + 2} y={pM[1] + 20} anchor="middle" size={12} t="var-f">M</Label>
      {showProduct && (
        <>
          <Dot p={pR} t="example" />
          <Label x={pR[0] - 8} y={pR[1] + 4} anchor="end" size={12} t="example">R₂ (10 %)</Label>
          <Dot p={pE} t="example" />
          <Label x={pE[0] + 8} y={pE[1] - 4} anchor="start" size={12} t="example">E₁ (45 %)</Label>
        </>
      )}
    </Svg>
  )
}

// ---- Visual 4: biodiesel wash ----------------------------------------------------------
const BD_R = [[0, 0.998], [0.01, 0.988], [0.1, 0.895], [0.2, 0.79], [0.3, 0.68], [0.4, 0.55], [0.5, 0.4], [0.56, 0.28]]
const BD_E = [[0.56, 0.28], [0.55, 0.17], [0.5, 0.0695], [0.4, 0.04], [0.2, 0.02], [0, 0.01]]
function Biodiesel() {
  const t = tern(50, 34, 400)
  const F = [1 / 9, 8 / 9]
  const S = [0, 0]
  const R = [0.01, 0.988]
  const E1 = [0.5, 0.0695]
  const Mf = [F[0] / 1.09, F[1] / 1.09]
  const pts = { F: t.P(...F), S: t.P(...S), R: t.P(...R), E: t.P(...E1), M: t.P(...Mf) }
  return (
    <Svg w={500} h={420} label="Biodiesel/water/methanol: lines FS and E1R cross at M">
      <Frame t={t} labels={['methanol', 'biodiesel', 'water']} />
      <Binodal t={t} raff={BD_R} extr={BD_E} ties={[]} />
      <line x1={pts.F[0]} y1={pts.F[1]} x2={pts.S[0]} y2={pts.S[1]} style={st('var-f', false, 2)} />
      <line x1={pts.R[0]} y1={pts.R[1]} x2={pts.E[0]} y2={pts.E[1]} style={st('example', false, 2)} />
      <Dot p={pts.F} t="var-d" />
      <Label x={pts.F[0] - 8} y={pts.F[1] - 4} anchor="end" size={12} t="var-d">F (1/9 MeOH)</Label>
      <Dot p={pts.S} t="var-e" />
      <Label x={pts.S[0] - 4} y={pts.S[1] - 10} anchor="end" size={12} t="var-e">S (water)</Label>
      <Dot p={pts.R} t="example" />
      <Label x={pts.R[0] + 6} y={pts.R[1] + 18} anchor="start" size={12} t="example">R (1 wt %)</Label>
      <Dot p={pts.E} t="example" />
      <Label x={pts.E[0] + 8} y={pts.E[1]} anchor="start" size={12} t="example">E₁ (50 wt %)</Label>
      <Dot p={pts.M} t="var-f" r={6} />
      <Label x={pts.M[0] + 8} y={pts.M[1] - 10} anchor="start" size={12} t="var-f">M: FM/SM = 0.09</Label>
    </Svg>
  )
}

// ---- Interactive ------------------------------------------------------------------------
function MixExplorer() {
  const [sf, setSf] = useState(1 / 3)
  const solute = 0.3 / (1 + sf)
  const carrier = 0.7 / (1 + sf)
  const solvent = sf / (1 + sf)
  return (
    <Diagram
      title="Mixing point on line FS"
      caption={String.raw`$x_M = (F x_F + S x_S)/(F + S)$ for each component [FormelarkKP3010.pdf, p. 6, eq. 59]. F = 30 % solute + 70 % carrier, S = pure solvent. At S/F = 1/3: M = 22.5 % solute, 52.5 % carrier, 25 % solvent, and MF/MS = 1/3 [practice_exam_solutions.pdf, Ex. 4].`}
      cite={`[${FS}, p. 6, eq. 59; ${PX}, Ex. 4]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="e"><M>S</M></V>/<V c="d"><M>F</M></V> = <strong>{sf.toFixed(3)}</strong></span>
            <input type="range" min={0} max={3} step={0.005} value={sf} onChange={(e) => setSf(Number(e.target.value))} />
          </label>
        </div>
        <p>
          M: <V c="a">solute {(solute * 100).toFixed(1)} %</V> · <V c="c">carrier {(carrier * 100).toFixed(1)} %</V> ·{' '}
          <V c="b">solvent {(solvent * 100).toFixed(1)} %</V> · MF/MS = {sf.toFixed(3)} ·{' '}
          {(() => {
            // inside dome? compare carrier with binodal branches at this solute level
            const lerp = (arr, s) => {
              const a = [...arr].sort((p, q) => p[0] - q[0])
              for (let i = 0; i < a.length - 1; i++) if (s >= a[i][0] && s <= a[i + 1][0]) return a[i][1] + ((s - a[i][0]) / (a[i + 1][0] - a[i][0])) * (a[i + 1][1] - a[i][1])
              return null
            }
            const cR = lerp(RAFF, solute)
            const cE = lerp(EXTR, solute)
            const inside = cR != null && cE != null && carrier < cR && carrier > cE
            return <strong>{inside ? 'two phases (schematic dome)' : 'one phase (schematic dome)'}</strong>
          })()}
        </p>
        <Mixing sf={sf} showProduct={false} />
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="A triangle for three components">
        <MentalModel cite={`[${W6}, p. 12–14; ${PX}, Ex. 4a–c; ${FS}, p. 6, eq. 59]`}>
          <T text="With three components (carrier, solvent, solute), fractions no longer fit on an x–y plot, so you use an equilateral triangle. Each corner is a pure component and every point inside is a mixture whose three fractions sum to 1 [Week 6, p. 12–14; practice_exam_solutions.pdf, Ex. 4a]. Somewhere along the carrier–solvent base, the binodal curve marks out a dome. Inside it the mixture splits into two liquid phases, outside it stays as one [Week 6, p. 12]." />
          <p>
            Tie lines across the dome join the raffinate (low-solvent side) and the extract (low-carrier side) that are in equilibrium.
            At the plait point the tie lines shrink to nothing and no separation is possible [Week 6, p. 12]. Mixing two streams is a
            mass balance that lands on the straight line between them. Where along it is set by the lever rule, closer to the bigger
            stream [practice_exam_solutions.pdf, Ex. 4b; FormelarkKP3010.pdf, p. 6, eq. 59]. The same balance in reverse,{' '}
            <V c="f"><M>M</M></V> = R + E, puts the products at the two ends of a line through M. That is the whole graphical toolkit for
            extraction [practice_exam_solutions.pdf, Ex. 4c].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Anatomy, reading points and the mixing point">
        <Columns>
          <Diagram title="Anatomy of a ternary diagram (schematic)" cite={`[${W6}, p. 12]`}
            caption="Binodal dome on the carrier–solvent base with tie lines tilting up toward the solvent side; tie lines shrink to the plait point.">
            <Anatomy />
          </Diagram>
          <div>
            <Def term="Reading a ternary diagram" cite={`[${PX}, Ex. 4a]`}>
              {"Each vertex is 100 % of solute, solvent or carrier. The closer to a vertex, the higher that component's fraction."}
            </Def>
            <Def term="Binodal curve" cite={`[${W6}, p. 12]`}>Separates the two-phase region from the single-phase region.</Def>
            <Def term="Tie lines" cite={`[${W6}, p. 12]`}>Connect the equilibrium compositions of extract and raffinate.</Def>
            <Def term="Plait point" cite={`[${W6}, p. 12]`}>Where no separation is possible (the tie lines vanish).</Def>
            <Def term="Extract vs raffinate side" cite={`[${W6}, p. 12]`}>Low carrier means the extract side, low solvent means the raffinate side.</Def>
          </div>
        </Columns>

        <Diagram title="Reading a point (schematic dome)" cite={`[${W6}, p. 13–14]`}
            caption="Dashed lines through P2 are the constant-fraction lines (each parallel to the side opposite its vertex).">
            <ReadPoint />
          </Diagram>
        <Columns>
          <div>
            <Def term="Number of phases" cite={`[${W6}, p. 13–14]`}>
              {String.raw`A point inside the binodal curve gives two phases, outside gives one. Example: $x_{solvent} = 0.5$, $x_{solute} = 0.5$ is one phase, while $x_{carrier} = 0.3$, $x_{solute} = 0.5$ is two phases.`}
            </Def>
            <Def term="Mixing point M" cite={`[${PX}, Ex. 4b; ${E6}, P2b]`}>
              Lies on the line FS. Its position follows from the lever arm rule, MF/MS = S/F.
            </Def>
            <Def term="Product line through M" cite={`[${PX}, Ex. 4c; ${E6}, P2b]`}>
              {String.raw`The raffinate and extract are on the binodal curve, on a straight line through M. For a counter-current cascade, extend the line from $R_N$ through M to the binodal curve to find $E_1$.`}
            </Def>
          </div>
        </Columns>

          <Diagram title="Mixing point and product line (Practice exam 1, Ex. 4)" cite={`[${PX}, Ex. 4a–c]`}
            caption="F at 30 % solute, S at the solvent vertex, M on FS with MF : MS = 1 : 3 (22.5 % solute, 52.5 % carrier, 25 % solvent). Line R₂ (10 %) → M extended to E₁ (45 %). Binodal schematic; the quoted points are placed exactly.">
            <Mixing />
          </Diagram>
          <Diagram title="Biodiesel wash construction" cite={`[${E6}, P2b]`}
            caption="Lines FS and E₁R cross at M; S/F = FM/SM = 0.09. Binodal schematic.">
            <Biodiesel />
          </Diagram>
        <Gap>The ternary diagrams (Week 6, p. 12–14; Practice exam 1 Ex. 4; Autumn 2022 Q4) are images. Binodal and tie-line data aren&apos;t available as numbers, so curves must be schematic, with only the quoted points placed exactly.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="closure" />
        <Eq id="bal" />
        <Eq id="lever" />
        <MixExplorer />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Mixing point and extract composition for a two-stage counter-current extractor"
          given={String.raw`Feed 90 kg/h, 30 % solute + 70 % carrier. Pure solvent S = 30 kg/h. Final raffinate $R_2$ has 10 % solute.`}
          steps={[
            { body: 'Locate F: on the carrier–solute edge at 30 % solute (0 % solvent). Locate S: the solvent vertex.' },
            { body: 'Lever rule: MF/MS = S/F = 30/90 = 1/3, so M lies one quarter of the way from F to S.' },
            { body: String.raw`Check by balance (eq. 59): M = 120 kg/h, $x_{M,solute} = 90\cdot 0.30/120 = 0.225$, $x_{M,carrier} = 63/120 = 0.525$, $x_{M,solvent} = 30/120 = 0.25$.` },
            { body: String.raw`Locate $R_2$: on the binodal curve (raffinate side) at 10 % solute.` },
            { body: String.raw`Draw the line from $R_2$ through M and extend it to the binodal curve on the extract side. The intersection is $E_1$.` },
            { body: String.raw`Read $E_1$: 45 wt % solute.` },
            { body: String.raw`Continuing with eq. 59 (solute): $27 = 0.10R_2 + 0.45E_1$ with $R_2 + E_1 = 120$ gives $E_1 = 42.9$ kg/h and $R_2 = 77.1$ kg/h, so about 19.3 kg/h of the 27 kg/h solute (≈ 71 %) is recovered in the extract.` },
          ]}
          result={String.raw`$E_1$ = 45 wt % solute`}
          cite={`[${PX}, Ex. 4a–c]`}
        />
        <FadedExample
          title="Wash water for a biodiesel plant"
          given="50 t/h biodiesel with 1/9 weight fraction methanol (the solution uses a total feed of 55.5 t/h). Pure water as solvent. The aqueous extract must contain 50 wt % methanol and the raffinate at most 1 wt % methanol."
          steps={[
            { title: String.raw`Locate F, S, $E_1$ and R on the biodiesel/water/methanol diagram.`, body: String.raw`F near the biodiesel vertex at 1/9 methanol; S at the water vertex; $E_1$ on the binodal curve at 0.5 methanol; R at 0.01 methanol.`, hidden: true },
            { title: 'Draw the two lines whose intersection is M.', body: String.raw`FS and $E_1$R. M is where they cross.`, hidden: true },
            { title: 'Lever rule for the solvent-to-feed ratio.', body: 'S/F = FM/SM = 0.09.', hidden: true },
            { title: 'Wash water.', body: String.raw`$0.09\cdot 55.5$ t/h ≈ 5.1 t/h (the solution's value), about 5 m³/h of water.`, hidden: true },
          ]}
          cite={`[${E6E}, Problem 2b; ${E6}, P2b]`}
        />
        <Gap>Exercise 6 P2b asks for m³ per day, but the solution stops at 5.1 t/h. (Source discrepancy, listed in the index.)</Gap>
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title="Read each fraction parallel to the opposite side" cite={`[${PX}, Ex. 4a; ${W6}, p. 13–14]`}>
          {"A component's fraction increases toward its vertex. Check the tick direction on each axis before reading."}
        </Trap>
        <Trap title="Inverse lever" cite={`[${PX}, Ex. 4b]`}>MF/MS = S/F, not F/S. M lies nearer the **bigger** stream.</Trap>
        <Trap title={"The mixing line isn't a tie line"} cite={`[${PX}, Ex. 4c; ${W6}, p. 12]`}>
          M lies on FS (a mass balance). R and E lie at the ends of a line through M, and they are on the binodal curve.
        </Trap>
        <Trap title="R and E must be on the binodal curve" cite={`[${PX}, Ex. 4c]`}>
          {'A raffinate "with 10 % solute" means the point on the raffinate branch at 10 % solute, not just any 10 % point.'}
        </Trap>
        <Trap title="Weight fractions" cite={`[${PX2}, Q4; ${PX}, Ex. 4]`}>The exam diagrams are in wt %. Do balances in kg/h, not kmol/h.</Trap>
        <Trap title="Outside the dome means no separation" cite={`[${W6}, p. 12–14]`}>
          {"A single-phase mixture can't be split by settling. At the plait point the phases are identical."}
        </Trap>
        <Trap title="Side assignment" cite={`[${W6}, p. 12]`}>
          The extract is on the low-carrier side, the raffinate on the low-solvent side. Swapping them reverses every later construction.
        </Trap>
        <Trap title="Points are graded separately" cite={`[${PX2}, Q4b]`}>
          In Autumn 2022 Q4b, 1 point for S and 1 for F and R. Mark each point clearly.
        </Trap>
      </Section>
    </>
  )
}
