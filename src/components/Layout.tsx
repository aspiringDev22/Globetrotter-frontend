import React from 'react'
import Navbar from './Navbar'
import { Box, Flex } from '@chakra-ui/react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <Flex flexDirection="column" gap={10} background={"#fbfefb"} minHeight="100vh">
    <Navbar/>
    <Box padding="2rem">
    {children}
    </Box>
    </Flex>
  )
}

export default Layout