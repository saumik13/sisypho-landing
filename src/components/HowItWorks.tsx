import React from 'react'

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works-content">
          <div className="section-header">
            <h2 className="section-title">From Manual to Automatic in 3 Simple Steps</h2>
            <p className="section-subtitle">Set up your first automation in under 5 minutes. No technical skills needed.</p>
          </div>

          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-info">
                <div className="step-time-badge">30 seconds</div>
                <h3 className="step-title">01. Tell Us What You Do</h3>
                <p className="step-subtitle">Describe your task in plain English. Like talking to a colleague.</p>
                <p className="step-example">Example: "Copy customer data from emails to our spreadsheet"</p>
              </div>
              <div className="step-demo">
                <video src="/replaceFirstGif.mp4" className="step-gif" autoPlay muted loop></video>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-info">
                <div className="step-time-badge">2 minutes</div>
                <h3 className="step-title">02. Show Us Once</h3>
                <p className="step-subtitle">Do your task once while Sisypho watches. We'll learn exactly what you do.</p>
                <p className="step-example">Just work normally - we handle the technical parts</p>
              </div>
              <div className="step-demo">
                <video src="/step3vid.mp4" className="step-gif" autoPlay muted loop></video>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-info">
                <div className="step-time-badge">1 minute</div>
                <h3 className="step-title">03. Done! It's Automated</h3>
                <p className="step-subtitle">Your task now runs automatically. Sisypho handles everything from here.</p>
                <p className="step-example">Run manually, schedule it, or trigger from other apps</p>
              </div>
              <div className="step-demo">
                <video src="/lastStepWebsite.mp4" className="step-gif" autoPlay muted loop></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks