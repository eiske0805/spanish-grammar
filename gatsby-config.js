module.exports = {
  siteMetadata: {
    title: `スペイン語のwebサイト`,
    description: `このwebサイトは、スペイン在住の筆者の、スペイン語学習ノートです。学んだ文法等について、ここに綴っています。書かれている内容は、主に「 DELE B2 」くらいのレベルです。`,
    author: `spanish-grammar`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    social: {
      twitter: `spanish_website`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/articles`,
        name: `articles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `spanish-grammar`,
        short_name: `spanish-grammar`,
        start_url: `/`,
        background_color: `#89A7B7`,
        theme_color: `#89A7B7`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    "gatsby-plugin-mdx",
  ],
}
