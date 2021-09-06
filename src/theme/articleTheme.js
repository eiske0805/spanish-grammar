import { extendTheme } from "@chakra-ui/react"
import theme from "./theme"

const articleTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        backgroundColor: "cWhite",
        color: "cBlue",
        lineHeight: "taller",
        letterSpacing: "widest",
        h2: {
          mt: 28,
          fontSize: { base: "lg", sm: "md", md: "xl" },
          fontWeight: "bold",
        },
        h3: {
          mt: 4,
        },
        p: {
          mt: 4,
        },
      },
    },
  },
})

export default articleTheme
