import React from 'react'
import { useWaitlistForm } from '../hooks/useWaitlistForm'

const Hero: React.FC = () => {
  useWaitlistForm()
  return (
    <section className="hero gradient-hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Automate Repetitive <span className="gradient-text">Clinical Workflows</span>
          </h1>
          <p className="hero-subtitle">
            Perfect for businesses in accounting, insurance, recruiting, healthcare admin, and logistics.<br />
            <strong>Save 10+ hours per week</strong> on invoice processing, claims management, candidate screening, patient records, and data entry.
          </p>
          <div className="hero-benefits">
            <div className="benefit-item">
              <svg className="benefit-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Sync data between CRM, ERP, and accounting systems</span>
            </div>
            <div className="benefit-item">
              <svg className="benefit-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Process insurance claims and patient records automatically</span>
            </div>
            <div className="benefit-item">
              <svg className="benefit-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Automate candidate screening and logistics workflows</span>
            </div>
          </div>

          {/* Waitlist signup form */}
          <div className="hero-cta waitlist-section">
            <div className="waitlist-container">
              <div className="waitlist-header">
                <div className="beta-badge">AVAILABLE NOW</div>
                <h3 className="waitlist-title">Join Businesses Automating Workflows</h3>
              </div>
              <form className="waitlist-form" id="waitlistForm" action="https://formspree.io/f/xeoldkgp" method="POST">
                <div className="form-group">
                  <input type="email" id="email" name="email" className="form-input" placeholder="Enter your company email address" required />
                  <button type="submit" className="btn-waitlist" id="submitBtn">
                    <span className="btn-text">Request Demo</span>
                    <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
                <div className="form-status" id="formStatus"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
