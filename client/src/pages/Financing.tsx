import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  KeyRound,
  Percent,
  Plus,
  Repeat2,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { Link } from "wouter";
import BrightFooter from "@/components/BrightFooter";
import BrightHeader from "@/components/BrightHeader";
import { CONTACT, SERVICE_NETWORK_PHONE, SERVICE_NETWORK_PHONE_HREF } from "@/data/site";
import { withBase } from "@/lib/url";
import "@/styles/bright.css";
import "@/styles/bright-pages.css";

const img = (name: string) => withBase(`/pages/${name}`);

const STATS = [
  { value: "5.99%", label: "APR from, for qualified buyers" },
  { value: "84 mo.", label: "Terms up to seven years" },
  { value: "$0", label: "Prepayment penalty" },
  { value: "24 hrs", label: "Typical decision time" },
];

const STEPS = [
  { step: "01", title: "Apply online", text: "A short application with a soft credit check that will not affect your score." },
  { step: "02", title: "Get your options", text: "We match you with our lending partners and send back the terms you qualify for." },
  { step: "03", title: "Pick your cart", text: "Choose the model, colors and accessories. We finalize the paperwork digitally." },
  { step: "04", title: "Take delivery", text: "Sign, schedule delivery and start driving. Payments begin the following month." },
];

const PROGRAMS = [
  {
    icon: KeyRound,
    title: "Personal financing",
    text: "Fixed monthly payments for street-legal and personal carts, with terms sized to your budget.",
    action: "Apply for credit",
  },
  {
    icon: Building2,
    title: "Commercial leasing",
    text: "Lease or finance fleets for resorts, campuses and properties, with volume pricing and fleet terms.",
    action: "Talk to a fleet specialist",
  },
  {
    icon: Repeat2,
    title: "Trade-in credit",
    text: "Put the value of your current cart toward your next one. Send photos and we will give you a number.",
    action: "Get a trade-in value",
  },
];

const FAQ = [
  {
    q: "Does applying affect my credit score?",
    a: "The first step is a soft credit check, which does not affect your score. A hard inquiry only happens once you accept an offer and move forward with the purchase.",
  },
  {
    q: "What credit scores do you work with?",
    a: "Our lending partners cover a wide range of credit tiers. Approval, rate and term depend on the lender's review, so the fastest way to know your options is to apply.",
  },
  {
    q: "Can I pay the balance off early?",
    a: "Yes. There is no prepayment penalty, so you can pay ahead or settle the balance at any time without extra fees.",
  },
  {
    q: "Do you finance accessories and upgrades?",
    a: "Lift kits, lithium upgrades, sound systems and other accessories can be added to the amount financed when they are part of the original purchase.",
  },
  {
    q: "Is financing available for businesses?",
    a: "Yes. Commercial leasing and fleet financing are available for resorts, hotels, campuses, communities and property managers.",
  },
];

function currency(value: number) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function Financing() {
  const [price, setPrice] = useState(12995);
  const [down, setDown] = useState(1500);
  const [term, setTerm] = useState(60);
  const apr = 0.0599;

  const monthly = useMemo(() => {
    const principal = Math.max(price - down, 0);
    const rate = apr / 12;
    if (principal === 0) return 0;
    return (principal * rate) / (1 - Math.pow(1 + rate, -term));
  }, [price, down, term]);

  return (
    <div className="bh-page pg-page">
      <BrightHeader active="Financing" />

      <section className="pg-hero">
        <div className="pg-hero-media">
          <img src={img("fin-hero.jpg")} alt="Owners with their financed Bright EV cart" fetchPriority="high" />
        </div>
        <div className="bh-container pg-hero-inner">
          <div className="pg-hero-copy">
            <p className="bx-eyebrow">Financing</p>
            <h1 className="bx-serif">
              Drive now.
              <em>Pay over time.</em>
            </h1>
            <p>
              Getting into a premium electric vehicle should not mean paying everything upfront. Explore flexible
              low-APR financing built around your monthly budget.
            </p>
            <span className="bx-rule" />
            <div className="pg-hero-actions">
              <a className="bx-btn bx-btn-gold" href={CONTACT.emailHref}>
                Apply for financing
              </a>
              <a className="bx-btn bx-btn-outline" href="#calculator">
                Calculate payment
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
            <p className="bx-eyebrow">How it works</p>
            <h2 className="bx-serif">Four steps from application to keys.</h2>
            <p>No jargon and no runaround — just a clear path to the cart you want.</p>
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

      <section className="pg-section pg-dark" id="calculator">
        <div className="bh-container">
          <div className="pg-calc">
            <div className="pg-calc-form">
              <h2 className="bx-serif">Estimate your payment.</h2>
              <p>Move the sliders to see how price, down payment and term change your monthly number.</p>
              <div className="pg-calc-field">
                <label htmlFor="fin-price">
                  Vehicle price <b>{currency(price)}</b>
                </label>
                <input
                  id="fin-price"
                  type="range"
                  min={6000}
                  max={30000}
                  step={250}
                  value={price}
                  onChange={(event) => setPrice(Number(event.target.value))}
                />
              </div>
              <div className="pg-calc-field">
                <label htmlFor="fin-down">
                  Down payment <b>{currency(down)}</b>
                </label>
                <input
                  id="fin-down"
                  type="range"
                  min={0}
                  max={Math.max(price - 1000, 1000)}
                  step={250}
                  value={Math.min(down, Math.max(price - 1000, 1000))}
                  onChange={(event) => setDown(Number(event.target.value))}
                />
              </div>
              <div className="pg-calc-field">
                <label htmlFor="fin-term">
                  Term <b>{term} months</b>
                </label>
                <input
                  id="fin-term"
                  type="range"
                  min={24}
                  max={84}
                  step={12}
                  value={term}
                  onChange={(event) => setTerm(Number(event.target.value))}
                />
              </div>
            </div>
            <div className="pg-calc-result">
              <span>Estimated monthly payment</span>
              <p className="pg-calc-amount">
                {currency(monthly)}
                <em> /mo</em>
              </p>
              <p>
                Based on {currency(Math.max(price - down, 0))} financed at 5.99% APR over {term} months. Estimate only —
                your rate and term depend on lender approval, and taxes, title and delivery are not included.
              </p>
              <a className="bx-btn bx-btn-gold" href={CONTACT.emailHref}>
                Apply with these numbers
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section pg-light">
        <div className="bh-container">
          <div className="pg-head">
            <p className="bx-eyebrow">Programs</p>
            <h2 className="bx-serif">Financing for every kind of buyer.</h2>
          </div>
          <div className="pg-grid pg-grid-3">
            {PROGRAMS.map((program) => {
              const Icon = program.icon;
              return (
                <article className="pg-card" key={program.title}>
                  <span className="pg-card-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                  <a className="pg-link" href={CONTACT.emailHref}>
                    {program.action} <ArrowRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pg-strip">
        <div className="bh-container pg-strip-grid">
          <article className="pg-strip-item">
            <Timer size={28} strokeWidth={1.2} />
            <h3>Fast decisions</h3>
            <p>Most applications get an answer within one business day.</p>
          </article>
          <article className="pg-strip-item">
            <Percent size={28} strokeWidth={1.2} />
            <h3>Competitive rates</h3>
            <p>Nationwide lending partners covering every credit tier.</p>
          </article>
          <article className="pg-strip-item">
            <ShieldCheck size={28} strokeWidth={1.2} />
            <h3>No surprises</h3>
            <p>Clear terms, no hidden dealer fees, no prepayment penalty.</p>
          </article>
          <article className="pg-strip-item">
            <FileCheck2 size={28} strokeWidth={1.2} />
            <h3>Digital paperwork</h3>
            <p>Sign from your phone and we handle the title processing.</p>
          </article>
        </div>
      </section>

      <section className="pg-section pg-light">
        <div className="bh-container pg-split">
          <div className="pg-split-media">
            <img src={img("fin-side.jpg")} alt="Street-legal cart ready for delivery" loading="lazy" />
            <div className="pg-split-badge">
              <strong>$0</strong>
              <span>Prepayment penalty</span>
            </div>
          </div>
          <div>
            <p className="bx-eyebrow">What you need</p>
            <h2 className="bx-serif">Ready to apply in minutes.</h2>
            <ul className="pg-checklist">
              <li>
                <CheckCircle2 size={17} /> A valid driver&apos;s license or state ID
              </li>
              <li>
                <CheckCircle2 size={17} /> Proof of income, such as recent pay stubs
              </li>
              <li>
                <CheckCircle2 size={17} /> The model and configuration you have in mind
              </li>
              <li>
                <CheckCircle2 size={17} /> Delivery address for titling and transport
              </li>
            </ul>
            <div className="pg-hero-actions">
              <a className="bx-btn bx-btn-gold" href={CONTACT.emailHref}>
                Start my application
              </a>
              <a className="bx-btn bx-btn-quiet" href={SERVICE_NETWORK_PHONE_HREF}>
                Call {SERVICE_NETWORK_PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section pg-darker">
        <div className="bh-container">
          <div className="pg-head">
            <p className="bx-eyebrow">Questions</p>
            <h2 className="bx-serif">Financing, answered.</h2>
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
              Know your budget?
              <em>Let&apos;s find your cart.</em>
            </h2>
            <p>Send us the model you are eyeing and we will come back with real numbers, not a ballpark.</p>
          </div>
          <div className="pg-cta-actions">
            <a className="bx-btn bx-btn-gold" href={CONTACT.emailHref}>
              Apply for financing
            </a>
            <Link className="bx-btn bx-btn-outline" href="/street-legal">
              Browse inventory
            </Link>
          </div>
        </div>
      </section>

      <BrightFooter />
    </div>
  );
}
