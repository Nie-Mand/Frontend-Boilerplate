import { useEffect, useCallback, useMemo } from 'react'
import * as menaActions from './mena.actions'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { type State } from './mena.state'

export const useMena = () => {
  const actions = useActions()
  const state = useSelector<{ mena: State }>(({ mena }) => mena)

  const createMena = useCallback(actions.createMena, [])

  return {
    createMena,
    state,
  }
}

const useActions = () => {
  const dispatch = useDispatch()
  const actions = useMemo(() => {
    return bindActionCreators(menaActions, dispatch)
  }, [menaActions, dispatch])

  return actions
}
