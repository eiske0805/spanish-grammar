import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    cWhite: "#EFEEE4",
    cBlue: "#5D8394",
    cRed: "#E18C7A",
    cYellow: "#E3DAB0",
    cBlack: "#423D38",
    cGray: "#737363",
    cPurple: "#A293C2",
  },
  fonts: {
    heading: "Chelsea Market, Noto Sans JP, sans-serif",
    body: "Chelsea Market, Noto Sans JP, sans-serif",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "cBlue",
        color: "cWhite",
      },
    },
  },
})

export default theme
