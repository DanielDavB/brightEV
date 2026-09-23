import { ArrowRight, CarFront, Clock3, Heart, Instagram, KeyRound, Mail, MapPin, Phone, Wrench } from "lucide-react";
import { Link } from "wouter";
import BrightFooter from "@/components/BrightFooter";
import BrightHeader from "@/components/BrightHeader";
import { CONTACT, SERVICE_NETWORK_PHONE, SERVICE_NETWORK_PHONE_HREF } from "@/data/site";
import { withBase } from "@/lib/url";
import "@/styles/bright.css";
import "@/styles/bright-pages.css";

const img = (name: string) => withBase(`/pages/${name}`);

const STATS = [
  { value: "San Diego", label: "Mission Beach showroom" },
  { value: "Coala", label: "Genuine dealer inventory" },
  { value: "3", label: "Sales, rentals and service" },
  { value: "Local", label: "Owned and operated" },
];

const WHAT_WE_DO = [
  {
    icon: CarFront,
    title: "Sales",
    text: "New and pre-owned Coala electric carts, from two-seaters to six-passenger street-legal models.",
    href: "/street-legal",
    action: "Browse inventory",
  },
  {
    icon: KeyRound,
    title: "Rentals",
    text: "Beach days, neighborhood loops and events, handled from our Mission Boulevard location.",
    href: "#visit",
    action: "Reserve a cart",
  },
  {
    icon: Wrench,
    title: "Service",
    text: "Maintenance, upgrades and lithium conversions that keep your cart running season after season.",
    href: "/services",
    action: "Book service",
  },
];

const VALUES = [
  { icon: MapPin, title: "Local expertise", text: "Real people and real advice, right here in San Diego." },
  { icon: Clock3, title: "Ready for your day", text: "Clean, charged and prepared for wherever you are headed." },
  { icon: Heart, title: "Support that lasts", text: "From the first test drive to long after the keys are yours." },
  { icon: CarFront, title: "Genuine inventory", text: "Every cart we carry is real Coala inventory — no filler brands." },
];

export default function About() {
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
              Locally owned.
              <em>Built for the coast.</em>
            </h1>
            <p>
              {CONTACT.descriptor}. We sell, rent and service premium electric carts from our Mission Beach shop —
              {" "}
              {CONTACT.tagline.toLowerCase()}
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
              <strong>Since day one</strong>
              <span>Sales · Rentals · Service</span>
            </div>
          </div>
          <div>
            <p className="bx-eyebrow">Our story</p>
            <h2 className="bx-serif">A better way around town.</h2>
            <p style={{ maxWidth: 480, margin: "18px 0 0", color: "#63605a", fontSize: 15.5, lineHeight: 1.75 }}>
              We believe getting there should be part of the fun. That is why every cart we sell, rent and service is
              chosen for comfort, character and a little more joy — and why the same local team answers the phone, hands
              you the keys and takes care of the cart afterwards.
            </p>
            <p style={{ maxWidth: 480, margin: "16px 0 0", color: "#63605a", fontSize: 15.5, lineHeight: 1.75 }}>
              You will find us on Mission Boulevard, a few blocks from the sand, with genuine Coala inventory on the
              floor and a service bench in the back.
            </p>
            <div className="pg-hero-actions" style={{ marginTop: 28 }}>
              <Link className="bx-btn bx-btn-quiet" href="/services">
                How we service carts <ArrowRight size={15} />
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
              return (
                <article className="pg-card pg-card-dark" key={item.title}>
                  <span className="pg-card-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.href.startsWith("#") ? (
                    <a className="pg-link" href={item.href}>
                      {item.action} <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link className="pg-link" href={item.href}>
                      {item.action} <ArrowRight size={14} />
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
                <Icon size={28} strokeWidth={1.2} />
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
            <p className="bx-eyebrow">Visit us</p>
            <h2 className="bx-serif">Come by the shop.</h2>
            <p>Call ahead and we will have the cart you want charged and waiting.</p>
          </div>
          <div className="pg-contact">
            <article className="pg-contact-card">
              <h3>Talk to us</h3>
              <a className="pg-contact-row" href={CONTACT.phoneHref}>
                <span>
                  <Phone size={17} />
                </span>
                {CONTACT.phone}
              </a>
              <a className="pg-contact-row" href={CONTACT.emailHref}>
                <span>
                  <Mail size={17} />
                </span>
                {CONTACT.email}
              </a>
              <a className="pg-contact-row" href={SERVICE_NETWORK_PHONE_HREF}>
                <span>
                  <Wrench size={17} />
                </span>
                Service network · {SERVICE_NETWORK_PHONE}
              </a>
              <a className="pg-contact-row" href={CONTACT.instagramHref} target="_blank" rel="noreferrer">
                <span>
                  <Instagram size={17} />
                </span>
                Follow along
              </a>
            </article>
            <article className="pg-contact-card">
              <h3>Showroom</h3>
              <a className="pg-contact-row" href={CONTACT.mapsHref} target="_blank" rel="noreferrer">
                <span>
                  <MapPin size={17} />
                </span>
                {CONTACT.addressLine1}, {CONTACT.addressLine2}
              </a>
              <p className="pg-contact-note">{CONTACT.hoursNote}</p>
              <div className="pg-hero-actions" style={{ marginTop: 22 }}>
                <a className="bx-btn bx-btn-gold" href={CONTACT.mapsHref} target="_blank" rel="noreferrer">
                  Get directions
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
            <p>Tell us how you plan to use it and we will point you at the right cart — no pressure.</p>
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
