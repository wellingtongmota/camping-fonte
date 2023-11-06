import React, { useRef } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Spacer,
  useDisclosure
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import SubscribeInput from './SubscribeInput'

const SubscribeDrawer = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, errors, touched, handleChange }) => (
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

              <DrawerBody gap={2}>

                <Flex as={Form} h='full' flexDirection='column' gap={2}>
                  <SubscribeInput
                    label='Nome'
                    name='name'
                    // icon={<LuUser />}
                    onChange={handleChange}
                    placeholder='Digite seu nome completo'
                    errors={errors.name}
                  />

                  <SubscribeInput
                    label='E-mail'
                    name='email'
                    // icon={<LuUser />}
                    onChange={handleChange}
                    placeholder='Digite seu e-mail'
                    errors={errors.email}
                  />

                  <Spacer />

                  <Flex justifyContent='end'>
                    <Button variant='outline' mr={3} onClick={onClose}>
                      Cancelar
                    </Button>
                    <Button
                      type='submit'
                      colorScheme='teal'
                      isLoading={isSubmitting}
                      loadingText='Enviando'
                    >
                      Enviar
                    </Button>
                  </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      )}
    </Formik>
  )
}

export default SubscribeDrawer