const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/websiteTesting/'
  }
} : {}


export default {
  mode: 'universal',
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: "Make It Blink - Kevin Jonathan" || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Kevin Jonathan's Blog" || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap" }
    ],
    script: [
      { src:'https://use.fontawesome.com/releases/v5.13.0/js/all.js' },
      { src:'js/wow.js' },
      { src:'js/function.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: {
  color: 'orange',
  height: '0.25rem',
  throttle: 0
},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css',
    '~/assets/css/animate.compat.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
