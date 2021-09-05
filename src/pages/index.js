import React from "react"
import { graphql } from "gatsby"
import { List } from "@chakra-ui/react"

import Seo from "../components/Seo"
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
      <List mt={{ base: 12, sm: 16, md: 20 }}>
        {data.allMdx.nodes.map(node => (
          <ArticleItems node={node} key={node.id} />
        ))}
      </List>
    </>
  )
}

export default IndexPage
