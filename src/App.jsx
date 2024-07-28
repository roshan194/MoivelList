import { useState } from 'react'
import Navbar from './components/navbar'
import './index.css'
import { Box, Heading, Button, Text } from '@chakra-ui/react'
import Home from './pages/home'
import Carousel from './containers/carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Box p={"2rem 0rem"}>
        <Home />
        <Carousel category={"thriller"} />
        <Carousel category={"comedy"} />
        <Carousel category={"drama"} />
      </Box>
    </>
  )
}

export default App
