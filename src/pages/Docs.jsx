import { useState } from 'react'
import './Docs.css'

const DOCS = [
  {
    num:'01', title:'Founder Story', color:'#7B5FFF', tier:'Foundation',
    status:'✓ Complete', statusColor:'#7B5FFF',
    download:'/docs/FuelSync_Founder_Story.docx',
    sub:'The rice + tuna bowl origin',
    summary:'The origin of FuelSync — how losing 30kg through a single repeatable meal became the product thesis, extended by a sister\'s experience with neurodivergent kids and sharpened by firsthand work training agentic AI at Outlier.',
    sections:[
      {h:'The core insight', p:'People don\'t fail at healthy eating from lack of willpower. They fail because they\'ve never found a meal they love enough to repeat. Find that meal, build emotional attachment, and the body changes as a side effect.'},
      {h:'Personal proof', p:'30kg lost without structured exercise or calorie counting — through a bowl of brown rice, tuna, and eggs that evolved with parmesan and nasi goreng spice. The meal became an anchor that changed metabolism, energy, and eating behaviour.'},
      {h:'Extended insight', p:'The same truth applied to the founder\'s sister\'s autistic children, for whom food safety is not preference but necessity. FuelSync Neuro emerged from this.'},
      {h:'Why now, why this founder', p:'Working as an AI trainer at Outlier gave direct insight into agentic AI capabilities. The infrastructure now existed to systematise the discovery of an anchor meal for anyone — at scale.'}
    ]
  },
  {
    num:'02', title:'Problem & Insight', color:'#2EC4B6', tier:'Problem + Market',
    status:'✓ Complete', statusColor:'#2EC4B6',
    download:'/docs/FuelSync_Problem_Insight.docx',
    sub:'Why diets fail, what actually works',
    summary:'A five-part argument for why the nutrition app category keeps failing — built around the founder\'s personal experience, primary survey research from 24 respondents, and the core behavioural insight that emotional attachment to specific meals, not information or willpower, drives long-term adherence.',
    sections:[
      {h:'The failure pattern', p:'70–89% of health apps are abandoned within 30 days. Apps are built around tracking and information, when the real lever is emotional safety and habit formation.'},
      {h:'The behaviour insight', p:'Research consistently shows people adhere to eating patterns they emotionally enjoy, not ones they intellectually approve of. Shame and restriction accelerate abandonment.'},
      {h:'What\'s needed', p:'A system that finds the meals a person already has the capacity to love, builds attachment to them, and expands gradually — not one that imposes a new diet framework.'},
      {h:'Gap in market', ul:['No app tracks emotional food attachment','No app reasons over sensory + budget + metabolic fit together','No app uses community as a behaviour anchor, not just content']}
    ]
  },
  {
    num:'03', title:'Market Opportunity', color:'#2EC4B6', tier:'Problem + Market',
    status:'✓ Complete', statusColor:'#2EC4B6',
    download:'/docs/FuelSync_Market_Opportunity.docx',
    sub:'TAM, segments & Neuro angle',
    summary:'The total addressable market, four distinct segments, the Brisbane-first launch rationale, the NDIS revenue pathway with dollar projections, and a five-stage expansion plan from general population through to chronic condition management.',
    sections:[
      {h:'Primary segment', p:'People who want to lose weight or eat healthier but are stuck in decision fatigue, emotional eating cycles, or routine collapse. Brisbane-first as launch market.'},
      {h:'Secondary segment', p:'Neurodivergent individuals — particularly autistic children and their families — for whom finding safe, predictable food is a daily challenge. NDIS funding pathway in Australia.'},
      {h:'Competitive gap', ul:['MyFitnessPal: calorie-focused, shame-inducing','Noom: psychology-aware but generic, expensive','No product owns emotional + sensory + budget fit']}
    ]
  },
  {
    num:'04', title:'Business Strategy', color:'#FF6B6B', tier:'Product',
    status:'✓ Complete', statusColor:'#FF6B6B',
    download:'/docs/FuelSync_Business_Strategy.docx',
    sub:'Market, revenue model, execution plan',
    summary:'The strategic case for FuelSync — Australian market sizing (AUD $63–200M, 2024), competitive matrix against MyFitnessPal and Noom, revenue model with projections, 4-phase execution plan, unfair advantages, and KPIs that measure whether the core thesis is working.',
    sections:[
      {h:'Market opportunity', p:'Australian diet and nutrition app market valued at AUD $63–200M in 2024, growing at 15–41% CAGR. Over half of Australians use digital health tools. MyFitnessPal alone has 280k–370k weekly active Australian users.'},
      {h:'Revenue model', p:'Three streams: consumer freemium ($14.99/month premium), NDIS-funded FuelSync Neuro ($79/month), and creator marketplace (Year 2). Combined 12-month target: $150k–$250k ARR.'},
      {h:'Competitive position', ul:['Competitors track calories — FuelSync tracks behaviour','No competitor has a neurodivergent mode with NDIS funding','No competitor shows real local grocery prices','Architecture built around shame-free design — structurally different, not just different features']},
      {h:'Unfair advantages', ul:['Founder personally proved the thesis — 30kg lost on one meal','Agent-native from day one — incumbents cannot replicate without full rebuild','NDIS pathway gives access to funded revenue stream competitors cannot capture','Behavioural data moat compounds with every user interaction']}
    ]
  },
  {
    num:'05', title:'Smart Psychology', color:'#FF6B6B', tier:'Product',
    status:'Needs rework', statusColor:'#FF6B6B',
    sub:'Spiral breaker, 6-meal feed',
    summary:'The behavioural engine behind FuelSync — the 6-meal mechanic, the spiral breaker loop, and the research basis for why emotional attachment to specific foods is the #1 predictor of long-term dietary success.',
    sections:[
      {h:'The 6-meal mechanic', p:'Every session surfaces 6 meal options: 3 from AI reasoning over user state, 3 from real community members. Something always clicks. One becomes \'their meal\' — the anchor that stops the spiral.'},
      {h:'The spiral breaker', p:'Big Mac → guilt → quit app → relapse. FuelSync interrupts this: Big Mac felt good → here are 6 pizza-like alternatives → user discovers a pizza bowl they love → emotional attachment forms → spiral ends.'},
      {h:'Research backing', ul:['Emotional connection to food → 2x adherence','Variety prevents burnout — 94% adherence vs 60% rigid plans','Non-judgmental validation → 2x better habit formation']}
    ]
  },
  {
    num:'06', title:'UI as Strategy', color:'#FF6B6B', tier:'Product',
    status:'Needs rework', statusColor:'#FF6B6B',
    sub:'Retention, trust, design moat',
    summary:'The strategic case for why production-grade UX is not aesthetic preference but execution infrastructure — and how FuelSync\'s clean, emotionally safe interface directly drives adherence, trust, and grant eligibility.',
    sections:[
      {h:'The industry failure pattern', p:'89% of health apps abandoned within 30 days. Primary cause: UI friction. Overcrowded screens, confusing navigation, form-heavy onboarding, clinical tone.'},
      {h:'FuelSync\'s UI philosophy', ul:['Clean, spacious feed — minimal clutter, clear hierarchy','Premium visual polish — consistent spacing, smooth micro-interactions','Frictionless onboarding — visual choices, not forms','Vote → Reason → 5★ interaction loop']},
      {h:'Strategic implications', p:'Premium UI → increased trust → structured behavioural signals → measurable adherence → grant-ready outcomes. UI quality is directly tied to funding viability.'}
    ]
  },
  {
    num:'07', title:'Agent Architecture v1.0', color:'#5B9EFF', tier:'Architecture',
    status:'Draft', statusColor:'#5B9EFF',
    sub:'Core AI loop',
    summary:'The technical architecture of FuelSync\'s core AI loop — perception layer, user state model, memory, reasoning engine, and action layer. Built agent-native from day one.',
    sections:[
      {h:'System layers', ul:['Perception: text, photos, voice, behavioural signals, location/time','User state: hunger, emotional state, budget, craving, prep-time reality','Memory: short-term (last meal) + long-term (their meal, spiral patterns)','Reasoning: spiral detection, meal ranking, tone selection, nudge timing','Action: chat coach, 6-meal feed, why-this-fits explanations']},
      {h:'Data moat', p:'Emotional patterns, craving cycles, budget triggers, prep-time reality, longitudinal behaviour — a dataset incumbents cannot replicate because they never asked for it.'}
    ]
  },
  {
    num:'08', title:'FuelSync Neuro', color:'#5B9EFF', tier:'Architecture',
    status:'Draft', statusColor:'#5B9EFF',
    sub:'Sensory-safe, NDIS angle',
    summary:'A dedicated mode for neurodivergent users — particularly autistic children and families. Same agentic architecture, different constraints: sensory profiling, safe-food tracking, gradual exposure planning.',
    sections:[
      {h:'The problem it solves', ul:['Sensory overwhelm around food','Restricted food repertoires','Texture and ingredient aversions','Mealtime stress for families']},
      {h:'NDIS pathway', p:'FuelSync Neuro positions as a registered NDIS support tool — enabling NDIS-funded subscriptions, provider dashboards, and dietitian collaboration tools.'}
    ]
  },
  {
    num:'09', title:'Platform Systems', color:'#5B9EFF', tier:'Architecture',
    status:'Draft', statusColor:'#5B9EFF',
    sub:'Safety, feedback, monitoring',
    summary:'The operational infrastructure underpinning the FuelSync community — content safety pipeline, upvote/downvote feedback system with intensity ratings, and monitoring framework.',
    sections:[
      {h:'Community monitoring', ul:['5-stage pipeline: intercept → safety analysis → suggestion detection → publish → product loop','Detects bullying, hate speech, self-harm indicators','Captures ingredient suggestions and feature requests as structured data']},
      {h:'Feedback system', ul:['Upvote/downvote with optional reason selection','10 upvote + 10 downvote signal categories','Hybrid intensity rating: optional 1–5 star slider']}
    ]
  },
  {
    num:'10', title:'Competitive Landscape', color:'#F7B731', tier:'Missing',
    status:'Not started', statusColor:'#F7B731',
    sub:'Why not just use MyFitnessPal?',
    summary:'The one document every investor will look for first. Why does FuelSync win against MyFitnessPal, Noom, Cronometer, and every other wellness app? The answer exists — it just needs to be structured.',
    sections:[
      {h:'Why this matters most', p:'Before reading architecture or strategy, any investor will ask: "Why not just use what already exists?" Without a crisp answer, everything else loses credibility.'},
      {h:'Your differentiation (draft)', ul:['Competitors track calories — FuelSync tracks behaviour','Competitors induce shame — FuelSync builds attachment','No competitor has a neurodivergent mode','No competitor owns the community-as-behaviour-anchor mechanic']},
      {h:'What needs to be built', ul:['Competitor matrix (MyFitnessPal, Noom, Cronometer, Eat This Much)','Feature-by-feature differentiation table','Moat analysis: data, community, agent-native architecture']}
    ]
  }
]

const TIERS = [
  { label: 'Tier 1 — Foundation', ids: [0] },
  { label: 'Tier 2 — Problem & Market', ids: [1, 2] },
  { label: 'Tier 3 — Product', ids: [3, 4, 5] },
  { label: 'Tier 4 — Architecture & Platform', ids: [6, 7, 8, 9] },
]

export default function Docs() {
  const [active, setActive] = useState(null)
  const [detailOpen, setDetailOpen] = useState(false)
  const completed = DOCS.filter(d => d.status.includes('Complete')).length

  function open(idx) {
    setActive(idx)
    setDetailOpen(false)
  }
  function close() { setActive(null) }

  const doc = active !== null ? DOCS[active] : null

  return (
    <div className="docs-page">
      <div className="docs-header">
        <div>
          <h1 className="docs-title">Document Architecture</h1>
          <p className="docs-sub">The complete knowledge base behind FuelSync — from founder story to agent loops.</p>
        </div>
        <div className="docs-progress-wrap">
          <div className="docs-progress-bar">
            <div className="docs-progress-fill" style={{ width: `${(completed / DOCS.length) * 100}%` }} />
          </div>
          <div className="docs-progress-label">{completed} of {DOCS.length} documents complete</div>
        </div>
      </div>

      {TIERS.map((tier, ti) => (
        <div className="docs-tier" key={ti}>
          <div className="docs-tier-label">{tier.label}</div>
          <div className={`docs-tier-row cols-${tier.ids.length}`}>
            {tier.ids.map(idx => {
              const d = DOCS[idx]
              const isDashed = d.status === 'Not started'
              return (
                <div
                  key={idx}
                  className={`doc-card ${isDashed ? 'dashed' : ''} ${active === idx ? 'active' : ''}`}
                  style={{ '--card-color': d.color, '--card-glow': d.color + '33' }}
                  onClick={() => open(idx)}
                >
                  <div className="doc-card-dot" />
                  <div className="doc-card-num">DOC {d.num}</div>
                  <div className="doc-card-title">{d.title}</div>
                  <div className="doc-card-sub">{d.sub}</div>
                  <div className="doc-card-tag" style={{ background: d.color + '22', color: d.color }}>
                    {d.status}
                  </div>
                </div>
              )
            })}
          </div>
          {ti < TIERS.length - 1 && (
            <div className="docs-connector">
              {tier.ids.length === 1 && <div className="vline" />}
              {tier.ids.length === 2 && <><div className="vline" /><div className="vline" /></>}
              {tier.ids.length >= 3 && <><div className="vline" /><div className="vline" /><div className="vline" /></>}
            </div>
          )}
        </div>
      ))}

      <div className="docs-legend">
        {[['#7B5FFF','Foundation'],['#2EC4B6','Problem + Market'],['#FF6B6B','Product'],['#5B9EFF','Architecture'],['#F7B731','Missing']].map(([c,l]) => (
          <div className="legend-item" key={l}>
            <div className="legend-dot" style={{ background: c }} />
            <span>{l}</span>
          </div>
        ))}
      </div>

      {/* Side panel */}
      <div className={`panel-overlay ${doc ? 'open' : ''}`} onClick={e => e.target === e.currentTarget && close()}>
        <div className="side-panel" style={{ '--panel-color': doc?.color }}>
          {doc && <>
            <div className="panel-top">
              <div className="panel-tag" style={{ background: doc.color + '22', color: doc.color }}>
                {doc.tier}
              </div>
              <button className="panel-close" onClick={close}>✕</button>
            </div>
            <div className="panel-num">Document {doc.num}</div>
            <h2 className="panel-title">{doc.title}</h2>
            <p className="panel-summary">{doc.summary}</p>

            {doc.download && (
              <a
                href={doc.download}
                download
                className="download-btn"
                style={{ background: doc.color }}
              >
                Download full document →
              </a>
            )}

            <button
              className={`expand-btn ${detailOpen ? 'open' : ''}`}
              onClick={() => setDetailOpen(v => !v)}
            >
              <span>Full document brief</span>
              <span className="chevron">▼</span>
            </button>

            {detailOpen && (
              <div className="detail-content">
                {doc.sections.map((s, i) => (
                  <div className="detail-section" key={i}>
                    <h4 style={{ color: doc.color }}>{s.h}</h4>
                    {s.p && <p>{s.p}</p>}
                    {s.ul && <ul>{s.ul.map((li, j) => <li key={j}>{li}</li>)}</ul>}
                  </div>
                ))}
              </div>
            )}
          </>}
        </div>
      </div>
    </div>
  )
}
