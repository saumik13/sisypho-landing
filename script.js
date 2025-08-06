// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Handle demo buttons - Calendly integration
    const demoButtons = document.querySelectorAll('.btn-primary, .cta-button, #demo-btn');
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Skip pricing buttons
            if (button.classList.contains('pricing-btn')) return;
            // Open Calendly link in new tab
            window.open('https://calendly.com/saumik-13/sisypho-demo', '_blank');
        });
    });

    // Handle pricing buttons
    const pricingButtons = document.querySelectorAll('.pricing-btn');
    pricingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Open Calendly link for demo/consultation
            window.open('https://calendly.com/saumik-13/sisypho-demo', '_blank');
        });
    });

    // Add scroll effect to header with modern enhancements
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 80) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
            header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.08)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.92)';
            header.style.backdropFilter = 'blur(16px)';
            header.style.boxShadow = 'none';
            header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.06)';
        }
        
        // Hide/show header on scroll direction (optional modern touch)
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.manifesto, .features, .pricing, .team, .demo-cta');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Observe feature cards individually
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe pricing cards individually
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
    });
});