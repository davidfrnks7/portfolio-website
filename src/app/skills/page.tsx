/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Fragment, JSX, useEffect, useState } from "react";
import BackgroundImage from "@/components/ui/bgImage";
import { Box, Heading, Presence, SimpleGrid, VStack } from "@chakra-ui/react";
import icons, { tabs } from "./Icons";
import { TabsObj } from "@/components/ui/nav/Tabs";
import FilterMenu from "@/components/ui/nav/FilterMenu";
import filterIconsArr from "./filterIconsArr";

const SkillsPage = (): JSX.Element => {
  // Filter
  const [filterState, setFilterState] = useState("All");
  const [filteredIcons, setFilteredIcons] = useState(
    filterIconsArr(Object.values(icons).flat())
  );
  const [filtersMenu, setFiltersMenu] = useState(
    tabs.map((element) => element[0])
  );
  const [filtersArr, setFiltersArr] = useState([] as TabsObj[]);

  useEffect(() => {
    if (filtersArr.length === 0) {
      let newFiltersArr = [];
      const newFiltersMenuArr = filtersMenu;
      // Add "all" to the start of the array
      newFiltersArr.push({ title: "All", uri: "?skills=all" });
      newFiltersMenuArr.unshift("all");
      newFiltersArr = newFiltersArr.concat(
        tabs.map((tuple) => {
          return { uri: `?skill=${tuple[0]}`, title: tuple[1] };
        })
      );
      setFiltersMenu(newFiltersMenuArr);
      return setFiltersArr(newFiltersArr);
    }
  }, [filtersArr, filtersMenu]);

  useEffect(() => {
    // Verify the filter is a valid key in the icons object.
    if (filterState !== null) {
      if (filtersMenu.includes(filterState)) {
        if (filterState === "all") {
          return setFilteredIcons(filterIconsArr(Object.values(icons).flat()));
        }

        const tuple = tabs.find((tuple) => filterState === tuple[0]);
        if (tuple) {
          // Add only those items to the array that will be displayed
          return setFilteredIcons(
            filterIconsArr(Object.values(icons).flat(), icons[tuple[1]])
          );
        }
      }
    }
  }, [filterState, filtersMenu]);

  return (
    <Fragment>
      <BackgroundImage />
      <VStack minH="100vh" h="100%" w="100%" py="2.5vh" id="skills" gap={4}>
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
          {filteredIcons.map(({ icon, show }) => (
            <Presence
              present={show}
              animationStyle={{
                _open: "scale-fade-in",
                _closed: "scale-fade-out"
              }}
              animationDuration="slowest"
              key={icon[0].replaceAll(" ", "-")}
              id={icon[0].replaceAll(" ", "-")}
            >
              <VStack
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
            </Presence>
          ))}
        </SimpleGrid>
      </VStack>
    </Fragment>
  );
};

export default SkillsPage;
