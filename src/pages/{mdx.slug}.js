import * as React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ChakraProvider, Heading, Text, HStack, Box } from "@chakra-ui/react"
import kebabCase from "lodash/kebabCase"

import Seo from "../components/seo"
import TagIcon from "../components/tagIcon"
import articleTheme from "../theme/articleTheme"

const articleTemplate = ({ data }) => {
  const pageTitle = data.mdx.frontmatter.title
  const date = data.mdx.frontmatter.date
  const tags = data.mdx.frontmatter.tags
  return (
    <ChakraProvider theme={articleTheme}>
      <Seo title={pageTitle} />
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
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default articleTemplate
