import question from 'inquirer'
import { createReduxScope } from './createReduxScope'
import { createPage } from './createPage'
import { createComponent } from './createComponent'

const main = async () => {
  const request = await question.prompt([
    {
      type: 'list',
      name: 'requested',
      message: 'What do you want to create?',
      choices: ['route', 'feature', 'component'],
    },
  ])
  if (request.requested === 'feature') {
    await createReduxScope()
  } else if (request.requested === 'route') {
    await createPage()
  } else if (request.requested === 'component') {
    await createComponent()
  } else {
    console.log('idk man')
  }
}
main()
