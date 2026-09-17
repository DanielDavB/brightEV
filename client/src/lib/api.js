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

const CACHE_KEY = "bright-ev-cart-inventory-v4";
const CACHE_TTL = 15 * 60 * 1000;
const API_URL = import.meta.env.VITE_DRIVECO_API_URL || "";

export const fallbackCarts = [
  {
    id: "coala-cruzer",
    name: "Coala 4+2",
    eyebrow: "6 passenger · electric golf cart",
    image: "/coala-4-2.jpg",
    capacity: "Up to 6 passengers",
    range: "Up to 25 mph",
    price: "Call for current pricing",
    specs: ["48V 150Ah lithium battery", "48V 6.5kW AC motor", "4 forward + rear-facing seats"],
  },
  {
    id: "coala-4",
    name: "Coala 4",
    eyebrow: "4 passenger · electric golf cart",
    image: "/coala-4.jpg",
    capacity: "4 passengers",
    range: "Up to 25 mph",
    price: "Call for current pricing",
    specs: ["48V 150Ah lithium battery", "48V 6.5kW AC motor", "4 forward-facing seats"],
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
