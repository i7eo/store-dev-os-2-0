/* eslint-disable prettier/prettier */
import { readFile, readdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import {
  PROJECT_ROOT_DIR,
  SHOPIFY_THEME_FILES,
  THEMECHECK_FILE_NAME,
} from './constants'

async function main() {
  try {
    const files = await readdir(PROJECT_ROOT_DIR)
    const themecheckignoreContent = files
      .filter((file) => !SHOPIFY_THEME_FILES.includes(file))
      .map((file) => `  - ${file}`)
      .join('\n')
    const prevContent = await readFile('./.theme-check.yml', {
      encoding: 'utf-8',
    })

    const content = prevContent.replace(
      /(?<=ignore:)[\s\S]*(?=ConvertIncludeToRender:)/gi,
      `
${themecheckignoreContent}

`
    )

    writeFile(resolve(PROJECT_ROOT_DIR, THEMECHECK_FILE_NAME), content, 'utf-8')
  } catch (err) {
    console.error(err)
  }
}

main()
