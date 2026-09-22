import { useEffect, useState, useRef } from 'react'
import { Link } from '../router.jsx'
import SEOHead from '../components/SEOHead.jsx'
import heroImage from '../assets/hero.webp'
import featureFlow from '../assets/feature-flow.png'
import featureInsight from '../assets/feature-insight.png'
import featureLaunch from '../assets/feature-launch.png'
import contactImage from '../assets/contact.webp'

export default function HomePage() {
  useEffect(() => {
    const panels = document.querySelectorAll('.scroll-panel')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    panels.forEach((panel) => {
      const rect = panel.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        panel.classList.add('active')
      }
      observer.observe(panel)
    })
    return () => panels.forEach((panel) => observer.unobserve(panel))
  }, [])

  const homepageFaqs = [
    {
      question: 'What services does Reach Strategies offer in Hyderabad?',
      answer: 'We provide end-to-end digital marketing and web solutions: SEO, AI Search Optimization (GEO), Google Ads PPC management, B2B lead generation funnels, custom web development, e-commerce storefronts, and brand identity design.'
    },
    {
      question: 'How do you measure campaign ROI and lead results?',
      answer: 'We track closed-loop revenue attribution, qualified inbound pipeline (MQL/SQL), cost-per-lead, organic entity visibility, and conversion rates through custom Google Analytics 4 and CRM integrations.'
    },
    {
      question: 'Can you support B2B SaaS and high-growth startups?',
      answer: 'Yes. We partner with B2B SaaS, enterprise cloud platforms, healthcare networks, luxury real estate developers, and D2C brands across Hyderabad and international markets.'
    },
    {
      question: 'What makes your marketing approach different?',
      answer: 'We combine traditional search performance with Generative Engine Optimization (GEO). We ensure your brand is not only visible on Google and Bing but also synthesized and recommended by AI engines like ChatGPT Search and Perplexity.'
    }
  ]

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: homepageFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <>
      <SEOHead
        title="Reach Strategies | Best Digital Marketing & Web Solutions Agency Hyderabad"
        description="Reach Strategies is Hyderabad's premier digital marketing and web solutions agency specializing in SEO, AI search optimization (GEO), Google Ads, and custom web development."
        canonicalUrl="https://reachstrategies.in/"
        schemaData={faqSchema}
      />

      <main className="site-shell">
        {/* Hero Section */}
        <section id="home" className="hero panel scroll-panel active">
          <div className="hero-copy">
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
              <img src={heroImage} alt="Reach Strategies Digital Marketing Agency Hyderabad" className="hero-image" width="480" height="518" />
              <div className="hero-image-glow" />
              <div className="hero-image-dots" />
            </div>
          </div>
        </section>

        {/* What's New Section */}
        <section id="about" className="whats-new panel scroll-panel">
          <div className="section-heading">
            <span>What's new?</span>
            <h2>Faster workflows, clearer insights, launch-ready assets.</h2>
          </div>

          <div className="cards-grid">
            <article className="feature-card">
              <div className="feature-art feature-image">
                <img src={featureFlow} alt="Faster workflows digital marketing framework" width="400" height="225" />
              </div>
              <h3>Faster workflows</h3>
            </article>

            <article className="feature-card">
              <div className="feature-art feature-image">
                <img src={featureInsight} alt="Clearer data insights and telemetry" width="400" height="225" />
              </div>
              <h3>Clearer insights</h3>
            </article>

            <article className="feature-card">
              <div className="feature-art feature-image">
                <img src={featureLaunch} alt="Launch-ready high conversion assets" width="400" height="225" />
              </div>
              <h3>Launch-ready assets</h3>
            </article>
          </div>
        </section>

        {/* Services Section with Direct Links to Dedicated Pages */}
        <section id="services" className="services panel scroll-panel">
          <div className="section-heading">
            <span>Services</span>
            <h2>Marketing, web, and branding for high-growth companies.</h2>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <div>
                <div className="service-eyebrow">Digital Marketing</div>
                <h3>Campaigns that convert and scale.</h3>
                <p>
                  Paid media, high-intent SEO, AI search discovery (GEO), and conversion optimization
                  built into one performance engine.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                <Link href="/services/seo/" className="service-link">Explore SEO Services</Link>
                <Link href="/services/ai-seo/" className="service-link">AI SEO & GEO Optimization</Link>
                <Link href="/services/google-ads/" className="service-link">Google Ads & PPC</Link>
              </div>
            </article>

            <article className="service-card">
              <div>
                <div className="service-eyebrow">Web Solutions</div>
                <h3>Engineering for modern digital brands.</h3>
                <p>
                  Bespoke websites, high-speed headless stores, and digital landing pages designed for
                  sub-second load speeds and measurable pipeline.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                <Link href="/services/web-development/" className="service-link">Custom Web Development</Link>
                <Link href="/services/ecommerce-development/" className="service-link">E-Commerce Development</Link>
                <Link href="/services/lead-generation/" className="service-link">Lead Generation Funnels</Link>
              </div>
            </article>

            <article className="service-card">
              <div>
                <div className="service-eyebrow">Branding</div>
                <h3>Identity work that feels memorable.</h3>
                <p>
                  Creative brand direction, messaging hierarchies, and visual design systems that make
                  your business stand out and command premium value.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                <Link href="/services/branding/" className="service-link">Brand Identity & Visuals</Link>
                <Link href="/case-studies/" className="service-link">View Case Studies</Link>
              </div>
            </article>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section id="work" className="work panel scroll-panel">
          <div className="section-heading">
            <span>Case Studies</span>
            <h2>Proven results from real clients.</h2>
          </div>
          <div className="work-grid">
            <article className="work-card">
              <h3>B2B Cloud SaaS Growth</h3>
              <p>
                +184% increase in sales-qualified pipeline for an enterprise cloud platform via technical SEO and AI search optimization.
              </p>
              <Link href="/case-studies/" className="service-link">Read full case study</Link>
            </article>

            <article className="work-card">
              <h3>Specialty Healthcare Domination</h3>
              <p>
                +210% surge in verified patient appointments and top 3 Google Local 3-Pack capture across 18 medical specialties in Hyderabad.
              </p>
              <Link href="/case-studies/" className="service-link">Read full case study</Link>
            </article>

            <article className="work-card">
              <h3>D2C E-Commerce Acceleration</h3>
              <p>
                +285% online store revenue expansion and cart abandonment drop by 31% via custom headless store engineering and 1-click checkout.
              </p>
              <Link href="/case-studies/" className="service-link">Read full case study</Link>
            </article>
          </div>
        </section>

        {/* Team Section */}
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

        {/* FAQ Section */}
        <section id="faq" className="faq panel scroll-panel">
          <div className="section-heading">
            <span>FAQ</span>
            <h2>Common questions about working with us.</h2>
          </div>
          <div className="faq-list">
            {homepageFaqs.map((faq, idx) => (
              <div className="faq-item" key={idx}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact panel scroll-panel">
          <div className="section-heading">
            <span>Contact Us</span>
            <h2>Share your details and the service you need</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-visual-card">
              <img src={contactImage} alt="Reach Strategies Growth Consultation" className="contact-visual-img" width="520" height="780" />
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for reaching out! Our team will contact you within 2 hours.'); }}>
                <label>
                  Full name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>

                <label>
                  Email address
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>

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

                <button type="submit" className="button primary contact-submit">
                  Submit request
                  <span className="button-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function ServiceSelect({ name, required }) {
  const options = [
    { value: '', label: 'Select a service' },
    { value: 'seo', label: 'Search Engine Optimization (SEO)' },
    { value: 'ai-seo', label: 'AI SEO & Generative Engine Optimization (GEO)' },
    { value: 'google-ads', label: 'Google Ads & PPC Management' },
    { value: 'lead-generation', label: 'Lead Generation' },
    { value: 'web-development', label: 'Custom Web Development' },
    { value: 'ecommerce', label: 'E-Commerce Website Development' },
    { value: 'branding', label: 'Brand Identity & Visuals' },
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
        <span>{selected || '+91'}</span>
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
