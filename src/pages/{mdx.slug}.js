import * as React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ChakraProvider, Heading, Text, HStack, Box } from "@chakra-ui/react"
import kebabCase from "lodash/kebabCase"

import Seo from "../components/Seo"
import TagIcon from "../components/tagIcon"
import articleTheme from "../theme/articleTheme"

const articleTemplate = ({ data }) => {
  const title = data.mdx.frontmatter.title
  const date = data.mdx.frontmatter.date
  const tags = data.mdx.frontmatter.tags
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <ChakraProvider theme={articleTheme}>
      <Seo title={title} />
      <Heading
        as="h1"
        fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        mt={{ base: 12, sm: 16, md: 20 }}
      >
        {title}
      </Heading>
      <Text align="right" fontSize={{ base: "xs", sm: "sm" }} mt="2">
        {date}
      </Text>
      <Box my="2">
        {tags.map(tag => (
          <HStack key={tag}>
            <TagIcon width="14px" height="14px" />
            <Link to={`/tags/${kebabCase(tag)}`}>
              <Text>{tag}</Text>
            </Link>
          </HStack>
        ))}
      </Box>
      <Box mb={{ base: 6, sm: 8, md: 10 }}>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
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
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
      }
    }
  }
`

export default articleTemplate
