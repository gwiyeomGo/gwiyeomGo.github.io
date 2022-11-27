require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.js
    siteTitle: `GwiyeomGo Tech Blog`,
    siteTitleAlt: `GwiyeomGo Tech Blog`,
    siteHeadline: `GwiyeomGo Tech Blog`,
    siteUrl: `https://gwiyeomgo.github.io`,
    siteDescription: `gwiyeomgo-blog`,
    siteImage: `/banner.jpg`,
    author: `GwiyeomGo`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: "https://img.shields.io/badge/DESIGN_PATTERN-0DBD8B?style=for-the-badge",
            slug: `/tags/design-pattern`,
          },
          {
            title: "https://img.shields.io/badge/GIT-%2300843e.svg?style=for-the-badge&logo=github&logoColor=white",
            slug: `/tags/git`,
          },
          {
            title: "https://img.shields.io/badge/GOLANG-00ADD8?style=for-the-badge&logo=go&logoColor=white",
            slug: `/tags/golang`,
          },
          {
            title: "https://img.shields.io/badge/MYSQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white",
            slug: `/tags/mysql`,
          },
          {
            title: "https://img.shields.io/badge/SQLITE-07405E?style=for-the-badge&logo=SQLITE&logoColor=white",
            slug: `/tags/sqlite`,
          },
          {
            title: "https://img.shields.io/badge/REST-9cf?style=for-the-badge",
            slug: `/tags/rest`,
          },
          {
            title: "https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
            slug: `/tags/javascript`,
          },
          {
            title: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            slug: `/tags/react`,
          },
          {
            title: "https://img.shields.io/badge/TESTCASE-7D4698?style=for-the-badge",
            slug: `/tags/testcase`,
          },
          {
            title: "https://img.shields.io/badge/LOGIN-ff69b4?style=for-the-badge",
            slug: `/tags/login`,
          },
          {
            title: "https://img.shields.io/badge/PROTOCOL-E4405F?style=for-the-badge",
            slug: `/tags/protocol`,
          },
          {
            title: "https://img.shields.io/badge/INFRA-626CD9?style=for-the-badge",
            slug: `/tags/infra`,
          },
          {
            title: "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
            slug: `/tags/aws`,
          },
          {
            title: "https://img.shields.io/badge/ETC-35434F?style=for-the-badge",
            slug: `/tags/etc`,
          },
        ],
        externalLinks: [
          {
            name: `About GwiyeomGo`,
            url: `/about`,
          },
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gwiyeomgo-blog`,
        short_name: `gwiyeomgo-blog`,
        description: `gwiyeomgo-blog`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `{
  allPost(sort: {date: DESC}) {
    nodes {
      title
      date(formatString: "MMMM D, YYYY")
      excerpt
      slug
    }
  }
}`,
            output: `rss.xml`,
            title: `gwiyeom-blog`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `developmentRecords`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-P3DYW3SB5H", // GA4
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
