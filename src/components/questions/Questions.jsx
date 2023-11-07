import React from 'react'
import bgQuestions from '/bg_questions.jpg'
import { Flex } from '@chakra-ui/react'

const Questions = () => {
  return (
    <Flex
      w='full'
      bgImage={bgQuestions}
      bgPosition="center"
      bgSize='cover'
      // objectFit='cover'
      bgRepeat="no-repeat"
      filter='auto' brightness='80%'

      justify='center'
      align='center'
      // border='2px solid red'
      py={[2, 4, 6]}
      px={[2, 4]}
    >
      <Flex
        bg='whiteAlpha.900'
        maxW='xl'
        w='full'
        flexDirection='column'
        p={[2, 4, 6]}
      >
        Teste
      </Flex>
    </Flex>
  )
}

export default Questions