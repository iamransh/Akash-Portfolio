import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import Train from "./Train";
import WeaponVehicle from "./WeaponVehicle";
import Machine from "./Machine";
import AppleVision from "./AppleVision";
import BlackSheep from "./BlackSheep";
import Headphone from "./Headphone";
const VIDEO_PATH = "/all-in-one.mp4";

export default function Portfolio() {
  const playerRef = useRef(null);
  const slide = useRef(null);
  const settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Stack w="100%" py="100px" bg="white" gap={5} id="portfolio" zIndex={100}>
      <Text textAlign={"center"} fontWeight={"light"} fontSize={"2.5em"}>
        PORTFOLIO
      </Text>
      <Flex w="100%" justify={"center"}>
        <Flex w="50px" h="3px" bg="black"></Flex>
      </Flex>
      <Stack w="100%" align={"center"} mt="10px">
        <Headphone settings={settings} slide={slide} />
        <AppleVision settings={settings} slide={slide} />
        <WeaponVehicle settings={settings} slide={slide} />
        <BlackSheep settings={settings} slide={slide} />
        {/* <Donut settings={settings} slide={slide} /> */}
        {/* <Marshall settings={settings} slide={slide} /> */}
        <Machine settings={settings} slide={slide} />
        <Train settings={settings} slide={slide} />
        <Box width={["95vw", "80vw", "40vw"]}>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            ref={playerRef}
            url={VIDEO_PATH}
            controls={true}
            playing={true}
            loop={true}
            muted={true}
          />
        </Box>
        <Text
          textAlign={"center"}
          fontWeight={"semibold"}
          fontSize={"2em"}
          mt="25px"
          w={["95vw", "80vw", "50vw"]}
        >
          ANIMATIONS
        </Text>
        <Text w={["95vw", "80vw", "50vw"]}>
          {
            "I've created a cool mix of animations using Autodesk Maya and Blender, giving you a glimpse of my animation skills. This is a fun way to see what I can do with 3D animation!"
          }
        </Text>
      </Stack>
    </Stack>
  );
}
