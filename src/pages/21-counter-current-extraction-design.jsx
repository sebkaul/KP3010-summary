import { useState } from 'react'
import {
  Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Columns, Diagram, Svg, Box, Arrow, Label, Curve,
  M, V, T, tone,
} from '../components'

const W6 = 'Week 6 - Liquid-liquid extraction with solutions.pdf'
const FS = 'FormelarkKP3010.pdf'
const E6 = 'exercise_06_solutions.pdf'
const E6E = 'exercise_06_eng.pdf'
const PX = 'practice_exam_solutions.pdf'
const PX2 = 'practice exam 2 solutions.pdf'

export const meta = {
  title: 'Design of counter-current extraction — McCabe–Thiele, Kremser and ternary stepping',
  topic: 'extraction',
  examWeight: {
    level: 'high',
    note: 'Minimum solvent and extract composition from the ternary diagram in Autumn 2022 Q4c (4 of 8 pts); counter-current product line in Practice exam 1 Ex. 4c',
  },
  examTasks: [
    'Autumn 2022, Q4c: minimum benzene flow (3.5 kg/h) and the extract composition at that flow (65/16/19 wt %).',
    'Practice exam 1, Ex. 4c: extract composition E₁ (45 wt % solute) from the line R₂–M in a two-stage counter-current system (page 19).',
  ],
  buildsOn: ['10-multistage-absorption-stripping', '11-kremser-minimum-absorbent-flow', '19-ternary-diagrams', '20-extraction-stage-schemes'],
  usedIn: [],
  sources: [`[${W6}, p. 27–39]`, `[${FS}, p. 6, eq. 59–62]`, `[${E6E}, Problem 1c, 2c]`, `[${E6}, P1c, P2c (scanned pages)]`, `[${PX2}, Q4c]`, `[${PX}, Ex. 4c]`],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'What are the two types of systems and the two design methods for counter-current extraction?', a: 'Systems: immiscible and partially miscible. Methods: graphical McCabe–Thiele and analytical Kremser. [Week 6, p. 27]' },
    { id: 'p2', kind: 'pretest', q: 'At minimum solvent flow, how is the operating line oriented relative to the tie lines?', a: 'Parallel to a tie line. That corresponds to an infinite number of stages. [Week 6, p. 36]' },
    { id: 'p3', kind: 'pretest', q: 'What happens if you add far too much solvent?', a: 'The mixing point may leave the two-phase region, which is the maximum solvent-to-feed limit. [Week 6, p. 37]' },
    { id: 't1', q: 'Acetone/water/ethyl-acetate example: $x_M = 0.35$ acetone, $x_F = 0.46$, pure solvent. Find S/F.', a: 'With M = 1: $0.35 = 0.46F$, so F = 0.76, S = 0.24, S/F = 0.31. [Week 6, p. 33]' },
    { id: 't2', q: 'How do you locate the operating point P?', a: 'Intersect the line through $E_1$ and F with the line through S and $R_N$. [Week 6, p. 34]' },
    { id: 't3', q: 'Biodiesel wash on the ternary diagram: how many stages were needed, and how were they found?', a: 'Three stages. Use the crossing of $E_1F$ and $SR$ as the working (difference) point, then alternate tie lines and operating lines. [exercise_06_solutions.pdf, P2c]' },
    { id: 't4', q: 'Write the immiscible operating line and give its slope.', a: "$Y_{n+1} = \\frac{F'}{S'}X_n + Y_1 - \\frac{F'}{S'}X_0$, with slope $F'/S'$. [Week 6, p. 29]" },
    { id: 't5', q: 'E = 9.46, $y_{in} = 0$, 99 % removal. How many counter-current stages?', a: '$N = \\ln[100(1 - 1/9.46) + 1/9.46]/\\ln 9.46 = 2.0$. [Week 6, p. 30; exercise_06_solutions.pdf, P1c]' },
  ],
  equations: [
    {
      id: 'ratios',
      label: 'Inert-basis ratios',
      tex: String.raw`\va{X} = \frac{\va{x}}{1-\va{x}}, \qquad \vb{Y} = \frac{\vb{y}}{1-\vb{y}}`,
      vars: [
        { sym: String.raw`\va{X}`, desc: 'solute per solute-free carrier (raffinate side)', unit: String.raw`\text{– (mol/mol or kg/kg)}` },
        { sym: String.raw`\vb{Y}`, desc: 'solute per solute-free solvent (extract side)', unit: '–' },
      ],
      cite: `[${W6}, p. 28]`,
      check: { status: 'verified', note: 'Matches W6 p. 28.' },
    },
    {
      id: 'op',
      label: 'Component balance and operating line (immiscible)',
      tex: String.raw`\vd{F'}\va{X_n} + \ve{S'}\vb{Y_1} = \vd{F'}\va{X_0} + \ve{S'}\vb{Y_{n+1}} \;\Rightarrow\; \vb{Y_{n+1}} = \frac{\vd{F'}}{\ve{S'}}\va{X_n} + \vb{Y_1} - \frac{\vd{F'}}{\ve{S'}}\va{X_0}`,
      vars: [
        { sym: String.raw`\vd{F'}`, desc: 'solute-free carrier flow', unit: String.raw`\mathrm{kg/h}\text{ or kmol/h}` },
        { sym: String.raw`\ve{S'}`, desc: 'solute-free solvent flow', unit: String.raw`\mathrm{kg/h}\text{ or kmol/h}` },
        { sym: String.raw`\va{X_0}, \va{X_n}`, desc: 'raffinate ratio entering stage 1, leaving stage n', unit: '–' },
        { sym: String.raw`\vb{Y_1}, \vb{Y_{n+1}}`, desc: 'extract ratio leaving stage 1, entering stage n', unit: '–' },
      ],
      cite: `[${W6}, p. 29; ${FS}, p. 6, eq. 61]`,
      check: { status: 'verified', note: 'Matches W6 p. 29 and formula sheet eq. 61 (on PDF p. 7).' },
    },
    {
      id: 'K',
      label: 'Equilibrium (McCabe–Thiele, extraction)',
      tex: String.raw`\vc{K_A} = \frac{\vb{y_A}}{\va{x_A}}`,
      vars: [{ sym: String.raw`\vb{y_A}, \va{x_A}`, desc: 'solute fraction in extract and raffinate', unit: '–' }],
      note: 'The formula sheet form.',
      cite: `[${FS}, p. 6, eq. 60; ${W6}, p. 7]`,
      check: { status: 'verified', note: 'Matches formula sheet eq. 60. (W6 p. 29 writes K = x/y — see trap.)' },
    },
    {
      id: 'kremser',
      label: 'Kremser for extraction',
      tex: String.raw`N = \frac{\ln\left[\dfrac{\va{x_{in}} - \vb{y_{in}}/\vc{K}}{\va{x_{out}} - \vb{y_{in}}/\vc{K}}\left(1 - \dfrac{1}{\vf{E}}\right) + \dfrac{1}{\vf{E}}\right]}{\ln \vf{E}}, \quad \vf{E} = \frac{\vc{K}S}{F}, \qquad \frac{\va{x_{in}} - \va{x_{out}}}{\va{x_{in}} - \vb{y_{in}}/\vc{K}} = 1 - \frac{x_R}{x_F} = \frac{\vf{E}^{N+1} - \vf{E}}{\vf{E}^{N+1} - 1}`,
      vars: [
        { sym: String.raw`\va{x_{in}}, \va{x_{out}}`, desc: 'solute fraction in feed and final raffinate', unit: '–' },
        { sym: String.raw`\vb{y_{in}}`, desc: 'solute fraction in the entering solvent', unit: '–' },
        { sym: String.raw`\vf{E}`, desc: 'extraction factor', unit: '–' },
      ],
      note: 'Dilute streams, constant K.',
      cite: `[${W6}, p. 30; ${FS}, p. 6, eq. 62]`,
      check: { status: 'verified', note: 'Matches W6 p. 30 and formula sheet eq. 62.' },
    },
    {
      id: 'mix',
      label: 'Mixing point (partly miscible)',
      tex: String.raw`M = \vd{F} + \ve{S} = R_N + E_1, \qquad x_M M = x_F \vd{F} + x_S \ve{S} = x_R R_N + x_E E_1`,
      vars: [
        { sym: String.raw`M`, desc: 'total of feed and solvent', unit: String.raw`\mathrm{kg/h}\ (\text{or normalised to 1})` },
        { sym: String.raw`x_M`, desc: 'mixing-point composition read off the diagram', unit: '–' },
      ],
      note: 'To get S/F, set M = 1 and solve.',
      cite: `[${W6}, p. 31, 33, 36]`,
      check: { status: 'verified', note: 'Matches W6 p. 31, 33, 36 (and formula sheet eq. 59).' },
    },
  ],
}

const st = (t, dash, w = 2.5) => ({ stroke: tone(t), strokeWidth: w, fill: 'none', strokeDasharray: dash ? '6 5' : undefined })

// ---- ternary helpers (schematic binodal, as on page 19) ----------------------------
const RAFF = [[0, 0.9], [0.1, 0.78], [0.2, 0.68], [0.3, 0.58], [0.4, 0.48], [0.5, 0.38], [0.57, 0.26], [0.6, 0.16]]
const EXTR = [[0.6, 0.16], [0.57, 0.1], [0.45, 0.066], [0.35, 0.048], [0.2, 0.036], [0.1, 0.032], [0, 0.03]]
const TIEMAP = [[0, 0], [0.05, 0.12], [0.1, 0.22], [0.2, 0.35], [0.3, 0.45], [0.4, 0.52], [0.5, 0.57], [0.6, 0.6]] // raffinate solute → extract solute
const interp = (arr, s) => {
  const a = [...arr].sort((p, q) => p[0] - q[0])
  for (let i = 0; i < a.length - 1; i++) if (s >= a[i][0] && s <= a[i + 1][0]) return a[i][1] + ((s - a[i][0]) / (a[i + 1][0] - a[i][0])) * (a[i + 1][1] - a[i][1])
  return a[s < a[0][0] ? 0 : a.length - 1][1]
}
const tern = (ox, oy, side) => {
  const h = (side * Math.sqrt(3)) / 2
  const Tp = [ox + side / 2, oy]
  const Lp = [ox, oy + h]
  const Rp = [ox + side, oy + h]
  const P = (s, c) => {
    const v = 1 - s - c
    return [s * Tp[0] + c * Lp[0] + v * Rp[0], s * Tp[1] + c * Lp[1] + v * Rp[1]]
  }
  const soluteOf = (y) => (oy + h - y) / h
  return { P, Tp, Lp, Rp, h, soluteOf }
}
const cross = (p1, p2, p3, p4) => {
  const d = (p1[0] - p2[0]) * (p3[1] - p4[1]) - (p1[1] - p2[1]) * (p3[0] - p4[0])
  if (Math.abs(d) < 1e-9) return null
  const t = ((p1[0] - p3[0]) * (p3[1] - p4[1]) - (p1[1] - p3[1]) * (p3[0] - p4[0])) / d
  return [p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1])]
}
const raffPt = (t, s) => t.P(s, interp(RAFF, s))
const extrPt = (t, s) => t.P(s, interp(EXTR, s))

function TernFrame({ t }) {
  return (
    <g>
      <polygon points={[t.Tp, t.Lp, t.Rp].map((p) => p.join(',')).join(' ')} style={st('ink', false, 1.6)} />
      <polygon points={[...RAFF, ...EXTR].map(([s, c]) => t.P(s, c).join(',')).join(' ')} style={{ fill: `color-mix(in srgb, ${tone('topic')} 10%, transparent)` }} />
      <Curve points={[...RAFF, ...EXTR.slice(1)].map(([s, c]) => t.P(s, c))} t="topic" width={2} />
      <Label x={t.Tp[0]} y={t.Tp[1] - 8} size={12} t="var-a">solute</Label>
      <Label x={t.Lp[0] - 2} y={t.Lp[1] + 18} anchor="start" size={12} t="var-c">carrier</Label>
      <Label x={t.Rp[0] + 2} y={t.Rp[1] + 18} anchor="end" size={12} t="var-b">solvent</Label>
    </g>
  )
}
const Dot = ({ p, t = 'ink', r = 5 }) => <circle cx={p[0]} cy={p[1]} r={r} style={{ fill: tone(t) }} />

// ---- Visual 1: cascade -------------------------------------------------------------
function Cascade() {
  return (
    <Svg w={620} h={190} label="Counter-current cascade with feed entering stage 1 and solvent entering stage N">
      <rect x={110} y={20} width={400} height={130} rx={10} style={st('muted', true, 1.5)} />
      <Label x={310} y={176} size={12} t="var-f">M = F + S = R_N + E₁</Label>
      {['1', '2', '…', 'N'].map((n, i) => <Box key={n} x={130 + i * 95} y={45} w={70} h={80} label={n} t="topic" />)}
      <Arrow x1={20} y1={65} x2={128} y2={65} t="var-d" />
      <Label x={20} y={56} anchor="start" size={12} t="var-d">F (feed)</Label>
      {[0, 1, 2].map((i) => <Arrow key={`r${i}`} x1={200 + i * 95} y1={65} x2={223 + i * 95} y2={65} t="var-d" />)}
      <Arrow x1={485} y1={65} x2={600} y2={65} t="var-d" />
      <Label x={600} y={56} anchor="end" size={12} t="var-d">R_N</Label>
      <Arrow x1={600} y1={105} x2={487} y2={105} t="var-e" />
      <Label x={600} y={122} anchor="end" size={12} t="var-e">S (solvent)</Label>
      {[0, 1, 2].map((i) => <Arrow key={`e${i}`} x1={223 + i * 95} y1={105} x2={200 + i * 95} y2={105} t="var-b" />)}
      <Arrow x1={128} y1={105} x2={20} y2={105} t="var-b" />
      <Label x={20} y={122} anchor="start" size={12} t="var-b">E₁ (extract)</Label>
    </Svg>
  )
}

// ---- Visual 2: McCabe–Thiele immiscible (schematic) -----------------------------
function McTExtraction() {
  const x0 = 60
  const y0 = 20
  const w = 300
  const h = 260
  const X = (v) => x0 + (v / 0.12) * w
  const Y = (v) => y0 + h - (v / 0.18) * h
  const K = 1.5
  const XN = 0.005
  const X0 = 0.11
  const m = 1
  const op = (x) => m * (x - XN)
  const Y1 = op(X0)
  const steps = []
  let y = Y1
  let xp = X0
  for (let i = 0; i < 8; i++) {
    const x = y / K
    const done = x <= XN
    const yn = done ? 0 : op(x)
    steps.push([xp, y, x, yn])
    if (done) break
    y = yn
    xp = x
  }
  return (
    <Svg w={420} h={330} label="Schematic McCabe–Thiele for immiscible extraction with staircase">
      <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
      <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
      <Label x={x0 + w} y={y0 + h + 22} anchor="end" size={12} t="var-a">X (raffinate ratio)</Label>
      <Label x={x0 + 6} y={y0 - 2} anchor="start" size={12} t="var-b">Y (extract ratio)</Label>
      <line x1={X(0)} y1={Y(0)} x2={X(0.12)} y2={Y(0.18)} style={st('var-c')} />
      <line x1={X(XN)} y1={Y(0)} x2={X(X0)} y2={Y(Y1)} style={st('var-e')} />
      {steps.map(([a, b, c, d], i) => (
        <g key={i}>
          <line x1={X(a)} y1={Y(b)} x2={X(c)} y2={Y(b)} style={st('example', false, 1.8)} />
          <line x1={X(c)} y1={Y(b)} x2={X(c)} y2={Y(d)} style={st('example', false, 1.8)} />
        </g>
      ))}
      <Dot p={[X(X0), Y(Y1)]} />
      <Label x={X(X0) + 6} y={Y(Y1) + 16} anchor="start" size={11}>(X₀, Y₁)</Label>
      <Dot p={[X(XN), Y(0)]} />
      <Label x={X(XN) + 8} y={Y(0) - 6} anchor="start" size={11}>(X_N, Y_N+1)</Label>
      <Label x={X(0.06)} y={Y(0.115)} anchor="end" size={12} t="var-c">equilibrium</Label>
      <Label x={X(0.09)} y={Y(op(0.09)) + 18} anchor="start" size={12} t="var-e">slope F′/S′</Label>
    </Svg>
  )
}

// ---- Visual 3: difference point and stepping (schematic) ----------------------------
function Stepping() {
  const t = tern(260, 30, 300)
  const F = t.P(0.3, 0.7)
  const S = t.P(0, 0)
  const rsN = 0.05
  const RN = raffPt(t, rsN)
  const E1 = extrPt(t, 0.4)
  const Pp = cross(E1, F, S, RN)
  const extrPoly = [...EXTR].sort((a, b) => a[0] - b[0]).map(([s, c]) => t.P(s, c))
  const lines = []
  let es = 0.4
  let n = 0
  while (n < 8) {
    const E = extrPt(t, es)
    const rs = interp(TIEMAP.map(([a, b]) => [b, a]), es)
    const R = raffPt(t, rs)
    n++
    lines.push({ E, R, n })
    if (rs <= rsN) break
    let next = null
    for (let i = 0; i < extrPoly.length - 1; i++) {
      const q = cross(Pp, R, extrPoly[i], extrPoly[i + 1])
      if (q && q[0] >= Math.min(extrPoly[i][0], extrPoly[i + 1][0]) - 0.5 && q[0] <= Math.max(extrPoly[i][0], extrPoly[i + 1][0]) + 0.5) next = q
    }
    if (!next) break
    lines.push({ op: [R, next] })
    es = t.soluteOf(next[1])
  }
  const Mpt = cross(F, S, E1, RN)
  return (
    <Svg w={600} h={330} label="Ternary diagram with operating point P, alternating tie lines and operating lines from F to R_N">
      <TernFrame t={t} />
      <line x1={Pp[0]} y1={Pp[1]} x2={E1[0]} y2={E1[1]} style={st('var-f', true, 1.3)} />
      <line x1={Pp[0]} y1={Pp[1]} x2={S[0]} y2={S[1]} style={st('var-f', true, 1.3)} />
      <line x1={F[0]} y1={F[1]} x2={S[0]} y2={S[1]} style={st('muted', false, 1)} />
      {lines.map((l, i) => (l.op
        ? <line key={i} x1={Pp[0]} y1={Pp[1]} x2={l.op[1][0]} y2={l.op[1][1]} style={st('var-f', false, 1.2)} />
        : (
          <g key={i}>
            <line x1={l.E[0]} y1={l.E[1]} x2={l.R[0]} y2={l.R[1]} style={st('example', false, 2)} />
            <Label x={(l.E[0] + l.R[0]) / 2} y={(l.E[1] + l.R[1]) / 2 - 5} size={11} t="example">{l.n}</Label>
          </g>
        )))}
      <Dot p={Pp} t="var-f" r={6} />
      <Label x={Pp[0] + 8} y={Pp[1] - 8} anchor="start" size={13} t="var-f">P</Label>
      <Dot p={F} t="var-d" />
      <Label x={F[0] - 8} y={F[1] - 6} anchor="end" size={12} t="var-d">F</Label>
      <Dot p={S} t="var-e" />
      <Label x={S[0] - 2} y={S[1] - 10} anchor="end" size={12} t="var-e">S</Label>
      <Dot p={RN} t="var-d" />
      <Label x={RN[0] + 6} y={RN[1] + 16} anchor="start" size={12} t="var-d">R_N</Label>
      <Dot p={E1} t="var-b" />
      <Label x={E1[0] + 8} y={E1[1]} anchor="start" size={12} t="var-b">E₁</Label>
      {Mpt && <Dot p={Mpt} t="ink" r={4} />}
      {Mpt && <Label x={Mpt[0]} y={Mpt[1] + 16} size={11}>M</Label>}
      <Label x={300} y={322} size={11} t="muted">{`schematic: ${lines.filter((l) => !l.op).length} stages here`}</Label>
    </Svg>
  )
}

// ---- Visual 4: minimum and maximum solvent (schematic) --------------------------------
function SolventLimits() {
  const t = tern(60, 30, 380)
  const F = t.P(0.3, 0.7)
  const S = t.P(0, 0)
  const RN = raffPt(t, 0.05)
  // tie-line direction near F's solute level (raffinate 0.3 → extract 0.45)
  const dir = [extrPt(t, 0.45)[0] - raffPt(t, 0.3)[0], extrPt(t, 0.45)[1] - raffPt(t, 0.3)[1]]
  const extrPoly = [...EXTR].sort((a, b) => a[0] - b[0]).map(([s, c]) => t.P(s, c))
  let Emax = null
  for (let i = 0; i < extrPoly.length - 1; i++) {
    const q = cross(F, [F[0] + dir[0], F[1] + dir[1]], extrPoly[i], extrPoly[i + 1])
    if (q && q[0] >= Math.min(extrPoly[i][0], extrPoly[i + 1][0]) - 0.5 && q[0] <= Math.max(extrPoly[i][0], extrPoly[i + 1][0]) + 0.5) Emax = q
  }
  const Mmin = Emax ? cross(F, S, Emax, RN) : null
  // where line FS leaves the dome on the solvent side (max solvent)
  const fs = Array.from({ length: 200 }, (_, i) => i / 199)
  const inside = (s, c) => c < interp(RAFF, s) && c > interp(EXTR, s)
  let exitK = 1
  for (const k of fs) {
    const s = 0.3 * (1 - k)
    const c = 0.7 * (1 - k)
    if (k > 0.2 && !inside(s, c)) { exitK = k; break }
  }
  const Mmax = t.P(0.3 * (1 - exitK), 0.7 * (1 - exitK))
  return (
    <Svg w={520} h={390} label="Minimum solvent: line from F parallel to the tie lines gives E_max; maximum solvent: M leaves the two-phase region near S">
      <TernFrame t={t} />
      <line x1={F[0]} y1={F[1]} x2={S[0]} y2={S[1]} style={st('muted', false, 1.2)} />
      <line x1={Mmax[0]} y1={Mmax[1]} x2={S[0]} y2={S[1]} style={st('trap', false, 5)} />
      <Label x={S[0] - 6} y={S[1] - 22} anchor="end" size={11} t="trap">M this close to S:</Label>
      <Label x={S[0] - 6} y={S[1] - 9} anchor="end" size={11} t="trap">one phase → no separation</Label>
      {Emax && <line x1={F[0]} y1={F[1]} x2={Emax[0]} y2={Emax[1]} style={st('example', false, 2)} />}
      {Emax && <line x1={Emax[0]} y1={Emax[1]} x2={RN[0]} y2={RN[1]} style={st('var-f', false, 2)} />}
      <Dot p={F} t="var-d" />
      <Label x={F[0] - 8} y={F[1] - 6} anchor="end" size={12} t="var-d">F</Label>
      <Dot p={S} t="var-e" />
      <Dot p={RN} t="var-d" />
      <Label x={RN[0] + 6} y={RN[1] + 16} anchor="start" size={12} t="var-d">R_N</Label>
      {Emax && <Dot p={Emax} t="example" />}
      {Emax && <Label x={Emax[0] + 8} y={Emax[1]} anchor="start" size={12} t="example">E_max</Label>}
      {Mmin && <Dot p={Mmin} t="var-f" r={6} />}
      {Mmin && <Label x={Mmin[0]} y={Mmin[1] + 20} size={12} t="var-f">M_min</Label>}
      <Label x={F[0] + 40} y={F[1] - 40} anchor="start" size={11} t="example">∥ tie lines</Label>
    </Svg>
  )
}

// ---- Interactive ------------------------------------------------------------------------
const kremserN = (E, ratio = 100) => Math.log(ratio * (1 - 1 / E) + 1 / E) / Math.log(E)
function KremserExt() {
  const [lE, setLE] = useState(Math.log10(9.46))
  const E = 10 ** lE
  const N = kremserN(E)
  const x0 = 64
  const y0 = 20
  const w = 380
  const h = 220
  const lmin = Math.log10(1.05)
  const lmax = Math.log10(20)
  const X = (e) => x0 + ((Math.log10(e) - lmin) / (lmax - lmin)) * w
  const Y = (n) => y0 + h - (Math.min(n, 30) / 30) * h
  const es = Array.from({ length: 80 }, (_, i) => 10 ** (lmin + (i / 79) * (lmax - lmin)))
  return (
    <Diagram
      title="Kremser for extraction: stages vs extraction factor"
      caption={String.raw`Eq. 62 with $x_{in}/x_{out} = 100$ (99 % removal) and $y_{in} = 0$ [Week 6, p. 30]. At E = 9.46: N = 2.0, the phenol two-stage counter-current answer [exercise_06_solutions.pdf, P1c].`}
      cite={`[${W6}, p. 30; ${FS}, p. 6, eq. 62; ${E6}, P1c]`}
    >
      <div style={{ width: '100%' }}>
        <div className="plot-controls">
          <label>
            <span className="plot-param"><V c="f"><M>E</M></V> = <strong>{E.toFixed(2)}</strong></span>
            <input type="range" min={lmin} max={lmax} step={0.002} value={lE} onChange={(e) => setLE(Number(e.target.value))} />
          </label>
        </div>
        <p><M>N</M> = <strong>{N.toFixed(2)}</strong> theoretical stages</p>
        <Svg w={480} h={300} label="Kremser N against E on a log axis">
          <Arrow x1={x0} y1={y0 + h} x2={x0 + w + 10} y2={y0 + h} />
          <Arrow x1={x0} y1={y0 + h} x2={x0} y2={y0 - 8} />
          {[1.05, 2, 5, 10, 20].map((v) => <text key={v} x={X(v)} y={y0 + h + 17} textAnchor="middle" className="svg-sub">{v}</text>)}
          {[10, 20, 30].map((v) => <text key={v} x={x0 - 7} y={Y(v) + 4} textAnchor="end" className="svg-sub">{v}</text>)}
          <Label x={x0 + w} y={y0 + h + 36} anchor="end" size={13} t="var-f">E (log)</Label>
          <Label x={x0 + 6} y={y0 - 4} anchor="start" size={13}>N</Label>
          <polyline points={es.map((e) => `${X(e)},${Y(kremserN(e))}`).join(' ')} style={st('var-f')} />
          <circle cx={X(9.46)} cy={Y(kremserN(9.46))} r={5} style={{ fill: 'none', stroke: tone('example'), strokeWidth: 2 }} />
          <Label x={X(9.46)} y={Y(kremserN(9.46)) - 10} size={11} t="example">phenol: E 9.46, N 2.0</Label>
          <circle cx={X(E)} cy={Y(N)} r={6} style={{ fill: tone('var-f') }} />
        </Svg>
      </div>
    </Diagram>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="An absorber with two liquids">
        <MentalModel cite={`[${W6}, p. 28–36]`}>
          <T text="Counter-current extraction is designed exactly like an absorber, with feed and solvent playing the roles of liquid and gas [Week 6, p. 28]. If carrier and solvent are immiscible, the solute-free flows F′ and S′ are constant. In mole or mass ratios the balance is a straight operating line, so you can step McCabe–Thiele against the equilibrium line, or use Kremser with $E = KS/F$ if the system is dilute with constant K [Week 6, p. 28–30]." />
          <p>
            If they are partly miscible, the flows change, so you work on the ternary diagram instead [Week 6, p. 31]. Mixing gives M,
            and the products <M>E_1</M> and <M>R_N</M> sit on a line through it [Week 6, p. 31]. Extending <M>E_1F</M> and <M>SR_N</M>{' '}
            to where they cross gives the <V c="f">operating (difference) point P</V>. Every passing pair of streams lies on a line through
            P, so you step alternately along a tie line (equilibrium) and along a line to P (balance) from F until you pass <M>R_N</M>{' '}
            [Week 6, p. 34–35]. The minimum solvent is where an operating line coincides with a tie line, the extraction analogue of
            the pinch [Week 6, p. 36].
          </p>
        </MentalModel>
      </Section>

      <Section kind="definition" title="Immiscible vs partly miscible design">
        <Diagram title="Counter-current cascade" cite={`[${W6}, p. 31; ${PX}, Ex. 4]`} caption="Feed enters stage 1, solvent enters stage N; the envelope gives the overall balance.">
          <Cascade />
        </Diagram>
        <Columns>
          <Diagram title="McCabe–Thiele for immiscible extraction (schematic)" cite={`[${W6}, p. 28–29]`}
            caption="Same construction as absorption; y/Y = extract. Equilibrium line through the origin, operating line with slope F′/S′, staircase between the end points.">
            <McTExtraction />
          </Diagram>
          <div>
            <Def term="Immiscible systems, McCabe–Thiele" cite={`[${W6}, p. 28]`}>
              {String.raw`Same approach as absorption, using solute-free carrier flow F′ and solute-free solvent flow S′ with ratios $X = x/(1-x)$, $Y = y/(1-y)$. Check whether weight or mole fractions are used.`}
            </Def>
            <Def term="Notation" cite={`[${W6}, p. 29]`}>y and Y represent the **extract** phase, and x and X the raffinate.</Def>
            <Def term="Operating line (extraction)" cite={`[${W6}, p. 29; ${FS}, p. 6, eq. 61]`}>
              {String.raw`From the component balance $F'X_n + S'Y_1 = F'X_0 + S'Y_{n+1}$.`}
            </Def>
            <Def term="Minimum solvent flow (immiscible)" cite={`[${W6}, p. 29]`}>Found as for absorption.</Def>
            <Def term="Analytical Kremser (immiscible)" cite={`[${W6}, p. 30]`}>Assumes dilute streams and a constant distribution coefficient.</Def>
          </div>
        </Columns>

        <Diagram title="Ternary: difference point and stepping (schematic)" cite={`[${W6}, p. 34–35; ${E6}, P2c]`}
          caption="P = crossing of line E₁F and line SR_N (both extended). From E₁: tie line to the raffinate, line to P back to the extract branch, repeat until past R_N. The biodiesel example needed 3 stages; this schematic dome gives the count shown.">
          <Stepping />
        </Diagram>
        <Columns>
          <div>
            <Def term="Partly miscible, graphical" cite={`[${W6}, p. 31]`}>
              {String.raw`Use the ternary diagram with F (feed), S (solvent), R (raffinate product), E (extract product) and M (mixing point = overall feed composition). $M = F + S = R_N + E_1$.`}
            </Def>
            <Def term="Operating (difference) point P" cite={`[${W6}, p. 34]`}>
              {String.raw`The intersection of the line through $E_1$ and F with the line through S and $R_N$. Operating lines through P represent the passing streams.`}
            </Def>
            <Def term="Stage stepping (ternary)" cite={`[${W6}, p. 35]`}>
              {String.raw`Alternate between lines parallel to the tie lines (equilibrium) and lines to P (flows between stages). Start at F, stop when $R_N$ is passed, count the stages.`}
            </Def>
          </div>
          <div>
            <Diagram title="Minimum and maximum solvent (schematic)" cite={`[${W6}, p. 36–39; ${PX2}, Q4c]`}
              caption="From F parallel to the tie lines → E_max; line E_max–R_N crosses FS at M_min. Lecture: x_M = 0.25, x_F = 0.3 → S/F = 0.2. Exam: M_min at 23 % acetone, E_max at 65/16/19 %. Red: M beyond the binodal near S — no separation.">
              <SolventLimits />
            </Diagram>
          </div>
        </Columns>
        <Columns>
          <Def term="Minimum solvent-to-feed ratio" cite={`[${W6}, p. 36]`}>
            {String.raw`At an infinite number of stages, with the operating line parallel to a tie line. From F, follow the tie line to $E_{1,max}$, then locate M on line $E_{1,max}R_N$ and FS. A reasonable value is $S = 1.5\,S_{min}$.`}
          </Def>
          <Def term="Maximum solvent-to-feed ratio" cite={`[${W6}, p. 37]`}>
            With too much solvent, M may not lie in the two-phase region. The limit is at the equilibrium (binodal) curve. In most cases this is not a problem.
          </Def>
        </Columns>
        <Gap>The files contain no worked McCabe–Thiele example for immiscible extraction (Week 6, p. 28–29 only give the equations), so that visual is schematic.</Gap>
        <Gap>The ternary figures (Week 6, p. 32–39) are images. Only the quoted read-off values are available.</Gap>
      </Section>

      <Section kind="equation" title="Equations">
        <Eq id="ratios" />
        <Eq id="op" />
        <Eq id="K" />
        <Eq id="kremser" />
        <KremserExt />
        <Eq id="mix" />
      </Section>

      <Section kind="example" title="Examples">
        <Example
          title="Minimum benzene flow for acetone/water extraction"
          given="Feed 40 kg/h with 25 wt % acetone in water. Pure benzene solvent. Raffinate 5 wt % acetone. Counter-current."
          steps={[
            { body: String.raw`Minimum solvent means the operating line is parallel to a tie line. Draw the line from F parallel to the tie lines to the extract branch: that is $E_{max}$. [Week 6, p. 36]` },
            { body: String.raw`Draw the line $E_{max}$–$R_N$ ($R_N$ on the raffinate branch at 5 wt % acetone). Where it crosses FS is the mixing point M.` },
            { body: 'Read M: 23 wt % acetone, 72 % water, 5 % benzene.' },
            { body: String.raw`Acetone balance: $Fx_F + Sx_S = Mx_M$, so $40\cdot 0.25 + S\cdot 0 = M\cdot 0.23$, giving M = 43.5 kg/h.` },
            { body: String.raw`$S_{min} = M - F = 43.5 - 40 = 3.5$ kg/h.` },
            { body: String.raw`Extract composition at $S_{min}$, read at $E_{max}$: 65 wt % acetone, 16 % water, 19 % benzene.` },
            { body: String.raw`Design value would be about $1.5\,S_{min}$. [Week 6, p. 36]` },
          ]}
          result={String.raw`$S_{min} = 3.5$ kg/h; $E_{max}$ = 65/16/19 wt %`}
          cite={`[${PX2}, Q4c]`}
        />
        <FadedExample
          title="Minimum solvent-to-feed ratio from the lecture diagram"
          given={String.raw`Ternary diagram with F at $x_F = 0.3$ (solute), pure solvent S, raffinate $R_N$ given.`}
          steps={[
            { title: String.raw`How do you find $E_{max}$?`, body: 'Draw a line from F parallel to the tie lines to the extract side of the binodal curve.', hidden: true },
            { title: 'How do you find M?', body: String.raw`Draw $E_{max}$–$R_N$ and intersect it with FS.`, hidden: true },
            { body: String.raw`Read $x_M = 0.25$ (solute).` },
            { title: 'Solute balance with M = 1.', body: String.raw`$0.25 = 0.3F + 0$, so F = 0.83 and S = 0.17.`, hidden: true },
            { title: 'Ratio.', body: String.raw`$S/F = 0.2$ (minimum). A reasonable design is $1.5\times$ that, so S/F ≈ 0.3.`, hidden: true },
          ]}
          cite={`[${W6}, p. 36, 38–39]`}
        />
      </Section>

      <Section kind="trap" title="Exam traps">
        <Trap title={String.raw`Minimum solvent: tie line from F, not from $R_N$`} cite={`[${W6}, p. 36; ${PX2}, Q4c]`}>
          {String.raw`The operating line through F coincides with a tie line, which gives $E_{max}$.`}
        </Trap>
        <Trap title="M comes from two lines" cite={`[${W6}, p. 36; ${PX2}, Q4c]`}>
          {String.raw`In a design, M is the intersection of FS with $E_1R_N$. Then use the balance, not the other way round.`}
        </Trap>
        <Trap title="Normalise M = 1 to get S/F" cite={`[${W6}, p. 33, 39]`}>
          {"That's the slide's trick. Don't confuse S/F with S/M."}
        </Trap>
        <Trap title="Inconsistent K on slide p. 29 (source discrepancy)" cite={`[${W6}, p. 7, 29; ${FS}, p. 6, eq. 60]`}>
          {String.raw`It writes $K = x/y$ while saying y is the extract. The formula sheet and p. 7 use extract over raffinate ($K = y/x$). Use the formula sheet. (Confirmed in the PDF.)`}
        </Trap>
        <Trap title="Kremser in extraction uses x (raffinate) compositions and E" cite={`[${W6}, p. 30; ${FS}, p. 6, eq. 62]`}>
          It has the stripping form, with E in place of S.
        </Trap>
        <Trap title="Ratios vs fractions" cite={`[${W6}, p. 28]`}>
          McCabe–Thiele uses X and Y on a solute-free basis. Check whether wt or mol is used.
        </Trap>
        <Trap title="Stepping order on the ternary" cite={`[${W6}, p. 35]`}>
          {String.raw`Tie line (equilibrium), then a line to P (balance), alternating. Start at F and stop once you pass $R_N$.`}
        </Trap>
        <Trap title="Too much solvent" cite={`[${W6}, p. 37]`}>
          {"If M falls outside the two-phase region there's no extraction. Check before reporting a large S/F."}
        </Trap>
      </Section>
    </>
  )
}
