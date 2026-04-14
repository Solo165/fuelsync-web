import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Nav.css'

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="FuelSync" className="nav-logo-img" />
      </Link>
      <div className="nav-links">
        <Link to="/docs" className={`nav-link ${pathname === '/docs' ? 'active' : ''}`}>
          Docs
        </Link>
        <Link to="/prototype" className={`nav-link ${pathname === '/prototype' ? 'active' : ''}`}>
          Prototype
        </Link>
        <a href="mailto:hello@fuelsync.app" className="nav-cta">
          Get in touch
        </a>
      </div>
    </nav>
  )
}
