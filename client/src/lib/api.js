/**
 * Bright EV data layer
 *
 * Configure a real provider with VITE_DRIVECO_API_URL. The public DriveCoala
 * site exposes product information, but no documented browser-safe inventory
 * endpoint was found, so the UI uses resilient local mock data until a dealer
 * API URL is supplied.
 *
 * fallbackCarts below is grounded in the real, public Coala model pages
 * (drivecoala.com), checked 2026-09-15 — this redesign only carries genuine
 * Coala inventory. Pricing was not published on those pages, so "Call for
 * current pricing" is used instead of an invented number.
 */

const CACHE_KEY = "bright-ev-cart-inventory-v1";
const CACHE_TTL = 15 * 60 * 1000;
const API_URL = import.meta.env.VITE_DRIVECO_API_URL || "";

export const fallbackCarts = [
  {
    id: "coala-cruzer",
    name: "Coala Cruzer",
    eyebrow: "4 passenger · street legal",
    image: "/hero-fleet.jpg",
    capacity: "4 passengers",
    range: "50–60 mile range",
    price: "Call for current pricing",
    specs: ["51V lithium battery", "10.1 in touch display", "14 in wheels"],
  },
  {
    id: "coala-coast",
    name: "Coala Coast",
    eyebrow: "4 passenger · street legal",
    image: "/hero-fleet.jpg",
    capacity: "4 passengers",
    range: "50–60 mile range",
    price: "Call for current pricing",
    specs: ["5kW / 6.3kW motor", "Backup camera", "Premium plush seating"],
  },
];

function readCache() {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
    if (cached && Date.now() - cached.timestamp < CACHE_TTL && Array.isArray(cached.data)) return cached.data;
  } catch {
    // Ignore unavailable or malformed browser storage.
  }
  return null;
}

function writeCache(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data })); } catch { /* Storage is optional. */ }
}

export async function getCartInventory() {
  const cached = readCache();
  if (cached) return { data: cached, source: "cache" };
  if (!API_URL) return { data: fallbackCarts, source: "fallback" };

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4500);
  try {
    const response = await fetch(API_URL, { headers: { Accept: "application/json" }, signal: controller.signal });
    if (!response.ok) throw new Error(`Inventory request failed: ${response.status}`);
    const payload = await response.json();
    const data = Array.isArray(payload) ? payload : payload.carts;
    if (!Array.isArray(data) || !data.length) throw new Error("Inventory response is empty");
    writeCache(data);
    return { data, source: "live" };
  } catch {
    return { data: fallbackCarts, source: "fallback" };
  } finally {
    window.clearTimeout(timeout);
  }
}
