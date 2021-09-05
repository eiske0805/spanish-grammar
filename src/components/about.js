import * as React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react"

import PrimaryButton from "./primaryButton"

const About = ({ siteDescription }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        aria-label="インフォメーションボタン"
        onClick={onOpen}
        variant="outline"
        _focus={{ outline: "none" }}
        size={{ base: "sm", sm: "md", md: "xl" }}
        fontSize={{ base: "sm", sm: "md", md: "xl" }}
        borderColor="cBridge"
        p="1"
      >
        yo
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="cBlue" bg="cWhite">
          <ModalHeader>このWebサイトについて</ModalHeader>
          <ModalCloseButton _focus={{ outline: "none" }} />
          <ModalBody>
            <Text>{siteDescription}</Text>
            <Text mt="4">
              ※DELE（Diplomas de Español como Lengua
              Extranjera）は、スペイン政府公認のスペイン語能力試験です。レベルは易しい順で「
              A1, A2, B1, B2, C1, C2 」と６つに分かれています。
            </Text>
          </ModalBody>
          <ModalFooter>
            <ModalFooter p="0">
              <PrimaryButton
                bg="cBlue"
                color="cWhite"
                size="sm"
                onClick={onClose}
              >
                閉じる
              </PrimaryButton>
            </ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default About
