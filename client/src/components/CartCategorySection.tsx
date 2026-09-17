import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/data/site";
import type { CartCategoryCopy } from "@/data/site";
import { getCategoryPhotos, loadCartPhotoManifest } from "@/lib/cartPhotos";
import { withBase } from "@/lib/url";

interface CartCategorySectionProps {
  category: CartCategoryCopy;
}

export default function CartCategorySection({ category }: CartCategorySectionProps) {
  const [photos, setPhotos] = useState<string[]>([category.fallbackImage]);

  useEffect(() => {
    let mounted = true;
    loadCartPhotoManifest().then((manifest) => {
      if (!mounted) return;
      setPhotos(getCategoryPhotos(manifest, category.photoSlugs, [category.fallbackImage]));
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
        <div className="photo-grid">
          {photos.map((src) => (
            <img key={src} src={withBase(src)} alt={`${category.title} Coala golf cart`} loading="lazy" decoding="async" />
          ))}
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
