
import { Calendar } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  date: string;
}

export function AchievementCard({ title, description, date }: AchievementCardProps) {
  return (
    <div className="relative pl-6 animate-fade-in">
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary"></div>
      <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-border"></div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-foreground/70 mb-2 flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </p>
        <p className="text-foreground/80">{description}</p>
      </div>
    </div>
  );
}
