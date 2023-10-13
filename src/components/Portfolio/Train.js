import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import img1 from "../../assets/train_color.jpg";
import img2 from "../../assets/train_base.jpg";

export default function Train(props) {
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
        TRAIN
      </Text>
      <Text>
        {
          "I created this cool Low Poly Train Model using Autodesk Maya, where I learned how to add textures, played around with lighting, and even dabbled in using PRB materials. To give it that final touch, I used the Arnold rendering engine."
        }
      </Text>
    </Stack>
  );
}
