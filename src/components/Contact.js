import React, { useState } from "react";
import { send } from "emailjs-com";
import {
  Flex,
  Text,
  Stack,
  Image,
  Box,
  Button,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import bg2 from "../assets/Akash_bg.png";
import profile from "../assets/Akash_profile.jpg";

export default function Contact() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handelSubmit = () => {
    console.log(name, email, subject, message);
    let body = {
      name,
      email,
      subject,
      message,
    };
    if (!name || !email || !subject || !message) {
      toast({
        title: `error toast`,
        status: "error",
        isClosable: true,
      });

      return;
    }
    send("service_rgdxfns", "template_6dtjq0a", body, "NA0GC-Pna657X0c58")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast({
          title: `success toast`,
          status: "success",
          isClosable: true,
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <Stack
      zIndex={100}
      w="100%"
      py="100px"
      bgImg={`url(${bg2.src})`}
      backgroundSize={"cover"}
      align={"center"}
      justify={"center"}
      id="contact"
    >
      <Image
        src={profile.src}
        alt="profile"
        w={["250px", "300px", "300px"]}
        h={["250px", "300px", "300px"]}
        borderRadius={"50%"}
        mb="40px"
      />
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
              akashsri3d@gmail.com
            </Text>
          </Stack>
          <Stack w={["100%", "100%", "50%"]} align={"center"}>
            <Box w="90%">
              <Stack w="100%" gap="2" align="center">
                <Input
                  name="name"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Name"
                  required
                  width={["90%", "70%", "100%"]}
                  height="35px"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
                <Input
                  name="email"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Email"
                  required
                  width={["90%", "70%", "100%"]}
                  height="35px"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <Input
                  name="subject"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Subject"
                  required
                  width={["90%", "70%", "100%"]}
                  height="35px"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  value={subject}
                />
                <Textarea
                  name="message"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Message"
                  required
                  width={["90%", "70%", "100%"]}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                />
                <Flex width={["90%", "70%", "100%"]} justify={"flex-end"}>
                  <Button
                    bg="rgb(35,35,35)"
                    color="white"
                    className="button2"
                    onClick={handelSubmit}
                  >
                    Send
                  </Button>
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
}
