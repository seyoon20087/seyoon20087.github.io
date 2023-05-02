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
          test: /\.(c|m)?js$/,
          loader: "babel-loader",
          enforce: "post",
          options: {
            targets,
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
        {
          test: /\.m?ts$/,
          loader: "babel-loader",
          enforce: "post",
          options: {
            targets,
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
        {
          test: /\.m?(j|t)sx$/,
          loader: "babel-loader",
          enforce: "post",
          options: {
            targets,
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
            ],
          },
        },
      ],
    },
  };
  actions.setWebpackConfig(config);
};
