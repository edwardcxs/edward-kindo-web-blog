import React, { useEffect, useState } from 'react';
import { ArrowLeft, Github, Star, GitFork, Copy, Check, ExternalLink } from 'lucide-react';

interface WorkGalleryProps {
    onBack: () => void;
}

const galleryItems = [
    { id: 1, title: '', category: 'UI/UX', image: '/images/workfull/IMG_3467.JPG' },
    { id: 2, title: '', category: 'Web Design', image: '/images/workfull/IMG_6878.JPG' },
    { id: 3, title: '', category: 'Photography', image: '/images/workfull/IMG_6808.JPEG' },
    { id: 4, title: '', category: 'Photography', image: '/images/workfull/IMG_8073.JPG' },
    { id: 5, title: '', category: 'Photography', image: '/images/workfull/hello.png' },
    { id: 6, title: '', category: 'Web Design', image: '/images/workfull/food.jpg' },
    { id: 7, title: '', category: 'Web Design', image: '/images/workfull/post.png' },
    { id: 8, title: '', category: 'Graphics Design', image: '/images/workfull/design1.png' },
    { id: 9, title: '', category: 'Graphics Design', image: '/images/workfull/mackd.png' },
    { id: 11, title: '', category: 'Graphics Design', image: '/images/workfull/Cover.jpg' },
    { id: 13, title: '', category: 'Photography', image: '/images/IMG_3584(1).gif' },
    { id: 14, title: '', category: 'Graphics Design', image: '/images/workfull/New Design(1).gif' },
    { id: 15, title: '', category: 'Graphics Design', image: '/images/workfull/rework.jpg' },
    { id: 16, title: '', category: 'Graphics Design', image: '/images/workfull/ad1.jpg' },
    { id: 17, title: '', category: 'Graphics Design', image: '/images/workfull/food.jpg' },
    { id: 18, title: '', category: 'Graphics Design', image: '/images/workfull/journey1.jpg' },
    { id: 19, title: '', category: 'Photography', image: '/images/workfull/IMG_7275.JPG' },
    { id: 20, title: '', category: 'Photography', image: '/images/workfull/pack.jpg' },
    { id: 21, title: '', category: 'Photography', image: '/images/workfull/noise.gif' },
    { id: 22, title: '', category: 'Photography', image: '/images/workfull/future.gif' },
    { id: 23, title: '', category: 'Photography', image: '/images/workfull/figma.gif' },
    { id: 24, title: '', category: 'Photography', image: '/images/workfull/green.gif' },
    { id: 25, title: '', category: 'Photography', image: '/images/workfull/green1.png' },
    { id: 26, title: '', category: 'Photography', image: '/images/workfull/green2.png' },
];

const githubProjects = [
    {
        id: 101,
        name: 'rourkela-music-webdesign',
        description: 'A lightweight, modular React component library focused on modern aesthetics and brutalist design patterns.',
        language: 'HTML5 | Tailwind CSS | JS',
        stars: 124,
        forks: 35,
        url: 'https://github.com/edwardcxs/rourkelamusic',
        image: '/images/workfull/git/rm.gif'
    },
    {
        id: 102,
        name: 'cafe-static-mobile-website',
        description: 'High-performance portfolio template featuring Framer Motion, Tailwind CSS and interactive WebGL elements.',
        language: 'HTML5 | Tailwind CSS | JS',
        stars: 89,
        forks: 12,
        url: 'https://github.com/edwardcxs/manna',
        image: '/images/workfull/git/manna.png'
    },
    {
        id: 103,
        name: 'noise-factory-website',
        description: 'Curated collection of WebGL shaders and effects for creative coding and immersive web experiences.',
        language: 'HTML5 | Tailwind CSS | JS',
        stars: 256,
        forks: 67,
        url: 'https://github.com/edwardcxs/Noise-Factory',
        image: '/images/workfull/git/noise.gif'
    },
    {
        id: 104,
        name: 'coming-soon-webpage-countdown',
        description: 'Production-ready Node.js/Express boilerplate with authenticaton, swagger documentation and Docker support.',
        language: 'TypeScript | React | Vite',
        stars: 45,
        forks: 8,
        url: 'https://github.com/edwardcxs/coming-soon-hero',
        image: '/images/workfull/git/coming.gif'
    }
];

export const WorkGallery: React.FC<WorkGalleryProps> = ({ onBack }) => {
    const [copiedId, setCopiedId] = useState<number | null>(null);

    useEffect(() => {
        // Small timeout to ensure browser's native scroll restoration doesn't override us
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const copyToClipboard = (text: string, id: number) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        });
    };

    return (
        <section className="min-h-screen pt-28 pb-24 bg-dark relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navigation / Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 reveal">
                    <div>
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 group transition-colors duration-150"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-150" />
                            <span className="font-mono uppercase text-sm tracking-wider">Back to Archives</span>
                        </button>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-none">
                            All Visual <span className="text-stroke">Works</span>
                        </h1>
                    </div>
                    <div className="font-mono text-xs text-slate-500 text-right hidden md:block">
                // FULL_DATABASE_ACCESS<br />
                // MODE: VISUAL_ONLY
                    </div>
                </div>

                {/* Uniform Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal" style={{ transitionDelay: '200ms' }}>
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden border border-white/10 bg-white/5 h-[320px] sm:h-[400px] animate-[fadeIn_0.5s_ease-out]"
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-out"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex flex-col justify-end p-6 md:p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-150">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-mono text-xs text-blue-500 block">PROJECT_ID_{item.id < 10 ? `0${item.id}` : item.id}</span>
                                        <span className="font-mono text-[10px] text-slate-400 border border-white/20 px-2 py-0.5 rounded-full uppercase">{item.category}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">{item.title}</h3>
                                </div>
                            </div>

                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>
                        </div>
                    ))}
                </div>

                {/* GitHub Projects Section */}
                <div className="mt-24 mb-12 reveal" style={{ transitionDelay: '300ms' }}>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/5 border border-white/10 rounded-full">
                                <Github size={24} className="text-white" />
                            </div>
                            <div>
                                <div className="font-mono text-xs text-blue-500 mb-1">// CODE_REPOSITORY</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Open Source</h2>
                            </div>
                        </div>
                        <p className="font-mono text-xs text-slate-500 max-w-md text-right hidden md:block">
                            Explore my contributions to open source. Copy the link to clone or star the repository.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {githubProjects.map((repo, index) => (
                            <div
                                key={repo.id}
                                className="group border border-white/10 bg-white/5 hover:border-blue-500 transition-all duration-200 flex flex-col relative overflow-hidden"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Header */}
                                <div className="h-48 w-full overflow-hidden relative border-b border-white/10">
                                    <img
                                        src={repo.image}
                                        alt={repo.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/40 transition-colors duration-300"></div>

                                    {/* Language Tag Badge over Image */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2">
                                        <div className="p-2 bg-black/60 backdrop-blur-md rounded-md border border-white/10 text-white">
                                            <Github size={16} />
                                        </div>
                                    </div>

                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white/[0.02]">

                                    <div className="flex justify-between items-start mb-4">
                                        <div className="font-mono text-xs text-blue-400 mb-1">Public Archive</div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => copyToClipboard(repo.url, repo.id)}
                                                className={`p-2 rounded transition-all duration-200 border border-transparent ${copiedId === repo.id
                                                    ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                                    : 'text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10'
                                                    }`}
                                                title="Copy Repo Link"
                                            >
                                                {copiedId === repo.id ? <Check size={18} /> : <Copy size={18} />}
                                            </button>
                                            <a
                                                href={repo.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 rounded transition-all duration-200"
                                                title="View on GitHub"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mb-6 flex-grow">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors font-mono">{repo.name}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{repo.description}</p>
                                    </div>

                                    {/* Footer Stats */}
                                    <div className="flex items-center gap-6 text-xs font-mono text-slate-500 pt-4 border-t border-white/10 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                            <span className="text-slate-300">{repo.language}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-default">
                                            <Star size={14} />
                                            {repo.stars}
                                        </div>
                                        <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors cursor-default">
                                            <GitFork size={14} />
                                            {repo.forks}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Accent */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer for Gallery */}
                <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center font-mono text-xs text-slate-500 reveal">
                    <span>END_OF_RESULTS</span>
                    <span>[ TOTAL ITEMS: {galleryItems.length + githubProjects.length} ]</span>
                </div>

            </div>
            <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
            .reveal {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        }
      `}</style>
        </section>
    );
};