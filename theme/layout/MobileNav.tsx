import React, { Fragment } from "react";
import {
  Button,
  Link,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import navItems, { NavItem } from "./navItems";

interface NavProps {
  updateOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ updateOpen }: NavProps): JSX.Element => {
  return (
    <MenuList
      as="nav"
      d={{ base: "block", lg: "none" }}
      bg="brand.main"
      h="auto"
      w="100%"
      p={0}
      border="none"
      boxShadow="none"
    >
      {navItems.map((navItem: NavItem, index: number) => {
        return (
          <MenuItem key={navItem[0]} w="auto" h="auto" p={0}>
            <Link onClick={() => updateOpen(false)} href={navItem[1]}>
              {index === 0 ? <MenuDivider /> : <Fragment></Fragment>}
              <Button w="100vw" variant={"nav"} p={0} m="auto">
                {navItem[0]}
              </Button>
              <MenuDivider />
            </Link>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default MobileNav;
