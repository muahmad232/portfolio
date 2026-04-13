import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { useTheme } from './hooks/useTheme';
import './styles/globals.css';

// Scroll to top on route change, handle hash links
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to let page render first
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

const AppInner = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');

    if (pathname === '/projects') {
      document.title = 'Projects | Muhammad Ahmad';
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Browse Muhammad Ahmad projects in AI/ML and full-stack development, including production RAG systems, predictive apps, and web platforms.'
        );
      }
      return;
    }

    document.title = 'Muhammad Ahmad | ML Engineer & Full-Stack Developer';
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Muhammad Ahmad portfolio — ML Engineer & Full-Stack Developer building real-time AI systems, RAG pipelines, and scalable web applications.'
      );
    }
  }, [pathname]);

  return (
    <>
      <ScrollManager />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppInner />
  </BrowserRouter>
);

export default App;
