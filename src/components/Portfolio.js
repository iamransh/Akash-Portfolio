import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import img1 from "../assets/train_color.jpg";
import img2 from "../assets/train_base.jpg";

export default function Portfolio() {
  const slide = useRef(null);
  const settings = {
    autoplay: false,
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
      <Flex w="100%" justify={"center"} mt="10px">
        <Stack w={["95vw", "80vw", "60vw"]}>
          <Slider ref={slide} {...settings}>
            <div>
              <Image
                src={img1.src}
                alt="img1"
                w={["95vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
            <div>
              <Image
                src={img2.src}
                alt="img2"
                w={["95vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
          </Slider>
        </Stack>
      </Flex>
    </Stack>
  );
}
