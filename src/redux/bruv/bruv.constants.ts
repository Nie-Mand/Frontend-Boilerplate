import { createActionType } from '../utils'

const prefix = 'BRUV'
const create = createActionType(prefix)

export const init = create.basic('INIT')
export const createBruv = create.request('CREATE_BRUV')
