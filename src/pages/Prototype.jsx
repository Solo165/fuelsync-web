import './Prototype.css'

export default function Prototype() {
  return (
    <div className="proto-page">
      <div className="proto-header">
        <div className="proto-badge">Live prototype</div>
        <h1 className="proto-title">Try FuelSync</h1>
        <p className="proto-sub">
          The working prototype — onboarding, feed, and meal cards.
          Built with React Native + Expo. Works best on mobile.
        </p>
        <div className="proto-chips">
          <span className="chip">Onboarding</span>
          <span className="chip">Meal feed</span>
          <span className="chip">Meal cards</span>
          <span className="chip chip-wip">More coming</span>
        </div>
      </div>

      <div className="proto-launch">
        <div className="proto-phone-preview">
          <div className="proto-phone-mock">
            <div className="proto-phone-notch" />
            <div className="proto-phone-content">
              <p className="proto-phone-label">FuelSync Prototype</p>
              <p className="proto-phone-sub">Tap to open on your device</p>
            </div>
            <div className="proto-phone-bar" />
          </div>
        </div>

        <div className="proto-launch-info">
          <h2 className="proto-launch-title">Open on any device</h2>
          <p className="proto-launch-body">
            The prototype runs as a web app — open it on your phone for the best experience,
            or try it right here in your browser.
          </p>
          <div className="proto-launch-actions">
            <a
              href="https://fuelsync-prototype.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="proto-launch-btn"
            >
              Open prototype →
            </a>
            <a
              href="https://fuelsync-prototype.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="proto-launch-qr"
            >
              Open on mobile
            </a>
          </div>

          <div className="proto-features">
            <div className="proto-feature">
              <span className="proto-feature-num">01</span>
              <div>
                <h4>Onboarding</h4>
                <p>Goals, metabolism, lifestyle — personalised from the start.</p>
              </div>
            </div>
            <div className="proto-feature">
              <span className="proto-feature-num">02</span>
              <div>
                <h4>Meal feed</h4>
                <p>Community meal cards with upvotes and real engagement.</p>
              </div>
            </div>
            <div className="proto-feature">
              <span className="proto-feature-num">03</span>
              <div>
                <h4>Meal cards</h4>
                <p>Detailed view with ingredients, cost, and community reactions.</p>
              </div>
            </div>
          </div>

          <div className="proto-note">
            <span>🚧</span>
            <span>Early stage prototype — visuals and interactions will evolve. Agent loop coming in Phase 2.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
