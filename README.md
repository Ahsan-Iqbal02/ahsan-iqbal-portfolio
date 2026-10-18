# Ahsan Iqbal — Personal Portfolio Website

A modern, high-performance, and responsive personal portfolio website for **Ahsan Iqbal** (Software Engineering Student | Aspiring AI/ML Engineer), built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Key Features

- **Dynamic Hero Section:** Typing animation cycling through *"C++ Developer"*, *"Python & Data Analysis"*, and *"Future AI/ML Engineer"*, with smooth-scroll CTA buttons and direct resume download.
- **About & Stat Cards:** Showcases educational background at Superior University Lahore, core strengths, and metric badges (*3+ Projects*, *BS SE 2024–2028*, *Learning AI/ML*).
- **Grouped Skills Showcase:** Categorized technology stack with icons for Languages (C++, Python), Python Libraries (NumPy, Pandas, Matplotlib), Core CS (DSA, DBMS, OOP, Problem Solving), Math for ML (Linear Algebra), Tools (Git, GitHub, VS Code, Jupyter), and "Currently Learning" badges.
- **Interactive Projects Grid:** Responsive cards featuring project summaries, tech tags, GitHub repository links, live preview buttons, and a dedicated *"Machine Learning Project — Coming Soon"* card.
- **Vertical Education Timeline:** Interactive chronological timeline for BS Software Engineering (2024–2028) and ICS (2022–2024).
- **Certifications & Volunteering:** Highlights Cisco Networking Basics certification and Alkhidmat Foundation community leadership.
- **Contact Channel with EmailJS:** Frontend contact form integrated with EmailJS, form validation, animated loading indicators, and confetti celebration on successful transmission.
- **Dark & Light Mode:** Seamless theme toggle with persistent storage in `localStorage` and default near-black dark aesthetics (`#0f172a` with `#22d3ee` cyan accent).
- **Data-Driven Architecture:** All data is decoupled from JSX components and resides in `src/data/` for easy editing.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) + Custom CSS
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Contact Form:** [@emailjs/browser](https://www.emailjs.com/)
- **Effects:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment:** [Vercel](https://vercel.com/) ready

---

## 📁 Project Structure

```text
ahsaniqbal-portfolio/
├── public/
│   ├── favicon.svg              # Custom "AI" SVG badge
│   └── Ahsan_Iqbal_CV.pdf       # Resume document for Download CV button
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with active-link highlight & mobile menu
│   │   ├── Hero.jsx             # Hero with dynamic typing & CTA buttons
│   │   ├── About.jsx            # Bio, academic details & stat cards
│   │   ├── Skills.jsx           # Grouped skill cards with icons & learning badges
│   │   ├── Projects.jsx         # Card grid with filters & ML coming-soon card
│   │   ├── Education.jsx        # Vertical timeline of academic history
│   │   ├── Certifications.jsx   # Cisco & Alkhidmat Foundation cards
│   │   ├── Contact.jsx          # EmailJS form & direct links
│   │   └── Footer.jsx           # Copyright 2026 & back-to-top button
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/light theme provider & state persistence
│   ├── data/                    # UPDATE YOUR CONTENT HERE
│   │   ├── personal.js          # Name, title, tagline, bio, email, socials
│   │   ├── skills.js            # Skill categories, items, and learning tags
│   │   ├── projects.js          # Projects list, descriptions, tags, and URLs
│   │   ├── education.js         # Degree, university, period, and highlights
│   │   └── certifications.js    # Certifications & volunteer experiences
│   ├── index.css                # Tailwind directives & glow utilities
│   ├── App.jsx                  # Main page assembly
│   └── main.jsx
├── .env.example                 # EmailJS environment variables template
├── .gitignore                   # Ignores .env and build output
├── vercel.json                  # Vercel deployment configuration
└── package.json
```

---

## 🚀 How to Run Locally

### 1. Prerequisites
Make sure you have Node.js (v18 or higher) installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure EmailJS Keys (Optional for live emailing)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Open `.env` and fill in your keys from [EmailJS](https://www.emailjs.com/):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
*(Note: If left as placeholders, the contact form simulates a successful transmission with celebratory confetti for demo and portfolio review purposes.)*

### 4. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 5. Build for Production
```bash
npm run build
```
The optimized production files will be output to the `dist/` directory.

---

## 🌐 How to Deploy on Vercel

### Method 1: Deploy with GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ahsan Iqbal portfolio"
   git branch -M main
   git remote add origin https://github.com/Ahsan-Iqbal02/ahsaniqbal-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in.
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import your `ahsaniqbal-portfolio` repository.
5. In **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click **Deploy**. Vercel will automatically build and publish your portfolio with a live URL and custom domain support!

### Method 2: Deploy using Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive CLI prompts to deploy directly.

---

## ✏️ Updating Your Information

You do **not** need to touch the React components to update your information:
- **Change Name, Tagline, Bio, or LinkedIn:** Edit [`src/data/personal.js`](file:///c:/Users/DELL%205420/OneDrive/Documents/ahsaniqbal-portfolio/src/data/personal.js)
- **Add or Modify Projects:** Edit [`src/data/projects.js`](file:///c:/Users/DELL%205420/OneDrive/Documents/ahsaniqbal-portfolio/src/data/projects.js)
- **Add or Modify Skills:** Edit [`src/data/skills.js`](file:///c:/Users/DELL%205420/OneDrive/Documents/ahsaniqbal-portfolio/src/data/skills.js)
- **Update Education:** Edit [`src/data/education.js`](file:///c:/Users/DELL%205420/OneDrive/Documents/ahsaniqbal-portfolio/src/data/education.js)
- **Update Certifications:** Edit [`src/data/certifications.js`](file:///c:/Users/DELL%205420/OneDrive/Documents/ahsaniqbal-portfolio/src/data/certifications.js)
- **Update CV Document:** Replace [`public/Ahsan_Iqbal_CV.pdf`](file:///c:/Users/DELL%205420/OneDrive/Documents/ahsaniqbal-portfolio/public/Ahsan_Iqbal_CV.pdf) with your latest PDF resume.

---

## 📄 License
Created for **Ahsan Iqbal** &copy; 2026.
