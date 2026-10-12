import type { ServicesPage } from "./types";

/** The words around the services on the Services page (the services themselves are in services.ts). */
export const servicesPage: ServicesPage = {
  hero: {
    eyebrow: "What We Do",
    title: "Services Built for [[Every Stage]]",
    sub: "From raw land to a finished luxury home, and everything in between. Desert Elite has the expertise, crew, and commitment to deliver.",
  },
  why: {
    title: "Why Desert [[Elite?]]",
    items: [
      { icon: "fa-certificate", title: "AZ Licensed", text: "ROC: 353956" },
      { icon: "fa-dollar-sign", title: "Honest Pricing", text: "Itemized estimates upfront" },
      { icon: "fa-calendar-check", title: "On-Time Delivery", text: "We hit our deadlines" },
    ],
  },
  cta: {
    title: "Your Project Starts with [[One Conversation]]",
    sub: "Free estimates, zero pressure.{br-desktop}Tell us what you're building and we'll take it from there.",
    buttons: [
      { label: "Request a Quote", href: "contact.html", icon: "fa-comments" },
      { label: "See Gallery", href: "projects.html", icon: "fa-images", outline: true },
    ],
  },
};
