export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'booking',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type:'text/css', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  server: {
    host: '0.0.0.0'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'purple-dark' : '#3C3789',
            'purple-light' : '#413C91',
            'purple-three': '#762F79',
            'orenji': '#EF4300'

          },
          height: {
            'top': '42px'
          },
          fontFamily: {
            'title': 'Poppins'
          },
          fontSize: {
            'title': '42px'
          }
        },
        fontFamily: {
          'sans': 'Poppins'
        }
      }
    }
  }
}
