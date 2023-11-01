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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </ImgDescription>

        <ImgDescription image={imgFantasia} title='Festa à fantasia'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </ImgDescription>

        <ImgDescription image={imgNeon} title='Festa neon'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </ImgDescription>
      </Flex>

    </Wrapper>
  )
}

export default Leisure