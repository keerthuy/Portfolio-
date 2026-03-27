'use client';

import { motion } from 'framer-motion';

const journey = [
  {
    year: '2025',
    title: 'Senior Frontend Developer',
    description: 'Leading the frontend architecture and building scalable user interfaces for enterprise clients.'
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    description: 'Developed and maintained full-stack web applications using the MERN stack and Next.js.'
  },
  {
    year: '2021',
    title: 'Web Developer Intern',
    description: 'Assisted in building responsive websites and modernizing legacy codebases.'
  },
  {
    year: '2019',
    title: 'Computer Science Degree',
    description: 'Started my formal education in Computer Science, discovering my passion for web development.'
  }
];

export default function Timeline() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-fuchsia-500 to-transparent transform md:-translate-x-1/2"></div>
          
          {journey.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-16 w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex-row-reverse`}
            >
              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block w-5/12"></div>
              
              {/* Timeline marker */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-slate-950 border-4 border-violet-500 rounded-full transform -translate-x-1.5 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
              
              {/* Content card */}
              <div className="w-[calc(100%-2rem)] md:w-5/12 glass-card p-6 border-white/5 relative group hover:-translate-y-1 transition-transform duration-300">
                <span className="inline-block py-1 px-3 rounded-full bg-violet-500/10 text-violet-400 text-sm font-bold mb-3 border border-violet-500/20">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
                {/* Hover gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
