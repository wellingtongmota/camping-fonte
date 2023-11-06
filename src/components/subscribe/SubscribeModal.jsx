import React from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RadioGroup,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import SubscribeInput from './SubscribeInput'
import SubscribeRadio from './SubscribeRadio'

const SubscribeModal = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const subscribeSchema = Yup.object().shape({
    name:
      Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!'),
    email:
      Yup.string().
        email('E-mail inválido'),
    phone:
      Yup.string()
        .min(11, 'Muito curto!')
        .max(11, 'Muito longo!')
        .matches(/^[0-9]+$/, 'Número inválido', { excludeEmptyString: true })
  });

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

      validationSchema={subscribeSchema}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, errors, handleChange }) => (
        <>
          <Flex w='full' onClick={onOpen}>
            {props.children}
          </Flex>

          <Modal blockScrollOnMount={true} scrollBehavior='inside' isOpen={isOpen} onClose={onClose} size={['full', 'lg']} isCentered>
            <ModalOverlay />
            <ModalContent borderRadius='none'>
              <ModalHeader>Realizar inscrição</ModalHeader>
              <ModalCloseButton />

              <ModalBody as={Form} id='next-event'>
                <Stack spacing={6}>
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
                    type='number'
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
              </ModalBody>

              <ModalFooter>
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
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </Formik>
  )
}

export default SubscribeModal