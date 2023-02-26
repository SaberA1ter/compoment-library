import path from 'path'
import multiInput from 'rollup-plugin-multi-input'
import styles from 'rollup-plugin-styles'

export default [
  {
    input: ['components/**/style/index.less', 'style/index.less'],
    plugins: [
      multiInput.default(),
      styles({
        mode: ['extract'],
        alias: {
          '@my-component/core': path.resolve('./'),
        },
        minimize: true,
      }),
    ],
    output: {
      dir: 'dist/',
      assetFileNames: '[name].css',
    },
  },
]
