
import { Github, ExternalLink as LinkIcon } from 'lucide-react'; // Added LinkIcon

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: { frontend?: string; backend?: string; database?: string; api?: string; data?: string; };
  githubLink?: string;
  demoLink?: string;
}

export function ProjectCard({ title, description, technologies, githubLink, demoLink }: ProjectCardProps) {
  return (
    <div className="glass-card overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col animate-fade-in h-full">
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4 text-sm flex-grow">{description}</p>
        
        <div className="space-y-2 mt-4 mb-4">
          {technologies.frontend && (
            <div className="flex items-start">
              <span className="text-xs font-semibold text-foreground/60 w-20 shrink-0">Frontend:</span>
              <span className="text-sm text-foreground/80">{technologies.frontend}</span>
            </div>
          )}
          
          {technologies.backend && (
            <div className="flex items-start">
              <span className="text-xs font-semibold text-foreground/60 w-20 shrink-0">Backend:</span>
              <span className="text-sm text-foreground/80">{technologies.backend}</span>
            </div>
          )}
          
          {technologies.database && (
            <div className="flex items-start">
              <span className="text-xs font-semibold text-foreground/60 w-20 shrink-0">Database:</span>
              <span className="text-sm text-foreground/80">{technologies.database}</span>
            </div>
          )}
          
          {technologies.api && (
            <div className="flex items-start">
              <span className="text-xs font-semibold text-foreground/60 w-20 shrink-0">API:</span>
              <span className="text-sm text-foreground/80">{technologies.api}</span>
            </div>
          )}
          
          {technologies.data && (
            <div className="flex items-start">
              <span className="text-xs font-semibold text-foreground/60 w-20 shrink-0">Data/Tech:</span>
              <span className="text-sm text-foreground/80">{technologies.data}</span>
            </div>
          )}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-border/20">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github className="w-4 h-4 mr-1.5" />
              Source Code
            </a>
          )}
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
              aria-label={`Live demo of ${title}`}
            >
              <LinkIcon className="w-4 h-4 mr-1.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
