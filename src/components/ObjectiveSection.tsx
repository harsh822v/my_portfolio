import { Sparkles, Target, Code, Database } from 'lucide-react';

export const ObjectiveSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-accent/5 via-primary/10 to-secondary/5">
      <div className="container mx-auto">
        <h2 className="section-heading reveal fade-bottom bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">Objective</h2>
        
        <div className="mt-12 reveal fade-bottom">
          <div className="glass-card p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white animate-pulse" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-accent" />
                  Career Vision
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Passionate and detail-oriented Data Analyst and Aspiring AI/ML Engineer with a strong foundation 
                  in Python, machine learning, and data visualization. Skilled in building data-driven applications, 
                  analyzing complex datasets, and deploying real-time AI solutions using tools like Pandas, 
                  Scikit-learn, TensorFlow, SQL, and OpenCV.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <Code className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm text-foreground/80">AI/ML Development</span>
                  </div>
                  <div className="flex items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <Database className="w-5 h-5 text-accent mr-3" />
                    <span className="text-sm text-foreground/80">Data Analysis</span>
                  </div>
                </div>
                
                <p className="text-foreground/70 mt-4 text-sm italic">
                  Eager to contribute to an innovative MNC by leveraging my technical expertise, problem-solving skills, 
                  and collaborative mindset to extract insights and build intelligent systems that drive business impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};