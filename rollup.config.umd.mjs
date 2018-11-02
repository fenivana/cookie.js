import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.mjs',
  output: {
    format: 'umd',
    name: 'Cookie',
    file: 'dist/Cookie.js'
  },
  plugins: [
    babel()
  ]
}
