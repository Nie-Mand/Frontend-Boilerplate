// const inquirer = require('inquirer')
// const fs = require('fs')
// const path = require('path')
// const { createSpinner } = require('nanospinner')
// const { format, alter } = require('./utils')

// const createReduxScope = async () => {
//   const answers = await inquirer.prompt([
//     {
//       name: 'reduxScope',
//       message: 'What is the name of your redux scope?',
//       type: 'input',
//     },
//   ])

//   createReduxFolder(answers.reduxScope)
// }

// const createReduxFolder = async reduxScope => {
//   const _path = path.resolve(__dirname, '../src/redux/', reduxScope)
//   const filePath = filename => path.resolve(_path, filename)
//   const exists = fs.existsSync(_path)
//   const spinner = createSpinner('Creating redux scope').start()
//   if (!exists) {
//     fs.mkdirSync(_path)
//     await format('redux/constants', filePath('constants.ts'), {
//       path: reduxScope.toUpperCase(),
//     })

//     await format('redux/actions', filePath('actions.ts'), {})
//     await format('redux/initial', filePath('initial.ts'), {})
//     await format('redux/saga', filePath('saga.ts'), {})
//     await format('redux/hooks', filePath('hooks.ts'), {})
//     await format('redux/reducer', filePath('reducer.ts'), {})
//     await alter(
//       '../src/redux/hooks.ts',
//       `export * from './${reduxScope}/hooks'`,
//     )
//     // TODO: add reducer to reducers.ts
//     // TODO: add saga to sagas.ts

//     spinner.success({ text: 'Redux scope created' })
//   } else {
//     spinner.error({ text: 'Redux scope already exists' })
//   }
// }

// module.exports = createReduxScope
