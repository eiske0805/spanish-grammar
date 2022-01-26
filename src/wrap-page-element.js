import React from "react"
import { ChakraProvider } from "@chakra-ui/react"

import theme from "./theme/theme"

export const wrapPageElement = ({ element }) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>
}
