"use client";

import React, { JSX } from "react";
import { Provider } from "@/components/ui/provider";
import { usePathname } from "next/navigation";
import Header from "@/components/ui/header/Header";

export default function RootLayout(props: {
  children: React.ReactNode;
}): JSX.Element {
  const { children } = props;
  const pathname = usePathname();

  return (
    <html suppressHydrationWarning>
      <meta name="theme-color" content="#3138dc" />
      <link rel="icon" href="/images/favicon.svg" sizes="32x32 192x192" />
      <link rel="apple-touch-icon" href="/images/favicon.svg" />
      <meta property="og:type" content="Skills and Projects" />
      <meta property="og:image" content="/images/portrait.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content="A face shot of Leo Franks." />
      <meta property="og:url" content="https://davidfrnks7.dev" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="type" content="Skills and Projects" />
      <meta property="image" content="/images/portrait.jpg" />
      <meta property="image:type" content="image/jpeg" />
      <meta property="image:alt" content="A face shot of Leo Franks." />
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
        <Provider>
          <Header isHomePage={pathname === "/" ? true : false} />
          {children}
        </Provider>
      </body>
    </html>
  );
}
