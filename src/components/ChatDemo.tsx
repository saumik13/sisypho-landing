import React, { useState, useEffect, useRef } from 'react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
  typing?: boolean
}

const ChatDemo: React.FC = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const messages: Message[] = [
    {
      id: 1,
      text: "Send out test results to patients who have not received them yet, along with any attached referral doctors as well.",
      sender: 'user'
    },
    {
      id: 2,
      text: "I'll help you automate sending test results to patients and their referral doctors. Let me break this down:",
      sender: 'ai'
    },
    {
      id: 3,
      text: "1. Find patients with unreceived test results\n2. Identify any attached referral doctors\n3. Send results to both patients and referral doctors",
      sender: 'ai'
    },
    {
      id: 4,
      text: "Does this workflow sound correct?",
      sender: 'ai'
    },
    {
      id: 5,
      text: "Yes, that looks perfect! Please proceed with the automation.",
      sender: 'user'
    },
    {
      id: 6,
      text: "Great! I'll set up the automation now. This will save you approximately 2-3 hours per week on manual result distribution.",
      sender: 'ai'
    }
  ]

  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) return

    const updateOpacity = () => {
      const messages = container.querySelectorAll('.message')
      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height
      
      // Define focus zone - center 40% of container (30% to 70%)
      const focusZoneStart = containerHeight * 0.3
      const focusZoneEnd = containerHeight * 0.7

      messages.forEach((message) => {
        const messageRect = message.getBoundingClientRect()
        const messageCenter = messageRect.top + messageRect.height / 2
        
        // Calculate message position relative to container
        const relativePosition = messageCenter - containerTop
        
        let opacity = 1 // Default to full opacity
        
        if (relativePosition < focusZoneStart) {
          // Above focus zone - fade based on distance from zone start
          const distance = focusZoneStart - relativePosition
          const maxFadeDistance = focusZoneStart
          opacity = Math.max(0.3, 1 - (distance / maxFadeDistance) * 0.7)
        } else if (relativePosition > focusZoneEnd) {
          // Below focus zone - fade based on distance from zone end
          const distance = relativePosition - focusZoneEnd
          const maxFadeDistance = containerHeight - focusZoneEnd
          opacity = Math.max(0.3, 1 - (distance / maxFadeDistance) * 0.7)
        }
        // Messages within focus zone (focusZoneStart to focusZoneEnd) keep opacity = 1
        
        ;(message as HTMLElement).style.opacity = opacity.toString()
      })
    }

    // Initial opacity calculation
    updateOpacity()

    // Update opacity on scroll
    container.addEventListener('scroll', updateOpacity)
    
    return () => {
      container.removeEventListener('scroll', updateOpacity)
    }
  }, [])


  return (
    <div className="chat-bubbles-container">
      <div className="chat-messages-only" ref={messagesContainerRef}>
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}-message`}>
            <div className="message-content">
              <div className="message-text">
                {message.text.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatDemo