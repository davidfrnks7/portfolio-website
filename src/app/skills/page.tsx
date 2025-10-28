import { Fragment, JSX } from "react";
import BackgroundImage from "@/components/ui/bgImage";
import GenerateMetadata from "@/components/metadata/MetadataGen";
import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import icons, { Icons, IconTuple } from "./Icons";

// TODO Add description to metadata

export const metadata = () => GenerateMetadata({ title: "Skills" });

// TODO: Add tabs to the page to filter by the type of skills

const SkillsPage = (): JSX.Element => {
  return (
    <Fragment>
      <BackgroundImage />
      <SimpleGrid
        id="skills"
        columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
        justifyContent="flex-start"
        alignContent="center"
        textAlign="center"
        // h="auto"
        // w="100%"
        py="10vh"
        px={{ base: 6, "2xl": "10%" }}
        gap={10}
      >
        {icons.map((iconsArr: Icons): JSX.Element[] => {
          return iconsArr.map((icon: IconTuple) => {
            return (
              <VStack
                key={icon[0].replaceAll(" ", "-")}
                id={icon[0].replaceAll(" ", "-")}
                bg="brand.content"
                boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
                border="1px solid white"
                justifyContent="center"
                alignContent="center"
                textAlign="center"
                p={4}
                rounded="full"
              >
                <Box fontSize="75px" color="blackAlpha.700">
                  {icon[1]}
                </Box>
                <Heading textAlign="center" as="h4" size="md">
                  {icon[0]}
                </Heading>
              </VStack>
            );
          });
        })}
      </SimpleGrid>
    </Fragment>
  );
};

export default SkillsPage;
