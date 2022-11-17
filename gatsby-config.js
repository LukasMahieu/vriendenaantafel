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
        access_token: 'IGQVJWZAkpZAZAXB1UW9lNnpTRWJKbjBPLXdsbktlQVJJRnB3aEl3d2pnQk1LdHRXOVhua005ZAXJHNmNfQkV3VWI0LWdiNTkwcmVWSWJlNGNzdjNaeGlidVFGaTFrWHh2c2dHaDF2aV9kZAEZAWclIwdFQ4VgZDZD',
        instagram_id: '52415216061',
      }
    },
  ]
};
