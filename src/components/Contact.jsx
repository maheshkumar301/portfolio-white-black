import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact({ data }) {
  const [form, setForm] = useState({ name: '', project: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 px-4 md:px-margin-desktop border-t border-border" id="contact">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side: Text and links */}
        <div className="w-full md:w-1/3 flex flex-col gap-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none"
          >
            Let's start <br/>a project.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xl text-muted max-w-md leading-relaxed"
          >
            I'm currently available for new opportunities. Whether you have a specific idea in mind or just want to chat about possibilities, I'd love to hear from you.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4 mt-4"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Direct Line</span>
            <a href={`mailto:${data.email}`} className="font-display text-3xl md:text-4xl hover:text-muted transition-colors w-max">{data.email}</a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-8 font-mono text-xs uppercase tracking-widest"
          >
            <a href={data.github} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">GitHub</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">LinkedIn</a>
          </motion.div>
        </div>

        {/* Right Side: Mad Libs Interactive Form */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <form className="flex flex-col gap-12 w-full" onSubmit={(e) => e.preventDefault()}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="font-sans text-2xl md:text-5xl leading-loose md:leading-[1.6] tracking-tight max-w-4xl">
                Hello, my name is{' '}
                <input 
                  type="text" 
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-transparent border-b border-border w-[140px] md:w-[250px] text-center focus:outline-none focus:border-foreground transition-colors placeholder:text-muted/30"
                />
                {' '}and I'm looking for a creative developer to help me with{' '}
                <input 
                  type="text" 
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  placeholder="A Website, App..."
                  className="bg-transparent border-b border-border w-[180px] md:w-[350px] text-center focus:outline-none focus:border-foreground transition-colors placeholder:text-muted/30 mt-4 md:mt-0"
                />
                .{' '}You can reach me at{' '}
                <input 
                  type="email" 
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-transparent border-b border-border w-[200px] md:w-[350px] text-center focus:outline-none focus:border-foreground transition-colors placeholder:text-muted/30 mt-4 md:mt-0"
                />
                .
              </div>
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="self-start mt-8 border border-foreground rounded-full px-12 py-4 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              Send Message
            </motion.button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
