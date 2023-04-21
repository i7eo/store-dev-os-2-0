import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const PROJECT_ROOT_DIR = resolve(__dirname, '../')
export const SHOPIFYIGNORE_FILE_NAME = '.shopifyignore'
export const SHOPIFY_THEME_FILES = [
  // '.git',
  'assets',
  'config',
  'layout',
  'locales',
  'sections',
  'snippets',
  'templates',
  SHOPIFYIGNORE_FILE_NAME
]
