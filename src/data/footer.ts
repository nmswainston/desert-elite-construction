import type { Footer } from "./types";

/** The words at the bottom of every page. */
export const footer: Footer = {
  about: "Building refined desert homes with uncompromising craftsmanship, honest pricing, and a reputation built on referrals.",
  badges: ["Licensed", "Bonded", "Insured"],
  licenseLabel: "AZ ROC:",
  navigationHeading: "Navigation",
  navigation: [
    { label: "Home", href: "index.html" },
    { label: "About Us", href: "about.html" },
    { label: "Services", href: "services.html" },
    { label: "Gallery", href: "projects.html" },
    { label: "Contact", href: "contact.html" },
  ],
  servicesHeading: "Services",
  contactHeading: "Contact",
  website: {
    label: "desertelitehomesandconstruction.com",
    href: "https://desertelitehomesandconstruction.com",
  },
  privacy: { label: "Privacy Policy", href: "privacy.html" },
  copyrightYear: "2026",
  copyrightText: "Desert Elite Homes & Construction. All rights reserved.",
  credit: { text: "Crafted by", label: "console.log(ic)", href: "https://www.consolelogic.net" },
};
