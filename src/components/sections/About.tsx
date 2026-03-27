'use client';

import { motion } from 'framer-motion';
import { Smartphone, Layout, Server, Database } from 'lucide-react';

const coreSkills = [
  {
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    title: 'Mobile App Development',
    description: 'Specializing in building high-performance mobile applications using React Native and Flutter.'
  },
  {
    icon: <Layout className="w-6 h-6 text-violet-400" />,
    title: 'UI/UX Design',
    description: 'Hands-on experience in UI/UX design, creating intuitive and visually appealing user interfaces.'
  },
  {
    icon: <Server className="w-6 h-6 text-fuchsia-400" />,
    title: 'Full Stack Web',
    description: 'Developing scalable backend systems and web applications with Node.js and React/Next.js.'
  },
  {
    icon: <Database className="w-6 h-6 text-rose-400" />,
    title: 'Complete Solutions',
    description: 'Delivering end-to-end digital solutions that are highly functional and user-centered.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Decorative elements behind text */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white font-heading">
                Hi, I'm Gopalakrishnar Keerththanan.
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I am a passionate Mobile App Developer with strong Full Stack development skills and hands-on experience in UI/UX design. I specialize in building high-performance mobile applications using React Native and Flutter, while also developing scalable backend systems with Node.js and MongoDB.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                My goal is to deliver complete digital solutions that are not only functional but also visually appealing. I focus on mobile-first development, ensuring seamless user experiences on all devices, while also handling full-stack web applications to support complete project needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card p-6 border-white/5 bg-slate-900/50"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 border border-white/10 shadow-inner">
                  {skill.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{skill.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
