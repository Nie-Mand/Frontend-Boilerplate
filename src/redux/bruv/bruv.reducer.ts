import produce from 'immer'
import { Action } from 'app/types/redux'
import * as constants from './bruv.constants'
import initialState from './bruv.state'
import toast from 'react-hot-toast'

export const reducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.init:
        toast('init')
        break

      case constants.createBruv.request:
        toast('request')
        break

      case constants.createBruv.failure:
        toast('failed')
        break

      case constants.createBruv.success:
        toast('successed')
        break

      default:
        break
    }
  })
