# BrightEV

Static React/Babel site ready for GitHub Pages.

## Structure

- `index.html`: production entrypoint for GitHub Pages.
- `styles.css`: global stylesheet that imports the token layers.
- `_ds_bundle.js`: prebuilt design-system runtime consumed by the page.
- `tokens/`: color, typography, layout, motion, and base styles.
- `assets/images/`: marketing photography and brand assets.
- `ui_kits/website/`: the current homepage implementation and section modules.

## GitHub Pages

1. Publish the repository root as the Pages source.
2. Keep `.nojekyll` at the root so GitHub Pages serves `_ds_bundle.js`.
3. Open `/index.html` as the site entrypoint.

## Architecture note

The page is still a static React+Babel setup, so it can be iterated on without a build step. The asset base is centralized through `window.BrightEVAssetBase` and `window.BrightEVAssetBaseImages`, which keeps the same code working from the root or from the nested demo path.