import { createActionType } from '../utils'

const prefix = 'MENA'
const create = createActionType(prefix)

export const init = create.basic('INIT')
export const createMena = create.async('CREATE_MENA')
