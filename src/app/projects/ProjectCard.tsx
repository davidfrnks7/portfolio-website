import { Fragment, JSX } from "react";
import {
  For,
  Heading,
  HStack,
  IconButton,
  Link,
  List,
  ScrollArea,
  Text,
  VStack
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Project } from "./projectList";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  const { name, description, tech, deployed, links, expanded, role } = project;

  return (
    <VStack
      id={`${name.replaceAll(" ", "-")}-project`}
      bg="brand.content"
      boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
      border="1px solid white"
      rounded="4xl"
      gap={6}
      p={6}
    >
      <Heading as="h3" size="xl">
        {name}
      </Heading>
      <Text>{description}</Text>
      <ScrollArea.Root height="20vh" variant="always">
        <ScrollArea.Viewport>
          <ScrollArea.Content as={VStack} gap={4}>
            <Text>{`The app was build on ${tech[0]} and used:`}</Text>
            <List.Root>
              <For each={tech.splice(1)}>
                {(text: string, index) => (
                  <List.Item key={`tech-item-${index}`}>{text}</List.Item>
                )}
              </For>
            </List.Root>
            {expanded ? (
              <Fragment>
                <Text>
                  {
                    "My team expaned the app by adding the following featured and functionality:"
                  }
                </Text>
                <List.Root>
                  <For each={expanded}>
                    {(text: string, index) => (
                      <List.Item key={`expanded-item-${index}`}>
                        {text}
                      </List.Item>
                    )}
                  </For>
                </List.Root>
              </Fragment>
            ) : null}
            {role ? (
              <Fragment>
                <Text>{"My role in this project was to:"}</Text>
                <List.Root>
                  <For each={role}>
                    {(text: string, index) => (
                      <List.Item key={`role-item-${index}`}>{text}</List.Item>
                    )}
                  </For>
                </List.Root>
              </Fragment>
            ) : null}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
      <Text>{deployed}</Text>
      <HStack>
        <Link
          href={links.github}
          rel="noopener"
          target="_blank"
          _hover={{
            textDecoration: "none"
          }}
        >
          <IconButton>
            <Icon icon="akar-icons:octocat-fill" />
            {"View Source Code"}
          </IconButton>
        </Link>
        {links.website ? (
          <Link
            href={links.website}
            rel="noopener"
            target="_blank"
            _hover={{
              textDecoration: "none"
            }}
          >
            <IconButton>
              <Icon icon="akar-icons:globe" />
              {"Live View"}
            </IconButton>
          </Link>
        ) : null}
      </HStack>
    </VStack>
  );
};

export default ProjectCard;
