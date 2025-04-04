
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(186,169,255,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="container flex flex-col items-center justify-center gap-12 animate-fade-in">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-purple-500 to-lavender-500 bg-clip-text text-transparent">
            Shukla Harsh Pravinbhai
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-foreground/80">
            Aspiring Software Developer
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Expertise in Java, Python, and Data Science libraries. Passionate about AI/ML, 
            backend development, and building scalable applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="rounded-full">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
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
