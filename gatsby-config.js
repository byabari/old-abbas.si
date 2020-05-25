module.exports = {
  siteMetadata: {
      title: `Bari Abbassi`,
      author: `Bari Abbassi`,
      email: `bari@abbas.si`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`700`, `900`],
          },
        ],
      },
    }
  ]
}
