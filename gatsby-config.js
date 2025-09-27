module.exports = {
  siteMetadata: {
    title: "Aan Tafel",
    description: "Lokaal koken met veel groenten. Ontdek onze culinaire diensten: kok aan huis, dineren in ons keukenatelier, workshops en catering op maat in Mechelen.",
    siteUrl: "https://www.aantafel.be",
    image: "/images/og-image.jpg",
    instagramUsername: "@vriendenaantafel"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-decap-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
  ]
};
