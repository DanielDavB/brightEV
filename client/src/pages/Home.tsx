import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Gauge,
  Handshake,
  MapPin,
  Play,
  Settings2,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Tag,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import BrightFooter from "@/components/BrightFooter";
import BrightHeader from "@/components/BrightHeader";
import { CONTACT, COALA_MODELS, NETWORK, SERVICE_NETWORK_PHONE_HREF, coalaModel } from "@/data/site";
import { usePageTitle } from "@/hooks/usePageTitle";
import { withBase } from "@/lib/url";
import "@/styles/bright.css";

const img = (name: string) => withBase(`/bright/${name}`);

const DETAIL_TILES = [
  { label: "Digital Display", image: "detail-display.jpg" },
  { label: "Premium Seating", image: "detail-seating.jpg" },
  { label: "LED Optics", image: "detail-led.jpg" },
  { label: "Custom Wheels", image: "detail-wheels.jpg" },
  { label: "Lithium Power", image: "detail-lithium.jpg" },
];

const FEATURES = [
  {
    icon: Zap,
    title: "Smarter electric power",
    text: "A 48V lithium platform with a 6.5kW AC motor — quiet, smooth and no battery watering.",
  },
  {
    icon: Sparkles,
    title: "Premium comfort",
    text: "Independent double-wishbone front suspension and four-wheel hydraulic disc brakes.",
  },
  {
    icon: Settings2,
    title: "Ready for your world",
    text: "Choose 2, 2+2, 4 or 4+2 seating, or a Utility with a rear cargo bed.",
  },
];

const TABS = ["Personal", "Street Legal", "Commercial", "Resort & Hospitality"];

const SELECTOR: Record<string, string[]> = {
  Personal: ["coala-4", "coala-2-2"],
  "Street Legal": ["coala-2", "coala-4-2"],
  Commercial: ["coala-2-utility"],
  "Resort & Hospitality": ["coala-4-2", "coala-4"],
};

const detailsHref = (slug: string) =>
  slug === "coala-2-utility" ? "/commercial#vehicles" : `/street-legal#${slug}`;

const USE_CASES = [
  {
    tag: "Neighborhood",
    image: "use-home.jpg",
    title: "For home: your neighborhood upgraded",
    text: "Electric transportation for family outings, gated communities, vendors, and quick everyday errands.",
    action: "Explore personal carts",
    href: "/street-legal",
  },
  {
    tag: "Commercial",
    image: "use-business.jpg",
    title: "For business: smarter work transport",
    text: "Turnkey fleet solutions for commercial properties, facilities management, security, and warehouse operations.",
    action: "Explore commercial",
    href: "/commercial",
  },
  {
    tag: "Resorts & Hospitality",
    image: "use-resort.jpg",
    title: "For resorts: move guests in luxury",
    text: "Premium multi-passenger shuttles engineered to deliver smooth, noiseless first-class guest experiences.",
    action: "Explore fleet options",
    href: "/commercial",
  },
];

const WHY = [
  {
    icon: BadgeCheck,
    title: "Genuine Coala lineup",
    text: "Every cart we sell is a Coala, backed by a 10-year battery cell warranty.",
  },
  { icon: Tag, title: "Straight answers", text: "Verified specs, real inventory photos and quotes on request." },
  {
    icon: Building2,
    title: "Easy financing",
    text: "0% interest for 24 months on approved credit, with 24–48 month terms.",
  },
  { icon: Truck, title: "Direct delivery", text: "Delivery anywhere in the continental United States." },
  {
    icon: Handshake,
    title: "Sales & service",
    text: "Mobile service, repairs and lithium upgrades through our service network.",
  },
];

const GALLERY = [
  { label: "Neighborhoods", image: "gallery-1.jpg" },
  { label: "Resort escapes", image: "gallery-2.jpg" },
  { label: "Commercial fleets", image: "gallery-3.jpg" },
  { label: "Everyday errands", image: "gallery-4.jpg" },
];

function ServiceMap() {
  return (
    <svg viewBox="0 0 520 190" role="img" aria-label="Service area map">
      <rect width="520" height="190" fill="#dbe6d6" />
      <path d="M0 96 L120 84 L210 108 L320 92 L430 116 L520 100 L520 190 L0 190 Z" fill="#cfdcc9" />
      <path d="M0 40 L96 30 L170 54 L268 38 L360 60 L470 44 L520 56 L520 96 L392 110 L286 88 L188 112 L74 96 L0 108 Z" fill="#e6ddc9" />
      <path d="M0 0 L140 0 L92 46 L0 62 Z" fill="#b9d4e0" />
      <path d="M92 46 L140 0 L240 0 L196 34 Z" fill="#c8dfe8" opacity="0.7" />
      <path d="M40 150 C 150 120, 260 176, 380 132 S 500 148, 520 140" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
      <path d="M70 34 C 170 70, 250 20, 360 62 S 470 96, 520 78" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
      <circle cx="132" cy="112" r="7" fill="#2f7d4f" />
      <circle cx="132" cy="112" r="14" fill="#2f7d4f" opacity="0.22" />
      <circle cx="246" cy="74" r="5" fill="#2f7d4f" opacity="0.85" />
      <circle cx="352" cy="118" r="5" fill="#2f7d4f" opacity="0.85" />
      <circle cx="436" cy="70" r="5" fill="#2f7d4f" opacity="0.85" />
    </svg>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [slide, setSlide] = useState(0);

  usePageTitle("Street-Legal Coala Electric Carts");

  const models = useMemo(() => SELECTOR[activeTab].map(coalaModel), [activeTab]);
  const model = models[slide] ?? models[0];

  useEffect(() => {
    setSlide(0);
  }, [activeTab]);

  const move = (step: number) => setSlide((current) => (current + step + models.length) % models.length);

  return (
    <div className="bh-page">
      <BrightHeader />

      {/* Hero */}
      <section className="bh-hero">
        <div className="bh-hero-media">
          <img src={img("hero-sunset.jpg")} alt="Couple cruising a resort street at sunset in a Bright EV cart" fetchPriority="high" />
        </div>
        <div className="bh-container bh-hero-inner">
          <div className="bh-hero-copy">
            <p className="bh-hero-badge">
              <Sparkles size={12} aria-hidden="true" /> Street-legal Coala electric carts
            </p>
            <h1>
              Life is <em>bright.</em>
            </h1>
            <p className="bh-hero-sub">Premium golf carts. Street-legal performance. Delivered nationwide.</p>
            <p className="bh-hero-text">
              Discover premium electric vehicles built for more than the course. Personal rides, street-legal models,
              and commercial solutions — with seamless white-glove financing and delivery directly to your door.
            </p>
            <div className="bh-hero-actions">
              <Link className="bh-btn bh-btn-gold" href="/street-legal">
                Shop golf carts
              </Link>
              <Link className="bh-btn bh-btn-ghost" href="/financing">
                Explore financing
              </Link>
            </div>
            <div className="bh-hero-facts">
              <div>
                <i>
                  <BadgeCheck size={14} />
                </i>{" "}
                Sales
              </div>
              <div>
                <i>
                  <Clock3 size={14} />
                </i>{" "}
                Rentals
              </div>
              <div>
                <i>
                  <Wrench size={14} />
                </i>{" "}
                Service
              </div>
              <div>
                <i>
                  <Truck size={14} />
                </i>{" "}
                Nationwide
              </div>
            </div>
          </div>
        </div>
        <div className="bh-hero-card">
          <div>
            <span>Featured model</span>
            <strong>Coala 4 Street-Legal</strong>
          </div>
          <div className="bh-hero-price">
            <span>Range per charge</span>
            <strong>37–49 mi</strong>
          </div>
        </div>
      </section>

      {/* Seasonal promo */}
      <section className="bh-promo">
        <div className="bh-container bh-promo-inner">
          <span className="bh-promo-icon">
            <Sun size={20} aria-hidden="true" />
          </span>
          <div>
            <h2>0% for 24 months. Drive it home now.</h2>
            <p>Payments as low as $199/mo on approved credit, with 24, 36 or 48-month terms.</p>
          </div>
          <Link className="bh-btn bh-btn-muted" href="/financing">
            See financing offers
          </Link>
        </div>
      </section>

      {/* Your next electric vehicle */}
      <section className="bh-section bh-section-light">
        <div className="bh-container bh-intro-grid">
          <figure className="bh-photo-card">
            <img src={img("lsv-white.jpg")} alt="Street-ready electric cart parked outside a modern home" loading="lazy" />
            <figcaption className="bh-photo-card-foot">
              <span>Street-ready LSV certified</span>
              <span>Up to 25 mph</span>
            </figcaption>
          </figure>
          <div className="bh-intro-copy">
            <p className="bh-eyebrow">More than a golf cart.</p>
            <h2 className="bh-display">Your next electric vehicle.</h2>
            <p>
              From relaxed neighborhood cruising to heavy-duty resort operations, BrightEV brings together premium
              electric vehicles precision-engineered for modern short-range travel. No fuel odors, minimal maintenance,
              and zero noise.
            </p>
            <div className="bh-mini-cards">
              <article className="bh-mini-card">
                <Gauge size={18} />
                <h3>Street legal</h3>
                <p>Take your electric ride beyond the course with select street-legal models.</p>
              </article>
              <article className="bh-mini-card">
                <Briefcase size={18} />
                <h3>Built for work</h3>
                <p>Reliable electric transportation for resorts, hospitality, and corporate fleets.</p>
              </article>
              <article className="bh-mini-card">
                <Zap size={18} />
                <h3>No gas. All fun.</h3>
                <p>Quiet, efficient electric driving without sacrificing comfort or speed.</p>
              </article>
            </div>
            <Link className="bh-btn bh-btn-dark" href="/street-legal">
              Find your ride <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Built around the way you drive */}
      <section className="bh-section bh-section-dark">
        <div className="bh-container">
          <div className="bh-section-head bh-head-narrow">
            <p className="bh-eyebrow">It&apos;s in the details</p>
            <h2 className="bh-display">Built around the way you drive.</h2>
          </div>
          <div className="bh-detail-tiles">
            {DETAIL_TILES.map((tile) => (
              <div className="bh-detail-tile" key={tile.label}>
                <img src={img(tile.image)} alt={tile.label} loading="lazy" />
                <span>{tile.label}</span>
              </div>
            ))}
          </div>
          <div className="bh-feature-cards">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="bh-feature-card" key={feature.title}>
                  <span className="bh-feature-icon">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video band */}
      <section className="bh-video">
        <img src={img("video-coast.jpg")} alt="Electric cart on a coastal road at dusk" loading="lazy" />
        <div className="bh-video-inner">
          <a
            className="bh-play"
            href="https://youtu.be/1LxcTt1adfY"
            target="_blank"
            rel="noreferrer"
            aria-label="Play the Bright EV film"
          >
            <Play size={22} fill="currentColor" />
          </a>
          <h2>
            Go further.
            <br />
            Quieter. Brighter.
          </h2>
          <p>Premium electric mobility for the neighborhood, the resort, the property, and everywhere in between.</p>
          <p className="bh-condensed">No gas. All the fun.</p>
        </div>
      </section>

      {/* Vehicle selector */}
      <section className="bh-section bh-section-dark-2" id="find-your-ride">
        <div className="bh-container">
          <div className="bh-section-head">
            <p className="bh-eyebrow">Vehicle selector</p>
            <h2 className="bh-display">Find your ride</h2>
            <p>Choose the vehicle that fits your lifestyle, property or business.</p>
          </div>
          <div className="bh-tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={tab === activeTab}
                className={`bh-tab ${tab === activeTab ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bh-selector">
            <div className="bh-selector-stage">
              <div className="bh-selector-stage-inner">
                <img src={withBase(model.image)} alt={`${model.name} electric cart`} loading="lazy" />
                {models.length > 1 && (
                  <>
                    <button className="bh-stage-nav bh-stage-prev" onClick={() => move(-1)} aria-label="Previous model">
                      <ChevronLeft size={18} />
                    </button>
                    <button className="bh-stage-nav bh-stage-next" onClick={() => move(1)} aria-label="Next model">
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="bh-selector-copy">
              <div className="bh-badges">
                <span className="bh-badge bh-badge-gold">{model.layout}</span>
                <span className="bh-badge bh-badge-outline">{model.seatsLabel}</span>
              </div>
              <h3>{model.name}</h3>
              <p>{model.description}</p>
              <div className="bh-price-box">
                <div>
                  <span>Range per charge</span>
                  <ul>
                    <li>
                      <CheckCircle2 size={14} aria-hidden="true" /> 0% interest for 24 months on approved credit
                    </li>
                    <li>
                      <CheckCircle2 size={14} aria-hidden="true" /> Delivery anywhere in the continental U.S.
                    </li>
                  </ul>
                </div>
                <strong className="bh-price-amount">{model.range}</strong>
              </div>
              <div className="bh-selector-actions">
                <Link className="bh-btn bh-btn-gold" href={detailsHref(model.slug)}>
                  View details
                </Link>
                <Link className="bh-btn bh-btn-muted" href="/financing">
                  Get financing
                </Link>
              </div>
            </div>
          </div>

          <div className="bh-usecases">
            {USE_CASES.map((item) => (
              <article className="bh-usecase" key={item.tag}>
                <div className="bh-usecase-media">
                  <img src={img(item.image)} alt={item.title} loading="lazy" />
                  <span>{item.tag}</span>
                </div>
                <div className="bh-usecase-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link className="bh-link-gold" href={item.href}>
                    {item.action} <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Financing + delivery */}
      <section className="bh-section bh-section-light">
        <div className="bh-container bh-split">
          <article className="bh-card-light">
            <img src={img("finance.jpg")} alt="Owners enjoying their financed electric cart" loading="lazy" />
            <p className="bh-eyebrow">Your next ride is within reach</p>
            <h2>Drive now. Pay over time.</h2>
            <p>
              Getting into a premium electric vehicle shouldn&apos;t mean paying everything upfront. Payments start as
              low as $199/mo at 0% interest for 24 months, subject to approval.
            </p>
            <div className="bh-finance-tiles">
              <div className="bh-finance-tile">
                <ShieldCheck size={18} aria-hidden="true" />
                <span>0% for 24 mo.</span>
              </div>
              <div className="bh-finance-tile">
                <CircleDollarSign size={18} aria-hidden="true" />
                <span>24–48 mo. terms</span>
              </div>
              <div className="bh-finance-tile">
                <BadgeCheck size={18} aria-hidden="true" />
                <span>$0 down OAC</span>
              </div>
            </div>
            <div className="bh-card-actions">
              <Link className="bh-btn bh-btn-gold" href="/financing">
                Apply for financing
              </Link>
              <Link className="bh-btn bh-btn-grey" href="/financing#calculator">
                <Calculator size={15} aria-hidden="true" /> Calculate payment
              </Link>
            </div>
          </article>

          <article className="bh-card-light">
            <div className="bh-delivery-banner">
              <div>
                <p className="bh-eyebrow">Direct delivery</p>
                <strong>To your driveway</strong>
                <p>
                  <CheckCircle2 size={13} aria-hidden="true" /> Delivered to your home or business, ready to drive.
                </p>
              </div>
              <Truck size={26} />
            </div>
            <p className="bh-eyebrow">From our lot to your door</p>
            <h2>Nationwide delivery made simple.</h2>
            <p>
              Found the perfect cart but don&apos;t live down the street? No problem. We deliver anywhere in the
              continental United States.
            </p>
            <div className="bh-steps">
              <div className="bh-step">
                <span className="bh-step-num">1</span>
                <div>
                  <h3>Select your cart</h3>
                  <p>Choose your Coala model, seating layout and color.</p>
                </div>
              </div>
              <div className="bh-step">
                <span className="bh-step-num">2</span>
                <div>
                  <h3>Finalize financing &amp; paperwork</h3>
                  <p>Apply for financing and complete the purchase paperwork with our team.</p>
                </div>
              </div>
              <div className="bh-step">
                <span className="bh-step-num">3</span>
                <div>
                  <h3>White-glove delivery</h3>
                  <p>We schedule delivery to your residence or business.</p>
                </div>
              </div>
            </div>
            <a
              className="bh-btn bh-btn-dark bh-btn-block"
              href={`${CONTACT.emailHref}?subject=${encodeURIComponent("Delivery quote request")}`}
            >
              Get a delivery quote
            </a>
          </article>
        </div>
      </section>

      {/* Why BrightEV */}
      <section className="bh-section bh-section-dark-2">
        <div className="bh-container">
          <div className="bh-section-head">
            <p className="bh-eyebrow">Why BrightEV</p>
            <h2 className="bh-display">A brighter way to buy electric.</h2>
          </div>
          <div className="bh-why-grid">
            {WHY.map((item) => {
              const Icon = item.icon;
              return (
                <div className="bh-why-item" key={item.title}>
                  <span className="bh-why-icon">
                    <Icon size={19} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coala lineup */}
      <section className="bh-section bh-section-dark">
        <div className="bh-container">
          <div className="bh-section-head">
            <p className="bh-eyebrow">The Coala lineup</p>
            <h2 className="bh-display">Explore the Coala lineup</h2>
            <p>Five layouts, one standard: lithium power, street-legal equipment and a 10-year battery cell warranty.</p>
          </div>
          <div className="bh-brands">
            {COALA_MODELS.map((lineup) => (
              <Link className="bh-brand" href={detailsHref(lineup.slug)} key={lineup.slug}>
                <span className="bh-brand-media">
                  <img src={withBase(lineup.image)} alt={`${lineup.name} electric cart`} loading="lazy" />
                </span>
                <h3>{lineup.name}</h3>
                <p>{lineup.tagline}</p>
                <span className="bh-link-gold">
                  Explore <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service + lithium */}
      <section className="bh-section bh-section-dark-2">
        <div className="bh-container bh-support">
          <article className="bh-support-card">
            <img src={img("service.jpg")} alt="Technician servicing an electric cart" loading="lazy" />
            <div className="bh-support-body">
              <p className="bh-eyebrow">Dedicated support</p>
              <h2>Service that goes beyond the sale.</h2>
              <p>
                From multi-point inspections to controller and motor testing, electrical diagnostics and brake service,
                our service network keeps your cart running like new — including mobile service at your location.
              </p>
              <div className="bh-chips">
                <span>Mobile service</span>
                <span>Electrical diagnostics</span>
                <span>Brakes &amp; suspension</span>
              </div>
              <div className="bh-support-actions">
                <Link className="bh-btn bh-btn-gold" href="/services">
                  Explore service
                </Link>
                <a className="bh-btn bh-btn-muted" href={SERVICE_NETWORK_PHONE_HREF}>
                  Schedule service
                </a>
              </div>
            </div>
          </article>

          <article className="bh-support-card">
            <img src={img("lithium.jpg")} alt="Lithium battery upgrade packs" loading="lazy" />
            <div className="bh-support-body">
              <p className="bh-eyebrow bh-support-eyebrow">
                <BatteryCharging size={14} aria-hidden="true" /> Drop-in performance
              </p>
              <h2>Upgrade your ride to lithium.</h2>
              <p>
                Swap lead-acid batteries for an ECO Battery lithium pack: no watering, no acid spills and far less
                maintenance. Ask us for a quote for your cart.
              </p>
              <div className="bh-checks">
                <span>
                  <CheckCircle2 size={14} aria-hidden="true" /> Lead-acid to lithium
                </span>
                <span>
                  <CheckCircle2 size={14} aria-hidden="true" /> Professional installation
                </span>
                <span>
                  <CheckCircle2 size={14} aria-hidden="true" /> Mobile service available
                </span>
              </div>
              <div className="bh-support-actions">
                <Link className="bh-btn bh-btn-gold" href="/services#lithium">
                  Explore battery upgrades
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Gallery + proof */}
      <section className="bh-section bh-section-light">
        <div className="bh-container">
          <div className="bh-section-head bh-section-head-light">
            <p className="bh-eyebrow">Bright carts in action</p>
            <h2 className="bh-display">See where bright takes you.</h2>
          </div>
          <div className="bh-gallery">
            {GALLERY.map((item) => (
              <figure key={item.label}>
                <img src={img(item.image)} alt={item.label} loading="lazy" />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="bh-proof">
            <article className="bh-card-light">
              <p className="bh-eyebrow">Real people, real rides</p>
              <div className="bh-stars" role="img" aria-label="Five-star rating">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={15} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                ))}
              </div>
              <p className="bh-quote">
                Rated five stars by Bright EV customers, who single out the team&apos;s product knowledge, fair pricing
                and the service they get long after the sale.
              </p>
              <div className="bh-owner">
                <a className="bh-link-gold" href={NETWORK.reviewsHref} target="_blank" rel="noreferrer">
                  Read customer reviews <ArrowRight size={13} aria-hidden="true" />
                </a>
              </div>
            </article>

            <article className="bh-card-light bh-proof-card">
              <p className="bh-eyebrow">Come where you need us</p>
              <h3>Sales, rentals &amp; service</h3>
              <p>
                Part of the Bright EV network, serving residential owners and commercial partners across{" "}
                {NETWORK.states}.
              </p>
              <div className="bh-map">
                <ServiceMap />
                <span className="bh-map-label">
                  <MapPin size={13} aria-hidden="true" /> {NETWORK.cities}
                </span>
              </div>
              <div className="bh-card-actions">
                <a className="bh-btn bh-btn-dark" href={NETWORK.locationsHref} target="_blank" rel="noreferrer">
                  Find a location
                </a>
                <Link className="bh-btn bh-btn-grey" href="/contact">
                  Contact our team
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <BrightFooter />
    </div>
  );
}
