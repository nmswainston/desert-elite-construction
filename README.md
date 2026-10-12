# Desert Elite Homes & Construction

Marketing website for Desert Elite Homes & Construction, a custom home builder serving Scottsdale, Cave Creek, Carefree, Phoenix, and the greater Arizona area. Licensed, bonded, and insured (AZ ROC: 353956).

Live site: https://desertelitehomesandconstruction.com

## Overview

A fast, accessible, fully responsive static site built with [Astro](https://astro.build). It is plain HTML, CSS and a little vanilla JavaScript in the browser: no framework runs on the visitor's device. All the words, copy, links and photo descriptions live in small data files in `src/data/`, and the page files only draw them. That keeps a change to the words small, in one obvious place, and safe to check, whether a person makes it or Caret (the console.log(ic) website assistant) drafts it.

## Where to change things

| To change | Edit |
|---|---|
| The business name, licence number, areas served, Instagram link | `src/data/site.ts` |
| The menu and the quote button | `src/data/nav.ts` |
| The footer | `src/data/footer.ts` (the service links come from `services.ts`) |
| The tab title and the description search engines show, for each page | `src/data/pages.ts` |
| The six services (home card, Services page section, footer link, search description) | `src/data/services.ts` |
| The home page | `src/data/home.ts` |
| The About page | `src/data/about.ts` |
| The words around the services on the Services page | `src/data/servicesPage.ts` |
| The Gallery page | `src/data/projects.ts` |
| The Contact page words (not the form) | `src/data/contact.ts` |
| The 404 page | `src/data/notFound.ts` |
| Every photo's file and description | `src/data/pictures.ts` |

In the words, `[[gold words]]` show in the gold highlight, `{br}` is a line break and `{br-desktop}` is a line break that only shows on wide screens.

Not in data files, because they are code: the page layouts (`src/pages`, `src/components`, `src/layouts`), the stylesheet (`public/css/style.css`), the script (`public/js/main.js`), the quote form (`src/components/ContactForm.astro`, which Netlify Forms reads), the privacy policy text (`src/pages/privacy.astro`) and the structured data builder (`src/lib/schema.ts`).

## Photos

Photos are `.jpg` files in `public/images`, each listed in `src/data/pictures.ts` with a description. Every photo has **one** source file: the `.webp` copies are made from the `.jpg` files by `npm run images` (it runs before every build and dev start, and the `.webp` files are not committed).

To replace a photo, replace its `.jpg` with a file of the same name, and change its description in `pictures.ts` if it shows something different. The width and height on the page are read from the file, so a photo of another shape is never stretched.

To add a photo: put the `.jpg` in `public/images`, add it to `pictures.ts`, then add it where it should show (for the gallery, one entry at the end of `items` in `projects.ts`).

## Commands

```bash
npm install
npm run dev       # makes the .webp files, then runs the site at http://localhost:4321
npm run build     # makes the .webp files, type-checks, checks the content, then builds into dist/
npm run preview   # serves dist/
```

## What stops a broken edit

`npm run build` runs `astro check` (a wrong shape of data fails here) and then a content check (`src/lib/checkContent.ts`) as the site builds. It stops the build, and so the Netlify deploy preview, with a plain-English message if a photo file is missing or is not a `.jpg`, a photo has no description or a very long one, a link goes nowhere, a service link points at a service that does not exist, a title or search description is too long, a gallery tile has an unknown category or shape, or a `[[` has no `]]`.

## Deployment

Deployed on Netlify from `main` (`netlify.toml`: `npm run build`, publish `dist`, Node 20). Every pull request gets a deploy preview. The contact form posts to Netlify Forms (`data-netlify`, form name `contact`, with a honeypot). Visitor numbers come from Umami (no cookies).

The addresses are the same as before the Astro rebuild: `about.html` is still the file behind `/about`, and the redirects in `netlify.toml` still send the `.html` form to the clean address.

## Editing with Caret

`caret/site-config.json` and `caret/evals.json` are the registry entry and the test requests for Caret. Run `npm run check-site -- --site desert-elite` in the Caret repository after adding the entry there.
