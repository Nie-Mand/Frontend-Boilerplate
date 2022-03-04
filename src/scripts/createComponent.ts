import question from 'inquirer'
import { create } from './utils'
import Path from 'path'
import Fs from 'fs'
import { createSpinner } from 'nanospinner'
import glob from 'glob'

const capitalize = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1)
const path = (_path: string) => Path.resolve(__dirname, '../', _path)

export const createComponent = async () => {
  const { scope } = await question.prompt([
    {
      type: 'list',
      name: 'scope',
      message: 'What is the scope of the component?',
      choices: ['page', 'shared'],
    },
  ])

  if (scope === 'page') {
    glob('src/pages/*', async (_, _pages) => {
      const pages = _pages.map(page => page.split('/').pop())

      const { page } = await question.prompt([
        {
          type: 'list',
          name: 'page',
          message: 'What is the page that this component belongs to?',
          choices: pages,
        },
      ])

      const { name: _name } = await question.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the component?',
          validate: (input: string) => {
            if (input.length === 0) {
              return 'Please enter a name'
            }
            if (
              Fs.existsSync(
                path(`pages/${page}/components/${input.toLowerCase()}`),
              )
            ) {
              return `${input} already exists`
            }
            return true
          },
        },
      ])
      const name = capitalize(_name)

      creator(name, `pages/${page}/components`)
    })
  } else {
    const { name: _name } = await question.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
        validate: (input: string) => {
          if (input.length === 0) {
            return 'Please enter a name'
          }
          if (Fs.existsSync(path(`components/shared/${input.toLowerCase()}`))) {
            return `${input} already exists`
          }
          return true
        },
      },
    ])
    const name = capitalize(_name)

    creator(name, `components/shared`)

    console.log('ok')
  }
}

const creator = async (name: string, root: string) => {
  const spinner = createSpinner(`creating ${name}..\n`).start()

  Fs.mkdirSync(path(`${root}/${name}`))

  const pathOf = (filename: string) => path(`${root}/${name}/${filename}`)

  const success = (file: string, action: string) => (e: any) => {
    if (e) {
      spinner.error({
        text: e.message,
      })
    } else {
      spinner.success({
        text: action + ' ' + file,
      })
    }
  }

  await create(
    'component/index.txt',
    pathOf('./index.tsx'),
    {
      Name: capitalize(name),
      name,
    },
    success('index.tsx', 'created'),
  )

  await create(
    'component/messages.txt',
    pathOf('./messages.json'),
    {
      Name: capitalize(name),
      name,
    },
    success('messages.json', 'created'),
  )

  await create(
    'component/styled.txt',
    pathOf(`./${capitalize(name)}.styled.tsx`),
    {
      Name: capitalize(name),
      name,
    },
    success(`${capitalize(name)}.styled.tsx`, 'created'),
  )

  await create(
    'component/test.txt',
    pathOf(`./${capitalize(name)}.test.tsx`),
    {
      Name: capitalize(name),
      name,
    },
    success(`${capitalize(name)}.test.tsx`, 'created'),
  )

  const oldContent = await Fs.readFileSync(path(`${root}/index.ts`), 'utf8')

  await Fs.writeFile(
    path(`${root}/index.ts`),
    oldContent + `export { default as ${capitalize(name)} } from './${name}'\n`,
    success('components/index.ts', 'updated'),
  )
}
