import type { MetadataRoute } from 'next'
import websiteConfig from '@/website.config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: websiteConfig.seo.url,
      lastModified: '2021-01-01',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
