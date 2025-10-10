import React from 'react'

interface Workflow {
  id: number
  title: string
  description: string
  lastRun?: string
}

const AutomationDashboard: React.FC = () => {
  const workflows: Workflow[] = [
    {
      id: 1,
      title: "Send Test Results to Patients",
      description: "Automatically send lab results with referral docs",
      lastRun: '2 hours ago'
    },
    {
      id: 2,
      title: "Follow-up Reminder to Referral Doctors",
      description: "Schedule automated follow-up communications",
    },
    {
      id: 3,
      title: "Sync Patient Notes to EMR",
      description: "Update patient records across electronic systems",
      lastRun: '1 day ago'
    }
  ]

  return (
    <div className="workflows-list">
      {/* Workflows List */}
      <div className="workflows-container">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="workflow-card">
            <div className="workflow-main">
              <div className="workflow-info">
                <h4 className="workflow-title">{workflow.title}</h4>
                <p className="workflow-description">{workflow.description}</p>
                {workflow.lastRun && (
                  <span className="last-run">Last run: {workflow.lastRun}</span>
                )}
              </div>
            </div>
            <div className="workflow-status">
              <button className="run-button">Run</button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="workflows-footer">
        <div className="stats">
          <span className="stat-item">3 workflows</span>
          <span className="stat-divider">•</span>
          <span className="stat-item">12+ hours saved this week</span>
        </div>
      </div>
    </div>
  )
}

export default AutomationDashboard