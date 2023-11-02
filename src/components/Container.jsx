import React from 'react'
import { Flex } from '@chakra-ui/react'

const Container = (props) => {
  return (
    <Flex
      flexDirection='column'
      align='center'
      w='full'
      {...props}
    >
      {props.children}
    </Flex>
  )
}

export default Container
