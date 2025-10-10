import React, { useState } from 'react'
import { useWaitlistForm } from '../hooks/useWaitlistForm'
import TeamCredibility from './TeamCredibility'

const Hero: React.FC = () => {
  const [isFormExpanded, setIsFormExpanded] = useState(false)
  useWaitlistForm()

  const handleBookDemoClick = () => {
    setIsFormExpanded(true)
  }

  return (
    <section className="hero gradient-hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Automate Repetitive <span className="gradient-text">Clinical Workflows</span>
          </h1>
          <p className="hero-subtitle">
            Securely automate your own healthcare admin tasks, repetitive retrospective studies, and health record management workflows.<br />
            <strong>Save 10+ hours per week</strong> on patient result transmission, scheduling new visits, claims processing, and EHR updates.
          </p>
          {/*
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
          */}

          {/* Standalone Book Demo button */}
          <div className="hero-cta">
            {!isFormExpanded ? (
              <button
                className="btn-book-demo"
                onClick={handleBookDemoClick}
                id="bookDemoBtn"
              >
                <span className="btn-text">Book Demo</span>
                <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            ) : (
              <div className="demo-form-container">
                <form className="waitlist-form" id="waitlistForm" action="https://formspree.io/f/xeoldkgp" method="POST">
                  <div className="form-group">
                    <input type="email" id="email" name="email" className="form-input" placeholder="Enter your company email address" required />
                    <button type="submit" className="btn-waitlist" id="submitBtn">
                      <span className="btn-text">Confirm</span>
                      <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                  <div className="form-status" id="formStatus"></div>
                </form>
              </div>
            )}
          </div>
        </div>
        
        {/* Team Credibility Section */}
        <div className="hero-credibility">
          <TeamCredibility />
        </div>
      </div>
    </section>
  )
}

export default Hero
