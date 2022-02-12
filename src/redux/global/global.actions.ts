import * as constants from './global.constants'
import { actionsCreator } from '../utils'

const creator = actionsCreator()

export const init = creator.empty(constants.init)

export const createUser = creator.withPayload<{
  name: string
  age: number
}>(constants.createUser.request)

export const updateUser = creator.withPayload<{
  id: number
}>(constants.createUser.request)
