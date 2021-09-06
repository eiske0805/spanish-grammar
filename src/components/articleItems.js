import * as React from "react"
import { Link } from "gatsby"
import { Box, Heading, Flex, ListItem } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleItems = ({ node }) => {
  return (
    <ListItem
      mb={{ base: 6, sm: 8, md: 10, lg: 14 }}
      borderRadius="5px"
      _hover={{
        boxShadow: "2xl",
        transform: "translateY(-3px)",
      }}
      transition=".3s"
    >
      <Link to={`/${node.slug}`}>
        <Flex>
          <Box
            flexBasis={{ base: "140px", sm: "180px", md: "240px", lg: "360px" }}
            flexShrink="0"
            mr={{ base: 2, sm: 3, md: 4 }}
          >
            <GatsbyImage
              image={getImage(node.frontmatter.hero_image)}
              alt={node.frontmatter.hero_image_alt}
              imgStyle={{ borderRadius: "5px" }}
            />
          </Box>
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "sm", sm: "lg", md: "xl", lg: "2xl" }}
            >
              {node.frontmatter.title}
            </Heading>
          </Box>
        </Flex>
      </Link>
    </ListItem>
  )
}

export default ArticleItems
