import React from 'react'
import Container from '../components/Container'
import Banner from '../components/Banner'
import Activities from '../components/Activities'
import Leisure from '../components/Leisure'
import NextEvent from '../components/NextEvent'

const Home = () => {
  return (
    <Container>
      {/* <Banner /> */}

      <Container maxW='5xl'>
        <NextEvent />
        <Activities />
        <Leisure />
      </Container>
    </Container>



  )
}

export default Home