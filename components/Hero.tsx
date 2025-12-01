import React from 'react';
import { Github, Linkedin, ArrowRight, Mail } from 'lucide-react';
import { HERO_CONTENT, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 via-slate-100 to-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 rounded-full border border-blue-100">
          Available for Opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Hi, I'm <span className="text-blue-600">{HERO_CONTENT.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 font-medium mb-4">
          {HERO_CONTENT.title}
        </p>
        
        <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          {HERO_CONTENT.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-200 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            View Projects <ArrowRight size={18} />
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Contact Me
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 text-slate-400 hover:text-[#0077b5] hover:bg-blue-50 rounded-full transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`} 
            className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;