import question from 'inquirer'
import { create, update } from './utils'
import Path from 'path'
import Fs from 'fs'
import { createSpinner } from 'nanospinner'
import { capitalize } from 'lodash'

const path = (_path: string) => Path.resolve(__dirname, '../', _path)

export const createReduxScope = async () => {
  const config = await question.prompt([
    {
      type: 'input',
      name: 'scopeName',
      message: 'What is the name of the scope?',
      default: 'example',
    },
  ])

  const spinner = createSpinner(`creating ${config.scopeName}..\n`).start()

  const exists = Fs.existsSync(path(`redux/${config.scopeName}`))

  if (!exists) {
    Fs.mkdirSync(path(`redux/${config.scopeName}`))

    const pathOf = (filename: string) =>
      path(`redux/${config.scopeName}/${filename}`)

    const filePath = (file: string) => `/${config.scopeName}.${file}`

    const success = (file: string, action: string) => (e: any) => {
      if (e) {
        spinner.error({
          text: e.message,
        })
      } else {
        spinner.success({
          text: action + ' ' + filePath(file),
        })
      }
    }

    await create(
      'redux/constants.txt',
      pathOf(filePath('constants.ts')),
      {
        Name: capitalize(config.scopeName),
        NAME: config.scopeName.toUpperCase(),
      },
      success('constants.ts', 'created'),
    )

    await create(
      'redux/actions.txt',
      pathOf(filePath('actions.ts')),
      {
        name: config.scopeName,
        Name: capitalize(config.scopeName),
      },
      success('actions.ts', 'created'),
    )

    await create(
      'redux/reducer.txt',
      pathOf(filePath('reducer.ts')),
      {
        name: config.scopeName,
        Name: capitalize(config.scopeName),
      },
      success('reducer.ts', 'created'),
    )

    await create(
      'redux/state.txt',
      pathOf(filePath('state.ts')),
      {
        Name: capitalize(config.scopeName),
      },
      success('state.ts', 'created'),
    )

    await create(
      'redux/services.txt',
      pathOf(filePath('services.ts')),
      {
        Name: capitalize(config.scopeName),
      },
      success('services.ts', 'created'),
    )

    await create(
      'redux/sagas.txt',
      pathOf(filePath('sagas.ts')),
      {
        name: config.scopeName,
        Name: capitalize(config.scopeName),
      },
      success('sagas.ts', 'created'),
    )

    await create(
      'redux/hooks.txt',
      pathOf(filePath('hooks.ts')),
      {
        name: config.scopeName,
        Name: capitalize(config.scopeName),
      },
      success('hooks.ts', 'created'),
    )

    await update(
      'redux/export-hooks.txt',
      path(`redux/hooks.ts`),
      {
        name: config.scopeName,
      },
      success('hooks.ts', 'updated'),
    )

    await update(
      'redux/export-sagas.txt',
      path(`redux/sagas.ts`),
      {
        name: config.scopeName,
      },
      success('sagas.ts', 'updated'),
    )

    await update(
      'redux/export-reducer.txt',
      path(`redux/reducers.ts`),
      {
        name: config.scopeName,
      },
      success('reducer.ts', 'updated'),
    )
  } else {
    spinner.error({
      text: 'the folder already exists',
    })
  }
}
