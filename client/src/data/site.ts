/**
 * Bright EV Golf Carts — real business + product content
 *
 * Every value here was checked against a live source (2026-09-17, re-checked 2026-09-23):
 *  - https://brightevgolfcarts.com/  (the current real Bright EV Golf Carts site — contact info, tone)
 *  - https://brightev.com/golf-cart-parts-and-service/  (the real service page we link out to)
 *  - https://brightev.com/vehicles-coala-golf-carts/ and its product pages (Coala inventory and specs)
 *
 * Where the source material does not expose a specific number, we intentionally use
 * honest generic phrasing instead of inventing one.
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
} as const;

export const SERVICE_LINK_URL = "https://brightev.com/golf-cart-parts-and-service/";
// Phone number shown on the linked brightev.com service page itself (a separate,
// multi-state service network under the same parent company). Kept distinct from
// the local San Diego dealership number above.
export const SERVICE_NETWORK_PHONE = "888-260-0707";
export const SERVICE_NETWORK_PHONE_HREF = "tel:+18882600707";

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
      "The Coala 2 is a compact two-passenger electric cart with modern styling, responsive everyday driving, and a footprint that is easy to maneuver around neighborhoods, communities, resorts, and recreational spaces.",
    specs: [
      { label: "Seating", value: "2 passengers" },
      { label: "Motor", value: "48V 6.5kW AC motor, 8 HP" },
      { label: "Battery", value: "48V 105Ah lithium" },
      { label: "Range", value: "37-49 miles" },
      { label: "Speed", value: "12-25 mph" },
      { label: "Dimensions", value: "94 x 56 x 82 in" },
      { label: "Suspension", value: "Double wishbone independent front suspension" },
      { label: "Brakes", value: "Four-wheel hydraulic disc brakes" },
    ],
    verified: true,
    note: "Bright EV lists the Coala 2 as a street-legal electric cart with automotive paint, electromagnetic parking brake, 30% gradeability, and 3.9-5.9 in of ground clearance.",
    fallbackImage: "/hero-fleet.jpg",
  },
  {
    slug: "2-plus-2",
    photoSlugs: ["2-plus-2"],
    id: "2-plus-2",
    eyebrow: "Street legal",
    title: "2+2 Seater",
    titleEm: "carts.",
    description:
      "The Coala 2+2 combines a compact footprint with two forward-facing seats and a rear-facing seat, giving up to four passengers a comfortable, easy-to-maneuver electric ride.",
    specs: [
      { label: "Seating", value: "2+2 seating, up to 4 passengers" },
      { label: "Motor", value: "48V 6.5kW AC motor, 8 HP" },
      { label: "Battery", value: "48V 105Ah lithium" },
      { label: "Range", value: "37-49 miles" },
      { label: "Speed", value: "12-25 mph" },
      { label: "Dimensions", value: "119 x 56 x 82 in" },
      { label: "Suspension", value: "Double wishbone independent front suspension" },
      { label: "Brakes", value: "Four-wheel hydraulic disc brakes" },
    ],
    verified: true,
    note: "Bright EV lists the Coala 2+2 with automotive paint, electromagnetic parking brake, 30% gradeability, and 3.9-5.9 in of ground clearance.",
    fallbackImage: "/hero-fleet.jpg",
  },
  {
    slug: "4-seater",
    photoSlugs: ["4-seater"],
    id: "4-seater",
    eyebrow: "Street legal",
    title: "4 Seater",
    titleEm: "carts.",
    description:
      "The Coala 4 Golf Cart offers comfortable seating for 4 passengers with a clean, modern design and premium electric performance. Its four forward-facing seats make it a practical choice for families, communities, resorts, and recreational driving.",
    specs: [
      { label: "Seating", value: "4 passengers - four forward-facing seats" },
      { label: "Motor", value: "48V 6.5kW AC motor, 8 HP" },
      { label: "Battery", value: "48V 150Ah lithium" },
      { label: "Range", value: "37-49 miles" },
      { label: "Speed", value: "12-25 mph" },
      { label: "Dimensions", value: "119 x 56 x 82 in" },
      { label: "Suspension", value: "Double wishbone independent front suspension" },
      { label: "Brakes", value: "Four-wheel hydraulic disc brakes" },
    ],
    verified: true,
    note: "Bright EV lists the Coala 4 with automotive paint, electromagnetic parking brake, 30% gradeability, and 3.9-5.9 in of ground clearance.",
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
      { label: "Seating", value: "Up to 6 passengers - 4 forward-facing + 2 rear-facing" },
      { label: "Motor", value: "48V 6.5kW AC motor, 8 HP" },
      { label: "Battery", value: "48V 150Ah lithium" },
      { label: "Range", value: "37-49 miles" },
      { label: "Speed", value: "12-25 mph" },
      { label: "Dimensions", value: "149 x 56 x 82 in" },
      { label: "Suspension", value: "Double wishbone independent front suspension" },
      { label: "Brakes", value: "Four-wheel hydraulic disc brakes" },
    ],
    verified: true,
    note: "Bright EV lists the Coala 4+2 with automotive paint, electromagnetic parking brake, 30% gradeability, and 3.9-5.9 in of ground clearance.",
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
      "The Coala 2 Utility combines two-passenger seating with a rear cargo bed for commercial properties, resorts, campuses, maintenance teams, and everyday hauling.",
    specs: [
      { label: "Seating", value: "2 passengers" },
      { label: "Motor", value: "48V 6.5kW AC motor, 8 HP" },
      { label: "Battery", value: "48V 105Ah lithium" },
      { label: "Range", value: "37-49 miles" },
      { label: "Speed", value: "12-25 mph" },
      { label: "Cargo bed", value: "39 x 51 in or 63 x 73 in" },
      { label: "Suspension", value: "Double wishbone independent front suspension" },
      { label: "Brakes", value: "Four-wheel hydraulic disc brakes" },
    ],
    verified: true,
    note: "Bright EV lists the Coala 2 Utility with automotive paint, electromagnetic parking brake, 30% gradeability, and 3.9-5.9 in of ground clearance.",
    fallbackImage: "/banner-service.jpg",
  },
];

/**
 * The Coala lineup is the only inventory this dealership sells. Specs mirror the
 * verified category data above (drivecoala.com / brightev.com); prices are not
 * published by either source, so the site asks visitors to request a quote.
 */
export interface CoalaModel {
  slug: string;
  name: string;
  layout: string;
  seats: string;
  seatsLabel: string;
  tagline: string;
  battery: string;
  range: string;
  speed: string;
  image: string;
  description: string;
}

const categoryDescription = (slug: string) =>
  [...STREET_LEGAL_CATEGORIES, ...COMMERCIAL_CATEGORIES].find((category) => category.slug === slug)!.description;

export const COALA_MODELS: CoalaModel[] = [
  {
    slug: "coala-2",
    name: "Coala 2",
    layout: "2 Seater",
    seats: "2",
    seatsLabel: "2 passengers",
    tagline: "Compact two-seater that is easy to maneuver.",
    battery: "48V 105Ah lithium",
    range: "37–49 mi",
    speed: "12–25 mph",
    image: "/models/coala-2.jpg",
    description: categoryDescription("2-seater"),
  },
  {
    slug: "coala-2-2",
    name: "Coala 2+2",
    layout: "2+2 Seater",
    seats: "4",
    seatsLabel: "Up to 4 passengers",
    tagline: "Two forward seats plus a rear-facing seat.",
    battery: "48V 105Ah lithium",
    range: "37–49 mi",
    speed: "12–25 mph",
    image: "/models/coala-2-2.jpg",
    description: categoryDescription("2-plus-2"),
  },
  {
    slug: "coala-4",
    name: "Coala 4",
    layout: "4 Seater",
    seats: "4",
    seatsLabel: "4 passengers",
    tagline: "Four forward-facing seats for the whole family.",
    battery: "48V 150Ah lithium",
    range: "37–49 mi",
    speed: "12–25 mph",
    image: "/models/coala-4.jpg",
    description: categoryDescription("4-seater"),
  },
  {
    slug: "coala-4-2",
    name: "Coala 4+2",
    layout: "4+2 Seater",
    seats: "6",
    seatsLabel: "Up to 6 passengers",
    tagline: "Four forward seats plus a rear-facing seat for groups.",
    battery: "48V 150Ah lithium",
    range: "37–49 mi",
    speed: "12–25 mph",
    image: "/models/coala-4-2.jpg",
    description: categoryDescription("4-plus-2"),
  },
  {
    slug: "coala-2-utility",
    name: "Coala 2 Utility",
    layout: "Utility",
    seats: "2",
    seatsLabel: "2 passengers + cargo bed",
    tagline: "Two seats and a rear cargo bed (39×51 in or 63×73 in).",
    battery: "48V 105Ah lithium",
    range: "37–49 mi",
    speed: "12–25 mph",
    image: "/models/coala-2-utility.jpg",
    description: categoryDescription("utility"),
  },
];

export const coalaModel = (slug: string) => COALA_MODELS.find((model) => model.slug === slug)!;

/**
 * Bright EV network facts, confirmed on brightev.com (2026-09-23): financing
 * terms from the finance page, rental rates from the rentals page, the
 * multi-state location list and nationwide delivery from the locations and
 * story pages.
 */
export const NETWORK = {
  states: "California, Arizona, Nevada, New Mexico and Hawaii",
  cities: "San Diego · Tempe · Scottsdale · Las Vegas · Henderson · Honolulu · Albuquerque",
  textLine: "858-249-9030",
  locationsHref: "https://brightev.com/locations/",
  reviewsHref: "https://brightev.com/bright-ev-customer-reviews/",
  financeFacts: {
    promo: "0% interest for 24 months",
    lowPayment: "$199/mo",
    terms: "24, 36 or 48 months",
    minScore: "650",
  },
  rentalFrom: "$225/day",
} as const;

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
