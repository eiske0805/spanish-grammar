import * as React from "react"
import { Link } from "gatsby"
import { Box, Heading, Flex, ListItem } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleItems = ({ node }) => {
  return (
    <ListItem
      mb={{ base: 5, sm: 7, md: 9 }}
      borderRadius="5px"
      _hover={{
        boxShadow: "2xl",
        transform: "translateY(-3px)",
      }}
      transition=".3s"
    >
      <Link to={`/${node.slug}`}>
        <Flex>
          <Box flexBasis={{ base: "70px", sm: "120px" }} flexShrink="0" mr={3}>
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
    </ListItem>
  )
}

export default ArticleItems
