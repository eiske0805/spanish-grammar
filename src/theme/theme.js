import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    cWhite: "#EFEEE4",
    cBlue: "#5D8394",
    cBlue2: "#89A7B7",
    cBlue3: "#647E93",
    cRed: "#E18C7A",
    cRed2: "#FF625A",
    cYellow: "#E3DAB0",
    cYellow2: "#EAE5BA",
    cBlack: "#423D38",
    cGray: "#737363",
    cGray2: "#BBB2B2",
    cPurple: "#A293C2",
    cBeige: "#FFE9BC",
  },
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
        a: {
          transition: ".3s",
          _hover: {
            color: "cBlack",
          },
        },
      },
    },
  },
})

export default theme
