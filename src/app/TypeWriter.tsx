"use client";
import { JSX } from "react";
import { Heading } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const TypeWriter = (): JSX.Element => {
  return (
    <Heading
      w="100%"
      h="auto"
      mt="1rem"
      mb="5vh"
      as="h2"
      size="4xl"
      color="whiteAlpha.950"
    >
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Full Stack Developer",
            "DevOps",
            "React.js Developer",
            "Java Developer",
            "Passionate",
            "Dedicated",
            "Reliable",
            "Motivated"
          ],
          autoStart: true,
          loop: true,
          cursor: "_"
        }}
      />
    </Heading>
  );
};

export default TypeWriter;
