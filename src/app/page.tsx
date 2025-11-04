import { Box, Heading } from "@chakra-ui/react";
import { Fragment, JSX } from "react";
import TypeWriter from "./TypeWriter";
import ContactButtons from "./ContactButtons";
import Background from "./background";
import GenerateMetadata from "@/components/metadata/MetadataGen";

// TODO Update description

export const metadata = () =>
  GenerateMetadata({
    description:
      "Mid-level Software Engineer with experience in full-stack development, DevOps, Database Management, PEGA, managing and creating external correspondence, and adhering to client design artifacts/mockups and web accessibility compliance. View my entire list of experience, education and training, and skills."
  });

export default function Home(): JSX.Element {
  return (
    <Fragment>
      <Background />
      <Box id="name" w="100%" h="100vh" textAlign="center">
        <Heading mt="35vh" as="h1" size="3xl">
          {'Hello, I am David "Leo" Franks'}
        </Heading>
        <TypeWriter />
        <ContactButtons />
      </Box>
    </Fragment>
  );
}
