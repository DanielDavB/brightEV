import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { Link } from "wouter";
import { BrightLogo } from "@/components/BrightHeader";
import { CONTACT, SERVICE_NETWORK_PHONE, SERVICE_NETWORK_PHONE_HREF } from "@/data/site";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Golf Carts", href: "/street-legal" },
      { label: "Street-Legal", href: "/street-legal" },
      { label: "Commercial Vehicles", href: "/commercial" },
      { label: "Personal Vehicles", href: "/street-legal" },
      { label: "Featured Vehicles", href: "/street-legal" },
      { label: "Brands", href: "/street-legal" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Golf Cart Service", href: "/services" },
      { label: "Lithium Battery Upgrades", href: "/services" },
      { label: "Parts", href: "/services" },
      { label: "Rentals", href: "/contact" },
      { label: "Delivery", href: "/contact" },
    ],
  },
  {
    title: "Financing",
    links: [
      { label: "Easy Financing", href: "/financing" },
      { label: "Apply for Financing", href: "/financing" },
      { label: "Commercial Financing", href: "/financing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Bright EV", href: "/about" },
      { label: "Locations", href: "/about" },
      { label: "Customer Stories", href: "/about" },
      { label: "FAQs", href: "/financing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping & Delivery", href: "/contact" },
      { label: "Service", href: "/services" },
      { label: "Warranty", href: "/services" },
      { label: "Privacy", href: "/contact" },
      { label: "Terms", href: "/contact" },
    ],
  },
];

export default function BrightFooter() {
  return (
    <footer className="bh-footer">
      <div className="bh-container">
        <div className="bh-footer-grid">
          <div className="bh-footer-brand">
            <BrightLogo />
            <p className="bh-footer-tag">No gas, all the fun.</p>
            <p>Premium golf carts and electric vehicles for personal, commercial and lifestyle transportation.</p>
            <div className="bh-socials">
              <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={17} />
              </a>
              <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={17} />
              </a>
              <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube size={17} />
              </a>
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div className="bh-footer-col" key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bh-footer-bottom">
          <span>© 2026 Bright Electric Vehicles. All Rights Reserved.</span>
          <div className="bh-footer-meta">
            <a href={SERVICE_NETWORK_PHONE_HREF}>
              <Phone size={17} />
              {SERVICE_NETWORK_PHONE}
            </a>
            <a href={CONTACT.emailHref}>
              <Mail size={17} />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
