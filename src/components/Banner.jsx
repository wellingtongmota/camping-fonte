import React from 'react'
import { Button, Flex, Heading, Icon } from '@chakra-ui/react'
import { LuChevronDown } from "react-icons/lu";

const Banner = () => {
  return (
    <Flex
      w='full'
      h='100vh'
      bgImage="url('/arte_banner.jpg')"
      bgPosition="center"
      bgSize='cover'
      // objectFit='cover'
      bgRepeat="no-repeat"
      filter='auto' brightness='80%'
      flexDirection='column'
      justify='center'
      align='center'
      color='white'
    >

      <Flex
        flexDirection='column'
        justify='center'
        align='center'
        maxW='xl'
        h='full'
        gap={8}
        px={2}
      >
        <Heading textAlign='center' lineHeight='120%'>Acampamento de jovens da igreja Fonte da Vida</Heading>

        <Button
          variant='unstyled'
          bgColor='blackAlpha.600'
          textTransform='uppercase'
          w='fit-content'
          px={6}
          border='3px solid white'
          letterSpacing='wider'
          borderRadius='none'
        >
          Realizar inscrição
        </Button>
      </Flex>

      <Icon as={LuChevronDown} fontSize='6xl' />
    </Flex>
  )
}

export default Banner