import React from 'react'
import Container from '../components/Container'
import Banner from '../components/Banner'
import Activities from '../components/Activities'
import Leisure from '../components/Leisure'

const Home = () => {
  return (
    <Container>
      <Banner />
      <Activities />
      <Leisure />
    </Container>
  )
}

export default Home