import React, { useRef } from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import img3 from "../../assets/weapon_vehicle_1.jpg";
import img4 from "../../assets/weapon_vehicle_2.jpg";
import img5 from "../../assets/weapon_vehicle_3.jpg";
import img6 from "../../assets/weapon_vehicle_4.jpg";

export default function WeaponVehicle(props) {
  return (
    <Stack w={["95vw", "80vw", "50vw"]} mb={["80px", "100px", "120px"]}>
      <Slider ref={props.slide} {...props.settings}>
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
            alt="img5"
            w={["95vw", "80vw", "50vw"]}
            h={["95vw", "80vw", "50vw"]}
          />
        </div>
        <div>
          <Image
            src={img5.src}
            alt="img4"
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
      </Slider>
      <Text
        textAlign={"center"}
        fontWeight={"semibold"}
        fontSize={"2em"}
        mt="25px"
      >
        WEAPON VEHICLE
      </Text>
      <Text>
        This gaming prop was crafted using Autodesk Maya software, where it
        underwent meticulous modeling and intricate texturing. To enhance its
        visual appeal, we played around with various lighting techniques and
        high-quality HDRIs. The textures were skillfully created using Substance
        Painter, which greatly assisted in wrapping the object. Lastly, the
        rendering was done using the powerful Arnold engine.
      </Text>
    </Stack>
  );
}
