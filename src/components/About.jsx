import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function AnimatedNumber({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease out
        onUpdate(v) {
          setDisplayValue(v);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue.toFixed(decimals)}{suffix}</span>;
}

function About({ personal }) {
  const expValue = parseFloat(personal?.experience) || 2.5;

  return (
    <section className="py-16 px-4 md:px-margin-desktop border-t border-border" id="about">
      <div className="flex flex-col md:flex-row gap-24">
        
        {/* Massive Stats Column */}
        <div className="md:w-1/3 flex flex-col gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="font-display text-7xl md:text-[10rem] leading-[0.8] tracking-tighter">
              <AnimatedNumber value={expValue} decimals={1} />
            </div>
            <div className="font-mono text-sm uppercase tracking-[0.2em] text-muted mt-4 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-muted"></div>
              Years Experience
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="font-display text-7xl md:text-[10rem] leading-[0.8] tracking-tighter">
              <AnimatedNumber value={10} suffix="+" />
            </div>
            <div className="font-mono text-sm uppercase tracking-[0.2em] text-muted mt-4 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-muted"></div>
              Projects Shipped
            </div>
          </motion.div>
        </div>

        {/* Philosophy Text */}
        <div className="md:w-2/3 flex flex-col pt-12 md:pt-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-muted mb-12">Core Philosophy</h2>
            
            <p className="font-sans text-2xl md:text-5xl text-foreground leading-[1.3] tracking-tight">
              {"I build digital experiences that sit at the intersection of stark minimalism and robust engineering.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="inline-block mr-2 md:mr-3"
                >
                  {word === "digital" || word === "experiences" ? <span className="font-display italic text-muted">{word}</span> : word}
                </motion.span>
              ))}
            </p>
            <br />
            <p className="font-sans text-xl md:text-3xl text-muted leading-relaxed max-w-3xl">
              Rejecting visual clutter in favor of typography, motion, and negative space. Every pixel serves a purpose. Every interaction tells a story.
            </p>
            
            <div className="flex flex-wrap gap-8 mt-16 font-mono text-xs uppercase tracking-widest text-muted">
              <span>Problem Solver</span>
              <span className="w-[1px] bg-border"></span>
              <span>Design Engineer</span>
              <span className="w-[1px] bg-border"></span>
              <span>Creative Developer</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default About;
