# MAINTENANCE.md — What You Can Edit vs. What to Leave Alone

This file exists because the portfolio's architecture, style system, and
JavaScript behavior are considered **final**. This document draws a hard
line between the two so future edits (by you or anyone else) never drift
into the parts that were deliberately designed and should not change.

If you're ever unsure whether an edit is safe, check this file first.

---

## ✅ SAFE TO EDIT — Content Only

All of the following live inside `index.html` and are pure content. Edit
these freely, as often as you like:

- **Bracketed placeholders** — anything that looks like `[YOUR NAME]`,
  `[YOUR EMAIL]`, `[PROJECT 1 IMAGE PATH]`, `[RESUME PDF PATH]`, etc.
  Replace the bracket and its contents with your real value; leave the
  surrounding HTML tag exactly as it is.
- **Text inside existing tags** — biography paragraphs, project
  descriptions, timeline entries, achievement titles, certification
  names/dates/IDs, statistics numbers.
- **`data-count` values** in the Statistics section (`<span class="stat-number" data-count="18">`) — update the number as your project/repo counts change.
- **`data-width` values** on skill progress bars (`<div class="progress-fill" data-width="90">`) — update the percentage as your proficiency changes.
- **Duplicating existing blocks** to add new entries:
  - New project → copy an entire `<article class="project-card ...">` block, paste it inside `#projectsGrid`, edit the text/links, and set `data-category` to `structural`, `geotechnical`, or `research` so the filter buttons keep working.
  - New skill → copy a `.skill-row` block inside the right `.bracket-card` category.
  - New skill category → copy an entire `.bracket-card` block inside `.skills-grid`.
  - New timeline entry (Experience/Education) → copy a `<li class="timeline-item">` block.
  - New certification → copy a `.cert-card` block.
  - New achievement → copy an `.achievement-card` block.
- **Files you add yourself** in an `assets/` folder — portrait photo, resume PDF, project images, favicon, OG cover image.
- **The typing-effect phrases** in `script.js` — the `phrases` array inside `initTypingEffect()` is content, not architecture. Add, remove, or reword phrases freely.

When duplicating a block: copy the **whole** element (opening tag through
closing tag), including its class names. Never invent a new class name or
strip an existing one — the classes are what connect the markup to the
CSS and JS.

---

## 🔒 DO NOT TOUCH — Architecture, Style, Behavior

These are the parts that were deliberately designed and tested together.
Changing them — even something that looks small, like a class name or a
CSS variable name — can silently break the design system or the JS hooks
that depend on it:

- **`style.css` in full**: the token system (`:root` and `[data-theme='light']` CSS variables), the reset, all component styles, breakpoints, and animation keyframes. The blueprint/drawing-sheet visual identity (grid background, corner-bracket cards, DWG/SCALE/REV sheet headers, navy + amber palette, Space Grotesk/Inter/JetBrains Mono type system) is the intentional design — not a placeholder.
- **`script.js` in full**, except the `phrases` array noted above: theme toggle, mobile nav, scroll-spy, scroll-reveal, skill-bar animation, counter animation, project filtering, tab switching, form validation, back-to-top, and lazy-load logic all depend on exact class names and element IDs in `index.html`.
- **Class names and `id` attributes** anywhere in `index.html` (e.g. `sheet-head`, `bracket-card`, `progress-fill`, `contactForm`, `navLinks`) — these are the contract between the HTML, CSS, and JS. Renaming or removing one breaks the corresponding style or script silently, often with no visible error.
- **Section order and structure** — nav links, scroll-spy, and the sheet numbering (DWG NO. 01–08) all assume the current section order.
- **The JSON-LD `<script type="application/ld+json">` block structure** — the field names are fixed by the schema.org `Person` spec; only the placeholder *values* inside it should change.
- **Adding frameworks, libraries, or a build step** — the entire point of this build is that it has zero dependencies and needs no maintenance. Do not add React, Tailwind, jQuery, a bundler, or any CDN library.

---

## If You Need a Structural Change Later

If, years from now, you genuinely want a different layout, palette, or
feature, treat that as a new project rather than an edit: branch off,
rebuild deliberately, and keep this version (`v1.0`, tagged in git) intact
as a fallback. That way "the one thing I don't want to lose" is never at
risk from an in-place change.
