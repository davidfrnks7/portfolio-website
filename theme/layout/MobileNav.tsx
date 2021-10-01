import React, { Fragment } from "react";
import { Button, Collapse, Divider, Link, VStack } from "@chakra-ui/react";
import navItems, { NavItem } from "./navItems";

interface NavProps {
  shouldOpen: boolean;
}

const DesktopNav = ({ shouldOpen }: NavProps): JSX.Element => {
  return (
    <Collapse in={shouldOpen} animateOpacity>
      <VStack
        as="nav"
        d={{ base: "flex", lg: "none" }}
        spacing={0}
        bg="brand.main"
      >
        <Divider colorScheme="black" />
        {navItems.map((navItem: NavItem, index: number) => {
          return (
            <Link key={navItem[0]} href={navItem[1]}>
              <Button w="100vw" variant={"nav"}>
                {navItem[0]}
              </Button>
              {index !== navItems.length - 1 ? (
                <Divider />
              ) : (
                <Fragment></Fragment>
              )}
            </Link>
          );
        })}
      </VStack>
    </Collapse>
  );
};

export default DesktopNav;
