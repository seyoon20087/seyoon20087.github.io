import React from "react";
import Head from "./Head";
import BrowserContextProvider from "./BrowserContext";

function CommonPage({ children }: { children?: React.ReactNode }) {
  return (
    <React.Fragment>
      <Head
        htmlAttributes={{ lang: "en", dir: "ltr" }}
        title="seyoon20087.github.io"
        meta={[
          {
            name: "description",
            content: "seyoon20087.github.io",
          },
        ]}
      >
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/seyoon20087"
        />
        <link
          rel="apple-touch-icon"
          href="https://avatars.githubusercontent.com/seyoon20087"
        />
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
      <BrowserContextProvider>{children}</BrowserContextProvider>
    </React.Fragment>
  );
}

export default CommonPage;
