import type { Button, Link } from "./types";

/** The menu, in order. The Instagram link and the quote button come after these on the page. */
export const nav: Link[] = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Services", href: "services.html" },
  { label: "Gallery", href: "projects.html" },
  { label: "Contact", href: "contact.html" },
];

/** The "Request a Quote" button beside the menu. */
export const navButton: Button = { label: "Request a Quote", href: "contact.html" };
