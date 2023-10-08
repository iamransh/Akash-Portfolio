import React from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import bg3 from "../assets/Akash_bg2.png";
import { useRouter } from "next/router";

export default function About() {
  const pdfFile = "/Akash_resume.pdf";
  const router = useRouter();
  const openPdfInNewTab = () => {
    const newTab = window.open(pdfFile, "_blank");
    if (newTab) {
      newTab.opener = null; // Prevents the new tab from being able to navigate the opener (your app).
    }
  };
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
      mb="40vh"
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
            "Welcome to my 3D portfolio! I am a passionate 3D artist with 1.5 years of dedicated experience in the field. My journey began with a professional course in 3D animation at Zee Institute of Creative Arts, where I honed my skills in various 3D software tools such as Maya, Blender, ZBrush, and Substance Painter."
          }
        </Text>
        <Text fontWeight={"light"} fontSize={"18px"}>
          {
            "My creative journey didn't stop there. I further expanded my horizons by delving into the world of graphic design during my time at Pyde Pyper Marketing Agency, where I gained 9 months of valuable work experience. I had the opportunity to work on a diverse range of projects, including social media creatives, banners, brochures, and more. My proficiency with graphic design tools like Photoshop, Illustrator, and Premiere Pro allowed me to create visually compelling content that resonated with clients and their audiences."
          }
        </Text>
        <Text fontWeight={"light"} fontSize={"18px"}>
          {
            "One of my key strengths is my ability to seamlessly blend my 3D skills with graphic design principles, resulting in unique and eye-catching visuals. Whether it's creating stunning 3D models, textures, or graphic assets, I'm dedicated to bringing creative concepts to life."
          }
        </Text>
        <Text fontWeight={"light"} fontSize={"18px"}>
          {
            "I'm excited to showcase my portfolio, which is a testament to my growth, skills, and dedication to the world of 3D and graphic design. Feel free to explore my work, and don't hesitate to reach out for collaborations or inquiries. Let's bring your creative visions to reality together!"
          }
        </Text>
        <Flex w="100%" justify={"center"}>
          <Button
            w="200px"
            fontWeight={"light"}
            bg="transparent"
            border="1px solid black"
            className="button"
            onClick={openPdfInNewTab}
          >
            DOWNLOAD RESUME
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
