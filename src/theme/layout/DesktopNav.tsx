import React, { FC } from "react";
import { Button, HStack, Link } from "@chakra-ui/react";
import navItems, { NavItem } from "./navItems";

interface DesktopNavProps {
  sticky?: boolean;
}

const DesktopNav: FC<DesktopNavProps> = ({ sticky }: DesktopNavProps) => {
  return (
    <HStack
      as="nav"
      display={{ base: "none", lg: "flex" }}
      h="auto"
      w="auto"
      spacing={4}
      // m="auto"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      {navItems.map((navItem: NavItem) => {
        return (
          <Link id={"dekstop-" + navItem[0]} key={navItem[0]} href={navItem[1]}>
            <Button variant={sticky ? "stickyNav" : "nav"}>{navItem[0]}</Button>
          </Link>
        );
      })}
    </HStack>
  );
};

export default DesktopNav;
