import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import img1 from "../../assets/train_color.jpg";
import img2 from "../../assets/train_base.jpg";
import img3 from "../../assets/weapon_vehicle_1.jpg";
import img4 from "../../assets/weapon_vehicle_2.jpg";
import img5 from "../../assets/weapon_vehicle_3.jpg";
import img6 from "../../assets/weapon_vehicle_4.jpg";
import Train from "./Train";
import WeaponVehicle from "./WeaponVehicle";
import Marshall from "./Marshall";
import Machine from "./Machine";
import AppleVision from "./AppleVision";

export default function Portfolio() {
  const slide = useRef(null);
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 3000,
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
        <Train settings={settings} slide={slide} data-aos="fade-up" />
        <WeaponVehicle settings={settings} slide={slide} data-aos="fade-up" />
        <Marshall settings={settings} slide={slide} data-aos="fade-up" />
        <Machine settings={settings} slide={slide} data-aos="fade-up" />
        <AppleVision settings={settings} slide={slide} data-aos="fade-up" />
      </Stack>
    </Stack>
  );
}
