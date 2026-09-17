import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ZoomIn, ZoomOut } from "lucide-react";
import { CONTACT } from "@/data/site";
import type { CartCategoryCopy } from "@/data/site";
import { getCategoryColorOptions, loadCartPhotoManifest } from "@/lib/cartPhotos";
import type { CartPhotoColor } from "@/lib/cartPhotos";
import { withBase } from "@/lib/url";

interface CartCategorySectionProps {
  category: CartCategoryCopy;
}

export default function CartCategorySection({ category }: CartCategorySectionProps) {
  const [photos, setPhotos] = useState<string[]>([category.fallbackImage]);
  const [colorOptions, setColorOptions] = useState<CartPhotoColor[]>([]);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    let mounted = true;
    loadCartPhotoManifest().then((manifest) => {
      if (!mounted) return;
      const options = getCategoryColorOptions(manifest, category.photoSlugs);
      setColorOptions(options);
      setActiveColor(options[0]?.slug ?? null);
      setPhotos(options[0]?.photos ?? [category.fallbackImage]);
      setActivePhoto(0);
      setIsZoomed(false);
    });
    return () => {
      mounted = false;
    };
  }, [category]);

  return (
    <section className="category-section reveal" id={category.id}>
      <div className="category-heading">
        <p className="eyebrow">
          <span className="eyebrow-line" /> {category.eyebrow}
        </p>
        <h2>
          {category.title} <em>{category.titleEm}</em>
        </h2>
        <p>{category.description}</p>
      </div>
      <div className="category-body">
        <div className="cart-gallery">
          {colorOptions.length > 1 && (
            <div className="cart-color-picker" aria-label={`${category.title} colors`}>
              <span className="cart-color-picker-label">Color</span>
              <div className="cart-color-options">
                {colorOptions.map((option) => (
                  <button
                    className={`cart-color-option${option.slug === activeColor ? " is-active" : ""}`}
                    type="button"
                    key={option.slug}
                    aria-pressed={option.slug === activeColor}
                    onClick={() => {
                      setActiveColor(option.slug);
                      setPhotos(option.photos);
                      setActivePhoto(0);
                      setIsZoomed(false);
                    }}
                  >
                    <span className={`cart-color-swatch cart-color-swatch-${option.slug}`} aria-hidden="true" />
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className={`cart-gallery-main${isZoomed ? " is-zoomed" : ""}`}>
            <img
              src={withBase(photos[activePhoto])}
              alt={`${category.title} Coala golf cart, photo ${activePhoto + 1}`}
              loading="eager"
              decoding="async"
              onClick={() => setIsZoomed((zoomed) => !zoomed)}
            />
            {photos.length > 1 && (
              <>
                <button
                  className="cart-gallery-arrow cart-gallery-arrow-left"
                  type="button"
                  aria-label="Previous cart photo"
                  title="Previous photo"
                  onClick={() => {
                    setActivePhoto((photo) => (photo - 1 + photos.length) % photos.length);
                    setIsZoomed(false);
                  }}
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  className="cart-gallery-arrow cart-gallery-arrow-right"
                  type="button"
                  aria-label="Next cart photo"
                  title="Next photo"
                  onClick={() => {
                    setActivePhoto((photo) => (photo + 1) % photos.length);
                    setIsZoomed(false);
                  }}
                >
                  <ArrowRight size={18} />
                </button>
              </>
            )}
            <button
              className="cart-gallery-zoom"
              type="button"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              title={isZoomed ? "Zoom out" : "Zoom in"}
              onClick={() => setIsZoomed((zoomed) => !zoomed)}
            >
              {isZoomed ? <ZoomOut size={17} /> : <ZoomIn size={17} />}
            </button>
          </div>
          {photos.length > 1 && (
            <div className="cart-gallery-thumbnails" aria-label={`${category.title} photo previews`}>
              {photos.map((src, index) => (
                <button
                  className={`cart-gallery-thumbnail${index === activePhoto ? " is-active" : ""}`}
                  key={src}
                  type="button"
                  aria-label={`Show photo ${index + 1}`}
                  aria-current={index === activePhoto ? "true" : undefined}
                  onClick={() => {
                    setActivePhoto(index);
                    setIsZoomed(false);
                  }}
                >
                  <img src={withBase(src)} alt="" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          {category.specs.length > 0 && (
            <ul className="category-specs">
              {category.specs.map((spec) => (
                <li key={spec.label}>
                  <strong>{spec.label}</strong>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          )}
          {category.note && (
            <p className="category-note">
              {category.verified ? "Note: " : "To confirm: "}
              {category.note}
            </p>
          )}
          <a className="category-cta" href={CONTACT.phoneHref}>
            Ask about this cart <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
