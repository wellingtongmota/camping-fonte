import React from 'react'
import { Flex, Icon, Image, Link } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom'
import { LuFacebook, LuInstagram } from "react-icons/lu";
import logo from '/logo.png'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <Flex
      // position='fixed'
      // zIndex={1}
      // top={0}
      // left={0}
      w='full'
      h='4.5rem'
      bg='teal.900'
      textColor='whiteAlpha.900'
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
            boxSize='3.2rem'
            objectFit='cover'
            src={logo}
            alt='Logo do site'
          />
        </Link>

        <NavLink to='/'>Camping</NavLink>
      </Flex>

      <Flex gap={4} align='center'>
        <Link href='https://www.instagram.com/atitudepinda' isExternal ><Icon as={LuInstagram} boxSize={8} color='whiteAlpha.700' /></Link>
        <Link href='https://www.facebook.com/atitudepinda' isExternal ><Icon as={LuFacebook} boxSize={8} color='whiteAlpha.700' /></Link>
      </Flex>
    </Flex>
  )
}

export default Navbar