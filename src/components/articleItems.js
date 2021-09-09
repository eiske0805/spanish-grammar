import * as React from "react"
import { Link } from "gatsby"
import { Box, Heading, Flex, GridItem } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleItems = ({ node }) => {
  return (
    <GridItem colSpan={{ base: 6, sm: 3, lg: 2 }} mb="6" transition=".3s">
      <Link to={`/${node.slug}`}>
        <Flex>
          <Box>
            <Box>
              <GatsbyImage
                image={getImage(node.frontmatter.hero_image)}
                alt={node.frontmatter.hero_image_alt}
                imgStyle={{ borderRadius: "5px" }}
              />
            </Box>
            <Heading as="h2" fontSize="lg" p="2">
              {node.frontmatter.title}
            </Heading>
          </Box>
        </Flex>
      </Link>
    </GridItem>
  )
}

export default ArticleItems
