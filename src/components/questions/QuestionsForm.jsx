import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import QuestionsInput from './QuestionsInput'
import { Button, Flex, FormControl, FormHelperText, FormLabel, Textarea } from '@chakra-ui/react'

const QuestionsForm = () => {

  const subscribeSchema = Yup.object().shape({
    name:
      Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!'),
    email:
      Yup.string().
        email('E-mail inválido'),
    message:
      Yup.string()
        .max(1500, 'Muito longo!')
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
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
        <Flex
          flexDirection='column'
          as={Form}
        >
          <QuestionsInput
            label='Nome: '
            name='name'
            onChange={handleChange}
            placeholder='Insira seu nome'
            errors={errors.name}
          />

          <QuestionsInput
            label='E-mail: '
            name='email'
            type='email'
            onChange={handleChange}
            placeholder='Insira seu e-mail'
            errors={errors.email}
          />

          <FormControl isRequired>
            <FormLabel letterSpacing='wider' fontFamily={`'Anton', sans-serif`} fontSize='lg'>Mensagem: </FormLabel>
            <Textarea
              variant='flushed'
              borderBottom='3px solid #2D3748'
              focusBorderColor='teal.400'
              name='message'
              onChange={handleChange}
              placeholder='Insira suas perguntas aqui'
            />
          </FormControl>

          <Button
            mt={8}
            type='submit'
            colorScheme='teal'
            isLoading={isSubmitting}
            loadingText='Enviando'
          >
            Enviar
          </Button>
        </Flex>
      )}
    </Formik>
  )
}

export default QuestionsForm