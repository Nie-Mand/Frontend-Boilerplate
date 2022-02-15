import produce from 'immer'
import { Action } from 'app/types/redux'
import * as constants from './mena.constants'
import initialState from './mena.state'
import toast from 'react-hot-toast'

export const reducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.init:
        toast('init')
        break

      case constants.createMena.request:
        toast('request')
        break

      case constants.createMena.failure:
        toast('failed')
        break

      case constants.createMena.success:
        toast('successed')
        break

      default:
        break
    }
  })
