import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Text, Box, Spacer, Flex } from "@chakra-ui/react"

import Navi from "./navi"
import Logo from "./logo"

const Footer = () => {
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
    <Flex as="footer" pt="8" pb="4" mt="20" borderTop="1px">
      <Flex direction="column" justify="space-between">
        <Navi />
        <Text fontSize={{ base: "xs", sm: "sm" }}>
          &copy; {`${new Date().getFullYear()} ${siteTitle}`}
        </Text>
      </Flex>
      <Spacer />
      <Box w={{ base: 16, sm: 16, md: 20 }} h={{ base: 16, sm: 16, md: 20 }}>
        <Link to="/">
          <Logo />
        </Link>
      </Box>
    </Flex>
  )
}

export default Footer
