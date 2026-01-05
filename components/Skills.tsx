
import React from 'react';
import { SKILLS } from '../constants.tsx';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0f1e]/40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <span className="text-blue-500 text-xl font-mono">03.</span> Core Skills
        </h2>
        <p className="text-slate-400 mb-12">Tools and technologies I use to build scalable server-side applications.</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="px-6 py-4 bg-[#0f172a] border border-white/5 rounded-xl text-lg font-medium text-slate-300 hover:border-blue-500/40 hover:text-white transition-all cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
