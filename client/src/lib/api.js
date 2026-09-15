/**
 * Bright EV data layer
 *
 * Configure a real provider with VITE_DRIVECO_API_URL. The public DriveCoala
 * site exposes product information, but no documented browser-safe inventory
 * endpoint was found, so the UI uses resilient local mock data until a dealer
 * API URL is supplied.
 */

const CACHE_KEY = "bright-ev-cart-inventory-v1";
const CACHE_TTL = 15 * 60 * 1000;
const API_URL = import.meta.env.VITE_DRIVECO_API_URL || "";

export const fallbackCarts = [
  {
    id: "epic-e60",
    name: "EPIC E60",
    eyebrow: "Six passenger",
    image: "/manus-storage/bright-service-cart_1044517b.jpg",
    capacity: "6 passengers",
    range: "60+ miles",
    price: "Call for price",
    specs: ["Lithium electric", "Premium build", "Street ready"],
  },
  {
    id: "coala-cruzer",
    name: "Coala Cruzer",
    eyebrow: "Four passenger",
    image: "/manus-storage/bright-hero-cart_6418c749.jpg",
    capacity: "4 passengers",
    range: "51V lithium",
    price: "Call for price",
    specs: ["10.1 in display", "14 in wheels", "Bluetooth ready"],
  },
  {
    id: "icon-ev",
    name: "Icon EV",
    eyebrow: "Neighborhood edition",
    image: "/manus-storage/bright-lifestyle-cart_e05e1db1.jpg",
    capacity: "4 passengers",
    range: "Long range",
    price: "Call for price",
    specs: ["Quiet powertrain", "Comfort seats", "Custom options"],
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
