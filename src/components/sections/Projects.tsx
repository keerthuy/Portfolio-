'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { 
  SiReact, SiFlutter, SiNodedotjs, SiExpress, SiMongodb, SiMysql 
} from 'react-icons/si';

const CodeIcon = () => (
  <div className="flex items-center justify-center text-sm font-bold text-violet-400 group-hover:text-white transition-colors">
    &lt;/&gt;
  </div>
);

const projects = [
  {
    title: 'FixMyRide (Mobile App)',
    description: 'A mobile application that connects users with nearby garages and fuel stations during emergencies. Users can request fuel, book services, and track request status in real-time.',
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/keerthuy/FixMyRide-Backend-.git',
    live: '#',
    color: 'from-blue-500 to-cyan-500',
    img: '/FixMyRide.png'
  },
  {
    title: 'Furniture E-Commerce System',
    description: 'A full-stack e-commerce platform designed for buying and selling furniture, featuring a mobile app for customers and a web dashboard for administrators.',
    tech: ['Flutter', 'React (Vite)', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/keerthuy/Furniture-Shop.git',
    live: '#',
    color: 'from-violet-500 to-fuchsia-500',
    img: '/FurnitureApp.png'
  },
  {
    title: 'BookEra - Online Book Store',
    description: 'A full-stack web application where users can buy and sell books securely. Features include User Authentication (JWT), Order Placement, and Book Management (CRUD).',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    github: 'https://github.com/keerthuy/library-Management-System.git',
    live: '#',
    color: 'from-orange-500 to-rose-500',
    img: '/BookEra.png'
  }
];

const figmaIframes = [
  "https://embed.figma.com/design/VfWR0luA4GsJ1M8x2pMQ5t/FixMyRide?node-id=0-1&embed-host=share",
  "https://embed.figma.com/design/ecIfEVwulq97S4T5wnS6bN/Clickcard?node-id=0-1&embed-host=share",
  "https://embed.figma.com/design/dQ3uax4TzpsLub5aGqDVLY/NutriLens?embed-host=share"
];

const TechIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'React Native':
    case 'React.js':
    case 'React (Vite)': 
      return <SiReact className="w-3 h-3" />;
    case 'Flutter': 
      return <SiFlutter className="w-3 h-3" />;
    case 'Node.js': 
      return <SiNodedotjs className="w-3 h-3" />;
    case 'Express.js': 
      return <SiExpress className="w-3 h-3" />;
    case 'MongoDB': 
      return <SiMongodb className="w-3 h-3" />;
    case 'MySQL': 
      return <SiMysql className="w-3 h-3" />;
    default: 
      return null;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Main focus on mobile app development, supported by full-stack web skills. All projects emphasize UI/UX design alongside functional development, demonstrating end-to-end digital solution capabilities.
          </p>
        </motion.div>

        {/* Development Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group relative p-1 flex flex-col h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-md -z-10`}></div>
              
              <div className="bg-slate-900/80 rounded-xl h-full flex flex-col justify-between border border-white/5 relative z-10 overflow-hidden">
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`}></div>
                
                {/* Project Image */}
                <div className="w-full h-48 bg-slate-800 relative overflow-hidden border-b border-white/5 flex items-center justify-center group-hover:border-white/10 transition-colors">
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                   <img 
                     src={project.img} 
                     alt={project.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&background=0f172a&color=c4b5fd&size=800`;
                     }}
                   />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <CodeIcon />
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading mb-3 text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[11px] font-medium text-violet-300 bg-violet-500/10 px-2 py-1 rounded border border-violet-500/20">
                        <TechIcon name={tech} />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UI/UX Design Projects (Figma Iframes) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4">
            UI/UX <span className="text-gradient">Design Projects</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Designed modern and user-friendly mobile and web interfaces using Figma. Focused on clean layouts, usability, and smooth user flows to enhance overall user experience.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12 w-full max-w-5xl mx-auto">
          {figmaIframes.map((iframeSrc, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="w-full rounded-2xl overflow-hidden glass-card border-white/10 shadow-2xl relative"
               style={{ aspectRatio: '16/9' }}
            >
              <div className="absolute inset-x-0 top-0 h-10 bg-slate-900 border-b border-white/10 flex items-center px-4 gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <iframe 
                src={iframeSrc} 
                className="w-full h-full pt-10" 
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
