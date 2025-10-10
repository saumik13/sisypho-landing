import { useEffect } from 'react'

// Google Analytics 4 Event Tracking Helper Functions
export const trackGA4Event = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('event', eventName, parameters)
  }
}

export const trackPageSection = (sectionName: string) => {
  trackGA4Event('page_section_view', {
    section_name: sectionName,
    page_title: document.title
  })
}

export const trackScrollDepth = (percentage: number) => {
  trackGA4Event('scroll_depth', {
    scroll_percentage: percentage,
    page_title: document.title
  })
}

export const useAnalytics = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId || '')

        // Track navigation click
        trackGA4Event('navigation_click', {
          link_text: this.textContent?.trim(),
          link_url: targetId,
          page_title: document.title
        })

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })

    // Handle demo buttons - Calendly integration
    const demoButtons = document.querySelectorAll(".cta-button, #demo-btn")
    demoButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Skip pricing buttons
        if (button.classList.contains("pricing-btn")) return
        if (button.classList.contains("download-macos")) return
        if (button.classList.contains("download-chrome")) return
        
        // Track demo button click
        trackGA4Event('demo_request', {
          button_text: this.textContent?.trim(),
          button_location: 'main_cta',
          page_title: document.title
        })
        
        // Open Calendly link in new tab
        window.open("https://calendly.com/saumik-13/sisypho-demo", "_blank")
      })
    })

    // Download buttons (placeholder links)
    const macBtn = document.querySelector(".download-macos")
    const chromeBtn = document.querySelector(".download-chrome")
    
    if (macBtn) {
      macBtn.addEventListener("click", (e) => {
        e.preventDefault()
        
        // Track macOS download as conversion event
        trackGA4Event('download_app', {
          platform: 'macos',
          button_text: macBtn.textContent?.trim(),
          button_location: 'hero_section',
          value: 1,
          currency: 'USD'
        })
        
        window.open("https://dkv5nxmgshtq3.cloudfront.net/Sisypho-1.0.0-arm64.dmg", "_blank")
      })
    }
    
    if (chromeBtn) {
      chromeBtn.addEventListener("click", (e) => {
        e.preventDefault()
        
        // Track Chrome extension install as conversion event
        trackGA4Event('install_extension', {
          platform: 'chrome',
          button_text: chromeBtn.textContent?.trim(),
          button_location: 'hero_section',
          value: 1,
          currency: 'USD'
        })
        
        window.open(
          "https://chromewebstore.google.com/detail/sisypho-chrome-ext/bllfdccnpfjfdofbepfncfdhbjjcjfcm?authuser=0&hl=en",
          "_blank"
        )
      })
    }

    // Handle pricing buttons
    const pricingButtons = document.querySelectorAll(".pricing-btn")
    pricingButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Find the pricing tier
        const pricingCard = this.closest('.pricing-card')
        const tierName = pricingCard ? pricingCard.querySelector('.pricing-tier')?.textContent?.trim() : 'unknown'
        const buttonText = this.textContent?.trim()
        
        // Check if this is a Mac download button
        if (buttonText === 'Download' && this.querySelector('img[alt="Apple"]')) {
          // Track Mac download from pricing section
          trackGA4Event('download_app', {
            platform: 'macos',
            button_text: buttonText,
            button_location: 'pricing_section',
            plan_name: tierName,
            value: 1,
            currency: 'USD'
          })
          
          window.open("https://dkv5nxmgshtq3.cloudfront.net/Sisypho-1.0.0-arm64.dmg", "_blank")
        } 
        // Check if this is a Chrome extension button
        else if (buttonText === 'Install Extension') {
          // Track Chrome extension from pricing section
          trackGA4Event('install_extension', {
            platform: 'chrome',
            button_text: buttonText,
            button_location: 'pricing_section',
            plan_name: tierName,
            value: 1,
            currency: 'USD'
          })
          
          window.open("https://chromewebstore.google.com/detail/sisypho-chrome-ext/bllfdccnpfjfdofbepfncfdhbjjcjfcm?authuser=0&hl=en", "_blank")
        }
        // Default to Calendly for other buttons
        else {
          // Track pricing interaction
          trackGA4Event('pricing_plan_interest', {
            plan_name: tierName,
            button_text: buttonText,
            action: 'demo_request',
            page_title: document.title
          })
          
          window.open("https://calendly.com/saumik-13/sisypho-demo", "_blank")
        }
      })
    })

    // Add scroll effect to header with modern enhancements and scroll tracking
    const header = document.querySelector(".header") as HTMLElement
    let lastScrollY = window.scrollY
    let scrollDepthTracked: Record<number, boolean> = { 25: false, 50: false, 75: false, 90: false }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = Math.round((currentScrollY / documentHeight) * 100)

      // Track scroll depth milestones
      Object.keys(scrollDepthTracked).forEach(depth => {
        if (scrollPercentage >= Number(depth) && !scrollDepthTracked[Number(depth)]) {
          scrollDepthTracked[Number(depth)] = true
          trackScrollDepth(Number(depth))
        }
      })

      if (header) {
        if (currentScrollY > 80) {
          header.style.background = "rgba(255, 255, 255, 0.95)"
          header.style.backdropFilter = "blur(20px)"
          header.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.08)"
          header.style.borderBottom = "1px solid rgba(0, 0, 0, 0.08)"
        } else {
          header.style.background = "rgba(255, 255, 255, 0.92)"
          header.style.backdropFilter = "blur(16px)"
          header.style.boxShadow = "none"
          header.style.borderBottom = "1px solid rgba(0, 0, 0, 0.06)"
        }

        // Hide/show header on scroll direction (optional modern touch)
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          header.style.transform = "translateY(-100%)"
        } else {
          header.style.transform = "translateY(0)"
        }
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    // Add intersection observer for fade-in animations and section tracking
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
          
          // Track section views
          const sectionClass = element.className.split(' ')[0] // Get first class name
          if (sectionClass && !element.dataset.tracked) {
            trackPageSection(sectionClass)
            element.dataset.tracked = 'true'
          }
        }
      })
    }, observerOptions)

    // Observe sections for animations
    const sections = document.querySelectorAll(
      ".manifesto, .features, .pricing, .team, .demo-cta"
    )
    sections.forEach((section) => {
      const element = section as HTMLElement
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(section)
    })

    // Observe feature cards individually
    const featureCards = document.querySelectorAll(".feature-card")
    featureCards.forEach((card, index) => {
      const element = card as HTMLElement
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = `opacity 0.6s ease ${
        index * 0.1
      }s, transform 0.6s ease ${index * 0.1}s`
      observer.observe(card)
    })

    // Observe pricing cards individually
    const pricingCards = document.querySelectorAll(".pricing-card")
    pricingCards.forEach((card, index) => {
      const element = card as HTMLElement
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = `opacity 0.6s ease ${
        index * 0.15
      }s, transform 0.6s ease ${index * 0.15}s`
      observer.observe(card)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])
}