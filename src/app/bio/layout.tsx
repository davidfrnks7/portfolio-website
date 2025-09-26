"use client";

import { JSX } from "react";
import Image from "next/image";
import {
  HStack,
  ScrollArea,
  useTabs,
  VStack,
  Text,
  Flex,
  Box
} from "@chakra-ui/react";
import TabsNav, { TabsObj } from "@/components/ui/nav/tabs/Tabs";
import BackgroundImage from "@/components/ui/bgImage";
import portrait from "../../../public/images/portrait.jpg";

const BioPageNav = (): JSX.Element => {
  const defaultValue = "Professional";
  const bios: TabsObj[] = [
    { title: "Professional", uri: "/bio/professional" },
    { title: "Personal", uri: "/bio/personal" }
  ];

  const tabs = useTabs({
    defaultValue: defaultValue
  });

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
      h="100vh"
      w="100vw"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <BackgroundImage />
      <HStack
        px={4}
        py={8}
        rounded="3xl"
        w="80%"
        justifyContent="flex-start"
        alignContent="center"
        alignItems="center"
        bg="#09090b80"
        gap={6}
      >
        <Box h="auto" w={{ lg: "30%", xl: "25%" }} m={6}>
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
            defaultValue={defaultValue}
            currentValue={tabs}
            title="bio-tabs"
          />
          <ScrollArea.Root
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
