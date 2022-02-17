import * as Path from 'path'
import * as Fs from 'fs/promises'
import glob from 'glob'
import flatten from 'flat'

const path = (_path: string) => Path.resolve(__dirname, '../', _path)

const collect = async () => {
  const _en: Messages = JSON.parse(
    await Fs.readFile(path('locales/en.json'), 'utf8'),
  )

  const en: FlattenMessage = flatten(_en)

  console.log(en)

  await glob('src/**/messages.json', async (_, _paths) => {
    const paths = _paths.map(path => ({
      loc: path,
      ns: path.split('/').slice(2, -1).join('.'),
    }))

    for (const path of paths) {
      const _content: ScopedMessage = JSON.parse(
        await Fs.readFile(path.loc, 'utf8'),
      )

      const content: FlattenMessage = {}

      for (const [key, value] of Object.entries(_content)) {
        content[key] = value.defaultMessage
      }

      console.log(content)

      // if (isEmpty(content)) {
      //   console.log('nothing')
      // } else {
      //   console.log(content)
      // }

      // if (en[path.ns]) {
      //   console.log('used')
      // } else {
      //   console.log('unused')
      // }

      en[path.ns] = content.defaultMessage
    }

    await Fs.writeFile(path('locales/en.json'), JSON.stringify(en, null, 2))
    await Fs.writeFile(path('locales/fr.json'), JSON.stringify(en, null, 2))

    console.log(
      `${paths.length} messages collected, written to ${path(
        'locales/en.json',
      )}`,
    )
  })
}

collect()

type Messages = {
  [key: string]: any
}

type FlattenMessage = {
  [key: string]: string
}

type ScopedMessage = {
  [key: string]: {
    id: string
    defaultMessage: string
  }
}
