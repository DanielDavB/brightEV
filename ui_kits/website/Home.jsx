const DS = window.BrightEVDesignSystem_89bdae;
const { SiteHeader, PromoStrip, SiteFooter, Hero } = DS;
const NAV = DS.BRIGHTEV_NAV || ['Home', 'Street-Legal', 'Commercial', 'Services', 'Contact'];
const ASSET_BASE = window.BrightEVAssetBase || '../../';
const IMAGE_BASE = window.BrightEVAssetBaseImages || '../../assets/images/';

function useMotion() {
  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      document.querySelectorAll('.bev-reveal,.bev-reveal-zoom,.bev-stagger').forEach((el) => el.classList.add('is-in'));
      document.querySelectorAll('.bev-count').forEach((el) => { el.textContent = el.dataset.to; });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
        e.target.querySelectorAll?.('.bev-count').forEach(runCount);
        if (e.target.classList.contains('bev-count')) runCount(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.bev-reveal,.bev-reveal-zoom,.bev-stagger,.bev-count').forEach((el) => io.observe(el));

    function runCount(el) {
      if (el.dataset.done) return;
      el.dataset.done = '1';
      const to = parseFloat(el.dataset.to);
      const start = performance.now();
      const dur = 1200;
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * eased).toLocaleString('en-US');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    const parallax = Array.from(document.querySelectorAll('[data-parallax]'));
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        parallax.forEach((el) => {
          const r = el.getBoundingClientRect();
          const offset = (r.top + y - y) * parseFloat(el.dataset.parallax) * -1;
          el.style.backgroundPosition = `center calc(50% + ${Math.round(offset * 0.12)}px)`;
        });
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);
}

function Home() {
  const [tab, setTab] = React.useState('Personal');
  const [nav, setNav] = React.useState('Home');
  const [playing, setPlaying] = React.useState(false);
  const [condensed, setCondensed] = React.useState(false);
  useMotion();

  React.useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ background: 'var(--bev-black-page)' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 20 }}>
        <SiteHeader items={NAV} activeItem={nav} onNavigate={setNav} condensed={condensed} assetBase={ASSET_BASE} />
      </div>
      <Hero image={IMAGE_BASE + 'hero-fleet.jpg'} eyebrow="2026 fleet lineup now arrived"
        headline="Life is bright."
        subhead={"Premium golf carts. Street-legal performance.\nDelivered nationwide."}
        body="Discover premium electric vehicles built for more than the course. Personal rides, street-legal models, and commercial solutions - with seamless white-glove financing and delivery directly to your door."
        actions={[{ label: 'Shop golf carts' }, { label: 'Explore financing' }]}
        benefits={['Sales', 'Rentals', 'Service', 'Nationwide']}
        flagship={{ model: 'ICON i40L Lifted EV', price: '$12,995' }} />
      <Ticker />
      <PromoStrip title="Summer is here. So are the savings."
        body="Save up to $777 on select premium golf carts through September 30, 2026." action="View summer savings" />
      <NextEV />
      <Details />
      <LifestyleBand onPlay={() => setPlaying(true)} />
      <StatBand />
      <FindYourRide tab={tab} setTab={setTab} />
      <FinancingDelivery />
      <TrustBand />
      <BrandExplorer />
      <DualBanners />
      <Community />
      <SiteFooter blurb={"Premium golf carts and electric vehicles for personal,\ncommercial and lifestyle transportation."}
        legal="© 2026 Bright Electric Vehicles. All Rights Reserved."
        contacts={['888-260-0707', 'sales@brightev.com', 'Nationwide Delivery to Your Door']}
        columns={[
          { title: 'Street-Legal', links: ['2 Seater', '4 Seater', '4+2 Seater', 'All Street-Legal', 'Lithium Upgrades'] },
          { title: 'Commercial', links: ['Utility', 'Resort & Hospitality', 'Fleet Programs', 'Facilities', 'Custom Builds'] },
          { title: 'Services', links: ['Mobile Maintenance', 'Lithium Conversion', 'Custom Upgrades', 'Warranty Protection', 'Parts & Accessories'] },
          { title: 'Financing', links: ['Apply for Credit', 'Payment Calculator', 'Commercial Leasing', 'Trade-In Valuation', 'Dealer Programs'] },
          { title: 'Contact', links: ['Contact Us', 'Delivery Tracker', 'Showrooms', 'FAQ', 'Privacy Policy'] },
        ]} />
      {playing && (
        <div onClick={() => setPlaying(false)} style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'var(--bev-overlay-90)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', animation: 'bev-fade 260ms var(--ease-out-expo) both' }}>
          <div style={{ width: 880, aspectRatio: '16 / 9', borderRadius: 8, background: 'var(--bev-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-card-lg)', animation: 'bev-zoom 420ms var(--ease-out-expo) both' }}>
            <span style={{ fontFamily: 'var(--font-sub)', fontSize: 16, letterSpacing: '3.2px', textTransform: 'uppercase', color: 'var(--bev-gold-light)' }}>Brand film — placeholder</span>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
