
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          ZAHER.PORTFOLIO
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                activeSection === item.id ? 'text-blue-400' : 'text-slate-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
            {/* Simple mobile indicator or menu would go here, kept minimal for single page */}
            <span className="text-xs text-blue-500 font-mono tracking-widest uppercase">{activeSection}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
