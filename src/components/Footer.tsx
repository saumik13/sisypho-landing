import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/sisypho_logo.svg" alt="Sisypho" className="footer-logo-image" />
              <span className="footer-logo-text">Sisypho</span>
            </div>
            <p>Intelligent automation for everyone</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#how-it-works">How It Works</a>
              <a href="#use-cases">Use Cases</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="mailto:founders@sisypho.com">Contact</a>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <p className="footer-address">108 College St<br />Toronto, ON M5G 0C6</p>
              <a href="mailto:founders@sisypho.com">founders@sisypho.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Sisypho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer