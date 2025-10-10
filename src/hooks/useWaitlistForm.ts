import { useEffect } from 'react'
import { trackGA4Event } from './useAnalytics'

export const useWaitlistForm = () => {
  useEffect(() => {
    const waitlistForm = document.getElementById('waitlistForm')
    if (!waitlistForm) return

    const handleSubmit = async (e: Event) => {
      e.preventDefault()
      
      const submitBtn = document.getElementById('submitBtn')
      const formStatus = document.getElementById('formStatus')
      const emailInput = document.getElementById('email') as HTMLInputElement
      const btnText = submitBtn?.querySelector('.btn-text')
      
      if (!submitBtn || !formStatus || !emailInput || !btnText) return
      
      // Show loading state
      submitBtn.classList.add('loading')
      btnText.textContent = 'Requesting...'
      formStatus.textContent = ''
      formStatus.className = 'form-status'
      
      try {
        // Submit to Formspree
        const formData = new FormData(waitlistForm as HTMLFormElement)
        const response = await fetch((waitlistForm as HTMLFormElement).action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        
        if (response.ok) {
          // Success
          formStatus.textContent = '🎉 Thanks for your interest! We\'ll reach out to schedule a demo. Questions? Contact founders@sisypho.com'
          formStatus.className = 'form-status success'
          emailInput.value = ''
          
          // Track successful waitlist signup
          trackGA4Event('beta_signup', {
            email_domain: emailInput.value.split('@')[1] || 'unknown',
            signup_location: 'hero_waitlist',
            value: 1,
            currency: 'USD'
          })
          
          // Track Google Ads conversion for waitlist signup
          if (typeof (window as any).gtag_report_conversion === 'function') {
            (window as any).gtag_report_conversion()
          }
          
          // Reset button after delay
          setTimeout(() => {
            btnText.textContent = 'Request Demo'
            submitBtn.classList.remove('loading')
          }, 2000)
          
        } else {
          throw new Error('Submission failed')
        }
        
      } catch (error) {
        console.error('Form submission error:', error)
        formStatus.textContent = 'Something went wrong. Please try again.'
        formStatus.className = 'form-status error'
        btnText.textContent = 'Request Demo'
        submitBtn.classList.remove('loading')
      }
    }

    waitlistForm.addEventListener('submit', handleSubmit)

    return () => {
      waitlistForm.removeEventListener('submit', handleSubmit)
    }
  }, [])
}