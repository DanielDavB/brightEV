import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CarFront,
  Check,
  ChevronRight,
  KeyRound,
  Phone,
  Play,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT } from "@/data/site";
import { withBase } from "@/lib/url";
import { initScrollAnimations } from "../lib/animations";
import { fallbackCarts, getCartInventory } from "../lib/api";

const heroImage = withBase("/hero-background.jpg");
const lifestyleImage = withBase("/good-days.jpg");
const storyServiceImage = withBase("/banner-service.jpg");
const storyBatteryImage = withBase("/banner-lithium.jpg");

const services = [
  {
    number: "01",
    icon: CarFront,
    title: "Sales",
    description: "New and pre-owned Coala electric carts, curated for the California lifestyle.",
    action: "Explore inventory",
    href: "/street-legal",
    internal: true,
  },
  {
    number: "02",
    icon: KeyRound,
    title: "Rentals",
    description: "Beach days, neighborhood loops, and events made easy from Mission Blvd.",
    action: "Reserve a cart",
    href: CONTACT.phoneHref,
    internal: false,
  },
  {
    number: "03",
    icon: Wrench,
    title: "Service",
    description: "Expert maintenance, upgrades, and repairs that keep you moving.",
    action: "Book service",
    href: "/services",
    internal: true,
  },
];

const valueProps = [
  { title: "Local expertise", detail: "Real people, real advice, right here in San Diego." },
  { title: "Ready for your day", detail: "Clean, charged, and prepared for wherever you're headed." },
  { title: "Support that lasts", detail: "From first test drive to long after the keys are yours." },
];

// Not sourced from real customer reviews — a placeholder trust strip until
// Bright EV shares real Google/Yelp quotes. See final report for details.
const reasonsToChoose = [
  { title: "Genuine Coala dealer", detail: "Every cart we carry is real Coala inventory — no filler brands." },
  { title: "One local team", detail: "Sales, rentals, and service are all handled right here in San Diego." },
  { title: "Backed by warranty", detail: "10-year battery, 3-year body, and lifetime frame warranty on every Coala." },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [carts, setCarts] = useState(fallbackCarts);

  useEffect(() => {
    const cleanupScrollAnimations = initScrollAnimations();
    return cleanupScrollAnimations;
  }, []);

  useEffect(() => {
    let mounted = true;
    getCartInventory().then(({ data }) => {
      if (!mounted) return;
      setCarts(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-particles" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i /><i />
        </div>
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> Brightening your drive</p>
          <h1>Ride <span>different.</span></h1>
          <p className="hero-description">Premium electric carts for the California coast. Buy yours, rent for the day, or let our local team keep it running beautifully.</p>
          <div className="hero-actions">
            <a className="button button-gold" href={CONTACT.phoneHref}>Find your cart <ArrowUpRight size={17} /></a>
            <button className="text-link" onClick={() => scrollToSection("fleet")}>Explore the fleet <ChevronRight size={17} /></button>
          </div>
          <div className="hero-meta">
            <div><strong>Sales</strong><small>new &amp; pre-owned Coala carts</small></div>
            <div><strong>Rentals</strong><small>daily &amp; event rentals</small></div>
            <div><strong>Service</strong><small>local maintenance &amp; upgrades</small></div>
          </div>
        </div>
        <div className="hero-visual reveal reveal-delay-2">
          <div className="hero-image-wrap">
            <img data-parallax="hero" src={heroImage} alt="Electric golf cart cruising a California coastal road at sunset" fetchPriority="high" decoding="async" />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-stamp"><span>Locally</span><strong>owned</strong><span>+ operated</span></div>
        </div>
        <div className="scroll-cue"><ArrowDownRight size={17} /><span>Scroll to explore</span></div>
      </section>

      <section className="service-section" id="fleet">
        <div className="motion-ticker" aria-label="Bright EV services">
          <div className="motion-ticker-track">
            <span>Electric freedom</span><i>✦</i><span>Coastal cruising</span><i>✦</i><span>Local expertise</span><i>✦</i><span>Electric freedom</span><i>✦</i><span>Coastal cruising</span><i>✦</i><span>Local expertise</span><i>✦</i>
          </div>
        </div>
        <div className="section-heading reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> The bright side of mobility</p>
          <h2>One destination.<br /><em>Every kind of ride.</em></h2>
          <p>Whether you are cruising the boardwalk or upgrading your everyday, we make electric feel effortless.</p>
        </div>
        <div className="service-sequence" data-service-sequence data-active="0">
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className={`service-card reveal reveal-delay-${index + 1}`} data-parallax="service" data-service-card={index} key={service.number}>
                  <div className="service-card-top"><span>{service.number}</span><Icon size={22} strokeWidth={1.5} /></div>
                  <div className="service-card-body"><h3>{service.title}</h3><p>{service.description}</p></div>
                  {service.internal ? (
                    <Link href={service.href} className="service-card-link">{service.action} <ArrowUpRight size={15} /></Link>
                  ) : (
                    <a href={service.href} className="service-card-link">{service.action} <ArrowUpRight size={15} /></a>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <div className="inventory-heading reveal">
          <div><p className="eyebrow"><span className="eyebrow-line" /> Available now</p><h2>Find your<br /><em>perfect fit.</em></h2></div>
          <p>Real Coala carts, on the lot in San Diego. See full specs and every configuration on the Street Legal page.</p>
        </div>
        <div className="inventory-grid" data-animate="fade-in-stagger">
          {carts.map((cart, index) => (
            <article className={`inventory-card reveal reveal-delay-${(index % 3) + 1}`} key={cart.id}>
              <div className="inventory-image"><img src={withBase(cart.image)} alt={cart.name} loading="lazy" decoding="async" /><span>{cart.eyebrow}</span></div>
              <div className="inventory-card-copy"><div><h3>{cart.name}</h3><p>{cart.capacity} · {cart.range}</p></div><strong>{cart.price}</strong></div>
              <div className="inventory-specs">{cart.specs?.map((spec) => <span key={spec}>{spec}</span>)}</div>
              <div className="inventory-card-actions"><Link href="/street-legal#4-seater">Full specs <ArrowUpRight size={14} /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-image reveal">
          <img data-parallax="section" src={lifestyleImage} alt="Family enjoying an electric golf cart near San Diego" loading="lazy" decoding="async" />
          <div className="image-note"><span>Made for</span><strong>the good days</strong></div>
        </div>
        <div className="experience-copy reveal reveal-delay-2">
          <p className="eyebrow"><span className="eyebrow-line" /> The Bright EV standard</p>
          <h2>More than a cart.<br /><em>It's a better way around.</em></h2>
          <p className="large-copy">We believe getting there should be part of the fun. That's why every cart we sell, rent, and service is chosen for comfort, character, and a little more joy.</p>
          <ul className="check-list">
            {valueProps.map((item) => (
              <li key={item.title}>
                <span><Check size={14} /></span>
                <p><strong>{item.title}</strong> {item.detail}</p>
              </li>
            ))}
          </ul>
          <a className="text-link text-link-dark" href={CONTACT.phoneHref}>Meet the Bright EV team <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="scrollytelling-section" id="story">
        <div className="story-stage-wrap">
          <div className="story-stage" data-active="0">
            <div className="story-stage-glow" />
            <div className="story-scene story-scene-0">
              <img data-parallax="story" src={heroImage} alt="Bright EV golf cart ready for a coastal drive" loading="lazy" decoding="async" />
              <span className="scene-label">01 / Ready when you are</span>
            </div>
            <div className="story-scene story-scene-1">
              <img data-parallax="story" src={storyBatteryImage} alt="Bright EV lithium battery pack" loading="lazy" decoding="async" />
              <span className="scene-label">02 / Built to last</span>
            </div>
            <div className="story-scene story-scene-2">
              <img data-parallax="story" src={storyServiceImage} alt="Bright EV technician servicing an electric golf cart" loading="lazy" decoding="async" />
              <span className="scene-label">03 / Keep the good going</span>
            </div>
            <div className="story-progress"><span /></div>
          </div>
        </div>
        <div className="story-copy">
          <div className="story-intro reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> The Bright EV story</p>
            <h2>A better day<br /><em>starts here.</em></h2>
            <p>Scroll through the way we think about getting around San Diego.</p>
          </div>
          <article className="story-chapter is-active" data-story="0">
            <span className="story-chapter-number">01</span>
            <div className="story-chapter-content"><img src={heroImage} alt="Electric cart ready for its first coastal drive" loading="lazy" /><div><h3>Start with the right ride.</h3><p>Every great day begins with a little intention. We curate genuine Coala electric carts that feel as good as they look, so your first mile already feels like a memory.</p><span className="story-chapter-tag">Sales · rentals · service</span></div></div>
          </article>
          <article className="story-chapter" data-story="1">
            <span className="story-chapter-number">02</span>
            <div className="story-chapter-content"><img src={storyBatteryImage} alt="Lithium battery pack built for Bright EV carts" loading="lazy" /><div><h3>Built on real lithium power.</h3><p>Every Coala we carry runs on a lithium platform backed by a 10-year battery cell warranty, a 3-year body warranty, and a lifetime frame warranty.</p><span className="story-chapter-tag">Mission Beach · San Diego</span></div></div>
          </article>
          <article className="story-chapter" data-story="2">
            <span className="story-chapter-number">03</span>
            <div className="story-chapter-content"><img src={storyServiceImage} alt="Bright EV technician servicing a cart's electrical system" loading="lazy" /><div><h3>Keep moving bright.</h3><p>When you find your favorite route, we help you keep it going with thoughtful maintenance, upgrades, and a team who knows your cart by name.</p><span className="story-chapter-tag">Local support · long-term joy</span></div></div>
          </article>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-intro reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> Your next adventure</p>
          <h2>From hello to<br /><em>let's go.</em></h2>
          <p>No jargon. No runaround. Just a simple way to get on the road.</p>
          <a className="button button-outline" href={CONTACT.phoneHref}>Start a conversation <ArrowUpRight size={17} /></a>
        </div>
        <div className="process-steps">
          <div className="process-step reveal reveal-delay-1" data-process-step="1"><span className="step-number">01</span><div><h3>Choose your cart</h3><p>Browse our fleet or tell us what you have in mind. We'll match you with the right ride.</p></div></div>
          <div className="process-step reveal reveal-delay-2" data-process-step="2"><span className="step-number">02</span><div><h3>Make it yours</h3><p>Pick your dates, add the details, and we'll have everything ready when you arrive.</p></div></div>
          <div className="process-step reveal reveal-delay-3" data-process-step="3"><span className="step-number">03</span><div><h3>Enjoy the drive</h3><p>Grab the keys and take the scenic route. We'll be here when you need us next.</p></div></div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-heading reveal"><p className="eyebrow"><span className="eyebrow-line" /> Local love</p><h2>Good rides.<br /><em>Great company.</em></h2></div>
        <div className="testimonial-grid">
          {reasonsToChoose.map((item, index) => (
            <article className={`testimonial-card reveal reveal-delay-${index + 1}`} key={item.title}>
              <p>{item.detail}</p>
              <footer><strong>{item.title}</strong></footer>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orb" aria-hidden="true" />
        <div className="contact-content reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> Ready when you are</p>
          <h2>Make room for<br /><em>more outside.</em></h2>
          <p>Have a question, a date in mind, or just want to see what is possible? Our team is one call away.</p>
          <div className="contact-actions">
            <a className="button button-gold" href={CONTACT.phoneHref}><Phone size={17} /> {CONTACT.phone}</a>
            <a className="text-link" href={CONTACT.emailHref}>{CONTACT.email} <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="contact-side reveal reveal-delay-2">
          <div className="play-button"><Play size={17} fill="currentColor" /></div>
          <span>See the Bright EV way</span>
          <a href="https://youtu.be/1LxcTt1adfY" target="_blank" rel="noreferrer">Play our story <ArrowUpRight size={15} /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
