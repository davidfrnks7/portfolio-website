import { JSX } from "react";
import { Box } from "@chakra-ui/react";

const Background = (): JSX.Element => {
  return (
    <Box
      bgGradient="linear-gradient(
      145deg,
    #00aec1,
    #3138dc,
    #0068ff,
    #0086ff,
    #009ced,
    #00aec1,
    #00bd8e)"
      pos="fixed"
      h="100%"
      w="100%"
      zIndex={0}
      bgSize="600% 100%"
      animation="gradient"
      top={0}
    />
  );
};

export default Background;
