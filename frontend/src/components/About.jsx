import React from 'react';
import { GraduationCap, Award, Code, Briefcase } from 'lucide-react';
import { aboutMe } from '../mock';

const About = ({ isVisible }) => {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {aboutMe.summary}
              </p>
              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="text-cyan-400" size={24} />
                  <h4 className="text-xl font-semibold text-white">Current Focus</h4>
                </div>
                <p className="text-zinc-300">
                  {aboutMe.currentProject}
                </p>
              </div>
            </div>

            {/* Right column - Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-cyan-400" size={24} />
                  <h4 className="text-xl font-semibold text-white">Education</h4>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium text-cyan-300">{aboutMe.education.degree}</h5>
                  <p className="text-zinc-300">{aboutMe.education.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">{aboutMe.education.year}</span>
                    <span className="text-cyan-400 font-semibold">{aboutMe.education.gpa}</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-cyan-400" size={24} />
                  <h4 className="text-xl font-semibold text-white">Certifications</h4>
                </div>
                {aboutMe.certifications.map((cert, index) => (
                  <div key={index} className="space-y-2">
                    <h5 className="text-lg font-medium text-cyan-300">{cert.name}</h5>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300">{cert.issuer}</span>
                      <span className="text-zinc-400">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 text-center">
                  <div className="text-2xl font-bold text-cyan-400">3+</div>
                  <div className="text-sm text-zinc-400">Years Experience</div>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 text-center">
                  <div className="text-2xl font-bold text-cyan-400">6+</div>
                  <div className="text-sm text-zinc-400">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;