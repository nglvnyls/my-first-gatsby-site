module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "NOU TITOL",
    unaAltraCosa: "res de res"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
