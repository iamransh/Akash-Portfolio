import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import img1 from "../../assets/machine-render-color.jpg";
import img2 from "../../assets/machine-render-black.jpg";

export default function Machine(props) {
  return (
    <Stack w={["95vw", "80vw", "50vw"]} mb={["80px", "100px", "120px"]}>
      <Slider ref={props.slide} {...props.settings}>
        <div>
          <Image
            src={img1.src}
            alt="img1"
            w={["95vw", "80vw", "50vw"]}
            h={["95vw", "80vw", "50vw"]}
          />
        </div>
        <div>
          <Image
            src={img2.src}
            alt="img2"
            w={["95vw", "80vw", "50vw"]}
            h={["95vw", "80vw", "50vw"]}
          />
        </div>
      </Slider>
      <Text
        textAlign={"center"}
        fontWeight={"semibold"}
        fontSize={"2em"}
        mt="25px"
      >
        MACHINE
      </Text>
      <Text>
        {
          "I created this model using Autodesk Maya during my early days of learning the software. It's a project where I got to explore texturing and basic lighting techniques. For the first time, I used Substance Painter for texturing, and I rendered it using the Arnold engine"
        }
      </Text>
    </Stack>
  );
}
