'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold text-white z-50 flex items-center gap-2">
          <span className="text-violet-500">&lt;</span>
          Developer
          <span className="text-violet-500">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-white/20 pl-6">
            <Link href="https://github.com/keerthuy" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/gopalakrishnar-keerththanan-a424a02a8/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-slate-950/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 mt-12">
            <Link href="https://github.com/keerthuy?tab=overview&from=2026-03-01&to=2026-03-29" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <GithubIcon className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/gopalakrishnar-keerththanan-a424a02a8/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
