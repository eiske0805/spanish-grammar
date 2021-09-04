import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ChakraProvider } from "@chakra-ui/react"

import Seo from "../components/Seo"
import articleTheme from "../theme/articleTheme"

const articleTemplate = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <ChakraProvider theme={articleTheme}>
      <Seo title={data.mdx.frontmatter.title} />
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
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
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default articleTemplate
