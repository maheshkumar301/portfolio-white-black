import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import portfolioData from './data/portfolio.json';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const cursorX = useSpring(-100, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-inverse selection:text-inverse-foreground">
      {/* Brutalist Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border-2 border-foreground mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] bg-foreground mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: 12, translateY: 12 }}
      />

      <NavBar data={portfolioData.personalInfo} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative overflow-hidden pt-24">
        <Hero data={portfolioData.personalInfo} />
        <About personal={portfolioData.personalInfo} domain={portfolioData.skills.domain} />
        <Skills skills={portfolioData.skills} />
        <Experience experiences={portfolioData.experiences} />
        <Projects projects={portfolioData.projects} />
        <Contact data={portfolioData.personalInfo} />
      </main>
    </div>
  );
}

export default App;
