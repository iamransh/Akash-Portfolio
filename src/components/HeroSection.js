import React from "react";
import {
  Flex,
  Text,
  Stack,
  Image,
  Box,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import linkedin from "../assets/Akash_linkedin_logo.png";
import insta from "../assets/Akash_insta_logo.png";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

export default function HeroSection() {
  return (
    <Box className="parallax-container">
      {/* Hero Section */}
      <Stack
        w="100%"
        h="100vh"
        justify={"center"}
        align={"center"}
        color={"white"}
      >
        <Text
          fontSize={["2em", "3.3em", "5em"]}
          fontWeight={"semibold"}
          className="name"
        >
          AKASH SRIVASTAV
        </Text>
        <Text
          fontSize={["0.8em", "1.4em", "2em"]}
          fontWeight={"light"}
          mt={["-12px", "-20px", "-30px"]}
          className="title"
        >
          3D ARTIST & GRAPHIC DESIGNER
        </Text>
        <Flex w="100px" justify={"space-between"} mt="10px">
          <Image src={linkedin.src} alt="linkedin" w="40px" h="40px" />
          <Image src={insta.src} alt="insta" w="40px" h="40px" />
        </Flex>
      </Stack>
      {/* Skills And Experience  */}
      <Skills />
      {/* Portfolio */}
      <Portfolio />
      {/* About Me */}
      <About />
      {/* Contact Form */}
      <Contact />
    </Box>
  );
}
