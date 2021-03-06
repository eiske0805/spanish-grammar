import * as React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage } from "gatsby-plugin-image"
import { ChakraProvider, Heading, Text, HStack, Box } from "@chakra-ui/react"
import kebabCase from "lodash/kebabCase"

import Seo from "../components/seo"
import TagIcon from "../components/tagIcon"
import Layout from "../components/layout"
import articleTheme from "../theme/articleTheme"

const articleTemplate = ({ data }) => {
  const pageTitle = data.mdx.frontmatter.title
  const description = data.mdx.excerpt
  const image = getImage(data.mdx.frontmatter.hero_image)
  const date = data.mdx.frontmatter.date
  const tags = data.mdx.frontmatter.tags
  const localImages = data.mdx.frontmatter.embeddedImagesLocal
  return (
    <ChakraProvider theme={articleTheme}>
      <Layout>
        <Seo title={pageTitle} description={description} image={image} />
        <Text
          align="right"
          fontSize={{ base: "xs", sm: "sm" }}
          mt={{ base: 12, sm: 16, md: 20 }}
        >
          {date}
        </Text>
        <Heading as="h1" fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }} mt="2">
          {pageTitle}
        </Heading>
        <Box my="4">
          {tags.map(tag => (
            <HStack key={tag}>
              <TagIcon width="14px" height="14px" />
              <Link to={`/tags/${kebabCase(tag)}`}>
                <Box>{tag}</Box>
              </Link>
            </HStack>
          ))}
        </Box>
        <MDXRenderer localImages={localImages}>{data.mdx.body}</MDXRenderer>
      </Layout>
    </ChakraProvider>
  )
}

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY - MM - DD")
        tags
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default articleTemplate
