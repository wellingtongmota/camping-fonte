import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex
      position='fixed'
      zIndex={1}
      top={0}
      left={0}
      w='full'
      h='4.5rem'
      bg='teal.900'
      textColor='gray.50'
      boxShadow='2xl'
      align='center'
      justify='space-between'
      px={6}
      py={2}
      gap={2}
      textTransform='uppercase'
    >
      <Link as={NavLink} to='/'>
        <Image
          boxSize='3.4rem'
          objectFit='cover'
          src='/logo.png'
          alt='Logo do site'
        />
      </Link>

      <Text as={NavLink} to='/login' fontSize='xl'>LOGIN</Text>
    </Flex>
  )
}

export default Navbar