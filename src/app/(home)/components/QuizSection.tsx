import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Box, Button, Text } from '@chakra-ui/react';
import useAppStore from '@/store/useAppStore';

const MotionBox = motion(Box);

const QuizSection = () => {
    const { showNewComponent, toggleComponent } = useAppStore();
    
  return (
    <MotionBox
    key="newComponent"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.3 }}
  >
    <Text fontSize="3xl" fontWeight="bold" color="teal.500">
      Explore the World 🌍
    </Text>
    <Text fontSize="xl" mt="2">
      Get ready for an amazing journey through different destinations!
    </Text>
        <Button mt="4" colorScheme="red" onClick={toggleComponent}>
      Go Back
    </Button>
  </MotionBox>
  )
}

export default QuizSection