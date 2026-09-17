import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { CONTACT, NAV_ITEMS } from "@/data/site";
import { withBase } from "@/lib/url";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="floating-quote" href="tel:+18582224915" aria-label="Call Bright EV">
        <span className="floating-quote-pulse" aria-hidden="true" />
        <span>
          Request a
          <br />
          quote
        </span>
        <ArrowUpRight size={16} />
      </a>
      <div className="announcement-bar">
        <p>
          {CONTACT.descriptor} <span>•</span> Mission Beach, CA
        </p>
        <a href={CONTACT.phoneHref}>
          Call {CONTACT.phone} <ArrowUpRight size={13} />
        </a>
      </div>

      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <Link className="brand-lockup" href="/" aria-label="Bright EV Golf Carts home">
          <span className="brand-mark">BEV</span>
          <span className="brand-name">
            Bright EV <em>Golf Carts</em>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <div className="nav-item" key={item.href}>
              <Link href={item.href}>
                {item.label}
                {item.children && <ChevronDown size={12} className="nav-item-caret" />}
              </Link>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <a key={child.href} href={withBase(child.href)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <a className="header-cta" href={CONTACT.phoneHref}>
          <span>Book a cart</span>
          <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link href={item.href} onClick={closeMenu}>
                  {item.label} <ArrowUpRight size={16} />
                </Link>
                {item.children && (
                  <div className="mobile-nav-sub">
                    {item.children.map((child) => (
                      <a key={child.href} href={withBase(child.href)} onClick={closeMenu}>
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a className="mobile-nav-cta" href={CONTACT.phoneHref} onClick={closeMenu}>
              Book a cart <Phone size={16} />
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
