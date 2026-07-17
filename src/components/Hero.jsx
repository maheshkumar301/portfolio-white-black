import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Hero({ data }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="min-h-screen flex flex-col justify-end px-4 md:px-margin-desktop pb-24 pt-32 relative" id="hero">

      {/* Floating Image */}
      <motion.div
        style={{ y: y1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-32 right-4 md:right-margin-desktop aspect-[3/4] w-[60vw] md:w-[400px] z-0 overflow-hidden group"
      >
        <img
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt="Profile"
          className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
        />
      </motion.div>

      <div className="z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-[1px] bg-foreground"></div>
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-muted">System Initialized</span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-display text-[15vw] md:text-[10vw] uppercase leading-[0.8] tracking-tighter mix-blend-difference text-inverse"
          >
            {data.role[0]} <br />
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 2, delay: 0.8 }}
              className="text-muted/50 mix-blend-normal text-[15vw] md:text-[10vw] inline-block"
            >
              Developer
            </motion.span>
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-sans text-xl md:text-2xl text-muted max-w-2xl leading-relaxed"
          >
            {data.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-left md:text-right"
          >
            <span className="text-muted">Current Location</span>
            <span>{data.location}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
