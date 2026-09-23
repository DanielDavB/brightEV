import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { COALA_MODELS, SERVICE_NETWORK_PHONE, SERVICE_NETWORK_PHONE_HREF } from "@/data/site";

type NavLink = { label: string; href: string };
type NavItem = NavLink & { children?: NavLink[] };

const NAV: NavItem[] = [
  {
    label: "Shop",
    href: "/street-legal",
    children: COALA_MODELS.map((model) => ({
      label: model.name,
      href: model.layout === "Utility" ? "/commercial#vehicles" : `/street-legal#${model.slug}`,
    })),
  },
  { label: "Street-Legal", href: "/street-legal" },
  { label: "Commercial", href: "/commercial" },
  { label: "Financing", href: "/financing" },
  { label: "Service", href: "/services" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our story", href: "/about" },
      { label: "Visit the shop", href: "/about#visit" },
      { label: "Contact", href: "/contact" },
    ],
  },
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
  const [location] = useLocation();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="bh-header">
      <div className="bh-header-inner">
        <BrightLogo />
        <nav className="bh-nav" aria-label="Main">
          {NAV.map((item) => (
            <div className="bh-nav-item" key={item.label}>
              <Link
                href={item.href}
                className={item.label === active ? "is-active" : undefined}
                aria-current={item.label === active ? "page" : undefined}
              >
                {item.label}
                {item.children && <ChevronDown size={14} aria-hidden="true" />}
              </Link>
              {item.children && (
                <div className="bh-dropdown">
                  <div className="bh-dropdown-panel">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="bh-header-tools">
          <a className="bh-header-phone" href={SERVICE_NETWORK_PHONE_HREF}>
            <Phone size={16} aria-hidden="true" />
            {SERVICE_NETWORK_PHONE}
          </a>
          <Link className="bh-header-cta" href="/street-legal">
            Find your ride
          </Link>
          <button
            className="bh-burger"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="bh-mobile-nav"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="bh-mobile-nav" id="bh-mobile-nav" aria-label="Mobile">
          {NAV.map((item) => (
            <div key={item.label}>
              <Link href={item.href} className={item.label === active ? "is-active" : undefined}>
                {item.label}
              </Link>
              {item.children && (
                <div className="bh-mobile-sub">
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={SERVICE_NETWORK_PHONE_HREF}>Call {SERVICE_NETWORK_PHONE}</a>
        </nav>
      )}
    </header>
  );
}
