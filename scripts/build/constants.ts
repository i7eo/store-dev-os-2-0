import { resolve } from 'node:path'
import { readdir } from 'node:fs/promises'
import { PROJECT_ROOT_PATH } from '../utils'

async function getEntry(path: string) {
  let files: string[] = []
  try {
    files = await readdir(path)
    return files.map((file) => resolve(path, file))
  } catch (err) {
    console.error(err)
    return files
  }
}

export const TSCONFIG_WEB_PATH = resolve(PROJECT_ROOT_PATH, 'tsconfig.web.json')
export const SCRIPTS_ENTRY = await getEntry(
  resolve(PROJECT_ROOT_PATH, 'src/scripts/pages')
)
