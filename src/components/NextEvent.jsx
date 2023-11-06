import React from 'react'
import { Badge, Button, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { LuMapPin, LuCalendarDays } from "react-icons/lu";
import evento from '/arte_banner.jpg'
import vector_bubble from '/vector_bubble.svg'
import Wrapper from './Wrapper'
import SubscribeModal from './subscribe/SubscribeModal';

const NextEvent = () => {
  return (
    <Wrapper align='center' gap={2}>
      <Badge fontSize={{ base: 'xs', md: 'md', lg: 'lg' }} textTransform='uppercase' alignSelf='flex-start'>
        Próximo evento
      </Badge>

      <Flex
        maxW='4xl'
        w='full'
        align='center'
        justify='center'
        flexWrap='wrap'
        p={2}
        gap={8}
      >

        <Flex
          flex={1}
          maxW='sm'
          minW={280}
          flexDirection='column'
          align='flex-start'
          justify='center'
          gap={6}
        // border='1px solid blue'
        >
          <Flex w='full' gap={[2, 4, 8]}>
            <Icon as={LuMapPin} boxSize={6} color='teal.600' />
            <Flex
              flexGrow={1}
              justify='start'
            >
              <Text fontWeight='medium'>
                <span>RECANTO BOMFIM:</span> Estrada José Félix Monteiro de Mossoró,
                4813. Estrada do Pinheirinho, Taubaté - São Paulo - Brasil
              </Text>
            </Flex>
          </Flex>

          <Flex w='full' gap={[2, 4, 8]}>
            <Icon as={LuCalendarDays} boxSize={6} color='teal.600' />
            <Flex
              flexGrow={1}
              justify='start'
            >
              <Text fontWeight='medium'>
                10/02/2024 – 13/02/2024 - 14:00
              </Text>
            </Flex>
          </Flex>


          <SubscribeModal>
            <Button
              mt={[6, 10]}
              w='full'
              letterSpacing='0.2rem'
              colorScheme='teal'
            >
              Realizar inscrição
            </Button>
          </SubscribeModal>


        </Flex>

        <Flex
          boxSize='xs'
          minW={280}
          flex={1}
          justify='center'
          bgImage={vector_bubble}
          bgPosition="center"
          bgSize='contain'
          bgRepeat='no-repeat'
        // border='1px solid blue'
        >
          <Image
            src={evento}
            alt='Próximo evento'
            objectFit='cover'
            borderRadius='sm'
          />
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default NextEvent