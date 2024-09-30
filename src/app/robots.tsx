import type { MetadataRoute } from 'next'
import  websiteConfig from '@/website.config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${websiteConfig.seo.url}/sitemap.xml`
  }
}
