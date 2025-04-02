
import { ExternalLink, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Objective</h3>
            <p className="text-foreground/80 mb-6">
              Aspiring Software Developer with expertise in Java, Python, and Data Science libraries (Pandas, NumPy, Matplotlib). 
              Passionate about AI/ML, backend development (PHP, SQL Server), and building scalable applications. 
              Seeking an opportunity to apply my technical skills in a dynamic work environment.
            </p>
          </div>
          
          <div className="glass-card p-6 flex flex-col justify-between animate-fade-in">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-lavender-600 mr-3" />
                  <span>+91 9601026883</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-lavender-600 mr-3" />
                  <span className="break-all">harsh206090307117@gmail.com</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Profiles</h3>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.linkedin.com/in/harsh-shukla-3230a4325/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                    </svg>
                    LinkedIn
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://github.com/harsh822v" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                    </svg>
                    GitHub
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://harshshukla8822.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                    </svg>
                    Portfolio
                    <ExternalLink className="w-4 h-4 ml-auto" />
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
