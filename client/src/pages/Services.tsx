import { useEffect } from "react";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT, SERVICES_OFFERED, SERVICE_LINK_URL, SERVICE_NETWORK_PHONE, SERVICE_NETWORK_PHONE_HREF } from "@/data/site";
import { initScrollAnimations } from "@/lib/animations";

export default function Services() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <PageBanner
        eyebrow="Parts & service"
        title={
          <>
            Keep it <em>running bright.</em>
          </>
        }
        description="Our San Diego team handles day-to-day questions and scheduling. Full parts, maintenance, and lithium battery upgrade details live on the official Bright EV service site, linked below."
        image="/banner-service.jpg"
      >
        <div className="hero-actions" style={{ marginTop: "1.8rem" }}>
          <a className="button button-gold" href={SERVICE_LINK_URL} target="_blank" rel="noreferrer">
            Visit the full service site <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href={CONTACT.phoneHref}>
            Or call {CONTACT.phone} <Phone size={15} />
          </a>
        </div>
      </PageBanner>

      <section className="services-page-body reveal">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" /> What's covered
          </p>
          <h2 style={{ margin: "0 0 .8rem", fontFamily: "'Bodoni Moda',serif", fontSize: "clamp(2.4rem,4vw,3.6rem)", fontWeight: 500, letterSpacing: "-.06em" }}>
            Maintenance, repair, <em style={{ color: "var(--gold)", fontStyle: "italic" }}>and battery upgrades.</em>
          </h2>
          <p style={{ maxWidth: 560, color: "#6f695f", fontSize: 14, lineHeight: 1.75 }}>
            Confirmed directly from brightev.com's service page — this is the real scope of work offered across the
            Bright EV network, including mobile service that comes to you.
          </p>
          <ul className="services-list">
            {SERVICES_OFFERED.map((service) => (
              <li key={service}>
                <Check size={16} /> {service}
              </li>
            ))}
          </ul>
        </div>
        <aside className="service-outbound-card">
          <h3>Lithium battery upgrades</h3>
          <p>
            Lead-acid to ECO Battery lithium conversions are available starting at $2,499.00 for a complete system,
            with financing from $199/month, 0% interest for 24 months (OAC) — as posted on the official service page.
          </p>
          <a className="button button-gold" href={SERVICE_LINK_URL} target="_blank" rel="noreferrer">
            See pricing &amp; schedule service <ArrowUpRight size={16} />
          </a>
          <p className="category-note">
            To confirm: the service page lists {SERVICE_NETWORK_PHONE} as its own scheduling line — that's the
            broader, multi-state Bright EV service network (CA / NV / AZ / NM / HI), separate from the San Diego
            dealership number above. Ask Bright EV which number they want featured here.{" "}
            <a href={SERVICE_NETWORK_PHONE_HREF} style={{ color: "var(--gold)" }}>
              {SERVICE_NETWORK_PHONE}
            </a>
          </p>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
