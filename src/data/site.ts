import type { Site } from "./types";

/** Who the business is. The licence number, the name and the web address are repeated across the site and in what search engines read, so they live here once. */
export const site: Site = {
  name: "Desert Elite Homes & Construction",
  alternateName: "Desert Elite Homes and Construction",
  url: "https://desertelitehomesandconstruction.com",
  slogan: "Custom Homes. Renovations. Additions.",
  schemaDescription: "Custom home builder serving Scottsdale, Cave Creek, Carefree, Phoenix, and the greater Arizona area. Licensed, bonded, and insured. AZ ROC: 353956.",
  licenseNumber: "353956",
  priceRange: "$$$",
  areasServed: ["Scottsdale", "Cave Creek", "Carefree", "Phoenix"],
  state: "Arizona",
  serviceAreaText: "Serving Scottsdale, Cave Creek, Carefree, Phoenix, and the Greater Area",
  instagram: { label: "Desert Elite Homes on Instagram", href: "https://www.instagram.com/desert_elite_homes/" },
  logoImage: "/brand/desert-elite-logo-color.png",
  shareImage: "new-sunset-home",
};
