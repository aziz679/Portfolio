# Portfolio Website - Mohammed Azizuddin

## Original Problem Statement
Build a personal portfolio website inspired by `arunaiajith.vercel.app` with:
- Dark theme with emerald/green accents
- Minimalist, modern design with advanced animations
- Hero section with strong tagline
- Projects section with real screenshots
- Work experience from CV
- Tech stack with logos
- Humorous, confident tone highlighting copywriting skills
- Dark/Light theme toggle
- Resume download functionality

## What's Been Implemented (Jan 2025)

### Core Features ✅
- [x] Dark/Light theme toggle with localStorage persistence
- [x] Resume download button in nav and hero
- [x] Scroll-triggered animations throughout
- [x] Hover effects and micro-interactions
- [x] Mobile responsive with hamburger menu
- [x] All 5 projects with REAL screenshots from live sites

### Pages Created
1. **CleanHomePage.jsx** - Main homepage with all sections + theme toggle
2. **InspiredWorkPage.jsx** - Work experience timeline
3. **InspiredProjectsPage.jsx** - Projects listing with real images
4. **InspiredProjectDetailPage.jsx** - Individual project case studies
5. **InspiredAboutPage.jsx** - About/capabilities page
6. **InspiredContactPage.jsx** - Contact options

### Projects (5 total)
1. **AI Kaptan** - aikaptan.com (AI tools directory)
2. **Emareach AI** - Email outreach platform
3. **Ralvie AI Frontdesk** - frontdesk.ralvie.ai (AI phone system)
4. **AI Unleashed** - aiunleashed.ca (Content brand)
5. **Ralvie.ai** - ralvie.ai (WordPress website with content/pricing strategy) **NEW**

### Design Features
- "Beyond the Code" section with humorous descriptions:
  - Coffee: "Fueled by caffeine, powered by deadlines ☕"
  - Building Products: "Because talking about ideas is boring"
  - Swimming: "Where I brainstorm (and occasionally drown in thoughts)"
  - Long Drives: "Best ideas hit at 120 kmph"
- "The Numbers Don't Lie" achievements section
- Glowing CTA buttons
- Smooth page transitions

### Technical Implementation
- Theme context with React Context API
- Custom animation hooks (useScrollAnimation, useStaggeredAnimation)
- CSS animations (fade-in-up, scale-in, glow-pulse)
- Real project images from live websites (not AI-generated)

## Tech Stack
- **Frontend**: React, TailwindCSS, Shadcn/UI
- **Routing**: react-router-dom
- **Animations**: Custom CSS + React hooks
- **Theme**: Context API + localStorage

## File Structure
```
/app/frontend/src/
├── context/
│   └── ThemeContext.jsx     # Dark/Light theme
├── hooks/
│   └── useAnimations.js     # Scroll animations
├── styles/
│   └── animations.css       # Animation classes
├── data/
│   ├── portfolioData.js     # 5 projects
│   └── workExperienceData.js
├── pages/
│   ├── CleanHomePage.jsx
│   ├── InspiredWorkPage.jsx
│   ├── InspiredProjectsPage.jsx
│   ├── InspiredProjectDetailPage.jsx
│   ├── InspiredAboutPage.jsx
│   └── InspiredContactPage.jsx
└── routes/
    └── AppRoutes.jsx
```

## Remaining Tasks
### P1 - Polish
- [ ] Add actual resume PDF file
- [ ] Testimonials section with colleague quotes
- [ ] Page transition animations between routes

### P2 - Enhancements  
- [ ] SEO optimization (meta tags, OG images)
- [ ] Contact form with backend email integration
- [ ] Analytics integration

### P3 - Backlog
- [ ] Blog section
- [ ] Case study videos
- [ ] Performance optimization (lazy loading)
