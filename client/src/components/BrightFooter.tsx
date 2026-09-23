import { Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import { BrightLogo } from "@/components/BrightHeader";
import {
  COALA_MODELS,
  CONTACT,
  NETWORK,
  SERVICE_LINK_URL,
  SERVICE_NETWORK_PHONE,
  SERVICE_NETWORK_PHONE_HREF,
} from "@/data/site";

type FooterLink = { label: string; href: string };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "Street-Legal", href: "/street-legal" },
      ...COALA_MODELS.map((model) => ({
        label: model.name,
        href: model.layout === "Utility" ? "/commercial#vehicles" : `/street-legal#${model.slug}`,
      })),
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Golf Cart Service", href: "/services" },
      { label: "Lithium Upgrades", href: "/services#lithium" },
      { label: "Mobile Service", href: "/services" },
      { label: "Service Network", href: SERVICE_LINK_URL },
    ],
  },
  {
    title: "Financing",
    links: [
      { label: "Financing Options", href: "/financing" },
      { label: "Payment Calculator", href: "/financing#calculator" },
      { label: "Fleet Purchases", href: "/commercial#fleet-form" },
      { label: "Financing FAQs", href: "/financing#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Bright EV", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Locations", href: NETWORK.locationsHref },
      { label: "Customer Reviews", href: NETWORK.reviewsHref },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Warranty", href: "/services#warranty" },
      { label: "Service FAQs", href: "/services#faq" },
      { label: "Visit the Shop", href: "/about#visit" },
    ],
  },
];

function FooterAnchor({ link }: { link: FooterLink }) {
  if (link.href.startsWith("http")) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    );
  }
  return <Link href={link.href}>{link.label}</Link>;
}

export default function BrightFooter() {
  return (
    <footer className="bh-footer">
      <div className="bh-container">
        <div className="bh-footer-grid">
          <div className="bh-footer-brand">
            <BrightLogo />
            <p className="bh-footer-tag">No gas, all the fun.</p>
            <p>Premium golf carts and electric vehicles for personal, commercial and lifestyle transportation.</p>
          </div>

          {COLUMNS.map((column) => (
            <nav className="bh-footer-col" key={column.title} aria-label={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterAnchor link={link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="bh-footer-bottom">
          <span>© 2026 Bright Electric Vehicles. All Rights Reserved.</span>
          <div className="bh-footer-meta">
            <a href={SERVICE_NETWORK_PHONE_HREF}>
              <Phone size={17} aria-hidden="true" />
              {SERVICE_NETWORK_PHONE}
            </a>
            <a href={CONTACT.emailHref}>
              <Mail size={17} aria-hidden="true" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
