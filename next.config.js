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

module.exports = nextConfig
