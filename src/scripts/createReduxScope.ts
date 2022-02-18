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
      name: 'feature',
      message: 'What is the name of the feature?',
      default: 'example',
    },
  ])

  const feature = config.feature.toLowerCase()

  const spinner = createSpinner(`creating ${feature}..\n`).start()

  const exists = Fs.existsSync(path(`redux/${feature}`))

  if (!exists) {
    Fs.mkdirSync(path(`redux/${feature}`))

    const pathOf = (filename: string) => path(`redux/${feature}/${filename}`)

    const filePath = (file: string) => `/${feature}.${file}`

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

    const stateContent = await Fs.readFileSync(path('redux/state.ts'), 'utf8')

    const lines = stateContent.trim().split('\n')
    const ended = lines.pop()
    lines.unshift(
      `import { ${capitalize(
        feature,
      )}State } from './${feature}/${feature}.state'`,
    )
    lines.push(`  ${feature}: ${capitalize(feature)}State`, ended || '')

    await Fs.writeFile(
      path('redux/state.ts'),
      lines.join('\n'),
      success('state.ts', 'updated'),
    )

    await create(
      'redux/constants.txt',
      pathOf(filePath('constants.ts')),
      {
        Name: capitalize(feature),
        NAME: feature.toUpperCase(),
      },
      success('constants.ts', 'created'),
    )

    await create(
      'redux/actions.txt',
      pathOf(filePath('actions.ts')),
      {
        name: feature,
        Name: capitalize(feature),
      },
      success('actions.ts', 'created'),
    )

    await create(
      'redux/reducer.txt',
      pathOf(filePath('reducer.ts')),
      {
        name: feature,
        Name: capitalize(feature),
      },
      success('reducer.ts', 'created'),
    )

    await create(
      'redux/state.txt',
      pathOf(filePath('state.ts')),
      {
        Name: capitalize(feature),
      },
      success('state.ts', 'created'),
    )

    await create(
      'redux/services.txt',
      pathOf(filePath('services.ts')),
      {
        Name: capitalize(feature),
      },
      success('services.ts', 'created'),
    )

    await create(
      'redux/sagas.txt',
      pathOf(filePath('sagas.ts')),
      {
        name: feature,
        Name: capitalize(feature),
      },
      success('sagas.ts', 'created'),
    )

    await create(
      'redux/hooks.txt',
      pathOf(filePath('hooks.ts')),
      {
        name: feature,
        Name: capitalize(feature),
      },
      success('hooks.ts', 'created'),
    )

    await update(
      'redux/export-hooks.txt',
      path(`redux/hooks.ts`),
      {
        name: feature,
      },
      success('hooks.ts', 'updated'),
    )

    await update(
      'redux/export-sagas.txt',
      path(`redux/sagas.ts`),
      {
        name: feature,
      },
      success('sagas.ts', 'updated'),
    )

    await update(
      'redux/export-reducer.txt',
      path(`redux/reducers.ts`),
      {
        name: feature,
      },
      success('reducer.ts', 'updated'),
    )
  } else {
    spinner.error({
      text: 'the folder already exists',
    })
  }
}
