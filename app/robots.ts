import { WEBSITE_HOST_URL } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${WEBSITE_HOST_URL}/sitemap.xml`,
    };
}
