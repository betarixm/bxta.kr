import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `bxta.kr`,
        siteUrl: `https://bxta.kr`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-mdx",
        "gatsby-plugin-remove-serviceworker",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            // @ts-ignore
            __key: "pages",
        },
    ],
};

export default config;
