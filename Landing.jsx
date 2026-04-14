import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <main className="landing">

      {/* Background grid */}
      <div className="landing-grid" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="orb orb1" aria-hidden="true" />
      <div className="orb orb2" aria-hidden="true" />

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">Brisbane, Australia · 3 of 10 Documents Complete</div>

        <h1 className="hero-title">
          Find the one meal<br />
          <span className="hero-accent">that works for you.</span>
        </h1>

        <p className="hero-body">
          FuelSync uses behavioural AI to help you discover the meal you'll actually
          eat again and again — matched to your metabolism, budget, emotions, and
          real life. Not a diet. Not a tracker. A system built around how habits
          actually form.
        </p>

        <div className="hero-actions">
          <Link to="/prototype" className="btn-primary">
            Try the prototype
            <span className="btn-arrow">→</span>
          </Link>
          <Link to="/docs" className="btn-secondary">
            Read the docs
          </Link>
        </div>

        <div className="hero-meta">
          <div className="meta-item">
            <span className="meta-num">30kg</span>
            <span className="meta-label">lost by founder on one meal</span>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <span className="meta-num">3/10</span>
            <span className="meta-label">documents complete</span>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <span className="meta-num">$10B+</span>
            <span className="meta-label">Australian wellness market</span>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon" style={{ background: '#7B5FFF22', color: '#B48AFF' }}>⚡</div>
          <h3>Behavioural intelligence</h3>
          <p>Tracks emotional patterns, sensory profiles, and routine stability — not calories.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" style={{ background: '#2EC4B622', color: '#2EC4B6' }}>🧠</div>
          <h3>Smart psychology</h3>
          <p>The spiral breaker mechanic stops guilt cycles by surfacing 6 meals you might actually love.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" style={{ background: '#FF6B6B22', color: '#FF6B6B' }}>🤝</div>
          <h3>Community-powered</h3>
          <p>Real meal cards from real people. Brisbane-specific prices. Anonymous and safe.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" style={{ background: '#F7B73122', color: '#F7B731' }}>🔒</div>
          <h3>FuelSync Neuro</h3>
          <p>A dedicated mode for neurodivergent users and families — sensory-safe, NDIS-funded.</p>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="cta-strip-inner">
          <div>
            <h2 className="cta-title">See the full picture.</h2>
            <p className="cta-body">Explore the interactive document architecture behind FuelSync — from founder story to agent loops.</p>
          </div>
          <Link to="/docs" className="btn-primary">
            Open document map →
          </Link>
        </div>
      </section>

    </main>
  )
}
