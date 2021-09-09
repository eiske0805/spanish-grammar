import React from "react"
import { graphql } from "gatsby"

import { Heading, Grid, ChakraProvider, Box } from "@chakra-ui/react"

import Seo from "../components/seo"
import ArticleItems from "../components/articleItems"
import Layout from "../components/layout"
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
      <Layout>
        <Seo title={`${tag}タグ`} />
        <Heading
          as="h2"
          fontSize={{ base: "lg", md: "xl" }}
          my={{ base: 12, sm: 16, md: 20 }}
        >
          {`「 ${tag} 」には ${totalCount}件 の記事があります。`}
        </Heading>
        <Box>
          <Grid
            mt={{ base: 12, sm: 16, md: 20 }}
            templateColumns="repeat(6, 1fr)"
            gap="6"
          >
            {nodes.map(node => (
              <ArticleItems node={node} key={node.id} />
            ))}
          </Grid>
        </Box>
      </Layout>
    </ChakraProvider>
  )
}

export default Tags
