import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MemoPage: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', lineHeight: '1.6', color: '#333' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '40px', fontWeight: 'normal' }}>Why We Built Sisypho</h1>
        
        <p style={{ fontSize: '18px', marginBottom: '24px' }}>
          When we were software engineers at big tech companies, we learned how engineers would quickly build internal tools and scripts to minimize repetitive work.
        </p>
        
        <p style={{ fontSize: '18px', marginBottom: '24px' }}>
          Scripts to fix known issues in order management systems that oncall engineers could run locally without needing to manually check multiple platforms and perform the same actions repeatedly across different pages. Or automating latency tests for product launches after reformatting test data from spreadsheets provided by the data labeling team.
        </p>
        
        <p style={{ fontSize: '18px', marginBottom: '24px' }}>
          Having to do repetitive tasks isn't just limited to software engineering. Any job that heavily uses a computer has them, whether in marketing, logistics, accounting, or beyond. However, the tools that software engineers use, including the terminal that comes with your laptop where you can run a bash or python script, aren't accessible to most people.
        </p>
        
        <p style={{ fontSize: '18px', marginBottom: '24px' }}>
          We believe Sisypho changes that by letting anyone automate anything on their computer, even tasks that don't have traditional programming interfaces.
        </p>
        
        <div style={{ marginTop: '40px', fontStyle: 'italic', color: '#666' }}>
          <p>- Saumik and Harish, co-founders at Sisypho</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MemoPage