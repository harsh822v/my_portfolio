
import { ArrowDown, Brain, Cpu, Database, Code, Server } from 'lucide-react';
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
          const elementVisible = 150;
          
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
    
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(121,80,255,0.3),rgba(255,255,255,0))]"></div>
      
      {/* AI/ML themed floating elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="tech-floating tech-icon-1"><Code className="w-8 h-8 text-lavender-600/30" /></div>
        <div className="tech-floating tech-icon-2"><Database className="w-10 h-10 text-lavender-600/40" /></div>
        <div className="tech-floating tech-icon-3"><Cpu className="w-12 h-12 text-lavender-600/30" /></div>
        <div className="tech-floating tech-icon-4"><Server className="w-9 h-9 text-lavender-600/40" /></div>
        <div className="tech-floating tech-icon-5"><Brain className="w-14 h-14 text-lavender-600/30" /></div>
      </div>

      <div className="container flex flex-col items-center justify-center gap-12 animate-fade-in relative z-10">
        <div className="max-w-2xl text-center">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-lavender-600 to-primary bg-clip-text text-transparent reveal fade-bottom relative">
              <span className="name-icon left-icon absolute -left-12 top-1/2 transform -translate-y-1/2 opacity-70">
                <Brain className="w-8 h-8 md:w-10 md:h-10" />
              </span>
              Shukla Harsh Pravinbhai
              <span className="name-icon right-icon absolute -right-12 top-1/2 transform -translate-y-1/2 opacity-70">
                <Cpu className="w-8 h-8 md:w-10 md:h-10" />
              </span>
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl mb-6 text-foreground/80 ai-typing-effect">
            Aspiring Software Developer
          </h2>
          <p className="text-lg text-foreground/70 mb-8 reveal fade-bottom">
            Expertise in Java, Python, and Data Science libraries. Passionate about AI/ML, 
            backend development, and building scalable applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center reveal fade-bottom">
            <Button asChild className="rounded-full btn-pulse-effect bg-gradient-to-r from-lavender-600 to-lavender-500 hover:from-lavender-700 hover:to-lavender-600">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full hover:shadow-md border-lavender-500">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
    </section>
  );
}
