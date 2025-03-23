import type {MetadataRoute} from 'next'

export default  function manifest():MetadataRoute.Manifest{
    return{
        name: 'notifiy',
        short_name: 'notifiy',
        description: 'lorem ipsum',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffff',
        theme_color: '#0000',
        icons:[
            {
                src: '/icon92.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/icon512.png',
                sizes: '512x512',
                type: 'image/png'
            },
        ]
    }
}