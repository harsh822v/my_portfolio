
import { ProjectCard } from './ProjectCard';

const projectsData = [
  {
    title: "Car Service Booking System",
    description: "Developed a role-based booking platform where users can schedule car services and view their history, while service providers can manage incoming requests.",
    technologies: {
      frontend: "HTML, CSS, Tailwind CSS, JavaScript",
      backend: "Django, Node.js, Express.js", // Resume says Django, Node.js, Express.js for backend
      database: "PostgreSQL"
    },
    githubLink: "https://github.com/harsh822v", // Assuming same GitHub for all, update if different
    // demoLink: "specific_demo_link_if_any"
  },
  {
    title: "Handwritten Digit Recognition System",
    description: "Real-time digit classification system using webcam and finger gestures to draw digits. Integrates CNN and gesture recognition.",
    technologies: {
      // Resume says "Tech Stack: OpenCV, MediaPipe, Python, CNN"
      // Mapping this to existing fields:
      data: "OpenCV, MediaPipe, Python, CNN", // Using 'data' field for tech stack elements
    },
    githubLink: "https://github.com/harsh822v",
  },
  {
    title: "Career Paths Application",
    description: "Developed an application aimed at guiding students in their post-10th and diploma in engineering educational decisions. The application helps students identify suitable fields, colleges, or schools based on their interests and test scores.",
    technologies: {
      frontend: "Flutter",
      backend: "PHP",
      database: "SQL Server"
    },
    githubLink: "https://github.com/harsh822v",
    demoLink: "https://harshshukla8822.netlify.app/" // Existing demo link
  },
  {
    title: "Natural Disaster Detection System: AI-Driven Real-Time Monitoring & Alert System",
    description: "Developed an AI-powered real-time disaster detection system that monitors earthquakes, floods, and storms using live USGS, NOAA, and OpenWeatherMap data. Integrated geolocation-based alerts, heatmaps, and emergency assistance features.",
    technologies: {
      frontend: "React + TypeScript", // Resume says React + TypeScript
      backend: "Express + TypeScript", // Resume says Express + TypeScript
      api: "USGS, NOAA, OpenWeather APIs",
      database: "PostgreSQL + Drizzle ORM"
    },
    githubLink: "https://github.com/harsh822v",
    demoLink: "https://harshshukla8822.netlify.app/" // Existing demo link
  },
  {
    title: "Disease Prediction Model",
    description: "Developed a web application that predicts potential diseases based on user-selected symptoms. The application utilizes machine learning algorithms to assist users in preliminary diagnosis and guide them on whether to seek medical attention.",
    technologies: {
      frontend: "HTML, CSS, Bootstrap",
      backend: "Flask, Python, Scikit-learn, Pickle",
      data: "Excel sheet, Kaggle"
    },
    githubLink: "https://github.com/harsh822v",
    demoLink: "https://harshshukla8822.netlify.app/" // Existing demo link
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading reveal fade-bottom">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <div key={project.title} className="reveal fade-bottom" style={{ transitionDelay: `${index * 0.15}s` }}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
