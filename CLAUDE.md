# CLAUDE.md

Guidance for Claude Code working in this repository. Read `README.md` first.

## What this is

The marketing site for Desert Elite Homes & Construction, built with Astro. It is edited by people and by Caret, an assistant that drafts
changes as pull requests from the client's plain English requests. It is built so those changes are small, in one obvious place, and safe to check.

## Rules

- **All words, links and photo descriptions live in `src/data/`.** Do not put copy, a link or a photo path in a page or component. A new
  kind of content gets its own data file, a type in `src/data/types.ts`, and a check in `src/lib/checkContent.ts`.
- **Say each fact once.** The business name, licence number and areas are in `site.ts`. A photo's description is in `pictures.ts`, and a place
  that shows it refers to it by id (`{ picture: "kitchen-1" }`), giving its own `alt` only when it truly needs a different one.
- **Photos are `.jpg` files in `public/images`.** Never commit a `.webp`: `npm run images` makes them. Never write a width and height for a
  photo: they are read from the file.
- **Keep data files plain.** Text, numbers, links, lists and field names only. No functions, imports (other than the type import at the top),
  template literals with code, or logic. Computed things belong in `src/lib`.
- The page's look is `public/css/style.css`. Do not change class names in the pages without checking the stylesheet and `public/js/main.js`.
- **Keep Caret's settings and test notes out of this repository.** They live in the Caret repository. Caret searches this repository on every request and quotes what it finds to the client, so anything here that repeats the site's wording (test requests, notes) shows up in what the client reads.
- No em dashes anywhere (code, comments, docs, commit messages, page copy).
- `npm run build` must pass before a pull request is opened. Compare the built pages with the live site when a change is meant to leave them unchanged.

## Do not touch without a person

The quote form (`src/components/ContactForm.astro`), the privacy policy text, `netlify.toml`, the Umami script in `BaseLayout.astro`, and the
licence number and credential claims (licensed, bonded, insured, years of experience): they are legal or business claims the client must confirm.
