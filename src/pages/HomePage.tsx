import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Security from '../components/Security'
import UseCases from '../components/UseCases'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { useAnalytics } from '../hooks/useAnalytics'

const HomePage: React.FC = () => {
  useAnalytics()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Security />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
