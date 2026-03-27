'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative flex items-center justify-center"
        >
          {/* Glowing background ring */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500 rounded-lg opacity-40 blur-3xl filter animate-pulse -z-10"></div>
          
       {/* Modern Glass Profile Card */}
<div className="relative group">

  {/* Glow Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500 blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

  {/* Glass Card */}
  <div className="relative p-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-105">

    {/* Profile Image */}
    <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden">
      <img 
        src="/Profile.jpeg" 
        alt="Gopalakrishnar Keerththanan" 
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'https://ui-avatars.com/api/?name=Keerththanan&background=020617&color=c4b5fd&size=288';
        }}
      />
    </div>

  </div>
</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-violet-400 font-medium tracking-wider uppercase text-sm md:text-base mb-4">
            Mobile App Developer | Full Stack Developer | UI/UX Designer
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight max-w-4xl"
        >
          Design + Development = <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-500 to-fuchsia-400">
            Complete Product Experience
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mb-10"
        >
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-medium mb-4">
            I build modern mobile applications with seamless user experiences, combining clean UI/UX design with powerful full-stack development.
          </p>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Focused on mobile-first development, I create scalable applications using React Native and Flutter, while also designing intuitive and user-friendly interfaces. Additionally, I develop full-stack web applications with Node.js, Express.js, and MongoDB to deliver complete digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#projects"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 group shadow-lg shadow-violet-500/25"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all hover:scale-105 active:scale-95"
          >
            Let's Connect
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
