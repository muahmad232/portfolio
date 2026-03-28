import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data';
import profilePic from '../assets/profile_pic.png';
import './Hero.css';

const GITHUB_BLACK = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LINKEDIN_BLACK = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Hero = () => {
  const canvasRef = useRef(null);

  /* Animated grid-dot background */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const spacing = 32;
      t += 0.008;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dist = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2);
          const wave = Math.sin(dist * 0.015 - t) * 0.5 + 0.5;
          let size = wave * 2.5 + 0.5;

          let drawX = x;
          let drawY = y;
          let opacity = isDark ? 0.12 : 0.08;

          // Cursor interaction
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const mouseDist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150; // Interaction radius

          if (mouseDist < maxDist) {
            const force = (maxDist - mouseDist) / maxDist;
            const pushX = (dx / mouseDist) * force * 35;
            const pushY = (dy / mouseDist) * force * 35;
            
            drawX += pushX;
            drawY += pushY;
            size += force * 2.5; 
            opacity += force * (isDark ? 0.4 : 0.25);
          }

          ctx.beginPath();
          ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? `rgba(232,255,71,${opacity})` : `rgba(0,0,0,${opacity})`;
          ctx.fill();
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__container">
        <div className="hero__content">
          {/* Tag line */}
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            <span className="mono">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="hero__heading">
            <span className="hero__heading-line hero__heading-line--1">Muhammad</span>
            <span className="hero__heading-line hero__heading-line--2">
              Ahmad
              <span className="hero__heading-accent serif">.</span>
            </span>
          </h1>

          {/* Role pills */}
          <div className="hero__roles">
            <span className="hero__role hero__role--primary">ML Engineer</span>
            <span className="hero__role-sep">×</span>
            <span className="hero__role">Full-Stack Developer</span>
          </div>

          {/* Bio */}
          <p className="hero__bio">{personalInfo.tagline}</p>

          {/* CTAs */}
          <div className="hero__ctas">
            <Link to="/projects" className="hero__cta hero__cta--primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="#contact" className="hero__cta hero__cta--secondary">
              Get in touch
            </a>
          </div>

          {/* Social links with color-swap on hover */}
          <div className="hero__socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <span className="hero__social-icon hero__social-icon--dark">{GITHUB_BLACK}</span>
              <span className="hero__social-icon hero__social-icon--color">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#6e40c9">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <span className="hero__social-icon hero__social-icon--dark">{LINKEDIN_BLACK}</span>
              <span className="hero__social-icon hero__social-icon--color">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Stats row */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">3+</span>
              <span className="hero__stat-label mono">Live Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">5×</span>
              <span className="hero__stat-label mono">DL Certified</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">NUST</span>
              <span className="hero__stat-label mono">CS '27</span>
            </div>
          </div>
        </div>

        {/* Profile image */}
        <div className="hero__image-wrap">
          <div className="hero__image-frame">
            <div className="hero__image-glow" />
            <img
              src={profilePic}
              alt="Muhammad Ahmad"
              className="hero__image"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <span className="mono">scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
