import { CacheProvider } from "@emotion/react";
import type { GatsbyBrowser, WrapRootElementBrowserArgs } from "gatsby";
import React from "react";
import BrowserContextProvider from "./src/components/BrowserContext";
import { createEmotionCache } from "./src/emotion/createEmotionCache";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}: WrapRootElementBrowserArgs): React.ReactElement => (
  <React.StrictMode>
    <CacheProvider value={createEmotionCache()}>
      <BrowserContextProvider>{element}</BrowserContextProvider>
    </CacheProvider>
  </React.StrictMode>
);
