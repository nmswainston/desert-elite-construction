import type { NotFound } from "./types";

/** The page people see when an address does not exist. */
export const notFound: NotFound = {
  code: "404",
  title: "Page [[Not Found]]",
  sub: "The page you're looking for doesn't exist or may have moved. Let's get you back on track.",
  buttons: [
    { label: "Back to Home", href: "index.html", icon: "fa-house" },
    { label: "Contact Us", href: "contact.html", icon: "fa-comments", outline: true },
  ],
};
