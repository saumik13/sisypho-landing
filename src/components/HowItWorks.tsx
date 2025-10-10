import React from 'react'
import ChatDemo from './ChatDemo'
import ValidationDemo from './ValidationDemo'
import AutomationDashboard from './AutomationDashboard'

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
                <h3 className="step-title">01. Show and Tell</h3>
                <p className="step-subtitle">Describe your task in plain English. Like talking to a colleague.</p>
                <p className="step-example">Example: "Send out test results to patients who have not received them yet, along with any attached referral doctors as well."</p>
              </div>
              <div className="step-demo">
                <ChatDemo />
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-info">
                <h3 className="step-title">02. Validate</h3>
                <p className="step-subtitle">Work with Sisypho as it validates your workflow, to ensure it performs as you expect.</p>
                <p className="step-example">Sisypho will go through your workflow step by step, checking with you along the way.</p>
              </div>
              <div className="step-demo">
                <ValidationDemo />
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-info">
                <h3 className="step-title">03. Done! It's Automated</h3>
                <p className="step-subtitle">Your task now runs automatically. Sisypho handles everything from here.</p>
                <p className="step-example">Run manually, schedule it, or trigger from other apps</p>
              </div>
              <div className="step-demo">
                <AutomationDashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
