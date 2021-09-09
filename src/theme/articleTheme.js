import { extendTheme } from "@chakra-ui/react"
import theme from "./theme"

const articleTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        backgroundColor: "cWhite",
        color: "cBlue",
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
          fontSize: { base: "sm", sm: "md" },
        },
        div: {
          fontSize: { base: "sm", sm: "md" },
        },
        th: {
          fontSize: { base: "sm", sm: "md" },
        },
        td: {
          fontSize: { base: "sm", sm: "md" },
        },
        button: {
          borderColor: "cBlue",
          path: {
            fill: "cBlue",
          },
        },
        rect: {
          fill: "cBlue",
        },
      },
    },
  },
})

export default articleTheme
