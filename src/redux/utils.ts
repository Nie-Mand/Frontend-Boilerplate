const createAsyncActionType = (actionName: string) => ({
  failure: `${actionName}_FAILURE`,
  request: `${actionName}_REQUEST`,
  success: `${actionName}_SUCCESS`,
  reset: `${actionName}_RESET`,
})

const createBasicActionType = (actionName: string) => actionName

export const createActionType = (prefix: string) => {
  return {
    async: (action: string) => createAsyncActionType(`${prefix}_${action}`),
    basic: (action: string) => createBasicActionType(`${prefix}_${action}`),
  }
}

export const actionsCreator = () => {
  const empty = (type: string) => () => ({ type })
  const withPayload =
    <T>(type: string) =>
    (payload: T) => ({ type, payload })

  return {
    empty,
    withPayload,
  }
}
