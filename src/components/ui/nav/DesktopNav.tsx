"use client";

import { For, Heading, HStack, Tabs, useTabs } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, JSX } from "react";

export interface NavTabItem {
  title: string;
  uri: string;
}
interface DesktopNav {
  isHomePage: boolean;
}

const DesktopNav = ({ isHomePage }: DesktopNav): JSX.Element => {
  // Handled Navigation for the tabs
  const router = useRouter();

  // Used to set the default tab
  const pathname = usePathname();
  let pathString: string | string[] = pathname.split("/");
  pathString =
    pathString[1] === ""
      ? "Home"
      : pathString[1].charAt(0).toUpperCase() + pathString[1].slice(1);

  // Tabs store
  const tabs = useTabs({
    defaultValue: pathString
  });

  /**
   * Page names and uris.
   * TODO
   *
   * ! Move nav items to a file in the _lib folder.
   */

  const navItems: NavTabItem[] = [
    { title: "Home", uri: "/" },
    { title: "Bio", uri: "/bio/professional" },
    { title: "Experience", uri: "/experience" },
    { title: "Education", uri: "/education" },
    { title: "Skills", uri: "/skills" },
    { title: "Projects", uri: "/projects" }
  ];

  return (
    <HStack
      justifyContent="space-between"
      display={{ base: "none", lg: "flex" }}
      h="auto"
      w="100%"
      gap="4"
      alignContent="center"
      alignItems="center"
      pos="fixed"
      top="5px"
      zIndex="100000"
      px="4"
    >
      <Heading as="h1" size="xl">
        {'David "Leo" Franks\' Portfolio Website'}
      </Heading>
      <Tabs.RootProvider
        key={`DesktopNav`}
        defaultValue={"Home"}
        variant={isHomePage ? "plain" : "subtle"}
        value={tabs}
        colorPalette={isHomePage ? "" : "blue"}
      >
        <Tabs.List>
          <For each={navItems}>
            {({ title, uri }) => (
              <Tabs.Trigger
                key={`DesktopNav-${uri}`}
                value={title}
                onClick={() => {
                  router.replace(uri);
                }}
                color={isHomePage ? "whiteAlpha.950" : ""}
              >
                {title}
              </Tabs.Trigger>
            )}
          </For>
          <Tabs.Indicator
            bg={isHomePage ? "transparent" : ""}
            shadow={isHomePage ? "none" : ""}
          />
        </Tabs.List>
      </Tabs.RootProvider>
      {/*
      <HStack
        as="nav"
        display={{ base: "none", lg: "flex" }}
        h="auto"
        w="auto"
        gap="2"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <For each={navItems}>
          {(navItem, index) => (
            <Button
              variant="nav"
              id={`Desktop+${navItem[0]}+${index}`}
              key={`Desktop+${navItem[0]}+${index}`}
              onClick={() => router.replace(navItem[1])}
              _hover={{
                bg: isHomePage ? "#005299" : ""
              }}
              borderWidth={isHomePage ? "0px 0px 2px 0px" : ""}
              borderRadius={isHomePage ? "8" : ""}
            >
              {navItem[0]}
            </Button>
          )}
        </For>
      </HStack>
      */}
    </HStack>
  );
};

export default DesktopNav;
