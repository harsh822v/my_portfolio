import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ObjectiveSection } from '@/components/ObjectiveSection';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Function to check for elements in viewport and apply animation classes
    const handleScrollAnimation = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          // Optional: uncomment to re-trigger animations when scrolling back up
          // element.classList.remove('active');
        }
      });
      
      // Animate AI-themed elements
      const aiElements = document.querySelectorAll('.ai-animate');
      aiElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('ai-active');
        }
      });
    };
    
    // Add event listener for scroll with a debounce effect
    let scrollTimer: number | null = null;
    const handleScroll = () => {
      if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = window.setTimeout(() => {
        handleScrollAnimation();
      }, 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Run once on load to animate elements already in viewport
    handleScrollAnimation();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer !== null) clearTimeout(scrollTimer);
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden ai-theme-bg">
      <Navbar />
      <Hero />
      <ObjectiveSection />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
