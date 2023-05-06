import { resolve } from 'node:path'
import { __dirname } from '../utils'

export const PROJECT_ROOT_DIR = resolve(__dirname, '../')
export const ESLINTIGNORE_FILE_NAME = '.eslintignore'
export const STYLELINTIGNORE_FILE_NAME = '.stylelintignore'
export const THEMECHECK_FILE_NAME = '.theme-check.yml'
export const SHOPIFYIGNORE_FILE_NAME = '.shopifyignore'
export const SHOPIFYTHEMECHECK_FILE_NAME = '.theme-check.yml'
export const SHOPIFY_THEME_FILES = [
  // '.git',
  'assets',
  'config',
  'layout',
  'locales',
  'sections',
  'snippets',
  'templates',
  SHOPIFYIGNORE_FILE_NAME,
  SHOPIFYTHEMECHECK_FILE_NAME,
]
