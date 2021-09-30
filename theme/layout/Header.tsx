import React, { Fragment, useEffect, useState } from "react";
import {
  Link,
  Heading,
  HStack,
  Box,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = (): JSX.Element => {
  // Sticky Navbar
  const [stickyNavbar, setStickyNavbar] = useState<boolean>(false);

  const handleScroll = (): void => {
    if (window.scrollY >= 1) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }
  };

  useEffect(() => {
    if (!window) {
      console.log("waiting for mount");
    } else if (window) {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  // Mobile Menu Icon && Open/Close
  const [open, setOpen] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  const menuIcon = (): JSX.Element => {
    const iconType = {
      default: <Icon icon="bx:bx-menu-alt-right" />,
      hover: <Icon icon="bx:bx-menu" />,
      open: <Icon icon="bx:bx-x" />,
    };

    if (open) {
      return iconType.open;
    } else if (hover) {
      return iconType.hover;
    } else {
      return iconType.default;
    }
  };

  return (
    <VStack
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      w="100%"
      h="60px"
      bg={stickyNavbar || open ? "brand.main" : "transparent"}
      px={{ base: "0.5rem", md: "1rem", lg: "2rem", xl: "3rem" }}
      transition=".5s ease"
      pos="sticky"
      top={0}
      zIndex={1000000}
    >
      <Flex
        pos="absolute"
        h="60px"
        w="100%"
        top="0"
        p={2}
        d={{ base: "flex", lg: "none" }}
        m={0}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Heading as="h1" size="md">
          <Link href="/">David Franks Portfolio Website</Link>
        </Heading>
      </Flex>
      <HStack
        w="100%"
        h="100%"
        alignItems="center"
        alignContent="center"
        justifyContent="space-between"
      >
        <Box w="auto" h="100%" d={{ base: "flex", lg: "none " }}></Box>
        <Box w="100%" d={{ base: "none", lg: "flex" }} m="auto">
          <Link href="/">
            <Heading as="h1" size="md">
              David Franks Portfolio Website
            </Heading>
          </Link>
        </Box>
        <DesktopNav sticky={stickyNavbar} />
        <IconButton
          aria-label="Mobile Nav Menu"
          icon={menuIcon()}
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          d={{ base: "inline-flex", lg: "none" }}
          w="auto"
          margin="auto"
        />
      </HStack>
      <MobileNav shouldOpen={open} />
    </VStack>
  );
};

export default Header;
