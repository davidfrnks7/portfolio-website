import { JSX } from "react";
import { Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import BackgroundImage from "@/components/ui/bgImage";
import GenerateMetadata from "@/components/metadata/MetadataGen";
import TimelineComponent from "@/components/ui/timeline/Timeline";
import { workTimeline } from "@/data/timelines";

// TODO Add description to metadata

export const metadata = () => GenerateMetadata({ title: "Work Experience" });

const ExperiencePage = (): JSX.Element => {
  return (
    <Flex
      id="projects"
      h="100vh"
      w="100vw"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <BackgroundImage />
      <TimelineComponent
        timeline={workTimeline}
        icon={<Icon color="#2563eb" icon="akar-icons:people-group" />}
      />
    </Flex>
  );
};

export default ExperiencePage;
