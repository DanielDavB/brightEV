import { useEffect } from "react";
import CartCategorySection from "@/components/CartCategorySection";
import PageBanner from "@/components/PageBanner";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { COALA_BRAND_WARRANTY, STREET_LEGAL_CATEGORIES } from "@/data/site";
import { initScrollAnimations } from "@/lib/animations";

export default function StreetLegal() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <PageBanner
        eyebrow="Street legal Coala carts"
        title={
          <>
            Made for <em>real roads.</em>
          </>
        }
        description={`Coala low-speed vehicles built to take you further than the driveway. ${COALA_BRAND_WARRANTY}`}
        image="/hero-fleet.jpg"
      >
        <nav className="category-subnav" aria-label="Street legal categories">
          {STREET_LEGAL_CATEGORIES.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.title}
            </a>
          ))}
        </nav>
      </PageBanner>

      {STREET_LEGAL_CATEGORIES.map((category) => (
        <CartCategorySection category={category} key={category.slug} />
      ))}

      <SiteFooter />
    </main>
  );
}
