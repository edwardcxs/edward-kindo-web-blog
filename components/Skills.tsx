import React from 'react';
import { Cpu, Palette, Layout, Terminal, Code } from 'lucide-react';

const skillCategories = [
  {
    id: 'MOD_A',
    title: 'Design',
    subtitle: 'VISUAL COMMUNICATION',
    icon: Palette,
    skills: [
      { name: 'Brand Identity', level: 95 },
      { name: 'Typography', level: 90 },
      { name: 'Print Design', level: 88 },
      { name: 'Illustration', level: 85 },
      { name: 'Motion Graphics', level: 82 },
    ]
  },
  {
    id: 'MOD_B',
    title: 'UI/UX',
    subtitle: 'INTERACTION ARCHITECTURE',
    icon: Layout,
    skills: [
      { name: 'User Research', level: 92 },
      { name: 'Wireframing', level: 95 },
      { name: 'Prototyping', level: 93 },
      { name: 'Design Systems', level: 90 },
      { name: 'Interaction Design', level: 88 },
    ]
  },
  {
    id: 'MOD_C',
    title: 'Tools',
    subtitle: 'SOFTWARE ARSENAL',
    icon: Cpu,
    skills: [
      { name: 'Figma', level: 98 },
      { name: 'Adobe Creative Cloud', level: 95 },
      { name: 'Sketch', level: 85 },
      { name: 'Blender', level: 75 },
      { name: 'After Effects', level: 80 },
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-16 md:py-24 bg-dark border-t border-white/10 z-20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none reveal"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none reveal"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 reveal">
          <div className="flex items-center gap-3 mb-4">
            <Code size={16} className="text-blue-500" />
            <span className="font-mono text-sm text-blue-400 uppercase tracking-widest">System Capabilities</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none mb-6">
            Technical <br/>
            <span className="text-stroke">Proficiency</span>
          </h2>
          <div className="h-1 w-24 bg-blue-600"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
                key={category.id} 
                className="group border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-blue-500 transition-colors duration-150 reveal"
                style={{ transitionDelay: `${index * 150}ms` }}
            >
              
              {/* Card Header */}
              <div className="flex items-start justify-between mb-8 border-b border-white/10 pb-4">
                <div>
                  <div className="font-mono text-xs text-slate-500 mb-1">{category.id} // {category.subtitle}</div>
                  <h3 className="text-2xl font-bold text-white uppercase group-hover:text-blue-400 transition-colors duration-150">
                    {category.title}
                  </h3>
                </div>
                <category.icon className="text-white opacity-20 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-150" size={32} />
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="relative">
                    
                    {/* Label & Value */}
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-mono text-sm text-slate-300 font-bold uppercase tracking-tight">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-blue-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-3 w-full bg-slate-900 border border-white/10 p-[1px] relative overflow-hidden">
                      {/* Grid background inside bar */}
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4px_100%]"></div>
                      
                      {/* Fill */}
                      <div 
                        className="h-full bg-blue-600 relative transition-all duration-300 ease-out group-hover:bg-white"
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Striped Pattern on Fill */}
                        <div className="absolute inset-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.2)_2px,rgba(0,0,0,0.2)_4px)]"></div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Footer Data Block */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-slate-500 font-mono text-xs reveal">
          <div>
            <p>LAST_UPDATED: {new Date().toLocaleDateString()}</p>
            <p>SYSTEM_STATUS: OPTIMAL</p>
          </div>
          <div className="flex gap-4">
            <span>[ HTML5 ]</span>
            <span>[ CSS3 ]</span>
            <span>[ JS/TS ]</span>
            <span>[ WEBGL ]</span>
          </div>
        </div>

      </div>
    </section>
  );
};