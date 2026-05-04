import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Command } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10 text-slate-400 font-mono text-sm py-12 md:py-20 overflow-hidden z-20">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12 md:mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-bold">E</div>
              <span className="text-xl font-sans font-bold tracking-tight">Edward_Kindo</span>
            </div>
            <p className="max-w-xs mb-8 text-slate-500 leading-relaxed">
              Crafting digital experiences with a focus on raw aesthetics and functional precision.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-xs uppercase tracking-wider text-slate-400">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               System Status: Online
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6 flex items-center gap-2">
              <Command size={14} className="text-blue-500" />
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Work', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase()}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.toLowerCase());
                    }}
                    className="hover:text-blue-500 transition-colors duration-150 uppercase text-xs tracking-wider flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-blue-500">&gt;</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6">Network</h4>
            <ul className="space-y-4">
              {[
                { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/edward.kindo/' },
                { name: 'Twitter', icon: Twitter, href: '#' },
                { name: 'LinkedIn', icon: Linkedin, href: '#' },
                { name: 'GitHub', icon: Github, href: '#' },
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-150 flex items-center gap-3 group"
                  >
                    <social.icon size={16} className="group-hover:text-blue-500 transition-colors duration-150" />
                    <span className="uppercase text-xs tracking-wider">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-slate-600 uppercase text-center md:text-left">
            <p>&copy; {currentYear} Edward Kindo.</p>
            <span className="hidden md:inline text-slate-800">|</span>
            <p>All Rights Reserved.</p>
            <span className="hidden md:inline text-slate-800">|</span>
            <button 
              onClick={() => onNavigate('privacy')}
              className="hover:text-blue-500 transition-colors duration-150"
            >
              Privacy Policy
            </button>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase hover:text-white transition-colors duration-150 px-4 py-2 border border-transparent hover:border-white/10 hover:bg-white/5"
          >
            [ Return to Top ]
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-150" />
          </button>
        </div>

      </div>
    </footer>
  );
};