import { useState } from 'react'
import './Prototype.css'

export default function Prototype() {
  const [loaded, setLoaded] = useState(false)

  
  const EXPO_URL = 'https://fuelsync-prototype.vercel.app'

  return (
    <div className="proto-page">
      <div className="proto-header">
        <div className="proto-badge">Live prototype</div>
        <h1 className="proto-title">Try FuelSync</h1>
        <p className="proto-sub">
          This is the working prototype — onboarding, feed, and meal cards — running directly in your browser.
          Built with React Native + Expo.
        </p>
        <div className="proto-chips">
          <span className="chip">Onboarding</span>
          <span className="chip">Meal feed</span>
          <span className="chip">Meal cards</span>
          <span className="chip chip-wip">More coming</span>
        </div>
      </div>

      <div className="phone-wrap">
        {/* Phone shell */}
        <div className="phone">
          <div className="phone-notch" />
          <div className="phone-screen">
            {!loaded && (
              <div className="phone-loader">
                <div className="loader-spinner" />
                <p>Loading prototype…</p>
              </div>
            )}
            <iframe
              src={EXPO_URL}
              title="FuelSync Prototype"
              className={`phone-iframe ${loaded ? 'visible' : ''}`}
              onLoad={() => setLoaded(true)}
              allow="accelerometer; camera; gyroscope; microphone"
              style={{
                width: '390px',
                height: '844px',
                border: 'none',
                transform: 'scale(0.48)',
                transformOrigin: 'top left',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.4s'
              }}
            />
          </div>
          <div className="phone-home-bar" />
        </div>

        {/* Side notes */}
        <div className="proto-notes">
          <div className="note-card">
            <div className="note-icon">👆</div>
            <h3>Fully interactive</h3>
            <p>Tap through the onboarding, browse the meal feed, and interact with meal cards — just like on your phone.</p>
          </div>
          <div className="note-card">
            <div className="note-icon">⚡</div>
            <h3>Built with Expo</h3>
            <p>React Native app compiled for web. The same codebase that runs on iOS and Android.</p>
          </div>
          <div className="note-card">
            <div className="note-icon">🚧</div>
            <h3>Early stage</h3>
            <p>This is a working prototype — visuals and interactions may differ from the final product.</p>
          </div>
          <div className="note-card note-cta">
            <h3>Interested in FuelSync?</h3>
            <p>We're currently in early development and looking for early users, advisors, and investors.</p>
            <a href="mailto:hello@fuelsync.app" className="note-btn">Get in touch →</a>
          </div>
        </div>
      </div>

      <div className="proto-footer-note">
        <span>⚠️</span>
        <span>
          To run this prototype locally, start your Expo app with{' '}
          <code>npx expo start --web</code> and this page will connect automatically.
        </span>
      </div>
    </div>
  )
}
