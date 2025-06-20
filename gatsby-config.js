module.exports = {
  siteMetadata: {
    title: "Vrienden aan Tafel",
    description: "Ik kom persoonlijk bij u koken in en rond Mechelen voor al uw evenementen. Ontdek onze heerlijke gerechten en persoonlijke service voor uw perfecte event.",
    siteUrl: "https://www.vriendenaantafel.be",
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
