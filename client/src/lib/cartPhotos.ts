/**
 * Real cart photo manifest loader.
 *
 * A parallel process converts real inventory photos into
 * client/public/carts/<category-slug>/<color-slug>/*.jpg and writes a manifest to
 * client/src/data/cart-photos.json shaped like:
 *   { "2-seat": { "baby-blue-tan-seat": ["/carts/2-seat/baby-blue-tan-seat/01.jpg", ...] } }
 *
 * That file may not exist yet when this app is built. We use import.meta.glob so a
 * missing manifest is simply an empty match (no build error), and wrap the dynamic
 * import in try/catch so any runtime failure also degrades gracefully to the fallback
 * images passed in by the caller.
 */

export type CartPhotoManifest = Record<string, Record<string, string[]>>;
export interface CartPhotoColor {
  slug: string;
  label: string;
  photos: string[];
}

const manifestLoaders = import.meta.glob("../data/cart-photos.json");

let cachedManifest: CartPhotoManifest | null | undefined;

export async function loadCartPhotoManifest(): Promise<CartPhotoManifest | null> {
  if (cachedManifest !== undefined) return cachedManifest;

  const key = Object.keys(manifestLoaders)[0];
  if (!key) {
    cachedManifest = null;
    return cachedManifest;
  }

  try {
    const mod = (await manifestLoaders[key]()) as { default: CartPhotoManifest };
    cachedManifest = mod?.default ?? null;
  } catch {
    cachedManifest = null;
  }

  return cachedManifest;
}

function formatColorLabel(colorSlug: string): string {
  return colorSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getCategoryColorOptions(
  manifest: CartPhotoManifest | null,
  categorySlugs: string[],
): CartPhotoColor[] {
  if (!manifest) return [];

  const options: CartPhotoColor[] = [];
  for (const slug of categorySlugs) {
    const colors = manifest[slug];
    if (!colors) continue;
    for (const [colorSlug, photos] of Object.entries(colors)) {
      options.push({ slug: colorSlug, label: formatColorLabel(colorSlug), photos });
    }
  }

  return options;
}

/** Flatten every photo across the given manifest category slugs (all colors combined). */
export function getCategoryPhotos(
  manifest: CartPhotoManifest | null,
  categorySlugs: string[],
  fallback: string[],
): string[] {
  const photos = getCategoryColorOptions(manifest, categorySlugs).flatMap((option) => option.photos);
  return photos.length ? photos : fallback;
}
