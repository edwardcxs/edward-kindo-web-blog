import React from 'react';
import { ArrowRight, MoveDownRight, Globe, Layers, Cpu, Asterisk, CornerRightDown, Mail, Instagram, Github } from 'lucide-react';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-dark pt-32 pb-20 lg:py-0">

      {/* --- NEW DECORATIVE ELEMENTS START --- */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">

        {/* Horizontal Glitch Lines */}
        <div className="absolute top-[12%] left-0 w-full h-[1px] bg-blue-500/30 animate-glitch-1"></div>
        <div className="absolute top-[38%] right-0 w-2/3 h-[1px] bg-white/10 animate-glitch-2"></div>
        <div className="absolute bottom-[15%] left-0 w-full h-[1px] bg-blue-400/20 animate-glitch-3"></div>

        {/* Vertical Scanning Line */}
        <div className="absolute top-0 left-[8%] w-[1px] h-full bg-blue-500/5 hidden lg:block"></div>
        <div className="absolute top-0 right-[12%] w-[1px] h-full bg-blue-500/5 hidden lg:block"></div>
        <div className="absolute top-0 left-[0%] w-[1px] h-full bg-blue-500/10 animate-scan-line hidden lg:block"></div>

        {/* Random Artifacts */}
        <div className="absolute top-[25%] right-[5%] text-blue-500/20 font-mono text-[10px] animate-pulse leading-tight hidden sm:block">
          + &nbsp;+ &nbsp;+<br />
          + &nbsp;+ &nbsp;+<br />
          + &nbsp;+ &nbsp;+
        </div>

        <div className="absolute bottom-[20%] left-[8%] w-6 h-6 border border-blue-500/30 rotate-45 animate-[spin_10s_linear_infinite]"></div>

        {/* Flashing Block */}
        <div className="absolute top-[40%] left-[60%] w-32 h-16 bg-blue-500/10 mix-blend-overlay animate-flash-block hidden sm:block"></div>

        {/* Code Snippet */}
        <div className="absolute top-[18%] left-[2%] font-mono text-[9px] text-blue-400/30 -rotate-90 origin-bottom-left whitespace-nowrap hidden lg:block">
          ERR_CONNECTION_RESET // RETRY_003
        </div>

      </div>
      {/* --- NEW DECORATIVE ELEMENTS END --- */}

      {/* Decorative Grid Numbers/Lines */}
      <div className="absolute top-32 right-0 w-1/3 h-[1px] bg-blue-900/50 hidden lg:block reveal" style={{ transitionDelay: '200ms' }}></div>
      <div className="absolute top-40 right-10 font-mono text-xs text-blue-900/80 hidden lg:block reveal" style={{ transitionDelay: '300ms' }}>SYS.01 // VISUAL</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Content (Typography Focused) */}
          <div className="lg:col-span-7 flex flex-col items-start relative mt-0 lg:mt-0">

            {/* Memoji / Avatar */}
            <div className="mb-8 relative reveal">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center overflow-hidden backdrop-blur-sm relative z-10 group">
                <img
                  src="/images/IMG_0045.png"
                  alt="Edward Kindo"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-150"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-blue-500/20 animate-ping"></div>
              <div className="absolute -right-2 -top-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-dark">
                  <span className="text-[10px] font-bold">👋</span>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mb-6 flex items-center gap-3 reveal" style={{ transitionDelay: '100ms' }}>
              <span className="w-2 h-2 bg-blue-500 animate-pulse"></span>
              <span className="font-mono text-[10px] md:text-xs text-blue-400 uppercase tracking-[0.2em]">Based in Digital Space</span>
            </div>

            {/* Huge Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter text-white uppercase mb-8 reveal" style={{ transitionDelay: '200ms' }}>
              Hi, I am<br />
              <span className="text-blue-500">Edward</span> <br />
              <span className="text-stroke">Kindo</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-12 w-full border-t border-white/10 pt-8 mt-4 reveal" style={{ transitionDelay: '300ms' }}>
              <p className="font-mono text-xs md:text-sm text-slate-400 max-w-xs leading-relaxed">
                // EDWARD KINDO<br />
                UI/UX / GRAPHICS / WEB<br />
                CRAFTING CHAOS INTO ORDER.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onNavigate && onNavigate('work')}
                  className="group relative px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wide overflow-hidden hover:bg-blue-500 hover:text-white transition-colors duration-150 flex justify-center"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Portfolio <ArrowRight size={16} />
                  </span>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-black group-hover:bg-white transition-colors duration-150"></div>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 reveal" style={{ transitionDelay: '400ms' }}>
              <a href="mailto:eddykindo@gmail.com" className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-200">
                <Mail size={18} />
              </a>

              <a href="https://github.com/edwardcxs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-200">
                <Github size={18} />
              </a>
              <span className="h-[1px] w-12 bg-white/10 ml-2"></span>
              <span className="font-mono text-[10px] text-slate-500 uppercase">Follow Me</span>
            </div>

          </div>

          {/* Right Visuals (Deconstructed / Anti-Design) */}
          <div className="lg:col-span-5 relative h-[400px] lg:h-[500px] w-full mt-12 lg:mt-0 hidden md:block">

            {/* Spinning Element */}
            <div className="absolute -top-10 -right-10 opacity-20 animate-[spin_10s_linear_infinite] reveal" style={{ transitionDelay: '400ms' }}>
              <Asterisk size={200} className="text-blue-500" />
            </div>

            {/* Floating Card 1: Brutalist Image Container */}
            <div className="absolute top-0 right-0 lg:right-4 w-56 lg:w-64 h-72 lg:h-80 border border-white/20 bg-dark/50 backdrop-blur-sm z-10 hover:border-blue-500 transition-colors duration-150 reveal" style={{ transitionDelay: '500ms' }}>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-transparent"></div>
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Cpu className="text-white w-8 h-8" />
                  <span className="font-mono text-[10px] text-slate-500">01</span>
                </div>
                <div className="font-mono text-xs text-slate-400">
                  SYSTEM<br />OPTIMIZED
                </div>
              </div>
              {/* Accent Corners */}
              <div className="absolute -top-[1px] -left-[1px] w-2 h-2 bg-white"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 bg-blue-500"></div>
            </div>

            {/* Floating Card 2: Offset Text Block */}
            <div className="absolute top-40 left-0 lg:-left-12 w-56 lg:w-64 p-6 bg-blue-600 text-white z-20 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] reveal" style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
                <Globe size={16} />
                <span className="font-mono text-xs uppercase">Web Experiences</span>
              </div>
              <p className="text-xl lg:text-2xl font-bold leading-none mb-2">Modern.</p>
              <p className="text-xl lg:text-2xl font-bold leading-none mb-2 opacity-70">Functional.</p>
              <p className="text-xl lg:text-2xl font-bold leading-none opacity-40">Timeless.</p>

              <div className="absolute -right-3 -bottom-3 w-6 h-6 bg-white flex items-center justify-center">
                <CornerRightDown size={14} className="text-black" />
              </div>
            </div>

            {/* Floating Card 3: Raw UI Element */}
            <div className="absolute bottom-10 right-10 lg:right-0 bg-dark border border-slate-700 p-4 w-48 z-30 flex items-center gap-3 reveal" style={{ transitionDelay: '700ms' }}>
              <div className="w-10 h-10 bg-slate-800 flex items-center justify-center">
                <Layers size={20} className="text-blue-400" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Projects</div>
                <div className="text-xl font-bold text-white">120+</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Footer */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden opacity-30 pointer-events-none border-y border-white/5 py-2">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex items-center gap-8">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-2xl md:text-4xl font-bold text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>UI/UX DESIGN</span>
              <Asterisk size={16} className="text-blue-500 md:w-6 md:h-6" />
              <span className="text-2xl md:text-4xl font-bold text-white">WEB DEVELOPMENT</span>
              <Asterisk size={16} className="text-blue-500 md:w-6 md:h-6" />
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes glitch-1 {
           0%, 100% { opacity: 0; transform: scaleX(0); transform-origin: left; }
           10% { opacity: 1; transform: scaleX(0.5); }
           11% { opacity: 0; transform: scaleX(0.5); }
           20% { opacity: 1; transform: scaleX(1); }
           22% { opacity: 0; transform: scaleX(1); }
           55% { opacity: 0.5; transform: scaleX(0.2); transform-origin: right; }
           56% { opacity: 0; }
        }
        @keyframes glitch-2 {
           0%, 100% { opacity: 0; width: 0; }
           40% { opacity: 0; width: 0; }
           41% { opacity: 0.8; width: 80%; }
           42% { opacity: 0; width: 0; }
           70% { opacity: 0.5; width: 20%; right: 10%; }
           71% { opacity: 0; }
        }
        @keyframes glitch-3 {
           0% { opacity: 0; transform: translateX(-10%); }
           15% { opacity: 1; transform: translateX(10%); }
           16% { opacity: 0; }
           80% { opacity: 1; transform: translateX(-20%); width: 10%; }
           81% { opacity: 0; }
        }
        @keyframes scan-line {
           0% { left: -10%; opacity: 0; }
           20% { opacity: 1; }
           80% { opacity: 1; }
           100% { left: 110%; opacity: 0; }
        }
        @keyframes flash-block {
           0%, 92% { opacity: 0; }
           93% { opacity: 0.8; transform: translate(5px, 5px); }
           94% { opacity: 0; }
           96% { opacity: 0.8; transform: translate(-5px, -5px); }
           97% { opacity: 0; }
        }
        .animate-glitch-1 { animation: glitch-1 3.5s infinite linear; }
        .animate-glitch-2 { animation: glitch-2 4.2s infinite linear; }
        .animate-glitch-3 { animation: glitch-3 5s infinite linear; }
        .animate-scan-line { animation: scan-line 8s infinite linear; }
        .animate-flash-block { animation: flash-block 6s infinite steps(1); }
      `}</style>

    </section>
  );
};