import React, { JSX } from "react";
import { ButtonGroup, Link, IconButton, Box, HStack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Tooltip } from "@/components/ui/Tooltip";

const ContactButtons = (): JSX.Element => {
  return (
    <HStack w="100%" gap={8} justifyContent="center">
      <Link
        href="https://www.linkedin.com/in/davidfrnks7/"
        rel="noopener"
        target="_blank"
      >
        <IconButton variant="contactPrimary" p={4} borderRadius="lg" boxShadow="xl">
          <Icon icon="brandico:linkedin-rect" />
          {"Connect With Me"}
        </IconButton>
      </Link>

      <ButtonGroup overflow="hidden" attached variant="contactSecondary" boxShadow="xl" borderRadius="lg" >
        <Link
          href="https://github.com/davidfrnks7"
          rel="noopener"
          target="_blank"
        >
          <IconButton p={4} pr={2} >
            <Icon icon="akar-icons:github-fill" />
            {"View My Work"}
          </IconButton>
        </Link>
        <Box bg="brand.main" color="whiteAlpha" fontSize="md" >
          <Tooltip content="Go to projects page" openDelay={200}>
            <IconButton
              aria-label="Go to projects page"
            >
              <Icon icon="akar-icons:chevron-down" />
            </IconButton>
          </Tooltip>
        </Box>
      </ButtonGroup>
    </HStack>
  );
};

export default ContactButtons;
