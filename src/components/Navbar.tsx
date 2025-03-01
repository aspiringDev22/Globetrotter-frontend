import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" background={"#fbfbf2"} borderBottom="1px solid #d3d3d3"  padding="1rem 2rem" height="10vh">
        <Text fontSize="2xl" fontWeight="500" color="#393d3f">Globetrotter</Text>
    </Flex>
  )
}

export default Navbar