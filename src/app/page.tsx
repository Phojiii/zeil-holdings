import Header from './components/Header';
import HeroSection from './components/HeroCarousal';
import DivisionsSection from './components/DivisionsSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <DivisionsSection />
      <HowWeWorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollHandler />
    </>
  );
}
