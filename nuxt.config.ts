export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-icon'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        {
          type: 'module',
          src: 'https://widget.wantag.com/widget.js',
          crossorigin: true,
          'data-project-id': '3',
        },
      ],
    },
  },
})
