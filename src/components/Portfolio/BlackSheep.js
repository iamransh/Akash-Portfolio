import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import img1 from "../../assets/black-sheep-final.jpg";
import img2 from "../../assets/black-sheep-black.jpg";

export default function BlackSheep(props) {
  return (
    <Stack w={["95vw", "80vw", "50vw"]} mb={["80px", "100px", "120px"]}>
      <Slider ref={props.slide} {...props.settings}>
        <div>
          <Image
            src={img1.src}
            alt="img1"
            w={["95vw", "80vw", "50vw"]}
            h={["80vw", "60vw", "50vw"]}
          />
        </div>
        <div>
          <Image
            src={img2.src}
            alt="img2"
            w={["95vw", "80vw", "50vw"]}
            h={["80vw", "60vw", "50vw"]}
          />
        </div>
      </Slider>
      <Text
        textAlign={"center"}
        fontWeight={"semibold"}
        fontSize={"2em"}
        mt="25px"
      >
        BLACK SHEEP
      </Text>
      <Text>
        {
          "This mesmerizing scene was crafted using Autodesk Maya, where I envisioned a concept for a track cover titled 'Black Sheep' (please note that this is not an official cover). My primary emphasis in this composition revolves around the captivating textures and exquisite lighting. It's important to mention that every element, except for the sheep, was meticulously created by myself. To bring this vision to life, I harnessed the power of the Arnold render engine."
        }
      </Text>
    </Stack>
  );
}
