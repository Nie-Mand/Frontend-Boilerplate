import produce from 'immer'
import { Action } from 'types/redux'
import * as constants from './constants'
import initialState from './initial'
import toast from 'react-hot-toast'

const reducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.init.request:
        toast('init.request')
        break

      case constants.init.reset:
        toast('init.reset')
        break

      case constants.init.failure:
        toast('init.failed')
        break

      case constants.init.success:
        toast('init.successed')
        break

      default:
        break
    }
  })

export default reducer
