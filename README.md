# Muhammad Ahmad — Portfolio

Personal portfolio website for **Muhammad Ahmad** (that would be me), focused on AI/ML and full-stack engineering work.

**Live Website:** https://muhammad-ahmad-naul.vercel.app/

## Overview

This project is a React-based portfolio that highlights:
- Featured AI/ML and full-stack projects
- Professional experience and certifications
- Skills grouped by domain
- Contact flow with direct email action

The site is designed to be visually modern, fast, and easy to update through centralized content data.

## Tech Stack

- React 18
- React Router v6
- CSS (custom styling with theme variables)
- Google Fonts (Syne, DM Mono, Fraunces)

## Core Features

- Dark/light theme toggle with persistence
- Animated hero section with interactive canvas background
- Featured projects section on Home
- Full projects page with category filters
- Reusable project card system (links, highlights, stack tags)
- About, Skills, and Contact sections
- Resume download from navbar
- Responsive layout for desktop/tablet/mobile

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and Run

```bash
npm install
npm start
```

App runs at `http://localhost:3000` (default CRA port).

### Production Build

```bash
npm run build
```

### Tests

```bash
npm test
```

## Project Structure

```text
src/
├── assets/          # images and static media (profile, projects, CV)
├── components/      # reusable UI sections/components
├── hooks/           # custom hooks (theme + scroll animation)
├── pages/           # routed pages (Home, Projects)
├── styles/          # global styles and tokens
└── data.js          # content source of truth (bio, projects, skills, etc.)
```

## Content Management

Most site content is maintained in `src/data.js`, including:
- personal profile info
- featured and full project entries
- skills, certifications, and experience

To add or update projects, edit the project objects in `featuredProjects` and `allProjects`.

## Deployment

This portfolio is deployed on Vercel:

- Live: https://muhammad-ahmad-naul.vercel.app/

For redeployments, push to the connected branch or run a manual Vercel deploy workflow.

---
Built with care in Pakistan.
