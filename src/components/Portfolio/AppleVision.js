import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import img1 from "../../assets/apple-vision-trail.jpg";
import img2 from "../../assets/apple-vision-trail-2.jpg";
import img3 from "../../assets/apple-vision-1.jpg";
import img4 from "../../assets/apple-vision-1.5.jpg";
import img5 from "../../assets/apple-vision-2.jpg";
import img6 from "../../assets/apple-vision-2.5.jpg";
import img7 from "../../assets/apple-vision-3.jpg";
import img8 from "../../assets/apple-vision-3.5.jpg";

export default function AppleVision(props) {
  return (
    <Stack w={["95vw", "80vw", "50vw"]} mb={["80px", "100px", "120px"]}>
      <Slider ref={props.slide} {...props.settings}>
        {/* <div>
          <Image
            src={img1.src}
            alt="img1"
            w={["95vw", "80vw", "60vw"]}
            h={["80vw", "60vw", "45vw"]}
          />
        </div>
        <div>
          <Image
            src={img2.src}
            alt="img2"
            w={["95vw", "80vw", "60vw"]}
            h={["80vw", "60vw", "45vw"]}
          />
        </div> */}
        <div>
          <Image
            src={img3.src}
            alt="img3"
            w={["95vw", "80vw", "50vw"]}
            h={["95vw", "80vw", "50vw"]}
          />
        </div>
        <div>
          <Image
            src={img4.src}
            alt="img4"
            w={["95vw", "80vw", "50vw"]}
            h={["95vw", "80vw", "50vw"]}
          />
        </div>
        <div>
          <Image
            src={img5.src}
            alt="img5"
            w={["95vw", "80vw", "50vw"]}
            h={["95vw", "80vw", "50vw"]}
          />
        </div>
        <div>
          <Image
            src={img6.src}
            alt="img6"
            w={["95vw", "80vw", "50vw"]}
            h={["95vw", "80vw", "50vw"]}
          />
        </div>
        <div>
          <Image
            src={img7.src}
            alt="img7"
            w={["95vw", "80vw", "50vw"]}
            h={["95vw", "80vw", "50vw"]}
          />
        </div>
        <div>
          <Image
            src={img8.src}
            alt="img8"
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
        APPLE VISION PRO
      </Text>
      <Text>
        {
          "I created this product using Autodesk Maya, where I focused on precise modeling and texturing. When it came to texturing, I utilized Physically Based Rendering (PBR) materials and adjusted texture attributes to achieve the desired look. From setting up the lighting to the final rendering, I handled all aspects within Maya, employing the Arnold rendering engine for high-quality output."
        }
      </Text>
    </Stack>
  );
}
