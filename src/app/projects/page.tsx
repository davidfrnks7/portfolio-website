import { JSX } from "react";
import BackgroundImage from "@/components/ui/bgImage";
import GenerateMetadata from "@/components/metadata/MetadataGen";
import { Flex, For, SimpleGrid } from "@chakra-ui/react";
import projects, { Project } from "./projectList";
import ProjectCard from "./ProjectCard";

// TODO Add description to metadata

export const metadata = () =>
  GenerateMetadata({ title: "Current and Past Projects" });

const ProjectsPage = (): JSX.Element => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <BackgroundImage />
      <SimpleGrid columns={2} gap={8} px={10} h="100%" mt="10vh">
        <For each={projects}>
          {(project: Project) => {
            const { name } = project;
            return (
              <ProjectCard key={name.replace(" ", "-")} project={project} />
            );
          }}
        </For>
      </SimpleGrid>
    </Flex>
  );
};

export default ProjectsPage;
