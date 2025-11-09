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
  For,
  Presence
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
    <Flex
      id="bio"
      w="auto"
      h="94.5vh"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <Presence
        present={true}
        animationStyle={{
          _open: "scale-fade-in",
          _closed: "scale-fade-out"
        }}
        animationDuration="slowest"
        h={{ base: "100%", lg: "auto" }}
        w="100%"
      >
        <Flex
          h={{ base: "100%", lg: "auto" }}
          w="auto"
          p={{ base: "0", lg: "2.5rem" }}
          mx={{ base: "0", lg: "5vw" }}
          rounded={{ base: "0", lg: "4xl" }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          alignContent={{ base: "space-around", lg: "center" }}
          alignItems={{ base: "center", lg: "stretch" }}
          bg="brand.content"
          gap={6}
          boxShadow={{
            base: "",
            lg: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
          }}
          border={{ base: "0", lg: "1px solid white" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Box
            id="portrait"
            w={{ base: "70%", sm: "40%", md: "30%", xl: "25%" }}
            mx={6}
            my="auto"
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
            w="100%"
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
              h={{ base: "30vh", lg: "40vh" }}
              w="100%"
            >
              <ScrollArea.Viewport>
                <ScrollArea.Content mx={{ base: 10, lg: 0 }}>
                  {tabs.value !== null ? (
                    <Presence
                      present={
                        tabs.value.toLowerCase() ===
                        pathname.split("/").pop()?.toLowerCase()
                      }
                      animationStyle={{
                        _open: "scale-fade-in",
                        _closed: "scale-fade-out"
                      }}
                      animationDuration="slowest"
                    >
                      <VStack gap={6}>
                        <For each={bio[tabs.value.toLowerCase()]}>
                          {(text) => {
                            return (
                              <Text w="100%" key={text.replaceAll(" ", "-")}>
                                {text}
                              </Text>
                            );
                          }}
                        </For>
                      </VStack>
                    </Presence>
                  ) : null}
                </ScrollArea.Content>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar>
                <ScrollArea.Thumb />
              </ScrollArea.Scrollbar>
              <ScrollArea.Corner />
            </ScrollArea.Root>
          </VStack>
        </Flex>
      </Presence>
      <BackgroundImage />
    </Flex>
  );
};

export default BioPageNav;
