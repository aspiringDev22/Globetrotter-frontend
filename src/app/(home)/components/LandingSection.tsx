"use client";

import {
  Box,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import useAppStore from "@/store/useAppStore";
import ActionButton from "../../../components/common/ActionButton";
import QuizSection from "./QuizSection";
import { syncUsername } from "@/utils/supabaseService";

const MotionBox = motion(Box);

const LandingSection = () => {
  const { showNewComponent, toggleComponent, username, setUsername } = useAppStore();

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="55vh"
    >
      <AnimatePresence mode="wait">
        {!showNewComponent ? (
          <MotionBox
            key="landing"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.2 }}
          >
            <Box textAlign="center">
              <Text fontSize="4xl" fontWeight="500" color="headingColor">
                Welcome to Globetrotter
              </Text>
              <Text fontSize="2xl" color="headingColor" fontWeight="medium">
                Discover famous destinations, fun facts, and travel trivia!
              </Text>
            </Box>
            <VStack gap="1.75rem" mt="2rem">
              <Text fontSize="xl" color="headingColor" fontWeight="medium">
                Your Username is <span style={{ fontWeight: "600", fontStyle: "italic", color: "#336699" }}>{username}</span>
              </Text>
              <ActionButton label="Get Started" onClick={toggleComponent} />
            </VStack>
          </MotionBox>
        ) : (
          <QuizSection />
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default LandingSection;
