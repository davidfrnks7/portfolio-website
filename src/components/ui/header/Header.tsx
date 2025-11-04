import { JSX, useState } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import DesktopNav from "../nav/DesktopNav";
import MobileNav from "../nav/MobileNav";

interface HeaderProps {
  isHomePage: boolean;
}

const Header = ({ isHomePage }: HeaderProps): JSX.Element => {
  const [isMenuButtonOpen, setIsMenuButtonOpen] = useState(false);

  return (
    <HStack
      id="header"
      zIndex={1000000}
      h="auto"
      w="100%"
      pos="fixed"
      top="0"
      px={4}
      alignItems={"center"}
      justifyContent="space-between"
      boxShadow={
        isMenuButtonOpen
          ? "none"
          : !isHomePage
            ? "rgba(0, 134, 255, 0.75) 0px 0px 15px, rgba(0, 134, 255, 0.5) 0px 0px 3px 1px"
            : "none"
      }
      bg={
        isMenuButtonOpen
          ? "brand.main"
          : !isHomePage
            ? "rgba(49, 56, 220, 0.9)"
            : "transparent"
      }
      transition=".5s ease"
      borderRadius={isMenuButtonOpen ? "" : "0px 0px 10px 10px"}
      _hover={{
        bg: isMenuButtonOpen
          ? "brand.main"
          : !isHomePage
            ? "brand.main"
            : "transparent",
        boxShadow: isMenuButtonOpen
          ? "none"
          : !isHomePage
            ? "rgba(0, 134, 255, 0.9) 0px 0px 15px, rgba(0, 134, 255, 0.7) 0px 0px 3px 1px"
            : "none"
      }}
    >
      <Box display={{ base: "block", lg: "none" }} />
      <Heading w="100%" as="h1" size="xl">
        {'David "Leo" Franks\' Portfolio Website'}
      </Heading>
      <DesktopNav isHomePage />
      <MobileNav isOpen={isMenuButtonOpen} setIsOpen={setIsMenuButtonOpen} />
    </HStack>
  );
};

export default Header;
