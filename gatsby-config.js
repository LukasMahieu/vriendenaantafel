module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
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
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `52415216061`,
      }
    },
  ]
};
