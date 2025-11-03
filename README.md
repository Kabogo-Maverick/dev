# 🚀 Maverick Kabogo — Personal Portfolio

Welcome to my **personal portfolio website**, built with **React, Framer Motion**, and **Bootstrap**.  
This project showcases my journey, skills, values, and featured projects — all wrapped in a modern, interactive, and visually immersive design.

---

## 🌈 Overview

This portfolio represents **who I am as a developer, designer, and creator**.  
Every section — from the hero animation to the contact form — has been crafted to be elegant, responsive, and unique.

**Highlights:**
- ⚡ Dynamic animations powered by Framer Motion  
- 🎨 Consistent modern dark theme with colorful gradients  
- 🧩 Modular structure — every section is a reusable component  
- 📄 Downloadable CV  
- 💬 Interactive Contact Form  
- 🖼️ Project showcase with animations & hover effects  

---

## 🏗️ Project Structure

```bash
📦 src/
├── assets/                # Images, PDFs, icons, and other static files
│   └── cv.pdf             # Your downloadable CV
│
├── components/
│   ├── home/              # Homepage-related sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Footer.jsx
│   │
│   ├── about/             # About page sections
│   │   ├── AboutIntro.jsx
│   │   ├── Journey.jsx
│   │   └── Values.jsx
│   │
│   ├── portfolio/         # Portfolio showcase components
│   │   └── PortfolioShowcase.jsx
│   │
│   └── contact/           # Contact page components
│       ├── ContactIntro.jsx
│       └── ContactForm.jsx
│
├── pages/                 # Page-level wrappers
│   ├── Home.jsx
│   ├── AboutMk.jsx
│   ├── Portfolio.jsx
│   └── Contact.jsx
│
├── App.js                 # Main routing & layout file
└── index.js               # Entry point
