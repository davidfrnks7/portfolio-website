import { Fragment, JSX } from "react";
import GenerateMetadata from "@/components/metadata/MetadataGen";

// TODO Add description to metadata

export const metadata = () => GenerateMetadata({ title: "Professional Bio" });

const ProfessionalBioPage = (): JSX.Element => {
  return <Fragment></Fragment>;
};

export default ProfessionalBioPage;
