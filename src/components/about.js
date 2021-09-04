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
} from "@chakra-ui/react"

const About = ({ siteDescription }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        aria-label="インフォメーションボタン"
        onClick={onOpen}
        variant="unstyled"
        _focus={{ outline: "none" }}
        size={{ base: "sm", sm: "md", md: "xl" }}
        fontSize={{ base: "sm", sm: "md", md: "xl" }}
      >
        yo
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="cBlack" bg="cYellow">
          <ModalHeader>このWebサイトについて</ModalHeader>
          <ModalCloseButton _focus={{ outline: "none" }} />
          <ModalBody>{siteDescription}</ModalBody>
          <ModalFooter>
            ※DELE（Diplomas de Español como Lengua
            Extranjera）は、スペイン政府公認のスペイン語能力試験です。レベルは易しい順で「
            A1, A2, B1, B2, C1, C2 」の6つに分かれています。
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default About
