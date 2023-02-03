
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
// import terser from "@rollup/plugin-terser" // rollup 3.2x 以上版本
import { terser } from "rollup-plugin-terser"

export default {
  input: 'src/index.js',

  output: {
    file: 'umd/lodash.js',
    format: 'umd',
    name: 'lodash',
    sourcemap: false
  },
  plugins: [
    resolve(),
    commonjs(),
    terser({ compress: { drop_console: true } }),
    babel({ babelHelpers: 'bundled' }),
  ],
}