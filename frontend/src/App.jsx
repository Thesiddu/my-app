import { Router, useRouter } from './router.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage.jsx'
import CaseStudiesPage from './pages/CaseStudiesPage.jsx'
import AiSeoGuidePage from './pages/AiSeoGuidePage.jsx'
import './App.css'

function AppContent() {
  const { path } = useRouter()

  // Clean trailing slash for matching
  const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path

  // Route matching logic
  let PageComponent = <HomePage />

  if (normalizedPath.startsWith('/services/')) {
    const slug = normalizedPath.replace('/services/', '').split('/')[0]
    PageComponent = <ServiceDetailPage slug={slug} />
  } else if (normalizedPath === '/case-studies') {
    PageComponent = <CaseStudiesPage />
  } else if (normalizedPath === '/ai-seo-guide') {
    PageComponent = <AiSeoGuidePage />
  } else {
    PageComponent = <HomePage />
  }

  return (
    <div className="page-shell">
      <Navbar />
      {PageComponent}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="floating-actions" aria-label="Quick Contact Actions">
        <a className="fab fab-whatsapp" href="https://wa.me/919491305100" target="_blank" rel="noreferrer" aria-label="Contact us on WhatsApp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 .001 5.373.001 12a11.84 11.84 0 0 0 1.61 6.04L0 24l6.16-1.59A11.88 11.88 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.19-1.24-6.18-3.48-8.52z" fill="#25D366"/>
            <path d="M17.39 14.62c-.36-.18-2.12-1.05-2.45-1.17-.33-.12-.57-.18-.81.18s-.93 1.17-1.14 1.41c-.21.24-.42.27-.78.09-.36-.18-1.51-.56-2.87-1.77-1.06-.95-1.77-2.12-1.98-2.48-.21-.36-.02-.55.16-.73.17-.17.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24 0-.45-.06-.63-.06-.18-.81-1.96-1.11-2.68-.29-.7-.58-.6-.81-.6-.21 0-.45 0-.69 0-.24 0-.63.09-.96.45-.33.36-1.25 1.22-1.25 2.96 0 1.74 1.28 3.42 1.45 3.66.18.24 2.51 3.83 6.08 5.37 3.56 1.54 3.56 1.03 4.2.96.64-.06 2.06-.84 2.35-1.66.29-.83.29-1.54.2-1.69-.09-.15-.33-.24-.69-.42z" fill="#fff"/>
          </svg>
        </a>

        <a className="fab fab-instagram" href="https://instagram.com/reach_strategies" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">
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

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
