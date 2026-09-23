import {
  ArrowRight,
  BatteryCharging,
  Car,
  ClipboardCheck,
  Gauge,
  Headphones,
  Lightbulb,
  MapPin,
  Mountain,
  ShieldCheck,
  Sofa,
  Sparkles,
  SquareSquare,
  Truck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import BrightFooter from "@/components/BrightFooter";
import BrightHeader from "@/components/BrightHeader";
import { withBase } from "@/lib/url";
import "@/styles/bright.css";
import "@/styles/bright-street-legal.css";

const img = (name: string) => withBase(`/street/${name}`);

const HERO_FEATURES = [
  { icon: ShieldCheck, label: "Street-legal" },
  { icon: Zap, label: "Electric power" },
  { icon: Sofa, label: "Premium comfort" },
  { icon: BatteryCharging, label: "Built to last" },
];

const SPECS_LEFT = [
  { icon: Lightbulb, title: "Lighting", text: "Headlights, taillights and brake lights for visibility day or night." },
  { icon: Sparkles, title: "Turn signals", text: "Front and rear turn signals for safer driving." },
  { icon: SquareSquare, title: "Mirrors", text: "Side mirrors for a clear view of your surroundings." },
];

const SPECS_RIGHT = [
  { icon: Users, title: "Seat belts", text: "Seat belts for driver and passengers." },
  { icon: Car, title: "Windshield", text: "Durable windshield for comfort and protection." },
  { icon: ShieldCheck, title: "Safety equipment", text: "Reflectors, horn and other safety features to meet street-legal standards." },
];

const STRIP = [
  {
    icon: ShieldCheck,
    title: "Built to be street-legal",
    text: "Designed and equipped to meet applicable street-legal requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Insurance friendly",
    text: "Most models are insurable for on-road use. Check with your provider for details.",
  },
  {
    icon: MapPin,
    title: "Registered for the road",
    text: "Qualifies for registration in many states and communities.",
  },
  {
    icon: Mountain,
    title: "Designed for real life",
    text: "Smooth, quiet electric power for neighborhoods, resorts, beach towns and more.",
  },
];

const MODELS = [
  {
    name: "Cruiser 4S",
    image: "sl-card-cruiser.jpg",
    tagline: "Street-legal. Refined. Everyday adventure.",
    seats: "4",
    price: "$12,995",
    featured: true,
  },
  {
    name: "Premium 4",
    image: "sl-card-premium.jpg",
    tagline: "Spacious. Comfortable. Powerful.",
    seats: "4",
    price: "$11,995",
  },
  {
    name: "i40L",
    image: "sl-card-i40l.jpg",
    tagline: "Lifted. Luxurious. Performance built.",
    seats: "4",
    price: "$12,995",
  },
  {
    name: "Elite 4+2",
    image: "sl-card-elite.jpg",
    tagline: "Maximum comfort. Extra capacity.",
    seats: "6",
    price: "$16,995",
  },
];

const PLACES = [
  {
    title: "Neighborhood",
    image: "sl-place-1.jpg",
    text: "Perfect for getting around your community in style.",
  },
  {
    title: "Beach community",
    image: "sl-place-2.jpg",
    text: "Cruise coastal streets and enjoy the ocean air.",
  },
  {
    title: "Resort living",
    image: "sl-place-3.jpg",
    text: "Move guests and families comfortably and effortlessly.",
    gold: true,
  },
  {
    title: "Everyday errands",
    image: "sl-place-4.jpg",
    text: "Quiet, efficient and easy to park — ideal for daily life.",
  },
  {
    title: "Sunset drives",
    image: "sl-place-5.jpg",
    text: "End the day with a ride worth taking the long way.",
    gold: true,
  },
];

const CTA_LIST = [
  { icon: Wallet, title: "Financing available", text: "Flexible options for qualified buyers.", gold: true },
  { icon: Truck, title: "Nationwide delivery", text: "We deliver your new cart straight to your door." },
  { icon: Headphones, title: "Expert support", text: "Our team is here for you before and after the sale.", gold: true },
];

export default function StreetLegal() {
  return (
    <div className="bh-page sl-page">
      <BrightHeader active="Street-Legal" />

      {/* Hero */}
      <section className="sl-hero">
        <div className="sl-hero-media">
          <img src={img("sl-hero.jpg")} alt="Street-legal Bright EV cart on a neighborhood street" fetchPriority="high" />
        </div>
        <div className="bh-container sl-hero-inner">
          <div className="sl-hero-copy">
            <h1 className="bx-serif">
              Take your ride
              <em>Beyond the course.</em>
            </h1>
            <p>Street-legal electric vehicles designed for neighborhood driving, communities and everyday mobility.</p>
            <span className="bx-rule" />
            <div className="sl-hero-features">
              {HERO_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.label}>
                    <Icon size={30} strokeWidth={1.3} />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="sl-hero-actions">
              <Link className="bx-btn bx-btn-gold" href="/street-legal#collection">
                Shop street-legal
              </Link>
              <Link className="bx-btn bx-btn-outline" href="/street-legal#collection">
                View vehicles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What makes it street-legal */}
      <section className="sl-section sl-light">
        <div className="bh-container sl-legal-grid">
          <div>
            <div className="sl-legal-intro">
              <p className="bx-eyebrow">What makes it</p>
              <h2 className="bx-serif">Street-legal?</h2>
              <span className="bx-rule" />
              <p>
                Our street-legal golf carts come equipped with the features you need to drive confidently in your
                neighborhood and beyond.
              </p>
            </div>
            <div className="sl-specs sl-specs-left">
              {SPECS_LEFT.map((spec) => {
                const Icon = spec.icon;
                return (
                  <article className="sl-spec" key={spec.title}>
                    <span className="sl-spec-icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3>{spec.title}</h3>
                      <p>{spec.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <figure className="sl-legal-photo">
            <img src={img("sl-front.jpg")} alt="Front view of a street-legal Coala cart" loading="lazy" />
          </figure>

          <div className="sl-specs sl-specs-right">
            {SPECS_RIGHT.map((spec) => {
              const Icon = spec.icon;
              return (
                <article className="sl-spec" key={spec.title}>
                  <span className="sl-spec-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3>{spec.title}</h3>
                    <p>{spec.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dark benefits strip */}
      <section className="sl-strip">
        <div className="bh-container sl-strip-grid">
          {STRIP.map((item) => {
            const Icon = item.icon;
            return (
              <article className="sl-strip-item" key={item.title}>
                <Icon size={30} strokeWidth={1.2} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Collection */}
      <section className="sl-section sl-light" id="collection">
        <div className="bh-container">
          <div className="sl-collection-head">
            <div>
              <h2 className="bx-serif">Explore our street-legal collection</h2>
              <p>Premium Electric. Street-Ready.</p>
            </div>
            <Link className="sl-view-all" href="/street-legal#collection">
              View all street-legal vehicles <ArrowRight size={16} />
            </Link>
          </div>
          <div className="sl-cards">
            {MODELS.map((model) => (
              <article className="sl-card" key={model.name}>
                <div className="sl-card-media">
                  <img src={img(model.image)} alt={`Coala ${model.name}`} loading="lazy" />
                  {model.featured && <span>Featured</span>}
                </div>
                <div className="sl-card-body">
                  <p className="sl-card-brand">Coala</p>
                  <h3>{model.name}</h3>
                  <p className="sl-card-tagline">{model.tagline}</p>
                  <div className="sl-card-specs">
                    <span>
                      <Users size={15} /> {model.seats}
                    </span>
                    <i>·</i>
                    <span>
                      <BatteryCharging size={15} /> Lithium
                    </span>
                    <i>·</i>
                    <span>
                      <Gauge size={15} /> 25 MPH
                    </span>
                  </div>
                  <p className="sl-card-price">Starting at</p>
                  <p className="sl-card-amount">{model.price}</p>
                  <Link className="bx-btn bx-btn-quiet" href="/contact">
                    View details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Places */}
      <section className="sl-section sl-dark">
        <div className="bh-container">
          <div className="sl-places-head">
            <h2 className="bx-serif">Made for the places you love</h2>
            <p>From neighborhood streets to coastal drives and everything in between.</p>
          </div>
          <div className="sl-places">
            {PLACES.map((place) => (
              <article className={`sl-place ${place.gold ? "is-gold" : ""}`} key={place.title}>
                <div className="sl-place-media">
                  <img src={img(place.image)} alt={place.title} loading="lazy" />
                </div>
                <div className="sl-place-body">
                  <h3>{place.title}</h3>
                  <p>{place.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="sl-cta">
        <div className="sl-cta-media">
          <img src={img("sl-cta.jpg")} alt="Bright EV cart on a coastal road at sunset" loading="lazy" />
        </div>
        <div className="bh-container sl-cta-inner">
          <div className="sl-cta-copy">
            <h2 className="bx-serif">
              Street-legal freedom.
              <em>Every day.</em>
            </h2>
            <p>Premium electric vehicles that go where you need to go.</p>
            <span className="bx-rule" />
            <div className="sl-cta-actions">
              <Link className="bx-btn bx-btn-gold" href="/street-legal#collection">
                Shop street-legal
              </Link>
              <Link className="bx-btn bx-btn-outline" href="/contact">
                Get financing
              </Link>
            </div>
          </div>
          <div className="sl-cta-list">
            {CTA_LIST.map((item) => {
              const Icon = item.icon;
              return (
                <div className={item.gold ? "is-gold" : undefined} key={item.title}>
                  <Icon size={30} strokeWidth={1.2} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BrightFooter />
    </div>
  );
}
