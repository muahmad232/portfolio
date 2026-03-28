import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import { featuredProjects } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Home.css';

const FeaturedProjects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="featured-projects" id="projects" ref={ref}>
      <div className={`featured-projects__container ${isVisible ? 'featured-projects--visible' : ''}`}>
        <div className="featured-projects__header">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="featured-projects__title">
              Featured<span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}> projects</span>
            </h2>
          </div>
          <Link to="/projects" className="featured-projects__view-all mono">
            View all projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div className="featured-projects__grid">
          {featuredProjects.map((project, i) => (
            <div
              key={project.id}
              className="featured-projects__card-wrap"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <ProjectCard project={project} featured />
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="featured-projects__cta-strip">
          <p className="mono">More projects coming soon — currently building in stealth 🚀</p>
          <Link to="/projects" className="featured-projects__cta mono">
            All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
