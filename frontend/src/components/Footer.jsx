import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-zinc-300">
            <span>Built with</span>
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and</span>
              <Code size={16} className="text-cyan-400" />
              <span>by</span>
            </div>
            <span className="font-semibold text-white">Rohan Shrivastava</span>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400">
            <span className="px-3 py-1 bg-zinc-800 rounded-full border border-zinc-700">React</span>
            <span className="px-3 py-1 bg-zinc-800 rounded-full border border-zinc-700">Tailwind CSS</span>
            <span className="px-3 py-1 bg-zinc-800 rounded-full border border-zinc-700">Lucide Icons</span>
          </div>

          {/* Coffee quote */}
          <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
            <Coffee size={16} className="text-amber-400" />
            <span>Powered by countless cups of coffee ☕</span>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm">
              © {currentYear} Rohan Shrivastava. All rights reserved.
            </p>
            <p className="text-zinc-600 text-xs mt-2">
              Designed & Developed with passion in Gaya, Bihar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;