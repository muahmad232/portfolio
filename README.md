# Ahmad — Muhammad Ahmad

Personal portfolio built with React. ML Engineer & Full-Stack Developer.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Build for production
npm run build
```

## Stack
- React 18 + React Router v6
- Pure CSS (CSS variables, no UI library)
- Fonts: Syne + DM Mono + Fraunces (Google Fonts)

## Features
- ✅ Dark / Light mode with persistence
- ✅ GitHub & LinkedIn icon color-swap on hover
- ✅ Animated canvas dot-grid hero background
- ✅ Scroll-triggered animations
- ✅ Downloadable resume
- ✅ Skill bars with animated fills
- ✅ Projects filter page (AI/ML, Full-Stack)
- ✅ Responsive mobile layout
- ✅ Contact form (opens mail client)

## Project Structure
```
src/
├── assets/          # profile pic + CV PDF
├── components/      # Navbar, Hero, ProjectCard, Skills, About, Contact, Footer
├── hooks/           # useTheme, useScrollAnimation
├── pages/           # Home, Projects
├── styles/          # globals.css
└── data.js          # all portfolio content — edit here
```

## Customization
All content (bio, projects, experience, skills) lives in `src/data.js`.
Update that file to keep the site in sync with your resume.

## Deploy to Vercel
```bash
npm run build
# drag /build folder to vercel.com or use Vercel CLI
```

---
Built with ♥ in Pakistan.
