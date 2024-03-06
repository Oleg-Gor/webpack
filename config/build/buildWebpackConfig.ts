
import { Configuration } from "webpack";

import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";

import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions):Configuration {

const {paths, mode, isDev}= options;

  return {
    mode,

    entry: paths.entry,

    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },

    plugins: buildPlugins(options),
    
    module: {
      rules: buildLoaders(options),
    },
    
    resolve: buildResolves(),

    devtool: isDev? 'inline-source-map': undefined,
    devServer: isDev? buildDevServer(options): undefined,
  };

}