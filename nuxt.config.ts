import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,

  app: {
    htmlAttrs: { lang: 'th' },
    head: {
      meta: [
        { name: 'theme-color', content: '#CD7328' },
      ],
    },
  },

  site: {
    url: 'https://x.pages.dev',
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: { drop_console: true },
      },
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
    'nuxt-delay-hydration',
  ],

  content: {
    build: {
      markdown: {
        toc: { depth: 3 },
        highlight: false,
      },
    },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      failOnError: false,
      routes: ['/', '/products', '/about', '/contact', '/service', '/how-to-buy'],
    },
    routeRules: {
      '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    },
  },

  experimental: {
    payloadExtraction: true,
    inlineRouteRules: true,
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dixuugvyv/image/fetch/',
    },
    format: ['webp'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  fonts: {
    families: [
      { name: 'Mitr', weights: [300, 400, 700] },
    ],
    defaults: {
      preload: true,
    },
  },

  icon: {
    serverBundle: 'auto',
  },

  delayHydration: {
    mode: 'init',
  },

  runtimeConfig: {
    dbHost: '',
    dbPort: '',
    dbUser: '',
    dbPassword: '',
    dbName: '',
    lineChannelId: '',
    lineChannelSecret: '',
    lineCallbackUrl: '',
    public: {
      cloudinaryBaseUrl: 'https://res.cloudinary.com/dixuugvyv/image/fetch/',
    },
  },
})
