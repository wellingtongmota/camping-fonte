import React from 'react'
import Container from '../components/Container'
import Banner from '../components/Banner'
import Activities from '../components/Activities'
import { Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <Container>
      <Banner />
      <Activities />
    </Container>
  )
}

export default Home