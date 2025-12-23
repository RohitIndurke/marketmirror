import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MarketMirror',
        short_name: 'MarketMirror',
        description: 'Track Markets in Real Time, Trade Smarter Invest Better.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/marketMirrorLogo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/marketMirrorLogo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
