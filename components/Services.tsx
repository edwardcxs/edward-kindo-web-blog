import React from 'react';
import { PenTool, Smartphone, Globe, ArrowUpRight, Layers } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Graphics Design',
      description: 'Visual storytelling through compelling imagery and brand assets.',
      icon: PenTool,
      items: ['Poster Design', 'Social Media Posts', 'Book Cover Design', 'Product Packaging', 'Brand Identity']
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive and engaging digital product experiences.',
      icon: Smartphone,
      items: ['App Prototyping', 'UI Design', 'Wireframing', 'User Research', 'Design Systems']
    },
    {
      title: 'Web Design',
      description: 'Building scalable, high-performance web solutions.',
      icon: Globe,
      items: ['Complete Web Development', 'Website Management', 'Scaling & Performance', 'CMS Integration', 'eCommerce']
    }
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-16 md:py-24 bg-dark border-t border-white/10 z-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 md:mb-20 reveal">
            <div className="flex items-center gap-3 mb-4">
               <Layers size={16} className="text-blue-500" />
               <span className="font-mono text-sm text-blue-400 uppercase tracking-widest">Our Expertise</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none">
               Service <br/>
               <span className="text-stroke">Offerings</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="group border border-white/10 bg-white/5 p-6 md:p-8 hover:bg-white/10 transition-all duration-150 flex flex-col h-full reveal hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(37,99,235,0.5)]"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                   {/* Icon Header */}
                   <div className="mb-6 flex justify-between items-start">
                      <div className="w-14 h-14 bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-150">
                         <service.icon size={28} />
                      </div>
                      <span className="font-mono text-xs text-slate-500 border border-white/10 px-2 py-1">0{index + 1}</span>
                   </div>

                   <h3 className="text-2xl font-bold text-white uppercase mb-4 group-hover:text-blue-400 transition-colors duration-150">
                      {service.title}
                   </h3>
                   <p className="text-slate-400 text-sm mb-8 leading-relaxed font-mono">
                      {service.description}
                   </p>

                   {/* List */}
                   <ul className="space-y-3 mt-auto mb-8">
                      {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-sm text-slate-300 group-hover:text-white transition-colors duration-100">
                             <div className="w-1.5 h-1.5 bg-blue-500"></div>
                             {item}
                          </li>
                      ))}
                   </ul>

                   {/* Action */}
                   <a 
                      href="#contact"
                      onClick={scrollToContact}
                      className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-500 group-hover:text-blue-400 transition-colors duration-150 cursor-pointer"
                   >
                      <span>Inquire Now</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-150" />
                   </a>
                   
                   {/* Decorative Corner */}
                   <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-blue-500/0 group-hover:border-r-blue-500 transition-all duration-150"></div>
                </div>
            ))}
          </div>
       </div>
    </section>
  );
};