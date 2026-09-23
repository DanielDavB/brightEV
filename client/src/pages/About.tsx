import { ArrowRight, BatteryCharging, CarFront, KeyRound, Mail, MapPin, MessageSquare, Phone, Truck, Wrench } from "lucide-react";
import { Link } from "wouter";
import BrightFooter from "@/components/BrightFooter";
import BrightHeader from "@/components/BrightHeader";
import { CONTACT, NETWORK, SERVICE_NETWORK_PHONE, SERVICE_NETWORK_PHONE_HREF } from "@/data/site";
import { usePageTitle } from "@/hooks/usePageTitle";
import { withBase } from "@/lib/url";
import "@/styles/bright.css";
import "@/styles/bright-pages.css";

const img = (name: string) => withBase(`/pages/${name}`);

const STATS = [
  { value: "San Diego", label: "Mission Beach showroom" },
  { value: "Coala", label: "Our street-legal lineup" },
  { value: "5 states", label: "Bright EV network" },
  { value: "Nationwide", label: "Delivery in the continental U.S." },
];

const WHAT_WE_DO = [
  {
    icon: CarFront,
    title: "Sales",
    text: "The Coala lineup — 2, 2+2, 4 and 4+2 seaters plus the 2 Utility — with financing and delivery.",
    href: "/street-legal",
    action: "Browse the lineup",
  },
  {
    icon: KeyRound,
    title: "Rentals",
    text: `Daily rentals start at ${NETWORK.rentalFrom} at most Bright EV locations, with multi-day and group rates for events.`,
    href: "#visit",
    action: "Ask about rentals",
  },
  {
    icon: Wrench,
    title: "Service",
    text: "Inspections, brakes, electrical diagnostics, mobile service and lead-acid to lithium upgrades.",
    href: "/services",
    action: "Book service",
  },
];

const VALUES = [
  { icon: MapPin, title: "Local expertise", text: "Real people and real advice, right here in San Diego." },
  { icon: BatteryCharging, title: "Coala only", text: "Every cart we sell is a Coala, backed by a 10-year battery cell warranty." },
  { icon: Truck, title: "Delivered to you", text: "Delivery anywhere in the continental United States." },
  { icon: Wrench, title: "Support that lasts", text: "Service, repairs and upgrades long after the keys are yours." },
];

export default function About() {
  usePageTitle("About & Contact");

  return (
    <div className="bh-page pg-page">
      <BrightHeader active="About" />

      <section className="pg-hero">
        <div className="pg-hero-media">
          <img src={img("abt-hero.jpg")} alt="Bright EV cart on the San Diego coast" fetchPriority="high" />
        </div>
        <div className="bh-container pg-hero-inner">
          <div className="pg-hero-copy">
            <p className="bx-eyebrow">About Bright EV</p>
            <h1 className="bx-serif">
              Rooted in San Diego.
              <em>Built for the coast.</em>
            </h1>
            <p>
              {CONTACT.descriptor}, part of the Bright EV sales, rentals and service network across {NETWORK.states}.{" "}
              {CONTACT.tagline}
            </p>
            <span className="bx-rule" />
            <div className="pg-hero-actions">
              <Link className="bx-btn bx-btn-gold" href="/street-legal">
                See the lineup
              </Link>
              <a className="bx-btn bx-btn-outline" href={CONTACT.phoneHref}>
                Call {CONTACT.phone}
              </a>
            </div>
          </div>
          <div className="pg-hero-stats">
            {STATS.map((stat) => (
              <div className="pg-hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-light">
        <div className="bh-container pg-split">
          <div className="pg-split-media">
            <img src={img("abt-story.jpg")} alt="Detail of a Coala electric cart" loading="lazy" />
            <div className="pg-split-badge">
              <strong>Coala only</strong>
              <span>Sales · Rentals · Service</span>
            </div>
          </div>
          <div>
            <p className="bx-eyebrow">Our story</p>
            <h2 className="bx-serif">A better way around town.</h2>
            <p className="pg-lead">
              We believe getting there should be part of the fun. That is why we focus on one lineup we know inside and
              out — Coala street-legal electric carts — and why the same local team answers the phone, hands you the
              keys and takes care of the cart afterwards.
            </p>
            <p className="pg-lead">
              You will find us on Mission Boulevard, a few blocks from the sand. Behind us is the wider Bright EV
              network, with locations in {NETWORK.states} and delivery anywhere in the continental United States.
            </p>
            <div className="pg-hero-actions pg-actions-spaced">
              <Link className="bx-btn bx-btn-quiet" href="/services">
                How we service carts <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section pg-dark">
        <div className="bh-container">
          <div className="pg-head">
            <p className="bx-eyebrow">What we do</p>
            <h2 className="bx-serif">One local team, three ways to ride.</h2>
          </div>
          <div className="pg-grid pg-grid-3">
            {WHAT_WE_DO.map((item) => {
              const Icon = item.icon;
              const label = (
                <>
                  {item.action} <ArrowRight size={14} aria-hidden="true" />
                </>
              );
              return (
                <article className="pg-card pg-card-dark" key={item.title}>
                  <span className="pg-card-icon">
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.href.startsWith("#") ? (
                    <a className="pg-link" href={item.href}>
                      {label}
                    </a>
                  ) : (
                    <Link className="pg-link" href={item.href}>
                      {label}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pg-strip">
        <div className="bh-container pg-strip-grid">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <article className="pg-strip-item" key={value.title}>
                <Icon size={28} strokeWidth={1.2} aria-hidden="true" />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pg-section pg-light" id="visit">
        <div className="bh-container">
          <div className="pg-head">
            <p className="bx-eyebrow">Visit &amp; contact</p>
            <h2 className="bx-serif">Come by the shop.</h2>
            <p>Call ahead and we will have the cart you want charged and waiting.</p>
          </div>
          <div className="pg-contact">
            <article className="pg-contact-card">
              <h3>Talk to us</h3>
              <a className="pg-contact-row" href={CONTACT.phoneHref}>
                <span>
                  <Phone size={17} aria-hidden="true" />
                </span>
                {CONTACT.phone}
              </a>
              <a className="pg-contact-row" href={CONTACT.emailHref}>
                <span>
                  <Mail size={17} aria-hidden="true" />
                </span>
                {CONTACT.email}
              </a>
              <a className="pg-contact-row" href={SERVICE_NETWORK_PHONE_HREF}>
                <span>
                  <Wrench size={17} aria-hidden="true" />
                </span>
                Bright EV network · {SERVICE_NETWORK_PHONE}
              </a>
              <a className="pg-contact-row" href={`sms:+1${NETWORK.textLine.replace(/-/g, "")}`}>
                <span>
                  <MessageSquare size={17} aria-hidden="true" />
                </span>
                Text us · {NETWORK.textLine}
              </a>
            </article>
            <article className="pg-contact-card">
              <h3>Showroom</h3>
              <a className="pg-contact-row" href={CONTACT.mapsHref} target="_blank" rel="noreferrer">
                <span>
                  <MapPin size={17} aria-hidden="true" />
                </span>
                {CONTACT.addressLine1}, {CONTACT.addressLine2}
              </a>
              <p className="pg-contact-note">{CONTACT.hoursNote}</p>
              <div className="pg-hero-actions pg-actions-spaced">
                <a className="bx-btn bx-btn-gold" href={CONTACT.mapsHref} target="_blank" rel="noreferrer">
                  Get directions
                </a>
                <a className="bx-btn bx-btn-quiet" href={NETWORK.locationsHref} target="_blank" rel="noreferrer">
                  All Bright EV locations
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pg-cta">
        <div className="pg-cta-media">
          <img src={img("pg-cta.jpg")} alt="Bright EV cart at sunset" loading="lazy" />
        </div>
        <div className="bh-container pg-cta-inner">
          <div>
            <h2 className="bx-serif">
              Ready when you are.
              <em>Let&apos;s find your ride.</em>
            </h2>
            <p>Tell us how you plan to use it and we will point you at the right Coala — no pressure.</p>
          </div>
          <div className="pg-cta-actions">
            <Link className="bx-btn bx-btn-gold" href="/street-legal">
              Shop carts
            </Link>
            <a className="bx-btn bx-btn-outline" href={CONTACT.phoneHref}>
              Call the shop
            </a>
          </div>
        </div>
      </section>

      <BrightFooter />
    </div>
  );
}
