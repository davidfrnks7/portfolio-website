import { Fragment, JSX } from "react";
import { Metadata } from "next";
import GenerateMetadata from "@/components/metadata/MetadataGen";

export const metadata: Metadata = GenerateMetadata({
  title: "Personal Bio",
  description:
    "I have been interested in tech for as long as I remember. In high school I managed my own CMS powered website and game servers. In high school I was in the AOIT club where we salvaged old hardware from campus to repair and repurpose and help assist teachers with tech related needs when the IT department was overwhelmed with service tickets."
});

const PersonalBioPage = (): JSX.Element => {
  return <Fragment />;
};

export default PersonalBioPage;
