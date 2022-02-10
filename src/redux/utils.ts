import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

export const createAsyncAction = (actionName: string) => ({
  failure: `${actionName}_FAILURE`,
  request: `${actionName}_REQUEST`,
  success: `${actionName}_SUCCESS`,
  reset: `${actionName}_RESET`,
})

// FIXME: add typings to useActions
export const useActions = (actions: any) => {
  const dispatch = useDispatch()
  return useMemo(() => {
    return bindActionCreators(actions, dispatch)
  }, [actions, dispatch])
}
