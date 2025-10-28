import { JSX } from "react";
import { Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import BackgroundImage from "@/components/ui/bgImage";
import GenerateMetadata from "@/components/metadata/MetadataGen";
import TimelineComponent from "@/components/ui/timeline/Timeline";
import { educationTimeline } from "@/data/timelines";

// TODO Add description to metadata

export const metadata = () =>
  GenerateMetadata({ title: "Education and Certs" });

const EducationPage = (): JSX.Element => {
  return (
    <Flex
      id="education"
      h="100vh"
      w="100vw"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <BackgroundImage />
      <TimelineComponent
        timeline={educationTimeline}
        icon={<Icon color="#2563eb" icon="akar-icons:book" />}
      />
    </Flex>
  );
};

export default EducationPage;
