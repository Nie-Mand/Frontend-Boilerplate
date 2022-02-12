import question from 'inquirer'
import { create, update } from './utils'
import Path from 'path'
import Fs from 'fs'
import { createSpinner } from 'nanospinner'

const main = async () => {
  const request = await question.prompt([
    {
      type: 'list',
      name: 'requested',
      message: 'What do you want to create?',
      choices: ['route', 'service'],
    },
  ])

  if (request.requested === 'route') {
    await createRoute()
  } else {
    console.log('idk man')
  }
}
main()

// create a route
const createRoute = async () => {
  const config = await question.prompt([
    {
      type: 'input',
      name: 'routeName',
      message: 'What is the name of the route?',
      default: 'my-route',
    },
    {
      type: 'input',
      name: 'routePath',
      message: 'What is the path of the route?',
      default: (current: { routeName: string }) => `/${current.routeName}`,
    },
  ])

  const spinner = createSpinner(`creating ${config.routeName}..`).start()

  const path = Path.resolve(__dirname, '../routes/', config.routeName)
  const exists = Fs.existsSync(path)
  if (!exists) {
    Fs.mkdirSync(path)

    const pathOf = (fileName: string) =>
      Path.resolve(__dirname, '../routes/', fileName)

    await create(
      'route/config',
      pathOf(config.routeName + '/config.ts'),
      config,
      () => {
        spinner.success({
          text: 'created ' + pathOf(config.routeName + '/config.ts'),
        })
      },
    )
    await create(
      'route/controllers',
      pathOf(config.routeName + '/controllers.ts'),
      config,
      () => {
        spinner.success({
          text: 'created ' + pathOf(config.routeName + '/controllers.ts'),
        })
      },
    )
    await create(
      'route/index',
      pathOf(config.routeName + '/index.ts'),
      config,
      () => {
        spinner.success({
          text: 'created ' + pathOf(config.routeName + '/index.ts'),
        })
      },
    )
    await create(
      'route/options',
      pathOf(config.routeName + '/options.ts'),
      config,
      () => {
        spinner.success({
          text: 'created ' + pathOf(config.routeName + '/options.ts'),
        })
      },
    )
    await update('route/export', pathOf('index.ts'), config, () => {
      spinner.success({ text: 'updated' + pathOf('index.ts') })
    })
  } else {
    spinner.error({
      text: 'route already exists (probably the folder already exists)',
    })
  }
}
