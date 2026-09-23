import { useState } from "react";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import { Link } from "wouter";
import { SERVICE_NETWORK_PHONE, SERVICE_NETWORK_PHONE_HREF } from "@/data/site";

const NAV = [
  { label: "Shop", href: "/street-legal", caret: true },
  { label: "Street-Legal", href: "/street-legal" },
  { label: "Commercial", href: "/commercial" },
  { label: "Financing", href: "/contact" },
  { label: "Service", href: "/services" },
  { label: "About", href: "/contact", caret: true },
];

export function BrightLogo() {
  return (
    <Link className="bh-logo" href="/" aria-label="Bright EV Golf Carts home">
      <span className="bh-logo-word">
        Bright<em>EV</em>
      </span>
      <span className="bh-logo-mid">Golfcarts</span>
      <span className="bh-logo-sub">Bright Electric Vehicles</span>
    </Link>
  );
}

export default function BrightHeader({ active = "Shop" }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bh-header">
      <div className="bh-header-inner">
        <BrightLogo />
        <nav className="bh-nav" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={item.label === active ? "is-active" : undefined}
              aria-current={item.label === active ? "page" : undefined}
            >
              {item.label}
              {item.caret && <ChevronDown size={14} />}
            </Link>
          ))}
        </nav>
        <div className="bh-header-tools">
          <button className="bh-icon-btn" aria-label="Search">
            <Search size={18} />
          </button>
          <a className="bh-header-phone" href={SERVICE_NETWORK_PHONE_HREF}>
            <Phone size={16} />
            {SERVICE_NETWORK_PHONE}
          </a>
          <Link className="bh-header-cta" href="/street-legal">
            Find your ride
          </Link>
          <button className="bh-burger" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="bh-mobile-nav" aria-label="Mobile">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={SERVICE_NETWORK_PHONE_HREF}>Call {SERVICE_NETWORK_PHONE}</a>
        </nav>
      )}
    </header>
  );
}
