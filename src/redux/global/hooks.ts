import { useEffect, useCallback, useMemo } from 'react'
import * as actions from './actions'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useExample = () => {
  const dispatch = useDispatch()
  const _actions = useMemo(() => {
    return bindActionCreators(actions, dispatch)
  }, [actions, dispatch])

  useEffect(() => {
    _actions.init()
    return () => {
      _actions.resetInit()
    }
  }, [])
}
