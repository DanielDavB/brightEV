import { useEffect } from "react";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT } from "@/data/site";
import { initScrollAnimations } from "@/lib/animations";

export default function Contact() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <PageBanner
        eyebrow="Ready when you are"
        title={
          <>
            Let's get you <em>on the road.</em>
          </>
        }
        description="Call, email, or stop by our Mission Beach showroom. Our team can talk you through availability, rentals, and service."
        image="/hero-fleet.jpg"
      />

      <section className="contact-page-body reveal">
        <div className="contact-card">
          <h3>Call or text</h3>
          <a href={CONTACT.phoneHref}>
            <Phone size={14} style={{ display: "inline", marginRight: 8, verticalAlign: -2 }} />
            {CONTACT.phone}
          </a>
          <h3 style={{ marginTop: "1.6rem" }}>Email</h3>
          <a href={CONTACT.emailHref}>
            <Mail size={14} style={{ display: "inline", marginRight: 8, verticalAlign: -2 }} />
            {CONTACT.email}
          </a>
          <h3 style={{ marginTop: "1.6rem" }}>Follow along</h3>
          <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer">
            <Instagram size={14} style={{ display: "inline", marginRight: 8, verticalAlign: -2 }} />
            Instagram
          </a>
          <p className="category-note" style={{ marginTop: "1.6rem" }}>
            To confirm: no Instagram handle or posted business hours were found on brightevgolfcarts.com — {" "}
            {CONTACT.hoursNote}
          </p>
        </div>
        <div className="contact-card">
          <h3>Visit the showroom</h3>
          <p>
            <MapPin size={14} style={{ display: "inline", marginRight: 8, verticalAlign: -2 }} />
            {CONTACT.addressLine1}
            <br />
            {CONTACT.addressLine2}
          </p>
          <a className="button button-gold" href={CONTACT.mapsHref} target="_blank" rel="noreferrer">
            Get directions <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
