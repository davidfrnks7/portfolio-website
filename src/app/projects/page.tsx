import { Fragment, JSX } from "react";
import BackgroundImage from "@/components/ui/bgImage";
import GenerateMetadata from "@/components/metadata/MetadataGen";

// TODO Add description to metadata

export const metadata = () =>
  GenerateMetadata({ title: "Current and Past Projects" });

const ProjectsPage = (): JSX.Element => {
  return (
    <Fragment>
      <BackgroundImage />
    </Fragment>
  );
};

export default ProjectsPage;
