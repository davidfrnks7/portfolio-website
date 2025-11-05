import { Fragment, JSX } from "react";
import { Metadata } from "next";
import { Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import BackgroundImage from "@/components/ui/bgImage";
import GenerateMetadata from "@/components/metadata/MetadataGen";
import TimelineComponent from "@/components/ui/timeline/Timeline";
import { educationTimeline } from "@/data/timelines";

export const metadata: Metadata = GenerateMetadata({
  title: "Education and Certs",
  description: "My education and certifications."
});

const EducationPage = (): JSX.Element => {
  return (
    <Fragment>
      <BackgroundImage />
      <Flex
        id="education"
        minH="100vh"
        h="100%"
        w="100vw"
        mt={{ base: "5vh", md: "0" }}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <TimelineComponent
          timeline={educationTimeline}
          icon={<Icon color="#2563eb" icon="akar-icons:book" />}
        />
      </Flex>
    </Fragment>
  );
};

export default EducationPage;
