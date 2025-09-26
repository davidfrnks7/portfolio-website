"use client";

import { JSX } from "react";
import {
  Box,
  HStack,
  ScrollArea,
  useTabs,
  VStack,
  Text
} from "@chakra-ui/react";
import TabsNav, { TabsObj } from "@/components/ui/nav/tabs/Tabs";
import BackgroundImage from "@/components/ui/bgImage";

const BioPageNav = (): JSX.Element => {
  const defaultValue = "Professional";
  const bios: TabsObj[] = [
    { title: "Professional", uri: "/bio/professional" },
    { title: "Personal", uri: "/bio/personal" }
  ];

  const tabs = useTabs({
    defaultValue: defaultValue
  });

  return (
    <HStack
      h="100vh"
      w="100vw"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <BackgroundImage />
      <Box h="1000px" w="500px">
        {"Placeholder image"}
      </Box>
      <VStack>
        <TabsNav
          tabs={bios}
          defaultValue={defaultValue}
          currentValue={tabs}
          title="bio-tabs"
        />
        <Box>
          <ScrollArea.Root
            colorPalette="blue"
            variant="always"
            height="1000px"
            w="100%"
          >
            <ScrollArea.Viewport>
              <ScrollArea.Content>
                <Text>{`This will be the content from ${tabs.value}`}</Text>
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar>
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
          </ScrollArea.Root>
        </Box>
      </VStack>
    </HStack>
  );
};

export default BioPageNav;
