import Fs from 'fs'
import Ejs from 'ejs'
import Path from 'path'
import { replace } from 'lodash'

export const create = async (
  templateName: string,
  filepath: string,
  data: any,
  callback: (err: any) => void,
) => {
  const templatePath = Path.resolve(__dirname, './templates/', templateName)

  console.log(filepath)

  const templateContent = await Fs.readFileSync(templatePath, 'utf8')
  return Fs.writeFile(filepath, Ejs.render(templateContent, data), callback)
}

export const update = async (
  templateName: string,
  filepath: string,
  data: any,
  callback: (err: any) => void,
) => {
  const oldContent = await Fs.readFileSync(filepath, 'utf8')
  const templatePath = Path.resolve(__dirname, './templates/', templateName)
  const templateContent = await Fs.readFileSync(templatePath, 'utf8')

  Fs.writeFile(
    filepath,
    replace(oldContent + Ejs.render(templateContent, data), /&#39;/g, "'"),
    callback,
  )
}

// const alter = async (filepath, data) => {
//
//   const _data = await fs.readFileSync(old, 'utf8')
//   const _template = await fs.readFileSync(
//     path.resolve(__dirname, './templates/alter'),
//     'utf8',
//   )
//
// }

// module.exports = {
//   format,
//   alter,
// }
