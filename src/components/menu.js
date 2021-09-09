import * as React from "react"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react"

import PrimaryButton from "./primaryButton"
import TagMenu from "./tagMenu"

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button
        aria-label="メニューボタン"
        onClick={onOpen}
        variant="unstyled"
        transition=".3s"
        _hover={{ color: "cBlack" }}
        _focus={{ outline: "none" }}
        size={{ base: "sm", sm: "md", md: "xl" }}
        fontSize={{ base: "sm", sm: "md", md: "xl" }}
        // borderColor="cBridge"
        p="1"
        ml="3"
      >
        menú
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="cRed" color="cWhite">
          <DrawerHeader>カテゴリー</DrawerHeader>
          <DrawerBody>
            <TagMenu onClose={onClose} />
            <Flex mt="8">
              <Spacer />
              <PrimaryButton
                bg="cWhite"
                color="cRed"
                size="sm"
                onClick={onClose}
              >
                閉じる
              </PrimaryButton>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Menu
