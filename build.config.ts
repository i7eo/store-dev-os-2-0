import { type Options, defineConfig } from 'tsup'
import postcss, { type AcceptedPlugin } from 'postcss'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import { sassPlugin as ESBuildSassPlugin } from 'esbuild-sass-plugin'
import CleanCSS from 'clean-css'

export default defineConfig((options: Options) => [
  {
    entry: ['src/scripts/page.*.ts'],
    format: ['esm'],
    tsconfig: './tsconfig.web.json',
    outDir: './assets',
    platform: 'browser',
    target: 'es5',
    treeshake: true,
    noExternal: [/(.*)/],
    minify: !options.watch,

    // disable generate d.ts to improve bundling speed
    // sourcemap: true,

    // disable clean to avoid delete assets folder
    // clean: true,

    // disable generate d.ts to improve bundling speed
    // dts: {
    //   compilerOptions: {
    //     // use tsconfig references generate .d.ts has error. see https://github.com/egoist/tsup/issues/647
    //     composite: false,
    //   },
    // },
    dts: false,
  },
  {
    entry: ['src/styles/page.*.scss'],
    outDir: './assets',
    minify: !options.watch,
    esbuildPlugins: [
      ESBuildSassPlugin({
        async transform(source, resolveDir, filePath) {
          console.log(resolveDir, filePath)
          const { css } = await postcss([
            autoprefixer,
            postcssPresetEnv({ stage: 0 }) as AcceptedPlugin,
          ]).process(source, { from: undefined })
          const { styles, warnings } = await new CleanCSS({
            returnPromise: true,
          }).minify(css)
          warnings.forEach((warning) => console.warn(warning))
          return styles
        },
      }),
    ],
  },
])
