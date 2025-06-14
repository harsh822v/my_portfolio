
import React from 'react';
import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    title: "Collaboration & Outreach Intern",
    company: "Alltripp Pvt. Ltd., Dahod",
    duration: "June 2025 – Present",
    responsibilities: [
      "Building partnerships and outreach campaigns to expand brand visibility.",
      "Assisted in content development for social media and promotional materials.",
      "Supported cross-functional coordination with marketing and operations teams."
    ]
  },
  {
    title: "Campus Ambassador",
    company: "Naukri Campus, Ahmedabad",
    duration: "April 2025 – Present",
    responsibilities: [
      "Promoted Naukri Campus programs and events across the college.",
      "Facilitated student engagement with career resources and job opportunities.",
      "Coordinated between Naukri's team and students to ensure active participation."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading reveal fade-bottom">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              responsibilities={exp.responsibilities}
              delay={`${index * 0.2}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
