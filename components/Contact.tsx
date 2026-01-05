
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Connect</h2>
      <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
        I'm currently looking for new opportunities in backend engineering. 
        Whether you have a question or just want to say hi, my inbox is always open!
      </p>
      
      <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
        <a 
          href="mailto:hello@example.com" 
          className="flex flex-col items-center p-8 bg-blue-600/10 border border-blue-500/20 rounded-2xl hover:bg-blue-600/20 transition-all group"
        >
          <div className="p-4 bg-blue-600 rounded-full mb-4 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <span className="text-white font-semibold">Email Me</span>
          <span className="text-slate-400 text-sm mt-1">hello@example.com</span>
        </a>

        <a 
          href="https://linkedin.com" 
          target="_blank" 
          className="flex flex-col items-center p-8 bg-slate-800/30 border border-white/5 rounded-2xl hover:bg-slate-800/50 transition-all group"
        >
          <div className="p-4 bg-slate-700 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform">
             <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </div>
          <span className="text-white font-semibold">LinkedIn</span>
          <span className="text-slate-400 text-sm mt-1">Professional Profile</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
