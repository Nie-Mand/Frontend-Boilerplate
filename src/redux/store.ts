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

import { History } from 'history'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(customMiddleware),
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routerMiddleware),
  ),
)

sagaMiddleware.run(saga)

export const history: History = createReduxHistory(store)

export default store
