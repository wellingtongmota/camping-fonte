import React from 'react'
import Container from '../components/Container'
import Activities from '../components/Activities'
import Leisure from '../components/Leisure'
import NextEvent from '../components/NextEvent'
import Questions from '../components/questions/Questions'

const Home = () => {
  return (
    <Container>
      <NextEvent maxW='4xl' />
      <Activities />
      <Leisure />
      <Questions />
    </Container>
  )
}

export default Home