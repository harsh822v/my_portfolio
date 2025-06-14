import { SkillCard, TechPill } from './SkillCard';

const programmingSkills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Matplotlib', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
  { name: 'Seaborn', icon: 'https://seeklogo.com/images/S/seaborn-logo-244EB2DEC5-seeklogo.com.png' },
  { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'Pickle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
  { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  { name: 'MediaPipe', icon: 'https://developers.google.com/mediapipe/images/mediapipe_icon.svg' },
  { name: 'CNN', icon: '' },
];

const webDevSkills = [
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
];

const devTools = [
  { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'PlantUML', icon: 'https://plugins.jetbrains.com/files/7017/258353/icon/pluginIcon.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const databases = [
  { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'XAMPP', icon: 'https://www.apachefriends.org/images/xampp-logo-ac950edf.svg' },
];

const apis = [
  { name: 'USGS API', icon: 'https://www.usgs.gov/sites/all/themes/usgs_theme/logo.png' },
  { name: 'NOAA API', icon: 'https://www.noaa.gov/sites/default/files/styles/square_width_650/public/2021-02/FocusArea__Weather-02.jpg' },
  { name: 'OpenWeatherMap API', icon: 'https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_60x60.png' },
  { name: 'Rasa API', icon: 'https://rasa.com/assets/img/rasa-logo.svg' },
  { name: 'Django API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading reveal fade-bottom">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <SkillCard title="Programming & AI/ML">
            {programmingSkills.map((skill) => (
              <TechPill key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </SkillCard>
          
          <SkillCard title="Web & App Development">
            {webDevSkills.map((skill) => (
              <TechPill key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </SkillCard>
          
          <SkillCard title="Development Tools">
            {devTools.map((skill) => (
              <TechPill key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </SkillCard>
          
          <SkillCard title="Databases">
            {databases.map((skill) => (
              <TechPill key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </SkillCard>
          
          <SkillCard title="APIs">
            {apis.map((skill) => (
              <TechPill key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </SkillCard>
        </div>
      </div>
    </section>
  );
}
