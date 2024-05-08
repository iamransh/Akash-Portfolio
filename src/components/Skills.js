import React from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import maya from "../assets/Akash_maya_logo.png";
import zbrush from "../assets/Akash_zbrush_logo.png";
import painter from "../assets/Akash_painter_logo.png";
import blender from "../assets/Akash_blender_logo.png";
import bg2 from "../assets/Akash_bg.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export default function Skills() {
  return (
    <Stack
      zIndex={100}
      w="100%"
      bgImage={`url(${bg2.src})`}
      bgSize={"cover"}
      color={"white"}
      py="100px"
      gap={5}
      id="skills"
    >
      <Text textAlign={"center"} fontWeight={"light"} fontSize={"2.5em"}>
        SKILLS & EXPERIENCE
      </Text>
      <Flex w="100%" justify={"center"}>
        <Flex w="50px" h="3px" bg="white"></Flex>
      </Flex>
      <Flex w="100%" justify={"center"} flexWrap={"wrap"}>
        <Flex flexWrap={"wrap"} justify={"center"}>
          <Stack w="220px" py="30px" mx="30px" align={"center"}>
            <Image src={maya.src} alt="maya" w="120px" h="120px" />
            <Text fontSize={"22px"}>MAYA</Text>
            {/* <Text textAlign={"center"} fontSize={"18px"}>
              Modelling, Shading and Lighting skills for rendering in Maya or
              exporting out for game engines
            </Text> */}
            <Flex mt="5px" w="120px" justify={"space-evenly"}>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
            </Flex>
          </Stack>
          <Stack w="220px" py="30px" mx="30px" align={"center"}>
            <Image src={painter.src} alt="zbrush" w="120px" h="120px" />
            <Text fontSize={"22px"}> SUBSTANCE PAINTER</Text>
            {/* <Text textAlign={"center"} fontSize={"18px"}>
              3D Sculpting, Modelling, Surface detailing work for baked texture
              maps.
            </Text> */}
            <Flex mt="5px" w="120px" justify={"space-evenly"}>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              {/* <BsStarHalf /> */}
              <BsStar />
              <BsStar />
            </Flex>
          </Stack>
        </Flex>
        <Flex flexWrap={"wrap"} justify={"center"}>
          {/* <Stack w="220px" py="30px" mx="30px" align={"center"}>
            <Image src={zbrush.src} alt="zbrush" w="120px" h="120px" />
            <Text fontSize={"22px"}>zBRUSH</Text>
            <Flex mt="5px" w="120px" justify={"space-evenly"}>
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
              <BsStar />
            </Flex>
          </Stack> */}
          <Stack w="220px" py="30px" mx="30px" align={"center"}>
            <Image src={blender.src} alt="maya" w="120px" h="120px" />
            <Text fontSize={"22px"}>BLENDER</Text>
            {/* <Text textAlign={"center"} fontSize={"18px"}>
              Modelling, Shading and Lighting skills for rendering in Maya or
              exporting out for game engines
            </Text> */}
            <Flex mt="5px" w="120px" justify={"space-evenly"}>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
}
