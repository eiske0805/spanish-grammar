import * as React from "react"
import { Button } from "@chakra-ui/react"

const PrimaryButton = props => {
  const {
    children,
    bg,
    color,
    size,
    disabled = false,
    loading = false,
    onClick,
  } = props
  return (
    <Button
      bg={bg}
      color={color}
      size={size}
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
      _focus={{ outline: "none" }}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
