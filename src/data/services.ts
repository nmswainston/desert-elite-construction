import type { Service } from "./types";

/**
 * The six services, in the order the Services page shows them. Each one is written here once and used in four places: its card on the home
 * page (shortName, icon and cardText), its section on the Services page, its link in the footer (footerLabel), and what search engines read
 * (schemaDescription). The id is part of the page address (services.html#renovations), so never change it. Services with a picture are drawn
 * first; the rest sit side by side below them.
 */
export const services: Service[] = [
  {
    id: "custom-home-building",
    name: "Custom Home Building",
    shortName: "Custom Home Building",
    footerLabel: "Custom Home Building",
    icon: "fa-house",
    cardText: "Your vision, built from the ground up. We manage every phase, design coordination, permitting, framing, finishes, delivering a home that's entirely yours.",
    eyebrow: "Service 01",
    paragraphs: [
      "Building your custom home is the most significant investment you'll make. Desert Elite manages every phase with precision, from coordinating with your architect and engineer to pulling permits and delivering a finished home that's exactly what you envisioned.",
      "We build in Scottsdale, Cave Creek, Carefree, Phoenix, and the Greater Area.",
    ],
    list: [
      "Lot evaluation and site preparation",
      "Design coordination with your architect",
      "Full permit management",
      "Framing, roofing, and structural work",
      "Interior and exterior finish selections",
      "Final walkthrough and warranty",
    ],
    buttonLabel: "Start Your Build",
    buttonIcon: "fa-comments",
    image: { picture: "living-room-3" },
    schemaDescription: "Ground-up custom home construction managed through every phase, from coordinating with your architect and engineer to pulling permits and delivering the finished home.",
    homeLink: true,
  },
  {
    id: "renovations",
    name: "Renovations & Remodeling",
    shortName: "Renovations & Remodeling",
    footerLabel: "Renovations",
    icon: "fa-hammer",
    cardText: "Transform your existing space with expert renovations that add value, beauty, and function.",
    eyebrow: "Service 02",
    paragraphs: [
      "Whether you're refreshing the look or changing the entire layout, our renovation team transforms existing spaces with minimal disruption to your daily life. We plan ahead, work clean, and deliver on schedule.",
    ],
    list: [
      "Full home remodels",
      "Flooring, painting, and trim work",
      "Window and door replacements",
      "Structural changes and open-concept conversions",
      "Interior and exterior renovations",
    ],
    buttonLabel: "Request an Estimate",
    buttonIcon: "fa-comments",
    image: { picture: "bathroom-1" },
    schemaDescription: "Whole-home and partial renovations, including flooring, painting, trim, window and door replacement, structural changes, and open-concept conversions.",
  },
  {
    id: "kitchen-bath",
    name: "Kitchen & Bath Remodeling",
    shortName: "Kitchen & Bath",
    footerLabel: "Kitchen & Bath",
    icon: "fa-sink",
    cardText: "High-impact remodels where craftsmanship meets daily life, from layout to last fixture.",
    eyebrow: "Service 03",
    paragraphs: [
      "Kitchens and bathrooms are where your home earns its value, and where the quality of construction is most visible. Desert Elite delivers high-impact remodels that stand up to daily use and look stunning doing it.",
    ],
    list: [
      "Full gut and rebuild or cosmetic refresh",
      "Custom cabinetry and countertop installation",
      "Tile, backsplash, and flooring",
      "Plumbing and electrical rough-in",
      "Fixture and appliance installation",
    ],
    buttonLabel: "Start Your Remodel",
    buttonIcon: "fa-comments",
    image: { picture: "kitchen-1" },
    schemaDescription: "Full gut-and-rebuild or cosmetic kitchen and bathroom remodels, including custom cabinetry, countertops, tile, plumbing and electrical rough-in, and fixture installation.",
  },
  {
    id: "project-management",
    name: "Project Management & Consulting",
    shortName: "Project Management & Consulting",
    footerLabel: "Project Management",
    icon: "fa-clipboard-list",
    cardText: "Need expert oversight on an existing project? We provide independent project management to keep your build on schedule, on budget, and up to standard.",
    eyebrow: "Service 04",
    paragraphs: [
      "Already have a contractor but need expert oversight? Desert Elite provides independent project management and consulting to protect your investment, keep your project on schedule, and ensure quality at every phase.",
    ],
    list: [
      "Owner's representative services",
      "Budget and schedule oversight",
      "Contractor accountability",
      "Quality control inspections",
      "Design and build consulting",
    ],
    buttonLabel: "Request Consulting",
    buttonIcon: "fa-comments",
    image: { picture: "living-room-4" },
    schemaDescription: "Independent owner's representative services, budget and schedule oversight, contractor accountability, and quality control inspections for projects built by others.",
  },
  {
    id: "room-additions",
    name: "Room Additions",
    shortName: "Room Additions",
    footerLabel: "Room Additions",
    icon: "fa-ruler-combined",
    cardText: "Expand your footprint seamlessly, matching existing structure and aesthetics with precision.",
    eyebrow: "Service 05",
    paragraphs: [
      "Need more space without moving? A seamlessly integrated room addition is the answer. We match your existing structure, materials, and roofline so the addition looks like it was always part of the original design.",
    ],
    list: [
      "Bedroom and bathroom additions",
      "In-law suites and casitas",
      "Second-story additions",
      "Garage conversions and ADUs",
      "Full permit and engineering coordination",
    ],
    buttonLabel: "Get a Quote",
    buttonIcon: "fa-comments",
    schemaDescription: "Seamlessly integrated room additions matched to your existing structure, materials, and roofline, including casitas, in-law suites, second stories, garage conversions, and ADUs.",
  },
  {
    id: "lot-land-development",
    name: "Lot & Land Development",
    shortName: "Lot & Land Development",
    footerLabel: "Lot & Land Development",
    icon: "fa-map-location-dot",
    cardText: "From lot selection to site prep, we guide you through every step before breaking ground on your new home.",
    eyebrow: "Service 06",
    paragraphs: [
      "Finding the right land is the first step in building your dream home. Desert Elite guides you through lot selection, soil evaluation, utility access, and all the entitlements required before breaking ground.",
    ],
    list: [
      "Lot evaluation and due diligence",
      "Survey and boundary coordination",
      "Utility and infrastructure planning",
      "Entitlements and zoning navigation",
      "Site preparation and grading",
    ],
    buttonLabel: "Talk Land Development",
    buttonIcon: "fa-comments",
    schemaDescription: "Lot evaluation and due diligence, survey coordination, utility and infrastructure planning, entitlements and zoning navigation, site preparation, and grading.",
  },
];

/** The order of the service cards on the home page and the links in the footer, by id. */
export const serviceCardOrder: string[] = [
  "custom-home-building",
  "renovations",
  "room-additions",
  "kitchen-bath",
  "lot-land-development",
  "project-management",
];
