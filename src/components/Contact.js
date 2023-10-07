import React from "react";
import {
  Flex,
  Text,
  Stack,
  Image,
  Box,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import bg2 from "../assets/Akash_bg.png";

export default function Contact() {
  const handelSubmit = () => {};
  return (
    <Stack
      w="100%"
      py="100px"
      bgImg={`url(${bg2.src})`}
      backgroundSize={"cover"}
      align={"center"}
      justify={"center"}
    >
      <Image />
      <Stack
        className="contact_form"
        w="800px"
        bg="white"
        px={["40px", "80px", "80px"]}
        py="50px"
        gap={8}
      >
        <Text textAlign={"center"} fontWeight={"light"} fontSize={"2.5em"}>
          CONTACT ME
        </Text>
        <Flex w="100%" justify={"center"} mt="-10px">
          <Flex w="50px" h="3px" bg="black"></Flex>
        </Flex>
        <Flex w="100%" flexDir={["column", "column", "row"]}>
          <Stack
            w={["100%", "100%", "50%"]}
            align={["center", "center", "normal"]}
            gap="8"
            mb={["50px", "50px", "0px"]}
          >
            <Text
              fontWeight={"light"}
              fontSize={"18px"}
              textAlign={["center", "center", "left"]}
            >
              Currently working and living in Pune, Maharashtra, India.
            </Text>
            <Text fontWeight={"light"} fontSize={"18px"}>
              jackbromheaduk@gmail.com
            </Text>
            <Text fontWeight={"light"} fontSize={"18px"}>
              Tel: +44 (0) 7757634528
            </Text>
          </Stack>
          <Stack w={["100%", "100%", "50%"]} align={"center"}>
            <form onSubmit={handelSubmit} style={{ width: "90%" }}>
              <Stack w="100%" gap="2" align="center">
                <Input
                  name="name"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Name"
                  required
                  width={["90%", "70%", "100%"]}
                  height="35px"
                />
                <Input
                  name="Email"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Email"
                  required
                  width={["90%", "70%", "100%"]}
                  height="35px"
                />
                <Input
                  name="Subject"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Subject"
                  required
                  width={["90%", "70%", "100%"]}
                  height="35px"
                />
                <Textarea
                  name="Message"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Message"
                  required
                  width={["90%", "70%", "100%"]}
                />
                <Flex width={["90%", "70%", "100%"]} justify={"flex-end"}>
                  <Button bg="rgb(35,35,35)" color="white" className="button2">
                    Send
                  </Button>
                </Flex>
              </Stack>
            </form>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
}
