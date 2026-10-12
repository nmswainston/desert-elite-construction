// Makes a .webp beside every .jpg in public/images, so each photo has exactly one source file.
// Visitors' browsers load the .webp (it is smaller) and fall back to the .jpg. When a photo is replaced,
// only the .jpg changes, and the next build or `npm run images` makes the new .webp.
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const dir = "public/images";
let made = 0;

for (const name of readdirSync(dir)) {
  if (!/\.jpe?g$/i.test(name)) continue;
  const source = join(dir, name);
  const target = join(dir, name.replace(/\.jpe?g$/i, ".webp"));
  let upToDate = false;
  try {
    upToDate = statSync(target).mtimeMs >= statSync(source).mtimeMs;
  } catch {
    // no .webp yet
  }
  if (upToDate) continue;
  await sharp(source).rotate().webp({ quality: 76 }).toFile(target);
  made += 1;
}

console.log(`images: ${made} .webp file${made === 1 ? "" : "s"} made`);
