"use client";

import { JSX, useState } from "react";
import { Heading } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const TypeWriter = (): JSX.Element => {
  // Added a little easter egg when the typewriter it clicked ^-^
  const [randomCursor, setRandomCursor] = useState<string>("_");
  const [curserRandomized, setCursorRandomized] = useState<boolean>(false);

  const cursorArr = [
    "😂",
    "🥚",
    "🐺",
    "🌕",
    "🤓",
    "👻",
    "😹",
    "🐾",
    "🦎",
    "🐉",
    "🦦",
    "🐧",
    "🧑‍💻",
    "💻",
    "🏳️‍🌈",
    "🏳️‍⚧️"
  ];

  return (
    <Heading
      id="typewriter"
      w="auto"
      h="auto"
      mt="1rem"
      mb="5vh"
      as="h3"
      size="4xl"
      color="whiteAlpha.950"
      onClick={() => {
        /**
         * To prevent the typewriter from being rest constantly by spam clicking.
         * Does not allow the cursor to be changed more than once.
         */
        if (!curserRandomized) {
          setCursorRandomized(true);
          setRandomCursor(
            cursorArr[
              Math.floor(Math.random() * (cursorArr.length - 1 - 0 + 1)) + 0
            ]
          );

          console.info(
            "You found my silly easter egg! ^_^\n\nCongratulations!\n\nThere are more cursors, but you have to refresh the page to reset the easter egg."
          );
        }

        if (curserRandomized) {
          console.info(
            "To see a new cursor refresh the page to rest the easter egg.\n\nThe typewriter resetting when the cursor changes is an undesirable effect. Therefore I only allowed it to happen once per page load.\n\nThis was an attempt to prevent potential recruiters and employers from wasting time on a silly easter egg."
          );
        }
      }}
    >
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Full Stack Developer",
            "DevOps",
            "React.js Developer",
            "Java Developer",
            "Passionate",
            "Dedicated",
            "Reliable",
            "Motivated"
          ],
          autoStart: true,
          loop: true,
          cursor: randomCursor
        }}
      />
    </Heading>
  );
};

export default TypeWriter;
