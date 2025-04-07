
import React from 'react';

export interface TechPillProps {
  name: string;
  icon: string;
}

export const TechPill: React.FC<TechPillProps> = ({ name, icon }) => {
  return (
    <div className="tech-pill flex items-center space-x-2 transition-all duration-300 hover:scale-110">
      <img src={icon} alt={name} className="w-6 h-6 transition-all duration-300 hover:w-7 hover:h-7 tech-icon-pulse" />
      <span>{name}</span>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  children: React.ReactNode;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, children }) => {
  return (
    <div className="glass-card p-6 skill-card-hover reveal fade-bottom ai-card-border">
      <h3 className="text-xl font-semibold mb-4 relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-lavender-500 to-primary"></span>
      </h3>
      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </div>
  );
};
