import React, { useState, useEffect } from 'react';
import { Menu, X, Plus } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  isLight?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, isLight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', id: 'home' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkId: string) => {
    e.preventDefault();
    if (onNavigate) {
       onNavigate(linkId);
       setIsOpen(false);
    }
  };

  const navBgClass = scrolled 
    ? 'bg-dark/90 backdrop-blur-sm border-b border-white/10 py-3' 
    : isLight 
      ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' 
      : 'bg-transparent py-6';

  const textColorClass = (scrolled || !isLight) ? 'text-white' : 'text-slate-900';
  const linkColorClass = (scrolled || !isLight) ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900';
  const logoColorClass = (scrolled || !isLight) ? 'text-white' : 'text-slate-900';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
             className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
             onClick={() => onNavigate && onNavigate('home')}
          >
            <div className="relative">
              <div className="w-8 h-8 border border-blue-500 bg-blue-500/10 flex items-center justify-center font-mono text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-all duration-150">
                E
              </div>
              <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${scrolled || !isLight ? 'bg-white' : 'bg-slate-900'}`}></div>
            </div>
            <span className={`font-bold text-xl tracking-tight group-hover:tracking-wide transition-all duration-150 ${logoColorClass}`}>
              Edward<span className="font-mono text-blue-500">_Kindo</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`relative text-sm font-mono uppercase tracking-wider px-4 py-2 transition-colors duration-100 group overflow-hidden ${linkColorClass}`}
                >
                  <span className="relative z-10">
                    <span className="text-blue-500 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">/</span>
                    {link.name}
                  </span>
                  {/* Brutalist hover effect */}
                  <div className="absolute inset-0 bg-blue-600/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150 ease-out"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Connect Button (Desktop) */}
          <div className="hidden md:block">
             <a 
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className={`flex items-center gap-2 px-6 py-2 font-mono text-xs uppercase font-bold transition-colors duration-150 border border-transparent hover:border-blue-400 ${
                  scrolled || !isLight 
                  ? 'bg-white text-black hover:bg-blue-500 hover:text-white' 
                  : 'bg-slate-900 text-white hover:bg-blue-600'
                }`}
             >
                <Plus size={14} />
                Get in touch
             </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 focus:outline-none transition-colors duration-150 ${linkColorClass}`}
            >
              {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden border-b border-white/10 ${isOpen ? 'block' : 'hidden'} ${scrolled || !isLight ? 'bg-dark' : 'bg-white'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`font-mono uppercase block px-3 py-4 text-lg border-l-2 border-transparent hover:border-blue-500 transition-colors duration-150 ${
                scrolled || !isLight 
                ? 'text-slate-300 hover:bg-white/5 hover:text-white' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};