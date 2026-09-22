import { useEffect } from 'react'
import { Link } from '../router.jsx'
import SEOHead from '../components/SEOHead.jsx'
import { servicesData } from '../data/servicesData.js'

export default function ServiceDetailPage({ slug }) {
  const service = servicesData[slug]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!service) {
    return (
      <div className="panel" style={{ textAlign: 'center', padding: '120px 20px' }}>
        <h2>Service Not Found</h2>
        <p style={{ margin: '16px 0 24px', color: '#aaa' }}>The requested service page does not exist or has been relocated.</p>
        <Link href="/" className="button primary">Return to Home</Link>
      </div>
    )
  }

  // Structured Data Schemas
  const serviceSchema = {
    '@type': 'Service',
    '@id': `${service.canonicalUrl}#service`,
    name: service.title,
    serviceType: service.shortTitle,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Reach Strategies',
      url: 'https://reachstrategies.in/'
    },
    areaServed: [
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'AdministrativeArea', name: 'Worldwide' }
    ],
    description: service.metaDescription,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      priceRange: '$$'
    }
  }

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://reachstrategies.in/' },
    { name: 'Services', url: 'https://reachstrategies.in/#services' },
    { name: service.shortTitle, url: service.canonicalUrl }
  ]

  return (
    <>
      <SEOHead
        title={service.title}
        description={service.metaDescription}
        canonicalUrl={service.canonicalUrl}
        breadcrumbs={breadcrumbs}
        schemaData={[serviceSchema, faqSchema]}
      />

      <div className="service-detail-page">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <div className="breadcrumb-container">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/#services" className="breadcrumb-link">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current" aria-current="page">{service.shortTitle}</span>
          </div>
        </nav>

        {/* Hero Header */}
        <section className="service-hero">
          <div className="service-hero-content">
            <span className="service-category-badge">{service.category} · Hyderabad & Global</span>
            <h1 className="service-hero-h1">{service.h1}</h1>
            <p className="service-hero-summary">{service.heroSummary}</p>
            <div className="service-hero-actions">
              <a href="#contact-form" className="button primary">
                Request Growth Proposal
                <span className="button-arrow">→</span>
              </a>
              <Link href="/case-studies/" className="button" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', color: '#fff' }}>
                View Client Case Studies
              </Link>
            </div>
          </div>
        </section>

        <div className="service-main-container">
          {/* Overview Section */}
          <section className="service-section">
            <div className="section-heading">
              <span>Overview</span>
              <h2>Strategic Foundation & Approach</h2>
            </div>
            <p className="service-overview-text">{service.overview}</p>
          </section>

          {/* Core Problems We Solve */}
          <section className="service-section">
            <div className="section-heading">
              <span>Challenges Solved</span>
              <h2>Critical Problems We Eliminate</h2>
            </div>
            <div className="problems-grid">
              {service.problemsSolved.map((prob, idx) => (
                <div className="problem-card" key={idx}>
                  <div className="problem-icon">✕</div>
                  <p>{prob}</p>
                </div>
              ))}
            </div>
          </section>

          {/* End-to-End Roadmap Process */}
          <section className="service-section">
            <div className="section-heading">
              <span>Methodology</span>
              <h2>Our Proven 5-Stage Execution Framework</h2>
            </div>
            <div className="process-roadmap">
              {service.process.map((step, idx) => (
                <div className="roadmap-step" key={idx}>
                  <div className="step-number">{step.step}</div>
                  <div className="step-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Deliverables & Industries */}
          <div className="deliverables-industries-grid">
            <section className="service-section">
              <div className="section-heading">
                <span>Deliverables</span>
                <h2>What You Receive</h2>
              </div>
              <ul className="deliverables-list">
                {service.deliverables.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="service-section">
              <div className="section-heading">
                <span>Industries Served</span>
                <h2>Sectors We Scale</h2>
              </div>
              <div className="industries-cloud">
                {service.industries.map((ind, idx) => (
                  <span className="industry-pill" key={idx}>{ind}</span>
                ))}
              </div>
            </section>
          </div>

          {/* Frequently Asked Questions */}
          <section className="service-section">
            <div className="section-heading">
              <span>FAQ</span>
              <h2>Direct Answers to Common Inquiries</h2>
            </div>
            <div className="faq-list">
              {service.faqs.map((faq, idx) => (
                <div className="faq-item" key={idx}>
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Services Internal Links */}
          <section className="service-section" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '48px' }}>
            <div className="section-heading">
              <span>Related Services</span>
              <h2>Integrated Growth Capabilities</h2>
            </div>
            <div className="related-services-grid">
              {service.relatedServices.map((relSlug) => {
                const rel = servicesData[relSlug]
                if (!rel) return null
                return (
                  <Link href={`/services/${rel.slug}/`} className="related-service-card" key={rel.slug}>
                    <span className="related-badge">{rel.category}</span>
                    <h3>{rel.shortTitle}</h3>
                    <p>{rel.metaDescription.substring(0, 110)}...</p>
                    <span className="related-link-text">Learn More →</span>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Bottom Consultation Booking Section */}
          <section id="contact-form" className="service-cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to Accelerate Your Brand's Pipeline?</h2>
              <p>
                Schedule a complimentary 30-minute growth consultation with our Hyderabad digital marketing and engineering specialists.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
                <a href="https://wa.me/919491305100" target="_blank" rel="noreferrer" className="button primary">
                  Chat Instantly on WhatsApp →
                </a>
                <Link href="/#contact" className="button" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff' }}>
                  Submit Inquiry Form
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
