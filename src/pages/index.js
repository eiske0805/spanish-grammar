import React from "react"
import { graphql } from "gatsby"
import { Grid } from "@chakra-ui/react"

import Seo from "../components/seo"
import ArticleItems from "../components/articleItems"

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
    <>
      <Seo title="トップページ" />
      <Grid templateColumns="repeat(6, 1fr)" gap="6">
        {data.allMdx.nodes.map(node => (
          <ArticleItems node={node} key={node.id} />
        ))}
      </Grid>
    </>
  )
}

export default IndexPage
