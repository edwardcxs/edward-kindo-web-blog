import React from 'react';
import { Users, Fingerprint, Facebook, Instagram, Globe } from 'lucide-react';

const team = [
  {
    id: '01',
    name: 'Hey, This is Me',
    role: 'Graphics Designer',
    tags: ['UX/UX Design', 'Web Developer'],
    image: '/images/edward-crop.jpeg',
    socials: {
      website: 'https://www.edwardkindo.in/'
    }
  },
  {
    id: '02',
    name: 'Atish Niketan',
    role: 'Creative Tech',
    tags: ['Web Design', 'Asst. Web Developer'],
    image: '/images/atish niketan.jpeg',
    socials: {
      facebook: 'https://www.facebook.com/atish.toppo.biewo',
      instagram: 'https://www.instagram.com/atty_a30/',
      website: 'https://atishniketan.blogspot.com/'
    }
  }
];

export const Team: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-dark border-t border-white/10 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-2 mb-4">
            <Users size={16} className="text-blue-500" />
            <span className="font-mono text-sm text-blue-400 uppercase tracking-widest">Collaborators</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none">
            Partners in <br /> <span className="text-stroke">Crime</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group relative border border-white/10 bg-white/5 p-6 hover:border-blue-500 transition-all duration-150 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:bg-white/[0.07] reveal"
              style={{ transitionDelay: `${index * 200}ms` }}
            >

              {/* Avatar */}
              <div className="relative w-20 h-20 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors duration-150">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-200"
                />
                {/* Technical overlay lines */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 group-hover:border-blue-500 transition-colors duration-150"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 group-hover:border-blue-500 transition-colors duration-150"></div>
              </div>

              {/* Info */}
              <div className="flex-grow w-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase leading-none group-hover:text-blue-400 transition-colors duration-150">
                    {member.name}
                  </h3>
                  <Fingerprint className="text-slate-600 group-hover:text-blue-500/50 transition-colors duration-150" size={24} />
                </div>

                <div className="font-mono text-xs text-blue-500 uppercase tracking-wider mb-4 border-l border-blue-500/50 pl-3">
                  {member.role}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase border border-white/10 bg-black/20 px-2 py-1 text-slate-400 group-hover:text-slate-300 transition-colors duration-150">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                {member.socials && (
                  <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                    {member.socials.facebook && (
                      <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors duration-150">
                        <Facebook size={16} />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors duration-150">
                        <Instagram size={16} />
                      </a>
                    )}
                    {member.socials.website && (
                      <a href={member.socials.website} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors duration-150">
                        <Globe size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Background ID */}
              <div className="absolute right-4 top-4 font-mono text-4xl font-bold text-white/5 pointer-events-none select-none group-hover:text-blue-500/10 transition-colors duration-150">
                {member.id}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};