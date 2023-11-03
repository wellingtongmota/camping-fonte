import React from 'react'
import Wrapper from './Wrapper'
import { Badge } from '@chakra-ui/react'

const NextEvent = () => {
  return (
    <Wrapper>
      <Badge fontSize='lg' textTransform='uppercase'>
        Próximo evento
      </Badge>
    </Wrapper>
  )
}

export default NextEvent