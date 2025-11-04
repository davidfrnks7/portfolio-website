"use client";

import { JSX } from "react";
import Image from "next/image";
import { ScrollArea, useTabs, VStack, Text, Box, Flex } from "@chakra-ui/react";
import TabsNav, { TabsObj } from "@/components/ui/nav/tabs/Tabs";
import BackgroundImage from "@/components/ui/bgImage";
import portrait from "../../../public/images/portrait.jpg";
import { usePathname } from "next/navigation";

const BioPageNav = (): JSX.Element => {
  // Used to set the default tab
  const pathname = usePathname();
  let pathString: string | string[] = pathname.split("/");

  if (pathString.length < 1) {
    pathString = pathString[2].charAt(0).toUpperCase() + pathString[2].slice(1);
  } else {
    pathString = "Professional";
  }

  // Tabs store
  const tabs = useTabs({
    defaultValue: pathString
  });

  // Tabs
  const bios: TabsObj[] = [
    { title: "Professional", uri: "/bio/professional" },
    { title: "Personal", uri: "/bio/personal" }
  ];

  /**
   * TODOS:
   * ! Add bios to a file in _lib folder.
   * * Import and use the bios file.
   */

  return (
    <Flex
      id="bio"
      h="100vh"
      w="auto"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <BackgroundImage />
      <Flex
        h={{ base: "100%", lg: "auto" }}
        w="auto"
        p={{ base: "", lg: "2.5rem" }}
        py={{ base: "2rem", lg: "" }}
        mx={{ base: "", lg: "5vw" }}
        rounded={{ base: "", lg: "4xl" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
        alignContent="center"
        alignItems="center"
        bg="brand.content"
        gap={{ base: 0, lg: 6 }}
        boxShadow={{
          base: "",
          lg: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
        }}
        border={{ base: "", lg: "1px solid white" }}
        direction={{ base: "column", lg: "row" }}
        minH={{ base: "100vh", lg: "0" }}
      >
        <Box
          id="portrait"
          h="auto"
          w={{ base: "70%", sm: "40%", md: "35%", lg: "30%", xl: "25%" }}
          m={6}
        >
          <Image
            layout="intrinsic"
            src={portrait}
            alt='Picture of David "Leo" Franks'
            placeholder="blur"
          />
        </Box>
        <VStack
          justifyContent="flex-start"
          alignContent="flex-start"
          alignItems="flex-start"
          w={{ base: "80vw", sm: "90vw", lg: "80vw" }}
        >
          <TabsNav
            tabs={bios}
            defaultValue={pathString}
            currentValue={tabs}
            title="bio-tabs"
          />
          <ScrollArea.Root
            id="bio-text"
            colorPalette="blue"
            variant="always"
            minH={{ base: "35vh", md: "35vh", lg: "60vh" }}
            w="100%"
            bg="#09090bE6"
          >
            <ScrollArea.Viewport>
              <ScrollArea.Content>
                <Text>{`This will be the content from the ${tabs.value} bio`}</Text>
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar>
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
          </ScrollArea.Root>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default BioPageNav;
