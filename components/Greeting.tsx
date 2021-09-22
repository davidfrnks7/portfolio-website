import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CallToAction from "./CallToAction";
import TypeWriter from "./TypeWriter";

const Greeting = (): JSX.Element => {
  return (
    <Box
      w="100%"
      h="100vh"
      px={{ base: "3rem", lg: "3rem", xl: "5rem" }}
      textAlign="center"
      className="background"
    >
      <Heading pt="35vh" as="h2" size="lg">
        Hello, I am David Franks
      </Heading>
      {/* <Heading
        mt="3rem"
        pb="10vh"
        as="h2"
        size="lg"
      >
        Software Engineer
      </Heading> */}
      <TypeWriter />
      <CallToAction />
    </Box>
  );
};

export default Greeting;
