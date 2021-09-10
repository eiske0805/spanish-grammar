import { extendTheme } from "@chakra-ui/react"
import theme from "./theme"

const indexTheme = extendTheme({
  ...theme,
  fonts: {
    heading: "Chelsea Market, Noto Sans JP, sans-serif",
    body: "Chelsea Market, Noto Sans JP, sans-serif",
  },
  styles: {
    global: {
      body: {
        lineHeight: "taller",
        letterSpacing: "wide",
        backgroundColor: "cBlue2",
        color: "cBeige",
      },
    },
  },
})

export default indexTheme
