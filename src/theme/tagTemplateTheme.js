import { extendTheme } from "@chakra-ui/react"
import theme from "./theme"

const tagTemplateTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        backgroundColor: "cGray",
        color: "cBeige",
        button: {
          path: {
            transition: ".3s",
            fill: "cBeige",
          },
          _hover: {
            path: {
              fill: "cBlack",
            },
          },
        },
      },
    },
  },
})

export default tagTemplateTheme
