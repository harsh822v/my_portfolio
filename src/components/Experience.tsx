
import React from 'react';
import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    title: "Data and AI Intern",
    company: "Microsoft, Bengaluru",
    duration: "July 2025 – Present",
    responsibilities: [
      "Azure AI Fundamentals (AI-900)",
      "Data Analysis & Visualization using Microsoft Power BI (PL-300)",
      "Natural Language Processing using Azure AI Language",
      "Generative AI with Azure Machine Learning"
    ]
  },
  {
    title: "Collaboration & Outreach Intern",
    company: "Alltripp Pvt. Ltd., Dahod",
    duration: "June 2025 – Present",
    responsibilities: [
      "Building partnerships and outreach campaigns to expand brand visibility.",
      "Assisted in content development for social media and promotional materials.",
      "Supported cross-functional coordination with marketing and operations teams."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-secondary/20 via-primary/5 to-accent/10">
      <div className="container mx-auto">
        <h2 className="section-heading reveal fade-bottom bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Experience</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
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
