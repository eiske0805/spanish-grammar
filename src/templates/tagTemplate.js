import React from "react"
import { graphql } from "gatsby"

import { Heading, List, ChakraProvider } from "@chakra-ui/react"

import Seo from "../components/seo"
import ArticleItems from "../components/articleItems"
import tagTemplateTheme from "../theme/tagTemplateTheme"

export const query = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes, totalCount } = data.allMdx

  return (
    <ChakraProvider theme={tagTemplateTheme}>
      <Seo title={`${tag}タグ`} />
      <Heading
        as="h2"
        fontSize={{ base: "lg", md: "xl" }}
        my={{ base: 12, sm: 16, md: 20 }}
      >
        {`「 ${tag} 」には ${totalCount}件 の記事があります。`}
      </Heading>
      <List>
        {nodes.map(node => (
          <ArticleItems node={node} key={node.id} />
        ))}
      </List>
    </ChakraProvider>
  )
}

export default Tags
