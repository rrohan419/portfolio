import React from 'react';
import { ChevronDown, MapPin, Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = ({ isVisible }) => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-zinc-300 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-cyan-400" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-cyan-400" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="text-zinc-400 group-hover:text-cyan-400" />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="text-zinc-400 group-hover:text-cyan-400" />
            </a>
            <a 
              href={personalInfo.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <ExternalLink size={24} className="text-zinc-400 group-hover:text-cyan-400" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Let's Connect
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;