import React from 'react'
import { Flex } from '@chakra-ui/react'
import ImgDescription from './ImgDescription'
import Wrapper from './Wrapper'

import imgGincana from '../images/GINCANA.jpg'
import imgFantasia from '../images/FANTASIA_temp.jpg'
import imgNeon from '../images/NEON.jpg'

const Leisure = () => {
  return (
    <Wrapper justify='center' title='Áreas de lazer'>

      <Flex flexWrap='wrap' w='full' gap={4} justify='space-evenly'>
        <ImgDescription image={imgGincana} title='Gincana'>
        No retiro de jovens, a piscina é o lugar perfeito para relaxar, refrescar-se e se divertir ao sol.
        </ImgDescription>

        <ImgDescription image={imgFantasia} title='Festa à fantasia'>
        Descontração e diversão, onde os laços de amizade se fortalecem e as memórias se formam.
        </ImgDescription>

        <ImgDescription image={imgNeon} title='Festa neon'>
        Um lembrete de que o esporte é uma forma de se manter ativo e saudável enquanto se diverte.
        </ImgDescription>
      </Flex>

    </Wrapper>
  )
}

export default Leisure