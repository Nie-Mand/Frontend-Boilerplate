import { useEffect, useCallback } from 'react'
import * as actions from './actions'
import { useSelector } from 'react-redux'
import { useActions } from '../utils'

export const useExample = () => {
  const _actions = useActions(actions)

  useEffect(() => {
    _actions.init()
    return () => _actions.reset()
  }, [])
}
