import React from "react";
import { Flex, Text, Stack, Image, Box, Button } from "@chakra-ui/react";

export default function Portfolio() {
  return (
    <Stack w="100%" py="100px" bg="white" gap={5} id="portfolio" zIndex={100}>
      <Text textAlign={"center"} fontWeight={"light"} fontSize={"2.5em"}>
        PORTFOLIO
      </Text>
      <Flex w="100%" justify={"center"}>
        <Flex w="50px" h="3px" bg="black"></Flex>
      </Flex>
    </Stack>
  );
}
