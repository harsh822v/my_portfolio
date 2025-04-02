
export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-lavender-50">
      <div className="container mx-auto">
        <h2 className="section-heading">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border-t-4 border-lavender-500">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering</h3>
            <p className="text-foreground/70 mb-1">Government Engineering College, Dahod (GTU)</p>
            <p className="text-sm text-foreground/60 mb-3">SPI: 6.22 | CGPA: 5.84</p>
          </div>
          
          <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border-t-4 border-lavender-500">
            <h3 className="text-xl font-semibold mb-2">Diploma in Engineering</h3>
            <p className="text-foreground/70 mb-1">C.U. Shah Polytechnic College, Wadhwan (GTU)</p>
            <p className="text-sm text-foreground/60 mb-3">SPI: 9.77 | CGPA: 8.67</p>
          </div>
          
          <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border-t-4 border-lavender-500">
            <h3 className="text-xl font-semibold mb-2">Secondary Education</h3>
            <p className="text-foreground/70 mb-1">Pragati School, Surendranagar</p>
            <p className="text-sm text-foreground/60 mb-3">Grade: 72.78%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
