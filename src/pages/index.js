import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Heading, Text, Flex } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"

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
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const TagsPage = ({ data }) => {
  return (
    <>
      <Seo title="トップページ" />
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      {data.allMdx.nodes.map(node => (
        <Box as="article" mb={{ base: 5, sm: 7, md: 9 }} key={node.id}>
          <Link to={`/${node.slug}`}>
            <Flex>
              <Box
                flexBasis={{ base: "70px", sm: "120px" }}
                flexShrink="0"
                mr={4}
              >
                <GatsbyImage
                  image={getImage(node.frontmatter.hero_image)}
                  alt={node.frontmatter.hero_image_alt}
                  imgStyle={{ borderRadius: "5px" }}
                />
              </Box>
              <Box>
                <Heading as="h2" fontSize={{ base: "sm", sm: "md", md: "xl" }}>
                  {node.frontmatter.title}
                </Heading>
              </Box>
            </Flex>
          </Link>
        </Box>
      ))}
    </>
  )
}

export default TagsPage
