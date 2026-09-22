import { Facebook, Instagram, Mail, Phone, Share2, Truck, Youtube } from "lucide-react";
import { Link } from "wouter";
import { BrightLogo } from "@/components/BrightHeader";
import { CONTACT, SERVICE_NETWORK_PHONE, SERVICE_NETWORK_PHONE_HREF } from "@/data/site";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Inventory", href: "/street-legal" },
      { label: "Street Legal LSVs", href: "/street-legal" },
      { label: "Commercial Fleet", href: "/commercial" },
      { label: "Luxury 6-Passenger", href: "/street-legal" },
      { label: "2 & 4 Passenger", href: "/street-legal" },
      { label: "Custom Builds", href: "/contact" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Mobile Maintenance", href: "/services" },
      { label: "Lithium Conversion", href: "/services" },
      { label: "Custom Upgrades", href: "/services" },
      { label: "Warranty Protection", href: "/services" },
      { label: "Parts & Accessories", href: "/services" },
    ],
  },
  {
    title: "Financing",
    links: [
      { label: "Apply for Credit", href: "/contact" },
      { label: "Payment Calculator", href: "/contact" },
      { label: "Commercial Leasing", href: "/commercial" },
      { label: "Trade-In Valuation", href: "/contact" },
      { label: "Dealer Programs", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About BrightEV", href: "/contact" },
      { label: "Showrooms", href: "/contact" },
      { label: "Careers", href: "/contact" },
      { label: "Press & Media", href: "/contact" },
      { label: "Resort Partners", href: "/commercial" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Delivery Tracker", href: "/contact" },
      { label: "Owners Manuals", href: "/services" },
      { label: "FAQ", href: "/contact" },
      { label: "Privacy Policy", href: "/contact" },
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
            <p className="bh-footer-tag">No gas. All the fun.</p>
            <p>Premium golf carts and electric vehicles for personal, commercial and lifestyle transportation.</p>
            <div className="bh-socials">
              <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" aria-label="Share">
                <Share2 size={16} />
              </a>
              <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube size={16} />
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
          <div className="bh-footer-meta">
            <a href={SERVICE_NETWORK_PHONE_HREF}>
              <Phone size={14} />
              {SERVICE_NETWORK_PHONE}
            </a>
            <a href={CONTACT.emailHref}>
              <Mail size={14} />
              {CONTACT.email}
            </a>
            <span>
              <Truck size={14} />
              Nationwide Delivery to Your Door
            </span>
          </div>
          <span>© 2026 Bright Electric Vehicles. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
