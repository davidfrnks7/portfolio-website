"use client";

import { JSX } from "react";
import BackgroundImage from "@/components/ui/bgImage";
import { Box, Heading, SimpleGrid, useTabs, VStack } from "@chakra-ui/react";
import icons, { IconTuple, tabs } from "./Icons";
import { useSearchParams } from "next/navigation";
import TabsNav, { TabsObj } from "@/components/ui/nav/Tabs";

const SkillsPage = (): JSX.Element => {
  // Tabs store
  const tabsState = useTabs({
    defaultValue: "all"
  });

  // Query parameters. /uri?KEY=PARAM
  const filterParams = useSearchParams();
  const filter = filterParams.get("skill");
  const tabFilters = tabs.map((element) => element[0]);
  let filteredIcons = Object.values(icons).flat();

  //  Tabs array
  let tabsArr: TabsObj[] = [] as TabsObj[];

  // Add "all" to the start of the array
  if (tabsArr.length === 0) {
    tabsArr.push({ title: "All", uri: "?skills=all" });
  }

  // Concat the rest of the items to the tabs array.
  if (tabs.length >= 1) {
    tabsArr = tabsArr.concat(
      tabs.map((tuple) => {
        return { uri: `?skill=${tuple[0]}`, title: tuple[1] };
      })
    );
  }

  // Update tabs on render
  if (filter === "all" || filter === null) {
    tabsState.setValue("All");
  }

  // Verify the param is a valid key in the icons object.
  if (filter !== null) {
    if (tabFilters.includes(filter)) {
      const tuple = tabs.find((tuple) => filter === tuple[0]);
      if (tuple) {
        filteredIcons = icons[tuple[1]];
        tabsState.setValue(tuple[1]);
      }
    }
  }

  return (
    <VStack
      minH="100vh"
      h="100%"
      py="5vh"
      px={{ base: 6, lg: "5vw", "2xl": "10vw" }}
      id="skills"
      gap={10}
    >
      <BackgroundImage />
      <Box bg="brand.content">
        <TabsNav
          tabs={tabsArr}
          title="skills"
          defaultValue="all"
          currentValue={tabsState}
        />
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4, lg: 5, xl: 6, "2xl": 8 }}
        gap={{ base: 10, md: 8 }}
        w="100%"
      >
        {filteredIcons.map((icon: IconTuple) => (
          <VStack
            key={icon[0].replaceAll(" ", "-")}
            id={icon[0].replaceAll(" ", "-")}
            bg="brand.content"
            boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
            border="1px solid white"
            justifyContent="center"
            alignContent="center"
            textAlign="center"
            p={4}
            rounded="full"
            w="100%"
          >
            <Box fontSize="75px" color="blackAlpha.700">
              {icon[1]}
            </Box>
            <Heading textAlign="center" as="h4" size="md">
              {icon[0]}
            </Heading>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default SkillsPage;
