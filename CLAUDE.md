# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS website for Desert Elite Homes & Construction (AZ ROC License: 353956). No build tools, frameworks, or package managers — pure HTML5, CSS3, and vanilla JavaScript served directly to the browser.

## Development

**No build step.** Open `.html` files directly in a browser or serve with any static file server:

```powershell
# Quick local server (Python)
python -m http.server 8000

# Or use VS Code Live Server extension
```

No linting, testing, or compilation configured.

## Site Structure

Five-page multi-page site:
- `index.html` — Home (hero, features, testimonials)
- `about.html` — Company story and credentials
- `services.html` — Service offerings
- `projects.html` — Portfolio gallery with category filter
- `contact.html` — Contact form
- `css/style.css` — Single stylesheet (~1400 lines)
- `js/main.js` — Single script file (~112 lines)

## CSS Architecture

Uses CSS custom properties (variables) defined in `:root` on `style.css`:
- `--dark-900` through `--dark-500`: blacks and charcoals (primary backgrounds/text)
- `--gold-600` through `--gold-300`: gold accent (CTAs, highlights)
- `--terra-600` through `--terra-400`: warm earthy tones (secondary accents)
- `--sand-100`, `--sand-200`: light neutral backgrounds

CSS follows BEM-style naming (`.nav__logo`, `.hero__title`, `.card__body`). Shared component styles (buttons, cards, section headers) are reused across pages via utility classes.

## JavaScript Behavior

`main.js` handles: sticky nav on scroll, mobile hamburger menu, scroll-reveal animations (IntersectionObserver), counter number animations, portfolio gallery category filtering, and contact form submission feedback. All vanilla JS, no dependencies.

## External CDN Dependencies

- **Google Fonts**: Oswald (headings), Inter (body)
- **Font Awesome 6.5.0** (icons): loaded from CDNJS

All pages must include both CDN links in `<head>` to render correctly.

## Shared Navigation

Each `.html` file contains a duplicated `<nav>` block with `class="active"` set on the current page's link. When adding pages or renaming nav items, update all five HTML files.
