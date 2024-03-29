import React from "react";
import Head from "./Head";
import BrowserContextProvider from "./BrowserContext";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function CommonPage({ children }: { children?: React.ReactNode }) {
  return (
    <React.Fragment>
      <Head
        htmlAttributes={{ lang: "en", dir: "ltr" }}
        title="seyoon20087.github.io"
      >
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/seyoon20087"
        />
        <link
          rel="apple-touch-icon"
          href="https://avatars.githubusercontent.com/seyoon20087"
        />
        <meta name="google" content="notranslate" />
        <meta name="description" content="seyoon20087.github.io" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#18191a"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Wrapper>{children}</Wrapper>
    </React.Fragment>
  );
}

export default CommonPage;
