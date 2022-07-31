import type { GatsbyNode } from "gatsby";
import type webpack from "webpack";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  const config: webpack.Configuration = {
    // Disable webpack caching
    cache: undefined,
  };
  actions.setWebpackConfig(config);
};
