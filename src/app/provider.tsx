"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react"; 
import { ReactNode } from "react";

const theme = extendTheme({
  fonts: {
    heading: `'Playfair Display', serif`,
    body: `'Inter', sans-serif`,
    mono: `'Roboto Mono', monospace`,
  },
  colors: {
    headingColor: "#393d3f",
  },
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
