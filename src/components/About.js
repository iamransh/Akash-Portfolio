import React from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import bg3 from "../assets/Akash_bg2.png";

export default function About() {
  return (
    <Flex
      zIndex={100}
      w="100%"
      py="100px"
      justify={"center"}
      align={"center"}
      bgImg={`url(${bg3.src})`}
      bgSize={"cover"}
      id="about"
      mb="50vh"
    >
      <Stack
        w="800px"
        bg="white"
        px={["40px", "80px", "80px"]}
        py="50px"
        gap={8}
      >
        <Text textAlign={"center"} fontWeight={"light"} fontSize={"2.5em"}>
          ABOUT ME
        </Text>
        <Flex w="100%" justify={"center"} mt="-10px">
          <Flex w="50px" h="3px" bg="black"></Flex>
        </Flex>
        <Text fontWeight={"light"} fontSize={"18px"}>
          {
            "I'm currently working as Senior 3D Artist at Bohemia InteractiveSimulations in London. In addition to my full-time work, I havereleased some games, most notably, Congo (PC) and The Lawless (iOS &Android) as well as a few 2D mobile apps and games."
          }
        </Text>
        <Text fontWeight={"light"} fontSize={"18px"}>
          {
            "Congo was built using Unreal Engine 4 and was chosen by Epic to showcase the next gen tech at EGX 2014 in London and is now available on Steam!"
          }
        </Text>
        <Text fontWeight={"light"} fontSize={"18px"}>
          {
            "Previously, I was supervising the modelling team at Jellyfish Pictures, producing content for Dreamworks Animation. At Jellyfish, I also supervised a number of their Unreal Engine 4 projects including a VR experience, a project delivering UE4 character assets and animations and some tech demos for replacing traditional VFX renderers with real time rendering for high-profile external clients. I was also Asset Lead for a 52-part full-CG TV show for BBC called Dennis & Gnasher: Unleashed."
          }
        </Text>
        <Text fontWeight={"light"} fontSize={"18px"}>
          {
            "I have skills in a number of software packages such as Maya, Unreal Engine 4, Substance, Mari, Adobe Creative Apps (Photoshop,After Effects etc.), zBrush and render engines - Redshift and Arnold."
          }
        </Text>
        <Flex w="100%" justify={"center"}>
          <Button
            w="200px"
            fontWeight={"light"}
            bg="transparent"
            border="1px solid black"
            className="button"
          >
            DOWNLOAD MY CV
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
