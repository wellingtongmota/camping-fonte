import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Flex
      w='full'
      h='100dvh'
      bgImage="url('/arte_banner.jpg')"
      bgPosition="center"
      bgSize='cover'
      // objectFit='cover'
      bgRepeat="no-repeat"
      filter='auto' brightness='80%'

      justify='center'
      align='center'
      color='white'
    // border='2px solid blue'
    >

      <Flex
        flexDirection='column'
        justify='center'
        align='center'
        maxW='xl'
        gap={8}
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
    </Flex>
  )
}

export default Banner