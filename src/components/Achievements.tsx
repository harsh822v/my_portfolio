import { AchievementCard } from './AchievementCard';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: "Project Expo - 2023 (SSIP)",
    description: "Presented Career Paths Application.",
    date: "June 2023"
  },
  {
    title: "Data Analysis With Python",
    description: "Learned Pandas, NumPy, and data visualization.", // from freeCodeCamp - as per resume, if applicable
    date: "March 2025" // Resume has March 2025
  },
  {
    title: "Coding: Development & Advanced Engineering Job Simulation",
    description: "Hands-on training in software development via Forage.", // Resume: Forage
    date: "March 2025" // Resume has March 2025
  },
  {
    title: "Walmart USA Advanced Software Engineering Virtual Experience Program",
    description: "Completed the virtual experience program on Forage.",
    date: "April 2025" // Resume has April 2025
  },
  {
    title: "HackElevate(Hackathon) - 2025 winner",
    description: "Presented Natural Disaster Detection System: AI-Driven Real-Time Monitoring & Alert System.",
    date: "March 2025"
  },
  {
    title: "NCAT Test - Naukri Campus Aptitude Test",
    description: "Successfully completed the Naukri Campus Aptitude Test.",
    date: "April 2025"
  },
  {
    title: "Kaggle - Intro to Machine Learning",
    description: "Completed introductory course on Machine Learning fundamentals on Kaggle.",
    date: "April 2025"
  },
  {
    title: "Infosys Springboard - Introduction to Data Science",
    description: "Completed course on Introduction to Data Science.",
    date: "May 2025"
  },
  {
    title: "NVIDIA - Disaster Risk Monitoring Using Satellite Imagery",
    description: "Completed program on disaster risk monitoring with satellite imagery.",
    date: "May 2025"
  },
  {
    title: "Udemy - Python Development & Data Science: Variables and Data Types",
    description: "Completed course covering Python fundamentals for data science.",
    date: "May 2025"
  }
];

// Sort achievements by date, most recent first (optional, good practice)
// Parsing dates might be tricky if formats vary. Assuming YYYY-MM for sorting.
// For simplicity, current order is fine, or manually reorder if strict chronology is desired.

export function Achievements() {
  const sortedAchievements = [...achievements].sort((a, b) => {
    // Simple sort: prioritize achievements with more specific dates or just keep resume order
    // This basic sort won't handle complex date strings well without robust parsing.
    // Given "Month Year" format, we can try a basic sort.
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) return 0; // handle invalid dates
    return dateB.getTime() - dateA.getTime(); // Most recent first
  });


  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading reveal fade-bottom">Achievements & Certifications</h2>
        
        <div className="mt-12 glass-card p-8 reveal fade-bottom">
          <div className="space-y-2">
            {sortedAchievements.map((achievement, index) => (
              <div key={index} className="reveal fade-left" style={{ transitionDelay: `${index * 0.1}s` }}>
                <AchievementCard 
                  title={achievement.title}
                  description={achievement.description}
                  date={achievement.date}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-8 reveal fade-bottom" style={{ transitionDelay: `${(sortedAchievements.length + 1) * 0.1}s` }}>
            <Button asChild className="btn-pulse-effect">
              <a 
                href="https://drive.google.com/drive/folders/1mtGb3KfJF82PFv2alRhink16J5lWKSY5?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>View All Certifications</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
