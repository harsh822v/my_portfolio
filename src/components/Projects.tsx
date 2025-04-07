
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading reveal fade-bottom">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="reveal fade-left" style={{ transitionDelay: '0.1s' }}>
            <ProjectCard 
              title="Career Paths Application"
              description="Developed an application aimed at guiding students in their post-10th and diploma in engineering educational decisions. The application helps students identify suitable fields, colleges, or schools based on their interests and test scores."
              technologies={{
                frontend: "Flutter",
                backend: "PHP",
                database: "SQL Server"
              }}
              githubLink="https://github.com/harsh822v"
              demoLink="https://harshshukla8822.netlify.app/"
            />
          </div>
          
          <div className="reveal fade-bottom" style={{ transitionDelay: '0.3s' }}>
            <ProjectCard 
              title="Natural Disaster Detection System"
              description="Developed an AI-powered real-time disaster detection system that monitors earthquakes, floods, and storms using live USGS, NOAA, and OpenWeatherMap data. Integrated geolocation-based alerts, heatmaps, and emergency assistance features."
              technologies={{
                frontend: "React + TypeScript",
                backend: "Express + TypeScript",
                api: "USGS, NOAA, OpenWeather APIs",
                database: "PostgreSQL + Drizzle ORM"
              }}
              githubLink="https://github.com/harsh822v"
              demoLink="https://harshshukla8822.netlify.app/"
            />
          </div>
          
          <div className="reveal fade-right" style={{ transitionDelay: '0.5s' }}>
            <ProjectCard 
              title="Disease Prediction Model"
              description="Developed a web application that predicts potential diseases based on user-selected symptoms. The application utilizes machine learning algorithms to assist users in preliminary diagnosis and guide them on whether to seek medical attention."
              technologies={{
                frontend: "HTML, CSS, Bootstrap",
                backend: "Flask, Python, Scikit-learn, Pickle",
                data: "Excel sheet, Kaggle"
              }}
              githubLink="https://github.com/harsh822v"
              demoLink="https://harshshukla8822.netlify.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
