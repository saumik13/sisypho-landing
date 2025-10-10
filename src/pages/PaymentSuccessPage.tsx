import React from 'react'

const PaymentSuccessPage: React.FC = () => {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        maxWidth: '400px',
        width: '90%'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Payment Successful!</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Thank you for your purchase. You will receive a confirmation email shortly.</p>
        <a href="/" style={{
          display: 'inline-block',
          padding: '12px 24px',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          transition: 'background 0.2s'
        }}>Return to Home</a>
      </div>
    </div>
  )
}

export default PaymentSuccessPage