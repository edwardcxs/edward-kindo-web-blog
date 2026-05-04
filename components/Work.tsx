import React, { useState } from 'react';
import { Folder, GitBranch, Layout, Smartphone, PenTool, Database, Terminal, Github, Code2, Lock, Copy, Check, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Website Development',
    category: 'Web Development',
    tags: ['Figma', 'React', 'Vite'],
    icon: Layout,
    image: '/images/hero.png'
  },
  {
    id: '02',
    title: 'Social Media Post Design',
    category: 'Social Media',
    tags: ['Illustrator', 'Photoshop'],
    icon: Smartphone,
    image: '/images/IMG_3584(1).gif'
  },
  {
    id: '03',
    title: 'Poster Design',
    category: 'Graphics Design',
    tags: ['Illustrator', 'Photoshop'],
    icon: Smartphone,
    image: '/images/dp1.jpg'
  },
  {
    id: '04',
    title: 'App Prototype Design',
    category: 'App Design',
    tags: ['Figma', 'Photoshop'],
    icon: Folder,
    image: '/images/proto.png'
  },
  {
    id: '05',
    title: 'Product Mockup',
    category: 'Product Design',
    tags: ['Illustrator', 'Photoshop'],
    icon: GitBranch,
    image: '/images/Mockup.jpg'
  },
  {
    id: '06',
    title: 'Poster Design',
    category: 'Graphics Design',
    tags: ['Illustrator', 'Photoshop'],
    icon: PenTool,
    image: '/images/workfull/Cover.jpg'
  },
  {
    id: '07',
    title: 'Modern-Brutalism-Webdesign',
    category: 'Open Source',
    tags: ['HTML5', 'Tailwind CSS', 'JS'],
    icon: Github,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    gitUrl: 'https://github.com/edwardcxs/rourkelamusic'
  },
  {
    id: '08',
    title: 'Notion-Style-Theme-Website',
    category: 'Open Source',
    tags: ['HTML5', 'Tailwind CSS', 'JS'],
    icon: Github,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    gitUrl: 'https://github.com/edwardcxs/Noise-Factory'
  }
];

interface WorkProps {
  onViewGallery: () => void;
}

export const Work: React.FC<WorkProps> = ({ onViewGallery }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="work" className="relative py-16 md:py-24 border-t border-white/10 bg-dark z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <Terminal size={16} className="text-blue-500" />
              <span className="font-mono text-sm text-blue-400 uppercase tracking-widest">Directory: /work</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none">
              Selected <br />
              <span className="text-stroke">Projects</span>
            </h2>
          </div>
          <div className="md:text-right max-w-xs relative reveal" style={{ transitionDelay: '200ms' }}>
            <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-blue-500 md:hidden"></div>
            <p className="font-mono text-sm text-slate-400 pl-4 md:pl-0">
              // INDEX OF DEPLOYMENTS<br />
              // STATUS: PRODUCTION_READY
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const isGithub = project.category === 'Open Source';
            // Typescript helper for gitUrl
            const gitUrl = 'gitUrl' in project ? (project.gitUrl as string) : '';

            return (
              <div
                key={project.id}
                className={`group relative flex flex-col h-full hover:-translate-y-2 transition-all duration-200 reveal ${isGithub
                  ? 'md:col-span-2 lg:col-span-3 bg-[#0d1117] border border-slate-700 hover:border-white hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)]'
                  : 'bg-slate-900/40 border border-white/10 hover:border-blue-500 hover:shadow-[8px_8px_0px_0px_rgba(37,99,235,1)]'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >

                {/* Card Header (System Bar) */}
                <div className={`flex items-center justify-between px-4 py-3 border-b transition-colors duration-200 relative z-20 ${isGithub
                  ? 'bg-[#161b22] border-slate-700 group-hover:bg-white group-hover:text-black'
                  : 'bg-white/5 border-white/10 group-hover:bg-blue-500 group-hover:text-white'
                  }`}>
                  <div className="flex items-center gap-3">
                    <project.icon size={16} className={isGithub ? 'text-slate-400 group-hover:text-black' : 'text-slate-400 group-hover:text-white'} />
                    <span className={`font-mono text-xs uppercase ${isGithub ? 'text-slate-400 group-hover:text-black' : 'text-slate-400 group-hover:text-white'}`}>
                      {isGithub ? 'PUBLIC_REPO' : `SYS_FILE_${project.id}`}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  {isGithub ? (
                    <div className="flex items-center gap-2">
                      <Lock size={10} className="text-slate-500 group-hover:text-black hidden group-hover:block" />
                      <span className="w-2 h-2 bg-slate-500 rounded-full group-hover:bg-black transition-colors"></span>
                    </div>
                  ) : (
                    <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
                  )}
                </div>

                {/* Content Wrapper */}
                <div className="flex flex-grow flex-col">

                  {/* Image Container - Only for Non-Github Projects */}
                  {!isGithub && (
                    <div className="relative overflow-hidden h-56 w-full border-b border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-200 ease-out group-hover:scale-105"
                      />
                      {/* Glitch overlay line on hover */}
                      <div className="absolute top-0 left-0 w-full h-[1px] translate-y-[-100%] group-hover:animate-[scan_2s_linear_infinite] bg-blue-500/50"></div>
                    </div>
                  )}

                  {/* Main Content */}
                  <div className={`p-6 md:p-8 flex-grow flex flex-col justify-between relative overflow-hidden ${isGithub ? 'bg-[#0d1117] w-full' : 'bg-dark'
                    }`}>
                    {/* Background Number / Watermark */}
                    <div className={`absolute -right-4 top-0 text-[6rem] font-bold font-mono select-none pointer-events-none transition-colors leading-none ${isGithub
                      ? 'text-white/5 group-hover:text-white/10'
                      : 'text-white/5 group-hover:text-blue-500/5'
                      }`}>
                      {project.id}
                    </div>

                    {/* GitHub Specific Background Decoration */}
                    {isGithub && (
                      <div className="absolute -bottom-8 -right-8 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none transform rotate-12">
                        <Code2 size={140} strokeWidth={1} />
                      </div>
                    )}

                    <div className="relative z-10 mb-8">
                      <div className={`inline-block px-2 py-1 text-[10px] font-mono uppercase tracking-wider mb-4 border ${isGithub
                        ? 'bg-slate-800 text-slate-300 border-slate-700'
                        : 'bg-white/5 text-slate-300 border-white/5'
                        }`}>
                        {project.category}
                      </div>
                      <h3 className={`text-2xl md:text-3xl font-bold uppercase leading-none transition-colors duration-150 ${isGithub ? 'text-white' : 'text-white group-hover:text-blue-400'
                        }`}>
                        {project.title}
                      </h3>

                      {/* Github Description & Link Section */}
                      {isGithub && (
                        <div className="mt-6 max-w-2xl">
                          <p className="text-slate-400 text-sm font-mono mb-6">
                            A robust {project.title.toLowerCase()} accessible via public registry.
                            Open for contributions and forks.
                          </p>

                          {/* Link Box */}
                          <div className="flex items-center gap-2 p-1.5 bg-black/50 border border-slate-700 rounded-md max-w-lg group/link">
                            <div className="flex-grow px-3 py-2 font-mono text-xs text-blue-400 overflow-hidden text-ellipsis whitespace-nowrap">
                              {gitUrl}
                            </div>
                            <div className="flex items-center gap-1 border-l border-slate-700 pl-1">
                              <button
                                onClick={() => handleCopy(gitUrl, project.id)}
                                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                                title="Copy Clone URL"
                              >
                                {copiedId === project.id ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                              </button>
                              <a
                                href={gitUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                                title="View Repository"
                              >
                                <ExternalLink size={16} />
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`text-[10px] uppercase font-bold px-2 py-1 border transition-colors ${isGithub
                          ? 'bg-slate-900 border-slate-700 text-slate-400 group-hover:bg-white group-hover:text-black group-hover:border-white'
                          : 'bg-black/40 border-white/5 text-slate-500'
                          }`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center reveal">
          <button
            onClick={onViewGallery}
            className="w-full md:w-auto px-8 py-4 border border-white/20 text-white font-mono text-sm uppercase hover:bg-blue-600 hover:border-blue-600 hover:shadow-[4px_4px_0px_0px_white] transition-all duration-150 active:translate-y-1 active:shadow-none"
          >
            View Full Archive
          </button>
        </div>

      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-10px); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(224px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};