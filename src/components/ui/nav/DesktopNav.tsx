"use client";

import { Button, For, Heading, HStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { JSX } from "react";

interface DesktopNav {
  isHomePage: boolean;
}

const DesktopNav = ({ isHomePage }: DesktopNav): JSX.Element => {
  const router = useRouter();

  const navItems = [
    ["Home", "/"],
    ["Bio", "/bio"],
    ["Experience", "/experience"],
    ["Education", "/education"],
    ["Skills", "/skills"],
    ["Projects", "/projects"]
  ];

  return (
    <HStack
      justifyContent="space-between"
      display={{ base: "none", lg: "flex" }}
      h="auto"
      w="100%"
      gap="4"
      alignContent="center"
      alignItems="center"
      pos="fixed"
      top="5px"
      zIndex="100000"
      px="4"
    >
      <Heading as="h1" size="xl">
        {'David "Leo" Franks\' Portfolio Website'}
      </Heading>
      <HStack
        as="nav"
        display={{ base: "none", lg: "flex" }}
        h="auto"
        w="auto"
        gap="2"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <For each={navItems}>
          {(navItem, index) => (
            <Button
              variant="nav"
              id={`Desktop+${navItem[0]}+${index}`}
              key={`Desktop+${navItem[0]}+${index}`}
              onClick={() => router.push(navItem[1])}
              _hover={{
                bg: isHomePage ? "#005299" : ""
              }}
              borderWidth={isHomePage ? "0px 0px 2px 0px" : ""}
              borderRadius={isHomePage ? "8" : ""}
            >
              {navItem[0]}
            </Button>
          )}
        </For>
      </HStack>
    </HStack>
  );
};

export default DesktopNav;
