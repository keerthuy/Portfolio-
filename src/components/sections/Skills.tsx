'use client';

import { motion, Variants } from 'framer-motion';
import { 
  SiReact, SiFlutter, SiHtml5, SiCss, SiJavascript, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFigma, SiFirebase
} from 'react-icons/si';
import { PenTool, LayoutTemplate, Layers, Lock, Network } from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', icon: <SiReact />, color: 'hover:border-cyan-400', shadow: 'hover:shadow-cyan-400/20' },
      { name: 'Flutter', icon: <SiFlutter />, color: 'hover:border-blue-400', shadow: 'hover:shadow-blue-400/20' },
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 />, color: 'hover:border-orange-500', shadow: 'hover:shadow-orange-500/20' },
      { name: 'CSS3', icon: <SiCss />, color: 'hover:border-blue-500', shadow: 'hover:shadow-blue-500/20' },
      { name: 'JavaScript', icon: <SiJavascript />, color: 'hover:border-yellow-400', shadow: 'hover:shadow-yellow-400/20' },
      { name: 'React.js', icon: <SiReact />, color: 'hover:border-cyan-400', shadow: 'hover:shadow-cyan-400/20' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'hover:border-white', shadow: 'hover:shadow-white/20' },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, color: 'hover:border-green-500', shadow: 'hover:shadow-green-500/20' },
      { name: 'Express.js', icon: <SiExpress />, color: 'hover:border-gray-400', shadow: 'hover:shadow-gray-400/20' },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: 'hover:border-green-600', shadow: 'hover:shadow-green-600/20' },
      { name: 'MySQL', icon: <SiMysql />, color: 'hover:border-blue-300', shadow: 'hover:shadow-blue-300/20' },
    ]
  },
  {
    title: 'UI/UX Design',
    skills: [
      { name: 'Figma', icon: <SiFigma />, color: 'hover:border-pink-500', shadow: 'hover:shadow-pink-500/20' },
      { name: 'Wireframing', icon: <PenTool className="w-4 h-4" />, color: 'hover:border-purple-400', shadow: 'hover:shadow-purple-400/20' },
      { name: 'Prototyping', icon: <Layers className="w-4 h-4" />, color: 'hover:border-rose-400', shadow: 'hover:shadow-rose-400/20' },
      { name: 'User Interface', icon: <LayoutTemplate className="w-4 h-4" />, color: 'hover:border-violet-400', shadow: 'hover:shadow-violet-400/20' },
      { name: 'User Experience', icon: <LayoutTemplate className="w-4 h-4" />, color: 'hover:border-indigo-400', shadow: 'hover:shadow-indigo-400/20' },
    ]
  },
  {
    title: 'Other Tools',
    skills: [
      { name: 'Firebase', icon: <SiFirebase />, color: 'hover:border-orange-400', shadow: 'hover:shadow-orange-400/20' },
      { name: 'JWT Auth', icon: <Lock className="w-4 h-4" />, color: 'hover:border-cyan-300', shadow: 'hover:shadow-cyan-300/20' },
      { name: 'REST APIs', icon: <Network className="w-4 h-4" />, color: 'hover:border-emerald-400', shadow: 'hover:shadow-emerald-400/20' },
    ]
  }
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.6, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring" as const, // ✅ Fixed
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className="py-16 relative bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-16 h-1 bg-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            I've built a versatile toolkit spanning mobile development, full-stack web, and professional UI/UX design.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-lg font-bold font-heading text-slate-200 mb-4 text-center md:text-left border-b border-white/5 pb-2">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center md:justify-start gap-3"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    animate={{ 
                      y: [-4, 4, -4]
                    }}
                    transition={{
                      duration: 2.5 + index * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ 
                      scale: 1.12, 
                      y: -12,
                      boxShadow: "0 15px 35px rgba(139, 92, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-br from-slate-950/60 to-slate-900/40 border border-white/10 
                      backdrop-blur-md cursor-default transition-all duration-300 ease-in-out
                      flex items-center gap-2 ${skill.color} ${skill.shadow} hover:from-slate-900/70 hover:to-slate-800/50 group relative overflow-hidden`}
                  >
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%)'
                      }}
                    ></div>

                    {/* Animated Icon */}
                    <motion.div 
                      className="text-slate-400 group-hover:text-violet-300 transition-colors relative z-10 text-sm"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(139, 92, 246, 0)",
                          "0 0 8px rgba(139, 92, 246, 0.5)",
                          "0 0 0px rgba(139, 92, 246, 0)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {skill.icon}
                    </motion.div>

                    {/* Skill Name */}
                    <span className="font-medium text-slate-300 group-hover:text-violet-200 transition-colors relative z-10 text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}