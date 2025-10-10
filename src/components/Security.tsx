import React from 'react'

const Security: React.FC = () => {
  return (
    <section id="security" className="security">
      <div className="container">
        <div className="security-content">
          <div className="security-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M20.9099 11.12C20.9099 16.01 17.3599 20.59 12.5099 21.93C12.1799 22.02 11.8198 22.02 11.4898 21.93C6.63984 20.59 3.08984 16.01 3.08984 11.12V6.73006C3.08984 5.91006 3.70986 4.98007 4.47986 4.67007L10.0498 2.39007C11.2998 1.88007 12.7098 1.88007 13.9598 2.39007L19.5298 4.67007C20.2898 4.98007 20.9199 5.91006 20.9199 6.73006L20.9099 11.12Z" fill="currentColor"/>
              <path d="M14.5 10.5C14.5 9.12 13.38 8 12 8C10.62 8 9.5 9.12 9.5 10.5C9.5 11.62 10.24 12.55 11.25 12.87V15.5C11.25 15.91 11.59 16.25 12 16.25C12.41 16.25 12.75 15.91 12.75 15.5V12.87C13.76 12.55 14.5 11.62 14.5 10.5Z" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="security-title">Enterprise-Grade Security & Privacy Protection</h2>
          <p className="security-description">
            Built for healthcare organizations with the highest security standards. Sisypho processes all workflows locally on your infrastructure—no patient data ever leaves your environment. Our zero-data-retention architecture automatically strips and anonymizes any PII before processing, ensuring complete data isolation. We're actively pursuing HIPAA compliance certification to meet enterprise healthcare requirements, with robust audit trails and access controls designed for clinical environments.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Security