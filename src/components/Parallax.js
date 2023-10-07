import { Box } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Contact from "./Contact";

export default function Parallax() {
  return (
    <Box className="parallax-container2">
      <About />
      <Contact />
    </Box>
  );
}
