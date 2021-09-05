import * as React from "react"
import { Box } from "@chakra-ui/react"

const TagIcon = ({ width = "60px", height = "60px", fill = "cGray" }) => {
  return (
    <Box
      as="svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path>
    </Box>
  )
}

export default TagIcon
