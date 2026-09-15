import { Instagram, Phone } from "lucide-react";
import { Link } from "wouter";
import { CONTACT } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="brand-lockup" href="/">
          <span className="brand-mark">BEV</span>
          <span className="brand-name">
            Bright EV <em>Golf Carts</em>
          </span>
        </Link>
        <p>
          Brightening your drive,
          <br />
          one cart at a time.
        </p>
        <div className="footer-socials">
          <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href={CONTACT.phoneHref} aria-label="Call Bright EV">
            <Phone size={18} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Bright EV Golf Carts</span>
        <div>
          <Link href="/street-legal">Street Legal</Link>
          <Link href="/commercial">Commercial</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <span>{CONTACT.addressFull}</span>
      </div>
    </footer>
  );
}
