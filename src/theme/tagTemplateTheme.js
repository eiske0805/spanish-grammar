import { extendTheme } from "@chakra-ui/react"
import theme from "./theme"

const tagTemplateTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        backgroundColor: "cGray",
        color: "cBeige",
      },
    },
  },
})

export default tagTemplateTheme
