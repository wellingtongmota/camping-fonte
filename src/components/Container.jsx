import React from 'react'
import { Flex } from '@chakra-ui/react'

const Container = ({ children }) => {
  return (
    <Flex
      flexDirection='column'
      h='full'
      w='full'
      maxW='5xl'
      px={2}
      py={6}
      // border='1px solid pink'
    >
      {children}
    </Flex>
  )
}

export default Container
