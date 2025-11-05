import { Fragment, JSX } from "react";
import { Metadata } from "next";
import { Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import BackgroundImage from "@/components/ui/bgImage";
import GenerateMetadata from "@/components/metadata/MetadataGen";
import TimelineComponent from "@/components/ui/timeline/Timeline";
import { workTimeline } from "@/data/timelines";

export const metadata: Metadata = GenerateMetadata({
  title: "Work Experience",
  description: "The list of jobs and clients I have worked for."
});

const ExperiencePage = (): JSX.Element => {
  return (
    <Fragment>
      <BackgroundImage />
      <Flex
        id="projects"
        minH="100vh"
        h="100%"
        w="100vw"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <TimelineComponent
          timeline={workTimeline}
          icon={<Icon color="#2563eb" icon="akar-icons:people-group" />}
        />
      </Flex>
    </Fragment>
  );
};

export default ExperiencePage;
