import * as constants from './constants'

export const init = () => ({
  type: constants.init.request,
})

export const resetInit = () => ({
  type: constants.init.reset,
})
