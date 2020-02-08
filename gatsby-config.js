module.exports = {
  pathPrefix: `/erins-hair-salon-gatsby`,
  siteMetadata: {
    title: `Erin Webster | Hair Salon North Dallas`,
    description: `Hair styles for all occasions by Erin Webster. By appointment only. 972-567-7379.`,
    author: `@claytoncollie`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Merriweather:400,300,300italic,400italic,700,700italic', 'Merriweather+Sans:400,700']
        }
      }
    },
  ],
}
