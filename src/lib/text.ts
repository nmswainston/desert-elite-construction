const escapeHtml = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Words in the data files can carry three small marks: [[gold words]] become a highlighted span, {br} a line break, and {br-desktop} a
 * line break that only shows on wide screens. Everything else is plain text, so nothing a client types can add markup to the page.
 */
export function rich(text: string): string {
  return escapeHtml(text)
    .replace(/\[\[(.+?)\]\]/g, "<span>$1</span>")
    .replace(/\{br-desktop\}/g, '<br class="br-desktop">')
    .replace(/\{br\}/g, "<br>");
}

/** The words with the marks taken out, for places that cannot show them (a tab title, structured data). */
export function plain(text: string): string {
  return text.replace(/\[\[(.+?)\]\]/g, "$1").replace(/\{br(?:-desktop)?\}/g, " ");
}

/** "images/kitchen-1.jpg" from "/images/kitchen-1.jpg": the pages link to pictures without a leading slash. */
export const relative = (path: string) => path.replace(/^\//, "");

export const webpOf = (src: string) => src.replace(/\.jpe?g$/i, ".webp");

export const twoDigits = (n: number) => String(n).padStart(2, "0");
