import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppTheme from "../theme/AppTheme";
import Layout from "../theme/layout/Layout";
import Head from "next/head";
import "../styles/background.css";
import "../styles/scrollbar.css";

function DavidPortfolioWebsite({
  Component,
  pageProps
}: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={AppTheme}>
      <Layout {...pageProps}>
        <Head>
          <title>{"David's Portfolio Website"}</title>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=yes, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default DavidPortfolioWebsite;
