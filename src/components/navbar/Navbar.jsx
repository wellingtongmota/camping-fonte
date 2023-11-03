import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import NavLink from './NavLink'

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
      boxShadow='lg'
      align='center'
      justify='space-between'
      px={[2, 4, 6]}
      py={2}
      gap={2}
      textTransform='uppercase'
    >
      <Flex gap={4} align='center'>
        <Link as={RouterLink} to='/'>
          <Image
            boxSize='3.4rem'
            objectFit='cover'
            src='/logo.png'
            alt='Logo do site'
          />
        </Link>

        <NavLink to='/'>Camping</NavLink>
      </Flex>

      <NavLink to='/login'>Login</NavLink>
    </Flex>
  )
}

export default Navbar