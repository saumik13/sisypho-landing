import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'DM Sans, sans-serif', lineHeight: '1.6', color: '#333' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '40px', fontWeight: '600' }}>Privacy Policy</h1>
        
        <p style={{ fontSize: '18px', marginBottom: '24px' }}>
          This privacy policy describes how Sisypho collects, uses, and protects your information.
        </p>
        
        <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>Information We Collect</h2>
        <p style={{ fontSize: '16px', marginBottom: '16px' }}>
          We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
        </p>
        
        <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>How We Use Your Information</h2>
        <p style={{ fontSize: '16px', marginBottom: '16px' }}>
          We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
        </p>
        
        <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>Data Security</h2>
        <p style={{ fontSize: '16px', marginBottom: '16px' }}>
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>
        
        <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>Contact Us</h2>
        <p style={{ fontSize: '16px', marginBottom: '16px' }}>
          If you have any questions about this privacy policy, please contact us at <a href="mailto:founders@sisypho.com" style={{ color: '#4f46e5' }}>founders@sisypho.com</a>.
        </p>
        
        <p style={{ fontSize: '14px', color: '#666', marginTop: '40px', fontStyle: 'italic' }}>
          Last updated: January 2025
        </p>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicyPage