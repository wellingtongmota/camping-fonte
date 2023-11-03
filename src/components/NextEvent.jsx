import React from 'react'
import Wrapper from './Wrapper'
import { Badge, Flex, Icon, Text } from '@chakra-ui/react'
import { LuMapPin, LuCalendarDays } from "react-icons/lu";

const NextEvent = () => {
  return (
    <Wrapper align='center' gap={2}>
      <Badge fontSize={{ base: 'xs', md: 'md', lg: 'lg' }} textTransform='uppercase' alignSelf='flex-start'>
        Próximo evento
      </Badge>

      <Flex
        gap={2}
        maxW='3xl'
        flexWrap='wrap'
        p={[2]}
        // border='1px solid red'
        align='center'
      >

        <Flex
          flex={1}
          flexBasis={320}
          flexDirection='column'
          align='flex-start'
          gap={4}
        // border='1px solid blue'
        >
          <Flex w='full' gap={8}>
            <Icon as={LuMapPin} boxSize={6} color='teal.600' />
            <Flex
              flex={1}
              justify='start'
            // border='1px solid red'
            >
              <Text fontWeight='medium'>
                <span>RECANTO BOMFIM:</span> Estrada José Félix Monteiro de Mossoró,
                4813. Estrada do Pinheirinho, Taubaté - São Paulo - Brasil
              </Text>
            </Flex>
          </Flex>

          <Flex w='full' gap={8}>
            <Icon as={LuCalendarDays} boxSize={6} color='teal.600' />
            <Flex
              flex={1}
              justify='start'
            // border='1px solid red'
            >
              <Text fontWeight='medium'>
                10/02/2024 – 13/02/2024 - 14:00
              </Text>
            </Flex>
          </Flex>

        </Flex>

        <Flex
          flex={1}
          flexBasis={320}
          minH={350}
          // border='1px solid blue'
        >
          Foto
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default NextEvent