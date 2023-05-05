import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import {
  PROJECT_ROOT_DIR,
  SHOPIFY_THEME_FILES,
  STYLELINTIGNORE_FILE_NAME,
} from './constants'

async function main() {
  try {
    const shopifyignoreContent = SHOPIFY_THEME_FILES.join('\n')
    writeFile(
      resolve(PROJECT_ROOT_DIR, STYLELINTIGNORE_FILE_NAME),
      shopifyignoreContent,
      'utf-8'
    )
  } catch (err) {
    console.error(err)
  }
}

main()
