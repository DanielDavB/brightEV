import {
  ArrowRight,
  BatteryCharging,
  CalendarCheck,
  CheckCircle2,
  Gauge,
  MapPin,
  Plus,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";
import BrightFooter from "@/components/BrightFooter";
import BrightHeader from "@/components/BrightHeader";
import {
  COALA_BRAND_WARRANTY,
  CONTACT,
  SERVICES_OFFERED,
  SERVICE_LINK_URL,
  SERVICE_NETWORK_PHONE,
  SERVICE_NETWORK_PHONE_HREF,
} from "@/data/site";
import { withBase } from "@/lib/url";
import "@/styles/bright.css";
import "@/styles/bright-pages.css";

const img = (name: string) => withBase(`/pages/${name}`);

const STATS = [
  { value: "Mobile", label: "Service that comes to you" },
  { value: "OEM", label: "Genuine parts and components" },
  { value: "10 yr", label: "Battery cell warranty" },
  { value: "Lifetime", label: "Frame warranty on every Coala" },
];

const STEPS = [
  { step: "01", title: "Book it", text: "Call or send a note with your model, the symptoms and where the cart lives." },
  { step: "02", title: "Diagnose", text: "A multi-point inspection and electrical diagnostics to find the real cause." },
  { step: "03", title: "Approve", text: "You get the findings, the parts needed and the cost before any work starts." },
  { step: "04", title: "Back on the road", text: "We complete the work, test the repair and hand the cart back ready to drive." },
];

const CARDS = [
  {
    icon: Wrench,
    title: "Maintenance & repair",
    text: "Multi-point inspections, brakes, steering and suspension, tire service and performance calibration.",
  },
  {
    icon: Gauge,
    title: "Electrical diagnostics",
    text: "Controller and motor testing, charging faults and the electrical gremlins that are hard to chase down.",
  },
  {
    icon: Truck,
    title: "Mobile service",
    text: "Our technicians come to your home, community or property so the cart never has to leave the lot.",
  },
];

const FAQ = [
  {
    q: "Do you service carts you did not sell?",
    a: "Yes. The service network works on the Coala lineup and on most major golf cart and LSV brands.",
  },
  {
    q: "How long does a lithium conversion take?",
    a: "Most conversions are completed in a single visit once the kit is in hand. We confirm the timeline when we quote the job.",
  },
  {
    q: "Can you come to my community?",
    a: "Mobile service covers home, community and commercial properties. Tell us the address and we will confirm coverage.",
  },
  {
    q: "What does the warranty cover?",
    a: COALA_BRAND_WARRANTY,
  },
];

export default function Services() {
  return (
    <div className="bh-page pg-page">
      <BrightHeader active="Service" />

      <section className="pg-hero">
        <div className="pg-hero-media">
          <img src={img("svc-hero.jpg")} alt="Bright EV technician servicing a cart" fetchPriority="high" />
        </div>
        <div className="bh-container pg-hero-inner">
          <div className="pg-hero-copy">
            <p className="bx-eyebrow">Parts &amp; service</p>
            <h1 className="bx-serif">
              Service that goes
              <em>beyond the sale.</em>
            </h1>
            <p>
              From scheduled maintenance to controller tuning and warranty repairs, our technicians keep your vehicle
              running like new — in the shop or at your door.
            </p>
            <span className="bx-rule" />
            <div className="pg-hero-actions">
              <a className="bx-btn bx-btn-gold" href={SERVICE_NETWORK_PHONE_HREF}>
                Schedule service
              </a>
              <a className="bx-btn bx-btn-outline" href={SERVICE_LINK_URL} target="_blank" rel="noreferrer">
                Full service site
              </a>
            </div>
          </div>
          <div className="pg-hero-stats">
            {STATS.map((stat) => (
              <div className="pg-hero-stat" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-light">
        <div className="bh-container">
          <div className="pg-head">
            <p className="bx-eyebrow">What we do</p>
            <h2 className="bx-serif">Everything your cart needs, in one place.</h2>
            <p>The real scope of work offered across the Bright EV service network, including mobile service.</p>
          </div>
          <div className="pg-grid pg-grid-3">
            {CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article className="pg-card" key={card.title}>
                  <span className="pg-card-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              );
            })}
          </div>
          <div className="pg-tags">
            {SERVICES_OFFERED.map((service) => (
              <span className="pg-tag" key={service}>
                <CheckCircle2 size={17} /> {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-dark">
        <div className="bh-container pg-split">
          <div>
            <p className="bx-eyebrow">Drop-in performance</p>
            <h2 className="bx-serif">Upgrade your ride to lithium.</h2>
            <p style={{ maxWidth: 470, margin: "18px 0 0", color: "#bdb8b1", fontSize: 15, lineHeight: 1.7 }}>
              Say goodbye to acid spills, heavy watering and short battery lifespans. Cut vehicle weight, charge faster
              and get years of reliable power from an ECO Battery lithium platform.
            </p>
            <ul className="pg-checklist">
              <li>
                <CheckCircle2 size={17} /> Professional installation by factory-trained technicians
              </li>
              <li>
                <CheckCircle2 size={17} /> Compatible with most major cart brands
              </li>
              <li>
                <CheckCircle2 size={17} /> Zero watering, zero acid, far less maintenance
              </li>
            </ul>
            <div className="pg-hero-actions">
              <a className="bx-btn bx-btn-gold" href={SERVICE_NETWORK_PHONE_HREF}>
                Ask about upgrades
              </a>
            </div>
          </div>
          <div className="pg-split-media">
            <img src={img("svc-lithium.jpg")} alt="Lithium battery packs" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="pg-section pg-light">
        <div className="bh-container">
          <div className="pg-head">
            <p className="bx-eyebrow">How it works</p>
            <h2 className="bx-serif">A straightforward way to get serviced.</h2>
          </div>
          <div className="pg-steps">
            {STEPS.map((step) => (
              <article className="pg-step" key={step.step}>
                <strong>{step.step}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-strip">
        <div className="bh-container pg-strip-grid">
          <article className="pg-strip-item">
            <BatteryCharging size={28} strokeWidth={1.2} />
            <h3>10-year battery</h3>
            <p>Every Coala carries a 10-year battery cell warranty.</p>
          </article>
          <article className="pg-strip-item">
            <ShieldCheck size={28} strokeWidth={1.2} />
            <h3>3-year body</h3>
            <p>Factory warranty on the body and finish.</p>
          </article>
          <article className="pg-strip-item">
            <CalendarCheck size={28} strokeWidth={1.2} />
            <h3>Lifetime frame</h3>
            <p>Lifetime warranty on the frame of every Coala.</p>
          </article>
          <article className="pg-strip-item">
            <MapPin size={28} strokeWidth={1.2} />
            <h3>Local team</h3>
            <p>Questions and scheduling handled by our San Diego shop.</p>
          </article>
        </div>
      </section>

      <section className="pg-section pg-darker">
        <div className="bh-container">
          <div className="pg-head">
            <p className="bx-eyebrow">Questions</p>
            <h2 className="bx-serif">Service, answered.</h2>
          </div>
          <div className="pg-faq">
            {FAQ.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <Plus size={18} />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
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
              Something not right?
              <em>Let&apos;s take a look.</em>
            </h2>
            <p>
              Call {SERVICE_NETWORK_PHONE} or email {CONTACT.email} and we will get your cart scheduled.
            </p>
          </div>
          <div className="pg-cta-actions">
            <a className="bx-btn bx-btn-gold" href={SERVICE_NETWORK_PHONE_HREF}>
              Schedule service
            </a>
            <Link className="bx-btn bx-btn-outline" href="/about">
              Meet the team <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <BrightFooter />
    </div>
  );
}
