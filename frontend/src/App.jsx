import { useEffect, useState, useRef } from 'react'
import brandSymbol from './assets/brand-symbol.png'
import heroImage from './assets/hero.png'
import featureFlow from './assets/feature-flow.png'
import featureInsight from './assets/feature-insight.png'
import featureLaunch from './assets/feature-launch.png'
import contactVisual from './assets/contact-visual.jpg'
import './App.css'

function App() {
  useEffect(() => {
    const panels = document.querySelectorAll('.scroll-panel')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          } else {
            entry.target.classList.remove('active')
          }
        })
      },
      { threshold: 0.24 }
    )

    panels.forEach((panel) => observer.observe(panel))
    return () => panels.forEach((panel) => observer.unobserve(panel))
  }, [])

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMobile = () => {
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#home" className="brand-link" aria-label="Reach Strategies Home" onClick={closeMobile}>
          <img src={brandSymbol} alt="Reach Strategies Logo" className="brand-logo" />
        </a>

        {/* Desktop Navigation */}
        <nav className="topnav desktop-nav">
          <div
            className={`topnav-dropdown ${dropdownOpen ? 'open' : ''}`}
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="topnav-link dropdown-toggle"
              type="button"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <span>Services</span>
              <svg className={`dropdown-chevron ${dropdownOpen ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={`services-menu ${dropdownOpen ? 'visible' : ''}`}>
              <div className="services-grid">
                <div className="services-column">
                  <div className="services-group-header">
                    <span className="services-icon-dot"></span>
                    <span className="services-group-title">Digital Marketing</span>
                  </div>
                  <div className="services-list">
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Google Ads</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Lead Generation</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Social Media Marketing</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Search Engine Optimization</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Local SEO</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">AI SEO</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Social Media Management</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Content Marketing</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Email Marketing</span>
                      <span className="item-arrow">→</span>
                    </a>
                  </div>
                </div>

                <div className="services-column">
                  <div className="services-group-header">
                    <span className="services-icon-dot"></span>
                    <span className="services-group-title">Web Solutions</span>
                  </div>
                  <div className="services-list">
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Web Designing</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Web Development</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">E-Commerce Website</span>
                      <span className="item-arrow">→</span>
                    </a>
                    <a href="#services" className="services-item" onClick={() => setDropdownOpen(false)}>
                      <span className="item-text">Custom CMS Websites</span>
                      <span className="item-arrow">→</span>
                    </a>
                  </div>

                  <div className="services-cta-box">
                    <p className="services-cta-title">Need a tailored growth strategy?</p>
                    <a href="#contact" className="services-cta-btn" onClick={() => setDropdownOpen(false)}>
                      Request a Proposal →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#about" className="topnav-link">About</a>
          <a href="#work" className="topnav-link">Case Studies</a>
          <a href="#faq" className="topnav-link">FAQ</a>
          <a href="#contact" className="topnav-link">Contact</a>
          <a href="#contact" className="topnav-cta-btn">Book a Call</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-links">
            <div className="mobile-accordion">
              <button
                type="button"
                className={`mobile-accordion-toggle ${mobileServicesOpen ? 'expanded' : ''}`}
                onClick={() => setMobileServicesOpen((prev) => !prev)}
              >
                <span>Services</span>
                <svg className="accordion-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`mobile-accordion-body ${mobileServicesOpen ? 'open' : ''}`}>
                <div className="mobile-services-group">
                  <span className="mobile-group-title">Digital Marketing</span>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Google Ads</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Lead Generation</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Social Media Marketing</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Search Engine Optimization</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Local SEO</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>AI SEO</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Social Media Management</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Content Marketing</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Email Marketing</a>
                </div>

                <div className="mobile-services-group">
                  <span className="mobile-group-title">Web Solutions</span>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Web Designing</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Web Development</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>E-Commerce Website</a>
                  <a href="#services" className="mobile-sublink" onClick={closeMobile}>Custom CMS Websites</a>
                </div>
              </div>
            </div>

            <a href="#about" className="mobile-nav-link" onClick={closeMobile}>About Us</a>
            <a href="#work" className="mobile-nav-link" onClick={closeMobile}>Case Studies</a>
            <a href="#team" className="mobile-nav-link" onClick={closeMobile}>Our Team</a>
            <a href="#faq" className="mobile-nav-link" onClick={closeMobile}>FAQ</a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMobile}>Contact Us</a>
          </div>

          <div className="mobile-nav-footer">
            <a href="#contact" className="button primary mobile-cta" onClick={closeMobile}>
              Book a Call
              <span className="button-arrow">→</span>
            </a>

            <div className="mobile-social-row">
              <a href="https://wa.me/919491305100" target="_blank" rel="noreferrer" className="mobile-social-link whatsapp">
                WhatsApp
              </a>
              <a href="https://instagram.com/reach_strategies" target="_blank" rel="noreferrer" className="mobile-social-link instagram">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="site-shell">
        <section id="home" className="hero panel scroll-panel">
          <div className="hero-copy">
            <span className="eyebrow">Reach Strategies — Your Trusted Growth Partner</span>
            <h1>Efficient Strategy for Modern Brands</h1>
            <p>
              Reach Strategies delivers bold digital growth with a modern brand
              experience, clearer insights, and launch-ready marketing assets.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button primary">
                Book a call
                <span className="button-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img src={heroImage} alt="Reach Strategies Digital Marketing Agency" className="hero-image" />
              <div className="hero-image-glow" />
              <div className="hero-image-dots" />
            </div>
          </div>
        </section>

        <section id="about" className="whats-new panel scroll-panel">
          <div className="section-heading">
            <span>What's new?</span>
            <h2>Faster workflows, clearer insights, launch-ready assets.</h2>
          </div>

          <div className="cards-grid">
            <article className="feature-card">
              <div className="feature-art feature-image">
                <img src={featureFlow} alt="Faster workflows" />
              </div>
              <h3>Faster workflows</h3>
            </article>

            <article className="feature-card">
              <div className="feature-art feature-image">
                <img src={featureInsight} alt="Clearer insights" />
              </div>
              <h3>Clearer insights</h3>
            </article>

            <article className="feature-card">
              <div className="feature-art feature-image">
                <img src={featureLaunch} alt="Launch-ready assets" />
              </div>
              <h3>Launch-ready assets</h3>
            </article>
          </div>
        </section>

        <section id="services" className="services panel scroll-panel">
          <div className="section-heading">
            <span>Services</span>
            <h2>Marketing, web, and branding for high-growth companies.</h2>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <div className="service-eyebrow">Digital Marketing</div>
              <h3>Campaigns that convert and scale.</h3>
              <p>
                Paid media, SEO, social ads, content, and conversion optimization
                built into one performance engine.
              </p>
              <a href="#contact" className="service-link">Request a proposal</a>
            </article>
            <article className="service-card">
              <div className="service-eyebrow">Web Solutions</div>
              <h3>Design systems for modern digital brands.</h3>
              <p>
                Websites, ecommerce experiences, and landing pages designed for
                speed, clarity, and measurable growth.
              </p>
              <a href="#contact" className="service-link">Book a consultation</a>
            </article>
            <article className="service-card">
              <div className="service-eyebrow">Branding</div>
              <h3>Identity work that feels memorable.</h3>
              <p>
                Creative brand direction, messaging, and visual systems that make
                your business stand out.
              </p>
              <a href="#contact" className="service-link">Start the conversation</a>
            </article>
          </div>
        </section>

        <section id="work" className="work panel scroll-panel">
          <div className="section-heading">
            <span>Case Studies</span>
            <h2>Proven results from real clients.</h2>
          </div>
          <div className="work-grid">
            <article className="work-card">
              <h3>Performance growth</h3>
              <p>
                40% increase in qualified leads for a service brand using search
                and targeted social campaigns.
              </p>
            </article>
            <article className="work-card">
              <h3>Brand lift</h3>
              <p>
                A new visual identity and website redesign that doubled brand
                consideration in 90 days.
              </p>
            </article>
            <article className="work-card">
              <h3>Revenue acceleration</h3>
              <p>
                Marketing automation and ads that improved ROI while cutting
                cost-per-lead by 38%.
              </p>
            </article>
          </div>
        </section>

        <section id="team" className="team panel scroll-panel">
          <div className="section-heading">
            <span>Expert Team</span>
            <h2>The minds behind your success.</h2>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="avatar avatar-1">SN</div>
              <h3>Sidharth Namala</h3>
              <p>Head of Design & Founder</p>
            </div>
            <div className="team-card">
              <div className="avatar avatar-2">DY</div>
              <h3>Diksha Yadav</h3>
              <p>Digital Acquisition Lead</p>
            </div>
            <div className="team-card">
              <div className="avatar avatar-3">SR</div>
              <h3>Sharath Reddy</h3>
              <p>Digital Solutions Architect</p>
            </div>
          </div>
        </section>

        <section id="faq" className="faq panel scroll-panel">
          <div className="section-heading">
            <span>FAQ</span>
            <h2>Common questions about working with us.</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h4>What services does reachstrategies offer?</h4>
              <p>
                We provide digital marketing, web development, branding, paid
                media, SEO, and campaigns designed for measurable business growth.
              </p>
            </div>
            <div className="faq-item">
              <h4>How do you measure results?</h4>
              <p>
                Our team tracks conversions, traffic quality, engagement metrics,
                and ROI to measure every campaign's impact.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can you support my business category?</h4>
              <p>
                Yes, we work with startups, SaaS, retail, hospitality, founders,
                agencies, and B2B brands across multiple industries.
              </p>
            </div>
            <div className="faq-item">
              <h4>How long does a campaign build take?</h4>
              <p>
                Most campaigns launch within 4-6 weeks, depending on scope and
                asset requirements. We prioritize speed without sacrificing
                strategy quality.
              </p>
            </div>
            <div className="faq-item">
              <h4>What makes your marketing approach different?</h4>
              <p>
                We combine performance media, creative systems, and data
                intelligence to build campaigns that are both memorable and
                measurable.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you offer ongoing support?</h4>
              <p>
                Yes. We provide ongoing optimization, reporting, and campaign
                support so your strategy continues improving after launch.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact panel scroll-panel">
          <div className="section-heading">
            <span>Contact Us</span>
            <h2>Share your details and the service you need</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-visual-card">
              <div className="contact-image-wrapper">
                <img src={contactVisual} alt="Reach Strategies Growth Consultation" className="contact-visual-img" />
                <div className="contact-image-overlay" />
              </div>

              <div className="contact-info-panel">
                <div className="contact-badge">
                  <span className="live-pulse" />
                  Direct Consultation
                </div>
                <h3>Ready to scale your brand?</h3>
                <p>
                  Schedule a complimentary growth strategy session with our digital marketing and web specialists.
                </p>

                <div className="contact-quick-links">
                  <a href="https://wa.me/919491305100" target="_blank" rel="noreferrer" className="quick-contact-pill whatsapp">
                    <svg className="pill-icon-svg" width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 .001 5.373.001 12a11.84 11.84 0 0 0 1.61 6.04L0 24l6.16-1.59A11.88 11.88 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.19-1.24-6.18-3.48-8.52z" fill="#25D366"/>
                      <path d="M17.39 14.62c-.36-.18-2.12-1.05-2.45-1.17-.33-.12-.57-.18-.81.18s-.93 1.17-1.14 1.41c-.21.24-.42.27-.78.09-.36-.18-1.51-.56-2.87-1.77-1.06-.95-1.77-2.12-1.98-2.48-.21-.36-.02-.55.16-.73.17-.17.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24 0-.45-.06-.63-.06-.18-.81-1.96-1.11-2.68-.29-.7-.58-.6-.81-.6-.21 0-.45 0-.69 0-.24 0-.63.09-.96.45-.33.36-1.25 1.22-1.25 2.96 0 1.74 1.28 3.42 1.45 3.66.18.24 2.51 3.83 6.08 5.37 3.56 1.54 3.56 1.03 4.2.96.64-.06 2.06-.84 2.35-1.66.29-.83.29-1.54.2-1.69-.09-.15-.33-.24-.69-.42z" fill="#fff"/>
                    </svg>
                    <span>Chat with us on WhatsApp</span>
                  </a>
                  <a href="https://instagram.com/reach_strategies" target="_blank" rel="noreferrer" className="quick-contact-pill instagram">
                    <svg className="pill-icon-svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.4"/>
                    </svg>
                    <span>Follow @reach_strategies</span>
                  </a>
                </div>

                <div className="contact-meta-row">
                  <div className="meta-item">
                    <span className="meta-label">Response Time</span>
                    <span className="meta-val">
                      <svg className="meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(255, 184, 0, 0.25)" stroke="#ffb800"/>
                      </svg>
                      &lt; 2 Hours
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Location</span>
                    <span className="meta-val">
                      <svg className="meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="rgba(232, 45, 45, 0.25)" stroke="#ff4d4d"/>
                        <circle cx="12" cy="10" r="3" fill="#ff4d4d"/>
                      </svg>
                      Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <label>
                  Full name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email address
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <div className="field-row">
                  <label className="phone-field">
                    Phone number
                    <div className="phone-input-wrap">
                      <CountryCodeSelect name="country" defaultValue="+91" />
                      <input type="tel" name="phone" placeholder="98765 43210" required />
                    </div>
                  </label>

                  <label className="service-field">
                    Service needed
                    <ServiceSelect name="service" required />
                  </label>
                </div>
                <button type="submit" className="button primary contact-submit">
                  Submit request
                  <span className="button-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#work">Case Studies</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Web Solutions</h4>
            <ul>
              <li>Domain Registration</li>
              <li>Web Designing</li>
              <li>Web Development</li>
              <li>e-Commerce Website</li>
              <li>Custom CMS Websites</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Digital Marketing</h4>
            <ul>
              <li>Search Engine Marketing</li>
              <li>Social Media Marketing</li>
              <li>Search Engine Optimization</li>
              <li>Social Media Management</li>
              <li>Content Marketing</li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Contact Us</h4>
            <p>Hyderabad</p>
            <p>
              <a href="https://wa.me/919491305100" target="_blank" rel="noreferrer">WhatsApp: +91 94913 05100</a>
            </p>
            <p>
              <a href="https://instagram.com/reach_strategies" target="_blank" rel="noreferrer">Instagram: @reach_strategies</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">© 2026 All Rights Reserved. REACH STRATEGIES</div>
      </footer>

      {/* Floating action buttons: WhatsApp and Instagram */}
      <div className="floating-actions">
        <a className="fab fab-whatsapp" href="https://wa.me/919491305100" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 .001 5.373.001 12a11.84 11.84 0 0 0 1.61 6.04L0 24l6.16-1.59A11.88 11.88 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.19-1.24-6.18-3.48-8.52z" fill="#25D366"/>
            <path d="M17.39 14.62c-.36-.18-2.12-1.05-2.45-1.17-.33-.12-.57-.18-.81.18s-.93 1.17-1.14 1.41c-.21.24-.42.27-.78.09-.36-.18-1.51-.56-2.87-1.77-1.06-.95-1.77-2.12-1.98-2.48-.21-.36-.02-.55.16-.73.17-.17.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24 0-.45-.06-.63-.06-.18-.81-1.96-1.11-2.68-.29-.7-.58-.6-.81-.6-.21 0-.45 0-.69 0-.24 0-.63.09-.96.45-.33.36-1.25 1.22-1.25 2.96 0 1.74 1.28 3.42 1.45 3.66.18.24 2.51 3.83 6.08 5.37 3.56 1.54 3.56 1.03 4.2.96.64-.06 2.06-.84 2.35-1.66.29-.83.29-1.54.2-1.69-.09-.15-.33-.24-.69-.42z" fill="#fff"/>
          </svg>
        </a>

        <a className="fab fab-instagram" href="https://instagram.com/reach_strategies" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 6.5h.01" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App

function ServiceSelect({ name, required }) {
  const options = [
    { value: '', label: 'Select a service' },
    { value: 'google-ads', label: 'Google Ads' },
    { value: 'lead-generation', label: 'Lead Generation' },
    { value: 'social-media', label: 'Social Media Marketing' },
    { value: 'seo', label: 'Search Engine Optimization' },
    { value: 'ai-seo', label: 'AI SEO' },
    { value: 'web-designing', label: 'Web Designing' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'ecommerce', label: 'E-Commerce Website' },
    { value: 'branding', label: 'Branding' },
  ]

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')
  const wrapRef = useRef(null)

  useEffect(() => {
    function onDoc(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className={`custom-select ${open ? 'open' : ''}`} ref={wrapRef}>
      <input type="hidden" name={name} value={selected} required={required} />
      <button type="button" className="custom-select__control" onClick={() => setOpen((s) => !s)}>
        {selected ? options.find((o) => o.value === selected)?.label : options[0].label}
        <span className="chev">▾</span>
      </button>

      {open && (
        <div className="custom-select__menu">
          {options.slice(1).map((opt) => (
            <div
              key={opt.value}
              className="custom-select__option"
              onClick={() => {
                setSelected(opt.value)
                setOpen(false)
              }}
              role="button"
              tabIndex={0}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function CountryCodeSelect({ name, required, defaultValue = '+91' }) {
  const options = [
    { value: '+91', label: '+91 India' },
    { value: '+1', label: '+1 USA' },
    { value: '+44', label: '+44 UK' },
    { value: '+61', label: '+61 Australia' },
    { value: '+81', label: '+81 Japan' },
    { value: '+49', label: '+49 Germany' },
    { value: '+33', label: '+33 France' },
    { value: '+39', label: '+39 Italy' },
    { value: '+55', label: '+55 Brazil' },
    { value: '+27', label: '+27 South Africa' },
    { value: '+65', label: '+65 Singapore' },
    { value: '+86', label: '+86 China' },
    { value: '+971', label: '+971 UAE' },
    { value: '+966', label: '+966 KSA' },
    { value: '+7', label: '+7 Russia' },
  ]

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(defaultValue)
  const wrapRef = useRef(null)

  useEffect(() => {
    function onDoc(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className={`custom-select custom-select--country ${open ? 'open' : ''}`} ref={wrapRef}>
      <input type="hidden" name={name} value={selected} required={required} />
      <button type="button" className="custom-select__control" onClick={() => setOpen((s) => !s)}>
        {options.find((o) => o.value === selected)?.label || options[0].label}
        <span className="chev">▾</span>
      </button>
      {open && (
        <div className="custom-select__menu">
          {options.map((opt) => (
            <div
              key={opt.value}
              className="custom-select__option"
              onClick={() => {
                setSelected(opt.value)
                setOpen(false)
              }}
              role="button"
              tabIndex={0}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
