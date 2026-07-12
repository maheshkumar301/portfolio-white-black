import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function NavBar({ data, isDarkMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-border flex justify-between items-center px-6 md:px-margin-desktop py-4 ${scrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-background'}`}>
      <div className="font-display font-bold text-xl uppercase tracking-tighter">
        {data.name}
      </div>
      
      <div className="md:hidden flex items-center gap-4">
        <button onClick={toggleTheme} className="text-foreground flex items-center">
          <span className="material-symbols-outlined text-2xl">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
        </button>
        <button className="text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <a className="font-mono text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors border-b-hover" href="#about">About</a>
        <a className="font-mono text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors border-b-hover" href="#skills">Skills</a>
        <a className="font-mono text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors border-b-hover" href="#experience">Experience</a>
        <a className="font-mono text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors border-b-hover" href="#projects">Work</a>
        <a className="font-mono text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors border-b-hover" href="#contact">Contact</a>
        <button onClick={toggleTheme} className="text-muted hover:text-foreground transition-colors flex items-center ml-4">
          <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border flex flex-col items-center py-8 gap-6 md:hidden shadow-xl"
          >
            <a onClick={() => setMobileMenuOpen(false)} className="font-mono text-sm uppercase tracking-widest" href="#about">About</a>
            <a onClick={() => setMobileMenuOpen(false)} className="font-mono text-sm uppercase tracking-widest" href="#skills">Skills</a>
            <a onClick={() => setMobileMenuOpen(false)} className="font-mono text-sm uppercase tracking-widest" href="#experience">Experience</a>
            <a onClick={() => setMobileMenuOpen(false)} className="font-mono text-sm uppercase tracking-widest" href="#projects">Work</a>
            <a onClick={() => setMobileMenuOpen(false)} className="font-mono text-sm uppercase tracking-widest" href="#contact">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
