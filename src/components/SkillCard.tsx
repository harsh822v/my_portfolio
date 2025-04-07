
import React from 'react';

export interface TechPillProps {
  name: string;
  icon: string;
}

export const TechPill: React.FC<TechPillProps> = ({ name, icon }) => {
  return (
    <div className="tech-pill flex items-center space-x-2 hover:scale-105 transition-all">
      <img src={icon} alt={name} className="w-6 h-6" />
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
    <div className="glass-card p-6 skill-card-hover reveal fade-bottom">
      <h3 className="text-xl font-semibold mb-4 relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary"></span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
};
