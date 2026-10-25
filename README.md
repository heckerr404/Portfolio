# Ritesh Yadav — Graphic Designer & Visual Creative (2026)

> *Design that makes you look twice.*

A bold, editorial-inspired portfolio showcasing graphic design, visual branding, and experimental typography — built as a modern single-page React application.

---

## ✨ Features

- **Interactive 360° Avatar** — A fully rotatable 3D avatar section
- **Magnetic Custom Cursor** — Bespoke cursor that reacts to interactive elements (fine pointer devices)
- **Brand Marquee** — Infinite-scroll ticker of brands and tools
- **Project Modal Gallery** — Click into selected works with detailed case-study overlays
- **Procedural Project Artwork** — Each project card features unique generated artwork
- **Torn-Edge Dividers** — Tactile paper-rip section separators
- **Paper Grain Texture** — Subtle overlay that gives the entire site a printed editorial feel
- **Smooth Scroll & Micro-Animations** — Framer Motion powered transitions throughout
- **Fully Responsive** — Designed for mobile, tablet, and desktop
- **SEO Optimised** — Open Graph, Twitter Card, and semantic HTML baked in

## 🛠 Tech Stack

| Layer       | Technology                        |
| ----------- | --------------------------------- |
| Framework   | React 19 + TypeScript             |
| Build Tool  | Vite 6                            |
| Styling     | Tailwind CSS 3                    |
| Animations  | Framer Motion 12                  |
| Icons       | Lucide React                      |
| Fonts       | Anton · Archivo Black · Caveat · Inter · Space Grotesk (Google Fonts) |

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (ships with Node)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/heckerr404/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**.

### Production Build

```bash
npm run build
npm run preview   # preview the production bundle locally
```

## 📁 Project Structure

```
├── index.html              # Entry HTML with SEO meta tags
├── src/
│   ├── main.tsx            # React mount point
│   ├── App.tsx             # Root layout (Navigation → Main → Footer)
│   ├── index.css           # Global styles & paper-grain texture
│   ├── components/
│   │   ├── Navigation.tsx      # Sticky nav with mobile hamburger
│   │   ├── About.tsx           # Designer bio & philosophy
│   │   ├── Hero.tsx            # Bold headline & CTA section
│   │   ├── Avatar360.tsx       # Interactive 3D avatar
│   │   ├── BrandMarquee.tsx    # Scrolling brand ticker
│   │   ├── SelectedWork.tsx    # Project grid
│   │   ├── ProjectCard.tsx     # Individual project card
│   │   ├── ProjectArtwork.tsx  # Procedurally generated artwork
│   │   ├── ProjectModal.tsx    # Expanded project detail overlay
│   │   ├── Services.tsx        # Offerings section
│   │   ├── Skills.tsx          # Capabilities breakdown
│   │   ├── Contact.tsx         # Get in touch form / CTA
│   │   ├── CustomCursor.tsx    # Magnetic cursor component
│   │   ├── TornEdge.tsx        # Paper-rip SVG divider
│   │   └── Footer.tsx          # Copyright & back-to-top
│   └── data/
│       ├── profile.ts          # Personal info, social links, nav config
│       └── projects.ts         # Project case-study data
├── public/                 # Static assets (favicon, resume, images)
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## 📬 Contact

**Ritesh Yadav**
📧 [riteshhydv09@gmail.com](mailto:riteshhydv09@gmail.com)
📍 India

---

<p align="center"><sub>Built with ☕ and too many font tabs open.</sub></p>