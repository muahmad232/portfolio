import React, { useState } from 'react';
import { skills } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const SkillBadge = ({ name, delay = 0, isVisible }) => (
  <div 
    className={`skill-badge ${isVisible ? 'skill-badge--visible' : ''}`} 
    style={{ transitionDelay: `${delay}ms` }}
  >
    <span className="skill-badge__name mono">{name}</span>
  </div>
);

const TABS = [
  { key: 'ai_ml', label: 'AI / ML', icon: '🤖' },
  { key: 'fullstack', label: 'Full-Stack', icon: '🌐' },
  { key: 'other', label: 'Other', icon: '⚙️' },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('ai_ml');
  const { ref, isVisible } = useScrollAnimation(0.2);

  const currentSkills = skills[activeTab] || [];

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills__container">
        <div className="skills__header">
          <p className="section-label">Technical Arsenal</p>
          <h2 className="skills__title">
            What I <span className="serif" style={{ fontStyle: 'italic' }}>build</span> with
          </h2>
          <p className="skills__subtitle">
            Bridging intelligent models with scalable web applications — end-to-end.
          </p>
        </div>

        {/* Tabs */}
        <div className="skills__tabs">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`skills__tab mono ${activeTab === tab.key ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills__grid">
          <div className="skills__badges">
            {currentSkills.map((skill, i) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                delay={i * 40}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Info panel */}
          <div className="skills__info">
            {activeTab === 'ai_ml' && (
              <div className="skills__panel">
                <div className="skills__panel-icon">🧠</div>
                <h3 className="skills__panel-title">ML Engineering</h3>
                <p className="skills__panel-text">
                  From raw data preprocessing through model training and deployment.
                  Specialized in RAG pipelines, neural networks, and EEG-based
                  signal decoding. Certified in Andrew Ng's Deep Learning Specialization.
                </p>
                <div className="skills__tags">
                  {['RAG / FAISS', 'TensorFlow', 'Scikit-Learn', 'LLM Integration', 'EEG Signals', 'CNNs'].map(t => (
                    <span key={t} className="skills__tag mono">{t}</span>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'fullstack' && (
              <div className="skills__panel">
                <div className="skills__panel-icon">⚡</div>
                <h3 className="skills__panel-title">MERN Stack</h3>
                <p className="skills__panel-text">
                  Full production-grade web applications from database to deployed frontend.
                  React interfaces, Node/Express backends, MongoDB data layers —
                  with clean REST APIs and real-time features.
                </p>
                <div className="skills__tags">
                  {['React SPA', 'Node.js REST', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Vercel Deploy'].map(t => (
                    <span key={t} className="skills__tag mono">{t}</span>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'other' && (
              <div className="skills__panel">
                <div className="skills__panel-icon">🔧</div>
                <h3 className="skills__panel-title">Systems & Tools</h3>
                <p className="skills__panel-text">
                  Strong foundations in C/C++, relational databases, and
                  developer tooling. FastAPI for ML microservices, Git for
                  version control, and multiple IDEs across the stack.
                </p>
                <div className="skills__tags">
                  {['C / C++', 'PostgreSQL', 'FastAPI', 'Git', 'PL/SQL', 'VS Code'].map(t => (
                    <span key={t} className="skills__tag mono">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
