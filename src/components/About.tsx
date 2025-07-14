
import { Brain, Target, Users, Lightbulb, ExternalLink, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5">
      <div className="container mx-auto">
        <h2 className="section-heading reveal fade-bottom bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="space-y-6 reveal fade-left">
            <div className="glass-card p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-primary mr-3 animate-pulse" />
                <h3 className="text-2xl font-bold text-primary">Data Science & AI Engineer</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Passionate and detail-oriented Data Analyst and Aspiring AI/ML Engineer with a strong foundation 
                in Python, machine learning, and data visualization. Skilled in building data-driven applications, 
                analyzing complex datasets, and deploying real-time AI solutions using tools like Pandas, 
                Scikit-learn, TensorFlow, SQL, and OpenCV.
              </p>
            </div>
            
            <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-accent mr-2" />
                <h4 className="text-lg font-semibold text-accent">Mission</h4>
              </div>
              <p className="text-foreground/70">
                Eager to contribute to an innovative MNC by leveraging my technical expertise, problem-solving skills, 
                and collaborative mindset to extract insights and build intelligent systems that drive business impact.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 reveal fade-right">
            <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 text-secondary mr-2" />
                <h4 className="text-lg font-semibold text-secondary">Collaboration</h4>
              </div>
              <p className="text-foreground/70">
                Strong collaborative mindset with experience in cross-functional coordination, 
                outreach campaigns, and team-based project development.
              </p>
            </div>
            
            <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-3">
                <Lightbulb className="w-6 h-6 text-primary mr-2 animate-bounce" />
                <h4 className="text-lg font-semibold text-primary">Innovation</h4>
              </div>
              <p className="text-foreground/70">
                Dedicated to building intelligent systems that solve real-world problems, 
                from disaster detection systems to healthcare prediction models.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-foreground/70">Major Projects</div>
              </div>
              <div className="glass-card p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <div className="text-2xl font-bold text-accent mb-1">8+</div>
                <div className="text-sm text-foreground/70">Certifications</div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 text-accent mr-2" />
                  <span>+91 9601026883</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 text-accent mr-2" />
                  <span className="break-all">harsh206090307117@gmail.com</span>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-1 gap-2">
                <Button asChild variant="outline" size="sm" className="justify-start hover:bg-primary/10 transition-all">
                  <a href="https://www.linkedin.com/in/harsh-shukla-3230a4325/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                    </svg>
                    LinkedIn <ExternalLink className="w-3 h-3 ml-auto" />
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="sm" className="justify-start hover:bg-primary/10 transition-all">
                  <a href="https://github.com/harsh822v" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                    </svg>
                    GitHub <ExternalLink className="w-3 h-3 ml-auto" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
