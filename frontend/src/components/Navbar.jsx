import { useState, useEffect, useRef } from 'react'
import { Link, useRouter } from '../router.jsx'
import brandSymbol from '../assets/brand-symbol.png'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { path } = useRouter()

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
    <header className="topbar">
      <Link href="/" className="brand-link" aria-label="Reach Strategies Home" onClick={closeMobile}>
        <img src={brandSymbol} alt="Reach Strategies Logo" className="brand-logo" width="170" height="42" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="topnav desktop-nav" aria-label="Primary Navigation">
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
                  <Link href="/services/seo/" className="services-item" onClick={() => setDropdownOpen(false)}>
                    <span className="item-text">SEO Agency Hyderabad</span>
                    <span className="item-arrow">→</span>
                  </Link>
                  <Link href="/services/ai-seo/" className="services-item" onClick={() => setDropdownOpen(false)}>
                    <span className="item-text">AI SEO & GEO Services</span>
                    <span className="item-arrow">→</span>
                  </Link>
                  <Link href="/services/google-ads/" className="services-item" onClick={() => setDropdownOpen(false)}>
                    <span className="item-text">Google Ads & PPC</span>
                    <span className="item-arrow">→</span>
                  </Link>
                  <Link href="/services/lead-generation/" className="services-item" onClick={() => setDropdownOpen(false)}>
                    <span className="item-text">Lead Generation Funnels</span>
                    <span className="item-arrow">→</span>
                  </Link>
                </div>
              </div>

              <div className="services-column">
                <div className="services-group-header">
                  <span className="services-icon-dot"></span>
                  <span className="services-group-title">Web & Branding</span>
                </div>
                <div className="services-list">
                  <Link href="/services/web-development/" className="services-item" onClick={() => setDropdownOpen(false)}>
                    <span className="item-text">Custom Web Development</span>
                    <span className="item-arrow">→</span>
                  </Link>
                  <Link href="/services/ecommerce-development/" className="services-item" onClick={() => setDropdownOpen(false)}>
                    <span className="item-text">E-Commerce Development</span>
                    <span className="item-arrow">→</span>
                  </Link>
                  <Link href="/services/branding/" className="services-item" onClick={() => setDropdownOpen(false)}>
                    <span className="item-text">Brand Identity Design</span>
                    <span className="item-arrow">→</span>
                  </Link>
                </div>

                <div className="services-cta-box">
                  <p className="services-cta-title">Need a custom enterprise growth plan?</p>
                  <Link href="#contact" className="services-cta-btn" onClick={() => setDropdownOpen(false)}>
                    Book Strategy Session →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link href="/ai-seo-guide/" className={`topnav-link ${path.startsWith('/ai-seo-guide') ? 'active' : ''}`}>
          AI SEO Hub
        </Link>
        <Link href="/case-studies/" className={`topnav-link ${path.startsWith('/case-studies') ? 'active' : ''}`}>
          Case Studies
        </Link>
        <Link href="#about" className="topnav-link">
          About
        </Link>
        <Link href="#faq" className="topnav-link">
          FAQ
        </Link>
        <Link href="#contact" className="topnav-link">
          Contact
        </Link>
        <Link href="#contact" className="topnav-cta-btn">
          Book a Call
        </Link>
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
                  <Link href="/services/seo/" className="mobile-sublink" onClick={closeMobile}>SEO Agency Hyderabad</Link>
                  <Link href="/services/ai-seo/" className="mobile-sublink" onClick={closeMobile}>AI SEO & GEO Services</Link>
                  <Link href="/services/google-ads/" className="mobile-sublink" onClick={closeMobile}>Google Ads & PPC</Link>
                  <Link href="/services/lead-generation/" className="mobile-sublink" onClick={closeMobile}>Lead Generation Funnels</Link>
                </div>

                <div className="mobile-services-group">
                  <span className="mobile-group-title">Web & Branding</span>
                  <Link href="/services/web-development/" className="mobile-sublink" onClick={closeMobile}>Custom Web Development</Link>
                  <Link href="/services/ecommerce-development/" className="mobile-sublink" onClick={closeMobile}>E-Commerce Development</Link>
                  <Link href="/services/branding/" className="mobile-sublink" onClick={closeMobile}>Brand Identity Design</Link>
                </div>
              </div>
            </div>

            <Link href="/ai-seo-guide/" className="mobile-nav-link" onClick={closeMobile}>AI SEO & GEO Hub</Link>
            <Link href="/case-studies/" className="mobile-nav-link" onClick={closeMobile}>Client Case Studies</Link>
            <Link href="#about" className="mobile-nav-link" onClick={closeMobile}>About Us</Link>
            <Link href="#faq" className="mobile-nav-link" onClick={closeMobile}>FAQ</Link>
            <Link href="#contact" className="mobile-nav-link" onClick={closeMobile}>Contact Us</Link>
          </div>

          <div className="mobile-nav-footer">
            <Link href="#contact" className="button primary mobile-cta" onClick={closeMobile}>
              Book a Call
              <span className="button-arrow">→</span>
            </Link>

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
    </header>
  )
}
