import { projectsPage } from "../data/projects";
import { resolve } from "./pictures";
import { pages } from "../data/pages";
import { services } from "../data/services";
import { site } from "../data/site";
import type { PageKey } from "../data/types";

/** What search engines read about the business and the page. It is built from the data files, so it never drifts from the words on the page. */
export function structuredData(key: PageKey) {
  const page = pages[key];
  if (!page.schema) return undefined;
  const abs = (path: string) => `${site.url}${path}`;
  const areaServed = [...site.areasServed.map((name) => ({ "@type": "City", name })), { "@type": "State", name: site.state }];
  const here = abs(page.canonical ?? "/");

  const business = {
    "@type": "HomeAndConstructionBusiness",
    "@id": abs("/#business"),
    name: site.name,
    alternateName: site.alternateName,
    url: abs("/"),
    logo: { "@type": "ImageObject", "@id": abs("/#logo"), url: abs(site.logoImage), caption: site.name },
    image: abs(resolve({ picture: site.shareImage }).src),
    description: site.schemaDescription,
    slogan: site.slogan,
    priceRange: site.priceRange,
    currenciesAccepted: "USD",
    address: { "@type": "PostalAddress", addressRegion: "AZ", addressCountry: "US" },
    identifier: { "@type": "PropertyValue", name: "AZ ROC License", value: site.licenseNumber },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `Arizona ROC License ${site.licenseNumber}`,
      recognizedBy: { "@type": "GovernmentOrganization", name: "Arizona Registrar of Contractors", url: "https://roc.az.gov/" },
    },
    areaServed,
    knowsAbout: services.map((s) => s.name),
    contactPoint: { "@type": "ContactPoint", contactType: "sales", url: abs("/contact"), availableLanguage: "English", areaServed: "US" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", "@id": abs(`/services#${s.id}`), name: s.name, url: abs(`/services#${s.id}`) },
      })),
    },
  };

  const website = { "@type": "WebSite", "@id": abs("/#website"), url: abs("/"), name: site.name, publisher: { "@id": abs("/#business") }, inLanguage: "en-US" };
  const webpageId = key === "home" ? abs("/#webpage") : `${here}#webpage`;
  const webpage = {
    "@type": page.schema.type,
    "@id": webpageId,
    url: here,
    name: page.title,
    description: page.schema.description,
    isPartOf: { "@id": abs("/#website") },
    about: { "@id": abs("/#business") },
    inLanguage: "en-US",
    ...(page.schema.breadcrumb ? { breadcrumb: { "@id": `${here}#breadcrumb` } } : {}),
    primaryImageOfPage: { "@type": "ImageObject", url: abs(resolve({ picture: page.schema.primaryImage }).src) },
    ...(key === "projects"
      ? {
          mainEntity: {
            "@type": "ImageGallery",
            name: `${site.name} project gallery`,
            associatedMedia: projectsPage.items.map((_, i) => ({ "@id": abs(`/projects#img-${i + 1}`) })),
          },
        }
      : {}),
  };

  const graph: unknown[] = [business, website];
  if (page.schema.breadcrumb) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${here}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
        { "@type": "ListItem", position: 2, name: page.schema.breadcrumb, item: here },
      ],
    });
  }
  graph.push(webpage);
  if (key === "services") {
    for (const s of services) {
      graph.push({
        "@type": "Service",
        "@id": abs(`/services#${s.id}`),
        name: s.name,
        description: s.schemaDescription,
        serviceType: s.name,
        provider: { "@id": abs("/#business") },
        areaServed,
        url: abs(`/services#${s.id}`),
      });
    }
  }
  if (key === "projects") {
    projectsPage.items.forEach((item, i) => {
      const photo = resolve(item);
      graph.push({
        "@type": "ImageObject",
        "@id": abs(`/projects#img-${i + 1}`),
        contentUrl: abs(photo.src),
        url: abs(photo.src),
        caption: photo.alt,
        representativeOfPage: i === 0,
        creditText: site.name,
      });
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
