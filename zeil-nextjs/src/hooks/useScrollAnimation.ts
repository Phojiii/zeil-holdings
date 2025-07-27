'use client'

import { useEffect, useState } from 'react'

export function useScrollAnimation() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section')
    const bullets = document.querySelectorAll('.bullets .dot')
    const isMobile = window.innerWidth <= 768

    let isScrolling = false
    let currentSectionIndex = 0

    function updateBullets(index: number) {
      bullets.forEach((dot, i) => {
        dot.classList.toggle('active', i === index)
      })
    }

    function scrollToSection(index: number) {
      if (index >= 0 && index < sections.length) {
        isScrolling = true
        sections[index].scrollIntoView({ behavior: 'smooth' })
        updateBullets(index)
        setCurrentSectionIndex(index)
        setTimeout(() => {
          isScrolling = false
        }, 1000)
      }
    }

    // Click on bullets (desktop only)
    if (!isMobile) {
      bullets.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          currentSectionIndex = i
          scrollToSection(currentSectionIndex)
        })
      })
    }

    // Mouse scroll (desktop only)
    if (!isMobile) {
      const handleWheel = (e: WheelEvent) => {
        if (isScrolling) return
        if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
          currentSectionIndex++
          scrollToSection(currentSectionIndex)
        } else if (e.deltaY < 0 && currentSectionIndex > 0) {
          currentSectionIndex--
          scrollToSection(currentSectionIndex)
        }
      }

      window.addEventListener('wheel', handleWheel)
      return () => window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  // Reveal effect
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        const top = el.getBoundingClientRect().top
        if (top < window.innerHeight - 100) {
          el.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', reveal)
    reveal() // Initial call

    return () => window.removeEventListener('scroll', reveal)
  }, [])

  return { currentSectionIndex }
} 