import React from "react";
import { Helmet, type HelmetProps } from "react-helmet-async";

function Head(
  props: HelmetProps & {
    children: React.ReactNode;
  }
) {
  return <Helmet {...props} />;
}

export { Head };
export default Head;
