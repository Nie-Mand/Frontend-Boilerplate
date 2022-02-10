import { AsyncState } from 'types/redux'

const state: State = {
  isAuthentificated: null,
  login: {
    loading: false,
    error: null,
    data: null,
  },
}
export default state

type State = {
  isAuthentificated: boolean | null
  login: AsyncState<null>
}
