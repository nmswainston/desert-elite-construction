import sharp from "sharp";
import { pictures } from "../data/pictures";
import type { Picture, PictureUse } from "../data/types";

/** The photo a place refers to, with this place's own description if it gave one. */
export function resolve(use: PictureUse): Picture {
  const base = pictures[use.picture];
  if (!base) throw new Error(`There is no photo called "${use.picture}" in src/data/pictures.ts.`);
  return { src: base.src, alt: use.alt ?? base.alt };
}

/** The photo's real width and height, read from the file, so a replaced photo of another shape is never stretched. */
export async function sizeOf(src: string) {
  const { width, height } = await sharp(`public${src}`).metadata();
  return { width, height };
}
