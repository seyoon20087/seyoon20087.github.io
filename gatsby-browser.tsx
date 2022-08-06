import type { GatsbyBrowser, WrapRootElementBrowserArgs } from "gatsby";
import React from "react";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}: WrapRootElementBrowserArgs): React.ReactElement => (
  <React.StrictMode>{element}</React.StrictMode>
);
