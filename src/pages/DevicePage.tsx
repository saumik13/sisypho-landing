import React, { useEffect, useState } from 'react'

const DevicePage: React.FC = () => {
  const [userCode, setUserCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    // Load Clerk SDK
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://js.clerk.dev/v1/clerk.js'
    script.onload = initializeClerk
    document.head.appendChild(script)

    // Auto-fill code if provided in URL
    const urlParams = new URLSearchParams(window.location.search)
    const userCodeParam = urlParams.get('user_code')
    if (userCodeParam) {
      setUserCode(userCodeParam)
    }

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://js.clerk.dev/v1/clerk.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  const initializeClerk = async () => {
    try {
      const clerk = new (window as any).Clerk('pk_test_cHJlY2lvdXMtZHJ1bS0xMC5jbGVyay5hY2NvdW50cy5kZXYk')
      await clerk.load()
      console.log('Clerk initialized successfully')
    } catch (error) {
      console.error('Failed to initialize Clerk:', error)
      setError('Failed to initialize authentication system')
    }
  }

  const formatUserCode = (value: string) => {
    let formatted = value.toUpperCase().replace(/[^A-Z]/g, '')
    if (formatted.length > 3) {
      formatted = formatted.slice(0, 3) + '-' + formatted.slice(3, 6)
    }
    return formatted
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatUserCode(e.target.value)
    setUserCode(formatted)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      verifyCode()
    }
  }

  const verifyCode = async () => {
    if (!userCode || userCode.length < 6) {
      setError('Please enter a valid 6-character code (e.g., ABC-DEF)')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // For now, just simulate success
      // In a real implementation, you would integrate with your backend
      setTimeout(() => {
        setSuccess(true)
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.error('Device verification failed:', error)
      setError('Verification failed. Please try again.')
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '500px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
          <h2 style={{ color: '#48bb78', fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Authorization Successful!</h2>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.5', margin: '15px 0' }}>You have been successfully signed in to Sisypho.</p>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.5', margin: '15px 0' }}><strong>You can now close this tab</strong> and return to the Sisypho desktop app.</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#333'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '500px',
        width: '90%',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          margin: '0 auto 20px',
          borderRadius: '12px',
          background: '#667eea',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white'
        }}>S</div>
        
        <h1 style={{ color: '#2d3748', marginBottom: '10px', fontSize: '28px', fontWeight: '600' }}>Device Authorization</h1>
        <p style={{ color: '#718096', marginBottom: '30px', fontSize: '16px', lineHeight: '1.5' }}>Sign in to your Sisypho desktop app</p>
        
        <div>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.5', margin: '15px 0' }}>Enter the code displayed in your Sisypho desktop app:</p>
          
          <input
            type="text"
            value={userCode}
            onChange={handleCodeChange}
            onKeyPress={handleKeyPress}
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '18px',
              textAlign: 'center',
              border: '2px solid #e2e8f0',
              borderRadius: '10px',
              marginBottom: '20px',
              fontFamily: 'Courier New, monospace',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
            placeholder="ABC-DEF"
            maxLength={7}
            autoComplete="off"
          />
          
          <button
            onClick={verifyCode}
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '15px',
              background: isLoading ? '#a0aec0' : '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s'
            }}
          >
            {isLoading ? (
              <>
                <div style={{
                  border: '3px solid #f3f4f6',
                  borderTop: '3px solid #667eea',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  animation: 'spin 1s linear infinite',
                  display: 'inline-block',
                  marginRight: '10px'
                }}></div>
                Verifying...
              </>
            ) : (
              'Continue with Sisypho'
            )}
          </button>
          
          {error && (
            <div style={{
              color: '#f56565',
              fontSize: '14px',
              marginTop: '10px',
              padding: '10px',
              background: '#fed7d7',
              borderRadius: '8px'
            }}>
              {error}
            </div>
          )}
          
          <p style={{
            fontSize: '14px',
            color: '#a0aec0',
            marginTop: '20px',
            lineHeight: '1.4'
          }}>
            Don't have a code? Open the Sisypho desktop app and click "Sign In" to get your authorization code.
          </p>
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

export default DevicePage