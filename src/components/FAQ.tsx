import React from 'react'

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do I need coding skills to use Sisypho?",
      answer: "No! Sisypho is designed for non-technical users. Just describe what you want in plain English and show us once. No coding, scripting, or technical knowledge required."
    },
    {
      question: "How is this different from RPA tools?",
      answer: "Traditional RPA tools require technical expertise and complex setup. Sisypho uses natural language and learns from watching you work once. Setup takes minutes, not weeks."
    },
    {
      question: "What applications can Sisypho automate?",
      answer: "Any application on your computer - desktop software, web browsers, spreadsheets, CRMs, ERPs, and more. If you can do it manually, Sisypho can automate it."
    },
    {
      question: "How is this different from computer use agents?",
      answer: "Unlike unpredictable AI agents, Sisypho uses a deterministic, human-in-the-loop approach. You show us your workflow once, we create reliable automations that work consistently. We're specifically trained on popular business software including QuickBooks, Sage, Salesforce, HubSpot, SAP, Oracle NetSuite, Epic EHR, and Cerner - ensuring reliable performance with the tools you already use."
    },
    {
      question: "What if something goes wrong during automation?",
      answer: "Sisypho includes intelligent error handling. It will try to self-correct common issues and notify you if manual intervention is needed. You can always review and adjust the automation."
    }
  ]

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about Sisypho</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <p className="faq-cta-text">Still have questions?</p>
          <a href="mailto:founders@sisypho.com" className="btn btn-primary">Contact Our Team</a>
        </div>
      </div>
    </section>
  )
}

export default FAQ