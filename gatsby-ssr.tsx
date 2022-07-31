import type { GatsbySSR, WrapRootElementNodeArgs } from "gatsby";
import React from "react";

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({
  element,
}: WrapRootElementNodeArgs): React.ReactElement => (
  <React.StrictMode>{element}</React.StrictMode>
);
