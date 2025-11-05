"use client";

import { Fragment, JSX, useState } from "react";
import BackgroundImage from "@/components/ui/bgImage";
import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import icons, { IconTuple, tabs } from "./Icons";
import { TabsObj } from "@/components/ui/nav/Tabs";
import FilterMenu from "@/components/ui/nav/FilterMenu";

const SkillsPage = (): JSX.Element => {
  // Filter
  const [filterState, setFilterState] = useState("All");
  const filtersMenu = tabs.map((element) => element[0]);
  let filteredIcons = Object.values(icons).flat();

  //  Filters array
  let filtersArr: TabsObj[] = [] as TabsObj[];

  // Add "all" to the start of the array
  if (filtersArr.length === 0) {
    filtersArr.push({ title: "All", uri: "?skills=all" });
  }

  // Concat the rest of the items to the filters array.
  if (tabs.length >= 1) {
    filtersArr = filtersArr.concat(
      tabs.map((tuple) => {
        return { uri: `?skill=${tuple[0]}`, title: tuple[1] };
      })
    );
  }

  // Verify the filter is a valid key in the icons object.
  if (filterState !== null) {
    if (filtersMenu.includes(filterState)) {
      const tuple = tabs.find((tuple) => filterState === tuple[0]);
      if (tuple) {
        // Add only those items to the array that will be displayed
        filteredIcons = icons[tuple[1]];
      }
    }
  }

  return (
    <Fragment>
      <BackgroundImage />
      <VStack minH="100vh" h="100%" w="100%" py="10vh" id="skills" gap={4}>
        <Box w="80%" textAlign="left">
          <FilterMenu
            title="skill-filter-menu"
            filters={filtersArr}
            currentValue={filterState}
            updateValue={setFilterState}
          />
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4, lg: 5, xl: 6, "2xl": 8 }}
          px={{ base: 6, lg: "5vw", "2xl": "10vw" }}
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
    </Fragment>
  );
};

export default SkillsPage;
