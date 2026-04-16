import { useState } from 'react'
import './Docs.css'

const DOCS = [
  {
    num:'01', title:'Founder Story', color:'#7B5FFF', tier:'Foundation',
    status:'✓ Complete', statusColor:'#7B5FFF',
    download:'/docs/FuelSync_Founder_Story.pdf',
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
    download:'/docs/FuelSync_Problem_Insight.pdf',
    sub:'Peer-reviewed evidence for why diets fail',
    summary:'A five-part evidence-based argument for why the nutrition app category keeps failing — built on 4 peer-reviewed studies, primary survey data from 15 targeted respondents, and the finding that guilt, not lack of information, is the primary mechanism that causes dietary failure.',
    sections:[
      {h:'The research finding', p:'53% of health apps are abandoned within 30 days (Riaz et al., 2022). 70% within 100 days (Kidman et al., 2024). The primary drivers are not technical — they are emotional: guilt, shame, poor personalisation, and the absence of attachment to specific foods.'},
      {h:'The guilt mechanism', p:'Guilt after dietary lapses directly predicts lower intention to continue, lower self-efficacy, and more negative reactions — Mantzios et al. (2020). Apps built around scoring and failure states are actively accelerating the abandonment they are designed to prevent.'},
      {h:'The meal repetition insight', p:'Meal repetition is sustainable when broader dietary variety is perceived — Redden & Galak (2021). One anchor meal plus rotating alternatives creates the habit loop without boredom. This is FuelSync\'s 6-meal mechanic in research form.'},
      {h:'Survey evidence', ul:['91.7% of targeted respondents have never found their one reliable go-to meal','75% struggle with food decisions almost every day','Zero respondents said they probably would not use FuelSync','Top frustrations: time/effort (41.7%) and cost (41.7%) — both directly addressed by FuelSync']}
    ]
  },
  {
    num:'03', title:'Market Opportunity', color:'#2EC4B6', tier:'Problem + Market',
    status:'✓ Complete', statusColor:'#2EC4B6',
    download:'/docs/FuelSync_Market_Opportunity.pdf',
    sub:'Australian market data, NDIS pathway, 5-stage expansion',
    summary:'Australia-specific market sizing (AUD $63–200M in 2024, 15–41% CAGR), active user data from Sensor Tower, the Brisbane-first launch rationale, NDIS revenue projections, and a 5-stage expansion pathway from general population to chronic condition management.',
    sections:[
      {h:'The Australian market', p:'Valued at AUD $63–200M in 2024 (Grand View Research; Data Bridge), growing at 15–41% annually. Over 50% of Australians already use digital health tools (Healthylife/Woolworths 2025). MyFitnessPal had 279k–367k weekly active Australian users in Q1 2024 (Sensor Tower) — with a documented 70% abandonment rate that continuously replenishes FuelSync\'s acquisition pool.'},
      {h:'NDIS revenue pathway', p:'FuelSync Neuro at $79/month per NDIS participant. At 200 participants: $189,600 ARR. At 500 participants: $474,000 ARR. No competitor is positioned to access this funded revenue stream.'},
      {h:'5-stage expansion', ul:['Stage 1: Brisbane general population — prove anchor meal mechanic','Stage 2: National rollout + NDIS registration','Stage 3: ADHD and neurodivergent expansion','Stage 4: Performance and body composition market','Stage 5: Chronic condition management with clinical partnerships']}
    ]
  },
  {
    num:'04', title:'Business Strategy', color:'#FF6B6B', tier:'Product',
    status:'✓ Complete', statusColor:'#FF6B6B',
    download:'/docs/FuelSync_Business_Strategy.pdf',
    sub:'Market, revenue model, competitive matrix, execution plan',
    summary:'The full strategic case — Australian market sizing with sources, competitive matrix against MyFitnessPal and Noom, revenue model with projections at multiple user milestones, 4-phase execution plan, 5 unfair advantages, and KPIs that directly measure whether the core thesis is working.',
    sections:[
      {h:'Revenue model', p:'Three streams: consumer freemium ($14.99/month premium), NDIS-funded FuelSync Neuro ($79/month), and creator marketplace (Year 2). 12-month target: $150k–$250k ARR. Year 2 target: $500k+ ARR.'},
      {h:'Competitive position', ul:['No competitor tracks emotional eating patterns','No competitor has a neurodivergent mode with NDIS funding','No competitor shows real local grocery prices on meal cards','Architecture built around shame-free design — structurally different, not a feature difference']},
      {h:'Unfair advantages', ul:['Founder personally proved the thesis — 30kg lost on one anchor meal','Agent-native from day one — incumbents cannot replicate without full rebuild','NDIS pathway gives access to funded revenue stream no competitor can capture','Behavioural data moat compounds with every user interaction']},
      {h:'Key KPIs', ul:['Day-7 retention: 40%+ target','% users finding anchor meal: 15%+ of actives','Spiral recovery rate: 60%+ return after lapse','Free to premium conversion: 8–12%']}
    ]
  },
  {
    num:'05', title:'Smart Psychology', color:'#FF6B6B', tier:'Product',
    status:'✓ Complete', statusColor:'#FF6B6B',
    download:'/docs/FuelSync_Smart_Psychology.pdf',
    sub:'The what-the-hell effect, guilt loop, spiral breaker',
    summary:'The behavioural science behind every FuelSync mechanic — five peer-reviewed psychological mechanisms that explain why diets fail and how FuelSync\'s product decisions directly counteract each one. Covers the what-the-hell effect, guilt vs shame, perceived control, social proof, and identity-based habits.',
    sections:[
      {h:'The what-the-hell effect', p:'Herman & Mack (1975): once a dieter perceives their plan as broken, self-control collapses and they eat more than non-dieters. Rigid rules amplify this. FuelSync\'s spiral breaker interrupts it by offering choices rather than scoring violations.'},
      {h:'The guilt mechanism', p:'Mantzios et al. (2020): guilt — not the lapse itself — predicts lower intention, lower self-efficacy, and more negative reactions. Self-compassion helps by reducing guilt first. Every FuelSync post-lapse interaction is designed to eliminate guilt triggers.'},
      {h:'The 6-meal feed', p:'Restoring perceived control after a lapse is the critical intervention point. Offering 6 realistic next options — 3 AI, 3 community — directly counteracts all-or-nothing thinking by keeping choices visible.'},
      {h:'Community and identity', ul:['Social proof from credible peers shifts food choices more than generic recommendations — Bhatti et al. (2024)','Identity-based language ("your anchor meal", "your standard dinner") produces stronger intention-behaviour links than goal-based framing — Cecchini et al. (2025)']}
    ]
  },
  {
    num:'06', title:'UI as Strategy', color:'#FF6B6B', tier:'Product',
    status:'✓ Complete', statusColor:'#FF6B6B',
    download:'/docs/FuelSync_UI_as_Strategy.pdf',
    sub:'Retention, credibility, emotionally safe design',
    summary:'The research case for why FuelSync\'s interface quality is a direct retention and credibility driver — not an aesthetic preference. Covers 8 peer-reviewed studies on health app UX, abandonment, emotionally safe design language, and the finding that classical aesthetics directly predict perceived credibility in health apps.',
    sections:[
      {h:'UI is the delivery mechanism', p:'70% of lifestyle app users quit within 100 days. Poor UX is one of the six primary abandonment categories (Kidman 2024). In health apps, every UI decision is a retention decision — a confusing screen ends the behaviour change intervention entirely.'},
      {h:'The credibility finding', p:'Classical aesthetics — orderliness, clarity, simplicity — significantly predict perceived credibility in health apps, while expressive or decorative design does not (Oyibo & Orji, 2017). FuelSync\'s clean monochrome interface is not a style choice. It is the research-backed design for a credible health product.'},
      {h:'Emotionally safe design', p:'Users in vulnerable states disengage from interfaces that feel clinical, overwhelming, or judgmental (Paay et al., 2021). FuelSync\'s no-red-indicators, calm-copy, privacy-first approach directly addresses the emotional barriers that cause health app abandonment.'},
      {h:'Design rules', ul:['No mandatory account creation before value delivery','Passive data collection over manual logging','Classical aesthetics — clean, orderly, high contrast','Emotionally safe copy — curious not judgmental','Privacy framed as personalisation, not monitoring']}
    ]
  },
  {
    num:'07', title:'Agent Architecture v1.0', color:'#5B9EFF', tier:'Architecture',
    status:'✓ Complete', statusColor:'#5B9EFF',
    download:'/docs/FuelSync_Agent_Architecture.pdf',
    sub:'Agentic AI, memory layers, behaviour change',
    summary:'The technical architecture of FuelSync\'s core AI system — five functional layers from perception through action, a three-tier memory model that builds a proprietary behavioural data moat, and the research evidence showing why agent-native architecture creates a moat incumbents cannot replicate.',
    sections:[
      {h:'Why agent-native matters', p:'Incumbents like MyFitnessPal are retrofitting AI onto legacy calorie-tracking databases. Deloitte (2026) confirms that agentic AI requires tight coupling between agents, product flows, and UX — dramatically easier to build greenfield than retrofit. FuelSync\'s greenfield position is a structural advantage that compounds over time.'},
      {h:'The memory architecture', ul:['Short-term: current emotional state, today\'s meals, active spiral detection','Long-term: anchor meal identity, trigger patterns, lapse history, budget constraints','Operational state: return rates, streak data, NDIS profile flags, sensory preferences']},
      {h:'The five agent layers', ul:['Perception — multimodal input converted to structured data','User state model — real-time inference of emotional state, budget, prep time, spiral risk','Memory — three-tier longitudinal behavioural profile','Reasoning engine — spiral detection, meal ranking, tone selection, nudge timing','Action — 6-meal feed, chat coach, spiral breaker, why-this-fits explanations']},
      {h:'The data moat', p:'Every interaction builds longitudinal data — emotional patterns, craving cycles, spiral recovery trajectories — that cannot be replicated by a later entrant. The longer FuelSync runs, the harder it becomes to displace.'}
    ]
  },
  {
    num:'08', title:'FuelSync Neuro', color:'#5B9EFF', tier:'Architecture',
    status:'✓ Complete', statusColor:'#5B9EFF',
    download:'/docs/FuelSync_Neuro.pdf',
    sub:'Sensory-safe meals, NDIS pathway, autism research',
    summary:'The research case for FuelSync\'s neurodivergent extension — peer-reviewed evidence on the scale of food challenges in autistic individuals (45–96% affected by sensory issues), the family impact of mealtime disruption, the gap in existing digital tools, ADHD food behaviour patterns, and the NDIS funding pathway.',
    sections:[
      {h:'The scale of the problem', p:'Sensory processing difficulties affect 45–96% of autistic people (Autism Spectrum Australia, 2025). 69% of carers report texture influences food selectivity. 92% of parents of autistic children report dinnertime as the most stressful part of their day. No existing app is purpose-built for this population.'},
      {h:'The gap in existing tools', p:'Current tools (AnyList, Fig, Goblin Tools) address allergy filtering or executive function support — none build an autism-specific sensory profile, maintain a safe-food library by texture and brand, or serve the family unit. The market is entirely uncontested.'},
      {h:'ADHD food patterns', ul:['Impulsivity drives spur-of-the-moment eating of highly palatable foods','Executive dysfunction makes meal planning hard to sustain','Dopamine dysregulation promotes high-sugar, high-fat food preferences','Poor interoception creates irregular eating patterns']},
      {h:'NDIS pathway', p:'At $79/month per NDIS participant, price sensitivity is removed entirely — participants fund through their plan. At 200 participants: $189,600 ARR. At 500: $474,000 ARR. No competitor is positioned to access this funded revenue stream.'}
    ]
  },
  {
    num:'09', title:'Platform Systems', color:'#5B9EFF', tier:'Architecture',
    status:'✓ Complete', statusColor:'#5B9EFF',
    download:'/docs/FuelSync_Platform_Systems.pdf',
    sub:'Content safety, moderation, community trust',
    summary:'The operational infrastructure behind FuelSync\'s community — a four-layer hybrid moderation system, structured feedback mechanics, Australia\'s ED Safe safety standards, and the research evidence showing that well-moderated communities drive retention rather than undermining it.',
    sections:[
      {h:'The moderation evidence', p:'A 2025 study of 2.6M+ social posts (Lerman et al.) found platform moderation directly determines whether communities become safe or toxic. TikTok\'s strict moderation produced the lowest harm while preserving peer support. Twitter\'s permissive approach produced a 500% rise in self-harm posts. The choice is not moderate OR support — it is both.'},
      {h:'Four-layer moderation system', ul:['AI pre-screening — NLP, keyword flagging, semantic detection','Risk tiering — high-risk content escalated to human queue immediately','Human review — trained moderators assess context and nuance; 5–10% QA on all AI decisions','Community reporting — user flagging with transparent appeals process']},
      {h:'ED Safe standards', ul:['No extreme calorie limits, restriction techniques, or harmful weight goals','No thinspo or body-check imagery','Semantic detection for coded language variants','Crisis resource links triggered by high-risk terms','Aligned with NEDC ED Safe Principles and Australia\'s National Eating Disorders Strategy 2023–33']},
      {h:'Trust and retention', p:'Moderated peer support communities are a net positive for retention when safety is maintained. 86.3% of health app users support independent safety oversight. Transparency about moderation — published guidelines, enforcement statistics, appeals process — is a direct trust builder.'}
    ]
  },
  {
    num:'10', title:'Competitive Landscape', color:'#F7B731', tier:'Missing',
    status:'✓ Complete', statusColor:'#F7B731',
    download:'/docs/FuelSync_Competitive_Landscape.pdf',
    sub:'Why not just use MyFitnessPal?',
    summary:'A systematic analysis of every major competitor — MyFitnessPal, Noom, Cronometer, Lose It!, Eat This Much, and MacroFactor — with Australian pricing, user data, known failure points, and a full 11-dimension competitive matrix showing exactly where FuelSync wins and why incumbents cannot replicate it.',
    sections:[
      {h:'The category failure', p:'Every major competitor is built on the same wrong assumption — that people fail at healthy eating because they lack information. The result: 53% abandoned within 30 days, 70% within 100 days. FuelSync does not compete within this category. It replaces the category mechanic entirely.'},
      {h:'Why MyFitnessPal loses', ul:['Progressive paywalling has alienated its core user base','Manual logging burden is unsustainable for everyday users','Calorie-centric design induces guilt after lapses — the primary failure mechanism','300,000 weekly Australian users with 70%+ abandonment = continuously replenishing FuelSync acquisition pool']},
      {h:'Why Noom loses', ul:['Psychology-aware but implementation is still judgmental — red/yellow/green food coding triggers guilt','Coaching frequently experienced as scripted rather than personalised','Pivoting toward GLP-1 telehealth and medications — abandoning the behavioural app space']},
      {h:'FuelSync\'s structural advantages', ul:['Agent-native architecture — incumbents cannot retrofit without full rebuild','Behavioural data moat — emotional patterns, spiral cycles, anchor meal discovery data no competitor collects','NDIS pathway — uncontested funded revenue stream, no competitor positioned to access it']}
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
