import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <Link to="/" className="logo-link">
            <img src="/sisypho_logo.svg" alt="Sisypho" className="logo-image" />
            <span className="logo-text">Sisypho</span>
          </Link>
        </div>
        <div className="nav-links">
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#security" className="nav-link">Security</a>
          {/*<a href="#use-cases" className="nav-link">Use Cases</a>
          <a href="#faq" className="nav-link">FAQ</a>*/}
        </div>
      </nav>
    </header>
  )
}

export default Header
