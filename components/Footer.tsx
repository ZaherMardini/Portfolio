
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 text-center px-6">
      <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">
        Designed & Built by Alex Rivera &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
