import React from 'react';
import { Eye, Zap, Heart, User, ScanFace } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-dark border-t border-white/10 overflow-hidden z-20">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-8 md:left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 pointer-events-none hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
             <div className="flex-shrink-0 md:w-1/2 reveal">
                  <div className="flex items-center gap-2 mb-2">
                       <User size={16} className="text-blue-500" />
                       <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Sys_ID: User_Profile</span>
                  </div>
                  <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.9]">
                    About <br/> <span className="text-stroke">Me</span>
                  </h2>
             </div>
             
             {/* Intro Statement */}
             <div className="pt-2 md:w-1/2 reveal" style={{ transitionDelay: '200ms' }}>
                 <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed border-l-2 border-blue-500 pl-6">
                    I'm a <span className="text-white font-bold">Graphics Designer</span> and <span className="text-white font-bold">UI/UX specialist</span> with over 5 years of experience creating compelling visual narratives and user-centered digital experiences that drive results and inspire action.
                 </p>
             </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
           
           {/* Left Col: Detailed Text */}
           <div className="space-y-8 font-mono text-sm text-slate-400 leading-relaxed relative reveal" style={{ transitionDelay: '300ms' }}>
              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-blue-500"></div>

              <div className="p-6 md:p-8 border border-white/10 bg-white/5 hover:border-blue-500 transition-colors duration-150 relative group">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-2 py-1 font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    Read_Only
                  </div>
                  <p className="mb-6">
                     My approach combines bold aesthetics with functional design, ensuring every project not only looks exceptional but delivers measurable results for users and businesses alike.
                  </p>
                  <p>
                     From crafting memorable brand identities to designing intuitive digital interfaces, I believe in the power of design to transform experiences and create lasting connections between brands and their audiences.
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-blue-500 text-xs uppercase font-bold pt-4 border-t border-white/10">
                      <div className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></div>
                      <span>Status: Available for Hire</span>
                  </div>
              </div>
           </div>

           {/* Right Col: 3 Pillars */}
           <div className="space-y-4">
               {/* Card 1 */}
               <div className="group border border-white/10 p-6 bg-dark hover:border-blue-500 transition-all duration-150 relative overflow-hidden reveal" style={{ transitionDelay: '400ms' }}>
                   <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity duration-150">
                      <Eye size={48} className="md:w-16 md:h-16 group-hover:text-blue-500 transition-colors duration-150" />
                   </div>
                   <div className="flex items-center gap-4 mb-2 relative z-10">
                       <Eye size={24} className="text-blue-500" />
                       <h3 className="text-lg md:text-xl font-bold uppercase text-white group-hover:text-blue-400 transition-colors duration-150">Creative Vision</h3>
                   </div>
                   <p className="font-mono text-xs text-slate-400 group-hover:text-slate-300 uppercase tracking-wider relative z-10 transition-colors duration-150">
                      Blending aesthetics with purpose
                   </p>
               </div>
               
               {/* Card 2 */}
               <div className="group border border-white/10 p-6 bg-dark hover:border-blue-500 transition-all duration-150 relative overflow-hidden reveal" style={{ transitionDelay: '500ms' }}>
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity duration-150">
                      <Zap size={48} className="md:w-16 md:h-16 group-hover:text-blue-500 transition-colors duration-150" />
                   </div>
                   <div className="flex items-center gap-4 mb-2 relative z-10">
                       <Zap size={24} className="text-blue-500" />
                       <h3 className="text-lg md:text-xl font-bold uppercase text-white group-hover:text-blue-400 transition-colors duration-150">Technical Excellence</h3>
                   </div>
                   <p className="font-mono text-xs text-slate-400 group-hover:text-slate-300 uppercase tracking-wider relative z-10 transition-colors duration-150">
                      Modern tools, timeless design
                   </p>
               </div>

               {/* Card 3 */}
               <div className="group border border-white/10 p-6 bg-dark hover:border-blue-500 transition-all duration-150 relative overflow-hidden reveal" style={{ transitionDelay: '600ms' }}>
                   <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity duration-150">
                      <Heart size={48} className="md:w-16 md:h-16 group-hover:text-blue-500 transition-colors duration-150" />
                   </div>
                   <div className="flex items-center gap-4 mb-2 relative z-10">
                       <Heart size={24} className="text-blue-500" />
                       <h3 className="text-lg md:text-xl font-bold uppercase text-white group-hover:text-blue-400 transition-colors duration-150">User-Centered</h3>
                   </div>
                   <p className="font-mono text-xs text-slate-400 group-hover:text-slate-300 uppercase tracking-wider relative z-10 transition-colors duration-150">
                      People at the heart of every pixel
                   </p>
               </div>
           </div>

        </div>

      </div>
    </section>
  );
};