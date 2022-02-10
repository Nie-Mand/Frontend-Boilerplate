import { createReduxHistoryContext } from 'redux-first-history'
import { createBrowserHistory } from 'history'

const { routerReducer, routerMiddleware, createReduxHistory } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  })

export { routerReducer, routerMiddleware, createReduxHistory }
