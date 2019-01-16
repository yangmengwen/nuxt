const pkg = require('./package')

module.exports = {
  //mode: 'universal',//这里可以改成spa单页面应用 mode:'spa'
  mode: ['@nuxtjs/axios','@nuxtjs/proxy'],
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
   {src: '~/plugins/sort.js', ssr:true},
   {src: '~/plugins/elementUI.js', ssr:true},
   {src: '~/plugins/sort.js', ssr:true}
  ],

  /*
  ** Nuxt.js modules
  */
  // modules: [
  //   '@nuxtjs/axios'
  // ],
  axios: {
    proxy:true,
    prefix: '/api',
    credentials: true
  },
  proxy: [
    ['/api',{
      target:'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {'^/api/': '/'}
    }],
    ['/images',{target:'http://localhost:3000'}],//将图片代理到本地

  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },
    //vendor: ['~/plugins/axios.js','~/plugins/elementUI.js'],
    vendor: ['element-ui'],
    
  }
}
