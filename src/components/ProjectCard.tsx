
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: { frontend?: string; backend?: string; database?: string; api?: string; data?: string; };
  githubLink?: string;
  demoLink?: string;
}

export function ProjectCard({ title, description, technologies, githubLink, demoLink }: ProjectCardProps) {
  return (
    <div className="glass-card overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col animate-fade-in">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        
        <div className="space-y-2 mt-4">
          {technologies.frontend && (
            <div className="flex items-start">
              <span className="text-xs font-semibold text-foreground/60 w-20">Frontend:</span>
              <span className="text-sm text-foreground/80">{technologies.frontend}</span>
            </div>
          )}
          
          {technologies.backend && (
            <div className="flex items-start">
              <span className="text-xs font-semibold text-foreground/60 w-20">Backend:</span>
              <span className="text-sm text-foreground/80">{technologies.backend}</span>
            </div>
          )}
          
          {technologies.database && (
            <div className="flex items-start">
              <span className="text-xs font-semibold text-foreground/60 w-20">Database:</span>
              <span className="text-sm text-foreground/80">{technologies.database}</span>
            </div>
          )}
          
          {technologies.api && (
            <div className="flex items-start">
              <span className="text-xs font-semibold text-foreground/60 w-20">API:</span>
              <span className="text-sm text-foreground/80">{technologies.api}</span>
            </div>
          )}
          
          {technologies.data && (
            <div className="flex items-start">
              <span className="text-xs font-semibold text-foreground/60 w-20">Data:</span>
              <span className="text-sm text-foreground/80">{technologies.data}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="border-t border-border p-4 flex gap-2">
        {githubLink && (
          <Button asChild variant="outline" size="sm" className="w-full">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          </Button>
        )}
        
        {demoLink && (
          <Button asChild size="sm" className="w-full">
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
