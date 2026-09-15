const NS = window.BrightEVDesignSystem_89bdae;
const { Hero, SplitPanel, SectionHeading, Kicker, Icon, Button, PillarCard, FeatureBlock, PhotoTile,
  BrandCard, TrustItem, SpecTile, ProcessStep, VehicleCard, UseCaseCard, PromoBanner,
  TestimonialCard, RegionalMapCard, FilterPill, PromoStrip } = NS;

const A = window.BrightEVAssetBaseImages || '../../assets/images/';
const Section = ({ bg, padY = 40, children, style }) => (
  <section className="bev-reveal" style={{ background: bg, padding: `${padY}px 0`, ...style }}>
    <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 24px' }}>{children}</div>
  </section>
);

function NextEV() {
  return (
    <section className="bev-reveal" style={{ background: 'var(--bev-offwhite)', padding: '112px 24px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
        <div className="bev-lift bev-zoom-media" style={{ borderRadius: 4, background: 'var(--bev-white)', boxShadow: 'var(--shadow-soft)', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <img src={A + 'showcase-lsv.jpg'} alt="Street-ready LSV" style={{ width: '100%', height: 411, objectFit: 'cover', borderRadius: 2 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, lineHeight: '20px', letterSpacing: '1.4px', textTransform: 'uppercase', color: 'var(--bev-muted)' }}>Street-ready LSV certified</span>
            <span style={{ fontSize: 14, fontWeight: 600, lineHeight: '20px', letterSpacing: '0.7px', color: 'var(--bev-gold)' }}>Up to 25 MPH</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <SectionHeading align="left" tone="light" size="xl" maxWidth={620}
            kicker="More than a golf cart." title={"Your next electric\nvehicle."} />
          <p style={{ margin: 0, padding: '24px 0', fontSize: 16, lineHeight: '26px', color: 'var(--bev-muted)' }}>
            From relaxed neighborhood cruising to heavy-duty resort operations, BrightEV brings together premium electric vehicles precision-engineered for modern short-range travel. No fuel odors, minimal maintenance, and zero noise.
          </p>
          <div className="bev-stagger" style={{ display: 'flex', gap: 16, padding: '8px 0 24px' }}>
            <PillarCard icon="shield" title="Street-legal" body={"Take your electric ride\nbeyond the course with\nselect street-legal\nmodels."} />
            <PillarCard icon="shield" title="Built for work" body={"Reliable electric\ntransportation for\nresorts, hospitality, and\ncorporate fleets."} />
            <PillarCard icon="shield" title="No gas. All fun." body={"Quiet, efficient electric\ndriving without\nsacrificing comfort or\nspeed."} />
          </div>
          <div><Button variant="ink" size="md" icon="arrow-right" style={{ padding: '12px 32px' }}>Find your ride</Button></div>
        </div>
      </div>
    </section>
  );
}

function Details() {
  const tiles = [
    ['detail-digital-display', 'Digital display'], ['detail-diamond-stitching', 'Diamond stitching'],
    ['detail-led-optics', 'LED optics'], ['detail-custom-wheels', 'Custom wheels'], ['detail-lithium-power', 'Lithium power'],
  ];
  return (
    <Section bg="var(--bev-surface-2)">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionHeading kicker="It's in the details." title={"Built around the way you\ndrive."} />
        <div className="bev-stagger" style={{ display: 'flex', gap: 12, padding: '24px 0', alignSelf: 'stretch' }}>
          {tiles.map(([img, cap]) => <PhotoTile key={cap} src={A + img + '.jpg'} caption={cap} style={{ flex: 1 }} />)}
        </div>
        <div className="bev-stagger" style={{ display: 'flex', gap: 24, padding: '40px 0 0', alignSelf: 'stretch' }}>
          <FeatureBlock icon="bolt" title="Smarter electric power" body={"Smooth, quiet electric performance\npowered by zero-maintenance high-\ncycle lithium technology."} style={{ flex: 1 }} />
          <FeatureBlock icon="bolt" title="Premium comfort" body={"Thoughtful ergonomic seating,\nautomotive-grade suspension, and\nabundant protected storage."} style={{ flex: 1 }} />
          <FeatureBlock icon="bolt" title="Ready for your world" body={"Personalize seating, lift kits, sound\nbars, and cargo attachments tailored\nto your lifestyle."} style={{ flex: 1 }} />
        </div>
      </div>
    </Section>
  );
}

function LifestyleBand({ onPlay }) {
  const { PlayButton } = NS;
  return (
    <section data-parallax="0.12" style={{ position: 'relative', height: 520, background: `url(${A}lifestyle-cinematic.jpg) center / cover no-repeat`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bev-overlay-70)' }} />
      <div style={{ position: 'relative', maxWidth: 768, padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ paddingBottom: 24 }}><PlayButton onClick={onPlay} /></div>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 68, lineHeight: '72px', letterSpacing: '-1.36px', textAlign: 'center', textTransform: 'uppercase', color: 'var(--bev-white)', whiteSpace: 'pre-line' }}>{"Go further.\nQuieter. Brighter."}</h2>
        <p style={{ margin: 0, padding: '12px 0', maxWidth: 576, fontSize: 16, lineHeight: '26px', textAlign: 'center', color: 'var(--bev-sand)' }}>Premium electric mobility for the neighborhood, the resort, the property, and everywhere in between.</p>
        <span style={{ padding: '8px 0', fontFamily: 'var(--font-sub)', fontWeight: 400, fontSize: 16, lineHeight: '24px', letterSpacing: '3.2px', textTransform: 'uppercase', color: 'var(--bev-gold-light)' }}>No gas. All the fun.</span>
      </div>
    </section>
  );
}

function FindYourRide({ tab, setTab }) {
  const tabs = ['Personal', 'Street-legal', 'Commercial', 'Resort & hospitality'];
  return (
    <Section bg="var(--bev-black)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SectionHeading kicker="Vehicle selector" title="Find your ride" size="xl" lede="Choose the vehicle that fits your lifestyle, property or business." />
          <div style={{ margin: '16px 0', display: 'inline-flex', gap: 8, borderRadius: 4, background: 'var(--bev-surface-1)', padding: 6 }}>
            {tabs.map((t) => <FilterPill key={t} active={t === tab} onClick={() => setTab(t)}>{t}</FilterPill>)}
          </div>
        </div>
        <VehicleCard image={A + 'vehicle-icon-i40l.jpg'} name="ICON i40L"
          badges={[{ label: 'Most popular' }, { label: 'Lifted 4x2' }]}
          description={"Street-legal capability. Lifted suspension. Luxurious diamond-stitched\ncomfort with performance engineering designed for both the golf\ncourse and the neighborhood."}
          price="$12,995"
          assurances={[{ label: 'Financing from $189/mo Available' }, { label: 'Nationwide White-Glove Home Delivery', icon: 'truck-check' }]}
          onPrev={() => {}} onNext={() => {}} />
        <div className="bev-stagger" style={{ display: 'flex', gap: 24, padding: '16px 0' }}>
          <UseCaseCard style={{ flex: 1 }} image={A + 'usecase-residential.jpg'} badge="Residential"
            title={"For home: your neighborhood\nupgraded"} body={"Electric transportation for family outings,\ngated communities, ranches, and quick\neveryday errands."} linkLabel="Explore personal carts" />
          <UseCaseCard style={{ flex: 1 }} image={A + 'usecase-commercial.jpg'} badge="Commercial"
            title={"For business: smarter work\ntransport"} body={"Turnkey fleet solutions for commercial\nproperties, facilities management, security,\nand warehouse operations."} linkLabel="Explore commercial" />
          <UseCaseCard style={{ flex: 1 }} image={A + 'usecase-hospitality.jpg'} badge="Hospitality"
            title="For resorts: move guests in luxury" body={"Premium multi-passenger shuttles\nengineered to deliver smooth, noiseless first-\nclass guest experiences."} linkLabel="Explore fleet options" />
        </div>
      </div>
    </Section>
  );
}

function FinancingDelivery() {
  return (
    <section className="bev-reveal" style={{ background: 'var(--bev-offwhite)', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', gap: 40, alignItems: 'flex-start' }}>
        <SplitPanel kicker="Your next ride is within reach" title={"Drive now. Pay over\ntime."}
          body={"Getting into a premium electric vehicle shouldn't mean paying everything\nupfront. Explore flexible low-APR financing options tailored to your monthly\nbudget."}
          media={<img src={A + 'financing-lifestyle.jpg'} alt="" style={{ width: '100%', height: 290, objectFit: 'cover', borderRadius: 4 }} />}
          actions={[{ label: 'Apply for financing' }, { label: 'Calculate payment' }]}>
          <div style={{ display: 'flex', gap: 8, padding: '17px 0' }}>
            <SpecTile icon="quick-approval" label="Quick approval" />
            <SpecTile icon="quick-approval" label="Flexible terms" />
            <SpecTile icon="quick-approval" label="No prepay penalty" />
          </div>
        </SplitPanel>
        <SplitPanel kicker="From our lot to your door" title={"Nationwide delivery\nmade simple."}
          body={"Found the perfect vehicle but don't live down the street? No problem. Our\ndedicated transport logistics team delivers directly across the contiguous US."}
          media={
            <div style={{ borderRadius: 4, background: 'var(--bev-black)', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Kicker tracking="tight">Direct delivery</Kicker>
                  <span style={{ fontFamily: 'var(--font-sub)', fontWeight: 400, fontSize: 16, lineHeight: '24px', textTransform: 'uppercase', color: 'var(--bev-white)' }}>To your driveway</span>
                </div>
                <Icon name="delivery-truck" size={29} style={{ width: 36.75, height: 28.875 }} color="var(--bev-gold-light)" />
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Icon name="check" size={8} style={{ width: 10.867, height: 8.017 }} color="var(--bev-success)" />
                <span style={{ fontSize: 12, lineHeight: '16px', color: 'var(--bev-sand)' }}>Fully assembled, inspected and charge-ready upon arrival.</span>
              </div>
            </div>
          }
          actions={[{ label: 'Get a delivery quote', variant: 'ink' }]}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '13px 0' }}>
            <ProcessStep number="01" title="Select your cart" body="Choose model, options, batteries, and customized body finishes." />
            <ProcessStep number="02" title="Fast digital sign-off" body="Title processing handled end-to-end by our team." />
            <ProcessStep number="03" title="Unloaded at your door" body="Delivered to your residence or business, ready to drive immediately." />
          </div>
        </SplitPanel>
      </div>
    </section>
  );
}

function TrustBand() {
  const items = [
    ['Premium selection', "Tier-one electric vehicles\nrigorously vetted from leading\nmanufacturers."],
    ['Clear pricing', "Zero hidden dealership fees or\nsurprise destination\nsurcharges."],
    ['Easy financing', "Competitive rates with\nnationwide lending partners for\nall credit tiers."],
    ['Direct delivery', "Enclosed or open carrier\ntransportation right to your\ndoor."],
    ['Sales & service', "Dedicated mobile technicians,\nfactory warranties, and OEM\nspare parts."],
  ];
  return (
    <Section bg="var(--bev-surface-1)">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
        <SectionHeading kicker="Why BrightEV" title="A brighter way to buy electric." />
        <div className="bev-stagger" style={{ display: 'flex', gap: 24, padding: '17px 0', justifyContent: 'center' }}>
          {items.map(([t, b]) => <TrustItem key={t} title={t} body={b} />)}
        </div>
      </div>
    </Section>
  );
}

function BrandExplorer() {
  const brands = [
    ['brand-icon-ev', 'ICON EV', "High-torque commercial and lifted\nneighborhood carts."],
    ['brand-epic-carts', 'Epic Carts', "Ultra-luxurious aesthetics with\nstandard premium upgrades."],
    ['brand-dach', 'Dach', "Rugged durability and heavy-duty\nchassis engineering."],
    ['brand-solana', 'Solana', "European styling matched with\neffortless zero-emission zip."],
    ['brand-tomberlin', 'Tomberlin', "Automotive-grade LSVs built for\nhighway-certified standards."],
  ];
  return (
    <Section bg="var(--bev-black)">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <SectionHeading kicker="Premier portfolio" title="Explore our electric brands" lede="Different personalities. Shared commitment to quality and quiet electric freedom." />
        <div className="bev-stagger" style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          {brands.map(([img, name, body]) => <BrandCard key={name} logo={A + img + '.jpg'} name={name} body={body} />)}
        </div>
      </div>
    </Section>
  );
}

function DualBanners() {
  return (
    <Section bg="var(--bev-surface-2)" style={{ padding: '40px 24px' }}>
      <div className="bev-stagger" style={{ display: 'flex', gap: 24 }}>
        <PromoBanner style={{ flex: 1 }} kicker="Dedicated support" title={"Service that goes\nbeyond the sale."}
          body={"From scheduled preventive checkups to complex controller tuning\nand warranty repairs, our factory-certified technicians keep your\nvehicle running like new."}
          chips={['Mobile Maintenance', 'Custom Accessories', 'OEM Replacements']}
          actions={[{ label: 'Explore service' }, { label: 'Schedule service' }]}
          backgroundImage={A + 'banner-service.jpg'} />
        <PromoBanner style={{ flex: 1 }} kicker="Drop-in performance" title={"Upgrade your ride\nto lithium from\n$2,499."}
          body={"Say goodbye to acid spills, heavy watering, and short battery\nlifespans. Cut vehicle weight by 300 lbs and enjoy 3x faster\ncharging and up to 10 years of reliable power."}
          chips={['✓ 8-Year Warranty', '✓ Rapid Installation', '✓ Compatible with Most Brands']}
          actions={[{ label: 'Explore battery upgrades' }]}
          backgroundImage={A + 'banner-lithium.jpg'} />
      </div>
    </Section>
  );
}

function Community() {
  const gallery = [['gallery-neighborhood', 'Neighborhood'], ['gallery-resort-escapes', 'Resort escapes'], ['gallery-commercial-fleets', 'Commercial fleets'], ['gallery-everyday-errands', 'Everyday errands']];
  return (
    <Section bg="var(--bev-offwhite)">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <SectionHeading tone="light" kicker="Golf carts in action" title="See where Bright takes you." />
        <div className="bev-stagger" style={{ display: 'flex', gap: 12, alignSelf: 'stretch' }}>
          {gallery.map(([img, cap]) => <PhotoTile key={cap} src={A + img + '.jpg'} caption={cap} ratio="wide" captionSize={16} scrim="soft" style={{ flex: 1 }} />)}
        </div>
        <div className="bev-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignSelf: 'stretch', padding: '8px 0' }}>
          <TestimonialCard style={{ alignSelf: 'start' }}
            quote={'"The entire process was easier than we expected. From custom\nseating selection to doorstep delivery in Arizona, BrightEV made\npurchasing our family\'s cart an absolute joy."'}
            avatar={A + 'testimonial-vance.jpg'} name="Marcus & Elena Vance" meta="Verified Owners — ICON i40L Lifted" />
          <RegionalMapCard title="Sales, rentals & service"
            body={"Serving residential owners and commercial partners across California,\nArizona, Nevada, New Mexico, and Hawaii with mobile vans and\nregional hubs."}
            map={A + 'regional-map.png'} statusLabel="Active hubs: Scottsdale, Palm Springs, Las Vegas, Honolulu"
            actions={[{ label: 'Find a location' }, { label: 'Contact our team' }]} />
        </div>
      </div>
    </Section>
  );
}

function StatBand() {
  const stats = [['777', 'Summer savings, up to $'], ['25', 'Top speed, MPH'], ['5', 'States served'], ['189', 'Financing from $/mo']];
  return (
    <section className="bev-reveal" style={{ background: 'var(--bev-black)', borderTop: '1px solid var(--bev-surface-3)', borderBottom: '1px solid var(--bev-surface-3)', padding: '40px 24px' }}>
      <div className="bev-stagger" style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {stats.map(([n, label]) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', textAlign: 'center' }}>
            <span className="bev-count" data-to={n} style={{ fontFamily: 'var(--font-sub)', fontWeight: 700, fontSize: 52, lineHeight: '56px', color: 'var(--bev-gold-pale)' }}>0</span>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11, lineHeight: '14px', letterSpacing: '2.2px', textTransform: 'uppercase', color: 'var(--bev-sand)' }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ticker() {
  const words = ['NO GAS. ALL THE FUN.', 'DRIVE A BRIGHTER TOMORROW', 'STREET-LEGAL PERFORMANCE', 'DELIVERED NATIONWIDE'];
  const run = [...words, ...words, ...words, ...words];
  return (
    <div className="bev-ticker" style={{ background: 'var(--bev-gold)', padding: '11px 0' }}>
      <div className="bev-ticker-track">
        {run.map((w, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 28, paddingRight: 28, fontFamily: 'var(--font-sub)', fontWeight: 500, fontSize: 14, letterSpacing: '3.2px', textTransform: 'uppercase', color: 'var(--bev-black-ink)' }}>
            {w}<span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--bev-black-ink)', display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { StatBand, Ticker, NextEV, Details, LifestyleBand, FindYourRide, FinancingDelivery, TrustBand, BrandExplorer, DualBanners, Community });
