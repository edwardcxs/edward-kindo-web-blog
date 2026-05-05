import React, { useEffect, useState } from 'react';
import { ArrowLeft, User, Calendar, Clock, Share2, Twitter, Linkedin, Copy, ArrowRight, Check } from 'lucide-react';
import { Article as ArticleType, ARTICLES } from '../constants/articles';

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-8">
      <div className="absolute right-2 top-2">
        <button 
          onClick={handleCopy}
          className="p-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors focus:outline-none"
          title="Copy code"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="bg-slate-900 text-slate-50 p-4 pt-12 rounded-lg overflow-x-auto font-mono text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

interface ArticleProps {
  article: ArticleType;
  onBack: () => void;
  onSelectArticle: (articleId: string) => void;
}

export const Article: React.FC<ArticleProps> = ({ article, onBack, onSelectArticle }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article.id]);

  // Filter out the current article and show all related articles by category
  let moreArticles = ARTICLES.filter(a => a.id !== article.id && a.category === article.category);
  
  // If there are no related articles, fallback to showing all other articles
  if (moreArticles.length === 0) {
    moreArticles = ARTICLES.filter(a => a.id !== article.id);
  }

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
                {(() => {
                    const lines = article.content.split('\n');
                    const elements: React.ReactNode[] = [];
                    let inCodeBlock = false;
                    let currentCodeBlock = '';
                    
                    lines.forEach((line, i) => {
                        if (line.trim().startsWith('```')) {
                            if (inCodeBlock) {
                                currentCodeBlock = currentCodeBlock.replace(/\n$/, '');
                                elements.push(<CodeBlock key={`code-${i}`} code={currentCodeBlock} />);
                                inCodeBlock = false;
                                currentCodeBlock = '';
                            } else {
                                inCodeBlock = true;
                            }
                            return;
                        }

                        if (inCodeBlock) {
                            currentCodeBlock += line + '\n';
                            return;
                        }

                        if (line.trim().startsWith('## ')) {
                            elements.push(<h2 key={i} className="mt-12 mb-6 text-3xl font-bold text-slate-900">{line.replace('## ', '')}</h2>);
                            return;
                        }
                        if (line.trim().startsWith('### ')) {
                            elements.push(<h3 key={i} className="mt-8 mb-4 text-2xl font-bold text-slate-900">{line.replace('### ', '')}</h3>);
                            return;
                        }
                        if (line.trim().startsWith('* ')) {
                            elements.push(<li key={i} className="text-slate-600 mb-2 list-none flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {line.replace('* ', '')}</li>);
                            return;
                        }

                        // Image handling: ![alt](src)
                        if (line.trim().startsWith('![') && line.includes('](')) {
                            const altMatch = line.match(/!\[(.*?)\]/);
                            const srcMatch = line.match(/\((.*?)\)/);
                            if (altMatch && srcMatch) {
                                elements.push(
                                    <div key={`img-${i}`} className="my-12 aspect-video overflow-hidden bg-slate-100 shadow-xl">
                                        <img 
                                            src={srcMatch[1]} 
                                            alt={altMatch[1]} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                );
                                return;
                            }
                        }

                        if (line.trim() === '') {
                            elements.push(<br key={i} />);
                            return;
                        }
                        elements.push(<p key={i} className="mb-6">{line}</p>);
                    });

                    return elements;
                })()}
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
