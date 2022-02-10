import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'
import reducer from './reducer'
import saga from './sagas'
import { routerMiddleware, createReduxHistory } from './router'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware)),
)
sagaMiddleware.run(saga)

export const history = createReduxHistory(store)

export default store
