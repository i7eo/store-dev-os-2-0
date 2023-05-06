import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { SHOPIFY_THEME_FILES, STYLELINTIGNORE_FILE_NAME } from './constants'
import { PROJECT_ROOT_PATH } from '../utils'

async function main() {
  try {
    const shopifyignoreContent = SHOPIFY_THEME_FILES.join('\n')
    writeFile(
      resolve(PROJECT_ROOT_PATH, STYLELINTIGNORE_FILE_NAME),
      shopifyignoreContent,
      'utf-8'
    )
  } catch (err) {
    console.error(err)
  }
}

main()
