# folioX — The Developer Portfolio Builder

> **"Canva for developer portfolios"** — a live, Canva-style editor that lets developers create stunning portfolio websites and professional resumes in minutes.

---

## ✨ Features

### 🎨 Premium Editor
- **Split-screen live editor** — edit on the left, preview on the right in real time.
- **Design System Engine** — Built on a 4px grid with centralized tokens for spacing, radius, and luxury shadows.
- **Canvas Toolbar** — Precise zoom controls (40% to 200%) and instant device/mode switching.
- **Drag & drop section reordering** — Rearrange your portfolio with buttery-smooth `framer-motion` layout animations.
- **Persistence** — Automatic local storage sync so your progress is never lost.

### 🖼 Preview Simulation
- **Web Mode**: A high-fidelity "Desktop inside Desktop" mockup with realistic browser dots, address bars, and CSS-isolated `iframe` sandboxing.
- **Mobile Mode**: Pixel-perfect mobile skin (375x850px) for testing responsiveness.
- **Resume Mode**: Document-optimized canvas for A4-style document previews.
- **Isolated Scrolling**: Pro-grade viewport locking (only the simulation scrolls, never the editor).

### 📄 Templates
- **Web Template One**: Brutalist high-fidelity site with marquee skill animations and grayscale image reveals.
- **Resume Template One**: Modern, section-based professional layout.
- **Resume Template Two**: Elegant, monochromatic sidebar design.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Core UI Framework |
| Vite | Lightning-fast Build Tool |
| Tailwind CSS | Token-driven Styling |
| framer-motion | Cinema-grade Animations |
| Context API | Global state management |
| Iframe Portals | Isolated simulation environment |

---

## 📁 Project Structure

```
src/
├── App.jsx                      # Main app shell & Canvas Toolbar
├── components/
│   ├── ui/
│   │   └── fields/              # Design-system-aligned form components
│   ├── forms/                   # Complex nested forms (ProjectForm)
│   └── sections/                # Individual section editors
├── core/
│   ├── sectionRegistry.js       # Dynamic section management
│   └── templateRegistry.js      # Global template manifesting
├── pages/
│   ├── Builder.jsx              # The Sidebar Editor logic
│   ├── Preview.jsx              # Dispatcher for preview modes
│   ├── WebPreview.jsx           # Portfolio simulation engine
│   └── ResumePreview.jsx        # Document rendering engine
├── styles/
│   └── tokens.js                # Core Design System tokens
└── templates/                   # Portfolio / Resume react components
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

`Active Development` — Core editor, Design System, Preview Engine, and cross-mode templates are complete.