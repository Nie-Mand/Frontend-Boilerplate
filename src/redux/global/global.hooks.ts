import { useEffect, useCallback, useMemo } from 'react'
import * as globalActions from './global.actions'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { type State } from './global.state'

export const useExample = () => {
  const actions = useActions()
  const state = useSelector((state: State) => state)

  const createUser = useCallback(payload => {
    actions.createUser(payload)
  }, [])

  return {
    createUser,
    state,
  }
}

const useActions = () => {
  const dispatch = useDispatch()
  const actions = useMemo(() => {
    return bindActionCreators(globalActions, dispatch)
  }, [globalActions, dispatch])

  return actions
}
