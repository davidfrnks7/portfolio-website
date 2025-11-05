"use client";

import { JSX } from "@emotion/react/jsx-runtime";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { tabs } from "@/app/skills/Icons";
import { Icon } from "@iconify/react";

export interface FilterObj {
  title: string;
  uri: string;
  // content: string;
}

export interface FilterProps {
  filters: FilterObj[];
  currentValue: string;
  updateValue: Dispatch<SetStateAction<string>>;
  title: string;
}

const FilterMenu = ({
  filters,
  currentValue,
  updateValue,
  title
}: FilterProps): JSX.Element => {
  const router = useRouter();
  const tabFilters = tabs.map((element) => element[0]);

  // Query parameters. /uri?KEY=PARAM
  const filterParams = useSearchParams();
  const filter = filterParams.get("skill");

  useEffect(() => {
    if (filter) {
      if (currentValue !== filter) {
        updateValue(filter);
      }

      if (tabFilters.includes(filter) === false && filter !== "all") {
        updateValue("All");
        router.replace("?skill=all");
      }
    } else {
      updateValue("all");
    }
  }, [currentValue, filter, router, tabFilters, updateValue]);

  return (
    <Menu.Root id={title}>
      <Menu.Trigger asChild>
        <Button p={6} variant="filterButton">
          <Icon icon="akar-icons:filter" />
          {"Filter"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            boxShadow="rgba(0, 134, 255, 0.2) 0px 0px 15px, rgba(0, 134, 255, 0.15) 0px 0px 3px 1px"
            border="1px solid rgba(0, 134, 255, 0.4)"
            minW="10rem"
            bg="brand.content"
          >
            <Menu.RadioItemGroup value={filter === null ? "all" : filter}>
              {filters.map(({ title, uri }: FilterObj) => (
                <Menu.RadioItem
                  _hover={{ bg: "brand.hover" }}
                  onClick={() => {
                    router.replace(uri);
                    updateValue(uri);
                  }}
                  key={title.replaceAll(" ", "-")}
                  value={uri.split("=")[1].toLowerCase()}
                >
                  {title}
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default FilterMenu;
