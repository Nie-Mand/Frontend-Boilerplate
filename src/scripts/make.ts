import question from 'inquirer'
import { createReduxScope } from './createReduxScope'

const main = async () => {
  const request = await question.prompt([
    {
      type: 'list',
      name: 'requested',
      message: 'What do you want to create?',
      choices: ['feature', 'route'],
    },
  ])
  if (request.requested === 'feature') {
    await createReduxScope()
  } else {
    console.log('idk man')
  }
}
main()
