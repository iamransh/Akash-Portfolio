import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import img1 from "../../assets/donut-1.png";
import img2 from "../../assets/donut-2.png";
import img3 from "../../assets/donut-3.png";
import img4 from "../../assets/donut-4.png";
import img5 from "../../assets/donut-5.png";
import img6 from "../../assets/donut-6.png";
// import img7 from "../../assets/donut-7.png";
// import img8 from "../../assets/donut-8.png";

export default function Donut(props) {
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
        {/* <div>
        <Image
          src={img7.src}
          alt="img7"
          w={["95vw", "80vw", "60vw"]}
          h={["80vw", "60vw", "45vw"]}
        />
      </div>
      <div>
        <Image
          src={img8.src}
          alt="img8"
          w={["95vw", "80vw", "60vw"]}
          h={["80vw", "60vw", "45vw"]}
        />
      </div> */}
      </Slider>
      <Text
        textAlign={"center"}
        fontWeight={"semibold"}
        fontSize={"2em"}
        mt="25px"
      >
        DONUT
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
