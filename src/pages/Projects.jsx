import React, { useState } from 'react';
import { allProjects } from '../data';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const FILTERS = ['All', 'AI/ML', 'Full-Stack', 'Other'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.type === activeFilter);

  return (
    <main className="projects-page">
      {/* Hero banner */}
      <div className="projects-page__hero">
        <div className="projects-page__hero-inner">
          <p className="section-label">Portfolio</p>
          <h1 className="projects-page__title">
            All <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Projects</span>
          </h1>
          <p className="projects-page__subtitle">
            A collection of ML systems, full-stack apps, and research-driven experiments.
            More being built constantly.
          </p>

          {/* Filters */}
          <div className="projects-page__filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`projects-page__filter mono ${activeFilter === f ? 'projects-page__filter--active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
                <span className="projects-page__filter-count">
                  {f === 'All' ? allProjects.length : allProjects.filter(p => p.type === f).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="projects-page__content">
        <div className="projects-page__container">
          {filtered.length > 0 ? (
            <div className="projects-page__grid">
              {filtered.map((project, i) => (
                <div
                  key={project.id}
                  className="projects-page__card-wrap"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="projects-page__empty">
              <span>🔭</span>
              <p className="mono">No projects in this category yet. Coming soon!</p>
            </div>
          )}

          {/* Coming soon placeholder */}
          <div className="projects-page__coming-soon">
            <div className="projects-page__cs-inner">
              <div className="projects-page__cs-icon">⚗️</div>
              <h3 className="projects-page__cs-title">More Projects Incoming</h3>
              <p className="projects-page__cs-desc mono">
                EEG Neural Decoder · AI Agent Framework · Portfolio v2
              </p>
              <div className="projects-page__cs-tags">
                {['EEG / BCI', 'LangChain Agents', 'Next.js', 'PostgreSQL'].map(t => (
                  <span key={t} className="projects-page__cs-tag mono">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
