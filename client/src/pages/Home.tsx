import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CarFront,
  Check,
  ChevronRight,
  Instagram,
  KeyRound,
  Menu,
  Phone,
  Play,
  Star,
  Wrench,
  X,
} from "lucide-react";

const heroImage = "/manus-storage/bright-service-cart_1044517b.jpg";
const lifestyleImage = "/manus-storage/bright-lifestyle-cart_e05e1db1.jpg";

const services = [
  {
    number: "01",
    icon: CarFront,
    title: "Sales",
    description: "New and pre-owned electric carts, curated for the California lifestyle.",
    action: "Explore inventory",
  },
  {
    number: "02",
    icon: KeyRound,
    title: "Rentals",
    description: "Beach days, neighborhood loops, and events made easy from Mission Blvd.",
    action: "Reserve a cart",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Service",
    description: "Expert maintenance, upgrades, and repairs that keep you moving.",
    action: "Book service",
  },
];

const testimonials = [
  {
    quote: "They gave me honest advice instead of trying to sell me something I didn't need. That's rare.",
    name: "Francesca S.",
    detail: "Service customer",
  },
  {
    quote: "We had a cart all weekend. The whole family loved it and the process couldn't have been easier.",
    name: "Mark H.",
    detail: "Rental customer",
  },
  {
    quote: "The knowledge, the price, and the service were all A++. I'd recommend Bright EV to anyone.",
    name: "Dan J.",
    detail: "Sales customer",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-cream">
      <div className="announcement-bar">
        <p>San Diego's electric cart specialists <span>•</span> Mission Beach, CA</p>
        <a href="tel:+18582224915">Call (858) 222-4915 <ArrowUpRight size={13} /></a>
      </div>

      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Bright EV Golf Carts home">
          <span className="brand-mark">BEV</span>
          <span className="brand-name">Bright EV <em>Golf Carts</em></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#fleet">The fleet</a>
          <a href="#experience">Why Bright EV</a>
          <a href="#process">How it works</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="tel:+18582224915">
          <span>Book a cart</span><ArrowUpRight size={15} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#fleet" onClick={closeMenu}>The fleet <ArrowUpRight size={16} /></a>
            <a href="#experience" onClick={closeMenu}>Why Bright EV <ArrowUpRight size={16} /></a>
            <a href="#process" onClick={closeMenu}>How it works <ArrowUpRight size={16} /></a>
            <a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={16} /></a>
            <a className="mobile-nav-cta" href="tel:+18582224915" onClick={closeMenu}>Book a cart <Phone size={16} /></a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> Brightening your drive</p>
          <h1>Ride <span>different.</span></h1>
          <p className="hero-description">Premium electric carts for the California coast. Buy yours, rent for the day, or let our local team keep it running beautifully.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="tel:+18582224915">Find your cart <ArrowUpRight size={17} /></a>
            <button className="text-link" onClick={() => scrollToSection("fleet")}>Explore the fleet <ChevronRight size={17} /></button>
          </div>
          <div className="hero-meta">
            <div><strong>4.9</strong><span className="stars">★★★★★</span><small>from local drivers</small></div>
            <div><strong>15+</strong><small>years on the coast</small></div>
            <div><strong>100%</strong><small>electric fun</small></div>
          </div>
        </div>
        <div className="hero-visual reveal reveal-delay-2">
          <div className="hero-image-wrap">
            <img src={heroImage} alt="Premium black and gold electric golf cart" />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-stamp"><span>Locally</span><strong>owned</strong><span>+ operated</span></div>
          <div className="hero-caption"><span>01 / 03</span><span>Black &amp; gold collection</span></div>
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
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className={`service-card reveal reveal-delay-${index + 1}`} key={service.number}>
                <div className="service-card-top"><span>{service.number}</span><Icon size={22} strokeWidth={1.5} /></div>
                <div className="service-card-body"><h3>{service.title}</h3><p>{service.description}</p></div>
                <a href="tel:+18582224915" className="service-card-link">{service.action} <ArrowUpRight size={15} /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-image reveal">
          <img src={lifestyleImage} alt="Family enjoying an electric golf cart near San Diego" />
          <div className="image-note"><span>Made for</span><strong>the good days</strong></div>
        </div>
        <div className="experience-copy reveal reveal-delay-2">
          <p className="eyebrow"><span className="eyebrow-line" /> The Bright EV standard</p>
          <h2>More than a cart.<br /><em>It's a better way around.</em></h2>
          <p className="large-copy">We believe getting there should be part of the fun. That's why every cart we sell, rent, and service is chosen for comfort, character, and a little more joy.</p>
          <ul className="check-list">
            <li><span><Check size={14} /></span><p><strong>Local expertise</strong> Real people, real advice, right here in San Diego.</p></li>
            <li><span><Check size={14} /></span><p><strong>Ready for your day</strong> Clean, charged, and prepared for wherever you're headed.</p></li>
            <li><span><Check size={14} /></span><p><strong>Support that lasts</strong> From first test drive to long after the keys are yours.</p></li>
          </ul>
          <a className="text-link text-link-dark" href="tel:+18582224915">Meet the Bright EV team <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-intro reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> Your next adventure</p>
          <h2>From hello to<br /><em>let's go.</em></h2>
          <p>No jargon. No runaround. Just a simple way to get on the road.</p>
          <a className="button button-outline" href="tel:+18582224915">Start a conversation <ArrowUpRight size={17} /></a>
        </div>
        <div className="process-steps">
          <div className="process-step reveal reveal-delay-1"><span className="step-number">01</span><div><h3>Choose your cart</h3><p>Browse our fleet or tell us what you have in mind. We'll match you with the right ride.</p></div></div>
          <div className="process-step reveal reveal-delay-2"><span className="step-number">02</span><div><h3>Make it yours</h3><p>Pick your dates, add the details, and we'll have everything ready when you arrive.</p></div></div>
          <div className="process-step reveal reveal-delay-3"><span className="step-number">03</span><div><h3>Enjoy the drive</h3><p>Grab the keys and take the scenic route. We'll be here when you need us next.</p></div></div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-heading reveal"><p className="eyebrow"><span className="eyebrow-line" /> Local love</p><h2>Good rides.<br /><em>Great company.</em></h2><div className="testimonial-controls"><button aria-label="Previous testimonial"><ArrowUpRight size={16} className="rotate-180" /></button><button aria-label="Next testimonial"><ArrowUpRight size={16} /></button></div></div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => <blockquote className={`testimonial-card reveal reveal-delay-${index + 1}`} key={testimonial.name}><div className="quote-mark">“</div><div className="testimonial-stars"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div><p>{testimonial.quote}</p><footer><strong>{testimonial.name}</strong><span>{testimonial.detail}</span></footer></blockquote>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orb" aria-hidden="true" />
        <div className="contact-content reveal"><p className="eyebrow"><span className="eyebrow-line" /> Ready when you are</p><h2>Make room for<br /><em>more outside.</em></h2><p>Have a question, a date in mind, or just want to see what is possible? Our team is one call away.</p><div className="contact-actions"><a className="button button-gold" href="tel:+18582224915"><Phone size={17} /> (858) 222-4915</a><a className="text-link" href="mailto:sales@brightevgolfcarts.com">sales@brightevgolfcarts.com <ArrowUpRight size={17} /></a></div></div>
        <div className="contact-side reveal reveal-delay-2"><div className="play-button"><Play size={17} fill="currentColor" /></div><span>See the Bright EV way</span><a href="https://youtu.be/1LxcTt1adfY" target="_blank" rel="noreferrer">Play our story <ArrowUpRight size={15} /></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-top"><a className="brand-lockup" href="#top"><span className="brand-mark">BEV</span><span className="brand-name">Bright EV <em>Golf Carts</em></span></a><p>Brightening your drive,<br />one cart at a time.</p><div className="footer-socials"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="tel:+18582224915" aria-label="Call Bright EV"><Phone size={18} /></a></div></div>
        <div className="footer-bottom"><span>© 2026 Bright EV Golf Carts</span><div><a href="#fleet">Inventory</a><a href="#contact">Contact</a><a href="#top">Back to top ↑</a></div><span>4150 Mission Blvd UNIT 141 · San Diego, CA</span></div>
      </footer>
    </main>
  );
}
