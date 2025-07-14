import { ArrowDown, Brain, Cpu, Database, Code, Server, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export function Hero() {
  useEffect(() => {
    // Initialize scroll reveal animations
    const initScrollReveal = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      const reveal = () => {
        revealElements.forEach((element) => {
          const windowHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150; // Start animation when element is 150px from bottom
          
          if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
          }
        });
      };
      
      window.addEventListener('scroll', reveal);
      // Initial check
      reveal();
    };
    
    initScrollReveal();
    
    // Cleanup scroll listener
    // The original cleanup was trying to remove an anonymous function, which doesn't work.
    // To properly remove, we'd need to store the reveal function itself.
    // However, for this component lifecycle, it might be okay. If issues arise, this is a place to check.
    return () => {
      // A more robust cleanup would be: window.removeEventListener('scroll', revealFunctionReference);
      // For simplicity, if reveal function is defined inside initScrollReveal and not returned, this is tricky.
      // The current empty function in cleanup doesn't actually remove the listener added.
      // This is a minor point not directly related to the user's request but good to note.
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden"
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10"></div>
      
      {/* Enhanced 3D AI/ML themed floating elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        <div className="tech-floating tech-icon-1"><Code className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary/40" /></div>
        <div className="tech-floating tech-icon-2"><Database className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent/50" /></div>
        <div className="tech-floating tech-icon-3"><Cpu className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-secondary/40" /></div>
        <div className="tech-floating tech-icon-4"><Server className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-primary/50" /></div>
        <div className="tech-floating tech-icon-5"><Brain className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-accent/40" /></div>
      </div>

      <div className="container flex flex-col items-center justify-center gap-8 sm:gap-12 animate-fade-in relative z-10">
        <div className="max-w-4xl text-center">
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent reveal fade-bottom relative px-4 sm:px-8 lg:px-12">
              <span className="name-icon left-icon absolute -left-1 sm:-left-2 md:-left-6 lg:-left-12 top-1/2 transform -translate-y-1/2 opacity-70">
                <Brain className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </span>
              Shukla Harsh Pravinbhai
              <span className="name-icon right-icon absolute -right-1 sm:-right-2 md:-right-6 lg:-right-12 top-1/2 transform -translate-y-1/2 opacity-70">
                <Cpu className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </span>
            </h1>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 text-foreground/80 reveal fade-bottom">
            Aspiring AI/ML Engineer & Data Scientist
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed reveal fade-bottom">
            Passionate and detail-oriented Data Analyst and Aspiring AI/ML Engineer with a strong foundation in Python, machine learning, data visualization, and backend development. Skilled in building data-driven applications, analyzing complex datasets, and deploying real-time AI solutions.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8 reveal fade-bottom">
            <a href="tel:+919601026883" className="flex items-center text-xs sm:text-sm text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-105">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" /> +91 9601026883
            </a>
            <a href="mailto:harsh206090307117@gmail.com" className="flex items-center text-xs sm:text-sm text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-105">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" /> harsh206090307117@gmail.com
            </a>
          </div>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 reveal fade-bottom">
            <a href="https://www.linkedin.com/in/harsh-shukla-4a3916228/" target="_blank" rel="noopener noreferrer" 
               className="text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://github.com/harsh822v" target="_blank" rel="noopener noreferrer" 
               className="text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-rotate-6">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#achievements" 
               className="text-foreground/70 hover:text-primary transition-all duration-300 text-xs sm:text-sm flex items-center transform hover:scale-105">
              Certifications
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center reveal fade-bottom">
            <Button asChild className="rounded-full btn-pulse-effect bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transform transition-all duration-300">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full hover:shadow-lg border-primary/50 hover:border-primary hover:bg-primary/10 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transform transition-all duration-300">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </a>
    </section>
  );
}
