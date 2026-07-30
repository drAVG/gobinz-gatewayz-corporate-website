import Image from "next/image";

const products = [
  {
    name: "FinToolBoxPro",
    eyebrow: "Personal finance decisions",
    description: "Explore calculators and decision tools designed to help Canadians compare everyday financial scenarios with greater clarity.",
    href: "https://fintoolboxpro.com",
    cta: "Explore financial tools",
    accent: "amber",
  },
  {
    name: "CoinSwapPro",
    eyebrow: "Crypto swap intelligence",
    description: "Compare crypto swap routes, costs, and trade-offs using practical tools built for informed, self-directed research.",
    href: "https://coinswappro.com",
    cta: "Compare swap options",
    accent: "blue",
  },
  {
    name: "CryptoConverterPro",
    eyebrow: "Crypto conversion tools",
    description: "Convert crypto values and explore market context through a focused, accessible experience made for quick decisions.",
    href: "https://cryptoconverterpro.com",
    cta: "Open the converter",
    accent: "green",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gobinz Gatewayz home">
          <Image src="/gobinz-logo-dark.jpg" alt="Gobinz Gatewayz" width={1500} height={1000} priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#portfolio">Our systems</a>
          <a href="#standards">Our standards</a>
          <a href="#company">Company</a>
        </nav>
        <a className="header-cta" href="#portfolio">Explore the portfolio</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span>Canadian built</span> · Decision focused</p>
          <h1>Trusted Canadian<br /><em>Decision Systems.</em></h1>
          <p className="hero-lede">We build practical digital applications that make complex financial information easier to understand, compare, and act on—without the noise.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#portfolio">Find the right tool <Arrow /></a>
            <a className="text-link" href="#standards">See how we build <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Gobinz Gatewayz portfolio overview">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="panel-mark">G</div>
          <div className="portfolio-count"><strong>3</strong><span>Public decision<br />systems</span></div>
          <div className="maple" aria-hidden="true">✦</div>
        </div>
      </section>

      <div className="trust-strip" aria-label="Company highlights">
        <span>Based in Toronto</span><i />
        <span>Built for Canadian users</span><i />
        <span>Clear educational boundaries</span><i />
        <span>Privacy-conscious experiences</span>
      </div>

      <section className="portfolio section" id="portfolio">
        <div className="section-heading">
          <p className="kicker">The Gobinz portfolio</p>
          <h2>One company.<br /><em>Three focused systems.</em></h2>
          <p>Choose the application that matches the decision in front of you. Each product is purpose-built, straightforward, and independently useful.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card ${product.accent}`} key={product.name}>
              <div className="card-top"><span>0{index + 1}</span><span className="status">Live</span></div>
              <p className="product-eyebrow">{product.eyebrow}</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a href={product.href} target="_blank" rel="noopener noreferrer" aria-label={`${product.cta} on ${product.name}`}>
                {product.cta} <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="standards section" id="standards">
        <div className="standards-intro">
          <p className="kicker light">Why Gobinz Gatewayz</p>
          <h2>Clarity is<br /><em>the product.</em></h2>
          <p>Good decisions start with information you can inspect and understand. Our systems are designed to show their work and respect the line between education and advice.</p>
        </div>
        <div className="principles">
          <article><span>01</span><div><h3>Useful by design</h3><p>Every application starts with a specific decision and removes unnecessary steps between question and answer.</p></div></article>
          <article><span>02</span><div><h3>Transparent outputs</h3><p>Assumptions, limitations, and important context are presented alongside results—not hidden behind them.</p></div></article>
          <article><span>03</span><div><h3>Canadian context</h3><p>Where geography matters, we build for Canadian terminology, conventions, and user expectations.</p></div></article>
          <article><span>04</span><div><h3>Independent judgment</h3><p>Our tools support your research. They do not replace qualified financial, tax, legal, investment, or accounting professionals.</p></div></article>
        </div>
      </section>

      <section className="company section" id="company">
        <div className="company-mark">
          <Image src="/gobinz-logo-dark.jpg" alt="Gobinz Gatewayz" width={1500} height={1000} />
        </div>
        <div className="company-copy">
          <p className="kicker">The company behind the tools</p>
          <h2>Built in Canada.<br /><em>Growing with purpose.</em></h2>
          <p>Gobinz Gatewayz is a Toronto-based corporate umbrella for a growing portfolio of focused digital applications. We bring structure to complicated questions so people can move forward with more confidence.</p>
          <div className="contact-row">
            <a href="mailto:anil@gobinzgatewayz.ca">anil@gobinzgatewayz.ca <Arrow /></a>
            <a href="tel:+16476844949">647-684-4949</a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p className="kicker">Start with the right system</p>
        <h2>What decision are<br />you working through?</h2>
        <a className="button button-light" href="#portfolio">Explore our applications <Arrow /></a>
      </section>

      <footer>
        <div className="footer-brand">
          <Image src="/gobinz-logo-dark.jpg" alt="Gobinz Gatewayz" width={1500} height={1000} />
          <p>Trusted Canadian Decision Systems.</p>
        </div>
        <div className="footer-links"><h3>Applications</h3>{products.map((p) => <a key={p.name} href={p.href}>{p.name}</a>)}</div>
        <div className="footer-links"><h3>Company</h3><a href="#standards">Our standards</a><a href="#company">About Gobinz</a><a href="mailto:anil@gobinzgatewayz.ca">Contact</a></div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Gobinz Gatewayz. All rights reserved.</span>
          <span>Information is educational and general in nature. It is not financial, investment, tax, legal, or accounting advice.</span>
        </div>
      </footer>
    </main>
  );
}
