"use client";

import { JSX } from "react";
import Image from "next/image";
import {
  HStack,
  ScrollArea,
  useTabs,
  VStack,
  Text,
  Box,
  Flex
} from "@chakra-ui/react";
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
   * ! Make page responsive to screen size.
   * ! Add bios to a file in _lib folder.
   * ! Remove hard-coded height and width props.
   * * Import and use the bios file.
   * * Stylize the component more.
   */

  return (
    <Flex
      id="bio"
      h="100vh"
      w="100vw"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <BackgroundImage />
      <HStack
        h="auto"
        w="auto"
        p="2.5rem"
        mx="5vw"
        rounded="4xl"
        justifyContent="flex-start"
        alignContent="center"
        alignItems="center"
        bg="brand.content"
        gap={6}
      >
        <Box id="portrait" h="auto" w={{ lg: "30%", xl: "25%" }} m={6}>
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
          flex={1}
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
            height="1000px"
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
      </HStack>
    </Flex>
  );
};

export default BioPageNav;
