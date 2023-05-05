import type { GatsbyNode } from "gatsby";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
  getConfig,
  stage,
}) => {
  const targets =
    stage === ("develop-html" || "build-html")
      ? "maintained node versions"
      : ">=0%";
  const existingConfig: webpack.Configuration = getConfig();
  ((existingConfig.optimization = existingConfig.optimization || {}).minimizer =
    (existingConfig.optimization = existingConfig.optimization || {})
      .minimizer || [])[0] = new TerserPlugin({
    terserOptions: {
      format: {
        comments: false,
      },
    },
    extractComments: false,
  });
  const config: webpack.Configuration = {
    // Disable webpack caching
    cache: undefined,
    plugins: [
      new webpack.ProvidePlugin({
        "Object.assign": "lodash/assign",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          enforce: "post",
          options: {
            targets,
            babelrc: false,
            configFile: false,
            presets: [
              [
                "babel-preset-react-app",
                {
                  runtime: "automatic",
                  helpers: true,
                },
              ],
            ],
          },
        },
        {
          test: /\.(js|mjs)$/,
          exclude: /@babel(?:\/|\\{1,2})runtime/,
          include: /node_modules/,
          enforce: "pre",
          loader: "babel-loader",
          options: {
            targets,
            babelrc: false,
            configFile: false,
            compact: true,
            presets: [
              ["babel-preset-react-app/dependencies", { helpers: true }],
            ],
          },
        },
      ],
    },
  };
  actions.setWebpackConfig(config);
};
