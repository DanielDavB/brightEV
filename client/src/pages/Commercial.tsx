import {
  Building2,
  ChevronDown,
  ClipboardList,
  Clock3,
  GraduationCap,
  Handshake,
  Headphones,
  Hotel,
  Leaf,
  Mail,
  Palmtree,
  Phone,
  Settings,
  ShieldCheck,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";
import BrightFooter from "@/components/BrightFooter";
import BrightHeader from "@/components/BrightHeader";
import { CONTACT, SERVICE_NETWORK_PHONE, SERVICE_NETWORK_PHONE_HREF, coalaModel } from "@/data/site";
import { usePageTitle } from "@/hooks/usePageTitle";
import { withBase } from "@/lib/url";
import "@/styles/bright.css";
import "@/styles/bright-commercial.css";

const img = (name: string) => withBase(`/commercial/${name}`);

const HERO_FEATURES = [
  { icon: Leaf, title: "Zero emissions", text: "Cleaner for your property and the planet." },
  { icon: Wrench, title: "Lower operating costs", text: "Save on fuel, maintenance and downtime." },
  { icon: ShieldCheck, title: "Reliable & durable", text: "Built for daily use in the toughest environments." },
  { icon: Headphones, title: "Expert support", text: "We're here to keep your fleet running." },
];

const ENVIRONMENTS = [
  {
    icon: Palmtree,
    title: "Resorts",
    text: "Guest transportation that elevates every stay.",
    image: "cm-env-resorts.jpg",
  },
  {
    icon: Hotel,
    title: "Hotels",
    text: "Seamless mobility for guests across your property.",
    image: "cm-env-hotels.jpg",
  },
  {
    icon: GraduationCap,
    title: "Campuses",
    text: "Efficient transportation for students and employees.",
    image: "cm-env-campuses.jpg",
  },
  {
    icon: Users,
    title: "Communities",
    text: "Maintenance and transportation to keep your community running.",
    image: "cm-env-communities.jpg",
  },
  {
    icon: Warehouse,
    title: "Commercial properties",
    text: "Reliable solutions for facility operations and staff.",
    image: "cm-env-properties.jpg",
  },
  {
    icon: Building2,
    title: "Fleets",
    text: "Multi-vehicle deployments that scale with your needs.",
    image: "cm-env-fleets.jpg",
  },
];

const VEHICLES = [
  { slug: "coala-2-utility", use: "Maintenance, grounds & hauling" },
  { slug: "coala-4-2", use: "Guest shuttles for up to 6" },
  { slug: "coala-4", use: "Staff & guest transport" },
  { slug: "coala-2-2", use: "Security & patrol routes" },
  { slug: "coala-2", use: "Campus & facility runs" },
].map((vehicle) => ({ ...coalaModel(vehicle.slug), use: vehicle.use }));

const WHY = [
  {
    icon: ClipboardList,
    title: "Consultative approach",
    text: "We take the time to understand your operation.",
  },
  { icon: Settings, title: "Custom solutions", text: "The right vehicles, accessories and configurations." },
  { icon: Handshake, title: "End-to-end support", text: "From selection to delivery and beyond." },
  { icon: ShieldCheck, title: "Long-term reliability", text: "Vehicles and support you can count on every day." },
];

const BUSINESS_TYPES = ["Resort", "Hotel", "Campus", "Community / HOA", "Commercial property", "Fleet operator"];
const FLEET_SIZES = ["1-2 vehicles", "3-5 vehicles", "6-10 vehicles", "11-25 vehicles", "25+ vehicles"];
const TIMELINES = ["Immediately", "1-3 months", "3-6 months", "Still researching"];

function submitFleetRequest(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const field = (name: string) => String(data.get(name) ?? "").trim() || "—";
  const body = [
    `Business type: ${field("business")}`,
    `Number of vehicles: ${field("count")}`,
    `Location: ${field("location")}`,
    `Purchase timeline: ${field("timeline")}`,
    "",
    "Intended use:",
    field("use"),
  ].join("\n");
  const subject = `Fleet inquiry — ${field("business")}`;
  window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Commercial() {
  usePageTitle("Commercial & Fleet Carts");

  return (
    <div className="bh-page cm-page">
      <BrightHeader active="Commercial" />

      {/* Hero */}
      <section className="cm-hero">
        <div className="cm-hero-media">
          <img src={img("cm-hero.jpg")} alt="Bright EV commercial fleet parked at an office campus" fetchPriority="high" />
        </div>
        <div className="bh-container cm-hero-inner">
          <div className="cm-hero-copy">
            <h1 className="cm-display">
              Electric transportation <em>for business.</em>
            </h1>
            <p>Move people, guests, teams and materials more efficiently with commercial electric vehicles.</p>
          </div>
          <div className="cm-hero-features">
            {HERO_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="cm-hero-feature" key={feature.title}>
                  <Icon size={30} strokeWidth={1.2} />
                  <strong>{feature.title}</strong>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="cm-hero-badge">
          <strong>
            <em>Built for</em> work.
            <br />
            Built for <em>you.</em>
          </strong>
          <span className="bx-rule" />
        </div>
      </section>

      {/* Solutions + fleet form */}
      <section className="cm-split">
        <div className="cm-solutions">
          <div className="cm-solutions-inner">
            <div>
              <p className="bx-eyebrow">Built for every environment</p>
              <h2 className="bx-serif">
                Solutions that
                <br />
                keep your operation moving.
              </h2>
              <p>Versatile electric vehicles designed to work as hard as you do.</p>
            </div>
            <div className="cm-env-grid">
              {ENVIRONMENTS.map((env) => {
                const Icon = env.icon;
                return (
                  <article className="cm-env" key={env.title}>
                    <img src={img(env.image)} alt={env.title} loading="lazy" />
                    <span className="cm-env-icon">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <h3>{env.title}</h3>
                    <p>{env.text}</p>
                  </article>
                );
              })}
            </div>
            <div className="cm-solutions-action">
              <a className="bx-btn bx-btn-gold-outline" href="#vehicles">
                Explore commercial vehicles
              </a>
            </div>
          </div>
        </div>

        <div className="cm-form" id="fleet-form">
          <div className="cm-form-inner">
            <div>
              <p className="bx-eyebrow">Build your fleet</p>
              <h2 className="bx-serif">Tell us about your operation.</h2>
              <p>
                Our team will help you find the right vehicles and create a solution that fits your goals, timeline and
                budget.
              </p>
            </div>
            <form
              onSubmit={submitFleetRequest}
            >
              <div className="cm-field cm-select">
                <label htmlFor="cm-business">Business type</label>
                <select id="cm-business" name="business" defaultValue="" required>
                  <option value="" disabled>
                    Select business type
                  </option>
                  {BUSINESS_TYPES.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown size={16} />
              </div>
              <div className="cm-field cm-select">
                <label htmlFor="cm-count">Number of vehicles</label>
                <select id="cm-count" name="count" defaultValue="" required>
                  <option value="" disabled>
                    Select number of vehicles
                  </option>
                  {FLEET_SIZES.map((size) => (
                    <option key={size}>{size}</option>
                  ))}
                </select>
                <ChevronDown size={16} />
              </div>
              <div className="cm-field">
                <label htmlFor="cm-location">Location</label>
                <input id="cm-location" name="location" type="text" placeholder="City, State or Zip Code" autoComplete="postal-code" />
              </div>
              <div className="cm-field">
                <label htmlFor="cm-use">Intended use</label>
                <textarea id="cm-use" name="use" placeholder="Describe how you plan to use the vehicles" />
              </div>
              <div className="cm-field cm-select">
                <label htmlFor="cm-timeline">Purchase timeline</label>
                <select id="cm-timeline" name="timeline" defaultValue="">
                  <option value="" disabled>
                    Select timeline
                  </option>
                  {TIMELINES.map((timeline) => (
                    <option key={timeline}>{timeline}</option>
                  ))}
                </select>
                <ChevronDown size={16} />
              </div>
              <button className="bx-btn bx-btn-gold" type="submit">
                Talk to a fleet specialist
              </button>
            </form>
            <div className="cm-form-notes">
              <div className="cm-form-note">
                <Clock3 size={22} strokeWidth={1.3} />
                <div>
                  <strong>Fast response</strong>
                  <span>Within 24 hours</span>
                </div>
              </div>
              <div className="cm-form-note">
                <ShieldCheck size={22} strokeWidth={1.3} />
                <div>
                  <strong>Expert guidance</strong>
                  <span>Every step of the way</span>
                </div>
              </div>
              <div className="cm-form-note">
                <Settings size={22} strokeWidth={1.3} />
                <div>
                  <strong>Custom solutions</strong>
                  <span>Built around your needs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle line-up */}
      <section className="cm-vehicles" id="vehicles">
        <div className="bh-container">
          <div className="cm-vehicles-head">
            <h2 className="bx-serif">
              Commercial-grade.
              <br />
              Built to perform.
            </h2>
            <p>Our commercial vehicles are engineered for durability, efficiency and all-day productivity.</p>
          </div>
          <div className="cm-vehicle-grid">
            {VEHICLES.map((vehicle) => (
              <article className="cm-vehicle" key={vehicle.slug}>
                <img src={withBase(vehicle.image)} alt={vehicle.name} loading="lazy" />
                <h3>{vehicle.name}</h3>
                <p>{vehicle.use}</p>
                <p className="cm-vehicle-spec">{vehicle.seatsLabel}</p>
              </article>
            ))}
          </div>
          <div className="cm-vehicles-action">
            <a className="bx-btn bx-btn-gold-outline" href="#fleet-form">
              Get a fleet quote
            </a>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="cm-why">
        <div className="bh-container cm-why-inner">
          <div>
            <p className="bx-eyebrow">Why businesses choose Bright EV</p>
            <h2 className="bx-serif">
              More than a vehicle.
              <br />A partnership.
            </h2>
          </div>
          <div className="cm-why-grid">
            {WHY.map((item) => {
              const Icon = item.icon;
              return (
                <article className="cm-why-item" key={item.title}>
                  <Icon size={30} strokeWidth={1.2} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="cm-cta">
        <div className="cm-cta-media">
          <img src={img("cm-cta.jpg")} alt="Commercial carts lined up at sunset" loading="lazy" />
        </div>
        <div className="bh-container cm-cta-inner">
          <div className="cm-cta-copy">
            <h2 className="bx-serif">
              Ready to power your operation?
              <em>Let&apos;s build your fleet.</em>
            </h2>
            <p>Tell us about your needs and our fleet specialists will create a tailored solution for your business.</p>
          </div>
          <div className="cm-cta-contacts">
            <a className="cm-cta-contact" href={SERVICE_NETWORK_PHONE_HREF}>
              <span>
                <Phone size={18} />
              </span>
              {SERVICE_NETWORK_PHONE}
            </a>
            <a className="cm-cta-contact" href={CONTACT.emailHref}>
              <span>
                <Mail size={18} />
              </span>
              {CONTACT.email}
            </a>
            <a className="bx-btn bx-btn-gold" href={CONTACT.emailHref}>
              Talk to a fleet specialist
            </a>
          </div>
        </div>
      </section>

      <BrightFooter />
    </div>
  );
}
