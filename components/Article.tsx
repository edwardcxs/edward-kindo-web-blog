import React, { useEffect } from 'react';
import { ArrowLeft, User, Calendar, Clock, Share2, Twitter, Linkedin, Copy, ArrowRight } from 'lucide-react';
import { Article as ArticleType, ARTICLES } from '../constants/articles';

interface ArticleProps {
  article: ArticleType;
  onBack: () => void;
  onSelectArticle: (articleId: string) => void;
}

export const Article: React.FC<ArticleProps> = ({ article, onBack, onSelectArticle }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  // Filter out the current article to show "More Articles"
  const moreArticles = ARTICLES.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <article className="min-h-screen pt-32 pb-24 bg-white text-slate-900 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 group transition-colors duration-150"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono uppercase text-xs tracking-widest">Back to Archives</span>
        </button>

        {/* Article Header */}
        <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-600 text-white font-mono text-[10px] uppercase font-bold">
                    {article.category}
                </span>
                <div className="h-[1px] flex-grow bg-slate-100"></div>
                <div className="flex items-center gap-4 text-slate-400">
                    <Share2 size={16} className="cursor-pointer hover:text-blue-600 transition-colors" />
                </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 font-mono uppercase tracking-widest leading-none mb-1">Written By</div>
                        <div className="text-sm font-bold text-slate-900">{article.author}</div>
                    </div>
                </div>

                <div className="flex items-center gap-8 ml-auto">
                    <div>
                        <div className="text-xs text-slate-400 font-mono uppercase tracking-widest leading-none mb-1">Published On</div>
                        <div className="text-sm font-medium text-slate-900">{article.date}</div>
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 font-mono uppercase tracking-widest leading-none mb-1">Time to Read</div>
                        <div className="text-sm font-medium text-slate-900">{article.readTime}</div>
                    </div>
                </div>
            </div>
        </header>

        {/* Feature Image */}
        <div className="aspect-video overflow-hidden bg-slate-100 mb-16 shadow-2xl">
            <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
            />
        </div>

        {/* Article Body */}
        <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-12 mb-24">
            
            {/* Sticky Social Side */}
            <aside className="hidden md:flex flex-col gap-6 sticky top-40 h-fit">
                <div className="text-[10px] font-mono uppercase text-slate-300 tracking-[0.2em] [writing-mode:vertical-lr] mb-4">Share Article</div>
                <button className="p-3 border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all">
                    <Twitter size={18} />
                </button>
                <button className="p-3 border border-slate-100 text-slate-400 hover:text-blue-700 hover:border-blue-200 transition-all">
                    <Linkedin size={18} />
                </button>
                <button className="p-3 border border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-200 transition-all">
                    <Copy size={18} />
                </button>
            </aside>

            {/* Content Area */}
            <div className="prose prose-slate max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-h2:text-3xl prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg">
                {article.content.split('\n').map((line, i) => {
                    if (line.trim().startsWith('## ')) {
                        return <h2 key={i} className="mt-12 mb-6 text-3xl font-bold text-slate-900">{line.replace('## ', '')}</h2>;
                    }
                    if (line.trim().startsWith('### ')) {
                        return <h3 key={i} className="mt-8 mb-4 text-2xl font-bold text-slate-900">{line.replace('### ', '')}</h3>;
                    }
                    if (line.trim().startsWith('* ')) {
                        return <li key={i} className="text-slate-600 mb-2 list-none flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {line.replace('* ', '')}</li>;
                    }
                    if (line.trim() === '') return <br key={i} />;
                    return <p key={i} className="mb-6">{line}</p>;
                })}
            </div>
        </div>

        {/* More Articles Section */}
        <section className="mt-24 pt-12 border-t border-slate-100">
            <div className="flex items-center justify-between mb-12">
              <h4 className="text-sm font-mono text-blue-600 uppercase tracking-widest">Continue Reading</h4>
              <button 
                  onClick={onBack}
                  className="font-mono text-[10px] uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
                >
                  View All Logs
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {moreArticles.map((item) => (
                 <div 
                  key={item.id} 
                  className="group cursor-pointer"
                  onClick={() => onSelectArticle(item.id)}
                 >
                    <div className="aspect-video overflow-hidden bg-slate-100 mb-6">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-3">
                      <span>{item.date}</span>
                      <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                      <span>{item.readTime}</span>
                    </div>
                    <h5 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-4 line-clamp-2">
                      {item.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase font-bold tracking-widest text-slate-900 group-hover:text-blue-600 transition-colors">
                      READ_ENTRY <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                 </div>
               ))}
            </div>
        </section>

      </div>
    </article>

  );
};
