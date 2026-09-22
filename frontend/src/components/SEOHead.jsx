import { useEffect } from 'react'

export default function SEOHead({
  title = 'Reach Strategies | Best Digital Marketing & Web Solutions Agency Hyderabad',
  description = 'Reach Strategies delivers high-impact digital marketing, AI SEO, Google Ads management, web development, and modern brand strategy in Hyderabad.',
  canonicalUrl = 'https://reachstrategies.in/',
  ogType = 'website',
  ogImage = 'https://reachstrategies.in/og-image.svg',
  schemaData = null,
  breadcrumbs = null
}) {
  useEffect(() => {
    // 1. Set Title
    document.title = title

    // Helper to update or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attrName, attrValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content || '')
    }

    // 2. Primary Meta Tags
    setMetaTag('name', 'description', description)
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
    setMetaTag('name', 'googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')

    // 3. Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', canonicalUrl)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:image', ogImage)
    setMetaTag('property', 'og:site_name', 'Reach Strategies')

    // 5. Twitter Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', ogImage)

    // 6. Dynamic JSON-LD Structured Data
    let schemaScript = document.getElementById('dynamic-schema')
    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.setAttribute('type', 'application/ld+json')
      schemaScript.setAttribute('id', 'dynamic-schema')
      document.head.appendChild(schemaScript)
    }

    // Assemble Graph Schemas
    const schemas = []

    // Base Organization / LocalBusiness
    const organizationSchema = {
      '@type': ['LocalBusiness', 'ProfessionalService', 'Organization'],
      '@id': 'https://reachstrategies.in/#organization',
      name: 'Reach Strategies',
      alternateName: ['Reachstrategies', 'Reach Strategies Hyderabad'],
      url: 'https://reachstrategies.in/',
      logo: 'https://reachstrategies.in/favicon.webp',
      image: 'https://reachstrategies.in/og-image.svg',
      description: 'Reach Strategies is an elite digital marketing, AI SEO, web development, and branding agency based in Hyderabad, India.',
      telephone: '+919491305100',
      email: 'contact@reachstrategies.in',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 17.385044,
        longitude: 78.486671
      },
      areaServed: [
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'State', name: 'Telangana' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'AdministrativeArea', name: 'Worldwide' }
      ],
      sameAs: [
        'https://instagram.com/reach_strategies',
        'https://wa.me/919491305100'
      ]
    }
    schemas.push(organizationSchema)

    // Breadcrumbs Schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbList = {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.url
        }))
      }
      schemas.push(breadcrumbList)
    }

    // Additional Custom Schema (Service, Article, FAQPage, etc.)
    if (schemaData) {
      if (Array.isArray(schemaData)) {
        schemas.push(...schemaData)
      } else {
        schemas.push(schemaData)
      }
    }

    const fullGraph = {
      '@context': 'https://schema.org',
      '@graph': schemas
    }

    schemaScript.textContent = JSON.stringify(fullGraph, null, 2)
  }, [title, description, canonicalUrl, ogType, ogImage, schemaData, breadcrumbs])

  return null
}
