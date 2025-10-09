"use client";

import { JSX } from "react";
import { ButtonGroup, Link, IconButton, Box, HStack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Tooltip } from "@/components/ui/Tooltip";
import { useRouter } from "next/navigation";

const ContactButtons = (): JSX.Element => {
  const router = useRouter();

  return (
    <HStack w="100%" gap={8} justifyContent="center">
      <Link
        href="https://www.linkedin.com/in/davidfrnks7/"
        rel="noopener"
        target="_blank"
        _hover={{
          textDecoration: "none"
        }}
      >
        <IconButton
          variant="contactPrimary"
          p={4}
          borderRadius="lg"
          boxShadow="xl"
          _hover={{
            bg: "#005299",
            color: "#FFF"
          }}
        >
          <Icon icon="akar-icons:linkedin-v2-fill" />
          {"Connect With Me"}
        </IconButton>
      </Link>

      <ButtonGroup
        overflow="hidden"
        attached
        variant="contactSecondary"
        boxShadow="xl"
        borderRadius="lg"
      >
        <Link
          href="https://github.com/davidfrnks7"
          rel="noopener"
          target="_blank"
          _hover={{
            textDecoration: "none"
          }}
        >
          <IconButton
            p={4}
            pr={2}
            _hover={{
              bg: "#005299",
              color: "#FFF"
            }}
          >
            <Icon icon="akar-icons:octocat-fill" />
            {"View My Work"}
          </IconButton>
        </Link>
        <Box bg="brand.main" color="whiteAlpha" fontSize="md">
          <Tooltip content="Go to projects page" openDelay={200}>
            <IconButton
              aria-label="Go to projects page"
              _hover={{
                bg: "#005299",
                color: "#FFF"
              }}
              onClick={() => {
                router.replace("/projects");
              }}
            >
              <Icon icon="akar-icons:link-chain" />
            </IconButton>
          </Tooltip>
        </Box>
      </ButtonGroup>
    </HStack>
  );
};

export default ContactButtons;
