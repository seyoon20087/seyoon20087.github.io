import type { GatsbyNode } from "gatsby";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  const browserTargets = ">=0%";
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
            targets: browserTargets,
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
            targets: browserTargets,
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
        {
          test: /\.m?(j|t)sx$/,
          loader: "babel-loader",
          enforce: "post",
          options: {
            targets: browserTargets,
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
            ],
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  };
  actions.setWebpackConfig(config);
};
