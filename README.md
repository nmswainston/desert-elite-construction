# Desert Elite Homes & Construction

Marketing website for Desert Elite Homes & Construction, a custom home builder serving Scottsdale, Cave Creek, Carefree, Phoenix, and the greater Arizona area. Licensed, bonded, and insured (AZ ROC: 353956).

Live site: https://www.desertelitehomesandconstruction.com

## Overview

A fast, accessible, fully responsive static website. No frameworks and no build step: just HTML5, CSS3, and vanilla JavaScript served directly to the browser.

## Tech stack

- HTML5 with semantic landmarks (one `header`, `nav`, `main`, `footer` per page)
- CSS3 with custom properties and BEM-style class naming (single stylesheet)
- Vanilla JavaScript, no dependencies
- Google Fonts (Oswald, Inter) and Font Awesome 6 via CDN
- Deployed on Netlify, with the contact form wired to Netlify Forms

## Pages

- `index.html`: Home (hero, services overview, stats, project preview, process, CTA)
- `about.html`: Company story, values, and credentials
- `services.html`: Six service offerings with anchor links from the footer
- `projects.html`: Filterable portfolio gallery with a lightbox
- `contact.html`: Quote request form (Netlify Forms, honeypot spam protection)
- `404.html`: Custom not-found page

## Project structure

```
.
├── index.html
├── about.html
├── services.html
├── projects.html
├── contact.html
├── 404.html
├── css/
│   └── style.css        # single stylesheet, CSS custom properties + BEM
├── js/
│   └── main.js          # sticky nav, mobile menu, scroll reveal, counters,
│                        # gallery filter + lightbox, contact form handling
├── images/              # photography, logos, favicons (jpg/webp/png)
└── netlify.toml         # security headers + caching rules
```

## Local development

There is no build step. Open any `.html` file directly, or serve the folder with any static server:

```bash
# Python 3
python -m http.server 8000

# then visit http://localhost:8000
```

Note: the contact form posts to Netlify Forms, so its submit flow only works on the deployed site, not against a plain local server.

## Deployment

Hosted on Netlify. Connect the repository (Add new site, Import from Git) and Netlify reads `netlify.toml` automatically:

- Publish directory: repository root (`publish = "."`)
- Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- Caching: HTML, CSS, and JS revalidate on each request so updates go live immediately; images cache for 30 days

Every push to `main` triggers an automatic deploy.

## Accessibility and quality

- Exactly one `h1` per page with correct heading order
- All four landmark regions on every page
- Labels tied to every form field, descriptive `alt` text on every image, decorative icons marked `aria-hidden`
- Visible keyboard focus styles and a keyboard-operable gallery lightbox
- No inline styles: all styling lives in `css/style.css`
- Responsive across mobile, tablet, and desktop

## Credit

Crafted by [console.log(ic)](https://www.consolelogic.net)
