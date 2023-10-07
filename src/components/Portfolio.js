import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import img1 from "../assets/train_color.jpg";
import img2 from "../assets/train_base.jpg";
import img3 from "../assets/weapon_vehicle_1.jpg";
import img4 from "../assets/weapon_vehicle_2.jpg";
import img5 from "../assets/weapon_vehicle_3.jpg";
import img6 from "../assets/weapon_vehicle_4.jpg";

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
        <Stack w={["95vw", "80vw", "63vw"]} mb={["80px", "100px", "120px"]}>
          <Slider ref={slide} {...settings}>
            <div>
              <Image
                src={img1.src}
                alt="img1"
                w={["95vw", "80vw", "63vw"]}
                h={["80vw", "60vw", "45vw"]}
              />
            </div>
            <div>
              <Image
                src={img2.src}
                alt="img2"
                w={["95vw", "80vw", "63vw"]}
                h={["80vw", "60vw", "45vw"]}
              />
            </div>
          </Slider>
          <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"2em"}>
            LOW POLY MODEL
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            tempore, quidem doloremque commodi itaque ad quaerat numquam modi
            voluptate rerum accusamus sapiente temporibus culpa reiciendis fugit
            sunt impedit ipsa natus.
          </Text>
        </Stack>
        <Stack w={["95vw", "80vw", "63vw"]} mb={["80px", "100px", "120px"]}>
          <Slider ref={slide} {...settings}>
            <div>
              <Image
                src={img3.src}
                alt="img3"
                w={["95vw", "80vw", "63vw"]}
                h={["80vw", "60vw", "45vw"]}
              />
            </div>
            <div>
              <Image
                src={img5.src}
                alt="img3"
                w={["95vw", "80vw", "63vw"]}
                h={["80vw", "60vw", "45vw"]}
              />
            </div>
            <div>
              <Image
                src={img4.src}
                alt="img3"
                w={["95vw", "80vw", "63vw"]}
                h={["80vw", "60vw", "45vw"]}
              />
            </div>
            <div>
              <Image
                src={img6.src}
                alt="img3"
                w={["95vw", "80vw", "63vw"]}
                h={["80vw", "60vw", "45vw"]}
              />
            </div>
          </Slider>
          <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"2em"}>
            Weapon Vehicle
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            tempore, quidem doloremque commodi itaque ad quaerat numquam modi
            voluptate rerum accusamus sapiente temporibus culpa reiciendis fugit
            sunt impedit ipsa natus.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
