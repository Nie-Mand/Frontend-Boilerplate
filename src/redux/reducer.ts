import { combineReducers } from 'redux'
import global from './global/reducer'
import { routerReducer as router } from './router'

const reducer = combineReducers({
  global,
  router,
})

export default reducer
