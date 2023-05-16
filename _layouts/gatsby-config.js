module.exports = {
    pathPrefix: `/Knowledge-Base`,
    siteMetadata: {
      title: `Smithed Knowledge Base`,
    },
    plugins: [
      {
        resolve: `gatsby-theme-garden`,
        options: {
          rootNote: "/readme",
          contentPath: `${__dirname}/..`,
          ignore: [
            "**/_layouts/**",
            "**/.git/**",
            "**/.github/**",
            "**/.vscode/**",
          ],
        },
      },
    ],
  };