import { Link } from "wouter";
import BrightFooter from "@/components/BrightFooter";
import BrightHeader from "@/components/BrightHeader";
import { usePageTitle } from "@/hooks/usePageTitle";
import "@/styles/bright.css";
import "@/styles/bright-pages.css";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <div className="bh-page pg-page">
      <BrightHeader active="" />
      <section className="pg-section pg-darker pg-notfound">
        <div className="bh-container">
          <div className="pg-head">
            <p className="bx-eyebrow">Error 404</p>
            <h1 className="bx-serif">This road doesn&apos;t go anywhere.</h1>
            <p>The page you are looking for has moved or no longer exists. Let&apos;s get you back on track.</p>
          </div>
          <div className="pg-hero-actions pg-actions-spaced">
            <Link className="bx-btn bx-btn-gold" href="/">
              Back to home
            </Link>
            <Link className="bx-btn bx-btn-outline" href="/street-legal">
              Browse the Coala lineup
            </Link>
          </div>
        </div>
      </section>
      <BrightFooter />
    </div>
  );
}
