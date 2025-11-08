import { Fragment, JSX } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import { Metadata } from "next";
import TypeWriter from "./TypeWriter";
import ContactButtons from "./ContactButtons";
import Background from "./background";
import GenerateMetadata from "@/components/metadata/MetadataGen";

export const metadata: Metadata = GenerateMetadata({
  description:
    "I am a mid-level Full Stack Software Engineer. I take pride in my attention to detail, focus on accessibility, and desire to grow."
});

export default function Home(): JSX.Element {
  return (
    <Fragment>
      <Background />
      <VStack
        id="name"
        w="100%"
        h="100%"
        minH="93vh"
        textAlign="center"
        justifyContent="center"
        alignContent="center"
      >
        <Heading as="h1" size="3xl">
          {"Hello, I am Leo Franks"}
        </Heading>
        <TypeWriter />
        <ContactButtons />
      </VStack>
    </Fragment>
  );
}
