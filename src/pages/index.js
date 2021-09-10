import React from "react"
import { graphql } from "gatsby"
import { ChakraProvider, Grid } from "@chakra-ui/react"
import "@fontsource/noto-sans-jp/700.css"
import "@fontsource/chelsea-market"

import Seo from "../components/seo"
import ArticleItems from "../components/articleItems"
import Layout from "../components/layout"
import indexTheme from "../theme/indexTheme"

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <ChakraProvider theme={indexTheme}>
      <Layout>
        <Seo title="トップページ" />
        <Grid templateColumns="repeat(6, 1fr)" gap="6">
          {data.allMdx.nodes.map(node => (
            <ArticleItems node={node} key={node.id} />
          ))}
        </Grid>
      </Layout>
    </ChakraProvider>
  )
}

export default IndexPage
