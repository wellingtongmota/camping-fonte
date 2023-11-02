import React from 'react'
import Container from '../components/Container'
import Banner from '../components/Banner'
import Activities from '../components/Activities'
import Leisure from '../components/Leisure'

const Home = () => {
  return (
    <Container>
      {/* <Banner /> */}

      <Container mt='4.5rem' maxW='5xl'>
        <Activities />
        <Leisure />
      </Container>
    </Container>



  )
}

export default Home