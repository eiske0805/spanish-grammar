import { extendTheme } from "@chakra-ui/react"
import theme from "./theme"

const articleTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        backgroundColor: "cWhite",
        color: "cBlue",
      },
    },
  },
})

export default articleTheme
