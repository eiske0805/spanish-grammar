import React from "react"
import Layout from "./src/components/layout"
import theme from "./src/theme/theme"
import "@fontsource/noto-sans-jp/700.css"
import "@fontsource/chelsea-market"

import { ChakraProvider } from "@chakra-ui/react"

// Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }
// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
