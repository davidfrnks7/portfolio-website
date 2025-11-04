"use client";

import { For, Tabs, useTabs } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { JSX, useEffect } from "react";

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
   * Updates the values of the tabs store when the page or uri changes
   * without using the tabs to navigate.
   */
  useEffect(() => {
    if (tabs.value !== pathString) {
      tabs.setValue(pathString);
    }
  }, [pathString, tabs]);

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
    <Tabs.RootProvider
      defaultValue={"Home"}
      variant={isHomePage ? "plain" : "subtle"}
      value={tabs}
      colorPalette={isHomePage ? "" : "blue"}
      as="nav"
      display={{ base: "none", lg: "block" }}
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
              fontSize="lg"
              fontWeight="semibold"
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
  );
};

export default DesktopNav;
