import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Wrapper = (props) => {
  return (
    <Flex
      py={[8, 12]}
      px={2}
      w='full'
      flexDirection='column'
      {...props}
    >
      {props.title !== undefined &&
        <Heading textTransform='uppercase' color='teal.900' pb={6}>{props.title}</Heading>
      }

      {props.children}
    </Flex>
  )
}

export default Wrapper