import * as constants from './bruv.constants'
import { actionsCreator } from '../utils'

const creator = actionsCreator()

export const init = creator.empty(constants.init)

export const createBruv = creator.withPayload<{
  message: string
}>(constants.createBruv.request)
