# Implementation Plan: Ahsan Iqbal Portfolio Website

## 1. Project Overview & Architecture
Building a high-performance, responsive personal portfolio for **Ahsan Iqbal** (Software Engineering Student | Aspiring AI/ML Engineer) with a modern dark theme, cyan accents, subtle glow effects, smooth animations, and clean modular code.

### Tech Stack
- **Framework:** React 18+ with Vite
- **Styling:** Tailwind CSS (configured with dark mode class support) + Vanilla CSS enhancements for glowing glassmorphism & gradients
- **Animations:** Framer Motion (fade-in, staggered lists, viewport reveal) + custom typing animation
- **Icons:** React Icons (`react-icons/fi`, `react-icons/fa`, `react-icons/si`, etc.)
- **Contact:** EmailJS (`@emailjs/browser`) with environment variables (`.env`)
- **Data Architecture:** Modular data files in `src/data/` (`personal.js`, `projects.js`, `skills.js`, `education.js`, `certifications.js`)
- **Deployment:** Vercel ready with proper build scripts and headers

---

## 2. Directory Structure
```
ahsaniqbal-portfolio/
├── public/
│   ├── favicon.svg              # Custom "AI" SVG badge favicon
│   └── Ahsan_Iqbal_CV.pdf       # Professional PDF CV placeholder/document
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with active-link indicator, mobile drawer & theme toggle
│   │   ├── Hero.jsx             # Typing animation, tagline, CTA buttons & social icons
│   │   ├── About.jsx            # Bio, Superior Univ details, metric/stat cards
│   │   ├── Skills.jsx           # Grouped cards (Languages, Libs, Core CS, Math, Tools, Learning)
│   │   ├── Projects.jsx         # Card grid with tech tags, GitHub/Live links, ML placeholder
│   │   ├── Education.jsx        # Vertical interactive timeline with dates and badges
│   │   ├── Certifications.jsx   # Certs & volunteering cards with verified badges
│   │   ├── Contact.jsx          # EmailJS form with state feedback & direct links
│   │   ├── Footer.jsx           # Copyright 2026, quick links & back-to-top button
│   │   └── ThemeToggle.jsx      # Dark/Light mode toggle switch
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark mode persistence via localStorage
│   ├── data/
│   │   ├── personal.js          # Name, titles, bios, social URLs, email
│   │   ├── skills.js            # Categorized skills with icons and learning tags
│   │   ├── projects.js          # Project items, tags, links
│   │   ├── education.js         # Degree, college, dates, highlights
│   │   └── certifications.js    # Certifications & volunteer roles
│   ├── styles/
│   │   └── index.css            # Tailwind directives, fonts, glow utilities, scrollbar styling
│   ├── App.jsx                  # Single page assembly with smooth scroll
│   └── main.jsx
├── .env.example                 # Template for EmailJS keys
├── .gitignore                   # Ignores .env, node_modules, dist
├── tailwind.config.js           # Extended colors (dark #0f172a, cyan #22d3ee), fonts
├── vite.config.js
└── README.md                    # Setup, customization & deployment guide
```

---

## 3. Step-by-Step Execution Plan

1. **Project Initialization & Setup**
   - Scaffold Vite React app in root directory
   - Install dependencies: `tailwindcss postcss autoprefixer framer-motion react-icons @emailjs/browser`
   - Configure Tailwind with dark mode `selector` or `class`, custom colors:
     - `bg-dark`: `#0f172a` (slate-900)
     - `bg-card`: `#1e293b` (slate-800) / `#0b1120`
     - `accent-cyan`: `#22d3ee` (cyan-400)
     - `accent-glow`: `rgba(34, 211, 238, 0.15)`
   - Set up Google Fonts (`Inter` / `Poppins`) in `index.html` and customize meta tags, title, and favicon.

2. **Data Layer Preparation (`src/data/`)**
   - Populate `personal.js`, `skills.js`, `projects.js`, `education.js`, `certifications.js` with exact user requirements.
   - Design clean schemas with fields for easy updates without touching React JSX components.

3. **Theme & Utilities (`src/context/` & CSS)**
   - Dark/Light mode context with system preference detection and localStorage persistence.
   - Smooth scrolling configuration (`scroll-behavior: smooth`).

4. **Component Implementation**
   - **Navbar:** Sticky frosted glass header, active section detection on scroll, mobile hamburger overlay, dark/light switch.
   - **Hero:** Dynamic typing animation switching between `"C++ Developer"`, `"Python & Data Analysis"`, and `"Future AI/ML Engineer"`. View Projects smooth scroll and Download CV button.
   - **About:** Engaging intro, education at Superior University Lahore, stat cards (`3+ Projects`, `BS SE 2024–2028`, `Learning AI/ML`).
   - **Skills:** Grouped cards with React Icons (C++, Python, NumPy, Pandas, Matplotlib, DSA, DBMS, OOP, Linear Algebra, Git, etc.) + dedicated "Learning" badge cards.
   - **Projects:** Grid with hover lift, gradient borders, badges, GitHub links, and the special "Machine Learning Project — Coming Soon" card.
   - **Education:** Sleek vertical timeline for BS Software Engineering (2024–2028) and ICS (2022–2024).
   - **Certifications & Volunteering:** Cisco Networking Basics and Alkhidmat Foundation volunteer badges.
   - **Contact:** Interactive form integrated with EmailJS, fallback mailto, validation, loading spinner, and toast notifications.
   - **Footer:** 2026 copyright, social links, and smooth back-to-top button.

5. **Assets & Documentation**
   - Custom SVG "AI" logo & favicon.
   - Sample CV PDF `/Ahsan_Iqbal_CV.pdf` in `public/`.
   - `.env` & `.env.example` with EmailJS placeholders.
   - Comprehensive `README.md` with Vercel deployment guide.

6. **Browser Testing & Verification**
   - Start Vite dev server.
   - Use browser subagent to test across Viewport widths:
     - **375px (Mobile):** Verify hamburger menu, typography scaling, project cards, touch targets.
     - **768px (Tablet):** Verify grid layouts, navigation, and spacing.
     - **1440px (Desktop):** Verify layout alignment, glow aesthetics, typing animation, and scroll spy.
   - Test dark/light mode toggle and interactive contact form UI.
