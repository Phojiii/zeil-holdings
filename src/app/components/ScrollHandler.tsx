'use client';

import { useEffect, useState } from 'react';
import SectionBullets from './SectionBullets';

const ScrollHandler = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = typeof window !== 'undefined'
    ? Array.from(document.querySelectorAll('.scroll-section'))
    : [];

  const scrollToSection = (index: number) => {
    if (!sections[index]) return;
    setIsScrolling(true);
    sections[index].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) return;
    if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex((prev) => {
        scrollToSection(prev + 1);
        return prev + 1;
      });
    } else if (e.deltaY < 0 && currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => {
        scrollToSection(prev - 1);
        return prev - 1;
      });
    }
  };

  const reveal = () => {
    document.querySelectorAll('.reveal').forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  };

  useEffect(() => {
    reveal();
    window.addEventListener('scroll', reveal);

    if (window.innerWidth > 768) {
      window.addEventListener('wheel', handleWheel);
    }

    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('wheel', handleWheel);
    };
  });

  return (
    <SectionBullets
      activeIndex={currentSectionIndex}
      onNavigate={(index) => {
        setCurrentSectionIndex(index);
        scrollToSection(index);
      }}
    />
  );
};

export default ScrollHandler;
