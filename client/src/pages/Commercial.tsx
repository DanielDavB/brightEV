import { useEffect } from "react";
import CartCategorySection from "@/components/CartCategorySection";
import PageBanner from "@/components/PageBanner";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { COMMERCIAL_CATEGORIES } from "@/data/site";
import { initScrollAnimations } from "@/lib/animations";

export default function Commercial() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <PageBanner
        eyebrow="Commercial Coala carts"
        title={
          <>
            Built to <em>work.</em>
          </>
        }
        description="Fleet and property-service carts for businesses, HOAs, and hospitality — same Coala build quality, sized for the job."
        image="/banner-lithium.jpg"
      >
        <nav className="category-subnav" aria-label="Commercial categories">
          {COMMERCIAL_CATEGORIES.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.title}
            </a>
          ))}
        </nav>
      </PageBanner>

      {COMMERCIAL_CATEGORIES.map((category) => (
        <CartCategorySection category={category} key={category.slug} />
      ))}

      <SiteFooter />
    </main>
  );
}
