require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
     resolve: `gatsby-plugin-scroll-reveal`,
     options: {
         threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
         once: false, // Defines if animation needs to be launched once
         disable: false, // Flag for disabling animations

         // Advanced Options
         selector: '[data-sal]', // Selector of the elements to be animated
         animateClassName: 'sal-animate', // Class name which triggers animation
         disabledClassName: 'sal-disabled', // Class name which defines the disabled state
         rootMargin: '0% 50%' // Corresponds to root's bounding box margin
       },
     },
  ],
}
