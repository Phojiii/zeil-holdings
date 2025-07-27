'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import DivisionsSection from '@/components/DivisionsSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Bullets from '@/components/Bullets'
import Loader from '@/components/Loader'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const { currentSectionIndex } = useScrollAnimation()

  useEffect(() => {
    // Loader logic
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.scroll-section')
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main>
      <Loader isLoading={isLoading} />
      <Navbar />
      
      <HeroSection />
      <DivisionsSection />
      <HowWeWorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      
      <Bullets 
        currentSectionIndex={currentSectionIndex}
        onSectionChange={scrollToSection}
      />
    </main>
  )
} 