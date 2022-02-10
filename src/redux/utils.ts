export const createAsyncAction = (actionName: string) => ({
  failure: `${actionName}_FAILURE`,
  request: `${actionName}_REQUEST`,
  success: `${actionName}_SUCCESS`,
  reset: `${actionName}_RESET`,
})
