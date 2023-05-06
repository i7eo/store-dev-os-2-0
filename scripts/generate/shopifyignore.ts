import { readdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { SHOPIFYIGNORE_FILE_NAME, SHOPIFY_THEME_FILES } from './constants'
import { PROJECT_ROOT_PATH } from '../utils'

async function main() {
  try {
    const files = await readdir(PROJECT_ROOT_PATH)
    const shopifyignoreContent = files
      .filter((file) => !SHOPIFY_THEME_FILES.includes(file))
      .join('\n')
    writeFile(
      resolve(PROJECT_ROOT_PATH, SHOPIFYIGNORE_FILE_NAME),
      shopifyignoreContent,
      'utf-8'
    )
  } catch (err) {
    console.error(err)
  }
}

main()
