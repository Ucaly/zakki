module.exports = {
    siteMetadata: {
        title: `日々雑記帳`,
        description: `自分が忘れないために記録するメモ集です`
    },
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `content`
            }
        }
    ]
}