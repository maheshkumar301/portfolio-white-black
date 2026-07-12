import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

function Projects({ projects }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Custom cursor tracking for the preview image
  const cursorX = useSpring(-1000, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(-1000, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 150); // Offset to center a 300px image
      cursorY.set(e.clientY - 200); // Offset to center a 400px image
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section className="py-16 relative" id="projects">
      <div className="px-4 md:px-margin-desktop mb-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-muted">Selected Works</h2>
      </div>

      <div className="flex flex-col relative z-10">
        {projects.map((project, index) => (
          <motion.a 
            href={project.live || project.github}
            target="_blank"
            rel="noreferrer"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            className="border-b border-border py-8 px-4 md:px-margin-desktop hover:pl-8 md:hover:pl-[60px] transition-all duration-700 ease-out flex justify-between items-center group relative overflow-hidden"
          >
            {/* Reduced Title Size */}
            <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted transition-all duration-700 mix-blend-difference">
              {project.title}
            </h3>
            
            <div className="font-mono text-xs uppercase tracking-widest text-muted hidden md:flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {Array.isArray(project.category) ? project.category.map((cat, i) => <span key={i}>{cat}</span>) : <span>{project.category}</span>}
            </div>
          </motion.a>
        ))}
      </div>

    </section>
  );
}

export default Projects;
