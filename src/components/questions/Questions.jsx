import React from 'react'
import bgQuestions from '/bg_questions.jpg'
import { Flex, Heading, Text } from '@chakra-ui/react'
import QuestionsForm from './QuestionsForm'

const Questions = () => {
  return (
    <Flex
      w='full'
      bgImage={bgQuestions}
      bgPosition="center"
      bgSize='cover'
      // objectFit='cover'
      bgRepeat="no-repeat"
      filter='auto' brightness='90%'
      flexDirection='column'
      justify='center'
      align='center'
      // border='2px solid red'
      py={[2, 4, 6]}
      gap={[2, 4, 6]}
      px={[2, 4]}
    >
      <Heading color='white' textAlign='center'>Tem perguntas?<br/>Nos envie uma mensagem</Heading>
      <Flex
        bg='whiteAlpha.800'
        maxW='xl'
        w='full'
        flexDirection='column'
        py={[4, 8]}
        px={[4, 6, 10]}
      >
        <QuestionsForm />
      </Flex>
    </Flex>
  )
}

export default Questions