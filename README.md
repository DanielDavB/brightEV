# Bright EV Golf Carts

React 19 + TypeScript + Vite site for Bright EV Golf Carts (San Diego).

## Structure

- `client/`: the Vite app — `src/pages/` (Home, Street Legal, Commercial, Services, Contact), `src/components/`, `src/data/site.ts` (all real, sourced business/product copy), `src/data/cart-photos.json` (real inventory photo manifest), `public/carts/`: curated real inventory photos.
- `server/`: minimal Express static file server (only needed for non-static hosts; GitHub Pages doesn't use it).
- `assets/images/Real carts/`: original RAW (.CR2) inventory photography — source material, not served by the site.

## Development

```
pnpm install
pnpm dev      # http://localhost:3000
pnpm check    # tsc --noEmit
pnpm exec vite build   # production build to dist/public
```

## GitHub Pages

Deployment is automatic via `.github/workflows/deploy.yml` on every push to `main`: it builds with `pnpm exec vite build` and publishes `dist/public` through GitHub's official Pages Actions. Make sure the repo's Settings → Pages → Source is set to **GitHub Actions**.

The production build is served from `https://<user>.github.io/brightEV/`, so `vite.config.ts` sets `base: "/brightEV/"` for the `build` command (dev keeps `/`). If the repo is ever renamed or moved to a custom domain, update that `base` value (and add a `CNAME` file for a custom domain).

## Content accuracy

Every business fact and product spec in `client/src/data/site.ts` was checked against a live source (brightevgolfcarts.com, brightev.com, drivecoala.com) as of the date noted in that file's header comment. Anything that couldn't be verified is marked `verified: false` with a `note` explaining what's still unconfirmed — check those before removing the "to confirm" UI notes.
