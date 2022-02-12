import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import * as reducers from './reducers'
import * as sagas from './sagas'
import { routerReducer as router } from './router'
export { customMiddleware } from './middleware'
export { routerMiddleware, createReduxHistory } from './router'

export const reducer = combineReducers({
  router,
  ...reducers,
})

export function* saga() {
  yield all([...Object.values(sagas).map(saga => saga())])
}
