import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex
      w='100%'
      h='16rem'
      bg='teal.900'
      textColor='gray.50'
      shadow='md'
      align='center'
      justify='space-between'
      px={6}
      py={2}
      gap={2}
      textTransform='uppercase'
    >
      <Heading fontSize='xl'>ATITUDE PINDA</Heading>
    </Flex>
  )
}

export default Footer