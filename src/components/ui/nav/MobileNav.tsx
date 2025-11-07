"use client";

import { Button, For, Menu, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { Dispatch, Fragment, JSX, SetStateAction, useState } from "react";
import navItems from "./navItems";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps): JSX.Element => {
  // Handled Navigation for the tabs
  const router = useRouter();

  const [isMenuButtonHover, setIsMenuButtonHover] = useState(false);

  return (
    <Menu.Root open={isOpen}>
      <Menu.Trigger
        onMouseEnter={() => setIsMenuButtonHover(true)}
        onMouseLeave={() => setIsMenuButtonHover(false)}
        display={{ base: "block", lg: "none" }}
        onClick={() => setIsOpen(!isOpen)}
        asChild
      >
        <Button variant="mobileNav" my={1}>
          <Icon
            icon={
              isOpen
                ? "bx:bx-x"
                : isMenuButtonHover
                  ? "bx:bx-menu"
                  : "bx:bx-menu-alt-right"
            }
          />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content w="100vw" ml="-8px" mt="-8px" bg="brand.mobileNav">
          <For each={navItems}>
            {({ title, uri }, index) => (
              <Fragment>
                {index !== 0 ? <Menu.Separator /> : null}
                <Menu.Item
                  as="button"
                  key={`MobileNav-${uri}`}
                  value={title}
                  onClick={() => {
                    setIsOpen(false);
                    router.replace(uri);
                  }}
                  textAlign="center"
                  _hover={{ bg: "brand.mobileMenuHover" }}
                >
                  <Text fontSize="lg" fontWeight="semibold" w="100%">
                    {title}
                  </Text>
                </Menu.Item>
              </Fragment>
            )}
          </For>

          <Menu.Arrow />
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default MobileNav;
