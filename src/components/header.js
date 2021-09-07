import * as React from "react"
import { Link } from "gatsby"

import { Box, Heading, Flex, Spacer } from "@chakra-ui/react"

import About from "./about"
import Menu from "./menu"

const Header = ({ siteTitle, siteDescription }) => {
  return (
    <Box as="header">
      <Heading
        as="h1"
        mt={{ base: 4, sm: 8, md: 12 }}
        fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
      >
        <Link to="/">{siteTitle} </Link>
      </Heading>
      <Flex as="nav" mt="4">
        <Spacer />
        <About siteDescription={siteDescription} />
        <Menu />
      </Flex>
    </Box>
  )
}

export default Header
