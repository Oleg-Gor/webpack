import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import {  BuildEnv, BuildPaths } from "./config/build/types/config";


const paths:BuildPaths = {
    build: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html:path.resolve(__dirname, "public", "index.html")
}



export default (env:BuildEnv)=> {

const mode = env.mode || 'development'
const PORT = env.port || 3000;

 const isDev = mode === 'development'

const config = buildWebpackConfig({
  mode,
  paths,
  isDev,
  port:PORT
})


  return config
};