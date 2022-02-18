import { useEffect, useCallback, useMemo } from 'react'
import * as globalActions from './global.actions'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import State from '../state'
import { createSelector } from 'reselect'

export const useExample = () => {
  const actions = useActions()

  const state = useSelector(
    createSelector(
      (state: State) => state.global,
      state => {
        return state.isAuthentificated
          ? 'authentificated'
          : 'not authentificated'
      },
    ),
  )

  const createUser = useCallback(actions.createUser, [])

  return {
    createUser,
    state: state,
  }
}

const useActions = () => {
  const dispatch = useDispatch()
  const actions = useMemo(() => {
    return bindActionCreators(globalActions, dispatch)
  }, [globalActions, dispatch])

  return actions
}
