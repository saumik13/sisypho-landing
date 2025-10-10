import React, { useEffect } from 'react'

const AuthPage: React.FC = () => {
  useEffect(() => {
    const redirectToApp = () => {
      console.log('Attempting to redirect to Sisypho app...')
      
      // Immediately redirect to the Electron app
      window.location.href = 'sisypho://auth/success'
      
      // Show fallback instructions after a short delay
      setTimeout(() => {
        const messageEl = document.querySelector('.message')
        const spinnerEl = document.querySelector('.spinner')
        if (messageEl) messageEl.textContent = 'Click the link below if the app didn\'t open'
        if (spinnerEl) (spinnerEl as HTMLElement).style.display = 'none'
      }, 3000)
    }

    const handleManualRedirect = () => {
      try {
        window.location.href = 'sisypho://auth/success'
      } catch (error) {
        console.error('Failed to redirect to app:', error)
        alert('Please make sure Sisypho is installed on your computer.')
      }
    }

    // Start the redirect process immediately when page loads
    setTimeout(redirectToApp, 500)

    // Handle page visibility to retry redirect when user returns to tab
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        redirectToApp()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Sisypho</div>
        <div className="spinner" style={{
          width: '40px',
          height: '40px',
          border: '3px solid rgba(255, 255, 255, 0.3)',
          borderTop: '3px solid white',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '1rem auto'
        }}></div>
        <div className="message" style={{ margin: '1rem 0', fontSize: '1.1rem' }}>Authentication successful!</div>
        <p>Redirecting back to your app...</p>
        
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          fontSize: '0.9rem'
        }}>
          <p>If the app doesn't open automatically:</p>
          <p><a href="sisypho://auth/success" style={{ color: '#fff', textDecoration: 'underline' }}>Click here to open Sisypho</a></p>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default AuthPage