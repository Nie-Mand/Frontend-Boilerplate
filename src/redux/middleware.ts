import { type Middleware } from 'redux'

export const customMiddleware: Middleware = () => next => action => {
  console.log('action:', action)
  next(action)
}
