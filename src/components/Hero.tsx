
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-12 animate-fade-in">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Shukla Harsh Pravinbhai
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-foreground/80">
            Aspiring Software Developer
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Expertise in Java, Python, and Data Science libraries. Passionate about AI/ML, 
            backend development, and building scalable applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="rounded-full">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 max-w-md relative">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl"></div>
            <img 
              src="/lovable-uploads/7c9c1e98-162e-414d-a579-e861f04a79f8.png" 
              alt="Harsh Shukla" 
              className="w-full h-full object-cover rounded-full border-4 border-primary/20"
            />
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
