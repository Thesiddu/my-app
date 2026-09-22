import { useEffect } from 'react'
import { Link } from '../router.jsx'
import SEOHead from '../components/SEOHead.jsx'
import { caseStudiesData } from '../data/caseStudiesData.js'

export default function CaseStudiesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const breadcrumbs = [
    { name: 'Home', url: 'https://reachstrategies.in/' },
    { name: 'Case Studies', url: 'https://reachstrategies.in/case-studies/' }
  ]

  const caseStudiesSchema = caseStudiesData.map((study) => ({
    '@type': 'CreativeWork',
    name: study.title,
    headline: study.title,
    about: study.industry,
    author: {
      '@type': 'Organization',
      name: 'Reach Strategies'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reach Strategies',
      logo: 'https://reachstrategies.in/favicon.webp'
    },
    description: study.summary
  }))

  return (
    <>
      <SEOHead
        title="Client Case Studies & Quantified Results | Reach Strategies Hyderabad"
        description="Explore real-world client case studies by Reach Strategies. Verifiable revenue growth, pipeline acceleration, local SEO domination, and e-commerce scale."
        canonicalUrl="https://reachstrategies.in/case-studies/"
        breadcrumbs={breadcrumbs}
        schemaData={caseStudiesSchema}
      />

      <div className="case-studies-page">
        {/* Breadcrumbs */}
        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <div className="breadcrumb-container">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current" aria-current="page">Case Studies</span>
          </div>
        </nav>

        {/* Hero Header */}
        <header className="page-header-banner">
          <span className="service-category-badge">Real Client Results · Verifiable ROI</span>
          <h1 className="page-header-h1">Proven Strategies. Quantified Business Impact.</h1>
          <p className="page-header-sub">
            Discover how Reach Strategies partners with forward-thinking enterprises, healthcare networks, and D2C brands to engineer sustainable organic pipeline and revenue growth.
          </p>
        </header>

        {/* Case Studies List */}
        <main className="case-studies-container">
          {caseStudiesData.map((study) => (
            <article className="detailed-case-card" key={study.id} id={study.id}>
              <div className="case-card-header">
                <div className="case-badge-row">
                  <span className="case-industry-tag">{study.industry}</span>
                  <span className="case-timeline-tag">Timeline: {study.timeline}</span>
                  <span className="case-location-tag">{study.location}</span>
                </div>
                <h2>{study.title}</h2>
                <p className="case-summary-lead">{study.summary}</p>

                {/* Metrics Banner */}
                <div className="case-metrics-grid">
                  {study.metrics.map((metric, mIdx) => (
                    <div className="metric-box" key={mIdx}>
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="case-card-body">
                <div className="case-body-col">
                  <h3>The Business Challenge</h3>
                  <p>{study.challenge}</p>

                  <h3 style={{ marginTop: '28px' }}>Strategic Solution</h3>
                  <ul className="case-list">
                    {study.strategy.map((item, sIdx) => (
                      <li key={sIdx}>
                        <span className="case-bullet">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="case-body-col">
                  <h3>Execution & Technology</h3>
                  <ul className="case-list">
                    {study.execution.map((item, eIdx) => (
                      <li key={eIdx}>
                        <span className="case-bullet">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ marginTop: '28px' }}>Quantified Business Results</h3>
                  <p>{study.results}</p>

                  <div className="case-learning-box">
                    <strong>Key Strategic Takeaway:</strong>
                    <p>{study.keyLearnings}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Bottom Consultation Banner */}
          <section className="service-cta-banner" style={{ marginTop: '48px' }}>
            <div className="cta-banner-content">
              <h2>Ready to Engineer Your Own Success Story?</h2>
              <p>
                Partner with Reach Strategies to craft a performance marketing, AI search, and web strategy tailored to your exact business objectives.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
                <Link href="/#contact" className="button primary">
                  Schedule Strategy Call →
                </Link>
                <a href="https://wa.me/919491305100" target="_blank" rel="noreferrer" className="button" style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', color: '#25D366' }}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
