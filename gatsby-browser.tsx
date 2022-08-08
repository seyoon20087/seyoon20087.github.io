import type { GatsbyBrowser, WrapRootElementBrowserArgs } from "gatsby";
import React from "react";
import BrowserContextProvider from "./src/components/BrowserContext";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}: WrapRootElementBrowserArgs): React.ReactElement => (
  <React.StrictMode><BrowserContextProvider>{element}</BrowserContextProvider></React.StrictMode>
);
