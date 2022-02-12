// const fs = require('fs')
// let ejs = require('ejs')
// const path = require('path')

// const format = async (template, filepath, data) => {
//   const _template = path.resolve(__dirname, './templates/', template)

//   const _data = await fs.readFileSync(_template, 'utf8')

//   await fs.writeFile(filepath, ejs.render(_data, data), () => {})
// }

// const alter = async (filepath, data) => {
//   const old = path.resolve(__dirname, filepath)
//   const _data = await fs.readFileSync(old, 'utf8')
//   const _template = await fs.readFileSync(
//     path.resolve(__dirname, './templates/alter'),
//     'utf8',
//   )
//   await fs.writeFile(old, `${_data}${data}`, () => {})
// }

// module.exports = {
//   format,
//   alter,
// }
