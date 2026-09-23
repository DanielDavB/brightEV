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
import { usePageTitle } from "@/hooks/usePageTitle";
import { withBase } from "@/lib/url";
import "@/styles/bright.css";
import "@/styles/bright-pages.css";

const img = (name: string) => withBase(`/pages/${name}`);

const STATS = [
  { value: "0% APR", label: "For 24 months on approved credit" },
  { value: "$199/mo", label: "Payments as low as" },
  { value: "24–48", label: "Month terms available" },
  { value: "$0 down", label: "Typical with approved credit" },
];

const STEPS = [
  {
    step: "01",
    title: "Apply",
    text: "Send a short application. A team member follows up within 24 hours to walk you through it.",
  },
  {
    step: "02",
    title: "Get your options",
    text: "We work with multiple lenders and come back with the terms you qualify for.",
  },
  {
    step: "03",
    title: "Pick your Coala",
    text: "Choose the model, seating layout and color. Accessories, taxes and registration can be financed too.",
  },
  { step: "04", title: "Take delivery", text: "Sign the paperwork and schedule delivery to your home or business." },
];

const PROGRAMS = [
  {
    icon: KeyRound,
    title: "Personal financing",
    text: "0% interest for 24 months on approved credit, or longer 36- and 48-month terms for a lower payment.",
    action: "Apply for credit",
    subject: "Financing application",
  },
  {
    icon: Building2,
    title: "Fleet purchases",
    text: "Buying several carts for a resort, campus, community or property? We quote and finance fleet orders.",
    action: "Talk to a fleet specialist",
    subject: "Fleet financing",
  },
  {
    icon: Repeat2,
    title: "Sell or trade your cart",
    text: "Bright EV buys and sells new and pre-owned carts. Tell us what you have and we will make you an offer.",
    action: "Get a trade-in value",
    subject: "Trade-in value",
  },
];

const FAQ = [
  {
    q: "What credit score do I need?",
    a: "Our lenders' minimum is typically a 650 credit score. A low debt-to-income ratio helps you qualify for 0% on 24- or 36-month terms, with other options that carry interest over a longer payoff period.",
  },
  {
    q: "Is 0% financing really available?",
    a: "Yes — payments as low as $199 per month at 0% interest for 24 months, subject to lender approval.",
  },
  {
    q: "What terms can I choose?",
    a: "Flexible plans of 24, 36 or 48 months.",
  },
  {
    q: "Do I need a down payment?",
    a: "Usually not. Financing is typically zero down with approved credit.",
  },
  {
    q: "Can I finance accessories, taxes and registration?",
    a: "Yes. Accessories, taxes, registration and similar costs can be included in the amount financed.",
  },
  {
    q: "How much does financing add to the price?",
    a: "Financing typically increases the total cost by about 4.5–8.5% compared with paying cash, in exchange for a much smaller upfront payment — and interest-free options are available.",
  },
];

const applyHref = (subject: string) => `${CONTACT.emailHref}?subject=${encodeURIComponent(subject)}`;

function currency(value: number) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function Financing() {
  usePageTitle("Financing");

  const [price, setPrice] = useState(12000);
  const [down, setDown] = useState(0);
  const [term, setTerm] = useState(24);
  const [apr, setApr] = useState(0);

  const monthly = useMemo(() => {
    const principal = Math.max(price - down, 0);
    const rate = apr / 100 / 12;
    if (principal === 0) return 0;
    if (rate === 0) return principal / term;
    return (principal * rate) / (1 - Math.pow(1 + rate, -term));
  }, [price, down, term, apr]);

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
              <a className="bx-btn bx-btn-gold" href={applyHref("Financing application")}>
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
                <label htmlFor="fin-apr">
                  Interest rate (APR) <b>{apr.toFixed(1)}%</b>
                </label>
                <input
                  id="fin-apr"
                  type="range"
                  min={0}
                  max={15}
                  step={0.5}
                  value={apr}
                  onChange={(event) => setApr(Number(event.target.value))}
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
                  max={48}
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
                Based on {currency(Math.max(price - down, 0))} financed at {apr.toFixed(1)}% APR over {term} months. Estimate only —
                your rate and term depend on lender approval, and taxes, title and delivery are not included.
              </p>
              <a
                className="bx-btn bx-btn-gold"
                href={`${applyHref("Financing application")}&body=${encodeURIComponent(
                  `Vehicle price: ${currency(price)}\nDown payment: ${currency(down)}\nTerm: ${term} months\nEstimated payment: ${currency(monthly)}/mo`,
                )}`}
              >
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
                  <a className="pg-link" href={applyHref(program.subject)}>
                    {program.action} <ArrowRight size={14} aria-hidden="true" />
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
            <h3>Quick follow-up</h3>
            <p>A team member contacts you within 24 hours of your request.</p>
          </article>
          <article className="pg-strip-item">
            <Percent size={28} strokeWidth={1.2} />
            <h3>Multiple lenders</h3>
            <p>We shop your application with several lenders to find your best option.</p>
          </article>
          <article className="pg-strip-item">
            <ShieldCheck size={28} strokeWidth={1.2} />
            <h3>Finance the extras</h3>
            <p>Accessories, taxes and registration can be part of the loan.</p>
          </article>
          <article className="pg-strip-item">
            <FileCheck2 size={28} strokeWidth={1.2} />
            <h3>Zero down</h3>
            <p>Financing is usually $0 down with approved credit.</p>
          </article>
        </div>
      </section>

      <section className="pg-section pg-light">
        <div className="bh-container pg-split">
          <div className="pg-split-media">
            <img src={img("fin-side.jpg")} alt="Street-legal cart ready for delivery" loading="lazy" />
            <div className="pg-split-badge">
              <strong>$0 down</strong>
              <span>With approved credit</span>
            </div>
          </div>
          <div>
            <p className="bx-eyebrow">What you need</p>
            <h2 className="bx-serif">Ready to apply in minutes.</h2>
            <ul className="pg-checklist">
              <li>
                <CheckCircle2 size={17} aria-hidden="true" /> A credit score of 650 or higher
              </li>
              <li>
                <CheckCircle2 size={17} aria-hidden="true" /> A valid driver&apos;s license or state ID
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
              <a className="bx-btn bx-btn-gold" href={applyHref("Financing application")}>
                Start my application
              </a>
              <a className="bx-btn bx-btn-quiet" href={SERVICE_NETWORK_PHONE_HREF}>
                Call {SERVICE_NETWORK_PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section pg-darker" id="faq">
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
            <a className="bx-btn bx-btn-gold" href={applyHref("Financing application")}>
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
