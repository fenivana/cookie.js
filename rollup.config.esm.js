import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.mjs',

  output: {
    format: 'esm',
    file: 'dist/Cookie.mjs'
  },

  plugins: [
    babel({
      babelHelpers: 'bundled'
    })
  ]
}
