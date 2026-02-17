import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/studio', '/studio/', '/api/', '/private/', '/resume.pdf'],
            },
        ],
        sitemap: 'https://yash-ghodele.pages.dev/sitemap.xml',
        host: 'https://yash-ghodele.pages.dev',
    }
}
