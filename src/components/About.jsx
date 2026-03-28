import React from 'react';
import { personalInfo, experience, certifications } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`about__container ${isVisible ? 'about--visible' : ''}`}>
        {/* Left column */}
        <div className="about__left">
          <p className="section-label">About Me</p>
          <h2 className="about__title">
            Engineering intelligence
            <span className="about__title-accent serif"> into every</span>
            <br />layer of the stack.
          </h2>

          <p className="about__bio">{personalInfo.bio}</p>
          <p className="about__bio">{personalInfo.bioExtra}</p>

          {/* Education card */}
          <div className="about__edu">
            <div className="about__edu-icon">🎓</div>
            <div>
              <p className="about__edu-uni mono">{personalInfo.university}</p>
              <p className="about__edu-degree">{personalInfo.degree}</p>
              <p className="about__edu-year mono">Sept 2023 – June 2027</p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="about__facts">
            {[
              { icon: '📍', label: 'Location', value: personalInfo.location },
              { icon: '✉️', label: 'Email', value: personalInfo.email },
              { icon: '📱', label: 'Phone', value: personalInfo.phone },
            ].map(fact => (
              <div key={fact.label} className="about__fact">
                <span className="about__fact-icon">{fact.icon}</span>
                <div>
                  <p className="about__fact-label mono">{fact.label}</p>
                  <p className="about__fact-value">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — experience timeline */}
        <div className="about__right">
          <p className="section-label">Experience</p>

          <div className="about__timeline">
            {experience.map((exp, i) => (
              <div key={i} className="about__exp-card">
                <div className="about__exp-header">
                  <div>
                    <h3 className="about__exp-role">{exp.role}</h3>
                    <p className="about__exp-company">
                      {exp.company}
                      <span className="about__exp-location mono"> · {exp.location}</span>
                    </p>
                  </div>
                  <span className={`about__exp-badge about__exp-badge--${exp.type} mono`}>
                    {exp.type}
                  </span>
                </div>
                <p className="about__exp-period mono">{exp.period}</p>
                <ul className="about__exp-points">
                  {exp.points.map((p, j) => (
                    <li key={j} className="about__exp-point">{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="about__certs-section">
            <p className="section-label" style={{ marginTop: '2rem' }}>Certifications</p>
            {certifications.map((cert, i) => (
              <div key={i} className="about__cert">
                <div className="about__cert-dot" />
                <div>
                  <p className="about__cert-name">{cert.name}</p>
                  <p className="about__cert-org mono">{cert.org}</p>
                  {cert.courses.length > 0 && (
                    <div className="about__cert-courses">
                      {cert.courses.map(c => (
                        <span key={c} className="about__cert-course mono">{c}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
