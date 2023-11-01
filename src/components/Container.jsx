import React from 'react'
import { Flex } from '@chakra-ui/react'

const Container = ({ children, props }) => {
  return (
    <Flex
      flexDirection='column'
      h='full'
      w='full'
      maxW='5xl'
      pb={6}
      {...props}
      // border='1px solid pink'
    >
      {children}
    </Flex>
  )
}

export default Container
