
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-48 h-48 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white/10 shrink-0">
          <img src="https://picsum.photos/seed/dev/400/400" alt="Profile" className="w-full h-full object-cover" />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-blue-500 text-xl font-mono">01.</span> About Me
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
            <p>
              I am a software engineer with a strong foundation in <span className="text-blue-400">backend development</span>. 
              My journey began with a curiosity about how data flows across the web, leading me to master PHP and the Laravel ecosystem.
            </p>
            <p>
              I focus on writing clean, maintainable code and building APIs that are both performant and secure. 
              I enjoy solving complex architectural problems and optimizing database schemas to handle large-scale data efficiently.
            </p>
            <p>
              Beyond coding, I am an advocate for thorough documentation and collaborative git-based workflows. 
              I believe that a great backend isn't just about speed, but also about stability and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
