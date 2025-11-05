import { Fragment, Suspense } from "react";
import { JSX } from "@emotion/react/jsx-runtime";
import { Metadata } from "next";
import GenerateMetadata from "@/components/metadata/MetadataGen";
import SkillsPage from "./page";

export const metadata: Metadata = GenerateMetadata({
  title: "Skills",
  description: "The list of skills I am proficient in."
});

const SkillsLayout = (): JSX.Element => {
  return (
    <Suspense fallback={<Fragment />}>
      <SkillsPage />
    </Suspense>
  );
};

export default SkillsLayout;
