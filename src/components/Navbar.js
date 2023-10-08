import { Flex, Text, Stack, Image, Link } from "@chakra-ui/react";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import hamburgerIcon from "../assets/hamburgerIcon.svg";
import linkedin from "../assets/Akash_linkedin_logo.png";
import insta from "../assets/Akash_insta_logo.png";
import behance from "../assets/behance_logo.png";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const NavBarLinks = [
    { name: "HOME", link: "/" },
    { name: "SKILLS", link: "/#skills" },
    { name: "PORTFOLIO", link: "/#portfolio" },
    { name: "ABOUT ME", link: "/#about" },
    { name: "CONTACT", link: "/#contact" },
  ];
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor={"rgb(36,36,36)"}>
          <DrawerCloseButton color={"white"} />
          <DrawerBody color={"white"}>
            <Stack
              zIndex={400}
              direction="column"
              bg="rgb(36,36,36)"
              as="nav"
              py={"20px"}
              fontSize={"20px"}
            >
              <Stack px="80px">
                {/* <Link href="/">
                  <Image src={Logo.src} alt="Clean Water" w="100px" />
                </Link> */}
              </Stack>
              <Stack w="100%">
                <Stack
                  direction="column"
                  justify={"space-evenly"}
                  align={"center"}
                >
                  {NavBarLinks.map((link, index) => (
                    <Stack key={index} my="25px">
                      <Text
                        cursor={"pointer"}
                        onClick={() => {
                          router.push(`${link.link}`);
                        }}
                        fontWeight={"medium"}
                        className={`navbar__link ${
                          router.pathname === `${link.link}`
                            ? "sidebar__link--active"
                            : ""
                        }`}
                      >
                        {link.name}
                      </Text>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        justify={"center"}
        bg="rgb(36,36,36)"
        py="20px"
        zIndex={400}
        position={"fixed"}
        w="100%"
        top="0"
      >
        <Flex
          justify={"space-evenly"}
          w={["100%", "90%", "80%", "70%"]}
          bg="transparent"
          color="white"
          display={["none", "flex", "flex"]}
        >
          {NavBarLinks.map((link, index) => (
            <Flex key={index}>
              <Text
                cursor={"pointer"}
                onClick={() => {
                  router.push(`${link.link}`);
                }}
                fontWeight={"light"}
                className={`navbar__link ${
                  router.pathname === `${link.link}`
                    ? "sidebar__link--active"
                    : ""
                }`}
              >
                {link.name}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Flex
          justify={"space-evenly"}
          w="80%"
          bg="transparent"
          color="white"
          display={["flex", "none", "none"]}
        >
          <Link
            href="https://www.linkedin.com/in/akash-srivastav-1934861b3/"
            isExternal
          >
            <Image src={linkedin.src} alt="linkedin" w="40px" h="40px" />
          </Link>
          <Link
            href="https://www.instagram.com/de_etheric_designs/?img_index=1"
            isExternal
          >
            <Image src={insta.src} alt="insta" w="40px" h="40px" />
          </Link>
          <Link href="https://www.behance.net/skymrreal" isExternal>
            <Image src={behance.src} alt="insta" w="40px" h="40px" />
          </Link>
        </Flex>
        <Flex display={["flex", "none", "none"]} w="20%" align={"center"}>
          <Image src={hamburgerIcon.src} onClick={onOpen} alt="icon" />
        </Flex>
      </Flex>
    </>
  );
}
