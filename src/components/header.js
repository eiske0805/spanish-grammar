import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Heading, Flex, Spacer } from "@chakra-ui/react"

import Navi from "./navi"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title
  return (
    <Box as="header" pt={{ base: 4, sm: 8, md: 12 }}>
      <Heading as="h1" fontSize={{ base: "lg", sm: "xl", md: "2xl" }}>
        <Link to="/">{siteTitle} </Link>
      </Heading>
      <Flex as="nav" mt="4">
        <Spacer />
        <Navi />
      </Flex>
    </Box>
  )
}

export default Header
