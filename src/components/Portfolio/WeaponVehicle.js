import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import img3 from "../../assets/weapon_vehicle_1.jpg";
import img4 from "../../assets/weapon_vehicle_2.jpg";
import img5 from "../../assets/weapon_vehicle_3.jpg";
import img6 from "../../assets/weapon_vehicle_4.jpg";

export default function WeaponVehicle(props) {
  return (
    <Stack w={["95vw", "80vw", "63vw"]} mb={["80px", "100px", "120px"]}>
      <Slider ref={props.slide} {...props.settings}>
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
            alt="img5"
            w={["95vw", "80vw", "63vw"]}
            h={["80vw", "60vw", "45vw"]}
          />
        </div>
        <div>
          <Image
            src={img4.src}
            alt="img4"
            w={["95vw", "80vw", "63vw"]}
            h={["80vw", "60vw", "45vw"]}
          />
        </div>
        <div>
          <Image
            src={img6.src}
            alt="img6"
            w={["95vw", "80vw", "63vw"]}
            h={["80vw", "60vw", "45vw"]}
          />
        </div>
      </Slider>
      <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"2em"}>
        WEAPON VEHICLE
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
