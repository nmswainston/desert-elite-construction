import type { ProjectsPage } from "./types";

/**
 * The Gallery page. Each project is a picture (a .jpg in public/images), a short description of it, its category (custom, renovation or kitchen,
 * which the filter buttons use), its caption, and the shape of its tile (hero, side, featured or full, which is where it sits in the grid).
 * To add a project, add one entry to the end of items.
 */
export const projectsPage: ProjectsPage = {
  hero: {
    eyebrow: "Portfolio",
    title: "Work We're [[Proud Of]]",
    sub: "Every project tells a story. Here's a look at what Desert Elite has built across Scottsdale, Cave Creek, Carefree, Phoenix, and the Greater Area.",
  },
  filters: [
    { label: "All Projects", filter: "all" },
    { label: "Custom Homes", filter: "custom" },
    { label: "Renovations", filter: "renovation" },
    { label: "Kitchen & Bath", filter: "kitchen" },
  ],
  items: [
    {
      picture: "kitchen-1",
      category: "kitchen",
      type: "Kitchen & Bath",
      title: "Chef's Kitchen & Island",
      layout: "hero",
      focus: 50,
    },
    {
      picture: "living-room-3",
      category: "custom",
      type: "Custom Home",
      title: "Open-Concept Great Room",
      layout: "side",
      focus: 50,
    },
    {
      picture: "living-room-4",
      category: "custom",
      type: "Custom Home",
      title: "Great Room & Pool View",
      layout: "side",
      focus: 50,
    },
    {
      picture: "bathroom-1",
      category: "renovation",
      type: "Renovation",
      title: "Spa Bath Remodel",
      layout: "featured",
      focus: 50,
    },
    {
      picture: "bathroom-2",
      category: "kitchen",
      type: "Kitchen & Bath",
      title: "Spa Bath & Courtyard",
      layout: "featured",
      focus: 50,
    },
    {
      picture: "new-sunset-home",
      category: "custom",
      type: "Custom Home",
      title: "Scottsdale Desert Estate",
      layout: "full",
      focus: 60,
    },
  ],
  note: {
    before: "More projects added regularly, check back soon or ",
    linkLabel: "ask us about our portfolio",
    href: "contact.html",
    after: ".",
  },
  cta: {
    title: "Ready to Be Our [[Next Project?]]",
    sub: "Contact us for a free estimate and let's talk about what we can build for you.",
    buttons: [
      { label: "Request a Quote", href: "contact.html", icon: "fa-comments" },
      { label: "View Services", href: "services.html", icon: "fa-list", outline: true },
    ],
  },
};
