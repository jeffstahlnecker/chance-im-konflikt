module.exports = {
  siteMetadata: {
    description: `A Gatsby starter with Sass and no assumptions`,
    lang: 'en',
    siteType: 'website', // https://ogp.me/#types
    siteUrl: 'https://gatsby-starter-zurg.netlify.com/',
    title: 'Zurgbot Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['300', '400', '500'],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        //formats: ['woff2', 'woff'],
        //useMinify: true,
        //usePreload: true,
        //usePreconnect: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Zurgbot Gatsby Starter',
        short_name: 'Zurgbot Gatsby Starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/assets/images/zurg-icon.svg',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
  ],
};
