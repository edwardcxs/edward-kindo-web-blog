import React from 'react';
import { Search, ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { ARTICLES, Article } from '../constants/articles';

interface BlogProps {
  onSelectArticle: (articleId: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ onSelectArticle }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredArticles = ARTICLES.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredArticle = filteredArticles[0];
  const otherArticles = filteredArticles.slice(1);

  return (
    <section className="min-h-screen pt-32 pb-24 bg-white text-slate-900 relative z-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-blue-600 uppercase tracking-widest mb-4 block">Archive & Thoughts</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 uppercase leading-[0.9]">
                Insights <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #cbd5e1' }}>& Stories</span>
              </h1>
              <p className="mt-8 text-slate-500 text-lg max-w-md leading-relaxed mb-10">
                Exploring the intersection of aesthetic design, code architecture, and digital product strategy.
              </p>

              <div className="w-full md:w-80">
                <div className="relative group">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="text"
                    placeholder="SEARCH_LOGS..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-600 focus:outline-none font-mono text-sm uppercase transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Right Content: Featured Article */}
            {featuredArticle && (
              <div
                className="group cursor-pointer"
                onClick={() => onSelectArticle(featuredArticle.id)}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-8 ring-1 ring-slate-200 group-hover:shadow-3xl transition-all duration-700">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-black text-white font-mono text-xs uppercase font-bold tracking-wider">
                      LATEST_ENTRY
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 uppercase tracking-widest">
                    <span className="text-blue-600 font-bold">{featuredArticle.category}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>{featuredArticle.date}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-slate-500 text-lg leading-relaxed line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-xs font-mono uppercase font-bold tracking-[0.2em] pt-4 group-hover:text-blue-600 transition-colors">
                    <span>EXPLORE_ARTICLE</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>


        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {otherArticles.length > 0 ? (
            otherArticles.map((article, index) => (
              <article
                key={article.id}
                className="group flex flex-col cursor-pointer"
                onClick={() => onSelectArticle(article.id)}
                style={{ animation: `fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards ${index * 0.1}s`, opacity: 0 }}
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100 mb-6 group-hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-black font-mono text-[10px] uppercase font-bold border border-slate-200">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono uppercase font-bold tracking-widest group-hover:text-blue-600 transition-colors">
                  <span>READ_FULL_LOG</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))
          ) : !featuredArticle && (
            <div className="col-span-full py-24 text-center">
              <p className="font-mono text-slate-400 uppercase tracking-widest">NO_LOGS_FOUND_MATCHING_YOUR_QUERY</p>
            </div>
          )}
        </div>

        {/* Pagination placeholder */}
        {otherArticles.length > 0 && (
          <div className="mt-24 pt-12 border-t border-slate-100 flex justify-center items-center gap-4">
            <button className="px-6 py-2 border border-slate-200 text-slate-400 font-mono text-xs uppercase hover:bg-slate-50 disabled:opacity-30" disabled>PREV</button>
            <div className="flex items-center gap-2 font-mono text-sm text-slate-900">
              <span className="w-8 h-8 flex items-center justify-center bg-slate-900 text-white">01</span>
              <span className="w-8 h-8 flex items-center justify-center text-slate-400">02</span>
              <span className="w-8 h-8 flex items-center justify-center text-slate-400">03</span>
            </div>
            <button className="px-6 py-2 border border-slate-200 text-slate-900 font-mono text-xs uppercase hover:bg-slate-50">NEXT</button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
