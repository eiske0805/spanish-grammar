import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    cWhite: "#EFEEE4",
    cBlue: "#5D8394",
    cBlue2: "#89A7B7",
    cBlue3: "#647E93",
    cRed: "#E18C7A",
    cRed2: "#FF625A",
    cRed3: "#FFC6BF",
    cYellow: "#E3DAB0",
    cYellow2: "#EAE5BA",
    cBlack: "#423D38",
    cGray: "#737363",
    cGray2: "#BBB2B2",
    cPurple: "#A293C2",
    cBeige: "#FFE9BC",
    cGreen: "#9BAC8D",
    cGreen2: "#BBCBAF",
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
          transition: "0.3s",
          _focus: {
            outline: "none",
          },
          _hover: {
            color: "cBlack",
            rect: {
              fill: "cBlack",
            },
          },
          rect: {
            transition: ".3s",
          },
        },
        button: {
          transition: "0.3s",
          _hover: {
            color: "cBlack",
            path: {
              fill: "cBlack",
            },
          },
          _focus: {
            outline: "none",
          },
          path: {
            transition: ".3s",
            fill: "cBeige",
          },
        },
      },
    },
  },
})

export default theme
