import { Fragment, JSX } from "react";
import { Metadata } from "next";
import GenerateMetadata from "@/components/metadata/MetadataGen";

export const metadata: Metadata = GenerateMetadata({
  title: "Professional Bio",
  description:
    "I am a mid-level Full Stack Software Engineer. I take pride in my attention to detail, focus on accessibility, and desire to grow.\n\nI have knowledge and background in system, network, and database administration, PEGA, DevOps, managing and creating external correspondence, adhering to client design artifacts and mockups, adhering to web accessibility compliance standards."
});

const ProfessionalBioPage = (): JSX.Element => {
  return <Fragment />;
};

export default ProfessionalBioPage;
