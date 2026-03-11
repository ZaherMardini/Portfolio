
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
        Available for hire
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
        Welcome to my <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">Portfolio</span>
      </h1>
      
      <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
        Hi, I'm <span className="text-white font-semibold">Zaher Mardini</span>. A Junior Backend Developer specializing in Laravel, MySql.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="#projects" 
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/20 active:scale-95"
        >
          View Projects
        </a>
        <a 
          href="/Zaher_Mardini_CV.pdf" 
          download 
          className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-white/10 transition-all flex items-center gap-2 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume (PDF)
        </a>
      </div>

      <div className="mt-16 flex items-center gap-6">
        <a href="https://github.com/ZaherMardini" target="_blank" className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/zahermardini" target="_blank" className="text-slate-400 hover:text-blue-500 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
