import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { About } from './components/About';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WorkGallery } from './components/WorkGallery';
import { VelocityText } from './components/VelocityText';

import { Blog } from './components/Blog';
import { Article } from './components/Article';
import { ARTICLES } from './constants/articles';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'gallery' | 'blog' | 'article'>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    // Special cases
    if (sectionId === 'blog') {
      setView('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'work') {
      setView('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = sectionId === 'home' ? 'home' : sectionId;

    const scrollToTarget = () => {
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (view !== 'home') {
      setView('home');
      // Delay scrolling to allow render
      setTimeout(scrollToTarget, 100);
    } else {
      scrollToTarget();
    }
  };

  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setView('article');
    window.scrollTo(0, 0);
  };

  const selectedArticle = selectedArticleId ? ARTICLES.find(a => a.id === selectedArticleId) : null;

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    // Timeout to ensure DOM is rendered
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [view]);

  return (
    <div className="min-h-screen bg-dark text-slate-50 selection:bg-blue-600 selection:text-white relative">
      {/* Technical Grid Background */}
      <div className="fixed inset-0 z-0 opacity-[0.15] bg-grid-pattern pointer-events-none"></div>
      
      {/* Vignette / Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-dark via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          onNavigate={handleNavigate} 
          isLight={view === 'blog' || view === 'article'} 
        />
        
        <main className="flex-grow flex flex-col">
          {view === 'home' && (
            <>
              <Hero onNavigate={handleNavigate} />
              <About />
              <Services />
              <Work onViewGallery={() => {
                setView('gallery');
                window.scrollTo(0, 0);
              }} />
              <Skills />
              <Team />
              <VelocityText />
              <Contact />
            </>
          )}
          
          {view === 'gallery' && (
            <WorkGallery onBack={() => {
              setView('home');
              window.scrollTo(0, 0);
            }} />
          )}

          {view === 'blog' && (
            <Blog onSelectArticle={handleSelectArticle} />
          )}

          {view === 'article' && selectedArticle && (
            <Article 
              article={selectedArticle} 
              onBack={() => setView('blog')} 
              onSelectArticle={handleSelectArticle}
            />
          )}
        </main>
        
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default App;