'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-fuchsia-600/30 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left">

          {/* 🔥 Animated Role Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-violet-400 uppercase text-sm mb-4 tracking-wider"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1500,
                'Mobile App Developer',
                1500,
                'UI/UX Designer',
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Design + Development = <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-500 to-fuchsia-400">
              Complete Product Experience
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 mb-6 max-w-xl mx-auto md:mx-0"
          >
            I build modern mobile applications with seamless user experiences,
            combining UI/UX design with powerful full-stack development.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-full text-white transition hover:scale-105"
            >
              View Work <ArrowRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 border border-white/10 rounded-full text-white hover:bg-white/10 transition hover:scale-105"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE - PREMIUM PROFILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group animate-[float_6s_ease-in-out_infinite]">

            {/* Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

            {/* Gradient Border */}
            <div className="p-[3px] rounded-[2.5rem] bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500">

              {/* Glass Card */}
              <div className="relative rounded-[2.3rem] bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">

                {/* Image */}
                <div className="w-72 h-72 md:w-[420px] md:h-[420px] overflow-hidden">
                  <img
                    src="/Profile.jpeg"
                    alt="Gopalakrishnar Keerththanan"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

              </div>
            </div>

            {/* Badge
            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm text-white shadow-lg">
              🚀 Full Stack Dev
            </div> */}

          </div>
        </motion.div>

      </div>
    </section>
  );
}