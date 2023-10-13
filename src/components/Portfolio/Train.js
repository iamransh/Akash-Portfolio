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
        LOW POLY MODEL
      </Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea tempore,
        quidem doloremque commodi itaque ad quaerat numquam modi voluptate rerum
        accusamus sapiente temporibus culpa reiciendis fugit sunt impedit ipsa
        natus.
      </Text>
    </Stack>
  );
}
