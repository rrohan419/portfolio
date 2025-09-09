import React from 'react';
import { Code, Database, Cloud, Settings, Zap, Globe } from 'lucide-react';
import { skills } from '../mock';

const Skills = ({ isVisible }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-cyan-400" size={24} />,
      skills: skills["Programming Languages"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Backend Frameworks",
      icon: <Settings className="text-green-400" size={24} />,
      skills: skills["Backend Frameworks"],
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="text-purple-400" size={24} />,
      skills: skills["Frontend Technologies"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Databases",
      icon: <Database className="text-orange-400" size={24} />,
      skills: skills["Databases"],
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Cloud & AWS",
      icon: <Cloud className="text-blue-400" size={24} />,
      skills: skills["Cloud & AWS"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Tools & Technologies",
      icon: <Zap className="text-yellow-400" size={24} />,
      skills: skills["Tools & Technologies"],
      color: "from-yellow-600 to-amber-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Expertise across the full technology stack with focus on scalable solutions
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:scale-105 ${
                  isVisible ? `animate-fade-in-up` : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill} className="group">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-zinc-300 group-hover:text-white transition-colors">
                          {skill}
                        </span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ${
                            isVisible ? 'animate-skill-bar' : 'w-0'
                          }`}
                          style={{ 
                            animationDelay: `${(index * 100) + (skillIndex * 100)}ms`,
                            width: isVisible ? `${85 + Math.random() * 15}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Integration services highlight */}
          <div className="mt-12 bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 rounded-lg border border-zinc-700">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Integration Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills["Integration Services"].map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 bg-zinc-800 text-cyan-300 rounded-full text-sm font-medium border border-zinc-600 hover:border-cyan-500 transition-colors"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;