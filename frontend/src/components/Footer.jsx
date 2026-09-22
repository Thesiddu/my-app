import { Link } from '../router.jsx'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Core Services</h4>
          <ul>
            <li><Link href="/services/seo/">SEO Agency in Hyderabad</Link></li>
            <li><Link href="/services/ai-seo/">AI SEO & GEO Solutions</Link></li>
            <li><Link href="/services/google-ads/">Google Ads & PPC Management</Link></li>
            <li><Link href="/services/lead-generation/">B2B & B2C Lead Generation</Link></li>
            <li><Link href="/services/web-development/">Custom Web Development</Link></li>
            <li><Link href="/services/ecommerce-development/">E-Commerce Development</Link></li>
            <li><Link href="/services/branding/">Strategic Brand Identity</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Knowledge & Proof</h4>
          <ul>
            <li><Link href="/ai-seo-guide/">AI Search & GEO Guide</Link></li>
            <li><Link href="/case-studies/">Verified Case Studies</Link></li>
            <li><Link href="#about">About Reach Strategies</Link></li>
            <li><Link href="#faq">Frequently Asked Questions</Link></li>
            <li><Link href="#contact">Book Growth Consultation</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Hyderabad Hub</h4>
          <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.7' }}>
            Headquartered in Hyderabad, Telangana. Partnering with high-growth technology startups, B2B enterprises, healthcare networks, and D2C brands across India and global markets.
          </p>
          <div style={{ marginTop: '14px' }}>
            <span style={{ display: 'inline-block', fontSize: '0.8rem', color: '#ff5252', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Service Areas
            </span>
            <p style={{ fontSize: '0.88rem', color: '#888', margin: '4px 0 0' }}>
              HITEC City, Gachibowli, Madhapur, Jubilee Hills, Banjara Hills & Pan-India
            </p>
          </div>
        </div>

        <div className="footer-col contact-col">
          <h4>Contact Us</h4>
          <address style={{ fontStyle: 'normal' }}>
            <p>Reach Strategies</p>
            <p>Hyderabad, Telangana 500081, India</p>
            <p>
              <a href="tel:+919491305100" aria-label="Call Reach Strategies">Call: +91 94913 05100</a>
            </p>
            <p>
              <a href="mailto:contact@reachstrategies.in" aria-label="Email Reach Strategies">contact@reachstrategies.in</a>
            </p>
            <p>
              <a href="https://wa.me/919491305100" target="_blank" rel="noreferrer">WhatsApp: +91 94913 05100</a>
            </p>
            <p>
              <a href="https://instagram.com/reach_strategies" target="_blank" rel="noreferrer">Instagram: @reach_strategies</a>
            </p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', maxWidth: '1200px', margin: '0 auto' }}>
          <span>© 2026 Reach Strategies. All Rights Reserved.</span>
          <span style={{ fontSize: '0.82rem', color: '#777' }}>
            Premier Digital Marketing, AI SEO & Custom Web Solutions Agency Hyderabad
          </span>
        </div>
      </div>
    </footer>
  )
}
