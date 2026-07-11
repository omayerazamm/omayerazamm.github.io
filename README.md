# [YOUR NAME] — Civil Engineer Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Frameworks](https://img.shields.io/badge/Frameworks-None-4CAF7D?style=flat)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?style=flat&logo=github)

A fast, dependency-free personal portfolio for a civil engineer working across
**structural design, geotechnical analysis, and applied research**. Built with
plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step,
deploys straight to GitHub Pages.

**[View Live Demo →](https://yourusername.github.io/your-repo/)** *(update after deploying)*

![Portfolio screenshot placeholder](assets/screenshot-placeholder.png)
*(Replace with an actual screenshot of your deployed site.)*

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Deployment on GitHub Pages](#deployment-on-github-pages)
- [Customization Guide](#customization-guide)
- [Performance Features](#performance-features)
- [Accessibility](#accessibility)
- [Future Improvements](#future-improvements)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Blueprint-inspired design system** — every section is framed like an engineering drawing sheet (DWG number, scale, revision), with a subtle grid background and corner-bracket card frames.
- **Dark mode by default**, with a manual toggle that remembers your choice via `localStorage`, plus automatic respect for `prefers-color-scheme` on first visit.
- **Fully responsive** — mobile-first layout with breakpoints for mobile, tablet, laptop, desktop, and ultrawide screens. No horizontal scrolling at any width.
- **Sticky, accessible navigation** with scroll-spy active-section highlighting and a slide-in mobile menu.
- **Animated hero** with a typing effect that cycles through role/focus phrases.
- **Nine core sections**: Hero, About, Skills, Projects, Experience, Education, Certifications, Achievements, Statistics, Contact.
- **Skills organized by category** (Programming Languages, Engineering Software, CAD Software, Civil Engineering Tools, Data Analysis, AI Tools, Productivity Tools) with animated progress bars.
- **Filterable project grid** with six placeholder projects (Structural / Geotechnical / Research), each with a featured badge, status badge, tech stack chips, and GitHub/live-demo links.
- **Tabbed experience timeline** covering Internships, Research, Freelancing, Leadership, Teaching, and Volunteer Work.
- **Animated statistics counters** that count up when scrolled into view.
- **Client-side validated contact form** with a `mailto:` fallback (no backend required).
- **SEO-ready**: meta description/keywords, Open Graph tags, Twitter Card, canonical URL, robots meta, and JSON-LD structured data for a `Person`.
- **Accessibility-first**: semantic landmarks, skip-to-content link, visible focus states, ARIA labels, keyboard-navigable menus and tabs, and full `prefers-reduced-motion` support.
- **Zero dependencies** — no frameworks, no npm install, no build step. Open `index.html` and it works.

---

## Tech Stack

| Layer      | Choice                                   |
|------------|-------------------------------------------|
| Markup     | Semantic HTML5                             |
| Styling    | CSS3 (custom properties, Grid, Flexbox)    |
| Behavior   | Vanilla JavaScript (ES6+, IntersectionObserver) |
| Fonts      | Google Fonts — Space Grotesk, Inter, JetBrains Mono |
| Hosting    | GitHub Pages                               |

No React, Vue, Bootstrap, Tailwind, jQuery, or bundlers are used anywhere in this project.

---

## Folder Structure

```
.
├── index.html          # All markup and content — start here for text edits
├── style.css            # Full design system: tokens, layout, components
├── script.js             # All interactivity — theme, nav, animations, form
├── README.md             # You are here
└── assets/               # Add your own: portrait.jpg, resume.pdf, project images, favicon
```

> The `assets/` folder is not included by default — create it and add your own
> images, resume PDF, and favicon as referenced in `index.html`.

---

## Installation

No build tools or package managers are required.

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

Then simply open `index.html` in a browser, or serve it locally:

```bash
# Python 3
python -m http.server 8000

# Node (if you have npx available)
npx serve .
```

Visit `http://localhost:8000` in your browser.

---

## Deployment on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, select the `main` branch and the `/ (root)` folder.
4. Save — GitHub will publish your site at `https://yourusername.github.io/your-repo/`.
5. Update the `[YOUR DOMAIN]` placeholders in `index.html` (canonical URL, Open Graph, JSON-LD) to match this address.

All asset paths in this project are relative, so no additional configuration is needed for GitHub Pages' subpath hosting.

---

## Customization Guide

All customization points are marked with bracketed placeholders in `index.html`, for example `[YOUR NAME]`, `[YOUR EMAIL]`, `[RESUME PDF PATH]`. Search the file for `[` to find every one.

| Placeholder                | Replace with |
|-----------------------------|--------------|
| `[YOUR NAME]`                | Your full name |
| `[YOUR TITLE]`                | Your professional title/tagline |
| `[YOUR EMAIL]` / `[YOUR PHONE]`      | Contact details |
| `[YOUR LOCATION]`              | City, country |
| `[YOUR GITHUB URL]` etc.          | Your social profile URLs |
| `[RESUME PDF PATH]`             | Path to your resume, e.g. `assets/resume.pdf` |
| `[PORTRAIT IMAGE PATH]`           | Path to your photo, e.g. `assets/portrait.jpg` |
| `[YOUR DOMAIN]`               | Your published GitHub Pages URL |

**Adding a project:** duplicate any `<article class="project-card ...">` block in the Projects section, update its `data-category` (`structural`, `geotechnical`, or `research`) so it works with the filter buttons, and edit the text/links.

**Adding a skill category:** duplicate a `.bracket-card` block inside `#skills`, and for each skill row set `data-width` on `.progress-fill` to the percentage you want animated.

**Changing colors:** all colors are CSS custom properties defined once in `style.css` under `:root` (dark, default) and `[data-theme='light']`. Change the hex values there to re-theme the entire site.

**Changing fonts:** update the `@import` URL and the `--font-display` / `--font-body` / `--font-mono` variables at the top of `style.css`.

---

## Performance Features

- No external JS/CSS frameworks — minimal payload.
- Fonts preconnected and loaded via `display=swap` to avoid render-blocking.
- Images use `loading="lazy"` with explicit `width`/`height` to prevent layout shift.
- Animations are GPU-friendly (`transform`/`opacity`) and gated behind `IntersectionObserver`, so nothing animates off-screen.
- `prefers-reduced-motion` is respected globally — all animation/transition durations collapse to near-zero for users who request it.
- Designed to score 95+ across Lighthouse's Performance, Accessibility, Best Practices, and SEO categories once real assets (compressed images, resume) are added.

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a logical heading hierarchy.
- Skip-to-content link for keyboard and screen-reader users.
- Visible focus states (`:focus-visible`) throughout, including inside the mobile menu and tab controls.
- ARIA labels on icon-only buttons (theme toggle, hamburger, back-to-top, social icons) and `aria-expanded`/`aria-selected` state on interactive controls.
- Keyboard-operable navigation menu, experience tabs, and project filters.
- Form fields use associated `<label>`s and `aria-describedby` error regions.
- Color palette checked for contrast in both dark and light themes.

---

## Future Improvements

- Connect the contact form to a serverless function or form service for direct email delivery.
- Add a blog/writing section that pulls from Medium via RSS.
- Add real screenshots and an og-image for social sharing previews.
- Optional: a print-optimized resume stylesheet.

---

## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to fork and adapt this template for your own portfolio — a credit link back is appreciated but not required.

---

## Contact

**[YOUR NAME]**
Email: [YOUR EMAIL]
LinkedIn: [YOUR LINKEDIN URL]
GitHub: [YOUR GITHUB URL]
