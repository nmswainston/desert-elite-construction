import type { About } from "./types";

/** The About page. [[Words in double brackets]] show in the gold highlight, and {br} is a line break. */
export const about: About = {
  hero: {
    eyebrow: "Who We Are",
    title: "Built on [[Integrity.]]{br}Proven by Results.",
    sub: "A family of desert builders committed to doing the job right, every time, without exception.",
  },
  story: {
    image: { picture: "living-room-3", alt: "Desert Elite custom home great room interior" },
    badges: [
      { num: "38+", label: "Years Building{br}Locally" },
      { num: "100%", label: "Licensed &{br}Insured" },
    ],
    eyebrow: "Our Story",
    title: "Local Roots.{br}[[Elite Standards.]]",
    paragraphs: [
      "Desert Elite Homes and Construction was founded on a simple belief: homeowners deserve a contractor who shows up when they say they will, does what they say they'll do, and stands behind every nail driven.",
      "We've been building and renovating homes across Scottsdale, Cave Creek, Carefree, Phoenix, and the Greater Area for over 38 years. From Scottsdale custom builds to Phoenix kitchen remodels, our crew brings the same level of precision and pride to every project, no matter the size.",
      "Fully licensed, bonded, and insured in the state of Arizona (ROC: 353956), we operate with complete transparency from the first estimate to the final walkthrough.",
    ],
  },
  values: {
    eyebrow: "What Drives Us",
    title: "Our Core [[Values]]",
    items: [
      {
        icon: "fa-handshake",
        title: "Integrity First",
        text: "We tell you what a job costs before we start, not after. No hidden charges, no scope creep surprises. You get what we agreed to.",
      },
      {
        icon: "fa-medal",
        title: "Craftsmanship",
        text: "Our crews take pride in the details. From framing to finish carpentry, we hold every element to a standard we'd be proud to put in our own homes.",
      },
      {
        icon: "fa-comments",
        title: "Clear Communication",
        text: "You hear from us regularly throughout your project, not just at the start and end. You'll always know what's happening and why.",
      },
      {
        icon: "fa-clock",
        title: "Respect for Your Time",
        text: "We show up when we say we will. We set realistic timelines and hit them. Your schedule matters as much as your project.",
      },
    ],
  },
  credentials: {
    eyebrow: "Credentials",
    title: "Fully [[Qualified]]",
    intro: "Every credential in place. Every requirement met. You hire Desert Elite with complete confidence.",
    items: [
      {
        icon: "fa-shield-halved",
        title: "Licensed",
        text: "Arizona Registrar of Contractors{br}ROC License No. 353956",
      },
      {
        icon: "fa-link",
        title: "Bonded",
        text: "Surety bond in place protecting{br}clients throughout every project",
      },
      {
        icon: "fa-umbrella",
        title: "Insured",
        text: "General liability & workers' comp{br}coverage on every job site",
      },
    ],
  },
  cta: {
    title: "Let's Build [[Together]]",
    sub: "Ready to get started? Reach out today for a free consultation and estimate.",
    buttons: [
      { label: "Get a Quote", href: "contact.html", icon: "fa-comments" },
      { label: "Explore Services", href: "services.html", icon: "fa-list", outline: true },
    ],
  },
};
