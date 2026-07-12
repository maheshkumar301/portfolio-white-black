import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

function Experience({ experiences }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative md:min-h-[150vh] border-t border-border" id="experience">
      
      {/* Sticky Header Layer - Only sticky on desktop */}
      <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col md:flex-row px-4 md:px-margin-desktop py-16 md:py-32 md:pointer-events-none z-0">
        
        {/* Left Side: Massive Title */}
        <div className="md:w-1/3 h-full flex flex-col justify-start">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-muted block mb-4">Timeline</span>
            <h2 className="font-display text-6xl md:text-[6vw] leading-[0.85] uppercase tracking-tighter">
              Career<br className="hidden md:block"/>History
            </h2>
          </motion.div>
        </div>
        
      </div>

      {/* Scrolling Content Layer - Stacks on mobile */}
      <div className="md:absolute md:top-0 md:right-0 w-full md:w-2/3 px-4 md:px-margin-desktop pb-16 md:py-[20vh] flex flex-col gap-12 md:gap-[15vh] z-10">
        {experiences.map((job, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6 p-6 md:p-12 border border-border bg-background shadow-xl md:shadow-2xl relative group"
          >
            <div className="absolute -left-4 -top-4 w-8 h-8 bg-foreground hidden md:flex items-center justify-center font-mono text-[10px] text-background group-hover:scale-125 transition-transform duration-300">
              0{i+1}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-6">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-sm uppercase tracking-widest text-muted">{job.period}</span>
                <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tight">{job.role}</h3>
              </div>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-foreground bg-surface px-4 py-2 border border-border">
                {job.company}
              </span>
            </div>
            
            <p className="font-sans text-base md:text-xl text-muted leading-relaxed max-w-2xl">
              {job.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Experience;
