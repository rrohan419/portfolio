import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink, MessageCircle } from 'lucide-react';
import { contact } from '../mock';
import { useToast } from '../hooks/use-toast';

const Contact = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual implementation)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Whether you have a specific project in mind or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-colors">
                  <Mail className="text-cyan-400 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a href={`mailto:${contact.email}`} className="text-zinc-300 hover:text-cyan-400 transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-colors">
                  <Phone className="text-cyan-400 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <a href={`tel:${contact.phone}`} className="text-zinc-300 hover:text-cyan-400 transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-colors">
                  <MapPin className="text-cyan-400 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <span className="text-zinc-300">{contact.location}</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110 group border border-zinc-700 hover:border-cyan-500/50"
                  >
                    <Linkedin size={24} className="text-zinc-400 group-hover:text-cyan-400" />
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110 group border border-zinc-700 hover:border-cyan-500/50"
                  >
                    <Github size={24} className="text-zinc-400 group-hover:text-cyan-400" />
                  </a>
                  <a
                    href={contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110 group border border-zinc-700 hover:border-cyan-500/50"
                  >
                    <ExternalLink size={24} className="text-zinc-400 group-hover:text-cyan-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="text-cyan-400" size={24} />
                <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-vertical"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-600/50 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-cyan-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;