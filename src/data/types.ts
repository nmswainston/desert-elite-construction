/** A photo. src is a .jpg in public/images written like "/images/kitchen-1.jpg". alt says what it shows, for people who cannot see it. */
export interface Picture {
  src: string;
  alt: string;
}

/** A place that shows a photo from pictures.ts, by its id. alt is only given when this place needs its own description. */
export interface PictureUse {
  picture: string;
  alt?: string;
}

export interface Link {
  label: string;
  /** A page (such as contact.html), a place on a page (services.html#renovations), or a full address (https://...). */
  href: string;
}

/** A button. icon is a Font Awesome name such as "fa-comments"; outline buttons are the quieter style. */
export interface Button extends Link {
  icon?: string;
  outline?: boolean;
}

export interface Site {
  name: string;
  alternateName: string;
  url: string;
  slogan: string;
  /** What search engines read as the description of the business. */
  schemaDescription: string;
  licenseNumber: string;
  priceRange: string;
  areasServed: string[];
  state: string;
  serviceAreaText: string;
  instagram: { label: string; href: string };
  logoImage: string;
  /** The id (in pictures.ts) of the photo shown when a link to the site is shared. */
  shareImage: string;
}

export interface Footer {
  about: string;
  badges: string[];
  licenseLabel: string;
  navigationHeading: string;
  navigation: Link[];
  servicesHeading: string;
  contactHeading: string;
  website: Link;
  privacy: Link;
  copyrightYear: string;
  copyrightText: string;
  credit: { text: string; label: string; href: string };
}

export type PageKey = "home" | "about" | "services" | "projects" | "contact" | "privacy" | "notFound";

export interface PageMeta {
  /** The file name without .html. */
  file: string;
  title: string;
  description: string;
  /** Left out when it is the same as the title or the description. */
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  /** True when the page has share-card tags (Open Graph and Twitter). */
  social?: boolean;
  /** The id (in pictures.ts) of a photo to start loading early, because it is at the top of the page. */
  preloadImage?: string;
  robots?: string;
  /** The page's address on this site, such as "/about". */
  canonical?: string;
  /** What search engines read about the page. */
  schema?: {
    type: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
    description: string;
    /** The id (in pictures.ts) of the page's main photo. */
    primaryImage: string;
    breadcrumb?: string;
  };
}

export type Pages = Record<PageKey, PageMeta>;

export interface Cta {
  title: string;
  sub: string;
  buttons: Button[];
}

export interface PageHero {
  eyebrow: string;
  title: string;
  sub: string;
}

export interface Service {
  /** Part of the page address (services.html#renovations). Never change it. */
  id: string;
  name: string;
  shortName: string;
  footerLabel: string;
  icon: string;
  cardText: string;
  eyebrow: string;
  paragraphs: string[];
  list: string[];
  buttonLabel: string;
  buttonIcon: string;
  image?: PictureUse;
  schemaDescription: string;
  /** True when its card on the home page has a "Learn More" link. */
  homeLink?: boolean;
}

export interface Home {
  hero: { title: string; microcopy: string; buttons: Button[] };
  trust: Array<{ icon: string; label: string }>;
  services: { eyebrow: string; title: string; intro: string; learnMoreLabel: string; button: Button };
  stats: { eyebrow: string; title: string; items: Array<{ target: number; suffix: string; label: string }>; note: string };
  projects: { eyebrow: string; title: string; button: Button; items: Array<PictureUse & { name: string }> };
  process: { eyebrow: string; title: string; intro: string; steps: Array<{ title: string; text: string }> };
  cta: Cta;
}

export interface About {
  hero: PageHero;
  story: {
    image: PictureUse;
    badges: Array<{ num: string; label: string }>;
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  values: { eyebrow: string; title: string; items: Array<{ icon: string; title: string; text: string }> };
  credentials: { eyebrow: string; title: string; intro: string; items: Array<{ icon: string; title: string; text: string }> };
  cta: Cta;
}

export interface ServicesPage {
  hero: PageHero;
  why: { title: string; items: Array<{ icon: string; title: string; text: string }> };
  cta: Cta;
}

export interface Project extends PictureUse {
  /** custom, renovation or kitchen: the filter buttons use it. */
  category: string;
  type: string;
  title: string;
  /** Where the tile sits in the grid: hero, side, featured or full. */
  layout: string;
  /** How far down the picture it is centred, as a percentage (50 is the middle). */
  focus?: number;
}

export interface ProjectsPage {
  hero: PageHero;
  filters: Array<{ label: string; filter: string }>;
  items: Project[];
  note: { before: string; linkLabel: string; href: string; after: string };
  cta: Cta;
}

export interface ContactPage {
  hero: PageHero;
  expect: { eyebrow: string; title: string; steps: Array<{ title: string; text: string }> };
  form: { eyebrow: string; title: string };
  success: { title: string; text: string };
}

export interface NotFound {
  code: string;
  title: string;
  sub: string;
  buttons: Button[];
}
