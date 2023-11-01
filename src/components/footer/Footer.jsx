import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

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

      <Text as={NavLink} to='/login' fontSize='xl'>ATITUDE PINDA</Text>
    </Flex>
  )
}

export default Footer