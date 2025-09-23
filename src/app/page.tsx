import type { Metadata } from "next";
import { Box, Heading } from "@chakra-ui/react";
import { description, title } from "./layout";
import { Fragment, JSX } from "react";
import TypeWriter from "./TypeWriter";
import ContactButtons from "./ContactButtons";
import Background from "./background";

export const metadata: Metadata = {
  title: title,
  description: description
};

export default function Home(): JSX.Element {
  return (
    <Fragment>
      <Background />
      <Box zIndex="1" w="100%" h="100vh" textAlign="center" pos="fixed">
        <Heading mt="35vh" as="h1" size="3xl">
          {'Hello, I am David "Leo" Franks'}
        </Heading>
        <TypeWriter />
        <ContactButtons />
      </Box>
    </Fragment>
  );
}
