
import React from 'react';
import { Briefcase, CalendarDays } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  delay?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, duration, responsibilities, delay }) => {
  return (
    <div className="glass-card p-6 skill-card-hover reveal fade-bottom ai-card-border" style={{ transitionDelay: delay }}>
      <div className="flex items-center mb-3">
        <Briefcase className="w-6 h-6 mr-3 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-md font-medium text-foreground/80 mb-1">{company}</p>
      <div className="flex items-center text-sm text-foreground/60 mb-3">
        <CalendarDays className="w-4 h-4 mr-1.5" />
        <span>{duration}</span>
      </div>
      <ul className="list-disc list-outside pl-5 space-y-1 text-foreground/70">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
};
