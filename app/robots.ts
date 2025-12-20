import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://yash-ghodele.pages.dev/sitemap.xml',
        host: 'https://yash-ghodele.pages.dev',
    }
}
