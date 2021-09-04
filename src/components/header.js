import * as React from "react"
import { Link } from "gatsby"

import { Box, Heading, Flex, Spacer } from "@chakra-ui/react"

import About from "./about"
import Menu from "./menu"

const Header = ({ siteTitle, siteDescription }) => {
  return (
    <Box as="header">
      <Heading as="h1" fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}>
        <Link to="/">{siteTitle} </Link>
      </Heading>
      <Flex as="nav">
        <Spacer />
        <About siteDescription={siteDescription} />
        <Menu />
      </Flex>
    </Box>
  )
}

export default Header
