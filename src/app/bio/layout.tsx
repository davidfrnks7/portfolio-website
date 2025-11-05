"use client";

import { Fragment, JSX } from "react";
import Image from "next/image";
import {
  ScrollArea,
  useTabs,
  VStack,
  Text,
  Box,
  Flex,
  For
} from "@chakra-ui/react";
import BackgroundImage from "@/components/ui/bgImage";
import portrait from "../../../public/images/portrait.jpg";
import { usePathname } from "next/navigation";
import TabsNav, { TabsObj } from "@/components/ui/nav/Tabs";
import bio from "@/data/bio";

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

  return (
    <Fragment>
      <BackgroundImage />
      <Flex
        id="bio"
        h="100vh"
        w="auto"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Flex
          h={{ base: "100%", lg: "auto" }}
          w="auto"
          py={{ base: "2.5rem", lg: "" }}
          p={{ base: "", lg: "2.5rem" }}
          mx={{ base: "", lg: "5vw" }}
          rounded={{ base: "", lg: "4xl" }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          alignContent="center"
          alignItems={{ base: "center", lg: "stretch" }}
          bg="brand.content"
          gap={{ base: 0, lg: 6 }}
          boxShadow={{
            base: "",
            lg: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
          }}
          border={{ base: "", lg: "1px solid white" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Box
            id="portrait"
            w={{ base: "70%", sm: "40%", md: "30%", xl: "25%" }}
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
              maxH={{ base: "40vh", sm: "45vh", md: "35vh", lg: "100%" }}
              w="100%"
            >
              <ScrollArea.Viewport>
                <ScrollArea.Content>
                  <VStack gap={6}>
                    {tabs.value !== null ? (
                      <For each={bio[tabs.value.toLowerCase()]}>
                        {(text) => {
                          return (
                            <Text w="100%" key={text.replaceAll(" ", "-")}>
                              {text}
                            </Text>
                          );
                        }}
                      </For>
                    ) : null}
                  </VStack>
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
    </Fragment>
  );
};

export default BioPageNav;
