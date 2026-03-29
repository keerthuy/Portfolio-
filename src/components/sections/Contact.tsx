'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS (do this once when component mounts)
  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Replace with your EmailJS public key
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const result = await emailjs.sendForm(
        'service_495xtxd', // Replace with your Service ID
        'template_pad0l7b', // Replace with your Template ID
        formRef.current!,
        'MxqU0eNgsUlZr9zny' // Replace with your Public Key
      );

      if (result.status === 200) {
        setFormState('success');
        formRef.current?.reset();
        // Reset after showing success
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch (error) {
      console.error('Email send error:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm currently open to new opportunities!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4 p-6 glass-card border-white/5 bg-slate-950/50">
              <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <p className="text-slate-400 text-sm mb-2">Drop me a line anytime</p>
                <a href="mailto:keerththanan109@gmail.com" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                  keerththanan109@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 glass-card border-white/5 bg-slate-950/50">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Phone</h4>
                <p className="text-slate-400 text-sm mb-2">Available during working hours</p>
                <a href="tel:0726793218" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  0726793218
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 glass-card border-white/5 bg-slate-950/50">
              <div className="w-12 h-12 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-slate-400 text-sm mb-2">Available </p>
                <span className="text-fuchsia-400 font-medium">
                  Jaffna, Sri Lanka
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 md:p-10 border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="from_name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="from_name" 
                    name="from_name"
                    required
                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="from_email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="from_email" 
                    name="from_email"
                    required
                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors placeholder:text-slate-600"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors placeholder:text-slate-600 resize-y"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-slate-800 disabled:text-slate-500 text-white font-medium py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group"
              >
                {formState === 'idle' && (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {formState === 'submitting' && (
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                )}
                {formState === 'success' && (
                  <>
                    Sent Successfully
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </>
                )}
                {formState === 'error' && (
                  <>
                    Failed to Send
                    <AlertCircle className="w-5 h-5 text-rose-400" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
