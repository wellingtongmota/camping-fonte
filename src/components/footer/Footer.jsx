import React from 'react'
import { Flex, HStack, Heading, Icon, Link, Text, VStack } from '@chakra-ui/react'
import { LuFacebook, LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <Flex
      w='full'
      flexDirection={['column', 'column', 'row']}
      flexWrap='wrap'
      bg='teal.900'
      textColor='gray.50'
      shadow='md'
      p={6}
      gap={[4, 8]}
    >
      <VStack
        color='whiteAlpha.900'
        textTransform='uppercase'
        justify='center'
        flex={1}
      >
        <Heading fontSize='3xl'>Atitude Jovem</Heading>
        <Heading fontSize='xl'>Pindamonhangaba</Heading>
      </VStack>

      <VStack align='flex-start' flex={1}>
        <Text color='whiteAlpha.900' textTransform='uppercase'>
          Endereço
        </Text>
        <Text color='whiteAlpha.700' maxW='2xs'>
          Igreja Apostólica Fonte da Vida
          R. Dr. Fontes Júnior, 137
          CEP - 12420-560
          Pindamonhangaba - SP
        </Text>
      </VStack>

      <VStack align='flex-start' flex={1}>
        <Text color='white' textTransform='uppercase'>
          Contato
        </Text>
        <Text color='whiteAlpha.700' maxW='2xs'>
          (12) 991865698 <br />
          dokmos.pinda@mail.com
        </Text>
      </VStack>

      <VStack spacing={4} align='flex-start' flex={1}>
        <Text color='whiteAlpha.900' textTransform='uppercase'>
          Mídias sociais
        </Text>
        <HStack spacing={4}>
          <Link href='https://www.instagram.com/atitudepinda' isExternal ><Icon as={LuInstagram} boxSize={8} color='whiteAlpha.700' /></Link>
          <Link href='https://www.facebook.com/atitudepinda' isExternal ><Icon as={LuFacebook} boxSize={8} color='whiteAlpha.700' /></Link>
        </HStack>
      </VStack>
    </Flex>
  )
}

export default Footer