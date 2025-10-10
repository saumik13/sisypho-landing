import React from 'react'

const UseCases: React.FC = () => {
  const useCases = [
    {
      category: "CRM Automation",
      timeSaved: "Saves 2 hrs/day",
      title: "Customer Data from Emails to CRM",
      description: "Automatically extract customer information from incoming emails and update your CRM records. Perfect for sales teams and customer service departments.",
      steps: [
        "1. Email arrives with customer info",
        "2. Sisypho extracts the data",
        "3. CRM updated automatically"
      ]
    },
    {
      category: "Insurance Claims",
      timeSaved: "Saves 4 hrs/day",
      title: "Claims Processing Automation",
      description: "Extract data from claim forms, verify policy details, and update claim status across multiple systems. Reduce processing time from days to hours.",
      steps: [
        "1. Claim form submitted",
        "2. Data extracted and verified",
        "3. System updated automatically"
      ]
    },
    {
      category: "Recruiting",
      timeSaved: "Saves 3 hrs/day",
      title: "Candidate Screening Automation",
      description: "Parse resumes, extract key qualifications, and update candidate tracking systems. Screen hundreds of applicants in minutes, not hours.",
      steps: [
        "1. Resume received via email",
        "2. Key data extracted automatically",
        "3. Candidate profile created in ATS"
      ]
    },
    {
      category: "Accounting",
      timeSaved: "Saves 5 hrs/week",
      title: "Invoice to ERP Automation",
      description: "Extract data from PDF invoices, match with purchase orders, and sync with ERP systems. Eliminate manual data entry across accounting workflows.",
      steps: [
        "1. Invoice arrives via email",
        "2. Data extracted and verified",
        "3. QuickBooks updated automatically"
      ]
    },
    {
      category: "Healthcare Admin",
      timeSaved: "Saves 6 hrs/week",
      title: "Patient Record Management",
      description: "Process patient intake forms, update medical records, and sync with billing systems. Streamline administrative workflows in healthcare facilities.",
      steps: [
        "1. Patient form completed",
        "2. Data extracted and validated",
        "3. Records updated across systems"
      ]
    },
    {
      category: "Logistics",
      timeSaved: "Saves 3 hrs/day",
      title: "Inventory & Shipping Coordination",
      description: "Track shipments, update inventory levels, and coordinate between warehouse management and customer systems. Keep logistics running smoothly.",
      steps: [
        "1. Shipment status updated",
        "2. Inventory levels adjusted",
        "3. Customer notifications sent"
      ]
    }
  ]

  return (
    <section className="use-cases" id="use-cases">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Real Automations, Real Time Savings</h2>
          <p className="section-subtitle">See how businesses automate CRM, ERP, and repetitive workflows</p>
        </div>
        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <div key={index} className="use-case-card">
              <div className="use-case-header">
                <span className="use-case-category">{useCase.category}</span>
                <span className="time-saved">{useCase.timeSaved}</span>
              </div>
              <h3 className="use-case-title">{useCase.title}</h3>
              <p className="use-case-description">{useCase.description}</p>
              <div className="use-case-steps">
                {useCase.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="step">{step}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases