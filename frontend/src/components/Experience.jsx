import React, { useState } from 'react';
import { Briefcase, Calendar, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { experience } from '../mock';

const Experience = ({ isVisible }) => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const toggleExperience = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Current Position':
        return 'bg-green-600';
      case 'Previous Role':
        return 'bg-blue-600';
      case 'Training Period':
        return 'bg-purple-600';
      default:
        return 'bg-zinc-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Building scalable solutions and driving technical excellence across diverse projects
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-600 to-cyan-400"></div>

            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                } md:w-1/2`}
              >
                {/* Timeline marker */}
                <div className="absolute left-6 md:left-auto md:right-auto md:top-8 w-4 h-4 bg-cyan-500 rounded-full border-4 border-zinc-900 transform -translate-x-2 md:translate-x-2"></div>

                {/* Experience card */}
                <div className="ml-16 md:ml-0 bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="text-cyan-400" size={20} />
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      </div>
                      <h4 className="text-lg text-cyan-300 font-medium">{exp.company}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="text-zinc-400" size={16} />
                        <span className="text-zinc-400">{exp.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Projects summary */}
                  <div className="mb-4">
                    <p className="text-zinc-300">
                      {exp.projects.length} project{exp.projects.length > 1 ? 's' : ''} delivered with focus on scalable architecture and client satisfaction
                    </p>
                  </div>

                  {/* Toggle button */}
                  <button
                    onClick={() => toggleExperience(exp.id)}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Projects</span>
                    {expandedExperience === exp.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {/* Expanded projects */}
                  {expandedExperience === exp.id && (
                    <div className="mt-6 space-y-6 animate-fade-in">
                      {exp.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="bg-zinc-900 p-5 rounded-lg border border-zinc-600">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="text-lg font-semibold text-white">{project.name}</h5>
                              <div className="flex items-center gap-2 mt-1">
                                <Users className="text-zinc-400" size={14} />
                                <span className="text-sm text-zinc-400">Client: {project.client}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-zinc-300 mb-4">{project.description}</p>
                          
                          <div>
                            <h6 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-1">
                              <Award size={14} />
                              Key Achievements
                            </h6>
                            <ul className="space-y-1">
                              {project.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="text-sm text-zinc-300 flex items-start gap-2">
                                  <span className="text-cyan-400 mt-1.5 block w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;