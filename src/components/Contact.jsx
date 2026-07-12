import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact({ data }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section className="py-24 px-4 md:px-margin-desktop border-t border-border" id="contact">
      <div className="flex flex-col md:flex-row gap-24">
        
        <div className="w-full md:w-1/2 flex flex-col gap-12">
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
            className="flex flex-col gap-4 mt-8"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Direct Line</span>
            <a href={`mailto:${data.email}`} className="font-display text-3xl hover:text-muted transition-colors w-max">{data.email}</a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-8 mt-4 font-mono text-xs uppercase tracking-widest"
          >
            <a href={data.github} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">GitHub</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">LinkedIn</a>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <label className="font-mono text-xs uppercase tracking-widest text-muted">01. What's your name?</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-border py-4 font-sans text-2xl focus:outline-none focus:border-foreground transition-colors" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <label className="font-mono text-xs uppercase tracking-widest text-muted">02. What's your email?</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-border py-4 font-sans text-2xl focus:outline-none focus:border-foreground transition-colors" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <label className="font-mono text-xs uppercase tracking-widest text-muted">03. Tell me about your project</label>
              <textarea 
                rows="4" 
                className="w-full bg-transparent border-b border-border py-4 font-sans text-2xl focus:outline-none focus:border-foreground transition-colors resize-none" 
                placeholder="Hello..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
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
