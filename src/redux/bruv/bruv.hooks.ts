import { useEffect, useCallback, useMemo } from 'react'
import * as bruvActions from './bruv.actions'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { type State } from './bruv.state'

export const useBruv = () => {
  const actions = useActions()
  const state = useSelector<{ bruv: State }>(({ bruv }) => bruv)

  const createBruv = useCallback(actions.createBruv, [])

  return {
    createBruv,
    state,
  }
}

const useActions = () => {
  const dispatch = useDispatch()
  const actions = useMemo(() => {
    return bindActionCreators(bruvActions, dispatch)
  }, [bruvActions, dispatch])

  return actions
}
