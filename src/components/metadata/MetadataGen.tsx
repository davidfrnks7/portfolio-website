import type { Metadata } from "next";

interface SeoHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

const GenerateMetadata = (props: SeoHeadProps): Metadata => {
  const { title, description, ogImage } = props;

  const websiteTitle = "Leo Franks Portfolio Website";

  return {
    title: title ? `${title} | ${websiteTitle}` : websiteTitle,
    description: description || "Default Description",
    openGraph: {
      title: title ? `${title} | ${websiteTitle}` : websiteTitle,
      description: description || "Default Open Graph Description",
      images: ogImage ? [ogImage] : ["/images/portrait.jpg"]
    }
  };
};

export default GenerateMetadata;
