import * as constants from './mena.constants'
import { actionsCreator } from '../utils'

const creator = actionsCreator()

export const init = creator.empty(constants.init)

export const createMena = creator.withPayload<{
  message: string
}>(constants.createMena.request)
