import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Container } from "@chakra-ui/react"

import Header from "./header"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  return (
    <>
      <Container maxW="container.lg" py="4">
        <Header siteTitle={siteTitle} siteDescription={siteDescription} />
        <Box as="main" mt={{ base: 5, sm: 7, md: 9 }}>
          {children}
        </Box>
      </Container>
    </>
  )
}

export default Layout
