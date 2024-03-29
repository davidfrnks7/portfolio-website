import React, { Fragment } from "react";
import {
  ButtonGroup,
  Link,
  Button,
  IconButton,
  Tooltip
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface ContactButtonsProps {
  navTo: (refName: RefNames) => void;
}

const ContactButtons = ({ navTo }: ContactButtonsProps): JSX.Element => {
  return (
    <Fragment>
      <ButtonGroup variant="contactPrimary" isAttached boxShadow="xl">
        <Link
          href="https://www.linkedin.com/in/davidfrnks7/"
          rel="noopener"
          target="_blank"
        >
          <Button
            leftIcon={<Icon icon="brandico:linkedin-rect" />}
            ml="-px"
            borderRadius="4px 0px 0px 4px"
          >
            {"Connect With Me"}
          </Button>
        </Link>
        <Tooltip
          label="Go to email form"
          openDelay={200}
          hasArrow
          bg="brand.secondary"
          color="whiteAlpha"
          fontSize="md"
        >
          <IconButton
            borderRadius="0px 4px 4px 0px"
            aria-label="Go to email form"
            icon={<Icon icon="clarity:email-solid" />}
            onClick={() => navTo("Contact")}
          />
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup variant="contactSecondary" isAttached boxShadow="xl">
        <Link
          href="https://github.com/davidfrnks7"
          rel="noopener"
          target="_blank"
        >
          <Button
            leftIcon={<Icon icon="akar-icons:github-fill" />}
            ml="-px"
            borderRadius="4px 0px 0px 4px"
          >
            {"View My Work"}
          </Button>
        </Link>
        <Tooltip
          label="Go to projects section"
          openDelay={200}
          hasArrow
          bg="brand.main"
          color="whiteAlpha"
          fontSize="md"
        >
          <IconButton
            borderRadius="0px 4px 4px 0px"
            aria-label="Go to projects section"
            icon={<Icon icon="akar-icons:chevron-down" />}
            onClick={() => navTo("Projects")}
          />
        </Tooltip>
      </ButtonGroup>
    </Fragment>
  );
};

export default ContactButtons;
