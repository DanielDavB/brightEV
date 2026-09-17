/**
 * Bright EV Golf Carts — real business + product content
 *
 * Every value here was checked against a live source on 2026-09-15:
 *  - https://brightevgolfcarts.com/  (the current real Bright EV Golf Carts site — contact info, tone)
 *  - https://brightev.com/golf-cart-parts-and-service/  (the real service page we link out to)
 *  - https://drivecoala.com/  (the Coala brand site — the only inventory brand in scope)
 *
 * Where the source material did not expose a specific number (a model name, a price,
 * an exact spec) we intentionally use honest generic phrasing instead of inventing one.
 * Those spots are marked `verified: false` and flagged in the UI with a short note.
 */

export const CONTACT = {
  phone: "(858) 222-4915",
  phoneHref: "tel:+18582224915",
  email: "sales@brightevgolfcarts.com",
  emailHref: "mailto:sales@brightevgolfcarts.com",
  addressLine1: "4150 Mission Blvd UNIT 141",
  addressLine2: "San Diego, CA 92109",
  addressFull: "4150 Mission Blvd UNIT 141, San Diego, CA 92109",
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "4150 Mission Blvd UNIT 141, San Diego, CA 92109",
  )}`,
  tagline: "Brightening Your Drive, One Cart at a Time.",
  descriptor: "San Diego's electric cart specialists",
  hoursNote: "Hours not posted online — call ahead to confirm before you visit.",
  instagramHref: "https://www.instagram.com",
} as const;

export const SERVICE_LINK_URL = "https://brightev.com/golf-cart-parts-and-service/";
// Phone number shown on the linked brightev.com service page itself (a separate,
// multi-state service network under the same parent company). Kept distinct from
// the local San Diego dealership number above.
export const SERVICE_NETWORK_PHONE = "888-260-0707";
export const SERVICE_NETWORK_PHONE_HREF = "tel:+18882600707";

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Street Legal",
    href: "/street-legal",
    children: [
      { label: "2 Seater", href: "/street-legal#2-seater" },
      { label: "4 Seater", href: "/street-legal#4-seater" },
      { label: "4+2 Seater", href: "/street-legal#4-plus-2" },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial",
    children: [{ label: "Utility", href: "/commercial#utility" }],
  },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export interface CartCategoryCopy {
  slug: string;
  /** cart-photos.json keys whose photos should be shown for this category */
  photoSlugs: string[];
  id: string;
  eyebrow: string;
  title: string;
  titleEm: string;
  description: string;
  specs: { label: string; value: string }[];
  verified: boolean;
  note?: string;
  fallbackImage: string;
}

// Facts confirmed brand-wide on https://drivecoala.com/.../about-coala/ — not tied to
// one specific model, so safe to reuse across every Coala category below.
export const COALA_BRAND_WARRANTY =
  "Every Coala comes with a 10-year battery cell warranty, a 3-year factory warranty on the body, and a lifetime warranty on the frame.";

export const STREET_LEGAL_CATEGORIES: CartCategoryCopy[] = [
  {
    slug: "2-seater",
    photoSlugs: ["2-seat"],
    id: "2-seater",
    eyebrow: "Street legal",
    title: "2 Seater",
    titleEm: "carts.",
    description:
      "A compact, street-legal Coala for two — the easiest way to swap a short car trip for an electric one around the neighborhood or the boardwalk.",
    specs: [],
    verified: false,
    note: "Coala's public model pages (drivecoala.com) currently detail the 4-passenger Cruzer and Coast only — a named 2-seat model and its exact specs were not confirmed. Ask our team for current availability.",
    fallbackImage: "/hero-fleet.jpg",
  },
  {
    slug: "4-seater",
    photoSlugs: ["4-seater", "2-plus-2"],
    id: "4-seater",
    eyebrow: "Street legal",
    title: "4 Seater",
    titleEm: "carts.",
    description:
      "The Coala 4 Golf Cart offers comfortable seating for 4 passengers with a clean, modern design and premium electric performance. Its four forward-facing seats make it a practical choice for families, communities, resorts, and recreational driving.",
    specs: [
      { label: "Seating", value: "4 passengers — four forward-facing seats" },
      { label: "Motor", value: "48V 6.5kW AC motor, up to 25 mph" },
      { label: "Battery", value: "48V 150Ah lithium" },
      { label: "Suspension", value: "Double wishbone independent front suspension" },
      { label: "Brakes", value: "Four-wheel hydraulic disc brakes" },
      { label: "Use", value: "Families, communities, resorts, and recreation" },
    ],
    verified: true,
    note: "Bright EV describes the Coala 4 as a premium four-passenger golf cart with smooth electric performance and refined everyday control.",
    fallbackImage: "/hero-fleet.jpg",
  },
  {
    slug: "4-plus-2",
    photoSlugs: ["4-plus-2"],
    id: "4-plus-2",
    eyebrow: "Street legal",
    title: "4+2 Seater",
    titleEm: "carts.",
    description:
      "The Coala 4+2 is built for larger groups, with four forward-facing seats plus a rear-facing seat. Its longer body brings added passenger capacity while maintaining the modern styling and premium feel of the Coala lineup.",
    specs: [
      { label: "Seating", value: "Up to 6 passengers — four forward-facing plus rear-facing seat" },
      { label: "Motor", value: "48V 6.5kW AC motor, up to 25 mph" },
      { label: "Battery", value: "48V 150Ah lithium" },
      { label: "Suspension", value: "Double wishbone independent front suspension" },
      { label: "Brakes", value: "Four-wheel hydraulic disc brakes" },
      { label: "Use", value: "Neighborhoods, resorts, campuses, and recreation" },
    ],
    verified: true,
    note: "Bright EV describes the Coala 4+2 as a larger-group golf cart with smooth electric performance, premium styling, and added passenger capacity.",
    fallbackImage: "/hero-fleet.jpg",
  },
];

export const COMMERCIAL_CATEGORIES: CartCategoryCopy[] = [
  {
    slug: "utility",
    photoSlugs: ["utility"],
    id: "utility",
    eyebrow: "Commercial",
    title: "Utility",
    titleEm: "carts.",
    description:
      "Work-ready electric carts for property, hospitality, and campus use — built for hauling, not just cruising.",
    specs: [],
    verified: false,
    note: "Coala's own utility/commercial line was not confirmed on drivecoala.com (their utility ATV line is marketed under a separate, non-Coala brand). Since this redesign only carries genuine Coala inventory, treat this section as a placeholder until Bright EV confirms a Coala-branded utility model.",
    fallbackImage: "/banner-service.jpg",
  },
];

export const SERVICES_OFFERED = [
  "Multi-point inspections",
  "Brake service",
  "Steering & suspension repair",
  "Electrical diagnostics",
  "Controller & motor testing",
  "Tire service",
  "Performance calibration",
  "Lead-acid to lithium (ECO Battery) upgrades",
  "Mobile service to your location",
];
