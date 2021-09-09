import * as React from "react"
import { Box, Container, Flex, Spacer } from "@chakra-ui/react"

import Header from "./header"
import Footer from "./footer"

export const Layout = ({ children }) => {
  return (
    <Container maxW="container.lg" py="4">
      <Flex direction="column" minH="100vh">
        <Header />
        <Box as="main" mt={{ base: 12, sm: 16, md: 20 }}>
          {children}
        </Box>
        <Spacer />
        <Footer />
      </Flex>
    </Container>
  )
}

export default Layout
