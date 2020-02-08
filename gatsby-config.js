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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `erins-hair-salon-gatsby`,
        short_name: `erin`,
        start_url: `/`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Merriweather:400,300,300italic,400italic,700,700italic', 'Merriweather+Sans:400,700']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-17959054-1",
      },
    },
  ],
}
