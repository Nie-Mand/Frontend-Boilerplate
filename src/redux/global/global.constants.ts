import { createActionType } from '../utils'

const prefix = 'GLOBAL'
const create = createActionType(prefix)

export const init = create.basic('INIT')
export const createUser = create.request('CREATE_USER')
