import React from 'react'

const TeamCredibility: React.FC = () => {
  return (
    <div className="credibility-content">
      <div className="credibility-text">
        <h2 className="credibility-title">Built by Engineers from Leading Tech Companies</h2>
        <p className="credibility-subtitle">Our team brings automation expertise from world-class organizations</p>
      </div>
      <div className="company-logos">
        <img src="/assets/brands/snap.svg" alt="Snap" className="company-logo" />
        <img src="/assets/brands/meta.svg" alt="Meta" className="company-logo" />
        <img src="/assets/brands/instacart.svg" alt="Instacart" className="company-logo" />
        <img src="/assets/brands/parallel.svg" alt="Parallel Systems" className="company-logo" />
        <img src="/assets/brands/uoft.svg.png" alt="University of Toronto" className="company-logo" />
      </div>
    </div>
  )
}

export default TeamCredibility