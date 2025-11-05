"use client";

import { useRouter } from "next/navigation";
import { JSX } from "react";
import { For, Tabs, UseTabsReturn } from "@chakra-ui/react";

export interface TabsObj {
  title: string;
  uri: string;
  // content: string;
}

export interface TabsProps {
  tabs: TabsObj[];
  defaultValue: string;
  currentValue: UseTabsReturn;
  title: string;
}

const TabsNav = ({
  tabs,
  defaultValue,
  currentValue,
  title
}: TabsProps): JSX.Element => {
  const router = useRouter();

  // TODO: Add animation to tabs.

  return (
    <Tabs.RootProvider
      key={title}
      defaultValue={defaultValue}
      variant="subtle"
      value={currentValue}
      fitted
      colorPalette="blue"
      w="auto"
      h="auto"
    >
      <Tabs.List>
        <For each={tabs}>
          {({ title, uri }) => (
            <Tabs.Trigger
              key={`${title}-${uri}`}
              id={`${title}-${uri}`}
              value={title}
              onClick={() => {
                router.replace(uri);
              }}
              w="auto"
              minH="min-content"
              h="auto"
            >
              {title}
            </Tabs.Trigger>
          )}
        </For>
        <Tabs.Indicator />
      </Tabs.List>
    </Tabs.RootProvider>
  );
};

export default TabsNav;
