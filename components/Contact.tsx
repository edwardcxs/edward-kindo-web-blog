import React, { useRef } from 'react';
import { ArrowRight, Send, Mail, Instagram, Github } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={containerRef} id="contact" className="relative bg-dark pt-16 md:pt-24 pb-24 border-t border-white/10 z-20 overflow-hidden">
        
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Soft Blue Glow moving up */}
            <motion.div 
              style={{ y: y1, opacity }}
              className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 rounded-full blur-[80px]"
            />
            
            {/* Wireframe box moving/rotating */}
            <motion.div 
               style={{ y: y2, rotate }}
               className="absolute top-40 -left-20 w-64 h-64 md:w-96 md:h-96 border border-white/5 opacity-20"
            >
               {/* Internal grid lines for detail */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </motion.div>

            {/* Huge Background Text */}
            <motion.div 
               style={{ x: y1 }}
               className="absolute bottom-0 left-0 text-[15vw] font-bold text-white/[0.01] leading-none select-none"
            >
               CONTACT
            </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header Section */}
            <div className="mb-20">
                <div className="flex items-center gap-2 mb-4 reveal">
                    <Send size={16} className="text-blue-500" />
                    <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Signal_Strength: 100%</span>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold text-white uppercase tracking-tighter leading-[0.85] reveal" style={{ transitionDelay: '100ms' }}>
                        Let's <br/>
                        <span className="text-stroke">Connect</span>
                    </h2>
                    
                    {/* Intro Description */}
                    <div className="max-w-md mb-2 reveal" style={{ transitionDelay: '200ms' }}>
                        <div className="font-mono text-xs text-blue-500 mb-2">// INITIATE_PROTOCOL: COLLABORATION</div>
                        <p className="text-slate-400 font-mono text-sm leading-relaxed border-l border-white/20 pl-4">
                            Have a project in mind? Let's create something exceptional together. I'm always open to discussing new opportunities and creative collaborations.
                        </p>
                    </div>
                </div>

                {/* Availability Status */}
                <div className="mt-12 flex items-center gap-3 reveal" style={{ transitionDelay: '300ms' }}>
                     <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20">
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        <span className="font-mono text-xs text-green-400 uppercase tracking-wide font-bold">
                            Availability: Currently available for freelance projects
                        </span>
                     </div>
                </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-col border-t border-white/10">
                
                {/* Email Item */}
                <a href="mailto:hello@edwardkindo.com" className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-white/10 hover:bg-white/5 transition-all duration-150 px-4 -mx-4 reveal" style={{ transitionDelay: '400ms' }}>
                    <div className="flex flex-col">
                        <span className="font-mono text-xs text-slate-500 group-hover:text-slate-300 uppercase mb-2 group-hover:translate-x-2 transition-transform flex items-center gap-2 duration-150">
                            <Mail size={14} />
                            Email Destination
                        </span>
                        <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-150 break-all sm:break-normal">hello@edwardkindo.com</span>
                    </div>
                    <div className="mt-6 md:mt-0 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-150">
                        <span className="font-mono text-xs uppercase hidden md:block text-slate-300">Send Message</span>
                        <ArrowRight className="w-8 h-8 text-white transform group-hover:-rotate-45 transition-transform duration-150" />
                    </div>
                </a>

                {/* Instagram Item */}
                <a 
                  href="https://www.instagram.com/edward.kindo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-white/10 hover:bg-blue-600 hover:text-white transition-all duration-150 px-4 -mx-4 reveal"
                  style={{ transitionDelay: '500ms' }}
                >
                    <div className="flex flex-col">
                        <span className="font-mono text-xs text-slate-500 group-hover:text-white/80 uppercase mb-2 group-hover:translate-x-2 transition-transform flex items-center gap-2 duration-150">
                            <Instagram size={14} />
                            Instagram
                        </span>
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-150">@edwardkindo</span>
                    </div>
                    <div className="mt-6 md:mt-0 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-150">
                        <span className="font-mono text-xs uppercase hidden md:block">Follow Feed</span>
                        <ArrowRight className="w-8 h-8 transform group-hover:-rotate-45 transition-transform duration-150" />
                    </div>
                </a>

                {/* GitHub Item */}
                <a 
                  href="https://github.com/edwardcxs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-white/10 hover:bg-white/5 transition-all duration-150 px-4 -mx-4 reveal"
                  style={{ transitionDelay: '600ms' }}
                >
                    <div className="flex flex-col">
                        <span className="font-mono text-xs text-slate-500 group-hover:text-white/80 uppercase mb-2 group-hover:translate-x-2 transition-transform flex items-center gap-2 duration-150">
                            <Github size={14} />
                            GitHub
                        </span>
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-150">@edwardkindo</span>
                    </div>
                    <div className="mt-6 md:mt-0 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-150">
                        <span className="font-mono text-xs uppercase hidden md:block">Check Repos</span>
                        <ArrowRight className="w-8 h-8 text-white transform group-hover:-rotate-45 transition-transform duration-150" />
                    </div>
                </a>

            </div>

        </div>
    </section>
  );
};