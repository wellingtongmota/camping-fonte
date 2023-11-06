import React, { useRef } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  useDisclosure
} from '@chakra-ui/react'

const SubscribeDrawer = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Flex {...props}>
      <Flex w='full' ref={btnRef} onClick={onOpen}>
        {props.children}
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={['full', 'md']}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Realizar inscrição</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme='teal'>Enviar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default SubscribeDrawer