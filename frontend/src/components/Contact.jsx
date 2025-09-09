import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { contact } from '../mock';

const Contact = ({ isVisible }) => {
  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Let's Connect</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-center">
                  I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Whether you have a specific project in mind or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex flex-col items-center gap-4 p-6 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-colors">
                  <Mail className="text-cyan-400" size={32} />
                  <div className="text-center">
                    <h4 className="text-white font-medium mb-2">Email</h4>
                    <a href={`mailto:${contact.email}`} className="text-zinc-300 hover:text-cyan-400 transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-colors">
                  <Phone className="text-cyan-400" size={32} />
                  <div className="text-center">
                    <h4 className="text-white font-medium mb-2">Phone</h4>
                    <a href={`tel:${contact.phone}`} className="text-zinc-300 hover:text-cyan-400 transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-colors">
                  <MapPin className="text-cyan-400" size={32} />
                  <div className="text-center">
                    <h4 className="text-white font-medium mb-2">Location</h4>
                    <span className="text-zinc-300">{contact.location}</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="text-center">
                <h4 className="text-white font-medium mb-6 text-xl">Follow Me</h4>
                <div className="flex justify-center gap-6">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110 group border border-zinc-700 hover:border-cyan-500/50"
                  >
                    <Linkedin size={32} className="text-zinc-400 group-hover:text-cyan-400" />
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110 group border border-zinc-700 hover:border-cyan-500/50"
                  >
                    <Github size={32} className="text-zinc-400 group-hover:text-cyan-400" />
                  </a>
                  <a
                    href={contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110 group border border-zinc-700 hover:border-cyan-500/50"
                  >
                    <ExternalLink size={32} className="text-zinc-400 group-hover:text-cyan-400" />
                  </a>
                </div>
              </div>

              {/* Professional CTA */}
              <div className="text-center bg-gradient-to-r from-zinc-800 to-zinc-700 p-8 rounded-lg border border-zinc-600">
                <h4 className="text-2xl font-semibold text-white mb-4">Ready to Work Together?</h4>
                <p className="text-zinc-300 mb-6">
                  Let's discuss your project requirements and explore how my expertise in Spring Boot, AWS, and full-stack development can bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${contact.email}?subject=Project Discussion`}
                    className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Mail size={20} />
                    Email Me
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-zinc-600 hover:border-zinc-500"
                  >
                    <Linkedin size={20} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;