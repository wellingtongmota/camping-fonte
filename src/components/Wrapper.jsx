import { Flex } from '@chakra-ui/react'
import React from 'react'

const Wrapper = ({ children, props }) => {
  return (
    <Flex
      py={12}
      w='full'
      flexDirection='column'
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Wrapper