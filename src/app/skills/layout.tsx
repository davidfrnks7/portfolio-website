import { Fragment, Suspense } from "react";
import { JSX } from "@emotion/react/jsx-runtime";
import GenerateMetadata from "@/components/metadata/MetadataGen";
import SkillsPage from "./page";

export const metadata = () => GenerateMetadata({ title: "Skills" });

const SkillsLayout = (): JSX.Element => {
  return (
    <Suspense fallback={<Fragment />}>
      <SkillsPage />
    </Suspense>
  );
};

export default SkillsLayout;
