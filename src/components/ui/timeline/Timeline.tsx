import { Fragment, JSX } from "react";
import { Timeline, Text, VStack, HStack, For } from "@chakra-ui/react";
import { TimelineArr, TimelineItem } from "@/data/timelines";

interface TimelineProps {
  timeline: TimelineArr;
  icon: JSX.Element;
}

const TimelineComponent = ({ timeline, icon }: TimelineProps): JSX.Element => {
  return (
    <Timeline.Root w="70vw" size="xl" variant="outline">
      <VStack
        px={4}
        py={8}
        rounded="3xl"
        w="80%"
        justifyContent="flex-start"
        alignContent="center"
        alignItems="center"
        bg="brand.content"
        gap={6}
      >
        <For each={timeline}>
          {({
            school,
            workplace,
            certName,
            course,
            jobTitle,
            certIssuer,
            location,
            description,
            start,
            end
          }: TimelineItem) => {
            const title = school || workplace || certName || "";
            const subTitle = course || jobTitle || certIssuer || "";

            return (
              <Timeline.Item width="100%" id={title.replaceAll(" ", "-")}>
                <Timeline.Connector colorPalette={"blue"}>
                  <Timeline.Separator />
                  <Timeline.Indicator fontSize="xl">{icon}</Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title as="h2" fontSize="lg" fontWeight="bold">
                    {title}
                  </Timeline.Title>
                  <HStack
                    w="auto"
                    justifyContent="space-between"
                    alignContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Text width="auto" fontSize="lg">
                      {subTitle}
                    </Text>
                    {location || start || end ? (
                      <Text fontSize="sm" width="auto">
                        {start
                          ? typeof start === "number"
                            ? start
                            : start.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long"
                              })
                          : null}
                        {start && end ? " - " : null}
                        {end
                          ? typeof end === "number"
                            ? end
                            : end.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long"
                              })
                          : null}
                        {location ? ` ${location}` : null}
                      </Text>
                    ) : (
                      <Fragment />
                    )}
                  </HStack>
                  <Text fontSize="md">{description}</Text>
                </Timeline.Content>
              </Timeline.Item>
            );
          }}
        </For>
      </VStack>
    </Timeline.Root>
  );
};

export default TimelineComponent;
