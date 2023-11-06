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
  FormControl,
  FormHelperText,
  FormLabel,
  RadioGroup,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import SubscribeInput from './SubscribeInput'
import SubscribeRadio from './SubscribeRadio'

const SubscribeDrawer = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        church: '',
        ground: '',
        transport: '',
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, values, errors, touched, handleChange }) => (
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
                <Stack as={Form} id='next-event' spacing={6}>
                  <SubscribeInput
                    label='Nome:'
                    name='name'
                    onChange={handleChange}
                    placeholder='Digite seu nome completo'
                    errors={errors.name}
                  />

                  <SubscribeInput
                    label='E-mail:'
                    name='email'
                    onChange={handleChange}
                    placeholder='Digite seu e-mail'
                    errors={errors.email}
                  />

                  <SubscribeInput
                    label='Celular (WhatsApp):'
                    name='phone'
                    onChange={handleChange}
                    placeholder='Digite seu número'
                    errors={errors.phone}
                  />

                  <FormControl isRequired>
                    <FormLabel>Igreja: </FormLabel>
                    <RadioGroup name='church'>
                      <Stack direction='column'>
                        <SubscribeRadio name='church' onChange={handleChange} value='Pinda sede' />
                        <SubscribeRadio name='church' onChange={handleChange} value='Pinda Araratema' />
                        <SubscribeRadio name='church' onChange={handleChange} value='Pinda Ipê' />
                        <SubscribeRadio name='church' onChange={handleChange} value='Guaratinguetá' />
                        <SubscribeRadio name='church' onChange={handleChange} value='Taubaté' />
                      </Stack>
                    </RadioGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Prefere cama ou barraca?</FormLabel>
                    <RadioGroup name='ground'>
                      <Stack direction='column'>
                        <SubscribeRadio name='ground' onChange={handleChange} value='Cama' />
                        <SubscribeRadio name='ground' onChange={handleChange} value='Barraca' />
                      </Stack>
                    </RadioGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Precisará de transporte para o local?</FormLabel>
                    <RadioGroup name='transport'>
                      <Stack direction='column'>
                        <SubscribeRadio name='transport' onChange={handleChange} value='Sim' />
                        <SubscribeRadio name='transport' onChange={handleChange} value='Não' />
                      </Stack>
                    </RadioGroup>
                    <FormHelperText>
                      Lembrando que o transporte é permitido apenas com mochila de colo.
                      Malas e outros itens serão transportados em um caminhão disponibilizado no dia anterior ao evento.
                    </FormHelperText>
                  </FormControl>
                </Stack>
              </DrawerBody>
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  type='submit'
                  form='next-event'
                  colorScheme='teal'
                  isLoading={isSubmitting}
                  loadingText='Enviando'
                >
                  Enviar
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      )}
    </Formik>
  )
}

export default SubscribeDrawer