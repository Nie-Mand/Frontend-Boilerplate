import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'
import {
  reducer,
  saga,
  customMiddleware,
  routerMiddleware,
  createReduxHistory,
} from './config'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(customMiddleware, sagaMiddleware, routerMiddleware),
  ),
)

sagaMiddleware.run(saga)

export const history = createReduxHistory(store)

export default store
