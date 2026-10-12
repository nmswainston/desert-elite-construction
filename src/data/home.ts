import type { Home } from "./types";

/** Everything on the home page. [[Words in double brackets]] show in the gold highlight, and {br} is a line break. */
export const home: Home = {
  hero: {
    title: "Custom Homes. Renovations. Additions.",
    microcopy: "Detail-driven construction for custom builds, remodels, and additions that feel thoughtfully built from the first plan to the final walkthrough.",
    buttons: [
      { label: "Request a Quote", href: "contact.html", icon: "fa-comments" },
      { label: "View Gallery", href: "projects.html", icon: "fa-images", outline: true },
    ],
  },
  trust: [
    { icon: "fa-shield-halved", label: "Licensed" },
    { icon: "fa-link", label: "Bonded" },
    { icon: "fa-umbrella", label: "Insured" },
    { icon: "fa-certificate", label: "AZ ROC: 353956" },
    {
      icon: "fa-location-dot",
      label: "Serving Scottsdale, Cave Creek, Carefree, Phoenix, and the Greater Area",
    },
  ],
  services: {
    eyebrow: "What We Build",
    title: "Full-Service [[Construction]]",
    intro: "From breaking ground on a dream custom home to refreshing a kitchen, Desert Elite brings the same relentless attention to detail to every project.",
    learnMoreLabel: "Learn More",
    button: { label: "View All Services", href: "services.html", outline: true },
  },
  stats: {
    eyebrow: "Why Desert Elite",
    title: "Built on [[Experience]]",
    items: [
      { target: 38, suffix: "+", label: "Years of Experience" },
      { target: 100, suffix: "%", label: "Licensed & Insured" },
    ],
    note: "Every project backed by decades of hands-on construction expertise, so you can build with confidence.",
  },
  projects: {
    eyebrow: "Recent Work",
    title: "Built With [[Pride]]",
    button: { label: "View Gallery", href: "projects.html", outline: true },
    items: [
      { picture: "bathroom-2", name: "Spa Bath & Courtyard" },
      { picture: "kitchen-1", name: "Chef's Kitchen" },
      { picture: "living-room-3", name: "Open-Concept Great Room" },
    ],
  },
  process: {
    eyebrow: "How We Work",
    title: "The Desert Elite [[Process]]",
    intro: "Transparent. Structured. Zero surprises.",
    steps: [
      {
        title: "Free Consultation",
        text: "We sit down with you, no cost, no obligation, to understand your vision, timeline, and budget.",
      },
      {
        title: "Design & Estimate",
        text: "Detailed scope of work, material selections, and a transparent, itemized estimate before any work begins.",
      },
      {
        title: "Permits & Approvals",
        text: "We pull all required permits and coordinate with the city, you don't lift a finger.",
      },
      {
        title: "Construction",
        text: "Our crews show up on time, every day. Regular updates keep you informed throughout every phase.",
      },
      {
        title: "Final Walkthrough",
        text: "We walk every inch with you to ensure every detail meets our standards, and yours.",
      },
      {
        title: "Warranty & Support",
        text: "We stand behind our work long after the last nail is driven. You're covered.",
      },
    ],
  },
  cta: {
    title: "Ready to Build [[Something Great?]]",
    sub: "Contact Desert Elite today for a free, no-obligation consultation and estimate. Let's bring your project to life.",
    buttons: [
      { label: "Request a Quote", href: "contact.html", icon: "fa-comments" },
      { label: "View Gallery", href: "projects.html", icon: "fa-images", outline: true },
    ],
  },
};
