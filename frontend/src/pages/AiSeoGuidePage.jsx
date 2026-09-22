import { useEffect } from 'react'
import { Link } from '../router.jsx'
import SEOHead from '../components/SEOHead.jsx'
import { aiSeoKnowledgeHub } from '../data/aiSeoData.js'

export default function AiSeoGuidePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const breadcrumbs = [
    { name: 'Home', url: 'https://reachstrategies.in/' },
    { name: 'AI SEO & GEO Guide', url: 'https://reachstrategies.in/ai-seo-guide/' }
  ]

  const articleSchema = {
    '@type': 'TechArticle',
    headline: aiSeoKnowledgeHub.title,
    name: aiSeoKnowledgeHub.h1,
    description: aiSeoKnowledgeHub.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'Reach Strategies'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reach Strategies',
      logo: 'https://reachstrategies.in/favicon.webp'
    },
    datePublished: '2026-08-19',
    dateModified: aiSeoKnowledgeHub.lastUpdated,
    mainEntityOfPage: aiSeoKnowledgeHub.canonicalUrl
  }

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: aiSeoKnowledgeHub.qaSections.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${item.directAnswer} ${item.explanation}`
      }
    }))
  }

  return (
    <>
      <SEOHead
        title={aiSeoKnowledgeHub.title}
        description={aiSeoKnowledgeHub.metaDescription}
        canonicalUrl={aiSeoKnowledgeHub.canonicalUrl}
        breadcrumbs={breadcrumbs}
        schemaData={[articleSchema, faqSchema]}
      />

      <div className="ai-seo-page">
        {/* Breadcrumbs */}
        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <div className="breadcrumb-container">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current" aria-current="page">AI Search & GEO Guide</span>
          </div>
        </nav>

        {/* Hero Header */}
        <header className="page-header-banner">
          <span className="service-category-badge">Generative Engine Optimization (GEO) · AI Search Architecture</span>
          <h1 className="page-header-h1">{aiSeoKnowledgeHub.h1}</h1>
          <p className="page-header-sub">
            {aiSeoKnowledgeHub.overview}
          </p>
        </header>

        <main className="ai-seo-container">
          {/* Core GEO Pillars */}
          <section className="service-section">
            <div className="section-heading">
              <span>Foundations</span>
              <h2>Four Core Pillars of Generative Engine Optimization</h2>
            </div>
            <div className="geo-pillars-grid">
              {aiSeoKnowledgeHub.corePrinciples.map((pillar, idx) => (
                <div className="geo-pillar-card" key={idx}>
                  <div className="pillar-num">0{idx + 1}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Direct Q&A Question Clusters */}
          <section className="service-section">
            <div className="section-heading">
              <span>Knowledge Clusters</span>
              <h2>Authoritative Answers to Critical Search Queries</h2>
            </div>

            <div className="qa-cluster-list">
              {aiSeoKnowledgeHub.qaSections.map((qa) => (
                <article className="qa-block-card" key={qa.id} id={qa.id}>
                  <div className="qa-header">
                    <span className="qa-badge">Verified Expert Answer</span>
                    <h2 className="qa-question">{qa.question}</h2>
                  </div>

                  {/* Direct Snippet */}
                  <div className="qa-direct-box">
                    <div className="direct-label">
                      <span className="direct-dot" />
                      Direct Fact Summary (AI Citable Snippet)
                    </div>
                    <p className="direct-answer-text">{qa.directAnswer}</p>
                  </div>

                  {/* In-Depth Explanation */}
                  <div className="qa-detail-body">
                    <h3>Strategic In-Depth Breakdown</h3>
                    <p>{qa.explanation}</p>
                  </div>

                  {/* Empirical Proof / Evidence */}
                  <div className="qa-evidence-box">
                    <div className="evidence-label">Empirical Industry Evidence & Benchmark Data:</div>
                    <p>{qa.evidence}</p>
                  </div>

                  {/* Action CTA */}
                  <div className="qa-footer-action">
                    <Link href="/#contact" className="service-link">
                      {qa.ctaText} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom Consultation Banner */}
          <section className="service-cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to Prepare Your Brand for the AI-First Era?</h2>
              <p>
                Schedule an executive AI Search & GEO audit with Reach Strategies to assess your brand citations across ChatGPT, Perplexity, and Google AI Overviews.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
                <Link href="/#contact" className="button primary">
                  Book an AI Search Audit →
                </Link>
                <Link href="/services/ai-seo/" className="button" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff' }}>
                  Explore AI SEO Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
