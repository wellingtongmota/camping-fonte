import { Flex } from '@chakra-ui/react'
import React from 'react'

const Wrapper = ({ children, props }) => {
  return (
    <Flex
      py={[8, 12]}
      px={2}
      w='full'
      flexDirection='column'
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Wrapper