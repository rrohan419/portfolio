import React, { useState } from 'react';
import { ExternalLink, Github, Code, Zap, Shield, Globe } from 'lucide-react';
import { projects } from '../mock';

const Projects = ({ isVisible }) => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', 'Mobile', 'Healthcare', 'FinTech', 'Personal', 'Entertainment', 'E-commerce', 'Enterprise'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'bg-green-600 text-white';
      case 'In Development':
        return 'bg-blue-600 text-white';
      case 'Completed':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-zinc-600 text-white';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mobile':
        return <Globe className="text-cyan-400" size={20} />;
      case 'Healthcare':
        return <Shield className="text-green-400" size={20} />;
      case 'FinTech':
        return <Zap className="text-yellow-400" size={20} />;
      case 'Personal':
        return <Code className="text-purple-400" size={20} />;
      case 'Entertainment':
        return <Globe className="text-pink-400" size={20} />;
      case 'E-commerce':
        return <ExternalLink className="text-blue-400" size={20} />;
      case 'Enterprise':
        return <Zap className="text-orange-400" size={20} />;
      default:
        return <Code className="text-cyan-400" size={20} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Showcasing impactful solutions across healthcare, fintech, and enterprise domains
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(project.category)}
                      <span className="text-sm text-zinc-400">{project.category}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-zinc-800 text-cyan-300 rounded text-xs font-medium border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="text-xs text-zinc-400 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1.5 block w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </a>
                    )}
                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-lg text-sm font-medium transition-colors border border-zinc-700 hover:border-zinc-600"
                    >
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;