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
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ARTICLES } from './constants/articles';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'gallery' | 'blog' | 'article' | 'privacy'>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/blog') {
        setView('blog');
      } else if (path.startsWith('/blog/')) {
        const id = path.split('/')[2];
        if (id) {
          setSelectedArticleId(id);
          setView('article');
        } else {
          setView('blog');
        }
      } else if (path === '/privacy') {
        setView('privacy');
      } else if (path === '/gallery') {
        setView('gallery');
      } else {
        setView('home');
        if (window.location.hash) {
          setTimeout(() => {
            const element = document.getElementById(window.location.hash.substring(1));
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    handleLocationChange();

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleNavigate = (sectionId: string) => {
    // Special cases
    if (sectionId === 'blog') {
      window.history.pushState({}, '', '/blog');
      setView('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'privacy') {
      window.history.pushState({}, '', '/privacy');
      setView('privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'work') {
      window.history.pushState({}, '', '/gallery');
      setView('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = sectionId === 'home' ? 'home' : sectionId;
    window.history.pushState({}, '', sectionId === 'home' ? '/' : `/#${targetId}`);

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
    window.history.pushState({}, '', `/blog/${articleId}`);
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
                window.history.pushState({}, '', '/gallery');
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
              window.history.pushState({}, '', '/');
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
              onBack={() => {
                window.history.pushState({}, '', '/blog');
                setView('blog');
              }} 
              onSelectArticle={handleSelectArticle}
            />
          )}

          {view === 'privacy' && (
            <PrivacyPolicy onBack={() => {
              window.history.pushState({}, '', '/');
              setView('home');
            }} />
          )}
        </main>
        
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default App;