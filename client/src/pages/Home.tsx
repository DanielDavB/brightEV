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
  FileCheck2,
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
import { CONTACT } from "@/data/site";
import { withBase } from "@/lib/url";
import "@/styles/bright-home.css";

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
    text: "Smooth, quiet electric performance powered by zero-maintenance high-cycle lithium technology.",
  },
  {
    icon: Sparkles,
    title: "Premium comfort",
    text: "Thoughtful ergonomic seating, automotive-grade suspension, and abundant protected storage.",
  },
  {
    icon: Settings2,
    title: "Ready for your world",
    text: "Personalize seating, lift kits, sound bars, and cargo attachments tailored to your lifestyle.",
  },
];

const TABS = ["Personal", "Street Legal", "Commercial", "Resort & Hospitality"];

const MODELS = [
  {
    category: "Personal",
    name: "Icon i40L",
    badges: ["Most Popular", "Lifted LSV"],
    image: "model-lifted.jpg",
    text: "Street-legal capability. Lifted suspension. Luxurious, diamond-stitched comfort with performance engineering designed for both the golf course and the neighborhood.",
    price: "$12,995",
  },
  {
    category: "Personal",
    name: "Icon i40",
    badges: ["Family Favorite", "4 Passenger"],
    image: "model-street.jpg",
    text: "Four forward-facing seats, automotive paint, and a lithium platform tuned for daily neighborhood driving with effortless charging at home.",
    price: "$11,495",
  },
  {
    category: "Street Legal",
    name: "Icon i60L",
    badges: ["LSV Certified", "6 Passenger"],
    image: "model-compact.jpg",
    text: "Six-passenger street-legal comfort with seat belts, turn signals, mirrors, and DOT windshield — ready for posted 35 mph roads.",
    price: "$14,995",
  },
  {
    category: "Street Legal",
    name: "Icon i20",
    badges: ["Compact", "2 Passenger"],
    image: "model-street.jpg",
    text: "A compact two-passenger LSV with the same premium finishes, built for quick errands and tight community streets.",
    price: "$9,995",
  },
  {
    category: "Commercial",
    name: "Icon i40F Utility",
    badges: ["Fleet Ready", "Cargo Bed"],
    image: "model-utility.jpg",
    text: "Rear cargo bed, heavy-duty suspension, and fleet telematics prep for facilities, security teams, and warehouse operations.",
    price: "$13,495",
  },
  {
    category: "Commercial",
    name: "Icon i40 Crew",
    badges: ["Work Crew", "Fleet Pricing"],
    image: "model-lifted.jpg",
    text: "Crew transport for campuses and job sites with reinforced frames, tow hitch, and volume fleet pricing.",
    price: "$12,295",
  },
  {
    category: "Resort & Hospitality",
    name: "Icon i60 Shuttle",
    badges: ["Guest Shuttle", "6 Passenger"],
    image: "model-compact.jpg",
    text: "Premium multi-passenger shuttling with grab handles, custom wraps, and quiet operation that keeps resort grounds serene.",
    price: "$15,995",
  },
  {
    category: "Resort & Hospitality",
    name: "Icon i80 Limo",
    badges: ["Flagship", "8 Passenger"],
    image: "model-utility.jpg",
    text: "Eight-passenger limo seating engineered to deliver smooth, noiseless first-class guest experiences.",
    price: "$18,495",
  },
];

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
    title: "Premium selection",
    text: "Top-tier electric vehicles rigorously vetted from leading manufacturers.",
  },
  { icon: Tag, title: "Clear pricing", text: "Zero hidden dealership fees or surprise destination surcharges." },
  {
    icon: Building2,
    title: "Easy financing",
    text: "Competitive rates with nationwide lending partners for all credit tiers.",
  },
  { icon: Truck, title: "Direct delivery", text: "Enclosed or open-carrier transportation right to your door." },
  {
    icon: Handshake,
    title: "Sales & service",
    text: "Dedicated mobile technicians, factory-trained and OEM spare parts.",
  },
];

const BRANDS = [
  { name: "Icon EV", image: "brand-1.jpg", text: "High-torque commuter and PTV neighborhood carts." },
  { name: "Epic Carts", image: "brand-2.jpg", text: "UTV-inspired aesthetics with standard premium upgrades." },
  { name: "Dach", image: "brand-3.jpg", text: "Rugged durability and heavy-duty chassis engineering." },
  { name: "Solana", image: "brand-4.jpg", text: "European styling matched with efficient zero-emission range." },
  { name: "Tomberlin", image: "brand-5.jpg", text: "Automotive-grade LSVs built for highway-certified standards." },
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

  const models = useMemo(() => MODELS.filter((model) => model.category === activeTab), [activeTab]);
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
              <Sparkles size={12} /> 2026 fleet lineup now arriving
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
              <Link className="bh-btn bh-btn-ghost" href="/contact">
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
            <span>Flagship edition</span>
            <strong>Icon i40L Lifted EV</strong>
          </div>
          <div className="bh-hero-price">
            <span>Starting from</span>
            <strong>$12,995</strong>
          </div>
        </div>
      </section>

      {/* Seasonal promo */}
      <section className="bh-promo">
        <div className="bh-container bh-promo-inner">
          <span className="bh-promo-icon">
            <Sun size={20} />
          </span>
          <div>
            <h3>Summer is here. So are the savings.</h3>
            <p>Save up to $777 on select premium golf carts through September 30, 2026.</p>
          </div>
          <Link className="bh-btn bh-btn-muted" href="/street-legal">
            View summer savings
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
                <h4>Street legal</h4>
                <p>Take your electric ride beyond the course with select street-legal models.</p>
              </article>
              <article className="bh-mini-card">
                <Briefcase size={18} />
                <h4>Built for work</h4>
                <p>Reliable electric transportation for resorts, hospitality, and corporate fleets.</p>
              </article>
              <article className="bh-mini-card">
                <Zap size={18} />
                <h4>No gas. All fun.</h4>
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
                    <h4>{feature.title}</h4>
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
                <img src={img(model.image)} alt={model.name} loading="lazy" />
                <button className="bh-stage-nav bh-stage-prev" onClick={() => move(-1)} aria-label="Previous model">
                  <ChevronLeft size={18} />
                </button>
                <button className="bh-stage-nav bh-stage-next" onClick={() => move(1)} aria-label="Next model">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="bh-selector-copy">
              <div className="bh-badges">
                <span className="bh-badge bh-badge-gold">{model.badges[0]}</span>
                <span className="bh-badge bh-badge-outline">{model.badges[1]}</span>
              </div>
              <h3>{model.name}</h3>
              <p>{model.text}</p>
              <div className="bh-price-box">
                <div>
                  <span>Starting at</span>
                  <ul>
                    <li>
                      <CheckCircle2 size={14} /> Financing from 5.99% APR available
                    </li>
                    <li>
                      <CheckCircle2 size={14} /> Nationwide white-glove home delivery
                    </li>
                  </ul>
                </div>
                <strong className="bh-price-amount">{model.price}</strong>
              </div>
              <div className="bh-selector-actions">
                <Link className="bh-btn bh-btn-gold" href="/street-legal">
                  View details
                </Link>
                <Link className="bh-btn bh-btn-muted" href="/contact">
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
              Getting into a premium electric vehicle shouldn&apos;t mean paying everything upfront. Explore flexible
              low-APR financing options tailored to your monthly budget.
            </p>
            <div className="bh-finance-tiles">
              <div className="bh-finance-tile">
                <ShieldCheck size={18} />
                <span>Quick approval</span>
              </div>
              <div className="bh-finance-tile">
                <CircleDollarSign size={18} />
                <span>Flexible terms</span>
              </div>
              <div className="bh-finance-tile">
                <BadgeCheck size={18} />
                <span>No prepay penalty</span>
              </div>
            </div>
            <div className="bh-card-actions">
              <Link className="bh-btn bh-btn-gold" href="/contact">
                Apply for financing
              </Link>
              <Link className="bh-btn bh-btn-grey" href="/contact">
                <Calculator size={15} /> Calculate payment
              </Link>
            </div>
          </article>

          <article className="bh-card-light">
            <div className="bh-delivery-banner">
              <div>
                <p className="bh-eyebrow">Direct delivery</p>
                <strong>To your driveway</strong>
                <p>
                  <CheckCircle2 size={13} /> Fully assembled, inspected and charged — ready upon arrival.
                </p>
              </div>
              <Truck size={26} />
            </div>
            <p className="bh-eyebrow">From our lot to your door</p>
            <h2>Nationwide delivery made simple.</h2>
            <p>
              Found the perfect vehicle but don&apos;t live down the street? No problem. Our dedicated transport
              logistics team delivers directly across the contiguous U.S.
            </p>
            <div className="bh-steps">
              <div className="bh-step">
                <span className="bh-step-num">1</span>
                <div>
                  <h4>Select your cart</h4>
                  <p>Choose model, options, colors, and seat configuration finishes.</p>
                </div>
              </div>
              <div className="bh-step">
                <span className="bh-step-num">2</span>
                <div>
                  <h4>Finalize financing &amp; paperwork</h4>
                  <p>Fast digital sign-off and title processing handled by our team.</p>
                </div>
              </div>
              <div className="bh-step">
                <span className="bh-step-num">3</span>
                <div>
                  <h4>White-glove delivery</h4>
                  <p>Unloaded at your residence or business, ready to drive immediately.</p>
                </div>
              </div>
            </div>
            <Link className="bh-btn bh-btn-dark bh-btn-block" href="/contact">
              Get a delivery quote
            </Link>
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
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bh-section bh-section-dark">
        <div className="bh-container">
          <div className="bh-section-head">
            <p className="bh-eyebrow">Premier portfolio</p>
            <h2 className="bh-display">Explore our electric brands</h2>
            <p>Different personalities. Shared commitment to quality and quiet electric freedom.</p>
          </div>
          <div className="bh-brands">
            {BRANDS.map((brand) => (
              <Link className="bh-brand" href="/street-legal" key={brand.name}>
                <span className="bh-brand-media">
                  <img src={img(brand.image)} alt={brand.name} loading="lazy" />
                </span>
                <h4>{brand.name}</h4>
                <p>{brand.text}</p>
                <span className="bh-link-gold">
                  Explore <ArrowRight size={13} />
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
              <h3>Service that goes beyond the sale.</h3>
              <p>
                From scheduled preventive check-ups to complex controller tuning and warranty repairs, our
                factory-certified technicians keep your vehicle running like new.
              </p>
              <div className="bh-chips">
                <span>Mobile diagnostics</span>
                <span>Custom accessories</span>
                <span>OEM replacements</span>
              </div>
              <div className="bh-support-actions">
                <Link className="bh-btn bh-btn-gold" href="/services">
                  Explore service
                </Link>
                <Link className="bh-btn bh-btn-muted" href="/contact">
                  Schedule service
                </Link>
              </div>
            </div>
          </article>

          <article className="bh-support-card">
            <img src={img("lithium.jpg")} alt="Lithium battery upgrade packs" loading="lazy" />
            <div className="bh-support-body">
              <p className="bh-eyebrow bh-support-eyebrow">
                <BatteryCharging size={14} /> Drop-in performance
              </p>
              <h3>Upgrade your ride to lithium from $2,499.</h3>
              <p>
                Say goodbye to acid spills, heavy watering, and short battery lifespans. Cut vehicle weight by 300 lbs
                and enjoy 3x faster charging and up to 10 years of reliable power.
              </p>
              <div className="bh-checks">
                <span>
                  <CheckCircle2 size={14} /> 8-year warranty
                </span>
                <span>
                  <CheckCircle2 size={14} /> Pro installation
                </span>
                <span>
                  <CheckCircle2 size={14} /> Compatible with most brands
                </span>
              </div>
              <div className="bh-support-actions">
                <Link className="bh-btn bh-btn-gold" href="/services">
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
              <div className="bh-stars">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="bh-quote">
                &ldquo;The entire process was easier than we expected. From custom seating selection to doorstep
                delivery in Arizona, BrightEV made purchasing our family&apos;s cart an absolute joy.&rdquo;
              </p>
              <div className="bh-owner">
                <img src={img("owner.jpg")} alt="Marcus and Elena Vance" loading="lazy" />
                <div>
                  <strong>Marcus &amp; Elena Vance</strong>
                  <span>Verified owners — Scottsdale, AZ</span>
                </div>
              </div>
            </article>

            <article className="bh-card-light bh-proof-card">
              <p className="bh-eyebrow">Come where you need us</p>
              <h3>Sales, rentals &amp; service</h3>
              <p>
                Serving residential owners and commercial partners across California, Arizona, Nevada, New Mexico, and
                Hawaii with mobile vans and regional hubs.
              </p>
              <div className="bh-map">
                <ServiceMap />
                <span className="bh-map-label">
                  <MapPin size={13} /> San Diego · Scottsdale · Palm Springs · Las Vegas · Honolulu
                </span>
              </div>
              <div className="bh-card-actions">
                <a className="bh-btn bh-btn-dark" href={CONTACT.mapsHref} target="_blank" rel="noreferrer">
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
