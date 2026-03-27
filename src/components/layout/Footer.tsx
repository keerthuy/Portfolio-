import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/50 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <Link href="/" className="text-2xl font-heading font-bold text-white mb-6">
          <span className="text-violet-500">&lt;</span>
          Developer
          <span className="text-violet-500">/&gt;</span>
        </Link>
        
        <div className="flex items-center gap-6 mb-8">
          <Link href="https://github.com" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white hover:scale-110 transition-all border border-white/10">
            <GithubIcon className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white hover:scale-110 transition-all border border-white/10">
            <LinkedinIcon className="w-5 h-5" />
          </Link>
          <Link href="mailto:hello@example.com" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white hover:scale-110 transition-all border border-white/10">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
        
        <p className="text-slate-400 text-sm flex items-center gap-2">
          Designed & Built with <Heart className="w-4 h-4 text-rose-500 animate-pulse" /> © {currentYear}
        </p>
      </div>
    </footer>
  );
}
