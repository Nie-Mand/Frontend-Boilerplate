import * as Path from 'path'
import * as Fs from 'fs/promises'
import glob from 'glob'
const path = (_path: string) => Path.resolve(__dirname, '../', _path)

const collect = async () => {
  const en: Messages = JSON.parse(
    await Fs.readFile(path('locales/en.json'), 'utf8'),
  )

  await glob('src/**/messages.json', async (_, paths) => {
    for (const path of paths) {
      const ns = path.split('/')[2]
      const content = JSON.parse(await Fs.readFile(path, 'utf8'))
      en[ns] = content
    }
    await Fs.writeFile(path('locales/en.json'), JSON.stringify(en, null, 2))
    await Fs.writeFile(path('locales/fr.json'), JSON.stringify(en, null, 2))
  })
}

collect()

type Messages = {
  [key: string]: any
}
