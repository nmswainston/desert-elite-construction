import type { Picture } from "./types";

/**
 * Every photo on the site, written once. The key is the picture's id (the file name without .jpg) and src is the file in public/images.
 * To replace a photo, replace its .jpg file with the same name and, if it shows something different, change its description here.
 * Every page that shows the photo uses this description unless it gives its own.
 */
export const pictures: Record<string, Picture> = {
  "bathroom-2": { src: "/images/bathroom-2.jpg", alt: "Spa bathroom opening to a private desert courtyard" },
  "kitchen-1": {
    src: "/images/kitchen-1.jpg",
    alt: "Chef's kitchen with a large island opening to a covered desert patio",
  },
  "living-room-3": {
    src: "/images/living-room-3.jpg",
    alt: "Open-concept great room with a linear fireplace and desert views",
  },
  "bathroom-1": {
    src: "/images/bathroom-1.jpg",
    alt: "Remodeled spa bathroom with a freestanding tub, dual vanity, and walk-in shower",
  },
  "living-room-4": {
    src: "/images/living-room-4.jpg",
    alt: "Living room with a fireplace and desert pool view through sliding glass doors",
  },
  "new-sunset-home": { src: "/images/new-sunset-home.jpg", alt: "Custom home exterior at sunset" },
};
