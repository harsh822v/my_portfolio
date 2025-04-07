
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
    description: "Learned Pandas, NumPy, and data visualization.",
    date: "March 2025"
  },
  {
    title: "Coding: Development & Advanced Engineering Job Simulation",
    description: "Hands-on training in software development.",
    date: "March 2025"
  },
  {
    title: "Walmart USA Advanced Software Engineering Virtual Experience Program",
    description: "Completed the virtual experience program on Forage.",
    date: "April 2025"
  },
  {
    title: "HackElevate(Hackathon) - 2025 winner",
    description: "Presented Natural Disaster Detection System: AI-Driven Real-Time Monitoring & Alert System.",
    date: "March 2025"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading reveal fade-bottom">Achievements & Certifications</h2>
        
        <div className="mt-12 glass-card p-8 reveal fade-bottom">
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="reveal fade-left" style={{ transitionDelay: `${index * 0.1}s` }}>
                <AchievementCard 
                  title={achievement.title}
                  description={achievement.description}
                  date={achievement.date}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-8 reveal fade-bottom" style={{ transitionDelay: '0.5s' }}>
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
