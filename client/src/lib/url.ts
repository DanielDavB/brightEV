/**
 * Prefixes an app-internal path with Vite's configured base (e.g. "/brightEV/"
 * in production, "/" in dev). Needed for plain <a href> tags that link to a
 * route + hash (e.g. "/street-legal#2-seater") — wouter's <Link> already
 * applies the base automatically, but the anchor tags used for in-page
 * category jumps are not routed through wouter, so they need it applied by hand.
 */
export function withBase(path: string): string {
  if (/^([a-z]+:)?\/\//i.test(path)) return path; // already absolute (http(s)://, //cdn...)
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (base && path.startsWith(`${base}/`)) return path; // already prefixed
  return `${base}${path}`;
}
