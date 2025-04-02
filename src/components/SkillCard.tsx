
import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  children: ReactNode;
}

export function SkillCard({ title, children }: SkillCardProps) {
  return (
    <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}

interface TechPillProps {
  name: string;
  icon: string;
}

export function TechPill({ name, icon }: TechPillProps) {
  return (
    <div className="tech-pill flex items-center gap-2">
      <img src={icon} alt={name} className="w-4 h-4" />
      <span>{name}</span>
    </div>
  );
}
