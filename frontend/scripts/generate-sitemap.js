import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const currentDate = new Date().toISOString().split('T')[0]

const routes = [
  {
    path: '',
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    path: 'services/seo/',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: 'services/ai-seo/',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: 'services/google-ads/',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: 'services/lead-generation/',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: 'services/web-development/',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: 'services/ecommerce-development/',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: 'services/branding/',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: 'case-studies/',
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    path: 'ai-seo-guide/',
    changefreq: 'weekly',
    priority: '0.8'
  }
]

const baseUrl = 'https://reachstrategies.in/'

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const publicDir = path.resolve(__dirname, '../public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

const sitemapPath = path.join(publicDir, 'sitemap.xml')
fs.writeFileSync(sitemapPath, sitemapXml, 'utf8')

console.log(`[SEO] Generated valid sitemap with ${routes.length} canonical URLs at ${sitemapPath}`)
