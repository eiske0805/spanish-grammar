import * as React from "react"
import { Link } from "gatsby"
import { Box, Heading, Flex, GridItem } from "@chakra-ui/react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const ArticleItems = ({ node }) => {
  const title = node.frontmatter.title
  const image = node.frontmatter.hero_image
  const alt = node.frontmatter.hero_image_alt
  return (
    <GridItem colSpan={{ base: 6, sm: 3, lg: 2 }} mb="6">
      <Link to={`/${node.slug}`}>
        <Flex>
          <Box>
            <Box>
              {image ? (
                <GatsbyImage
                  image={getImage(image)}
                  alt={alt}
                  imgStyle={{ borderRadius: "5px" }}
                />
              ) : (
                <StaticImage
                  imgStyle={{ borderRadius: "5px" }}
                  src="../images/icon.png"
                  alt="サイトロゴ"
                />
              )}
            </Box>
            <Heading as="h2" fontSize="lg" p="2">
              {title}
            </Heading>
          </Box>
        </Flex>
      </Link>
    </GridItem>
  )
}

export default ArticleItems
