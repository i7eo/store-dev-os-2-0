// import { type Options, defineConfig } from 'tsup'
// import { SCRIPTS_ENTRY, TSCONFIG_WEB_PATH as tsconfig } from './constants'

// console.log(SCRIPTS_ENTRY)

// export default defineConfig((options: Options) => ({
//   entry: SCRIPTS_ENTRY,
//   format: ['esm'],
//   tsconfig,
//   dts: {
//     compilerOptions: {
//       // use tsconfig references generate .d.ts has error. see https://github.com/egoist/tsup/issues/647
//       composite: false,
//     },
//   },
//   minify: !!options.watch,
// }))

import { defineConfig } from 'tsup'
import type { Options } from 'tsup'

export default defineConfig((options: Options) => ({
  entry: ['zzz.ts'],
  format: ['esm'],
  tsconfig: './tsconfig.web.json',
  dts: {
    compilerOptions: {
      // use tsconfig references generate .d.ts has error. see https://github.com/egoist/tsup/issues/647
      composite: false,
    },
  },
  minify: !options.watch,
  splitting: true,
  target: 'es5',
  treeshake: true,
  sourcemap: true,
  bundle: false,
}))
