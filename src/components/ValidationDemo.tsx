import React, { useState, useEffect } from 'react'

interface ValidationStep {
  id: number
  text: string
  completed: boolean
  visible: boolean
}

const ValidationDemo: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const [currentStepIndex, setCurrentStepIndex] = useState(-1)
  const [steps, setSteps] = useState<ValidationStep[]>([
    { id: 1, text: 'EHR access verified', completed: false, visible: false },
    { id: 2, text: 'Patient record found', completed: false, visible: false },
    { id: 3, text: 'Email template ready', completed: false, visible: false },
    { id: 4, text: 'All variables resolved', completed: false, visible: false }
  ])

  useEffect(() => {
    // Start validation sequence after a short delay
    const startSequence = setTimeout(() => {
      // Animate progress bar
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2
        })
      }, 30)

      // Show and complete steps sequentially
      const stepTimers: NodeJS.Timeout[] = []
      
      steps.forEach((step, index) => {
        // Show step
        const showTimer = setTimeout(() => {
          setCurrentStepIndex(index)
          setSteps(prevSteps => 
            prevSteps.map(s => 
              s.id === step.id ? { ...s, visible: true } : s
            )
          )
        }, 800 + index * 1200)
        stepTimers.push(showTimer)

        // Complete step after showing it
        const completeTimer = setTimeout(() => {
          setSteps(prevSteps => 
            prevSteps.map(s => 
              s.id === step.id ? { ...s, completed: true } : s
            )
          )
        }, 800 + index * 1200 + 800)
        stepTimers.push(completeTimer)
      })

      return () => {
        clearInterval(progressInterval)
        stepTimers.forEach(timer => clearTimeout(timer))
      }
    }, 500)

    return () => clearTimeout(startSequence)
  }, [])

  return (
    <div className="validation-demo-container">
      {/* macOS-style window header */}
      <div className="validation-header">
        <div className="window-controls">
          <div className="window-control close"></div>
          <div className="window-control minimize"></div>
          <div className="window-control maximize"></div>
        </div>
      </div>

      <div className="validation-content">
        <h2 className="validation-title">Validating...</h2>
        
        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-track">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Validation steps */}
        <div className="validation-steps">
          {steps.map((step, index) => (
            step.visible && (
              <div key={step.id} className={`validation-step ${step.completed ? 'completed' : ''} step-slide-in`}>
                <div className="step-icon">
                  {step.completed ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M20 6L9 17L4 12" 
                        stroke="white" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <div className="step-spinner"></div>
                  )}
                </div>
                <span className="step-text">{step.text}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValidationDemo