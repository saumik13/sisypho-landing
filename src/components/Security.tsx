import React from 'react'

const Security: React.FC = () => {
  return (
    <section id="security" className="security">
      <div className="container">
        <div className="security-content">
          <h2 className="security-title">Security First Design</h2>
          <p className="security-description">
            Sisypho is built with privacy and security at its core. All workflows run locally, and any personally identifiable information (PII) is automatically removed or anonymized before processing. Our team is actively working toward full compliance readiness, including HIPAA certification, to ensure the highest standards of data protection for healthcare organizations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Security