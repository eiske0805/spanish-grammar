import * as React from "react"

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

import TagMenu from "./tagMenu"

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton
        aria-label="ハンバーガーボタン"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        variant="unstyled"
        _focus={{ outline: "none" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="cRed" color="cWhite">
          <DrawerCloseButton _focus={{ outline: "none" }} />
          <DrawerHeader>カテゴリー</DrawerHeader>

          <DrawerBody>
            <TagMenu onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Menu
