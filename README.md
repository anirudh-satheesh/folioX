# folioX — The Developer Portfolio Builder

> **"Canva for developer portfolios"** — a live, Canva-style editor that lets developers create stunning portfolio websites and professional resumes in minutes.

---

## ✨ Features

### 🎨 Editor
- **Split-screen live editor** — edit on the left, preview on the right in real time
- **Drag & drop section reordering** — rearrange your portfolio sections with smooth framer-motion animations
- **Theme customizer** — pick primary/secondary colors and see changes instantly
- **Mode toggle** — switch between **Website** and **Resume** output formats

### 📄 Resume Mode
- A4-styled document preview
- **Template One** — Modern, vibrant, section-based with full theme color support
- **Template Two** — Minimalist, monochromatic sidebar layout

### 🌐 Website Mode
- Edge-to-edge, full-width portfolio site rendering
- **Web Template One** — Premium brutalist design with animated skill marquees, grayscale project hovers, and cinematic hero typography

### 🗂 Sections Supported
- Basic Info (name, bio, resume link)
- Hero customization (greeting, job title)
- Skills
- Projects (with GitHub, live demo, tech stack, featured flag)
- Experience (timeline layout)
- Education
- Certifications
- Achievements
- Social Links

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v3 | Styling |
| framer-motion | Animations & drag-and-drop |
| Context API | Global state management |

---

## 📁 Project Structure

```
src/
├── App.jsx                      # Main layout (sidebar + canvas)
├── components/
│   └── forms/
│       └── ProjectForm.jsx      # Reusable project form component
├── context/
│   └── ProfileContext.jsx       # Global profile state
├── data/
│   └── defaultProfile.js        # Central schema (single source of truth)
├── pages/
│   ├── Builder.jsx              # Left panel — editor UI
│   └── Preview.jsx             # Right panel — template renderer
└── templates/
    ├── portfolio/               # Resume-style templates
    │   ├── TemplateOne.jsx
    │   └── TemplateTwo.jsx
    └── website/                 # Full-width website templates
        └── WebTemplateOne.jsx
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app runs at `http://localhost:5173` by default.

---

## 🗺 Roadmap

- [ ] Firebase backend for saving & publishing portfolios
- [ ] Export as PDF (Resume Mode)
- [ ] More website templates (glassmorphism, dark, minimal)
- [ ] Custom domain support
- [ ] Template marketplace

---

## 📌 Status

`Active Development` — Core editor, drag-and-drop, multi-mode templates, and centralized schema are complete.