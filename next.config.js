/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
css: [
  '@fortawesome/fontawesome-svg-core/styles.css'
]

plugins: [
  '~/plugins/fontawesome.js'
]

buildModules: [
  '@nuxtjs/style-resources',
  '@nuxtjs/fontawesome'
]

fontawesome: {
  icons: {
    solid: true
  }
}

module.exports = nextConfig
