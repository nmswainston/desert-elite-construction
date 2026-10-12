import { existsSync } from "node:fs";
import { about } from "../data/about";
import { contactPage } from "../data/contact";
import { footer } from "../data/footer";
import { home } from "../data/home";
import { nav, navButton } from "../data/nav";
import { notFound } from "../data/notFound";
import { pages } from "../data/pages";
import { pictures } from "../data/pictures";
import { projectsPage } from "../data/projects";
import { services } from "../data/services";
import { servicesPage } from "../data/servicesPage";
import { site } from "../data/site";
import type { PictureUse } from "../data/types";

// A picture is a .jpg written like "/images/name.jpg": no "..", no "//", no spaces.
const PICTURE = /^\/images\/(?!.*\.\.)(?!.*\/\/)[\w./-]+\.jpe?g$/i;
const PAGE_FILES = ["index.html", "about.html", "services.html", "projects.html", "contact.html", "privacy.html"];
const LAYOUTS = ["hero", "side", "featured", "full"];

/**
 * What a broken edit looks like, in plain words. The build runs this first, so a mistake fails the deploy preview and never reaches the live
 * site. Each message says what is wrong and where, so whoever reads a failed preview knows what to fix without reading code.
 */
export function problemsWithContent(): string[] {
  const problems: string[] = [];
  const serviceIds = new Set(services.map((s) => s.id));

  const description = (where: string, name: string, alt: string) => {
    if (alt.trim() === "") problems.push(`${where}: the photo "${name}" has no description. Say in a few words what it shows.`);
    else if (alt.length > 160) problems.push(`${where}: the description of "${name}" is over 160 characters. Keep it short.`);
  };
  // A place that shows a photo: the photo must be listed in pictures.ts, and a description of its own, if it has one, must be sensible.
  const photo = (where: string, use: PictureUse) => {
    if (!pictures[use.picture]) problems.push(`${where}: there is no photo called "${use.picture}" in pictures.ts.`);
    else if (use.alt !== undefined) description(where, use.picture, use.alt);
  };
  const required = (where: string, value: string) => {
    if (value.trim() === "") problems.push(`${where} is empty.`);
  };
  const link = (where: string, href: string) => {
    const [file, anchor] = href.split("#");
    if (/^https:\/\/\S+$/.test(href) || /^mailto:\S+@\S+$/.test(href) || /^tel:[+\d(][\d\s().-]*$/.test(href)) return;
    if (!PAGE_FILES.includes(file ?? "")) problems.push(`${where}: "${href}" is not a link that works. Use a page such as contact.html, or a full https:// address.`);
    else if (anchor !== undefined && file === "services.html" && !serviceIds.has(anchor)) problems.push(`${where}: "${href}" goes to a service that does not exist.`);
  };
  const marks = (where: string, text: string) => {
    if ((text.match(/\[\[/g) ?? []).length !== (text.match(/\]\]/g) ?? []).length) problems.push(`${where}: the [[ and ]] marks do not match up.`);
  };

  // Words that must not be left empty
  required("The business name", site.name);
  required("The licence number", site.licenseNumber);
  for (const [key, page] of Object.entries(pages)) {
    required(`The title of the ${key} page`, page.title);
    required(`The search description of the ${key} page`, page.description);
    if (page.title.length > 70) problems.push(`The title of the ${key} page is over 70 characters, so search results will cut it off.`);
    if (page.description.length > 200) problems.push(`The search description of the ${key} page is over 200 characters, so search results will cut it off.`);
    if (page.preloadImage) photo(`The ${key} page, the photo it loads early`, { picture: page.preloadImage });
    if (page.schema) photo(`The ${key} page, its main photo`, { picture: page.schema.primaryImage });
  }

  // Photos
  for (const [id, item] of Object.entries(pictures)) {
    if (!PICTURE.test(item.src)) problems.push(`The photo "${id}": the file "${item.src}" must be a .jpg in the images folder, written like "/images/name.jpg".`);
    else if (!existsSync(`public${item.src}`)) problems.push(`The photo "${id}": the file "${item.src}" is not in the images folder.`);
    description("pictures.ts", id, item.alt);
  }
  photo("The About page story", about.story.image);
  photo("The picture shared when a link is posted", { picture: site.shareImage });
  home.projects.items.forEach((item, i) => photo(`Home page, recent work, picture ${i + 1}`, item));
  projectsPage.items.forEach((item, i) => {
    photo(`Gallery, project ${i + 1}`, item);
    required(`Gallery, project ${i + 1}, title`, item.title);
    if (!LAYOUTS.includes(item.layout)) problems.push(`Gallery, project ${i + 1}: the tile shape "${item.layout}" must be one of ${LAYOUTS.join(", ")}.`);
    if (!projectsPage.filters.some((f) => f.filter === item.category)) problems.push(`Gallery, project ${i + 1}: the category "${item.category}" has no filter button.`);
  });
  for (const service of services) {
    if (service.image) photo(`The ${service.name} service`, service.image);
    required(`The name of a service`, service.name);
    if (!/^[a-z][a-z0-9-]*$/.test(service.id)) problems.push(`The service "${service.name}" has an id "${service.id}" that must be lowercase words joined by hyphens.`);
    if (service.list.length === 0) problems.push(`The ${service.name} service has no list of what is included.`);
  }
  if (serviceIds.size !== services.length) problems.push("Two services share the same id. Each id must be different.");

  // Links
  for (const l of nav) link(`The menu, "${l.label}"`, l.href);
  link("The quote button", navButton.href);
  for (const l of footer.navigation) link(`The footer, "${l.label}"`, l.href);
  link("The privacy link", footer.privacy.href);
  for (const b of [...home.hero.buttons, home.services.button, home.projects.button, ...home.cta.buttons, ...about.cta.buttons, ...servicesPage.cta.buttons, ...projectsPage.cta.buttons, ...notFound.buttons]) link(`The button "${b.label}"`, b.href);
  link("The link under the gallery", projectsPage.note.href);

  // Marks used inside words
  for (const [where, text] of [
    ["Home page headline for services", home.services.title],
    ["Home page headline for numbers", home.stats.title],
    ["Home page headline for recent work", home.projects.title],
    ["Home page headline for how we work", home.process.title],
    ["The About story headline", about.story.title],
    ["The About values headline", about.values.title],
    ["The Gallery headline", projectsPage.hero.title],
    ["The Contact headline", contactPage.hero.title],
  ] as const) marks(where, text);

  return problems;
}

/** Stops the build when the content has problems. */
export function assertContent(): void {
  const problems = problemsWithContent();
  if (problems.length > 0) {
    throw new Error(`The site's content has ${problems.length === 1 ? "a problem" : "problems"}:\n- ${problems.join("\n- ")}`);
  }
}
