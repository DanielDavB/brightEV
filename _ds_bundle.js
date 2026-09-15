/* @ds-bundle: {"format":4,"namespace":"BrightEVDesignSystem_89bdae","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"FilterPill","sourcePath":"components/actions/FilterPill.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"PlayButton","sourcePath":"components/actions/PlayButton.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"BrandCard","sourcePath":"components/cards/BrandCard.jsx"},{"name":"FeatureBlock","sourcePath":"components/cards/FeatureBlock.jsx"},{"name":"FlagshipCard","sourcePath":"components/cards/FlagshipCard.jsx"},{"name":"PhotoTile","sourcePath":"components/cards/PhotoTile.jsx"},{"name":"PillarCard","sourcePath":"components/cards/PillarCard.jsx"},{"name":"ProcessStep","sourcePath":"components/cards/ProcessStep.jsx"},{"name":"PromoBanner","sourcePath":"components/cards/PromoBanner.jsx"},{"name":"RegionalMapCard","sourcePath":"components/cards/RegionalMapCard.jsx"},{"name":"SpecTile","sourcePath":"components/cards/SpecTile.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"TrustItem","sourcePath":"components/cards/TrustItem.jsx"},{"name":"UseCaseCard","sourcePath":"components/cards/UseCaseCard.jsx"},{"name":"VehicleCard","sourcePath":"components/cards/VehicleCard.jsx"},{"name":"Badge","sourcePath":"components/foundation/Badge.jsx"},{"name":"Chip","sourcePath":"components/foundation/Chip.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"},{"name":"Kicker","sourcePath":"components/foundation/Kicker.jsx"},{"name":"SectionHeading","sourcePath":"components/foundation/SectionHeading.jsx"},{"name":"StarRating","sourcePath":"components/foundation/StarRating.jsx"},{"name":"PromoStrip","sourcePath":"components/navigation/PromoStrip.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"BRIGHTEV_NAV","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Hero","sourcePath":"components/sections/Hero.jsx"},{"name":"SplitPanel","sourcePath":"components/sections/SplitPanel.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"58c35b0269db","components/actions/FilterPill.jsx":"4cd49107a9ef","components/actions/IconButton.jsx":"9dfc33bd33f3","components/actions/PlayButton.jsx":"c6e835d33092","components/brand/Logo.jsx":"afd0d17d8733","components/cards/BrandCard.jsx":"605241c9d15c","components/cards/FeatureBlock.jsx":"9225c37fb421","components/cards/FlagshipCard.jsx":"0cdeb1c721f7","components/cards/PhotoTile.jsx":"1d6bafc4a384","components/cards/PillarCard.jsx":"df655cfb17bc","components/cards/ProcessStep.jsx":"439241439d95","components/cards/PromoBanner.jsx":"88d5129577c5","components/cards/RegionalMapCard.jsx":"f1ef95d43870","components/cards/SpecTile.jsx":"d16381cb2b8c","components/cards/TestimonialCard.jsx":"347590bf0902","components/cards/TrustItem.jsx":"8e0d26cc0020","components/cards/UseCaseCard.jsx":"d76acb5d88b6","components/cards/VehicleCard.jsx":"17a116380140","components/foundation/Badge.jsx":"7e3367d161c1","components/foundation/Chip.jsx":"65c51e6cf8e6","components/foundation/Icon.jsx":"43f38e5f0af2","components/foundation/Kicker.jsx":"119e090c1c89","components/foundation/SectionHeading.jsx":"84f1855df46a","components/foundation/StarRating.jsx":"ec2e0ebe8866","components/foundation/icon-data.js":"23679da98e1e","components/navigation/PromoStrip.jsx":"81721f36daf2","components/navigation/SiteFooter.jsx":"ccd09d91b325","components/navigation/SiteHeader.jsx":"4b35309ec795","components/sections/Hero.jsx":"a70fbca7a635","components/sections/SplitPanel.jsx":"de0379df6e5f","ui_kits/website/Home.jsx":"88919457a02d","ui_kits/website/HomeSections.jsx":"296222733d3d"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/foundation/icon-data.js"},{"name":"icons","sourcePath":"components/foundation/icon-data.js"}]} */

(() => {

const __ds_ns = (window.BrightEVDesignSystem_89bdae = window.BrightEVDesignSystem_89bdae || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/FilterPill.jsx
try { (() => {
/** Tab inside the "Find Your Ride" category selector. */
function FilterPill({
  children,
  active = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 2,
      padding: '8px 20px',
      background: active ? 'var(--bev-gold-light)' : 'transparent',
      color: active ? 'var(--bev-black-ink)' : 'var(--bev-sand)',
      boxShadow: active ? 'var(--shadow-hairline)' : 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: active ? 700 : 600,
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.6px',
      textTransform: 'uppercase',
      transition: 'background var(--dur-micro) var(--ease-out-expo), color var(--dur-micro) var(--ease-out-expo)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { FilterPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/FilterPill.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/** BrightEV brand lockup. 'image' uses the real logo bitmap; 'type' is the Oswald wordmark used in the footer. */
function Logo({
  variant = 'image',
  width = 215,
  assetBase = '',
  tagline = true,
  style
}) {
  if (variant === 'image') {
    return /*#__PURE__*/React.createElement("img", {
      src: assetBase + 'assets/logo/brightev-logo-horizontal.png',
      alt: "BrightEV \u2014 Electric Golf Vehicles",
      style: {
        width,
        height: 'auto',
        display: 'block',
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: '32px',
      letterSpacing: '-0.65px',
      color: 'var(--bev-white)'
    }
  }, "BRIGHT"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 700,
      fontSize: 26,
      lineHeight: '32px',
      letterSpacing: '0.52px',
      color: 'var(--bev-gold)',
      padding: '0 2px'
    }
  }, "EV")), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 9,
      lineHeight: '13.5px',
      letterSpacing: '2.25px',
      color: 'var(--bev-gold-light)',
      textTransform: 'uppercase'
    }
  }, "Electric Golf Vehicles"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/BrandCard.jsx
try { (() => {
/** Manufacturer card in the brand explorer: white logo well, name, blurb, explore link. */
function BrandCard({
  logo,
  name,
  body,
  linkLabel = 'EXPLORE →',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bev-lift bev-zoom-media",
    style: {
      width: 233.59,
      borderRadius: 4,
      background: 'var(--bev-surface-1)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 2,
      background: 'var(--bev-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '27.2px 12px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: name,
    style: {
      width: 177.59,
      height: 96.77,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '27px',
      letterSpacing: '0.9px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '27px',
      letterSpacing: '0.9px',
      textTransform: 'uppercase',
      color: 'var(--bev-sand)',
      whiteSpace: 'pre-line'
    }
  }, body), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '27px',
      letterSpacing: '0.9px',
      textTransform: 'uppercase',
      color: 'var(--bev-gold-light)'
    }
  }, linkLabel)));
}
Object.assign(__ds_scope, { BrandCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BrandCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FlagshipCard.jsx
try { (() => {
/** Glass price card floated over hero photography. */
function FlagshipCard({
  eyebrow = 'Flagship edition',
  model,
  priceLabel = 'Starting from',
  price,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 4,
      background: 'var(--bev-overlay-80)',
      backdropFilter: 'var(--blur-glass)',
      display: 'flex',
      flexDirection: 'row',
      gap: 24,
      padding: '14px 20px',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 10,
      lineHeight: '14px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--bev-gold-light)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '30px',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)'
    }
  }, model)), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--bev-surface-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      padding: '4px 20px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 10,
      lineHeight: '14px',
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      color: 'var(--bev-sand)',
      textAlign: 'right'
    }
  }, priceLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: '24px',
      color: 'var(--bev-gold-light)'
    }
  }, price)));
}
Object.assign(__ds_scope, { FlagshipCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FlagshipCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PhotoTile.jsx
try { (() => {
/** Photo tile with a bottom-up scrim and an uppercase caption. */
function PhotoTile({
  src,
  caption,
  ratio = 'square',
  captionSize = 11,
  scrim = 'strong',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bev-tile bev-lift bev-zoom-media",
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 4,
      background: 'var(--bev-surface-1)',
      boxShadow: scrim === 'strong' ? 'var(--shadow-card)' : 'var(--shadow-hairline)',
      aspectRatio: ratio === 'square' ? '1 / 1' : '4 / 3',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: caption || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 12,
      background: scrim === 'strong' ? 'var(--bev-caption-scrim)' : 'var(--bev-caption-scrim-soft)'
    }
  }, caption && /*#__PURE__*/React.createElement("span", {
    className: "bev-tile-cap",
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: captionSize,
      lineHeight: captionSize === 16 ? '24px' : '16.5px',
      letterSpacing: captionSize === 16 ? '0.8px' : '0.55px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { PhotoTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PhotoTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProcessStep.jsx
try { (() => {
/** Numbered delivery step: gold circle, bold title, grey caption. */
function ProcessStep({
  number,
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 12,
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 12,
      background: 'var(--bev-gold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--bev-black-ink)'
    }
  }, number)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--bev-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--bev-muted)'
    }
  }, body)));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Badge.jsx
try { (() => {
/** Small uppercase label used over product imagery and beside model names. */
function Badge({
  children,
  variant = 'gold',
  style
}) {
  const v = {
    gold: {
      background: 'var(--bev-gold-tint-20)',
      color: 'var(--bev-gold-light)',
      weight: 600,
      ls: '0.5px'
    },
    neutral: {
      background: 'var(--bev-surface-4)',
      color: 'var(--bev-sand)',
      weight: 400,
      ls: '0.5px'
    },
    overlay: {
      background: 'var(--bev-overlay-80)',
      color: 'var(--bev-gold-light)',
      weight: 400,
      ls: '1px'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      borderRadius: 2,
      padding: variant === 'overlay' ? '2px 8px' : '2px 10px',
      background: v.background,
      color: v.color,
      fontFamily: 'var(--font-body)',
      fontWeight: v.weight,
      fontSize: 10,
      lineHeight: '15px',
      letterSpacing: v.ls,
      textTransform: 'uppercase',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Badge.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Chip.jsx
try { (() => {
/** Flat surface chip listing a secondary capability, e.g. "Mobile Maintenance". */
function Chip({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      borderRadius: 2,
      padding: '4px 10px',
      background: 'var(--bev-surface-4)',
      color: 'var(--bev-white)',
      fontSize: 12,
      lineHeight: '16px',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Chip.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Kicker.jsx
try { (() => {
/** The small uppercase eyebrow that opens nearly every BrightEV section. */
function Kicker({
  children,
  tone = 'dark',
  tracking = 'wide',
  align = 'left',
  style
}) {
  const ls = tracking === 'tight' ? '2.2px' : tracking === 'wider' ? '2.5px' : '2.75px';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: ls,
      textTransform: 'uppercase',
      textAlign: align,
      color: tone === 'light' ? 'var(--bev-gold)' : 'var(--bev-gold-light)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/foundation/SectionHeading.jsx
try { (() => {
/** Kicker + Cinzel display heading + optional lede — the standard BrightEV section opener. */
function SectionHeading({
  kicker,
  title,
  lede,
  size = 'md',
  tone = 'dark',
  align = 'center',
  maxWidth = 672,
  style
}) {
  const scale = {
    xl: {
      fs: 52,
      lh: '56px',
      ls: '-1.04px',
      w: 700
    },
    md: {
      fs: 36,
      lh: '42px',
      ls: '0',
      w: 600
    },
    sm: {
      fs: 26,
      lh: '32px',
      ls: '-0.65px',
      w: 700
    }
  }[size];
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      padding: '7px 0',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth,
      ...style
    }
  }, kicker && /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    tone: tone,
    align: align
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: scale.w,
      fontSize: scale.fs,
      lineHeight: scale.lh,
      letterSpacing: scale.ls,
      textTransform: 'uppercase',
      textAlign: align,
      color: light ? 'var(--bev-ink)' : 'var(--bev-white)',
      whiteSpace: 'pre-line'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '1px 0',
      fontSize: 14,
      lineHeight: '22px',
      textAlign: align,
      color: light ? 'var(--bev-muted)' : 'var(--bev-sand)'
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/foundation/icon-data.js
try { (() => {
// BrightEV icon set — path data extracted verbatim from the source Figma file.
const icons = {
  "bolt": {
    "viewBox": "0 0 14.083 21.667",
    "body": "<path d=\"M 10.292 21.667 L 10.292 18.417 L 7.583 18.417 L 11.375 13 L 11.375 16.25 L 14.083 16.25 L 10.292 21.667 L 10.292 21.667 M 2.167 19.5 L 2.167 19.5 L 2.167 19.5 L 2.167 19.5 L 2.167 19.5 L 2.167 19.5 L 2.167 19.5 L 2.167 19.5 L 2.167 19.5 L 2.167 19.5 M 1.083 21.667 C 0.776 21.667 0.519 21.563 0.311 21.355 C 0.104 21.148 0 20.89 0 20.583 L 0 3.25 C 0 2.943 0.104 2.686 0.311 2.478 C 0.519 2.27 0.776 2.167 1.083 2.167 L 3.25 2.167 L 3.25 0 L 7.583 0 L 7.583 2.167 L 9.75 2.167 C 10.057 2.167 10.314 2.27 10.522 2.478 C 10.73 2.686 10.833 2.943 10.833 3.25 L 10.833 10.833 C 10.454 10.833 10.084 10.865 9.723 10.928 C 9.362 10.991 9.01 11.086 8.667 11.212 L 8.667 4.333 L 2.167 4.333 L 2.167 19.5 L 4.713 19.5 C 4.857 19.915 5.033 20.303 5.241 20.665 C 5.448 21.026 5.697 21.36 5.985 21.667 L 1.083 21.667 L 1.083 21.667\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "check-badge": {
    "viewBox": "0 0 16 16",
    "body": "<path d=\"M 1.667 17.5 C 1.208 17.5 0.816 17.337 0.49 17.01 C 0.163 16.684 0 16.292 0 15.833 L 0 5.833 C 0 5.375 0.163 4.983 0.49 4.656 C 0.816 4.33 1.208 4.167 1.667 4.167 L 3.333 4.167 C 3.333 3.014 3.74 2.031 4.552 1.219 C 5.365 0.406 6.347 0 7.5 0 C 8.653 0 9.635 0.406 10.448 1.219 C 11.26 2.031 11.667 3.014 11.667 4.167 L 13.333 4.167 C 13.792 4.167 14.184 4.33 14.51 4.656 C 14.837 4.983 15 5.375 15 5.833 L 15 15.833 C 15 16.292 14.837 16.684 14.51 17.01 C 14.184 17.337 13.792 17.5 13.333 17.5 L 1.667 17.5 L 1.667 17.5 M 1.667 15.833 L 13.333 15.833 L 13.333 15.833 L 13.333 15.833 L 13.333 5.833 L 13.333 5.833 L 13.333 5.833 L 1.667 5.833 L 1.667 5.833 L 1.667 5.833 L 1.667 15.833 L 1.667 15.833 L 1.667 15.833 L 1.667 15.833 M 7.5 10.833 C 8.653 10.833 9.635 10.427 10.448 9.615 C 11.26 8.802 11.667 7.819 11.667 6.667 L 10 6.667 C 10 7.361 9.757 7.951 9.271 8.438 C 8.785 8.924 8.194 9.167 7.5 9.167 C 6.806 9.167 6.215 8.924 5.729 8.438 C 5.243 7.951 5 7.361 5 6.667 L 3.333 6.667 C 3.333 7.819 3.74 8.802 4.552 9.615 C 5.365 10.427 6.347 10.833 7.5 10.833 L 7.5 10.833 M 5 4.167 L 10 4.167 C 10 3.472 9.757 2.882 9.271 2.396 C 8.785 1.91 8.194 1.667 7.5 1.667 C 6.806 1.667 6.215 1.91 5.729 2.396 C 5.243 2.882 5 3.472 5 4.167 L 5 4.167 M 1.667 15.833 L 1.667 15.833 L 1.667 15.833 L 1.667 5.833 L 1.667 5.833 L 1.667 5.833 L 1.667 5.833 L 1.667 5.833 L 1.667 5.833 L 1.667 15.833 L 1.667 15.833 L 1.667 15.833 L 1.667 15.833 L 1.667 15.833\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "check-circle": {
    "viewBox": "0 0 13.333 13.333",
    "body": "<path d=\"M 5.733 9.733 L 10.433 5.033 L 9.5 4.1 L 5.733 7.867 L 3.833 5.967 L 2.9 6.9 L 5.733 9.733 L 5.733 9.733 M 6.667 13.333 C 5.744 13.333 4.878 13.158 4.067 12.808 C 3.256 12.458 2.55 11.983 1.95 11.383 C 1.35 10.783 0.875 10.078 0.525 9.267 C 0.175 8.456 0 7.589 0 6.667 C 0 5.744 0.175 4.878 0.525 4.067 C 0.875 3.256 1.35 2.55 1.95 1.95 C 2.55 1.35 3.256 0.875 4.067 0.525 C 4.878 0.175 5.744 0 6.667 0 C 7.589 0 8.456 0.175 9.267 0.525 C 10.078 0.875 10.783 1.35 11.383 1.95 C 11.983 2.55 12.458 3.256 12.808 4.067 C 13.158 4.878 13.333 5.744 13.333 6.667 C 13.333 7.589 13.158 8.456 12.808 9.267 C 12.458 10.078 11.983 10.783 11.383 11.383 C 10.783 11.983 10.078 12.458 9.267 12.808 C 8.456 13.158 7.589 13.333 6.667 13.333 L 6.667 13.333 M 6.667 12 C 8.156 12 9.417 11.483 10.45 10.45 C 11.483 9.417 12 8.156 12 6.667 C 12 5.178 11.483 3.917 10.45 2.883 C 9.417 1.85 8.156 1.333 6.667 1.333 C 5.178 1.333 3.917 1.85 2.883 2.883 C 1.85 3.917 1.333 5.178 1.333 6.667 C 1.333 8.156 1.85 9.417 2.883 10.45 C 3.917 11.483 5.178 12 6.667 12 L 6.667 12 M 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "contact-line": {
    "viewBox": "0 0 13.500 13.500",
    "body": "<path d=\"M 12.712 13.5 C 11.15 13.5 9.606 13.159 8.081 12.478 C 6.556 11.797 5.169 10.831 3.919 9.581 C 2.669 8.331 1.703 6.944 1.022 5.419 C 0.341 3.894 0 2.35 0 0.788 C 0 0.563 0.075 0.375 0.225 0.225 C 0.375 0.075 0.563 0 0.788 0 L 3.825 0 C 4 0 4.156 0.059 4.294 0.178 C 4.431 0.297 4.512 0.438 4.537 0.6 L 5.025 3.225 C 5.05 3.425 5.044 3.594 5.006 3.731 C 4.969 3.869 4.9 3.988 4.8 4.088 L 2.981 5.925 C 3.231 6.388 3.528 6.834 3.872 7.266 C 4.216 7.697 4.594 8.113 5.006 8.512 C 5.394 8.9 5.8 9.259 6.225 9.591 C 6.65 9.922 7.1 10.225 7.575 10.5 L 9.337 8.738 C 9.45 8.625 9.597 8.541 9.778 8.484 C 9.959 8.428 10.137 8.413 10.313 8.438 L 12.9 8.962 C 13.075 9.012 13.219 9.103 13.331 9.234 C 13.444 9.366 13.5 9.512 13.5 9.675 L 13.5 12.712 C 13.5 12.938 13.425 13.125 13.275 13.275 C 13.125 13.425 12.938 13.5 12.712 13.5 L 12.712 13.5 M 2.269 4.5 L 3.506 3.263 L 3.506 3.263 L 3.506 3.263 L 3.188 1.5 L 3.188 1.5 L 3.188 1.5 L 1.519 1.5 L 1.519 1.5 L 1.519 1.5 C 1.581 2.013 1.669 2.519 1.781 3.019 C 1.894 3.519 2.056 4.012 2.269 4.5 L 2.269 4.5 M 8.981 11.212 C 9.469 11.425 9.966 11.594 10.472 11.719 C 10.978 11.844 11.488 11.925 12 11.962 L 12 11.962 L 12 11.962 L 12 10.313 L 12 10.313 L 12 10.313 L 10.238 9.956 L 10.238 9.956 L 10.238 9.956 L 8.981 11.212 L 8.981 11.212 M 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 M 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "delivery-truck": {
    "viewBox": "0 0 36.750 28.875",
    "body": "<path d=\"M 30.625 28.875 L 28.175 26.425 L 30.1 24.5 L 17.15 24.5 C 16.8 25.55 16.173 26.396 15.269 27.038 C 14.365 27.679 13.358 28 12.25 28 C 11.142 28 10.143 27.679 9.253 27.038 C 8.364 26.396 7.729 25.55 7.35 24.5 L 5.25 24.5 C 3.792 24.5 2.552 23.99 1.531 22.969 C 0.51 21.948 0 20.708 0 19.25 L 0 8.75 L 10.5 8.75 L 10.5 3.5 L 0 3.5 L 0 0 L 22.75 0 C 23.712 0 24.536 0.343 25.222 1.028 C 25.907 1.714 26.25 2.537 26.25 3.5 L 26.25 21 L 30.013 21 L 28.175 19.163 L 30.625 16.625 L 36.75 22.75 L 30.625 28.875 L 30.625 28.875 M 14 8.75 L 22.75 8.75 L 22.75 3.5 L 22.75 3.5 L 22.75 3.5 L 14 3.5 L 14 8.75 L 14 8.75 M 12.25 24.5 C 12.746 24.5 13.161 24.332 13.497 23.997 C 13.832 23.661 14 23.246 14 22.75 C 14 22.254 13.832 21.839 13.497 21.503 C 13.161 21.168 12.746 21 12.25 21 C 11.754 21 11.339 21.168 11.003 21.503 C 10.668 21.839 10.5 22.254 10.5 22.75 C 10.5 23.246 10.668 23.661 11.003 23.997 C 11.339 24.332 11.754 24.5 12.25 24.5 L 12.25 24.5 M 7.35 21 C 7.729 19.95 8.364 19.104 9.253 18.462 C 10.143 17.821 11.142 17.5 12.25 17.5 C 13.358 17.5 14.365 17.821 15.269 18.462 C 16.173 19.104 16.8 19.95 17.15 21 L 22.75 21 L 22.75 12.25 L 3.5 12.25 L 3.5 19.25 C 3.5 19.746 3.668 20.161 4.003 20.497 C 4.339 20.832 4.754 21 5.25 21 L 7.35 21 L 7.35 21 M 7.35 12.25 L 5.25 12.25 C 4.754 12.25 4.339 12.25 4.003 12.25 C 3.668 12.25 3.5 12.25 3.5 12.25 L 3.5 12.25 L 22.75 12.25 L 22.75 12.25 L 17.15 12.25 C 16.8 12.25 16.173 12.25 15.269 12.25 C 14.365 12.25 13.358 12.25 12.25 12.25 C 11.142 12.25 10.143 12.25 9.253 12.25 C 8.364 12.25 7.729 12.25 7.35 12.25 L 7.35 12.25\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "phone-filled": {
    "viewBox": "0 0 10.001 10.001",
    "body": "<path d=\"M 5.916 7.285 L 5.476 8.182 L 5.487 8.188 L 5.499 8.193 L 5.916 7.285 Z M 6.523 7.133 L 5.728 6.526 L 5.727 6.527 L 6.523 7.133 Z M 6.701 6.901 L 7.495 7.507 L 7.501 7.501 L 6.701 6.901 Z M 9.001 10.001 L 9.001 11.001 L 9.001 10.001 Z M 0 1 L 1 1 L 0 1 Z M 1 0 L 1 -1 L 1 0 Z M 2.5 0 L 2.5 -1 L 2.5 0 Z M 3.1 3.3 L 3.7 4.1 L 3.7 4.1 L 3.1 3.3 Z M 2.866 3.476 L 2.266 2.676 L 2.259 2.681 L 2.866 3.476 Z M 2.72 4.092 L 1.821 4.531 L 1.823 4.534 L 2.72 4.092 Z M 5.916 7.285 L 5.499 8.193 C 5.809 8.336 6.158 8.368 6.489 8.285 L 6.246 7.315 L 6.004 6.345 C 6.114 6.318 6.231 6.328 6.334 6.376 L 5.916 7.285 Z M 6.246 7.315 L 6.489 8.285 C 6.819 8.203 7.112 8.01 7.319 7.739 L 6.523 7.133 L 5.727 6.527 C 5.796 6.437 5.894 6.373 6.004 6.345 L 6.246 7.315 Z M 6.523 7.133 L 7.318 7.74 L 7.495 7.507 L 6.701 6.901 L 5.906 6.294 L 5.728 6.526 L 6.523 7.133 Z M 6.701 6.901 L 7.501 7.501 L 7.501 7.501 L 7.053 6.606 L 6.606 5.712 C 6.328 5.851 6.087 6.052 5.901 6.301 L 6.701 6.901 Z M 7.053 6.606 L 7.501 7.501 L 7.501 7.501 L 7.501 6.501 L 7.501 5.501 C 7.19 5.501 6.884 5.573 6.606 5.712 L 7.053 6.606 Z M 7.501 6.501 L 7.501 7.501 L 9.001 7.501 L 9.001 6.501 L 9.001 5.501 L 7.501 5.501 L 7.501 6.501 Z M 9.001 6.501 L 9.001 7.501 L 9.001 7.501 L 9.708 6.793 L 10.415 6.086 C 10.04 5.711 9.531 5.501 9.001 5.501 L 9.001 6.501 Z M 9.708 6.793 L 9.001 7.501 L 9.001 7.501 L 10.001 7.501 L 11.001 7.501 C 11.001 6.97 10.79 6.461 10.415 6.086 L 9.708 6.793 Z M 10.001 7.501 L 9.001 7.501 L 9.001 9.001 L 10.001 9.001 L 11.001 9.001 L 11.001 7.501 L 10.001 7.501 Z M 10.001 9.001 L 9.001 9.001 L 9.001 9.001 L 9.708 9.708 L 10.415 10.415 C 10.79 10.04 11.001 9.531 11.001 9.001 L 10.001 9.001 Z M 9.708 9.708 L 9.001 9.001 L 9.001 9.001 L 9.001 10.001 L 9.001 11.001 C 9.531 11.001 10.04 10.79 10.415 10.415 L 9.708 9.708 Z M 9.001 10.001 L 9.001 9.001 C 6.879 9.001 4.844 8.158 3.343 6.657 L 2.636 7.365 L 1.929 8.072 C 3.805 9.947 6.348 11.001 9.001 11.001 L 9.001 10.001 Z M 2.636 7.365 L 3.343 6.657 C 1.843 5.157 1 3.122 1 1 L 0 1 L -1 1 C -1 3.652 0.054 6.196 1.929 8.072 L 2.636 7.365 Z M 0 1 L 1 1 L 1 1 L 0.293 0.293 L -0.414 -0.414 C -0.789 -0.039 -1 0.47 -1 1 L 0 1 Z M 0.293 0.293 L 1 1 L 1 1 L 1 0 L 1 -1 C 0.47 -1 -0.039 -0.789 -0.414 -0.414 L 0.293 0.293 Z M 1 0 L 1 1 L 2.5 1 L 2.5 0 L 2.5 -1 L 1 -1 L 1 0 Z M 2.5 0 L 2.5 1 L 2.5 1 L 3.207 0.293 L 3.914 -0.414 C 3.539 -0.789 3.031 -1 2.5 -1 L 2.5 0 Z M 3.207 0.293 L 2.5 1 L 2.5 1 L 3.5 1 L 4.5 1 C 4.5 0.47 4.29 -0.039 3.914 -0.414 L 3.207 0.293 Z M 3.5 1 L 2.5 1 L 2.5 2.5 L 3.5 2.5 L 4.5 2.5 L 4.5 1 L 3.5 1 Z M 3.5 2.5 L 2.5 2.5 L 2.5 2.5 L 3.395 2.947 L 4.289 3.395 C 4.428 3.117 4.5 2.811 4.5 2.5 L 3.5 2.5 Z M 3.395 2.947 L 2.5 2.5 L 2.5 2.5 L 3.1 3.3 L 3.7 4.1 C 3.949 3.914 4.15 3.672 4.289 3.395 L 3.395 2.947 Z M 3.1 3.3 L 2.5 2.5 L 2.266 2.676 L 2.866 3.476 L 3.466 4.276 L 3.7 4.1 L 3.1 3.3 Z M 2.866 3.476 L 2.259 2.681 C 1.984 2.891 1.79 3.19 1.71 3.528 L 2.683 3.758 L 3.656 3.988 C 3.63 4.101 3.565 4.2 3.473 4.271 L 2.866 3.476 Z M 2.683 3.758 L 1.71 3.528 C 1.63 3.865 1.67 4.219 1.821 4.531 L 2.72 4.092 L 3.619 3.654 C 3.67 3.758 3.683 3.876 3.656 3.988 L 2.683 3.758 Z M 2.72 4.092 L 1.823 4.534 C 2.604 6.12 3.889 7.403 5.476 8.182 L 5.916 7.285 L 6.357 6.387 C 5.167 5.803 4.203 4.84 3.617 3.651 L 2.72 4.092 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "phone": {
    "viewBox": "0 0 13.500 13.500",
    "body": "<path d=\"M 12.712 13.5 C 11.15 13.5 9.606 13.159 8.081 12.478 C 6.556 11.797 5.169 10.831 3.919 9.581 C 2.669 8.331 1.703 6.944 1.022 5.419 C 0.341 3.894 0 2.35 0 0.788 C 0 0.563 0.075 0.375 0.225 0.225 C 0.375 0.075 0.563 0 0.788 0 L 3.825 0 C 4 0 4.156 0.059 4.294 0.178 C 4.431 0.297 4.512 0.438 4.537 0.6 L 5.025 3.225 C 5.05 3.425 5.044 3.594 5.006 3.731 C 4.969 3.869 4.9 3.988 4.8 4.088 L 2.981 5.925 C 3.231 6.388 3.528 6.834 3.872 7.266 C 4.216 7.697 4.594 8.113 5.006 8.512 C 5.394 8.9 5.8 9.259 6.225 9.591 C 6.65 9.922 7.1 10.225 7.575 10.5 L 9.337 8.738 C 9.45 8.625 9.597 8.541 9.778 8.484 C 9.959 8.428 10.137 8.413 10.313 8.438 L 12.9 8.962 C 13.075 9.012 13.219 9.103 13.331 9.234 C 13.444 9.366 13.5 9.512 13.5 9.675 L 13.5 12.712 C 13.5 12.938 13.425 13.125 13.275 13.275 C 13.125 13.425 12.938 13.5 12.712 13.5 L 12.712 13.5 M 2.269 4.5 L 3.506 3.263 L 3.506 3.263 L 3.506 3.263 L 3.188 1.5 L 3.188 1.5 L 3.188 1.5 L 1.519 1.5 L 1.519 1.5 L 1.519 1.5 C 1.581 2.013 1.669 2.519 1.781 3.019 C 1.894 3.519 2.056 4.012 2.269 4.5 L 2.269 4.5 M 8.981 11.212 C 9.469 11.425 9.966 11.594 10.472 11.719 C 10.978 11.844 11.488 11.925 12 11.962 L 12 11.962 L 12 11.962 L 12 10.313 L 12 10.313 L 12 10.313 L 10.238 9.956 L 10.238 9.956 L 10.238 9.956 L 8.981 11.212 L 8.981 11.212 M 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 L 2.269 4.5 M 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212 L 8.981 11.212\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "pillar": {
    "viewBox": "0 0 21 23.333",
    "body": "<path d=\"M 9.333 23.333 L 9.333 17.5 C 9.333 16.411 9.168 15.604 8.837 15.079 C 8.507 14.554 8.069 14.039 7.525 13.533 L 9.188 11.871 C 9.421 12.085 9.644 12.313 9.858 12.556 C 10.072 12.799 10.286 13.057 10.5 13.329 C 10.772 12.96 11.049 12.634 11.331 12.352 C 11.613 12.07 11.9 11.793 12.192 11.521 C 12.931 10.84 13.601 10.053 14.204 9.158 C 14.807 8.264 15.128 6.699 15.167 4.463 L 13.329 6.3 L 11.667 4.667 L 16.333 0 L 21 4.667 L 19.367 6.3 L 17.5 4.463 C 17.461 7.243 17.033 9.222 16.217 10.398 C 15.4 11.574 14.583 12.532 13.767 13.271 C 13.144 13.835 12.639 14.384 12.25 14.919 C 11.861 15.453 11.667 16.314 11.667 17.5 L 11.667 23.333 L 9.333 23.333 L 9.333 23.333 M 3.733 7.204 C 3.656 6.815 3.602 6.387 3.573 5.921 C 3.544 5.454 3.519 4.968 3.5 4.463 L 1.633 6.3 L 0 4.667 L 4.667 0 L 9.333 4.667 L 7.671 6.3 L 5.833 4.492 C 5.833 4.9 5.853 5.284 5.892 5.644 C 5.931 6.003 5.969 6.339 6.008 6.65 L 3.733 7.204 L 3.733 7.204 M 6.242 12.337 C 5.853 11.929 5.478 11.453 5.119 10.908 C 4.759 10.364 4.443 9.693 4.171 8.896 L 6.417 8.342 C 6.611 8.867 6.835 9.314 7.088 9.683 C 7.34 10.053 7.613 10.383 7.904 10.675 L 6.242 12.337 L 6.242 12.337\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "quick-approval": {
    "viewBox": "0 0 20.002 16",
    "body": "<path d=\"M 8.45 11.5 C 8.85 11.9 9.367 12.096 10 12.087 C 10.633 12.079 11.1 11.85 11.4 11.4 L 17 3 L 8.6 8.6 C 8.15 8.9 7.912 9.358 7.887 9.975 C 7.862 10.592 8.05 11.1 8.45 11.5 L 8.45 11.5 M 10 0 C 10.983 0 11.929 0.137 12.837 0.412 C 13.746 0.688 14.6 1.1 15.4 1.65 L 13.5 2.85 C 12.95 2.567 12.379 2.354 11.788 2.213 C 11.196 2.071 10.6 2 10 2 C 7.783 2 5.896 2.779 4.338 4.338 C 2.779 5.896 2 7.783 2 10 C 2 10.7 2.096 11.392 2.287 12.075 C 2.479 12.758 2.75 13.4 3.1 14 L 16.9 14 C 17.283 13.367 17.563 12.708 17.737 12.025 C 17.912 11.342 18 10.633 18 9.9 C 18 9.3 17.929 8.717 17.788 8.15 C 17.646 7.583 17.433 7.033 17.15 6.5 L 18.35 4.6 C 18.85 5.383 19.246 6.217 19.538 7.1 C 19.829 7.983 19.983 8.9 20 9.85 C 20.017 10.8 19.908 11.708 19.675 12.575 C 19.442 13.442 19.1 14.267 18.65 15.05 C 18.467 15.35 18.217 15.583 17.9 15.75 C 17.583 15.917 17.25 16 16.9 16 L 3.1 16 C 2.75 16 2.417 15.917 2.1 15.75 C 1.783 15.583 1.533 15.35 1.35 15.05 C 0.917 14.3 0.583 13.504 0.35 12.663 C 0.117 11.821 0 10.933 0 10 C 0 8.617 0.263 7.321 0.788 6.113 C 1.313 4.904 2.029 3.846 2.938 2.938 C 3.846 2.029 4.908 1.313 6.125 0.788 C 7.342 0.263 8.633 0 10 0 L 10 0 M 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825 L 10.175 7.825\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "search": {
    "viewBox": "0 0 15 15",
    "body": "<path d=\"M 13.833 15 L 8.583 9.75 C 8.167 10.083 7.688 10.347 7.146 10.542 C 6.604 10.736 6.028 10.833 5.417 10.833 C 3.903 10.833 2.622 10.309 1.573 9.26 C 0.524 8.212 0 6.931 0 5.417 C 0 3.903 0.524 2.622 1.573 1.573 C 2.622 0.524 3.903 0 5.417 0 C 6.931 0 8.212 0.524 9.26 1.573 C 10.309 2.622 10.833 3.903 10.833 5.417 C 10.833 6.028 10.736 6.604 10.542 7.146 C 10.347 7.688 10.083 8.167 9.75 8.583 L 15 13.833 L 13.833 15 L 13.833 15 M 5.417 9.167 C 6.458 9.167 7.344 8.802 8.073 8.073 C 8.802 7.344 9.167 6.458 9.167 5.417 C 9.167 4.375 8.802 3.49 8.073 2.76 C 7.344 2.031 6.458 1.667 5.417 1.667 C 4.375 1.667 3.49 2.031 2.76 2.76 C 2.031 3.49 1.667 4.375 1.667 5.417 C 1.667 6.458 2.031 7.344 2.76 8.073 C 3.49 8.802 4.375 9.167 5.417 9.167 L 5.417 9.167\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "shield": {
    "viewBox": "0 0 21 23.333",
    "body": "<path d=\"M 9.333 23.333 L 9.333 17.5 C 9.333 16.411 9.168 15.604 8.837 15.079 C 8.507 14.554 8.069 14.039 7.525 13.533 L 9.188 11.871 C 9.421 12.085 9.644 12.313 9.858 12.556 C 10.072 12.799 10.286 13.057 10.5 13.329 C 10.772 12.96 11.049 12.634 11.331 12.352 C 11.613 12.07 11.9 11.793 12.192 11.521 C 12.931 10.84 13.601 10.053 14.204 9.158 C 14.807 8.264 15.128 6.699 15.167 4.463 L 13.329 6.3 L 11.667 4.667 L 16.333 0 L 21 4.667 L 19.367 6.3 L 17.5 4.463 C 17.461 7.243 17.033 9.222 16.217 10.398 C 15.4 11.574 14.583 12.532 13.767 13.271 C 13.144 13.835 12.639 14.384 12.25 14.919 C 11.861 15.453 11.667 16.314 11.667 17.5 L 11.667 23.333 L 9.333 23.333 L 9.333 23.333 M 3.733 7.204 C 3.656 6.815 3.602 6.387 3.573 5.921 C 3.544 5.454 3.519 4.968 3.5 4.463 L 1.633 6.3 L 0 4.667 L 4.667 0 L 9.333 4.667 L 7.671 6.3 L 5.833 4.492 C 5.833 4.9 5.853 5.284 5.892 5.644 C 5.931 6.003 5.969 6.339 6.008 6.65 L 3.733 7.204 L 3.733 7.204 M 6.242 12.337 C 5.853 11.929 5.478 11.453 5.119 10.908 C 4.759 10.364 4.443 9.693 4.171 8.896 L 6.417 8.342 C 6.611 8.867 6.835 9.314 7.088 9.683 C 7.34 10.053 7.613 10.383 7.904 10.675 L 6.242 12.337 L 6.242 12.337\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "social": {
    "viewBox": "0 0 13.500 15",
    "body": "<path d=\"M 11.25 15 C 10.625 15 10.094 14.781 9.656 14.344 C 9.219 13.906 9 13.375 9 12.75 C 9 12.675 9.019 12.5 9.056 12.225 L 3.787 9.15 C 3.587 9.337 3.356 9.484 3.094 9.591 C 2.831 9.697 2.55 9.75 2.25 9.75 C 1.625 9.75 1.094 9.531 0.656 9.094 C 0.219 8.656 0 8.125 0 7.5 C 0 6.875 0.219 6.344 0.656 5.906 C 1.094 5.469 1.625 5.25 2.25 5.25 C 2.55 5.25 2.831 5.303 3.094 5.409 C 3.356 5.516 3.587 5.662 3.787 5.85 L 9.056 2.775 C 9.031 2.688 9.016 2.603 9.009 2.522 C 9.003 2.441 9 2.35 9 2.25 C 9 1.625 9.219 1.094 9.656 0.656 C 10.094 0.219 10.625 0 11.25 0 C 11.875 0 12.406 0.219 12.844 0.656 C 13.281 1.094 13.5 1.625 13.5 2.25 C 13.5 2.875 13.281 3.406 12.844 3.844 C 12.406 4.281 11.875 4.5 11.25 4.5 C 10.95 4.5 10.669 4.447 10.406 4.341 C 10.144 4.234 9.912 4.088 9.712 3.9 L 4.444 6.975 C 4.469 7.063 4.484 7.147 4.491 7.228 C 4.497 7.309 4.5 7.4 4.5 7.5 C 4.5 7.6 4.497 7.691 4.491 7.772 C 4.484 7.853 4.469 7.937 4.444 8.025 L 9.712 11.1 C 9.912 10.913 10.144 10.766 10.406 10.659 C 10.669 10.553 10.95 10.5 11.25 10.5 C 11.875 10.5 12.406 10.719 12.844 11.156 C 13.281 11.594 13.5 12.125 13.5 12.75 C 13.5 13.375 13.281 13.906 12.844 14.344 C 12.406 14.781 11.875 15 11.25 15 L 11.25 15 M 11.25 13.5 C 11.462 13.5 11.641 13.428 11.784 13.284 C 11.928 13.141 12 12.962 12 12.75 C 12 12.538 11.928 12.359 11.784 12.216 C 11.641 12.072 11.462 12 11.25 12 C 11.038 12 10.859 12.072 10.716 12.216 C 10.572 12.359 10.5 12.538 10.5 12.75 C 10.5 12.962 10.572 13.141 10.716 13.284 C 10.859 13.428 11.038 13.5 11.25 13.5 L 11.25 13.5 M 2.25 8.25 C 2.463 8.25 2.641 8.178 2.784 8.034 C 2.928 7.891 3 7.713 3 7.5 C 3 7.287 2.928 7.109 2.784 6.966 C 2.641 6.822 2.463 6.75 2.25 6.75 C 2.037 6.75 1.859 6.822 1.716 6.966 C 1.572 7.109 1.5 7.287 1.5 7.5 C 1.5 7.713 1.572 7.891 1.716 8.034 C 1.859 8.178 2.037 8.25 2.25 8.25 L 2.25 8.25 M 11.25 3 C 11.462 3 11.641 2.928 11.784 2.784 C 11.928 2.641 12 2.463 12 2.25 C 12 2.037 11.928 1.859 11.784 1.716 C 11.641 1.572 11.462 1.5 11.25 1.5 C 11.038 1.5 10.859 1.572 10.716 1.716 C 10.572 1.859 10.5 2.037 10.5 2.25 C 10.5 2.463 10.572 2.641 10.716 2.784 C 10.859 2.928 11.038 3 11.25 3 L 11.25 3 M 11.25 12.75 L 11.25 12.75 L 11.25 12.75 L 11.25 12.75 L 11.25 12.75 L 11.25 12.75 L 11.25 12.75 L 11.25 12.75 L 11.25 12.75 L 11.25 12.75 M 2.25 7.5 L 2.25 7.5 L 2.25 7.5 L 2.25 7.5 L 2.25 7.5 L 2.25 7.5 L 2.25 7.5 L 2.25 7.5 L 2.25 7.5 L 2.25 7.5 M 11.25 2.25 L 11.25 2.25 L 11.25 2.25 L 11.25 2.25 L 11.25 2.25 L 11.25 2.25 L 11.25 2.25 L 11.25 2.25 L 11.25 2.25 L 11.25 2.25\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "tag": {
    "viewBox": "0 0 22 22",
    "body": "<path d=\"M 10 3 L 10 0 L 12 0 L 12 3 L 10 3 L 10 3 M 10 22 L 10 19 L 12 19 L 12 22 L 10 22 L 10 22 M 19 12 L 19 10 L 22 10 L 22 12 L 19 12 L 19 12 M 0 12 L 0 10 L 3 10 L 3 12 L 0 12 L 0 12 M 17.7 5.7 L 16.3 4.3 L 18.05 2.5 L 19.5 3.95 L 17.7 5.7 L 17.7 5.7 M 3.95 19.5 L 2.5 18.05 L 4.3 16.3 L 5.7 17.7 L 3.95 19.5 L 3.95 19.5 M 18.05 19.5 L 16.3 17.7 L 17.7 16.3 L 19.5 18.05 L 18.05 19.5 L 18.05 19.5 M 4.3 5.7 L 2.5 3.95 L 3.95 2.5 L 5.7 4.3 L 4.3 5.7 L 4.3 5.7 M 11 17 C 9.333 17 7.917 16.417 6.75 15.25 C 5.583 14.083 5 12.667 5 11 C 5 9.333 5.583 7.917 6.75 6.75 C 7.917 5.583 9.333 5 11 5 C 12.667 5 14.083 5.583 15.25 6.75 C 16.417 7.917 17 9.333 17 11 C 17 12.667 16.417 14.083 15.25 15.25 C 14.083 16.417 12.667 17 11 17 L 11 17 M 11 15 C 12.117 15 13.063 14.612 13.837 13.837 C 14.612 13.063 15 12.117 15 11 C 15 9.883 14.612 8.938 13.837 8.163 C 13.063 7.388 12.117 7 11 7 C 9.883 7 8.938 7.388 8.163 8.163 C 7.388 8.938 7 9.883 7 11 C 7 12.117 7.388 13.063 8.163 13.837 C 8.938 14.612 9.883 15 11 15 L 11 15 M 11 11 L 11 11 L 11 11 L 11 11 L 11 11 L 11 11 L 11 11 L 11 11 L 11 11 L 11 11\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "truck-check": {
    "viewBox": "0 0 13.333 13.333",
    "body": "<path d=\"M 5.733 9.733 L 10.433 5.033 L 9.5 4.1 L 5.733 7.867 L 3.833 5.967 L 2.9 6.9 L 5.733 9.733 L 5.733 9.733 M 6.667 13.333 C 5.744 13.333 4.878 13.158 4.067 12.808 C 3.256 12.458 2.55 11.983 1.95 11.383 C 1.35 10.783 0.875 10.078 0.525 9.267 C 0.175 8.456 0 7.589 0 6.667 C 0 5.744 0.175 4.878 0.525 4.067 C 0.875 3.256 1.35 2.55 1.95 1.95 C 2.55 1.35 3.256 0.875 4.067 0.525 C 4.878 0.175 5.744 0 6.667 0 C 7.589 0 8.456 0.175 9.267 0.525 C 10.078 0.875 10.783 1.35 11.383 1.95 C 11.983 2.55 12.458 3.256 12.808 4.067 C 13.158 4.878 13.333 5.744 13.333 6.667 C 13.333 7.589 13.158 8.456 12.808 9.267 C 12.458 10.078 11.983 10.783 11.383 11.383 C 10.783 11.983 10.078 12.458 9.267 12.808 C 8.456 13.158 7.589 13.333 6.667 13.333 L 6.667 13.333 M 6.667 12 C 8.156 12 9.417 11.483 10.45 10.45 C 11.483 9.417 12 8.156 12 6.667 C 12 5.178 11.483 3.917 10.45 2.883 C 9.417 1.85 8.156 1.333 6.667 1.333 C 5.178 1.333 3.917 1.85 2.883 2.883 C 1.85 3.917 1.333 5.178 1.333 6.667 C 1.333 8.156 1.85 9.417 2.883 10.45 C 3.917 11.483 5.178 12 6.667 12 L 6.667 12 M 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667 L 6.667 6.667\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "trust": {
    "viewBox": "0 0 20 19",
    "body": "<path d=\"M 6.85 14.825 L 10 12.925 L 13.15 14.85 L 12.325 11.25 L 15.1 8.85 L 11.45 8.525 L 10 5.125 L 8.55 8.5 L 4.9 8.825 L 7.675 11.25 L 6.85 14.825 L 6.85 14.825 M 3.825 19 L 5.45 11.975 L 0 7.25 L 7.2 6.625 L 10 0 L 12.8 6.625 L 20 7.25 L 14.55 11.975 L 16.175 19 L 10 15.275 L 3.825 19 L 3.825 19 M 10 10.25 L 10 10.25 L 10 10.25 L 10 10.25 L 10 10.25 L 10 10.25 L 10 10.25 L 10 10.25 L 10 10.25 L 10 10.25 L 10 10.25 L 10 10.25\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "arrow-right": {
    "viewBox": "0 0 10.667 10.667",
    "body": "<path d=\"M 8.117 6 L 0 6 L 0 4.667 L 8.117 4.667 L 4.383 0.933 L 5.333 0 L 10.667 5.333 L 5.333 10.667 L 4.383 9.733 L 8.117 6 L 8.117 6\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "chevron-left": {
    "viewBox": "0 0 7.4 12",
    "body": "<path d=\"M 6 12 L 0 6 L 6 0 L 7.4 1.4 L 2.8 6 L 7.4 10.6 L 6 12 L 6 12\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "chevron-right": {
    "viewBox": "0 0 7.4 12",
    "body": "<path d=\"M 4.6 6 L 0 1.4 L 1.4 0 L 7.4 6 L 1.4 12 L 0 10.6 L 4.6 6 L 4.6 6\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "play": {
    "viewBox": "0 0 16.5 21",
    "body": "<path d=\"M 0 21 L 0 0 L 16.5 10.5 L 0 21 L 0 21 M 3 10.5 L 3 10.5 L 3 10.5 L 3 10.5 L 3 10.5 M 3 15.525 L 10.875 10.5 L 3 5.475 L 3 15.525 L 3 15.525\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "star": {
    "viewBox": "0 0 16.667 15.833",
    "body": "<path d=\"M 3.188 15.833 L 4.542 9.979 L 0 6.042 L 6 5.521 L 8.333 0 L 10.667 5.521 L 16.667 6.042 L 12.125 9.979 L 13.479 15.833 L 8.333 12.729 L 3.188 15.833 L 3.188 15.833\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "bolt-fast": {
    "viewBox": "0 0 13.333 16.667",
    "body": "<path d=\"M 5.458 13.5 L 9.771 8.333 L 6.438 8.333 L 7.042 3.604 L 3.188 9.167 L 6.083 9.167 L 5.458 13.5 L 5.458 13.5 M 3.333 16.667 L 4.167 10.833 L 0 10.833 L 7.5 0 L 9.167 0 L 8.333 6.667 L 13.333 6.667 L 5 16.667 L 3.333 16.667 L 3.333 16.667\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "check": {
    "viewBox": "0 0 10.867 8.017",
    "body": "<path d=\"M 3.8 8.017 L 0 4.217 L 0.95 3.267 L 3.8 6.117 L 9.917 0 L 10.867 0.95 L 3.8 8.017 L 3.8 8.017\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  }
};
const iconNames = Object.keys(icons);
Object.assign(__ds_scope, { icons, iconNames });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/icon-data.js", error: String((e && e.message) || e) }); }

// components/foundation/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Renders one glyph from the BrightEV icon set. Colour follows currentColor. */
function Icon({
  name,
  size = 16,
  color,
  style,
  ...rest
}) {
  const g = __ds_scope.icons[name];
  if (!g) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: g.viewBox,
    width: size,
    height: size,
    "aria-hidden": "true",
    focusable: "false",
    style: {
      display: 'block',
      color: color || 'currentColor',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: g.body
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  gold: {
    background: 'var(--bev-gold)',
    color: 'var(--bev-black-ink)',
    weight: 700,
    boxShadow: 'none'
  },
  goldGlow: {
    background: 'var(--bev-gold)',
    color: 'var(--bev-black-ink)',
    weight: 700,
    boxShadow: 'var(--shadow-gold)'
  },
  dark: {
    background: 'var(--bev-surface-3)',
    color: 'var(--bev-white)',
    weight: 600,
    boxShadow: 'none'
  },
  darkGold: {
    background: 'var(--bev-surface-3)',
    color: 'var(--bev-gold-light)',
    weight: 700,
    boxShadow: 'none'
  },
  ink: {
    background: 'var(--bev-ink)',
    color: 'var(--bev-offwhite)',
    weight: 600,
    boxShadow: 'none'
  },
  ghostLight: {
    background: 'var(--bev-ghost-light)',
    color: 'var(--bev-ink)',
    weight: 600,
    boxShadow: 'none'
  },
  outline: {
    background: 'transparent',
    color: 'var(--bev-white)',
    weight: 600,
    boxShadow: 'inset 0 0 0 1.5px var(--bev-white)'
  }
};
const SIZES = {
  sm: {
    padding: '10px 24px',
    fontSize: 12,
    letterSpacing: '1.2px'
  },
  md: {
    padding: '12px 24px',
    fontSize: 12,
    letterSpacing: '0.6px'
  },
  lg: {
    padding: '14px 28px',
    fontSize: 12,
    letterSpacing: '1px'
  }
};

/** BrightEV call-to-action. Hard-edged rectangle, uppercase Inter, 12px. */
function Button({
  children,
  variant = 'gold',
  size = 'md',
  icon,
  block = false,
  href,
  onClick,
  className,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.gold;
  const s = SIZES[size] || SIZES.md;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: className,
    onClick: onClick,
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: 0,
      cursor: 'pointer',
      textDecoration: 'none',
      background: v.background,
      color: v.color,
      boxShadow: v.boxShadow,
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontWeight: v.weight,
      fontSize: s.fontSize,
      lineHeight: '16px',
      letterSpacing: s.letterSpacing,
      textTransform: 'uppercase',
      transition: 'filter var(--dur-micro) var(--ease-out-expo)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.filter = 'brightness(1.12)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    }
  }, rest), children, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 10.667
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
/** Square utility button: carousel arrows, header search. */
function IconButton({
  icon,
  size = 40,
  iconSize = 12,
  variant = 'dark',
  onClick,
  ariaLabel,
  style
}) {
  const bare = variant === 'bare';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": ariaLabel,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      border: 'none',
      cursor: 'pointer',
      borderRadius: bare ? 0 : 12,
      background: bare ? 'transparent' : 'var(--bev-surface-3)',
      color: bare ? 'var(--bev-sand)' : 'var(--bev-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      transition: 'background var(--dur-micro) var(--ease-out-expo)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/PlayButton.jsx
try { (() => {
/** Oversized gold play trigger centred over the full-bleed lifestyle band. */
function PlayButton({
  size = 80,
  onClick,
  ariaLabel = 'Play video',
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": ariaLabel,
    className: "bev-pulse",
    onClick: onClick,
    style: {
      width: size,
      height: size,
      border: 'none',
      cursor: 'pointer',
      borderRadius: 12,
      background: 'var(--bev-gold)',
      boxShadow: 'var(--shadow-gold-glow)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px 0 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 21,
    style: {
      width: 16.5,
      height: 21
    },
    color: "var(--bev-black-ink)"
  }));
}
Object.assign(__ds_scope, { PlayButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/PlayButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureBlock.jsx
try { (() => {
/** Dark horizontal feature block: gold icon tile + Oswald title + sand body. */
function FeatureBlock({
  icon = 'bolt',
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bev-lift",
    style: {
      borderRadius: 4,
      background: 'var(--bev-surface-1)',
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      padding: 24,
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 4,
      background: 'var(--bev-surface-4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 21.667,
    style: {
      width: 14.083,
      height: 21.667
    },
    color: "var(--bev-gold-light)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '27px',
      letterSpacing: '0.9px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--bev-sand)',
      whiteSpace: 'pre-line'
    }
  }, body)));
}
Object.assign(__ds_scope, { FeatureBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureBlock.jsx", error: String((e && e.message) || e) }); }

// components/cards/PillarCard.jsx
try { (() => {
/** Small white pillar card: icon, Oswald title, 13px body. Used on light editorial sections. */
function PillarCard({
  icon = 'shield',
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bev-lift",
    style: {
      width: 188,
      borderRadius: 4,
      background: 'var(--bev-white)',
      boxShadow: 'var(--shadow-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2.8,
      padding: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 21,
    style: {
      width: 21,
      height: 23.333
    },
    color: "var(--bev-gold)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5.2px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.8px',
      textTransform: 'uppercase',
      color: 'var(--bev-ink)'
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: '17.88px',
      color: 'var(--bev-muted)',
      whiteSpace: 'pre-line'
    }
  }, body));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PromoBanner.jsx
try { (() => {
/** Half-width dark banner with a faded background graphic, chips and paired CTAs. */
function PromoBanner({
  kicker,
  kickerIcon,
  title,
  body,
  chips = [],
  actions = [],
  backgroundImage,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 8,
      background: 'var(--bev-surface-1)',
      boxShadow: 'var(--shadow-card-lg)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 24,
      ...style
    }
  }, backgroundImage && /*#__PURE__*/React.createElement("img", {
    src: backgroundImage,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: '50%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.3,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 448
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Kicker, null, kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      padding: '3px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: '42px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)',
      whiteSpace: 'pre-line'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--bev-sand)',
      whiteSpace: 'pre-line'
    }
  }, body), chips.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, chips.map(c => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: c
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      gap: 12
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: a.label,
    variant: i === 0 ? 'gold' : 'dark',
    size: "md"
  }, a.label))));
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/cards/RegionalMapCard.jsx
try { (() => {
/** Coverage card: heading, map image with a live-status pill, and paired CTAs. */
function RegionalMapCard({
  kicker = 'Here when you need us',
  title,
  body,
  map,
  statusLabel,
  actions = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 8,
      background: 'var(--bev-white)',
      boxShadow: 'var(--shadow-card)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    tone: "light",
    tracking: "tight"
  }, kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      padding: '3px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      lineHeight: '32px',
      letterSpacing: '-0.65px',
      textTransform: 'uppercase',
      color: 'var(--bev-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--bev-muted)',
      whiteSpace: 'pre-line'
    }
  }, body)), /*#__PURE__*/React.createElement("div", {
    className: "bev-zoom-media",
    style: {
      position: 'relative',
      height: 176,
      overflow: 'hidden',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: map,
    alt: "Service coverage map",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bev-overlay-30)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
      borderRadius: 2,
      background: 'var(--bev-overlay-90)',
      padding: '6px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bev-dot-live",
    style: {
      width: 8,
      height: 8,
      borderRadius: 12,
      background: 'var(--bev-success)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      lineHeight: '15px',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)'
    }
  }, statusLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 12
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: a.label,
    variant: i === 0 ? 'ink' : 'ghostLight',
    size: "md",
    block: true
  }, a.label))));
}
Object.assign(__ds_scope, { RegionalMapCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/RegionalMapCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/SpecTile.jsx
try { (() => {
/** Small offwhite tile: gold icon over an uppercase 11px label. */
function SpecTile({
  icon = 'quick-approval',
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 2,
      background: 'var(--bev-offwhite)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      padding: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      width: 20.002,
      height: 16
    },
    color: "var(--bev-gold)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 11,
      lineHeight: '16.5px',
      textAlign: 'center',
      textTransform: 'uppercase',
      color: 'var(--bev-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { SpecTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SpecTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/TrustItem.jsx
try { (() => {
/** Centred trust column: icon tile, Oswald label, 13px description. */
function TrustItem({
  icon = 'trust',
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 227.19,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: 'var(--bev-surface-3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    style: {
      width: 20,
      height: 19
    },
    color: "var(--bev-gold-light)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.8px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)',
      textAlign: 'center',
      display: 'block'
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '7px 5.3px',
      fontSize: 13,
      lineHeight: '19.5px',
      textAlign: 'center',
      color: 'var(--bev-sand)',
      whiteSpace: 'pre-line'
    }
  }, body));
}
Object.assign(__ds_scope, { TrustItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TrustItem.jsx", error: String((e && e.message) || e) }); }

// components/cards/UseCaseCard.jsx
try { (() => {
/** Tall dark card: photo with corner badge, Oswald headline, body and a gold text link. */
function UseCaseCard({
  image,
  badge,
  title,
  body,
  linkLabel,
  href = '#',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bev-lift",
    style: {
      borderRadius: 8,
      overflow: 'hidden',
      background: 'var(--bev-surface-1)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bev-zoom-media",
    style: {
      position: 'relative',
      height: 246.66,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "overlay",
    style: {
      position: 'absolute',
      left: 12,
      top: 12
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 500,
      fontSize: 20,
      lineHeight: '30px',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)',
      whiteSpace: 'pre-line'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--bev-sand)',
      whiteSpace: 'pre-line'
    }
  }, body)), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.6px',
      textTransform: 'uppercase',
      color: 'var(--bev-gold-light)',
      textDecoration: 'none'
    }
  }, linkLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 10.667
  }))));
}
Object.assign(__ds_scope, { UseCaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/UseCaseCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/VehicleCard.jsx
try { (() => {
/** Featured vehicle panel: white image well with carousel arrows + specs, price and paired CTAs. */
function VehicleCard({
  image,
  badges = [],
  name,
  description,
  priceLabel = 'Starting at',
  price,
  assurances = [],
  onPrev,
  onNext,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 8,
      background: 'var(--bev-surface-1)',
      padding: 40,
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 24,
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 4,
      background: 'var(--bev-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '67.38px 24px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      maxWidth: 512,
      objectFit: 'contain'
    }
  })), onPrev && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    ariaLabel: "Previous vehicle",
    onClick: onPrev,
    style: {
      position: 'absolute',
      left: 0
    }
  }), onNext && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    ariaLabel: "Next vehicle",
    onClick: onNext,
    style: {
      position: 'absolute',
      right: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center'
    }
  }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: b.label,
    variant: i === 0 ? 'gold' : 'neutral'
  }, b.label))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 52,
      lineHeight: '56px',
      letterSpacing: '-1.04px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '4px 0',
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--bev-sand)',
      whiteSpace: 'pre-line'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 0',
      borderRadius: 4,
      background: 'var(--bev-surface-2)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: '1.1px',
      textTransform: 'uppercase',
      color: 'var(--bev-gold-light)'
    }
  }, priceLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: '42px',
      color: 'var(--bev-gold-pale)'
    }
  }, price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, assurances.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.label,
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a.icon || 'check-circle',
    size: 13.333,
    color: "var(--bev-success)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--bev-sand)'
    }
  }, a.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "gold",
    size: "lg",
    block: true
  }, "View vehicle"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark",
    size: "lg",
    block: true
  }, "Get financing"))));
}
Object.assign(__ds_scope, { VehicleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/VehicleCard.jsx", error: String((e && e.message) || e) }); }

// components/foundation/StarRating.jsx
try { (() => {
/** Row of gold stars used on the testimonial card. */
function StarRating({
  count = 5,
  size = 16.667,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      alignItems: 'center',
      padding: '4px 0',
      ...style
    }
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: size,
    color: "var(--bev-gold)"
  })));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
/** White testimonial card: kicker, stars, Oswald quote and an avatar attribution row. */
function TestimonialCard({
  kicker = 'Real people. Real rides.',
  quote,
  avatar,
  name,
  meta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 8,
      background: 'var(--bev-white)',
      boxShadow: 'var(--shadow-card)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      padding: '7px 0'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    tone: "light",
    tracking: "tight"
  }, kicker), /*#__PURE__*/React.createElement(__ds_scope.StarRating, null), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sub)',
      fontWeight: 500,
      fontSize: 20,
      lineHeight: '27.5px',
      color: 'var(--bev-ink)',
      whiteSpace: 'pre-line'
    }
  }, quote)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      overflow: 'hidden',
      background: 'var(--bev-offwhite)',
      flexShrink: 0
    }
  }, avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--bev-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--bev-muted)'
    }
  }, meta))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PromoStrip.jsx
try { (() => {
/** Full-width seasonal offer strip that sits directly under the hero. */
function PromoStrip({
  icon = 'tag',
  title,
  body,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bev-surface-1)',
      padding: '16px 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--bev-gold-wash-20)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "var(--bev-gold-light)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: '32px',
      letterSpacing: '0.52px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--bev-sand)'
    }
  }, body))), action && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "darkGold",
    size: "sm"
  }, action)));
}
Object.assign(__ds_scope, { PromoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PromoStrip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
/** Dark footer: type lockup, slogan, social row, four link columns, legal bar. */
function SiteFooter({
  slogan = 'NO GAS. ALL THE FUN.',
  blurb,
  columns = [],
  contacts = [],
  legal,
  social = 4,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bev-black)',
      boxShadow: 'var(--shadow-footer)',
      padding: '40px 0 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 40,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "type"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6.875,
      maxWidth: 384
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: '32px',
      letterSpacing: '0.65px',
      textTransform: 'uppercase',
      color: 'var(--bev-gold-light)'
    }
  }, slogan), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: '22.75px',
      color: 'var(--bev-sand)',
      whiteSpace: 'pre-line'
    }
  }, blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      padding: '8px 0'
    }
  }, Array.from({
    length: social
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 36,
      height: 36,
      borderRadius: 12,
      background: 'var(--bev-surface-1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "social",
    size: 15,
    style: {
      width: 13.5,
      height: 15
    },
    color: "var(--bev-sand)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 24,
      justifyContent: 'center'
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.6px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)'
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--bev-sand)',
      textDecoration: 'none'
    }
  }, l)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 24,
      alignItems: 'center'
    }
  }, contacts.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "contact-line",
    size: 13.5,
    color: "var(--bev-gold-light)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--bev-sand)'
    }
  }, c)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '22px',
      textAlign: 'right',
      color: 'var(--bev-legal)'
    }
  }, legal))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const BRIGHTEV_NAV = ['Home', 'Street-Legal', 'Commercial', 'Services', 'Contact'];

/** Fixed glass header. Five numbered nav items with a sweeping gold rule; condenses on scroll. */
function SiteHeader({
  items = BRIGHTEV_NAV,
  activeItem,
  phone = '888-260-0707',
  cta = 'Find your ride',
  assetBase = '',
  numbered = true,
  condensed = false,
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: 'bev-header' + (condensed ? ' is-condensed' : ''),
    style: {
      height: 72,
      background: 'var(--bev-header-bg)',
      backdropFilter: 'var(--blur-header)',
      boxShadow: 'var(--shadow-header)',
      display: 'flex',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 1440,
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "type",
    tagline: false,
    style: {
      transition: 'transform var(--dur-ui) var(--ease-out-expo)',
      transform: condensed ? 'scale(0.86)' : 'none',
      transformOrigin: 'left center'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 28,
      alignItems: 'center'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    className: 'bev-nav-link' + (item === activeItem ? ' is-active' : ''),
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(item);
    }
  }, numbered && /*#__PURE__*/React.createElement("span", {
    className: "bev-nav-index"
  }, String(i + 1).padStart(2, '0')), item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    variant: "bare",
    size: 31,
    iconSize: 15,
    ariaLabel: "Search"
  }), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone,
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 6,
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 13.5,
    color: "var(--bev-gold-light)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.6px',
      color: 'var(--bev-sand-bright)'
    }
  }, phone)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "gold",
    size: "md",
    className: "bev-sweep",
    icon: "arrow-right",
    style: {
      boxShadow: 'var(--shadow-gold-sm)',
      letterSpacing: '0.96px',
      padding: '12px 18px'
    }
  }, cta))));
}
Object.assign(__ds_scope, { BRIGHTEV_NAV, SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/sections/Hero.jsx
try { (() => {
/** Cinematic split hero: photography under a left-to-right scrim, copy stack left, flagship card bottom-right. */
function Hero({
  image,
  eyebrow,
  headline,
  subhead,
  body,
  actions = [],
  benefits = [],
  flagship,
  height = 720,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-parallax": "0.18",
    style: {
      position: 'relative',
      minHeight: height,
      overflow: 'hidden',
      background: `var(--bev-hero-scrim), url(${image}) center / cover no-repeat`,
      display: 'flex',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 1440,
      margin: '0 auto',
      padding: '64px 64px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: height
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bev-hero-in",
    style: {
      maxWidth: 620,
      display: 'flex',
      flexDirection: 'column'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      width: 'fit-content',
      gap: 8,
      alignItems: 'center',
      borderRadius: 12,
      background: 'var(--bev-chip-glass)',
      backdropFilter: 'var(--blur-glass)',
      padding: '5px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bev-dot-live",
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--bev-gold-light)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      color: 'var(--bev-gold-pale)'
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 80,
      lineHeight: '80px',
      letterSpacing: '-2px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)'
    }
  }, headline), subhead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '8px 0',
      fontFamily: 'var(--font-sub)',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '30px',
      letterSpacing: '0.6px',
      textTransform: 'uppercase',
      color: 'var(--bev-gold-light)',
      whiteSpace: 'pre-line'
    }
  }, subhead)), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '20px 0',
      maxWidth: 520,
      fontSize: 15,
      lineHeight: '24px',
      color: 'var(--bev-sand)',
      whiteSpace: 'pre-line'
    }
  }, body), actions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 0',
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center'
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: a.label,
    className: i === 0 ? 'bev-sweep' : undefined,
    variant: i === 0 ? 'goldGlow' : 'outline',
    size: "lg"
  }, a.label))), benefits.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 0 0',
      display: 'flex',
      flexDirection: 'row',
      gap: 32,
      alignItems: 'center'
    }
  }, benefits.map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check-badge",
    size: 16,
    color: "var(--bev-gold-light)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: '1.1px',
      textTransform: 'uppercase',
      color: 'var(--bev-white)'
    }
  }, b))))), flagship && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FlagshipCard, flagship))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Hero.jsx", error: String((e && e.message) || e) }); }

// components/sections/SplitPanel.jsx
try { (() => {
/** White panel used in the 50/50 light sections: media slot, kicker, Cinzel heading, body, children, CTAs. */
function SplitPanel({
  media,
  kicker,
  title,
  body,
  children,
  actions = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 8,
      background: 'var(--bev-white)',
      boxShadow: 'var(--shadow-card)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 7,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, media, kicker && /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    tone: "light"
  }, kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      padding: '12px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: '42px',
      textTransform: 'uppercase',
      color: 'var(--bev-ink)',
      whiteSpace: 'pre-line'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: '22.75px',
      color: 'var(--bev-muted)',
      whiteSpace: 'pre-line'
    }
  }, body), children), actions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24,
      display: 'flex',
      flexDirection: 'row',
      gap: 12
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: a.label,
    variant: a.variant || (i === 0 ? 'gold' : 'ghostLight'),
    size: "md",
    block: true
  }, a.label))));
}
Object.assign(__ds_scope, { SplitPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SplitPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const DS = window.BrightEVDesignSystem_89bdae;
const {
  SiteHeader,
  PromoStrip,
  SiteFooter,
  Hero
} = DS;
const NAV = DS.BRIGHTEV_NAV || ['Home', 'Street-Legal', 'Commercial', 'Services', 'Contact'];
function useMotion() {
  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      document.querySelectorAll('.bev-reveal,.bev-reveal-zoom,.bev-stagger').forEach(el => el.classList.add('is-in'));
      document.querySelectorAll('.bev-count').forEach(el => {
        el.textContent = el.dataset.to;
      });
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
        e.target.querySelectorAll?.('.bev-count').forEach(runCount);
        if (e.target.classList.contains('bev-count')) runCount(e.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    document.querySelectorAll('.bev-reveal,.bev-reveal-zoom,.bev-stagger,.bev-count').forEach(el => io.observe(el));
    function runCount(el) {
      if (el.dataset.done) return;
      el.dataset.done = '1';
      const to = parseFloat(el.dataset.to);
      const start = performance.now();
      const dur = 1200;
      const tick = t => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * eased).toLocaleString('en-US');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
    const parallax = Array.from(document.querySelectorAll('[data-parallax]'));
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        parallax.forEach(el => {
          const r = el.getBoundingClientRect();
          const offset = (r.top + y - y) * parseFloat(el.dataset.parallax) * -1;
          el.style.backgroundPosition = `center calc(50% + ${Math.round(offset * 0.12)}px)`;
        });
      });
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}
function Home() {
  const [tab, setTab] = React.useState('Personal');
  const [nav, setNav] = React.useState('Home');
  const [playing, setPlaying] = React.useState(false);
  const [condensed, setCondensed] = React.useState(false);
  useMotion();
  React.useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bev-black-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    items: NAV,
    activeItem: nav,
    onNavigate: setNav,
    condensed: condensed,
    assetBase: "../../"
  })), /*#__PURE__*/React.createElement(Hero, {
    image: "../../assets/images/hero-fleet.jpg",
    eyebrow: "2026 fleet lineup now arrived",
    headline: "Life is bright.",
    subhead: "Premium golf carts. Street-legal performance.\nDelivered nationwide.",
    body: "Discover premium electric vehicles built for more than the course. Personal rides, street-legal models, and commercial solutions - with seamless white-glove financing and delivery directly to your door.",
    actions: [{
      label: 'Shop golf carts'
    }, {
      label: 'Explore financing'
    }],
    benefits: ['Sales', 'Rentals', 'Service', 'Nationwide'],
    flagship: {
      model: 'ICON i40L Lifted EV',
      price: '$12,995'
    }
  }), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(PromoStrip, {
    title: "Summer is here. So are the savings.",
    body: "Save up to $777 on select premium golf carts through September 30, 2026.",
    action: "View summer savings"
  }), /*#__PURE__*/React.createElement(NextEV, null), /*#__PURE__*/React.createElement(Details, null), /*#__PURE__*/React.createElement(LifestyleBand, {
    onPlay: () => setPlaying(true)
  }), /*#__PURE__*/React.createElement(StatBand, null), /*#__PURE__*/React.createElement(FindYourRide, {
    tab: tab,
    setTab: setTab
  }), /*#__PURE__*/React.createElement(FinancingDelivery, null), /*#__PURE__*/React.createElement(TrustBand, null), /*#__PURE__*/React.createElement(BrandExplorer, null), /*#__PURE__*/React.createElement(DualBanners, null), /*#__PURE__*/React.createElement(Community, null), /*#__PURE__*/React.createElement(SiteFooter, {
    blurb: "Premium golf carts and electric vehicles for personal,\ncommercial and lifestyle transportation.",
    legal: "\xA9 2026 Bright Electric Vehicles. All Rights Reserved.",
    contacts: ['888-260-0707', 'sales@brightev.com', 'Nationwide Delivery to Your Door'],
    columns: [{
      title: 'Street-Legal',
      links: ['2 Seater', '4 Seater', '4+2 Seater', 'All Street-Legal', 'Lithium Upgrades']
    }, {
      title: 'Commercial',
      links: ['Utility', 'Resort & Hospitality', 'Fleet Programs', 'Facilities', 'Custom Builds']
    }, {
      title: 'Services',
      links: ['Mobile Maintenance', 'Lithium Conversion', 'Custom Upgrades', 'Warranty Protection', 'Parts & Accessories']
    }, {
      title: 'Financing',
      links: ['Apply for Credit', 'Payment Calculator', 'Commercial Leasing', 'Trade-In Valuation', 'Dealer Programs']
    }, {
      title: 'Contact',
      links: ['Contact Us', 'Delivery Tracker', 'Showrooms', 'FAQ', 'Privacy Policy']
    }]
  }), playing && /*#__PURE__*/React.createElement("div", {
    onClick: () => setPlaying(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40,
      background: 'var(--bev-overlay-90)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      animation: 'bev-fade 260ms var(--ease-out-expo) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 880,
      aspectRatio: '16 / 9',
      borderRadius: 8,
      background: 'var(--bev-black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-card-lg)',
      animation: 'bev-zoom 420ms var(--ease-out-expo) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontSize: 16,
      letterSpacing: '3.2px',
      textTransform: 'uppercase',
      color: 'var(--bev-gold-light)'
    }
  }, "Brand film \u2014 placeholder"))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Home, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSections.jsx
try { (() => {
const NS = window.BrightEVDesignSystem_89bdae;
const {
  Hero,
  SplitPanel,
  SectionHeading,
  Kicker,
  Icon,
  Button,
  PillarCard,
  FeatureBlock,
  PhotoTile,
  BrandCard,
  TrustItem,
  SpecTile,
  ProcessStep,
  VehicleCard,
  UseCaseCard,
  PromoBanner,
  TestimonialCard,
  RegionalMapCard,
  FilterPill,
  PromoStrip
} = NS;
const A = '../../assets/images/';
const Section = ({
  bg,
  padY = 40,
  children,
  style
}) => /*#__PURE__*/React.createElement("section", {
  className: "bev-reveal",
  style: {
    background: bg,
    padding: `${padY}px 0`,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: '0 auto',
    padding: '0 24px'
  }
}, children));
function NextEV() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bev-reveal",
    style: {
      background: 'var(--bev-offwhite)',
      padding: '112px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bev-lift bev-zoom-media",
    style: {
      borderRadius: 4,
      background: 'var(--bev-white)',
      boxShadow: 'var(--shadow-soft)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'showcase-lsv.jpg',
    alt: "Street-ready LSV",
    style: {
      width: '100%',
      height: 411,
      objectFit: 'cover',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '1.4px',
      textTransform: 'uppercase',
      color: 'var(--bev-muted)'
    }
  }, "Street-ready LSV certified"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '20px',
      letterSpacing: '0.7px',
      color: 'var(--bev-gold)'
    }
  }, "Up to 25 MPH"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    tone: "light",
    size: "xl",
    maxWidth: 620,
    kicker: "More than a golf cart.",
    title: "Your next electric\nvehicle."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '24px 0',
      fontSize: 16,
      lineHeight: '26px',
      color: 'var(--bev-muted)'
    }
  }, "From relaxed neighborhood cruising to heavy-duty resort operations, BrightEV brings together premium electric vehicles precision-engineered for modern short-range travel. No fuel odors, minimal maintenance, and zero noise."), /*#__PURE__*/React.createElement("div", {
    className: "bev-stagger",
    style: {
      display: 'flex',
      gap: 16,
      padding: '8px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(PillarCard, {
    icon: "shield",
    title: "Street-legal",
    body: "Take your electric ride\nbeyond the course with\nselect street-legal\nmodels."
  }), /*#__PURE__*/React.createElement(PillarCard, {
    icon: "shield",
    title: "Built for work",
    body: "Reliable electric\ntransportation for\nresorts, hospitality, and\ncorporate fleets."
  }), /*#__PURE__*/React.createElement(PillarCard, {
    icon: "shield",
    title: "No gas. All fun.",
    body: "Quiet, efficient electric\ndriving without\nsacrificing comfort or\nspeed."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "md",
    icon: "arrow-right",
    style: {
      padding: '12px 32px'
    }
  }, "Find your ride")))));
}
function Details() {
  const tiles = [['detail-digital-display', 'Digital display'], ['detail-diamond-stitching', 'Diamond stitching'], ['detail-led-optics', 'LED optics'], ['detail-custom-wheels', 'Custom wheels'], ['detail-lithium-power', 'Lithium power']];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bev-surface-2)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "It's in the details.",
    title: "Built around the way you\ndrive."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bev-stagger",
    style: {
      display: 'flex',
      gap: 12,
      padding: '24px 0',
      alignSelf: 'stretch'
    }
  }, tiles.map(([img, cap]) => /*#__PURE__*/React.createElement(PhotoTile, {
    key: cap,
    src: A + img + '.jpg',
    caption: cap,
    style: {
      flex: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bev-stagger",
    style: {
      display: 'flex',
      gap: 24,
      padding: '40px 0 0',
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(FeatureBlock, {
    icon: "bolt",
    title: "Smarter electric power",
    body: "Smooth, quiet electric performance\npowered by zero-maintenance high-\ncycle lithium technology.",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(FeatureBlock, {
    icon: "bolt",
    title: "Premium comfort",
    body: "Thoughtful ergonomic seating,\nautomotive-grade suspension, and\nabundant protected storage.",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(FeatureBlock, {
    icon: "bolt",
    title: "Ready for your world",
    body: "Personalize seating, lift kits, sound\nbars, and cargo attachments tailored\nto your lifestyle.",
    style: {
      flex: 1
    }
  }))));
}
function LifestyleBand({
  onPlay
}) {
  const {
    PlayButton
  } = NS;
  return /*#__PURE__*/React.createElement("section", {
    "data-parallax": "0.12",
    style: {
      position: 'relative',
      height: 520,
      background: `url(${A}lifestyle-cinematic.jpg) center / cover no-repeat`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bev-overlay-70)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 768,
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(PlayButton, {
    onClick: onPlay
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 68,
      lineHeight: '72px',
      letterSpacing: '-1.36px',
      textAlign: 'center',
      textTransform: 'uppercase',
      color: 'var(--bev-white)',
      whiteSpace: 'pre-line'
    }
  }, "Go further.\nQuieter. Brighter."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '12px 0',
      maxWidth: 576,
      fontSize: 16,
      lineHeight: '26px',
      textAlign: 'center',
      color: 'var(--bev-sand)'
    }
  }, "Premium electric mobility for the neighborhood, the resort, the property, and everywhere in between."), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '8px 0',
      fontFamily: 'var(--font-sub)',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '3.2px',
      textTransform: 'uppercase',
      color: 'var(--bev-gold-light)'
    }
  }, "No gas. All the fun.")));
}
function FindYourRide({
  tab,
  setTab
}) {
  const tabs = ['Personal', 'Street-legal', 'Commercial', 'Resort & hospitality'];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bev-black)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "Vehicle selector",
    title: "Find your ride",
    size: "xl",
    lede: "Choose the vehicle that fits your lifestyle, property or business."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 0',
      display: 'inline-flex',
      gap: 8,
      borderRadius: 4,
      background: 'var(--bev-surface-1)',
      padding: 6
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement(FilterPill, {
    key: t,
    active: t === tab,
    onClick: () => setTab(t)
  }, t)))), /*#__PURE__*/React.createElement(VehicleCard, {
    image: A + 'vehicle-icon-i40l.jpg',
    name: "ICON i40L",
    badges: [{
      label: 'Most popular'
    }, {
      label: 'Lifted 4x2'
    }],
    description: "Street-legal capability. Lifted suspension. Luxurious diamond-stitched\ncomfort with performance engineering designed for both the golf\ncourse and the neighborhood.",
    price: "$12,995",
    assurances: [{
      label: 'Financing from $189/mo Available'
    }, {
      label: 'Nationwide White-Glove Home Delivery',
      icon: 'truck-check'
    }],
    onPrev: () => {},
    onNext: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    className: "bev-stagger",
    style: {
      display: 'flex',
      gap: 24,
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement(UseCaseCard, {
    style: {
      flex: 1
    },
    image: A + 'usecase-residential.jpg',
    badge: "Residential",
    title: "For home: your neighborhood\nupgraded",
    body: "Electric transportation for family outings,\ngated communities, ranches, and quick\neveryday errands.",
    linkLabel: "Explore personal carts"
  }), /*#__PURE__*/React.createElement(UseCaseCard, {
    style: {
      flex: 1
    },
    image: A + 'usecase-commercial.jpg',
    badge: "Commercial",
    title: "For business: smarter work\ntransport",
    body: "Turnkey fleet solutions for commercial\nproperties, facilities management, security,\nand warehouse operations.",
    linkLabel: "Explore commercial"
  }), /*#__PURE__*/React.createElement(UseCaseCard, {
    style: {
      flex: 1
    },
    image: A + 'usecase-hospitality.jpg',
    badge: "Hospitality",
    title: "For resorts: move guests in luxury",
    body: "Premium multi-passenger shuttles\nengineered to deliver smooth, noiseless first-\nclass guest experiences.",
    linkLabel: "Explore fleet options"
  }))));
}
function FinancingDelivery() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bev-reveal",
    style: {
      background: 'var(--bev-offwhite)',
      padding: '40px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      display: 'flex',
      gap: 40,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SplitPanel, {
    kicker: "Your next ride is within reach",
    title: "Drive now. Pay over\ntime.",
    body: "Getting into a premium electric vehicle shouldn't mean paying everything\nupfront. Explore flexible low-APR financing options tailored to your monthly\nbudget.",
    media: /*#__PURE__*/React.createElement("img", {
      src: A + 'financing-lifestyle.jpg',
      alt: "",
      style: {
        width: '100%',
        height: 290,
        objectFit: 'cover',
        borderRadius: 4
      }
    }),
    actions: [{
      label: 'Apply for financing'
    }, {
      label: 'Calculate payment'
    }]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '17px 0'
    }
  }, /*#__PURE__*/React.createElement(SpecTile, {
    icon: "quick-approval",
    label: "Quick approval"
  }), /*#__PURE__*/React.createElement(SpecTile, {
    icon: "quick-approval",
    label: "Flexible terms"
  }), /*#__PURE__*/React.createElement(SpecTile, {
    icon: "quick-approval",
    label: "No prepay penalty"
  }))), /*#__PURE__*/React.createElement(SplitPanel, {
    kicker: "From our lot to your door",
    title: "Nationwide delivery\nmade simple.",
    body: "Found the perfect vehicle but don't live down the street? No problem. Our\ndedicated transport logistics team delivers directly across the contiguous US.",
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 4,
        background: 'var(--bev-black)',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement(Kicker, {
      tracking: "tight"
    }, "Direct delivery"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sub)',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '24px',
        textTransform: 'uppercase',
        color: 'var(--bev-white)'
      }
    }, "To your driveway")), /*#__PURE__*/React.createElement(Icon, {
      name: "delivery-truck",
      size: 29,
      style: {
        width: 36.75,
        height: 28.875
      },
      color: "var(--bev-gold-light)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 8,
      style: {
        width: 10.867,
        height: 8.017
      },
      color: "var(--bev-success)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: '16px',
        color: 'var(--bev-sand)'
      }
    }, "Fully assembled, inspected and charge-ready upon arrival."))),
    actions: [{
      label: 'Get a delivery quote',
      variant: 'ink'
    }]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '13px 0'
    }
  }, /*#__PURE__*/React.createElement(ProcessStep, {
    number: "01",
    title: "Select your cart",
    body: "Choose model, options, batteries, and customized body finishes."
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    number: "02",
    title: "Fast digital sign-off",
    body: "Title processing handled end-to-end by our team."
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    number: "03",
    title: "Unloaded at your door",
    body: "Delivered to your residence or business, ready to drive immediately."
  })))));
}
function TrustBand() {
  const items = [['Premium selection', "Tier-one electric vehicles\nrigorously vetted from leading\nmanufacturers."], ['Clear pricing', "Zero hidden dealership fees or\nsurprise destination\nsurcharges."], ['Easy financing', "Competitive rates with\nnationwide lending partners for\nall credit tiers."], ['Direct delivery', "Enclosed or open carrier\ntransportation right to your\ndoor."], ['Sales & service', "Dedicated mobile technicians,\nfactory warranties, and OEM\nspare parts."]];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bev-surface-1)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "Why BrightEV",
    title: "A brighter way to buy electric."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bev-stagger",
    style: {
      display: 'flex',
      gap: 24,
      padding: '17px 0',
      justifyContent: 'center'
    }
  }, items.map(([t, b]) => /*#__PURE__*/React.createElement(TrustItem, {
    key: t,
    title: t,
    body: b
  })))));
}
function BrandExplorer() {
  const brands = [['brand-icon-ev', 'ICON EV', "High-torque commercial and lifted\nneighborhood carts."], ['brand-epic-carts', 'Epic Carts', "Ultra-luxurious aesthetics with\nstandard premium upgrades."], ['brand-dach', 'Dach', "Rugged durability and heavy-duty\nchassis engineering."], ['brand-solana', 'Solana', "European styling matched with\neffortless zero-emission zip."], ['brand-tomberlin', 'Tomberlin', "Automotive-grade LSVs built for\nhighway-certified standards."]];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bev-black)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "Premier portfolio",
    title: "Explore our electric brands",
    lede: "Different personalities. Shared commitment to quality and quiet electric freedom."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bev-stagger",
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center'
    }
  }, brands.map(([img, name, body]) => /*#__PURE__*/React.createElement(BrandCard, {
    key: name,
    logo: A + img + '.jpg',
    name: name,
    body: body
  })))));
}
function DualBanners() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bev-surface-2)",
    style: {
      padding: '40px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bev-stagger",
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(PromoBanner, {
    style: {
      flex: 1
    },
    kicker: "Dedicated support",
    title: "Service that goes\nbeyond the sale.",
    body: "From scheduled preventive checkups to complex controller tuning\nand warranty repairs, our factory-certified technicians keep your\nvehicle running like new.",
    chips: ['Mobile Maintenance', 'Custom Accessories', 'OEM Replacements'],
    actions: [{
      label: 'Explore service'
    }, {
      label: 'Schedule service'
    }],
    backgroundImage: A + 'banner-service.jpg'
  }), /*#__PURE__*/React.createElement(PromoBanner, {
    style: {
      flex: 1
    },
    kicker: "Drop-in performance",
    title: "Upgrade your ride\nto lithium from\n$2,499.",
    body: "Say goodbye to acid spills, heavy watering, and short battery\nlifespans. Cut vehicle weight by 300 lbs and enjoy 3x faster\ncharging and up to 10 years of reliable power.",
    chips: ['✓ 8-Year Warranty', '✓ Rapid Installation', '✓ Compatible with Most Brands'],
    actions: [{
      label: 'Explore battery upgrades'
    }],
    backgroundImage: A + 'banner-lithium.jpg'
  })));
}
function Community() {
  const gallery = [['gallery-neighborhood', 'Neighborhood'], ['gallery-resort-escapes', 'Resort escapes'], ['gallery-commercial-fleets', 'Commercial fleets'], ['gallery-everyday-errands', 'Everyday errands']];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bev-offwhite)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    kicker: "Golf carts in action",
    title: "See where Bright takes you."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bev-stagger",
    style: {
      display: 'flex',
      gap: 12,
      alignSelf: 'stretch'
    }
  }, gallery.map(([img, cap]) => /*#__PURE__*/React.createElement(PhotoTile, {
    key: cap,
    src: A + img + '.jpg',
    caption: cap,
    ratio: "wide",
    captionSize: 16,
    scrim: "soft",
    style: {
      flex: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bev-stagger",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      alignSelf: 'stretch',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    style: {
      alignSelf: 'start'
    },
    quote: '"The entire process was easier than we expected. From custom\nseating selection to doorstep delivery in Arizona, BrightEV made\npurchasing our family\'s cart an absolute joy."',
    avatar: A + 'testimonial-vance.jpg',
    name: "Marcus & Elena Vance",
    meta: "Verified Owners \u2014 ICON i40L Lifted"
  }), /*#__PURE__*/React.createElement(RegionalMapCard, {
    title: "Sales, rentals & service",
    body: "Serving residential owners and commercial partners across California,\nArizona, Nevada, New Mexico, and Hawaii with mobile vans and\nregional hubs.",
    map: A + 'regional-map.png',
    statusLabel: "Active hubs: Scottsdale, Palm Springs, Las Vegas, Honolulu",
    actions: [{
      label: 'Find a location'
    }, {
      label: 'Contact our team'
    }]
  }))));
}
function StatBand() {
  const stats = [['777', 'Summer savings, up to $'], ['25', 'Top speed, MPH'], ['5', 'States served'], ['189', 'Financing from $/mo']];
  return /*#__PURE__*/React.createElement("section", {
    className: "bev-reveal",
    style: {
      background: 'var(--bev-black)',
      borderTop: '1px solid var(--bev-surface-3)',
      borderBottom: '1px solid var(--bev-surface-3)',
      padding: '40px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bev-stagger",
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, stats.map(([n, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bev-count",
    "data-to": n,
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 700,
      fontSize: 52,
      lineHeight: '56px',
      color: 'var(--bev-gold-pale)'
    }
  }, "0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: '2.2px',
      textTransform: 'uppercase',
      color: 'var(--bev-sand)'
    }
  }, label)))));
}
function Ticker() {
  const words = ['NO GAS. ALL THE FUN.', 'DRIVE A BRIGHTER TOMORROW', 'STREET-LEGAL PERFORMANCE', 'DELIVERED NATIONWIDE'];
  const run = [...words, ...words, ...words, ...words];
  return /*#__PURE__*/React.createElement("div", {
    className: "bev-ticker",
    style: {
      background: 'var(--bev-gold)',
      padding: '11px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bev-ticker-track"
  }, run.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 28,
      paddingRight: 28,
      fontFamily: 'var(--font-sub)',
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: '3.2px',
      textTransform: 'uppercase',
      color: 'var(--bev-black-ink)'
    }
  }, w, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--bev-black-ink)',
      display: 'inline-block'
    }
  })))));
}
Object.assign(window, {
  StatBand,
  Ticker,
  NextEV,
  Details,
  LifestyleBand,
  FindYourRide,
  FinancingDelivery,
  TrustBand,
  BrandExplorer,
  DualBanners,
  Community
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FilterPill = __ds_scope.FilterPill;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.PlayButton = __ds_scope.PlayButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.BrandCard = __ds_scope.BrandCard;

__ds_ns.FeatureBlock = __ds_scope.FeatureBlock;

__ds_ns.FlagshipCard = __ds_scope.FlagshipCard;

__ds_ns.PhotoTile = __ds_scope.PhotoTile;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.RegionalMapCard = __ds_scope.RegionalMapCard;

__ds_ns.SpecTile = __ds_scope.SpecTile;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TrustItem = __ds_scope.TrustItem;

__ds_ns.UseCaseCard = __ds_scope.UseCaseCard;

__ds_ns.VehicleCard = __ds_scope.VehicleCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.PromoStrip = __ds_scope.PromoStrip;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.BRIGHTEV_NAV = __ds_scope.BRIGHTEV_NAV;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.SplitPanel = __ds_scope.SplitPanel;

})();
