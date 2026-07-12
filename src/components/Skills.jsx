import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Skills({ skills }) {
  const categories = Object.keys(skills).filter(k => k !== 'domain');
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-24 border-t border-border bg-foreground text-background relative min-h-[50vh] flex flex-col justify-center" id="skills">
      
      {/* Background active skills floating softly */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="w-full h-full flex flex-wrap items-center justify-center gap-12 p-12 blur-[2px]"
          >
            {skills[activeCategory].map((skill, i) => {
              const name = typeof skill === 'string' ? skill : skill.name;
              return (
                <motion.span 
                  key={name}
                  animate={{ 
                    y: [0, Math.random() * -30 - 10, 0], 
                    x: [0, Math.random() * 20 - 10, 0] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3 + Math.random() * 2, 
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                  className="font-display text-4xl md:text-7xl uppercase text-background whitespace-nowrap"
                >
                  {name}
                </motion.span>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-4 md:px-margin-desktop relative z-10 w-full flex flex-col md:flex-row justify-between items-start gap-16">
        
        {/* Interactive Spotlight Index */}
        <div className="flex flex-col w-full md:w-1/2">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-background/50 mb-12">Core Competencies</span>
          
          <div className="flex flex-col">
            {categories.map((cat, index) => (
              <div key={cat} className="flex flex-col">
                <div 
                  onClick={() => setActiveCategory(cat)}
                  onMouseEnter={() => setActiveCategory(cat)}
                  className="group cursor-pointer py-6 md:py-8 border-b border-background/20 first:border-t flex items-center gap-8 relative overflow-hidden"
                >
                  <div className={`absolute left-0 top-0 w-full h-full bg-background transition-transform duration-500 z-0 origin-bottom ${activeCategory === cat ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`}></div>
                  <span className={`font-mono text-xs uppercase tracking-widest transition-colors duration-500 relative z-10 ${activeCategory === cat ? 'text-foreground/50' : 'text-background/50 group-hover:text-foreground/50'}`}>0{index + 1}</span>
                  <h3 className={`font-display text-4xl md:text-6xl uppercase tracking-tighter transition-all duration-500 relative z-10 ${activeCategory === cat ? 'text-foreground pl-4' : 'text-background group-hover:text-foreground group-hover:pl-4'}`}>
                    {cat}
                  </h3>
                </div>
                
                {/* Mobile Accordion Content */}
                <AnimatePresence>
                  {activeCategory === cat && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="md:hidden overflow-hidden"
                    >
                      <div className="py-8 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest text-background/80">
                        {skills[cat].map((skill, i) => {
                          const name = typeof skill === 'string' ? skill : skill.name;
                          return <span key={i} className="border border-background/20 px-4 py-2 rounded-full">{name}</span>;
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Details Panel (Desktop Only) */}
        <div className="w-full md:w-1/3 flex flex-col pt-12 md:pt-24 hidden md:flex">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
              <h4 className="font-display text-2xl uppercase tracking-tight">{activeCategory} Focus</h4>
              <div className="flex flex-col gap-4 font-mono text-sm uppercase tracking-widest text-background/80">
                {skills[activeCategory].slice(0, 5).map((skill, i) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  return <span key={i} className="border border-background/20 px-4 py-2 rounded-full w-max">{name}</span>;
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default Skills;
