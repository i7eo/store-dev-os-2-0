import { resolve } from 'node:path'
import { readdir } from 'node:fs/promises'
import { __dirname } from '../utils'

async function getEntry(path: string) {
  let files: string[] = []
  try {
    files = await readdir(path)
    return files
  } catch (err) {
    console.error(err)
    return files
  }
}

export const TSCONFIG_WEB_PATH = resolve(__dirname, '../../tsconfig.web.json')
export const SCRIPTS_ENTRY = await getEntry(
  resolve(__dirname, '../../src/scripts/pages')
)
