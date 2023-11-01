import { Container, Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <Flex
      flexDirection='column'
      align='center'
      w='full'
      h='100dvh'
      overflowY='auto'
      border='2px solid red'
    >
      <Navbar />
      <Outlet />
    </Flex>
  )
}

export default App