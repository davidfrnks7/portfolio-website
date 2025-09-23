import React, { JSX } from "react";
import { Provider } from "@/components/ui/provider";

export const description =
  "Mid-level Software Engineer with experience in full-stack development, DevOps, Database Management, PEGA, managing and creating external correspondence, and adhering to client design artifacts/mockups and web accessibility compliance. View my entire list of experience, education and training, and skills.";
export const title = "David's Portfolio Website";

export default function RootLayout(props: {
  children: React.ReactNode;
}): JSX.Element {
  const { children } = props;

  return (
    <html suppressHydrationWarning>
      <meta name="theme-color" content="#3138dc" />
      <link rel="icon" href="/images/favicon.svg" sizes="32x32 192x192" />
      <link rel="apple-touch-icon" href="/images/favicon.svg" />
      <meta property="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta property="og:type" content="Skills and Projects" />
      <meta property="og:image" content="/images/davidFImage.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content="A face shot of David Franks." />
      <meta property="og:url" content="https://davidfrnks7.dev" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="title" content={title} />
      <meta name="description" content={description} />
      <meta property="type" content="Skills and Projects" />
      <meta property="image" content="/images/davidFImage.jpg" />
      <meta property="image:type" content="image/jpeg" />
      <meta property="image:alt" content="A face shot of David Franks." />
      <meta property="url" content="https://davidfrnks7.dev" />
      <meta httpEquiv="content-language" content="en_US" />
      <meta charSet="UTF-8" />
      <meta
        name="keywords"
        content="portfolio software engineering coding developer seeking employment open for hire"
      />
      <meta name="copyright" content="David Franks" />
      <meta name="page-topic" content="Skills and Projects" />
      <meta name="page-type" content="Portfolio" />
      <meta name="audience" content="Everyone" />
      <meta name="robots" content="index, follow" />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
