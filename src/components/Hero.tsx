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
      window.removeEventListener('scroll', () => {}); // Cleanup scroll listener
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
        <div className="tech-floating tech-icon-1"><Code className="w-6 h-6 sm:w-8 sm:h-8 text-lavender-600/30" /></div>
        <div className="tech-floating tech-icon-2"><Database className="w-8 h-8 sm:w-10 sm:h-10 text-lavender-600/40" /></div>
        <div className="tech-floating tech-icon-3"><Cpu className="w-10 h-10 sm:w-12 sm:h-12 text-lavender-600/30" /></div>
        <div className="tech-floating tech-icon-4"><Server className="w-7 h-7 sm:w-9 sm:h-9 text-lavender-600/40" /></div>
        <div className="tech-floating tech-icon-5"><Brain className="w-12 h-12 sm:w-14 sm:h-14 text-lavender-600/30" /></div>
      </div>

      <div className="container flex flex-col items-center justify-center gap-12 animate-fade-in relative z-10">
        <div className="max-w-3xl text-center">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-lavender-600 to-primary bg-clip-text text-transparent reveal fade-bottom relative px-8 sm:px-12">
              <span className="name-icon left-icon absolute -left-2 sm:-left-6 md:-left-12 top-1/2 transform -translate-y-1/2 opacity-70">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </span>
              Shukla Harsh Pravinbhai
              <span className="name-icon right-icon absolute -right-2 sm:-right-6 md:-right-12 top-1/2 transform -translate-y-1/2 opacity-70">
                <Cpu className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </span>
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl mb-6 text-foreground/80 ai-typing-effect">
            Aspiring AI/ML Engineer & Software Developer
          </h2>
          <p className="text-lg text-foreground/70 mb-8 reveal fade-bottom">
            Passionate and detail-oriented Data Analyst and Aspiring AI/ML Engineer with a strong foundation in Python, machine learning, data visualization, and backend development. Skilled in building data-driven applications, analyzing complex datasets, and deploying real-time AI solutions. Eager to contribute to an innovative MNC by leveraging technical expertise, problem-solving skills, and collaborative mindset to extract insights and build intelligent systems that drive business impact.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8 reveal fade-bottom">
            <a href="tel:+919601026883" className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-1.5" /> +91 9601026883
            </a>
            <a href="mailto:harsh206090307117@gmail.com" className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 mr-1.5" /> harsh206090307117@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-8 reveal fade-bottom">
            <a href="https://www.linkedin.com/in/harsh-shukla-4a3916228/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/harsh822v" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
             <a href="#achievements" className="text-foreground/70 hover:text-primary transition-colors text-sm flex items-center">
              Certifications
            </a>
          </div>
          
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
