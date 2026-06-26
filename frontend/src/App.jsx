import { useEffect } from 'react'
import logo from './assets/reachstrategies-logo.svg'
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

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#home" className="brand-link">
          <img src={logo} alt="reachstrategies logo" className="brand-logo" />
          <span className="brand-text">reachstrategies</span>
        </a>
        <nav className="topnav">
          <a href="#services" className="topnav-link">Services</a>
          <a href="#work" className="topnav-link">Our Work</a>
          <a href="#team" className="topnav-link">Team</a>
          <a href="#faq" className="topnav-link">FAQ</a>
          <a href="#contact" className="topnav-cta">Book a Call</a>
        </nav>
      </header>

      <main className="site-shell">
        <section id="home" className="hero panel scroll-panel">
          <div className="hero-copy">
            <span className="eyebrow">Digital Growth, Bold Impact</span>
            <h1>Boost your brand with sharp strategies that win attention.</h1>
            <p>
              reachstrategies builds high-converting digital campaigns, modern web
              experiences, and bold brand systems that move revenue and loyalty.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button primary">Start Your Strategy</a>
              <a href="#services" className="button secondary">Explore Services</a>
            </div>
            <div className="hero-badges">
              <span>13+ years of digital marketing</span>
              <span>1500+ successful campaigns</span>
              <span>30+ industries served</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-panel">
              <div className="hero-tag">Digital Marketing</div>
              <h2>Performance campaigns with measurable ROI.</h2>
              <p>
                We combine paid media, SEO, content, and design to deliver fast
                growth for ambitious brands in every sector.
              </p>
            </div>
          </div>
        </section>

        <section className="intro panel scroll-panel">
          <div className="section-heading">
            <span>Custom Digital Marketing Strategies</span>
            <h2>We create campaigns designed for every business.</h2>
          </div>
          <div className="intro-grid">
            <div className="intro-card">
              <h3>Brand-led strategy</h3>
              <p>
                A strong marketing story, creative direction, and growth plan
                built around your audience and revenue goals.
              </p>
            </div>
            <div className="intro-card">
              <h3>Data-driven execution</h3>
              <p>
                Paid media, social, search, and web systems optimized with real
                performance data.
              </p>
            </div>
            <div className="intro-card">
              <h3>Consistent growth</h3>
              <p>
                Platforms, funnels, and messaging working together to increase
                visibility, leads, and conversions.
              </p>
            </div>
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

        <section className="stats panel scroll-panel">
          <div className="stats-grid">
            <div className="stat-item">
              <strong>13+</strong>
              <span>Years delivering digital strategy</span>
            </div>
            <div className="stat-item">
              <strong>1500+</strong>
              <span>Campaigns launched</span>
            </div>
            <div className="stat-item">
              <strong>30+</strong>
              <span>Industries supported</span>
            </div>
            <div className="stat-item">
              <strong>84%</strong>
              <span>Average conversion lift</span>
            </div>
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
              <div className="avatar avatar-1">RS</div>
              <h3>Rohit Sharma</h3>
              <p>Marketing strategist</p>
            </div>
            <div className="team-card">
              <div className="avatar avatar-2">RK</div>
              <h3>Karina Khan</h3>
              <p>Creative director</p>
            </div>
            <div className="team-card">
              <div className="avatar avatar-3">MS</div>
              <h3>Maya Singh</h3>
              <p>Growth specialist</p>
            </div>
          </div>
        </section>

        <section className="testimonials panel scroll-panel">
          <div className="section-heading">
            <span>Our Clients Speak</span>
            <h2>Trusted by businesses that want more visibility.</h2>
          </div>
          <div className="quote-grid">
            <article className="quote-card">
              <p>
                “reachstrategies helped us scale with confidence — their team
                delivered the messaging, website, and campaigns we needed.”
              </p>
              <strong>Priya Goswami</strong>
              <span>Founder, Growth Labs</span>
            </article>
            <article className="quote-card">
              <p>
                “The results were immediate. We saw stronger traffic and higher
                lead quality within weeks.”
              </p>
              <strong>Rohan Mehta</strong>
              <span>CEO, Retailworks</span>
            </article>
            <article className="quote-card">
              <p>
                “A full-service partner that made our brand more competitive and
                modern.”
              </p>
              <strong>Neha Kapoor</strong>
              <span>Marketing Head, Elevate Tech</span>
            </article>
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
          </div>
        </section>

        <section id="contact" className="contact panel scroll-panel">
          <div className="contact-card">
            <div>
              <span>Let's start your digital journey</span>
              <h2>Ready to grow your brand with reachstrategies?</h2>
              <p>
                Send a message and we'll design a plan that fits your goals,
                budget, and timeline.
              </p>
            </div>
            <a href="mailto:hello@reachstrategies.com" className="button primary contact-button">
              hello@reachstrategies.com
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
