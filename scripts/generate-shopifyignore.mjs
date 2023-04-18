import { readdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import {
  PROJECT_ROOT_DIR,
  SHOPIFY_THEME_FILES,
  SHOPIFYIGNORE_FILE_NAME,
} from './constants.mjs'

try {
  const files = await readdir(PROJECT_ROOT_DIR)
  const shopifyignoreContent = files
    .filter((file) => !SHOPIFY_THEME_FILES.includes(file))
    .join('\n')
  writeFile(resolve(PROJECT_ROOT_DIR, SHOPIFYIGNORE_FILE_NAME), shopifyignoreContent, "utf-8")
} catch (err) {
  console.error(err)
}
