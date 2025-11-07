import { JSX } from "react";
import { Metadata } from "next";
import { Flex, For, SimpleGrid } from "@chakra-ui/react";
import BackgroundImage from "@/components/ui/bgImage";
import GenerateMetadata from "@/components/metadata/MetadataGen";
import projects, { Project } from "./projectList";
import ProjectCard from "./ProjectCard";

export const metadata: Metadata = GenerateMetadata({
  title: "Current and Past Projects",
  description: "The list of current and past projects I have worked on."
});

const ProjectsPage = (): JSX.Element => {
  return (
    <Flex
      id="projects"
      minH="100vh"
      w="100vw"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      marginY="3vh"
    >
      <BackgroundImage />
      <SimpleGrid
        id="projects-grid"
        columns={{ base: 1, md: 2, xl: 3 }}
        gap={8}
        px={10}
        h="100%"
      >
        <For each={projects}>
          {(project: Project) => {
            const { name } = project;
            return (
              <ProjectCard key={name.replaceAll(" ", "-")} project={project} />
            );
          }}
        </For>
      </SimpleGrid>
    </Flex>
  );
};

export default ProjectsPage;
